import * as React from 'react';
import HeaderImg from '../headerImg';
import HeaderLogo from '../headerLogo';
import './styles.css';

export interface HeaderProps {
    
}
 
export interface HeaderState {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    state = { }
    render() { 
        return (  
            <header className='header'>
                <div className='container'>
                    <section className="header-container">
                        <HeaderImg/>
                        <HeaderLogo/>
                    </section>
                </div>
            </header>
        );
    }
}
 
export default Header;