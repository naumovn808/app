import { ProductCardProps } from "./ProductCard.props";
import styles from './ProductCard.module.css';
import { Link } from "react-router-dom";

function ProductCard(props: ProductCardProps) {
    return (
        <Link to={'/'} className={styles['link']}>
            <div className={styles['card']}>

                <div className={styles['head']} style={{ backgroundImage: `url('${props.image}')` }}>

                    <div className={styles['price']}>
                        {props.price}
                        <span className={styles['currency']}>₽</span>
                    </div>

                    <button className={styles['add-to-cart']}>
                        <img src="/cart-button.svg" alt="добавить в корзину" />
                    </button>

                    <div className={styles['rating']}>
                        {props.rating}
                        <img src="/star-icon.svg" alt="" />
                    </div>

                </div>

                <div className={styles['footer']}>
                    <div className={styles['title']}>{props.title}</div>
                    <div className={styles['description']}>{props.description}</div>
                </div>

            </div>

        </Link>

    )
}

export default ProductCard