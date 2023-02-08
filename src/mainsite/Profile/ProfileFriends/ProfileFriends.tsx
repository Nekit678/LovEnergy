
import { FriendsItem } from './FriendsItem';
import React from 'react';
import { ProifileFriendsProps } from '../../../models/compModels';

export const ProfileFriends = React.memo((props: ProifileFriendsProps) => {

    return (
        <div className="bg-gray-500 rounded-xl">
            {/* Друзья */}
            <div className="flex flex-col m-3">
                <text className="mt-2 mb-2 font-sans font-medium">Друзья</text>

                <div className="flex flex-row gap-2 flex-wrap justify-start">
                    {props.friends.map((item) => (<FriendsItem key={item.userId} userId={item.userId}
                        name={item.name} imgUrl={item.imgUrl} ></FriendsItem>))}
                </div>

            </div>
        </div>
    )
})

export default ProfileFriends