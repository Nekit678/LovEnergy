import { Button, Image, Layout, Typography } from 'antd';
import LoginForm from './LoginForm';
import logo from '../assets/images/logo.png'
import logoForm from '../assets/images/logo512.png'
import { useAutorisationMutation, useRegistrationMutation } from '../redux/backend/api';



const { Title } = Typography;

const { Header, Content, Footer } = Layout;
function LoginPage() {
    const [autorisation, auto] = useAutorisationMutation()

    const test = async() => {
        await autorisation({login: "JustLena", password: "123456", remember: false})
    }

    return (
        <div className='flex min-h-screen'>
            <Layout className="layout" style={{ background: "#25292C" }}>
                <Header style={{ background: "#4B5563", position: 'sticky', top: 0, zIndex: 1, width: '100%', height: '70px' }}>
                    <div className='flex items-center shrink-0'>
                        <img src={logoForm} className='w-16 shrink-0'></img>
                        <Title level={2} type='secondary' className='mt-2 ml-3 shrink-0'>LovEnergy</Title>
                    </div>

                </Header>

                <Content className='mt-5'>
                    <div className="flex justify-center flex-wrap">


                        <div className="flex justify-center items-center animate-pulse">
                            <img src={logo} className='w-2/3 h-2/3'></img>
                        </div>



                        <div className='flex flex-col'>

                            <div className='flex justify-center '>
                                <div className=' bg-gray-600 rounded-3xl w-3/4 flex justify-center shadow-lg shadow-cyan-400 '>
                                    <div className='w-3/4 h-fit '>
                                        <LoginForm></LoginForm>
                                    </div>
                                </div>
                            </div>

                            <div className='h-fit flex mt-5 justify-center'>
                                <div className=' bg-gray-600 rounded-3xl w-3/4 flex justify-center shadow-lg shadow-cyan-400'>
                                    <div className='w-3/4 h-fit flex flex-col'>
                                        <div className='mt-2 flex justify-center'>
                                            <Title level={5} className='h-fit'>Еще нет аккаунта?</Title>
                                        </div>
                                        <button onClick={()=>(test())} className="w-full rounded-xl bg-green-500 h-10 mb-5 shadow-lg transition delay-60 duration-500 hover:shadow-green-300">
                                            Регистрация
                                        </button>
                                    </div>
                                </div>
                            </div>

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