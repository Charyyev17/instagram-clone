import * as Yup from "yup"

export const SignupSchema = Yup.object().shape({
    email: Yup.string()
                    .required()
                    .email(),
    fullName: Yup.string()
                .required(),
    username: Yup.mixed()
                .required()
                .test({
                    message: "Please enter a valid username",
                    test: str => /^[a-z0-9\.\_]+$/i.test(str)
                }),
    password: Yup.string()
                .required()
}) 