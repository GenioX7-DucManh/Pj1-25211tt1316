document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Logic Thay đổi ảnh sản phẩm khi bấm vào các nút màu sắc
    const colorButtons = document.querySelectorAll(".color-btn");
    const mainProductImage = document.getElementById("main-prod-img");

    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Lấy đường dẫn ảnh từ thuộc tính data-img
            const newImgUrl = this.getAttribute("data-img");
            
            if (newImgUrl && mainProductImage) {
                mainProductImage.src = newImgUrl;
            }

            // Xóa viền đen chủ thể của các nút khác
            colorButtons.forEach(btn => btn.classList.remove("border-2", "border-black"));
            
            // Thêm viền đen làm nổi bật nút vừa chọn
            this.classList.add("border-2", "border-black");
        });
    });

    // 2. Tùy chọn thêm: Hiệu ứng chọn Size quần áo
    const sizeButtons = document.querySelectorAll(".size-btn");
    sizeButtons.forEach(button => {
        button.addEventListener("click", function () {
            sizeButtons.forEach(btn => {
                btn.classList.remove("bg-black", "text-white");
            });
            this.classList.add("bg-black", "text-white");
        });
    });

});
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Thay đổi ảnh sản phẩm khi chọn màu
    const colorButtons = document.querySelectorAll(".color-btn");
    const mainProductImage = document.getElementById("main-prod-img");

    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            const newImgUrl = this.getAttribute("data-img");
            if (newImgUrl && mainProductImage) {
                mainProductImage.src = newImgUrl;
            }
            colorButtons.forEach(btn => btn.classList.remove("border-2", "border-black"));
            this.classList.add("border-2", "border-black");
        });
    });

    // 2. Thay đổi trạng thái active khi chọn Size
    const sizeButtons = document.querySelectorAll(".size-btn");
    sizeButtons.forEach(button => {
        button.addEventListener("click", function () {
            sizeButtons.forEach(btn => btn.classList.remove("bg-black", "text-white"));
            this.classList.add("bg-black", "text-white");
        });
    });

});