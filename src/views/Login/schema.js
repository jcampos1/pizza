import React from 'react'
import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup
        .string()
        .email("Este campo debe ser un email")
        .required("Este campo es requerido"),
    password: Yup
        .string()
        .min(8, "Este campo debe ser mínimo de 8 caracteres")
        .required("Este campo es requerido")
});

export default schema;