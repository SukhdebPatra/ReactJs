import React,{Component} from 'react'
class Bind extends Component{
    state={
        emp_sal:200000
    }

    btnHandler(value){
        console.log("reading button data",value);
        this.setState({emp_sal:200000 + value,
        })
    }
    render(){
        return<>
        <h1> This is binding ex</h1>
        <h2>Emp sal:{this.state.emp_sal}</h2>
        <hr/>
        <button onClick={this.btnHandler.bind(this,50000)}>HIke 50k</button>
        <hr/>
        <button onClick={this.btnHandler.bind(this,60000)}>Hike 60000</button>
        <hr/>
        <button onClick={this.btnHandler.bind(this,90000)}>HIke 900000</button>

        </>
    }
}

export default Bind 