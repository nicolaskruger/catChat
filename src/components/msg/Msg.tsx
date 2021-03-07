import * as React from 'react';
import './styles.css'

export interface MsgProps {
    msg:string;
}
 
export interface MsgState {
    
}
 
class Msg extends React.Component<MsgProps, MsgState> {
    state = {  }
    render() { 
        return ( <div className="msg">{this.props.msg}</div> );
    }
}
 
export default Msg;