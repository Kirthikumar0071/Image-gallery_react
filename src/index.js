
import ReactDOM from 'react-dom/client';
import './index.css';


import one from "./assets/image/one.jpg";
import two from './asset/images/two.jpg';
import three from './asset/images/three.jpg';
import four from './asset/images/four.jpg';
import five from './asset/images/five.jpg';
import six from './asset/images/six.jpg';
import seven from './asset/images/seven.jpg';
import eight from './asset/images/eight.jpg';




const root = ReactDOM.createRoot(document.getElementById('root'));
function Natural(Props){
  return(
    <div className="card">
      <img style={{width:"200px",height:"250px"}} src={Props.image} alt="images"/>
      <h1>{Props.description}</h1>
    </div>
  

  )
}
const Nature = [
  {
      images: one,
      description: "sea valley"
  },
  {
      images: two,
      description: "Beach"
  },
  {
      images: three,
      description: "Forest"
  },
  {
      images: four,
      description: "Alpaz beach"
  },
  {
      images: five,
      description: "Tourist spot"
  },
  {
      images: six,
      description: "vacation"
  },
  {
      images: seven,
      description: "Water Falls"
  },
  {
      images: eight,
      description: "Forest area"
  }
];
root.render(
  <div className="container">
  {
    Nature.map(function(item){
      return(
        <Natural image={item.images} description={item.description}></Natural>
      )
    })
  }
</div>
);


