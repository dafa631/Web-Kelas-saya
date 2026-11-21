import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { classConfig } from "../config/classConfig"

const schedules = {
    Senin: [["Dasar Pemrograman", "08.00-09.40"], ["Matematika Diskrit", "10.00-11.40"], ["Istirahat", "11.40-12.20"], ["Pengantar Sistem Informasi", "12.20-14.00"]],
    Selasa: [["Aljabar Linier", "08.00-09.40"], ["Bahasa Inggris", "10.00-11.40"]],
    Rabu: [["Basis Data", "08.00-09.40"], ["Pancasila", "10.00-11.40"]],
    Kamis: [["Organisasi dan Arsitektur Komputer", "08.00-09.40"], ["Pemrograman Berorientasi Objek", "10.00-11.40"]],
    Jumat: [["Statistika", "08.00-09.40"], ["Praktikum Laboratorium", "10.00-11.40"]],
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
