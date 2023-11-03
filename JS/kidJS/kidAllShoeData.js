// This is the JS code for the Kid's Shoes card data

// Data
let itemKidsAllShoe = [
  {
    itemName: "Dunk Low",
    itemCatagory: "Younger Kids' Shoes",
    itemPrice: "6495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e454c0c-857e-45ce-9e47-cd5811f3251b/dunk-low-younger-shoes-bk3xlz.png",
  },
  {
    itemName: "Dunk Low SE",
    itemCatagory: "Older Kids' Shoes",
    itemPrice: "7995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f9abc0e-1d7a-409a-a8e0-f4116069f472/dunk-low-se-older-shoes-F14kT7.png",
  },
  {
    itemName: "Omni Multi-Court",
    itemCatagory: "Older Kids' Shoes",
    itemPrice: "7995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13a3d9ba-6e82-44cc-82b4-58bbbf3fecaa/omni-multi-court-older-indoor-court-shoes-pK2fcM.png",
  },
  {
    itemName: "Air Max 90 LTR",
    itemCatagory: "Older Kids' Shoes",
    itemPrice: "7995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85ad8502-ea67-4b82-afa2-c3c4f070d66f/air-max-90-ltr-older-shoes-9xnt2B.png",
  },
  {
    itemName: "Nike Kawa",
    itemCatagory: "Baby & Toddler Slides",
    itemPrice: "1395",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2432279-f957-4401-abab-715714e9bb9a/kawa-slides-tCXlrc.png",
  },
  {
    itemName: "Force 1 LE",
    itemCatagory: "Baby & Toddler Slides",
    itemPrice: "2995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc46d17e-21f6-4645-b19d-bdee428d23f5/force-1-le-and-shoe-hZ24qR.png",
  },
  {
    itemName: "Nike Run Flow",
    itemCatagory: "Older Kids' Running Shoes",
    itemPrice: "6995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3fd7d301-6e10-4b9d-96d1-761f1cfc0fbe/run-flow-older-running-shoes-GVsqHT.png",
  },
  {
    itemName: "Air Zoom Arcadia",
    itemCatagory: "Younger Kids' Running Shoes",
    itemPrice: "5495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e93912e-079f-4edc-bcb4-1f3d35d7c2e3/air-zoom-arcadia-2-younger-shoes-z8v8X7.png",
  },
  {
    itemName: "Flex Plus 2 SE",
    itemCatagory: "Younger Kids' Shoes",
    itemPrice: "4795",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef74743a-9fa4-4c38-92d3-e6b37d19b633/flex-plus-2-se-younger-shoes-pBSmSl.png",
  },
  {
    itemName: "Sunray Protect",
    itemCatagory: "Younger Kids' Sandals",
    itemPrice: "2995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/gednrh35fe0wdpdkqgys/sunray-protect-2-younger-sandals-kxrqx3.png",
  },
  {
    itemName: "Sunray Adjust",
    itemCatagory: "Older Kids' Slides",
    itemPrice: "2995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b42fa93-219b-4e48-acc0-d288e8ea5f0a/sunray-adjust-6-older-slides-Sp3ff8.png",
  },
  {
    itemName: "Kawa SE JDI",
    itemCatagory: "Kids' Slides",
    itemPrice: "2195",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23689ae9-dc08-4b7f-9a50-a7bc5d6e484a/kawa-se-jdi-younger-and-older-slide-Wz0hB8.png",
  },
  {
    itemName: "Air Force LV8",
    itemCatagory: "Older Kids' Shoes",
    itemPrice: "7895",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed98edee-f8d8-49b9-993f-39f8f2dcb893/air-force-1-lv8-older-shoes-QLfpL6.png",
  },
  {
    itemName: "Air Max SYSTM",
    itemCatagory: "Older Kids' Shoes",
    itemPrice: "2195",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/525afe17-94a4-4f58-b9d4-27b08e1ce68f/air-max-systm-older-shoes-S175cF.png",
  },
  {
    itemName: "Blazer Low '77",
    itemCatagory: "Older Kids' Shoes",
    itemPrice: "4995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f791a84a-9e64-4ff0-8138-addc8d5f5eb2/blazer-low-77-older-shoes-J24TzH.png",
  },
  {
    itemName: "Air Max 270 GO",
    itemCatagory: "Younger Kids' Shoes",
    itemPrice: "7995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7d25adc3-8cc3-45f9-a520-0ab3fdc075ec/air-max-270-go-younger-easy-on-off-shoes-p5f5v1.png",
  },
];

// code to load the data into the html
for (const x of itemKidsAllShoe) {
  document.querySelector(".kid-all-shoe").innerHTML += `
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
                        <i class="ri-shopping-cart-line"></i>
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
