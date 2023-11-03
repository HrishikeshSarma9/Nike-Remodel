// This is the JS code for the Women's Sandals, Slides & Flip Flops card's data

let itemWomenSandal = 
            [
                {
                    itemName: "Nike x MMW",
                    itemCatagory: "Women's Slides",
                    itemPrice: "16995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e9e0c73-68d0-4215-9b9c-129475422ea3/mmw-005-slides-hMZSnV.png"
                },
                {
                    itemName: "Nike Calm",
                    itemCatagory: "Women's Mules",
                    itemPrice: "5695",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b551d8f5-c380-4e1d-81f0-b557879b0304/calm-mules-Pg5G3Z.png"
                },
                {
                    itemName: "Victori One",
                    itemCatagory: "Women's Slides",
                    itemPrice: "2095",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/abca8659-8a71-4840-9c96-91098bbd30df/victori-one-slides-sRBzK2.png"
                },
                {
                    itemName: "Icon Classic",
                    itemCatagory: "Women's Slides",
                    itemPrice: "4695",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a56cb23-91d7-436c-82f5-83a73c876df9/icon-classic-sandals-Jrc3kN.png"
                },
                {
                    itemName: "Air Max Koko",
                    itemCatagory: "Women's Sandals",
                    itemPrice: "7995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6760d20e-f7a4-4e08-acae-0ec877ed54f0/air-max-koko-sandal-ktWc9N.png"
                },
                {
                    itemName: "Nike Burrow",
                    itemCatagory: "Women's Slipper",
                    itemPrice: "3995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/097a7363-e60a-44a0-a82f-0955773489a7/burrow-slipper-BrXPT1.png"
                },
                {
                    itemName: "Court Legacy",
                    itemCatagory: "Women's Mules",
                    itemPrice: "3995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e9ab9f2-3e3a-4dc4-b06a-49dca8450453/nikecourt-legacy-mules-KL9hwr.png"
                },
                {
                    itemName: "Nike Offcourt",
                    itemCatagory: "Women's Slides",
                    itemPrice: "2495",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22eee347-2ccf-402e-9e5e-8577b81cc9d3/offcourt-slides-kJDhS7.png"
                },
            ]

// code to load the data into the html
for(const x of itemWomenSandal){
    document.querySelector(".women-sandal").innerHTML += `
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