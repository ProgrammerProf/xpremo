
export default function Features() {

    return (

        <div className="flex justify-between p-5 py-7 my-5 bg-white rounded-sm shadow max-[1000px]:flex-wrap max-[1000px]:gap-y-4">

            <div className=" flex items-center max-[800px]:justify-between max-[800px]:border-none pl-2 gap-3 border-l max-[800px]:w-[47%] bordr-last-none max-[1000px]:w-[31%] max-[49%]:">
                <div>
                    <h4 className="font-bold text-sm max-[640px]:text-[10px] max-[640px]:leading-3">الشحن مجانا</h4>
                    <p className="text-sm font-medium max-[640px]:text-[10px] max-[640px]:leading-3">التوصيل من يوم الي ثلاث ايام</p>
                </div>
                <img src="/media/public/feat_1.png" width={50} height={50} className="w-11 max-[640px]:w-6"/>
            </div>
            <div className=" flex items-center max-[800px]:justify-between max-[800px]:border-none pl-2 gap-3 border-l max-[800px]:w-[47%] bordr-last-none max-[1000px]:w-[31%] max-[49%]:">
                <div>
                    <h4 className="font-bold text-sm max-[640px]:text-[10px] max-[640px]:leading-3">ضمان المال</h4>
                    <p className="text-sm font-medium max-[640px]:text-[10px] max-[640px]:leading-3">ضمان استرداد الأموال لمدة 14 يومًا</p>
                </div>
                <img src="/media/public/feat_2.png" width={50} height={50} className="w-11 max-[640px]:w-6"/>
            </div>
            <div className=" flex items-center max-[800px]:justify-between max-[800px]:border-none pl-2 gap-3 border-l max-[800px]:w-[47%] bordr-last-none max-[1000px]:w-[31%] max-[49%]:">
                <div>
                    <h4 className="font-bold text-sm max-[640px]:text-[10px] max-[640px]:leading-3">دعم عبر الإنترنت 24/7</h4>
                    <p className="text-sm font-medium max-[640px]:text-[10px] max-[640px]:leading-3">الدعم الفني على أهبة الاستعداد</p>
                </div>
                <img src="/media/public/feat_3.png" width={50} height={50} className="w-11 max-[640px]:w-6"/>
            </div>
            <div className=" flex items-center max-[800px]:justify-between max-[800px]:border-none pl-2 gap-3 border-l max-[800px]:w-[47%] bordr-last-none max-[1000px]:w-[31%] max-[49%]:">
                <div>
                    <h4 className="font-bold text-sm max-[640px]:text-[10px] max-[640px]:leading-3">دفع امن</h4>
                    <p className="text-sm font-medium max-[640px]:text-[10px] max-[640px]:leading-3">يتم قبول جميع طرق الدفع</p>
                </div>
                <img src="/media/public/feat_4.png" width={50} height={50} className="w-11 max-[640px]:w-6"/>
            </div>

        </div>

    );

}
