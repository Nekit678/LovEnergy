
import preloader from '../src/assets/images/preloader.png'
import preloadertext from '../src/assets/images/preloadertext.png'

function LoadingPage() {
    return (
        <div style={{ background: "#25292C" }} className="flex h-screen justify-center items-center flex-col gap-10">
            <img src={preloader} className='w-1/5 motion-safe:animate-spin'></img>
            <img src={preloadertext} className='w-1/4'></img>
        </div>
    )
}

export default LoadingPage