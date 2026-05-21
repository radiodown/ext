import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Block {
  id: string;
  idx: string;
  title: string;
  desc: string;
  features: string[];
}

const BLOCKS: Block[] = [
  {
    id: 'mechanical',
    idx: '01',
    title: '기계설비공사',
    desc: '건축물과 산업시설의 공조·위생·배관 등 기계 시스템을 통합 시공합니다. 반도체·이차전지·바이오 공정 등 고정밀 환경에서도 검증된 시공 품질을 제공합니다.',
    features: ['HVAC 시스템', '냉난방 · 보일러', '위생 · 급배수', '산업플랜트 배관', '클린룸 · 항온항습', '의료가스 라인', '지역난방', '덕트 · 단열'],
  },
  {
    id: 'fire',
    idx: '02',
    title: '소방시설공사',
    desc: '화재로부터 사람과 자산을 지키는 일은 한 치의 실수도 허용되지 않습니다. 조은건설은 설계, 시공, 검사, 유지관리까지 소방 전 영역을 자체 조직으로 수행합니다.',
    features: ['스프링클러', '옥내 · 옥외 소화전', '제연 · 배연설비', '자동화재탐지', '가스계 소화 (CO₂ · 청정약제)', '피난유도', '소방펌프', '법정점검 대행'],
  },
  {
    id: 'maintenance',
    idx: '03',
    title: '유지관리 및 점검',
    desc: '준공 이후가 진짜 시작입니다. 정기 점검, 긴급 대응, 부품 교체까지 시설의 전 생애주기를 책임집니다. 전국 5개 거점에서 24시간 출동 체계를 운영합니다.',
    features: ['정기점검 · PM', '법정점검 (작동·종합)', '24시간 긴급출동', '연간 유지관리 계약', '노후 설비 리뉴얼', '에너지 효율 컨설팅', '원격 모니터링 IoT', '부품 직접 조달'],
  },
  {
    id: 'epc',
    idx: '04',
    title: '설계 · 조달 · 시공',
    desc: '발주처의 부담을 줄이는 일괄 수행 방식입니다. 기획 단계부터 함께 참여하여 BIM 기반 최적 설계와 자재 직접 조달로 비용과 공기를 동시에 절감합니다.',
    features: ['BIM 사전 검토', 'Value Engineering', '자재 직접 조달', '턴키 / 기술제안', '스케줄 통합 관리', '시운전 · 사용승인', '해외 협업', '준공 후 무상 A/S'],
  },
];

const INDUSTRIES = [
  { icon: '半', title: '반도체 · 디스플레이', desc: '클린룸, 초순수, 특수가스 통합 시공' },
  { icon: '電', title: '이차전지 · 화학', desc: '위험물 시설 소방, 공정 배관' },
  { icon: '物', title: '물류 · 데이터센터', desc: '대공간 스프링클러, 정밀 냉방' },
  { icon: '医', title: '병원 · 바이오', desc: '의료가스, 음압격리, 무균실' },
  { icon: '公', title: '공공 · 청사', desc: '리모델링 포함 종합설비' },
  { icon: '商', title: '오피스 · 상업', desc: '대규모 공조 · 소방 통합' },
  { icon: '学', title: '학교 · 연구', desc: '실험실 환기, 가스누설 감지' },
  { icon: '住', title: '주거 · 호텔', desc: '지역난방, 통합 소방' },
];

export default function Business() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            const i = BLOCKS.findIndex((b) => b.id === id);
            if (i !== -1) setActiveIdx(i);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 },
    );
    BLOCKS.forEach((b) => {
      const el = document.getElementById(b.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>BUSINESS
          </div>
          <h1>사업분야</h1>
          <p>설계 검토부터 시공, 시운전, 유지관리까지. 조은건설은 모든 단계에서 책임집니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sticky-biz">
            <nav className="sticky-biz-nav" aria-label="사업 분야 인덱스">
              {BLOCKS.map((b, i) => (
                <button
                  key={b.id}
                  type="button"
                  className={i === activeIdx ? 'active' : ''}
                  onClick={() => scrollTo(b.id)}
                >
                  <span className="idx">/ {b.idx}</span>
                  {b.title}
                </button>
              ))}
            </nav>
            <div className="sticky-biz-content">
              {BLOCKS.map((b) => (
                <section key={b.id} id={b.id}>
                  <div className="sec-label">/ {b.idx}</div>
                  <h2>{b.title}</h2>
                  <p>{b.desc}</p>
                  <ul className="feature-tags">
                    {b.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">INDUSTRIES</span>
            <h2>다양한 산업,<br />까다로운 환경.</h2>
          </div>
          <div className="grid-4">
            {INDUSTRIES.map((i) => (
              <div key={i.title} className="card">
                <div className="card-icon">{i.icon}</div>
                <h3>{i.title}</h3>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>도면이 없어도<br />괜찮습니다.</h2>
          <p>사업 개요만 알려주시면 최적의 솔루션을 제안드립니다.</p>
          <Link to="/support" className="btn btn-primary">사업 문의 →</Link>
        </div>
      </section>
    </>
  );
}
