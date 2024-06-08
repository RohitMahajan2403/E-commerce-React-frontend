import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/header/Header';
import ProductList from './components/MainBody/ProductList';
import Footer from './components/footer/Footer';

function App() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('');
    const [visibleProducts, setVisibleProducts] = useState(10);
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
    };

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleSignInOut = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const filteredProducts = products
        .filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortKey === 'price') {
                return a.price - b.price;
            } else if (sortKey === 'rating') {
                return b.rating.rate - a.rating.rate;
            } else if (sortKey === 'name') {
                return a.title.localeCompare(b.title);
            } else {
                return 0;
            }
        })
        .slice(0, visibleProducts);

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 10);
    };

    return (
        <>
            <div>
                <Header 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    setSortKey={setSortKey} 
                    isLoggedIn={isLoggedIn} 
                    handleSignInOut={handleSignInOut} 
                />
                <main>
                    <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
                    
                    {visibleProducts < products.length && (
                        <button onClick={loadMoreProducts}>Load More</button>
                    )}
                </main>
                <div>
                <footer>
            <p>© 2024 Product Page</p>
        </footer>
                </div>
            </div>
            
        </>
    );
}

export default App;
