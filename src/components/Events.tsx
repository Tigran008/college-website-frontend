import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

const events = [
    {
        id: '1',
        title: 'Tech Conference 2025',
        date: '2025-04-15',
        location: 'Yerevan, Armenia',
        description:
            'A gathering of the best minds in technology discussing the future of AI and Web Development.',
        image: 'https://source.unsplash.com/600x400/?conference,tech',
    },
    {
        id: '2',
        title: 'React Workshop',
        date: '2025-05-10',
        location: 'Online',
        description:
            'A hands-on workshop teaching React fundamentals, hooks, and state management.',
        image: 'https://source.unsplash.com/600x400/?react,javascript',
    },
    {
        id: '3',
        title: 'Startup Pitch Night',
        date: '2025-06-01',
        location: 'TUMO Center, Yerevan',
        description:
            'A night where aspiring entrepreneurs pitch their ideas to investors.',
        image: 'https://source.unsplash.com/600x400/?startup,pitch',
    },
    {
        id: '4',
        title: 'AI & Machine Learning Summit',
        date: '2025-07-20',
        location: 'Silicon Valley, USA',
        description:
            "Experts discuss the latest advancements in AI and how it's shaping the world.",
        image: 'https://source.unsplash.com/600x400/?ai,machinelearning',
    },
    {
        id: '5',
        title: 'Frontend Dev Meetup',
        date: '2025-08-12',
        location: 'Berlin, Germany',
        description:
            'A meetup for frontend developers to network and share their latest projects.',
        image: 'https://source.unsplash.com/600x400/?frontend,developer',
    },
];

const Events: React.FC = () => {
    const [currentEvent, setCurrentEvent] = useState({
        id: '',
        title: '',
        date: '',
        location: '',
        description: '',
        image: '',
    });

    useEffect(() => {
        setCurrentEvent(events[0]);
    }, []);

    return (
        <div className="home-page-events">
            <div className="home-page-events-latest">
                <Title level={2}>Իրադարձություններ</Title>
                {events.slice(0, 4).map((event, index) => (
                    <Title
                        key={event.id}
                        level={3}
                        onClick={() => setCurrentEvent(events[index])}
                        className={
                            currentEvent.id === event.id ? 'active' : undefined
                        }
                    >
                        {event.date} - {event.title}
                    </Title>
                ))}

                <Button>Դիտել Ավելին</Button>
            </div>
            <div className="home-page-events-item">
                <Card
                    className="home-page-events-item-card"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <div key="read-more">
                            Կարդալ ավելին <CaretRightFilled />
                        </div>,
                    ]}
                >
                    <Meta
                        title={currentEvent.title}
                        description={currentEvent.description}
                    />
                </Card>
            </div>
        </div>
    );
};

export default Events;
