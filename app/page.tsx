import { Orb } from "@/components/orb/orb";
import { VoiceAgent } from "@/components/voice/voiceAgent";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-black text-white">
      <Orb />
      <VoiceAgent />
    </main>
  );
}
