
export default function NewsLetter () {

    return (

        <div className="flex justify-between items-center py-10 max-[1000px]:flex-col max-[1000px]:gap-6 max-[640px]:gap-1">

            <div className="text flex items-center gap-3">

                <svg fill="none" height="120" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M23 6.5C23 9.53757 20.5376 12 17.5 12C14.4624 12 12 9.53757 12 6.5C12 3.46243 14.4624 1 17.5 1C20.5376 1 
                    23 3.46243 23 6.5ZM15 5.5V6.38197L14.5528 7.27639C14.4753 7.43139 14.4836 7.61546 14.5747 7.76287C14.6658 7.91027 14.8267 8 
                    15 8H20C20.1733 8 20.3342 7.91027 20.4253 7.76287C20.5164 7.61546 20.5247 7.43139 20.4472 7.27639L20 6.38197V5.5C20 4.11929 
                    18.8807 3 17.5 3C16.1193 3 15 4.11929 15 5.5ZM17.5001 10C18.1532 10 18.7088 9.5826 18.9147 9H16.0854C16.2914 9.5826 16.847 
                    10 17.5001 10ZM17.5 13C19.2465 13 20.8321 12.3112 22 11.1904V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 
                    20 2.10075 18.6435 2.00514 16.9344L2 16.75V8.608L11.652 13.6644C11.87 13.7785 12.13 13.7785 12.348 13.6644L14.7649 12.3983C15.5963 
                    12.7844 16.523 13 17.5 13ZM5.25 4H11.4982C11.1772 4.76959 11 5.6141 11 6.5C11 8.49254 11.8966 10.2757 13.3083 11.468L12 
                    12.1533L2.01619 6.92355C2.17386 5.34271 3.46432 4.09545 5.06409 4.00523L5.25 4Z" fill="#212121"/>
                </svg>

                <div>

                    <h2 className="text-3xl font-bold mb-3 max-[640px]:text-lg max-[640px]:mb-1">
                        سجل للحصول علي اخر الأخبار
                    </h2>
                    
                    <p className="font-semibold max-[640px]:text-sm">
                        سجل بالايميل للحصول علي اخر الأخبار والمنتجات الجديدة
                    </p>

                </div>

            </div>

            <div className="input-box  w-[40%] max-[1000px]:w-2/3  max-[640px]:w-[90%]">

                <form>

                    <div className=" relative rounded-[30px] overflow-hidden">

                        <input type="text" placeholder="ادخل الايمل هنا للتسجيل ..." className="w-full py-[13px] pl-[130px] pr-[30px] rounded-[30px] border border-black focus:outline-none max-[640px]:py-[10px] max-[640px]:text-sm"/>
                        
                        <button className="max-[640px]:w-[100px] absolute top-0 left-0 bg-black w-[120px] h-full text-white">
                            سجل
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};
