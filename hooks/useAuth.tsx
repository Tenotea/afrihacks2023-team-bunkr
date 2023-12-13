import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContexts'

const useAuth = () => {
const {token, setToken} = useContext(AuthContext)


  return {token, setToken}
}

export default useAuth