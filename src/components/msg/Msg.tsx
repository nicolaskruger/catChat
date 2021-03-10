import * as React from 'react';
import dpd from './img/down.svg'
import block from './img/block.svg';
import './styles.css'

export interface MsgProps {
    msg:string,
    setCurrentMsg:()=>void
}
 
export interface MsgState {
    
}
 
class Msg extends React.Component<MsgProps, MsgState> {
    state = {  }
    render() { 
        return ( 
        <div className="msg">
            {this.props.msg===""?<div></div>:<img onClick={this.props.setCurrentMsg.bind(this)} className="msg-img" src={dpd} alt=""/>}
            {this.props.msg===""?<img src={block} alt="block"/>:this.props.msg}
        </div> 
        );
    }
}
 
export default Msg;