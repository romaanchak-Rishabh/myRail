import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, TrainFront } from "lucide-react";
import trainApi from "../api/trainApi";
import "./Home.css";

function Home() {
    const [trainNumber, setTrainNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function trainSearch(e) {
        e.preventDefault();

        if (trainNumber && trainNumber.length === 5) {
            try {
                setLoading(true);

                const response = await trainApi(trainNumber);

                if (!response.stations.length) {
                    console.log(`No Train Running on ${trainNumber}`);
                    return;
                }

                navigate(`/journey/${trainNumber}`);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        } else {
            console.log("Invalid Train Number");
        }
    }

    return (
        <main className="home">
            <section className="home__hero">

                <div className="home__badge">
                    <TrainFront size={16} />
                    <span>Your railway companion</span>
                </div>

                <h1 className="home__title">
                    Your journey.
                    <span> Live.</span>
                </h1>

                <p className="home__description">
                    Track your train, follow your journey, and know what's
                    happening along the way.
                </p>

                <form
                    className="home__search"
                    onSubmit={trainSearch}
                >
                    <div className="home__input-wrapper">
                        <TrainFront
                            className="home__input-icon"
                            size={20}
                        />

                        <input
                            type="search"
                            placeholder="Enter train number"
                            value={trainNumber}
                            onChange={(e) => setTrainNumber(e.target.value)}
                            disabled={loading}
                            inputMode="numeric"
                            maxLength={5}
                            aria-label="Train number"
                        />
                    </div>

                    <button
                        type="submit"
                        className="home__search-button"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="home__spinner" />
                                Searching...
                            </>
                        ) : (
                            <>
                                <Search size={18} />
                                Search
                            </>
                        )}
                    </button>
                </form>

                <p className="home__hint">
                    Enter your 5-digit train number to see its live journey.
                </p>

            </section>
        </main>
    );
}

export default Home;