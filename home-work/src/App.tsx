import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Card1 from './Component/card1';
import Card2 from './Component/card2';
import Card3 from './Component/card3';
import Card4 from './Component/card4';
import Card5 from './Component/card5';
import Card6 from './Component/card6';
import Card7 from './Component/card7';
import Card8 from './Component/card8';
import App2 from './App2';

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#f4f4f4' }}>
                    <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#333' }}>Саҳифаи 1 (App)</Link>
                    <Link to="/page2" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#333' }}>Саҳифаи 2 (App2)</Link>
                </nav>

                <Routes>
                    <Route path="/" element={
                        <div>
                            <Card1 />
                            <br /><br />
                            <Card2 />
                            <Card3 />
                            <Card4 />
                            <br /><br />
                            <Card5 />
                            <hr />
                            <Card6 />
                             <Card7 />
                            <Card8 />
                        </div>
                    } />
                    
                    <Route path="/page2" element={
                        <div>
                          <App2/>
                        </div>
                    } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;