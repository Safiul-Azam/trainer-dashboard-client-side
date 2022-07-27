import React, { useRef, useState } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';
import { FaChevronRight, FaRegBell, FaMinus, FaPlus } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { TbCalendarStats } from "react-icons/tb";

const SingleTrainer = ({ trainer }) => {
    let { name, email, stepsWalked, stepsTarget, performedDate, scheduledDate, calorieIntake, calorieTarget, proteinConsumed, proteinTarget, carbsConsumed, carbsTarget, fatConsumed, AiFillBell } = trainer
    const percentage = stepsWalked
    const totalValueOfPieChart = carbsConsumed + proteinConsumed + fatConsumed
    const stepRef = useRef(0)
    const calorieRef = useRef(0)
    const handleIncreaseStep = () => {
        const currentValueOfStep = stepRef.current.value
        const parseOfNumber = parseFloat(currentValueOfStep)
        const result = parseOfNumber + 500
        stepRef.current.value = result
    }
    const handleDecreaseStep = () => {
        const currentValueOfStep = stepRef.current.value
        const parseOfNumber = parseFloat(currentValueOfStep)
        if (parseOfNumber > 0) {
            stepRef.current.value = parseOfNumber - 500
        }
    }
    const handleIncreaseCalorie = () => {
        const currentValueOfCalorie = calorieRef.current.value
        const parseOfNumber = parseFloat(currentValueOfCalorie)
        const result = parseOfNumber + 100
        calorieRef.current.value = result
    }
    const handleDecreaseCalorie = () => {
        const currentValueOfCalorie = calorieRef.current.value
        const parseOfNumber = parseFloat(currentValueOfCalorie)
        if (parseOfNumber > 0) {
            calorieRef.current.value = parseOfNumber - 100
        }
    }
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
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `rgba(127, 209, 140, 1)`,
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7',
                        })}
                    >
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong className='text-lg'>{percentage}</strong>
                            <p className='text-xs'>Walked</p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className='grid gird-row-1'>
                    <button onClick={handleIncreaseStep} className='bg-secondary py-1 rounded-lg text-center flex justify-center items-center'><FaPlus></FaPlus></button>
                    <input className='text-2xl font-bold' type="button" ref={stepRef} value={stepsTarget} />
                    <p className='text-accent text-lg text-center'>target</p>
                    <button onClick={handleDecreaseStep} className='bg-secondary py-1 rounded-lg flex justify-center items-center'><FaMinus></FaMinus></button>
                </div>
            </div>
            <div className='flex justify-start items-center gap-5'>
                <div className=''>
                    <h2 className='text-2xl my-3'><BiUserCheck className='inline text-4xl font-bold mr-3'></BiUserCheck><span>{performedDate}</span></h2>
                    <h2 className='text-2xl'><TbCalendarStats className='inline text-4xl font-bold mr-3'></TbCalendarStats><span>{scheduledDate}</span></h2>
                </div>
                <button className='bg-secondary rounded-md py-6 mt-3 shadow-lg px-2'><FaChevronRight className='text-2xl'></FaChevronRight></button>
            </div>
            <div className='flex items-center justify-between gap-x-2 col-span-2'>
                <div className='flex items-center gap-x-5 '>
                    <div style={{ width: 100, height: 100 }}>
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
                    <div className='grid gird-row-1'>
                        <button onClick={handleIncreaseCalorie} className='bg-secondary py-1 rounded-lg text-center flex justify-center items-center'><FaPlus></FaPlus></button>
                        <input className='text-2xl font-bold' type="button" ref={calorieRef} value={calorieTarget} />
                        <p className='text-accent text-lg text-center'>target</p>
                        <button onClick={handleDecreaseCalorie} className='bg-secondary py-1 rounded-lg flex justify-center items-center'><FaMinus></FaMinus></button>
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