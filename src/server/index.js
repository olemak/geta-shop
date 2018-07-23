var faker = require("faker");
faker.locale = "nb_NO";

module.exports = () => {
    const data = { products: [] };
    // Create 50 products
    for (let i = 0; i < 50; i++) {
        let baseprice = faker.commerce.price();
        let vatRate = 0.25;
        const content = [
            faker.commerce.productAdjective(),
            faker.commerce.productMaterial(),
            faker.commerce.product()
        ];
        data.products.push({
            id: i,
            name: `${content[0]} ${content[1]} ${content[2]}`,
            price: {
                base: +baseprice,
                formatted: `NOK ${baseprice}`,
                vat: (baseprice * vatRate).toFixed(2),
                exVat: (baseprice - baseprice * vatRate).toFixed(2),
                vatRate: `${vatRate * 100}%`
            },
            image: {
                color: faker.internet.color(),
                background: faker.internet.color(),
                content
            }
        });
    }
    return data;
};
