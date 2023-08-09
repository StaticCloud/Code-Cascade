import styled from '@/app/landing.module.css'

export default function AboutLayout({ children }) {
    return (
        <section className={styled.landingWrapper}>
            { children }
        </section>
    );
}