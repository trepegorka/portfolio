import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import {ThemeProvider} from "src/app/providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
)
