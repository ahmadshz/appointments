import { useState } from "react";
import img1 from "../../../assets/WhyUs/image-1.png";
import img2 from "../../../assets/WhyUs/image-2.png";
import img3 from "../../../assets/WhyUs/image-3.png";
import img4 from "../../../assets/WhyUs/image-4.png";
import WhyUsDetails from "./WhyUsDetails";

const WhyUs = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const doctors = [
        { id: 1, src: img1, row: "row-span-4 row-start-1 " },
        { id: 2, src: img2, row: "row-span-4 row-start-2" },
        { id: 3, src: img3, row: "row-span-4", },
        { id: 4, src: img4, row: "row-span-4" },
    ];

    return (
        <div className="min-h-screen py-36 flex flex-wrap lg:flex-nowrap justify-center gap-20 items-center container">
            <div className="grid grid-cols-2 gap-4 max-w-lg">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className={`${doctor.row || ""} rounded-3xl flex items-center justify-center transition-all duration-500`}
                        onMouseEnter={() => setHoveredId(doctor.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img
                            src={doctor.src}
                            alt={`Doctor ${doctor.id}`}
                            className={`w-[150px] h-[200px] md:w-[200px] md:h-[250px] object-cover rounded-3xl transition-all duration-500 ${
                                hoveredId && hoveredId !== doctor.id ? "blur-md brightness-75 scale-95" : ""
                            } ${
                                hoveredId === doctor.id ? "" : ""
                            }`}
                        />
                    </div>
                ))}
            </div>
            <WhyUsDetails />
        </div>
    );
};

export default WhyUs;
