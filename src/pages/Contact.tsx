export default function Contact(){
    return(
        <>
        <div className="py-10">
            <div className="px-[20px] xl:px-[160px]">
                <h1 className="text-5xl font-bold">JOIN THE RUNWAY</h1>
                <hr className="border-2 border-gray-300 my-8" />

                <div className="flex w-full justify-between gap-50 pt-10">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold pt-10">JOIN THE ROSTER</h1>
                        <form action="" className="flex flex-col gap-5">
                            <label htmlFor="guardian-name" className="flex flex-col gap-2">
                                PARENT/GUARDIAN NAME
                                <input
                                    type="text"
                                    name="guardian-name"
                                    className="border border-gray-400 px-3 py-2 rounded-md w-120 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                                />
                            </label>
                            <label htmlFor="guardian-name" className="flex flex-col gap-2">
                                CHILD'S NAME & DATE OF BIRTH
                                <input
                                    type="text"
                                    name="guardian-name"
                                    className="border border-gray-400 px-3 py-2 rounded-md w-120 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                UPLOAD FILE
                                <div className="flex items-center border border-gray-300 px-3 py-2 rounded-md w-full cursor-pointer hover:bg-gray-100 transition">
                                    <span>Select file...</span>
                                    <input 
                                    type="file" 
                                    className="hidden"
                                    onChange={(e) => e.target.files && console.log(e.target.files[0])}
                                    />
                                </div>
                            </label>
                            <label htmlFor="message" className="flex flex-col gap-2">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    className="border border-gray-300 px-3 py-2 rounded-md w-full
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-[var(--accent)]
                                            focus:border-[var(--accent)]"
                                ></textarea>
                            </label>

                            <button
                                type="submit"
                                >
                                SEND
                            </button>

                        </form>
                    </div>
                    <div className="gap-10 flex flex-col w-[700px]">
                        <div className="">
                            <img src="./src/assets/contact-1.png" 
                            className="w-full max-h-200 object-top object-cover" 
                            alt="join-us-image" />
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <img src="./src/assets/contact-2.png" 
                                className="w-full object-cover" 
                                alt="join-us-image" />
                            </div>
                            <div>
                                <img src="./src/assets/contact-3.png" 
                                className="w-full object-cover" 
                                alt="join-us-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}