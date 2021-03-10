import * as React from 'react';
import './styles.css'

export interface FormProps {
    createMsg:(msg:string,resp?:string)=>void;
    respMsg?:string;
    closeTab:()=>void;
}
 
export interface FormState {
    
}
 
class Form extends React.Component<FormProps, FormState> {
    state = { };
    msg:string = "";
    private send(event:React.FormEvent){
        event.preventDefault();
        event.stopPropagation();
        if(this.msg){
            this.props.createMsg(this.msg, this.props.respMsg)
            this.props.closeTab()
        }
    }
    private getMsg(event:React.FormEvent<HTMLTextAreaElement>){
        this.msg = event.currentTarget.value;
    }
    render() { 
        return ( 
            <form className="form__msg" action="" onSubmit={this.send.bind(this)}>
                <textarea 
                    className="form__txt" 
                    placeholder="msg" 
                    name="tx" 
                    id=""
                    onChange={this.getMsg.bind(this)}
                    ></textarea>
                <button className="form__button">Send</button>
            </form>
         );
    }
}
 
export default Form;