import { Orb } from "@/components/orb/orb";
import { VoiceAgent } from "@/components/voice/voiceAgent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.ambientBackground} aria-hidden="true" />
      <div className={styles.topRightLogo}>
        <img
          src="/357606d5854766c3456eeb8b48b2055c.jpg"
          alt="TR Fastenings Logo"
          className={styles.logoImage}
        />
      </div>
      <Orb />
      <VoiceAgent />
    </main>
  );
}
