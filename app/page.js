import styled from './landing.module.css';
import Logo from './components/Logo';

export default function Home() {
  return (
    <section className={styled.landingWrapper}>
      <div>
        <Logo>Code Cascade</Logo>
        <p>A web development blog for the curious and the experienced.</p>
        <p>Code Cascade is developed and ran by <a href="https://github.com/StaticCloud">Diego Marrs</a></p>
      </div>
    </section>
  )
}
