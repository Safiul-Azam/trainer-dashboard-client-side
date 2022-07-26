import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';

const SingleTrainer = ({ trainer }) => {
    const { name, email, stepsWalked, stepsTarget, performedDate, scheduledDate, calorieIntake, calorieTarget, proteinConsumed, proteinTarget, carbsConsumed, carbsTarget, fatConsumed, fatTarget } = trainer

    const percentage = stepsWalked
    const totalValueOfPieChart = carbsConsumed + proteinConsumed + fatConsumed
    return (
        <div className='rounded-2xl grid grid-cols-6 bg-primary text-white mb-5 py-8 px-8 gap-x-5'>
            <div className='col-span-2 border flex justify-start gap-5 items-center'>
                <div class="avatar">
                    <div class="w-20 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <div className=''>
                    <h3>{name}</h3>
                    <p className=''>{email}</p>
                </div>
            </div>

            <div className='border flex justify-start items-center gap-5'>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbarWithChildren
                        value={percentage}
                        maxValue={stepsTarget}
                        strokeWidth={8}
                        styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.25,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Text size
                            textSize: '16px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: `rgba(127, 209, 140, 1)`,
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7',
                        })}
                    >
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong className='text-lg'>{percentage}</strong>
                            <p className='text-xs'>Walked</p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div>
                    <strong className='text-3xl'>{stepsTarget / 1000}K</strong>
                    <p className='text-accent text-sm'>target</p>
                </div>
            </div>
            <div className='border flex justify-center items-center gap-5'>
                <div className='w-16 h-3/4 my-auto text-xl font-bold'>
                    <h2 className='my-2'>{performedDate}</h2>
                    <h2>{scheduledDate}</h2>
                </div>
                <button className='bg-secondary rounded-md w-10 h-3/4 my-auto text-2xl font-bold shadow-lg'>&#62;</button>
            </div>
            <div className='border flex justify-start items-center gap-5'>
                <div style={{ width: 100, height: 100 }}>
                    <PieChart
                        data={[
                            { title: 'Carbs', value: carbsConsumed, color: '#E38627' },
                            { title: 'Fats', value: fatConsumed, color: '#C13C37' },
                            { title: 'Protein', value:proteinConsumed, color: '#6A2135' },
                          ]}
                        totalValue={totalValueOfPieChart}
                        lineWidth={20}
                        // label={({ dataEntry }) => console.log(dataEntry)}
                        labelStyle={{
                          fontSize: '25px',
                          fontFamily: 'sans-serif',
                          fill: '#E38627',
                        }}
                        labelPosition={0}
                    />

                </div>
                <div>
                    <strong className='text-3xl'>{calorieTarget / 1000}K</strong>
                    <p className='text-accent text-lg text-center'>target</p>
                </div>
            </div>
            <div className='border'>@</div>
        </div>
    );
};

export default SingleTrainer;