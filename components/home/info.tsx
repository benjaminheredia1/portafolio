import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Video from "next/video";
export function InfoGeneral() { 
    return (
        <>
        <StickyScroll contentClassName="overflow-hidden"
          content={[
            {
              title: "About Me",
              description:
                "I'm Benjamin Heredia, a junior developer passionate about creating innovative and efficient solutions. I specialize in Full Stack development, combining frontend and backend skills to build complete and functional web applications.",
                content: (<Image fill className="w-16 h-16 text-cyan-500 object-cover"  src="/benja.jpeg" alt="Benjamin Heredia"/>)
            },
            {
              title: "Skills",
              description:
                "I have experience in technologies such as JavaScript, React, Node.js, Express, and SQL and NoSQL databases. I strive to stay updated with the latest trends and best practices in web development.",
                content: ( <video 
                    className="w-full h-full object-cover rounded-lg" 
                    src="/exposicion.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />)   
            },
            {
              title: "Projects",
              description:
                "I have worked on various personal and collaborative projects that demonstrate my ability to design, develop, and deploy web applications. I'm excited to continue growing and contributing to the world of technology development.",
                content: (<Image fill className="w-16 h-16 text-cyan-500 object-cover"  src="/evento.jpeg" alt="event"/>)
            },
          ]}
        />  
         </>
    );
}