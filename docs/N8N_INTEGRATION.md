# Integração n8n — Notificações WhatsApp e Feedback

## Visão Geral

O sistema envia notificações automáticas via WhatsApp para clientes quando o status de uma entrega muda. As notificações são disparadas por um hook do PocketBase e enviadas para um webhook do n8n, que processa o envio via WhatsApp.

## 1. Webhook de Notificação (Saída)

### Configuração

1. Acesse `/config` no app e faça login como administrador.
2. Insira a URL do webhook do seu n8n no campo "Webhook URL".
3. Ative/desative os tipos de notificação conforme necessário.

### Payload enviado (POST) para o webhook do n8n

Quando o status muda para **"andamento"** (pré-entrega):

```json
{
  "customer_name": "Nome do Cliente",
  "phone": "+5521999999999",
  "delivery_status": "andamento",
  "message": "A sua entrega é a próxima a ser realizada! Prepare-se."
}
```

Quando o status muda para **"concluida"** (pós-entrega):

```json
{
  "customer_name": "Nome do Cliente",
  "phone": "+5521999999999",
  "delivery_status": "concluida",
  "message": "Sua entrega foi concluída! Como foi a experiência? Responda com uma nota de 1 a 5."
}
```

### Como configurar no n8n

1. Crie um workflow com um trigger **Webhook** (POST).
2. Use o nó **WhatsApp** (ou HTTP Request para sua API de WhatsApp) para enviar a mensagem.
3. Use os campos `phone` e `message` do payload.

## 2. Endpoint de Feedback (Entrada)

Após o cliente responder com uma nota, o n8n deve enviar o feedback de volta para o app.

### URL do endpoint

```
POST {BACKEND_URL}/backend/v1/deliveries/feedback
```

### Payload esperado

```json
{
  "delivery_id": "ID_DA_ENTREGA",
  "rating": 5,
  "comment": "Comentário opcional do cliente"
}
```

- `delivery_id` (string, obrigatório): ID da entrega no PocketBase.
- `rating` (integer, obrigatório): Nota de 1 a 5.
- `comment` (string, opcional): Comentário do cliente.

### Respostas

- `200`: Feedback criado com sucesso.
- `400`: Validação falhou (delivery_id ausente, rating inválido).
- `404`: Entrega não encontrada.
- `500`: Erro interno.

### Como configurar no n8n

1. No workflow que recebe a resposta do cliente via WhatsApp.
2. Extraia a nota (1-5) da mensagem.
3. Use um nó **HTTP Request** para enviar POST para o endpoint de feedback.
4. Inclua o `delivery_id` da entrega original.

## 3. Variáveis de Ambiente

O webhook URL também pode ser configurado via secret do PocketBase:

- Secret: `whatsapp_notification_webhook_url`
- A configuração via interface `/config` tem prioridade sobre o secret.

## 4. Coleções do Banco

- `feedback`: Armazena os feedbacks dos clientes (relação com `deliveries`, rating 1-5, comentário).
- `settings`: Armazena configurações do sistema (chave-valor JSON).
