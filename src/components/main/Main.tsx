import * as React from 'react';
import './styles.css'
import ListMsg from '../listMsg';
import Form from '../form'
import Response from '../response'
import MsgInterface from '../../app/Msg';

enum StateMain{
    default = 0,
    response
}
export interface MainProps {
    
}
 
export interface MainState {
    list:MsgInterface[],
    change:string,
    currMsg:number,
    currResp:MsgInterface
    currState:StateMain;
}
class Main extends React.Component<MainProps, MainState> {
    private static openTab = "change";
    private static closeTab = "change inv";
    state:MainState = { 
        list:[],
        change:Main.closeTab,
        currMsg:0,
        currResp:{msg:"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"},
        currState: StateMain.response
    }
    list:string[] = []
    private createMsg(msg:string, resp?:string){
        this.state.list = [...this.state.list, {msg,resp}]
        this.setState({
            ...this.state
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
        this.state.list[this.state.currMsg] = {msg:""};
        this.setState({
            ...this.state,
            change:Main.closeTab
        });
    }
    private respMsg(event:React.FormEvent<HTMLElement>){
        event.preventDefault();
        event.stopPropagation();
        this.setResponse();
    }
    private setCurrentMsg(n:number){
        this.setState({
            ...this.state,
            change:Main.openTab,
            currMsg:n
        })
    }
    private closeResponse(){
        this.setState({
            ...this.state,
            currState:StateMain.default,
        })
    }
    private getCurrMsg(){
        return this.state.list[this.state.currMsg];
    }
    private setResponse(){
        this.setState({
            ...this.state,
            currState:StateMain.response,
            currResp:this.getCurrMsg(),
            change: Main.closeTab
        })
    }
    readonly currPoss = [(list:MsgInterface[],currResp:MsgInterface)=>
        <main className='main'>
                    <ListMsg setCurrentMsg={this.setCurrentMsg.bind(this)} list={list}/>
                    <Form closeTab={this.closeResponse.bind(this)} createMsg={this.createMsg.bind(this)}/>
        </main>,(list:MsgInterface[],currResp:MsgInterface) =>
        <main className='main-reponse'>
            <ListMsg setCurrentMsg={this.setCurrentMsg.bind(this)} list={list}/>
            <Response close={this.closeResponse.bind(this)} msg={currResp.msg}/>
            <Form closeTab={this.closeResponse.bind(this)} respMsg={currResp.msg} createMsg={this.createMsg.bind(this)}/>
        </main>
    ]
    render() { 
        return ( 
            <>
            <div className='container'>
                {this.currPoss[this.state.currState](this.state.list, this.state.currResp)}
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