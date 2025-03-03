import React, { useState, useEffect } from 'react';
import { Card, Carousel, Typography } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import Underline from './Underline';

const { Title } = Typography;
const { Meta } = Card;

const announcementsData = [
    {
        id: 1,
        title: 'Վերնագիր 1',
        description:
            'Հարմարավետ կերպով նախաձեռնեք բազմաֆունկցիոնալ հարթակների:',
        image: 'https://s3-alpha-sig.figma.com/img/42d6/60b6/84608d7b546cd9e8e02e690dac8abdf0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=moO~2lMNCc6PAwjP8RxyhZjt3rnUl953Rhb0790VfMwJ1JFrNzOQHaMN6da4xWT8FfurU7m18iZxRjGJ-pPYnvu8BKMfVu95AykGfyzLqQMppPeVM68sh78Bdzsit1OnMIgA354nLypZ6jyA7kLMcHGkH5x97qQbi8Hxiwx1InUSZwnccQvTSRErCNKgyqX-AeTTMNy4d4qTlMKq3fgVjx6V9o2enILRRKizfQXK64Qrm~GSahcz2yTAYNaANQ7JyRdFk5sTCWwfPl1BaHnZMMaxDn-K4jvBFhJqchb~OdrOXsbl4v8kV~GGr04IY2eIgx7Cr2Zd7fnFrBX8ukeKzg__',
    },
    {
        id: 2,
        title: 'Վերնագիր 2',
        description: 'Արդյունավետ լուծումներ և նորարարական մոտեցումներ:',
        image: 'https://s3-alpha-sig.figma.com/img/42d6/60b6/84608d7b546cd9e8e02e690dac8abdf0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=moO~2lMNCc6PAwjP8RxyhZjt3rnUl953Rhb0790VfMwJ1JFrNzOQHaMN6da4xWT8FfurU7m18iZxRjGJ-pPYnvu8BKMfVu95AykGfyzLqQMppPeVM68sh78Bdzsit1OnMIgA354nLypZ6jyA7kLMcHGkH5x97qQbi8Hxiwx1InUSZwnccQvTSRErCNKgyqX-AeTTMNy4d4qTlMKq3fgVjx6V9o2enILRRKizfQXK64Qrm~GSahcz2yTAYNaANQ7JyRdFk5sTCWwfPl1BaHnZMMaxDn-K4jvBFhJqchb~OdrOXsbl4v8kV~GGr04IY2eIgx7Cr2Zd7fnFrBX8ukeKzg__',
    },
    {
        id: 3,
        title: 'Վերնագիր 3',
        description: 'Տեխնոլոգիական առաջընթացի ուղիներ և լուծումներ:',
        image: 'https://s3-alpha-sig.figma.com/img/42d6/60b6/84608d7b546cd9e8e02e690dac8abdf0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=moO~2lMNCc6PAwjP8RxyhZjt3rnUl953Rhb0790VfMwJ1JFrNzOQHaMN6da4xWT8FfurU7m18iZxRjGJ-pPYnvu8BKMfVu95AykGfyzLqQMppPeVM68sh78Bdzsit1OnMIgA354nLypZ6jyA7kLMcHGkH5x97qQbi8Hxiwx1InUSZwnccQvTSRErCNKgyqX-AeTTMNy4d4qTlMKq3fgVjx6V9o2enILRRKizfQXK64Qrm~GSahcz2yTAYNaANQ7JyRdFk5sTCWwfPl1BaHnZMMaxDn-K4jvBFhJqchb~OdrOXsbl4v8kV~GGr04IY2eIgx7Cr2Zd7fnFrBX8ukeKzg__',
    },
    {
        id: 4,
        title: 'Վերնագիր 4',
        description: 'Կայունություն և առաջատար մոտեցումներ ծրագրավորման մեջ:',
        image: 'https://s3-alpha-sig.figma.com/img/42d6/60b6/84608d7b546cd9e8e02e690dac8abdf0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=moO~2lMNCc6PAwjP8RxyhZjt3rnUl953Rhb0790VfMwJ1JFrNzOQHaMN6da4xWT8FfurU7m18iZxRjGJ-pPYnvu8BKMfVu95AykGfyzLqQMppPeVM68sh78Bdzsit1OnMIgA354nLypZ6jyA7kLMcHGkH5x97qQbi8Hxiwx1InUSZwnccQvTSRErCNKgyqX-AeTTMNy4d4qTlMKq3fgVjx6V9o2enILRRKizfQXK64Qrm~GSahcz2yTAYNaANQ7JyRdFk5sTCWwfPl1BaHnZMMaxDn-K4jvBFhJqchb~OdrOXsbl4v8kV~GGr04IY2eIgx7Cr2Zd7fnFrBX8ukeKzg__',
    },
    {
        id: 5,
        title: 'Վերնագիր 5',
        description: 'Նորարարություն և տեխնոլոգիական աճ:',
        image: 'https://s3-alpha-sig.figma.com/img/42d6/60b6/84608d7b546cd9e8e02e690dac8abdf0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=moO~2lMNCc6PAwjP8RxyhZjt3rnUl953Rhb0790VfMwJ1JFrNzOQHaMN6da4xWT8FfurU7m18iZxRjGJ-pPYnvu8BKMfVu95AykGfyzLqQMppPeVM68sh78Bdzsit1OnMIgA354nLypZ6jyA7kLMcHGkH5x97qQbi8Hxiwx1InUSZwnccQvTSRErCNKgyqX-AeTTMNy4d4qTlMKq3fgVjx6V9o2enILRRKizfQXK64Qrm~GSahcz2yTAYNaANQ7JyRdFk5sTCWwfPl1BaHnZMMaxDn-K4jvBFhJqchb~OdrOXsbl4v8kV~GGr04IY2eIgx7Cr2Zd7fnFrBX8ukeKzg__',
    },
    {
        id: 6,
        title: 'Վերնագիր 6',
        description: 'Տվյալների վերլուծություն և արհեստական բանականություն:',
        image: 'https://s3-alpha-sig.figma.com/img/42d6/60b6/84608d7b546cd9e8e02e690dac8abdf0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=moO~2lMNCc6PAwjP8RxyhZjt3rnUl953Rhb0790VfMwJ1JFrNzOQHaMN6da4xWT8FfurU7m18iZxRjGJ-pPYnvu8BKMfVu95AykGfyzLqQMppPeVM68sh78Bdzsit1OnMIgA354nLypZ6jyA7kLMcHGkH5x97qQbi8Hxiwx1InUSZwnccQvTSRErCNKgyqX-AeTTMNy4d4qTlMKq3fgVjx6V9o2enILRRKizfQXK64Qrm~GSahcz2yTAYNaANQ7JyRdFk5sTCWwfPl1BaHnZMMaxDn-K4jvBFhJqchb~OdrOXsbl4v8kV~GGr04IY2eIgx7Cr2Zd7fnFrBX8ukeKzg__',
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
