export interface INavLinks {
  id: string;
  title: string;
}
export interface IServices {
  title: string;
  icon: any;
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
  points: any;
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
