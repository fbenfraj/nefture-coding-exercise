"use client";

import { FC, useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import styles from "./page.module.css";
import HeroComponent from "./components/Hero";
import NefturianComponent from "./components/Nefturian";
import StatsComponent from "./components/Stats";

declare global {
  interface Window {
    ethereum: any;
  }
}

const fetchHero = async (address: string): Promise<Hero | null> => {
  try {
    const res = await fetch(`http://localhost:3001/heroes/${address}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const heroData: Hero = await res.json();
    return heroData;
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};

const Home: FC = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (address && isConnected) {
      fetchHero(address).then(setHero);
    }
  }, [address, isConnected]);

  return (
    <main className={styles.main}>
      {isConnected ? (
        <>
          <div className={styles.description}>
            <h1>Welcome to Nefturian Heroes!</h1>
            <HeroComponent address={address} isConnected={isConnected} />
            {hero && <NefturianComponent heroId={hero.heroId} />}
            <StatsComponent />
          </div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      ) : (
        <ConnectButton />
      )}
    </main>
  );
};

export default Home;
