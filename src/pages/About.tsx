export default function About(){
    return(
        <>
        <div className="flex flex-col justify-center py-10">
            <div className="px-[20px] xl:px-[160px]">
                <h1 className="text-3xl text-center font-bold">EDITORIAL SCROLL</h1>
                <div className="pt-10 flex gap-10 pb-20">
                    <div className="flex items-center w-fit">
                        <h1 className="text-xl xl:text-5xl whitespace-nowrap font-bold">THE ATELIER VERSION</h1>
                    </div>
                    <div className="overflow-hidden w-full">
                        <div className="flex w-max animate-scroll">
                            {/* Original images */}
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-1.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-2.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-3.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-4.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-5.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-6.png" alt="atelier" />

                            {/* Duplicate for looping */}
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-1.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-2.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-3.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-4.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-5.png" alt="atelier" />
                            <img className="w-64 mr-4 object-cover" src="./src/assets/atelier-6.png" alt="atelier" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-5xl font-[600] pb-5">Our Mission</h1>
                            <p>A focus on building confidence, poise, and professional skills in a safe, nurturing environment.</p>
                        </div>
                        <div>
                            <img src="/src/assets/atelier-bnw-image.png" 
                                alt="atelier-bnw" 
                                className="w-full object-cover"
                            />
                        </div>
                        </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-[600] pb-5">AGE BRACKETS</h1>
                        <div>
                            <ul className="list-disc list-inside">
                                <li>
                                    <b>Toddler Division (3–6): </b>
                                    Focusing on play, basic movement, and comfort in front of the camera.
                                </li>
                                <li>
                                    <b>Junior Division (7–11): </b>
                                    Introduction to runway walks and posing techniques.
                                </li>
                                <li>
                                    <b>Teen Division (12–15): </b>
                                    Professional portfolio building and advanced industry etiquette.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-2 border-gray-300 my-8" />

                <div className="grid grid-cols-2">
                    <div>
                        <h1 className="text-3xl font-bold">ABOUT US</h1>
                    </div>
                    <div>
                        <img src="./src/assets/about-us-image.png" 
                            className="w-full object-cover" 
                            alt="about-us-image" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}