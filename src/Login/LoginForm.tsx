import { Layout, Form, Input, Checkbox, Button, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logoForm from '../assets/images/logo512.png'

const { Title } = Typography;

function LoginForm() {
    return (
        <div className=''>
            <Form name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}>

                <Form.Item>
                    <div className='flex flex-col'>
                        <div className='flex justify-center'>
                            <img src={logoForm} className='w-2/6 mt-5'></img>
                        </div>
                        <div className='flex justify-center'>
                            <Title level={4} className='h-fit'>Вход на LovEnergy</Title>
                        </div>

                    </div>
                </Form.Item>

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Введите логин!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
                </Form.Item>

                <Form.Item
                    name="Пароль"
                    rules={[{ required: true, message: 'Введите пароль!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>


                <button className='bg-gray-500 h-10 w-1/2 rounded-xl'>Забыли пароль?</button>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" className="login-form-button w-full bg-gray-400 h-10">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
}

export default LoginForm