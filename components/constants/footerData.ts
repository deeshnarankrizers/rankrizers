export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const FooterData: FooterSection[] = [
  {
    title: "Sitemap",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Price", href: "/price" },
    ],
  },
  {
    title: "Our Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Facebook", href: "/privacy-policy" },
      { label: "Instagram", href: "/terms" },
    ],
  },
  {
    title: "Email",
    links: [
      { label: "support@rankrizers.com", href: "/" },
    ],
  },
 
];
