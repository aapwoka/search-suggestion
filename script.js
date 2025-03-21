var products = ["rolex15","rolexPro","rolex18","iphone","buggatti","posche","mansion"]

var typedProduct = document.getElementById("typedSearch")
 const dropdown = document.getElementById("dropdown");


typedProduct.oninput= (e)=>{
var query = e.target.value

            // Clear previous suggestions
            dropdown.innerHTML = "";

 if (query.trim === "") {
                dropdown.style.display = "none"; // Hide dropdown if empty
                return;
            }

             // Get unique filtered results (no duplicates)
            const filteredProducts = [...new Set(products.filter(product => product.toLowerCase().includes(query)))];

            if (filteredProducts.length === 0) {
                dropdown.style.display = "none"; // Hide dropdown if no matches
                return;
            }

            // Create new dropdown items (avoiding duplicates)
            filteredProducts.forEach(product => {
                const div = document.createElement("div");
                div.textContent = product;
                div.onclick = () => {
                    typedProduct.value = product; // Fill input with selected product
                    dropdown.style.display = "none"; // Hide dropdown after selection
                };
                dropdown.appendChild(div);
            });
            dropdown.style.display = "block"; // Show dropdown
}

        // Hide dropdown when clicking outside
        document.addEventListener("click", (event) => {
            if (!typedProduct .contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.style.display = "none";
            }
});

