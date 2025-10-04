// Product data
const products = [
    { id: 1, name: "FORMULA 1 SHAKES MIX-400g", volPoint: 21.75, mrp: 2179, d15: 1893, d25: 1702, d35: 1511, d42: 1377, d50: 1225 },
    { id: 2, name: "FORMULA 1 SHAKES MIX 750g", volPoint: 32.65, mrp: 3227, d15: 2803, d25: 2521, d35: 2238, d42: 2041, d50: 1815 },
    { id: 3, name: "PERSONALIZED PROTEIN POWDER 200g", volPoint: 11.5, mrp: 1295, d15: 1125, d25: 1011, d35: 898, d42: 819, d50: 728 },
    { id: 4, name: "PERSONALIZED PROTEIN POWDER 400g", volPoint: 22.5, mrp: 2485, d15: 2158, d25: 1941, d35: 1724, d42: 1571, d50: 1398 },
    { id: 5, name: "SHAKEMATE", volPoint: 6.45, mrp: 653, d15: 604, d25: 572, d35: 540, d42: 517, d50: 491 },
    { id: 6, name: "Male Factor+", volPoint: 34.75, mrp: 3410, d15: 2962, d25: 2664, d35: 2365, d42: 2156, d50: 1918 },
    { id: 7, name: "WOMEN CHOICE", volPoint: 12.45, mrp: 1245, d15: 1081, d25: 972, d35: 863, d42: 787, d50: 700 },
    { id: 8, name: "VRITILIFE BRAIN HEALTH", volPoint: 15.1, mrp: 1464, d15: 1272, d25: 1143, d35: 1015, d42: 926, d50: 823 },
    { id: 9, name: "VRITILIFE IMMUNE HEALTH", volPoint: 15.8, mrp: 1528, d15: 1327, d25: 1193, d35: 1060, d42: 966, d50: 859 },
    { id: 10, name: "VRITILIFE TRIPHALA", volPoint: 11.25, mrp: 1089, d15: 946, d25: 851, d35: 755, d42: 688, d50: 612 },
    { id: 11, name: "VRITILIFE Facial Cleanser", volPoint: 10.4, mrp: 1165, d15: 1012, d25: 910, d35: 808, d42: 736, d50: 655 },
    { id: 12, name: "VRITILIFE Facial Toner", volPoint: 11.8, mrp: 1322, d15: 1148, d25: 1033, d35: 917, d42: 836, d50: 743 },
    { id: 13, name: "VRITILIFE Facial Serum", volPoint: 27.05, mrp: 3022, d15: 2625, d25: 2361, d35: 2096, d42: 1911, d50: 1700 },
    { id: 14, name: "VRITILIFE Moisturizer", volPoint: 13.15, mrp: 1473, d15: 1279, d25: 1151, d35: 1022, d42: 931, d50: 828 },
    { id: 15, name: "AFRESH", volPoint: 7.8, mrp: 812, d15: 705, d25: 634, d35: 563, d42: 513, d50: 456 },
    { id: 16, name: "AFRESH TULSI", volPoint: 7.8, mrp: 812, d15: 712, d25: 646, d35: 580, d42: 534, d50: 481 },
    { id: 17, name: "H24 HYDRATE", volPoint: 14.05, mrp: 1636, d15: 1457, d25: 1338, d35: 1219, d42: 1136, d50: 1041 },
    { id: 18, name: "H24 REBUILD STRENGTH", volPoint: 24.7, mrp: 2616, d15: 2295, d25: 2081, d35: 1868, d42: 1718, d50: 1547 },
    { id: 19, name: "HN SKIN BOOSTER 10gm x 30 Sachets", volPoint: 38.65, mrp: 3910, d15: 3476, d25: 3188, d35: 2899, d42: 2697, d50: 2466 },
    { id: 20, name: "HN SKIN BOOSTER Canister", volPoint: 36.65, mrp: 3910, d15: 3460, d25: 3161, d35: 2862, d42: 2653, d50: 2413 },
    { id: 21, name: "DINO SHAKE", volPoint: 9.6, mrp: 1115, d15: 968, d25: 870, d35: 773, d42: 704, d50: 626 },
    { id: 22, name: "ACTIVATED FIBER TABLETS", volPoint: 15.75, mrp: 1636, d15: 1421, d25: 1278, d35: 1135, d42: 1034, d50: 920 },
    { id: 23, name: "ACTIVATE FIBER COMPLEX", volPoint: 22.95, mrp: 2559, d15: 2223, d25: 1999, d35: 1775, d42: 1618, d50: 1439 },
    { id: 24, name: "ALOE PLUS", volPoint: 9.4, mrp: 1059, d15: 919, d25: 827, d35: 734, d42: 669, d50: 595 },
    { id: 25, name: "ALOE CONCENTRATE", volPoint: 24.95, mrp: 2696, d15: 2342, d25: 2106, d35: 1870, d42: 1705, d50: 1516 },
    { id: 26, name: "SIMPLY PROBIOTIC", volPoint: 21.95, mrp: 2209, d15: 1918, d25: 1725, d35: 1532, d42: 1396, d50: 1242 },
    { id: 27, name: "HERBALIFE CALCIUM TABLETS", volPoint: 10.25, mrp: 1203, d15: 1044, d25: 939, d35: 834, d42: 760, d50: 676 },
    { id: 28, name: "JOINT SUPPORT", volPoint: 20.9, mrp: 2455, d15: 2132, d25: 1918, d35: 1703, d42: 1552, d50: 1380 },
    { id: 29, name: "HERBALIFE NITEWORKS", volPoint: 75, mrp: 7128, d15: 6192, d25: 5568, d35: 4944, d42: 4508, d50: 4009 },
    { id: 30, name: "HERBALIFELINE", volPoint: 25.75, mrp: 2667, d15: 2317, d25: 2083, d35: 1850, d42: 1687, d50: 1500 },
    { id: 31, name: "BETA HEART-VANILLA FLAVOUR", volPoint: 19.55, mrp: 2242, d15: 1994, d25: 1828, d35: 1663, d42: 1547, d50: 1414 },
    { id: 32, name: "MULIVITAMIN", volPoint: 19.95, mrp: 2004, d15: 1740, d25: 1565, d35: 1390, d42: 1267, d50: 1127 },
    { id: 33, name: "CELL ACTIVATOR", volPoint: 21.95, mrp: 2215, d15: 1924, d25: 1730, d35: 1536, d42: 1400, d50: 1245 },
    { id: 34, name: "CELL-U-LOSS", volPoint: 15.75, mrp: 1705, d15: 1481, d25: 1331, d35: 1182, d42: 1078, d50: 959 },
    { id: 35, name: "HERBAL CONTROL", volPoint: 32.95, mrp: 3433, d15: 2982, d25: 2681, d35: 2381, d42: 2171, d50: 1930 },
    { id: 36, name: "OCULAR DEFENSE", volPoint: 19.25, mrp: 1927, d15: 1674, d25: 1505, d35: 1336, d42: 1218, d50: 1083 },
    { id: 37, name: "SLEEP ENHANCE", volPoint: 16.3, mrp: 1697, d15: 1474, d25: 1326, d35: 1177, d42: 1073, d50: 954 },
     { id: 38, name: "LIFTOFF", volPoint: 38.05, mrp: 4119, d15: 3578, d25: 3219, d35: 2857, d42: 2604, d50: 2306 }
];
// Initialize quantities object
const quantities = {};
products.forEach(product => {
    quantities[product.id] = 0;
});

