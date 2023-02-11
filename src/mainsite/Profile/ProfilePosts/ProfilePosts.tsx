import Post from "./Post"
import { Input } from 'antd';
import sendButton from '../../../assets/images/send.png'
import { useState } from 'react';
import { PostProps } from "../../../models/compModels";
import { motion, AnimatePresence } from "framer-motion"

const { TextArea } = Input;



function ProfilePosts() {
    const test: PostProps[] = [{
        img: "https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg",
        text: "hfdgh htdghsdwa sdwasd sd dfsdfesdfdf esdfsdfsdfsdf dfesdf dfeesdfesd fdfsedfsdfesdfesdfe 1111",
        name: "Lena", lastname: "Just", likes: 10, dislikes: 10, mark: "nomark"
    }, {
        img: "https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg",
        text: "hfdgh htdghsd dfsd fgdf fesdfdf esdfeesdfesd fdfsedfsdfesdfesdfe",
        name: "Lena", lastname: "Just", likes: 10, dislikes: 10, mark: "nomark"
    }]

    const [posts, setPosts] = useState(test)

    return (
        <div className="bg-gray-500 rounded-xl mt-3 flex flex-col items-center gap-3">
            <div>
                <text className="font-bold text-lg">Посты</text>
            </div>

            <div className="flex flex-row w-full justify-evenly">
                <TextArea className="flex w-10/12 flex-col gap-1 " placeholder="Напишите что-нибудь..." autoSize showCount maxLength={500} />
                <button onClick={() => (setPosts([posts[1], ...posts]))} className="flex hover:scale-125 active:scale-100 h-fit">
                    <img className="w-9" src={sendButton}></img>
                </button>
            </div>


            <div className="flex flex-col gap-3 items-center last:mb-10">

                {posts.map((item, index) => (<motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex w-full"
                key={index}>
                    <Post {...item}></Post></motion.div>))}

            </div>

        </div>
    )
}

export default ProfilePosts