import { useState } from "react";


function Home() {
    const [trainNumber, setTrainNumber] = useState('');

    function trainSearch(e) {
        e.preventDefault();

        console.log(trainNumber);

        // train search api call
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">
                myRail 🚆
            </h1>

            <form onSubmit={trainSearch}>
                <input
                    type="search"
                    placeholder="Enter Train Number"
                    value={trainNumber}
                    onChange={(e) => setTrainNumber(e.target.value)}
                />

                <button type="submit">
                    Search
                </button>
            </form>
        </main>
    )
}

export default Home