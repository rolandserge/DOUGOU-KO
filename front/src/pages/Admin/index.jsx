import React from 'react';
import Header from '../../../Component/Admin/Header';
import AdminLayout from '../../../Layouts/AdminLayout';
import Produit from './Produit';

const Page = () => {
     return (
          <div>
               {/* <Header /> */}
               {/* <p>Salut a tous</p> */}
               <Produit />
          </div>
     );
};

export default Page;

// Page.getLayout = function getLayout(page) {
//      return (
//           <AdminLayout>{page}</AdminLayout>
//      )
//    }
Page.PageLayout = AdminLayout