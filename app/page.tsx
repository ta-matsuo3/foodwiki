import Image from "next/image";
import styles from './page.module.css'
import Header from "./components/Header/Header";
import SeachBox from "./components/Header/Search/Seach";
import CreateNewBtn from "./components/Header/CreateNewBtn/CreateNewBtn";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.heading}>HOME</h1>
        <nav>
          <li><a href="#">ホーム</a></li>
          <Link href="/detail">食材詳細</Link>
          <Link href="/create">登録画面</Link>
          <Link href="/test">テスト</Link>
        </nav>
      </div>
    </>
  );
}
