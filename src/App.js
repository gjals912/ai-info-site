import React, { useState } from 'react';

const data = [
  {
    id: 1,
    keyword: 'AI',
    title: 'AI 산업 정보 및 최신 동향',
    description: '인공지능 관련 산업 현황과 미래 전망',
    url: 'https://www.example.com/ai-news',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
  },
  {
    id: 2,
    keyword: '경쟁사',
    title: '주요 경쟁사 분석 보고서',
    description: '경쟁사들의 시장 점유율과 전략 분석',
    url: 'https://www.example.com/competitor-report',
    thumbnail: 'https://via.placeholder.com/320x180.png?text=Report+Image',
  },
  {
    id: 3,
    keyword: '시장동향',
    title: '최근 시장동향 정리',
    description: '최신 시장 동향과 주요 이슈 요약',
    url: 'https://www.example.com/market-trends',
    thumbnail: 'https://via.placeholder.com/320x180.png?text=Market+Trends',
  },
];

function App() {
  const [keyword, setKeyword] = useState('');
  const filtered = data.filter((item) =>
    item.keyword.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>맞춤 정보 수집 사이트</h1>

      <input
        type="text"
        placeholder="키워드를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={styles.input}
      />

      <div style={styles.cardList}>
        {keyword && filtered.length === 0 && (
          <p style={{ color: '#777' }}>관련 정보가 없습니다.</p>
        )}

        {filtered.map(({ id, title, description, url, thumbnail }) => (
          <a key={id} href={url} target="_blank" rel="noopener noreferrer" style={styles.card}>
            <img src={thumbnail} alt={title} style={styles.thumbnail} />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{title}</h3>
              <p style={styles.cardDesc}>{description}</p>
              <p style={styles.cardLink}>{url}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    margin: '40px auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '0 20px',
  },
  title: {
    textAlign: 'center',
    color: '#222',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: 18,
    borderRadius: 8,
    border: '1px solid #ddd',
    marginBottom: 30,
    boxSizing: 'border-box',
    outline: 'none',
  },
  cardList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
    gap: 20,
  },
  card: {
    display: 'block',
    borderRadius: 12,
    boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    color: '#333',
    overflow: 'hidden',
    backgroundColor: '#fff',
    transition: 'transform 0.15s ease-in-out',
  },
  cardContent: {
    padding: 15,
  },
  thumbnail: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    display: 'block',
  },
  cardTitle: {
    margin: '10px 0 6px',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 1.4,
  },
  cardLink: {
    marginTop: 10,
    fontSize: 12,
    color: '#999',
    wordBreak: 'break-all',
  },
};

export default App;
