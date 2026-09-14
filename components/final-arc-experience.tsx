"use client";

import { useEffect, useState } from "react";
import { PixelReveal } from "@/components/pixel-reveal";

const loreBeats = [
  {
    number: "01",
    title: "THE SIGNAL",
    body: "A crooked blue arc appears in Pepe’s feed. He follows it. Everybody reposts it anyway.",
  },
  {
    number: "02",
    title: "THE LOOP",
    body: "Each remix makes the ending less clear and the movement more inevitable. This is how culture performs load testing.",
  },
  {
    number: "03",
    title: "THE DEPLOYMENT",
    body: "The joke gets a contract only when the contract is real. Until then, the official address is: NOT DEPLOYED.",
  },
];

const verifiedFacts = [
  ["NETWORK", "Open, EVM-compatible Layer 1"],
  ["GAS", "USDC-denominated"],
  ["FINALITY", "Deterministic, under one second"],
  ["PRIVACY", "Opt-in and configurable"],
  ["NOW", "Public testnet"],
];

const machineStates = [
  {
    status: "MACHINE IDLE",
    detail: "A comic simulation. No wallet. No value. No transaction.",
  },
  {
    status: "GAS ACCEPTED",
    detail: "The pretend dollar entered the slot. On Arc, real fees are denominated in USDC.",
  },
  {
    status: "CURTAIN DOWN",
    detail: "The privacy gag is opt-in, just like the configurable privacy described by Arc.",
  },
  {
    status: "FINAL STAMP",
    detail: "The paper is stamped. Arc describes deterministic settlement finality in under a second.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FinalArcExperience() {
  const [progress, setProgress] = useState(0);
  const [machineStage, setMachineStage] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(1, window.scrollY / available) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-story">
        Skip to the story
      </a>

      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header className="masthead">
        <button className="brand" type="button" onClick={() => scrollToId("opening")}>
          <span className="brand__mark" aria-hidden="true">
            ∩
          </span>
          <span>FINAL ARC</span>
        </button>
        <nav aria-label="Primary navigation">
          <button type="button" onClick={() => scrollToId("lore")}>
            LORE
          </button>
          <button type="button" onClick={() => scrollToId("machine")}>
            MACHINE
          </button>
          <a href="https://docs.arc.io/arc-chain" target="_blank" rel="noreferrer">
            ARC DOCS ↗
          </a>
        </nav>
      </header>

      <main id="main-story">
        <section id="opening" className="hero" aria-labelledby="hero-title">
          <PixelReveal
            src="/images/final-arc-hero-pepe.webp"
            alt="Pepe the Frog crosses a giant blue arc above a grid of dollar coins in a xerox-style comic"
            className="hero__art"
            priority
          />
          <div className="hero__content">
            <p className="scene-index">CHAPTER 00 / THE BIT OPENS</p>
            <h1 id="hero-title" className="hero__title">
              <span>THE</span>
              <span>FINAL</span>
              <span className="hero__title-outline">ARC</span>
            </h1>
            <p className="hero__dek">
              An unofficial 2D internet movement preparing to deploy on Arc.
              Scroll before history autocorrects itself.
            </p>
            <button className="hero__enter" type="button" onClick={() => scrollToId("premise")}>
              ENTER THE ARC ↓
            </button>
          </div>
          <div className="hero__status" aria-label="Project status">
            <span>ARC / PUBLIC TESTNET</span>
            <span>CONTRACT / NOT DEPLOYED</span>
            <span>MODE / LORE</span>
          </div>
        </section>

        <section id="premise" className="scene scene--paper premise" aria-labelledby="premise-title">
          <p className="scene-index">CHAPTER 01 / PREMISE</p>
          <div className="premise__layout">
            <h2 id="premise-title">
              EVERY MEME
              <br />
              GETS AN ARC.
            </h2>
            <div className="premise__copy">
              <p className="lead">
                Memes had eras. Charts had cycles. Blockchains had roadmaps. Nobody had the
                decency to end the bit.
              </p>
              <p>
                Then Circle named a chain <strong>Arc</strong>. The Final Arc is the obvious,
                catastrophically unserious response: a comic movement made for the feed, with a
                future deployment target that happens to share the punchline. Pepe is the witness,
                doomed to carry the receipt all the way to the ending.
              </p>
            </div>
          </div>
          <p className="margin-note" aria-hidden="true">
            THIS IS THE PART WHERE THE NARRATOR PRETENDS IT WAS DESTINY.
          </p>
        </section>

        <section id="lore" className="scene lore" aria-labelledby="lore-title">
          <div className="lore__intro">
            <p className="scene-index">CHAPTER 02 / LORE</p>
            <h2 id="lore-title">THE INTERNET DISCOVERS A THIRD ACT.</h2>
          </div>
          <ol className="lore__beats">
            {loreBeats.map((beat) => (
              <li key={beat.number}>
                <span className="lore__number" aria-hidden="true">
                  {beat.number}
                </span>
                <h3>{beat.title}</h3>
                <p>{beat.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="manifesto" aria-label="Movement manifesto">
          <div className="manifesto__rail" aria-hidden="true">
            POST IT / REMIX IT / BREAK IT / LOOP IT / POST IT / REMIX IT / BREAK IT / LOOP IT /
          </div>
          <p>ONE JOKE. INFINITE REPOSTS. ONE VERY LITERAL CHAIN NAME.</p>
        </section>

        <section id="mechanics" className="scene mechanics" aria-labelledby="mechanics-title">
          <div className="mechanics__visual">
            <PixelReveal
              src="/images/arc-machine-pepe.webp"
              alt="Pepe the Frog operates a comic machine that feeds a dollar coin through an arc monitor, privacy curtain, and finality stamp"
              className="mechanics__image"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
            <span className="mechanics__stamp" aria-hidden="true">
              ABSURD / ACCURATE
            </span>
          </div>
          <div className="mechanics__copy">
            <p className="scene-index">CHAPTER 03 / THE ACTUAL CHAIN</p>
            <h2 id="mechanics-title">THE JOKE RUNS ON REAL SPECS.</h2>
            <p>
              Strip away the photocopier and Arc is a stablecoin-native Layer 1. The machine is
              fiction. These properties are not.
            </p>
            <dl className="facts">
              {verifiedFacts.map(([term, description]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
            <p className="source-note">
              Verified against{" "}
              <a href="https://docs.arc.io/arc-chain" target="_blank" rel="noreferrer">
                Arc Docs
              </a>{" "}
              and the{" "}
              <a
                href="https://www.circle.com/pressroom/circle-launches-arc-public-testnet"
                target="_blank"
                rel="noreferrer"
              >
                Circle public-testnet announcement
              </a>
              .
            </p>
          </div>
        </section>

        <section id="machine" className="scene scene--paper machine" aria-labelledby="machine-title">
          <div className="machine__heading">
            <p className="scene-index">CHAPTER 04 / PLAYABLE EXPLANATION</p>
            <h2 id="machine-title">OPERATE THE FINALITY MACHINE.</h2>
            <p>Three clicks explain the chain. Zero clicks move money.</p>
          </div>

          <div className="machine__console" data-stage={machineStage}>
            <div className="machine__readout" aria-live="polite" aria-atomic="true">
              <span>ARC_MACHINE://STAGE_{machineStage}</span>
              <strong>{machineStates[machineStage].status}</strong>
              <p>{machineStates[machineStage].detail}</p>
            </div>

            <ol className="machine__controls">
              <li>
                <button
                  type="button"
                  disabled={machineStage !== 0}
                  onClick={() => setMachineStage(1)}
                >
                  <span>01</span> FEED GAS
                </button>
                <small>USDC enters the slot.</small>
              </li>
              <li>
                <button
                  type="button"
                  disabled={machineStage !== 1}
                  onClick={() => setMachineStage(2)}
                >
                  <span>02</span> DROP CURTAIN
                </button>
                <small>Privacy is opt-in.</small>
              </li>
              <li>
                <button
                  type="button"
                  disabled={machineStage !== 2}
                  onClick={() => setMachineStage(3)}
                >
                  <span>03</span> STAMP FINALITY
                </button>
                <small>Deterministic and sub-second.</small>
              </li>
            </ol>

            <div
              className={`machine__receipt ${machineStage === 3 ? "is-visible" : ""}`}
              aria-hidden={machineStage !== 3}
            >
              <span>COMIC RECEIPT</span>
              <strong>FINAL.</strong>
              <span>VALUE MOVED / $0</span>
            </div>

            {machineStage === 3 && (
              <button className="machine__reset" type="button" onClick={() => setMachineStage(0)}>
                RESET THE BIT ↺
              </button>
            )}
          </div>
        </section>

        <section id="movement" className="scene movement" aria-labelledby="movement-title">
          <p className="scene-index">CHAPTER 05 / THE MOVEMENT</p>
          <h2 id="movement-title">THE FEED IS THE CANON.</h2>
          <div className="movement__sequence" aria-label="Movement sequence">
            <span>POST</span>
            <i aria-hidden="true">→</i>
            <span>REMIX</span>
            <i aria-hidden="true">→</i>
            <span>LOOP</span>
            <i aria-hidden="true">→</i>
            <span>ARC</span>
          </div>
          <p className="movement__copy">
            The movement lives in vertical video. The contract comes later. The joke ships first.
            Every remix is another frame in the same terminally online story.
          </p>
          <p className="movement__aside">TIKTOK IS THE DISTRIBUTION LAYER. CHAOS IS THE EDITOR.</p>
        </section>

        <section id="deployment" className="scene deployment" aria-labelledby="deployment-title">
          <p className="scene-index">CHAPTER 06 / DEPLOYMENT STATUS</p>
          <h2 id="deployment-title">
            THE END WAS A
            <br />
            DEPLOYMENT ENVIRONMENT.
          </h2>
          <div className="deployment__status">
            <div>
              <span>CONTRACT</span>
              <strong>NOT DEPLOYED</strong>
            </div>
            <div>
              <span>TARGET</span>
              <strong>ARC</strong>
            </div>
            <div>
              <span>ARC MAINNET</span>
              <strong>16 SEP 2026*</strong>
            </div>
          </div>
          <p className="deployment__note">
            *Arc’s official site announces mainnet for 16 September 2026. Schedules can change.
            This site will not invent a contract address before one exists.
          </p>
          <div className="deployment__actions">
            <a href="https://docs.arc.io/arc-chain" target="_blank" rel="noreferrer">
              READ ARC DOCS ↗
            </a>
            <button type="button" onClick={() => scrollToId("opening")}>
              REPLAY FROM FRAME 00 ↑
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p>THE FINAL ARC / AN UNOFFICIAL INTERNET MOVEMENT</p>
        <p>Not affiliated with Circle or Arc. No token address is presented on this site.</p>
      </footer>
    </div>
  );
}
