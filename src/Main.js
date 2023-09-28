import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json'
function Main() {
  return (
  <>
  <div style = {{display : "flex" , justifyContent : 'space-between' , marginTop : "2%"}}>
  {data.map(function(item){return(

    
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image_url }/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary">{item.category}</Button>
      </Card.Body>
    </Card>
    


  )})} 
  </div>
  </>
    );
}

export default Main;