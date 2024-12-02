import {type RouteProps} from 'react-router-dom'
import {MainPage} from "src/pages/Main/MainPage.tsx";
import {Project1Page} from "src/pages/Project1/Project1Page.tsx";
import {Project2Page} from "src/pages/Project2/Project2Page.tsx";
import {Project3Page} from "src/pages/Project3/Project3Page.tsx";
import {Project4Page} from "src/pages/Project4/Project4Page.tsx";
import {Project5Page} from "src/pages/Project5/Project5Page.tsx";

export enum AppRoutes {
    MAIN = 'main',
    ROOT = 'root',
    PROJECT1 = 'project1',
    PROJECT2 = 'project2',
    PROJECT3 = 'project3',
    PROJECT4 = 'project4',
    PROJECT5 = 'project5'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.PROJECT1]: '/project1',
    [AppRoutes.PROJECT2]: '/project2',
    [AppRoutes.PROJECT3]: '/project3',
    [AppRoutes.PROJECT4]: '/project4',
    [AppRoutes.PROJECT5]: '/project5',
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
    },
    [AppRoutes.PROJECT4]: {
        path: RoutePath.project4,
        element: <Project4Page/>
    },
    [AppRoutes.PROJECT5]: {
        path: RoutePath.project5,
        element: <Project5Page/>
    }
}
