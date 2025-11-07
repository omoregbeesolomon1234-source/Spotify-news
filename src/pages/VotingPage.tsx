import { Instagram, Mail, Check, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import musicalBg from "@/assets/musical-background.jpg";

const VotingPage = () => {
  const totalVotes = 5678;
  const maxVotes = 5688;
  const votesToWin = 10;
  const progressPercentage = (totalVotes / maxVotes) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Musical Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${musicalBg})` }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-background/95 via-primary/10 to-secondary/10" />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in">
          {/* Main Card */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-primary/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 p-8 text-center border-b border-primary/10">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
                Cast Your Vote
              </h1>
              <p className="text-muted-foreground font-medium">
                Sign in to vote for PodStream Europe
              </p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Vote Progress Section */}
              <div className="space-y-4">
                <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-center gap-2 text-foreground font-bold">
                    <Radio className="w-5 h-5 text-primary fill-primary" />
                    <span>Total Votes: {totalVotes} out of {maxVotes}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress 
                      value={progressPercentage} 
                      className="h-3 bg-muted"
                    />
                    <p className="text-xs text-center text-muted-foreground font-medium">
                      {progressPercentage.toFixed(1)}% progress
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-foreground font-bold bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Total Vote to Win: {votesToWin}</span>
                </div>
              </div>

              {/* Voting Buttons */}
              <div className="space-y-3 pt-4">
                <Button
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0 rounded-xl shadow-lg hover-scale transition-all duration-300"
                  onClick={() => {/* Instagram vote link will go here */}}
                >
                  <Instagram className="w-6 h-6 mr-2" />
                  Vote with Instagram
                </Button>

                <Button
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 rounded-xl shadow-lg hover-scale transition-all duration-300"
                  onClick={() => {/* Gmail vote link will go here */}}
                >
                  <Mail className="w-6 h-6 mr-2" />
                  Vote with Gmail
                </Button>
              </div>

              {/* Footer Message */}
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Choose your preferred platform to cast your vote
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              Powered by <span className="text-primary font-bold">PodStream Europe</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
