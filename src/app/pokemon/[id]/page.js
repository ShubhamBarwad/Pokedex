'use client'
import { Provider } from "react-redux";
import store from "@/app/store";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DataContainer from "../../components/DataContainer";

export default function Details() {
  
  return (
    <main>
      <Provider store={store}>
        <Header/>
        <DataContainer/>
        <Footer/>
      </Provider>
    </main>
  )
}