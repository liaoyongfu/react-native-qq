/**
 * Created by liaoyongfu on 2017/12/19.
 */
import React from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    PixelRatio,
    Dimensions,
    Platform
} from 'react-native';

let { width, height } = Dimensions.get('window');

class Messages extends React.Component{

    render(){
        let { records } = this.props;

        return (
            <ScrollView>
                {records.map((recode, index) => (
                    [
                        <View key={index} style={styles.timeBox}>
                            <Text style={styles.time} key={index}>{recode.time}</Text>
                        </View>,
                        recode.list.map((msg, msgIndex) => {
                            if(msg.type === '1'){
                                return (
                                    <View style={styles.left} key={index + '-' + msgIndex}>
                                        <View style={styles.vatorBox}>
                                            <Image style={styles.vator} source={require('../../../../image/vator.jpg')}/>
                                        </View>
                                        <View style={styles.content}>
                                            <Text style={styles.msg}>{msg.content}</Text>
                                        </View>
                                    </View>
                                )
                            }else if(msg.type === '2'){
                                return (
                                    <View style={[styles.left, styles.right]} key={index + '-' + msgIndex}>
                                        <View style={[styles.content, styles.contentRight]}>
                                            <Text style={[styles.msg, styles.msgRight]}>{msg.content}</Text>
                                        </View>
                                        <View style={styles.vatorBox}>
                                            <Image style={[styles.vator, styles.vatorRight]} source={require('../../../../image/vator.jpg')}/>
                                        </View>
                                    </View>
                                )
                            }
                        })
                    ]
                ))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    timeBox: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    time: {
        color: '#999',
        fontSize: 12
    },
    vatorBox: {

    },
    vator: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 10
    },
    vatorRight: {
        marginLeft: 10
    },
    content: {
        padding: 10,
        backgroundColor: '#ffd8e4',
        //android下borderRadius和borderWidth等一起使用时borderRadius没有效果
        borderRadius: Platform.OS == 'ios' ? 5 : 0,
        justifyContent: 'center',
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#ffcad2',
        maxWidth: width * 0.8
    },
    contentRight: {
        backgroundColor: '#ffefc8'
    },
    left: {
        flexDirection: 'row',
        marginBottom: 20
    },
    msg: {
        color: '#ff6318'
    },
    msgRight: {
        color: '#666'
    },
    right: {
        justifyContent: 'flex-end'
    }
});

export default Messages;