import Layout from "../components/Layout"
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonials'
import Hero from '../components/Hero'
import HomeHeader from '../components/HomeHero'

import Card from '../components/Card'
import Features from '../components/Features'
export default function Home(){


    return (
        <>
        <Layout >
        <Hero />
        <Card />
        <Testimonial />
        <Features />
        <Stats />
        </Layout>
        </>
    )
}