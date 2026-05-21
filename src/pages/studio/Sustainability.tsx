import { Link } from 'react-router-dom';

const BIG_STATS = [
  {
    num: '-32%',
    label: '/ ENVIRONMENT',
    title: '온실가스 감축',
    desc: '2020년 대비 2024년 사업장 배출량 32% 감축. 2030년까지 Scope 1+2 50% 감축 목표를 향해 진행 중.',
  },
  {
    num: '100%',
    label: '/ RENEWABLE',
    title: '재생에너지 전환',
    desc: '2025년까지 전 사업장 재생에너지 전력 사용 달성. 사옥 옥상 태양광 설치 및 RE100 인증 추진.',
  },
  {
    num: '0',
    label: '/ SAFETY',
    title: '5년 연속 중대재해 0건',
    desc: '전 현장 안전관리자 상주, 일일 위험성 평가, 작업 전 TBM 의무화. 협력사까지 포함한 통합 안전관리 체계 운영.',
  },
];

export default function Sustainability() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>SUSTAINABILITY
          </div>
          <h1>지속가능경영.</h1>
          <p>안전한 현장에서, 건강한 조직으로, 책임 있는 경영으로 — 세대를 이어 신뢰받는 회사가 되겠습니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {BIG_STATS.map((s) => (
            <div key={s.num} className="bigstat">
              <div className="bigstat-num">{s.num}</div>
              <div className="bigstat-desc">
                <span className="label">{s.label}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">ESG FRAMEWORK</span>
            <h2>세 가지 축으로<br />지속가능한 미래를.</h2>
          </div>

          <div className="esg-bento">
            <div className="esg-card feature">
              <div className="big-letter">E</div>
              <h3>Environment</h3>
              <p>현장에서 배출되는 모든 것을 측정하고, 줄이고, 책임집니다. 2030 Scope 1+2 50% 감축, 친환경 자재 우선 구매, 저탄소 운송 전환을 통해 탄소중립 로드맵을 실행합니다.</p>
            </div>
            <div className="esg-card small">
              <h4>/ TARGET</h4>
              <div className="num">50<span style={{ fontSize: 22 }}>%</span></div>
              <p>2030 Scope 1+2 감축 목표</p>
            </div>
            <div className="esg-card small">
              <h4>/ FLEET</h4>
              <div className="num">EV<span style={{ fontSize: 22 }}>+</span></div>
              <p>저탄소 운송 전환</p>
            </div>

            <div className="esg-card med">
              <h4 style={{ marginBottom: 12 }}>/ SOCIAL</h4>
              <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 8 }}>임직원·협력사·지역</h3>
              <ul>
                <li>안전교육 연 40시간+</li>
                <li>협력사 무상 컨설팅</li>
                <li>여성 관리자 25%</li>
                <li>산학협력 프로그램</li>
              </ul>
            </div>

            <div className="esg-card med">
              <h4 style={{ marginBottom: 12 }}>/ GOVERNANCE</h4>
              <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 8 }}>투명한 의사결정</h3>
              <ul>
                <li>이사회 ESG위원회</li>
                <li>외부 감사인 교체</li>
                <li>윤리경영 신고채널</li>
                <li>연간 보고서 발간</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">SAFETY FIRST</span>
            <h2>모두가 안전하게<br />퇴근하는 것.</h2>
          </div>
          <div className="grid-3">
            {[
              { i: '安', t: '현장 안전관리', d: '전 현장 안전관리자 상주, 일일 위험성 평가, 작업 전 TBM 의무화.' },
              { i: '教', t: '안전교육 강화', d: '법정 교육 외 자체 시뮬레이션 체험형 교육 운영. 협력사 함께 참여.' },
              { i: '健', t: '임직원 건강', d: '연 1회 종합검진 전액 지원, 정신건강 상담 프로그램 운영.' },
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">REPORTS</span>
            <h2>매년 투명하게<br />공개합니다.</h2>
          </div>
          <div className="grid-3">
            {[
              { y: "'24", t: '2024 지속가능경영보고서', d: '탄소중립 로드맵 갱신, 협력사 동반성장 성과 포함.' },
              { y: "'23", t: '2023 지속가능경영보고서', d: 'ESG 경영 선언 및 첫 통합 성과 발표.' },
              { y: "'22", t: '2022 환경·안전 보고서', d: '온실가스 인벤토리 구축 및 안전사고 분석.' },
            ].map((r) => (
              <div key={r.y} className="card">
                <div className="card-icon">{r.y}</div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
                <p style={{ marginTop: 16 }}>
                  <a href="#" style={{ color: 'var(--accent)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    PDF DOWNLOAD →
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
