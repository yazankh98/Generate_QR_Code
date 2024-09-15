function generateQRCode() {
    const phoneNumber = document.getElementById("phone-number").value;
    if (phoneNumber) {
        // WhatsApp API URL format
        const whatsappURL = `https://wa.me/${phoneNumber}`;

        // Clear previous QR code (if any)
        document.getElementById("qrcode").innerHTML = "";

        // Generate new QR code
        new QRCode(document.getElementById("qrcode"), whatsappURL);
    } else {
        alert("Please enter a phone number.");
    }
}