from flask import Flask, jsonify

app = Flask(__name__)

# 미리 만들어 놓은 뉴스 리스트
news_list = [
    {
        "title": "AI 혁신, 산업 전반에 영향",
        "description": "최근 AI 기술 발전이 산업 전반에 걸쳐 큰 변화를 불러일으키고 있습니다.",
        "link": "https://news.example.com/ai-innovation"
    },
    {
        "title": "차세대 AI 기술 동향",
        "description": "차세대 AI 연구와 개발 동향을 살펴봅니다.",
        "link": "https://news.example.com/ai-trends"
    },
    # 필요하면 더 추가 가능
]

@app.route("/api/news", methods=["GET"])
def get_news():
    return jsonify(news_list)

if __name__ == "__main__":
    app.run(debug=True)
