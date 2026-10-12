import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Verifikasi Keaslian',
    description: (
      <>Pindai QR di kemasan untuk memastikan produk asli dan terdaftar.</>
    ),
  },
  {
    title: 'Kepemilikan Digital',
    description: (
      <>Catat kepemilikan produk dan lihat sertifikat keaslian digitalnya.</>
    ),
  },
  {
    title: 'Loyalitas Berbasis Token',
    description: (
      <>Program loyalitas pelanggan yang didukung teknologi blockchain.</>
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