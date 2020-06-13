import React from 'react';

class Formsdemo extends React.Component{
    handleSubmit(){
        alert(JSON.stringify(this.state))
    }

    handleInputChange(event){
        this.setState({name:event.target.name, value:event.target.value})
    }
    render(){
        return(
            <div className="container">
                <h2>React forms demo</h2>

                <form onSubmit={()=>this.handleSubmit()}>
                    <div >
                        Enter Name: <input type="text" name="name" onChange={(e)=>this.handleInputChange(e)}></input>
                        Enter Age: <input type="number" name="age" onChange={(e)=>this.handleInputChange(e)}></input>
                        Enter Name: <input type="text" name="gender" onChange={(e)=>this.handleInputChange(e)}></input>
                    </div>
                    <button type="submit" className="btn-sucess">Submit</button>
                    <button type="reset" className="btn-danger">Reset</button>
                </form>
            </div>
        )
    }
}

export default Formsdemo;