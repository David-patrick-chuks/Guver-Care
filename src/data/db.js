import app from "/pictures/appointmenytsch.png";
import med from "/pictures/meditationrem.png";
import vconsult from "/pictures/virtualconsul.png";
import hrec from "/pictures/healthrec.png";
import repat from "/pictures/remotehandling.png";
import specref from "/pictures/specref.png";
import refrill from "/pictures/prescription.png";
import insight from "/pictures/Health .png";
import labtest from "/pictures/labtest.png";
import healthdata from "/pictures/healthdata.png";
import { RiHome7Line, RiCapsuleLine, RiLogoutBoxLine } from "react-icons/ri";
import { CiCircleCheck, CiStethoscope } from "react-icons/ci";
import { MdWifi } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa6";
import { FiFileMinus, FiSettings } from "react-icons/fi";
import { TbHelpSquare } from "react-icons/tb";
import { PiSunHorizonBold } from "react-icons/pi";
import { HiOutlineCloud } from "react-icons/hi";
import { BiSolidUserDetail } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

export const medhead = [
  "Name of Diseases",
  "date",
  "Medical Officer",
  "Result Status",
  "Taken Time",
];

export const medbody = [
  {
    name: "Blood pressure",
    date: "15/09/2024",
    medoff: "DR.uthman",
    stat: "Pending",
    time: "2 hrs",
  },
  {
    name: "Heart Disease",
    date: "19/05/2024",
    medoff: "DR.jane",
    stat: "Pending",
    time: "1.25 hrs",
  },
  {
    name: "Glucose level",
    date: "24/04/2024",
    medoff: "DR.fridaus",
    stat: "completed ",
    time: "20 mins ",
  },
  {
    name: "Body temperature",
    date: "27/08/2024",
    medoff: "DR.aliyah",
    stat: "Pending",
    time: "60 mins",
  },
];

export const updateabt = [
  {
    pic: "/pictures/webinar.png",
    head: "WEBINAR",
    desc: "Virtual Consultations 101: What to Expect",
    down: "Learn More",
  },
  {
    pic: "/pictures/news.png",
    head: "NEWS",
    desc: "Telemedicine Usage Surges Globally",
    down: "Learn More",
  },
  {
    pic: "/pictures/blog.png",
    head: "BLOG",
    desc: "5 Tips for Managing Chronic Illness with Telemedicine",
    down: "Learn More",
  },
];

export const creates = [
  { icon: BiSolidUserDetail, head: "Create Account" },
  { icon: RiProfileLine, head: "Complete Profile" },
  { icon: IoSettingsOutline, head: "Setting" },
];

export const Presdata = [
  {
    drug: "Hydrocodone/Acetaminophen 5/325mg",
    dosage: "(X1) once daily",
  },
  { drug: "Ibuprofen 600mg", dosage: "(X1) twice daily" },
  { drug: "Amoxicillin 500mg", dosage: "(X1) twice daily" },
];

export const aboutusoff = [
  {
    head: "Virtual Health Consultation",
    desc: "Connect with doctors and specialist for live video consultation from anywhere.",
    but: "Book a consultation",
  },
  {
    head: "Secure Health Records",
    desc: "Access, store, and share your medical records securely through our platform.",
    but: "Manage Records",
  },
  {
    head: "Real time Health tracking",
    desc: "Monitor key health metrics such as blood pressure, glucose, and health rate using integrated devices.",
    but: "Start monitoring",
  },
  {
    head: "Easy appointment scheduling",
    desc: "Seamlessly book appointments with healthcare providers at your convenience.",
    but: " Schedule now",
  },
];

export const Presec = [
  {
    icon: PiSunHorizonBold,
    time: "8:00am",
    drug1: "Ibuprofen 600mg X1",
    drug2: "Amoxicillin 500mg X1 ",
    drug3: "Hydrocodone/Acetaminophen 5/325mg X1",
  },
  {
    icon: PiSunHorizonBold,
    time: "1:00pm",
    drug1: "Ibuprofen 600mg X2",
    drug2: "Amoxicillin 500mg X1 ",
  },
  {
    icon: HiOutlineCloud,
    time: "8:00pm",
    drug1: "Ibuprofen 600mg X1",
    drug2: "Amoxicillin 500mg X1 ",
  },
];
export const NavBarLinks = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/service",
    label: "Service",
  },
  {
    id: 3,
    path: "/about-us",
    label: "About Us",
  },
  {
    id: 4,
    path: "/contact-us",
    label: "Contact Us",
  },
];

