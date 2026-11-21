import { useEffect } from "react"
import Schedule from "./Schedule"
import AOS from "aos"
import "aos/dist/aos.css"

export default function FullWidthTabs() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<div className="md:px-[10%] md:mt-5 mt-8" id="Tabs" data-aos="fade-up" data-aos-duration="800">
			<Schedule />
		</div>
	)
}
