/* =====================================================
   EDIT YOUR DETAILS HERE - the whole site is built
   from this one object. No need to touch the HTML.
   ===================================================== */
const DATA = {
  name: "Naresh Nagar",
  initials: "Naresh Nagar",
  photo: "photos/image.jpeg", // e.g. "me.jpg" (put the image in the same folder). Leave empty to show initials.
  roles: ["Linux Administrator", "AWS Cloud","Devops Engineer"],
    tagline:
    "RHCSA-certified DevOps Engineer with experience in AWS server management and cyber security, passionate about automation, uptime and secure infrastructure.",
  about:
    "DevOps Engineer with 1 year of experience in AWS cloud server management and Linux administration, certified as a Red Hat Certified System Administrator (RHCSA). I have also worked with the State Cyber Police, Madhya Pradesh, on cyber forensics and cyber security, also work on cloud (openstack). I'm looking for a DevOps role where I can build secure, automated and scalable infrastructure.",
  info: [
    ["Name", "Naresh Nagar"],
    ["Location", "Bhopal, India"],
    ["Email", "nagarnaresh2422@gmail.com"],
    ["Degree", "Bachelor of Computer Application"],
    ["Availability", "Open to internships / jobs"],
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/Nareshnagar" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/naresh-nagar-23b63a374/" },
    { label: "Email", url: "mailto:nagarnaresh2422@gmail.com" },
  ],

  education: [
    {
      title: "Masters of Computer application",
      org: "Makhanlal Chaturvedi National University of journalism and communication",
      date: "2021 - 2025",
      desc: "CGPA: 7.8 / 10",
      points: ["Relevant coursework: Data Structures, DBMS, Operating Systems, Web Technologies", "Member of the coding club"],
    },
    {
      title: "Bachelor of Computer application (Honours)",
      org: "Makhanlal Chaturvedi National University of journalism and communication",
      date: "2021 - 2025",
      desc: "CGPA: 8.0 / 10",
      points: ["Relevant coursework: Data Structures, DBMS, Operating Systems, Web Technologies", "Member of the coding club"],
    },
    {
      title: "Senior Secondary (Class XII) - Commerce + IP",
      org: "B.S.P senior secondary school sector-4",
      date: "2020 - 2021",
      desc: "Percentage: 74%",
      points: [],
    },
    {
      title: "Secondary (Class X)",
      org: "B.S.P senior secondary school sector-4",
      date: "2019",
      desc: "Percentage: 61%",
      points: [],
    },
  ],

  // level is 0-100. category is used for the filter buttons.
  skills: [
    { name: "Linux Administration (RHEL)", level: 85, category: "Operating Systems", logo: "linux/linux-original.svg", mark: "L" },
    { name: "Shell Scripting (Bash)", level: 75, category: "Operating Systems", logo: "bash/bash-original.svg", mark: "B" },
    { name: "AWS (EC2, S3, IAM, VPC)", level: 80, category: "Cloud", logo: "amazonwebservices/amazonwebservices-original.svg", mark: "AWS" },
    { name: "Cloud Monitoring (CloudWatch)", level: 70, category: "Cloud", logo: "amazonwebservices/amazonwebservices-original.svg", mark: "AWS" },
    { name: "Docker", level: 65, category: "Containers", logo: "docker/docker-original.svg", mark: "D" },
    { name: "Kubernetes", level: 55, category: "Containers", logo: "kubernetes/kubernetes-plain.svg", mark: "K" },
    { name: "Jenkins / GitHub Actions (CI/CD)", level: 65, category: "CI/CD & IaC", logo: "jenkins/jenkins-original.svg", mark: "CI" },
    { name: "Terraform", level: 50, category: "CI/CD & IaC", logo: "terraform/terraform-original.svg", mark: "T" },
    { name: "Ansible", level: 55, category: "CI/CD & IaC", logo: "ansible/ansible-original.svg", mark: "A" },
    { name: "Git & GitHub", level: 80, category: "Tools", logo: "git/git-original.svg", mark: "G" },
    { name: "Networking (TCP/IP, DNS, HTTP)", level: 70, category: "Tools", logo: "wireshark/wireshark-original.svg", mark: "NET" },
    { name: "Cyber Security & Forensics", level: 70, category: "Security", logo: "kali/kali-original.svg", mark: "SEC" },
  ],

  certifications: [
    { title: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat", date: "11 Dec 2025", logo: "https://cdn.simpleicons.org/redhat", logoText: "Red Hat", url: "RHCSA.pdf" },
    { title: "AWS", issuer: "simplilearn", date: "7 Oct 2025", logoText: "simplilearn", url: "aws_certificate.pdf" },
    { title:"Achievement", issuer: "Makhanlal Chaturvedi National University of Journalism and communication", date: "18 Aug 2026", logo: "https://cdn.simpleicons.org/freecodecamp", logoText: "MCU", url: "mcu_certificate.pdf" },
    // { title: "Introduction to Cloud Computing", issuer: "NPTEL", date: "Nov 2024", logoText: "NPTEL", url: "#" },
  ],

  // type: "internship" | "job" | "freelance" | "project"
  experience: [
    {
  type: "job",
  title: "DevOps Engineer",
  org: "ITE Infotech Pvt. Ltd.",
  date: "Oct 2025 - Present",
  description:
    "Working on DevOps and infrastructure operations, including Linux server administration, server provisioning, and OpenStack-related setup and configuration. Gaining practical experience in automation, infrastructure management, and backup operations.",
  points: [
    "Worked on Kickstart configuration and provisioning across 16 blade servers",
    "Configured server ports and supported service connectivity",
    "Gained hands-on exposure to OpenStack infrastructure setup",
    "Worked with Veeam Backup software and tape-to-NAS backup workflows",
    "Supported Linux server administration and infrastructure troubleshooting"
  ],
  tags: [
    "Linux",
    "RHEL",
    "OpenStack",
    "DevOps",
    "Server Provisioning",
    "Kickstart",
    "Veeam Backup",
    "NAS Storage"
  ],
  status: "Current",
  github: "",
  demo: ""
},
    {
      type: "internship",
      title: "Cyber Security & Ethical Hacking",
      org: "Broadcast Engineering Consultants India Limited",
      date: "Jul 2023 - Aug 2023",
      desc: "Gained foundational knowledge of cybersecurity and ethical hacking, including network reconnaissance, vulnerability assessment, Linux security, and web application security. Practiced security testing techniques in authorized lab environments.",
    points: [
      "Performed basic network reconnaissance and port scanning using Nmap",
      "Learned TCP/IP, networking protocols, and network traffic analysis using Wireshark",
      "Studied Linux security, file permissions, and system hardening fundamentals",
      "Explored web application vulnerabilities and basic penetration testing methodologies",
      "Learned vulnerability identification, risk assessment, and security remediation practices"
    ],
    tags: [
      "Cybersecurity",
      "Ethical Hacking",
      "Nmap",
      "Linux",
      "Wireshark",
      "Network Security",
      "Vulnerability Assessment",
      "Web Security"
    ],
    },
    {
      type: "internship",
      title: "Cyber Forensics and Cyber Security",
      org: "State Cyber Police Madhya Pradesh (I4C)",
      date: "jan 2026 - feb 2026",
       desc: "Learned cybersecurity and cyber forensics fundamentals, including digital evidence handling, cybercrime investigation concepts, network security, and security incident analysis.",
    points: [
      "Studied digital forensics fundamentals and electronic evidence preservation",
      "Learned cybercrime investigation procedures and basic incident response concepts",
      "Explored network security, common cyber threats, and vulnerability assessment",
      "Studied log analysis, evidence documentation, and forensic reporting practices",
      "Learned ethical hacking fundamentals and cybersecurity best practices"
    ],
    tags: [
      "Cyber Security",
      "Cyber Forensics",
      "Digital Evidence",
      "Incident Response",
      "Network Security",
      "Cybercrime Investigation",
      "Vulnerability Assessment",
      "Digital Forensics"
    ],
    },
    

  {
    type: "project",
    title: "CI/CD Pipeline with GitHub Actions",
    category: "DevOps",
    org: "Personal",
    date: "2026",
    description:
      "Building a CI/CD workflow to automate application testing, build validation, and deployment using GitHub Actions.",
    points: [
      "Learning workflow configuration using YAML",
      "Configuring automated build and test jobs",
      "Exploring Git-based continuous integration",
      "Planning Docker image build automation"
    ],
    tags: ["Git", "GitHub Actions", "CI/CD", "YAML", "Docker"],
    status: "In Progress",
    github: "",
    demo: ""
  },
  {
    type: "project",
    title: "AWS Infrastructure Automation with Terraform",
    category: "Cloud & DevOps",
    org: "Personal",
    date: "2026",
    description:
      "Planned project to provision and manage AWS infrastructure using Terraform and automate cloud operations with Python.",
    points: [
      "Infrastructure as Code using Terraform",
      "AWS resource provisioning and configuration",
      "Python scripting for cloud automation",
      "Planning infrastructure validation and cleanup"
    ],
    tags: ["AWS", "Terraform", "Python", "Boto3", "Infrastructure as Code"],
    status: "Planned",
    github: "",
    demo: ""
  }
],


  learning: [
    { title: "Terraform", source: "TrainWithSubham", icon: "🏗️", note: "Learning Infrastructure as Code and AWS provisioning." },
    { title: "Linux", source: "Self-study", icon: "🐧", note: "Building Linux administration and command-line skills." },
    { title: "AWS", source: "AWS Skill Builder", icon: "☁️", note: "Learning AWS cloud fundamentals." },
  ],

  contact: {
    email: "nagarnaresh2422@gmail.com",
    phone: "+91 9399718738",
    location: "Bhopal, Madhya Pradesh, India",
  },
};

