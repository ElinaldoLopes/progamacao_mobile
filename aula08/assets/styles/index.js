import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        backgroundColor: '#',
        width: "45%",
        height: 200,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 5,
    },

    text: {
        color: '#000',
        fontSize: 20,
    },

})