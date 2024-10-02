const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector('#qr-code img');

// Events

function generateQrCode() {
	const qrCodeInputValue = qrCodeInput.value;
	if (!qrCodeInputValue) {
		return alert('Enter a value!!!');
	}

	qrCodeBtn.innerText = 'Generating code...';

	qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

	qrCodeImg.addEventListener('load', () => {
		container.classList.add('active');
		qrCodeBtn.innerText = 'Code created!';
		qrCodeInput.value = '';
	});

	qrCodeInput.addEventListener('keydown', (e) => {
		qrCodeBtn.innerText = 'Generate';
	});
}

qrCodeInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		generateQrCode();
	}
});

qrCodeBtn.addEventListener('click', () => {
	generateQrCode();
});
