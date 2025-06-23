import {
    energetic1,
    energetic2,
    edmsad1,
    edmsad2,
    happypop1,
    happypop2,
    lofirelax1,
    lofirelax2
  } from "../assets/audio/index";
  
  const audioData = [
    // Happy 🎤 Pop
    { id: 1, title: "I'm Excited", mood: "Happy", genre: "Pop", audioUrl: happypop1 },
    { id: 2, title: "Pop Vibes", mood: "Happy", genre: "EDM", audioUrl: happypop2 },
  
    // Sad 🕺 EDM
    { id: 3, title: "CBPD", mood: "Sad", genre: "EDM", audioUrl: edmsad1 },
    { id: 4, title: "Classical Vibes", mood: "Sad", genre: "Pop", audioUrl: edmsad2 },
  
    // Chill 🎧 Lo-fi
    { id: 5, title: "Relax Beat", mood: "Chill", genre: "Lo-fi", audioUrl: lofirelax1 },
    { id: 6, title: "Vastness", mood: "Energetic", genre: "Lo-fi", audioUrl: lofirelax2 },
  
    // Energetic 🎬 Cinematic
    { id: 7, title: "Epical Drums", mood: "Energetic", genre: "Cinematic", audioUrl: energetic1 },
    { id: 8, title: "I Won't Surrender", mood: "Energetic", genre: "Cinematic", audioUrl: energetic2 },
    
    // Happy 🎧 Lo-fi
    { id: 9, title: "Vastness", mood: "Happy", genre: "Lo-fi", audioUrl: lofirelax2 },
  
    // Sad 🎬 Cinematic
    { id: 10, title: "Classical Vibes", mood: "Sad", genre: "Cinematic", audioUrl: edmsad2 },
  
    // Chill 🎤 Pop
    { id: 11, title: "Pop Vibes", mood: "Chill", genre: "Pop", audioUrl: happypop2 },
    { id: 11, title: "Pop Vibes", mood: "Chill", genre: "EDM", audioUrl: happypop2 },

    // Energetic 🕺 EDM
    { id: 12, title: "I'm Excited", mood: "Energetic", genre: "EDM", audioUrl: happypop1 },
  
    // Chill 🎬 Cinematic
    { id: 13, title: "I Won't Surrender", mood: "Chill", genre: "Cinematic", audioUrl: energetic2 },
  
    // Happy 🎬 Cinematic
    { id: 14, title: "Epical Drums", mood: "Happy", genre: "Cinematic", audioUrl: energetic1 },
  
    // Sad 🎧 Lo-fi
    { id: 15, title: "Relax Beat", mood: "Sad", genre: "Lo-fi", audioUrl: lofirelax1 },
  
    // Energetic 🎤 Pop
    { id: 16, title: "Pop Vibes", mood: "Energetic", genre: "Pop", audioUrl: happypop2 }
  ];
  
  export default audioData;
  