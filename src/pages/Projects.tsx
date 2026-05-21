import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type Category = 'semi' | 'logistics' | 'medical' | 'public' | 'commercial';

interface Project {
  category: Category;
  tag: string;
  visual: string;
  meta: string;
  title: string;
  desc: string;
}

const PROJECTS: Project[] = [
  { category: 'semi', tag: '반도체', visual: '工', meta: '2024 · 경기 평택 · 기계설비', title: 'P-5 반도체 클린룸 기계설비공사', desc: '초정밀 항온항습 시스템 및 특수 배관 통합 시공. 발주처: S전자' },
  { category: 'logistics', tag: '물류', visual: '消', meta: '2024 · 인천 청라 · 소방시설', title: '대형 물류센터 소방시설공사', desc: '연면적 12만㎡ 스프링클러·제연설비 일괄 시공' },
  { category: 'medical', tag: '병원', visual: '院', meta: '2023 · 서울 · EPC', title: '상급종합병원 기계·소방 통합공사', desc: '의료가스·공조·소방 통합 EPC 수행' },
  { category: 'semi', tag: '디스플레이', visual: '展', meta: '2023 · 충남 아산 · 기계설비', title: 'OLED 제조라인 공조설비', desc: '대규모 클린룸 공조 및 위험물 시설 소방' },
  { category: 'logistics', tag: '데이터센터', visual: 'D', meta: '2023 · 경기 안양 · 기계+소방', title: 'IDC 정밀공조 · 가스소화설비', desc: 'FM200 청정약제 소화설비 및 정밀냉방 시스템' },
  { category: 'public', tag: '공공', visual: '官', meta: '2023 · 세종 · 기계설비', title: '정부세종청사 ○○동 리모델링', desc: '노후 공조·위생배관 전면 교체' },
  { category: 'commercial', tag: '오피스', visual: '商', meta: '2022 · 서울 강남 · 소방시설', title: '강남 프리미엄 오피스 소방시설', desc: '지상 38층 통합 소방시스템 시공' },
  { category: 'medical', tag: '바이오', visual: '研', meta: '2022 · 인천 송도 · EPC', title: '바이오 GMP 시설 기계·소방', desc: 'BSL-2 등급 음압시설 및 무균실 공조' },
  { category: 'logistics', tag: '물류', visual: '倉', meta: '2022 · 경기 이천 · 소방시설', title: '저온 물류센터 동결 스프링클러', desc: '-25℃ 환경 특수 소방설비' },
  { category: 'commercial', tag: '호텔', visual: '泊', meta: '2021 · 부산 해운대 · 기계설비', title: '해운대 5성급 호텔 공조시설', desc: '객실 개별제어 및 대형연회장 공조' },
  { category: 'public', tag: '학교', visual: '校', meta: '2021 · 대전 · 기계+소방', title: '국립대 연구동 신축 설비공사', desc: '실험실 환기 및 가스누설 자동감지 시스템' },
  { category: 'semi', tag: '반도체', visual: '線', meta: '2021 · 경기 화성 · 기계설비', title: '파운드리 신규라인 유틸리티', desc: '초순수·특수가스 통합 배관 시공' },
];

const FILTERS: { value: 'all' | Category; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'semi', label: '반도체 · 디스플레이' },
  { value: 'logistics', label: '물류 · 데이터센터' },
  { value: 'medical', label: '병원 · 바이오' },
  { value: 'public', label: '공공 · 청사' },
  { value: 'commercial', label: '오피스 · 상업' },
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const visible = useMemo(
    () => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>프로젝트
          </div>
          <h1>프로젝트</h1>
          <p>지난 27년간 480여 건의 프로젝트를 통해 쌓아온 시공 레퍼런스입니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                className={filter === f.value ? 'active' : ''}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visible.map((p, idx) => (
              <div key={idx} className="project-card">
                <div className="project-thumb">
                  <span className="tag">{p.tag}</span>
                  {p.visual}
                </div>
                <div className="project-body">
                  <div className="meta">{p.meta}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 64, color: 'var(--color-text-light)', fontSize: 14 }}>
            ※ 비밀유지 의무가 있는 일부 프로젝트는 발주처 정보를 표기하지 않았습니다.
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>레퍼런스 자료가 필요하신가요?</h2>
          <p>산업별 상세 시공 사례집을 PDF로 보내드립니다.</p>
          <Link to="/support" className="btn btn-primary">자료 요청하기</Link>
        </div>
      </section>
    </>
  );
}
