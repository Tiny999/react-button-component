import './App.css';
import './Button/Button'


import Button from '@material-ui/core/Button';
import ButtonShowcase from './ButtonShowcase/ButtonShowcase';
import Row from './Row/Row';

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <ButtonShowcase title="<Button />">
        <Button variant="contained" className="btn">Default</Button>      
      </ButtonShowcase>

      <ButtonShowcase title="<Button variant=”outline” />">
        <Button variant="outlined" color="primary" className="btn outline">Default</Button>      
      </ButtonShowcase>

      <ButtonShowcase title="<Button variant=”text” />">
        <Button color="primary" className="btn text">Primary</Button>      
      </ButtonShowcase>

      <ButtonShowcase title="<Button disableShadow />">
        <Button variant="contained" color="primary" disableElevation className="btn d-shadow">Default</Button>
      </ButtonShowcase>

      <Row>
      
        <ButtonShowcase title="<Button disabled />">
          <Button variant="contained" className="btn" disabled>Default</Button>
        </ButtonShowcase>
      
        <ButtonShowcase title="<Button variant=”text” disabled />">
          <Button className="btn text" disabled>Disabled</Button>
        </ButtonShowcase>
      
      </Row>

      <Row>
      
        <ButtonShowcase title="<Button startIcon=”local_grocery_store” />">
          <Button
          variant="contained"
          className="btn btn-primary"
          startIcon={<LocalGroceryStoreIcon />}
          >
            Default
          </Button>
        </ButtonShowcase>
      
        <ButtonShowcase title="<Button endIcon=”local_grocery_store” />">
          <Button
          variant="contained"
          className="btn btn-primary"
          endIcon={<LocalGroceryStoreIcon />}
          >
            Default
          </Button>
        </ButtonShowcase>
      
      </Row>

      <Row>

        <ButtonShowcase title="<Button size=”sm” />">
          <Button variant="contained" size="small" color="primary">
            Default
          </Button>
        </ButtonShowcase>

        <ButtonShowcase title="<Button size=”md” />">
          <Button variant="contained" size="medium" color="primary">
            Default
          </Button>
        </ButtonShowcase>

        <ButtonShowcase title="<Button size=”lg” />">
          <Button variant="contained" size="large" color="primary">
            Default
          </Button>
        </ButtonShowcase>
      
      </Row>

      <Row>

        <ButtonShowcase title="<Button color=”default” />">
          <Button variant="contained" className="btn btn-default">
            Default
          </Button>
        </ButtonShowcase>

      <ButtonShowcase title="<Button color=”default”  />">
          <Button variant="contained" className="btn btn-primary">
            Default
          </Button>
        </ButtonShowcase>

        <ButtonShowcase title="<Button color=”secondary” />">
          <Button variant="contained" className="btn btn-secondary">
            Default
          </Button>
        </ButtonShowcase>

        <ButtonShowcase title="<Button size=”danger” />">
          <Button variant="contained" className="btn btn-danger">
            Default
          </Button>
        </ButtonShowcase>
      
      </Row>

      <p>created by <a href="https://devchallenges.io/portfolio/Tiny999">Tiny99</a> - devChallenges.io</p>


    </div>
  );
}

export default App;
