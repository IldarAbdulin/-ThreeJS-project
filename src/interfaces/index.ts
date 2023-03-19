export interface IStylesProps {
  paddingX: string;
  paddingY: string;
  padding: string;
  heroHeadText: string;
  heroSubText: string;
  sectionHeadText: string;
  sectionSubText: string;
}

export interface INavLinks {
  id: string;
  title: string;
}
export interface IServices {
  title: string;
  icon: string;
}
export interface ITechnologies {
  name: string;
  icon: any;
}

export interface IExperiences {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}

export interface ITestimonials {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface ITags {
  name: string;
  color: string;
}

export interface IProjects {
  name: string;
  description: string;
  tags: ITags[];
  image: any;
  source_code_link: string;
}
