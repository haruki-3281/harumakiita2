import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Body from './Components/templates/Body'
import './index.css'

const container = document.getElementById('app');
if (!container) { throw new Error() };
const root = createRoot(container)

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body title="Harumakiita" />} />
                <Route path="/login" element={<div>test</div>} />
            </Routes>
        </BrowserRouter>
    );
}

root.render(
    <App />
);

// "https://qiita.com/api/v2/items"
