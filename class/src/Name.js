
import { Component } from 'react';


class Name extends Component{

    Name="sukhdeb patra";
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOG33g9jHQpmsGByaDJJ79yT8W8JFawqWNQ&usqp=CAU"
    image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS80zzZ_NS8Etr9qLQmWl0ZapOaiLw9sE0nw&usqp=CAU"
    render(){
        return(
            <>
            
            <h1><center>This is heading only</center></h1>
            
            <img src={this.image}/>
            <img src={this.image1}/>
            <img src={this.image}/>
            <img src={this.image1}/>
            <img src={this.image}/>
            <img src={this.image1}/>
            <img src={this.image1}/>
            <img src={this.image}/>
            <img src={this.image1}/>
            <img src={this.image}/>

            </>
        );

    }
}
export default Name