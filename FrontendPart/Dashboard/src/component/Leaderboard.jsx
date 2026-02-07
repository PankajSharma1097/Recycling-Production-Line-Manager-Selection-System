const Leaderboard = ({ Data, top = 10 }) => {
    // 1. Safety check for data
    if (!Data || !Array.isArray(Data) || Data.length === 0) {
        return (
            <div className="p-10 text-center bg-white rounded-xl shadow-md">
                <p className="text-gray-500">No candidate data available</p>
            </div>
        );
    }

    // 2. Sort and slice safely
    const leaderboard = [...Data]
        .sort((a, b) => {
            const scoreA = a.evaluation?.averageScore || 0;
            const scoreB = b.evaluation?.averageScore || 0;
            return scoreB - scoreA;
        })
        .slice(0, top);

    return (
        <div>
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200  max-w-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span>🏆</span> Leaderboard
                    </h2>
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                        Top {top}
                    </span>
                </div>

                <div>
                    <table className="w-full text-left border-separate border-spacing-y-2">
                        <thead>
                            <tr className="text-gray-500 uppercase text-xs tracking-wider">
                                <th className="px-4 py-2">Rank</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Experience</th>
                                <th className="px-4 py-2 text-right">Avg Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((candidate, index) => (
                                <tr
                                    key={candidate.id || index}
                                    className="bg-gray-50 hover:bg-indigo-50 transition-colors group"
                                >
                                    <td className="px-4 py-4 rounded-l-xl font-bold text-gray-700">
                                        #{index + 1}
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-gray-900">
                                        {candidate.name}
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-bold">
                                            {candidate.experience} Years
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-right rounded-r-xl font-black text-indigo-600">
                                        {candidate.evaluation?.averageScore || "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )


};

export default Leaderboard;