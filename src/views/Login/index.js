import { Field, Formik } from 'formik';
import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import Layout from '../../components/Layout/index';
import LogoLogin from "../../assets/img/Login-Best-Pizza.png";
import schema from './schema';
import { Link } from 'react-router-dom';

const Login = () => (
    <Layout>
        <div className="d-flex flex-column justify-content-center align-items-center w-75 h-100 mx-auto px-md-5">
            <img
                src={LogoLogin}
                alt="best pizza"
                className="img-fluid mb-5"
                style={{ width: "250px" }}
            />
            <h1 className="mb-2">Bienvenido</h1>
            <div className="text-muted mb-5">A las mejores pizzas del país</div>
            <Formik
                validationSchema={schema}
                onSubmit={null}
            >
                {({
                    values,
                    errors,
                    touched,
                    isValid
                }) => (
                        <Form className="w-100">
                            <FormGroup>
                                <Field
                                    className="form-control flex-grow-1"
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
                            <FormGroup>
                                <Field
                                    className="form-control flex-grow-1"
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
                            >
                                Iniciar sesión
                            </Button>
                        </Form>
                    )}

            </Formik>
        </div>

    </Layout>
)

export default Login