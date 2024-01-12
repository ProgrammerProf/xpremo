import "react-toastify/dist/ReactToastify.css";
import "@/public/sass/layout/global.scss";
import "@/public/sass/main.scss";

export const metadata = {

    title: "xPremo | Online Store",

    description: "xPremo Online Store",
    
};

export default function Layout({ children }) {

    return (
        <html>
            <head>
                <link rel="icon" href="/media/public/favicon.png"/>
                <script src="/script/layout/jquery.js"></script>
                <script src="/script/layout/proto.js"></script>
            </head>
            <body>

                {children}
                
            </body>
        </html>
    );

}
