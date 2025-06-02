import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

const events = [
    {
      id: '1',
      title: 'CSIT 2025: Համակարգչային գիտություն և տեղեկատվական տեխնոլոգիաներ',
      date: '2025-09-22',
      location: 'Երևան, Հայաստան',
      description:
        'Միջազգային գիտաժողով, որը կազմակերպվում է Հայաստանի Հանրապետության Գիտությունների ազգային ակադեմիայի կողմից՝ նվիրված համակարգչային գիտության և տեղեկատվական տեխնոլոգիաների վերջին զարգացումներին։',
      image: 'https://escs.am/files/images/2023-12-27/e833141b2e910883ecc4410b14d00fea.jpg',
      link: 'https://csit.am/',
    },
    {
      id: '2',
      title: 'React Conf 2025',
      date: '2025-10-07',
      location: 'Հենդերսոն, Նևադա, ԱՄՆ և առցանց',
      description:
        'React համայնքի ամենամյա համաժողովը, որտեղ ներկայացվում են React-ի նորությունները և զարգացումները։',
      image: 'https://conf.react.dev/images/react-conf-2025.jpg',
      link: 'https://conf.react.dev/',
    },
    {
      id: '3',
      title: 'Sevan Startup Summit 2025',
      date: '2025-07-15',
      location: 'Սևան, Հայաստան',
      description:
        'Սևանի ափին անցկացվող ստարտափ միջոցառում, որը միավորում է ձեռնարկատերերին, ներդրողներին և տեխնոլոգիական համայնքի անդամներին։',
      image: 'https://hightech.gov.am/images/sevan-summit-2025.jpg',
      link: 'https://hightech.gov.am/en/tegekatvakan-kentron/ayl/norutyunner/sevan-starup-summit-2025',
    },
    {
      id: '4',
      title: 'Generative AI Summit Silicon Valley 2025',
      date: '2025-04-29',
      location: 'Սանտա Կլարա, Կալիֆոռնիա, ԱՄՆ',
      description:
        'Գեներատիվ արհեստական բանականության ոլորտի առաջատար համաժողով, որը միավորում է մասնագետներին և հետազոտողներին։',
      image: 'https://world.aiacceleratorinstitute.com/images/generative-ai-summit-2025.jpg',
      link: 'https://world.aiacceleratorinstitute.com/location/siliconvalley/',
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
                            src="https://mapio.net/images-p/26296139.jpg"
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
