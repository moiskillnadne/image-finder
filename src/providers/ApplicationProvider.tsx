import { PropsWithChildren } from "react"

import RouteProvider from "./RouterProvider"
import StateProvider from "./StateProvider"

type Props = PropsWithChildren<unknown>

function ApplicationProvider({ children }: Props) {
  return (
    <RouteProvider>
      <StateProvider>{children}</StateProvider>
    </RouteProvider>
  )
}

export default ApplicationProvider
