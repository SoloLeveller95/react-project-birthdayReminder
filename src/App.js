import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
	const [people, setPeople] = useState(data);
	const [data2, setData2] = useState(true);

	return (
		<main>
			<section className="container">
				<h3>{people.length} birthdays today</h3>
				<List people={people} />
				{data2 && (
					<button
						onClick={() => {
							setPeople([]);
							setData2(false);
						}}
					>
						Clear all
					</button>
				)}
				{!data2 && (
					<button
						onClick={() => {
							setPeople(data);
							setData2(true);
						}}
					>
						Show All
					</button>
				)}
			</section>
		</main>
	);
}

export default App;
