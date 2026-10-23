import baconMenu from "../images/menu/bacon.jpg";
import coffeeMenu from "../images/menu/coffee.jpg";
import sandwichMenu from "../images/menu/sandwich.jpg";

const menuItems = [
    {
        name: "Bacon And Eggs",
        image: {
            src: baconMenu,
            alt: 'bacon and eggs cooking together in iron skillet',
        },
        description: [
            `I'm so f*cking greatful for my ex`,
            `Bacon eggs`,
            `Bacon eggs`,
            `Bacon eggs`,
        ]
    },
    {
        name: "Mysterious coffee",
        image: {
            src: coffeeMenu,
            alt: 'A shot of a cup of coffee with some mysterious lighting'
        },
        description: [
            'Coffee served with a mysterious atmosphere...',
            `Maybe it's time to give continuity to that plan of yours...`
        ]
    },
    {
        name: "Double Decked Sandwich",
        image: {
            src: sandwichMenu,
            alt: 'Two sandwiches halves layered on top one of another',
        },
        description: [
            `That's the best sandwich you'll find in this menu! (The only one too)`,
            `After living alone and cooking my own food for a long time, I've perfect my recipe and named: DOUBLE DECKED SANDWICH!`,
            `Hell yeah.`
        ]
    }
]

const contentContainer = document.querySelector('#content');

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

const createMenu = (menuItem) => {
    const dishCard = document.createElement('div');
    dishCard.classList.add('dish-card');

    const dishImageContainer = document.createElement('div');
    dishImageContainer.classList.add('img-container');

    const imgDish = document.createElement('img');
    imgDish.src = menuItem.image.src;
    imgDish.alt = menuItem.image.alt;

    dishImageContainer.appendChild(imgDish);

    const dishName = document.createElement('h1');
    dishName.classList.add('name')
    dishName.textContent = menuItem.name;

    const dishDescription = document.createElement('div');
    dishDescription.classList.add('description');

    menuItem.description.forEach(para => {
        const dishPara = document.createElement('p');
        dishPara.textContent = para;

        dishDescription.appendChild(dishPara);
    })

    dishCard.append(dishImageContainer, dishName, dishDescription);

    menuContainer.appendChild(dishCard);
}

const loadMenu = () => {
    menuContainer.textContent = "";
    menuItems.forEach(menuItem => createMenu(menuItem));
    contentContainer.append(menuContainer);
}

export default loadMenu;