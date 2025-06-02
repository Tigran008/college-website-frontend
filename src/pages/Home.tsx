import React from 'react'
import { Typography } from 'antd'
import News from '../components/News';
import Events from '../components/Events';
import Announcements from '../components/Announcements';

const { Title, Text } = Typography;

const Home:React.FC = () => {
  return (
    <div className='home-page'>
      <div className="home-page-image">
        <img src="/images/bannerImage.png" alt="background" />
      </div>

      <div className="home-page-hero">
        <div className="home-page-hero-text">
          <Title level={1}>Բարի գալուստ Պոլիտեխնիկական քոլեջի պաշտոնական կայք</Title>
          <Text>Այստեղ Դուք կարող եք ստանալ ընդգրկուն և լիարժեք տեղեկատվություն քոլեջի կառուցվածքի և գործունեության մասին</Text><br />
          <img src="/images/line.jpg" alt="image" />
        </div>
      </div>

      <News />
      <Events />  
      <Announcements />

      <div className='decorative-bg'>

      </div>

    </div>
  )
}

export default Home