import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Palette, Globe, BookOpen, ImageIcon, Type, Mic, Film,
  Sun, Moon, ArrowRight, Mail, Phone, MapPin, Menu, X,
  Code, Smartphone, Database, Cloud, Shield, Users, Rocket,
  ChevronRight, Star, Award, TrendingUp, Zap, Sparkles
} from "lucide-react";

const COMPANY = {
  name: "InspireInk Technologies",
  brand: "a brand of Revivea LLC",
  address: "14539 Overland Hollow Drive, Houston, TX 77069",
  phone: "+1 (713) 564-1614",
  email: "info@inspireinktech.com",
  tagline: "Igniting Creativity Through Innovative Digital Solutions",
  services: [
    { icon: Code, name: "Custom Software Development", desc: "Tailored solutions that scale with your business", color: "#8B5CF6" },
    { icon: Globe, name: "Web Design & Development", desc: "Modern, responsive websites that drive results", color: "#3B82F6" },
    { icon: Smartphone, name: "Mobile App Development", desc: "iOS & Android apps with seamless user experience", color: "#10B981" },
    { icon: Database, name: "Enterprise Solutions", desc: "Robust systems for complex business needs", color: "#F59E0B" },
    { icon: Cloud, name: "Cloud & DevOps", desc: "Scalable infrastructure and deployment pipelines", color: "#EF4444" },
    { icon: Shield, name: "Cybersecurity", desc: "Protecting your digital assets with advanced security", color: "#6366F1" },
    { icon: Users, name: "UI/UX Design", desc: "Intuitive interfaces that users love", color: "#EC4899" },
    { icon: Rocket, name: "Digital Transformation", desc: "Modernizing legacy systems for the future", color: "#8B5CF6" },
  ],
  testimonials: [
    { name: "Alex Johnson", role: "CEO, TechCorp", text: "Their team delivered beyond expectations. The software transformed our operations.", rating: 5 },
    { name: "Sarah Miller", role: "CTO, InnovateCo", text: "Professional, timely, and exceeded all our requirements. Highly recommended!", rating: 5 },
    { name: "David Chen", role: "Product Manager", text: "The UX design they created increased our user engagement by 300%.", rating: 5 },
  ],
  stats: [
    { value: "150+", label: "Projects Completed", icon: Rocket },
    { value: "99%", label: "Client Satisfaction", icon: Star },
    { value: "50+", label: "Expert Engineers", icon: Users },
    { value: "24/7", label: "Support", icon: Shield },
  ]
};

