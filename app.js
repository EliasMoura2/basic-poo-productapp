class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.querySelector(".list");
    const element = document.createElement("div");
    element.innerHTML = `
        <div class="card text-center">
            <div class="card-body">
                <strong>Product name</strong>: ${product.name}
                <strong>Product price</strong>: ${product.price}
                <strong>Product year</strong>: ${product.year}
                <button id="delete" name="delete" class="btn btn-dark" href="#">DELETE</button>
            </div>
        </div>
      `;
    productList.appendChild(element);
    this.showMessage('Product added Successfuly', 'success')
    // this.resetForm();
  }

  deleteProduct(element) {

    /*
        console.log(element);
        console.log(element.parentElement);
        console.log(element.parentElement.parentElement);
        console.log(element.parentElement.parentElement.parentElement);
        console.log(element.parentElement.parentElement.parentElement.parentElement);  
    */

    if(element.name === 'delete'){
        element.parentElement.parentElement.parentElement.remove();
        this.showMessage('Product deleted Successfuly', 'success')
      }
}

  resetForm() {
    document.querySelector("#product-form").reset();
  }

  showMessage(message, type) {
    const div = document.createElement('div');
    div.className = `alert alert-${type} mt-2`;
    div.appendChild(document.createTextNode(message));
    // Showing in DOM
    const container = document.querySelector('.container');
    const app = document.querySelector('#App')
    container.insertBefore(div, app);
    setTimeout(function(){
      document.querySelector('.alert').remove()
    },2000)
  }
}

document.querySelector("#product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log("Enviando form");
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const year = document.querySelector("#year").value;
  //   console.log(name, price, year);
  //   console.log(new Product(name, price, year));
  const product = new Product(name, price, year);
  const ui = new UI();
  if(name === '' || price === '' || year === ''){
    ui.showMessage('Complete fields please', 'warning')
  }else{
    ui.addProduct(product);
    ui.resetForm();
  }
});

document.querySelector("#product-list").addEventListener("click", (event) => {
  event.preventDefault();

  // console.log("Eliminado"); verificamos que se imprima al ahcer click
  // console.log(event.target); verificamos a que hacemos click

  // console.log(event.target.parentElement);
  const ui = new UI();
  ui.deleteProduct(event.target);
});
