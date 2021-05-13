import {StyleSheet, Platform, StatusBar} from 'react-native';

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
    forgetView:{
        width: "100%",
        alignItems: "flex-end",
    },

    forgetBtn: {
        fontSize:14,
        fontStyle: 'normal',
        textDecorationLine: 'underline',
        marginRight: 40,
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

    // Home styles
    containerHome:{
        margin: 15,
    },
    welcomeCard: {
        width: "100%",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 5,
        height: 110,
        marginTop: StatusBar.currentHeight + 10,
        marginBottom: 8,
        padding: 10,
    },
    welcomeWord: {
        marginVertical: 10,
        color: "#37f",
        fontWeight: "200",
    },
    lineTitle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    link: {
        color: "#37f",
        textDecorationLine: "underline",
    },
    roomDetailBtnHome: {
        height: 85,
        width: 85,
        backgroundColor: "#C4C4C4",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        marginRight: 20,
        borderRadius: 10,
    },
    roomBtnText: {
        marginTop: 5,
        fontSize: 12,
    },
    scrollViewHorizontalHome: {
        marginBottom: 10,
    },
    imageRoomHome: {
        width: 118,
        height: 184,
        left: 22,
        borderRadius: 8,
        borderBottomColor: "#000000",
        borderWidth: 1,
    },

    // Notification styles
    notificationCard: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 5,
        height: 130,
        marginTop: 10,
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
    },
    contentNoti: {
        marginVertical: 5,
        fontSize: 12,
    },

    //Feature Styles
    containerView:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems:'center',
    },

    featureRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    ViewBtnLeft:{
        height: 125,
        width: 125,
        backgroundColor: "#C4C4C4",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 40,
        marginRight: 20,
    },

    ViewBtnRight:{
        height: 125,
        width: 125,
        backgroundColor: "#C4C4C4",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 20,
    },

    //Rom Styles
    romScreenItem:{
        width: "100%",
        alignItems:'center',
        marginTop: 20,
    },

    roomSceenBtn:{
        width: "80%",
        borderRadius: 8,
        borderBottomColor: "#000000",
        borderWidth: 1,
    },

    roomSceenBtnImage:{
        width: "100%",
        height:100,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },

    roomSceenBtnText:{
        backgroundColor: "#7A8599",
        height: 30,
        justifyContent: "center",
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },

    roomSceenBtnName:{
        marginLeft: 10,
        color: "#FFFFFF"
    },

    //Room Detail Styles
    roomDetailSceenImage:{
        width:"100%",
        height: 100,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        marginBottom: 20,
    },

    roomDetailBtnLeft:{
        height: 125,
        width: 125,
        backgroundColor: "#C4C4C4",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        marginRight: 20,
    },

    roomDetailBtnRight:{
        height: 125,
        width: 125,
        backgroundColor: "#C4C4C4",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 20,
    },

});

export default styles;
