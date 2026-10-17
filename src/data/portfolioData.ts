import type { ContactItem, NavItem, PersonalBlock, Project, SkillGroup } from '../types';

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Lenguajes de programación',
    items: [
      { name: 'TypeScript', icon: 'TS', description: 'Base para aplicaciones web robustas y mantenibles.' },
      { name: 'JavaScript', icon: 'JS', description: 'Lógica junto a interacciones y flujo de datos del cliente.' },
      { name: 'HTML5', icon: 'HTML', description: 'Estructura semántica y accesible de interfaces modernas.' },
      { name: 'CSS3', icon: 'CSS', description: 'Estilado visual y diseño adaptable en múltiples dispositivos.' },
    ],
  },
  {
    title: 'Desarrollo frontend',
    items: [
      { name: 'React', icon: '⚛', description: 'Componentes reutilizables y lógica declarativa para interfaces.' },
      { name: 'Vite', icon: 'V', description: 'Flujo de desarrollo rápido y servido eficiente.' },
      { name: 'Responsive Design', icon: '📱', description: 'Adaptación visual para móvil, tablet y escritorio.' },
      { name: 'UX/UI', icon: '🎨', description: 'Diseño centrado en claridad, accesibilidad y atractivo visual.' },
    ],
  },
  {
    title: 'Desarrollo backend',
    items: [
      { name: 'Node.js', icon: 'Node', description: 'Entorno de ejecución para servicios y APIs.' },
      { name: 'Express', icon: 'EXP', description: 'Estructura sencilla para APIs web.' },
      { name: 'APIs REST', icon: 'API', description: 'Integración y consumo de servicios externos.' },
      { name: 'Autenticación', icon: '🔐', description: 'Manejo seguro de acceso y sesiones.' },
    ],
  },
  {
    title: 'Bases de datos',
    items: [
      { name: 'SQL', icon: 'SQL', description: 'Consulta y gestión de datos relacionales.' },
      { name: 'MongoDB', icon: 'MDB', description: 'Almacenamiento flexible para datos no relacionales.' },
      { name: 'PostgreSQL', icon: 'PG', description: 'Base de datos robusta y escalable.' },
      { name: 'Modelado de datos', icon: 'DB', description: 'Organización y relación de entidades de un sistema.' },
    ],
  },
  {
    title: 'Herramientas y control de versiones',
    items: [
      { name: 'Git', icon: 'Git', description: 'Control de versiones y colaboración en proyectos.' },
      { name: 'GitHub', icon: 'GH', description: 'Gestión de repositorios y trabajo en equipo.' },
      { name: 'Figma', icon: 'F', description: 'Diseño de interfaces y prototipado visual.' },
      { name: 'NPM', icon: 'NPM', description: 'Gestión de dependencias y scripts del proyecto.' },
    ],
  },
  {
    title: 'Entornos de desarrollo',
    items: [
      { name: 'VS Code', icon: 'VS', description: 'Editor principal para desarrollo ágil y ordenado.' },
      { name: 'Terminal', icon: '⌘', description: 'Automatización y ejecución de tareas del proyecto.' },
      { name: 'Testing', icon: '✓', description: 'Validación de funcionalidades y calidad del código.' },
      { name: 'Builds', icon: '⚙', description: 'Compilación y despliegue para entornos reales.' },
    ],
  },
  {
    title: 'Otras tecnologías',
    items: [
      { name: 'Tailwind CSS', icon: 'TW', description: 'Estilos utilitarios y diseño consistente.' },
      { name: 'SASS', icon: 'SCSS', description: 'Organización y mantenimiento de estilos complejos.' },
      { name: 'SEO', icon: 'SEO', description: 'Buenas prácticas para posicionamiento y usabilidad.' },
      { name: 'Accesibilidad', icon: '♿', description: 'Interfaces más inclusivas y comprensibles.' },
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Proyecto en construcción',
    description:
      'Espacio reservado para un proyecto destacado con descripción, tecnologías empleadas y enlaces de acceso.',
    stack: ['React', 'TypeScript', 'CSS'],
    demoUrl: '#',
    repoUrl: '#',
    demoLabel: 'Demo',
    repoLabel: 'GitHub',
    accent: 'violet',
  },
  {
    name: 'Aplicación web personal',
    description:
      'Marcador visual para una aplicación con objetivos claros, buen diseño y una experiencia de usuario cuidada.',
    stack: ['Vite', 'TypeScript', 'API'],
    demoUrl: '#',
    repoUrl: '#',
    demoLabel: 'Ver demo',
    repoLabel: 'Repositorio',
    accent: 'blue',
  },
  {
    name: 'Dashboard de gestión',
    description:
      'Sección preparada para reflejar un producto funcional, con estructura modular y enfoque en productividad.',
    stack: ['React', 'Node.js', 'SQL'],
    demoUrl: '#',
    repoUrl: '#',
    demoLabel: 'Live',
    repoLabel: 'Código',
    accent: 'lavender',
  },
];

export const personalBlocks: PersonalBlock[] = [
  {
    title: 'Aficiones e intereses',
    items: ['[Añadir aficiones e intereses]', '[Explorar nuevas tecnologías]', '[Disfrutar del aprendizaje continuo]'],
  },
  {
    title: 'Deportes y actividades',
    items: ['[Añadir deportes o actividades]', '[Rutinas y hobbies fuera del desarrollo]', '[Momentos de desconexión y motivación]'],
  },
  {
    title: 'Motivación personal',
    items: ['[Escribir una breve descripción]', '[Explicar cómo enfoco el trabajo]', '[Resaltar curiosidad y mejora constante]'],
  },
];

export const contactItems: ContactItem[] = [
  { label: 'Correo electrónico', value: '[tu-email@ejemplo.com]', href: 'mailto:tu-email@ejemplo.com' },
  { label: 'GitHub', value: '[Tu usuario de GitHub]', href: '#' },
  { label: 'LinkedIn', value: '[Tu perfil de LinkedIn]', href: '#' },
  { label: 'Portfolio', value: '[Sitio personal o enlace adicional]', href: '#' },
];
