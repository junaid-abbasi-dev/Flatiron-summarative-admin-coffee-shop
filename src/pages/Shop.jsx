import CoffeeCard from '../components/CoffeeCard'
import { useState } from 'react'
function Shop({coffees, handleUpdatedCoffee}) {
    const [search, setSearch] = useState("")

    const filteredCoffees = coffees.filter((coffee) => coffee.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="shop">
            <aside className="sidebar">
                {/* catch the input for search */}
                <input 
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search..'
                />
            </aside>
            <div className="coffee-grid">
                {
                    filteredCoffees.map((coffee) => (
                        <CoffeeCard handleUpdatedCoffee={handleUpdatedCoffee} coffee={coffee} key={coffee.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Shop