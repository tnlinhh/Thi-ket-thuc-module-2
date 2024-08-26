class KhachHang {
    constructor(maKH, tenKH, sdt, diaChi, email) {
        this.maKH = maKH;
        this.tenKH = tenKH;
        this.sdt = sdt;
        this.diaChi = diaChi;
        this.email = email;
    }
}

let danhSachKhachHang = [];

function themKhachHang() {
    // Lấy thông tin từ form
    const maKH = document.getElementById('maKH').value;
    const tenKH = document.getElementById('tenKH').value;
    const sdt = document.getElementById('sdt').value;
    const diaChi = document.getElementById('diaChi').value;
    const email = document.getElementById('email').value;

    // Tạo đối tượng khách hàng mới
    const khachHangMoi = new KhachHang(maKH, tenKH, sdt, diaChi, email);

    // Thêm khách hàng vào danh sách
    danhSachKhachHang.push(khachHangMoi);

    // Hiển thị lại danh sách khách hàng
    hienThiDanhSach();
}

function hienThiDanhSach() {
    const tbody = document.getElementById('tbodyKhachHang');
    tbody.innerHTML = ''; // Xóa nội dung cũ

    danhSachKhachHang.forEach(kh => {
        const row = tbody.insertRow();
        row.insertCell().textContent = kh.maKH;
        row.insertCell().textContent = kh.tenKH;
        row.insertCell().textContent = kh.sdt;
        row.insertCell().textContent = kh.diaChi;
        row.insertCell().textContent = kh.email;
    });
}