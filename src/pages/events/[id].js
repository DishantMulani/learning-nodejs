import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';


export default async function Id(props) {
    const router = useRouter();
    const { id } = router.query;
    console.log(props);
    console.log(id);

    const arr = [];
    const data = await fetch(`http://localhost:3004/users/${id}`)
        .then(res => res.json());
    arr.push(data);
    console.log(arr);

    return (
        <div>
            {
                data.map(data => {
                    return (
                        <div className="">{data.id}</div>
                    )
                })
            }
        </div>
    )
}


