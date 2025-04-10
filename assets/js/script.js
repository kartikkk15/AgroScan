document.getElementById("qrForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let productName = document.getElementById("productName").value;
    let productWeight = document.getElementById("productWeight").value;
    let productPrice = document.getElementById("productPrice").value;
    let availability = document.getElementById("availability").value;
    let farmLocation = document.getElementById("farmLocation").value;
    let contactInfo = document.getElementById("contactInfo").value;

    let qrData = `Product: ${productName}\nWeight: ${productWeight}\nPrice: $${productPrice}\nAvailability: ${availability}\nLocation: ${farmLocation}\nContact: ${contactInfo}`;

    let qrCanvas = document.getElementById("qrCanvas");
    qrCanvas.innerHTML = "";
    
    let qrCode = new QRCode(qrCanvas, {
        text: qrData,
        width: 256,
        height: 256
    });

    document.getElementById("qrResult").style.display = "block";
});

document.getElementById("downloadQR").addEventListener("click", function() {
    let canvas = document.querySelector("#qrCanvas canvas");
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "product_qr.png";
    link.click();
});
