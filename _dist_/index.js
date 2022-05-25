/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const urlBase = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app")
appNode.className = "mt-10 grid grid-cols-2 gap-2"

const formatPrice = (price) =>{
   const newPrice =  new window.Intl.NumberFormat('en-EN',{
        style:"currency",
        currency:"EUR",
    }).format(price);
    return newPrice;
}
 window.fetch(`${urlBase}/api/avo`)
 .then((respuesta) => respuesta.json())
 .then(responseJson =>{
     const todosLosItems = [];
     responseJson.data.forEach((item) => {
        //imagen
        const imagen = document.createElement('img');
        imagen.className =
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        imagen.src = `${urlBase}${item.image}`;
        //titulo
        const title = document.createElement('h2');
        title.className = "text-lg";
        title.textContent = item.name;
        //price
        const price = document.createElement('div');
        price.className = "text-gray-600";
        price.textContent = formatPrice(item.price);

        const priceAndTitle = document.createElement("div");
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);
 
        //contenedor
         const container = document.createElement('div');
         container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-200";
         container.append(imagen,priceAndTitle);

         todosLosItems.push(container);
     });
     appNode.append(...todosLosItems);
});