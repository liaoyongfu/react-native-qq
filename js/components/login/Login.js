/**
 *  * Created by liaoyf on 2017/9/29 0029.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import PublicStyle from '../../css';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';

class Login extends React.Component{
    static navigationOptions = {
        title: '登陆页',
        header: null
    };

    render(){
        let { navigate } = this.props.navigation;

        return (
            <View style={[PublicStyle.flex, styles.container]}>
                <View style={[styles.box]}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View>
                            <FontAwesome name="qq" size={30} color='#666'/>
                        </View>
                        <View>
                            <Text style={[styles.title]}>QQ</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput placeholder={'请输入用户名'}/>
                    </View>
                    <View>
                        <TextInput placeholder={'请输入密码'}/>
                    </View>
                    <View style={styles.loginBtn}>
                        <Button title="登录" onPress={() => {
                            navigate('Home');
                        }}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8deeff',
        alignItems: 'center'
    },
    box: {
        width: '90%',
        marginTop: 140
    },
    title: {
        color: '#666',
        fontSize: 30,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    topBox: {
        flexDirection: 'column'
    },
    loginBtn: {
        marginTop: 15
    }
});

export default Login;