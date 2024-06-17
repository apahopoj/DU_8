document.body.innerHTML+="<p>Vypište do stránky všechna čísla.</p>";
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  document.body.innerText+=numbers;
  document.body.innerHTML+="<p>Vypište do stránky druhé mocniny všech čísel.</p>";

numbers.forEach((number) => {
  document.body.innerHTML += `${number**2}, `;
});

document.body.innerHTML+="<p>Vypište do stránky pouze záporná čísla..</p>";

numbers.forEach((number) => {
  if (number<0) {
    document.body.innerHTML += `${number}, `;
  }
});

document.body.innerHTML+="<p>Vypište do stránky absolutní hodnotu všech čísel..</p>";

numbers.forEach((number) => {
  if (number>0) {
    document.body.innerHTML += `${number}, `;
  }
  else {
    document.body.innerHTML += `${-number}, `;
  }
});

document.body.innerHTML+="<p>Vypište do stránky pouze sudá čísla.</p>";

numbers.forEach((number) => {
  if (number%2==0) {
    document.body.innerHTML += `${number}, `;
  }
});

document.body.innerHTML+="<p>Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.</p>";

numbers.forEach((number) => {
  if (number%3==0) {
    document.body.innerHTML += `${number}, `;
  }
});

document.body.innerHTML+="<p>Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.</p>";

numbers.forEach((number) => {
number=number-5 
if (number<0) { number=-number }
document.body.innerHTML += `${number}, `;
});

document.body.innerHTML+="<p>Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.</p>";

numbers.forEach((number) => {
number=number-5 

document.body.innerHTML += `${number**2}, `;
});

document.body.innerHTML+="<p>Spočítejte, kolik je v seznamu záporných čísel.</p>";
function sum (array) {
s=0 
array.forEach (n=>{s+=n}) 
return s 
}
document.body.innerText += sum (numbers.map((number) => {
if (number <0)  {
return 1
}
return 0
}));

document.body.innerHTML+="<p>Spočítejte součet všech čísel v poli.</p>";
document.body.innerText += sum (numbers);

document.body.innerHTML+="<p>Spočítejte průměr všech čísel v poli.</p>";

average=sum (numbers) /numbers.length
document.body.innerText += average;

document.body.innerHTML+="<p>Spočítejte součet všech kladných čísel v poli.</p>";

positive_numbers=numbers.map (number=>{
if (number>0) {
 return number
}
return 0
}) 

document.body.innerText+=sum (positive_numbers);
