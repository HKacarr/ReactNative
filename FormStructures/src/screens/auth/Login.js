import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image, TextInput, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import MainStore from '../../store/MainStore';
import {observer} from 'mobx-react';
import mobx from 'mobx';

@observer

class Login extends Component {
    _handleSubmit = () => {
        alert('Form Submitted!');
    };

    componentDidMount() {
        console.log(MainStore.name);
        console.log(MainStore.getName());
    }

    constructor() {
        super();
        this.state = {
            showPasswordState: true,
            showPasswordIcon: 'faEye',
        };
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Sign In</Text>
                    <TouchableOpacity onPress={() => MainStore.setName('Hasan Kacar')}>
                        <Text>Change to Text</Text>
                    </TouchableOpacity>
                    <Text>{MainStore.getName()}</Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
                    <Image style={{resizeMode: 'contain'}} source={require('../../../assets/images/SignInImage.png')}/>
                </View>

                <Formik
                    initialValues={{username: '', password: ''}}
                    onSubmit={this._handleSubmit}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Username is a Required Field'),
                        password: Yup.string().required(),
                    })}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <View>
                            <View style={{
                                marginTop: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 35,
                            }}>
                                <TextInput value={values.username} onChangeText={handleChange('username')}
                                           placeholder="Username" style={{
                                    backgroundColor: '#F7F7F7',
                                    width: '100%',
                                    height: 60,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                }}/>
                            </View>
                            {(errors.username) &&
                                <Text style={{paddingHorizontal: 35, color: 'red'}}>*{errors.username}</Text>}

                            <View style={{
                                marginTop: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 35,
                            }}>
                                <TextInput value={values.password} secureTextEntry={this.state.showPasswordState}
                                           onChangeText={handleChange('password')} placeholder="Password" style={{
                                    backgroundColor: '#F7F7F7',
                                    width: '100%',
                                    height: 60,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                }}/>
                                <TouchableOpacity
                                    onPress={() => this.setState({showPasswordState: !this.state.showPasswordState})}
                                    style={{position: 'absolute', right: 0, paddingHorizontal: 60}}>
                                    <FontAwesomeIcon icon={this.state.showPasswordState ? faEye : faEyeSlash}
                                                     size={20}/>
                                </TouchableOpacity>
                            </View>
                            {(errors.password) && <Text style={{
                                paddingHorizontal: 35,
                                color: 'red',
                                textTransform: 'capitalize',
                            }}>*{errors.password}</Text>}

                            <View style={{
                                marginTop: 20,
                                justifyContent: 'flex-end',
                                flexDirection: 'row',
                                paddingHorizontal: 35,
                            }}>
                                <TouchableOpacity>
                                    <Text style={{color: '#838391', fontSize: 16, fontWeight: '500'}}>Forget Your
                                        Password</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                marginTop: 45,
                                justifyContent: 'flex-end',
                                flexDirection: 'row',
                                paddingHorizontal: 35,
                            }}>
                                <TouchableOpacity onPress={handleSubmit} style={{
                                    width: '100%',
                                    backgroundColor: '#20C3AF',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    height: 60,
                                }}>
                                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 17}}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>

                <View style={{marginTop: 20, justifyContent: 'center', flexDirection: 'row'}}>
                    <Text style={{color: '#838391', fontWeight: 'bold', fontSize: 16}}>Or</Text>
                </View>

                <View style={{flexDirection: 'row', paddingHorizontal: 35, marginTop: 20}}>
                    <View style={[Style.socialMediaLogin]}><Image
                        source={require('../../../assets/images/facebookLogin.png')}/></View>
                    <View style={[Style.socialMediaLogin, {marginLeft: 10, marginRight: 10}]}><Image
                        source={require('../../../assets/images/twitterLogin.png')}/></View>
                    <View style={[Style.socialMediaLogin]}><Image
                        source={require('../../../assets/images/linkedinLogin.png')}/></View>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#838391', fontSize: 16, fontWeight: '500'}}>Don't have an account? <Text
                        style={{color: '#FFB19D', fontSize: 16, fontWeight: '500'}}>Sign Up</Text></Text>
                </View>
            </SafeAreaView>
        );
    }
}


const Style = StyleSheet.create({
    socialMediaLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E2E2E0',
        paddingVertical: 15,
    },
    socialMediaLoginLogo: {
        resizeMode: 'contain',
    },
});

export default Login;
