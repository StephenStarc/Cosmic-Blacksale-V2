import Layout from "../components/Layout"
import Context from "../context/Context"
import { useContext } from "react"
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonials'
import Hero from '../components/Hero'
import HomeHeader from '../components/HomeHero'
import Logos from '../components/Logos'
import Card from '../components/Card'
import Features from '../components/Features'
export default function Home(){


    return (
        <>
        <Layout >
        <HomeHeader />
        <Logos />
        <Card />
        <Testimonial />
        <Features />
        <Hero />
        <Stats />
        </Layout>
        </>
    )
}