// DOM elements
const productsGrid = document.getElementById('productsGrid');

// Render product cards
function renderProducts() {
    const html = products.map((product, index) => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-header">
                <div class="product-number">${index + 1}</div>
                <h3 class="product-name">${product.name}</h3>
            </div>
            
            <div class="product-details">
                <div class="detail-item">
                    <div class="detail-label">Vol. Point</div>
                    <div class="detail-value">${product.volPoint}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">MRP</div>
                    <div class="detail-value">₹${product.mrp.toLocaleString()}</div>
                </div>
            </div>
            
            <div class="quantity-section">
                <div class="quantity-label">Quantity</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="decreaseQuantity(${product.id})" type="button">-</button>
                    <input type="number" min="0" value="0" class="qty-input" data-id="${product.id}" onchange="updateQuantity(${product.id}, this.value)">
                    <button class="qty-btn" onclick="increaseQuantity(${product.id})" type="button">+</button>
                </div>
            </div>
        </div>
    `).join('');
    
    productsGrid.innerHTML = html;
}

// Update quantity from input
function updateQuantity(id, value) {
    const qty = Math.max(0, parseInt(value) || 0);
    quantities[id] = qty;
    
    // Update the input field to reflect the corrected value
    const input = document.querySelector(`input[data-id="${id}"]`);
    if (input && input.value !== qty.toString()) {
        input.value = qty;
    }
    
    calculateTotals();
    animateQuantityChange(id);
}

// Increase quantity
function increaseQuantity(id) {
    quantities[id] = (quantities[id] || 0) + 1;
    const input = document.querySelector(`input[data-id="${id}"]`);
    if (input) {
        input.value = quantities[id];
    }
    calculateTotals();
    animateQuantityChange(id);
}

// Decrease quantity
function decreaseQuantity(id) {
    quantities[id] = Math.max(0, (quantities[id] || 0) - 1);
    const input = document.querySelector(`input[data-id="${id}"]`);
    if (input) {
        input.value = quantities[id];
    }
    calculateTotals();
    animateQuantityChange(id);
}

// Animate quantity change
function animateQuantityChange(id) {
    const card = document.querySelector(`[data-id="${id}"]`);
    if (card) {
        card.classList.add('quantity-updated');
        setTimeout(() => {
            card.classList.remove('quantity-updated');
        }, 300);
    }
}

// Calculate totals and update summary
function calculateTotals() {
    let totalVP = 0;
    let totalMRP = 0;
    var total15 = 0; 
    let total25 = 0;
    let total35 = 0;
    let total42 = 0;
    let total50 = 0;
    let totalQty = 0;

    // Calculate totals based on quantities
    products.forEach(product => {
        const qty = quantities[product.id] || 0;
        totalQty += qty;
        totalVP += product.volPoint * qty;
        totalMRP += product.mrp * qty;
        total15 += product.d15 * qty;
        total25 += product.d25 * qty;
        total35 += product.d35 * qty;
        total42 += product.d42 * qty;
        total50 += product.d50 * qty;
    });

    // Calculate delivery charge
    const deliveryCharge = totalVP < 100 ? 105 : 0;


    // Update DOM elements
    document.getElementById('totalQty').textContent = totalQty.toLocaleString();
    document.getElementById('totalVP').textContent = totalVP.toFixed(2);
    document.getElementById('deliveryCharge').textContent = `₹${deliveryCharge}`;
    document.getElementById('deliveryNote').textContent = totalVP >= 100 ? '✓ Free delivery' : '< 100 VP';
    
    // Update MRP totals
    document.getElementById('totalMRP').textContent = `₹${(totalMRP + deliveryCharge).toLocaleString()}`;
    document.getElementById('mrpWithout').textContent = `Without delivery: ₹${totalMRP.toLocaleString()}`;
    
    // Update discount totals
    document.getElementById('total15').textContent = `₹${(total15 + deliveryCharge).toLocaleString()}`;
    document.getElementById('d15Without').textContent = `Without delivery: ₹${total15.toLocaleString()}`;

    document.getElementById('total25').textContent = `₹${(total25 + deliveryCharge).toLocaleString()}`;
    document.getElementById('d25Without').textContent = `Without delivery: ₹${total25.toLocaleString()}`;
    
    document.getElementById('total35').textContent = `₹${(total35 + deliveryCharge).toLocaleString()}`;
    document.getElementById('d35Without').textContent = `Without delivery: ₹${total35.toLocaleString()}`;
    
    document.getElementById('total42').textContent = `₹${(total42 + deliveryCharge).toLocaleString()}`;
    document.getElementById('d42Without').textContent = `Without delivery: ₹${total42.toLocaleString()}`;
    
    document.getElementById('total50').textContent = `₹${(total50 + deliveryCharge).toLocaleString()}`;
    document.getElementById('d50Without').textContent = `Without delivery: ₹${total50.toLocaleString()}`;
}

// Initialize the application
function init() {
    renderProducts();
    calculateTotals();
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

function scrollToSummary() {
    const summarySection = document.querySelector('.summary');
    if (summarySection) {
        summarySection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}