export const medication = [
  {
    med: "Lisinopril (10mg)",
    description:
      "Take with food and avoid drinking alcohol for 3 hours after used.",
    refill: "Last Refill 21/01/2024",
  },
  {
    med: "Lisinopril (10mg)",
    description:
      "Take with food and avoid drinking alcohol for 3 hours after used.",
    refill: "Last Refill 21/01/2024",
  },
  {
    med: "Lisinopril (10mg)",
    description:
      "Take with food and avoid drinking alcohol for 3 hours after used.",
    refill: "Last Refill 21/01/2024",
  },
];
export const records = [
  {
    header: ["03", "Caries", "Tooth Filling", "Dr Grace Obeh"],
    message: "Advance decay",
    status: "done",
  },
  {
    header: ["15", "Caries", "Tooth Filling", "Dr Grace Obeh"],
    reason: "Not Enough Time",
    message: "Delay in pulp",
    status: "pending",
  },
];

export const data = [
  {
    date: {
      day: 23,
      dayEn: "Sun",
    },
    time: "7:30AM",
    profile: {
      img: "/pictures/profile1.png",
      role: "General Check-UP",
      name: "Dr. Joy Micheal",
    },
  },
  {
    date: {
      day: 23,
      dayEn: "Sun",
    },
    time: "7:30AM",
    profile: {
      img: "/pictures/profile1.png",
      role: "General Check-UP",
      name: "Dr. Joy Micheal",
    },
  },
  {
    date: {
      day: 23,
      dayEn: "Sun",
    },
    time: "7:30AM",
    profile: {
      img: "/pictures/profile1.png",
      role: "General Check-UP",
      name: "Dr. Joy Micheal",
    },
  },
  {
    date: {
      day: 23,
      dayEn: "Sun",
    },
    time: "7:30AM",
    profile: {
      img: "/pictures/profile1.png",
      role: "General Check-UP",
      name: "Dr. Joy Micheal",
    },
  },
  {
    date: {
      day: 23,
      dayEn: "Sun",
    },
    time: "7:30AM",
    profile: {
      img: "/pictures/profile1.png",
      role: "General Check-UP",
      name: "Dr. Joy Micheal",
    },
  },
];

export const OneDashHome = [
  {
    head: "Good Morning, Jayne",
    desc: "You have 6 Health task for the day",
    img: "/pictures/FlowerDash.png",
  },
];
export const Dashboardhome = [
  {
    icon: RiHome7Line,
    head: "Dashboard",
    path: "dashboard",
  },
  {
    icon: CiCircleCheck,
    head: "Appointment",
    path: "appointment",
  },
  {
    icon: MdWifi,
    head: "Payment",
    path: "payment",
  },

  {
    icon: CiStethoscope,
    head: "Medical test",
    path: "medical",
  },
  {
    icon: FaFileMedical,
    head: "Prescription",
    path: "prescription",
  },
  {
    icon: FiFileMinus,
    head: "Health records",
    path: "records",
  },
  {
    icon: FiSettings,
    head: "General",
    path: "general",
  },
  {
    icon: RiLogoutBoxLine,
    head: "Logout",
    path: "logout",
  },
];

export const servoffsec = [
  {
    img: specref,
    head: "Specialist Referrals",
    desc: "Direct referral to specialists  specific health concerns.",
    last: "Book Appointment",
  },
  {
    img: refrill,
    head: "Prescription Refills",
    desc: "Integration to allow for prescription renewals",
    last: "Book Appointment",
  },
  {
    img: insight,
    head: "Health insights",
    desc: "Health tips and insight base on patient data",
    last: "Book Appointment",
  },
  {
    img: labtest,
    head: "Lab test Booking",
    desc: "Receive results of booked test through the platform",
    last: "Book Appointment",
  },
  {
    img: healthdata,
    head: "Health Data Integration",
    desc: "Integration with wearable device",
    last: "Book Appointment",
  },
];

export const servoff = [
  {
    img: app,
    head: "Appointement Scheduling",
    desc: "Patient can schedule appointement with doctors",
    last: "Book Appointment",
  },
  {
    img: med,
    head: "Medication Reminder",
    desc: "Automated alert Reminder",
    last: "Book Appointment",
  },
  {
    img: vconsult,
    head: "Virtual Consultation",
    desc: "schedule a live video call consultation",
    last: "Book Appointment",
  },
  {
    img: hrec,
    head: "Health Record Management",
    desc: "Secure storage and easy access of health records",
    last: "Book Appointment",
  },
  {
    img: repat,
    head: "Remote Patient Monitoring",
    desc: "Real time Tracking of Vital signs",
    last: "Book Appointment",
  },
];

export const stats = [
  {
    header: "24/7",
    des: "Online Support",
  },
  {
    header: "100+",
    des: "Doctors",
  },
  {
    header: "1M+",
    des: "Active Patients",
  },
];

