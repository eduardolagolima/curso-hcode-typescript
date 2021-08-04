function sendMail(
    recipient: string,
    subject: string = 'Sem assunto',
    anotherRecipient?: string
): void {
    console.log({
        recipient,
        subject,
        anotherRecipient,
    });
}

sendMail('joao@teste.teste');
sendMail('joao@teste.teste', 'Assunto X');
sendMail('joao@teste.teste', 'Assunto Y', 'pedro@teste.teste');