export default function ModernSoftwareHouse() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = ["Home", "Services", "Portfolio", "Process", "About", "Contact"];

  return (
    <div style={{
      background: darkMode ? "#0A0A0F" : "#FAFAFF",
      color: darkMode ? "#FFFFFF" : "#111827",
      minHeight: "100vh",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      transition: "background 0.5s ease, color 0.5s ease"
    }}>
      {/* Enhanced Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: darkMode ? "rgba(10, 10, 15, 0.95)" : "rgba(250, 250, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
          padding: "1rem 5%",
          transition: "all 0.3s ease"
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}
          >
            <div style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Sparkles size={20} color="white" />
            </div>
            <div>
              <h1 style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                background: "linear-gradient(90deg, #8B5CF6, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0
              }}>
                InspireInk
              </h1>
              <p style={{ fontSize: "0.7rem", opacity: 0.6, margin: 0 }}>Technologies</p>
            </div>
          </motion.div>

          {!isMobile ? (
            <nav style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  style={{
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "0.95rem",
                    position: "relative",
                    padding: "0.5rem 0"
                  }}
                >
                  {item}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, #8B5CF6, #3B82F6)",
                      borderRadius: "2px"
                    }}
                  />
                </motion.a>
              ))}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                  color: "inherit",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)"
                }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(90deg, #8B5CF6, #3B82F6)",
                  color: "#FFFFFF",
                  padding: "0.75rem 2rem",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                Get Started <ArrowRight size={16} />
              </motion.button>
            </nav>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                  color: "inherit",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                style={{ 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  color: "inherit",
                  padding: "0.5rem"
                }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: darkMode ? "rgba(20, 20, 30, 0.98)" : "rgba(255, 255, 255, 0.98)",
              padding: "2rem",
              marginTop: "1rem",
              borderRadius: "20px",
              backdropFilter: "blur(20px)"
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{ 
                  display: "block", 
                  padding: "1rem", 
                  fontWeight: 600, 
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  color: "inherit",
                  borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`
                }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>

      {/* Enhanced Hero Section - FIXED THEME ISSUE */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 5%",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated Background */}
        <div style={{ position: "absolute", inset: 0 }}>
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              width: "600px",
              height: "600px",
              background: darkMode 
                ? "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0) 70%)"
                : "radial-gradient(circle, rgba(139,92,246,0.05) 0%, rgba(139,92,246,0) 70%)",
              borderRadius: "50%"
            }}
          />
          <motion.div
            animate={{ 
              rotate: -360,
              y: [0, -30, 0]
            }}
            transition={{ 
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              y: { duration: 15, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: "absolute",
              bottom: "10%",
              right: "15%",
              width: "400px",
              height: "400px",
              background: darkMode 
                ? "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)"
                : "radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(59,130,246,0) 70%)",
              borderRadius: "50%"
            }}
          />
          
          {/* Grid Pattern */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: darkMode 
              ? `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`
              : `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>

        <motion.div 
          style={{ 
            opacity: heroOpacity,
            scale: heroScale,
            textAlign: "center", 
            zIndex: 10, 
            maxWidth: "1200px",
            marginTop: "4rem"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))",
              backdropFilter: "blur(10px)",
              padding: "1rem 2rem",
              borderRadius: "50px",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.2)"}`
            }}
          >
            <Sparkles size={16} color="#8B5CF6" />
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#8B5CF6" }}>
              Premier Software Development Agency
            </span>
          </motion.div>

          {/* FIXED: Hero Text with proper theme support */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: isMobile ? "3.5rem" : "5.5rem",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #10B981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            Building Digital
            <br />
            <span style={{
              background: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #3B82F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent"
            }}>Experiences</span> That Inspire
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: "1.3rem",
              maxWidth: "700px",
              margin: "0 auto 3rem",
              color: darkMode ? "#94A3B8" : "#6B7280",
              lineHeight: 1.6
            }}
          >
            We craft innovative software solutions that drive growth, enhance efficiency, 
            and create exceptional user experiences for forward-thinking businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                color: "#FFFFFF",
                padding: "1.2rem 3rem",
                borderRadius: "16px",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "0 20px 40px rgba(139,92,246,0.3)"
              }}
            >
              Start Project <Rocket size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.9)",
                color: darkMode ? "#FFFFFF" : "#111827",
                padding: "1.2rem 3rem",
                borderRadius: "16px",
                border: `1px solid ${darkMode ? "rgba(255,255,255,0.2)" : "rgba(139,92,246,0.2)"}`,
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                backdropFilter: "blur(10px)",
                boxShadow: darkMode ? "none" : "0 10px 30px rgba(0,0,0,0.05)"
              }}
            >
              View Portfolio <ChevronRight size={20} />
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              marginTop: "6rem",
              flexWrap: "wrap"
            }}
          >
            {COMPANY.stats.map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center", marginBottom: "0.5rem" }}>
                  <stat.icon size={24} color="#8B5CF6" />
                  <h3 style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: 800, 
                    margin: 0, 
                    background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent"
                  }}>
                    {stat.value}
                  </h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)", margin: 0 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Services Section */}
      <section style={{ padding: "8rem 5%", background: darkMode ? "#0F1117" : "#FAFAFF" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "6rem" }}
          >
            <div style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))",
              padding: "0.75rem 1.5rem",
              borderRadius: "50px",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem"
            }}>
              <Zap size={16} color="#8B5CF6" />
              <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#8B5CF6" }}>OUR EXPERTISE</span>
            </div>
            <h2 style={{ 
              fontSize: "3.5rem", 
              fontWeight: 800, 
              marginBottom: "1.5rem", 
              color: darkMode ? "#FFFFFF" : "#111827" 
            }}>
              Comprehensive <span style={{ 
                background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent"
              }}>Software Solutions</span>
            </h2>
            <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto", color: darkMode ? "#94A3B8" : "#6B7280" }}>
              End-to-end software development services tailored to your business needs
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {COMPANY.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setActiveService(i)}
                style={{
                  background: darkMode ? "rgba(30, 30, 40, 0.6)" : "rgba(255, 255, 255, 0.9)",
                  borderRadius: "24px",
                  padding: "2.5rem",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
                  boxShadow: i === activeService 
                    ? darkMode 
                      ? "0 30px 60px rgba(139,92,246,0.2)" 
                      : "0 30px 60px rgba(139,92,246,0.15)"
                    : darkMode 
                      ? "0 10px 30px rgba(0,0,0,0.2)" 
                      : "0 10px 30px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
                  borderRadius: "4px 4px 0 0"
                }} />
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    marginBottom: "2rem",
                    color: service.color,
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(139,92,246,0.05)",
                    borderRadius: "16px"
                  }}
                >
                  <service.icon size={32} />
                </motion.div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: darkMode ? "#FFFFFF" : "#111827" }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.6, color: darkMode ? "#94A3B8" : "#6B7280", marginBottom: "1.5rem" }}>
                  {service.desc}
                </p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: service.color,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.95rem"
                  }}
                >
                  Learn more <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: "8rem 5%", background: darkMode ? "linear-gradient(135deg, #0A0A0F, #0F1117)" : "linear-gradient(135deg, #FAFAFF, #F3F4F6)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "6rem" }}
          >
            <div style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))",
              padding: "0.75rem 1.5rem",
              borderRadius: "50px",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem"
            }}>
              <Star size={16} color="#8B5CF6" />
              <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#8B5CF6" }}>CLIENT TESTIMONIALS</span>
            </div>
            <h2 style={{ 
              fontSize: "3.5rem", 
              fontWeight: 800, 
              marginBottom: "1.5rem", 
              color: darkMode ? "#FFFFFF" : "#111827" 
            }}>
              Trusted by <span style={{ 
                background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent"
              }}>Industry Leaders</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {COMPANY.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{
                  background: darkMode ? "rgba(30, 30, 40, 0.6)" : "rgba(255, 255, 255, 0.9)",
                  borderRadius: "24px",
                  padding: "2.5rem",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
                  boxShadow: darkMode 
                    ? "0 20px 40px rgba(0,0,0,0.2)" 
                    : "0 20px 40px rgba(0,0,0,0.05)"
                }}
              >
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={20} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: darkMode ? "#94A3B8" : "#6B7280", marginBottom: "2rem", fontStyle: "italic" }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.25rem", color: darkMode ? "#FFFFFF" : "#111827" }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "#8B5CF6", margin: 0 }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section style={{ padding: "8rem 5%", background: darkMode ? "#0A0A0F" : "#FAFAFF" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))",
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.5rem"
              }}>
                <Mail size={16} color="#8B5CF6" />
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#8B5CF6" }}>GET IN TOUCH</span>
              </div>
              <h2 style={{ 
                fontSize: "3.5rem", 
                fontWeight: 800, 
                marginBottom: "1.5rem", 
                color: darkMode ? "#FFFFFF" : "#111827" 
              }}>
                Let's Build Something <span style={{ 
                  background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}>Amazing</span>
              </h2>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: darkMode ? "#94A3B8" : "#6B7280", marginBottom: "3rem" }}>
                Ready to transform your ideas into reality? Contact us for a free consultation.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Phone size={20} color="#8B5CF6" />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9rem", color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)", margin: 0 }}>Phone</p>
                    <a href={`tel:${COMPANY.phone}`} style={{ fontSize: "1.2rem", fontWeight: 600, color: darkMode ? "#FFFFFF" : "#111827", textDecoration: "none" }}>
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Mail size={20} color="#8B5CF6" />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9rem", color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)", margin: 0 }}>Email</p>
                    <a href={`mailto:${COMPANY.email}`} style={{ fontSize: "1.2rem", fontWeight: 600, color: darkMode ? "#FFFFFF" : "#111827", textDecoration: "none" }}>
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <MapPin size={20} color="#8B5CF6" />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9rem", color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)", margin: 0 }}>Location</p>
                    <p style={{ fontSize: "1.1rem", fontWeight: 600, margin: 0, color: darkMode ? "#FFFFFF" : "#111827" }}>{COMPANY.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: darkMode ? "rgba(30, 30, 40, 0.6)" : "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                padding: "3rem",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
                boxShadow: darkMode 
                  ? "0 20px 40px rgba(0,0,0,0.2)" 
                  : "0 20px 40px rgba(0,0,0,0.05)"
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <input 
                  placeholder="First Name" 
                  style={{ 
                    padding: "1rem 1.5rem", 
                    borderRadius: "12px", 
                    border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.2)"}`, 
                    background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
                    color: "inherit",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease"
                  }}
                />
                <input 
                  placeholder="Last Name" 
                  style={{ 
                    padding: "1rem 1.5rem", 
                    borderRadius: "12px", 
                    border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.2)"}`, 
                    background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
                    color: "inherit",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease"
                  }}
                />
              </div>
              <input 
                placeholder="Email Address" 
                type="email"
                style={{ 
                  padding: "1rem 1.5rem", 
                  borderRadius: "12px", 
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.2)"}`, 
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
                  color: "inherit",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
              />
              <input 
                placeholder="Company" 
                style={{ 
                  padding: "1rem 1.5rem", 
                  borderRadius: "12px", 
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.2)"}`, 
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
                  color: "inherit",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
              />
              <textarea 
                placeholder="Tell us about your project..." 
                rows={6}
                style={{ 
                  padding: "1rem 1.5rem", 
                  borderRadius: "12px", 
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.2)"}`, 
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
                  color: "inherit",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "vertical",
                  minHeight: "150px",
                  transition: "all 0.3s ease"
                }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                  color: "#FFFFFF",
                  padding: "1.2rem",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  boxShadow: "0 20px 40px rgba(139,92,246,0.3)",
                  marginTop: "1rem"
                }}
              >
                Send Message <ArrowRight size={20} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: darkMode ? "#000000" : "#111827",
        color: "#FFFFFF",
        padding: "4rem 5%",
        borderTop: "1px solid rgba(255,255,255,0.1)"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3rem", flexWrap: "wrap", gap: "3rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Sparkles size={20} color="white" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>InspireInk</h3>
                  <p style={{ fontSize: "0.8rem", opacity: 0.7, margin: 0 }}>Technologies</p>
                </div>
              </div>
              <p style={{ fontSize: "1rem", maxWidth: "400px", opacity: 0.7, lineHeight: 1.6 }}>
                Building innovative software solutions that empower businesses and create exceptional digital experiences.
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem" }}>Quick Links</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {["Services", "Portfolio", "About Us", "Careers", "Blog"].map((item) => (
                    <a key={item} href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem" }}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem" }}>Connect</h4>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
                    <a key={social} href="#" style={{ 
                      width: "40px", 
                      height: "40px", 
                      background: "rgba(255,255,255,0.1)", 
                      borderRadius: "8px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      color: "white",
                      textDecoration: "none"
                    }}>
                      {social.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ fontSize: "0.9rem", opacity: 0.7, margin: 0 }}>
              © 2024 InspireInk Technologies. {COMPANY.brand}. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <a href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", textDecoration: "none" }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}