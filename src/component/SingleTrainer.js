import React from 'react';

const SingleTrainer = ({ trainer }) => {
    const { name, email } = trainer
    return (
        <tr>
            <th>
                <div class="avatar">
                    <div class="w-8 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt=''/>
                    </div>
                </div>
            </th>
            <td>
                <h3 className='text-sm'>{name}</h3>
                <p className='text-xs'>{email}</p>
            </td>
            <td>{email}</td>
            <td>Blue</td>
        </tr>
    );
};

export default SingleTrainer;