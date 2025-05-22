📘 google-form-payment-confirmation — Confirmación automática por correo y WhatsApp desde Google Forms
# 📄 Confirmación de Pagos Deportivos - Google Forms + WhatsApp + PDF + Email

![License](https://img.shields.io/badge/license-MIT-blue.svg)  
Automatiza la **confirmación de pagos** realizados a través de un **formulario de Google Forms**, enviando:

✅ Un **correo electrónico profesional** con PDF del recibo.  
✅ Un **mensaje de WhatsApp** al número ingresado, usando Twilio.  
✅ Todo se ejecuta automáticamente al enviar el formulario.  

---

## 🚀 ¿Qué hace este proyecto?

Al llenar un formulario de pago de un deportista, este script:

1. Extrae los datos del formulario.
2. Genera un mensaje de confirmación personalizado.
3. Envía ese mensaje al correo y al WhatsApp del pagador.
4. Adjunta un PDF con el resumen del recibo.

---

## 🧩 Tecnologías utilizadas

- Google Apps Script (Gmail, UrlFetchApp)
- Google Forms + Google Sheets
- Twilio API para WhatsApp
- HTML y PDF (recibo profesional)

---

## 📋 Estructura esperada del formulario

| Campo | Descripción |
|-------|-------------|
| Nombre Deportista | Nombre del atleta |
| Documento TI | Identificación |
| Club | Club deportivo |
| Categoría | Categoría del deportista |
| Fecha de Pago | Fecha del pago |
| Valor de Pago | Monto |
| Concepto | Detalle del pago |
| Nombre Persona que Paga | Pagador |
| Correo Electrónico | A quién enviar el correo |
| Teléfono | Para WhatsApp |

---

## 🔧 Pasos para configurar

### 1. 🔁 Clona este repositorio


git clone https://github.com/tu-usuario/tu-repo-pagos.git
cd tu-repo-pagos

---

### 2. ✏️ Edita tus credenciales Twilio

Abre el archivo `Codigo.gs` y reemplaza las siguientes líneas con los datos de tu cuenta Twilio:

```javascript
const TWILIO_ACCOUNT_SID = 'TU_ACCOUNT_SID';
const TWILIO_AUTH_TOKEN = 'TU_AUTH_TOKEN';
const TWILIO_WHATSAPP_NUMBER = 'whatsapp:+14155238886'; // Número del sandbox de Twilio
``` 

📲 Cómo crear y configurar Twilio
🧪 Ve a https://www.twilio.com/try-twilio y crea una cuenta gratuita.

Una vez dentro del dashboard, copia los siguientes valores:

🔑 Account SID
🧬 Auth Token

Activa el sandbox de WhatsApp en:
👉 https://www.twilio.com/console/sms/whatsapp/learn
Verifica tu número siguiendo las instrucciones del sandbox.
Usa el número que Twilio te proporciona, por ejemplo: whatsapp:+14155238886
