import * as React from 'react';
import './styles.css'
import ListMsg from '../listMsg';
import Form from '../form'

export interface MainProps {
    
}
 
export interface MainState {
    
}
 
class Main extends React.Component<MainProps, MainState> {
    state = { list:[] }
    list:string[] = []
    private createMsg(msg:string){
        this.list = [...this.list, msg]
        this.setState({
            list:this.list
        })
    }
    render() { 
        return ( 
            <div className='container'>
                <main className='main'>
                    <ListMsg list={this.list}/>
                    <Form createMsg={this.createMsg.bind(this)}/>
                </main>
            </div>
         );
    }
}
 
export default Main;