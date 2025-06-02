import React from 'react'
import { Card } from 'antd'

const Applicant: React.FC = () => {
  return (
    <div className="applicant">
      <h1>Դիմորդ</h1>
      <p>
        Եթե ցանկանում եք միանալ մեր ծրագրին որպես ուսանող, կարող եք հետևել ստորև ներկայացված քայլերին։
      </p>

      <div className="applicant__steps">
        <Card title="Քայլ 1․ Գրանցում" bordered={false}>
          Լրացրեք դիմումի ձևը մեր կայքում՝ ներկայացնելով անհրաժեշտ տվյալները։
        </Card>
        <Card title="Քայլ 2․ Հարցազրույց" bordered={false}>
          Հետադարձ կապի միջոցով ձեզ հետ կկապվենք հարցազրույցի ժամանակը նշելու համար։
        </Card>
        <Card title="Քայլ 3․ Ընդունում" bordered={false}>
          Ընդունվելու դեպքում դուք կստանաք նամակ՝ հետագա քայլերի և տեղեկատվության վերաբերյալ։
        </Card>
      </div>

      <div className="applicant__info">
        <h2>Պահանջվող փաստաթղթեր</h2>
        <ul>
          <li>Անձնագրի պատճեն կամ ID քարտ</li>
          <li>Դպրոցական վկայական կամ ավարտական փաստաթուղթ</li>
          <li>Լրացված դիմումի ձև</li>
        </ul>

        <h2>Կապ մեզ հետ</h2>
        <p>Հարցերի դեպքում կարող եք գրել մեզ <a href="/contact">կապի էջից</a>։</p>
      </div>
    </div>
  )
}

export default Applicant
