import { Header } from 'src/widgets/Header/Header';
import cls from './styles/index.module.scss'
import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import {NavbarProvider} from "src/app/providers/NavBarProvider";
import {useTheme} from "src/app/providers/ThemeProvider";
import {Footer} from "src/widgets/Footer/Footer.tsx";
import {AppRouter} from "src/app/providers/router";
import ScrollToTop from "src/shared/helpers/ScrollToTop/ScrollToTop.tsx";
import {useEffect} from "react";

function App() {

    const {theme} = useTheme()
    useEffect(()=>{
        document.body.classList.add(cls[theme])
    },[theme])

    return(
        <div className={classNames(cls.app, {[cls[theme]]:true}, [])}>
            <NavbarProvider>
                <Header/>
            </NavbarProvider>
            <ScrollToTop/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}

export default App
