import Stars from "@/app/component/stars";
import Link from "next/link";

export default function ProductCard({id, price, name, oldPrice, img, imgHover, rate}) {

    let sale2 = ((oldPrice - price) / oldPrice) * 100;
    let sale = Math.round(sale2);

    return (

        <div key={id} className="group dirctionRTL text-center overflow-hidden w-full p-3 border my-10 relative bg-white shadow-[0_3px_8px_0_rgba(0,3,143,0.1)]">
        
            <div className="icons flex z-20 flex-col gap-2 absolute -right-16 group-hover:right-4 top-2/4 -translate-y-1/2">

                <button className="group/edit hover:bg-[--main-color] rounded-full relative w-12 h-12 bg-slate-200">
                    <svg className="absolute stroke-2 stroke-[--main-color] group-hover/edit:stroke-white left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 group-hover/edit:fill-[#fff] fill-[--main-color]" width={18} id="Editable-line" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="  M16,8.064c-2.974-2.753-7.796-2.753-10.77,0s-2.974,7.215,0,9.968L16,28l10.77-9.968c2.974-2.753,2.974-7.215,0-9.968  
                        S18.974,5.312,16,8.064z" fill="none" id="XMLID_49_"/>
                    </svg>
                </button>

                <button className={`group/edit hover:bg-[--main-color] rounded-full relative w-12 h-12 bg-slate-200`}>
                    <svg className="absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 group-hover/edit:fill-[#fff] fill-[--main-color]" width={18} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224 464c0 26.51-21.49 48-47.1 48s-47.1-21.49-47.1-48S149.5 416 176 416S224 437.5 224 
                        464zM569.5 44.73C563.4 36.64 554.1 32 543.1 32H360v102.1l23.03-23.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 
                        33.94l-64 64C348.3 213.7 342.1 216 336 216s-12.28-2.344-16.97-7.031l-64-64c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 
                        33.94 0L312 134.1V32H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 
                        316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 
                        0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73zM463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 
                        47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416z"/>
                    </svg>
                </button>

                <button className="group/edit hover:bg-[--main-color] rounded-full relative w-12 h-12 bg-slate-200">
                    <svg className="absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 group-hover/edit:fill-[#fff] fill-[--main-color]" baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width={18} xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M4,9h3.5c0.736,0,1.393,0.391,1.851,1.001c0.325-0.604,0.729-1.163,1.191-1.662C9.739,7.516,8.676,7,7.5,7H4   C3.447,7,3,7.448,3,8S3.447,9,4,9z"/>
                            <path d="M11.685,12.111C12.236,10.454,13.941,9,15.334,9h1.838l-1.293,1.293c-0.391,0.391-0.391,1.023,0,1.414   C16.074,11.902,16.33,12,16.586,12s0.512-0.098,0.707-0.293L21,8l-3.707-3.707c-0.391-0.391-1.023-0.391-1.414,0   s-0.391,1.023,0,1.414L17.172,7h-1.838c-2.274,0-4.711,1.967-5.547,4.479l-0.472,1.411C8.674,14.816,7.243,16,6.5,16H4   c-0.553,0-1,0.448-1,1s0.447,1,1,1h2.5c1.837,0,3.863-1.925,4.713-4.479L11.685,12.111z"/>
                            <path d="M15.879,13.293c-0.391,0.391-0.391,1.023,0,1.414L17.172,16h-2.338c-1.268,0-2.33-0.891-2.691-2.108   c-0.256,0.75-0.627,1.499-1.09,2.185C11.939,17.239,13.296,18,14.834,18h2.338l-1.293,1.293c-0.391,0.391-0.391,1.023,0,1.414   C16.074,20.902,16.33,21,16.586,21s0.512-0.098,0.707-0.293L21,17l-3.707-3.707C16.902,12.902,16.27,12.902,15.879,13.293z"/>
                        </g>
                    </svg>
                </button>

            </div>

            <Link href={`/product/${id}`}>

                { oldPrice && <span className="z-10 absolute top-4 right-4 leading-7 bg-[#D01418] h-7 w-12 l text-sm  text-white font-bold">{sale}%</span> }

                <div className="flex items-center">

                    <div className="w-[49%] relative">
                    
                        <img src={img} className="w-full object-cover group-hover:scale-50 group-hover:opacity-0 opacity-100 transition-all duration-200" width={300} height={150}/>
                    
                        <img src={imgHover} className="opacity-0 top-0 group-hover:opacity-100 w-full h-full object-cover group-hover:scale-100 transition-all duration-200 scale-50 absolute" width={300} height={150}/>
                    
                    </div>

                    <div className="text-right w-1/2 max-[640px]:text-sm">

                        <h1 className="text-[#0066C0] font-bold hover:underline capitalize">{name}</h1>

                        <Stars rate={rate}/>

                        <div className="price flex gap-3 mb-5 items-center max-[640px]:gap-2">

                            <span className="font-bold text-xl max-[640px]:text-sm">{price} جنيه</span>

                            { oldPrice && <span className="line-through text-gray-500 font-bold max-[640px]:text-sm">{oldPrice} جنيه</span> }

                        </div>

                        <p className="text-sm text-gray-640 max-[640px]:hidden">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum
                            iusto et, fugit dolore
                        </p>

                    </div>

                </div>

            </Link>

        </div>

    );
    
}
