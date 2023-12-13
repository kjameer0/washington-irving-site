export type OpenOptions = "" | "open" | "close";
export const links = [
  { label: "Home", path: "" },
  "About",
  "Admissions",
  "Student Corner",
];
//makeHashLink takes a label string
//for a pathname and converts it to
//a hash link
export function makeLink(label: string): string {
  //lowercases string, removes spaces, removes punctuation and spaces
  //joins with hypen and returns link appropriate string
  return label
    .toLowerCase()
    .split(/\s|'s|\?|!|\.|&/gi)
    .filter((e) => e !== "")
    .join("-");
}
export function makeHashLink(label: string): string {
  return "#" + makeLink(label);
}
// import { baseUrl } from "project-constants";
const baseUrl = "/";
const baseWithoutSlash = baseUrl.slice(0, baseUrl.length - 1);
export type NavListItemType = {
  label: string;
  path: string;
  anchors?: NavListItemType[];
};
//these are all of the anchors associated with each page
export const aboutPaths: NavListItemType[] = [
  { label: "Open House", path: baseWithoutSlash + "/about" },
  {
    label: "Eligibility requirements",
    path: baseWithoutSlash + "/about/#are-we-a-fit",
  },
  {
    label: "Meet past graduates",
    path: baseWithoutSlash + "/about/#meet-our-graduates",
  },
];
export const admissionsPaths: NavListItemType[] = [
  { label: "Admissions Information", path: baseWithoutSlash + "/admissions/" },
  {
    label: `Regular Enrollment Forms`,
    path: baseWithoutSlash + "/admissions/#how-to-enroll",
  },
  {
    label: "Shared Instruction Forms",
    path: baseWithoutSlash + "/shared-admissions/",
  },
  {
    label: "FAQs",
    path: baseWithoutSlash + "admissions/#frequently-asked-questions",
  },
];
export const staffPaths: NavListItemType[] = [
  { label: "Administrators", path: baseWithoutSlash + "/staff-directory/" },
  {
    label: "School Counselors",
    path: baseWithoutSlash + "/staff-directory/#school-counselors",
  },
  {
    label: "Mission Society of NYC",
    path: baseWithoutSlash + "/staff-directory/#mission-society-of-new-york",
  },
  {
    label: "Faculty",
    path: baseWithoutSlash + "/staff-directory/#staff-faculty",
  },
  {
    label: "Support Staff",
    path: baseWithoutSlash + "/staff-directory/#support-staff",
  },
];
export const studentCornerPaths: NavListItemType[] = [
  { label: "Learning Tips", path: baseWithoutSlash + "/student-corner/" },
  {
    label: "Student Resources",
    path: baseWithoutSlash + "/student-corner/#student-resources",
  },
  {
    label: "What's Happening",
    path: baseWithoutSlash + "/student-corner/#whats-happening",
  },
  {
    label: "School Library",
    path: baseWithoutSlash + "/student-corner/#school-library",
  },
];
export const teacherHubPaths: NavListItemType[] = [
  { label: "Classroom Expectations", path: baseWithoutSlash + "/teacher-hub/" },
  {
    label: "Teacher Resources",
    path: baseWithoutSlash + "/teacher-hub/#teacher-resources",
  },
];
export const parentsFamiliesPaths: NavListItemType[] = [
  { label: "Tips for Parents", path: baseWithoutSlash + "/parents-families/" },
  {
    label: "Parent Involvement",
    path: baseWithoutSlash + "/parents-families/#your-involvement",
  },
];
export const studentSupportPaths: NavListItemType[] = [
  {
    label: "About Mission Society",
    path: baseWithoutSlash + "/student-support-activities/",
  },
  {
    label: "Learn to Work",
    path: baseWithoutSlash + "/student-support-activities/#forms",
  },
  {
    label: "Services",
    path: baseWithoutSlash + "/student-support-activities/#services",
  },
];
export const aboutLinks = [
  {
    label: "ABOUT",
    path: "about",
    anchors: [
      { label: "Open House", path: "/about", anchors: [] },
      {
        label: "Eligibility requirements",
        path: "/about/#are-we-a-fit",
        anchors: [],
      },
      {
        label: "Meet past graduates",
        path: "/about/#meet-our-graduates",
        anchors: [],
      },
    ],
  },
  {
    label: "Staff Directory",
    path: "staff-directory",
    anchors: [
      { label: "Staff directory", path: "#staff-directory", anchors: [] },
      { label: "School Counselors", path: "#school-counselors", anchors: [] },
      {
        label: "Mission Society of New York",
        path: "#mission-society-of-new-york",
        anchors: [],
      },
      { label: "Faculty", path: "#faculty", anchors: [] },
      { label: "Support Staff", path: "#support-staff", anchors: [] },
    ],
  },
  { label: `Counselor's Corner`, path: "counselor-corner", anchors: [] },
];
export const admissionsLinks = [
  {
    label: "Admissions",
    path: "admissions",
    anchors: [
      { label: "Academic Requirements", path: "#open-enrollment", anchors: [] },
      { label: "Enrollment Process", path: "#enrollment-process", anchors: [] },
      { label: "FAQs", path: "#frequently-asked-questions", anchors: [] },
    ],
  },
  {
    label: "Shared Instruction",
    path: "#shared-instruction",
    anchors: [{ label: "How to Enroll", path: "#how-to-enroll", anchors: [] }],
  },
  {
    label: "Enrollment Forms",
    path: makeLink("Enrollment Forms"),
    anchors: [],
  },
];
export const studentCornerLinks: NavListItemType[] = [
  {
    label: "Resources",
    path: makeLink("Resources"),
    anchors: [
      {
        label: "Student Resources",
        path: makeHashLink("Student Resources"),
        anchors: [],
      },
      {
        label: `What's Happening?`,
        path: makeHashLink(`What's Happening?`),
        anchors: [],
      },
      {
        label: `School Library`,
        path: makeHashLink(`School Library`),
        anchors: [],
      },
      {
        label: `Student Handbook`,
        path: makeHashLink(`Student Handbook`),
        anchors: [],
      },
    ],
  },
  {
    label: "Mission Society of New York",
    path: makeLink("Mission Society of New York"),
    anchors: [
      {
        label: "What is Mission Society?",
        path: makeHashLink("What is Mission Society?"),
        anchors: [],
      },
      {
        label: "Learn to Work Program",
        path: makeHashLink("Learn to Work Program"),
        anchors: [],
      },
    ],
  },
];
export const yabcNavLinkList: NavListItemType[] = [
  { label: "Home", path: "", anchors: [] },
  { label: "About", path: "about", anchors: aboutLinks },
  { label: "Admissions", path: "admissions", anchors: admissionsLinks },
  {
    label: "Student Corner",
    path: "student-corner",
    anchors: studentCornerLinks,
  },
];
export function handleDrawerSwitch(
  e: React.MouseEvent<HTMLButtonElement>,
  prev: OpenOptions,
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>
) {
  //if first mount, toggling drawer sets drawer open
  e.stopPropagation();
  if (prev === "close" || prev === "") {
    setOpen("open");
  } else if (prev === "open") {
    setOpen("close");
  }
}

export interface DrawerProps {
  open: OpenOptions;
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>;
}
