export default function Home(){
    return(
        <>
        <div>
            <div className="h-[calc(100vh-65px)]">
                <img className="bg-cover w-full h-full" src="./src/assets/hero.png" alt="Hero Image" />
            </div>
            <div className="px-[20px] flex flex-col justify-center py-10 xl:px-[160px]">
                <h1 className="text-3xl text-center">EDITORIAL SCROLL</h1>
                <div className="pt-10 flex gap-10">
                    <div className="flex items-center w-fit">
                        <h1 className="text-xl xl:text-5xl whitespace-nowrap">ON THE RUNWAY</h1>
                    </div>
                    <div className="overflow-hidden w-full">
                        <div className="flex w-max animate-scroll">
                            {/* Original images */}
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-1.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-2.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-3.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-4.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-5.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-6.png" alt="Editorial" />

                            {/* Duplicate for looping */}
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-1.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-2.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-3.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-4.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-5.png" alt="Editorial" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/editorial-6.png" alt="Editorial" />
                        </div>
                    </div>
                </div>

                <hr className="border-2 border-gray-300 my-8" />

                <div className="flex flex-col">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex gap-10 justify-end">
                            <div className="flex flex-col justify-center">
                                <h3 className="text-center">MODELING</h3>
                                <h3 className="text-center">TRAINING</h3>
                            </div>
                            <div>
                                <img src="/src/assets/discover-1.png" alt="Discover" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div>
                                <img src="/src/assets/discover-2.png" alt="Discover" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-center">PHOTOSHOOT</h3>
                                <h3 className="text-center"> SESSIONS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-10">
                            [ Discover the Talent ]
                        </button>
                    </div>
                </div>

                <hr className="border-2 border-gray-300 my-8" />

                
            </div>
        </div>
        </>
    )
}