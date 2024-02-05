import { useContext } from 'react'
import { NavbarContext } from './NavbarContext.tsx'

interface useCloseResult {
    isClose: true | false
    changeClose: () => void
}

export function useNavbarClose (): useCloseResult {
    const { isClose, setClose } = useContext(NavbarContext)

    const changeClose = () => {
        const collapse = !isClose
        setClose(collapse)
    }
    return {
        isClose,
        changeClose
    }
}
