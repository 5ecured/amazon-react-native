import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        marginVertical: 5
    },
    root: {
        padding: 10
    },
    label: {
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 3
    },
    errorLabel: {
        color: 'red'
    }
})

export default styles