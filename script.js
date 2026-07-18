const container = document.getElementById("personagens-container");

fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
    
        data.results.forEach(elemento => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = ` 

                <img src="${elemento.image}" alt="Imagem do personagem">

                <h3> ${elemento.name} </h3>
                    
                <div class="details-container">
                        
                    <div class="details-personagem">
                        <img src="./assets/images/iconAlien.svg" alt="">
                        <span> ${elemento.species} </span>
                    </div>

                    <div class="details-personagem">
                            <img src="./assets/images/iconHeart.svg" alt="">
                            <span> ${elemento.status} </span>
                    </div>

                    <div class="details-personagem">
                            <img src="./assets/images/iconPlanet.svg" alt="">
                            <span> ${elemento.origin.name} </span>
                    </div>
                        
                </div>

            `;

            container.appendChild(card)

        });
})
