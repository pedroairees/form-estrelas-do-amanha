const emailInput = document.getElementById('mail');
  const errorMessage = emailInput.closest('.input-wrapper').querySelector('.error');

  function validateEmail() {
    const hasValue = emailInput.value.trim() !== '';
    const isValid = emailInput.checkValidity();

    // Exibe ou oculta a mensagem de erro com base na validade do campo
    if (hasValue && !isValid) {
      errorMessage.style.display = 'flex';
    } else {
      errorMessage.style.display = 'none';
    }
  }

  emailInput.addEventListener('input', validateEmail);
  emailInput.addEventListener('blur', validateEmail); // Adiciona o evento para "blur"