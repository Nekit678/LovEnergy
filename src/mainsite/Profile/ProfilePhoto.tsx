

function ProfilePhoto() {
    return (
        <div className="flex flex-col gap-1 h-fit items-center justify-center rounded-xl bg-gray-500">
            <img className="mt-1 p-2 w-58" src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg"></img>
            <button className="bg-white ">Изменить</button>
        </div>
    )
}

export default ProfilePhoto