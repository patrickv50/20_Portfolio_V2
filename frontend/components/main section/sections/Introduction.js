import { Button, Link, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { BiRightArrowAlt } from 'react-icons/bi'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { DiJavascript1, DiGit, DiHeroku } from 'react-icons/di'
import {
  SiDocker,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVisualstudiocode,
  SiNextdotjs,
  SiRedux,
  SiMaterialui,
  SiVercel,
  SiSocketdotio,
  SiDotnet
} from 'react-icons/si'
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa'
import { FiChevronsDown } from 'react-icons/fi'

let props = { style: { fontSize: '1.5rem' } }
let cards = [
  {
    logo: <DiJavascript1 key='19' {...props} />,
    name: 'Javascript'
  }, {
    logo: <FaReact key='6' {...props} />,
    name: 'React'
  },
  {
    logo: <SiMongodb key='4' {...props} />,
    name: 'MongoDB'
  },
  {
    logo: <SiExpress key='5' {...props} />,
    name: 'Express'
  },

  {
    logo: <SiNextdotjs key='9' {...props} />,
    name: 'Next'
  },
  {
    logo: <SiRedux key='10' {...props} />,
    name: 'Redux'
  },
  {
    logo: <FaSass key='11' {...props} />,
    name: 'Sass'
  },
  {
    logo: <SiDotnet key='17' {...props} />,
    name: '.Net'
  },

]

const Introduction = () => {

  const [fadeClass, setFadeClass] = useState('intro-fade')
  useEffect(() => {
    setFadeClass('intro-fade-done')
  }, [])
  return (
    <Box
      display='flex'
      className={fadeClass}
      style={{ transitionDelay: `900ms` }}
      sx={{
        flexDirection:'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      {/* SUMMARY AND CARDS HERE ===== */}
      <Box
        display='flex'
        sx={{
          flex:'1 1 auto',
          width: '100%',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          alignContent:'center',
          alignItems:'center',
          justifyContent: 'center',
        }}
      >
        {/* SUMMARY ABOUT ME HERE========== */}
        <Box
          className='fade'
          sx={{
            flex: '0 2 450px',
            textAlign: { xs: 'center', md: 'left' },
            mb: 4
          }}
        >
          <Typography
            variant='h1'
            color='text.primary'
            sx={{
              my: 1,
              lineHeight: '1',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            Hey there,
          </Typography>
          <Typography
            variant='h1'
            color='primary.main'
            fontWeight='600'
            sx={{
              lineHeight: '1',
              fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.7rem', lg: '4.5rem' },
            }}
          >
            {`I'm Patrick`}
          </Typography>
          <Typography
            variant='h1'
            color='text.primary'
            sx={{
              my: 1,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
            }}>
            {`Fullstack Software Engineer`}
          </Typography>
          <Button
            href='/#projects'
            variant='contained'
            size='small'
            sx={{ mr: 1, textTransform: 'none' }}
          >
            Projects
          </Button>
          <Button
            href='/ResumePatrickValera.pdf'
            variant='outlined'
            size='small'
            sx={{ textTransform: 'none' }}

          >
            Resume
          </Button>
        </Box>
        {/* CARDS HERE ===================== */}
        <Box
          display='flex'
          sx={{
            flex: '0 1 450px',
            flexWrap: 'wrap',
          }}
        >
          {cards.map(card => (
            <Card key={card.name} card={card} />
          ))}
        </Box>
      </Box>
      {/* BUTTON HERE ======= */}
      <Box
        textAlign='center'
        sx={{ flex:'0 1 20vh' }}>
        <Button href='#projects' variant='text' sx={{ fontSize: '5rem' }}><FiChevronsDown /></Button>
      </Box>
    </Box>
  )
}
const Card = ({ card }) => (

  <Paper elevation={0} sx={{ display: 'flex', flex: '1 1 21%', m: '1%', aspectRatio: '1/1', justifyContent: 'center', alignItems: 'center', }}>
    <Box sx={{ textAlign: 'center' }} >
      {card.logo}
      <Typography variant='body1'>{card.name}</Typography>
    </Box>
  </Paper>
)
export default Introduction
