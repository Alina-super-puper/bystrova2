const form = document.forms.formakot;
let array = ["Шмурдяк", "Платон", "Марина", "Муха" , "Ракета" , " Плюх" , "Китти"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.dabavnovkisa.value.trim() !== ''){
    array.push(form.dabavnovkisa.value);
  const p = document.createElement("li");
  p.innerText = form.dabavnovkisa.value;
  vyvod.appendChild(p);
  }
   const kisa = document.getElementById("dabavnovkisa");
  kisa.value = "";
});
  


const poisk = document.getElementById("sobaka");
const vyvod = document.getElementById("conclusion");

poisk.addEventListener("input", () => {
  vyvod.innerHTML = "";
  array.forEach((item) => {
    if (item.toLowerCase().includes(poisk.value.toLowerCase())) {
      const p = document.createElement("li");
      p.innerText = item;
      vyvod.appendChild(p);
    }
  });
});

array.forEach((item) => {
  const p = document.createElement("li");
  p.innerText = item;
  vyvod.appendChild(p);
});