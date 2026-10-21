import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { CheckCircleSolid } from '../Icons';
import styles from './styles.module.css';

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.meshGlow} aria-hidden="true"></div>
          
          <div className={styles.content}>
            <div className={styles.badgeWrapper}>
              <span className={styles.pulseDot}></span>
              <span className={styles.badge}>
                <Translate id="cta.badge">Mulai Sekarang, Gratis &amp; Mudah</Translate>
              </span>
            </div>

            <h2 className={styles.title}>
              <Translate id="cta.title">
                Siap Memastikan Keaslian Produk &amp; Mengklaim Hadiah Anda?
              </Translate>
            </h2>

            <p className={styles.subtitle}>
              <Translate id="cta.subtitle">
                Pelajari panduan mudah cara menggunakan aplikasi untuk memindai barang belanjaan Anda,
                atau daftarkan merek bisnis Anda agar produk fisik terlindungi dari sindikat pemalsuan.
              </Translate>
            </p>

            <div className={styles.actions}>
              <Link
                to="/docs/panduan-pengguna/install-aplikasi"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                <span>
                  <Translate id="cta.btn.user">Mulai Panduan Pengguna</Translate>
                </span>
                <span className={styles.arrow}>→</span>
              </Link>
              <Link
                to="/docs/layanan/paket-layanan"
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                <Translate id="cta.btn.brand">Solusi untuk Pemilik Brand</Translate>
              </Link>
            </div>

            <div className={styles.trustBadges}>
              <div className={styles.trustItem}>
                <CheckCircleSolid size={16} />
                <span>Dijamin Aman &amp; Resmi</span>
              </div>
              <span className={styles.trustDot}>•</span>
              <div className={styles.trustItem}>
                <CheckCircleSolid size={16} />
                <span>Bisa untuk Android &amp; iPhone</span>
              </div>
              <span className={styles.trustDot}>•</span>
              <div className={styles.trustItem}>
                <CheckCircleSolid size={16} />
                <span>Bebas Biaya Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
