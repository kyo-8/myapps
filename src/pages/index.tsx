import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import ThemeToggler from "../ThemeToggler";
import imgs from "/public/img/Sky.png";
import imgpc from "/public/img/pc.png";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <header className="top-0 z-20 border-b border-gray-200 bg-white py-2 dark:bg-black dark:text-white md:mb-6 md:py-1">
        <div className="container mx-auto flex flex-col items-center p-5 md:flex-row">
          <a
            href="#"
            className="mb-4 font-medium text-gray-900 dark:text-white md:mb-0"
          >
            <span className="ml-3 text-xl">Takatsuki Kyosuke</span>
          </a>
          <nav className="text-base md:ml-auto">
            <ThemeToggler />
          </nav>
        </div>
      </header>
      <section className="text-gray-700" id="home">
        <div className="container mx-auto flex flex-col items-center py-20 px-8 dark:text-white md:flex-row">
          <div className="mb-16 flex-grow text-center dark:text-white md:w-1/2 md:pr-16 md:text-left lg:pr-24">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-6xl">
              Hi! 👋
              <p>I&#39;m Takatsuki, Kyosuke.</p>
            </h1>
            <p className="mb-8 leading-relaxed">
              はじめまして。以下の技術を用いてポートフォリオを作成しました。
            </p>
            <p className="mb-8 leading-relaxed">
              使用技術:Next.js TypeScript Tailwindcss
            </p>
          </div>
          <div className="w-5/6 md:w-1/2 lg:max-w-lg">
            <Image
              src={imgs}
              alt="imgs"
              className="rounded-lg"
              width={500}
              height={500}
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
              私はこれまで主に製造業、官公庁、ECサイト運営会社などのお客様先の様々なプロジェクトに携わらせていただきました。
              担当してきたことは、詳細設計から結合テスト、システム移行テストやシステム運用などです。
              また新しい技術にも興味があり、常にキャッチアップすることを心掛けています。
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-200 text-gray-700">
        <div className="container mx-auto flex flex-wrap items-center py-24 px-5">
          {/* left side */}
          <div className="flex w-full justify-center lg:mb-0 lg:w-1/2">
            <Image
              src={imgpc}
              alt="imgpc"
              className="lg:px-18flex-shrink-0 mb-0 rounded-lg lg:mt-12 lg:w-3/4 lg:py-5"
            />
          </div>
          {/* right side */}
          <div className="w-full lg:w-1/2 lg:py-6 lg:pl-12">
            <h1 className="mt-10 text-center text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl lg:text-left">
              My Skills
            </h1>
            <div className="w-full dark:text-white">
              <h2>Linux</h2>
              <div className="mt-2 w-full bg-sky-100 shadow lg:w-1/2">
                <div
                  className="bg-sky-600 py-1 text-center text-xs leading-none text-white"
                  style={{ width: "50%" }}
                >
                  50%
                </div>
              </div>
              <h2>Java</h2>
              <div className="mt-2 w-full bg-sky-100 shadow lg:w-1/2">
                <div
                  className="bg-sky-600 py-1 text-center text-xs leading-none text-white"
                  style={{ width: "45%" }}
                >
                  45%
                </div>
              </div>
              <h2>Ruby</h2>
              <div className="mt-2 w-full bg-sky-100 shadow lg:w-1/2">
                <div
                  className="bg-sky-600 py-1 text-center text-xs leading-none text-white"
                  style={{ width: "35%" }}
                >
                  35%
                </div>
              </div>
              <h2>Next.js</h2>
              <div className="mt-2 w-full bg-sky-100 shadow lg:w-1/2">
                <div
                  className="bg-sky-600 py-1 text-center text-xs leading-none text-white"
                  style={{ width: "25%" }}
                >
                  25%
                </div>
              </div>
              <h2>TypeScript</h2>
              <div className="mt-2 w-full bg-sky-100 shadow lg:w-1/2">
                <div
                  className="bg-sky-600 py-1 text-center text-xs leading-none text-white"
                  style={{ width: "25%" }}
                >
                  25%
                </div>
              </div>
              <h2>JavaScript</h2>
              <div className="mt-2 w-full bg-sky-100 shadow lg:w-1/2">
                <div
                  className="bg-sky-600 py-1 text-center text-xs leading-none text-white"
                  style={{ width: "25%" }}
                >
                  25%
                </div>
              </div>
              <h2>HTML</h2>
              <div className="mt-2 w-full bg-sky-100 shadow lg:w-1/2">
                <div
                  className="bg-sky-600 py-1 text-center text-xs leading-none text-white"
                  style={{ width: "25%" }}
                >
                  25%
                </div>
              </div>
              <h2>Tailwindcss</h2>
              <div className="mt-2 w-full bg-sky-100 shadow lg:w-1/2">
                <div
                  className="bg-sky-600 py-1 text-center text-xs leading-none text-white"
                  style={{ width: "25%" }}
                >
                  25%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
