import { Header } from 'src/widgets/Header/Header';
import cls from './styles/index.module.scss'
import {classNames} from "src/shared/helpers/classNames/classNames.ts";
import {NavbarProvider} from "src/app/providers/NavBarProvider";
import {HomeSection} from "src/widgets/HomeSection/HomeSection.tsx";
import {useTheme} from "src/app/providers/ThemeProvider";
import {AboutSection} from "src/widgets/AboutSection/AboutSection.tsx";
import {ProjectsSection} from "src/widgets/ProjectsSection/ProjectsSection.tsx";
import {ContactSection} from "src/widgets/ContactSection/ContactSection.tsx";
import {Footer} from "src/widgets/Footer/Footer.tsx";

function App() {

    const {theme} = useTheme()

    return(
        <div className={classNames(cls.app, {[cls[theme]]: true}, [])}>
            <NavbarProvider>
                <Header/>
            </NavbarProvider>
            <HomeSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default App
