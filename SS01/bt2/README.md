# 1. Mô tả xử lý

- Dữ liệu đầu vào là chuỗi nên cần ép kiểu:
  - Number() cho số nguyên
  - parseFloat() cho số thập phân

- Thứ tự tính:
  1. Tiền món ăn
  2. Trừ giảm giá
  3. Tính VAT
  4. Tính phí ship
  5. Tổng thanh toán

---

# 2. Test Cases

| Trường hợp | Dữ liệu đầu vào | Kết quả mong đợi |
|------------|----------------|------------------|
| TC01 - Mặc định | quantity = 2, distance = 3.5 | Tổng = 342200 |
| TC02 - Tăng khoảng cách | distance = 5.0 | Phí ship = 35000 |
| TC03 - Tăng số lượng | quantity = 3 | Tổng tăng tương ứng |

---

# 3. Kết luận

- Ép kiểu giúp tránh lỗi nối chuỗi
- Đảm bảo phép tính chính xác