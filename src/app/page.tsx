"use client"

import { ArrowRight, Target, Gem, Eye, BookOpen, MapPin, Clock } from "lucide-react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  
  

  useEffect(() => {
    
  }, [])

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
        {/* HERO SECTION */}
        <section id="hero" className="relative w-full min-h-[80vh] flex items-center justify-center text-center overflow-hidden py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img alt="Fondo institucional" className="brightness-50 object-cover w-full h-full" src="https://sistema-web-winnetka.vercel.app/images/Fondo.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40"></div>
          </motion.div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="container relative z-10 px-4 py-16 text-white mx-auto"
          >
            <motion.h1 variants={fadeUpVariant} className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              El futuro empieza en Winnetka.
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
              Con más de 72 años de trayectoria, formamos líderes íntegros en la fe, el saber y el arte, guiados por la excelencia y los valores.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full sm:w-auto shadow-lg transition-transform hover:-translate-y-1" href="/pre-registration">
                Preinscribirse Ahora <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input bg-background/10 backdrop-blur-md h-11 px-8 w-full sm:w-auto text-white hover:bg-white/20 transition-transform hover:-translate-y-1" href="#about">
                Conoce nuestra propuesta
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center"
            >
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Nuestro Compromiso Educativo</h2>
              <p className="mt-4 text-lg text-muted-foreground">Una base sólida para un futuro exitoso.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            >
              <div className="space-y-8 flex flex-col justify-between">
                <motion.div variants={fadeUpVariant} className="rounded-lg border text-card-foreground shadow-sm text-center bg-background transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 h-full">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-semibold leading-none tracking-tight font-headline mt-4">Misión</div>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground">Somos una Comunidad Educativa Católica que brinda formación integral de niños y jóvenes, basada en el desarrollo de competencias, principios y valores Winnetkinos que les permitan afrontar los desafíos que le presente la vida.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="rounded-lg border text-card-foreground shadow-sm text-center bg-background transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 h-full">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <Gem className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-semibold leading-none tracking-tight font-headline mt-4">Valores</div>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground">Respeto, Responsabilidad, Honestidad, Solidaridad y Búsqueda constante de la excelencia.</p>
                  </div>
                </motion.div>
              </div>
              <motion.div variants={fadeUpVariant} className="h-full">
                <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none"></div>
                  <img alt="Estudiantes colaborando" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://sistema-web-winnetka.vercel.app/images/valores.png" />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            >
              <motion.div variants={fadeUpVariant} className="rounded-lg border text-card-foreground shadow-sm text-center bg-background transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-semibold leading-none tracking-tight font-headline mt-4">Visión</div>
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-justify">
                    Al 2025, deseamos ser una institución educativa líder a nivel regional que brinde un servicio de excelencia académica que responda a las demandas y tendencias educativas actuales, formando líderes en la fe, letras, ciencias y artes tomando como eje el pensamiento crítico, la creatividad, el emprendimiento...
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4 self-center">
                    Ver más
                  </button>
                </div>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="rounded-lg border text-card-foreground shadow-sm text-center bg-background transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-semibold leading-none tracking-tight font-headline mt-4">Historia</div>
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-justify">
                    El CEP Winnetka fue fundado en Chaclacayo en 1953 y desde 1980 está bajo la dirección de los Misioneros de los Santos Apóstoles, guiados por el lema “Humanizar y Evangelizar”. Desde sus inicios, el colegio ha promovido una educación personalizada, basada en la idea de que “no hay alumnos malos,...
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline h-10 px-4 py-2 mt-4 self-center">
                    Ver más
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* LEVELS SECTION */}
        <section id="levels" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center"
            >
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Niveles Educativos</h2>
              <p className="mt-4 text-lg text-muted-foreground">Acompañamos a nuestros estudiantes en cada etapa de su crecimiento.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeUpVariant} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
                <div className="flex flex-col space-y-1.5 p-0">
                  <div className="relative h-48 w-full overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                    <img alt="Nivel inicial" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="https://sistema-web-winnetka.vercel.app/images/INICIAL.jpg" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="font-semibold tracking-tight font-headline text-xl text-primary">Nivel Inicial</div>
                  <div className="text-muted-foreground mt-2 text-base flex-1">Una base sólida y divertida para los más pequeños, fomentando la socialización y el aprendizaje a través del juego.</div>
                </div>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
                <div className="flex flex-col space-y-1.5 p-0">
                  <div className="relative h-48 w-full overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                    <img alt="Nivel primaria" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="https://sistema-web-winnetka.vercel.app/images/PRIMARIA.jpg" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="font-semibold tracking-tight font-headline text-xl text-primary">Nivel Primaria</div>
                  <div className="text-muted-foreground mt-2 text-base flex-1">Desarrollo de habilidades fundamentales, pensamiento crítico y curiosidad intelectual en un ambiente de apoyo.</div>
                </div>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
                <div className="flex flex-col space-y-1.5 p-0">
                  <div className="relative h-48 w-full overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                    <img alt="Nivel secundaria" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="https://sistema-web-winnetka.vercel.app/images/Secundaria.jpg" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="font-semibold tracking-tight font-headline text-xl text-primary">Nivel Secundaria</div>
                  <div className="text-muted-foreground mt-2 text-base flex-1">Preparación para los desafíos académicos y personales del futuro, con un enfoque en el liderazgo y la autonomía.</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center"
            >
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Nuestra Comunidad en Imágenes</h2>
              <p className="mt-4 text-lg text-muted-foreground">Un vistazo a la vida en Winnetka.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                "https://sistema-web-winnetka.vercel.app/images/Evento.jpg",
                "https://sistema-web-winnetka.vercel.app/images/Botanica.png",
                "https://sistema-web-winnetka.vercel.app/images/Recreo.jpg",
                "https://sistema-web-winnetka.vercel.app/images/Biblioteca.png",
                "https://sistema-web-winnetka.vercel.app/images/clasesArte.jpg",
                "https://sistema-web-winnetka.vercel.app/images/EventoDeportivo.jpg"
              ].map((src, i) => (
                <motion.div key={i} variants={fadeUpVariant} className="border bg-card text-card-foreground shadow-sm relative overflow-hidden aspect-video rounded-lg group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  <img alt={`Galería ${i + 1}`} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src={src} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* LOCATION SECTION */}
        <section id="location" className="py-20 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center"
            >
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Encuéntranos</h2>
              <p className="mt-4 text-lg text-muted-foreground">Estamos ubicados en el corazón de la ciudad, con fácil acceso.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <motion.div variants={fadeUpVariant} className="rounded-lg overflow-hidden shadow-lg aspect-video ring-1 ring-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.756775137518!2d-76.76758876177877!3d-11.976126949768632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c38a0f558d6b%3A0x55df199ebbb71fbc!2sColegio%20Winnetka!5e1!3m2!1ses-419!2spe!4v1751175257747!5m2!1ses-419!2spe" className="w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </motion.div>
              <div className="space-y-8">
                <motion.div variants={fadeUpVariant} className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-full mt-1 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Nuestra Dirección</h3>
                    <p className="text-muted-foreground text-base mt-1">Moreras 450, Chaclacayo 15023, Lima, Perú</p>
                    <a href="https://maps.app.goo.gl/UkwFoRb7sNvZZfj29" className="text-sm text-primary hover:underline mt-2 inline-flex items-center gap-1 font-medium">Ver en Google Maps <ArrowRight className="w-3 h-3" /></a>
                  </div>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-full mt-1 shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Horarios de Atención</h3>
                    <ul className="text-muted-foreground space-y-2 mt-2 text-base">
                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary/60"></span><strong>Secretaría:</strong> L-V de 8:00 a.m. a 4:00 p.m.</li>
                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary/60"></span><strong>Admisión:</strong> L-V de 9:00 a.m. a 1:00 p.m.</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
    </>
      

      
      
    
  )
}
