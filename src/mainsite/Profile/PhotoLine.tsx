import { Image } from "antd"

function PhotoLine() {
    return (
        <div className="bg-gray-500 rounded-xl mt-3 flex ">
            <div className="mt-3 ml-3 flex flex-col">
                <text className="font-medium mb-3">Фотографии</text>
                <div>
                    <Image.PreviewGroup>
                        <Image width={150} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                        <Image
                            width={150}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                        <Image
                            width={150}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                        <Image
                            width={150}
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                        />
                    </Image.PreviewGroup>
                </div>

            </div>

        </div>
    )
}

export default PhotoLine