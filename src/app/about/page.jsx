import React from 'react';

function AboutMe() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Mis Sueños y Proyecciones en Auco</h1>
        <p className="mt-4 text-lg text-gray-600">
          En esta página, quiero compartir mis aspiraciones profesionales y cómo visualizo mi futuro en Auco. Creo que mi contribución puede ser
          valiosa para la empresa, y aquí te cuento por qué.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">Mis Aspiraciones Profesionales</h2>
          <p className="mt-4 text-lg text-gray-600">
            Vengo trabajando en mi carrera como desarrollador de software. Mi aspiración es continuar creciendo y mejorando mis habilidades técnicas.
            Me encantaría trabajar en proyectos desafiantes que me permitan aprender y crecer como profesional.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">Metas a Corto y Largo Plazo</h2>
          <p className="mt-4 text-lg text-gray-600">
            Mis metas a corto plazo incluyen aprender nuevas tecnologías y frameworks que sean relevantes en la industria. Quiero ser un desarrollador
            versátil y estar al tanto de las últimas tendencias en tecnología.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            A largo plazo, me veo asumiendo roles de liderazgo en proyectos y equipos. Me gustaría contribuir al éxito continuo de Auco y ser parte
            integral de su crecimiento.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">Mi Contribución a la Empresa</h2>
          <p className="mt-4 text-lg text-gray-600">
            Creo que mi pasión por la tecnología y mi compromiso con la excelencia pueden beneficiar a Auco. Estoy dispuesto a colaborar con otros
            miembros del equipo, aportar nuevas ideas y soluciones, y trabajar arduamente para lograr los objetivos de la empresa.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
