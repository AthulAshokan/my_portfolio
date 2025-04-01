import React from 'react'
import './App.css'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/herosection/HeroMain'
import HeroGradient from './components/herosection/HeroGradient'
import SubHeroSection from './components/herosection/SubHeroSection'
import AboutMeMain from './components/aboutSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillMain from './components/skillSection/SkillMain'
import SubSkill from './components/skillSection/SubSkill'
import ExperianceMain from './components/experianceSection/ExperianceMain'
import ProjectMain from './components/projectSection/ProjectMain'
import ContactMeMain from './components/contactSection/ContactMeMain'

function App() {
  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillMain/>
      <SubSkill/>
      <ExperianceMain/>
      <ProjectMain/>
      <ContactMeMain/>

      <HelperSection/>
    </main>
  )
}

export default App
