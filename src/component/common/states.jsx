// Home Starts
const home = {
  system: {
    class: "sys-title",
    sysTitle: "ystematic",
    caption: "Where my caption goes beyond.",
  },
};
export function Homes() {
  return home;
}
// Home Ends

//Footer Starts
const footer = {
  tweets: [
    {
      id: "1",
      spanClass: "username mb-4",
      span: "@namehere",
      para: " Paragraphs add one idea at a time to your broader argument.Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence.",
    },
    {
      id: "2",
      spanClass: "username mb-4",
      span: "@namehere",
      para: " Paragraphs add one idea at a time to your broader argument.Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence.",
    },
  ],
  quickLinks: [
    {
      id: "1",
      href: "#link1",
      name: "Lorem Ipsum Doler Sit",
      icon: "fa fa-angle-double-right mr-2",
    },
    {
      id: "2",
      href: "#link2",
      name: "Ametcon sectetur",
      icon: "fa fa-angle-double-right mr-2",
    },
    {
      id: "3",
      href: "#link3",
      name: "Praesent velsem id",
      icon: "fa fa-angle-double-right mr-2",
    },
    {
      id: "4",
      href: "#link4",
      name: "Curabitur hendrerit est",
      icon: "fa fa-angle-double-right mr-2",
    },
    {
      id: "5",
      href: "#link5",
      name: "Aliquam eget erat nec sapien",
      icon: "fa fa-angle-double-right mr-2",
    },
    {
      id: "6",
      href: "#link6",
      name: "Crasid auguenunc",
      icon: "fa fa-angle-double-right mr-2",
    },
    {
      id: "7",
      href: "#link7",
      name: "Innec justonon",
      icon: "fa fa-angle-double-right mr-2",
    },
    {
      id: "8",
      href: "#link8",
      name: "Vivamus mollis enim ut",
      icon: "fa fa-angle-double-right mr-2",
    },
  ],
  blogDetail: [
    {
      id: "1",
      ptitle: "Post Title",
      domain: "Admin, domainname.com",
      date: "Friday 6th April 2000",
      blogLink: { title: "Read More", href: "#blogDetal" },
      para: "Paragraphs add one idea at a time to your broader argument.Try to think about paragraphs in terms.Try to think about paragraphs in terms.",
    },
    {
      id: "2",
      ptitle: "Post Title",
      domain: "Admin, domainname.com",
      date: "Friday 6th April 2000",
      blogLink: { title: "Read More", href: "#blogDetal" },
      para: "Paragraphs add one idea at a time to your broader argument.Try to think about paragraphs in terms.Try to think about paragraphs in terms.",
    },
  ],
};
export function Footers() {
  return footer;
}
// Footer Ends

// Middle Section Starts
const middle = {
  aboutLink: { title: "Read More About Us", href: "#readaboutus" },
  serviceLink: { title: "View All of Our Services", href: "#services" },
  clientLink: { title: "View this Project", href: "#client" },
};
export function Middle() {
  return middle;
}
// Middle Section Ends

// Clent Reviews Starts
const clients = {
  clientReview: [
    {
      id: "1",
      class: "clientImg mr-3",
      dest: "images/client1.png",
      alt: "services",
      heading: "Tommy Tanker",
      span: "- CEO",
      para: "Paragraphs add one idea at a time to your broad argument.Try to think about paragraphs so here is the detail.Paragraphs add one idea at a time to your broad argument.Try to think about paragraphs so here is the detail. ",
    },
    {
      id: "2",
      class: "clientImg mr-3",
      dest: "images/client1.png",
      alt: "services",
      heading: "Tommy Tanker",
      span: "- CEO",
      para: "Paragraphs add one idea at a time to your broad argument.Try to think about paragraphs so here is the detail.Paragraphs add one idea at a time to your broad argument.Try to think about paragraphs so here is the detail. ",
    },
  ],
};

export function ClientsReviews() {
  return clients;
}
// Clients Reviews Ends

// Social Links Starts
const social_links = {
  socialIcons: [
    { id: "1", class: "fa fa-linkedin m-13", href: "#linkedin" },
    { id: "2", class: "fa fa-twitter m-13", href: "#twitter" },
    { id: "3", class: "fa fa-pinterest m-13", href: "#pinterest" },
    { id: "4", class: "fa fa-google-plus m-13", href: "#google" },
    { id: "5", class: "fa fa-wifi m-13", href: "#wifi" },
  ],
};
export function SocialsLinks() {
  return social_links;
}
//   Social Links Ends

// Services Section Starts
const services = {
  media: [
    {
      id: "1",
      class: "mediaImg mr-3",
      dest: "images/about.jpg",
      alt: "services",
      heading: "Service Name",
      para: "Paragraphs add one idea at a time to your broad argument.Try to think about paragraphs so here is the detail. ",
    },
    {
      id: "2",
      class: "mediaImg mr-3",
      dest: "images/about.jpg",
      alt: "services",
      heading: "Service Name",
      para: "Paragraphs add one idea at a time to your broad argument.Try to think about paragraphs so here is the detail. ",
    },
    {
      id: "3",
      class: "mediaImg mr-3",
      dest: "images/about.jpg",
      alt: "services",
      heading: "Service Name",
      para: "Paragraphs add one idea at a time to your broad argument.Try to think about paragraphs so here is the detail. ",
    },
    {
      id: "4",
      class: "mediaImg mr-3",
      dest: "images/about.jpg",
      alt: "services",
      heading: "Service Name",
      para: "Paragraphs add one idea at a time to your broad argument.Try to think about paragraphs so here is the detail. ",
    },
  ],
};

export function Servicies() {
  return services;
}
// Services Sections Ends

// About Section Starts
const about = {
  aboutImg: { class: "img-fluid mb-3", dest: "images/about.jpg", alt: "About" },
  aboutParagraph: {
    p1: "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.",
    p2: "Paragraphs add one idea at a time to your broader argument.Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence.",
  },
};
export function Abouts() {
  return about;
}
// About Section Ends

// Main Content Starts
const main_content = {
  mainImage: {
    class: "img-fluid",
    dest: "images/about-img.jpg",
    alt: "About",
  },
  aboutContent: {
    h1: "A HUGE",
    h2: "TITLE HERE",
    link: { title: "Read More", href: "#readmore" },
    paragraph:
      "Cursus penatisa ccum ut curabitur nulla tellus tor ames a in curabitur pede.Idet mollisi eros dis orci congue elis et curabitur consequam intesque.Cura bit urpis ametur in ante.",
  },
};
export function MainContent() {
  return main_content;
}
// Main Content Ends
