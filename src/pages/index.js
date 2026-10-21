import React from 'react';
import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HeroSection from '@site/src/components/HeroSection';
import CategoryMarquee from '@site/src/components/CategoryMarquee';
import ComparisonSection from '@site/src/components/ComparisonSection';
import FeaturesBento from '@site/src/components/FeaturesBento';
import WorkflowSection from '@site/src/components/WorkflowSection';
import CtaSection from '@site/src/components/CtaSection';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={translate({
        id: 'homepage.layoutTitle',
        message: 'Flagshiiip Docs - Panduan Verifikasi Produk Asli & Hadiah Digital',
      })}
      description={translate({
        id: 'homepage.layoutDescription',
        message:
          'Panduan resmi verifikasi keaslian produk fisik dengan stiker pintar dan program hadiah digital Flagshiiip (FTN) yang mudah digunakan oleh siapa saja.',
      })}>
      <main>
        <HeroSection />
        <CategoryMarquee />
        <ComparisonSection />
        <FeaturesBento />
        <WorkflowSection />
        <CtaSection />
      </main>
    </Layout>
  );
}