import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="border-b border-gray-200 text-gray-700 dark:text-white">
        <div className="container mx-auto flex flex-col items-center p-5 md:flex-row">
          <a
            href="#"
            className="mb-4 font-medium text-gray-900 dark:text-white md:mb-0"
          >
            <span className="ml-3 text-xl">Takatsuki, Kyosuke</span>
          </a>
          <nav className="text-base md:ml-auto">
            {/* <div className="flex from-orange-300 text-yellow-500 hover:-rotate-90 md:flex-row">
              <ChangeThemeButton />
            </div> */}
            {/* <a href="#home" className="mr-5 duration-300 hover:text-yellow-400">
              Home
            </a>
            <a
              href="#about"
              className="mr-5 duration-300 hover:text-yellow-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="mr-5 duration-300 hover:text-yellow-400"
            >
              Skills
            </a> */}
            {/* <ThemeSwitch /> */}
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="container mx-auto flex flex-col items-center py-20 px-8 dark:text-white md:flex-row">
          <div className="mb-16 flex-grow text-center dark:text-white md:w-1/2 md:pr-16 md:text-left lg:pr-24">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-6xl">
              Takatsuki, Kyosuke.
            </h1>
            <p className="mb-8 leading-relaxed">
              はじめまして。以下の技術を用いてポートフォリオを作成しました。
            </p>
            <p className="mb-8 leading-relaxed">
              使用技術:Next.js TypeScript Tailwindcss
            </p>
            {/* <button className="rounded border-0 bg-green-500 py-2 px-6 text-lg text-white duration-300 hover:bg-green-600">
              Contact
            </button> */}
          </div>
          <div className="w-5/6 md:w-1/2 lg:max-w-lg">
            <img
              src="./img/Sky.png"
              alt="imgs"
              className="rounded-lg"
              width={1000}
              height={1000}
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 text-gray-700">
        <div className="container mx-auto py-24 px-5">
          <div className="mb-20 text-center">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
              About Me
            </h1>
            <p className="dark:text-white">
              私はSESエンジニアとして、約4年間に渡りお客様先の様々なプロジェクトに参加してきました。業界は金融、官公庁、ECサイトです。担当していたことは、システム移行テスト、運用監視、結合テストなどです。エンジニアとして開発未経験ではありますが、UbuntuでVM構築、またポートフォリオウェブサイト開発など技術を学ぶ意欲を活かして、より一層技術を身につけ、貴社の発展に貢献していきたいと考えています。
            </p>
            {/* <p className="mb-8 leading-relaxed">
              趣味は10代の頃に始めたドラムです。
            </p> */}
          </div>
          {/* カードのdivタグ */}
          {/* <div className="flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <div className="rounded-lg bg-gray-100 p-8">
                <div className="mb-3 flex items-center">
                  <div className="rounded-full bg-green-500 text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="ml-2 text-lg font-medium text-gray-900">
                    Test
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, recusandae eum. Facilis voluptatem sint harum quaerat
                    vel iure est ab.
                  </p>
                  <a href="#" className="mt-3 flex items-center text-green-500">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="rounded-lg bg-gray-100 p-8">
                <div className="mb-3 flex items-center">
                  <div className="rounded-full bg-green-500 text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="ml-2 text-lg font-medium text-gray-900">
                    Test
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, recusandae eum. Facilis voluptatem sint harum quaerat
                    vel iure est ab.
                  </p>
                  <a href="#" className="mt-3 flex items-center text-green-500">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="rounded-lg bg-gray-100 p-8">
                <div className="mb-3 flex items-center">
                  <div className="rounded-full bg-green-500 text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="ml-2 text-lg font-medium text-gray-900">
                    Test
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, recusandae eum. Facilis voluptatem sint harum quaerat
                    vel iure est ab.
                  </p>
                  <a href="#" className="mt-3 flex items-center text-green-500">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="border-t border-gray-200 text-gray-700">
        <div className="container mx-auto flex flex-wrap py-24 px-5">
          {/* left side */}
          <div className="mb-10 flex w-full justify-center lg:mb-0 lg:w-1/2">
            <img
              src="./img/pc.png"
              alt="imgpc"
              className="lg:pl-15 w-full rounded lg:w-1/2 lg:py-6"
            />
          </div>
          {/* right side */}
          <div className="w-full lg:w-1/2 lg:py-6 lg:pl-12">
            <h1 className="mb-10 text-center text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl lg:text-left">
              My Skills
            </h1>
            <div className="w-full">
              <h2>Linux</h2>
              <div className="mt-2 w-full bg-green-100 shadow lg:w-1/2">
                <div
                  className="text-centert bg-green-600 py-1 text-xs leading-none text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
              <h2>Java</h2>
              <div className="mt-2 w-full bg-green-100 shadow lg:w-1/2">
                <div
                  className="text-centert bg-green-600 py-1 text-xs leading-none text-white"
                  style={{ width: "45%" }}
                >
                  45%
                </div>
              </div>
              <h2>Ruby</h2>
              <div className="mt-2 w-full bg-green-100 shadow lg:w-1/2">
                <div
                  className="text-centert bg-green-600 py-1 text-xs leading-none text-white"
                  style={{ width: "35%" }}
                >
                  35%
                </div>
              </div>
              <h2>Next.js</h2>
              <div className="mt-2 w-full bg-green-100 shadow lg:w-1/2">
                <div
                  className="text-centert bg-green-600 py-1 text-xs leading-none text-white"
                  style={{ width: "20%" }}
                >
                  20%
                </div>
              </div>
              <h2>TypeScript</h2>
              <div className="mt-2 w-full bg-green-100 shadow lg:w-1/2">
                <div
                  className="text-centert bg-green-600 py-1 text-xs leading-none text-white"
                  style={{ width: "18%" }}
                >
                  18%
                </div>
              </div>
              <h2>HTML</h2>
              <div className="mt-2 w-full bg-green-100 shadow lg:w-1/2">
                <div
                  className="text-centert bg-green-600 py-1 text-xs leading-none text-white"
                  style={{ width: "17%" }}
                >
                  17%
                </div>
              </div>
              <h2>Tailwindcss</h2>
              <div className="mt-2 w-full bg-green-100 shadow lg:w-1/2">
                <div
                  className="text-centert bg-green-600 py-1 text-xs leading-none text-white"
                  style={{ width: "15%" }}
                >
                  15%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
