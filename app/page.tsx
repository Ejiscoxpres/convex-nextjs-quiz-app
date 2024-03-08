import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <main>
      <main>
      <div className='container'>
        <h1>Quiz App</h1>
        <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>
      </div>
  </main>
  );
}
