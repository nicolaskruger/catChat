import * as React from 'react';
import './styles.css';

export interface ContainerProps {
    
}
 
export interface ContainerState {
    
}
 
class Container extends React.Component<ContainerProps, ContainerState> {
    state = {   }
    render() { 
        return ( 
        <div className="container"></div> 
        );
    }
}
 
export default Container;