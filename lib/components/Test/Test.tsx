import { useState } from "react";
import styles from "./styles.module.css";
import Logic from "./Logic";
export const Test = () => {
  const [show, setShow] = useState(false);
  Logic();
  return (
    <div
      onClick={() => setShow(!show)}
      style={{ width: "100vw", height: "100vh", display: "flex", gap: 10 }}
    >
      <div animate-id="test" className={styles.container_one} />
      {show && (
        <div animate-id="test" className={styles.container_transformed} />
      )}
      <div
        animate-id="test-2"
        className={styles.container_one}
        style={{ backgroundColor: "red" }}
      />
    </div>
  );
};
