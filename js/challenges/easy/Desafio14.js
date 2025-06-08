class Piloto {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.flyingLicense = false;
  }

  gerarLicenca() {
    if (this.flyingLicense) {
      return "Este piloto já possui uma licença de voo.";
    }

    const sobrenomePart = this.lastName.slice(0, 5).toUpperCase().padEnd(5, '9');
    
    const year = this.birthday.getFullYear().toString();
    const decada = year[year.length - 2];
    
    const mes = (this.birthday.getMonth() + 1).toString().padStart(2, '0');
    
    const ultimoAno = year[year.length - 1];
    
    const primeiraLetra = this.firstName[0].toLowerCase();
    

    this.flyingLicense = `${sobrenomePart}-${decada}${mes}${ultimoAno}.${primeiraLetra}`;
    
    return this.flyingLicense;
  }
}

function executarDesafio14() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const birthday = document.getElementById('birthday').value;

  if (!firstName || !lastName || !birthday) {
    document.getElementById('resultadoLicenca').innerText = "Por favor, preencha todos os campos.";
    return;
  }

  const piloto = new Piloto(firstName, lastName, birthday);
  const licenca = piloto.gerarLicenca();

  document.getElementById('resultadoLicenca').innerHTML = `
    <strong>Licença gerada:</strong> ${licenca}<br><br>
    <strong>Detalhes do piloto:</strong><br>
    Nome: ${piloto.firstName}<br>
    Sobrenome: ${piloto.lastName}<br>
    Data de Nascimento: ${piloto.birthday.toLocaleDateString('pt-BR')}<br>
    Licença: ${piloto.flyingLicense}
  `;
}