import styles from "./page.module.css";
import FloatingShape from "../components/floatingShapes";

export default function Home() {
  return (
    <main className={styles.main}>
      <FloatingShape />
    </main>
  );
}
