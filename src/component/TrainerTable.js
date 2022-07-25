import React, { useEffect, useState } from 'react';
import SingleTable from './SingleTable';

const TrainerTable = () => {
    const [trainers, setTrainers] = useState([])
    useEffect(() => {
        fetch("trainerInfo.json")
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div class="p-10">
            <table class="table w-full">
                <thead className='p-10'>
                    <tr>
                        <th className='bg-secondary'></th>
                        <th className='bg-secondary'></th>
                        <th className='bg-secondary text-accent'>Steps</th>
                        <th className='bg-secondary'>Workout</th>
                        <th className='bg-secondary'>Nutrition</th>
                        <th className='bg-secondary'></th>
                    </tr>
                </thead>
                <tbody>
                {
                    trainers.map(trainer => <SingleTable
                        key={trainer.userId}
                        trainer={trainer}
                    ></SingleTable>)
                }
                    
                </tbody>
            </table>
        </div>
    );
};

export default TrainerTable;