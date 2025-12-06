/*import { Code, Palette, Smartphone, Database, Cloud, Zap } from "lucide-react"; */
import { ChartNoAxesCombinedIcon, PanelsTopLeft, Monitor, TrendingUp , Video, Languages} from "lucide-react";
import { Card } from "./ui/card";

const skills = [
  {
    icon: ChartNoAxesCombinedIcon,
    title: "Data Analysis",
    description: "Python, MATLAB, R, Google Sheets, Microsoft Excel",
  },
  {
    icon: PanelsTopLeft,
    title: "Project Management",
    description: "Jira, Trello, Notion, Miro",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Google Ads, TikTok Ads, ASA, Meta Ads",
  },
  {
    icon: Monitor,
    title: "CRM",
    description: "Salesforce",
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "CapCut, Canva, Audacity",
  },
  {
    icon: Languages,
    title: "Languages",
    description: "English, Indonesia, Chinese",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-900 text-center mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {/*A comprehensive set of skills and technologies I use to bring projects to life. */}
            The skills and technologies I use to turn ideas into real projects.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <Card key={skill.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex p-3 bg-blue-100 rounded-lg">
                  <skill.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
