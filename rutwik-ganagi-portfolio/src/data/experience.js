import societeGeneraleLogo from '../assets/images/societe-generale-logo.png';
import boschLogo from '../assets/images/bosch-logo.png';

const experienceData = [
  {
    company: 'Société Générale',
    logo: societeGeneraleLogo,
    title: 'Full-Stack Developer',
    date: '2022 - Present',
    responsibilities: [
      'Developed 7+ Adobe Experience Manager adaptive forms and implemented 20+ full-stack features using Java, HTML, CSS, and JavaScript enhancing scalability, performance, and client satisfaction',
      'Integrated SonarQube quality gates into Jenkins pipelines, enforcing code quality standards that reduced technical debt by 75% and prevented 50+ critical issues from reaching production',
      'Engineered high-performance Spring Boot REST APIs with optimized SQL queries, achieving 40% reduction in database response time',
      'Enhanced code reliability by 30% through JUnit tests and optimized team delivery by resolving 150+ Jira issues'
    ]
  },
  {
    company: 'Bosch',
    logo: boschLogo,
    title: 'Associate Software Engineer | Internship',
    date: '2021',
    responsibilities: [
      'Developed 10+ Python test scripts to validate ECU behavior during Firmware Over-the-Air (FOTA) updates, increasing testing efficiency by 30%'
    ]
  }
];

export default experienceData;