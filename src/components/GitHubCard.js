import  Card  from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

function GitHubCard() {
    return(
        <Container>
            <Card>
            <Card.Img variant="top" src="./guitar.jpg" alt="guitar" />
            <Card.Body>
                        <Card.Title>nawright16</Card.Title>
                        <Card.Text>
                           Slowly becoming a software developer
                        </Card.Text>
                    </Card.Body> 
            </Card>
        </Container>
    )
}

export default GitHubCard;