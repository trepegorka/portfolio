import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import {ThemeProvider} from "src/app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
