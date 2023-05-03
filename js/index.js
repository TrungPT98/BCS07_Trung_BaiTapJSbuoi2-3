// Bài 1: Tính tiền lương nhân viên
const luong1Ngay = 100000;
function tinhTienLuong() {
    //input: Nhập số ngày làm
    var soNgay = document.getElementById('soNgay').value;

    // Progress: tiền lương = số ngày làm * lương 1 ngày
    var tienLuong = soNgay * luong1Ngay;

    // Output: tổng tiền lương của nhân viên
    document.getElementById('tongLuong').innerHTML = tienLuong.toLocaleString() + ' VNĐ';
}

// Bài 2: Tính giá trị trung bình

function tinhTBCua5So() {
    //Input: Số thứ 1, số thứ 2, số thứ 3, số thứ 4, số thứ 5
    var soThu1 = document.getElementById('soThu1').value * 1;
    var soThu2 = document.getElementById('soThu2').value * 1;
    var soThu3 = document.getElementById('soThu3').value * 1;
    var soThu4 = document.getElementById('soThu4').value * 1;
    var soThu5 = document.getElementById('soThu5').value * 1;

    // Progress: tổng của 5 số chia cho 5
    var giaTriTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;

    // Output: giá trị trung bình của 5 số
    document.getElementById('giaTriTB').innerHTML = giaTriTB;
}

// Bài 3: Quy đổi tiền
const gia1USD = 23500;
function doiTienUSD() {
    // Input: Nhập vào số tiền USD
    var soTienUSD = document.getElementById('soTienUSD').value * 1;

    // Progress: tiền VND = số tiền đã nhập * so tien của 1 USD
    var soTienVND = soTienUSD * gia1USD;

    // Output: Kết quả quy đổi ra tiền VND
    document.getElementById('soTienVND').innerHTML = soTienVND.toLocaleString() + ' VNĐ';
}

//Bài 4: Tính diện tích, chu vi hình chữ nhật
function tinhDT_CV() {
    //Input: Chiều dài và chiều rộng của HCN
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;

    //Progress: Diện tích = chiều dài * chieu rộng; Chu vi = (Dài + Rộng) * 2
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    //Output: Kết quả của diện tích và chu vi
    document.getElementById('ketQuaDT_CV').innerHTML = 'Diện tích là: ' + dienTich + '  ; Chu vi là: ' + chuVi;

}

//Bài 5: Tính tổng 2 ký số
function tinhTongCua2KySo() {
    // Input: Nhập vào số nguyên có 2 chữ số
    var soNguyen = document.getElementById('soNguyen').value * 1;

    // Progress: Lấy số phần chục của ký số bằng cách / 10 và lấy phần nguyên; Lấy số phần đơn vị bằng cách % 10 lấy phần dư, tổng 2 số = số hàng chục + hàng dvi
    var hangChuc = Math.floor(soNguyen / 10) ;
    var hangDVi = soNguyen % 10 ;
    var tong2KySo = hangChuc + hangDVi ;

    //Output: Kết quả Tổng của 2 số hàng chục và hàng đơn vị
    document.getElementById('tong2KySo').innerHTML = tong2KySo;

}