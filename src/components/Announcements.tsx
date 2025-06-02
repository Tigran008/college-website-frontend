import React, { useState, useEffect } from 'react';
import { Card, Carousel, Typography } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import Underline from './Underline';

const { Title } = Typography;
const { Meta } = Card;

const announcementsData = [
    {
      id: 1,
      title: 'Նոր համագործակցություն «Գիտության Նախաձեռնություն» հիմնադրամի հետ',
      description: 'Ստորագրվեց հուշագիր՝ նպատակ ունենալով խթանել գիտահետազոտական նախագծերի իրականացումը դպրոցներում և բուհերում:',
      image: 'https://cdn.infocom.am/enlarge?file=2022-11-10-079ecf0a-9ffb-4878-b9a1-a82727a1bfdc.jpg&type=jpeg&width=900&height=506',
    },
    {
      id: 2,
      title: 'Տեխնոլոգիական ճամբար՝ մարզերում',
      description: 'Հաջորդ շաբաթ մեկնարկում է եռօրյա տեխնոլոգիական ճամբարը Լոռու մարզում՝ նախատեսված պատանիների համար:',
      image: 'https://www.shantnews.am/wp-content/uploads/2024/01/414486364_709785271260443_6430920219875153739_n.jpg',
    },
    {
      id: 3,
      title: 'Արհեստական բանականություն․ վարպետության դաս',
      description: 'Մայիսի 15-ին անցկացվելու է բաց վարպետության դաս՝ նվիրված AI և մեքենայական ուսուցման կիրառմանը առողջապահության ոլորտում:',
      image: 'https://fastnews.am/uploads/uploads/2021/05/artificial-intelligence-1024x512-1.jpeg',
    },
    {
      id: 4,
      title: 'Նոր թափուր աշխատատեղեր',
      description: 'Մեր թիմը ընդլայնվում է։ Դիմեք մինչև հունիսի 10-ը՝ դիզայնի, ծրագրավորման և կրթական ղեկավարի հաստիքներին:',
      image: 'https://armtimes.com/static/article/13/78/73/137873.jpg',
    },
  ];
  

const Announcements: React.FC = () => {
    const [cardsPerSlide, setCardsPerSlide] = useState(3);

    // Function to determine the number of cards per slide based on screen size
    const updateCardsPerSlide = () => {
        if (window.innerWidth < 768) {
            setCardsPerSlide(1); // Mobile (1 card per slide)
        } else if (window.innerWidth < 1024) {
            setCardsPerSlide(2); // Tablet (2 cards per slide)
        } else {
            setCardsPerSlide(4); // Desktop (3 cards per slide)
        }
    };

    // Run on component mount + window resize
    useEffect(() => {
        updateCardsPerSlide(); // Set initial value
        window.addEventListener('resize', updateCardsPerSlide);
        return () => window.removeEventListener('resize', updateCardsPerSlide);
    }, []);

    // Create grouped slides based on the number of cards per slide
    const groupedannouncements = [];
    for (let i = 0; i < announcementsData.length; i += cardsPerSlide) {
        groupedannouncements.push(announcementsData.slice(i, i + cardsPerSlide));
    }


    return (
        <div className="home-page-announcements">
            <div className="announcements-title-carousel-wrapper">
                <div className="announcements-title">
                    <Title level={2}>Հայտարարություններ</Title>
                    <Underline />
                </div>
                <div className="home-page-announcements-container">
                    <Carousel
                        arrows
                        infinite={false}
                        draggable={true}
                        className="home-page-announcements-carousel"
                    >
                        {groupedannouncements.map((group, index) => (
                            <div
                                key={index}
                                className="home-page-announcements-carousel-item"
                            >
                                {group.map((announcements) => (
                                    <Card
                                        key={announcements.id}
                                        style={{ maxWidth: 300 }}
                                        cover={
                                            <img alt="announcements" src={announcements.image} />
                                        }
                                        actions={[
                                            <div key="read-more">
                                                Կարդալ ավելին{' '}
                                                <CaretRightFilled />
                                            </div>,
                                        ]}
                                    >
                                        <Meta
                                            title={announcements.title}
                                            description= {
                                                <div>
                                                    <p>{announcements.description}</p>
                                                </div>
                                            }
                                        />
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
