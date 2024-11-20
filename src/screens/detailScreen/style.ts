import { StyleSheet } from "react-native";
import { vw, vh } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#ace5fa",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 30,
    },
    textInput: {
        fontSize: 20,
        margin: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    nameInputContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        width: "65%",
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: "#1c5dad",
        height: 50,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    splaceImage: {
        width: 150,
        height: 150,
    },
    mainView: {
        backgroundColor: "#F5EADC",
        justifyContent: "center",
        alignItems: "center",
    },
    enterText: {
        fontSize: 18,
        fontWeight: "500"

    },
    done: {
        fontSize: 20,
        color: "white",
        fontWeight: "600"
    }
});

export default styles;