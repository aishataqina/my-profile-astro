import { useState } from "react";
import { Modal } from "antd";
import { Carousel } from "antd";
import pink from "../assets/pink2.png";
import blue from "../assets/blue2.png";
import purple from "../assets/purple2.png";
import green from "../assets/green2.png";
import { useAnimationControls } from "framer-motion";

const ProjectItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // const showModal = (item) => {
  //   setSelectedItem(item);
  //   setIsModalOpen(true);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const controls = useAnimationControls();

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);

    // Trigger animations in sequence
    controls.start({
      scale: [1, 1.1, 1],
      opacity: [0, 1],
      transition: { duration: 1.2, ease: "easeInOut" },
    });
  };

  const items = [
    {
      id: "todify",
      name: "ToDify",
      imgSrc: pink,
      imgSrc2: [
        { pict: "/todify1.png" },
        { pict: "/todify2.png" },
        { pict: "/todify3.png" },
      ],
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
        { pict: "/beaute1.png" },
        { pict: "/beaute2.png" },
        { pict: "/beaute3.png" },
        { pict: "/beaute4.png" },
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
      imgSrc2: [
        { pict: "/bulletin1.png" },
        { pict: "/bulletin2.png" },
        { pict: "/bulletin3.png" },
      ],
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
        { pict: "/infast1.png" },
        { pict: "/infast2.png" },
        { pict: "/infast3.png" },
        { pict: "/infast4.png" },
        { pict: "/infast5.png" },
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
          className="flex flex-col items-center justify-center text-center gap-2"
          onClick={() => showModal(item)}
        >
          <img src={item.imgSrc.src} alt={item.name} className="sm:w-32 w-20" />
          <p className="hover:text-primary-green">{item.name}</p>
        </div>
      ))}

      {/* Modal */}
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
                  //   style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  className="w-full object-cover aspect-video"
                />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-col gap-3 mt-3 text-justify">
            <p className="overflow-y-scroll h-24 xs:text-base text-xs">
              {selectedItem.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {selectedItem.stacks.map((el, index) => (
                <div key={index} className="">
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
