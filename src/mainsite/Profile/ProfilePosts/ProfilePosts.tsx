import Post from "./Post"


function ProfilePosts() {
    return (
        <div className="bg-gray-500 rounded-xl mt-3">

            <div className="flex flex-col gap-3">

                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>

            </div>

        </div>
    )
}

export default ProfilePosts