import React, { useRef, useState } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';
import { FaChevronRight, FaRegBell, FaMinus, FaPlus } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { TbCalendarStats } from "react-icons/tb";
import ReactTooltip from 'react-tooltip';
import ProgressBar from '@ramonak/react-progress-bar';

const SingleTrainer = ({ trainer }) => {
    const { name, email, stepsWalked, stepsTarget, performedDate, scheduledDate, calorieIntake, calorieTarget, proteinConsumed, proteinTarget, carbsConsumed, carbsTarget, fatConsumed, fatTarget, AiFillBell, img } = trainer
    const percentage = stepsWalked
    const totalValueOfPieChart = carbsConsumed + proteinConsumed + fatConsumed
    const stepRef = useRef(0)
    const calorieRef = useRef(0)
    // HANDLE STEPS TARGET INCREASE/DECREASE SYSTEM
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
    // HANDLE CALORIE TARGET INCREASE/DECREASE SYSTEM
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
        <div className='rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 bg-primary text-white mb-5 py-2 lg:px-8 px-3 lg:gap-12 md:gap-y-8 gap-y-8'>
            {/* PROFILE PICTURE AND NAME EMAIL */}
            <div className='lg:flex md:flex lg:justify-start md:justify-center gap-3 items-center col-span-2 '>
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-sm'>{name}</h3>
                    <p className='text-xs'>{email}</p>
                </div>
            </div>
            {/* STEP TARGET CIRCULAR PROGRESS BAR INCREASE/DECREASE */}
            <div className='lg:flex md:flex lg:justify-between md:justify-around items-center lg:gap-3 col-span-2'>
                <div className='flex justify-start items-center gap-3 mb-10 lg:mb-0'>
                    <div style={{ width: 60, height: 60 }}>
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
                            <div style={{ marginTop: -5, textAlign: 'center' }}>
                                <strong className='text-xs'>{percentage}</strong>
                                <p style={{ fontSize: 8 }} className=''>Walked</p>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className='grid gird-row-1'>
                        <button onClick={handleIncreaseStep} className='bg-secondary py-1 rounded-lg text-center flex justify-center items-center'><FaPlus className='text-xs'></FaPlus></button>
                        <input className='text-lg font-bold' type="button" ref={stepRef} value={stepsTarget} />
                        <p className='text-accent text-xs text-center'>target</p>
                        <button onClick={handleDecreaseStep} className='bg-secondary py-1 rounded-lg flex justify-center items-center'><FaMinus className='text-xs'></FaMinus></button>
                    </div>
                </div>
                {/* PERFORMED DATE/SCHEDULE DATE */}
                <div className='flex justify-start items-center gap-3'>
                    <div className='text-lg'>
                        <h2><BiUserCheck className='inline text-lg lg:text-xl font-bold mr-1'></BiUserCheck><span>{performedDate}</span></h2>
                        <h2><TbCalendarStats className='inline text-xl font-bold mr-1'></TbCalendarStats><span>{scheduledDate}</span></h2>
                    </div>
                    <button className='bg-secondary rounded-md py-5 shadow-lg px-1'><FaChevronRight className='text-sm'></FaChevronRight></button>
                </div>
            </div>
            {/* CALORIES TARGET, PIE CHART, PROGRESS BAR FOR CARBS, FATS, PROTEIN */}
            <div className='lg:flex md:flex lg:justify-between md:justify-around items-center gap-x-2 col-span-2'>
                <div className='flex items-center gap-x-3 mb-10 lg:mb-0'>
                    <div data-tip='React-tooltip' data-for='tooltip' style={{ width: 60, height: 60 }}>
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
                                fontSize: '18px',
                                fontWeight: 'bold',
                                fontFamily: 'sans-serif',
                                fill: 'white',
                            }}
                            labelPosition={0}
                        />
                        {/* REACT TOOLTIP */}
                        <ReactTooltip
                            place="bottom"
                            textColor='#5F4B8BFF'
                            backgroundColor='#333B44'
                            id='tooltip'
                        >
                            <div style={{ backgroundColor: "#1B222A" }} className=' p-2 my-3 rounded-xl'>
                                <div className='flex justify-between mb-1'>
                                    <span className='text-white text-xs'>PROTEIN</span>
                                    <span className='text-white text-xs'>70g</span>
                                </div>
                                {/* PROGRESS BAR */}
                                <ProgressBar width={150}
                                    labelAlignment={'right'}
                                    labelColor={'#333'}
                                    labelSize={10}
                                    baseBgColor={'#101317'}
                                    bgColor={'#F45C84'}
                                    height={10}
                                    completed={proteinConsumed}
                                    maxCompleted={proteinTarget}
                                />
                            </div>
                            <div style={{ backgroundColor: "#1B222A" }} className=' p-2 my-3 rounded-xl'>
                                <div className='flex justify-between mb-1'>
                                    <span className='text-white text-xs'>FATS</span>
                                    <span className='text-white text-xs'>70g</span>
                                </div>
                                <ProgressBar width={150}
                                    labelAlignment={'right'}
                                    labelColor={'#333'}
                                    labelSize={10}
                                    baseBgColor={'#101317'}
                                    bgColor={'#03C6FA'}
                                    height={10}
                                    completed={fatConsumed}
                                    maxCompleted={fatTarget}
                                />
                            </div>
                            <div style={{ backgroundColor: "#1B222A" }} className='p-2 my-2 rounded-xl'>
                                <div className='flex justify-between mb-1'>
                                    <span className='text-white text-xs'>CARBS</span>
                                    <span className='text-white text-xs'>70g</span>
                                </div>
                                <ProgressBar width={150}
                                    labelAlignment={'right'}
                                    labelColor={'#333'}
                                    labelSize={10}
                                    baseBgColor={'#101317'}
                                    bgColor={'#F0C50F'}
                                    height={10}
                                    completed={carbsConsumed}
                                    maxCompleted={carbsTarget}
                                />
                            </div>
                        </ReactTooltip>
                    </div>
                    {/* CALORIES INCREASE/DECREASE BUTTON */}
                    <div className='grid gird-row-1'>
                        <button onClick={handleIncreaseCalorie} className='bg-secondary py-1 rounded-lg text-center flex justify-center items-center'><FaPlus className='text-xs'></FaPlus></button>
                        <input className='text-lg font-bold' type="button" ref={calorieRef} value={calorieTarget} />
                        <p className='text-accent text-xs text-center'>target</p>
                        <button onClick={handleDecreaseCalorie} className='bg-secondary py-1 rounded-lg flex justify-center items-center'><FaMinus className='text-xs'></FaMinus></button>
                    </div>
                    <button className='bg-secondary rounded-md h-3/4 mt-3 py-5 px-1 shadow-lg'><FaChevronRight className='text-sm'></FaChevronRight></button>
                </div>
                {/* WARNING BUTTON */}
                <div className='lg:flex lg:justify-center lg:items-center'>
                    <button className='bg-neutral p-2 rounded-xl'>
                        <FaRegBell className='text-black text-2xl'></FaRegBell>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleTrainer;