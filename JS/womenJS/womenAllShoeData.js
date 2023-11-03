// JS code for the Women's All Shoes page

// Women's running shoe data
let itemWomenRunning = [
  {
    itemName: "Air Force 1",
    itemCatagory: "Women's Shoes",
    itemPrice: "9695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f153b4e4-9069-44ae-bf86-f70ae8ecbaa1/air-force-1-07-easyon-shoes-lpjTWM.png",
  },
  {
    itemName: "Gamma Force",
    itemCatagory: "Women's Shoes",
    itemPrice: "8495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6d64180-d22a-4590-99d2-f25b9e6b1ce6/gamma-force-shoes-CbTnH1.png",
  },
  {
    itemName: "Blazer Low '77",
    itemCatagory: "Women's Shoes",
    itemPrice: "8595",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2bde2591-990e-45ef-8853-6be6ce205a4a/blazer-low-77-jumbo-shoes-cdj0gL.png",
  },
  {
    itemName: "Air Max Futura",
    itemCatagory: "Women's Shoes",
    itemPrice: "17495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d780f51-6061-4096-81fc-a8272635ef4f/air-max-97-futura-shoes-r0gfkM.png",
  },
  {
    itemName: "Air Max 95",
    itemCatagory: "Casual Women's Shoes",
    itemPrice: "18195",
    itemImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2b18f08-02ba-45c3-9c64-4b0655926024/custom-nike-air-max-95-by-you.png",
  },
  {
    itemName: "Nike Shox TL ",
    itemCatagory: "Women's Shoes",
    itemPrice: "16595",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9j2xztqk9bn0ixns8ne/shox-tl-shoes.png",
  },
  {
    itemName: "Air Max 97 ",
    itemCatagory: "Women's Shoes",
    itemPrice: "17495",
    itemImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6da19fcf-ef7c-47e6-9e06-3d6a544eb80e/custom-nike-air-max-97-shoes-by-you.png",
  },
  {
    itemName: "Dunk Low Unlocked ",
    itemCatagory: "Women's Shoes",
    itemPrice: "13995",
    itemImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/63962c1c-6a9f-4cd5-9c52-ced6a18e45a0/custom-dunk-low-unlocked-by-you.png",
  },
];
//end of Women's running shoe data

// Women's Training shoe data
let itemWomenTraining = [
  {
    itemName: "Nike Metcon 8",
    itemCatagory: "Women's Workout Shoes",
    itemPrice: "11895",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/481ba66d-52f1-4d44-aa97-b2058f11a65f/metcon-8-workout-shoes-vkQ0TS.png",
  },
  {
    itemName: "Nike Metcon 9",
    itemCatagory: "Women's Workout Shoes",
    itemPrice: "13995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f586a956-5cd6-40b5-8df6-84d192b5f3ab/metcon-9-workout-shoes-hVBpSC.png",
  },
  {
    itemName: "Nike Metcon 5",
    itemCatagory: "Women's Workout Shoes",
    itemPrice: "10795",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/62c77845-5e6a-4146-ac99-6dd556ffa2d6/free-metcon-5-workout-shoes-HfHgmZ.png",
  },
  {
    itemName: "SuperRep GO 2",
    itemCatagory: "Women's Workout Shoes",
    itemPrice: "9777",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a554fd9-4df1-453c-8027-852f50683c4c/superrep-cycle-2-next-nature-cycling-shoes-ttNK0V.png",
  },
  {
    itemName: "Nike Motiva",
    itemCatagory: "Women's Walking Shoes",
    itemPrice: "9695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/898e324d-6fad-4348-a929-67a3c75f6010/motiva-walking-shoes-dCcsVX.png",
  },
  {
    itemName: "SuperRep GO 3",
    itemCatagory: "Women's HIIT Class Shoes",
    itemPrice: "9695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/843b5b00-8378-49c7-adcf-6ea54d4f822b/superrep-go-3-nn-prm-hiit-class-shoes-6TP106.png",
  },
  {
    itemName: "Zoom Bella 6",
    itemCatagory: "Women's Training Shoes",
    itemPrice: "8495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e78d753-4c54-49b1-8ea8-97157b538f5e/zoom-bella-6-training-shoes-xH8XvK.png",
  },
  {
    itemName: "Zoom Bella 5",
    itemCatagory: "Women's Training Shoes",
    itemPrice: "8495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/798a9d5c-f05a-465f-ac51-36521921b896/in-season-tr-13-workout-shoes-Z3Khdg.png",
  },
];
// end of Women's Training shoe data

