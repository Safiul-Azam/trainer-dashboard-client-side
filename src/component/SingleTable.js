import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';

const SingleTable = ({ trainer }) => {
    const { name, email, stepsWalked, stepsTarget, performedDate, scheduledDate, calorieIntake, calorieTarget, proteinConsumed, proteinTarget, carbConsumed, carbTarget, fatConsumed, fatTarget } = trainer


    const percentage = stepsWalked

    return (
        <tr>
            <th>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <h3>{name}</h3>
                <p>{email}</p>
            </th>
            <td>

                <div style={{ width: 80, height: 80 }}>
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
                    <h2>{stepsTarget}</h2>
                </div>
            </td>
            <td className='grid grid-rows-3 grid-flow-col'>
                <h2>{performedDate}</h2>
                <h2>{scheduledDate}</h2>
                <h2 className='row-span-2 bg-primary'>H</h2>
            </td>
            <td>
            <div style={{ width: 80, height: 80 }}>
                <PieChart
                totalValue={100}
                radius={50}
                lineWidth={20}
                    data={[
                        { title: 'One', value:33, color: '#E38627' },
                        { title: 'Two', value: 33, color: '#C13C37' },
                        { title: 'Three', value: 34, color: '#6A2135' },
                    ]}
                />
                </div>
            </td>
            <td>H</td>
        </tr>
    );
};

export default SingleTable;