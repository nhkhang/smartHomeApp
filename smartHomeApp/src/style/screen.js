
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 300,
        height: 200,
    },
    title:{
        color:"#5077C5",
        fontWeight: 'bold',
        fontSize: 28,
        paddingBottom: 20,
    },
    inputView:{
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        width: "80%",
        height: 45,
        marginTop: 20,
        borderBottomColor: "#000000",
        borderWidth: 1,
    },
    textInput:{
        height: 50,
        flex: 1,
        padding: 5,
        marginLeft: 5,
    },
    forgetBtn: {
        fontSize:14,
        fontStyle: 'normal',
        paddingLeft:120,
        textDecorationLine: 'underline',
    },
    signinBtn:{
        width: "60%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#3377FF",
    },
    signinText: {
        fontSize: 24,
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    singupBtn: {
        width: "60%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 1,
    },
    signupText:{
        fontSize: 24,
        fontStyle: "normal",
        color: "#3377FF"
    },
    notificationCard: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 5,
        height: 130,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
    },
    warningNoti: {
        color: "#fff",
        backgroundColor:"#fa0",
        paddingHorizontal: 22,
        width: "30%",
        padding: 3,
        borderRadius: 5,
    },
    settingNoti: {
        color: "#fff",
        backgroundColor:"#37f",
        paddingHorizontal: 25,
        width: "30%",
        padding: 3,
        borderRadius: 5,
    },
    alertNoti: {
        color: "#fff",
        backgroundColor:"#ff3131",
        paddingHorizontal: 35,
        width: "30%",
        padding: 3,
        borderRadius: 5,
    },
    timeNoti: {
        marginVertical: 5,
        fontSize: 13,
    }
});

export default styles;
