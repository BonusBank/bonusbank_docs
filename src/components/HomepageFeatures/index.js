import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Documentation",
    Svg: require("@site/static/img/docs.svg").default,
    href: "/docs/docs-intro",
    description: (
      <>
        Our Apps have a lot of great features, explore them and understand how and when to use them!
      </>
    ),
  },
  {
    title: "Guides & Tutorials",
    Svg: require("@site/static/img/guides.svg").default,
    href: "/guides/guides-intro",
    description: (
      <>
        Need help getting started? Check our Guides and Tutorials to ease the implementation process.
      </>
    ),
  },
  {
    title: "News",
    Svg: require("@site/static/img/news.svg").default,
    href: "/news",
    description: (
      <>
        Explore and read the latest news about the changes made to our application.
      </>
    ),
  },
];

function Feature({ Svg, title, description, href }) {
  return (
    <div className={clsx("col col--4")}>
      <a href={href}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
