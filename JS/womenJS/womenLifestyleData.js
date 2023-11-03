// This is the JS code for the Women's Lifestyle Shoes card's data

let itemWomenLifestyle = 
            [
                {
                    itemName: "Air Force 1",
                    itemCatagory: "Women's Shoes",
                    itemPrice: "9695",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f153b4e4-9069-44ae-bf86-f70ae8ecbaa1/air-force-1-07-easyon-shoes-lpjTWM.png"
                },
                {
                    itemName: "Gamma Force",
                    itemCatagory: "Women's Shoes",
                    itemPrice: "8495",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6d64180-d22a-4590-99d2-f25b9e6b1ce6/gamma-force-shoes-CbTnH1.png"
                },
                {
                    itemName: "Blazer Low '77",
                    itemCatagory: "Women's Shoes",
                    itemPrice: "8595",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2bde2591-990e-45ef-8853-6be6ce205a4a/blazer-low-77-jumbo-shoes-cdj0gL.png"
                },
                {
                    itemName: "Air Max Futura",
                    itemCatagory: "Women's Shoes",
                    itemPrice: "17495",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d780f51-6061-4096-81fc-a8272635ef4f/air-max-97-futura-shoes-r0gfkM.png"
                },
                {
                    itemName: "Air Max 95",
                    itemCatagory: "Casual Women's Shoes",
                    itemPrice: "18195",
                    itemImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2b18f08-02ba-45c3-9c64-4b0655926024/custom-nike-air-max-95-by-you.png"
                },
                {
                    itemName: "Nike Shox TL ",
                    itemCatagory: "Women's Shoes",
                    itemPrice: "16595",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9j2xztqk9bn0ixns8ne/shox-tl-shoes.png"
                },
                {
                    itemName: "Air Max 97 ",
                    itemCatagory: "Women's Shoes",
                    itemPrice: "17495",
                    itemImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6da19fcf-ef7c-47e6-9e06-3d6a544eb80e/custom-nike-air-max-97-shoes-by-you.png"
                },
                {
                    itemName: "Dunk Low Unlocked ",
                    itemCatagory: "Women's Shoes",
                    itemPrice: "13995",
                    itemImage: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/63962c1c-6a9f-4cd5-9c52-ced6a18e45a0/custom-dunk-low-unlocked-by-you.png"
                },
            ]

// code to load the data into the html
for(const x of itemWomenLifestyle){
    document.querySelector(".women-lifestyle").innerHTML += `
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