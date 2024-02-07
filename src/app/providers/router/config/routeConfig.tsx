import { type RouteProps } from 'react-router-dom'
import {MainPage} from "src/pages/Main/MainPage.tsx";
import {Project1Page} from "src/pages/Project1/Project1Page.tsx";
import {Project2Page} from "src/pages/Project2/Project2Page.tsx";
import {Project3Page} from "src/pages/Project3/Project3Page.tsx";

export enum AppRoutes {
    MAIN = 'main',
    ROOT = 'root',
    PROJECT1 = 'project1',
    PROJECT2 = 'project2',
    PROJECT3 = 'project3'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.PROJECT1]: '/project1',
    [AppRoutes.PROJECT2]: '/project2',
    [AppRoutes.PROJECT3]: '/project3',
    [AppRoutes.ROOT]: '',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ROOT]: {
        path: RoutePath.root,
        element: <MainPage/>
    },
    [AppRoutes.PROJECT1]: {
        path: RoutePath.project1,
        element: <Project1Page/>
    },
    [AppRoutes.PROJECT2]: {
        path: RoutePath.project2,
        element: <Project2Page/>
    },
    [AppRoutes.PROJECT3]: {
        path: RoutePath.project3,
        element: <Project3Page/>
    }
}
