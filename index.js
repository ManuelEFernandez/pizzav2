const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const formPizzas = document.getElementById("formPizzas");
const numeroPizza = document.getElementById("idPizza");
const imgTarjeta = document.getElementById("img-tarjeta");
const listaIngredientes = document.getElementById("lista-ingredientes");
const ingredientes = document.getElementById("ingredientes");
const pizzas = [
    {
      id: 1,
      nombre: "Muzzarella",
      ingredientes: ["Queso muzarella", "Aceitunas verdes", "Orégano"],
      precio: 1000,
      imagen: "/muzza.jpg",
      alt: "pizza muzzarella",
    },
  
    {
      id: 2,
      nombre: "Napolitana",
      ingredientes: ["Queso muzarella", "Aceitunas negras", "Tomate", "Ajo"],
      precio: 1100,
      imagen: "/napo.jpg",
      alt: "pizza napolitana",
    },
  
    {
      id: 3,
      nombre: "Provolone",
      ingredientes: ["Queso muzarella", "Queso provolone", "Aceitunas verdes"],
      precio: 1100,
      imagen: "/provolone.jpg",
      alt: "pizza provolone",
    },
  
    {
      id: 4,
      nombre: "Jamón y morrones",
      ingredientes: ["Queso muzarella", "Jamón", "Morrones", "Orégano"],
      precio: 1200,
      imagen: "/morrones.jpg",
      alt: "pizza morrones",
    },
  
    {
      id: 5,
      nombre: "Calabresa",
      ingredientes: ["Queso muzarella", "Queso provolone", "Longaniza"],
      precio: 1300,
      imagen: "/calabresa.jpg",
      alt: "pizza calabresa",
    },
  
    {
      id: 6,
      nombre: "Fugazzetta (porción)",
      ingredientes: ["Queso muzarella", "Jamón"],
      precio: 400,
      imagen: "/fugazzeta.jpg",
      alt: "pizza fugazzeta",
    },
  ];
  

const comprobarPizza = () => {

    listaIngredientes.innerHTML = "";
    if (pizzas.some((numero) => numero.id == idPizza)) {

        let pizzaAMostrar = pizzas.find((numero) => numero.id == idPizza);
        imgTarjeta.innerHTML = "";
       let  precioPizzaAMostrar = pizzaAMostrar.precio;
       let  nombrePizzaAMostrar = pizzaAMostrar.nombre;
       nombrePizza.classList.remove("error");
       precioPizza.classList.remove("error");
       nombrePizza.textContent = nombrePizzaAMostrar;
       precioPizza.textContent = `$${precioPizzaAMostrar}`;
       imgTarjeta.innerHTML = `<img src="${pizzaAMostrar.imagen}" alt="${pizzaAMostrar.imagen}">`
       ingredientes.innerHTML = `<h2>Ingredientes</h2>`
        
       pizzaAMostrar.ingredientes.forEach((ingrediente) => {

        listaIngredientes.innerHTML += `<li>${ingrediente}</li>`
       })

      

    }

    else {
        imgTarjeta.innerHTML = "";
        nombrePizza.classList.add("error");
        precioPizza.classList.add("error");
        nombrePizza.textContent = "No hay pizza con ese id";
        precioPizza.textContent = " ";
        imgTarjeta.innerHTML = `<img src="/hutz.PNG" alt="Lionel Hutz">`;
    }
};


const submitForm = (e) => {
    
    e.preventDefault();
    idPizza = numeroPizza.value;
    comprobarPizza();

    

}

const init = () => {
    
    formPizzas.addEventListener("submit", submitForm);
    localStorage.setItem("Pizzas", JSON.stringify(pizzas));
    
    }
    
    init();