// This is the JS code for the Men's Sandal and Slides Shoe card data

// Data
let itemMenSandal = [
    {
      itemName: "Victoria One",
      itemCatagory: "Men's Printed Slides",
      itemPrice: "2595",
      itemImage:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93eb5c15-7378-439a-a234-3bf3fe542f6d/victori-one-printed-slides-2ZsMWk.png",
    },
    {
        itemName: "Air Max Cirro",
        itemCatagory: "Men's Slides",
        itemPrice: "3695",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30ba2726-7e1f-4a84-a3ef-1d6f5df9886a/air-max-cirro-slides-96vclH.png",
      },
      {
        itemName: "Nike Asuna 2",
        itemCatagory: "Men's Slides",
        itemPrice: "3195",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e345159-74fb-45ff-9826-52754b1255f8/asuna-2-slides-LMfcKG.png",
      },
      {
        itemName: "Oneonta Next",
        itemCatagory: "Men's Sandals",
        itemPrice: "5695",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92c72bce-b6e8-4ad7-b91b-126da54a5973/oneonta-next-nature-sandals-KwxRDD.png",
      },
      {
        itemName: "Nike Calm",
        itemCatagory: "Men's Mules",
        itemPrice: "5695",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/01811ee2-9c9b-4818-aa1b-4bc963743359/calm-mules-KJZKd1.png",
      },
      {
        itemName: "Nike Vista",
        itemCatagory: "Men's Sandals",
        itemPrice: "4195",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32d11f3c-4c29-458e-8e7d-bac4abfd109b/vista-sandals-1rGmxQ.png",
      },
      {
        itemName: "Air Max 1",
        itemCatagory: "Men's Slides",
        itemPrice: "6295",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc490213-e462-4597-adea-510d924f5d95/air-max-1-slides-TSMTS4.png",
      },
      {
        itemName: "Air More Uptempo",
        itemCatagory: "Men's Slides",
        itemPrice: "8095",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/609ea29e-d997-4577-a12f-5648a07dfe63/air-more-uptempo-slides-CFjNnm.png",
      },
    
  ];
  
  // code to load the data into the html
  for (const x of itemMenSandal) {
    document.querySelector(".men-sandal").innerHTML += `
              <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                  <div class="card m-3" style="width: 16rem">
                      <div class="img-container">
                          <img
                              src="${x.itemImage}"
                              class="card-img-top"
                              alt="${x.itemName}"
                          />
                          <div class="img-background"></div>
                      </div>
                      <div class="item-detail text-start">
                          <h3 class="shoe-name">${x.itemName}</h3>
                          <p class="shoe-catagory">${x.itemCatagory}</p>
                      </div>
                      <div class="item-price">
                        <i class="ri-shopping-cart-line cart-icon"></i>
                        <p class="item-desciption">
                            
                          With elevated materials and bold stitching, these <b>${x.itemName}</b> let everyone know who you're about.
                        </p>
                        <h3 class="shoe-price">
                            ${x.itemPrice}
                        </h3>
                      </div>
                  </div>
              </div>
          `;
  }
  