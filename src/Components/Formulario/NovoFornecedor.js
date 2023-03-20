import React from "react";
import "./NovoFornecedor.css";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  MenuItem,
} from "@mui/material";

function NovoFornecedor() {
  return (
    <div>
      <Box className="containerCard">
        <Card>
          <CardContent>
            <p className="title">Adcionar Novo Cliente</p>
            <Formik
              initialValues={{
                name: "",
                street: "",
                number: "",
                state: "",
                city: "",
                phone: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "O nome é obrigatório";
                }
                if (!values.street) {
                  errors.street = "A rua é obrigatória";
                }
                if (!values.number) {
                  errors.number = "O Nª é obrigatório";
                }
                if (!values.state) {
                  errors.state = "O estado é obrigatório";
                }
                if (!values.city) {
                  errors.city = "A cidade é obrigatória";
                }
                if (!values.phone) {
                  errors.budget = "O telefone é obrigatório";
                } else if (
                  values.phone.length <= 0 &&
                  values.phone.length === 11
                ) {
                  errors.budget = "O telefone é invalido";
                }
                return errors;
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field name="name">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="Nome"
                        variant="outlined"
                        margin="dense"
                        autoComplete="off"
                        fullWidth
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    )}
                  </Field>
                  <br />
                  <div className="line2">
                    <Field name="street">
                      {({ field }) => (
                        <TextField
                          sx={{ width: "80%" }}
                          {...field}
                          label="Rua"
                          margin="dense"
                          variant="outlined"
                          error={touched.street && Boolean(errors.street)}
                          helperText={touched.street && errors.street}
                        />
                      )}
                    </Field>
                    <Field name="number">
                      {({ field }) => (
                        <TextField
                          sx={{ width: "20%" }}
                          {...field}
                          label="Nº"
                          margin="dense"
                          variant="outlined"
                          error={touched.number && Boolean(errors.number)}
                          helperText={touched.number && errors.number}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="line3">
                    <Field name="state">
                      {({ field }) => (
                        <TextField
                          sx={{ width: "32%" }}
                          {...field}
                          select
                          label="Estado"
                          margin="dense"
                          variant="outlined"
                          error={touched.state && Boolean(errors.state)}
                          helperText={touched.state && errors.state}
                        >
                          <MenuItem>Acre</MenuItem>
                          <MenuItem>Alagoas</MenuItem>
                          <MenuItem>Amapá</MenuItem>
                          <MenuItem>Amazonas</MenuItem>
                          <MenuItem>Bahia</MenuItem>
                          <MenuItem>Ceará</MenuItem>
                          <MenuItem>Destrito Federal</MenuItem>
                          <MenuItem>Espirito Santo</MenuItem>
                          <MenuItem>Goiás</MenuItem>
                          <MenuItem>Maranhão</MenuItem>
                          <MenuItem>Mato Grosso</MenuItem>
                          <MenuItem>Mato Grosso do Sul</MenuItem>
                          <MenuItem>Minas Gerais</MenuItem>
                          <MenuItem>Pará</MenuItem>
                          <MenuItem>Paraíba</MenuItem>
                          <MenuItem>Paraná</MenuItem>
                          <MenuItem>Pernanbuco</MenuItem>
                          <MenuItem>Piauí</MenuItem>
                          <MenuItem>Rio de Janeiro</MenuItem>
                          <MenuItem>Rio Grande do Norte</MenuItem>
                          <MenuItem>Rio Grande do Sul</MenuItem>
                          <MenuItem>Rondônia</MenuItem>
                          <MenuItem>Roraima</MenuItem>
                          <MenuItem>Santa Catarina</MenuItem>
                          <MenuItem>São Paulo</MenuItem>
                          <MenuItem>Sergipe</MenuItem>
                          <MenuItem>Tocantins</MenuItem>
                        </TextField>
                      )}
                    </Field>
                    <Field name="city">
                      {({ field }) => (
                        <TextField
                          sx={{ width: "33%" }}
                          {...field}
                          select
                          label="Cidade"
                          margin="dense"
                          variant="outlined"
                          error={touched.city && Boolean(errors.city)}
                          helperText={touched.city && errors.city}
                        />
                      )}
                    </Field>
                    <Field name="phone">
                      {({ field }) => (
                        <TextField
                          sx={{ width: "33%" }}
                          {...field}
                          label="Telefone"
                          number
                          autoComplete="off"
                          margin="dense"
                          variant="outlined"
                          error={touched.phone && Boolean(errors.phone)}
                          helperText={touched.phone && errors.phone}
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
                    <Button
                      className="btn"
                      variant="contained"
                      color="secondary"
                    >
                      Voltar
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default NovoFornecedor;
