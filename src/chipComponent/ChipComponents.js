// import React from 'react'
// import "../ChipComponents.css";

// export const ChipComponents = () => {
//   return (
//     <div>ChipComponents</div>
//   )
// }

// ChipComponents.js

import React, { useEffect, useState } from 'react'
import './ChipComponents.css'

export default function ChipComponents({ searchData, onSelectUser, availableData, setIsInputFocused }) {



    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (searchData) {
            const filtered = availableData.filter(
                (dt) =>
                    (dt.name ?? '').toLowerCase().includes(searchData.toLowerCase()) ||
                    (dt.email ?? '').toLowerCase().includes(searchData.toLowerCase())
            );

            setFilteredData(filtered);
        }
        else {

            setFilteredData([]);
        }
    }, [searchData, availableData]);

    const handleClickUserData = (selectedData) => {
        onSelectUser(selectedData.name, selectedData.image);
    };


    if (!searchData) {
        return (

            <div className='userDataContainer'
            onMouseOver={() => setIsInputFocused(true)}
            onMouseOut={() => setIsInputFocused(false)}
        >

            {availableData.map((data, index) => (
                <div key={index} className='individualData' onClick={() => handleClickUserData({ name: data.name, image: data.image })}>
                    <img className='imageDp' src={data.image} alt={data.name} />
                    <div className='UserName'>{data.name}</div>
                    <div>{data.email}</div>
                </div>
            ))}

        </div>
        )
    }

    return (
        <>
            <div className='userDataContainer'
                onMouseOver={() => setIsInputFocused(true)}
                onMouseOut={() => setIsInputFocused(false)}
            >


                {filteredData.map((data, index) => (
                    <div key={index} className='individualData' onClick={() => handleClickUserData({ name: data.name, image: data.image })}>
                        <img className='imageDp' src={data.image} alt={data.name} />
                        <div className='UserName'>{data.name}</div>
                        <div>{data.email}</div>
                    </div>
                ))}
            </div>
        </>
    )
}