/* =====================================================
   RENDERING - you normally don't need to edit below
   ===================================================== */
const $ = (sel) => document.querySelector(sel);
const el = (html) => {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
};

// ---- Profile / About / Socials ----
function renderBasics() {
  document.title = `${DATA.name} | Portfolio`;
  $("#profile-name").textContent = DATA.name;
  const profilePhoto = $("#profile-photo");
  if (DATA.photo) {
    profilePhoto.src = DATA.photo;
    profilePhoto.hidden = false;
  } else {
    profilePhoto.hidden = true;
  }
  $("#sidebar-email-value").textContent = DATA.contact.email;
  $("#sidebar-email").href = `mailto:${DATA.contact.email}`;
  $("#sidebar-phone-value").textContent = DATA.contact.phone;
  $("#sidebar-phone").href = `tel:${DATA.contact.phone.replace(/[^\d+]/g, "")}`;
  $("#sidebar-location").textContent = DATA.contact.location;
  $("#footer-name").textContent = DATA.name;
  $("#year").textContent = new Date().getFullYear();
  $("#about-text").textContent = DATA.about;

  $("#socials").innerHTML = DATA.socials
    .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
    .join("");

  $("#contact-info").innerHTML = `
    <div class="c-item"><span class="ic">✉️</span><div><small>Email</small>${DATA.contact.email}</div></div>
    <div class="c-item"><span class="ic">📞</span><div><small>Phone</small>${DATA.contact.phone}</div></div>
    <div class="c-item"><span class="ic">📍</span><div><small>Location</small>${DATA.contact.location}</div></div>`;
}

