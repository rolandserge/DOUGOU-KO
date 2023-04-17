import "../../Styles/Component/Header.css"
import "../../Styles/Component/Categories.css"
import "../../Styles/Component/Banner.css"
import "../../Styles/Component/TopVente.css"
import '../../Styles/Component/Pub.css'
import "../../Styles/Component/Produit.css"
import "../../Styles/Pages/DetailProduit.css"
import "../../Styles/Pages/Panier.css"
import '../../Styles/Pages/Produit/Produit.css'
import "../../Styles/Component/Nav.css"
import "../../Styles/Pages/Facture.css"
import { useEffect, useState } from 'react';
import { CartProvider } from "react-use-cart"
import store from "../../store"
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack"

export default function App({ Component, pageProps }) {

  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true));
  if (mounted) {
    return (
      <Provider store={store} >
        <SnackbarProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </SnackbarProvider>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  )
  
}
