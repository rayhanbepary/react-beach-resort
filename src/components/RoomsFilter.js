import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';


const getUniqueValues = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({ rooms }) => {

    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    let types = getUniqueValues(rooms, 'type');
    types = ['all', ...types];
    types = types.map((type, index) => <option key={index} value={type}>{type}</option>)

    let people = getUniqueValues(rooms,'capacity');
        people = people.map((capacity, index) => <option key={index} value={capacity}>{capacity}</option>)




    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form action="" className="filter-form">
                {/* rooms type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end of rooms type */}

                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* end of guests */}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input 
                        type="range" 
                        name="price" 
                        id="price" 
                        value={price} 
                        min={minPrice} 
                        max={maxPrice} 
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                {/* end of room price */}

                {/* size*/}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} className="size-input" onChange={handleChange}/>
                        <input type="number" name="maxSize" id="size" value={maxSize} className="size-input" onChange={handleChange}/>
                    </div>
                </div>
                {/* end of size */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>                      
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>                      
                    </div>
                </div>
                {/* end of extras */}

            </form>
        </section>
    );
};

export default RoomsFilter;