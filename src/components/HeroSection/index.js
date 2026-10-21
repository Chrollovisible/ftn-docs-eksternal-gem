import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  CheckCircleSolid,
  VerifiedSeal,
  FtnTokenCoin,
  ShieldDuotone,
  LightningDuotone,
  GiftTokenDuotone,
  CertificateDuotone,
} from '../Icons';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background glow & subtle pattern */}
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.gridPattern}></div>
        <div className={`${styles.glow} ${styles.glowOne}`}></div>
        <div className={`${styles.glow} ${styles.glowTwo}`}></div>
        <div className={`${styles.glow} ${styles.glowThree}`}></div>
      </div>

      <div className={styles.container}>
        {/* Left Column: Hero Typography & Actions */}
        <div className={styles.content}>
          {/* Live Status Pill */}
          <Link to="/docs/pengenalan/apa-itu-flagshiiip" className={styles.announcement}>
            <span className={styles.livePulseDot}></span>
            <span className={styles.badge}>
              <Translate id="hero.badge">Solusi Anti-Palsu</Translate>
            </span>
            <span className={styles.badgeText}>
              <Translate id="hero.announcement">
                Panduan Mudah Verifikasi Produk &amp; Klaim Hadiah
              </Translate>
            </span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>

          {/* Main Title */}
          <h1 className={styles.title}>
            <Translate id="hero.title.part1">Pastikan Produk 100% Asli.</Translate>
            <br />
            <span className={styles.gradientAccent}>
              <Translate id="hero.title.part2">Dapatkan Hadiah yang Jadi Milik Anda.</Translate>
            </span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            <Translate id="hero.subtitle">
              Cukup buka kamera ponsel dan arahkan ke stiker khusus di kemasan produk.
              Dalam 1 detik, Anda langsung tahu barang tersebut 100% asli resmi dari produsen,
              menerima bukti sertifikat kepemilikan digital, dan mendapatkan hadiah token FTN tanpa potongan biaya apa pun.
            </Translate>
          </p>

          {/* CTA Action Buttons */}
          <div className={styles.actions}>
            <Link
              to="/docs/panduan-pengguna/install-aplikasi"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              <span>
                <Translate id="hero.cta.start">Mulai Panduan Pengguna</Translate>
              </span>
              <span className={styles.btnArrow}>→</span>
            </Link>

            <Link
              to="/docs/layanan/paket-layanan"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <Translate id="hero.cta.brand">Solusi untuk Pemilik Brand</Translate>
            </Link>
          </div>

          {/* 3 Inline Trust Highlights: Solid Emerald Check Circle, No Wrapping Boxes */}
          <div className={styles.trustHighlights}>
            <div className={styles.trustItem}>
              <CheckCircleSolid size={16} />
              <span>Cek Cepat &lt; 1 Detik</span>
            </div>
            <span className={styles.trustDivider}>•</span>
            <div className={styles.trustItem}>
              <CheckCircleSolid size={16} />
              <span>Bebas Biaya Admin</span>
            </div>
            <span className={styles.trustDivider}>•</span>
            <div className={styles.trustItem}>
              <CheckCircleSolid size={16} />
              <span>Bisa di Android &amp; iPhone</span>
            </div>
          </div>
        </div>

        {/* Right Column: Phone Showcase with Verified Seal & FTN Coin */}
        <div className={styles.visual}>
          <div className={styles.phoneAura} aria-hidden="true"></div>

          {/* Floating Card 1: Top Left - Animated Verified Seal */}
          <div className={`${styles.floatingCard} ${styles.floatTopLeft}`}>
            <div className={styles.floatCardInner}>
              <div className={styles.floatSealWrapper}>
                <VerifiedSeal size={28} />
              </div>
              <div className={styles.floatText}>
                <span className={styles.floatTitle}>Produk 100% Asli</span>
                <span className={styles.floatMeta}>Resmi dari Pabrik Produsen</span>
              </div>
              <span className={styles.verifiedTag}>Terverifikasi</span>
            </div>
          </div>

          {/* Floating Card 2: Bottom Right - Official FTN Token Coin */}
          <div className={`${styles.floatingCard} ${styles.floatBottomRight}`}>
            <div className={styles.floatCardInner}>
              <div className={styles.floatCoinWrapper}>
                <FtnTokenCoin size={32} />
              </div>
              <div className={styles.floatText}>
                <span className={styles.floatTitle}>+50 Hadiah Token FTN</span>
                <span className={styles.floatMeta}>Langsung Masuk ke Akun Anda</span>
              </div>
              <span className={styles.tokenTag}>Hak Milik</span>
            </div>
          </div>

          {/* Central Smartphone Chassis */}
          <div className={styles.phoneWrapper}>
            <div className={styles.phoneFrame}>
              {/* Speaker & Dynamic Notch */}
              <div className={styles.phoneTop}>
                <div className={styles.speakerSlit}></div>
                <div className={styles.cameraHole}></div>
              </div>

              {/* Screen displaying official Scanner UI */}
              <div className={styles.phoneScreen}>
                <img
                  src={useBaseUrl('/img/scan.png')}
                  alt="Flagshiiip Smart Scanner"
                  className={styles.scanImage}
                  width="375"
                  height="812"
                  loading="eager"
                />

                {/* Calibrated Laser Scanner Animation */}
                <div className={styles.scanOverlay}>
                  <div className={styles.laserScanLine}></div>
                  <div className={styles.laserScanGlow}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Key Metrics Strip with Duotone Icons without box wrapping */}
      <div className={styles.metricsWrapper}>
        <div className={styles.heroMetricsStrip}>
          <div className={styles.metricItem}>
            <div className={styles.metricDuotoneIcon}>
              <ShieldDuotone size={30} />
            </div>
            <div className={styles.metricText}>
              <span className={styles.metricValue}>100% Anti-Palsu</span>
              <span className={styles.metricDesc}>1 Stiker = 1 Kode Unik Fisik</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricDuotoneIcon}>
              <LightningDuotone size={30} />
            </div>
            <div className={styles.metricText}>
              <span className={styles.metricValue}>Cepat &amp; Praktis</span>
              <span className={styles.metricDesc}>Scan Kamera HP &lt; 1 Detik</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricDuotoneIcon}>
              <GiftTokenDuotone size={30} />
            </div>
            <div className={styles.metricText}>
              <span className={styles.metricValue}>Hadiah Milik Anda</span>
              <span className={styles.metricDesc}>Token FTN Tanpa Batas Hangus</span>
            </div>
          </div>
          <div className={styles.metricDivider}></div>
          <div className={styles.metricItem}>
            <div className={styles.metricDuotoneIcon}>
              <CertificateDuotone size={30} />
            </div>
            <div className={styles.metricText}>
              <span className={styles.metricValue}>Bukti Sah di Ponsel</span>
              <span className={styles.metricDesc}>Sertifikat Kepemilikan Resmi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
