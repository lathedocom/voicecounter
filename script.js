// --- Xử lý Đa Ngôn Ngữ (Kế thừa cấu trúc từ LalaMuzic) ---
const translations = {
    "vi": {
        "slogan": "Hoàn thiện phát âm, tự tin giao tiếp",
        "hero_desc": "Ứng dụng luyện phát âm thông minh sử dụng AI ngoại tuyến (Zipformer & CREPE) để chấm điểm chi tiết và tự động đếm số lần luyện tập của bạn.",
        "download": "Tải trên Google Play",
        
        "box1_title": "Đánh giá Phát âm bằng AI Offline",
        "box1_desc": "Xử lý giọng nói siêu tốc ngay trên thiết bị mà không cần kết nối Internet, đảm bảo quyền riêng tư tuyệt đối.",
        "icon_filter": "Mô hình Zipformer: Bóc tách và nhận diện chính xác từng âm vị (Phoneme).",
        "icon_speed": "CREPE Pitch Tracking: Đo lường đường cao độ để chấm điểm thanh điệu (Tone) tiếng Trung.",
        
        "box2_title": "Phân tích chi tiết & Đếm thông minh",
        "box2_desc": "Không chỉ báo đúng/sai, ứng dụng chỉ ra chính xác lỗi phát âm của bạn ở đâu để khắc phục.",
        "icon_ab": "Đối chiếu Pinyin/IPA để phát hiện lỗi thanh mẫu, vận mẫu.",
        "icon_fsrs": "Tự động đếm số lần đọc đúng, giúp bạn dễ dàng theo dõi tiến độ luyện tập.",
        
        "free_title": "Bắt đầu hành trình luyện giọng ngay hôm nay",
        "free_desc": "Cải thiện kỹ năng phát âm của bạn mỗi ngày với trợ lý AI ngay trong túi.",
        "download_cta": "Tải trên Google Play",
        
        "policy": "Chính sách bảo mật",
        "terms": "Điều khoản sử dụng",
        "licenses": "Mã nguồn mở"
    },
    "en": {
        "slogan": "Perfect your pronunciation, speak with confidence",
        "hero_desc": "A smart pronunciation app using offline AI (Zipformer & CREPE) for detailed assessment and automatic rep counting.",
        "download": "Get it on Google Play",
        
        "box1_title": "Offline AI Pronunciation Assessment",
        "box1_desc": "Lightning-fast voice processing right on your device without an Internet connection, ensuring absolute privacy.",
        "icon_filter": "Zipformer Model: Accurately isolates and recognizes every phoneme.",
        "icon_speed": "CREPE Pitch Tracking: Measures pitch contours for precise Chinese tone grading.",
        
        "box2_title": "Detailed Analysis & Smart Counting",
        "box2_desc": "Beyond just right/wrong, the app pinpoints exactly where your pronunciation went wrong so you can fix it.",
        "icon_ab": "Pinyin/IPA matching to detect initial and final phoneme errors.",
        "icon_fsrs": "Automatically counts correct repetitions, helping you track your progress effortlessly.",
        
        "free_title": "Start your vocal training journey today",
        "free_desc": "Improve your pronunciation skills every day with an AI assistant right in your pocket.",
        "download_cta": "Get it on Google Play",
        
        "policy": "Privacy Policy",
        "terms": "Terms of Use",
        "licenses": "Open Source Licenses"
    }
};

let currentLang = "vi";

function toggleLanguage() {
    currentLang = currentLang === "vi" ? "en" : "vi";
    
    // Đổi Text[cite: 2]
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
    
    // Đổi link Footer[cite: 2]
    document.getElementById("link-policy").href = currentLang === "vi" ? "policy_vi.html" : "policy_en.html";
    document.getElementById("link-terms").href = currentLang === "vi" ? "terms_vi.html" : "terms_en.html";
    document.getElementById("link-licenses").href = currentLang === "vi" ? "licenses_vi.html" : "licenses_en.html";
    
    // Đổi nút Toggle[cite: 2]
    document.getElementById("langToggle").innerText = currentLang === "vi" ? "VI / EN" : "EN / VI";
}
