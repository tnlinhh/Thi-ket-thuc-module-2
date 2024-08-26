function lamTronDiem() {
    // Lấy điểm số từ input
    let diemSo = document.getElementById("diemSo").value;
    diemSo = parseInt(diemSo);
  
    // Kiểm tra điều kiện và làm tròn
    if (diemSo >= 0 && diemSo <= 100) {
      if (diemSo < 48) {
        ketQua = "Trượt (Điểm quá thấp)";
      } else {
        let boiSoTiepTheo = Math.ceil(diemSo / 5) * 5;
        if (boiSoTiepTheo - diemSo < 3) {
          diemSo = boiSoTiepTheo;
        }
        ketQua = diemSo >= 50 ? diemSo : "Trượt (Điểm sau khi làm tròn vẫn dưới 50)";
      }
    } else {
      ketQua = "Điểm số không hợp lệ";
    }
  
    // Hiển thị kết quả
    document.getElementById("ketQua").textContent = ketQua;
  }