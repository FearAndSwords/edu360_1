import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './components/Home';
import Dino from './components/Dino';
import Space from './components/Space'
import Options from './components/Options';
import Splash from './components/Splash';
import Login from './components/Login';


export default class edu360_1 extends Component
{
  constructor()
  {
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator)
  {
    if(route.name === 'splashPage')
    {
        return <Splash navigator={navigator}/>
    }
    if(route.name === 'loginPage')
    {
        return <Login navigator={navigator}/>
    }
    if(route.name === 'homePage')
    {
        return <Home navigator={navigator}/>
    }
    else if(route.name === 'dinoPage')
    {
        return <Dino navigator={navigator}/>
    }
    else if(route.name === 'spacePage')
    {
        return <Space navigator={navigator}/>
    }
    else if(route.name === 'optionsPage')
    {
        return <Options navigator={navigator}/>
    }
    else if(route.name === 'optionsPage')
    {
        return <Options navigator={navigator}/>
    }
  }

  render()
  {
    return (
      <Navigator initialRoute={{name: 'splashPage'}}
                 renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('edu360_1', () => edu360_1);
