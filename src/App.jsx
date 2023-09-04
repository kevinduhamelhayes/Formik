import { useFormik } from "formik"

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <label htmlFor="">nombre</label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="">apellido</label>
      <input
        type="text"
        name="lastname"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <label htmlFor="">email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="">password</label>
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">enviar</button>
    </form>
  )
}

export default App
