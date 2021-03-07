import * as React from 'react';
import Container from '../container';
import './styles.css';

export interface HeaderProps {
    
}
 
export interface HeaderState {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    state = { }
    render() { 
        return (  
            <Container>
                <section className="header">

                </section>
            </Container>
        );
    }
}
 
export default Header;