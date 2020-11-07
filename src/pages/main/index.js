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
  
   prevPage = () =>{
    const {page} = this.state;
    if(page ===1) return;
    const  PageNumber = page -1;
    this.loadProducts(PageNumber);
   }
   nextPage = () =>{
    const {page,productInfo} = this.state;
    if(page===productInfo.pages) return;
    const pageNumber = page +1;
    this.loadProducts(pageNumber);
   }
    render(){
        const {products,page,productInfo} = this.state;
      return  (
          <div className="main">
          <section className="products">
         
                {products.map(product => (
                     <div className="product-card" key={product._id}>
                    <article>
                        <div className="product-image">
                        <img width="100%" height="100%" src={product.img} ></img>
                 </div>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                </article>
                </div>

                ))}
                
            </section>
            <div className="actions">
            <button disabled={page===1} onClick={this.prevPage}>Anterior</button>

            <button disabled={page===productInfo.pages} onClick={this.nextPage}>Proxima</button>
        </div>
                   </div>     
      );
    }
}