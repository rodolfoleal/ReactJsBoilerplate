import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { grey400 } from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';

const FormPage = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="Crie uma lista"
      navigation="Nova Lista">
      <form>

        <TextField
          hintText="Nome da lista"
          floatingLabelText="De um nome a sua nova lista"
          fullWidth={true}
        />

        <TextField
          hintText="Descrição"
          floatingLabelText="Adicione uma descrição"
          fullWidth={true}
        />

        <div style={styles.buttons}>

          <RaisedButton label="Adiconar"
            style={styles.saveButton}
            type="submit"
            primary={true} />

          <Link to="/">
            <RaisedButton label="Cancelar" />
          </Link>


        </div>
      </form>
    </PageBase>
  );
};

export default FormPage;
