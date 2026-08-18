import { Orb } from "@/components/orb/orb";
import { VoiceAgent } from "@/components/voice/voiceAgent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.ambientBackground} aria-hidden="true" />
      <Orb />
      <VoiceAgent />
    </main>
  );
}
