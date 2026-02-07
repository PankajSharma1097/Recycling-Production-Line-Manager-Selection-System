import React from 'react'

const CandidateCard = ({ Data, top = 40 }) =>{
if (!Data || Data.length === 0) {
    return <p className="text-center text-gray-500">No candidate data available</p>;
  }

  const candidateData = [...Data]


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto w-1/2 h-full p-5">
      {candidateData.map((candidate, index) => (
        <div 
          key={candidate.id} 
          className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-5 flex flex-col justify-between"
        >
          {/* Rank Badge */}
          <div className="absolute -top-3 -left-3 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
            #{candidate.rank || index + 1}
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-800 truncate pr-4">{candidate.name}</h3>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                {candidate.evaluation.averageScore}%
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-3">
              💼 {candidate.experience} Years Experience
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {candidate.skills.map((skill, i) => (
                <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Mini Stats Section */}
          <div className="border-t pt-3 mt-auto">
            <div className="grid grid-cols-3 gap-1 text-center">
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Crisis</p>
                <p className="text-xs font-bold">{candidate.evaluation.crisisManagement}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Sustain</p>
                <p className="text-xs font-bold">{candidate.evaluation.sustainability}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Team</p>
                <p className="text-xs font-bold">{candidate.evaluation.teamMotivation}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default CandidateCard
