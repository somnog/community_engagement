import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, message, Row, Select, Space } from 'antd';
const { Option } = Select;
import { Table } from "antd"
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import axios from 'axios';

export const Facilitators =()=>{
  // const url="http://localhost:5000"
  const url=import.meta.env.VITE_APP_API
const [form]=Form.useForm();
    const [isLoading, setisLoading] = useState(false);
    const [isPending, setisPending] = useState(false);
    const [data, setdata] = useState([]);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    async function  getData(){
      setisPending(true)
      try {
        const {data}=await axios.get(`${url}/facilitators`)
        setdata(data)
        setisPending(false)
      } catch (error) {
        setisPending(false)
        
      }
    }
useEffect(() => {

  getData();

},[])
  
 

  // console.log(getData)


    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'age',
        },
        {
          title: 'Image',
          dataIndex: 'image',
          render:(rows)=><img src={rows} width={"50px"} alt="" />,
          key: 'image',
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
      ];

      // const dataSource = [
      //   {
      //     key: '1',
      //     name: 'Hassan Omar',
      //     email: "test@gmail.com",
      //     image: 'https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.jpg',
      //     title:"Software Developer"
      //   },

      //   {
      //     key: '2',
      //     name: 'Anisa Abdi',
      //     email: "anisa@gmail.com",
      //     image: 'https://www.w3schools.com/howto/img_avatar2.png',
      //     title:"Network Admin"
      //   },
       
      // ];




    return (
        <>
        <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
     
      {
        title: 'Facilitators',
      },
    ]}
  />
  <br />
  <br />
  <br />
  <br />
<div style={{width:"100%",display:"flex",justifyContent:"end"}}>

  <Button style={{background:"#26A8E4",color:"white"}} onClick={showDrawer} icon={<PlusOutlined />}>
        New Facilitators
      </Button>
</div>
      <br />
      <br />
      <br />

        
        <Table loading={isPending} dataSource={data && data}  columns={columns} />















        <Drawer
        title="Create a new Facilitators"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button htmlType="submit"  onClick={() => form.submit()} type='submit' style={{background:"#26A8E4",color:"white"}}>
              Submit
            </Button>
          </Space>
        }
      >
        <Form
        form={form}
        onFinish={async(values)=>{
          setisLoading(true)
          try {
            
          const {data}=await axios.post(`${url}/save_facilitators`,values)
          setisLoading(false)
         
          setOpen(false);
          message.success(data.message)
          getData()
          form.resetFields()
        } catch (error) {
          setisLoading(false)
            console.log(error)
        }
        }}
        
        layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone "
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: 'Please enter phone number',
                  },
                ]}
              >
                <Input type='number' placeholder="Please enter phone number" />
              </Form.Item>
            </Col>
          
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Email',
                  },
                ]}
              >
                <Input type='email' placeholder="Please enter Email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="image"
                label="Image"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Image url',
                  },
                ]}
              >
                <Input  placeholder="Please enter Image url" />
              </Form.Item>
            </Col>
          
          </Row>


          <Row>

          <Col span={24}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Title',
                  },
                ]}
              >
                <Input  placeholder="Please enter Title" />
              </Form.Item>
            </Col>
          </Row>
      
          {/* <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the approver',
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row> */}
          {/* <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row> */}
        </Form>
      </Drawer>
        </>
    )
}