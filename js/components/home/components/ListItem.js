/**
 *  * Created by liaoyf on 2017/10/13 0013.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    PixelRatio,
    TouchableWithoutFeedback
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let { width, height } = Dimensions.get('window');

class ListItem extends React.Component {
    constructor() {
        super();
        this.itemContent = this.itemContent.bind(this);
    }

    // 进入聊天
    itemContent (item) {
        this.props.navigate('Person');
    }

    render () {
        let { item, toggleExpand, navigate} = this.props;

        return (
            <View>
                <TouchableWithoutFeedback onPress={() => toggleExpand(item.label)}>
                    <View style={styles.item}>
                        <View style={styles.itemAngleBox}>
                            <FontAwesome style={styles.itemAngle} name={item.expanded ? 'angle-down' : 'angle-right'} />
                        </View>
                        <Text style={styles.itemLabel}>{item.label}</Text>
                        <Text style={styles.itemCount}>{typeof item.onlineNum !== 'undefined' && `${item.onlineNum}/`}{item.countNum}</Text>
                    </View>
                </TouchableWithoutFeedback>
                {item.list && item.expanded && (
                    <View style={styles.listBox}>
                        <FlatList
                            data={item.list}
                            renderItem={({ item, index }) => (
                                <TouchableWithoutFeedback onPress={() => this.itemContent(item)}>
                                    <View style={[styles.list]}>
                                        <Image style={styles.listVator} source={require('../../../../image/vator.jpg')} />
                                        <View style={[styles.listRight, index === 0 && styles.firstlistRight]}>
                                            <Text style={styles.listRightLabel} numberOfLines={1}>{item.label}</Text>
                                            <Text style={styles.listRightSign} numberOfLines={1}>[{item.loginType}]{item.sign}</Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )}
                            keyExtractor={(item, index) => item.label}
                        />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
    },
    itemAngleBox: {
        width: 10,
        alignItems: 'center'
    },
    itemAngle: {
        fontSize: 18,
        color: '#999'
    },
    itemLabel: {
        flex: 1,
        marginLeft: 15,
        color: '#000'
    },
    itemCount: {
        fontSize: 10,
        color: '#999'
    },
    listVator: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    listRight: {
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#ddd',
        paddingTop: 5,
        paddingBottom: 5
    },
    firstlistRight: {
        borderTopWidth: 0
    },
    listRightSign: {
        width: width * 0.8,
        fontSize: 10,
        color: '#878787'
    },
    listBox: {
        paddingLeft: 20
    },
    listRightLabel: {
        color: '#000',
        marginBottom: 3
    }
});

export default ListItem;