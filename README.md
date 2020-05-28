# Mensageria Pub/Sub (Publish / Subscription Pattern) com Redis


## A principal diferença entre Observer e Pub/Sub

	Observer: Depende do Subject para gerenciar as subscriptions,
	por isso, não consegue tratar alta demanda ou muitas notificação ocorrendo ao mesmo tempo. Pode gerar erro quando o obsever não está disponível

	Pub/Sub: Publish e subscription são independentes, nem sabe como são implementados. Não existe confirmação de recebimento. Possibilidade de tratar milhares da notificações (dependendo da infra disponivel)


### Observer
No padrão **Observer** existe o Subject (objeto de interesse).
O **Subject** monta uma lista de observables, então o Subject conhece todos os observers e quantos são.

Para enviar uma evento para o observer, é preciso utilizar o método `notify()` que fica disponivel no Subject.

### Pub/Sub
*Permite a um aplicativo anunciar eventos para vários consumidores de seu interesse assincronamente, sem acoplar os remetentes aos destinatários.*
No padrão **Pub/Sub** existe um **publicador (Publish)** e um **canal (Channel)**. Qualquer um pode ouvir o canal onde foi emitido um evento e receber a mensagem. Mesmo que não exista ninguem ouvindo o canal, as notificações continuam chegando, o que acaba fazendo com que as mensagens se percam, já que não existe uma confirmação de entrega.



