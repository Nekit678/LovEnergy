import { ProfileInfoProps } from "../../models/compModels"
import React from 'react';

const ProfileInfo = React.memo((props: ProfileInfoProps) => {
    return (
        <div className="flex flex-col bg-gray-500 rounded-xl h-fit">
            <div className="m-5 flex-col">
                <div className="flex flex-row justify-between">
                    <text className="font-bold text-2xl">{props.name} {props.lastname}</text>
                    <text>{props.status}</text>
                </div>

                <div>
                    <text>{props.textStatus}</text>
                </div>

                <div className="mt-5 mb-5">
                    <div className="flex justify-between">
                        <text className="font-bold">День рождения</text>
                        <text>{props.date}</text>
                    </div>
                    <div className="flex justify-between">
                        <text className="font-bold">Город</text>
                        <text>{props.city}</text>
                    </div>
                </div>

                <div className="flex flex-row justify-between gap-x-2">
                    <div className=" bg-gray-400 rounded-xl flex-auto">
                        <div className=" flex flex-col items-center m-1">
                            <text className="font-bold text-lg">{props.frCount}</text>
                            <text>Друзей</text>
                        </div>
                    </div>
                    <div className=" bg-gray-400 rounded-xl flex-auto">
                        <div className=" flex flex-col items-center m-1">
                            <text className="font-bold text-lg">{props.photoCount}</text>
                            <text>Фото</text>
                        </div>
                    </div>
                    <div className=" bg-gray-400 rounded-xl flex-auto">
                        <div className=" flex flex-col items-center m-1">
                            <text className="font-bold text-lg">{props.followCount}</text>
                            <text>Подписчиков</text>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
})

export default ProfileInfo