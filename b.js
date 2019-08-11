import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
const Styles = StyleSheet.create({
container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
}
});
export default class a extends React.Component{
    constructor(props){
        super(props);
        this.state={a:0}
    }
    press=()=>{
        this.props.dispatch({type:"+1"})
    }
    local=()=>{ 
        this.setState({a:this.state.a+1})
    }
render(){
    return(
        <View style={Styles.container}>
            <Text>class B {this.props.count} : {this.state.a}</Text>
            <Button title="goto A" onPress={()=>this.props.navigation.navigate("A")}></Button>
            <Button title="+1 global counter" onPress={this.press}></Button>
            <Button title="+1 local" onPress={this.local}></Button>

        </View>
    )
}
}