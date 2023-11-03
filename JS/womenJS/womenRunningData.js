// This is the JS code for the Women's Running Shoe card data

// Data
let itemWomenRunning = 
            [
                {
                    itemName: "Nike InfinityRN",
                    itemCatagory: "Women's Road Running Shoes",
                    itemPrice: "14995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e04c39c-70ee-40ef-a3eb-651d59bf7fe6/infinityrn-4-road-running-shoes-9fcndR.png"
                },
                {
                    itemName: "Nike Alphafly",
                    itemCatagory: "Women's Road Running Shoes",
                    itemPrice: "22795",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67b95603-9b40-4e14-9ab3-f4c6c79151a5/alphafly-2-road-racing-shoes-DcWrKF.png"
                },
                {
                    itemName: "Nike InfinityRN",
                    itemCatagory: "Women's Road Running Shoes",
                    itemPrice: "14995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f969f063-db1a-482b-afce-382579f0e44c/juniper-trail-2-next-nature-trail-running-shoes-7r8pf0.png"
                },
                {
                    itemName: "Nike InfinityRN",
                    itemCatagory: "Women's Road Running Shoes",
                    itemPrice: "14995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/198c3b9a-d502-4281-acbe-1549ae7790ae/infinityrn-4-road-running-shoes-9fcndR.png"
                },
                {
                    itemName: "Nike InfinityRN",
                    itemCatagory: "Women's Road Running Shoes",
                    itemPrice: "14995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/39a4a4fa-d8f5-4677-8057-aa8f9a49c469/structure-25-road-running-shoes-ldJChc.png"
                },

                {
                    itemName: "Nike InfinityRN",
                    itemCatagory: "Women's Road Running Shoes",
                    itemPrice: "14995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/056c3a04-b6bb-4523-b274-f2683e9d40f2/infinityrn-4-road-running-shoes-sBdw7D.png"
                },
                {
                    itemName: "Nike InfinityRN",
                    itemCatagory: "Women's Road Running Shoes",
                    itemPrice: "14995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b7b9e8e5-ecc0-42ea-ae8d-22d0bf5b0d75/invincible-3-road-running-shoes-VZDSsw.png"
                },
                {
                    itemName: "Nike InfinityRN",
                    itemCatagory: "Women's Road Running Shoes",
                    itemPrice: "14995",
                    itemImage: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/081b56c7-07af-41f6-9be3-748a99a477a1/ultrafly-trail-running-shoes-8VZ6qW.png"
                }
            ]

// code to load the data into the html
for(const x of itemWomenRunning){
        document.querySelector(".women-running").innerHTML += `
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