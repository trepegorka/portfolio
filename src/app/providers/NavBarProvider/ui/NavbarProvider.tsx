import React, {useState, useMemo, FC} from 'react'
import { NavbarContext } from '../lib/NavbarContext.tsx'

interface NavbarProviderProps {
    children?: React.ReactNode
}
export const NavbarProvider: FC<NavbarProviderProps> = ({ children }) => {
    const [isClose, setClose] = useState<boolean>(true)

    const defaultProps = useMemo(() => ({
        isClose,
        setClose
    }), [isClose])

    return (
        <NavbarContext.Provider value={defaultProps}>
            {children}
        </NavbarContext.Provider>
    )
}
