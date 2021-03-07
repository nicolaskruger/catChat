import * as React from 'react';
import lazy_cat from './img/cat_gray.png';
import './styles.css'

export interface HeadeImgProps {
    
}
 
export interface HeadeImgState {
    
}
 
class HeadeImg extends React.Component<HeadeImgProps, HeadeImgState> {
    state = { }
    render() { 
        return ( 
            <section className="section__h_img">
                <p className="p_h_img">miau</p>
                <img className="header__img" src={lazy_cat} alt="lazy_cat"/>
            </section>
         );
    }
}
 
export default HeadeImg;