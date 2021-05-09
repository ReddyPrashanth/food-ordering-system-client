import React from 'react';

const MenuBar = ({categories}) => {
    return (
        <div className="px-6 border border-gray-200">
            <ul className="flex items-center">
              {categories.map(cat => (
                <li key={cat.id} className="cursor-pointer text-sm py-2 font-base hover:bg-gray-200">
                    <a href={`#${cat.name}`} className="px-4 py-2">{cat.name}</a>
                </li>
              ))}
            </ul>
        </div>
    );
}

export default MenuBar;