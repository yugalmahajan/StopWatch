import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Main from './Main'
import Round from './Components/TimerButton'
import Timer from './Components/Timer'
export default class tabBar extends Component {

   

    render() {

        
        return(
            <ScrollableTabView tabBarActiveTextColor="#2f4f4f" tabBarTextStyle={styles.text} tabBarUnderlineStyle={{backgroundColor:'#2f4f4f'}} >
                <Main tabLabel="StopWatch"/>
                <Timer tabLabel="Calculator"/>
            </ScrollableTabView>
        );
    }

    
    
}

const styles = StyleSheet.create({
   text:{
       fontSize: 18,
   },
   underline :{
       color: "red"
   }
    
})
