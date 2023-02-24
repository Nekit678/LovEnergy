import Post from "./Post"
import { Input } from 'antd';
import sendButton from '../../../assets/images/send.png'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { useGetPostsQuery, useSendPostMutation } from "../../../redux/backend/api";


const { TextArea } = Input;



function ProfilePosts() {

    const [text, setText] = useState("")
    const [page, setPage] = useState(1)
    const getPosts = useGetPostsQuery({ page: page, profile_id: 0 })
    const [sendPostReq, sendPost] = useSendPostMutation()
    const [posts, setPosts] = useState(getPosts.data?.data.posts)

    useEffect(() => {

        if (getPosts.isSuccess) {

            setPosts([...(posts || []), ...getPosts.data.data.posts])
        }

    }, [getPosts.data?.data])


    useEffect(() => {

        if (sendPost.isSuccess) {
            setPosts([sendPost.data.data, ...(posts || [])])
        }

    }, [sendPost.data?.data])


    const createPost = () => {
        sendPostReq({ profileId: 0, text: text })
        setText("")
    }

    const scrollHandler = (e: any) => {
        const sc = e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight)
        if (sc <= 1 && sc >= 0) {
            if ((getPosts.data?.data.totalCount || 0) > 5 * page) {
                setPage(page + 1)
            }

        }
    }

    return (
        <div className="bg-gray-500 rounded-xl mt-3 flex flex-col items-center gap-3">
            <div>
                <text className="font-bold text-lg">Посты</text>
            </div>

            <div className="flex flex-row w-full justify-evenly">
                <TextArea onChange={(e) => (setText(e.target.value))} value={text} allowClear className="flex w-10/12 flex-col gap-1 " placeholder="Напишите что-нибудь..." autoSize={{ minRows: 2, maxRows: 4 }} showCount maxLength={500} />
                <button onClick={() => (createPost())} className="flex hover:scale-125 active:scale-100 h-fit">
                    <img className={`w-12 ${sendPost.isLoading ? "animate-bounce" : ""}`} src={sendButton}></img>
                </button>
            </div>


            <div onScroll={(e) => scrollHandler(e)} className="flex w-full flex-col h-[30rem] bg-scroll overflow-y-scroll gap-3">

                {posts?.map((item, index) => (<motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (((index + 1) % 5) / 4) }}
                    exit={{ opacity: 0 }}
                    className="flex w-full justify-center"
                    key={item.id}>
                    <Post {...item}></Post></motion.div>))}

            </div>

        </div>
    )
}

export default ProfilePosts