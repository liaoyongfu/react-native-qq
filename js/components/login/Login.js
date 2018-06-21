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
    StatusBar
} from 'react-native';
import PublicStyle from '../../css';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Button from 'apsl-react-native-button'

class Login extends React.Component {
    static navigationOptions = {
        title: '登陆页',
        header: null
    };

    render() {
        let {navigate} = this.props.navigation;

        return (
            <ImageBackground
                source={require('../../../image/login_bg.jpeg')}
                style={[PublicStyle.flex, styles.container]}
                resizeMode="cover"
            >
                <StatusBar hidden={true}/>
                <View style={[styles.box]}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View>
                            <FontAwesome name="qq" size={30} color='#fff'/>
                        </View>
                        <View>
                            <Text style={[styles.title]}>QQ</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 80}}>
                        <TextInput underlineColorAndroid="transparent" style={styles.textInput} placeholder={'请输入用户名'} value={'893753543'}/>
                    </View>
                    <View>
                        <TextInput underlineColorAndroid="transparent" style={styles.textInput} placeholder={'请输入密码'} value={'**********'}/>
                    </View>
                    <View>
                        <Button style={styles.loginBtn} textStyle={{color: '#fff'}} onPress={() => {
                            navigate('Home');
                        }}>登录</Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    box: {
        width: '90%',
        marginTop: 140
    },
    title: {
        color: '#fff',
        fontSize: 30,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    topBox: {
        flexDirection: 'column'
    },
    loginBtn: {
        backgroundColor: '#4dafff',
        borderWidth: 0,
        marginTop: 15
    },
    textInput: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#fff',
        marginBottom: 5,
        color: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: 18
    }
});

export default Login;