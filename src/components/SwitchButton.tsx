/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
interface StateButton{
    stateLight: boolean,
}
interface PropsButton{

}
export default class SwitchButton extends React.Component<PropsButton,StateButton>{
    constructor(props:PropsButton){
        super(props);
        this.state={
            stateLight:false,
        }
    }
    render(){
        return(
            <p>the light is {this.state.stateLight?"ON":"OFF"}</p>
        );
    }
}