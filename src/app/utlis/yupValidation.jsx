import * as Yup from 'yup'

export const validateYupSchema = Yup.object({
    name:Yup.string().min(2,"minimum character two required").max(24).required("Name Field not be empty"),
    email:Yup.string().email().required("Email field not be empty"),
    message:Yup.string().min(6).required("Message field not be empty")
})