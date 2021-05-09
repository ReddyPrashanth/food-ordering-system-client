import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuCategories, loadCategories } from "../../store/categories";
import MenuBar from "./MenuBar";
import MenuItems from "./MenuItems";

const Menu = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getMenuCategories());

    useEffect(() => {
        dispatch(loadCategories());
    }, [dispatch]);
    
    return (
        <div>
            <MenuBar categories={categories} />
            <MenuItems categories={categories}/>
        </div>
    );
}

export default Menu;