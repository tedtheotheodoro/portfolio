export const projects = [
  {
    id: "idiomaticamente",
    title: "Idiomaticamente",
    subtitle: "Bilingual Idiom Archive",
    description: "A bilingual archive of idiomatic expressions that resist literal translation, designed as a pedagogical and cultural tool that reveals how language encodes emotion, irony, and worldview.",
    image: "https://mocha-cdn.com/01963e44-b546-78ac-9d0a-24f03b626504/idiomaticamente.png",
    technologies: ["React", "Firebase", "Tailwind CSS", "Vite", "i18n"],
    fullDescription: "Idiomaticamente is a bilingual archive of idiomatic expressions that resist literal translation. It's designed as a pedagogical and cultural tool — a searchable collection of \"untranslatables\" that reveals how language encodes emotion, irony, and worldview. The project allows users to browse idioms and, once authenticated, contribute new ones to a shared database.\n\nThe app uses Firebase Auth to restrict write access to authenticated users, while keeping read access public. Users can filter expressions by keywords, and each idiom includes context, tone, and an example. Firestore integration is abstracted into modular functions to keep code maintainable and scalable.\n\nBuilt with React for dynamic interface and component-driven architecture, Firebase (Firestore + Auth) to store and retrieve user-submitted data and handle Google authentication, and Tailwind CSS for responsive, minimalist styling. The application includes i18n implementation to support both Portuguese and English interfaces.",
    projectUrl: "https://idiomaticamente.vercel.app"
  },
  {
    id: "oscar-simulator",
    title: "Oscar Simulator",
    subtitle: "Interactive Narrative Game",
    description: "A bilingual narrative game that lets users explore what might happen after they win an Oscar, through a branching structure that determines their post-statuette fate.",
    image: "https://mocha-cdn.com/01963e44-b546-78ac-9d0a-24f03b626504/oscar-simulator.png",
    technologies: ["React", "Vite", "Tailwind CSS", "React-i18next", "Framer Motion"],
    fullDescription: "Oscar Simulator is a bilingual narrative game that lets users explore what might happen after they win an Oscar. Through a branching structure, users answer five questions that determine their post-statuette fate — from viral fame to indie obscurity. The project blends entertainment, satire, and data-driven storytelling.\n\nThe app uses a state machine approach to move through user choices and reach a tailored ending. Each combination of answers is mapped to a unique outcome. The design supports internationalization from the start, including localization of all interface elements and results.\n\nBuilt with React + Vite for high-performance rendering and component-based logic, Tailwind CSS for sleek UI and mobile responsiveness, React-i18next for seamless language toggling between Portuguese and English, and Framer Motion for feedback modals and UI animations. The game uses a custom JSON structure for questions, answers, and outcome logic.",
    projectUrl: "https://oscar-simulator.vercel.app"
  },
  {
    id: "tuned-to-dissonance",
    title: "Tuned to Dissonance",
    subtitle: "Post-Punk Interactive Experience",
    description: "An interactive game about post-punk lineage and musical identity where players move through five narrative Acts exploring historical, cultural, and emotional aspects of alternative music scenes.",
    image: "https://mocha-cdn.com/01963e44-b546-78ac-9d0a-24f03b626504/tuned-to-dissonance.png",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React-beautiful-dnd"],
    fullDescription: "Tuned to Dissonance is an interactive game about post-punk lineage and musical identity. Players move through five narrative Acts, each exploring historical, cultural, and emotional aspects of alternative music scenes. It's part educational experience, part philosophical journey through noise, dissonance, and meaning.\n\nThe game is structured as a modular narrative with visual transitions between each Act and Stage. Each phase has a unique mechanic — sorting, matching, selecting — to keep interaction varied. Visual and textual feedback are designed to reinforce theme and mood. The whole experience is meant to feel like a meditative, music-driven puzzle.\n\nBuilt with React + Vite to manage stages, transitions, and game logic, Tailwind CSS for layout, typography, and theming, and Framer Motion for stage transitions, modals, and animations. It leverages React-beautiful-dnd to implement drag-and-drop interaction (especially in categorization stages) and uses modular components for each game phase (Timeline, Pairs, Categorization, Selection). The app has a custom data structure to control each Act, Stage, and progression state, with Firebase planned for future saving of user progress and collaborative features.",
    projectUrl: "https://tuned-to-dissonance.vercel.app"
  }
];
