const prices = {
      vegetables: {
        cabbage: 8,
        avocado: 30,
        tomato: 10
      },
      fruits: {
        grapes: 20,
        raspberry: 25,
        coconut: 50
      }
    };

    function getProductImage(category, product) {
      return `images/${category}/${product}.svg`;
    }

    function renderProductInfo(category, product, count, season) {
      const productInfoDiv = document.getElementById('product-info');

      const img = document.createElement('img');
      img.src = getProductImage(category, product);
      img.alt = product;
      img.width = 100;
      img.height = 100;

      const selectedProduct = document.createElement('p');
      selectedProduct.innerHTML = `Selected product: <b>${product}</b>`;

      const productCount = document.createElement('p');
      productCount.innerHTML = `Count of ${product}s: <b>${count}</b>`;

      const selectedSeason = document.createElement('p');
      selectedSeason.innerHTML = `Selected period: <b>${season}</b>`;

      const selectedCategory = document.createElement('p');
      selectedCategory.innerHTML = `Selected category: <b>${category}</b>`;

      const finalSum = document.createElement('p');
      const price = prices[category][product] * count;
      finalSum.innerHTML = `Final sum: <b>${price} UAH</b>`;

      productInfoDiv.innerHTML = '';
      productInfoDiv.appendChild(img);
      productInfoDiv.appendChild(selectedProduct);
      productInfoDiv.appendChild(productCount);
      productInfoDiv.appendChild(selectedSeason);
      productInfoDiv.appendChild(selectedCategory);
      productInfoDiv.appendChild(finalSum);
    }

    function askSeason() {
      const input = prompt('Enter the season (winter or summer):');
      const season = input.trim().toLowerCase();

      if (season === 'winter' || season === 'summer') {
        return season;
      } else {
        return askSeason();
      }
    }

    function askCategory() {
      const input = prompt('Enter the category (vegetables or fruits):');
      const category = input.trim().toLowerCase();

      if (category === 'vegetables' || category === 'fruits') {
        return category;
      } else {
        return askCategory();
      }
    }

    function askProduct(category) {
      const input = prompt(`Enter a ${category} product (${Object.keys(prices[category]).join(', ')}):`);
      const product = input.trim().toLowerCase();

      if (Object.keys(prices[category]).includes(product)) {
        return product;
      } else {
        return askProduct(category);
      }
    }

    function askCount() {
      const input = prompt('Enter the count of products:');
      const count = parseInt(input);

      if (!isNaN(count) && count > 0) {
        return count;
      } else {
        return askCount();
      }
    }

    function startPurchase() {
      const season = askSeason();
      const category = askCategory();
      const product = askProduct(category);
      const count = askCount();

      renderProductInfo(category, product, count, season);
    }

    startPurchase();