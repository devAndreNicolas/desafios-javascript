const usuarios = ['user1', 'teste_user', 'exemplo123'];

function verificarUsuario(nome) {
  const regex = /^[A-Za-z][A-Za-z0-9_]{2,30}[A-Za-z0-9]$/;
  const temLetra = /[A-Za-z]/.test(nome);
  const temNumero = /[0-9]/.test(nome);
  const temUnderscore = /_/.test(nome);
  if (
    regex.test(nome) &&
    temLetra &&
    temNumero &&
    temUnderscore &&
    !usuarios.includes(nome)
  ) {
    return true;
  }
  return false;
}

console.log(verificarUsuario("User_123"));
console.log(verificarUsuario("User123"));
console.log(verificarUsuario("U_1"));
console.log(verificarUsuario("1User_123"));
console.log(verificarUsuario("User_"));
console.log(verificarUsuario("exemplo123"));
console.log(verificarUsuario("ab"));
console.log(verificarUsuario("User_123456789012345678901234567"));
