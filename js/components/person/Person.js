import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ScrollView,
    PixelRatio,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from 'apsl-react-native-button';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


let {width, height} = Dimensions.get('window');

class Person extends React.Component {
    static navigationOptions = {
        title: '个人信息',
        header: null
    };

    constructor() {
        super();

        this.returnPrev = this.returnPrev.bind(this);
    }

    returnPrev() {
        let {goBack} = this.props.navigation;

        goBack();
    }

    render() {
        let {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View
                    style={styles.top}
                >
                    <TouchableOpacity style={styles.topLeft} onPress={this.returnPrev}>
                        <SimpleLineIcons style={[styles.textWhite, styles.angle]} name="arrow-left"/>
                        <Text style={[styles.textWhite]}>返回</Text>
                    </TouchableOpacity>
                    <View style={styles.topRight}>
                        <FontAwesome style={[styles.textWhite, styles.camera]} name="camera"/>
                        <TouchableOpacity>
                            <Text style={[styles.textWhite]}>更多</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mid}>
                    <ScrollView>
                        <View style={styles.midTop}>
                            <ImageBackground
                                source={require('../../../image/login_bg.jpeg')}
                                resizeMode="cover"
                                style={{flex: 1}}
                            >
                                <View style={styles.zan}>
                                    <EvilIcons style={styles.zanIcon} name="like"/>
                                    <Text style={styles.zanText}>23</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.vatorBox}>
                            <Image style={styles.vator} source={require('../../../image/vator.jpg')}/>
                        </View>
                        <View style={styles.xz}>
                            <EvilIcons style={[styles.zanIcon, styles.xzIcon]} name="star"/>
                            <Text style={[styles.zanText, styles.xzText]}>5颗</Text>
                        </View>
                        <View style={styles.user}>
                            <Text style={styles.userName}>林在龙</Text>
                            <View style={styles.userInfoBox}>
                                <Text style={styles.signText} numberOfLines={1}>当所有人都拿你当回事的时候，你不能太拿自己当回事。当所有人都不拿你当回事的时，你一定得瞧得上自己。</Text>
                                <FontAwesome style={styles.more} name="angle-right"/>
                            </View>
                        </View>
                        <View style={styles.infoList}>
                            <View style={styles.item}>
                                <View style={styles.itemIconBox}>
                                    <FontAwesome style={styles.itemIcon} name="qq"/>
                                </View>
                                <Text style={styles.itemText}>づ_r(893753543)</Text>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.itemIconBox}>
                                    <FontAwesome style={styles.itemIcon} name="user"/>
                                </View>
                                <Text style={styles.itemText}>男 26岁 摩羯座 福建-泉州</Text>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.itemIconBox}>
                                    <FontAwesome style={styles.itemIcon} name="university"/>
                                </View>
                                <Text style={styles.itemText}>计算机/互联网/通信</Text>
                                <View style={styles.moreBox}>
                                    <FontAwesome style={styles.itemMore} name="angle-right"/>
                                </View>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.itemIconBox}>
                                    <FontAwesome style={styles.itemIcon} name="level-up"/>
                                </View>
                                <View style={styles.level}>
                                    <FontAwesome style={styles.star} name="star" color="#ff6600"/>
                                    <FontAwesome style={styles.star} name="star" color="#ff6600"/>
                                    <FontAwesome style={styles.star} name="star" color="#ff6600"/>
                                    <FontAwesome style={styles.star} name="star" color="#ff6600"/>
                                </View>
                                <Text style={styles.itemText}>慢速中</Text>
                                <View style={styles.moreBox}>
                                    <FontAwesome style={styles.itemMore} name="angle-right"/>
                                </View>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.itemIconBox}>
                                    <FontAwesome style={styles.itemIcon} name="user-secret"/>
                                </View>
                                <Text style={styles.itemText}>TA还未开通任何特权服务</Text>
                                <View style={styles.moreBox}>
                                    <FontAwesome style={styles.itemMore} name="angle-right"/>
                                </View>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.itemIconBox}>
                                    <FontAwesome style={styles.itemIcon} name="star"/>
                                </View>
                                <Text style={styles.itemText}>林在龙的空间</Text>
                                <View style={styles.moreBox}>
                                    <FontAwesome style={styles.itemMore} name="angle-right"/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.xq}>
                            <View style={styles.line}/>
                            <FontAwesome style={styles.circle} name="circle"/>
                            <Text>兴趣爱好</Text>
                            <FontAwesome style={styles.circle} name="circle"/>
                            <View style={styles.line}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.bottom}>
                    <Button style={styles.bottomBtn} onPress={e => {}}>QQ电话</Button>
                    <Button style={[styles.bottomBtn, styles.bottomPrimaryBtn]} textStyle={{color: '#fff'}} onPress={e => navigate('Chat')}>发消息</Button>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        paddingTop: 10,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        zIndex: 2
    },
    topLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        backgroundColor: 'transparent'
    },
    angle: {
        fontSize: 18,
        marginRight: 5
    },
    textWhite: {
        color: '#fff'
    },
    topRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: 'transparent'
    },
    camera: {
        marginRight: 20,
        fontSize: 16
    },
    mid: {
        flex: 1,
        backgroundColor: '#fff'
    },
    midTop: {
        height: 150,
    },
    user: {
        marginTop: 65,
        alignItems: 'center'
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },
    userInfoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.6
    },
    signText: {
        color: '#999',
        fontSize: 12
    },
    more: {
        marginLeft: 5,
        color: '#999',
        fontSize: 14
    },
    infoList: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 15
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    itemText: {
        fontSize: 14,
        color: '#555'
    },
    itemIconBox: {
        minWidth: 30,
        alignItems: 'center'
    },
    itemIcon: {
        marginRight: 10,
        color: '#555',
        fontSize: 16
    },
    moreBox: {
        flex: 1,
        alignItems: 'flex-end'
    },
    itemMore: {
        fontSize: 18,
        color: '#999'
    },
    xq: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    line: {
        width: 60,
        height: 1,
        backgroundColor: '#666'
    },
    circle: {
        fontSize: 6,
        color: '#666',
        marginLeft: 5,
        marginRight: 5
    },
    bottom: {
        backgroundColor: '#efefef',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    bottomBtn: {
        width: width * 0.46,
        height: 35,
        backgroundColor: '#fff',
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#ddd',
        margin: 0,
        padding: 0,
        marginTop: 14,
        borderRadius: 4
    },
    bottomPrimaryBtn: {
        backgroundColor: '#6fa9ff'
    },
    zan: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    zanIcon: {
        fontSize: 28,
        color: '#fff'
    },
    zanText: {
        fontSize: 12,
        color: '#fff'
    },
    vatorBox: {
        position: 'absolute',
        left: width / 2 - 50,
        top: 100
    },
    vator: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 5,
        borderWidth: 2,
        borderColor: '#fff'
    },
    level: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5
    },
    star: {
        marginRight: 5,
        backgroundColor: 'transparent'
    },
    xz: {
        position: 'absolute',
        right: 0,
        top: 150,
        padding: 5,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center'
    },
    xzIcon: {
        color: '#ffd114'
    },
    xzText: {
        color: '#ffd114'
    }
});

export default Person;
