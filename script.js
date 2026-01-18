// ==========================================
// 1. VIEW COUNTER - BỘ ĐẾM LƯỢT XEM CỐ ĐỊNH
// ==========================================
const counterElement = document.getElementById('visit-count');
const STORAGE_KEY = 'hvlong_portfolio_view_count';

function initializeViewCounter() {
    // Lấy số lượt view từ localStorage
    let viewCount = localStorage.getItem(STORAGE_KEY);
    
    // Nếu chưa có, khởi tạo từ 234
    if (!viewCount) {
        viewCount = 234;
        localStorage.setItem(STORAGE_KEY, viewCount);
    } else {
        // Tăng lên 1 mỗi khi có người truy cập
        viewCount = parseInt(viewCount) + 1;
        localStorage.setItem(STORAGE_KEY, viewCount);
    }
    
    // Hiển thị với định dạng số (1,234)
    counterElement.innerText = parseInt(viewCount).toLocaleString();
}

// Khởi tạo bộ đếm khi trang load
document.addEventListener('DOMContentLoaded', initializeViewCounter);

// ==========================================
// 2. AVATAR FLIP 3D LOGIC
// ==========================================
const avatarContainer = document.getElementById('avatarContainer');
let avatarTimer = null;

function toggleAvatar() {
    const isFlipped = avatarContainer.classList.contains('flipped');
    
    if (isFlipped) {
        // Nếu đang lật (đang ở mặt sau), lật lại ngay lập tức
        avatarContainer.classList.remove('flipped');
        if (avatarTimer) clearTimeout(avatarTimer);
    } else {
        // Nếu chưa lật (ở mặt trước), lật sang mặt sau
        avatarContainer.classList.add('flipped');
        
        // Đặt timer 8 giây để tự động lật lại
        if (avatarTimer) clearTimeout(avatarTimer);
        avatarTimer = setTimeout(() => {
            avatarContainer.classList.remove('flipped');
        }, 8000); // 8000ms = 8s
    }
}

