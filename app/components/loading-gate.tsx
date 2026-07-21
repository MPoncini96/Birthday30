"use client";

import { useEffect, useMemo, useState } from "react";

const treeIconSrc =
  "/BackgroundTrees/182-1826674_evergreen-tree-clipart-pine-tree-clipart-black-and-white.png";

type LoadingGateProps = {
  children: React.ReactNode;
  imageSources: string[];
};

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();

    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

export function LoadingGate({ children, imageSources }: LoadingGateProps) {
  const [isLoading, setIsLoading] = useState(true);

  const uniqueSources = useMemo(() => Array.from(new Set(imageSources)), [imageSources]);

  useEffect(() => {
    let isActive = true;

    document.body.classList.add("page-is-loading");

    Promise.all(uniqueSources.map((src) => preloadImage(src))).then(() => {
      if (!isActive) {
        return;
      }

      window.setTimeout(() => {
        if (!isActive) {
          return;
        }

        document.body.classList.remove("page-is-loading");
        setIsLoading(false);
      }, 250);
    });

    return () => {
      isActive = false;
      document.body.classList.remove("page-is-loading");
    };
  }, [uniqueSources]);

  return (
    <>
      {children}
      <div
        aria-hidden={!isLoading}
        className={`loading-screen${isLoading ? "" : " loading-screen--hidden"}`}
      >
        <div className="loading-screen__content">
          <div className="loading-screen__trees" aria-hidden="true">
            <img className="loading-screen__tree loading-screen__tree--left" src={treeIconSrc} alt="" />
            <img className="loading-screen__tree loading-screen__tree--center" src={treeIconSrc} alt="" />
            <img className="loading-screen__tree loading-screen__tree--right" src={treeIconSrc} alt="" />
          </div>
          <p className="loading-screen__eyebrow">Loading photos</p>
          <h2>Getting camp ready...</h2>
        </div>
      </div>
    </>
  );
}
