import React from 'react';
import Leaderboard from '../component/Leaderboard';
import CandidateCard from '../component/CandidateCard';

const Dashboard = ({ Data }) => {
  return (
    <div className='w-[85vw] flex ml-70 absolute top-0 h-full '>
        <h1 className='text-3xl flex font-semibold absolute left-150 top-2 '>AI-Powered Candidate Ranking</h1>

        
        <div className=' flex justify-around items-center mt-10 p-5' >
         <Leaderboard Data={Data} />
         <CandidateCard Data={Data} />
        
   
        </div>
    </div>


  );
};

export default Dashboard;