var data = new Date();

var dia = data.getDate();
var mes = data.getMonth() + 1;

var resultado = '';
if ((dia >= 22 && mes === 3) || mes === 4 || mes === 5 || (dia <= 21 && mes === 6)) {
  resultado = 'Outono';
} else if ((dia >= 22 && mes === 6) || mes === 7 || mes === 8 || (dia <= 21 && mes === 9)) {

  resultado = 'Inverno';
} else if ((dia >= 22 && mes === 9) || mes === 10 || mes === 11 || (dia <= 21 && mes === 12)) {
 
  resultado = 'Primavera';
} else {
  resultado = 'Verão';
}

alert(`Estamos no(a): ${resultado}`);