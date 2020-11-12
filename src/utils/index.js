// STORES
import panno from "../assets/img/Panos_pizza.png";
import sbarro from "../assets/img/Sbarro.png";
import pizza_camion from "../assets/img/pizzeria_camion.png";
import voglia from "../assets/img/voglia_di_pizza.png";
import stroller from "../assets/img/stroller_pizza.png";
import trulli from "../assets/img/trulli.png";

// PRODUCTS
import pizza1 from "../assets/img/panos_pizza_1.png";
import pizza2 from "../assets/img/pizzeria_camion_pizza.png";
import pizza3 from "../assets/img/sbarro_pizza.png";
import pizza4 from "../assets/img/stroller_pizza_1.png";
import pizza5 from "../assets/img/trulli_pizza.png";
import pizza6 from "../assets/img/vogliadipizza_pizza.png";

const images = [panno, sbarro, pizza_camion, voglia, stroller, trulli];
const products = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

const COUNT_IMAGES = 6;

export const getImage = (index, totalItems, isStore = true) => {
    let image = "https://via.placeholder.com/208x208";
    if ((index + 1) <= totalItems && (index + 1) <= COUNT_IMAGES)
        image = isStore ? images[index] : products[index];
    return image
};