// ---- Typing effect ----
function typingEffect() {
  const target = $("#typed");
  let r = 0, c = 0, deleting = false;
  (function tick() {
    const word = DATA.roles[r];
    target.textContent = word.slice(0, c);
    if (!deleting && c === word.length) { deleting = true; return setTimeout(tick, 1400); }
    if (deleting && c === 0) { deleting = false; r = (r + 1) % DATA.roles.length; }
    c += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 45 : 90);
  })();
}

// ---- Timeline (education + experience) ----
function timelineItem(i, withBadge) {
  const badge = withBadge ? `<span class="badge ${i.type}">${i.type}</span>` : "";
  const points = i.points && i.points.length ? `<ul>${i.points.map((p) => `<li>${p}</li>`).join("")}</ul>` : "";
  const tags = i.tags && i.tags.length ? `<div class="tags">${i.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>` : "";
  return `
    <div class="t-item reveal">
      <div class="t-card">
        <div class="t-head"><h3>${i.title}${badge}</h3><span class="t-date">${i.date}</span></div>
        <div class="t-org">${i.org}</div>
        ${i.desc ? `<p>${i.desc}</p>` : ""}
        ${points}${tags}
      </div>
    </div>`;
}

function renderEducation() {
  $("#education-timeline").innerHTML = DATA.education.map((e) => timelineItem(e, false)).join("");
}

function renderExperience(filter = "all") {
  const list = DATA.experience.filter((e) => filter === "all" || e.type === filter);
  $("#experience-timeline").innerHTML = list.map((e) => timelineItem(e, true)).join("");
  observeReveals();
}

function renderExpFilters() {
  const types = ["all", ...new Set(DATA.experience.map((e) => e.type))];
  const bar = $("#exp-filters");
  bar.innerHTML = types
    .map((t, idx) => `<button class="filter-btn ${idx === 0 ? "active" : ""}" data-f="${t}">${t[0].toUpperCase() + t.slice(1)}</button>`)
    .join("");
  bar.addEventListener("click", (e) => {
    const b = e.target.closest(".filter-btn");
    if (!b) return;
    bar.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    renderExperience(b.dataset.f);
  });
}

