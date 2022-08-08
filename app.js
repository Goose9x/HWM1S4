// Bài 1:
// Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng sau thành một chuỗi.
// myColor = ["Red", "Green", "White", "Black"];
// Đầu ra mong đợi :
// "Red, Green, White, Black"
// "Red + Green + White + Black"

//-----------------------------------------LÀM--------------------------------------------------\\
// myColor = ["Red", "Green", "White", "Black"]
// a = myColor.join(",")
// console.log(a);
// b = myColor.join("+")
// console.log(b);

//-----------------------------------------KẾT--------------------------------------------------\\

// Bài 2:
// Viết chương trình JavaScript chấp nhận một số làm đầu vào 
// và chèn dấu gạch ngang (-) vào giữa hai số chẵn. 
// Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là 0-2-5-4-6-8
//-----------------------------------------LÀM--------------------------------------------------\\
// let a = prompt("Nhập vào dãy số linh tinh").split("")
// let b = a.join("-");
// console.log(`${a} ==> ${b}`);
//-----------------------------------------KẾT--------------------------------------------------\\

// Bài 3: Rất khó


// Bài 4:
// Viết kịch bản yêu cầu người dùng nhập một dãy số, 
// Các số được phân tách bằng dấu phẩy, 
// tính tổng các số và hiển thị cho người dùng
//-----------------------------------------LÀM--------------------------------------------------\\
// let a = prompt("Nhập một dãy số cách nhau bằng dấu phẩy").split(",")
// let b = 0
// for (let i=0; i<= a.length-1; i++){
//     b = b + Number(a[i])
// }console.log(b);
//-----------------------------------------KẾT--------------------------------------------------\\

// Bài 5:
// Viết script yêu cầu người dùng nhập một dãy số, 
// các số được phân tách bằng dấu phẩy, tìm số nhỏ nhất và đăng xuất cho người dùng
//-----------------------------------------LÀM--------------------------------------------------\\
// let a = prompt("nhập vào một chuỗi").split(",");
// let min = a[0];
// for (let i = 0; i <= a.length - 1; i = i + 1) {
//     if (min >= a[i]) {
//         min = a[i];
//     }
//-----------------------------------------KẾT--------------------------------------------------\\
// } alert(`so nho nhat la ${min}`)


// Bài 6:
// tạo một mảng chứa ít nhất 5 số, 
// sau đó yêu cầu người dùng nhập một số, thực hiện tìm kiếm để tìm số trong mảng
//-----------------------------------------LÀM--------------------------------------------------\\
// let a = ["1","5","88","45","2"];
// let userInput = prompt("nhập một số trong mảng");
// if(a.indexOf(userInput) !== 1){
//     alert("có trong mảng");
// }else{
// alert("không có trong mảng");
// }
//-----------------------------------------KẾT--------------------------------------------------\\


// Bài 7:
//-----------------------------------------LÀM--------------------------------------------------\\
let kichthuoc = [5, 7, 300, 90, 24, 50, 75]
// 7.1 Tạo một mảng để thể hiện kích thước đàn của bạn và ghi lại tất cả kích thước đàn của bạn
console.log(`Đây là kích thước cừu của chúng tôi`)
console.log(kichthuoc);
// 7.2 Cuối mỗi tháng, 
// bạn phải chọn một và chỉ một con cừu để xén lông 
// và do đó bạn muốn chọn con lớn nhất để tối đa hóa lợi nhuận của mình.
// Thêm tập lệnh để tìm kiếm những con cừu lớn nhất trong danh sách của bạn:
let kichthuocMax = Math.max(...kichthuoc)
console.log(`Con cừu lớn nhất của chúng tôi là ${kichthuocMax}, hãy cạo nó`);
// 7.3 Sau khi cạo lông, kích thước của nó sẽ trở về kích thước mặc định, là 8.
kichthuoc[kichthuoc.indexOf(kichthuocMax)] = 8
let caoLong1 = kichthuoc
console.log(`Kích thước sau khi cạo lông là`);
console.log(caoLong1);
// 7.4 Trong tháng tiếp theo, 
// MỌI con cừu trong đàn của bạn lớn lên, kích thước của chúng tăng thêm 50. Đăng xuất chúng
for (let i = 1; i <= 3; i++) { // them for vao chỗ này để có vòng lặp
    console.log(`MONTH ${i}`); //thay i vao day
    console.log(`Sau ${i} tháng đàn cừu đã lớn lên, đây là kích thước của chúng`); // thay i vao day
    for (let i = 0; i <= caoLong1.length - 1; i++) {
        caoLong1[i] = caoLong1[i] + 50;
    } console.log(caoLong1);
    // 7.5. Tìm con cừu lớn nhất hiện tại và cạo lông nó
    let kichthuocMax1M = Math.max(...caoLong1)
    console.log(`Con cừu lớn nhất của chúng tôi sau 1 tháng là là ${kichthuocMax1M}, hãy cạo nó`);
    caoLong1[caoLong1.indexOf(kichthuocMax1M)] = 8
    let KTSKCL1M = caoLong1
    console.log(`Kích thước sau khi cạo lông là`);
    console.log(KTSKCL1M);
    console.log("--------------------------");
    finalCaolong = KTSKCL1M
}console.log("--------------------------");
console.log("Kích thươc sau 3 lần cạo là");
console.log(finalCaolong);
// 7.7 Sau ngày ngày xén lông cừu, bạn trở nên buồn chán. 
// Bạn muốn bán đàn của mình để đi du lịch khắp thế giới. 
// có thương mại công bằng, bây giờ bạn phải tính toán tổng kích thước đàn cừu của bạn 
// và sau đó là số tiền dự kiến bạn có thể nhận được từ việc bán đàn của mình, trước khi đưa ra thị trường. 
// Viết một chương trình để tính tổng kích thước đàn cừu của bạn cũng như số tiền bạn sẽ có
let sum = 0
for (let i=0; i <= finalCaolong.length -1; i++){
    sum += finalCaolong[i]
} console.log(`Đàn của tôi có tổng kích thước là ${sum}`);
console.log(`Vậy số tiền tôi muốn thu được là ${sum} x 25 = ${sum * 25 }`);
//-----------------------------------------KẾT--------------------------------------------------\\

// Bài 8:
// Viết tập lệnh yêu cầu người dùng nhập một chuỗi tên, được phân tách bằng dấu phẩy
// Tạo một mảng mới chứa các tên, mỗi tên được bao quanh bằng dấu <>
// Nếu bạn cần gợi ý, hãy tìm chúng ở cuối bài tập về nhà này
//-----------------------------------------LÀM--------------------------------------------------\\
// let userInput = prompt("Nhập vào chuỗi tên được ngăn cách bởi dấu phẩy").split(",")
// let a = [];
// for (let i = 0; i <= userInput.length-1 ; i++){
//     a = a + (`<${userInput[i]}>`)
// }console.log(`${userInput} ===>` + a);
//-----------------------------------------KẾT--------------------------------------------------\\
// Bài 9: (Tùy chọn) Viết tập lệnh yêu cầu người dùng nhập một chuỗi Số, được phân tách bằng dấu phẩy (,).
// Tạo một mảng mới chỉ chứa các Số lẻ của dãy đã nhập.

// let a = prompt('nhập chuối số ngăn cahcs dấu phẩy').split(',');
// let c = [];
// for (let i = 0; i <= a.length - 1; i++) {
//     if (Number(a[i]) % 2 == 1) {
//         c.push(a[i]);
//     }
// }
// console.log(`${b} => ${c}`);
