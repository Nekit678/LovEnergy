
import ProfilePhoto from "./ProfilePhoto"
import ProfileFriends from "./ProfileFriends"
import ProfileInfo from "./ProfileInfo"
import PhotoLine from "./PhotoLine"
import ProfilePosts from "./ProfilePosts/ProfilePosts"

function Profile() {
    return (
        <div className="grid grid-cols-12">

            <div className="col-span-3">
                <ProfilePhoto></ProfilePhoto>
                <ProfileFriends></ProfileFriends>
            </div>

            <div className="col-start-4 col-span-7 ml-10 ">
                <ProfileInfo></ProfileInfo>
                <PhotoLine></PhotoLine>
                <ProfilePosts></ProfilePosts>
            </div>


        </div>

    )
}

export default Profile