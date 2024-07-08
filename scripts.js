
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Adorable Dog "Here for You" Tee',
            description: 'A cute and uplifting T-shirt featuring an adorable dog.',
            image: 'link-to-your-product-image.jpg',
            link: 'https://jellyjamdesign.etsy.com'
        },
        // Add more products here
    ];

    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="\${product.image}" alt="\${product.name}">
            <h3>\${product.name}</h3>
            <p>\${product.description}</p>
            <a href="\${product.link}" class="btn">Shop Now</a>
        `;

        productGrid.appendChild(productElement);
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
