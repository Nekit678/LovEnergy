
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { FriendsItemProps } from '../../../models/compModels';

export const FriendsItem = React.memo((props:FriendsItemProps) => {
    const navigate = useNavigate()

    return (
        <div onClick = {()=>(navigate(`/app/profile/${props.userId}`))} className="flex rounded-xl flex-col items-center cursor-pointer transition duration-200 hover:bg-slate-400">
            <img className="w-14 m-1 rounded-full" src={props.imgUrl}></img>
            <text>{props.name}</text>
        </div>
    )
})