// ==========================================
// 3. DỮ LIỆU DỰ ÁN & HOẠT ĐỘNG
// ==========================================
const data = {
    'snack': {
        category: 'project',
        title: 'Snack Sales Fullstack',
        images: ['./images/image copy.png', 'https://images.unsplash.com/photo-1599599810694-b5b37304c041', 'https://images.unsplash.com/photo-1542838132-92c53300491e'],
        desc: 'Website bán đồ ăn vặt bằng Java Spring Boot. Hệ thống hoàn chỉnh cho phép người dùng đặt hàng và admin quản lý.',
        tech: ['Java 17', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Hibernate'],
        features: ['Đăng nhập/Đăng ký phân quyền.', 'Giỏ hàng, thanh toán COD.', 'Admin Dashboard thống kê.'],
        result: 'Triển khai thành công trên Heroku.',
        link: 'https://github.com/HvLonggg/Snack-Sales-Web'
    },
    'huyhoang': {
        category: 'project',
        title: 'Hệ thống Du học Huy Hoàng',
        images: ['./images/Home_DuhocTaiWan.jpg', './images/Page_DuhocTaiWan.jpg', './images/Page2_DuhocTaiWan.jpg', './images/Page3_DuhocTaiWan.jpg'],
        desc: 'CRM quản lý hồ sơ du học: tìm kiếm, export báo cáo, quản lý trạng thái hồ sơ.',
        tech: ['SQL Server', 'ReactJS', 'Spring Boot'],
        features: ['Quản lý hồ sơ du học sinh.', 'Export PDF/Excel tự động.', 'Elasticsearch Search.'],
        result: 'Giảm 30% thời gian xử lý hồ sơ.',
        link: 'https://github.com/HvLonggg/HuyHoang-Edu-System'
    },
    'ai-vision': {
        category: 'project',
        title: 'AI Vision OCR',
        images: ['./images/Computer vision.jpg', './images/Computer vision1.jpg', './images/Computer vision2.jpg'],
        desc: 'Hệ thống trích xuất thông tin thẻ sinh viên bằng Deep Learning & OpenCV.',
        tech: ['Python', 'OpenCV', 'Tesseract OCR', 'Flask'],
        features: ['Nhận diện vùng văn bản.', 'OCR tiếng Việt chính xác.', 'API trích xuất JSON.'],
        result: 'Độ chính xác >90% với thẻ EAUT.',
        link: 'https://github.com/HvLonggg/Student-Card-OCR'
    },
    'quiz': {
        category: 'project',
        title: 'Android Quiz App',
        images: ['./images/imgAndroid1.jpg', './images/imgAndroid2.jpg', './images/imgAndroid3.jpg', './images/imgAndroid4.jpg'],
        desc: 'Dự án ứng dụng thi trắc nghiệm trên nền tảng Android, giúp người dùng ôn tập kiến thức qua các bộ câu hỏi đa dạng.',
        tech: ['Java', 'Android Studio', 'SQLite'],
        features: ['Giao diện thân thiện, dễ sử dụng.', 'Ngân hàng câu hỏi phong phú.', 'Tính năng chấm điểm và xem lại lịch sử.'],
        result: 'Hoàn thiện ứng dụng chạy mượt mà trên các thiết bị Android.',
        link: 'https://github.com/HvLonggg/QuizApp-master'
    },
    'apartment': {
        category: 'project',
        title: 'Apartment Management Software',
        images: ['./images/imgApartment1.png', './images/imgApartment2.png', './images/imgApartment3.png'],
        desc: 'Phần mềm quản lý chung cư toàn diện, hỗ trợ ban quản lý theo dõi cư dân, căn hộ và các khoản phí dịch vụ.',
        tech: ['Java Swing', 'JDBC', 'MySQL'],
        features: ['Quản lý thông tin cư dân và căn hộ.', 'Tính toán và quản lý thu phí dịch vụ.', 'Thống kê báo cáo doanh thu.'],
        result: 'Giải quyết tốt bài toán quản lý thủ công, tối ưu hóa quy trình vận hành.',
        link: 'https://github.com/HvLonggg/Apartment-management-software'
    },
    'smartstudent': {
        category: 'project',
        title: 'Smart Student Scan',
        images: ['./images/imgSmartStudent4.jpg', './images/imgSmartStudent1.jpg', './images/imgSmartStudent3.jpg', './images/imgSmartStudent4.jpg'],
        desc: 'Hệ thống điểm danh thông minh sử dụng công nghệ nhận diện khuôn mặt, giúp tự động hóa quy trình điểm danh tại trường học.',
        tech: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Face-API.js', 'NodeJS'],
        features: ['Nhận diện khuôn mặt thời gian thực.', 'Tự động ghi nhận trạng thái điểm danh.', 'Báo cáo thống kê vắng/có mặt.'],
        result: 'Giao diện hiện đại, tốc độ nhận diện nhanh, giảm thiểu gian lận trong thi cử/điểm danh.',
        link: 'https://github.com/HvLonggg/smart-student-scan'
    },
    'thpt': {
        category: 'timeline',
        title: 'Quá trình rèn luyện tại THPT Kim Xuyên',
        images: ['./images/THPT KIM XUYEN.jpg', './images/THPT KIM XUYEN2.jpg', './images/THPT KIM XUYEN3.jpg', './images/THPT KIM XUYEN4.jpg'],
        desc: 'Là học sinh năng động, tích cực tham gia các hoạt động phong trào của trường và lớp. Luôn có ý thức rèn luyện đạo đức, chấp hành tốt nội quy, giữ tinh thần học tập nghiêm túc và chủ động hoàn thiện bản thân.',
        tech: ['Kết quả học đạt mức : Khá/giỏi.', 'Hạnh kiểm Tốt 3 năm liên.'],
        features: ['Tích cực tham gia các hoạt động văn nghệ, thể thao, hoạt động ngoại khóa, xã hội.'],
        result: 'Hình thành nền tảng vững chắc về kỷ luật và kỹ năng mềm.',
        link: null
    },
    'eaut': {
        category: 'timeline',
        title: 'Học tập rèn luyện tại Đại học Công nghệ Đông Á',
        images: ['./images/imgCNDA.jpg', './images/imgCNDA1.jpg'],
        desc: 'Là sinh viên chuyên ngành Công nghệ Thông tin, luôn nghiêm túc trong học tập, rèn luyện ý thức kỷ luật tốt và chấp hành nội quy nhà trường. Bên cạnh đó, tôi là sinh viên năng động, tích cực tham gia tổ chức các hoạt động, sự kiện của trường và khoa, đồng thời năng nổ tham gia các cuộc thi nghiên cứu khoa học và đạt được thành tích tốt, qua đó nâng cao tinh thần trách nhiệm, kỹ năng làm việc nhóm và tư duy nghiên cứu.',
        tech: ['GPA Tích lũy: 3.0/4.0.', 'Điểm rèn luyện: tốt/xuất sắc', 'Bí thư chi đoàn lớp hành chính/Đoàn trường ', 'Thành viên CLB Lập trình.', 'Thành viên CLB kỹ năng mềm', 'Thành viên CLB Hướng nghiệp hợp tác doanh nghiệp.'],
        features: ['Đoàn viên có thành tích rèn luyện tốt năm học 2023-2024', 'Tham gia nghiên cứu khoa học và đạt giải(SV.Starup, VietFuture, Smart data challenge 2025)'],
        result: 'Hoàn thiện nền tảng kiến thức chuyên ngành với kết quả học tập và điểm rèn luyện tốt, tích cực tham gia các hoạt động và cuộc thi đạt thành tích cao, sẵn sàng tốt nghiệp và định hướng phát triển theo chuyên ngành Backend Web.',
        link: null
    },
    'intern_huyhoang': {
        category: 'timeline',
        title: 'Thực tập sinh Web & Data - Huy Hoàng',
        images: ['./images/Home_DuhocTaiWan.jpg', './images/Page_DuhocTaiWan.jpg', './images/Page2_DuhocTaiWan.jpg', './images/Page3_DuhocTaiWan.jpg'],
        desc: 'Thực tập sinh tại Công ty Du học Huy Hoàng. Chịu trách nhiệm phát triển giao diện Website và quản lý hệ thống cơ sở dữ liệu học viên.',
        tech: ['Tech Stack: ReactJS, HTML5, CSS3, JavaScript, TypeScript, NodeJS.', 'Database & Tools: SQL Server, Draw.io.'],
        features: ['Thiết kế giao diện Website với các yếu tố 3D Interactive.', 'Phân tích yêu cầu sản phẩm & Thiết kế cấu trúc CSDL.', 'Quản lý, bảo trì và bảo mật dữ liệu người dùng (Học viên).'],
        result: 'Áp dụng thành công kiến thức Fullstack vào dự án thực tế, tối ưu hóa quy trình quản lý dữ liệu.',
        link: null
    },
    'doanhoi': {
        category: 'timeline',
        title: 'Đại hội Đoàn Toàn quốc',
        images: ['./images/imgDHDBTQ.jpg', './images/imgDHDBTQ(1).jpg', './images/imgDHDBTQ2.jpg'],
        desc: 'Vinh dự là đại biểu sinh viên tham dự đại hội, giao lưu và học hỏi từ các tấm gương thanh niên tiêu biểu.',
        tech: ['Giao lưu, networking.'],
        features: ['Đóng góp ý kiến về chuyển đổi số.'],
        result: 'Mở rộng mối quan hệ và tầm nhìn.',
        link: null
    },
    'pccc': {
        category: 'timeline',
        title: 'Học tập trải nghiệm PCCC',
        images: ['./images/imgSkPCCC.jpg', './images/imgSkPCCC1.jpg', './images/imgSkPCCC2.jpg'],
        desc: 'Tham gia buổi học trải nghiệm phòng cháy chữa cháy tại Cục cảnh sát PCCC & CNCH, nắm vững kỹ năng an toàn cơ bản.',
        tech: ['Phòng cháy cơ bản.', 'Cứu sơ cấp người bị ngạt khí độc.', 'Sử dụng bình chữa cháy.'],
        features: ['Thực hành chữa cháy.', 'Kỹ năng thoát hiểm an toàn.'],
        result: 'Nâng cao ý thức an toàn và kỹ năng xử lý tình huống khẩn cấp.',
        link: null
    },
    'hoicho': {
        category: 'timeline',
        title: 'Tình nguyện viên hỗ trợ Hội Chợ Xuân Chùa Định Quán 2025',
        images: ['./images/imgSkHoicho.jpg', './images/imgSkHoicho1.jpg', './images/imgSkHoicho2.jpg'],
        desc: 'Tham gia hỗ trợ công tác tổ chức Hội Chợ Xuân Chùa Định Quán 2025, góp phần chuẩn bị không gian, trưng bày các hoạt động mang bản sắc văn hóa và hỗ trợ các hoạt động cộng đồng trong khuôn khổ sự kiện.',
        tech: ['Kỹ năng tổ chức và hỗ trợ sự kiện', 'Kỹ năng giao tiếp và làm việc nhóm'],
        features: ['Hỗ trợ công tác chuẩn bị, điều phối và hướng dẫn người tham gia', 'Tham gia các hoạt động văn hóa và sinh hoạt cộng đồng'],
        result: 'Nâng cao tinh thần trách nhiệm, ý thức cộng đồng và kỹ năng tổ chức sự kiện thực tế.',
        link: null
    },
    'cuocthi': {
        category: 'timeline',
        title: 'Tham gia cuộc thi nghiên cứu khoa học "VietFuture"',
        images: ['./images/imgCNDA1.jpg'],
        desc: 'Tham gia cuộc thi nghiên cứu khoa học VietFuture với vai trò xây dựng ý tưởng, nghiên cứu giải pháp và phát triển sản phẩm theo định hướng đổi mới sáng tạo, ứng dụng công nghệ vào giải quyết các bài toán thực tiễn.',
        tech: ['Nghiên cứu và phân tích vấn đề', 'Ứng dụng công nghệ giải quyết vấn đề nhức nhối', 'Kỹ năng thuyết trình và trình bày dự án'],
        features: ['Xây dựng ý tưởng và đề tài nghiên cứu', 'Phát triển sản phẩm và trình bày kết quả trước hội đồng'],
        result: 'Lọt vào vòng trung kết, dự án đạt Top 4 về tính ứng dụng và đổi mới sáng tạo.',
        link: null
    }
};

// ==========================================
// 4. TAB SWITCHING
// ==========================================
function switchTab(tabId) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    
    const btns = document.querySelectorAll('.tab-btn');
    if (tabId === 'projects') btns[0].classList.add('active');
    if (tabId === 'skills') btns[1].classList.add('active');
    if (tabId === 'journey') btns[2].classList.add('active');
}

