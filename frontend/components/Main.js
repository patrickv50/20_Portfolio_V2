import { Container } from '@mui/material'
import React from 'react'
import About from './main section/sections/About'
import Contact from './main section/sections/Contact'
import Introduction from './main section/sections/Introduction'
import Projects from './main section/sections/Projects'
import { SocialsNav } from '../components/main section/sections/SocialsNav'

const Main = ({ profile: { projects, socials } }) => {
    return (
        <Container component='main' maxWidth='lg' sx={{ px:0 }}>
            <Introduction />
            <About />
            <Projects projects={projects} />
            <Contact />
            <SocialsNav socials={socials} />
        </Container>
    )
}

export default Main