import React from "react";
import { Button, Card } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const Renforce: React.FC = () => {
  return (
    <div className="renforce-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1>REnForce ծրագիր</h1>
          <p>
            REnForce-ը միջազգային կրթական և համագործակցային նախագիծ է, որը
            իրականացվում է Erasmus+ ծրագրի շրջանակում՝ միավորելով բարձրագույն
            կրթության հաստատությունները և մասնագետներին՝ կայուն զարգացման,
            երիտասարդական ներուժի և նորարարական կրթական մոդելների զարգացման
            շուրջ։
          </p>
          <Button
            type="primary"
            icon={<LinkOutlined />}
            size="large"
            href="http://45.85.249.177"
            target="_blank"
          >
            Այցելել պաշտոնական կայք
          </Button>
        </div>
        <div className="hero-image">
          <img src="src/assets/Renforce.png" alt="Renforce Cover" />
        </div>
      </div>

      <div className="renforce-content">
        <Card title="Ծրագրի հիմնական նպատակները" >
          <ul>
            <li>
              Խթանել միջհամալսարանական համագործակցությունը և գիտական փորձի
              փոխանակումը
            </li>
            <li>Աջակցել նորարարական ուսուցման մեթոդների ներդրմանը</li>
            <li>
              Հզորացնել երիտասարդների կարողությունները կայուն զարգացման ոլորտում
            </li>
            <li>
              Ապահովել ուսանողների միջազգային շարժունություն և ներառականություն
            </li>
          </ul>
        </Card>

        <Card title="Մասնակից երկրներ և հաստատություններ" bordered={false}>
          <p>
            REnForce ծրագրին մասնակցում են համալսարաններ և կազմակերպություններ
            Եվրոպայից, Կովկասից և Մերձավոր Արևելքից։ Հայկական կողմը ներկայացված
            է Պոլիտեխնիկական համալսարանով։
          </p>
        </Card>

        <Card title="Գործունեության ձևաչափեր">
          <p>
            Ծրագիրը ներառում է թեմատիկ աշխատաժողովներ, վերապատրաստումներ,
            գիտաժողովներ, ուսումնական փոխանակումներ, ինչպես նաև թվային կրթական
            պլատֆորմների ստեղծում։
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Renforce;
