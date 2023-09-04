import "./index.css"
import { useFormik } from "formik"

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
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          className="form-input"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error-message">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="lastname">apellido</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          onBlur={formik.handleBlur}
          className="form-input"
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div className="error-message">{formik.errors.lastname}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          className="form-input"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-message">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          className="form-input"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error-message">{formik.errors.password}</div>
        ) : null}
      </div>

      <button className="submit-btn" type="submit">
        enviar
      </button>
    </form>
  )
}

export default App
