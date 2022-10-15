import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
            className='home__image'
            src="https://wallpaper.dog/large/20373830.jpg"
            alt=""
            />
            <div className='home__row'>
                {/* Products Line 1 */}
                <Product
                universityName="Arizona State University"
                universityLink="https://www.bkstr.com/arizonastatestore/home"
                id="12321341"
                title="Arizona State University Cap, 47 Brand, 50% Cotton/50% Polyester, Embroidered/Sewn Front and Back, Washable"
                price={19.49}
                rating={5}
                image="https://bkstr.scene7.com/is/image/Bkstr/1230-47FRANCHISE-WM-Dark-Maroon?$GMCategory_ET$&fmt=webp"
                />
                <Product
                universityName="Penn State University"
                universityLink="https://shop.gopsusports.com/"
                id="23445930"
                title="Women's '47 Navy Penn State Nittany Lions Meeko Cuffed Knit Hat with Pom, Faux Fur, Cable Knit Design, One Size"
                price={29.99}
                rating={4}
                image="https://images.footballfanatics.com/penn-state-nittany-lions/womens-47-navy-penn-state-nittany-lions-meeko-cuffed-knit-hat-with-pom_pi3849000_ff_3849228-185190cb943cff86aa55_full.jpg?_hv=2&w=340"
                />
            </div>
            <div className='home__row'>
                {/* Products Line 2 */}
                <Product
                universityName="University of Florida"
                universityLink="https://www.bkstr.com/floridastore/home"
                id="4903850"
                title="Nike - University of Florida Gators Essential Short Sleeve T-Shirt, 100% Cotton, Screen Printed"
                price={24.99}
                rating={4}
                image="https://bkstr.scene7.com/is/image/Bkstr/779-DD7149-888-Univ-Orange?$GMCategory_ET$&fmt=webp"
                />
                <Product
                universityName="New York University"
                universityLink="https://www.bkstr.com/nyustore/home"
                id="49538094"
                title="New York University Short Sleeve T-Shirt, The Champion Jersey Tee, Purple, Solid"
                price={29.49}
                rating={5}
                image="https://bkstr.scene7.com/is/image/Bkstr/2015-T1000-2380636AT-C-Purple?$GMCategory_ET$&fmt=webp"
                />
                <Product
                universityName="University of Texas"
                universityLink="https://shop.texassports.com/"
                id="3254354345"
                title="Champion Texas Longhorns Slab Crew Sweatshirt, 50% Cotton / 50% Polyester"
                price={40.99}
                rating={4}
                image="https://www.universitycoop.com/media/product-images/100190108-Burnt%20Orange-19.default.jpg?resizeid=2&resizeh=240&resizew=240"
                />
            </div>
            <div className='home__row'>
                {/* Products Line 3 */}
                <Product
                universityName="Louisiana State University"
                universityLink="https://www.lsushop.net/"
                id="90829332"
                title="Unisex Nike Purple LSU Tigers Zoom Pegasus 39 Running Shoe"
                price={139.99}
                rating={4}
                image="https://images.footballfanatics.com/lsu-tigers/unisex-nike-purple-lsu-tigers-zoom-pegasus-39-running-shoe_pi4644000_ff_4644517-2b0d11fd3167b29cc27d_full.jpg?_hv=2&w=340"
                />
            </div>
        </div>
    </div>
  )
}

export default Home