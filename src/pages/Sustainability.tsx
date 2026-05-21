import { Link } from 'react-router-dom';

export default function Sustainability() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>지속가능경영
          </div>
          <h1>지속가능경영</h1>
          <p>안전한 현장에서, 건강한 조직으로, 책임 있는 경영으로 — 세대를 이어 신뢰받는 회사가 되겠습니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="lead" style={{ maxWidth: 'none' }}>
            조은건설은 '안전한 인프라'라는 본업의 사명을 더 넓은 책임으로 확장합니다.
            온실가스 감축, 협력사 동반성장, 투명한 지배구조까지 — 우리의 일이 사회에 어떤 영향을 남기는지 끊임없이 살핍니다.
          </p>

          <div className="sus-hero-stats">
            <div className="sus-stat">
              <div className="num">-32%</div>
              <div className="label">사업장 온실가스 감축 (2020년 대비, 2024)</div>
            </div>
            <div className="sus-stat">
              <div className="num">100%</div>
              <div className="label">전 사업장 재생에너지 전력 사용 (2025 목표)</div>
            </div>
            <div className="sus-stat">
              <div className="num">5년</div>
              <div className="label">연속 중대재해 0건 달성</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">ESG FRAMEWORK</span>
            <h2>ESG 추진 체계</h2>
            <p>환경, 사회, 지배구조 — 세 가지 축으로 지속가능한 미래를 설계합니다.</p>
          </div>

          <div className="esg-grid">
            <div className="esg-col">
              <div className="esg-letter">E</div>
              <h3>Environment</h3>
              <p>현장에서 배출되는 모든 것을 측정하고, 줄이고, 책임집니다.</p>
              <ul>
                <li>2030 Scope 1+2 탄소 50% 감축 목표</li>
                <li>고효율 기계설비 우선 적용</li>
                <li>현장 폐기물 분리배출 표준화</li>
                <li>친환경 자재 우선 구매 정책</li>
                <li>저탄소 운송 (전기차·하이브리드 전환)</li>
              </ul>
            </div>
            <div className="esg-col">
              <div className="esg-letter">S</div>
              <h3>Social</h3>
              <p>임직원, 협력사, 지역사회 모두가 함께 성장하는 구조를 만듭니다.</p>
              <ul>
                <li>전 임직원 안전교육 연 40시간 이상</li>
                <li>협력사 안전·품질 컨설팅 무상 지원</li>
                <li>여성 관리자 비율 25% 달성</li>
                <li>지역 직업학교 산학협력 프로그램</li>
                <li>임직원 자녀 학자금 지원</li>
              </ul>
            </div>
            <div className="esg-col">
              <div className="esg-letter">G</div>
              <h3>Governance</h3>
              <p>투명하고 책임 있는 의사결정 구조를 통해 신뢰를 쌓습니다.</p>
              <ul>
                <li>이사회 내 ESG위원회 설치</li>
                <li>외부 감사인 정기 교체</li>
                <li>윤리경영 신고채널 상시 운영</li>
                <li>반부패 정책 및 임직원 서약</li>
                <li>지속가능경영보고서 연 1회 발간</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">SAFETY FIRST</span>
            <h2>안전보건 경영</h2>
            <p>모든 임직원과 협력사가 안전하게 퇴근하는 것 — 그것이 우리의 첫 번째 약속입니다.</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">安</div>
              <h3>현장 안전관리</h3>
              <p>전 현장 안전관리자 상주, 일일 위험성 평가, 작업 전 TBM 의무화.</p>
            </div>
            <div className="card">
              <div className="card-icon">教</div>
              <h3>안전교육 강화</h3>
              <p>법정 교육 외 자체 시뮬레이션 체험형 교육 운영. 협력사 함께 참여.</p>
            </div>
            <div className="card">
              <div className="card-icon">健</div>
              <h3>임직원 건강</h3>
              <p>연 1회 종합검진 전액 지원, 정신건강 상담 프로그램 운영.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">REPORTS</span>
            <h2>지속가능경영 보고서</h2>
            <p>매년 우리의 활동과 성과를 투명하게 공개합니다.</p>
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
                  <a href="#" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>PDF 다운로드 →</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
