import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Libre et ouvert',
    Svg: require('@site/static/img/api-interface-svgrepo-com.svg').default,
    description: (
      <>
        CSAN est un projet de partage de conteneurs libre et ouvert, interconnectable avec les outils du marché.
      </>
    ),
  },
  {
    title: 'Sécurité au centre',
    Svg: require('@site/static/img/safe-and-stable-svgrepo-com.svg').default,
    description: (
      <>
        CSAN apporte des outils de sécurité pour scanner vos images et assurer la tracabilité des outils. 
      </>
    ),
  },
  {
    title: 'Par la communauté, pour la communauté',
    Svg: require('@site/static/img/student-svgrepo-com.svg').default,
    description: (
      <>
        La plateforme CSAN à été concue par et pour le monde de l'éducation supérieure et de la recherche, en adressant des besoins spécifiques (reproductibilité, interopérabilité, partage, authentification...)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
