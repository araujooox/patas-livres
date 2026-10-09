// Máscaras de CPF, telefone e CEP (campos com atributo data-mask)
document.querySelectorAll('[data-mask]').forEach(function (campo) {
  campo.addEventListener('input', function () {
    var d = campo.value.replace(/\D/g, '');
    if (campo.dataset.mask === 'cpf') {
      d = d.slice(0, 11).replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (campo.dataset.mask === 'telefone') {
      d = d.slice(0, 11).replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{4,5})(\d{4})$/, '$1-$2');
    } else if (campo.dataset.mask === 'cep') {
      d = d.slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2');
    }
    campo.value = d;
  });
});
