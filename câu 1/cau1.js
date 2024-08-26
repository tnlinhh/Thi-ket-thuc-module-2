const MAX_SO_PHAN_TU = 20;
let mangSo = [];

function themSo() {
  const so = parseInt(document.getElementById('num').value);
  if (isNaN(so) || mangSo.length >= MAX_SO_PHAN_TU) {
    alert('Vui lòng nhập số hợp lệ và không vượt quá ' + MAX_SO_PHAN_TU + ' phần tử');
    return;
  }
  mangSo.push(so);
  hienThiMang();
}

function tinhTong() {
  let tong = 0;
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] % 3 === 0 && mangSo[i] % 5 === 0) {
      tong += mangSo[i];
    }
  }
  document.getElementById('tong').textContent = 'Tổng các số là bội chung của 3 và 5: ' + tong;
}

function hienThiMang() {
  document.getElementById('mang').textContent = 'Mảng: ' + mangSo.join(', ');
}