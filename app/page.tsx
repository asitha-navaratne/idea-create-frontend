import Button from "@/components/Button";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <h1 className={styles["home-page__title"]}>Collaborate and Create!</h1>
      <h2 className={styles["home-page__sub-title"]}>
        Work on your ideas together, seamlessly and in real time.
      </h2>
      <Button>Sign in to continue</Button>
    </div>
  );
}
