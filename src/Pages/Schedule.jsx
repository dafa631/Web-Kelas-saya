import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { classConfig } from "../config/classConfig"

const schedules = {
    Senin: [
        ["Karya Tulis Ilmiah", "07.00-08.40"],
        ["Seni dan Budaya Islami", "15.20-17.00"],
    ],
    Selasa: [
        ["Supervisi Pendidikan", "15.20-17.00"],
    ],
    Rabu: [
        ["Nahwu Sharaf*", "08.40-10.20"],
        ["Pengembangan Bahan Ajar PAI", "15.20-17.00"],
    ],
    Kamis: [
        ["Sejarah Pendidikan Islam", "13.20-15.00"],
        ["Kebijakan PAI", "15.20-17.00"],
    ],
    Jumat: [
        ["Penjaminan Mutu Pendidikan", "12.45-14.25"],
        ["Kepemimpinan Pendidikan Islam", "15.20-17.00"],
        ["Bimbingan dan Konseling", "17.00-18.40"],
    ],
}

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState("Senin")

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <>
            <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
                <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
                    <div className="text-2xl font-medium mb-5" data-aos="fade-up" data-aos-duration="500">
                        Jadwal Kuliah
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {Object.keys(schedules).map((day) => (
                            <button
                                key={day}
                                type="button"
                                onClick={() => setSelectedDay(day)}
                                className={`rounded-full border px-4 py-2 text-sm transition ${selectedDay === day ? "border-white bg-white text-black" : "border-white/40 text-white"}`}>
                                {day}
                            </button>
                        ))}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="400">
                        {schedules[selectedDay].map(([course, time], index) => (
                            <div
                                key={`${course}-${time}`}
                                className={`flex justify-between border-t-2 border-white px-3 py-3 w-72 ${index === schedules[selectedDay].length - 1 ? "border-b-2" : ""} ${course === "Istirahat" ? "opacity-60" : ""}`}
                                data-aos="fade-up"
                                data-aos-duration={600 + index * 100}>
                                <div className="w-[55%] text-base font-medium">{course}</div>
                                <div className="flex items-center text-sm">{time}</div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-xs text-white/50">{classConfig.programName} · {classConfig.semesterName}</p>
                </div>
            </div>
        </>
    )
}

export default Schedule
