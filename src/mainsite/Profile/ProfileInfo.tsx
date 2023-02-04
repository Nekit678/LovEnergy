
function ProfileInfo() {
    return (
        <div>
            {/* Блок с данными */}
            <div className="flex flex-col bg-gray-500 rounded-xl h-fit">
                <div className="m-5 flex-col">
                    <div className="flex flex-row justify-between">
                        <text>Имя Фамилия</text>
                        <text>Online</text>
                    </div>

                    <div>
                        <text>Статус</text>
                    </div>

                    <div className="mt-5 mb-5">
                        <div className="flex justify-between">
                            <text>День рождения</text>
                            <text>12 мая 2000 г.</text>
                        </div>
                        <div className="flex justify-between">
                            <text>День рождения</text>
                            <text>12 мая 2000 г.</text>
                        </div>
                        <div className="flex justify-between">
                            <text>День рождения</text>
                            <text>12 мая 2000 г.</text>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <text>250</text>
                            <text>Друзей</text>
                        </div>
                        <div className="flex flex-col">
                            <text>250</text>
                            <text>Друзей</text>
                        </div>
                        <div className="flex flex-col">
                            <text>250</text>
                            <text>Друзей</text>
                        </div>
                        <div className="flex flex-col">
                            <text>250</text>
                            <text>Друзей</text>
                        </div>
                        <div className="flex flex-col">
                            <text>250</text>
                            <text>Друзей</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo