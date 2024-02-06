import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig.tsx'

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={'..'}>
                            <div className={'page-wrapper'}>
                                {element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    )
}

export default AppRouter