// ==========================================
// 5. TOGGLE PROJECTS (XEM THÊM/THU GỌN)
// ==========================================
function toggleProjects() {
    const extraSection = document.getElementById('extra-projects');
    const btn = document.getElementById('toggleBtn');
    extraSection.classList.toggle('open');
    btn.classList.toggle('active');
    btn.innerHTML = extraSection.classList.contains('open') 
        ? `Thu gọn <i class="fas fa-chevron-down"></i>` 
        : `Xem thêm dự án <i class="fas fa-chevron-down"></i>`;
}

// ==========================================
// 6. INFINITE SLIDER
// ==========================================
const track = document.getElementById('track');
const originalItems = Array.from(track.children);

// Clone các item để tạo hiệu ứng vòng lặp vô tận
originalItems.forEach(item => {
    track.appendChild(item.cloneNode(true));
});

let scrollPos = 0;
let baseSpeed = 0.8;
const maxSpeed = 15.0;
let targetVelocity = -baseSpeed;
let currentVelocity = -baseSpeed;

function animateSlider() {
    currentVelocity += (targetVelocity - currentVelocity) * 0.05;
    scrollPos += currentVelocity;

    const itemWidth = 380;
    const totalWidth = itemWidth * originalItems.length;

    if (scrollPos <= -totalWidth) {
        scrollPos += totalWidth;
    } else if (scrollPos > 0) {
        scrollPos -= totalWidth;
    }

    track.style.transform = `translateX(${scrollPos}px)`;

    if (Math.abs(targetVelocity) > baseSpeed) {
        if (targetVelocity > 0) {
            targetVelocity -= 0.2;
            if (targetVelocity < -baseSpeed) targetVelocity = -baseSpeed;
        } else {
            targetVelocity += 0.2;
            if (targetVelocity > -baseSpeed) targetVelocity = -baseSpeed;
        }
    } else {
        targetVelocity = -baseSpeed;
    }
    
    requestAnimationFrame(animateSlider);
}

