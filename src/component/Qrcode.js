const QRCode = require("qrcode");

const whatsappNumber = "7654526860"; 
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Amresh%2C%20I%20want%20to%20connect%20with%20you`;

QRCode.toFile(
  "whatsappQR.png",
  whatsappLink,
  {
    color: {
      dark: "#325a68ff",
      light: "#ffffff",
    },
  },
  function (err) {
    if (err) throw err;
    console.log(" WhatsApp QR Code generated: whatsappQR.png");
  }
);
