const express = require('express')
const Router = express.Router()

// Import All Controller
const {productController} = require('../controllers') // Akan otomatis mengambil file index.js nya
const upload = require('../middleware/upload')

Router.get('/', productController.getAllProducts)
Router.get('/productdetail/:id', productController.getProductDetails)
Router.get('/detailqty/:id', productController.getDetailQty)
Router.get('/category', productController.getCategory)
Router.get('/products/all', productController.getProducts)
Router.get('/products/:category_id', productController.getProductsAdmin)
Router.get('/:category_id', productController.getProduct)
Router.get('/:product_id/:color/:memory_storage', productController.getSelected)
Router.post('/post-category', productController.postCategory)
Router.patch('/edit-category', productController.editCategory)
Router.post('/delete-category', productController.deleteCategory)
Router.post('/add-product',upload, productController.addProduct)
Router.post('/edit-product/detail', productController.getCategoryDetail)
Router.patch('/update-product/detail/a/a', productController.updateProduct)
Router.patch('/update-product/detail/a/a/a/a', productController.updateProductDetail)
Router.patch('/update-product/detail/a/a/a',upload, productController.updateProductDetailImage)
Router.post('/delete-product/detail/a/a', productController.deleteProduct)
Router.post('/delete-product/detail/a/a/a', productController.deleteProductDetail)
Router.get('/sort-name/:category_id', productController.getSortName)
Router.post('/sort-product/:category_id', productController.postSortColor)
Router.get('/color/:category_id', productController.getColor)
Router.get('/name-product/a', productController.getName)
Router.post('/create-productdetail', productController.addProductDetail)
Router.get('/get-count/a', productController.updateQtyPro)

module.exports = Router