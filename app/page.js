import styled from './landing.module.css';
import Logo from './components/Logo';
import ImageCover from './components/ImageCover';
import MtHood from '@/public/landing-image.jpg';
import LandingLogo from './components/LandingLogo';
import LinkedIn from '@/public/linkedin.svg';
import GitHub from '@/public/github.svg';
import Image from 'next/image'

export const metadata = {
  title: 'Code Cascade',
  description: 'A web development blog for the curious and the experienced.',
  openGraph: {
    title: 'Code Cascade',
    description: 'A web development blog for the curious and the experienced.',
    images: [{
      url: '@/public/meta-image.png',
      width: 800,
      height: 600
    }]
  }
}

export default function Home() {
  return (
    <section className={styled.landingWrapper}>
      <LandingLogo>
        <Logo>Code Cascade</Logo>
        <p>A web development blog for the curious and the experienced.</p>
        <p>Code Cascade is developed and ran by <a href="https://github.com/StaticCloud">Diego Marrs</a></p>
        <div>
          <a href="https://github.com/StaticCloud" target="_blank">
            <Image src={GitHub} alt="GitHub Icon" width={'30'} height={'30'} />
          </a>
          <a href="https://www.linkedin.com/in/diego-marrs/" target="_blank">
            <Image src={LinkedIn} alt="LinkedIn Icon" width={'30'} height={'30'} />
          </a>
        </div>
      </LandingLogo>
      <ImageCover image={MtHood} alt={"Mt. Hood"} />
    </section>
  )
}
