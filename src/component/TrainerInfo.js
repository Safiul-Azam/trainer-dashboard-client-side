import React, { useEffect, useState } from 'react';
import SingleTrainer from './SingleTrainer';
import { BiWalk } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { FaConciergeBell } from "react-icons/fa";

const TrainerInfo = () => {
    const [trainers, setTrainers] = useState([])
    useEffect(() => {
        fetch("trainerInfo.json")
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div class="bg-secondary rounded-2xl p-4 drop-shadow-2xl">
            <div className='lg:grid hidden lg:grid-cols-6 gap-10 my-6 text-2xl text-white font-bold'>
            <h3></h3>
            <h3></h3>
            <h3 className='flex items-center'><BiWalk className='inline'></BiWalk><span className='ml-1'>Steps</span></h3>
            <h3 className='flex items-center'><CgGym className='inline'></CgGym><span className='ml-1'>Workout</span></h3>
            <h3 className='flex items-center'><FaConciergeBell className='inline text-xl'></FaConciergeBell><span className='ml-1'>Nutrition</span></h3>
            </div>
            <div className=''>
                {
                    trainers.map(trainer => <SingleTrainer
                        key={trainer.userId}
                        trainer={trainer}
                    ></SingleTrainer>)
                }
            </div>
        </div>
    );
};

export default TrainerInfo;