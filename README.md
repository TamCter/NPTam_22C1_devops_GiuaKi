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

