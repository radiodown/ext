import { Link } from 'react-router-dom';

const MARQUEE_ITEMS = [
  '반도체 클린룸',
  '이차전지 공정',
  '데이터센터',
  'GMP 바이오',
  '대형 물류센터',
  '상급종합병원',
  '연구·실험시설',
  '공공 청사',
];

const RAIL_PROJECTS = [
  { tag: 'SEMI', visual: '工', meta: '2024 · 평택', title: 'P-5 반도체 클린룸', desc: '초정밀 항온항습 시스템 및 특수 배관' },
  { tag: 'LOGISTICS', visual: '消', meta: '2024 · 청라', title: '12만㎡ 물류센터 소방', desc: '스프링클러·제연설비 일괄 시공' },
  { tag: 'MEDICAL', visual: '院', meta: '2023 · 서울', title: '상급종합병원 EPC', desc: '의료가스·공조·소방 통합' },
  { tag: 'DC', visual: 'D', meta: '2023 · 안양', title: 'IDC 가스소화설비', desc: 'FM200 청정약제 + 정밀냉방' },
  { tag: 'BIO', visual: '研', meta: '2022 · 송도', title: '바이오 GMP 시설', desc: 'BSL-2 등급 음압시설' },
  { tag: 'SEMI', visual: '線', meta: '2021 · 화성', title: '파운드리 유틸리티', desc: '초순수·특수가스 통합 배관' },
];

export default function Home() {
  return (
    <>
      <section style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="bento">
            <div className="bento-cell headline">
              <div className="bento-cell live">LIVE · BUILDING SAFE INFRASTRUCTURE</div>
              <div>
                <h1 className="bento-headline">
                  안전을 설계하고<br />
                  <em>신뢰</em>로 짓는다.
                </h1>
                <p className="bento-sub">
                  조은건설은 27년간 기계설비와 소방시설 한 분야에만 집중해 온 종합 시공 파트너입니다.
                </p>
                <div className="bento-actions">
                  <Link to="/business" className="btn btn-primary">사업 시작하기 →</Link>
                  <Link to="/projects" className="btn btn-outline">레퍼런스</Link>
                </div>
              </div>
            </div>

            <div className="bento-cell stat-1 glow">
              <div className="bento-label">[01] 경력</div>
              <div>
                <div className="bento-num">27<em>YR</em></div>
                <div className="bento-desc">YEARS IN OPERATION</div>
              </div>
            </div>

            <div className="bento-cell stat-2">
              <div className="bento-label">[02] 프로젝트</div>
              <div>
                <div className="bento-num">480<em>+</em></div>
                <div className="bento-desc">PROJECTS DELIVERED</div>
              </div>
            </div>

            <div className="bento-cell stat-3 glow">
              <div className="bento-label">[03] 안전</div>
              <div>
                <div className="bento-num">0<em>건</em></div>
                <div className="bento-desc">FATAL ACCIDENT · 5YR</div>
              </div>
            </div>

            <Link to="/business#mechanical" className="bento-cell service-1">
              <div>
                <div className="bento-service-idx">/ 01</div>
                <div className="bento-service-title">기계설비</div>
                <div className="bento-service-desc">공조·위생·산업배관, 클린룸 통합 시공</div>
              </div>
              <div className="bento-service-arrow">EXPLORE →</div>
            </Link>

            <Link to="/business#fire" className="bento-cell service-2">
              <div>
                <div className="bento-service-idx">/ 02</div>
                <div className="bento-service-title">소방시설</div>
                <div className="bento-service-desc">스프링클러·제연·가스소화 전 영역</div>
              </div>
              <div className="bento-service-arrow">EXPLORE →</div>
            </Link>

            <Link to="/business#maintenance" className="bento-cell service-3">
              <div>
                <div className="bento-service-idx">/ 03</div>
                <div className="bento-service-title">유지관리</div>
                <div className="bento-service-desc">24시간 긴급출동 · 전국 5개 거점</div>
              </div>
              <div className="bento-service-arrow">EXPLORE →</div>
            </Link>

            <Link to="/projects" className="bento-cell featured">
              <div className="featured-thumb">工</div>
              <div className="featured-meta">
                <div className="tag">FEATURED · SEMI</div>
                <h4>P-5 반도체 클린룸 기계설비 →</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="editorial">
            <div className="editorial-lead">
              <span className="eyebrow">/ WHY JOEUN</span>
              <h2>한 분야에 27년을 쏟았습니다.</h2>
              <p>단순한 시공사를 넘어, 건축주와 운영자의 30년을 함께 설계하는 파트너가 되고자 합니다.</p>
            </div>
            <div className="editorial-body">
              <div className="editorial-row">
                <span className="idx">01</span>
                <div>
                  <h3>기계 + 소방 동시 종합 면허</h3>
                  <p>두 분야 모두 자체 인력으로 수행. 발주처는 한 곳만 관리하면 됩니다.</p>
                </div>
              </div>
              <div className="editorial-row">
                <span className="idx">02</span>
                <div>
                  <h3>BIM 기반 사전 검토</h3>
                  <p>설계 단계부터 시스템 간 충돌을 시뮬레이션하여 공기와 비용을 절감합니다.</p>
                </div>
              </div>
              <div className="editorial-row">
                <span className="idx">03</span>
                <div>
                  <h3>전국 5개 거점 24시간 대응</h3>
                  <p>긴급 상황 발생 시 평균 2시간 이내 권역별 기술팀이 출동합니다.</p>
                </div>
              </div>
              <div className="editorial-row">
                <span className="idx">04</span>
                <div>
                  <h3>국제 인증 시공 품질</h3>
                  <p>ISO 9001·14001·45001 통합 인증 보유. 글로벌 발주처와도 협업 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
            <div>
              <span className="section-eyebrow" style={{ marginBottom: 12, display: 'block' }}>RECENT WORK</span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: 0 }}>주요 프로젝트</h2>
            </div>
            <Link to="/projects" className="btn btn-dark">전체 보기 →</Link>
          </div>
          <div className="rail-wrap">
            <div className="rail">
              {RAIL_PROJECTS.map((p, i) => (
                <Link key={i} to="/projects" className="rail-card">
                  <div className="thumb">
                    <span className="tag">{p.tag}</span>
                    {p.visual}
                  </div>
                  <div className="body">
                    <div className="meta">{p.meta}</div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>프로젝트 검토를<br />의뢰하세요.</h2>
          <p>설계 단계부터 함께 검토하면 더 안전한 결과를 만들 수 있습니다.</p>
          <Link to="/support" className="btn btn-primary">견적·상담 신청 →</Link>
        </div>
      </section>
    </>
  );
}
