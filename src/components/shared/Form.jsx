import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

class Form extends Component {

    handleChange = ({currentTarget: input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({
            data
        })
    }

    renderButton(text) {
        return  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold text-xs mr-1 md:text-sm md:px-2 px-1 py-1 rounded">
                {text}
                </button>
    }

    renderLink(linktext, to="/") {
        return  <Link to={to} 
                    className="text-green-500 text-xs md:text-xs font-semibold underline hover:text-red-500">
                    {linktext}
                </Link>
    }

    renderInput(name, label, type="input", maxLength="50") {
        const { data } = this.state;
        return <Input 
                name={name}
                label={label}
                type={type}
                value={data[name]}
                onChange={this.handleChange}
                placeholder={label}
                maxLength={maxLength}/>
    }
}
 
export default Form;