import React from 'react';
import saladImage from '../../resources/images/salad.jpg';

const MenuItemModal = ({onToggle, product}) => {
    return (
        <div className="justify-center bg-gray-400 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto lg:max-w-3xl sm:max-w-xl max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="px-2 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 opacity-3 text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onToggle}
                  >
                    <span className="bg-transparent opacity-3 h-6 w-6 block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-4 flex-auto">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="my-2 text-gray-600 leading-relaxed">
                        {product.description}
                    </p>
                    <div className="flex justify-center">
                      <img src={saladImage} className="sm:h-72 h-48" alt={product.name}/>
                    </div>
                    <h4 className="font-semibold mb-2">Preferences</h4>
                    <h4 className="font-semibold mb-2">Extra Instructions</h4>
                    <textarea 
                        rows="4" 
                        className="border border-gray-100 rounded bg-gray-100 w-full p-2"
                        placeholder="Add any special requests (e.g., food allergies, extra spicy, etc.) and the store will do its best to accommodate you."></textarea>
                    <h4 className="font-semibold mb-2">If sold out</h4>
                    <select name="sold-out" className="rounded p-2 w-full bg-gray-100 mb-2">
                        <option value="0">Go with merchant recommendation</option>
                        <option value="0">Refund this item</option>
                        <option value="0">Contact me</option>
                        <option value="0">Cancel the entire order</option>
                    </select>
                </div>
                {/*footer*/}
                <div className="flex items-center text-xs justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onToggle}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase lg:px-6 px-4 lg:py-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    disabled={product}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
        </div>
    );
}

export default MenuItemModal;