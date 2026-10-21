import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  CornersScanDuotone,
  ShieldDuotone,
  SealCheckDuotone,
  FtnTokenCoin,
  GoogleLogo,
  PasskeyFingerprint,
} from '../Icons';
import styles from './styles.module.css';

export default function FeaturesBento() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="features.eyebrow">Kemudahan untuk Semua Orang</Translate>
          </span>
          <h2 className={styles.title}>
            <Translate id="features.title">
              Perlindungan Praktis untuk Pembeli, Kendali Penuh untuk Brand
            </Translate>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="features.subtitle">
              Tidak perlu mengerti istilah teknologi rumit. Flagshiiip dirancang agar siapa pun bisa memastikan keaslian barang belanjaan dan menerima hadiah hanya dengan satu kali scan kamera ponsel.
            </Translate>
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1: Span 2 - Realtime Scanner Viewfinder (Icon inside badge, no top-left box) */}
          <Link to="/docs/panduan-pengguna/scan-qr" className={`${styles.card} ${styles.spanTwo}`}>
            <div className={styles.cardGlowEffect} aria-hidden="true"></div>
            <div className={styles.cardHeaderClean}>
              <span className={styles.badgeHighlight}>
                <CornersScanDuotone size={14} className={styles.inlineBadgeIcon} />
                <span>Sangat Mudah Digunakan</span>
              </span>
            </div>
            
            <h3 className={styles.cardTitle}>Cek Keaslian 1-Detik Lewat Kamera Ponsel</h3>
            <p className={styles.cardDesc}>
              Buka aplikasi Flagshiiip di ponsel Anda, lalu arahkan kamera ke stiker di kemasan produk. Hasil keaslian langsung muncul di layar seketika: Anda langsung tahu barang tersebut 100% asli resmi dari produsen.
            </p>

            {/* Interactive Viewfinder UI Component */}
            <div className={styles.viewfinderBox}>
              <div className={styles.vfTop}>
                <span className={styles.vfStatusDot}></span>
                <span className={styles.vfStatusText}>KAMERA AKTIF • ARAHKAN KE STIKER KEMASAN</span>
              </div>
              <div className={styles.vfTarget}>
                <span className={`${styles.vfCorner} ${styles.vfTl}`}></span>
                <span className={`${styles.vfCorner} ${styles.vfTr}`}></span>
                <span className={`${styles.vfCorner} ${styles.vfBl}`}></span>
                <span className={`${styles.vfCorner} ${styles.vfBr}`}></span>
                <div className={styles.vfScanBeam}></div>
                <div className={styles.vfCenterCode}>
                  <span className={styles.vfSerial}>STIKER PRODUK RESMI</span>
                  <span className={styles.vfMatchTag}>100% TERBUKTI ASLI ✓</span>
                </div>
              </div>
            </div>

            <span className={styles.cardLink}>
              Lihat panduan scan <span className={styles.cardArrow}>→</span>
            </span>
          </Link>

          {/* Card 2: Span 1 - Anti-Duplikasi (Layered SVG symbol, no box wrapper) */}
          <Link to="/docs/teknologi/keamanan-dan-anti-duplikasi" className={styles.card}>
            <div className={styles.cardHeaderCleanBetween}>
              <div className={styles.layeredSymbol}>
                <ShieldDuotone size={28} />
              </div>
              <span className={styles.badge}>1 Barang = 1 Stiker</span>
            </div>
            <h3 className={styles.cardTitle}>Mustahil Difotokopi atau Digandakan</h3>
            <p className={styles.cardDesc}>
              Setiap stiker fisik memiliki kode unik yang hanya bisa didaftarkan satu kali. Jika ada oknum mencoba memfotokopi stiker Anda, sistem langsung menolak dan membunyikan peringatan.
            </p>
            <div className={styles.cryptoNonceBox}>
              <div className={styles.nonceRow}>
                <span className={styles.nonceKey}>STATUS KODE:</span>
                <span className={styles.nonceValLocked}>HANYA KLAIM 1x</span>
              </div>
              <div className={styles.nonceHash}>Stiker Terkunci Aman Setelah Scan Pertama</div>
            </div>
            <span className={styles.cardLink}>
              Cara kerjanya <span className={styles.cardArrow}>→</span>
            </span>
          </Link>

          {/* Card 3: Span 1 - Sertifikat Kepemilikan Digital (SealCheck Duotone, no emoji) */}
          <Link to="/docs/cara-kerja/kepemilikan-digital" className={styles.card}>
            <div className={styles.cardHeaderCleanEnd}>
              <span className={styles.badge}>Bukti Sah Pembeli</span>
            </div>
            <h3 className={styles.cardTitle}>Sertifikat Digital di Saku Anda</h3>
            <p className={styles.cardDesc}>
              Setelah memindai barang, Anda otomatis menerima sertifikat kepemilikan resmi yang tersimpan di akun Anda sebagai bukti keaslian saat ingin menjual kembali barang koleksi Anda.
            </p>
            <div className={styles.certBadgePreview}>
              <div className={styles.certSealIcon}>
                <SealCheckDuotone size={30} />
              </div>
              <div className={styles.certBadgeText}>
                <span className={styles.certTitle}>Sertifikat Orisinalitas Resmi</span>
                <span className={styles.certPolygon}>TERSIMPAN PERMANEN DI HP ANDA</span>
              </div>
            </div>
            <span className={styles.cardLink}>
              Pelajari sertifikat <span className={styles.cardArrow}>→</span>
            </span>
          </Link>

          {/* Card 4: Span 2 - Loyalitas Menjadi Aset (FTN Token Coin, no generic box) */}
          <Link to="/docs/token/token-ftn" className={`${styles.card} ${styles.spanTwo}`}>
            <div className={styles.cardGlowEffectPurple} aria-hidden="true"></div>
            <div className={styles.cardHeaderCleanBetween}>
              <div className={styles.tokenBrandPill}>
                <FtnTokenCoin size={26} />
                <span className={styles.tokenBrandName}>FTN Tokenium</span>
              </div>
              <span className={styles.badgeReward}>Bukan Poin Belanja Biasa</span>
            </div>
            <h3 className={styles.cardTitle}>Dapatkan Hadiah Token FTN Bernilai Riil</h3>
            <p className={styles.cardDesc}>
              Setiap kali Anda memverifikasi produk asli, Anda dihadiahi token digital FTN. Berbeda dari poin toko biasa yang punya masa kedaluwarsa dan bisa hangus sepihak, token FTN adalah hak milik Anda seutuhnya, tidak bisa hangus, dan bernilai ekonomis nyata.
            </p>

            {/* Wallet Token Balance Card Simulation */}
            <div className={styles.walletBox}>
              <div className={styles.walletHeader}>
                <div className={styles.walletMeta}>
                  <span className={styles.walletLabel}>SALDO DOMPET DIGITAL ANDA</span>
                  <span className={styles.walletAddress}>Terhubung Aman di Ponsel Anda</span>
                </div>
                <div className={styles.gaslessTag}>Bebas Biaya Admin ✨</div>
              </div>
              <div className={styles.walletAmountRow}>
                <div className={styles.coinBalanceIcon}>
                  <FtnTokenCoin size={32} />
                </div>
                <span className={styles.walletNumber}>250.00</span>
                <span className={styles.walletCurrency}>FTN Token</span>
                <span className={styles.walletGain}>+50 FTN Hadiah Baru Saja Masuk!</span>
              </div>
            </div>

            <span className={styles.cardLink}>
              Pelajari hadiah token FTN <span className={styles.cardArrow}>→</span>
            </span>
          </Link>

          {/* Card 5: Span 1 - Ramah Pengguna Awam (Google G SVG + Passkey Biometric) */}
          <Link to="/docs/teknologi/blockchain" className={styles.card}>
            <div className={styles.cardHeaderCleanEnd}>
              <span className={styles.badge}>Langsung Pakai</span>
            </div>
            <h3 className={styles.cardTitle}>Mudah untuk Pemula &amp; Pengguna Awam</h3>
            <p className={styles.cardDesc}>
              Tidak perlu menghafal sandi rumit atau paham dunia kripto. Anda bisa langsung masuk menggunakan akun Google atau Apple hanya dengan satu kali ketuk.
            </p>
            <div className={styles.socialLoginBox}>
              <div className={styles.loginProvidersGroup}>
                <GoogleLogo size={20} />
                <span className={styles.loginDivider}>•</span>
                <PasskeyFingerprint size={20} color="#38bdf8" />
              </div>
              <span className={styles.loginText}>Masuk Cepat via Google &amp; Biometrik</span>
            </div>
            <span className={styles.cardLink}>
              Panduan pemula <span className={styles.cardArrow}>→</span>
            </span>
          </Link>

          {/* Card 6: Span 2 - Dashboard Monitoring & Deteksi Anomali (Node Network, no rigid box) */}
          <Link to="/docs/layanan/paket-layanan" className={`${styles.card} ${styles.spanTwo}`}>
            <div className={styles.cardHeaderCleanBetween}>
              <div className={styles.nodeNetworkIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" fill="#38bdf8" fillOpacity="0.25"/>
                  <circle cx="6" cy="12" r="3" fill="#38bdf8" fillOpacity="0.25"/>
                  <circle cx="18" cy="19" r="3" fill="#38bdf8" fillOpacity="0.25"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </div>
              <span className={styles.badge}>Khusus Pemilik Merek (Brand)</span>
            </div>
            <h3 className={styles.cardTitle}>Pantau Distribusi Produk &amp; Tangkal Pemalsuan</h3>
            <p className={styles.cardDesc}>
              Bagi pemilik bisnis atau produsen, Anda mendapatkan panel kontrol langsung untuk melihat di kota mana saja produk Anda sedang dipindai oleh pembeli, serta menerima alarm otomatis jika ada oknum yang mencoba memalsukan produk Anda di lapangan.
            </p>

            {/* Radar Telemetry Live Widget */}
            <div className={styles.telemetryBox}>
              <div className={styles.radarVisual}>
                <div className={styles.radarCircle1}></div>
                <div className={styles.radarCircle2}></div>
                <div className={styles.radarSweep}></div>
                <span className={`${styles.radarBlip} ${styles.blipJakarta}`}></span>
                <span className={`${styles.radarBlip} ${styles.blipSurabaya}`}></span>
                <span className={`${styles.radarBlip} ${styles.blipBali}`}></span>
              </div>
              <div className={styles.telemetryStats}>
                <div className={styles.telItem}>
                  <span className={styles.telVal}>48,290</span>
                  <span className={styles.telLabel}>Produk Terverifikasi Pembeli</span>
                </div>
                <div className={styles.telItem}>
                  <span className={styles.telValGreen}>0 Masalah</span>
                  <span className={styles.telLabel}>Pelanggaran / Pemalsuan</span>
                </div>
              </div>
            </div>

            <span className={styles.cardLink}>
              Pelajari solusi perlindungan brand <span className={styles.cardArrow}>→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
