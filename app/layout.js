import StyledComponentsRegistry from './registry';
import { Raleway } from 'next/font/google'
import styles from './styles.module.css';
import Header from './components/Header';
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
          <Header/>
            <main className={styles.mainContent}>
              {children}
            </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
