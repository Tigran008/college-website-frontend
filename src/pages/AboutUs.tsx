import React from "react";
import { Card, Typography, Image } from "antd";

const { Title, Paragraph } = Typography;

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <Card className="about-us__card" >
        <Image
          className="about-us__image"
          src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noG9sqZlBjf-VfykAUWTTn3thQmtOWRl_0UnWHX-PS4PxbpkdNeMGwXQIuIu9OWwy-nV97qzeEvivPKLVI5f7GXgz2nBSoUse10fmclmrhRfhrCFEZ-njuJ2pzMlM1WXLO7SFJ8qw=s1360-w1360-h1020-rw"
          alt="NPUA College"
          preview={false}
        />
        <div className="about-us__content">
          <Title level={1} className="about-us__title">
            ՄԵՐ ՄԱՍԻՆ
          </Title>
          <Paragraph className="about-us__subtitle">
            ՀԱՊՀ Քոլեջ — գիտելիքի, արհեստավարժության և ապագայի երաշխիք։
          </Paragraph>
          <Paragraph>
            Հայաստանի ազգային պոլիտեխնիկական համալսարանի քոլեջը կրթական
            հաստատություն է, որն առաջարկում է կիրառական մասնագիտական կրթություն՝
            համադրելով տեսական հիմքերը և գործնական հմտությունները։ Մեր նպատակը՝
            պատրաստել մրցունակ մասնագետներ՝ արդիական տեխնոլոգիաների տիրապետմամբ։
          </Paragraph>
          <Paragraph>
            Քոլեջի կրթական ծրագրերը մշակված են՝ հաշվի առնելով աշխատաշուկայի
            պահանջները և միջազգային չափանիշները։ Մենք կարևորում ենք ուսանողի
            ամբողջական զարգացումը՝ ապահովելով մասնագիտական խորացված ուսուցում,
            ինքնազարգացման հնարավորություններ և ինովացիոն միջավայր։
          </Paragraph>
          <Paragraph>
            Մեր պրոֆեսորադասախոսական կազմը՝ փորձառու մասնագետներից բաղկացած,
            նպաստում է ուսանողների ոչ միայն մասնագիտական, այլև մարդկային
            արժեքների ձևավորմանը։
          </Paragraph>
          <Paragraph>
            Ընդունվելով ՆՊՏՔ Քոլեջ՝ Դուք միանում եք կրթական ընտանիքի, որտեղ
            ձևավորվում են ապագայի ինժեներները, տեխնոլոգները և ստեղծարար
            առաջնորդները։
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default AboutUs;
