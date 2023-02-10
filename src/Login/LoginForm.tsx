import { Form, Input, Checkbox, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logoForm from '../assets/images/logo512.png'
import { LoginFormProps } from './../models/compModels';

const { Title } = Typography;

function LoginForm(props: LoginFormProps) {
    return (
        <div className=''>
            <Form name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={(formData: any) => {
                    if (props.formType === "auth") {
                        props.authFunction ? props.authFunction(formData) : console.error("Submit function not found!")
                    }
                    else {
                        props.regFunction ? props.regFunction(formData) : console.error("Submit function not found!")
                    }
                }
                }>

                <Form.Item>
                    <div className='flex flex-col'>
                        <div className='flex justify-center'>
                            <img src={logoForm} className={`w-2/6 mt-5 ${props.isLoading?"animate-spin":""}`}></img>
                        </div>
                        <div className='flex justify-center'>
                            <Title level={4} className='h-fit'>{props.formType === "auth" ? "Вход на LovEnergy" : "Регистрация на LovEnergy"}</Title>
                        </div>

                    </div>
                </Form.Item>

                <Form.Item
                    name="login"
                    rules={props.formType === "reg" ? [{ required: true, message: 'Введите логин!' },
                    { max: 20, message: 'Максимум 20 символов!' },
                    { min: 5, message: 'Минимум 5 символов!' }]:
                    [{ max: 20, message: 'Максимум 20 символов!' },{ required: true, message: 'Введите пароль!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
                </Form.Item>

                <Form.Item
                    name="password"

                    rules={props.formType === "reg" ? [{ required: true, message: 'Введите пароль!' },
                    { max: 20, message: 'Максимум 20 символов!' },
                    { min: 8, message: 'Минимум 8 символов!' },
                    { pattern: /(?=.*[a-z])(?=.*[A-Z])/, message: "Хотя бы одна латинская буква в верхнем и нижнем регистрах!" }]:
                    [{ max: 20, message: 'Максимум 20 символов!' },{ required: true, message: 'Введите пароль!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>


                {/* <button className='bg-gray-500 h-10 w-1/2 rounded-xl'>Забыли пароль?</button> */}

                {props.formType === "auth" ? <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className='text-gray-300'>Запомнить вход</Checkbox>
                    </Form.Item>
                </Form.Item> : <></>}


                <Form.Item>
                    <button className="login-form-button w-full rounded-xl bg-gray-400 h-10 shadow-lg transition duration-500 hover:shadow-gray-300 hover:font-bold">
                        {props.formType === "auth" ? "Войти" : "Зарегистрироваться"}
                    </button>
                </Form.Item>

            </Form>
        </div >

    );
}

export default LoginForm