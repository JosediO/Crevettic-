import React, { useEffect, useState } from "react";
import "./NovoFornecedor.css";
import axios from "axios";
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
  const [uf, setUf] = useState([]);
  const [mun, setMun] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      )
      .then((resp) => {
        setUf(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/${}/municipios"
      )
      .then((resp) => {
        setMun(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                if (!values.state && !values.city) {
                  errors.city = "Selecione o estado primeiro";
                }
                if (!values.city && values.state && !values.city) {
                  errors.city = "A cidade é obrigatoria";
                }
                if (!values.phone) {
                  errors.phone = "O telefone é obrigatório";
                } else if (
                  values.phone.length <= 0 &&
                  values.phone.length === 11
                ) {
                  errors.phone = "O telefone é invalido";
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
                          {uf.map((uf) => (
                            <MenuItem key={uf.id} value={uf.id}>
                              {uf.nome}
                            </MenuItem>
                          ))}
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
                        >
                          {mun.map((mun) => (
                            <MenuItem key={mun.id}>{mun.nome}</MenuItem>
                          ))}
                        </TextField>
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
                    <Button className="btn" variant="outlined" color="primary">
                      Voltar
                    </Button>
                    <Button
                      className="btn"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Salvar
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
