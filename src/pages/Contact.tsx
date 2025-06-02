import React from "react";
import { Form, Input, Button, Typography, Row, Col, message } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Հաղորդագրություն ուղարկված է:", values);
    message.success(
      "Շնորհակալություն ձեր հաղորդագրության համար։ Մենք կկապվենք Ձեզ հետ։"
    );
    form.resetFields();
  };

  return (
    <div className="contact">
      <div className="contact__header">
        <Title level={2}>Կապ մեզ հետ</Title>
        <Paragraph>
          Ունե՞ք հարցեր կամ առաջարկություններ։ Լրացրեք ձևը՝ կապ հաստատելու
          համար։
        </Paragraph>
      </div>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="contact__form"
          >
            <Form.Item
              name="name"
              label="Ձեր անունը"
              rules={[
                { required: true, message: "Խնդրում ենք գրել Ձեր անունը" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Անուն" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Էլ․ փոստ"
              rules={[
                { required: true, message: "Խնդրում ենք նշել էլ․ փոստը" },
                { type: "email", message: "Մուտքագրեք վավեր էլ․ փոստ" },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="example@mail.com" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Հաղորդագրություն"
              rules={[
                {
                  required: true,
                  message: "Խնդրում ենք գրել Ձեր հաղորդագրությունը",
                },
              ]}
            >
              <Input.TextArea rows={5} placeholder="Ձեր հաղորդագրությունը" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Ուղարկել
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <div className="contact__map">
        <iframe
          title="Polytechnic University"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6092.132559138631!2d44.51303407589726!3d40.18817867147621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041a18bfc38523f%3A0x3a9f5bc936cbf0de!2sNational%20Polytechnic%20University%20of%20Armenia!5e0!3m2!1sen!2sam!4v1717433621719!5m2!1sen!2sam"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px", marginTop: "2rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
