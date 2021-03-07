import * as React from 'react';
import './styles.css'

export interface MainProps {
    
}
 
export interface MainState {
    
}
 
class Main extends React.Component<MainProps, MainState> {
    state = { }
    render() { 
        return ( 
            <div className='container'>
                <main className='main'>

                </main>
            </div>
         );
    }
}
 
export default Main;