import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";

// Hero Section Component
const HeroSection = () => (
  <section className="relative h-[80vh] overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-700 ease-out"
      style={{
        backgroundImage: 'url("/imgs/background.webp")',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
    <div className="relative h-full flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Recursos Humanos Especializados
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
          Transformando el futuro del trabajo con soluciones innovadoras
        </p>
      </div>
    </div>
  </section>
);

// About Section Component
const AboutSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Quienes somos</h2>
      <div className="border-b-2 border-blue-500 w-24 mx-auto mb-12"></div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/imgs/WeDo.webp"
            alt="About us"
            width={768}
            height={512}
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div>
          <p className="text-lg leading-relaxed text-gray-700">
            Somos un equipo de profesionales con más de 20 años de trayectoria en el mercado internacional, que se dedica a la Consultoría Integral, Desarrollo de Nuevos Mercados, y Búsqueda Ejecutiva, brindando diagnósticos de situación claros y herramientas efectivas para lograr el cumplimiento de los objetivos de la compañía.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Staff Section Component
const StaffSection = () => {
  const divContainerStyle = "bg-white p-8 rounded-xl w-full max-w-[300px] shadow-lg transform hover:scale-105 transition-transform duration-300"
  const imgDivStyle = "relative overflow-hidden mb-6 h-64 w-full rounded-md"
  const nameStyle = "text-2xl font-bold mb-3 text-center"

  return (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Nuestro Equipo</h2>
      <div className="border-b-2 border-blue-500 w-24 mx-auto mb-16"/>
      <div className="flex flex-wrap justify-around items-stretch gap-12">
        <div className={divContainerStyle}>
          <div className={imgDivStyle}>
            <Image
              src="/imgs/romina.webp"
              alt="Romina Pellegrino"
              fill
              className="object-contain"
            />
          </div>
          <h3 className={nameStyle}>Romina Pellegrino</h3>
          <div className="text-gray-600 text-center">
            <p className="inline">
            Socia Fundadora 
            </p>
            <p className="hidden sm:inline">
              . Licenciada en Recursos Humanos con estudios de Posgrado en Selección por Competencias y Marketing Digital.
            </p>
          </div>
        </div>
        <div className={divContainerStyle}>
          <div className={imgDivStyle}>
            <Image
              src="/imgs/laura.webp"
              alt="Laura Pires"
              fill
              className="object-contain"
            />
          </div>
          <h3 className={nameStyle}>Laura Pires</h3>
          <div className="text-gray-600 text-center">
            <p className="inline">
            Socia Fundadora 
            </p>
            <p className="hidden sm:inline">
              . Licenciada en Psicología con estudios de Posgrado en Terapia Sistémica.
            </p>
          </div>
        </div>
        <div className={divContainerStyle}>
          <div className={imgDivStyle}>
            <Image
              src="/imgs/antonio.webp"
              alt="Antonio Carlos Vaz de Lima"
              fill
              className="object-contain"
            />
          </div>
          <h3 className={nameStyle}>Antonio Carlos Vaz de Lima</h3>
          <div className="text-gray-600 text-center">
            <p className="inline">
            Socio Fundador
            </p>
            <p className="hidden sm:inline">
              . Maestro en Derecho del Trabajo, Filosofía y Letras, Coach Profesional Certificado.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

// Services Section Component
const ServicesSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">¿Qué hacemos?</h2>
      <div className="border-b-2 border-blue-500 w-24 mx-auto mb-12"></div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/imgs/TeamWork.webp"
            alt="Team Work"
            width={612}
            height={408}
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div>
          <p className="text-lg leading-relaxed text-gray-700">
            Brindamos soluciones flexibles y customizadas a organizaciones que se encuentran enfocadas en liderar un cambio en la optimización de los procesos internos, maximizando el recurso humano como capital principal del negocio.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <AboutSection />
        <StaffSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
