import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    ToastAndroid,
    ListView
} from 'react-native';
import TimerButton from './Components/TimerButton'
import FormatTime from 'minutes-seconds-milliseconds'
import LapComponent from './Components/lapComponent'


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            timeEnabled: null,
            isRunning: false,
            laps: [],
            reset: false,
            prevlaps: [0],
            difflaps:[],
           



            //lapList: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1! = r2 })


        }
    }

    lapList() {
        
        return this.state.laps.map((lap1, index) => {
            return (
                <LapComponent lapTime={FormatTime(lap1)} lapNumber={index + 1} key={index} diff = {

                   FormatTime( this.state.difflaps[index])
                } />
            );

        })  
        
    }

  


    

    

   


    // getDataSource(laps) {
    //     return this.state.lapList.cloneWithRows(laps)
    // }



    render() {

        return (
            <View style={styles.container} showsVerticalScrollIndicator={false}>

                <View style={styles.topContainer}>
                    <View style={styles.timerContent}>
                        <Text style={styles.timeText}>{
                            this.state.timeEnabled == null ? "00:00:00" : FormatTime(this.state.timeEnabled)
                        }</Text>
                    </View>

                    <View style={styles.buttonContent}>
                        <TimerButton send={this.state.isRunning ? "Stop" : "Start"}
                            onPress={() => {
                                this.state.isRunning ? this.stopTimer() : this.startTimer()
                            }
                            
                            }  />


                        {this.state.isRunning == false ? this.state.isRunning : <TimerButton send="Lap" onPress={() => { this.handleLap() } }  />}


                        {this.state.reset == true ? <TimerButton send="Reset" onPress={() => {
                            this.state.isRunning == true ? ToastAndroid.show('Stop it First', 1000) : this.handleReset()
                        } } /> : this.state.reset == false}

                    </View>

                </View>


                <ScrollView style={styles.bottomContainer}>
                    {this.lapList()}
                    
                    
                </ScrollView>

                { /* <ListView  dataSource={this.getDataSource(this.state.laps)}  re
nderRow={this._renderRow}/> */}

            </View>
        );
    }




    _renderRow(lap, sectionId, rowId) {
        return <LapComponent lapTime={FormatTime(lap)} lapNumber={rowId} />
    }


    startTimer(e) {
        var startTime = new Date()
        this.setState({
            isRunning: true,
            reset: true,
            
        })
        this.timer = setInterval(() => {
            this.setState({
                timeEnabled: new Date - startTime
            });
        }, 300);
    }

    stopTimer() {

        clearInterval(this.timer)
        this.setState({
            isRunning: false
        })
        
    }
    handleLap() {

        let lap = this.state.timeEnabled
        this.setState({
            laps: this.state.laps.concat(lap),
            prevlaps: this.state.prevlaps.concat(lap)

        }, () => {
            console.log(this.state.laps)
            console.log(this.state.prevlaps)

            //LAP DIFFERENCE LOGIC

            var arrlen = this.state.prevlaps
            var diff
            for (var i = 0; i < arrlen.length - 1; i++) {
                diff=arrlen[i+1]-arrlen[i]
            }
            this.setState({
                difflaps:this.state.difflaps.concat(diff)
            },()=>{
                console.log(this.state.difflaps)
            })
        });




    }

    handleReset() {

        this.setState({
            reset: false,
            timeEnabled: "00:00:00",
            laps: [],
            prevlaps: [0],
            difflaps:[]

        })
    }



}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "red",
        flexDirection: "column",     //Top to Bottom (DEFAULT)
    },

    topContainer: {
        flex: 0.4,
        backgroundColor: "#fffaf0"
    },
    bottomContainer: {
        flex: 0.6,
        backgroundColor: "#008b8b"
    },


    timerContent: {
        flex: 0.5,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    timeText: {
        fontSize: 40,
        color: "#000"
    },

    buttonContent: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-around"

    }

});
