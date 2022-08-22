import { Header } from "../../components";
import Card from "./Card";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Card
            imagePath="/cars/carro01.png"
            name="Mustang"
            year={2015}
            maxSpeed={180}
            economyRate={9}
            userRate={8}
          />
          {/* <Card
            imagePath="/cars/carro01.png"
            name="Mustang"
            year={2015}
            maxSpeed={180}
            economyRate={9}
            userRate={8}
          />
          <Card
            imagePath="/cars/carro01.png"
            name="Mustang"
            year={2015}
            maxSpeed={180}
            economyRate={9}
            userRate={8}
          />
          <Card
            imagePath="/cars/carro01.png"
            name="Mustang"
            year={2015}
            maxSpeed={180}
            economyRate={9}
            userRate={8}
          /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
