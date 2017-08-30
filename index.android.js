/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Modal from 'react-native-simple-modal';

class ProfileScreen extends Component {
    static navigationOptions = {
        title: '首页',
    };

    render() {
        return <View>
            <Text>登录成功！</Text>
        </View>
    }
}

class MainScreen extends Component {
    static navigationOptions = {
        title: '登录页',
    };

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            modalVisible: false
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        let {username, password} = this.state;
        return (
            <View style={{flex: 1, padding: 20}}>
                <View>
                    <Text style={{textAlign: 'center'}}>QQ登录</Text>
                    <View style={{flex: 1}}>
                        <TextInput
                            placeholder='用户名' value={username}
                            onChangeText={text => this.setState({username: text})}
                            style={{height: 40, lineHeight: 40, padding: 10}}/>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={text => this.setState({password: text})}
                            value={password}
                            placeholder="密码"
                            style={{height: 40, lineHeight: 40, padding: 10}}/>
                        <View
                            style={{height: 40, marginTop: 20}}>
                            <Button
                                onPress={() => {
                                    let {username, password} = this.state;
                                    if (username === 'liaoyf' && password === '123') {
                                        navigate('Profile');
                                    } else {
                                        this.setState({
                                            modalVisible: true
                                        })
                                    }
                                }}
                                title="登录"/>
                        </View>
                    </View>
                </View>
                <Modal
                    open={this.state.modalVisible}
                    modalDidClose={() => this.setState({modalVisible: false})}
                >
                    <View>
                        <Text style={{fontSize: 20, marginBottom: 10}}>用户名或密码错误！</Text>
                        <TouchableOpacity
                            style={{margin: 5}}
                            onPress={() => this.setState({modalVisible: false})}>
                            <Text>确定</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

const AwesomeProject = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
