import panno from "../assets/img/Panos_pizza.png";
import sbarro from "../assets/img/Sbarro.png";
import pizza_camion from "../assets/img/pizzeria_camion.png";
import voglia from "../assets/img/voglia_di_pizza.png";
import stroller from "../assets/img/stroller_pizza.png";
import trulli from "../assets/img/trulli.png";

const images = [panno, sbarro, pizza_camion, voglia, stroller, trulli];

export const getImage = (index, totalItems) => {
    let image = "";
    if ((index + 1) <= totalItems)
        image = images[index];
    return image
};
