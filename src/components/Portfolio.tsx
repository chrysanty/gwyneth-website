import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
/*import { ImageWithFallback } from "./figma/ImageWithFallback"; */

const projects = [
  {
    id: 1,
    title: "Creative Exploration",
    description: (
    <>
      Passionate about the creative field from a young age, 
      she has been actively involved in voice acting, singing, cosplay, and various creative projects. 
      She also values education, which reflects her dedication to sharing knowledge and inspiring others.
      <br />      
      <br />
      Support her creative journey here! Currently open for commissions listed below. 
      Please reach out to Gwyneth for further information.
      {/*Passionate about the creative and education fields from a young age, 
      Gwyneth has been dedicated to teaching, tutoring, and sharing knowledge, 
      alongside creative pursuits in voice acting and music. 
      <br />
      <br />
      Support her creative journey here!
      Currently open for commissions listed below. 
      Please reach out to Gwyneth for further information. */}
    </>
    ),
    image: "/Gwyneth_Website.png",
    tags: ["Voice Acting", "Singing", "Tutoring"],
    liveUrl: "https://trakteer.id/gwyneth",
    githubUrl: "#",
  },
  {
    id: 2,
    title: " Application of Game Theory in Time Management and Interpersonal Relationship using Persona 4 Golden Video Game",
    description: (
      <>
      University final project using game theory to explore choices in the 
      role-playing game Persona 4 Golden. 
      This project models these processes and examines 
      factors influencing player decisions. 
      <br /> 
      <br /> 
      For access, please reach out to Gwyneth directly.
      </>
      ),
    image: "/P4G.jpg",
    tags: ["Game Theory", "Python", "Time Management", "Persona 4 Golden", "Indonesia"],
    liveUrl: "https://drive.google.com/file/d/1XubTfsIlNFbkOKtTowQl2fOJ3p1txA1u/view?usp=sharing",
    githubUrl: "#",
    /*password: "10119075" //password to access */
  },
  {
    id: 3,
    title: "Medium",
    description: "Platform for sharing articles and personal insights, marking the beginning of her professional writing journey.",
    image: "/Medium.png",
    tags: ["Writing", "Storytelling", "Self Development"],
    liveUrl: "https://medium.com/@chrysanty",
    /*githubUrl: "#",*/
  },

    {
    id: 4,
    title: "[Cover] Birthday Song for Miku (Mitchie M)",
    description: (
      <>
      A collaborative music project covering the popular Miku song by Mitchie M.
      <br /> 
      <br /> 
      Credits: ITB Japanese Club (UKJ ITB)
      <br /> 
      </>
      ),
    image: "/UKJ_ITB.png",
    tags: ["Music", "J-Pop", "Vocaloid"],
    liveUrl: "https://www.youtube.com/watch?v=6NIq-XRo-38",
    /*githubUrl: "#",*/
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-900 text-center mb-4">Portfolio</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A curated selection of projects highlighting creative works, 
          <br />
          analytical research, and educational initiatives.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                      {/*}project.id === 2 ? (
                        <button
                          onClick={() => {
                            const userPassword = prompt("Enter password to open this project:");
                            if (userPassword === project.password) {
                              window.open(project.liveUrl, "_blank");
                            } else {
                              alert("Incorrect password!");
                            }
                            
                          }}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                        
                          <ExternalLink size={16} />
                          <span>Click Here</span>
                        </button>
                      ) : (
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                          target="_blank"
                        >
                          <ExternalLink size={16} />
                          <span>Click Here</span>
                        </a>
                      )} */} 
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Click Here</span>
                    </a> 
                    {/*<a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>*/}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
