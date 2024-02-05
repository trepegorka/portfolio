import { createContext } from 'react'

export const IsClose = true

interface NavbarContextProps {
    isClose: true | false
    setClose: (isClose: boolean) => void
}

export const NavbarContext = createContext<NavbarContextProps>({
    isClose: false,
    setClose: () => {}
})
