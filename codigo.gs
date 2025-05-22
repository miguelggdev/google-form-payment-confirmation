// Configuración de Twilio
const TWILIO_ACCOUNT_SID = 'TU_ACCOUNT_SID'; // Reemplaza con tu Account SID
const TWILIO_AUTH_TOKEN = 'TU_AUTH_TOKEN';   // Reemplaza con tu Auth Token
const TWILIO_WHATSAPP_NUMBER = 'whatsapp:+14155238886'; // Sandbox de Twilio

// Función que se ejecuta al enviar el formulario
function onFormSubmit(e) {
  const sheet = e.source.getActiveSheet();
  const row = e.range.getRow();
  const data = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];

  // Orden de columnas según el formulario
  const nombreDeportista = data[0];
  const documentoTI = data[1];
  const club = data[2];
  const categoria = data[3];
  const fechaPago = data[4];
  const valorPago = data[5];
  const concepto = data[6];
  const nombrePersonaPaga = data[7];
  const correoElectronico = data[8];
  const telefonoCelular = data[9];

  const fechaGeneracion = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');

  const mensaje = `
Hola ${nombrePersonaPaga},

Gracias por tu pago. Aquí están los detalles:

🟢 Fecha de Generación: ${fechaGeneracion}
🏅 Nombre del Deportista: ${nombreDeportista}
🆔 Documento TI: ${documentoTI}
🏫 Club: ${club}
🏷️ Categoría: ${categoria}
📅 Fecha de Pago: ${fechaPago}
💲 Valor: ${valorPago}
📝 Concepto: ${concepto}
🙋 Persona que paga: ${nombrePersonaPaga}
📧 Correo: ${correoElectronico}
📱 Teléfono: ${telefonoCelular}
`;

  // Enviar correo con PDF
  enviarCorreoPDF(correoElectronico, "Confirmación de Pago", mensaje, {
    nombreDeportista, documentoTI, club, categoria, fechaPago,
    valorPago, concepto, nombrePersonaPaga, correoElectronico,
    telefonoCelular, fechaGeneracion
  });

  // Enviar mensaje WhatsApp
  sendWhatsAppMessage(`whatsapp:${telefonoCelular}`, mensaje);
}

// Enviar mensaje de WhatsApp usando Twilio
function sendWhatsAppMessage(to, body) {
  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;

  const payload = {
    To: to,
    From: TWILIO_WHATSAPP_NUMBER,
    Body: body
  };

  const options = {
    method: 'post',
    headers: {
      Authorization: 'Basic ' + Utilities.base64Encode(TWILIO_ACCOUNT_SID + ':' + TWILIO_AUTH_TOKEN)
    },
    payload: payload
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log(response.getContentText());
  } catch (error) {
    Logger.log("Error al enviar WhatsApp: " + error);
  }
}

// Enviar correo con PDF adjunto
function enviarCorreoPDF(email, subject, mensaje, datos) {
  const html = `
    <html>
    <body>
      <h2>Confirmación de Pago</h2>
      <p>Gracias por tu pago. Aquí están los detalles:</p>
      <ul>
        <li><strong>Fecha:</strong> ${datos.fechaGeneracion}</li>
        <li><strong>Nombre Deportista:</strong> ${datos.nombreDeportista}</li>
        <li><strong>Documento TI:</strong> ${datos.documentoTI}</li>
        <li><strong>Club:</strong> ${datos.club}</li>
        <li><strong>Categoría:</strong> ${datos.categoria}</li>
        <li><strong>Fecha de Pago:</strong> ${datos.fechaPago}</li>
        <li><strong>Valor de Pago:</strong> ${datos.valorPago}</li>
        <li><strong>Concepto:</strong> ${datos.concepto}</li>
        <li><strong>Pagador:</strong> ${datos.nombrePersonaPaga}</li>
        <li><strong>Correo:</strong> ${datos.correoElectronico}</li>
        <li><strong>Teléfono:</strong> ${datos.telefonoCelular}</li>
      </ul>
    </body>
    </html>
  `;

  const blob = Utilities.newBlob(html, 'text/html', 'Recibo.html').getAs('application/pdf').setName('ReciboPago.pdf');

  GmailApp.sendEmail(email, subject, mensaje, {
    htmlBody: html,
    attachments: [blob]
  });
}
