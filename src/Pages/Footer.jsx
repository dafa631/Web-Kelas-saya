import Rating from "../components/Rating"
import { classConfig } from "../config/classConfig"

const Footer = () => {
	return (
		<footer id="Footer">
			<div className="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="#" className="flex items-center">
							<img
								src="/LogoTKJ3.png"
								alt="Logo kelas"
								className="h-[4.5rem] w-[4.5rem] right-2 relative rounded-full brightness-200"
							/>
						</a>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3">
						<div>
							<h2 className="mb-4 text-sm font-semibold uppercase text-white">Identitas</h2>
							<ul className="text-gray-400 font-medium">
								<li className="mb-2">{classConfig.universityName}</li>
								<li>{classConfig.programName}</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-4 text-sm font-semibold uppercase text-white">Tautan</h2>
							<ul className="text-gray-400 font-medium">
								<li className="mb-2">
									<a href={classConfig.instagramUrl} className="hover:underline">Instagram Kelas</a>
								</li>
							</ul>
						</div>
						<div className="hidden md:block"><Rating /></div>
					</div>
					<div className="flex items-center justify-center mt-8 md:hidden"><Rating /></div>
				</div>
				<hr className="my-2 border-gray-200 sm:mx-auto lg:my-8" />
				<p className="text-[0.7rem] text-white opacity-70">
					© {new Date().getFullYear()} {classConfig.className} | {classConfig.semesterName}
				</p>
			</div>
		</footer>
	)
}

export default Footer
