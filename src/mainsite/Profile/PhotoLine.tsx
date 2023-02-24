import { Image } from "antd"

function PhotoLine() {
    return (
        <div className="bg-gray-500 rounded-xl mt-3 flex overflow-x-scroll">
            <div className="mt-3 mr-3 ml-3 flex flex-col">
                <text className="font-medium mb-3">Фотографии</text>
                <div className="flex gap-1 w-fit mb-2">
                    <Image.PreviewGroup >
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                        <Image width={130} src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg" />
                    </Image.PreviewGroup>
                </div>

            </div>

        </div>
    )
}

export default PhotoLine