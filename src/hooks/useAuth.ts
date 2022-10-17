import { useCallback, useEffect } from "react"
import { removeUser, saveUser } from "../modules/Authentication/state/slice"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"

const LOCAL_STORAGE_USER_KEY = "user"

export const useAuth = () => {
  const userState = useAppSelector(state => state.user.name)
  const userLocalStorage = localStorage.getItem(LOCAL_STORAGE_USER_KEY)

  const dispatch = useAppDispatch()
  const setUser = useCallback(
    (payload: string) => {
      dispatch(saveUser(payload))
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, payload)
    },
    [dispatch],
  )
  const clearUser = () => {
    dispatch(removeUser())
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
  }

  useEffect(() => {
    if (userLocalStorage !== userState && userLocalStorage && !userState) {
      setUser(userLocalStorage)
    }
  }, [userState, userLocalStorage, setUser])

  return {
    user: userState,
    setUser,
    clearUser,
  }
}
