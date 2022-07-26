import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';
import { FaChevronRight, FaRegBell } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { TbCalendarStats } from "react-icons/tb";

const SingleTrainer = ({ trainer }) => {
    const { name, email, stepsWalked, stepsTarget, performedDate, scheduledDate, calorieIntake, calorieTarget, proteinConsumed, proteinTarget, carbsConsumed, carbsTarget, fatConsumed, AiFillBell } = trainer

    const percentage = stepsWalked
    const totalValueOfPieChart = carbsConsumed + proteinConsumed + fatConsumed
    return (
        <div className='rounded-2xl grid grid-cols-6 bg-primary text-white mb-5 py-4 px-8 gap-x-5'>
            <div className='col-span-2 flex justify-start gap-5 items-center'>
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

            <div className='flex justify-start items-center gap-5'>
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
                    <strong className='text-3xl'>{stepsTarget / 1000}k</strong>
                    <p className='text-accent text-lg text-center'>target</p>
                </div>
            </div>
            <div className='flex justify-start items-center gap-5'>
                <div className=''>
                    <h2 className='text-2xl my-3'><BiUserCheck className='inline text-4xl font-bold mr-3'></BiUserCheck><span>{performedDate}</span></h2>
                    <h2 className='text-2xl'><TbCalendarStats className='inline text-4xl font-bold mr-3'></TbCalendarStats><span>{scheduledDate}</span></h2>
                </div>
                <button className='bg-secondary rounded-md h-3/4 mt-3 shadow-lg px-2'><FaChevronRight className='text-2xl'></FaChevronRight></button>
            </div>
            <div className='flex items-center justify-between gap-x-2 col-span-2'>
                <div className='flex items-center gap-x-5 '>
                    <div style={{ width: 80, height: 80 }}>
                        <PieChart
                            data={[
                                { title: 'Carbs', value: carbsConsumed, color: '#F0C50F' },
                                { title: 'Fats', value: fatConsumed, color: '#03C6FA' },
                                { title: 'Protein', value: proteinConsumed, color: '#F45C84' },
                            ]}
                            totalValue={totalValueOfPieChart}
                            lineWidth={30}
                            label={({ dataEntry }) => calorieIntake}
                            labelStyle={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                                fontFamily: 'sans-serif',
                                fill: 'white',
                            }}
                            labelPosition={0}
                        />
                    </div>
                    <div>
                        <strong className='text-3xl'>{calorieTarget / 1000}k</strong>
                        <p className='text-accent text-lg text-center mt-0'>target</p>
                    </div>
                    <button className='bg-secondary rounded-md h-3/4 mt-3 py-6 px-2 shadow-lg'><FaChevronRight className='text-2xl'></FaChevronRight></button>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='bg-neutral p-3 rounded-2xl'>
                        <FaRegBell className='text-black text-3xl'></FaRegBell>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleTrainer;