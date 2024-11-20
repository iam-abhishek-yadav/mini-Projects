import { useState } from "react";

function App() {
	const [color, setColor] = useState("white");

	const handleClick = (newColor: string) => {
		setTimeout(() => setColor(newColor), 50);
	};

	return (
		<div
			className='w-full h-screen flex items-center justify-center transition-opacity'
			style={{
				backgroundColor: color,
				opacity: 1,
			}}>
			<div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
				<div className='flex flex-wrap justify-center gap-2 shadow-lg bg-slate-700 px-3 py-2 rounded-2xl'>
					{["red", "green", "blue", "yellow", "black"].map((newColor) => (
						<button
							key={newColor}
							onClick={() => handleClick(newColor)}
							className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
							style={{ backgroundColor: newColor }}>
							{newColor.charAt(0).toUpperCase() + newColor.slice(1)}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
