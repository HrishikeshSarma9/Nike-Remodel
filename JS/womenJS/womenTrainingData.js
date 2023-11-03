// This is the JS code for the Women's Gym and Training Shoes card's data

let itemWomenTraining = 
            [
                {
                    itemName: "Nike Metcon 8",
                    itemCatagory: "Women's Workout Shoes",
                    itemPrice: "11895",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/481ba66d-52f1-4d44-aa97-b2058f11a65f/metcon-8-workout-shoes-vkQ0TS.png"
                },
                {
                    itemName: "Nike Metcon 9",
                    itemCatagory: "Women's Workout Shoes",
                    itemPrice: "13995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f586a956-5cd6-40b5-8df6-84d192b5f3ab/metcon-9-workout-shoes-hVBpSC.png"
                },
                {
                    itemName: "Nike Metcon 5",
                    itemCatagory: "Women's Workout Shoes",
                    itemPrice: "10795",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/62c77845-5e6a-4146-ac99-6dd556ffa2d6/free-metcon-5-workout-shoes-HfHgmZ.png"
                },
                {
                    itemName: "SuperRep GO 2",
                    itemCatagory: "Women's Workout Shoes",
                    itemPrice: "9777",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a554fd9-4df1-453c-8027-852f50683c4c/superrep-cycle-2-next-nature-cycling-shoes-ttNK0V.png"
                },
                {
                    itemName: "Nike Motiva",
                    itemCatagory: "Women's Walking Shoes",
                    itemPrice: "9695",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/898e324d-6fad-4348-a929-67a3c75f6010/motiva-walking-shoes-dCcsVX.png"
                },
                {
                    itemName: "SuperRep GO 3",
                    itemCatagory: "Women's HIIT Class Shoes",
                    itemPrice: "9695",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/843b5b00-8378-49c7-adcf-6ea54d4f822b/superrep-go-3-nn-prm-hiit-class-shoes-6TP106.png"
                },
                {
                    itemName: "Zoom Bella 6",
                    itemCatagory: "Women's Training Shoes",
                    itemPrice: "8495",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e78d753-4c54-49b1-8ea8-97157b538f5e/zoom-bella-6-training-shoes-xH8XvK.png"
                },
                {
                    itemName: "Zoom Bella 5",
                    itemCatagory: "Women's Training Shoes",
                    itemPrice: "8495",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/798a9d5c-f05a-465f-ac51-36521921b896/in-season-tr-13-workout-shoes-Z3Khdg.png"
                },
            ]

// code to load the data into the html
for(const x of itemWomenTraining){
    document.querySelector(".women-training").innerHTML += `
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