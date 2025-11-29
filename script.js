function processImage() {
    const img = document.getElementById("imageInput").files[0];
    if (!img) {
        alert("Vui lòng chọn ảnh trước!");
        return;
    }

    document.getElementById("result").innerHTML =
        "<p>🔄 Đang xử lý ảnh bằng Gemini API...</p>";
}
