import logo from './logo.svg';
import './App.css';

function Gallery() {
  return (
    <>
     <div className="gallery-container">
      <h2>🦋Gallery</h2>
      <Card
        img = "/image/img1.jpg"
        title="밤감성"
        description="2024.6.14"/>
        <Card
        img = "/image/img2.jpg"
        title="베스트프렌드"
        description="2024.6.28"/>
        <Card
        img = "/image/img3.jpg"
        title="새침"
        description="2024.7.07"/>
        <Card
        img = "/image/img4.jpg"
        title="고민중독"
        description="2024.8.13"/>
        <Card
        img = "/image/img5.jpg"
        title="산발 머리"
        description="2024.9.10"/>
        <Card
        img = "/image/img6.jpg"
        title="깜찍"
        description="2024.9.22"/>
        <Card
        img = "/image/img7.jpg"
        title="아암"
        description="2024.10.03"/>
        <Card
        img = "/image/img8.jpg"
        title="공주병"
        description="2024.10.07"/>
     </div>
    </>
  );
}

export default Gallery;

function Card(props) {
  return(
    <div className="picture-card">
      <img src={props.img}></img>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  )
}
