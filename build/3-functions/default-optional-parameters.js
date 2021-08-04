"use strict";
function sendMail(recipient, subject, anotherRecipient) {
    if (subject === void 0) { subject = 'Sem assunto'; }
    console.log({
        recipient: recipient,
        subject: subject,
        anotherRecipient: anotherRecipient,
    });
}
sendMail('joao@teste.teste');
sendMail('joao@teste.teste', 'Assunto X');
sendMail('joao@teste.teste', 'Assunto Y', 'pedro@teste.teste');
//# sourceMappingURL=default-optional-parameters.js.map