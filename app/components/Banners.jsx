import Link from "next/link";

export default function Banner() {

    return (

        <div className="flex gap-5 justify-between my-10 max-[640px]:my-5 max-[640px]:gap-2">

            <div className="relative flex-1">
                <Link href="/">
                    <img width={500} height={250} className="w-full" src="/media/public/banner_1.png"/>
                    <span className="glass-hover absolute w-full h-full top-0 left-0"></span>
                </Link>
            </div>

            <div className="relative flex-1">
                <Link href="/">
                    <img width={500} height={250} className="w-full" src="/media/public/banner_2.png"/>
                    <span className="glass-hover absolute w-full h-full top-0 left-0"></span>
                </Link>
            </div>

        </div>

    );

}
