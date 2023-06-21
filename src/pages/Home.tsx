import TypingEffect from "./Typing";

function Home() {
	return (
		<div
			className="w-full flex justify-center items-center p-5 h-96 bg-fixed"
			style={{
				background: `url(https://wallpapers.com/images/hd/ambient-background-97gh0witq207vmd5.jpg)`,
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="w-5/6 flex justify-center items-center text-sm md:text-lg mt-20 font-light ">
				<TypingEffect
					text="Hi, My names are Eddy Jedidiah Mugisha, and I am a software engineer.
                 Welcome to my portfolio page, where I am excited to share my journey as a developer and 
                 showcase my expertise in creating exceptional software solutions. With a strong foundation
                  in programming languages such as Python, Java, and JavaScript, I have honed my skills in
                   front-end and back-end development, database design, and more. 
                   Through continuous learning and staying abreast of the latest technologies."
				/>
			</div>
		</div>
	);
}

export default Home;
