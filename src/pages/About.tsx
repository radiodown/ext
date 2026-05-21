import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>회사소개
          </div>
          <h1>회사소개</h1>
          <p>안전한 인프라가 만드는 더 나은 일상을 위해, 조은건설은 한 길을 걸어왔습니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'left', maxWidth: 'none' }}>
            <span className="section-eyebrow">CEO MESSAGE</span>
            <h2 style={{ fontSize: 34 }}>
              "눈에 보이지 않는 부분에<br />가장 큰 정성을 들입니다."
            </h2>
          </div>
          <p className="lead">
            건축물의 진정한 가치는 화려한 외관이 아니라, 그 안에서 사람들의 일상과 산업을 묵묵히 지탱하는 설비에 있습니다.
          </p>
          <p style={{ color: 'var(--color-text-light)', maxWidth: 880, marginBottom: 20 }}>
            조은건설은 1998년 창립 이래 27년간 오직 기계설비공사와 소방시설공사 한 분야에만 집중해 왔습니다.
            유행과 흐름에 흔들리지 않고 한 분야의 깊이를 쌓아온 결과, 오늘날 반도체·이차전지·바이오·물류·공공시설 등
            국가 핵심 인프라의 보이지 않는 뼈대를 책임지는 회사로 성장했습니다.
          </p>
          <p style={{ color: 'var(--color-text-light)', maxWidth: 880, marginBottom: 32 }}>
            앞으로도 조은건설은 '안전'과 '신뢰'라는 두 단어를 가장 무겁게 받아들이며, 고객의 사업장이
            가장 안전한 일터가 될 수 있도록 끊임없이 정진하겠습니다.
          </p>
          <p style={{ fontSize: 18, color: 'var(--color-primary)' }}>
            대표이사 <strong>김 조 은</strong>
          </p>
        </div>
      </section>

      <section className="section section-alt" id="values">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">OUR VALUES</span>
            <h2>경영이념</h2>
            <p>우리가 매일 현장에서 지키는 세 가지 원칙입니다.</p>
          </div>
          <div className="values-list" style={{ background: '#fff' }}>
            <div className="value-item">
              <div className="value-num">01 / SAFETY</div>
              <h3>안전 제일</h3>
              <p>그 어떤 공기와 비용보다 사람의 안전을 우선합니다. 무사고는 결과가 아닌 과정입니다.</p>
            </div>
            <div className="value-item">
              <div className="value-num">02 / QUALITY</div>
              <h3>품질 약속</h3>
              <p>법정 기준은 최소한일 뿐. 자체 품질 기준은 항상 그보다 한 단계 높게 설정합니다.</p>
            </div>
            <div className="value-item">
              <div className="value-num">03 / PARTNERSHIP</div>
              <h3>동반 성장</h3>
              <p>고객, 협력사, 임직원 모두가 함께 성장하는 구조를 만들 때 비로소 지속 가능합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="history">
        <div className="container">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            <div>
              <span className="section-eyebrow">HISTORY</span>
              <h2 style={{ fontSize: 34, marginTop: 12 }}>27년의 발자취</h2>
              <p style={{ color: 'var(--color-text-light)', marginTop: 20 }}>
                작은 기계설비 시공팀에서 시작해 종합 시공사로 성장하기까지,
                조은건설의 이정표들입니다.
              </p>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2020 — Present</div>
                <ul>
                  <li>· 반도체 클린룸 기계설비 누적 12개 라인 수행</li>
                  <li>· ESG 경영 선언 및 탄소중립 로드맵 수립 (2023)</li>
                  <li>· 5년 연속 중대재해 0건 달성 (2024)</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2010 — 2019</div>
                <ul>
                  <li>· 종합 소방시설공사업 면허 취득 (2011)</li>
                  <li>· 부산·울산·인천 지사 설립</li>
                  <li>· 연 매출 500억 돌파 (2018)</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2000 — 2009</div>
                <ul>
                  <li>· 기계설비공사업 일반 면허 취득</li>
                  <li>· 공공기관 등록 시공사 인증</li>
                  <li>· ISO 9001 품질경영시스템 인증</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">1998</div>
                <ul>
                  <li>· 조은설비공사 창립 (서울 강남)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">CERTIFICATIONS</span>
            <h2>인증 및 면허</h2>
          </div>
          <div className="grid-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 24px' }}>M</div>
              <h3>기계설비공사업</h3>
              <p>종합건설업 등록</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 24px' }}>F</div>
              <h3>소방시설공사업</h3>
              <p>종합 면허 보유</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 24px' }}>Q</div>
              <h3>ISO 9001</h3>
              <p>품질경영시스템</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 24px' }}>S</div>
              <h3>ISO 45001</h3>
              <p>안전보건경영시스템</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>조은건설과 함께하실 분을 찾습니다</h2>
          <p>안전한 미래를 함께 만들어 갈 인재를 기다립니다.</p>
          <a href="#" className="btn btn-primary">채용공고 보기</a>
        </div>
      </section>
    </>
  );
}
