import React from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  MenuItem,
} from "@mui/material";

const Formulario = () => {
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
                errors.description = "Descrição é obrigatória";
              }
              if (!values.status) {
                errors.status = "Status obrigatório";
              }
              if (!values.client) {
                errors.client = "Cliente obrigatório";
              }
              if (!values.dateOfsell) {
                errors.dateOfsell = "Data da venda é obrigatório";
              }
              if (!values.weight) {
                errors.weight = "Peso é obrigatório";
              }
              if (!values.budget) {
                errors.budget = "Valor da venda é obrigatório";
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
                      <MenuItem value={10}>Concluido</MenuItem>
                      <MenuItem value={20}>Incompleto</MenuItem>
                    </TextField>
                  )}
                </Field>
                <Field name="client">
                  {({ field }) => (
                    <TextField
                      sx={{ width: "64%" }}
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
                      sx={{ width: "32%" }}
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
                      sx={{ width: "32%" }}
                      {...field}
                      label="Valor da Venda"
                      margin="dense"
                      variant="outlined"
                      error={touched.budget && Boolean(errors.budget)}
                      helperText={touched.budget && errors.budget}
                    />
                  )}
                </Field>

                <br />
                <Button variant="contained" color="secondary">
                  Voltar
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Formulario;
