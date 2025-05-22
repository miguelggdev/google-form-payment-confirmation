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

```bash
git clone https://github.com/tu-usuario/tu-repo-pagos.git
cd tu-repo-pagos
```bash

### .2. ✏️ Edita tus credenciales Twilio
Abre el archivo Codigo.gs y reemplaza:
