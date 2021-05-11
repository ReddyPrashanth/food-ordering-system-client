import React from 'react';
import Form from '../shared/Form';

class SignUp extends Form {
    state = { 
        data: {
            name: "",
            email: "",
            password: "",
            phone: ""
        }
     
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    }

    render() { 
        return ( 
            <div className="flex justify-center items-center h-screen-90">
                <div className="py-2 bg-white rounded shadow p-4 w-2/3 md:w-1/2 lg:w-1/3">
                    <h3 className="text-lg font-medium text-red-500 mb-2 text-center">Sign Up Form</h3>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("name", "Full Name")}
                        {this.renderInput("email", "Email", "email")}
                        {this.renderInput("phone", "Mobile Number", "tel", "15")}
                        {this.renderInput("password", "Password", "password")}
                        <div className="flex justify-between">
                        {this.renderButton("SIGN UP")}
                        {this.renderLink("Already have an account? Sign In")}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default SignUp;