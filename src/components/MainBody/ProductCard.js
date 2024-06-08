import React from 'react';
import StarRating from './Rating';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
                <h2>{product.title}</h2>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <div className="product-rating">
                    <StarRating rating={product.rating.rate} />
                    <span className="rating-number">{product.rating.rate.toFixed(1)}</span>
                </div>
                <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
