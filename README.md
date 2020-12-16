# Online Academy

## Folder Structure

```
src
|___ views
|   |___ User                               // mô tả tất cả FEATURE cho role User
|   |   |___ index.js                       // mô tả tất cả routes của User
|   |   |___ Home
|   |   |   |___ index.js                   // mô tả tất cả route có thể có của component Home
|   |   |   |___ style.css
|   |   |   |___ slice.js                   // mô tả redux slice
|   |   |   |___ components
|   |   |   |   |___ HomeCarousel.js
|   |   |   |   |___ HomeCarouselItem.js
|   |   |   |   |___ HomeCourseList.js
|   |   |   |   |___ HomeCourseListItem.js
|   |   |   |   |___ ...
|   |   |   |___ pages
|   |   |       |___ Home.js                // là nơi lấy các components bên trong folder "components" để tạo UI
|   |   |       |___ ...
|   |   |
|   |   |___ Course
|   |   |   |___ index.js
|   |   |   |___ style.css
|   |   |   |___ slice.js
|   |   |   |___ components
|   |   |   |   |___ CourseDetails.js
|   |   |   |   |___ CoursePlayer.js
|   |   |   |   |___ CourseContents.js
|   |   |   |   |___ ...
|   |   |   |___ pages
|   |   |       |___ CourseView.js
|   |   |       |___ CoursePlay.js
|   |   |       |___ ...
|   |   |
|   |   |___ ...
|   |
|   |___ Admin                              // mô tả tất cả feature cho role Admin
|       |___ index.js                       // mô tả tất cả routes cho Admin
|       |___ Dashboard
|       |   |___ ...
|       |___ CourseList
|       |   |___ ...
|       |___ ...
|
|___ components                              // các component DÙNG CHUNG cho toàn bộ app
|   |___ Loading.js                          // hiệu ứng loading khi tải trang
|   |___ PrivateRoute.js                     // các route dành cho admin thì cấm user truy cập
|   |___ AppHeader
|   |   |___ HeaderUser.js
|   |   |___ HeaderAdmin.js
|   |___ AppFooter
|   |   |___ FooterUser.js
|   |   |___ FooterAdmin.js
|   |___ ...
|
|___ layout                                   // layout cơ sở cho các role
|   |___ LayoutUser.js
|   |___ LayoutAdmin.js
|
|___ api
|   |___ axios.js
|
|___ store
|   |___ index.js
|   |___ app                                  // các reducers chung của app mà không thuộc về 1 feature nào
|      |___ auth.js
|      |___ ...
|
|___ index.js
|___ App.js
```

Lưu ý các điểm sau:

- Sử dụng **Functional Component**
- Tên các **feature** (các folder trong `views`) phải là **danh từ số ít** (không thêm `s/es` vào cuối)
- Tất cả features **phải** tách nhỏ ra theo từng bố cục, ngữ cảnh cụ thể, **không được dồn hết vào 1 file** (xem ví dụ features `Course`)
- Project structure **phải** tuân theo template bên trên
- Mỗi features sẽ nằm tách biệt trong 1 folder và mọi thứ xử lý, styling, state, UI... nằm hết trong folder này
- Các features có thể sử dụng các global components, **không được phép** sử dụng components nằm trong thư mục của các features khác
- Tất cả file `*.js` trong bất cứ folder `components` nào cũng **PHẢI có PropTypes** đầy đủ
- Không được tồn tại bất kì một `warning` hay `error` nào trên console
- Khi chưa có data, **mọi data mẫu cho UI đều phải đặt trong `useState()` của component đó** và **không được phép có hook `useEffect()`** tồn tại trong component
- **Đọc kỹ ý trên thêm 1 lần**
- **Bất kì sai sót nào được phát hiện sẽ phải hiệu chỉnh ngay lập tức trước khi code chức năng tiếp theo**

Best Practice:

- Sử dụng extension `ESLint` và `Prettier` để code sạch và hạn chế tối đa lỗi xảy ra trong quá trình phát triển
- Sử dụng extension `Reactjs code snippet` để khởi tạo nhanh một **Functional Component** và **PropTypes** khi cần
- Luôn đặt câu hỏi khi có chỗ chưa rõ
