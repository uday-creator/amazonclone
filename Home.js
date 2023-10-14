import React from "react";
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div ClassName="home">
            <div className="home_contianer">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=" " />
            </div>

            <div className="home_row">
                <Product id="25455929" title="The lean Startup: How 
                constant innovation creates radically successfull
                business paperback " price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />

                <Product id="49538094"
                    title="The lean Startup: How 
                    constant innovation creates radically successfull
                    business paperback "
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"></Product>
            </div>

            <div className="home_row">
                <Product id="23445930"
                    title="The lean Startup: How 
                    constant innovation creates radically successfull
                    business paperback "  price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />

                <Product id="23445981"
                    title="The lean Startup: How 
                    constant innovation creates radically successfull
                    business paperback "  price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />


                <Product id="23445982"
                    title="The lean Startup: How 
                    constant innovation creates radically successfull
                    business paperback "  price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />
            </div>

            <div className="home_row">

                <Product id="23445983"
                    title="The lean Startup: How 
                    constant innovation creates radically successfull
                    business paperback " price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />
            </div>

        </div>
    );
}
export default Home