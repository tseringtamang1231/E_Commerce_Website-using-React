import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
function Logoutbtn() {
    const dispatch = useDispatch()
    const logoutBtn = () => {
        dispatch(logout())
    }
  return (
    <div
    onClick={logoutBtn}>
      Logout
    </div>
  )
}

export default Logoutbtn
