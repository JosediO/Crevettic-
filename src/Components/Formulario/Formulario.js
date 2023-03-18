import "./Formulario.css";

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function Formulario() {
  const [status, setStatus] = React.useState("");
  const [client, setClient] = React.useState("");

  const statusHandleChange = (event) => {
    setStatus(event.target.value);
  };

  const clienteHandleChange = (event) => {
    setClient(event.target.value);
  };

  return (
    <Box className="containerCard">
      <Card className="cardForm">
        <CardContent className="cardInputs">
          <>Dados da Venda</>
          <TextField
            id="outlined"
            label="Descrição"
            margin="dense"
            size="small"
            fullWidth
            mergin="normal"
          ></TextField>
          <div className="line2">
            <FormControl margin="dense" className="status" size="small">
              <InputLabel id="demo-select-small">Status</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                margin="normal"
                value={status}
                label="Status"
                onChange={statusHandleChange}
              >
                <MenuItem value={10}>Concluido</MenuItem>
                <MenuItem value={20}>Incompleto</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="dense" className="cliente" size="small">
              <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                margin="dense"
                size="small"
                value={client}
                label="Cliente"
                onChange={clienteHandleChange}
              >
                <MenuItem value={10}>Concluido</MenuItem>
                <MenuItem value={20}>Incompleto</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="line3">
            <TextField
              className="venda"
              id="outlined"
              size="small"
              label="Data da Venda"
              // type={"date"}
              margin="dense"
            ></TextField>
            <TextField
              className="peso"
              id="outlined"
              size="small"
              type={"number"}
              label="Quantidade (em KG)"
              margin="dense"
            ></TextField>
            <TextField
              className="preco"
              id="outlined"
              size="small"
              label="Preço da Venda"
              margin="dense"
            ></TextField>
          </div>
          <div className="btnInputs">
            <Button className="btn" variant="contained" color="primary">
              Salvar
            </Button>
            <Button className="btn" variant="contained" color="secondary">
              Voltar
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Formulario;
