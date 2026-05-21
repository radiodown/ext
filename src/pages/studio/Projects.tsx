import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type Category = 'semi' | 'logistics' | 'medical' | 'public' | 'commercial';
type Size = 'size-l' | 'size-m' | 'size-s' | 'size-tall' | 'size-wide';

interface Project {
  category: Category;
  tag: string;
  visual: string;
  meta: string;
  title: string;
  desc: string;
  size: Size;
}

const PROJECTS: Project[] = [
  { category: 'semi', tag: 'SEMI', visual: '工', meta: '2024 · 평택', title: 'P-5 반도체 클린룸', desc: '초정밀 항온항습 + 특수 배관', size: 'size-l' },
  { category: 'logistics', tag: 'LOGISTICS', visual: '消', meta: '2024 · 청라', title: '12만㎡ 물류센터 소방', desc: '스프링클러·제연설비 일괄', size: 'size-tall' },
  { category: 'medical', tag: 'MEDICAL', visual: '院', meta: '2023 · 서울', title: '상급종합병원 EPC', desc: '의료가스·공조·소방 통합', size: 'size-s' },
  { category: 'semi', tag: 'DISPLAY', visual: '展', meta: '2023 · 아산', title: 'OLED 제조라인 공조', desc: '클린룸 공조 + 위험물 소방', size: 'size-s' },
  { category: 'logistics', tag: 'DATACENTER', visual: 'D', meta: '2023 · 안양', title: 'IDC 정밀공조 + 가스소화', desc: 'FM200 청정약제 + 정밀냉방', size: 'size-wide' },
  { category: 'public', tag: 'PUBLIC', visual: '官', meta: '2023 · 세종', title: '정부세종청사 리모델링', desc: '노후 공조·위생배관 교체', size: 'size-m' },
  { category: 'commercial', tag: 'OFFICE', visual: '商', meta: '2022 · 강남', title: '강남 프리미엄 오피스', desc: '지상 38층 통합 소방시스템', size: 'size-m' },
  { category: 'medical', tag: 'BIO', visual: '研', meta: '2022 · 송도', title: '바이오 GMP 시설', desc: 'BSL-2 등급 음압시설', size: 'size-m' },
  { category: 'logistics', tag: 'COLD', visual: '倉', meta: '2022 · 이천', title: '저온 동결 스프링클러', desc: '-25℃ 환경 특수 소방', size: 'size-s' },
  { category: 'commercial', tag: 'HOTEL', visual: '泊', meta: '2021 · 해운대', title: '5성급 호텔 공조시설', desc: '객실 개별제어 + 연회장 공조', size: 'size-tall' },
  { category: 'public', tag: 'EDU', visual: '校', meta: '2021 · 대전', title: '국립대 연구동 설비', desc: '실험실 환기 + 가스누설 감지', size: 'size-s' },
  { category: 'semi', tag: 'FAB', visual: '線', meta: '2021 · 화성', title: '파운드리 신규라인', desc: '초순수·특수가스 통합 배관', size: 'size-wide' },
];

const FILTERS: { value: 'all' | Category; label: string }[] = [
  { value: 'all', label: 'ALL' },
  { value: 'semi', label: 'SEMI · DISPLAY' },
  { value: 'logistics', label: 'LOGISTICS · DC' },
  { value: 'medical', label: 'MEDICAL · BIO' },
  { value: 'public', label: 'PUBLIC' },
  { value: 'commercial', label: 'COMMERCIAL' },
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
            <Link to="/">HOME</Link><span>›</span>PROJECTS
          </div>
          <h1>프로젝트.</h1>
          <p>지난 27년간 480여 건 — 검증된 시공 레퍼런스.</p>
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

          <div className="masonry">
            {visible.map((p, idx) => (
              <div key={idx} className={`masonry-item ${p.size}`}>
                <div className="masonry-visual">{p.visual}</div>
                <div className="masonry-overlay">
                  <div className="top">
                    <span className="tag">{p.tag}</span>
                  </div>
                  <div>
                    <div className="meta">{p.meta}</div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-subtle)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            * 비밀유지 의무가 있는 일부 프로젝트는 발주처 정보를 표기하지 않았습니다.
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>레퍼런스 자료가<br />필요하신가요?</h2>
          <p>산업별 상세 시공 사례집을 PDF로 보내드립니다.</p>
          <Link to="/support" className="btn btn-primary">자료 요청 →</Link>
        </div>
      </section>
    </>
  );
}
