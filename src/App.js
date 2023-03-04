import Card from "./components/Card/Card";
import nft_img from "./assets/image-equilibrium.jpg"
import author_avatar from "./assets/image-avatar.png"
function App() {
  let props = {
    nft_img,
    title : "Equilibrium",
    id : "#3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    eth_ammount: 0.041,
    time_left: 3,
    author:{
      name: "Jules Wyvern",
      avatar : author_avatar
    }
  }
  return (
    <div className="box">
        <Card {...props}/>
    </div>
  );
}

export default App;
