import {StyleSheet, Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%"
    },
    containerSignIn:{
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
        marginTop: 20,
        fontSize: 14,
        textDecorationLine: "underline",
        fontStyle: "normal",
        color: "#3377FF"
    },

    // Home styles
    containerHome:{
        margin: 15,
        alignItems: "center",
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
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    welcomeWord: {
        marginVertical: 10,
        color: "#37f",
        fontWeight: "200",
    },
    dividingLine:{
        width: "98%",
        borderWidth: 0.25,
        color: "gray",
    },
    homefeature:{
        width: "98%",
        height: 120,
    },
    lineTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    link: {
        color: "#37f",
        textDecorationLine: "underline",
        marginRight: 10,
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
    scrollViewHorizontalHomeFeature: {
        marginBottom: 0,
    },
    homeRooms:{
        marginTop: 10,
        width: "98%",
        height: 170,
    },

    imageRoomHome: {
        width: "100%",
        left: 22,
        borderRadius: 8,
        borderBottomColor: "#000000",
        borderWidth: 1,
    },

    homeRomScreenItem:{
        marginTop: 10,
        width: 150,
    },
    homeRoomSceenBtnImage:{
        width: "100%",
        height:100,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    homeroomSceenBtnText:{
        backgroundColor: "#7A8599",
        height: 30,
        justifyContent: "center",
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    homeroomSceenBtnName:{
        marginLeft: 10,
        color: "#FFFFFF"
    },

    //Notification styles
    containerSetting:{
        alignItems:'center',
        justifyContent: 'center',
    },

    notificationCard: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 5,
        height: 130,
        marginTop: 20,
        padding: 10,
        borderWidth: 0.25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    titleNoti:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    warningNoti: {
        fontSize: 14,
        textAlign: "center",
        color: "#fff",
        backgroundColor:"#fa0",
        width: "30%",
        padding: 3,
        borderRadius: 5,
    },
    settingNoti: {
        textAlign: "center",
        fontSize: 14,
        color: "#fff",
        backgroundColor:"#37f",
        width: "30%",
        padding: 3,
        borderRadius: 5,

    },
    alertNoti: {
        textAlign: "center",
        fontSize: 14,
        color: "#fff",
        backgroundColor:"#ff3131",
        width: "30%",
        padding: 3,
        borderRadius: 5,
    },
    timeNoti: {
        marginVertical: 5,
        fontSize: 13,
    },
    contentNotiChecked: {
        marginVertical: 15,
        fontSize: 14,
        fontWeight: "500",
    },
    contentNotiUnChecked: {
        marginVertical: 15,
        fontSize: 14,
        fontWeight: "700",
    },

    //Feature Styles
    containerFeature:{
        flex: 1,
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

    //Room Styles
    containerRoom:{
        flex: 1,
        alignItems:'center'
    },
    roomScreenItem:{
        width: "100%",
        alignItems:'center',
        marginVertical: 10,
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
    containerRoomDetail:{
        alignItems: 'center',
    },

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

    //Setting Styles
    headerSetting:{
        alignItems:'center',
    },

    avatarView:{
        marginTop: 30,
    },

    avatarImage:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        borderWidth: 1,
    },

    avatarBtn:{
        marginTop: -30,
        marginLeft: 100,
    },

    useNameText:{
        marginTop: 10,
        fontWeight:"bold",
        fontSize: 20,
    },

    editSettingBtn:{
        width: 150,
        height: 40,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: "center",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 10,
    },

    settingBtnText:{
        marginLeft: 10,
    },

    lineSetting:{
        borderWidth: 0.25,
        borderColor: "#000000",
        width: "90%",
        marginTop: 10,
    },

    bodySetting:{
        width: "100%",
        alignItems:'center',
        marginTop: 30,
    },

    bodySettingBtnView:{
        width:"80%",
        height: 50,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: "center",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 10,
    },

    signoutSettingBtn:{
        width: "60%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#3377FF",
    },
    signoutSettingText:{
        fontSize: 18,
        color: "#FFFFFF"
    },
    
    //Light Styles
    lightCard:{
        flexDirection: 'row',
        justifyContent: "flex-start",
    },
    lightItem:{
        height: 150,
        width: 150,
        backgroundColor: "#CFD7E6",
        alignItems:"center",
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 10,  
    },
    headerLightItem:{
        flexDirection: 'row',
        alignItems:"center",
        width: "100%",
        borderBottomWidth: 1,
        justifyContent: "space-between"
    },
    bodyLightItem:{
        alignItems:"center",
        justifyContent: "center",
        width: "100%",
    }
});

export default styles;
