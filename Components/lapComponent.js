import React, { Component } from 'react'
import {
    StyleSheet,
    View, Text
} from 'react-native'

export default class lapComponent extends Component {


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.lapContainer}>
                    <Text style={styles.lapText}>Lap {this.props.lapNumber} </Text>
                </View>

                <View style={styles.lapDiffContainer}>
                    <Text style={styles.lapDiff1}>{this.props.diff}</Text>
                </View>

                <View style={styles.lapTimeContainer}>
                    <Text style={styles.lapTime1}>{this.props.lapTime}</Text>
                </View>

            </View>

        )
    }


}

lapComponent.propsTypes = {
    lapTime: React.PropTypes.number.isRequired,
    lapNumber: React.PropTypes.number.isRequired
}

const styles = StyleSheet.create({

    container: {

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"

    },
    lapContainer: {
        height: 40,
        width: 50,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center"

    },
    lapText: {
        fontSize: 18,
        color: "#FFF",

    },
    lapTimeContainer: {
        height: 50,
        width: 100,
        justifyContent: "center",
        alignItems: "center"

    },
    lapTime1: {
        fontSize: 25,

    },
    lapDiffContainer: {
        height: 50,
        width: 100,
        justifyContent: "center",
        alignItems: "center"

    },
    lapDiff1: {
        fontSize: 18,

    },




})