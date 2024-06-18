"use client";

import { Description } from '@radix-ui/react-dialog';
import { FaJenkins, FaDocker, FaHtml5, FaCss3, FaJs, FaDev } from 'react-icons/fa';
import { SiTailwindcss, SiKubernetes, SiAnsible, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

// about data
const about = {
  title: "About me",
  description: "I am a highly motivated and organized fourth-year undergraduate reading for BIT (Hons) in Networking and Mobile Computing at the Horizon campus. Currently, I am following Linux, Kubernetes, and Git. Further, Driven by a passion for DevOps, I expect to excel in the industry. Also, as a responsible quick learner, I am always eager to learn new skills and gain experience.",
  info: [
    { fieldName: "Name", fieldValue: "Ravindu Lakashan" },
    { fieldName: "Phone", fieldValue: "(+94) 767 727 839" },
    { fieldName: "Status", fieldValue: "Undergraduate" },
    { fieldName: "Email", fieldValue: "ravindu.ba.lakshan@gmail.com" }
  ]
};

// experience data
const experience = {
  title: 'My experience',
  description: 'I have gained valuable experience working on various projects and roles, enhancing my skills in web development, design, and WordPress customization.',
  items: [
    { company: "WRIXOO E-Services (Pvt) Ltd", position: "WordPress Developer", duration: "2019 - 2020" },
    { company: "Freelancer", position: "Web & Graphic Designer", duration: "2019 - Present" }
  ]
};

// education data
const education = {
  title: 'My education',
  description: 'My educational journey has equipped me with a solid foundation in networking, mobile computing, cybersecurity, and DevOps. I have pursued various degrees and certifications to enhance my technical skills and knowledge.',
  items: [
    { institution: "Horizon Campus Sri Lanka", degree: "BIT (Hons) Networking and Mobile Computing", duration: "2020 - Present" },
    { institution: "Vocational Training Centre in Sri Lanka", certification: "Network Administration with Security NVQ Level 4", duration: "May 30, 2024" },
    { institution: "Online Course Platform (Skillup)", certification: "DevOps 101: Fundamental of DevOps", duration: "24 May 2024" },
    { institution: "Online Course Platform (Skillup)", certification: "Getting Started with Chef in DevOps", duration: "22 May 2024" },
    { institution: "Online Course Platform (Skillup)", certification: "Getting Started with Ansible", duration: "21 May 2024" },
    { institution: "Online Course Platform (Skillup)", certification: "Getting Started with Docker", duration: "17 May 2024" },
    { institution: "Online Course Platform (Skillup)", certification: "Introduction to Kubernetes", duration: "15 May 2024" },
    { institution: "Online Course Platform (Skillup)", certification: "Natural Language Processing and Text Mining", duration: "15 Jan 2024" },
    { institution: "Online Course Platform (Cisco)", certification: "Introduction to Cybersecurity", duration: "22 February 2023" },
    { institution: "Online Course Platform (Cisco)", certification: "Python Essentials 1", duration: "10 February 2023" },
    { institution: "Online Course Platform (Cisco)", certification: "Computer Hardware Basics", duration: "31 January 2023" }
  ]
};

// Skills data
const skills = {
  title: 'My skills',
  description: 'Here are some of the skills and technologies I have experience with:',
  skillList: [
    { icon: <FaDev />, name: "DevOps" },
    { icon: <FaJenkins />, name: "Jenkins" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiAnsible />, name: "Ansible" },
    { icon: <FaHtml5 />, name: "Html5" },
    { icon: <FaCss3 />, name: "Css3" },
    { icon: <FaJs />, name: "Js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwindcss" }
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh
      ] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
  <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
      <TabsTrigger value="experience">Experience</TabsTrigger>
      <TabsTrigger value="education">Education</TabsTrigger>
      <TabsTrigger value="skills">Skills</TabsTrigger>
      <TabsTrigger value="about">About me</TabsTrigger>
    </TabsList>
    {/* Content */}
    <div className="min-h-[70vh] w-full">
      {/* Experience */}
      <TabsContent value="experience" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-3xl font-bold">{experience.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {experience.items.map((item, index) => (
              <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white">{item.company}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
      {/* Education */}
      <TabsContent value="education">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {education.items.map((item, index) => (
              <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                <span className="text-accent">{item.institution}</span>
                <h3 className="text-base min-h-[60px] text-center lg:text-left">{item.degree || item.certification}</h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white">{item.duration}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
      {/* Skills */}
      <TabsContent value="skills" className="w-full h-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{skills.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mb-4">
            {skills.skillList.map((skill, index) => (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                      <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
      {/* About */}
      <TabsContent value="about" className="w-full text-center xl:text-left">
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-4xl font-bold">{about.title}</h3>
          <p className="max-w-[600px] text-white/60 text-justify mx-auto xl:mx-0">{about.description}</p>
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[630px] mx-auto xl:mx-0">
            {about.info.map((item, index) => (
              <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                <span className="text-white/60">{item.fieldName}</span>
                <span className="text-xl">{item.fieldValue}</span>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </div>
  </Tabs>
</div>

    </motion.div>
  );
};

export default Resume;
