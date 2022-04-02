const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

// Click event listener for clicking the generate button
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerHTML = "Generating QR Code...";

    // API for Create QR
    // `https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=170x170`;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=170x170`;

    // Load Event listener to change the text and active status
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerHTML = "Generate QR Code";
    })
})

