import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native'

export default class TimerButton extends Component {

    constructor(props) {
        super(props)
        this.state = {

            dynamicStyle: {

                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 90,
                borderRadius: 4,
                backgroundColor: "#FFF",
                borderColor: "#2f4f4f",
                borderWidth: 3,
                backgroundColor: "#FFF",

            }
        }
    }

    render() {

        return (
            <View>
                <TouchableHighlight underlayColor="#000" style={this.state.dynamicStyle} onPress={ this.props.onPress} >
                    <Text style={styles.buttonText}> {this.props.send}     </Text>
                </TouchableHighlight>
            </View>
        );
       
    }

    handleButton() {
        console.log("Helloo")
        
    }


}

const styles = StyleSheet.create({



  

    buttonText: {

        fontSize: 20,
        color: "#000",
        fontWeight: "bold",

    }

});

