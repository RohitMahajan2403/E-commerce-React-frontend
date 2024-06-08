import React from 'react';

const Header = ({ searchTerm, setSearchTerm, setSortKey, isLoggedIn, handleSignInOut }) => {
    return (
        <header>
            <h1>Product List</h1>
            <div className="search-sort">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select onChange={(e) => setSortKey(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <button className="auth-button" onClick={handleSignInOut}>
                {isLoggedIn ? 'Sign Out' : 'Sign In'}
            </button>
        </header>
    );
};

export default Header;
