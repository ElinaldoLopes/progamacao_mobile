import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#fff"
    },

    input: {
        backgroundColor: "#f9f9f9",
        width: "80%",
        marginBottom: 25,
        color: "#333",
        fontSize: 22,
        borderRadius: 7,
        padding: 10
    },

    button: {
        backgroundColor: "#00ff00",
        width: "80%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7
    }
});