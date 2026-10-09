"use strict";

// 1. Dữ liệu đầu vào (string)
const customerName = "Nguyen Van An";
const rawMainDishPrice = "120000";
const rawDrinkPrice = "35000";
const rawQuantity = "2";
const rawDistanceKm = "3.5";
const openingDiscount = 20000;
const vatRate = 0.08;

// 2. Ép kiểu sang number
const mainDishPrice = Number(rawMainDishPrice);
const drinkPrice = Number(rawDrinkPrice);
const quantity = Number(rawQuantity);
const distanceKm = parseFloat(rawDistanceKm);

// 3. Tính toán
const foodSubtotal = (mainDishPrice + drinkPrice) * quantity;
const discountedTotal = foodSubtotal - openingDiscount;
const vatAmount = discountedTotal * vatRate;
const shippingFee = 15000 + distanceKm * 4000;
const finalPayment = discountedTotal + vatAmount + shippingFee;

// 4. In hóa đơn
console.log(`================ HÓA ĐƠN ĐẶT MÓN ================`);
console.log(`Khách hàng: ${customerName}`);
console.log(`Tiền món ăn: ${foodSubtotal} VND`);
console.log(`Chiết khấu khai trương: ${openingDiscount} VND`);
console.log(`Tiền sau chiết khấu: ${discountedTotal} VND`);
console.log(`Thuế VAT (8%): ${vatAmount} VND`);
console.log(`Cước vận chuyển (${distanceKm} km): ${shippingFee} VND`);
console.log(`-------------------------------------------------`);
console.log(`TỔNG THANH TOÁN THỰC TẾ: ${finalPayment} VND`);
console.log(`=================================================`);