function boostSpeed(direction) {
    targetVelocity = direction * maxSpeed;
}

requestAnimationFrame(animateSlider);

// ==========================================
// 7. MODAL LOGIC
// ==========================================
const modal = document.getElementById('detailModal');
const mainImg = document.getElementById('m-img');
const galleryDiv = document.getElementById('m-gallery');
const modalImgWrap = document.getElementById('modalImgWrap');

const hTech = document.getElementById('header-tech');
const hFeatures = document.getElementById('header-features');
const hResult = document.getElementById('header-result');

function openModal(key) {
    const item = data[key];
    if (!item) return;
    
    document.getElementById('m-title').innerText = item.title;
    document.getElementById('m-desc').innerHTML = item.desc;

    // Điều chỉnh tiêu đề dựa trên loại
    if (item.category === 'timeline') {
        hTech.innerText = "Giới thiệu & Rèn luyện";
        hFeatures.innerText = "Thành tích nổi bật";
        hResult.innerText = "Hoạt động & Kết quả";
    } else {
        hTech.innerText = "Công nghệ";
        hFeatures.innerText = "Tính năng nổi bật";
        hResult.innerText = "Kết quả";
    }

    // Xử lý hình ảnh
    if (item.images && item.images.length > 0) {
        mainImg.src = item.images[0];
        galleryDiv.innerHTML = '';
        item.images.forEach((imgUrl, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgUrl;
            thumb.className = 'gallery-thumb';
            if (index === 0) thumb.classList.add('active');
            thumb.onclick = function() {
                mainImg.src = imgUrl;
                document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };
            thumb.onerror = function() { this.src = 'https://via.placeholder.com/100?text=IMG'; };
            galleryDiv.appendChild(thumb);
        });
    } else {
        mainImg.src = item.img || '';
        galleryDiv.innerHTML = '';
    }

    // Công nghệ
    const techDiv = document.getElementById('m-tech');
    techDiv.innerHTML = '';
    if (item.tech) {
        item.tech.forEach(t => {
            const tag = document.createElement('span');
            if (item.category === 'timeline') {
                tag.style.display = 'block';
                tag.style.marginBottom = '5px';
                tag.style.fontSize = '0.95rem';
                tag.style.color = '#ccc';
                tag.innerHTML = `<i class="fas fa-check" style="color:#8b5cf6; margin-right:8px;"></i> ${t}`;
            } else {
                tag.className = 'tech-tag';
                tag.innerText = t;
            }
            techDiv.appendChild(tag);
        });
    }

    // Tính năng
    const featuresUl = document.getElementById('m-features');
    featuresUl.innerHTML = '';
    if (item.features) {
        item.features.forEach(f => {
            const li = document.createElement('li');
            li.innerText = f;
            featuresUl.appendChild(li);
        });
    }

    // Kết quả
    document.getElementById('m-result').innerText = item.result || '';

    // Link Github
    const extra = document.getElementById('m-extra');
    extra.innerHTML = '';
    if (item.category !== 'timeline' && item.link) {
        extra.innerHTML = `<a href="${item.link}" target="_blank" class="btn btn-primary" style="width:100%; justify-content:center;"><i class="fab fa-github"></i> Xem Code Github</a>`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// ==========================================
// 8. FULLSCREEN IMAGE
// ==========================================
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const fullscreenImg = document.getElementById('fullscreenImg');

function openFullscreen() {
    fullscreenImg.src = mainImg.src;
    fullscreenOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    fullscreenOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Đóng fullscreen khi click vào overlay
fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay || e.target === fullscreenImg) {
        closeFullscreen();
    }
});

