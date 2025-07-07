import { FaJava, FaJs, FaPython, FaReact, FaAws, FaDatabase } from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiTensorflow, 
  SiKeras, 
  SiOpencv, 
  SiPostgresql, 
  SiMongodb, 
  SiDocker, 
  SiTerraform, 
  SiCplusplus
} from 'react-icons/si';

const skillsData = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <FaJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'C/C++', icon: <SiCplusplus /> }, // Changed from SiMicrosoft to SiCplusplus
      { name: 'SQL', icon: <FaDatabase /> }
    ]
  },
  {
    category: 'Frameworks/Libraries',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Keras', icon: <SiKeras /> },
      { name: 'OpenCV', icon: <SiOpencv /> }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'CI/CD', icon: <SiKeras /> } // Still using Keras icon as placeholder
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      // Use SiMicrosoftsqlserver if available, else fallback to FaDatabase
      //{ name: 'SQL Server', icon: <SiMicrosoftsqlserver /> }
      // If SiMicrosoftsqlserver is not available, use:
      { name: 'SQL Server', icon: <FaDatabase /> }
    ]
  }
];

export default skillsData;
