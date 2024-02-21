import React from "react";
import RateStars from '../Card/RateStars'
import '../Card/Cards.css'
import { FaRegHeart } from "react-icons/fa6";
import { MdIosShare } from "react-icons/md";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
const products = [
    {
        id: 1,
        name: "Vivamus vitae",
        rating: 4.3,
        description:
            "Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
        price: 199,
        image: require("../Card/1.png")

    },
    {
        id: 2,
        name: "Fusce sit amet ipsum",
        rating: 4.2,
        description:
            "Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
        price: 229,
        image: require("../Card/2.png")

    },
    {
        id: 3,
        name: "Etiam volutpat aliquam",
        rating: 3.2,
        description:
            "Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
        price: 99,
        image: require("../Card/3.png")

    },
    {
        id: 4,
        name: "Lorem ipsum dolor",
        rating: 4.8,
        description:
            "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
        price: 119,
        image: require("../Card/4.png")

    },
    {
        id: 5,
        name: "Ultrices nisl",
        rating: 4.5,
        description:
            "Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
        price: 85,
        image: require("../Card/5.png"),

    },
    {
        id: 6,
        name: "Curabitur in elementum tortor",
        rating: 3.8,
        description:
            " Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
        price: 149,
        image: require("../Card/product-1.png")

    },
    {
        id: 7,
        name: "Ultrices nisl",
        rating: 4.5,
        description:
            "Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
        price: 85,
        image: require("../Card/product-2.png")

    },
    {
        id: 8,
        name: "Curabitur in elementum tortor",
        rating: 3.8,
        description:
            " Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
        price: 149,
        image: require("./1.png")

    },
];

const Cards = () => {
    return (
        <div className="cards">
            <main>
                <h2 className="title">
                    PRODUCTS
                </h2>
                <div className="products">
                    {products.map((product) => (
                        <div className="product" key={product.id}>
                            <img className="product-image" src={product.image} alt={product.image} />
                            <h4 className="product-name">
                                {product.name}
                            </h4>
                            <RateStars rating={product.rating} />
                            <p>{product.description}</p>
                            <span className="product-price">
                                {product.price}$
                            </span>
                            <div className="buttons">
                                <button className="btn">
                                    Details
                                </button>
                                <div className="iconns">
                                    <div className="iconn1">
                                        <FaRegHeart />
                                    </div>
                                    <div className="iconn2">
                                        <MdIosShare />
                                    </div>
                                    <div className="iconn3">
                                        <TbBrandGoogleBigQuery />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    )
}

export default Cards