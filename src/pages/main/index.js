import React,{Component} from 'react';
import api from '../../services/api';
import './styles.css';
export default class Main extends Component{
        state = {
            products:[],
            productInfo: {},
            page:1,
        }


   componentDidMount(){
       this.loadProducts();
   }
   loadProducts  = async (page = 1) =>{
     const response = await api.get(`products?page=${page}`);
     
     const {docs,...productInfo} = response.data;

     this.setState({products:docs,productInfo,page});
     
   };
  
//    prevPage = () =>{
//     const {page} = this.state;
//     if(page ===1) return;
//     const  PageNumber = page -1;
//     this.loadProducts(PageNumber);
//    }
//    nextPage = () =>{
//     const {page,productInfo} = this.state;
//     if(page===productInfo.pages) return;
//     const pageNumber = page +1;
//     this.loadProducts(pageNumber);
//    }
    render(){
        const {products} = this.state;
      return  (
        <div className="card">
       {products.map(product =>(

           
            <div className="cards" key={product._id}>
               <a href={product.url} rel="noopener noreferrer" target="_blank">
            <div className="card-image">
              <img  src={product.img} alt={product.title}></img>
            </div>
            <div className="title">
       <h1>{product.title}</h1>
            </div>
            <div className="price">
             <h1>R${product.price}</h1>
            </div>
            <div className="store">
            <p>{product.store}</p>
              </div>
              </a>
          </div>
          
        
            ))}
            </div>
     
      );
    }
}