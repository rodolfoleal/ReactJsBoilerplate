import React from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import FormPage from './FormPage';
import Data from '../data';

const ListPage = () => {
  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
      zIndex: 99
    },
    editButton: {
      fill: grey500
    },
    columns: {
      name: {
        width: '45%'
      },
      price: {
        width: '25%'
      },
      category: {
        width: '20%'
      },
      edit: {
        width: '10%'
      }
    }
  };

  return (
    <div>
      <FormPage navigation="Application / Table Page" />

      <Link to="/form" >
        <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500} zDepth={0}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>

      <PageBase title="Natal">
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={styles.columns.name}>Produto</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.price}>Link1</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.category}>Link2</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.edit}>Excluir</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Data.tablePage.items.map(item =>
                <TableRow key={item.id}>
                  <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
                  <TableRowColumn style={styles.columns.price}><FlatButton label="Compre Aqui" primary={true} /></TableRowColumn>
                  <TableRowColumn style={styles.columns.category}><FlatButton label="ou Aqui" primary={true} /></TableRowColumn>
                  <TableRowColumn style={styles.columns.edit}>
                    <Link className="button" to="/form">
                      <FloatingActionButton zDepth={1}
                        mini={true}
                        backgroundColor={grey200}
                        iconStyle={styles.editButton}>
                        <DeleteIcon />
                      </FloatingActionButton>
                    </Link>
                  </TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </PageBase>
    </div>
  );
};

export default ListPage;
