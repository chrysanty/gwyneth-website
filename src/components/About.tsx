import { ImageWithFallback } from "./figma/ImageWithFallback"; 
export function About() { return ( 

<section id="about" className="py-20 bg-white min-h-screen flex items-center"> 
  <div className="container mx-auto px-4"> <div className="max-w-6xl mx-auto"> 
    <h2 className="text-gray-900 text-center mb-12">About Me</h2> <
      div className="grid md:grid-cols-2 gap-12 items-center"> 
      <div className="space-y-6"> 
        <p className="text-gray-600"> 
        I'm driven by curiosity and a love for learning. 
        Studying Mathematics at Bandung Institute of Technology taught me to blend logic with creativity, 
        shaping how I approach problems and explore new ideas.
        I thrive on continuous improvement and find genuine joy in both understanding 
        how things work and sharing that knowledge with others. </p> 
        <br />
        <p className="text-gray-600"> 
          Currently, I work as an Area Sales Support Supervisor at Gojek, 
          where I bridge data analysis with strategic decision-making. 
          Beyond my core role, I've developed a passion 
          for marketing and content creation in tech and gaming. I love combining analytical 
          thinking with storytelling, and I'm exploring ways to make complex ideas accessible 
          through teaching and content. 
        </p> 
        <br />
        <p className="text-gray-600"> 
          Outside work, you'll find me playing board games, listening to K-pop, 
          or enjoying a book. Time with family keeps me grounded. 
          For me, life is about balancing learning with doing, and staying curious about what's next.
        </p>
            </div> 
            
            {/*<div className="space-y-6"> 
              <div className="leading-snug">
                <p className="font-extrabold text-2xl text-gray-900 m-0">Area Sales Support Supervisor</p> 
                <p className="text-gray-600 m-0">GoTo Group</p> 
                <p className="text-gray-600 m-0">February 2025 - Present</p> 
              </div> 
              
              <div className="leading-snug"> 
                <p className="font-extrabold text-gray-900 m-0 text-black">User Acquisition Specialist</p> 
                <p className="text-gray-600 m-0">Noctua Games</p> 
                 <p className="text-gray-600 m-0">November 2025 - January 2025</p> 
              </div> 
                
              <div className="leading-snug"> 
                <p className="font-extrabold text-gray-900 m-0 text-black">Procurement Specialist</p>
                <p className="text-gray-600 m-0">Huawei</p> <p className="text-gray-600 m-0">August 2023 - August 2024</p> 
                </div> 
                </div> */}
                
              <div className="relative"> 
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl"> 
                  <ImageWithFallback
                  src="/Gwyneth_Graduation.jpg"
                  alt="Chrysanty Gwyneth Winata Ang"
                  className="w-full h-full object-cover"
                  />
              </div> 
              </div>
               </div> 
              </div> 
            </div> 
          </section> 
        ); }