// This is the JS code for the Men's Running Shoe card data

// Data
let itemMenRunning = [
  {
    itemName: "Nike Invincible 3",
    itemCatagory: "Men's Road Running Shoes",
    itemPrice: "16995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b03907b4-a52f-46a8-b195-2e79ded93212/invincible-3-road-running-shoes-Wwmmlp.png",
  },
  {
    itemName: "Nike Vomero 17",
    itemCatagory: "Men's Road Running Shoes",
    itemPrice: "14995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/65e274d7-1355-41f6-b54c-f4f4a53bca17/vomero-17-road-running-shoes-qXFWTq.png",
  },
  {
    itemName: "Nike Vaporfly 3",
    itemCatagory: "Men's Road Running Shoes",
    itemPrice: "20695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a06b209f-8a78-467a-b03e-6d782a26b1cd/vaporfly-3-road-racing-shoes-xsDgvM.png",
  },
  {
    itemName: "Zoom Superfly Elite",
    itemCatagory: "Men's Sprinting Spikes",
    itemPrice: "13995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ab537277-cbf7-4ce0-98cf-f104427dd2c5/zoom-superfly-elite-2-athletics-sprinting-spikes-bDFmq0.png",
  },
  {
    itemName: "Nike Ultrafly",
    itemCatagory: "Men's Trail-Running Shoes",
    itemPrice: "21695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38e83c9a-578b-473d-bb4a-65d28d6f22a7/ultrafly-trail-running-shoes-4DRfrN.png",
  },
  {
    itemName: "Air Zoom VIctory",
    itemCatagory: "Men's Distance Spikes",
    itemPrice: "16995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37916237-326f-4a04-9e6a-b92b317a2909/air-zoom-victory-eliud-kipchoge-athletics-distance-spikes-567Fj1.png",
  },
  {
    itemName: "Nike Zoom Fly 5",
    itemCatagory: "Men's Road Running Shoes",
    itemPrice: "14247",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04c3a599-cfc7-40de-9ad2-b5a9242d2ddd/zoom-fly-5-road-running-shoes-lkx7Zp.png",
  },
  {
    itemName: "Nike Pegasus",
    itemCatagory: "Men's Road Running Shoes",
    itemPrice: "14995",
    itemImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4a0af7eb-79ab-48a6-904b-baaccff9d5ee/custom-pegasus-40-by-you.png",
  },
];

// code to load the data into the html
for (const x of itemMenRunning) {
  document.querySelector(".men-running").innerHTML += `
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
