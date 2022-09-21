import Image from "next/image"

function Banner() {
    return (
        <div className="relative mx-auto w-12/12 h-[300px] sm:h-[400px] lg:h-[500px] xl-h[600px] 2xl:h-[700px]">
        <Image
            src="https://cdn.pixabay.com/photo/2016/11/19/14/30/aurora-borealis-1839582_1280.jpg"
            layout="fill"
            objectFit="cover"
            className=""
            alt=""
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-bold text-white">Niste sigurni gdje želite putovati?</p>
                <button className="text-purple-500 bg-white px-10 py-4
                shadow-md rounded-full font-bold my-3 hover:shadow-xl 
                active:scale-90 transition duration-150">Istražite</button>
                
            </div>
            
        </div>
    )
}



export default Banner