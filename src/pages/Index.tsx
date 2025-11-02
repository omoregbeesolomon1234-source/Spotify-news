import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music2, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const musicApps = [
  {
    id: 1,
    name: "Spotify",
    description: "Stream millions of songs and podcasts",
    icon: "🎵",
    votes: 0,
  },
  {
    id: 2,
    name: "Apple Music",
    description: "70 million songs, all ad-free",
    icon: "🎧",
    votes: 0,
  },
  {
    id: 3,
    name: "YouTube Music",
    description: "Official songs, albums, and music videos",
    icon: "▶️",
    votes: 0,
  },
  {
    id: 4,
    name: "SoundCloud",
    description: "Discover and play millions of tracks",
    icon: "☁️",
    votes: 0,
  },
  {
    id: 5,
    name: "Tidal",
    description: "High fidelity music streaming",
    icon: "🌊",
    votes: 0,
  },
  {
    id: 6,
    name: "Deezer",
    description: "Music and podcast streaming platform",
    icon: "💿",
    votes: 0,
  },
];

const Index = () => {
  const [apps, setApps] = useState(musicApps);
  const { toast } = useToast();

  const handleVote = (appId: number, provider: string) => {
    setApps(apps.map(app => 
      app.id === appId ? { ...app, votes: app.votes + 1 } : app
    ));
    
    const app = apps.find(a => a.id === appId);
    toast({
      title: "Vote recorded! 🎉",
      description: `You voted for ${app?.name} with ${provider}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Music App Poll
            </h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Vote for your favorite music streaming app
          </p>
        </div>

        {/* Music Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {apps.map((app, index) => (
            <Card 
              key={app.id} 
              className="hover-scale overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{app.icon}</span>
                    <div>
                      <CardTitle className="text-lg md:text-xl">{app.name}</CardTitle>
                      {app.votes > 0 && (
                        <Badge variant="secondary" className="mt-1">
                          {app.votes} {app.votes === 1 ? 'vote' : 'votes'}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm">{app.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <Button
                  onClick={() => handleVote(app.id, "Instagram")}
                  className="w-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90 text-white border-0"
                  size="sm"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Vote with Instagram
                </Button>
                <Button
                  onClick={() => handleVote(app.id, "Gmail")}
                  variant="secondary"
                  className="w-full"
                  size="sm"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  Vote with Gmail
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Click any button to cast your vote! 🎵</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
