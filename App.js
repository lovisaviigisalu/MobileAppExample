import React, {useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import Splash from './src/screens/auth/Splash'
import Signup from './src/screens/auth/Signup'
import SignIn from './src/screens/auth/SignIn';

import { GoogleSignin , statusCodes} from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID = '206955833315-nb85c0q1ii1rr6rmr9nqmr7v43n3erg2.apps.googleusercontent.com'
const IOS_CLIENT_ID = '206955833315-fcrpv6fhejl72v0vfcssa103sgerusji.apps.googleusercontent.com'
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.206955833315-fcrpv6fhejl72v0vfcssa103sgerusji'

const App = () => {
  // useEffect(() =>{
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  //     WebClientId: WEB_CLIENT_ID,
  //     offlineAccess: true,
  //     iosClientId: IOS_CLIENT_ID
  //   })})
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  )
}
export default App;