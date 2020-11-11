import { Field, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import Layout from '../../components/Layout/index';
import LogoLogin from "../../assets/img/Login-Best-Pizza.png";
import schema from './schema';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/index';
import { usePizza } from '../../context/PizzaContext';
import { API_URL } from '../../api/index';

const Login = () => {
    const [isSending, setIsSending] = useState(false);
    const { users, isLoading, fetchData } = usePizza();

    useEffect(() => {
        fetchData();
    }, []);

    /**
     * handle submit of login form
     * @param {Object} values form data
     */
    const handleSubmit = values => {
        setIsSending(true);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, 2000);
        })
        .catch(err => console.log(err))
        .finally(() => setIsSending(false));
    }

    return (
        <Layout>
            {isSending && <Loading />}
            <div className="d-flex flex-column justify-content-center align-items-center w-75 h-100 mx-auto px-md-5">
                <img
                    src={LogoLogin}
                    alt="best pizza"
                    className="img-fluid mb-5"
                    style={{ width: "250px" }}
                />
                <h1 className="mb-2">Bienvenido</h1>
                <div className="text-muted mb-5">A las mejores pizzas del país</div>
                <Formik validationSchema={schema}>
                    {({
                        values,
                        errors,
                        touched,
                        isValid
                    }) => (
                            <Form className="w-100">
                                {/* USER FIELD */}
                                <FormGroup>
                                    <Field
                                        className="form-control"
                                        name="user"
                                        type="text"
                                        placeholder="Usuario"
                                    />
                                    {errors.user && touched.user && (
                                        <div className="invalid-feedback d-block">
                                            {errors.user}
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
                                    className="d-block text-center font-weight-bold my-5">
                                    ¿Olvidaste tu contraseña?
                            </Link>
                                <Button
                                    color="primary"
                                    size="lg"
                                    block={true}
                                    className="shadow-sm py-3"
                                    disabled={!isValid || isSending}
                                    onClick={() => handleSubmit(values)}
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