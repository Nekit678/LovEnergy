import { LikeFilled, DislikeFilled } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { PostProps } from '../../../models/compModels';


function Post(props: PostProps) {
    const [likes, setLikes] = useState(props.likes)
    const [dislikes, setDislikes] = useState(props.dislikes)
    const [mark, setMark] = useState(props.mark)

    // useEffect(() => {
    //     setLikes(props.likes)
    // }, [props.likes])


    const like = () => {
        if (mark === "liked") {
            setLikes(likes - 1)
            setMark('nomark')
        }

        if (mark === "disliked") {
            setLikes(likes + 1)
            setDislikes(dislikes - 1)
            setMark('liked')
        }

        if (mark === "nomark") {
            setLikes(likes + 1)
            setMark('liked')
        }
    }

    const dislike = () => {
        if (mark === "liked") {
            setLikes(likes - 1)
            setDislikes(dislikes + 1)
            setMark('disliked')
        }

        if (mark === "disliked") {
            setDislikes(dislikes - 1)
            setMark('nomark')
        }

        if (mark === "nomark") {
            setDislikes(dislikes + 1)
            setMark('disliked')
        }

    }

    return (
        <div className="bg-gray-400 w-11/12 rounded-xl flex flex-col gap-2 items-center shadow-xl">

            <div className='flex items-center self-start ml-5 mt-2 gap-2'>
                <img className='w-12 rounded-full' src={props.img} alt=''></img>
                <text className='font-bold'>{props.name} {props.lastname}</text>
            </div>

            <text className="w-10/12">
                {props.text}
            </text>

            <div className='flex gap-3 mb-2'>

                <div className='flex gap-1'>
                    <button onClick={() => { like() }} className={`${mark === "liked" ? "text-blue-700" : ""} text-xl hover:scale-125 active:scale-100`}><LikeFilled /></button>
                    <text>{likes}</text>
                </div>

                <div className='flex gap-1'>
                    <button onClick={() => { dislike() }} className={`${mark === "disliked" ? "text-red-600" : ""} text-xl hover:scale-125 active:scale-100`}><DislikeFilled /></button>
                    <text>{dislikes}</text>
                </div>

            </div>

        </div>
    )
}

export default Post