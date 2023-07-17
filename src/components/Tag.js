import useGif from '../hooks/useGif';
import Spinner from './Spinner';
import React, { useState } from 'react'


const Tag = () => {
    const [tag, setTag] = useState('');
    const { gif, loading, fetchData } = useGif(tag);
    return (
        <div className='bg-blue-300 w-1/2  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='gap-y-5 mt-[10px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" alt='img' />)
            }
            <input className='w-10/12 rounded-lg py-2 text-xl text-center' onChange={(event) => setTag(event.target.value)} value={tag} />

            <button onClick={() => fetchData()}

                className='w-10/12 bg-white text-xl rounded-lg py-2 font-bold mb-[25px]'
            >
                Generate
            </button>

        </div>
    )
}

export default Tag