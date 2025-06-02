import React, { useState, useEffect } from 'react';
import { Card, Carousel, Typography } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import Underline from './Underline';

const { Title } = Typography;
const { Meta } = Card;

const newsData = [
    {
        id: 1,
        title: 'Հայաստանը ներկայացրեց նոր արհեստական բանականության ռազմավարություն',
        description:
            'ՀՀ կառավարությունը հայտարարեց նոր ազգային ռազմավարության մեկնարկը՝ ուղղված արհեստական բանականության զարգացմանը՝ կրթության, առողջապահության և պաշտպանական ոլորտներում կիրառման համար:',
        image: 'https://iravaban.net/wp-content/uploads/2024/08/art-6-m.webp',
    },
    {
        id: 2,
        title: 'Տեղեկատվական տեխնոլոգիաների համաժողովը կայացավ Երևանում',
        description:
            'Երևանում անցկացվեց ամենամյա DigiTech Expo համաժողովը՝ համախմբելով տասնյակ ստարտափներ, ներդրողներ և տեխնոլոգիական մասնագետներ՝ ամբողջ տարածաշրջանից:',
        image: 'https://cdn.irazek.am/images/2018-04-10/7bd5dc67ca172f2d3f01dfdfe03d70e9.jpg',
    },
    {
        id: 3,
        title: 'Հայկական ստարտափը՝ համաշխարհային ներդրումային փուլում',
        description:
            '«SmartAgriTech» ստարտափը հավաքագրեց $3 մլն դոլար՝ կայուն գյուղատնտեսական տեխնոլոգիաներ զարգացնելու համար՝ կիրառելով IoT և AI:',
        image: 'https://how2b.am/wp-content/uploads/sites/2/2024/12/cove-1068x558.jpg',
    },
    {
        id: 4,
        title: 'Տվյալների վերլուծության լաբորատորիա կբացվի ՏՏ համալսարանում',
        description:
            'Հայաստանի ՏՏ համալսարանը կհիմնի տվյալների գիտության և վերլուծության լաբորատորիա՝ ուսանողներին փորձառություն տրամադրելու իրական նախագծերի վրա:',
        image: 'https://bdg.am/wp-content/uploads/2023/08/%D5%BF%D5%BE%D5%B5%D5%A1%D5%AC%D5%B6%D5%A5%D6%80%D5%AB-%D5%BE%D5%A5%D6%80%D5%AC%D5%B8%D6%82%D5%AE%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6-blog.jpg',
    },
];


const News: React.FC = () => {
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
    const groupedNews = [];
    for (let i = 0; i < newsData.length; i += cardsPerSlide) {
        groupedNews.push(newsData.slice(i, i + cardsPerSlide));
    }

    return (
        <div className="home-page-news">
            <div className="news-title-carousel-wrapper">
                <div className="news-title">
                    <Title level={2}>Լուրեր</Title>
                    <Underline />
                </div>
                <div className="home-page-news-container">
                    <Carousel
                        arrows
                        infinite={false}
                        draggable={true}
                        className="home-page-news-carousel"
                    >
                        {groupedNews.map((group, index) => (
                            <div
                                key={index}
                                className="home-page-news-carousel-item"
                            >
                                {group.map((news) => (
                                    <Card
                                        key={news.id}
                                        style={{ maxWidth: 300 }}
                                        cover={
                                            <img alt="news" src={news.image} />
                                        }
                                        actions={[
                                            <div key="read-more">
                                                Կարդալ ավելին{' '}
                                                <CaretRightFilled />
                                            </div>,
                                        ]}
                                    >
                                        <Meta
                                            title={news.title}
                                            description= {
                                                <div>
                                                    <p>{news.description}</p>
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

export default News;
