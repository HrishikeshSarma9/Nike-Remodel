// This is the JS code for the Men's Gym and Training Shoe card data

// Data
let itemMenTraining = [
  {
    itemName: "Air Max Alpha",
    itemCatagory: "Men's Workout Shoes",
    itemPrice: "7495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b4ccaf77-e1c7-4543-a20e-ac4abf0a25d8/air-max-alpha-trainer-5-workout-shoes-x8Jzj6.png",
  },
  {
    itemName: "MC Trainer 2",
    itemCatagory: "Men's Workout Shoes",
    itemPrice: "5695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e5badccf-e9be-4ac4-81fc-83727e9f5b46/air-max-alpha-trainer-4-workout-shoes-phsD5s.png",
  },
  {
    itemName: "Zoom Metcon Turbo",
    itemCatagory: "Men's Workout Shoes",
    itemPrice: "13995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53a03537-56e4-49f7-b0b7-26650cd4fb43/zoom-metcon-turbo-2-workout-shoes-jPvmwl.png",
  },
  {
    itemName: "Air Zoom TR 1",
    itemCatagory: "Men's Workout Shoes",
    itemPrice: "10795",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e74dd41-e7ba-4721-8ecb-0e88f26c3509/air-zoom-tr-1-workout-shoes-Zq4r1h.png",
  },
  {
    itemName: "Nike Metcon 8",
    itemCatagory: "Men's Workout Shoes",
    itemPrice: "11297",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d0a9ba1-0ba6-4b6f-bf60-36274427cbe6/metcon-8-workout-shoes-p9rQzn.png",
  },
  {
    itemName: "Nike Metcon SE",
    itemCatagory: "Men's Premium Workout Shoes",
    itemPrice: "9207",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f019d89-a17e-4598-a92f-7d9a4e0f4a2e/motiva-se-walking-shoes-604gSr.png",
  },
  {
    itemName: "Nike Motiva",
    itemCatagory: "Men's Walking Shoes",
    itemPrice: "9695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ea08d51f-4841-403c-bbc3-fc256164d05b/motiva-walking-shoes-Fjzkq7.png",
  },
  {
    itemName: "SuperRep GO 3",
    itemCatagory: "Men's Workout Shoes",
    itemPrice: "8895",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91688d0a-77af-4fef-8e18-52932ada8e0b/superrep-go-3-next-nature-flyknit-workout-shoes-mxKptW.png",
  },
];

// code to load the data into the html
for (const x of itemMenTraining) {
  document.querySelector(".men-training").innerHTML += `
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
