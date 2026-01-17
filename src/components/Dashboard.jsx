import React from "react";
import ProductCard from "./Cards";
function Dashboard ({ personName , personPassword }) {
return (
    <div style={{ padding: "20px" }}>
        <h1>Welcome to Dashboard 🎉</h1>
        <p>Hi {personName}</p>

        <h2>Product List</h2>
        <div>
            {[
                { description: "Product 1", price: 29.99, quantity: 10 },
                { description: "Product 2", price: 49.99, quantity: 5 },
                { description: "Product 3", price: 19.99, quantity: 20 },
                { description: "Product 4", price: 19.99, quantity: 20 },
                { description: "Product 5", price: 19.99, quantity: 20 },
                { description: "Product 6", price: 19.99, quantity: 20 },
                { description: "Product 7", price: 29.99, quantity: 10 },
                { description: "Product 8", price: 49.99, quantity: 5 },
                { description: "Product 9", price: 19.99, quantity: 20 },
                { description: "Product 10", price: 19.99, quantity: 20 },
                { description: "Product 11", price: 19.99, quantity: 20 },
                { description: "Product 12", price: 19.99, quantity: 20 },
                { description: "Product 13", price: 29.99, quantity: 10 },
                { description: "Product 14", price: 49.99, quantity: 5 },
                { description: "Product 15", price: 19.99, quantity: 20 },
                { description: "Product 16", price: 19.99, quantity: 20 },
                { description: "Product 17", price: 19.99, quantity: 20 },
                { description: "Product 18", price: 19.99, quantity: 20 },
                { description: "Product 19", price: 29.99, quantity: 10 },
                { description: "Product 20", price: 49.99, quantity: 5 },
                { description: "Product 21", price: 19.99, quantity: 20 },
                { description: "Product 22", price: 19.99, quantity: 20 },
                { description: "Product 23", price: 19.99, quantity: 20 },
                { description: "Product 24", price: 19.99, quantity: 20 },
                { description: "Product 25", price: 29.99, quantity: 10 },
                { description: "Product 26", price: 49.99, quantity: 5 },

            ].map((product, index) => (
                <ProductCard
                    key={index}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
        </div>
    </div>
);
};

export default Dashboard;
