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
        <div className='bg-secondary w-full'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Steps</th>
                            <th>Workout</th>
                            <th>Nutrition</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers.map(trainer => <SingleTrainer
                                key={trainer.userId}
                                trainer={trainer}
                            ></SingleTrainer>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default TrainerInfo;