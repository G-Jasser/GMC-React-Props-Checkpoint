import Card from 'react-bootstrap/Card';
//This is the player card's template
const Player = ({player}) =>{
    const {name, team, nationality, jerseyNumber, age, imageURL} = player
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <h3>{team}</h3>
                <h4>Jersey Number: {jerseyNumber}</h4>
                <h6>Nationality: {nationality}</h6>
                <h6>Age: {age}</h6>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Player