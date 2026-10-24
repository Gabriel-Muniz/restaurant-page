
const contentContainer = document.querySelector('#content');

const loadAbout = () => {
    contentContainer.innerHTML = aboutPageItself + credits;
}

const aboutPageItself = `
    <article class="about">
        <h1>The page itself</h1>
            <p>
                As briefly mentioned in the "Meet the Boss" section, this website is part of The Odin Project's
                curriculum.
                The project aims to introduce us to the concepts of code modularization along with the use of bundlers,
                in
                our case, Webpack.
            </p>

            <p>
                The page consists of a fixed base layout, not yet 100% responsive, which uses exports and imports of
                functions that populate the page content according to the selected tab.
                Each function, linked to its respective button, uses objects that contain the necessary information for
                displaying the content.
            </p>
    </article>
`

const credits = `<article class="about">
            <h1>Credits</h1>

            <p>This project uses photos that were not taken by me, so it's only fair to give due credit to the
                photographers!</p>

            <ul class="photo-credits">
                <li>Restaurant exterior photo by <a
                        href="https://unsplash.com/@benjamin_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benjamin
                        Cheng</a> on <a
                        href="https://unsplash.com/photos/a-couple-of-tables-sitting-outside-of-a-restaurant-bhwcGtwS0_I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </li>

                <li>
                    Bacon And Eggs photo by Photo by <a
                        href="https://unsplash.com/@jamesrkern?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James
                        Kern</a> on <a
                        href="https://unsplash.com/photos/fried-egg-on-black-pan-aLDW0oQ0NtU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </li>

                <li>
                    Coffee photo by <a
                        href="https://unsplash.com/@molnj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jocelyn
                        Morales</a> on <a
                        href="https://unsplash.com/photos/white-ceramic-teacup-on-saucer-JJeb7OHQ7a8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </li>

                <li>
                    Sandwich photo by <a
                        href="https://unsplash.com/@seriouslylowcarb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Seriously
                        Low Carb</a> on <a
                        href="https://unsplash.com/photos/burger-with-tomato-and-lettuce-on-white-ceramic-plate-FZ4y_IDUJ6w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </li>
            </ul>
        </article>`



export default loadAbout;