import { Layout, Typography, message } from 'antd';
import LoginForm from './LoginForm';
import logo from '../assets/images/logo.png'
import logoForm from '../assets/images/logo512.png'
import { useAutorisationMutation } from '../redux/backend/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutoRequest } from '../models/models';
import { motion } from "framer-motion"

const { Title } = Typography;
const { Content, Footer } = Layout;

function LoginPage() {
    const [autorisation, auto] = useAutorisationMutation()
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()

    useEffect(() => {

        if (auto.isSuccess && auto.data.error.error_code === 0) {
            navigate("/app/profile")
        }

        if (auto.isSuccess && auto.data.error.error_code !== 0) {
            messageApi.open({
                type: 'error',
                content: auto.data.error.err_messages
            });
        }

    }, [auto.isSuccess])

    const autoSubmit = async (formData: AutoRequest) => {
        await autorisation(formData)
    }

    return (
        <div className='flex min-h-screen'>
            {contextHolder}

            <Layout className="layout" style={{ background: "#25292C" }}>
                <motion.div style={{ background: "#4B5563", position: 'sticky', top: 0, zIndex: 1, width: '100%', height: '70px' }}
                    initial={{
                        y: -1000
                    }}
                    transition={
                        {
                            duration: 0.5
                        }
                    }
                    animate={
                        { y: 0 }
                    }>

                    <div className='flex items-center shrink-0 ml-10'>
                        <img src={logoForm} className='w-16 shrink-0'></img>
                        <Title level={2} type='secondary' className='mt-2 ml-3 shrink-0'>LovEnergy</Title>
                    </div>

                </motion.div>

                <Content className='mt-5'>
                    <div className="flex justify-center flex-wrap">

                        <motion.div className="flex justify-center items-center animate-pulse"
                            initial={{
                                x: -3000
                            }}
                            transition={
                                {
                                    delay: 0.4,
                                    duration: 1,
                                    type:'spring'
                                }
                            }
                            animate={
                                { x: 0 }
                            }>
                            <img src={logo} className='w-2/3 h-2/3'></img>
                        </motion.div>

                        <div className='flex flex-col'>

                            <motion.div className='flex justify-center '
                                initial={{
                                    x: -3000
                                }}
                                transition={
                                    {
                                        type:'spring',
                                        duration: 1
                                    }
                                }
                                animate={
                                    { x: 0 }
                                }>
                                <div className=' bg-gray-600 rounded-3xl w-3/4 flex justify-center shadow-lg shadow-cyan-400 '>
                                    <div className='w-3/4 h-fit '>
                                        <LoginForm formType='auth' authFunction={autoSubmit} isLoading = {auto.isLoading}></LoginForm>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className='h-fit flex mt-5 justify-center'
                                initial={{
                                    x: -3000
                                }}
                                transition={
                                    {
                                        delay: 0.2,
                                        duration: 1,
                                        type:'spring'
                                    }
                                }
                                animate={
                                    { x: 0 }
                                }>
                                <div className=' bg-gray-600 rounded-3xl w-3/4 flex justify-center shadow-lg shadow-cyan-400'>
                                    <div className='w-3/4 h-fit flex flex-col'>
                                        <div className='mt-2 flex justify-center'>
                                            <Title level={5} className='h-fit'>Еще нет аккаунта?</Title>
                                        </div>
                                        <button onClick={() => (navigate("/registration"))} className="w-full rounded-xl bg-green-500 h-10 mb-5 shadow-lg transition duration-500 hover:shadow-green-300 hover:font-bold">
                                            Регистрация
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </Content>

                <Footer style={{ background: "#25292C" }} className='mt-10'>
                    <div className='text-center'>
                        LOVENERGY ©2023 Created by JustLena
                    </div>
                </Footer>
            </Layout>
        </div>
    )
}

export default LoginPage