import React, { useEffect, useState } from 'react';

type Slider = {
  id: number

  text: string
}

export const Introduction: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const sliders: Slider[] = [
    { id: 1, text: "Hello! I'm Costin. Nice to meet you! I'm a passionate web developer with a focus on creating functional, user-friendly, and visually appealing designs. I specialize in building responsive websites that work seamlessly across devices. My goal is to craft digital experiences that not only look great but also provide value to users. Whether it's frontend development, backend integration, or full-stack solutions, I enjoy tackling challenges and delivering high-quality results. Let me show you what I can do!" },
    { id: 2, text: "Welcome to my portfolio website! This site is fully functional, thoughtfully structured, and designed to showcase my skills and expertise. Here, you'll find examples of my work, including projects that demonstrate my proficiency in modern web technologies. The website is built with a focus on performance, accessibility, and scalability. I believe in clean, maintainable code and intuitive user interfaces. Feel free to explore and see how I approach web development. I hope you enjoy your visit!" },
    { id: 3, text: "In the Projects section, you'll find links to some of my other work, where I apply my skills to solve real-world problems. I'm always open to new opportunities and collaborations, including non-profit projects that make a positive impact. Whether you're looking for a developer to join your team or need help bringing your ideas to life, I'd love to hear from you. I value creativity, teamwork, and continuous learning. Feel free to reach out through the contact section—I’m excited to connect and discuss how we can work together!" }
  ];
   
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
      }, 15000); // 15 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    function nextSlide() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length)
    }

    function prevSlide() {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length);
    }
 

  return (
    <div className="flex flex-row justify-between items-center">
      <img
        src="./src/assets/crop_profile_pic-removebg-preview.png"
        width={420}
        alt="Profile"
      />
      <div className="relative flex flex-row shadow-md h-fit w-fit p-4">
        <p className="font-serif text-left mt-8">
          {sliders[currentIndex].text}</p>
        <div className="flex flex-row items-center justify-center gap-4 absolute top-0 right-10  ">
          <button
            className="p-2 rounded-full bg-transparent text-black transition-colors"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-transparent text-black transition-colors"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};