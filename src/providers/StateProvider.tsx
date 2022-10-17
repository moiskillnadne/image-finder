import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import store from "../state/store"

type Props = PropsWithChildren<unknown>

function StateProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>
}

export default StateProvider
