import { useState } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<div className="w-full flex flex-row p-5 absolute justify-end items-center">
			<div className="text-2xl font-bold absolute left-5 top-5">MJE</div>
			<div className=" flex-row w-3/5 hidden md:flex md:w-2/5  justify-evenly">
				<a href="/" className="">
					Home
				</a>
				<a href="/profile" className="">
					Profile
				</a>
				<a href="/blog" className="">
					Blog
				</a>
				<a href="/contact" className="">
					Contact me
				</a>
			</div>
			<div className="p-2 hidden md:block bg-sky-700 text-white border border-sky-400 cursor-pointer">
				Let's work together
			</div>
			<div
				onClick={() => setOpen(false)}
				className={`h-screen w-full ${
					open ? "" : "hidden"
				} absolute bottom-0 left-0`}
			></div>
			<button
				onClick={() => setOpen((prev) => !prev)}
				type="button"
				className="md:hidden absolute top-5 right-5 text-2xl cursor-pointer"
			>
				<i className="fa fa-bars" aria-hidden="true"></i>
			</button>
			<div
				className={`border border-slate-700 bg-blue-950 flex-col p-2 absolute z-30 ${
					open ? "flex" : "hidden"
				} top-16  w-5/6 md:w-2/5  justify-evenly`}
			>
				<a
					href="/"
					className="p-2 hover:bg-sky-200 hover:text-slate-900 transition my-2"
				>
					Home
				</a>
				<a
					href="/profile"
					className="p-2 hover:bg-sky-200 hover:text-slate-900 transition my-2"
				>
					Profile
				</a>
				<a
					href="/blog"
					className="p-2 hover:bg-sky-200 hover:text-slate-900 transition my-2"
				>
					Blog
				</a>
				<a
					href="/contact"
					className="p-2 hover:bg-sky-200 hover:text-slate-900 transition my-2"
				>
					Contact me
				</a>
				<div className="w-full flex items-center justify-center py-3">
					<div className="p-2 w-4/5 text-center bg-sky-700 text-white border border-sky-400 cursor-pointer">
						Let's work together
					</div>
				</div>
			</div>
		</div>
	);
}
