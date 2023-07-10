import Button from './components/Button';
import styled from './landing.module.css';

export default function Home() {
  return (
    <section className={styled.landingWrapper}>
      <div>
        <h1>Code Cascade</h1>
        <p>A web development blog for the curious and the experienced.</p>
        <Button text='VIEW ARTICLES'/>
      </div>
    </section>
  )
}
