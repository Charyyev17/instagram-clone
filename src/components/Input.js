import { useField, ErrorMessage } from "formik"
import { useEffect, useState } from "react"
import classNames from "classnames"

export default function Input ({ label, type = "text", ...props }) {

    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)
    const [field, meta, helpers] = useField(props)

    useEffect(() => {
        if (show) {
            setType('text')
        } else if (type === 'password') {
            setType('password')
        }
    }, [show])

    return (
        <>
        <label className={classNames({
            "block relative flex bg-zinc-50 border rounded-sm": true,
            "focus-within:border-gray-400": !meta.error || !meta.touched,
            "border-red-600": meta.error && meta.touched
        })}>
            <input type={inputType} className={classNames({
                "px-2 bg-zinc-50 text-xs outline-none w-full h-[38px]": true,
                "pt-[10px]": field.value
            })} {...field} {...props} />
            <small className={classNames({
                "absolute top-1/2 left-2 text-xs text-gray-400 cursor-text pointer-events-none -translate-y-1/2 transition-all": true,
                "text-xs top-1/2": !field.value,
                "text-[10px] top-2.5": field.value
            })}>{label}</small>
            {type === 'password' && field?.value && (
                <div type="button" onClick={() => setShow(show => !show)} className="h-full flex items-center text-sm mr-2 font-semibold cursor-pointer">
                    {show ? 'Hide' : 'Show'}
                </div>
            )}
        </label>
        <ErrorMessage name={field.name} component="small" className="text-xs block text-red-600" />
        </>

    )
}