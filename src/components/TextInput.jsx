
import { useField } from 'formik'


const TextInput =  ({ label,...props }) => {
  const [field, meta] = useField(props)
  console.log(field, meta)

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-message">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default TextInput