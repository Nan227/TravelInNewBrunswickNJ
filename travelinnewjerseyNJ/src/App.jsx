import './App.css';
import Card from './components/Card.jsx';

const App = () => {

  return (
    <><div className = "header"> <h1>Thing to do in Rutgers University </h1>
    <h3> New Brunswick, NJ</h3> </div><div className="App">
      
      <Card imgSrc = "public/zimmerli.jpg" imgAlt = "zimmerli" title = "Zimmerli Art Museum" description= "The current special exhibit, Komar and Melamid, highlights the work of these Russian artists who were anti-government and anti-establishment, something that was very dangerous in the Stalin era " btnText = "Learn more" btnLink = "https://zimmerli.rutgers.edu/" />

      <Card imgSrc="public/geologyMuseum.jpg" imgAlt = "geologyMuseum" title = "Geology Museum" description= "They have beautiful and fascinating samples of all kinds of minerals and fossils, local and from farther afield. The cases are not large, but they are well-labeled and have very interesting specimens. There's a whole case of different minerals (rocks) just from NJ locally" btnText = "Learn more" btnLink = "https://geologymuseum.rutgers.edu/" />

      <Card imgSrc="public/rugarden.jpg" imgAlt = "rutgersgardens" title = "Rutgers Gardens" description= "Rutgers Gardens is a 180-acre botanic garden, consisting of designed gardens, plant collections, a student farm, farmers market, and natural habitats. As part of Rutgers University, Rutgers Gardens serves as a living laboratory for faculty and staff, while providing experiential and service learning opportunities for undergraduate and graduate students." btnText = "Learn more" btnLink = "https://rutgersgardens.rutgers.edu/" />

      <Card imgSrc="" imgAlt = "card-image" title = "card-title" description= "This is card description." buttonText = "Learn more" btnLink = "#" />

      <Card imgSrc="" imgAlt = "card-image" title = "card-title" description= "This is card description." buttonText = "Learn more" btnLink = "#" />
      
    </div>
    </>
  )
}

export default App