// ---- Skills ----
function renderSkills(filter = "all") {
  const list = DATA.skills.filter((s) => filter === "all" || s.category === filter);
  $("#skills-grid").innerHTML = list
    .map(
      (s) => `
    <div class="skill reveal">
      <div class="skill-top">
        <img class="skill-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.logo}" alt="" aria-hidden="true">
        <span class="skill-logo-fallback" aria-hidden="true">${s.mark}</span>
        <span class="skill-name">${s.name}</span>
      </div>
      <div class="skill-cat">${s.category}</div>
    </div>`
    )
    .join("");
  $("#skills-grid").querySelectorAll(".skill-logo").forEach((logo) => {
    logo.addEventListener("load", () => {
      logo.nextElementSibling.hidden = true;
    });
    logo.addEventListener("error", () => {
      logo.hidden = true;
    });
  });
  observeReveals();
}

function renderSkillFilters() {
  const cats = ["all", ...new Set(DATA.skills.map((s) => s.category))];
  const bar = $("#skill-filters");
  bar.innerHTML = cats
    .map((c, idx) => `<button class="filter-btn ${idx === 0 ? "active" : ""}" data-f="${c}">${c === "all" ? "All" : c}</button>`)
    .join("");
  bar.addEventListener("click", (e) => {
    const b = e.target.closest(".filter-btn");
    if (!b) return;
    bar.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    renderSkills(b.dataset.f);
  });
}

// ---- Certifications & Learning ----
function renderCerts() {
  const certGrid = $("#cert-grid");
  certGrid.innerHTML = DATA.certifications
    .map(
      (c) => `
    <div class="card reveal">
      <div class="cert-logo">
        ${c.logo ? `<img src="${c.logo}" alt="${c.issuer} logo">` : ""}
        <span>${c.logoText || c.issuer}</span>
      </div>
      <h3>${c.title || c.issuer}</h3>
      <div class="issuer">${c.issuer}</div>
      <div class="meta">Issued ${c.date}</div>
      <a class="link" href="${c.url}" target="_blank" rel="noopener">View Certificate →</a>
    </div>`
    )
    .join("");
  certGrid.querySelectorAll(".cert-logo img").forEach((logo) => {
    logo.addEventListener("error", () => {
      logo.hidden = true;
    });
  });
}

function renderLearning() {
  $("#learning-grid").innerHTML = DATA.learning
    .map(
      (l) => `
    <div class="card reveal">
      <div class="icon">${l.icon || "📘"}</div>
      <h3>${l.title}</h3>
      <div class="issuer">${l.source}</div>
      <div class="meta">${l.note}</div>
    </div>`
    )
    .join("");
}

// ---- Scroll reveal + animated bars ----
let observer;
function observeReveals() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("visible");
          en.target.querySelectorAll(".bar-fill").forEach((b) => (b.style.width = b.dataset.level + "%"));
          observer.unobserve(en.target);
        });
      },
      { threshold: 0.15 }
    );
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((n) => observer.observe(n));
}

// ---- Navbar behaviour ----
function setupNav() {
  const nav = $("#navbar");
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href")));
  const toTop = $("#to-top");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
    toTop.classList.toggle("show", window.scrollY > 500);
    const pos = window.scrollY + 120;
    sections.forEach((s, i) => {
      if (s && s.offsetTop <= pos && s.offsetTop + s.offsetHeight > pos) {
        links.forEach((l) => l.classList.remove("active"));
        links[i].classList.add("active");
      }
    });
  });

  const menuToggle = $("#menu-toggle");
  const navLinks = $("#nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
  });
  links.forEach((a) => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ---- Dark / light theme ----
function setupTheme() {
  const btn = $("#theme-toggle");
  const saved = localStorage.getItem("theme");
  const apply = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    btn.textContent = t === "dark" ? "☀️" : "🌙";
  };
  apply(saved || "dark");
  btn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  });
}

// ---- Contact form (opens the visitor's email app) ----
function setupForm() {
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#c-name").value.trim();
    const email = $("#c-email").value.trim();
    const msg = $("#c-message").value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${msg}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${DATA.contact.email}?subject=${subject}&body=${body}`;
    $("#form-note").textContent = "Opening your email app...";
    e.target.reset();
  });
}

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  renderBasics();
  renderEducation();
  renderSkillFilters();
  renderSkills();
  renderCerts();
  renderExpFilters();
  renderExperience();
  renderLearning();
  typingEffect();
  setupNav();
  setupTheme();
  setupForm();
  observeReveals();
});
