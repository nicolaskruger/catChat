import * as React from 'react';
import dpd from './img/down.svg'
import block from './img/block.svg';
import './styles.css'

export interface MsgProps {
    msg:string,
    resp?:string,
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
            {this.props.msg===""?<img src={block} alt="block"/>
            :(!this.props.resp)?this.props.msg
            :<div className= "msg-div">
                <section className="msg-sect">
                    {this.props.resp}
                </section>
                {this.props.msg}
            </div>
            }
        </div> 
        );
    }
}
 
export default Msg;