export const cardstas = [
  {
    icon: "/pictures/covid.png",
    header: "COVID-19 Test",
    des: "Stay updated on local  health guidelines as they can change based on new variants.",
  },
  {
    icon: "/pictures/heart_lungs.png",
    header: "Heart Lung",
    des: " Use air purifiers  if necessary and spend time in nature, away from urban pollutants.",
  },
  {
    icon: "/pictures/supplement.png",
    header: "Supplement",
    des: "Boost Your Health Naturally: Discover the Power of [Supplement ] for Vitality and Wellness!",
  },
  {
    icon: "/pictures/mentalh.png",
    header: "Mental Health",
    des: "Taking care of your mental health is vital for overall well-being.",
  },
];

export const hospitems = [
  {
    universe: "/pictures/universe.png",
    header: "Explore the tools that simplify remote healthcare.",
    link: [
      {
        subhead: "Vital Monitoring Dashboard",
        desc: "Track heart rate, blood pressure, glucose levels, and more",
      },
      {
        subhead: "Appointment Scheduling",
        desc: "Schedule virtual doctor consultations at your convenience",
      },
      {
        subhead: "Consult live with doctors and share real-time data",
        desc: "Consult live with doctors and share real-time data",
      },
      {
        subhead: "Medication Reminders",
        desc: "Get alerts for doses and refill prescriptions effortlessly",
      },
      {
        subhead: "Health Records Management",
        desc: "Store, manage, and share your medical records securely",
      },
    ],
  },
];
export const steps = [
  {
    universe: "/pictures/medtablet.png",
    header: "Follow these simple steps to access seamless healthcare.",
    sub: "Steps:",
    link: [
      { subhead: "Create an Account", desc: "Set up your health profile" },
      {
        subhead: "Connect Devices",
        desc: "Sync wearables or manually input data",
      },
      { subhead: "Book Appointments", desc: "Schedule virtual consultations" },
      {
        subhead: "Track Health",
        desc: "Monitor vitals and manage health records",
      },
    ],
    button: "Book Consultation",
  },
];

export const abtdat = [
  {
    universe: "/pictures/doctab.png",
    header:
      "We simplify healthcare through technology, connecting patients with doctors remotely.",
    link: [
      {
        subhead: "Comprehensive Care",
        desc: "From monitoring vitals to managing records, our platform provides a complete healthcare solution",
      },
      {
        subhead: "Real-Time Consultations",
        desc: "Talk to doctors in real-time, share data, and receive care without leaving home",
      },
      {
        subhead: "Secure and Accessible",
        desc: "Your health information is safe and always available, no matter where you are",
      },
    ],
    button: "Book Consultation",
  },
];

export const footer = [
  {
    header: "Nav link 1",
    onesub: "Home",
    twosub: "Food Delivery",
    threesub: "Courier",
    foursub: "Track Order",
    fivesub: "Account",
  },
  {
    header: "Nav link 2",
    onesub: "About Us",
    twosub: "FAQs",
    threesub: "Terms of Services",
    foursub: "Privacy Policy",
  },
  {
    header: "Support",
    onesub: "Support Center",
    twosub: "Contact Us",
  },
];

export const testimonials = [
  {
    teadoc: "/pictures/teadoc.png",
    header: "Hear from patients who trust us for their healthcare.",
    link: [
      {
        subhead: "Jane D.",
        desc: "This platform makes managing my condition easy from home",
      },
      {
        subhead: "Michael S.",
        desc: "Sharing real-time data with my doctor gives me peace of mind",
      },
      {
        subhead: "Michael S.",
        desc: "Sharing real-time data with my doctor gives me peace of mind",
      },
      {
        subhead: "Michael S.",
        desc: "Sharing real-time data with my doctor gives me peace of mind",
      },
      {
        subhead: "Michael S.",
        desc: "Sharing real-time data with my doctor gives me peace of mind",
      },
    ],
  },
];

export const ansdata = [
  {
    question: "1. How do I book a Virtual Consultation?",
    answer:
      "You can book a Virtual consultation by logging in, selecting a healthcare provider and choosing an available appointment time.",
  },
  {
    question: "2. Is my personal health data secure on this platform?",
    answer:
      "Yes, we ensure that all health data is protected with top-level encryption and comply with healthcare regulation for privacy and security.",
  },
  {
    question: "3. Can i upload and share my medical records with my doctor?",
    answer:
      "Yes, you can securely upload medical records and share them with your doctor during or before your consultation.",
  },
  {
    question: "4. What type of health data can i track on this platform?",
    answer:
      "You can monitor vital signs such as heart rate, blood pressure, and glucose levels by manually inputting data or syncing your wearable device.",
  },
  {
    question: "5. Can i get reminders for taking my medications ?",
    answer:
      "Yes, the platform allows you to set medication schedules, and you will receive notification foe medication reminders.",
  },
];
