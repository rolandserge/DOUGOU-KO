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
import "../../Styles/Component/Admin/header.css"
import "../../Styles/Component/Admin/Layout/layout.css"
import '../../Styles/Component/Admin/Produit/index.css'
import "../../Styles/Component/Admin/Commande/index.css"
import "../../Styles/Component/Admin/Commande/produit.css"
import "../../Styles/Pages/Profil/index.css"
import { useEffect, useState } from 'react';
import { CartProvider } from "react-use-cart"
import store from "../../store"
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack"

export default function App({ Component, pageProps }) {

  const [mounted, setMounted] = useState(false);

  // const Layout = Component.getLayout || ((page) => page)
  
  useEffect(() => setMounted(true));
  if (mounted) {
    return (
      <Provider store={store} >
        <SnackbarProvider>
          <CartProvider>
            { Component.PageLayout ? (
                <Component.PageLayout>
                  <Component {...pageProps} />
                </Component.PageLayout>
              ) : (
                <Component {...pageProps} />
            )}
          </CartProvider>
        </SnackbarProvider>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <SnackbarProvider>
        { Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
            ) : (
            <Component {...pageProps} />
        )}
      </SnackbarProvider>
    </Provider>
  )
  
}
