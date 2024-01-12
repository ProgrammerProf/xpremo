import Link from "next/link";

export default function LoginButton() {

    return (

        <Link href="/login" className="transition-colors duration-300 group flex border hover:bg-white hover:text-[--main-color] border-[--main-color] font-bold bg-[--main-color] py-[11px] px-5 gap-1 rounded-[30px] text-sm text-white max-[640px]:px-2">
            
            <svg className="transition-colors duration-300 group-hover:stroke-[--main-color]" stroke="#fff" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9.25C19.4142 9.25 19.75 9.58579 19.75 10V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H19.75V14C19.75 14.4142 19.4142 14.75 19 14.75C18.5858 14.75 18.25 14.4142 18.25 14L18.25 12.75H17C16.5858 12.75 16.25 12.4142 16.25 12C16.25 11.5858 16.5858 11.25 17 11.25H18.25V10C18.25 9.58579 18.5858 9.25 19 9.25Z" fill="#fff" className="group-hover:fill-[--main-color]"/>
                <path d="M10 3.75C8.13313 3.75 6.66669 5.20257 6.66669 6.9375C6.66669 8.67243 8.13313 10.125 10 10.125C11.8669 10.125 13.3334 8.67243 13.3334 6.9375C13.3334 5.20257 11.8669 3.75 10 3.75ZM5.16669 6.9375C5.16669 4.32319 7.35659 2.25 10 2.25C12.6435 2.25 14.8334 4.32319 14.8334 6.9375C14.8334 9.55181 12.6435 11.625 10 11.625C7.35659 11.625 5.16669 9.55181 5.16669 6.9375ZM12.6662 14.9684C10.8999 14.6772 9.10013 14.6772 7.33382 14.9684L7.12605 15.0027L7.00404 14.2627L7.12604 15.0027C5.19882 15.3204 3.75 17.0477 3.75 19.1115C3.75 19.7634 4.25549 20.25 4.82813 20.25H15.1719C15.7445 20.25 16.25 19.7634 16.25 19.1115C16.25 17.0477 14.8012 15.3204 12.874 15.0027L12.996 14.2627L12.874 15.0027L12.6662 14.9684ZM12.9102 13.4884L12.7882 14.2284L12.9102 13.4884L13.118 13.5226C15.8042 13.9655 17.75 16.349 17.75 19.1115C17.75 20.5455 16.6185 21.75 15.1719 21.75H4.82813C3.38147 21.75 2.25 20.5455 2.25 19.1115C2.25 16.349 4.19583 13.9655 6.88203 13.5226L7.08981 13.4884L7.21182 14.2284L7.08982 13.4884C9.0177 13.1705 10.9823 13.1705 12.9102 13.4884Z" fill="#fff" className="group-hover:fill-[--main-color]"/>
            </svg>

            <p className="max-[640px]:hidden">تسجيل الدخول</p>

        </Link>

    );

}
