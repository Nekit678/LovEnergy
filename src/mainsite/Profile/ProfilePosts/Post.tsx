import { LikeFilled, DislikeFilled } from '@ant-design/icons';
import { useState } from 'react';
import { PostProps } from '../../../models/compModels';


function Post(props:PostProps) {
    const [likes, setLikes] = useState(props.likes)
    const [dislikes, setDislikes] = useState(props.dislikes)
    const [mark, setMark] = useState(props.mark)

    const like = () => {
        if (mark === "like") {
            setLikes(likes - 1)
            setMark('nomark')
        }

        if (mark === "dislike") {
            setLikes(likes + 1)
            setDislikes(dislikes - 1)
            setMark('like')
        }

        if (mark === "nomark") {
            setLikes(likes + 1)
            setMark('like')
        }
    }

    const dislike = () => {
            if (mark === "like") {
                setLikes(likes - 1)
                setDislikes(dislikes + 1)
                setMark('dislike')
            }

            if (mark === "dislike") {
                setDislikes(dislikes - 1)
                setMark('nomark')
            }

            if (mark === "nomark") {
                setDislikes(dislikes + 1)
                setMark('dislike')
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
                    <button onClick={() => { like() }} className={`${mark==="like"?"text-blue-700":""} text-xl hover:scale-125 active:scale-100`}><LikeFilled /></button>
                    <text>{likes}</text>
                </div>

                <div className='flex gap-1'>
                    <button onClick={() => { dislike() }} className={`${mark==="dislike"?"text-red-600":""} text-xl hover:scale-125 active:scale-100`}><DislikeFilled /></button>
                    <text>{dislikes}</text>
                </div>

            </div>

        </div>
    )
}

export default Post