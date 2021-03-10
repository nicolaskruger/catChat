import * as React from 'react';
import './styles.css'
import ListMsg from '../listMsg';
import Form from '../form'
import Response from '../response'

enum StateMain{
    default = 0,
    response
}
export interface MainProps {
    
}
 
export interface MainState {
    list:string[],
    change:string,
    currMsg:number,
    currResp:string
    currState:StateMain;
}
class Main extends React.Component<MainProps, MainState> {
    private static openTab = "change";
    private static closeTab = "change inv";
    state:MainState = { 
        list:[],
        change:Main.closeTab,
        currMsg:0,
        currResp:"test",
        currState: StateMain.response
    }
    list:string[] = []
    private createMsg(msg:string){
        this.list = [...this.list, msg]
        this.setState({
            ...this.state,
            list:this.list
        })
    }
    private closeChange(){
        this.setState({
            ...this.state,
            change:Main.closeTab
        })
    }
    private openChange(){
        this.setState({
            ...this.state,
            change:Main.openTab
        })
    }
    private deleteMensage(event:React.FormEvent<HTMLElement>){
        event.preventDefault();
        event.stopPropagation();
        this.state.list[this.state.currMsg] = "";
        this.setState({
            ...this.state,
            change:Main.closeTab
        });
    }
    private respMsg(event:React.FormEvent<HTMLElement>){
        event.preventDefault();
        event.stopPropagation();
    }
    private setCurrentMsg(n:number){
        this.setState({
            ...this.state,
            change:Main.openTab,
            currMsg:n
        })
    }
    readonly currPoss = [
        <main className='main'>
                    <ListMsg setCurrentMsg={this.setCurrentMsg.bind(this)} list={this.list}/>
                    <Form createMsg={this.createMsg.bind(this)}/>
        </main>,
        <main className='main-reponse'>
            <ListMsg setCurrentMsg={this.setCurrentMsg.bind(this)} list={this.list}/>
            <Response  msg={this.state.currResp}/>
            <Form createMsg={this.createMsg.bind(this)}/>
        </main>
    ]
    render() { 
        return ( 
            <>
            <div className='container'>
                {this.currPoss[this.state.currState]}
            </div>
            <nav className={this.state.change} onClick={this.closeChange.bind(this)}>
                <ul className='change__ul'>
                    <li className="change__li" onClick={this.deleteMensage.bind(this)}>deleta msg</li>
                    <li className="change__li" onClick={this.respMsg.bind(this)}>responde msg</li>
                </ul>
            </nav>
            </>
         );
    }
}
 
export default Main;