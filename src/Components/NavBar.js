import React, {Component} from 'react'
import {Menu} from "mx-react-components"

class NavBar extends Component {
    state = {
        showMenuItems: false
    }
    toggleMenu =()=> {
        if(this.state.showMenuItems === false){
            this.setState({showMenuItems: true})
            return
        }else {
            this.setState({showMenuItems: false})
        }
        
    }
    render(){
        return(
            <div className = 'nav-container'>
                <Menu 
                    alignItems= 'left'
                    isOpen = {this.state.showMenuItems}
                    items = {[
                        {icon: null, label: 'item1', onClick: ()=>{}},
                        {icon: null, label: 'item2', onClick: ()=>{}},
                        {icon: null, label: 'item3', onClick: ()=>{}}

                    ]}
                    onClick = {()=>{this.toggleMenu()}}
                    />
            </div>
        )
    }
}

export default NavBar