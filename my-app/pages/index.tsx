import { styled } from "./styles";

const Button = styled("button", {
  backgroundColor: "Purple",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
  span: {
    fontWeight: "bold",
  },
  "&:hover": {
    background: "Red",
  },
});

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button>
        Enviar <span>agora</span>
      </Button>
    </>
  );
}

export default Home;
