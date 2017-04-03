import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import FormatTime from 'minutes-seconds-milliseconds'


export default class Timer extends Component {

           constructor(props) {
            super(props)
            this.timer = null
            this.state = {
                isRunning: false,
                timeEnabled: null,
                timeSet:null
                
                
            }
            
        }

    render() {

        return(
            <View style={styles.container}>
                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>{this.state.timeEnabled== null ? "00:00:00":FormatTime(this.state.timeEnabled)} </Text>
                </View>

                <View style={styles.buttonContainer}>
                <Button title="5" onPress= {this.handleButton.bind(this)}/>
                <Button title="start" onPress= {this.handleStart.bind(this)} />
                </View>

            </View>

        )
    }

    handleButton() {

        
        this.setState({
            
            timeEnabled: this.state.timeEnabled + 1000,
        })

        }

    handleStart() {
        var startTimer = new Date()-1000
        this.setState({
            isRunning: true,
        })

        this.timer = setInterval(()=> {
            this.setState({
            timeEnabled:  new Date() - startTimer,                                                                                          
            
            }),30                                                                                                                                                                                                                                                           

        })

        if(this.state.timeEnabled === 0) {
            clearInterval(this.timer)
        }
     
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    timerContainer: {
        flex: 0.4,
        backgroundColor: "red"
    },
    buttonContainer: {
        flex: 0.6,
        backgroundColor: "blue"
    },
    timerText: {
        fontSize: 28
    }
})