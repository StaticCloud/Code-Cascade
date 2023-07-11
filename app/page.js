import Button from './components/Button';
import styled from './landing.module.css';

export default function Home() {
  return (
    <section className={styled.landingWrapper}>
      <div>
        <h1>Code Cascade</h1>
        <p>A web development blog for the curious and the experienced.</p>
        <p>Code Cascade is developed and ran by <a href="https://github.com/StaticCloud">Diego Marrs</a></p>
        <Button text='Articles'/>
      </div>
    </section>
  )
}
