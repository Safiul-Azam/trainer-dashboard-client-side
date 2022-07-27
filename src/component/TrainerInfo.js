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
        <div class="bg-secondary rounded-2xl p-10">
            <div className='grid grid-cols-6'>
            <h3></h3>
            <h3></h3>
            <h3 className='text-3xl mb-10 text-white font-bold flex items-center'><BiWalk className='inline text-5xl'></BiWalk><span className='ml-1'>Steps</span></h3>
            <h3 className='text-3xl mb-10 text-white font-bold flex items-center'><CgGym className='inline text-5xl'></CgGym><span className='ml-4'>Workout</span></h3>
            <h3 className='text-3xl mb-10 text-white font-bold flex items-center'><FaConciergeBell className='inline text-4xl'></FaConciergeBell><span className='ml-4'>Nutrition</span></h3>
            </div>
            <div className='grid grid-rows-3'>
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