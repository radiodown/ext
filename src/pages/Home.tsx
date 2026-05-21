import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">SINCE 1998 · MECHANICAL &amp; FIRE PROTECTION</div>
          <h1>
            안전을 설계하고
            <br />
            신뢰로 짓는 사람들.
          </h1>
          <p>조은건설은 25년 이상의 기계설비 및 소방시설 시공 경험을 바탕으로 산업·공공·민간 영역에 가장 안전한 인프라를 제공합니다.</p>
          <div className="hero-actions">
            <Link to="/business" className="btn btn-primary">사업분야 보기 →</Link>
            <Link to="/support" className="btn btn-outline">사업 문의</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ padding: 0 }}>
        <div className="container">
          <div className="stats">
            <div className="stat"><div className="stat-num">27<span className="unit">년</span></div><div className="stat-label">전문 시공 경력</div></div>
            <div className="stat"><div className="stat-num">480<span className="unit">+</span></div><div className="stat-label">누적 프로젝트</div></div>
            <div className="stat"><div className="stat-num">99.7<span className="unit">%</span></div><div className="stat-label">소방 검사 합격률</div></div>
            <div className="stat"><div className="stat-num">0<span className="unit">건</span></div><div className="stat-label">중대재해 (5년 연속)</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">CORE BUSINESS</span>
            <h2>핵심 사업영역</h2>
            <p>기계설비와 소방시설은 건축물의 보이지 않는 뼈대입니다. 조은건설은 설계부터 시공, 유지관리까지 단일 책임 체계로 서비스합니다.</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">機</div>
              <h3>기계설비공사</h3>
              <p>공조·냉난방, 위생배관, 산업플랜트 배관 등 건축물의 핵심 기계시스템을 시공합니다.</p>
            </div>
            <div className="card">
              <div className="card-icon">消</div>
              <h3>소방시설공사</h3>
              <p>스프링클러, 옥내·옥외 소화전, 제연설비 등 화재안전을 위한 전 영역을 책임집니다.</p>
            </div>
            <div className="card">
              <div className="card-icon">維</div>
              <h3>유지관리 &amp; 점검</h3>
              <p>법정점검과 정기 유지보수를 통해 시공 이후에도 지속적인 안전을 보장합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <div className="biz-visual" style={{ aspectRatio: '5/4' }}>調</div>
            <div>
              <span className="section-eyebrow">WHY JOEUN</span>
              <h2 style={{ marginBottom: 20 }}>왜 조은건설인가</h2>
              <p style={{ color: 'var(--color-text-light)', marginBottom: 32 }}>
                단순한 시공사를 넘어, 건축주와 운영자의 30년을 함께 설계하는 파트너가 되고자 합니다.
                축적된 시공 노하우와 자체 엔지니어링 역량으로 비용·기간·안전 세 가지를 동시에 충족시킵니다.
              </p>
              <ul className="biz-features" style={{ gridTemplateColumns: '1fr' }}>
                <li>기계설비공사업·소방시설공사업 동시 보유 (종합)</li>
                <li>BIM 기반 사전 검토로 공기 단축</li>
                <li>전국 5개 거점 24시간 긴급 대응체계</li>
                <li>국내외 주요 시공 인증 보유 (ISO 9001 / 14001 / 45001)</li>
              </ul>
              <Link to="/about" className="btn btn-dark" style={{ marginTop: 32 }}>회사 소개 →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">RECENT PROJECTS</span>
            <h2>주요 프로젝트</h2>
          </div>
          <div className="project-grid">
            <Link to="/projects" className="project-card">
              <div className="project-thumb"><span className="tag">반도체</span>工</div>
              <div className="project-body">
                <div className="meta">2024 · 경기 평택</div>
                <h3>P-5 반도체 클린룸 기계설비</h3>
                <p>초정밀 항온항습 시스템 및 특수 배관 통합 시공</p>
              </div>
            </Link>
            <Link to="/projects" className="project-card">
              <div className="project-thumb"><span className="tag">물류</span>消</div>
              <div className="project-body">
                <div className="meta">2024 · 인천 청라</div>
                <h3>대형 물류센터 소방시설</h3>
                <p>연면적 12만㎡ 스프링클러·제연설비 일괄 시공</p>
              </div>
            </Link>
            <Link to="/projects" className="project-card">
              <div className="project-thumb"><span className="tag">공공</span>院</div>
              <div className="project-body">
                <div className="meta">2023 · 서울</div>
                <h3>상급종합병원 기계·소방 통합</h3>
                <p>의료가스·공조·소방 통합 EPC 수행</p>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/projects" className="btn btn-dark">전체 프로젝트 보기 →</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>프로젝트 검토를 의뢰하세요</h2>
          <p>설계 단계부터 함께 검토하면 더 안전한 결과를 만들 수 있습니다.</p>
          <Link to="/support" className="btn btn-primary">견적·상담 신청</Link>
        </div>
      </section>
    </>
  );
}
