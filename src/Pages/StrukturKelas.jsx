import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import BorderStruktur from "../components/BorderStruktur"
import { classConfig } from "../config/classConfig"

const StrukturKelas = () => {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<div className="relative h-auto py-10" data-aos="fade-up" data-aos-duration="700">
			<div className="flex flex-col items-center">
				<BorderStruktur Jabatan="Dosen Wali" Nama={classConfig.coordinatorName} Width="150px" />
				<div className="h-10 w-px bg-white/70 my-2" />
				<BorderStruktur Jabatan="Ketua Kelas" Nama={classConfig.chairName} Width="150px" />
				<div className="h-10 w-px bg-white/70 my-2" />
				<div className="flex flex-wrap justify-center gap-5">
					<BorderStruktur Jabatan="Wakil Ketua" Nama={classConfig.viceChairName} Width="150px" />
					<BorderStruktur Jabatan="Sekretaris" Nama={classConfig.secretaryName} Width="150px" />
					<BorderStruktur Jabatan="Bendahara" Nama={classConfig.treasurerName} Width="150px" />
				</div>
			</div>
		</div>
	)
}

export default StrukturKelas
