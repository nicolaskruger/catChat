import * as React from 'react';
import './styles.css'
import close from './img/close.svg'

export interface ResponseProps {
    msg:string,
    close:()=>void
}
 
export interface ResponseState {
    
}
 
class Response extends React.Component<ResponseProps, ResponseState> {
    state = {   }
    render() { 
        return ( 
            <section className="response-section">
                <p className="response-p">
                    {this.props.msg}
                </p>
                <img onClick={this.props.close} className="responde-img" src={close} alt="close"/>
            </section>
         );
    }
}
 
export default Response;