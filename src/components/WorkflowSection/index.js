import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  PackageQrDuotone,
  CornersScanDuotone,
  SealCheckDuotone,
  WalletTokenDuotone,
} from '../Icons';
import styles from './styles.module.css';

const steps = [
  {
    step: '01',
    tag: 'Langkah 1',
    title: 'Beli Produk Berstiker Resmi',
    desc: 'Pastikan barang yang Anda beli di toko resmi memiliki stiker khusus Flagshiiip di bagian kemasannya.',
    icon: <PackageQrDuotone size={34} />,
  },
  {
    step: '02',
    tag: 'Langkah 2',
    title: 'Pindai Pakai Kamera Ponsel',
    desc: 'Buka aplikasi Flagshiiip di ponsel Anda, lalu arahkan kamera ke stiker. Sistem memeriksa keaslian dalam waktu kurang dari 1 detik.',
    icon: <CornersScanDuotone size={34} />,
  },
  {
    step: '03',
    tag: 'Langkah 3',
    title: 'Terima Sertifikat Digital',
    desc: 'Sistem langsung menerbitkan sertifikat kepemilikan resmi yang tersimpan aman di akun ponsel Anda sebagai bukti sah.',
    icon: <SealCheckDuotone size={34} />,
  },
  {
    step: '04',
    tag: 'Langkah 4',
    title: 'Klaim Hadiah Token FTN',
    desc: 'Dapatkan hadiah token FTN langsung ke akun Anda tanpa potongan biaya apa pun, siap disimpan atau ditukarkan kapan saja.',
    icon: <WalletTokenDuotone size={34} />,
  },
];

export default function WorkflowSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="workflow.eyebrow">Alur Penggunaan</Translate>
          </span>
          <h2 className={styles.title}>
            <Translate id="workflow.title">Semudah 4 Langkah Cepat</Translate>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="workflow.subtitle">
              Dari kemasan produk hingga hadiah tersimpan di saku Anda, semua proses berlangsung otomatis tanpa repot.
            </Translate>
          </p>
        </div>

        {/* Pipeline Cards Grid */}
        <div className={styles.pipelineWrapper}>
          <div className={styles.pipelineLine} aria-hidden="true"></div>
          
          <div className={styles.stepsGrid}>
            {steps.map((item, idx) => (
              <div key={idx} className={styles.stepCard}>
                {/* Header: Large Typography Number + Duotone Icon (No solid box, no duplicate icon) */}
                <div className={styles.stepTopRow}>
                  <span className={styles.stepHugeNumber}>{item.step}</span>
                  <div className={styles.stepDuotoneIcon}>
                    {item.icon}
                  </div>
                </div>

                <div className={styles.stepBadgeWrapper}>
                  <span className={styles.stepTag}>{item.tag}</span>
                </div>

                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.actionRow}>
          <Link to="/docs/cara-kerja/alur-produk" className={styles.guideBtn}>
            <span>Lihat Panduan Lengkap Langkah Demi Langkah</span>
            <span className={styles.btnArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
