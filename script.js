
        const loadMoreButton = document.getElementById('loadMoreButton');
        const productRow = document.getElementById('productRow');
        const images = ['./images/glucond.jpg', './images/wheat.jpg', './images/cocunut.jpeg', './images/sunscreen.webp']; // Replace with your image paths
        const productTitles = ['Glucon D', 'Fresh Wheat Flour', 'Fresh Cocounts', 'Lotus Sun Screen']; // Replace with your product titles
        const prices = ['₹150/500gm', '₹400/kg', '₹140/kg', '₹170/pc']; // Replace with your corresponding prices
        let isMoreShown = false; // Flag to track if additional products are displayed

        loadMoreButton.addEventListener('click', function() {
            if (!isMoreShown) {
                for (var i = 0; i < 4; i++) {
                    const col = document.createElement('div');
                    col.className = 'col-lg-3 text-center';
                    col.innerHTML = `
                        <div class="card border-0 bg-light mb-2">
                            <div class="card-body">
                                <img src="${images[i]}" class="card-img-top" img-fluid alt="" style="height:16rem">
                            </div>
                        </div>
                        <h6>${productTitles[i]}</h6> <p>${prices[i]}</p>
                    `;
                    productRow.appendChild(col);
                }

                loadMoreButton.textContent = 'Show Less';
                isMoreShown = true;
            } else {
                // Remove only the dynamically added products
                const additionalProducts = productRow.querySelectorAll('.col-lg-3:nth-child(n+5)');
                additionalProducts.forEach(product => product.remove());
                loadMoreButton.textContent = 'Click For More';
                isMoreShown = false;
            }
        });
        const urlParams = new URLSearchParams(window.location.search);
        const success = urlParams.get('success');
        if (success) {
            // Show the confirmation message in an alert dialog
            alert('Your responses have been received successfully.');
        }