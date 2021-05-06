import React, { Component } from 'react';
import SectionOne from './components/home/SectionOne';
import Navbar from './components/shared/Navbar';

class App extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: "Popular items"
      },
      {
        id: 2,
        name: "Salads"
      },
      {
        id: 3,
        name: "Chicken Wings"
      },
      {
        id: 4,
        name: "Biryanis"
      },
      {
        id: 5,
        name: "Veg Starters"
      },
      {
        id: 6,
        name: 'Non-Veg Starters'
      },
      {
        id: 7,
        name: 'Burgers'
      },
      {
        id: 8, 
        name: 'Gourmet Sandwiches'
      }
    ]
  }
  render() { 
    const { categories } = this.state;
    return ( 
      <React.Fragment>
        <Navbar />
        <SectionOne />
        <div className="px-6 border border-gray-200">
          <ul className="flex items-center">
            {categories.map(cat => (
              <li key={cat.id} className="px-3 cursor-pointer py-2 text-sm font-base hover:bg-gray-200">{cat.name}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;

