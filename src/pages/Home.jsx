import "../App.css";
import { Link } from "react-router";

function Home() {
  return (
    <div>
      <header>
        <h1 className="title">スプラトゥーン 道具箱</h1>
        <p className="description">スプラトゥーンの便利サイトを作ってみたよ</p>
      </header>

      <main>
        <section>
          <h2 className="title">機能を選択してください</h2>

          <Link to = "/weapon-random">
            <article className="cards">ブキランダム</article>
          </Link>

        </section>
      </main>

    </div>
  );
}

export default Home;