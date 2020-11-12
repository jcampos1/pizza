import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup } from 'reactstrap';
import LogoLogin from "../../assets/img/Login-Best-Pizza.png";
import Layout from '../../components/Layout/index';
import Loading from '../../components/Loading/index';
import { usePizza } from '../../context/PizzaContext';
import schema from './schema';

const Login = ({ history }) => {
    const [externalError, setExternalError] = useState(null);
    const { isLoading, isLoggedin, getData, login, logout } = usePizza();

    useEffect(() => {
        if (isLoggedin)
            logout();
        getData();
    }, []);

    /**
     * handle submit of login form
     * @param {Object} e event
     * @param {Object} values form data
     */
    const handleSubmit = (e, values) => {
        e.preventDefault();
        setExternalError(null);
        const { email, password } = values;
        login(email, password)
            .then(response => {
                history.push("/stores");
                setExternalError(null);
            })
            .catch(err => setExternalError(err))
    }

    return (
        <Layout isLogin={true}>
            {isLoading || isLoading && <Loading />}
            <div className="content-login d-flex flex-column justify-content-center align-items-center h-100 mx-auto">
                <img
                    src={LogoLogin}
                    alt="best pizza"
                    className="img-fluid content-login__logo"
                />
                <div className="my-3 my-md-5">
                    <h1 className="text-center mb-2">Bienvenido</h1>
                    <div className="text-muted text-center">A las mejores pizzas del país</div>
                </div>
                <Formik
                    initialValues={{email: "", password: ""}} 
                    validationSchema={schema}
                    onSubmit={null}>
                    {({
                        values,
                        errors,
                        touched,
                        isValid
                    }) => (
                            <Form className="login w-100">
                                {
                                    externalError && (
                                        <div className="text-center text-uppercase invalid-feedback d-block mb-4">
                                            {externalError}
                                        </div>
                                    )
                                }
                                {/* USER FIELD */}
                                <FormGroup>
                                    <Field
                                        className="form-control"
                                        name="email"
                                        type="text"
                                        placeholder="Usuario"
                                    />
                                    {errors.email && touched.email && (
                                        <div className="invalid-feedback d-block">
                                            {errors.email}
                                        </div>
                                    )}
                                </FormGroup>
                                {/* PASSWORD FIELD */}
                                <FormGroup>
                                    <Field
                                        className="form-control"
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                    />
                                    {errors.password && touched.password && (
                                        <div className="invalid-feedback d-block">
                                            {errors.password}
                                        </div>
                                    )}
                                </FormGroup>
                                <Link
                                    to="/"
                                    className="d-block text-center font-weight-bold my-3 my-md-5">
                                    ¿Olvidaste tu contraseña?
                            </Link>
                                <Button
                                    color="primary"
                                    size="lg"
                                    block={true}
                                    className="shadow-sm py-3"
                                    disabled={!isValid || isLoading}
                                    onClick={e => handleSubmit(e, values)}
                                    type="submit"
                                >
                                    Iniciar sesión
                            </Button>
                            </Form>
                        )}
                </Formik>
            </div>
        </Layout>
    )
}

export default Login