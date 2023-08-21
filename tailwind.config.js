/** @type {import('tailwindcss').Config} */
module.exports = {
  //Đây là phần chính của tệp cấu hình
  content: ["./component/tailwind.tsx"], // Đây là mảng chứa đường dẫn đến các tệp HTML, JSX, TSX
  theme: {
    extend: {},
  },
  plugins: [], // Đây là mảng chứa các plugin mà bạn muốn sử dụng cùng với Tailwind CSS.
  // Các plugin này có thể cung cấp các tính năng bổ sung hoặc tùy chọn cho Tailwind.
};
