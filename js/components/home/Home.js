/**
 *  * Created by liaoyf on 2017/9/29 0029.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    PixelRatio,
    Button,
    FlatList
} from 'react-native';
import PublicStyle from '../../css';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

class Home extends React.Component{
    constructor(){
        super();
    }

    static navigationOptions = {
        title: '首页',
        header: null
    };

    renderItem({item}){
        return (
            <View style={styles.itemBox}>
                <View style={[styles.listIcon]}>
                    <Image source={require('../../../image/vator.jpg')} style={{width: 40, height: 40, borderRadius: 20}}/>
                </View>
                <View style={[styles.listContent]}>
                    <View style={styles.listContentTop}>
                        <Text style={styles.listContentTopText}>{item.label}</Text>
                        <View style={styles.listContentTopTime}>
                            <Text style={styles.listContentTopTimeText}>{item.time}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.listLastMessage} numberOfLines={1}>{item.lastMessage}</Text>
                    </View>
                </View>
            </View>
        );
    }

    render(){
        return (
            <View style={[PublicStyle.flex]}>
                <StatusBar translucent={true}/>
                <LinearGradient style={[styles.header]} colors={['#508dff', '#3ab8fe']} start={{x: 0, y: 0}} end={{x: 0.5, y: 0}}>
                    <View style={[PublicStyle.vhCenter, styles.headerLeft]}>
                        <Image source={require('../../../image/vator.jpg')} style={{width: 30, height: 30, borderRadius: 15}}/>
                    </View>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <Text style={[styles.title]}>消息</Text>
                    </View>
                    <View style={[PublicStyle.vhCenter, styles.headerRight]}>
                        <MaterialCommunityIcons name="plus" size={30} color="#fff"/>
                    </View>
                </LinearGradient>
                <View style={[PublicStyle.flex, styles.content]}>
                    <View style={[PublicStyle.vhCenter, styles.searchBar]}>
                        <View style={{marginRight: 5}}>
                            <FontAwesome name="search" color='#c7c7cc'/>
                        </View>
                        <View>
                            <Text style={{color: '#a6a6a6', fontSize: 12}}>搜索</Text>
                        </View>
                    </View>
                    <View style={[PublicStyle.flex]}>
                        <FlatList
                            data={[
                                {
                                    label: 'QQ看点',
                                    lastMessage: '我们用垃圾在太平洋造了一个我们用垃圾在太平洋造了一个',
                                    time: '下午8:43'
                                },
                                {
                                    label: 'redux',
                                    lastMessage: 'liaoyf：对于MyListItem组件来说，其onPressItem属性使用箭头函数而非bind的方式进行绑定',
                                    time: '下午2:43'
                                },
                                {
                                    label: '服务号',
                                    lastMessage: '腾讯课堂：一份给前端老铁们的好差事，哈哈哈哈哈哈哈哈哈哈哈哈哈',
                                    time: '上午8:23'
                                },
                                {
                                    label: 'React Native社区2群',
                                    lastMessage: '畅游网络加入了本群',
                                    time: '下午5:54'
                                },
                                {
                                    label: 'React Native社区1群',
                                    lastMessage: '畅游网络2加入了本群',
                                    time: '下午5:53'
                                },
                                {
                                    label: 'React交流1群',
                                    lastMessage: '畅游：这是为什么呢？',
                                    time: '下午5:53'
                                },
                                {
                                    label: '张三',
                                    lastMessage: '张三：加油加油',
                                    time: '下午5:53'
                                }
                            ]}
                            keyExtractor={item => item.label}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
                <View style={[styles.footer]}>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <FontAwesome name="smile-o" color="#7f8393" size={24}/>
                        <Text style={styles.footerText}>消息</Text>
                    </View>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <FontAwesome name="user-o" color="#7f8393" size={24}/>
                        <Text style={styles.footerText}>联系人</Text>
                    </View>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <FontAwesome name="star-o" color="#7f8393" size={24}/>
                        <Text style={styles.footerText}>动态</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    headerLeft: {
        width: 60
    },
    title: {
        color: '#fff',
        fontSize: 18
    },
    headerRight: {
        width: 40
    },
    content: {
        backgroundColor: '#fff'
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#ccc'
    },
    footerText: {
        fontSize: 10,
        marginTop: 3
    },
    addIcon: {
        color: '#fff',
        fontSize: 20
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 26,
        backgroundColor: '#eeeff3',
        borderRadius: 3,
        margin: 10
    },
    itemBox: {
        flexDirection: 'row'
    },
    listIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        overflow: 'hidden'
    },
    listContent: {
        flex: 1,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc'
    },
    listContentTop: {
        flexDirection: 'row',
        marginBottom: 5
    },
    listContentTopText: {
        flex: 1,
        color: '#000',
        fontSize: 16
    },
    listContentTopTime: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContentTopTimeText: {
        color: '#999',
        fontSize: 12
    },
    listLastMessage: {
        fontSize: 12,
        color: '#666'
    }
});

export default Home;