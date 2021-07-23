import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Text,
    TextInput,
    ImageBackground,
    ScrollView,
} from 'react-native'
import { scale } from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Screen1 = () => {
    return(
        <View style={styles.container}>
            <View style={styles.group1}>
                <Text style={styles.me}>Tôi</Text>
                <View style={styles.input}>
                    <TextInput placeholder='Tìm tên/ID/Tên phòng live'/>
                    <TouchableOpacity>
                        <Image style={styles.ic_search} source={require('./assets/ic_search.png')}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image style={styles.ic_profile_off} source={require('./assets/ic_profile_off.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <ImageBackground
            imageStyle={{borderRadius: 30}}
             style={styles.group2} resizeMode="cover" source={require('./assets/bg_profile.png')}>
                <TouchableOpacity style={styles.edit_profile}>
                    <Image style={styles.ic_edit} source={require('./assets/ic_edit.png')}/>
                </TouchableOpacity>
                <Image style={styles.avatar} source={require('./assets/ic_default_avatar.png')} />
                <Text style={styles.txtAvatar}>Khách</Text>
                <View style={styles.group2_1}>
                    <TouchableOpacity style={styles.login}>
                        <Text style={styles.txtlogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dangKy}>
                        <Text style={styles.txtDangKy}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.group3}>
                <View style={styles.group3_1}>
                    <Text style={styles.txtFriend}>0</Text>
                    <Text style={styles.txtFriend}>Bạn bè</Text>
                </View>
                <View style={styles.group3_1}>
                    <Text style={styles.txtFriend}>0</Text>
                    <Text style={styles.txtFriend}>Theo dõi</Text>
                </View>
                <View style={styles.group3_1}>
                    <Text style={styles.txtFriend}>0</Text>
                    <Text style={styles.txtFriend}>Fan</Text>
                </View>
            </View>
            <ImageBackground 
            imageStyle={{borderRadius: 10}}
            resizeMode='cover'
            source={require('./assets/bg_account_balance.png')}
            style={styles.group4}>
                <View style={styles.group4_1}>
                    <Text style={styles.txtMoney}>Ví tiền / Số dư</Text>
                </View>
                <View style={styles.group4_2}>
                    <View style={styles.gold}>
                        <Image style={styles.ic_gold} source={require('./assets/ic_gold.png')}/>
                        <Text style={styles.txtGold}>Vàng</Text>
                    </View>
                    <View style={styles.pointGold}>
                        <Text style={styles.txtPointGold}>0</Text>
                    </View>
                </View>
                <View style={styles.group4_2}>
                    <View style={styles.gold}>
                        <Image style={styles.ic_gold} source={require('./assets/ic_ruby.png')}/>
                        <Text style={styles.txtGold}>Ruby</Text>
                    </View>
                    <View style={styles.pointGold}>
                        <Text style={styles.txtPointRuby}>0</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.group5}>
                <TouchableOpacity style={styles.group5_1}>
                    <Image style={styles.ic_recharge} source={require('./assets/ic_recharge.png')}/>
                    <Text style={styles.txtNapTien}>Nạp tiền</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.group5_1}>
                    <Image style={styles.ic_recharge} source={require('./assets/ic_without.png')}/>
                    <Text style={styles.txtNapTien}>Rút tiền</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.group5_1}>
                    <Image style={styles.ic_recharge} source={require('./assets/ic_shopping.png')}/>
                    <Text style={styles.txtNapTien}>Mua Sắm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.group5_1}>
                    <Image style={styles.ic_recharge} source={require('./assets/ic_VIP_level.png')}/>
                    <Text style={styles.txtNapTien}>Cấp VIP</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.group6}>
                <View style={styles.hanhLy}>
                    <Image style={styles.ic_luggage} source={require('./assets/ic_luggage.png')}/>
                    <TouchableOpacity style={styles.inputHanhLy}>
                        <Text style={styles.txtHanhLy}>Hành lý</Text>
                        <Image style={styles.ic_next} source={require('./assets/ic_next.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.hanhLy}>
                    <Image style={styles.ic_luggage} source={require('./assets/ic_level.png')}/>
                    <TouchableOpacity style={styles.inputHanhLy}>
                        <Text style={styles.txtHanhLy}>Cấp độ</Text>
                        <Image style={styles.ic_next} source={require('./assets/ic_next.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.hanhLy}>
                    <Image style={styles.ic_luggage} source={require('./assets/ic_ranking.png')}/>
                    <TouchableOpacity style={styles.inputHanhLy}>
                        <Text style={styles.txtHanhLy}>Xếp hạng</Text>
                        <Image style={styles.ic_next} source={require('./assets/ic_next.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
 
export default Screen1;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 6
    },
    group1:{
        flexDirection: 'row',
        paddingBottom: 10,
        height: height/15* 0.7,
    },
    me:{
        fontSize: scale(18),
        color: 'blue',
        fontWeight: 'bold',
        marginRight: 15
    },
    input:{
        flexDirection: 'row',
        width: scale(250),
        height: scale(30),
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        padding: 4,
        marginRight: 15,
    },
    ic_search:{
        width: scale(20),
        height: scale(20),  
    },
    ic_profile_off:{
        width: scale(25),
        height: scale(25),
    },
    group2:{
        width: width-12,
        height: height/15*5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },
    edit_profile:{
        width: 20,
        height: 20,
        position: 'absolute',
        top: 15,
        right: 7
    },
    ic_edit:{
        width: '100%',
        height:'100%',
    },
    avatar:{
        width: 75,
        height: 75,
        marginBottom: 5
    },
    txtAvatar:{
        fontSize: 15,
        marginBottom: 5
    },
    group2_1:{
        flexDirection: 'row',
        paddingBottom: scale(20)
    },
    login:{
        width: scale(100),
        height: scale(20),
        backgroundColor: '#3366FF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginRight: 10
    },
    txtlogin:{
        color: "#fff"
    },
    dangKy:{
        width: scale(100),
        height: scale(20),
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor: "#20232a",
        color: "#20232a",
    },
    txtDangKy:{
        color: 'black',
        fontWeight: 'bold'
    },
    group3:{
        flexDirection: 'row',
        width: width-12,
        height: height/15*2,
        justifyContent: 'space-between',
    },
    group3_1:{
        width: scale(80),
        height: scale(80),
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtFriend:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    group4:{
        width: width-12,
        height: height/15*2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    group4_1:{
        alignItems:'center',
        width: scale(100),
    },
    txtMoney:{
        color: '#fff'
    },
    group4_2:{
        justifyContent:'center',
        alignItems: 'center',
        width: scale(100),
    },
    gold:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    ic_gold:{
        width: 20,
        height: 20,
        flexDirection: 'row',
    },
    txtGold:{
        color: '#fff',
    },
    pointGold:{
        backgroundColor: '#888888',
        width: scale(100),
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txtPointGold:{
        color:'#fff'
    },
    group4_3:{
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(100),
    },
    txtPointRuby:{
        color: '#FFFF33',
    },
    group5:{
        width: width-12,
        height: height/15*2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    group5_1:{
        width: scale(85),
        height: scale(100),
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    ic_recharge:{
        width: scale(50),
        height: scale(38),
        marginBottom: 5,
    },
    txtNapTien:{
        fontWeight: 'bold',
        fontSize: 12
    },
    group6:{
        width: width-12,
        height: height/15*3,
    },
    hanhLy:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        alignItems: 'center',
        borderBottomColor: '#BBBBBB',
        borderBottomWidth: 0.5,
        paddingVertical: 5,
    },
    ic_luggage:{
        width: scale(30),
        height: scale(30),
        marginRight: 5,
    },
    inputHanhLy:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ic_next:{
        width: 20,
        height: 20
    },
    txtHanhLy:{
        width: width- 72,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});