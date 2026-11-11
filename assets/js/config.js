const CONFIG = {
    // Cả Auth và CDE đều chạy chung một cổng duy nhất sau khi gộp file server.js
    AUTH_API: isLocal ? 'https://api.pvincons.com/api/auth',
    CDE_API: isLocal ? 'https://api.pvincons.com/api'
};
