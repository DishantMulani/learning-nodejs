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
                {
                    card.map(card => {
                        return (
                            <div className="grid grid-cols-3">
                                <div className="w-52">
                                    <div className="image">
                                        <img src={card.image} alt="image not found" width="100%" />
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export async function getStaticProps() {
    const card = await fetch("https://dummyjson.com/users/")
        .then(res => res.json());
        console.log(card);
    return {
        props: {
            card
        }
    }
}

