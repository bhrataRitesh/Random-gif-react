import useGif from '../hooks/useGif';
import Spinner from './Spinner';
import React from 'react'



const Random = () => {

    const { gif, loading, fetchData } = useGif();

    return (
        <div className='bg-green-500 w-1/2  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='gap-y-5 mt-[10px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" alt='img' />)
            }

            <button onClick={() => fetchData()}
                className='w-10/12 bg-white text-xl rounded-lg py-2 font-bold mb-[25px]'
            >
                Generate
            </button>

        </div>
    )
}

export default Random