//two essential parts of recursive function
//caso  base o Base Case
//es cuando la condición de la recursión termina

//Diferente input o Different input

let countDown = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  countDown(num - 1);
};
console.log(countDown(5));
//__________________________________________//

function cuentaRegresiva(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
console.log(cuentaRegresiva(5));
