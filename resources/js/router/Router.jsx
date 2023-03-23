import React from "react";
import { Route, Routes } from "react-router-dom";

import IndexProduct from '../components/products/Index';
import NewProduct from '../components/products/New';
import EditProduct from '../components/products/Edit';
import ShowProduct from '../components/products/Show';
import NotFound from '../components/NotFound';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<IndexProduct />} />
                <Route path="/products/new" element={<NewProduct />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
                <Route path="/products/show/:id" element={<ShowProduct />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Router;
