import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Archana Kumari | B.Sc. Nursing Professional Portfolio & 3D Experience',
  description:
    'Explore the 3D animated portfolio of Archana Kumari, a B.Sc. Nursing professional with specialized clinical experience at Nalanda Bone & Spine Centre and Homi Bhabha Cancer Hospital & Research Centre, Bihar.',
  keywords: [
    'Nursing Portfolio',
    'B.Sc Nursing Professional',
    'Staff Nurse Bihar',
    'Oncology Nurse',
    'Healthcare Professional India',
    'Nursing Career Portfolio',
    'Archana Kumari',
    'Aryabhatt Knowledge University Nursing',
    'Orthopedic Nurse Nalanda',
    'Chemotherapy Nurse Muzaffarpur',
  ],
  authors: [{ name: 'Archana Kumari' }],
  creator: 'Archana Kumari',
  publisher: 'Archana Kumari',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Archana Kumari | B.Sc. Nursing Professional Portfolio',
    description:
      'Dedicated to Compassionate Patient Care and Healthcare Excellence. 3D animated portfolio of Archana Kumari.',
    siteName: 'Archana Kumari Nursing Portfolio',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archana Kumari | B.Sc. Nursing Professional Portfolio',
    description:
      'Dedicated to Compassionate Patient Care and Healthcare Excellence. 3D interactive nursing portfolio.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Archana Kumari',
    jobTitle: 'B.Sc. Nursing Professional',
    description:
      'B.Sc. Nursing graduate with clinical experience at Nalanda Bone & Spine Centre and Homi Bhabha Cancer Hospital & Research Centre.',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Aryabhatt Knowledge University',
    },
    knowsAbout: [
      'Oncology Nursing',
      'Orthopedic Spine Care',
      'Chemotherapy Administration',
      'Medical Surgical Nursing',
      'Infection Control',
      'Pediatric Nursing',
      'Critical Care Nursing',
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Bihar',
      addressCountry: 'India',
    },
  };

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#030712] text-slate-100 antialiased font-sans selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
