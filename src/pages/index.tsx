import Image from "next/image";
import { Inter } from "next/font/google";
import { PortfolioProject, PortfolioSocial } from "@/types";
import { NavigationStore } from "@/store/NavigationStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Head from "next/head";
import { Profile } from "@/components/Profile";
import { Header } from "@/components/Header";
import { Portfolio } from "@/components/Portfolio";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await fetch(process.env.GITHUB_URL!);
  const portfolioDetails = await res.json();

  return {
    props: {
      socials: portfolioDetails.socials,
      skills: portfolioDetails.skills,
      projects: portfolioDetails.projects,
    },
  };
}

export default function Home({
  socials,
  skills,
  projects,
}: {
  socials: PortfolioSocial[];
  skills: string[];
  projects: PortfolioProject[];
}) {
  const { curNav } = NavigationStore();
  const [animationParent] = useAutoAnimate();

  return (
    <>
      <Head>
        <title>Matthew Budiman</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 xl:grid-cols-4">
          <div className="col-span-1 p-7">
            <Profile socials={socials} />
          </div>
          <div className="xl:col-span-3 lg:col-span-2 p-7">
            <Header />
            <div ref={animationParent}>
              {curNav === "Resume" ? (
                <Portfolio skills={skills} />
              ) : (
                <Projects portfolioProjects={projects} />
              )}
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