// Women's Sandal and slides shoe data
let itemWomenSandal = [
  {
    itemName: "Nike x MMW",
    itemCatagory: "Women's Slides",
    itemPrice: "16995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e9e0c73-68d0-4215-9b9c-129475422ea3/mmw-005-slides-hMZSnV.png",
  },
  {
    itemName: "Nike Calm",
    itemCatagory: "Women's Mules",
    itemPrice: "5695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b551d8f5-c380-4e1d-81f0-b557879b0304/calm-mules-Pg5G3Z.png",
  },
  {
    itemName: "Victori One",
    itemCatagory: "Women's Slides",
    itemPrice: "2095",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/abca8659-8a71-4840-9c96-91098bbd30df/victori-one-slides-sRBzK2.png",
  },
  {
    itemName: "Icon Classic",
    itemCatagory: "Women's Slides",
    itemPrice: "4695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a56cb23-91d7-436c-82f5-83a73c876df9/icon-classic-sandals-Jrc3kN.png",
  },
  {
    itemName: "Air Max Koko",
    itemCatagory: "Women's Sandals",
    itemPrice: "7995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6760d20e-f7a4-4e08-acae-0ec877ed54f0/air-max-koko-sandal-ktWc9N.png",
  },
  {
    itemName: "Nike Burrow",
    itemCatagory: "Women's Slipper",
    itemPrice: "3995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/097a7363-e60a-44a0-a82f-0955773489a7/burrow-slipper-BrXPT1.png",
  },
  {
    itemName: "Court Legacy",
    itemCatagory: "Women's Mules",
    itemPrice: "3995",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e9ab9f2-3e3a-4dc4-b06a-49dca8450453/nikecourt-legacy-mules-KL9hwr.png",
  },
  {
    itemName: "Nike Offcourt",
    itemCatagory: "Women's Slides",
    itemPrice: "2495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22eee347-2ccf-402e-9e5e-8577b81cc9d3/offcourt-slides-kJDhS7.png",
  },
];
// end of Women's Sandal and slides shoe data

// Women's Lifestyle shoe data
let itemWomenLifestyle = [
  {
    itemName: "Air Force 1",
    itemCatagory: "Women's Shoes",
    itemPrice: "9695",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f153b4e4-9069-44ae-bf86-f70ae8ecbaa1/air-force-1-07-easyon-shoes-lpjTWM.png",
  },
  {
    itemName: "Gamma Force",
    itemCatagory: "Women's Shoes",
    itemPrice: "8495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6d64180-d22a-4590-99d2-f25b9e6b1ce6/gamma-force-shoes-CbTnH1.png",
  },
  {
    itemName: "Blazer Low '77",
    itemCatagory: "Women's Shoes",
    itemPrice: "8595",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2bde2591-990e-45ef-8853-6be6ce205a4a/blazer-low-77-jumbo-shoes-cdj0gL.png",
  },
  {
    itemName: "Air Max Futura",
    itemCatagory: "Women's Shoes",
    itemPrice: "17495",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d780f51-6061-4096-81fc-a8272635ef4f/air-max-97-futura-shoes-r0gfkM.png",
  },
  {
    itemName: "Air Max 95",
    itemCatagory: "Casual Women's Shoes",
    itemPrice: "18195",
    itemImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2b18f08-02ba-45c3-9c64-4b0655926024/custom-nike-air-max-95-by-you.png",
  },
  {
    itemName: "Nike Shox TL ",
    itemCatagory: "Women's Shoes",
    itemPrice: "16595",
    itemImage:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9j2xztqk9bn0ixns8ne/shox-tl-shoes.png",
  },
  {
    itemName: "Air Max 97 ",
    itemCatagory: "Women's Shoes",
    itemPrice: "17495",
    itemImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6da19fcf-ef7c-47e6-9e06-3d6a544eb80e/custom-nike-air-max-97-shoes-by-you.png",
  },
  {
    itemName: "Dunk Low Unlocked ",
    itemCatagory: "Women's Shoes",
    itemPrice: "13995",
    itemImage:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/63962c1c-6a9f-4cd5-9c52-ced6a18e45a0/custom-dunk-low-unlocked-by-you.png",
  },
];
// end of Women's Lifestyle shoe data

let itemWomenAllShoe = itemWomenRunning.concat(itemWomenTraining, itemWomenSandal, itemWomenLifestyle);

for (const x of itemWomenAllShoe) {
  document.querySelector(".women-all-shoe").innerHTML += `
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