// Đóng fullscreen khi nhấn ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
        closeFullscreen();
    }
});

// ==========================================
// 9. CONTACT FORM - GỬI EMAIL TRỰC TIẾP
// ==========================================
function sendMessage() {
    const name = document.getElementById('c-name').value;
    const email = document.getElementById('c-email').value;
    const msg = document.getElementById('c-msg').value;

    if (name && email && msg) {
        // Tạo nội dung email
        const subject = encodeURIComponent(`Liên hệ từ ${name} - Portfolio`);
        const body = encodeURIComponent(
            `Họ tên: ${name}\n` +
            `Email: ${email}\n` +
            `\nNội dung:\n${msg}\n\n` +
            `---\n` +
            `Tin nhắn này được gửi từ Portfolio Website`
        );
        
        // Mở email client với nội dung đã điền sẵn
        window.location.href = `mailto:hvlongg@gmail.com?subject=${subject}&body=${body}`;
        
        // Hiển thị toast thông báo
        const toast = document.getElementById('toast');
        toast.querySelector('span').innerText = 'Đang mở ứng dụng email...';
        toast.classList.add('show');
        
        // Xóa form sau 1 giây
        setTimeout(() => {
            document.getElementById('c-name').value = '';
            document.getElementById('c-email').value = '';
            document.getElementById('c-msg').value = '';
            toast.classList.remove('show');
            // Reset lại text toast
            setTimeout(() => {
                toast.querySelector('span').innerText = 'Tin nhắn đã gửi thành công!';
            }, 500);
        }, 1000);
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

// ==========================================
// 10. INTERSECTION OBSERVER
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-reveal').forEach(el => observer.observe(el));

// Contact cards animation
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.contact-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            });
            contactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const contactGrid = document.getElementById('contactGrid');
if (contactGrid) {
    contactObserver.observe(contactGrid);
}