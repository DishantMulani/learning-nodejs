import React from 'react'
import axios from 'axios'

export default function Card({ card }) {
    return (
        <>
            <div className='w-screen px-12'>
                <div className="flex justify-center ">
                    <h1 className='text-5xl'>Card</h1>
                </div>
                <p className='py-4'>All of the card that appeared in the show : </p>
                <div className="grid grid-cols-4">
                    {card.map(card => {
                        return (
                            <div className=" border-2 rounded border-gray-950 m-5" key={card.id}>
                                <div className="image border-2 rounded border-gray-950">
                                    <img src={card.image} alt="image not found" className='h-60' />
                                </div>
                                <div className="data p-4">
                                    <p><span className='font-bold'>Name : </span>{card.firstName} {card.lastName}</p>
                                    <p><span className='font-bold'>Email : </span>{card.email}</p>
                                    <p><span className='font-bold'>Phone : </span>{card.phone}</p>
                                    <p><span className='font-bold'>Address : </span>{card.address.address},{card.address.city}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const card = await fetch("http://localhost:3004/users")
        .then(res => res.json());
    console.log(card);
    return {
        props: {
            card
        }
    }
}

