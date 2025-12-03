import { games } from "../data/games";
import GameCard from "../components/GameCard";

export default function HomePage() {
    return (
        <div className="home-container">
            <h2 className="title">Danh sách game</h2>

            <div className="game-list">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}
