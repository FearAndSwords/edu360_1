import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './components/Home';
import Dino from './components/Dino';
import Space from './components/Space'
import Options from './components/Options';

export default class edu360_1 extends Component
{
  constructor()
  {
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator)
  {
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
  }

  render()
  {
    return (
      <Navigator initialRoute={{name: 'homePage'}}
                 renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('edu360_1', () => edu360_1);
