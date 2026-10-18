import { useState } from "react"

function Admin({handleAddCoffee}) {
    const [inputs, setInputs] = useState({name: "", description: "", origin: "", price: ""})

    function handleChange(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3001/coffees', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...inputs, price: Number(inputs.price)})
        })
        .then(r => r.json())
        .then((coffee) => {
            handleAddCoffee(coffee)
            setInputs({name: "", description: "", origin: "", price: ""})
        })
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit} className="admin-form">
                <h2>Add a New Coffee</h2>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={inputs.name} onChange={handleChange} />

                <label htmlFor="description">Description</label>
                <input id="description" name="description" value={inputs.description} onChange={handleChange} />

                <label htmlFor="origin">Origin</label>
                <input id="origin" name="origin" value={inputs.origin} onChange={handleChange} />

                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" value={inputs.price} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Admin