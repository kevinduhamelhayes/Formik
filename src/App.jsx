import "./index.css"
import { Formik, Form, Field, ErrorMessage } from "formik"

//formik con componentes

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = "requerido"
  } else if (values.name.length < 3) {
    errors.name = "debe tener al menos 3 caracteres"
  }
  if (!values.lastname) {
    errors.lastname = "requerido"
  } else if (values.lastname.length < 3) {
    errors.lastname = "debe tener al menos 3 caracteres"
  }
  if (!values.email) {
    errors.email = "requerido"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "email invalido"
  }
  if (!values.password) {
    errors.password = "requerido"
  } else if (values.password.length < 8) {
    errors.password = "debe tener al menos 8 caracteres"
  }

  return errors
}

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        password: "",
      }}
      validate={validate}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form className="form-container">
        <div className="form-group">
          <label>nombre</label>
          <Field name="name" className="form-input" type="text" />
          <ErrorMessage name="name" component="div" className="error-message" /> 
        </div>

        <div className="form-group">
          <label htmlFor="lastname">apellido</label>
          <Field name="lastname" className="form-input" type="text" />
          <ErrorMessage name="lastname" component="div" className="error-message" />

        </div>

        <div className="form-group">
          <label htmlFor="email">email</label>
          <Field name="email" className="form-input" type="email" />
          <ErrorMessage name="email" component="div" className="error-message" />

        </div>

        <div className="form-group">
          <label htmlFor="password">password</label>
          <Field name="password" className="form-input" type="password" />
          <ErrorMessage name="password" component="div" className="error-message" />

        </div>

        <button className="submit-btn" type="submit">
          enviar
        </button>
      </Form>
      
    </Formik>
  )
}

export default App
