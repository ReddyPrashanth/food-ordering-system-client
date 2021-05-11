import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct, loadCategories, shouldOpen, toggleModal, setProductOnModal } from "../../store/categories";
import MenuItemModal from "../shared/MenuItemModal";
import MenuBar from "./MenuBar";
import MenuItems from "./MenuItems";


class Menu extends Component {

    toggleModal = () => {
        this.props.openModal();
    }

    setProductOnState = (product) => {
        this.props.setProductOnModal(product);
        this.toggleModal();
    }

    componentDidMount() {
        this.props.loadCategories();
    }

    render() { 
        const {shouldOpen, product} = this.props;
        return (
            <div>
                <MenuBar />
                <MenuItems onClick={this.setProductOnState}/>
                {shouldOpen && product && <MenuItemModal product={product} onToggle={this.toggleModal}/>}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    loadCategories: () => dispatch(loadCategories()),
    openModal: () => dispatch(toggleModal()),
    setProductOnModal: (product) => dispatch(setProductOnModal(product))
});

const mapStateToProps = (state) => ({
    shouldOpen: shouldOpen(state),
    product: getProduct(state),
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Menu);