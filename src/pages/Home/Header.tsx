import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { Icon } from "@iconify/react";

type MenuButtonType = {
  label: string;
  url: string;
};

export default function Header() {
  const navigate = useNavigate();

  const menuContent: MenuButtonType[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Sobre",
      url: "/cart",
    },
    {
      label: "Tabela",
      url: "/catalog",
    },
    {
      label: "Fale conosco",
      url: "/",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url(/mustang_main.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "calc(0.5*100vw)",
        minHeight: "400px",
        width: "100%",
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "2rem",
          marginRight: "2rem",
          // width: "calc(100% - 4rem)",
        }}
      >
        <img src="/carbon_logo.svg" />
        {menuContent.map((item, index) => (
          <Button key={index} onClick={() => navigate(item.url)}>
            {item.label}
          </Button>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <Button onClick={() => navigate("/")}>Entrar</Button>
          <Icon
            icon="ant-design:user-outlined"
            style={{
              color: "white",
              width: "2rem",
              height: "2rem",
              margin: "auto auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
