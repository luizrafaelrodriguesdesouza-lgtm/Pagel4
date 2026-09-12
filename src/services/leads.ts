import pb from '@/lib/pocketbase/client'

export interface LeadInput {
  name: string
  email: string
  phone: string
  company: string
  message?: string
  daily_clients?: string
  agents_count?: string
  goal?: string
}

export const createLead = async (data: LeadInput) => {
  // 1. Sanitize & format data for PocketBase leads collection
  const sanitized = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    company: data.company.trim(),
    message: [
      data.message?.trim(),
      data.daily_clients ? `Clientes/dia: ${data.daily_clients}` : null,
      data.agents_count ? `Atendentes: ${data.agents_count}` : null,
      data.goal ? `Objetivo: ${data.goal}` : null,
    ]
      .filter(Boolean)
      .join('\n'),
  }

  // 2. Persist in PocketBase leads collection (triggers lead_forward hook to n8n)
  const pbRecord = await pb.collection('leads').create(sanitized)

  // 3. Direct fire-and-forget attempt to n8n form endpoint in case browser has direct network access
  try {
    const n8nWebhookUrl =
      'https://n8n-n8n.sd3ni9.easypanel.host/form/93cbdace-782c-4b58-8d35-6e77ebc589fa'
    fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: pbRecord.id,
        nome: sanitized.name,
        email: sanitized.email,
        telefone: sanitized.phone,
        empresa: sanitized.company,
        observacao: sanitized.message,
        'quantos clientes atende por dia?': data.daily_clients || 'de 31 a 60 clientes',
        'Quantos atendentes terão login na plataforma?': data.agents_count || 'Até 4 atendentes',
        'Qual motivo de Utilizar o sistema?':
          data.goal || 'Usar um assistente de IA (Inteligência Artificial)para efetuar vendas',
        'Quer fazer Pesquisa de NPS no final do atendimento?': 'Sim',
        'Quer salvar os contatos na conta do google de forma automática?': 'Sim',
        'Pretende fazer disparos em massa?': 'Não',
        'Nome da Empresa': sanitized.company,
        Email: sanitized.email,
        'Responsável pelo Preenchimento': sanitized.name,
        'Telefone para contato (ddd+número)': sanitized.phone,
      }),
      mode: 'no-cors',
    }).catch(() => {
      // Ignored: pbRecord already safely saved and hook takes care of it
    })
  } catch (_) {
    // Non-blocking
  }

  return pbRecord
}
