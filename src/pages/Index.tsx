import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";

const musicApps = [
  {
    id: 1,
    name: "Spotify",
    description: "Stream millions of songs and podcasts",
    icon: "🎵",
  },
  {
    id: 2,
    name: "Apple Music",
    description: "70 million songs, all ad-free",
    icon: "🎧",
  },
  {
    id: 3,
    name: "YouTube Music",
    description: "Official songs, albums, and music videos",
    icon: "▶️",
  },
  {
    id: 4,
    name: "SoundCloud",
    description: "Discover and play millions of tracks",
    icon: "☁️",
  },
  {
    id: 5,
    name: "Tidal",
    description: "High fidelity music streaming",
    icon: "🌊",
  },
  {
    id: 6,
    name: "Deezer",
    description: "Music and podcast streaming platform",
    icon: "💿",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16 space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Music2 className="w-10 h-10 md:w-14 md:h-14 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              PODSTREAM EUROPE
            </span>
            <span className="block mt-2 text-foreground">
              VOTING PLATFORM
            </span>
          </h1>
          
          <div className="mt-8 space-y-3">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              WELCOME TO PODSTREAM EUROPE
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              GOOGLE/SPOTIFY VOTING PLATFORM
            </p>
          </div>
        </div>

        {/* Voting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {musicApps.map((app, index) => (
            <Card 
              key={app.id} 
              className="group hover-scale overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-5xl transition-transform group-hover:scale-110">{app.icon}</span>
                  <CardTitle className="text-xl md:text-2xl">{app.name}</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base">{app.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <a href="#" className="block">
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 h-11"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                    Vote with Google
                  </Button>
                </a>
                <a href="#" className="block">
                  <Button
                    className="w-full bg-gradient-to-r from-[#1DB954] to-[#1ed760] hover:opacity-90 text-white border-0 h-11"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Vote with Spotify
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16 space-y-2">
          <p className="text-muted-foreground">
            Select your favorite app and vote with your preferred platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
