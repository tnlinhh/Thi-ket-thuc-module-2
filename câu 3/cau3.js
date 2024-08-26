let mangSo = [];
let n = 0;
let k = 0;

function nhapMang() {
  n = parseInt(document.getElementById('n').value);
  if (isNaN(n) || n <= 0 || n > 50) {
    alert("Số lượng phần tử không hợp lệ. Vui lòng nhập số từ 1 đến 50");
    return;
  }
  mangSo = [];
  for (let i = 0; i < n; i++) {
    let so = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    mangSo.push(so);
  }
  hienThiMang();
}

function demCapSo() {
  k = parseInt(document.getElementById('k').value);
  if (isNaN(k) || k <= 0) {
    alert("Số nguyên dương k không hợp lệ.");
    return;
  }

  let dem = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((mangSo[i] + mangSo[j]) % k === 0) {
        dem++;
      }
    }
  }

  document.getElementById('ketQua').textContent = "Số cặp số có tổng chia hết cho " + k + " là: " + dem;
}
function hienThiMang() {
    const mangDiv = document.getElementById('mang');
    const ul = document.createElement('ul');
    mangSo.forEach(so => {
      const li = document.createElement('li');
      li.textContent = so;
      ul.appendChild(li);
    });
    mangDiv.appendChild(ul);
}