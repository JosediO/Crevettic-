import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  MenuItem,
} from "@mui/material";

import "./Formulario.css";

const Formulario = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/status")
      .then((resp) => {
        setStatus(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box className="containerCard">
      <Card sx={{ borderRadius: 4, width: "78%", margin: "auto", mt: "75px" }}>
        <CardContent>
          <p className="title">Dados da Venda</p>
          <Formik
            initialValues={{
              description: "",
              status: "",
              client: "",
              dateOfsell: "",
              weight: "",
              budget: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.description) {
                errors.description = "A descrição é obrigatória";
              }
              if (!values.status) {
                errors.status = "O Status é obrigatório";
              }
              if (!values.client) {
                errors.client = "O Cliente é obrigatório";
              }
              if (!values.dateOfsell) {
                errors.dateOfsell = "A Data da venda é obrigatório";
              }
              if (!values.weight) {
                errors.weight = "O Peso é obrigatório";
              } else if (values.weight < 0) {
                errors.weight = "O Peso é invalido";
              }
              if (!values.budget) {
                errors.budget = "O Valor da venda é obrigatório";
              } else if (values.budget <= 0) {
                errors.budget = "O Valor é invalido";
              }
              return errors;
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="description">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Descrição"
                      variant="outlined"
                      margin="dense"
                      autoComplete="off"
                      fullWidth
                      error={touched.description && Boolean(errors.description)}
                      helperText={touched.description && errors.description}
                    />
                  )}
                </Field>
                <br />
                <div className="line2">
                  <Field name="status">
                    {({ field }) => (
                      <TextField
                        sx={{ width: "32%" }}
                        {...field}
                        label="Staus"
                        select
                        margin="dense"
                        variant="outlined"
                        error={touched.status && Boolean(errors.status)}
                        helperText={touched.status && errors.status}
                      >
                        {/* <MenuItem value={10}>Concluido</MenuItem>
                        <MenuItem value={20}>Incompleto</MenuItem>
                        <TextField></TextField> */}

                        {status.map((status) => (
                          <MenuItem key={status.id} value={status.id}>
                            {status.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  </Field>
                  <Field name="client">
                    {({ field }) => (
                      <TextField
                        className="cliente"
                        {...field}
                        label="Cliente"
                        select
                        margin="dense"
                        variant="outlined"
                        error={touched.client && Boolean(errors.client)}
                        helperText={touched.client && errors.client}
                      >
                        <MenuItem value={10}>cliente 1</MenuItem>
                        <MenuItem value={20}>cliente 2</MenuItem>
                      </TextField>
                    )}
                  </Field>
                </div>
                <div className="line3">
                  <Field name="dateOfsell">
                    {({ field }) => (
                      <TextField
                        sx={{ width: "32%" }}
                        {...field}
                        label="Data da Venda"
                        margin="dense"
                        variant="outlined"
                        error={touched.dateOfsell && Boolean(errors.dateOfsell)}
                        helperText={touched.dateOfsell && errors.dateOfsell}
                      />
                    )}
                  </Field>
                  <Field name="weight">
                    {({ field }) => (
                      <TextField
                        sx={{ width: "33%" }}
                        {...field}
                        label="Quantidade(KG)"
                        margin="dense"
                        variant="outlined"
                        error={touched.weight && Boolean(errors.weight)}
                        helperText={touched.weight && errors.weight}
                      />
                    )}
                  </Field>
                  <Field name="budget">
                    {({ field }) => (
                      <TextField
                        sx={{ width: "33%" }}
                        {...field}
                        label="Valor da Venda"
                        margin="dense"
                        variant="outlined"
                        error={touched.budget && Boolean(errors.budget)}
                        helperText={touched.budget && errors.budget}
                      />
                    )}
                  </Field>
                </div>
                <br />
                <div className="btnInputs">
                  <Button
                    className="btn"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Enviar
                  </Button>
                  <Button className="btn" variant="contained" color="secondary">
                    Voltar
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Formulario;
