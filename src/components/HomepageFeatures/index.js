import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <Translate id="homepage.feature1.title">Verifikasi Keaslian</Translate>
    ),
    description: (
      <Translate id="homepage.feature1.description">
        Pindai QR di kemasan untuk memastikan produk asli dan terdaftar.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature2.title">Kepemilikan Digital</Translate>
    ),
    description: (
      <Translate id="homepage.feature2.description">
        Catat kepemilikan produk dan lihat sertifikat keaslian digitalnya.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature3.title">Loyalitas Berbasis Token</Translate>
    ),
    description: (
      <Translate id="homepage.feature3.description">
        Program loyalitas pelanggan yang didukung teknologi blockchain.
      </Translate>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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