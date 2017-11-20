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
    <PageBase title="Adicione itens"
      navigation="Natal">
      <form>

        <TextField
          hintText="Item"
          floatingLabelText="Descreva o item que deseja"
          fullWidth={true}
        />

        <TextField
          hintText="Link 1"
          floatingLabelText="Adicione um link"
          fullWidth={true}
        />

        <TextField
          hintText="Link 2"
          floatingLabelText="Adicione outro link"
          fullWidth={true}
        />

        <div style={styles.buttons}>

          <RaisedButton label="Adiconar"
            style={styles.saveButton}
            type="submit"
            primary={true} />

          <Link to="/">
            <RaisedButton label="Limpar" />
          </Link>


        </div>
      </form>
    </PageBase>
  );
};

export default FormPage;
