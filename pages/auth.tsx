import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from '../firebase/clientApp'
import { Stack } from '@mantine/core'

// Configure FirebaseUI.
const uiConfig = {

  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
}

function SignInScreen() {
  return (
    <Stack
      align="center"
      justify="flex-start"
      spacing="sm"
    >
      <h1>Film Bust</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Stack>
  )
}

export default SignInScreen
