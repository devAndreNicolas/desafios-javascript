function validar(s) {
  const pilha = [];
  const mapa = {')':'(',']':'[','}':'{'};
  for (let c of s) {
    if ('([{'.includes(c)) pilha.push(c);
    if (')]}'.includes(c)) {
      if (pilha.pop() !== mapa[c]) return false;
    }
  }
  return pilha.length === 0;
}

console.log(validar("()[]{}"));          
console.log(validar("([{}])"));          
console.log(validar("(]"));              
console.log(validar("([)]"));            
console.log(validar("{[()]}"));          
console.log(validar("{[()]"));           
console.log(validar("abc(def[ghi]{jkl})"));
console.log(validar("abc(def[ghi]{jkl}")); 
