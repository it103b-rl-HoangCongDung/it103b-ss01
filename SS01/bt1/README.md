# 1. Phân tích lỗi

## Nguyên nhân lỗi

* Các biến:

  * `rawFoodPrice = "55000"`
  * `rawToppingPrice = "15000"`
  * `rawDeliveryFee = "20000"`
    đều có kiểu **string**.

* Trong JavaScript:

  * Toán tử `+` khi gặp **string** sẽ thực hiện **nối chuỗi** thay vì cộng số.

## Lỗi cụ thể

* `foodTotal = rawFoodPrice + rawToppingPrice`
   "55000" + "15000" = `"5500015000"` (nối chuỗi)

* `finalPayment = foodTotal + rawDeliveryFee - voucherDiscount`
   "5500015000" + "20000" = `"550001500020000"`
   Sau đó trừ `10000` → JS ép về số:
   `550001500020000 - 10000 = 550001500010000` (sai hoàn toàn)

---

# 2. Test Cases

| Trường hợp kiểm thử         | Dữ liệu đầu vào                     | Kết quả sai thực tế | Kết quả đúng mong đợi |
| --------------------------- | ----------------------------------- | ------------------- | --------------------- |
| TC01 - Tính tiền món ăn     | "55000" + "15000"                   | "5500015000"        | 70000                 |
| TC02 - Tính tổng thanh toán | "55000" + "15000" + "20000" - 10000 | 550001500010000     | 80000                 |

---

# 3. Hướng sửa lỗi

* Cần chuyển dữ liệu từ **string → number** trước khi tính toán.
* Sử dụng:

  * `Number()`
  * hoặc `parseInt()`

## Nguyên tắc

* Ép kiểu trước khi cộng:

```javascript
Number("55000") + Number("15000")
```

 đảm bảo phép toán là **cộng số**, không phải nối chuỗi.
