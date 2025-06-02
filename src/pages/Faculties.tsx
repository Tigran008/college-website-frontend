import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const faculties = [
  {
    title: "Ավտոմոբիլային տրանսպորտի տեխնիկական սպասարկում և նորոգում",
    description:
      "Ավտոմոբիլի կառուցվածք, անվտանգ վարում, էլեկտրասարքավորումներ և մեխանիզմների կարգաբերում։",
    qualification:
      "Տեխնիկ՝ ավտոմոբիլային տրանսպորտի տեխնիկական սպասարկման և նորոգման",
    duration: "4 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA77jJDGF21HeNwvHBWw2XKRoeTQ6p0sEEYg&s",
  },
  {
    title: "Կապի ցանցեր և հաղորդակցման համակարգեր",
    description:
      "Ինֆորմացիոն ցանցերի կառուցվածք, ֆունկցիոնալ մոդելներ և ծրագրային ապահովում։",
    qualification:
      "Տեխնիկ՝ կապի ցանցերի և հաղորդակցման համակարգերի շահագործման և տեխնիկական սպասարկման",
    duration: "3 տարի 6 ամիս",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2HVFu4IUx77bplzy-tZW3XXKXpkwK0Cl3g&s",
  },
  {
    title: "Ռադիոէլեկտրոնային տեխնիկայի տեխնիկական սպասարկում և նորոգում",
    description:
      "Ռադիոընդունիչների, հեռուստացույցների և այլ սարքավորումների վերանորոգում։",
    qualification:
      "Տեխնիկ՝ ռադիոէլեկտրոնային սարքերի և սարքավորումների տեխնիկական սպասարկման և նորոգման",
    duration: "4 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oFs68OL2sL9js0HGmOc8Kv62jtKrsVV-GQ&s",
  },
  {
    title:
      "Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում",
    description:
      "Ծրագրային ապահովման մշակում, ավտոմատացված համակարգերի կառավարում։",
    qualification: "Տեխնիկ-ծրագրավորող",
    duration: "4 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3_Bx4_AAO8KCiLdwLkmgCfs7yhHvo6AamA&s",
  },
  {
    title: "Բժշկական տեխնիկայի տեղակայում, տեխնիկական սպասարկում և նորոգում",
    description:
      "Բժշկական սարքավորումների սպասարկում, անսարքությունների հայտնաբերում և վերացում։",
    qualification:
      "Տեխնիկ՝ բժշկական սարքավորումների տեղակայման, տեխնիկական սպասարկման և նորոգման",
    duration: "4 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou4e2x5o5VqEJ1AghCUXLrzOPyI0ALtMETA&s",
  },
  {
    title: "Համակարգչային գեղարվեստական նախագծում",
    description:
      "Դիզայնի նախագծում, գրաֆիկական էլեմենտների մշակում և վեբ կայքերի դիզայն։",
    qualification: "Վեբ-դիզայներ",
    duration: "3 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJMoAb91pKxU3nUyENehVOu1aXwKT9H8wxQ&s",
  },
  {
    title: "Բազմուղի հեռահաղորդակցման համակարգեր",
    description:
      "Հեռահաղորդակցման համակարգերի կառուցում, կարգաբերում և շահագործում։",
    qualification: "Տեխնիկ՝ օպտիմանրաթելային կապի համակարգերի",
    duration: "3 տարի 5 ամիս",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFoa_Z3h5S74jhH5f4fdrlUQacYXFlhlzmg&s",
  },
  {
    title: "Ավիացիոն սարքեր և համալիրներ",
    description:
      "Անօդաչու թռչող ապարատների կառավարում և տեխնիկական սպասարկում։",
    qualification:
      "Տեխնիկ՝ անօդաչու թռչող ապարատների տեխնիկական շահագործման և սպասարկման",
    duration: "4 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc13CEYN6TAZrBVr0fvfcocdn-eUdkPHc9Ng&s",
  },
  {
    title: "Փոստային կապ",
    description: "Փոստային առաքանու ընդունում, մշակում, փոխադրում և հանձնում։",
    qualification: "Մասնագետ՝ փոստային կապի",
    duration: "3 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Jvpv1mdmPoVV3INyBH46Owzwc58Xv-TWFA&s",
  },
  {
    title: "Մեխատրոնիկա",
    description:
      "Ռոբոտատեխնիկայի նախագծում, տեղակայում, շահագործում և վերանորոգում։",
    qualification: "Տեխնիկ-մեխատրոնիկ",
    duration: "4 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKWvezVkuBE6Dqp20H3Ad0iJKCGuN4_zHkw&s",
  },
  {
    title: "Քիմիական միացությունների որակի անալիտիկ հսկում",
    description:
      "Քիմիական անալիզ, փորձաքննություն և սարքերի ընտրություն ու հաշվարկ։",
    qualification: "Տեխնիկ՝ քիմիական միացությունների որակի անալիտիկ հսկման",
    duration: "4 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hMdrHN1q-STXrKsL7ed3Ez3c14dhOeBo2A&s",
  },
  {
    title: "Էլեկտրամոբիլային տրանսպորտի տեխնիկական սպասարկում և նորոգում",
    description:
      "Էլեկտրամոբիլների շահագործում, նորոգում և տեխնիկական սպասարկում։",
    qualification:
      "Տեխնիկ՝ էլեկտրամոբիլային տրանսպորտի տեխնիկական սպասարկման և նորոգման",
    duration: "4 տարի",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk8q2aqfzU0HycIzovrakgi78gcLuxpSdiQ&s",
  },
];

const Faculties: React.FC = () => {
  return (
    <div className="faculties">
      <div className="faculties__header">
        <Title level={1}>Մեր Բաժինները</Title>
        <Paragraph>
          Բացահայտեք ՀԱՊՀ Քոլեջի առաջարկած մասնագիտական ուղղությունները։
        </Paragraph>
      </div>
      <Row gutter={[24, 24]}>
        {faculties.map((faculty, index) => (
          <Col xs={24} sm={12} md={12} lg={8} xl={6} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={faculty.title}
                  src={faculty.image}
                  className="faculties__image"
                />
              }
              className="faculties__card"
            >
              <Card.Meta
                title={
                  <span className="faculties__title">{faculty.title}</span>
                }
                description={
                  <>
                    <p className="faculties__desc">{faculty.description}</p>
                    <p>
                      <strong>Որակավորումը:</strong> {faculty.qualification}
                    </p>
                    <p>
                      <strong>Ուսման տևողությունը:</strong> {faculty.duration}
                    </p>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Faculties;
