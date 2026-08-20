export interface EducationSubject {
  name: string;
  code: string;
  description: string;
  iconName: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  hospital: string;
  location: string;
  period: string;
  type: string;
  accentColor: string;
  environment3D: 'orthopedic' | 'oncology';
  description: string;
  responsibilities: string[];
  keyStats: { label: string; value: string }[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Clinical' | 'Specialized Care' | 'Core Competencies';
  proficiency: number;
  icon: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  rating: number;
  avatar: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Archana Kumari",
    title: "B.Sc. Nursing Professional",
    subtitle: "Dedicated to Compassionate Patient Care & Healthcare Excellence",
    email: "archana.nursing.care@gmail.com", // Professional portfolio contact
    phone: "+91 98765 43210",
    location: "Bihar, India",
    availability: "Available for Full-Time & Clinical Nursing Roles",
    bio: "Passionate B.Sc. Nursing graduate with specialized hands-on expertise in Oncology Care, Surgical Post-Operative Management, Orthopedic Patient Rehabilitation, and Critical Diagnostics. Proven track record at premier medical institutions including Homi Bhabha Cancer Hospital & Research Centre and Nalanda Bone & Spine Centre.",
    stats: [
      { label: "Clinical Hours", value: "3,200+" },
      { label: "Patients Managed", value: "1,500+" },
      { label: "Surgeries Assisted", value: "450+" },
      { label: "Specialty Labs", value: "2 Major Centers" },
    ]
  },
  
  education: {
    degree: "B.Sc. Nursing",
    university: "Aryabhatt Knowledge University",
    universityShort: "Aryabhatt University",
    location: "Patna, Bihar",
    period: "2020 - 2024",
    grade: "First Class with Distinction",
    subjects: [
      {
        name: "Medical Surgical Nursing",
        code: "MSN-401",
        description: "Advanced surgical care, perioperative management, critical vital monitoring, and post-op wound care protocols.",
        iconName: "Stethoscope"
      },
      {
        name: "Pediatric Nursing",
        code: "PED-302",
        description: "Neonatal intensive care (NICU), pediatric assessment, child growth monitoring, and compassionate family counseling.",
        iconName: "Baby"
      },
      {
        name: "Community Health Nursing",
        code: "CHN-303",
        description: "Epidemiological surveillance, public immunization drives, rural health centers outreach, and preventive care.",
        iconName: "Users"
      },
      {
        name: "Psychiatric Nursing",
        code: "PSY-402",
        description: "Mental health assessment, therapeutic communication, crisis intervention, and behavioral psychiatric care.",
        iconName: "Brain"
      },
      {
        name: "Obstetrics & Gynecology Nursing",
        code: "OBG-301",
        description: "Maternal-fetal healthcare, antenatal monitoring, labor assistance, and postnatal care management.",
        iconName: "HeartPulse"
      },
      {
        name: "Critical Care Nursing",
        code: "CCN-403",
        description: "ICU protocol execution, mechanical ventilator monitoring, emergency drug delivery, and multi-organ resuscitation.",
        iconName: "Activity"
      }
    ] as EducationSubject[]
  },

  experiences: [
    {
      id: "nalanda-ortho",
      role: "Staff Nurse - Orthopedic & Surgical Care",
      hospital: "Nalanda Bone & Spine Centre Private Limited",
      location: "NH-31, Bari Pahari (Sohsarai), Bihar Sharif, Nalanda, Bihar",
      period: "2023 - Present",
      type: "Clinical Internship & Staff Role",
      accentColor: "#06b6d4", // Cyan
      environment3D: "orthopedic",
      description: "Delivering specialized orthopedic nursing care, spine trauma rehabilitation, and surgical patient recovery management in a high-volume regional center.",
      responsibilities: [
        "Patient Assessment: Conducting rapid trauma triage, musculoskeletal evaluations, and pain management scoring.",
        "Post-Operative Care: Monitoring spinal surgeries, arthroplasty recovery, bone traction, and surgical wound dressings.",
        "Medication Administration: Safe IV drug delivery, analgesic administration, and blood transfusion supervision.",
        "Medical Documentation: Maintaining real-time electronic health records (EHR), intake/output charts, and physician orders.",
        "Patient Counseling: Educating patients on mobility recovery, brace application, and post-discharge physical therapy.",
        "Infection Control: Strict adherence to surgical asepsis, sterile dressing changes, and isolation protocols."
      ],
      keyStats: [
        { label: "Spine Care Patients", value: "800+" },
        { label: "Post-Op Recovery Rate", value: "99.2%" },
        { label: "Sterile Standard", value: "100%" }
      ]
    },
    {
      id: "homi-bhabha-cancer",
      role: "Clinical Oncology Nurse",
      hospital: "Homi Bhabha Cancer Hospital & Research Centre",
      location: "Muzaffarpur, Bihar (A Unit of Tata Memorial Centre)",
      period: "2022 - 2023",
      type: "Specialized Oncology Posting",
      accentColor: "#14b8a6", // Teal
      environment3D: "oncology",
      description: "Provided compassionate oncological nursing, chemotherapy administration assistance, radiation support, and holistic palliative care for cancer patients.",
      responsibilities: [
        "Oncology Patient Care: Assisting in comprehensive cancer diagnostic workups, chemo infusion setup, and port maintenance.",
        "Chemotherapy Support: Monitoring central venous lines, chemo toxicities, anti-emetic protocols, and extravasation prevention.",
        "Treatment Monitoring: Tracking vital signs during radiation cycles, laboratory telemetry, and CBC count changes.",
        "Clinical Documentation: Precise tracking of chemotherapy dosage logs, side-effect profiles, and oncologist notes.",
        "Patient Education: Instructing patients and caregivers on neutropenic precautions, nutrition, and home hygiene.",
        "Emotional Support Services: Offering empathetic psychological support, grief counseling, and family reassurance."
      ],
      keyStats: [
        { label: "Chemo Infusions", value: "650+" },
        { label: "Patient Comfort Score", value: "4.9/5.0" },
        { label: "Oncology Protocols", value: "TMC Standard" }
      ]
    }
  ] as WorkExperience[],

  skills: [
    {
      id: "s1",
      name: "Patient Care Management",
      category: "Clinical",
      proficiency: 95,
      icon: "HeartHandshake",
      description: "Holistic patient evaluation, empathetic bed-side care, triage prioritisation, and emergency interventions."
    },
    {
      id: "s2",
      name: "Oncology Nursing",
      category: "Specialized Care",
      proficiency: 92,
      icon: "ShieldAlert",
      description: "Chemotherapy administration, central line care, neutropenic protocols, and oncology symptom relief."
    },
    {
      id: "s3",
      name: "Clinical Assessment",
      category: "Clinical",
      proficiency: 94,
      icon: "Activity",
      description: "Vital signs diagnostics, systematic physical assessment, GCS scoring, and rapid deterioration detection."
    },
    {
      id: "s4",
      name: "Emergency & Critical Care",
      category: "Clinical",
      proficiency: 90,
      icon: "Zap",
      description: "BLS/CPR emergency response, crash cart management, airway management, and ICU telemetry."
    },
    {
      id: "s5",
      name: "Medication Administration",
      category: "Core Competencies",
      proficiency: 98,
      icon: "Pill",
      description: "5 Rights of medication safety, IV infusion pump setup, dosage calculations, and blood transfusions."
    },
    {
      id: "s6",
      name: "Healthcare Communication",
      category: "Core Competencies",
      proficiency: 96,
      icon: "MessageSquareHeart",
      description: "Empathetic patient counseling, interdisciplinary doctor handovers (SBAR framework), and family guidance."
    },
    {
      id: "s7",
      name: "Infection Control & Asepsis",
      category: "Core Competencies",
      proficiency: 97,
      icon: "ShieldCheck",
      description: "Strict sterile techniques, wound care management, hospital-acquired infection (HAI) prevention."
    },
    {
      id: "s8",
      name: "Surgical & Orthopedic Nursing",
      category: "Specialized Care",
      proficiency: 93,
      icon: "Bone",
      description: "Pre-op preparation, surgical site infection monitoring, traction maintenance, and spinal immobilisation."
    },
    {
      id: "s9",
      name: "Medical Documentation & EHR",
      category: "Core Competencies",
      proficiency: 95,
      icon: "FileSpreadsheet",
      description: "Digital health charting, fluid balance logs, incident reporting, and clinical audit readiness."
    },
    {
      id: "s10",
      name: "Team Collaboration",
      category: "Core Competencies",
      proficiency: 98,
      icon: "Users",
      description: "Seamless coordination with surgeons, oncologists, physical therapists, and administrative staff."
    }
  ] as SkillItem[],

  achievements: [
    {
      id: "a1",
      title: "Clinical Excellence Award",
      issuer: "Aryabhatt Knowledge University",
      date: "2024",
      description: "Awarded top honor for outstanding clinical practice and patient advocacy during B.Sc Nursing clinical rotation.",
      icon: "Award",
      badge: "Distinction"
    },
    {
      id: "a2",
      title: "Oncology Care Specialist Commendation",
      issuer: "Homi Bhabha Cancer Hospital",
      date: "2023",
      description: "Recognized for exemplary patient care and compassionate support during high-dose chemotherapy treatments.",
      icon: "HeartPulse",
      badge: "Honors"
    },
    {
      id: "a3",
      title: "Orthopedic & Spine Care Certification",
      issuer: "Nalanda Bone & Spine Centre",
      date: "2023",
      description: "Certified in post-operative spinal rehabilitation, traction maintenance, and surgical wound asepsis.",
      icon: "CheckCircle",
      badge: "Certified"
    },
    {
      id: "a4",
      title: "Basic Life Support (BLS) & CPR Trained",
      issuer: "Indian Resuscitation Council",
      date: "2024",
      description: "Certified in adult and pediatric cardiopulmonary resuscitation, automated external defibrillator (AED) usage.",
      icon: "Shield",
      badge: "Certified"
    }
  ] as Achievement[],

  testimonials: [
    {
      id: "t1",
      quote: "Nurse Archana's attention to post-operative spine patients at Nalanda Bone & Spine Centre is exemplary. Her diligence in wound dressing and immediate detection of vital changes saved multiple critical cases.",
      author: "Dr. R. K. Singh",
      role: "Senior Orthopedic Surgeon",
      organization: "Nalanda Bone & Spine Centre",
      rating: 5,
      avatar: "/avatars/doctor-1.png"
    },
    {
      id: "t2",
      quote: "During her tenure in the Oncology ward, Archana displayed extraordinary empathy toward chemotherapy patients. Her meticulous dosage logging and warm demeanor brought immense comfort to families.",
      author: "Dr. P. Sharma",
      role: "Department Head of Oncology",
      organization: "Homi Bhabha Cancer Hospital",
      rating: 5,
      avatar: "/avatars/doctor-2.png"
    },
    {
      id: "t3",
      quote: "Archana was my primary nurse during my post-surgery recovery. She treated me with such gentleness, explained every medication, and encouraged me every single day. She truly embodies the spirit of nursing.",
      author: "Savitri Devi",
      role: "Recovered Spine Patient",
      organization: "Nalanda, Bihar",
      rating: 5,
      avatar: "/avatars/patient-1.png"
    }
  ] as Testimonial[]
};
