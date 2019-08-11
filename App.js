import {createAppContainer,createStackNavigator} from 'react-navigation'
import A from './a'
import React from 'react'
import B from './b'
import {Provider,connect} from 'react-redux'
import store from './store'

let Nav=createAppContainer(
  createStackNavigator(
    {
      A: connect((state)=>state)(A),
      B: connect((state)=>state)(B)
    },
    {
      initialRouteName:"A",
      defaultNavigationOptions:{
        title:"Redux example"
      }
    }
  )
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
