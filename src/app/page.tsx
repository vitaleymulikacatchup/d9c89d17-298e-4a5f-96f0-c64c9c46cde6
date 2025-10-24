"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, Heart, Users, Zap, Shield, MessageCircle, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="DentalCare"
          button={{
            text: "Book Appointment",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Your Trusted Dental Care Partner"
          description="Experience comprehensive dental care with our skilled team. From routine cleanings to advanced procedures, we're here for your smile."
          tag="Excellence in Dental Care"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Appointment",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern DentalCare clinic interior"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About DentalCare"
          description="We've been serving our community with exceptional dental care for over 15 years, combining modern technology with compassionate treatment."
          tag="Our Story"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Experienced Team",
              description: "Board-certified dentists with decades of combined experience",
              icon: Users
            },
            {
              title: "Modern Technology",
              description: "State-of-the-art equipment for precise and comfortable treatments",
              icon: Zap
            },
            {
              title: "Patient-Centered Care",
              description: "Personalized treatment plans tailored to your unique needs",
              icon: Heart
            }
          ]}
          imageSrc="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional dental equipment and technology"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Dental Services"
          description="Comprehensive dental care services designed to keep your smile healthy and beautiful"
          tag="Services"
          tagIcon={Shield}
          features={[
            {
              title: "General Dentistry",
              description: "Routine cleanings, fillings, and preventive care to maintain optimal oral health",
              imageSrc: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dental examination and cleaning"
            },
            {
              title: "Cosmetic Dentistry",
              description: "Teeth whitening, veneers, and smile makeovers to enhance your appearance",
              imageSrc: "https://images.pexels.com/photos/15694640/pexels-photo-15694640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Teeth whitening procedure"
            },
            {
              title: "Orthodontics",
              description: "Braces and clear aligners to straighten teeth and improve your bite",
              imageSrc: "https://images.pexels.com/photos/6529121/pexels-photo-6529121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Orthodontic braces treatment"
            },
            {
              title: "Oral Surgery",
              description: "Wisdom tooth extraction and other surgical procedures with expert care",
              imageSrc: "https://images.pexels.com/photos/6812520/pexels-photo-6812520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Oral surgery consultation"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Patients Say"
          description="Real experiences from our valued patients who trust us with their dental care"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              testimonial: "The team at DentalCare made my root canal completely painless. Their gentle approach and modern equipment made all the difference.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Teacher",
              testimonial: "I've been coming here for 5 years and the service is consistently excellent. They truly care about their patients' comfort and health.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Business Owner",
              testimonial: "My smile transformation exceeded all expectations. The cosmetic dentistry work was absolutely perfect and the staff was amazing.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Engineer",
              testimonial: "Professional, punctual, and thorough. The cleanings are comprehensive and they always explain everything clearly.",
              imageSrc: "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our dental services and practice"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How often should I visit the dentist?",
              content: "We recommend regular dental checkups every 6 months for optimal oral health. However, some patients may need more frequent visits based on their individual needs."
            },
            {
              id: "2",
              title: "Do you accept dental insurance?",
              content: "Yes, we accept most major dental insurance plans. Our staff will help verify your benefits and maximize your coverage for treatments."
            },
            {
              id: "3",
              title: "What should I expect during my first visit?",
              content: "Your first visit includes a comprehensive exam, digital X-rays if needed, and a consultation to discuss your dental health goals and any concerns."
            },
            {
              id: "4",
              title: "Do you offer emergency dental services?",
              content: "Yes, we provide emergency dental care for urgent situations. Call our office and we'll do our best to see you the same day for dental emergencies."
            },
            {
              id: "5",
              title: "Are your treatments painful?",
              content: "We use modern techniques and anesthesia to ensure your comfort during all procedures. Most patients experience minimal to no discomfort during treatment."
            },
            {
              id: "6",
              title: "What payment options do you accept?",
              content: "We accept cash, credit cards, dental insurance, and offer flexible payment plans to make dental care affordable for all our patients."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Schedule Your Appointment"
          description="Ready to experience exceptional dental care? Contact us today to book your appointment or ask any questions."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "service",
              type: "text",
              placeholder: "Service Needed",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your dental needs or any specific concerns...",
            rows: 4,
            required: false
          }}
          buttonText="Book Appointment"
          imageSrc="https://images.pexels.com/photos/18199972/pexels-photo-18199972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional dental team at DentalCare clinic"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "General Dentistry",
                  href: "services"
                },
                {
                  label: "Cosmetic Dentistry",
                  href: "services"
                },
                {
                  label: "Orthodontics",
                  href: "services"
                },
                {
                  label: "Oral Surgery",
                  href: "services"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Practice",
                  href: "about"
                },
                {
                  label: "Meet the Team",
                  href: "about"
                },
                {
                  label: "Patient Reviews",
                  href: "testimonials"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book Appointment",
                  href: "contact"
                },
                {
                  label: "Emergency Care",
                  href: "contact"
                },
                {
                  label: "Insurance",
                  href: "faq"
                },
                {
                  label: "Payment Options",
                  href: "faq"
                }
              ]
            }
          ]}
          copyrightText="© 2025 DentalCare. Your trusted dental care partner."
        />
      </div>
    </ThemeProvider>
  );
}