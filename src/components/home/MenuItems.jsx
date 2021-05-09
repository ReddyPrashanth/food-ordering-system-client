import React from 'react';

const MenuItems = ({categories}) => {
    return (
        <div className="container mx-auto">
            {categories.map(cat =>  
                <div key={cat.id} className="m-2" id={cat.name}>
                    <h3 className="text-md font-semibold mb-2 uppercase">{cat.name}</h3>
                    <div className="md:flex">
                        {cat.items.map(item => 
                            <div key={item.id} className="md:w-1/2 md:mr-2 p-4 mb-2 bg-white rounded shadow-lg">
                                <p className="text-sm font-semibold mb-2">{item.name}</p>
                                <p className="text-xs lg:text-sm mb-2">{item.description}</p>                               
                                <div className="flex justify-between text-xs lg:text-sm">
                                    <p>Price: <span className="font-semibold">${item.price}</span></p>
                                    <button className="border lg:px-4 lg:py-1 px-2 rounded bg-gray-200 hover:text-white hover:bg-green-500">add</button>
                                </div>
                            </div>    
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuItems;