import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "..";
import { Icon } from "@iconify/react";
import HeaderContainer from "./Container";

type MenuButtonType = {
  label: string;
  url: string;
};

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuContent: MenuButtonType[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Sobre",
      url: "/",
    },
    {
      label: "Tabela",
      url: "/list",
    },
    {
      label: "Fale conosco",
      url: "/",
    },
  ];

  return (
    <HeaderContainer path={location.pathname}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <Icon
          icon="carbon:logo-delicious"
          style={{
            height: "3rem",
            width: "3rem",
            color: "white",
          }}
        />
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
    </HeaderContainer>
  );
}
