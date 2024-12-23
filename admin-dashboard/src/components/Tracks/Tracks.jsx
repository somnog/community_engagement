import React, { useState ,useEffect} from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
    Avatar,
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
  Tooltip,
} from "antd";
const { Option } = Select;
import { Table } from "antd";
import { HomeOutlined,  } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import axios from "axios";

export const Tracks = () => {
     const url=import.meta.env.VITE_APP_API
    //  console.log(url)
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
      const [isLoading, setisLoading] = useState(false);
      const [isPending, setisPending] = useState(false);
       const [data, setdata] = useState([]);
       const [fac, setfac] = useState([]);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };




  async function  getData(){
    setisPending(true)
    try {
      const {data}=await axios.get(`${url}/tracks`)
      setdata(data)
      setisPending(false)
    } catch (error) {
      setisPending(false)
      
    }
  }

  async function  getFac(){
    setisPending(true)
    try {
      const {data}=await axios.get(`${url}/facilitators`)
      console.log("Facilitators Data:", data);
      console.log("data",data)
      setfac(data)
      setisPending(false)
    } catch (error) {
      setisPending(false)
      
    }
  }

//   getFac()
useEffect(() => {
    getFac()
  getData();

},[])

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#26A8E4",
          color: "white",
          fontWeight: "bold",
        },
      }),
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#26A8E4",
          color: "white",
        //   fontWeight: "bold",
        },
      }),
    },
    {
      title: "start_date",
      dataIndex: "start_date",
    //   render: (rows) => <img src={rows} width={"50px"} alt="" />,
      key: "start_date",
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#26A8E4",
          color: "white",
        //   fontWeight: "bold",
        },
      }),
    },
    {
      title: "end_date",
      dataIndex: "end_date",
      key: "end_date",
      onHeaderCell:()=>({
        style:{
            backgroundColor:"#26A8E4",
            color:"white",
        }
      })
    },
    {
        title: "close_date",
        dataIndex: "close_date",
        key: "close_date",
        onHeaderCell: () => ({
            style: {
              backgroundColor: "#26A8E4",
              color: "white",
            //   fontWeight: "bold",
            },
          }),
      },
      {
        title: "requirements",
        dataIndex: "requirements",
        key: "requirements",
        onHeaderCell: () => ({
            style: {
              backgroundColor: "#26A8E4",
              color: "white",
            //   fontWeight: "bold",
            },
          }),
      },
      {
        title: "facilitators",
        dataIndex: "facilitators",
        key: "facilitators",
        render:(rows)=> {
            console.log("rows",rows)
           return <>
           {rows.map(row=>{
            return <Tooltip title={row?.name} placement="top">
            <Avatar
           
              icon={<img src={row?.image} />}
            />
          </Tooltip>
           })}
           
           </>
        },
        onHeaderCell: () => ({
            style: {
              backgroundColor: "#26A8E4",
              color: "white",
            //   fontWeight: "bold",
            },
          }),
      },
  ];

  const dataSource = [
    {
      key: "1",
      close_date: "2024-12-27",
      start_date: "2024-12-27",
      end_date: "2024-12-27",
      requirements: "html,css,js",
      facilitators:
        "Hassan",
      title: "Software development Track",
      description: "React,Nodejs,Express,Mongodb",
    },

    {
        key: "2",
        close_date: "2024-12-27",
        start_date: "2024-12-27",
        end_date: "2024-12-27",
        requirements: "html,css,js",
        facilitators:
          "Hassan",
        title: "Software development Track",
        description: "React,Nodejs,Express,Mongodb",
      },

  ];



  const facilitaters = [
    {
      key: "1",
      name: "Hassan Omar",
      email: "test@gmail.com",
      image:
        "https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.jpg",
      title: "Software Developer",
    },

    {
      key: "2",
      name: "Anisa Abdi",
      email: "anisa@gmail.com",
      image: "https://www.w3schools.com/howto/img_avatar2.png",
      title: "Network Admin",
    },
  ];


// console.log("fac",fac)

const options = fac?.map((facilitater) => ({
    value: facilitater._id,
    label: facilitater.name,
  }));

  return (
    <>
      <Breadcrumb
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },

          {
            title: "Tracks",
          },
        ]}
      />
      <br />
      <br />
      <br />
      <br />
      <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Button
          style={{ background: "#26A8E4", color: "white" }}
          onClick={showDrawer}
          icon={<PlusOutlined />}
        >
          New Tracks
        </Button>
      </div>
      <br />
      <br />
      <br />

      <Table className="custom-table" loading={false} dataSource={data && data} columns={columns} />

      <Drawer
        title="Create a new Tracks"
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
            <Button
              htmlType="submit"
              onClick={() => {
                console.log('submit')
                form.submit()
              }}
              type="submit"
              style={{ background: "#26A8E4", color: "white" }}
            >
              Submit
            </Button>
          </Space>
        }
      >
        <Form
          form={form}
          onFinish={async(values) => {
            // console.log("values", values);
            const { date } = values;
            const startDate = date[0].format("YYYY-MM-DD"); // Format as string
            const endDate = date[1].format("YYYY-MM-DD");
            // console.log(startDate, endDate);

            const postData={
                title:values.title,
                description:values.description,
                requirements:values.requirements.split(',').filter(item => item),
                // requirements:values.requirements,
                close_date:values.close_date,
                facilitators:values.facilitators,
                end_date:endDate,start_date:startDate
            }
            // console.log(postData)

            const {data}=await axios.post(`${url}/save_track`,postData)
            setisLoading(false)
           
            setOpen(false);
            message.success(data.message)
            getData()
            form.resetFields()
          }}
          layout="vertical"
          hideRequiredMark
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please enter Title of the Track",
                  },
                ]}
              >
                <Input placeholder="Please enter Title of the Track" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="description"
                label="description"
                rules={[
                  {
                    required: true,
                    message: "Please enter description ",
                  },
                ]}
              >
                <Input placeholder="Please enter description " />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="requirements"
                label="requirements"
                rules={[
                  {
                    required: true,
                    message: "Please enter requirements",
                  },
                ]}
              >
                <Input type="text" placeholder="Please enter requirements" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="close_date"
                label="close_date"
                rules={[
                  {
                    required: true,
                    message: "Please enter close_date",
                  },
                ]}
              >
                <Input type="date" />
              </Form.Item>
            </Col>
          </Row>
{/* 
          <Row>
            <Col span={24}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please enter Title",
                  },
                ]}
              >
                <Input placeholder="Please enter Title" />
              </Form.Item>
            </Col>
          </Row> */}

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="facilitators"
                label="Mentors"
                rules={[
                  {
                    required: true,
                    message: "Please choose the Mentors",
                  },
                ]}
              >
                <Select
                  mode="tags"
                  style={{
                    width: "100%",
                  }}
                //   onChange={handleChange}
                  tokenSeparators={[","]}
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date"
                label="date"
                rules={[
                  {
                    required: true,
                    message: "Please choose the start_date",
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
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
  );
};
