import { useState } from "react";

function CoffeeCard({coffee, handleUpdatedCoffee}) {
    const [newPrice, setNewPrice] = useState(coffee.price)
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3001/coffees/${coffee.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({price: Number(newPrice)})

        })
        .then(r => r.json())
        .then(updatedCoffee => handleUpdatedCoffee(updatedCoffee))
    }

    return (
        <div className="coffee-card">
            <p>Name: {coffee.name}</p>
            <p>Description: {coffee.description}</p>
            <p>Origin: {coffee.origin}</p>
            <p>Price: {`$${coffee.price}`}</p>

            <form onSubmit={handleSubmit}>
                <input 
                type="number" 
                value={newPrice} 
                placeholder="update price.." 
                onChange={(e) => setNewPrice(e.target.value)}
                />
                <button>Update</button>
            </form>
        </div>
    )
}

export default CoffeeCard;