/**
 *  * Created by liaoyf on 2017/10/9 0009.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class SideMenu extends React.Component{
    static navigationOptions = {
    };

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../../../image/login_bg.jpeg')}
                    style={styles.top}
                    resizeMode="cover"
                >
                    <View style={styles.qrcode}>
                        <FontAwesome name="qrcode" color="#fff" size={28}/>
                    </View>
                    <View style={styles.userInfo}>
                        <View style={styles.vator}>
                            <Image
                                source={require('../../../../image/vator.jpg')}
                                style={styles.vatorImage}
                            />
                            <Text style={styles.userName}>づ_r</Text>
                        </View>
                        <View style={styles.level}>
                            <FontAwesome style={styles.star} name="star" color="#ff6600"/>
                            <FontAwesome style={styles.star} name="star" color="#ff6600"/>
                            <FontAwesome style={styles.star} name="star" color="#ff6600"/>
                            <FontAwesome style={styles.star} name="star" color="#ff6600"/>
                        </View>
                        <Text style={styles.signMes} numberOfLines={1}>当所有人都拿你当回事的时候，你不能太拿自己当回事。当所有人都不拿你当回事的时，你一定得瞧得上自己。</Text>
                    </View>
                </ImageBackground>
                <FlatList
                    style={styles.middle}
                    data={[
                        {
                            label: '了解会员特性',
                            iconName: 'user'
                        },
                        {
                            label: 'QQ钱包',
                            iconName: 'credit-card'
                        },
                        {
                            label: '个性装扮',
                            iconName: 'social-skype'
                        },
                        {
                            label: '我的收藏',
                            iconName: 'social-reddit'
                        },
                        {
                            label: '我的相册',
                            iconName: 'picture'
                        },
                        {
                            label: '我的文件',
                            iconName: 'folder'
                        },
                        {
                            label: '免流量特权',
                            iconName: 'ghost'
                        }
                    ]}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.middleItem}>
                                <SimpleLineIcons name={item.iconName} color="#5f6379" size={20}/>
                                <View style={{marginLeft: 15}}>
                                    <Text style={styles.middleItemText}>{item.label}</Text>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.label}
                />
                <View style={styles.bottom}>
                    <View style={[styles.bottomItem, styles.iconItem]}>
                        <MaterialIcons name="settings" color="#5f6379" size={18}/>
                        <View style={styles.itemText}>
                            <Text>设置</Text>
                        </View>
                    </View>
                    <View style={[styles.bottomItem, styles.iconItem]}>
                        <Ionicons name="ios-moon" color="#5f6379" size={18}/>
                        <View style={styles.itemText}>
                            <Text>夜间</Text>
                        </View>
                    </View>
                    <View style={[styles.bottomItem, styles.weather]}>
                        <View>
                            <Text style={styles.ssd}>31°C</Text>
                        </View>
                        <Text>厦门</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
    },
    qrcode: {
        alignItems: 'flex-end',
        paddingTop: 10,
        paddingRight: 15
    },
    vator: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    vatorImage: {
        width: 35,
        height: 35,
        borderRadius: 35,
        marginRight: 5,
        borderWidth: 2,
        borderColor: '#fff'
    },
    userInfo: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 15
    },
    userName: {
        color: '#fff',
        fontSize: 28
    },
    level: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5
    },
    star: {
        marginRight: 5
    },
    signMes: {
        color: '#fff',
        fontSize: 14
    },
    middle: {
        flex: 1,
        padding: 20
    },
    middleItem: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottom: {
        flexDirection: 'row'
    },
    bottomItem: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },
    weather: {
    },
    iconItem: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 5
    },
    ssd: {
        color: '#12b7f5',
        fontSize: 28
    },
    middleItemText: {
        color: '#000',
        fontSize: 18
    }
});

export default SideMenu;