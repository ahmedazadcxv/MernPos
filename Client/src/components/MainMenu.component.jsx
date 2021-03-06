
import React, { Component } from 'react';

import MenuButton from '../DTOs/MenuButton'

export default class MainMenu extends Component 
{
    buttons = [
        new MenuButton(1,"Add Item", "add-item"),
        new MenuButton(2,"Return Item", "return-item"),
        new MenuButton(3,"Change Qty", "change-qty"),
        new MenuButton(4,"Line Disc", "line-disc"),
        new MenuButton(5,"Total Disc", "total-disc"),
        new MenuButton(7,"Add Customer", "add-customer"),
        new MenuButton(8,"Total Disc", "total-disc"),
    ];

    state = { buttons : this.buttons  }

    mainStyle={ 
        overflowY:"auto",
        width: "100%",
        margin:0,
        padding:0,
        backgroundColor:"#f16b52",
        height:"100%"
    };

    btnStyle={ 
        margin:10,
        fontSize:16,
        height: "60px",
        width: "140px",
        backgroundColor:"#303841",
        color:"white"
    };


    lineDetailStyle={
        padding:"0px",
        overflowY:"auto",
        height:"40vh", border: "1px solid black"
    };
  
    btnClicked(btnId)
    {
        switch(parseInt(btnId))
        {
            case 1 :
            {
                this.props.onModalShow(btnId);
                break;
            }
            default:
            {
                this.props.onModalShow(btnId);
                break;
            }
        }

 
    }
  
    render() 
    {
        return ( 
                
            <div style={{margin:"0px"}}  className="row"  >
                <div  style={this.lineDetailStyle}  className="col-12" >
                    <div style={this.mainStyle} >
                        { this.state.buttons.map( (button) => (
                            <button key={button.btnId} style={this.btnStyle} 
                                    onClick={() => this.btnClicked(button.btnId) } >
                                {button.btnName}
                            </button>
                        ))}
                    </div>
            
                </div>
            </div>
        );
    }
}


