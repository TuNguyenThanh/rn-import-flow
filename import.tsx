// -----------------   IMPORT LIBRARY  ----------------- //
import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Image, Pressable, SafeAreaView } from 'react-native'
import ImageLoad from 'react-native-image-placeholder'

// Import App Config
import AppConfig from '@/Config/AppConfig'

// Import Services - Socket IO
import AppSocket from '@/Services/AppSocket'

// Import Navigation
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Import Redux / Redux Actions
import { useDispatch, useSelector } from 'react-redux'
import AuthActions from '@/Redux/AuthRedux'

// Import Custom Hooks
import { usePrevious } from '@/Hooks'

// Import Functions
import { isEmail } from '@/Functions/validateFunctions'

// Import Components
import { YImage } from '@/Components'
import { YItemInfo } from './Components'

// Import Styles
import styles from './Styles/ProfileScreenStyles'
import { Images, Colors } from '@/Themes'

// Import Language
import { translate } from '@/Language'

// -----------------  END IMPORT  ----------------- //

// -----------------  IMPORT TYPE  ----------------- //
import { ProfileStackParams } from '@/Navigation/AppNavigationType'
// -----------------  END IMPORT TYPE  ----------------- //

// -----------------   CONFIG TYPESCRIPT NAVIGATION    ----------------- //
type RootStackParams = {
  ProfileScreen: undefined
}
type ProfileScreenProps = StackNavigationProp<RootStackParams, 'ProfileScreen'>
// -----------------   END CONFIG TYPESCRIPT NAVIGATION    ----------------- //

// -----------------   CONFIG TYPESCRIPT REDUX SELECTOR   ----------------- //
interface RootState {
  auth: {
    userData: {}
  }
}
// -----------------  END CONFIG TYPESCRIPT REDUX SELECTOR   ----------------- //

// -----------------   FLAG VARIABLE   ----------------- //
let isSignIn: boolean = false

// -----------------   ADD KEY EXTRACTOR - IF USE FlatList   ----------------- //
const keyExtractor = (item: any, index: number) => index.toString()

const ProfileScreen = () => {
  // REDUX HOOKS (dispatch / selector)
  const dispatch = useDispatch()
  const userData = useSelector((state: RootState) => state.auth.userData)

  // NAVIGATION HOOKS (route / navigation)
  const route = useRoute()
  const navigation = useNavigation<ProfileScreenProps>()

  // REF HOOKS (use ref...<name>)
  const refAlert = useRef<any>(null)
  // STATE HOOKS
  const [isShowReport, setShowReport] = useState<boolean>(false)

  // FUNCTIONS (use onPress...<func-name>)
  const onPressShowReport = () => setShowReport(true)
  const onPressHideReport = () => setShowReport(false)

  // FUNCTIONS RENDER (use render...<name>)
  const renderUI = () => <View />
  const renderUI2 = () => <View />

  // USE EFFECT HOOKS
  useEffect(() => {
    isSignIn = true
  }, [])

  return (
    <SafeAreaView>
      <Text>ProfileScreen</Text>
      {renderUI()}
      {renderUI2()}
    </SafeAreaView>
  )
}

export default ProfileScreen
