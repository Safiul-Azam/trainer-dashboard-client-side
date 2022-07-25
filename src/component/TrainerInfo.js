import React, { useEffect, useState } from 'react';
import SingleTrainer from './SingleTrainer';

const TrainerInfo = () => {
    const [trainers, setTrainers] = useState([])
    useEffect(() => {
        fetch("trainerInfo.json")
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div class="bg-secondary rounded-2xl p-10">
            <div className='grid grid-cols-6 text-center'>
            <h3></h3>
            <h3></h3>
            <h3 className='text-3xl mb-10 text-white font-bold'>Steps</h3>
            <h3 className='text-3xl mb-10 text-white font-bold'>Workout</h3>
            <h3 className='text-3xl mb-10 text-white font-bold'>Nutrition</h3>
            <h3></h3>
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