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

export const contactInfo = {
  mobile: { formatted: "(+88) 01919-127003", number: "01919127003" },
  email: "info@prismpartners.site",
  addresses: [
    { type: "Main Office", address: "0589-00, Mission Road, Chandpur-3600" },
    { type: "Branch Office", address: "115/6/1 Niketon, Dhaka-1212" },
  ],
};
