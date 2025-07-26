import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61568409866613",
    icon: Facebook,
  },
  { platform: "Linkedin", url: "/", icon: Linkedin },
  { platform: "Instagram", url: "/", icon: Instagram },
  { platform: "Youtube", url: "/", icon: Youtube },
];

export const servicesLinks = [
  { title: "Architectural Design", href: "/services#architectural-design" },
  { title: "Construction", href: "/services#construction" },
  { title: "Interior Design", href: "/services#interior-design" },
  { title: "Project Management", href: "/services" },
];

export const contactInfo = {
  mobile: {
    formatted: "",
    number: "01919127003",
    whatsappLink: "",
  },
  email: "info@prismpartners.site",
  addresses: [
    {
      type: "Main Office",
      address: "0589-00, Mission Road, Chandpur-3600",
      mapLink: "",
    },
    {
      type: "Branch Office",
      address: "115/6/1 Niketon, Dhaka-1212",
      mapLink: "",
    },
  ],
};

contactInfo.mobile.whatsappLink = `https://wa.me/${contactInfo.mobile.number}`;
contactInfo.mobile.formatted = formatNumber(contactInfo.mobile.number);

function formatNumber(number: string) {
  const newNum = "(+88) " + number.slice(0, 5) + "-" + number.slice(5);

  return newNum;
}

export const developerInfo = {
  name: "Nazmul Hasan Shajib",
  contact: "mailto:shojib116@gamil.com",
};
