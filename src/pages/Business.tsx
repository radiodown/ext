import { Link } from 'react-router-dom';

const INDUSTRIES = [
  { icon: '半', title: '반도체 · 디스플레이', desc: '클린룸, 초순수, 특수가스 통합 시공' },
  { icon: '電', title: '이차전지 · 화학', desc: '위험물 시설 소방, 공정 배관' },
  { icon: '物', title: '물류 · 데이터센터', desc: '대공간 스프링클러, 정밀 냉방' },
  { icon: '医', title: '병원 · 바이오', desc: '의료가스, 음압격리, 무균실' },
  { icon: '公', title: '공공 · 청사', desc: '리모델링 포함 종합설비' },
  { icon: '商', title: '오피스 · 상업시설', desc: '대규모 공조 · 소방 통합' },
  { icon: '学', title: '학교 · 연구시설', desc: '실험실 환기, 가스누설 감지' },
  { icon: '住', title: '주거 · 호텔', desc: '지역난방, 통합 소방' },
];

interface Block {
  id: string;
  label: string;
  title: string;
  desc: string;
  features: string[];
  visual: string;
  reverse?: boolean;
}

const BLOCKS: Block[] = [
  {
    id: 'mechanical',
    label: '01 · MECHANICAL',
    title: '기계설비공사',
    desc: '건축물과 산업시설의 공조·위생·배관 등 기계 시스템을 통합 시공합니다. 반도체·이차전지·바이오 공정 등 고정밀 환경에서도 검증된 시공 품질을 제공합니다.',
    features: [
      '공조 / HVAC 시스템',
      '냉난방 · 보일러설비',
      '위생 · 급배수 배관',
      '산업플랜트 배관 시공',
      '클린룸 / 항온항습',
      '의료가스 · 특수가스 라인',
      '지역난방 · 열원공사',
      '덕트 · 단열 · 보온',
    ],
    visual: '機',
  },
  {
    id: 'fire',
    label: '02 · FIRE PROTECTION',
    title: '소방시설공사',
    desc: '화재로부터 사람과 자산을 지키는 일은 한 치의 실수도 허용되지 않습니다. 조은건설은 설계, 시공, 검사, 유지관리까지 소방 전 영역을 자체 조직으로 수행합니다.',
    features: [
      '스프링클러 설비',
      '옥내 · 옥외 소화전',
      '제연 · 배연설비',
      '자동화재탐지설비',
      '가스계 소화설비 (이산화탄소·청정약제)',
      '피난유도등 · 비상조명',
      '소방 펌프 · 수원설비',
      '법정 소방 점검 대행',
    ],
    visual: '消',
    reverse: true,
  },
  {
    id: 'maintenance',
    label: '03 · MAINTENANCE',
    title: '유지관리 및 점검',
    desc: '준공 이후가 진짜 시작입니다. 정기 점검, 긴급 대응, 부품 교체까지 시설의 전 생애주기를 책임집니다. 전국 5개 거점에서 24시간 출동 체계를 운영합니다.',
    features: [
      '기계설비 정기점검',
      '소방시설 법정점검 (작동·종합)',
      '예방정비 (PM) · 사후정비 (BM)',
      '24시간 긴급출동',
      '연간 유지관리 계약',
      '노후 설비 진단 · 리뉴얼',
      '에너지 효율 컨설팅',
      '원격 모니터링 (IoT)',
    ],
    visual: '維',
  },
  {
    id: 'epc',
    label: '04 · EPC',
    title: '설계 · 조달 · 시공 (EPC)',
    desc: '발주처의 부담을 줄이는 일괄 수행 방식입니다. 기획 단계부터 함께 참여하여 BIM 기반 최적 설계와 자재 직접 조달로 비용과 공기를 동시에 절감합니다.',
    features: [
      'BIM 기반 사전 검토',
      'VE (Value Engineering) 제안',
      '주요 자재 직접 조달',
      '턴키 / 단가입찰 / 기술제안',
      '스케줄 통합 관리',
      '시운전 · 사용승인 지원',
      '해외 프로젝트 협업 가능',
      '준공 후 1년 무상 A/S',
    ],
    visual: '設',
    reverse: true,
  },
];

export default function Business() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>사업분야
          </div>
          <h1>사업분야</h1>
          <p>설계 검토부터 시공, 시운전, 유지관리까지. 조은건설은 모든 단계에서 책임집니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {BLOCKS.map((b) => (
            <div key={b.id} id={b.id} className={`biz-block${b.reverse ? ' reverse' : ''}`}>
              {b.reverse ? (
                <>
                  <div>
                    <div className="biz-label">{b.label}</div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                    <ul className="biz-features">
                      {b.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                  <div className="biz-visual">{b.visual}</div>
                </>
              ) : (
                <>
                  <div className="biz-visual">{b.visual}</div>
                  <div>
                    <div className="biz-label">{b.label}</div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                    <ul className="biz-features">
                      {b.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">INDUSTRIES WE SERVE</span>
            <h2>주요 적용 산업</h2>
            <p>다양한 산업의 까다로운 환경에서 검증된 시공 역량을 보유하고 있습니다.</p>
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
          <h2>프로젝트 검토를 의뢰하세요</h2>
          <p>도면이 없어도 괜찮습니다. 사업 개요만 알려주시면 최적의 솔루션을 제안드립니다.</p>
          <Link to="/support" className="btn btn-primary">사업 문의하기</Link>
        </div>
      </section>
    </>
  );
}
