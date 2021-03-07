import * as React from 'react';
import './styles.css'

export interface HeaderLogoProps {
    
}
 
export interface HeaderLogoState {
    
}
 
class HeaderLogo extends React.Component<HeaderLogoProps, HeaderLogoState> {
    state = {  }
    render() { 
        return ( 
            <span className="p_logo">lazy c<span className="p_hide">h</span>at</span>
         );
    }
}
 
export default HeaderLogo;