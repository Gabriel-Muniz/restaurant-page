import "./styles/reset.css";
import "./styles/styles.css";

import restaurantImage from "./images/restaurant.jpg"

console.log("It's working!");

const homeArticles = [
    {
        title: "Welcome to Cozinha Palestra",
        image: {
            src: restaurantImage,
            alt: "Exterior of a restaurant",
        },
        paragraphs: [
            `In 1914, Sociedade Esportiva Palmeiras was founded, and with it, our love for cooking! Located on 
                the street of the old Palestra Itália stadium, now Nubank Parque, Cozinha Palestra is a meeting point
                for Palmeiras fans on game days. Serving the best of what we have, check out our menu!`,

            `Since then we've done our best to bring the experience of being a Palmeirense to our clients,
                serving the dishes the remind us of our passion.`
        ]
    },
    {
        title: "Meet the chef",
        image: {
            src: "https://placehold.co/500x500",
            alt: "photo placeholder",
        },
        paragraphs: [
            `Hello, that's me! The chef.`,
            `I'm actually really new to this (cooking and stuff...) and I don't know how to actually cook.
                    So your on to a crazy experience!`,
            `Everything you see on this site is FAKE. This site is actually a project by TOP,
                    The Odin Project,
                    which aims to introduce us to the use of bundlers, in this case Webpack.`,
        ],
    }
]

const loadArticles = (article) => {
    const contentContainer = document.querySelector('#content');
    const section = document.createElement('section');
    const articleContainer = document.createElement('article');
    const articleTitle = document.createElement('h1');
    const imgArticle = document.createElement('img');

    imgArticle.src = article.image.src;
    imgArticle.alt = article.image.alt;
    imgArticle.width = '200px';

    articleTitle.textContent = article.title;

    articleContainer.appendChild(articleTitle);

    article.paragraphs.forEach(para => {
        const articlePara = document.createElement('p');
        articlePara.textContent = para;

        articleContainer.appendChild(articlePara);
    })

    section.append(imgArticle, articleContainer)

    contentContainer.appendChild(section);
}

const initialLoad = () => {
    homeArticles.forEach(article => loadArticles(article))
}

initialLoad()

