import React from 'react';
import TrainerInfo from './TrainerInfo';
import TrainerTable from './TrainerTable';

const Container = () => {
    return (
        <div className='bg-accent py-12 px-6 w-11/12 mx-auto'>
            <TrainerInfo></TrainerInfo>
            {/* <TrainerTable></TrainerTable> */}
        </div>
    );
};

export default Container;