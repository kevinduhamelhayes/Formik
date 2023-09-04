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
          className="form-input"
        />
        {formik.errors.name ? (
          <div className="error-message">{formik.errors.name}</div>
        ) : null}
      </div>
      <br />
      <label htmlFor="">apellido</label>
      <input
        type="text"
        name="lastname"
        onChange={formik.handleChange}
        value={formik.values.lastname}
        className="form-input"
      />
      <div className="error-message">{formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}</div>
      <br />
      <label htmlFor="">email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="form-input"
      />
      <div className="error-message">{formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>
      <br />
      <label htmlFor="">password</label>
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        className="form-input"
      />
      <div className="error-message">{formik.errors.password ? <div>{formik.errors.password}</div> : null}</div>
      <br />
      <button type="submit">enviar</button>
    </form>
  )
}

export default App
