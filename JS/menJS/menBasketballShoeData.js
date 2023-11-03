// This is the JS code for the Basketball Shoes card data

// Data
let itemMenBasketball = [
    {
      itemName: "LeBron XX EP",
      itemCatagory: "Basketball Shoes",
      itemPrice: "19295",
      itemImage:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bf461a6e-17f0-468a-a61a-2a74cafdb0d9/lebron-xx-ep-basketball-shoes-nPKcbs.png",
    },
    {
        itemName: "Nike GT Jump",
        itemCatagory: "Basketball Shoes",
        itemPrice: "16995",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b0fb4bd0-1c50-4dde-b791-ac5942cabcd2/gt-jump-2-ep-basketball-shoes-1F15Gp.png",
    },
    {
        itemName: "KD16",
        itemCatagory: "Basketball Shoes",
        itemPrice: "17495",
        itemImage:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3534a79b-89a2-4eb1-986e-0f7af1f535c0/custom-nike-kd-16-by-you.png",
    },
    {
        itemName: "LeBron Witness",
        itemCatagory: "Basketball Shoes",
        itemPrice: "9495",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99fd2c26-0220-478a-890d-d3f4c9947a44/lebron-witness-7-ep-basketball-shoes-FKPXCg.png",
    },
    {
        itemName: "Nike Impact 4",
        itemCatagory: "Basketball Shoes",
        itemPrice: "8695",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d2062734-dc26-45c1-aae3-b5eafa3f3ce1/impact-4-basketball-shoes-CcJxBx.png",
    },
    {
        itemName: "KD16 NRG",
        itemCatagory: "Basketball Shoes",
        itemPrice: "14995",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44cafef0-7faf-4178-a6fd-be84bb0b2da4/kd16-nrg-ep-basketball-shoes-79MMfh.png",
    },
    {
        itemName: "KD Trey 5 X EP",
        itemCatagory: "Basketball Shoes",
        itemPrice: "8495",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bb2f9ebd-6e14-4d6e-8930-1ef61413771a/kd-trey-5-ep-basketball-shoes-mkllTG.png",
    },
    {
        itemName: "LeBron NXXT Gen",
        itemCatagory: "Basketball Shoes",
        itemPrice: "14995",
        itemImage:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e195279-5ee0-4e68-b329-ee1e9eb33a2d/lebron-nxxt-gen-ep-basketball-shoes-bkxBVS.png",
    },
  ];
  
  // code to load the data into the html
  for (const x of itemMenBasketball) {
    document.querySelector(".men-basketball").innerHTML += `
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
  