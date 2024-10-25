const leaderboardData = [
  { rank: 1, name: 'CryptoKing', points: 15000 },
  { rank: 2, name: 'BlockchainQueen', points: 14500 },
  { rank: 3, name: 'NFTMaster', points: 14000 },
  { rank: 4, name: 'EthereumElite', points: 13500 },
  { rank: 5, name: 'TokenTitan', points: 13000 },
];

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Live Leaderboard</h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden max-w-2xl mx-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-500">
                <th className="py-3 px-4 text-left">Rank</th>
                <th className="py-3 px-4 text-left">Player</th>
                <th className="py-3 px-4 text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player) => (
                <tr key={player.rank} className="border-b border-gray-700">
                  <td className="py-3 px-4">{player.rank}</td>
                  <td className="py-3 px-4">{player.name}</td>
                  <td className="py-3 px-4 text-right">{player.points.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
