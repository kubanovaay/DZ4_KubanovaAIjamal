document.addEventListener("DOMContentLoaded", function() {
    const charactersData = [
        {
            "name": "Сулейман I",
            "title": "Сулейман Великолепный",
            "description": "Османский султан",
            "person_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6ODKdRzXTIt9sSI2ljSPYQIJ8MHw_nJDcw&usqp=CAU"
        },
        {
            "name": "Хюррем Султан",
            "title": "Хюррем Хатун",
            "description": "Жена султана Сулеймана",
            "person_photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3wew5307HpUHPklMaXtu45vdTQGXtRi7Ug&usqp=CAU"
        },
        {
            "name": "Ибрагим Паша",
            "title": "Ибрагим-паша",
            "description": "Визирь и близкий друг султана",
            "person_photo": "https://clutch.net.ua/images/2020/08/22/PqyMfLOLtAcCTg2C3YRELSGZ88XJM7mit0PNRVhi.jpeg"
        }
    ];

    const charactersContainer = document.createElement("div");

    charactersData.forEach(character => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
    });

    document.body.appendChild(charactersContainer);

    function createCharacterCard(character) {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = character.person_photo;
        image.alt = character.name;
        card.appendChild(image);

        const name = document.createElement("h2");
        name.textContent = character.name;
        card.appendChild(name);

        const title = document.createElement("p");
        title.textContent = character.title;
        card.appendChild(title);

        const description = document.createElement("p");
        description.textContent = character.description;
        card.appendChild(description);

        return card;
    }
});
