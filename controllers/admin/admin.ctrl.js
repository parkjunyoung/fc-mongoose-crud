exports.get_products =  ( _ , res) => {
    
    res.render( 'admin/products.html');

}

exports.get_products_write = ( _ , res) => {

    res.render( 'admin/write.html');

}

exports.post_products_write =  ( req , res ) => {

    res.redirect('/admin/products');

}

exports.get_products_detail =  ( req , res ) => {

    res.render('admin/detail.html');  

};

exports.get_products_edit =  ( req , res ) => {

    res.render('admin/write.html');  

};

exports.post_products_edit =  ( req , res ) => {

    

}

exports.get_products_delete =  ( req , res ) => {

    res.redirect('/admin/products');
    
};