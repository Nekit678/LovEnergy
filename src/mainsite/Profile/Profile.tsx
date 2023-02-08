
import ProfilePhoto from "./ProfilePhoto"
import ProfileFriends from "./ProfileFriends/ProfileFriends"
import ProfileInfo from "./ProfileInfo"
import PhotoLine from "./PhotoLine"
import ProfilePosts from "./ProfilePosts/ProfilePosts"

function Profile() {
    return (
        <div className="grid grid-cols-12">

            <div className="col-span-3">
                <ProfilePhoto></ProfilePhoto>
                <ProfileFriends friends={[{name: "Lena", userId: 10, imgUrl: 'https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg'},
                {name: "Lena", userId: 11, imgUrl: 'https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg'}]}></ProfileFriends>
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