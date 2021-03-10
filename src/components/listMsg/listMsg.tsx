import * as React from 'react';
import Msg from '../msg';
import './styles.css';
import  MsgInteface from '../../app/Msg';

export interface ListMsgProps {
    list:MsgInteface[]
    setCurrentMsg:(n:number)=>void
}
 
export interface ListMsgState {
    
}
 
class ListMsg extends React.Component<ListMsgProps, ListMsgState> {
    state = { }
    render() { 
        return ( 
            <ul className="msg__list">
                {
                    this.props.list.map((s,i)=>(
                        <li key={i} className="msg__li">
                            <Msg setCurrentMsg={()=>{
                                this.props.setCurrentMsg(i)
                                }} msg={s.msg} resp={s.resp} />   
                        </li>
                    ))
                }
            </ul>
         );
    }
}
 
export default ListMsg;