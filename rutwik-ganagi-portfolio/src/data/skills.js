import { 
  FaJava, FaJs, FaPython, FaReact, FaAws, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux, FaGithub 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiTensorflow, SiKeras, SiOpencv, SiPostgresql, SiMongodb, SiDocker, SiTerraform, SiCplusplus, 
  SiTypescript, SiRedux, SiJenkins, SiSonarqube, SiMysql, SiJira, SiFastapi, SiExpress, SiNumpy, SiPandas, SiPostman
} from 'react-icons/si';

const skillsData = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: <FaJava color="#007396" /> },
      { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Python', icon: <FaPython color="#3776AB" /> },
      { name: 'C/C++', icon: <SiCplusplus color="#00599C" /> },
      { name: 'SQL', icon: <FaDatabase color="#4479A1" /> },
      { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    ]
  },
  {
    category: 'Frameworks/Libraries',
    items: [
      { name: 'React', icon: <FaReact color="#61DAFB" /> },
      { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
      { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
      { name: 'Keras', icon: <SiKeras color="#D00000" /> },
      { name: 'OpenCV', icon: <SiOpencv color="#5C3EE8" /> },
      { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
      { name: 'FastAPI', icon: <SiFastapi color="#009688" /> },
      { name: 'Express.js', icon: <SiExpress color="#000000" /> },
      { name: 'NumPy', icon: <SiNumpy color="#013243" /> },
      { name: 'pandas', icon: <SiPandas color="#150458" /> }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: <FaAws color="#FF9900" /> },
      { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
      { name: 'Terraform', icon: <SiTerraform color="#623CE4" /> },
      { name: 'Jenkins', icon: <SiJenkins color="#D24939" /> },
      { name: 'CI/CD', icon: <FaGithub color="#181717" /> },
      { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
      { name: 'SonarQube', icon: <SiSonarqube color="#4E9BCD" /> },
      { name: 'Git', icon: <FaGitAlt color="#F05032" /> }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
      { name: 'SQL Server', icon: <FaDatabase color="#CC2927" /> }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'GitHub', icon: <FaGithub color="#181717" /> },
      { name: 'Jira', icon: <SiJira color="#0052CC" /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
      { name: 'Power BI', icon: <FaDatabase color="#F2C811" /> }
    ]
  }
];

export default skillsData;
