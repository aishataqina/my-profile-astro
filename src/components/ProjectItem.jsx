// src/components/ProjectItem.jsx
import React, { useState } from "react";
import { Modal, Carousel } from "antd";
import { useAnimationControls } from "framer-motion";

// Import static images
import pink from "../assets/pink2.png";
import blue from "../assets/blue2.png";
import purple from "../assets/purple2.png";
import green from "../assets/green2.png";

// Import project screenshots
import todify1 from "../assets/todify1.png";
import todify2 from "../assets/todify2.png";
import todify3 from "../assets/todify3.png";

import beaute1 from "../assets/beaute1.png";
import beaute2 from "../assets/beaute2.png";
import beaute3 from "../assets/beaute3.png";
import beaute4 from "../assets/beaute4.png";

import bulletin1 from "../assets/bulletin1.png";
import bulletin2 from "../assets/bulletin2.png";
import bulletin3 from "../assets/bulletin3.png";

import infast1 from "../assets/infast1.png";
import infast2 from "../assets/infast2.png";
import infast3 from "../assets/infast3.png";
import infast4 from "../assets/infast4.png";
import infast5 from "../assets/infast5.png";

const ProjectItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const controls = useAnimationControls();

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);

    controls.start({
      scale: [1, 1.1, 1],
      opacity: [0, 1],
      transition: { duration: 1.2, ease: "easeInOut" },
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const items = [
    {
      id: "todify",
      name: "ToDify",
      imgSrc: pink,
      imgSrc2: [{ pict: todify1 }, { pict: todify2 }, { pict: todify3 }],
      link: "https://todo-app-gc02-fern003.web.app/",
      description:
        "A todo list web page is a website can create, delete, update your todo",
      stacks: [
        { stack: "HTML" },
        { stack: "CSS" },
        { stack: "React JS" },
        { stack: "Tailwind" },
        { stack: "JavaScript" },
        { stack: "JSON Server" },
      ],
    },
    {
      id: "beaute",
      name: "Beauté",
      imgSrc: blue,
      imgSrc2: [
        { pict: beaute1 },
        { pict: beaute2 },
        { pict: beaute3 },
        { pict: beaute4 },
      ],
      link: "https://mybeaute.web.app/",
      description:
        "Beauté is a platform dedicated exclusively to beauty products. It offers two client roles: User for shoppers and Seller for vendors. With a clean and elegant interface, Beauté makes it easy for users to log in, including a Google sign-in option, and provides a simple registration process for new users. Tailored to the beauty industry, the platform focuses on user-friendly navigation and an attractive design.",
      stacks: [
        { stack: "HTML" },
        { stack: "CSS" },
        { stack: "JavaScript" },
        { stack: "React JS" },
        { stack: "Redux JS" },
        { stack: "TanStack Query" },
        { stack: "Ant Design" },
        { stack: "Tailwind" },
        { stack: "Rest API" },
      ],
    },
    {
      id: "daily-bulletin",
      name: "Daily Bulletin",
      imgSrc: purple,
      imgSrc2: [{ pict: bulletin1 }, { pict: bulletin2 }, { pict: bulletin3 }],
      link: "https://dailybulletin.vercel.app/",
      description:
        "The Daily Bulletin website provides readers with curated, trending news across various topics, including arts, business, education, food, sports, technology, and world news. You can easily search for trending news or explore stories tailored to your interests.",
      stacks: [
        { stack: "HTML" },
        { stack: "CSS" },
        { stack: "TypeScript" },
        { stack: "Next JS" },
        { stack: "Ant Design" },
        { stack: "Tailwind" },
        { stack: "Rest API" },
      ],
    },
    {
      id: "infast",
      name: "Infast",
      imgSrc: green,
      imgSrc2: [
        { pict: infast1 },
        { pict: infast2 },
        { pict: infast3 },
        { pict: infast4 },
        { pict: infast5 },
      ],
      link: "https://infast.vercel.app/",
      description:
        "An investment tracking application that helps users explore, monitor, and manage various financial assets efficiently and effortlessly. With accurate market data, Infast provides asset performance analysis, market trends, risk evaluation, and cost insights.",
      stacks: [
        { stack: "HTML" },
        { stack: "CSS" },
        { stack: "TypeScript" },
        { stack: "Next JS" },
        { stack: "Ant Design" },
        { stack: "Shadcn" },
        { stack: "Rest API" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 font-poppins font-light sm:text-lg text-xs">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center text-center gap-2 cursor-pointer"
          onClick={() => showModal(item)}
        >
          <img src={item.imgSrc.src} alt={item.name} className="sm:w-32 w-20" />
          <p className="hover:text-primary-green">{item.name}</p>
        </div>
      ))}

      {selectedItem && (
        <Modal
          footer={null}
          open={isModalOpen}
          onCancel={handleCancel}
          title={
            <p className="logo tracking-wider text-xl">{selectedItem.name}</p>
          }
          className="font-poppins"
        >
          <Carousel autoplay>
            {selectedItem.imgSrc2.map((image, index) => (
              <div key={index}>
                <img
                  src={image.pict.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover aspect-video"
                />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-col gap-3 mt-5 text-justify">
            <p className="overflow-y-scroll h-24 xs:text-base text-xs">
              {selectedItem.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {selectedItem.stacks.map((el, index) => (
                <div key={index}>
                  <p className="bg-secondary-pink px-3 rounded-full xs:text-base text-xs">
                    {el.stack}
                  </p>
                </div>
              ))}
            </div>
            <div className="button mt-4">
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center"
              >
                <p className="logo tracking-wider xs:text-base text-xs">
                  View Website!
                </p>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectItem;
