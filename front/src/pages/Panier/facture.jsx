"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../../Layouts/Nav";
import { useCart } from "react-use-cart";
import Image from "next/image";
import { useAuth } from "../../../Hooks/auth";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loading from "../../../Component/Loading";
import axiosAuth from "../../../Libs/axios";

const facture = () => {

  const { cartTotal, items, isEmpty, emptyCart } = useCart();

  const [mounted, setMounted] = useState(false);

  const { user } = useAuth({ middleware: "auth" });

  const { livraison } = useSelector((item) => item.livraison);

  const router = useRouter();

  var ladate = new Date();

  const Finish = async (e) => {

    e.preventDefault();

    try {
      await axiosAuth
        .post(`/api/add-commande`, {
          payement: livraison.paye,
          totaux: cartTotal,
          adresse: livraison.adresse,
          numero: livraison.numero,
          panier: items,
          ville: livraison.ville,
          user: user.id,
        })
        .then((res) => {
          if (res.data.status == 200) {
            router.push("/Panier/Finish");
            // emptyCart();
            console.log(res.data)
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMounted(true);

    // navigator.geolocation.getCurrentPosition((position) => {
    //   setLatitude(position.coords.latitude);
    //   setLongitude(position.coords.longitude);
    // });

        if(mounted && (Object.keys(livraison).length == 0 || isEmpty)) {
          router.push("/Panier");
        }
  }, [mounted]);


  if (mounted && (Object.keys(livraison).length == 0 || isEmpty)) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
          <Nav titre="Recupalitif de ma commande" />
    
        <div className="container_recap">
            <div className="indicatif">
                <p>Recapulatif de ma commande</p>
            </div>
          <div className="contenu_recap">
            <div className="recap">
                {mounted &&
                  items?.map((item, index) => (
                    <div className="card_panier" key={index}>
                      <div className="image_produit">
                        <Image
                          loader={() =>
                            `${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`
                          }
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`}
                          width={50}
                          height={50}
                          unoptimized={true}
                          alt={item.name}
                          priority
                          className="image"
                        />
                      </div>
                      <div className="detail_div">
                        <div className="name_produit">
                          <p>{item?.name}</p>
                        </div>
                        <div className="action_div">
                          <div className="action_quantite">
                            <span>{"Quantité : " + item?.quantity}</span>
                          </div>
                        </div>
                        <div className="price">
                          <span>
                            {(item?.price * item?.quantity).toLocaleString("fr-FR")}{" "}
                            FCFA
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
            <div className="information">
                  <div className="infos_livraison">
                    <div className="card_livraison">
                        <div className="head">
                          <h3>Informations de livraison</h3>
                        </div>
                          <div className="card">
                              <div className={"tete"}>
                                <p>Date</p>
                              </div>
                              <div className="infos">
                                {ladate.getDate() +
                                  "/" +
                                  (ladate.getMonth() + 1) +
                                  "/" +
                                  ladate.getFullYear()}
                              </div>
                          </div>
                          <div className="card">
                              <div className="tete">
                                <p>Numero</p>
                              </div>
                              <div className="infos">
                                <p>{mounted && livraison?.numero}</p>
                              </div>
                          </div>
                          <div className="card">
                              <div className="tete">
                                <p>Adress E-mail</p>
                              </div>
                              <div className="infos">
                                <p>{user?.email}</p>
                              </div>
                          </div>
                          <div className="card">
                              <div className="tete">
                                <p>Payement</p>
                              </div>
                              <div className="infos">
                                <p>{mounted && livraison?.paye}</p>
                              </div>
                          </div>
                          <div className="card">
                              <div className="tete">
                                <p>Ville</p>
                              </div>
                              <div className="infos">
                                <p>{mounted && livraison?.ville}</p>
                              </div>
                          </div>
                          <div className="card">
                              <div className="tete">
                                <p>Adresse de livraison</p>
                              </div>
                              <div className="infos">
                                <p>{mounted && livraison?.adresse}</p>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div className="totaux_card">
                    <div className="titre">
                      <p>Resumé du Panier</p>
                    </div>
                    <div className="sous_total">
                      <div>
                        <p>Sous total</p>
                      </div>
                      <div>
                        <span>{mounted && cartTotal.toLocaleString("fr-FR")} FCFA</span>
                      </div>
                    </div>
                    <div className="sous_total">
                      <div>
                        <p>Livraison</p>
                      </div>
                      <div>
                        <span>Gratuite</span>
                      </div>
                    </div>
                    <div className="totaux">
                      <div>
                        <p>Prix total</p>
                      </div>
                      <div>
                        <span>{mounted && cartTotal.toLocaleString("fr-FR")} FCFA</span>
                      </div>
                    </div>
                    <div className="terminer_button" onClick={Finish}>
                      <button>Valider votre commande</button>
                    </div>
                  </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default facture;
