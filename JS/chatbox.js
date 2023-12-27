const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Kullanıcının mesajını saklamak için değişken
const API_KEY = "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"; // API anahtarını buraya yapıştırın
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Verilen mesaj ve sınıf adıyla bir sohbet <li> öğesi oluştur
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // sohbet <li> öğesini döndür
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // API isteği için özellikleri ve mesajı tanımla
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
        })
    }

    // API'ye POST isteği gönder, yanıtı al ve yanıtı paragraf metni olarak ayarla
    fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => {
            const responseContent = data.choices[0].message.content.trim();

            // Yanıtın sağlıkla ilgili anahtar kelimeler içerip içermediğini kontrol et
            if (isHealthRelated(responseContent)) {
                messageElement.textContent = responseContent;
            } else {
                messageElement.textContent = "Özür dilerim, yalnızca sağlık alanında bilgi sağlayabilirim.";
            }
        })
        .catch(() => {
            messageElement.classList.add("error");
            messageElement.textContent = "Oops! Bir şeyler yanlış gitti. Lütfen tekrar deneyin.";
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

// Yanıtın sağlıkla ilgili anahtar kelimeler içerip içermediğini kontrol etmek için fonksiyon
const isHealthRelated = (response) => {
    const healthKeywords = ["sağlık", "tıbbi", "beslenme", "egzersiz", "wellness","ilaç","ağrı","kırık,","hastalık","grip","virüs"];
    return healthKeywords.some(keyword => response.toLowerCase().includes(keyword));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Kullanıcının girdiği mesajı al ve ekstra boşlukları temizle
    if (!userMessage) return;

    // Girdi metin alanını temizle ve yüksekliğini varsayılana ayarla
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Kullanıcının mesajını sohbet kutusuna ekle
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Yanıtı beklerken "Düşünüyor..." mesajını göster
        const incomingChatLi = createChatLi("Bekleniyor...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // İçeriğine bağlı olarak giriş metin alanının yüksekliğini ayarla
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // Enter tuşuna basıldığında ve Shift tuşu basılı değilse ve pencere genişliği 800 pikselden büyükse sohbeti işle
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
