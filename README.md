### 1. Giới thiệu ứng dụng
Dự án là một hệ thống Web Fullstack đơn giản bao gồm Backend (Node.js/Express) và Frontend (React/Vite) kết nối tới cơ sở dữ liệu MongoDB. Mọi dịch vụ được thiết lập chạy trong Docker container riêng biệt với sự điều phối của Docker Compose.

### 2. Tính năng
* **Giao diện Frontend (React):**
   * Cho phép hiển thị danh sách các món đồ / công việc (Tasks).
   * Form điền thông tin và tương tác thêm mới dữ liệu gửi về Backend.
   * Chứa trang `/about` hiển thị thông tin tĩnh của sinh viên.
* **Backend API (Node.js + Express):**
   * Tương tác với MongoDB thực tế.
   * Cung cấp API cập nhật và lấy dữ liệu bằng GET, POST.
   * `GET /health` trả về trạng thái `{ "status": "ok" }`.
   * Sử dụng biến môi trường (PORT, DB_URL, APP_NAME).
* **Database (MongoDB):**
   * Lưu trữ dữ liệu thực (persist data với Docker Volume).

### 3. Use cases
- Người dùng truy cập trang chủ để theo dõi và xem danh sách các Item đã thêm.
- Người dùng điền Form thêm mới Item.
- Người dùng lấy thông tin cá nhân hiển thị qua giao diện (Route `/about`).
- Hệ thống kiểm tra sức khoẻ của ứng dụng qua `/health` point.

---

## Phần B: Minh chứng

**1. Repository & Image Container**
- **Link GitHub:** `[Chèn link Github Repo của bạn vào đây]`
- **Link Docker Hub:** `[Chèn link Dockerhub image vừa push của bạn vào đây]`

**2. Hình ảnh minh chứng**

> Hướng dẫn: Bạn tự chụp màn hình lại môi trường của bạn và thay thế các placeholder này nhé.

*   Ảnh lịch sử commit có tối thiểu 5 commit: `[Chèn ảnh lịch sử commit trên VSCode/Github]`
*   Ảnh Github chứng minh có 3 branch (main, develop, feature): `[Chèn ảnh tab nhánh trên Github]`
*   Ảnh Docker running (Containers up): `[Chèn ảnh Docker Desktop running]`
*   Ảnh trang `/about` hiển thị đúng thông tin: `[Chèn ảnh duyệt web]`
*   Ảnh kết quả gọi endpoint `/health`: `[Chèn ảnh Postman hoặc Browser gõ localhost:5000/health]`

**3. Checklist tự kiểm tra đã hoàn thành:**
- [x] Có commit history.
- [x] Có BE + FE + DB.
- [x] Có endpoint /about.
- [x] Có endpoint /health.
- [x] Có .env.
- [x] Có Dockerfile.
- [x] Có docker-compose.yml.
- [ ] Push Docker Hub (Bạn cần tự gõ dòng lệnh push theo hướng dẫn ở phần sau).

## Hướng Dẫn Nộp Bài (Push lên GitHub, Docker Hub)

### B1: Push source code này lên GitHub của bạn
1. Lên Website GitHub tạo một repo mới trống (ví dụ: `midterm-devops`).
2. Mở terminal, chạy lệnh sau:
   ```bash
   git remote add origin https://github.com/<tên-bạn>/<tên-repo>.git
   git push -u origin --all
   ```

### B2: Build & Push lên Docker Hub (Chỉ cần BE + FE)
Sau khi Đăng nhập tài khoản Desktop Docker:
1. **Frontend:**
   ```bash
   cd frontend
   docker build -t <tên-đăng-nhập-dockerhub-của-bạn>/frontend-app:v1 .
   docker push <tên-đăng-nhập-dockerhub-của-bạn>/frontend-app:v1
   cd ..
   ```
2. **Backend:**
   ```bash
   cd backend
   docker build -t <tên-đăng-nhập-dockerhub-của-bạn>/backend-app:v1 .
   docker push <tên-đăng-nhập-dockerhub-của-bạn>/backend-app:v1
   cd ..
   ```

### B3: Chạy ứng dụng để lấy ảnh minh chứng
Tại thư mục gốc, gõ:
```bash
docker-compose up -d --build
```
Vào `http://localhost/` để chụp màn hình frontend. Vào `http://localhost/about` chụp trang About sinh viên. Vào `http://localhost:5000/health` để chụp health API.
