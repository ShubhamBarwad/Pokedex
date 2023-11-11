'use client'
import Container from "./components/Container";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Provider store={store}>
        <Header/>
          <Container/>
        <Footer/>
      </Provider>
    </main>
  )
}
