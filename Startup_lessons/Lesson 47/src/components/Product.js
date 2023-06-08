import React from "react";
import styles from './Product.module.scss';
import iphone from "../assets/iphone.jpg";
import watch from "../assets/watch.jpg";
import no_foto from "../assets/no-foto.jpg";

function Product(props){

    const remove = () => {
        props.onRemove(props.id)
    }

    let productImage;
    if (props.name === "Iphone") {
      productImage = <img src={iphone} alt="Iphone" />;
    } else if (props.name === "Watch") {
      productImage = <img src={watch} alt="Watch" />;
    } else {
      productImage = <img src={no_foto} alt="No Foto" />;
    }

    return (
        <div className={styles.product}>
            <div className={styles.img}>
                {productImage}
            </div>
            <div className={styles.body}>
                <h1 className={styles.title}>{props.name}</h1>
                <div className={styles.price}>{props.price}</div>
            </div>
            <button onClick={remove} type={styles.button}>Remove</button>
        </div>
    )
}

export default Product;
