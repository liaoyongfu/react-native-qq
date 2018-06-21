/**
 *  * Created by liaoyf on 2017/9/29 0029.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ImageBackground,
    PixelRatio,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import PublicStyle from '../../css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Button from 'apsl-react-native-button';
import Messages from './components/Messages';

import keyboardPop from '../../public/utils/keyboard-pop/keyboardPop';

class Chat extends React.Component {
    static navigationOptions = {
        title: '登陆页',
        header: null
    };
    
    constructor() {
        super();
        
        this.sendmsg = this.sendmsg.bind(this);
        this.hideKeyboard = this.hideKeyboard.bind(this);

        this.state = {
            keyboardPop: new keyboardPop(),
            sendText: '',
            records: [
                {
                    time: '昨天 14:11',
                    list: [
                        {
                            type: '1',
                            name: '林在龙',
                            content: '在干嘛呢？'
                        },
                        {
                            type: '1',
                            name: '林在龙',
                            content: '个有趣我发现一的游戏个有趣我发现一的游戏个有趣我发现一的游戏个有趣我发现一的游戏个有趣我发现一的游戏个有趣我发现一的游戏'
                        },
                        {
                            type: '1',
                            name: '林在龙',
                            content: '在干嘛呢？'
                        },
                        {
                            type: '1',
                            name: '林在龙',
                            content: '在干嘛呢？'
                        },
                        {
                            type: '2',
                            name: '廖永福',
                            content: '在上班啊！'
                        },
                        {
                            type: '1',
                            name: '林在龙',
                            content: '在干嘛呢？'
                        },
                        {
                            type: '2',
                            name: '廖永福',
                            content: '在上班啊！'
                        },
                        {
                            type: '1',
                            name: '林在龙',
                            content: '在干嘛呢？'
                        },
                        {
                            type: '2',
                            name: '廖永福',
                            content: '在上班啊！'
                        }
                    ]
                },
                {
                    time: '22:30',
                    list: [
                        {
                            type: '1',
                            name: '林在龙',
                            content: '晚上看电影去？'
                        },
                        {
                            type: '2',
                            name: '廖永福',
                            content: '好啊！'
                        }
                    ]
                }
            ]
        };
    }

    /**
     * 发送消息
     */
    sendmsg () {
        alert("消息内容为："+ this.state.sendText);
    }

    /**
     * 滚动
     * @param {事件} e 
     */
    showKeyboard (refName) {
        const scollView = this.refs.msgScroll;
        const elementName = this.refs[refName];
        this.state.keyboardPop.showKeyboard(scollView, elementName, 80);
    }

    /**
     * 重置滚动
     */
    hideKeyboard() {
        const scollView = this.refs.msgScroll;
        this.state.keyboardPop.hideKeyboard(scollView);
    }

    render () {
        let { navigate, goBack } = this.props.navigation;
        let { records } = this.state;

        return (
            <View style={[PublicStyle.flex, styles.container]}>
                <StatusBar hidden={true} />
                <View style={[styles.top]}>
                    <View style={[styles.topItem, styles.topLeft]}>
                        <TouchableOpacity onPress={e => goBack(null)}>
                            <View style={styles.topLeftBox}>
                                <SimpleLineIcons style={styles.topLeftIcon} name="arrow-left" />
                                <View style={styles.topLeftTextBox}>
                                    <Text>7</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.topItem, styles.topMiddle]}>
                        <View style={styles.target}>
                            <Text style={styles.targetText}>在龙</Text>
                        </View>
                        <View style={styles.targetOnline}>
                            <Text style={styles.targetOnlineText}>在线</Text>
                        </View>
                    </View>
                    <View style={[styles.topItem, styles.topRight]}>
                        <View style={[styles.topRightIconBox, styles.topRightIconBoxFirst]}>
                            <SimpleLineIcons name="phone" style={styles.topRightIcon} />
                        </View>
                        <View style={styles.topRightIconBox}>
                            <SimpleLineIcons name="user" style={styles.topRightIcon} />
                        </View>
                    </View>
                </View>
                <ScrollView 
                    ref='msgScroll'
                    scrollEnabled={false}
                    contentContainerStyle={{flex:1}}
                    keyboardShouldPersistTaps={'handled'}
                    onContentSizeChange={()=>{}}
                >
                    <View
                        style = {styles.msgcontainer}
                        onScrollEndDrag={()=>alert(888)}
                    >
                        <View style={[styles.content]}>
                            <Messages records={records} />
                        </View>
                        <View style={[styles.bottom]}>
                            <TextInput
                                style={styles.msgInput}
                                underlineColorAndroid="transparent"
                                multiline={false}
                                keyboardType={'default'}
                                ref='msgInput'
                                onChangeText = {sendText => this.setState({sendText})}
                                value = {this.state.sendText}
                                onSubmitEditing={this.sendmsg}
                                onFocus={this.showKeyboard.bind(this, 'msgInput')}
                                onBlur={this.hideKeyboard}
                            />
                        </View>
                    </View>
                    <View style={styles.bottomIcons}>
                        <FontAwesome style={styles.bottomIon} name="microphone" />
                        <FontAwesome style={styles.bottomIon} name="image" />
                        <FontAwesome style={styles.bottomIon} name="camera" />
                        <FontAwesome style={styles.bottomIon} name="hand-o-left" />
                        <FontAwesome style={styles.bottomIon} name="rmb" />
                        <FontAwesome style={styles.bottomIon} name="play-circle-o" />
                        <FontAwesome style={styles.bottomIon} name="smile-o" />
                        <FontAwesome style={styles.bottomIon} name="plus-square-o" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef'
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#ccc'
    },
    topItem: {
        flex: 1
    },
    topLeft: {
        paddingLeft: 5
    },
    topLeftBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    topLeftIcon: {
        fontSize: 18,
        color: '#666'
    },
    topLeftTextBox: {
        width: 18,
        height: 18,
        borderRadius: 18,
        backgroundColor: '#fefff6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    topMiddle: {
        alignItems: 'center',
        flex: 3,
        paddingTop: 5,
        paddingBottom: 5
    },
    topRight: {
        justifyContent: 'flex-end',
        paddingRight: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    topRightIconBox: {
        marginRight: 5
    },
    topRightIconBoxFirst: {
        marginRight: 12
    },
    topRightIcon: {
        fontSize: 18
    },
    msgcontainer: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1
    },
    bottom: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5
    },
    msgInput: {
        height: 32,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderBottomWidth: 0
    },
    target: {

    },
    targetText: {

    },
    targetOnline: {
        marginTop: 5
    },
    targetOnlineText: {
        fontSize: 8
    },
    bottomIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10
    },
    bottomIon: {
        fontSize: 24,
        color: '#999'
    }
});

export default Chat;