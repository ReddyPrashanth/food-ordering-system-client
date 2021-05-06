import burger from '../../resources/images/burger.jpg';

const SectionOne = () => {
    return (
        <div className="bg-red-500 md:h-80 text-white lg:px-16 px-6 py-4 text-center md:flex md:items-center">
          <div className="md:w-1/2">
            <h4 className="text-lg font-bold mb-2">Try our new app to order your favorite food online and also checkout awesome food coupons</h4>
            <input type="text" className="rounded-full px-4 py-2" placeholder="Enter Your Address"/>
          </div>
          <div className="overflow-hidden md:w-1/2 mt-4 md:mt-0 pl-2 flex items-center justify-around">
            <img className="object-scale-down h-96 md:h-64" src={burger} alt="burger"/>
          </div>
        </div>
    );
}

export default SectionOne;