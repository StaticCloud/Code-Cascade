import StyledComponentsRegistry from './registry';
import Image from 'next/image';
import vancouver from './vanc.jpg';
import { Raleway } from 'next/font/google'
import styles from './styles.module.css';
import './global.css';

const inter = Raleway({ 
  weight: ['400', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export const metadata = {
  title: 'Code Cascade',
  description: 'A web development blog for the curious and the experienced.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <main className={styles.mainContent}>
            {children}
          </main>
          <Image 
            src={vancouver} 
            alt="vanc"
            style={{
              width: '50vw;',
              height: '100svh',
              position: 'fixed',
              top: '0',
              left: '50vw',
              objectFit: 'cover',
              objectPosition: 'left',
              clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)'
            }}
          />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
