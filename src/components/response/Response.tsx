import * as React from 'react';
import './styles.css'


export interface ResponseProps {
    msg:string
}
 
export interface ResponseState {
    
}
 
class Response extends React.Component<ResponseProps, ResponseState> {
    state = {   }
    render() { 
        return ( 
            <section className="response-section">
                {this.props.msg}
            </section>
         );
    }
}
 
export default Response;