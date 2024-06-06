// import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import useAxios from '../Hook/useAxios'
// import LambForm from '../components/LambForm'
import LambForm from "../components/LambForm";
import {Loader} from '../components/Loader';


const TestUpload = () => {

    const url = import.meta.env.VITE_API_URL+'/register';

    const { responseAxios, error, loading, fetchData } = useAxios({
        url: url,
        headers : {
            'Content-Type': 'multipart/form-data',
        },
        // body : null,
        method: 'post',
    });

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log(data)
        return;
        const formData = new FormData();
        const image = data.image[0];
        console.log(image);
        formData.append('image', image);
        // formData.append('image', image);
        fetchData(formData);
        // console.log(formData);
    }

    useEffect(() => {
        if(!responseAxios) return;

        console.log("retour");

    }, [responseAxios]);



    const fields = [
        {
          type: "Select",
          name: "categorie",
          label : 'Type de produit',
          options: [
            { label: "Selectionner une catégorie", value: null },
            { label: "Fruits et Légumes", value: "fl" },
            { label: "Produits laitiers", value: "pl" },
            { label: "Viande ou Poisson", value: "vp" },
            { label: "Céréales et légumineuses", value: "cl" },
            { label: "Produits pour nourrissons", value: "pn" },
            { label: "Autres", value: "o" },
          ],
          required: true,
        },
        {
          type: "Select",
          name: "Types de produits",
          label : 'Type de produit',
          options: [
            { label: "Selectionner une catégorie", value: null },
            { label: "Fruits et Légumes", value: "fl" },
            { label: "Produits laitiers", value: "pl" },
            { label: "Viande ou Poisson", value: "vp" },
            { label: "Céréales et légumineuses", value: "cl" },
            { label: "Produits pour nourrissons", value: "pn" },
            { label: "Autres", value: "o" },
          ],
          required: true,
        },
        {
          type: "Input",
          name: "nom",
          label : 'Nom du produit',
          defaultValue: "",
          placeholder: "Pot de tomate Podor ",
          required: true,
        },
        
        {
          type: "Date",
          name: "date_peremption",
          label : 'Date de péremption',
          defaultValue: "",
          placeholder: "27/12/27 ",
          required: true,
        },
        {
          type: "Number",
          name: "quantite",
            label : 'Quantité disponible',
          defaultValue: "",
          placeholder: "",
          required: true,
        },
        {
          type: "Number",
          name : 'prixBase',
          label : 'Prix de base (en FCFA)',
          defaultValue: "",
          placeholder: "5000 ",
          required: true,
        },
        {
          type: "Number",
          name : 'prixVente',
          label : 'Prix de vente (en FCFA)',
          defaultValue: "",
          placeholder: "5000 ",
          required: true,
        },
      
        

        {
            type: "Checkbox",
            name : 'conditions',
            label : 'Conditions d\'utilisation',
            options : [
                {
                    id : 1,
                    label : 'Je suis d\'accord avec les conditions d\'utilisation',
                    value : 'agree'
                }, {
                    id : 2,
                    label : 'boulma fontoo waay',
                    value : 'disagree'
                }
            ],
          defaultValue: "",
        //   required: true,
        },
        {
            type: "Radio",
            name : 'sexe',
            label : 'Sexe',
            options : [
                {
                    id : 1,
                    label : 'Masculin',
                    value : 'm'
                }, {
                    id : 2,
                    label : 'Féminin',
                    value : 'F'
                }
            ],
          defaultValue: "",
        //   required: true,
        },
        {
            type: "File",
            name : 'image',
            label : 'Ajouter une image du produit',
          defaultValue: "",
          required: true,
        },
        {
            type: "TextArea",
            name: "description",
            label : 'Description du produit',
            defaultValue: "",
            required: false,
            placeholder:
              "Pot de tomate Podor, onctueuse et délicieuse, 100% naturelle, sans conservateur ni colorant.",
          },
      ];

  return (
    <>
      <div className=''>
        {loading && <Loader />}
        <div className="my-4 px-4 border border-2 border-gray-3O0 shadow-xl py-4 ">
          <LambForm
            fields={fields}
            onSubmit={(data) => {
              onSubmit(data);
            }}
            submitText={"Enregistrer"}
            formTitle={"Vendre un produit"}
          />
        </div>
      </div>
    </>
  )
}

export default TestUpload
