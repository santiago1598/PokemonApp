/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=28";

const appNode = document.querySelector("#app")
appNode.className = "row"



 window.fetch(`${urlBase}`)
 .then((respuesta) => respuesta.json())
 .then(responseJson =>{
     const todosLosItems = [];
     
     responseJson.results.forEach((item) => {
         const urlPokemon = item.url;
         const imagen = document.createElement('img');
          imagen.style ="width: 200px; height: 200px; border: 5px solid white; border-radius: 50%; margin-top: calc(-100px - 5px); background-color: white;";
         
         //titulo
         const title = document.createElement('h2');
         title.className = "card-title";
         title.style.textTransform = "Capitalize";
         title.style.fontSize = " 1.8rem";
         title.textContent = item.name+" ";
         
         const p = document.createElement('p');

         const cardFooter = document.createElement('div')
         cardFooter.style ="display: flex;   justify-content: space-around;";
         cardFooter.className = "card-footer";

        window.fetch(`${urlPokemon}`)
        .then((respuesta) => respuesta.json())
        .then(responseJson =>{
           console.log(responseJson)
           //imagen
           imagen.src = `${responseJson.sprites.front_default}`;

            const span = document.createElement("span");
            span.style.color = "Gray";
            span.style.fontWeight = "400";
            span.textContent = responseJson.stats[0].base_stat+responseJson.stats[0].stat.name;
            
            p.style.color = "Gray";
            p.style.fontWeight = "400";
            p.textContent = responseJson.stats[1].base_stat+" "+responseJson.stats[1].stat.name;
            title.append(span)
            
            for (let index = 3; index < 6; index++) {
                const divSocial = document.createElement("div");
                divSocial.className = "card-footer-social";
                
                const h3 = document.createElement("h3");
                h3.textContent = responseJson.stats[index].base_stat
                const p_fot = document.createElement("p");
                p_fot.textContent = responseJson.stats[index].stat.name;
                
                divSocial.append(h3,p_fot);

                cardFooter.append(divSocial);
            }
       
        })

        //card
         const background = document.createElement('span');
         background.style ="background: red; width:100%;height:100px;";
         
        //card
         const div_col = document.createElement('div');
         div_col.className = "col-md-3";

        //card
         const card = document.createElement('div');
         card.style.margin = "10px";
         card.className = "card";

         const cardBbody = document.createElement('div')
         cardBbody.className = "card-body";
         cardBbody.append(imagen,title,p);

       


         card.append(background,cardBbody,cardFooter);
         div_col.append(card);

         todosLosItems.push(div_col);
     });

     appNode.append(...todosLosItems);
});