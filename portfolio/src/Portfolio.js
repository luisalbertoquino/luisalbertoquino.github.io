import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, Phone } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#FBF9E4]">
      {/* Hero Section */}
      <header className="min-h-screen bg-[#122C4F] text-white flex items-center">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-6xl font-bold mb-4">Webmaster & Desarrollador Web</h1>
          <p className="text-xl mb-8">Especialista en soluciones web y sistemas de gestión de contenidos</p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-[#5B88B2] hover:bg-[#122C4F] text-white px-6 py-3 rounded-lg transition">
              Contactar
            </a>
            <a href="#portfolio" className="border border-white hover:bg-white hover:text-[#122C4F] px-6 py-3 rounded-lg transition">
              Ver Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#122C4F] mb-8">Sobre mí</h2>
          <p className="text-lg mb-6">
            Ingeniero de Sistemas especializado en desarrollo web y soluciones low-code. 
            Actualmente trabajo como Webmaster en una institución de educación superior,
            gestionando múltiples sitios web y desarrollando soluciones personalizadas.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#5B88B2] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Experiencia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white text-[#122C4F] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Webmaster</h3>
              <p className="mb-4">Institución de Educación Superior</p>
              <ul className="list-disc pl-6">
                <li>Mantenimiento de sitios web institucionales</li>
                <li>Desarrollo de soluciones WordPress</li>
                <li>Gestión de sistemas OJS</li>
              </ul>
            </div>
            <div className="bg-white text-[#122C4F] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Desarrollador Web Freelance</h3>
              <p className="mb-4">Proyectos Destacados</p>
              <ul className="list-disc pl-6">
                <li>wcms.com.co</li>
                <li>dba.science</li>
                <li>Software contable (prototipo)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#FBF9E4]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#122C4F] mb-8">Habilidades</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#122C4F]">Desarrollo Web</h3>
              <ul className="space-y-2">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>WordPress</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#122C4F]">CMS</h3>
              <ul className="space-y-2">
                <li>WordPress</li>
                <li>OJS</li>
                <li>Gestión de contenidos</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#122C4F]">Otros</h3>
              <ul className="space-y-2">
                <li>SEO</li>
                <li>UI/UX</li>
                <li>Optimización web</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#122C4F] mb-8">Certificaciones</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[#5B88B2] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#122C4F] mb-4">Google</h3>
              <p className="text-gray-600">Certificaciones completadas en Coursera</p>
            </div>
            <div className="border border-[#5B88B2] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#122C4F] mb-4">IBM</h3>
              <p className="text-gray-600">Certificaciones completadas en Coursera</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#122C4F] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Contacto</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <a href="#" className="flex items-center gap-2 hover:text-[#5B88B2] transition">
              <MailIcon />
              <span>correo@ejemplo.com</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-[#5B88B2] transition">
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-[#5B88B2] transition">
              <GithubIcon />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;