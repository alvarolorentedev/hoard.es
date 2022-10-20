import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Community Driven',
    Svg: require('@site/static/img/undraw_community.svg').default,
    description: (
      <>
        Community driven knowledge base. We wont share anything we dont use or do ourselves.
      </>
    ),
  },
  {
    title: 'For Everyone',
    Svg: require('@site/static/img/undraw_children.svg').default,
    description: (
      <>
        We will explain things in a simple way.
      </>
    ),
  },
  {
    title: 'Not A Get Rich Scheme',
    Svg: require('@site/static/img/undraw_savings.svg').default,
    description: (
      <>
        We want to share ideas not to try to sell people a fake get rich scheme that will make them lose money.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
