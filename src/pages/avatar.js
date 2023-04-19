import React from 'react'
import axios from 'axios'

export default function Avatar({ avatar }) {
    return (
        <>
            <div className='w-screen px-12'>
                <div className="flex justify-center ">
                    <h1 className='text-5xl'>Avatar</h1>
                </div>
                <p className='py-4'>All of the avtar that appeared in the show : </p>
                <div className="grid grid-cols-2">
                    {avatar.map(av => {
                        return (
                            <div key={av.id} className='p-5'>
                                <p className='py-5'>{av.title}</p>
                                <img src={av.url} width="100%" alt="image not found"></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const avatar = await axios.get("https://jsonplaceholder.typicode.com/photos/")
        .then(res => res.data);
    // console.log(avatar);
    return {
        props: {
            avatar
        }
    }
}

