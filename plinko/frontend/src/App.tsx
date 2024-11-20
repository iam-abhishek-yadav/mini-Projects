import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Simulation } from './pages/Simulation';
import { Game } from './pages/Game';
import { Home } from './pages/Home';
import { Navbar } from './components';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/simulation'
					element={<Simulation />}
				/>
				<Route
					path='/game'
					element={<Game />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
