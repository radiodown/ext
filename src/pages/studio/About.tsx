import { Link } from 'react-router-dom';

const VALUES = [
  { num: '01', label: 'SAFETY', title: '안전 제일', desc: '그 어떤 공기와 비용보다 사람의 안전을 우선합니다. 무사고는 결과가 아닌 과정입니다.' },
  { num: '02', label: 'QUALITY', title: '품질 약속', desc: '법정 기준은 최소한일 뿐. 자체 품질 기준은 항상 그보다 한 단계 높게 설정합니다.' },
  { num: '03', label: 'PARTNERSHIP', title: '동반 성장', desc: '고객, 협력사, 임직원 모두가 함께 성장하는 구조를 만들 때 비로소 지속 가능합니다.' },
];

const HISTORY = [
  {
    period: '2020 — Present',
    rows: [
      '반도체 클린룸 기계설비 누적 12개 라인 수행',
      'ESG 경영 선언 및 탄소중립 로드맵 수립 (2023)',
      '5년 연속 중대재해 0건 달성 (2024)',
    ],
  },
  {
    period: '2010 — 2019',
    rows: [
      '종합 소방시설공사업 면허 취득 (2011)',
      '부산·울산·인천 지사 설립',
      '연 매출 500억 돌파 (2018)',
    ],
  },
  {
    period: '2000 — 2009',
    rows: ['기계설비공사업 일반 면허 취득', '공공기관 등록 시공사 인증', 'ISO 9001 품질경영시스템 인증'],
  },
  {
    period: '1998',
    rows: ['조은설비공사 창립 (서울 강남)'],
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>ABOUT
          </div>
          <h1>회사소개</h1>
          <p>안전한 인프라가 만드는 더 나은 일상을 위해, 조은건설은 한 길을 걸어왔습니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bignum">
            <div className="bignum-display">27<em>YR</em></div>
            <div className="bignum-side">
              <span className="label">/ CEO MESSAGE</span>
              <h3>"눈에 보이지 않는 부분에<br />가장 큰 정성을 들입니다."</h3>
              <p>
                건축물의 진정한 가치는 화려한 외관이 아니라, 그 안에서 사람들의 일상과 산업을 묵묵히 지탱하는 설비에 있습니다.
                조은건설은 1998년 창립 이래 27년간 오직 기계설비공사와 소방시설공사 한 분야에만 집중해 왔습니다.
              </p>
              <p style={{ marginTop: 20, fontWeight: 600, color: 'var(--text)' }}>대표이사 김 조 은</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="values">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">OUR VALUES</span>
            <h2>매일 현장에서 지키는<br />세 가지 원칙.</h2>
          </div>
          <div className="editorial-body">
            {VALUES.map((v) => (
              <div key={v.num} className="editorial-row" style={{ gridTemplateColumns: '120px 1fr' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.06em' }}>
                    / {v.num} {v.label}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.035em', marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="history">
        <div className="container">
          <div className="editorial">
            <div className="editorial-lead">
              <span className="eyebrow">/ HISTORY</span>
              <h2>27년의<br />발자취.</h2>
              <p>작은 기계설비 시공팀에서 종합 시공사로 — 조은건설의 이정표들입니다.</p>
            </div>
            <div className="editorial-body">
              {HISTORY.map((h, i) => (
                <div key={i} className="editorial-row" style={{ gridTemplateColumns: '160px 1fr' }}>
                  <span className="idx" style={{ fontSize: 13, color: 'var(--accent)' }}>{h.period}</span>
                  <div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {h.rows.map((r) => (
                        <li key={r} style={{ fontSize: 15, color: 'var(--text-muted)', paddingLeft: 16, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--text-subtle)' }}>·</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">CERTIFICATIONS</span>
            <h2>인증 &amp; 면허.</h2>
          </div>
          <div className="grid-4">
            {[
              { i: 'M', t: '기계설비공사업', d: '종합건설업 등록' },
              { i: 'F', t: '소방시설공사업', d: '종합 면허 보유' },
              { i: 'Q', t: 'ISO 9001', d: '품질경영시스템' },
              { i: 'S', t: 'ISO 45001', d: '안전보건경영시스템' },
            ].map((c) => (
              <div key={c.t} className="card">
                <div className="card-icon">{c.i}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>함께하실 분을<br />찾습니다.</h2>
          <p>안전한 미래를 함께 만들어 갈 인재를 기다립니다.</p>
          <a href="#" className="btn btn-primary">채용공고 보기 →</a>
        </div>
      </section>
    </>
  );
}
