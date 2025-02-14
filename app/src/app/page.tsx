import Navbar from "@components/Navbar";
import SearchBar from "@components/SearchBar";
import Container from "@components/Containter";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Container>
        <SearchBar />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
