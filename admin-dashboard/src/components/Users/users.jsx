import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
import { Table } from "antd"
import { HomeOutlined,  } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

export const Users =()=>{

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };



    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

      const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];




    return (
        <>
        <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
     
      {
        title: 'Users',
      },
    ]}
  />
  <br />
  <br />
  <br />
  <br />
<div style={{width:"100%",display:"flex",justifyContent:"end"}}>

  <Button style={{background:"#26A8E4",color:"white"}} onClick={showDrawer} icon={<PlusOutlined />}>
        New Users
      </Button>
</div>
      <br />
      <br />
      <br />

        
        <Table loading={false}  columns={columns} />















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
            <Button onClick={onClose} style={{background:"#26A8E4",color:"white"}}>
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
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