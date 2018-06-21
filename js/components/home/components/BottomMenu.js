/**
 *  * Created by liaoyf on 2017/12/1 0001.
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
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import PublicStyle from '../../../css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

class BottomMenu extends React.Component{
    render(){
        let { activeIndex, setActiveIndex } = this.props;

        return (
            <View style={[styles.footer]}>
                <TouchableWithoutFeedback onPress={() => setActiveIndex(0)}>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <FontAwesome name="smile-o"
                                     style={[styles.footerIcon, activeIndex === 0 && styles.footerActive]}/>
                        <Text style={[styles.footerText, activeIndex === 0 && styles.footerActive]}>消息</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setActiveIndex(1)}>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <FontAwesome name="user-o"
                                     style={[styles.footerIcon, activeIndex === 1 && styles.footerActive]}/>
                        <Text style={[styles.footerText, activeIndex === 1 && styles.footerActive]}>联系人</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setActiveIndex(2)}>
                    <View style={[PublicStyle.flex, PublicStyle.vhCenter]}>
                        <FontAwesome name="star-o"
                                     style={[styles.footerIcon, activeIndex === 2 && styles.footerActive]}/>
                        <Text style={[styles.footerText, activeIndex === 2 && styles.footerActive]}>动态</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    footerIcon: {
        color: '#7f8393',
        fontSize: 24
    },
    footerActive: {
        color: '#4dafff'
    },
});

export default BottomMenu;