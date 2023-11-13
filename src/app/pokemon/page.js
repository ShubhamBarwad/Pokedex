'use client'
import Container from "../components/Container";
import { Provider } from "react-redux";
import store from "../store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <main>
      <Provider store={store}>
        <Header/>
          <Container/>
        <Footer/>
        <Loader/>
      </Provider>
    </main>
  )
}
