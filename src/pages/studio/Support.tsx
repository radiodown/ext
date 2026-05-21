import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

const FAQS = [
  { q: '기계설비공사와 소방시설공사를 동시에 의뢰할 수 있나요?', a: '네, 조은건설은 두 분야의 종합 면허를 모두 보유하고 있어 한 곳에서 일괄 발주가 가능합니다. 별도 시공사와의 협업 관리 부담을 줄일 수 있고, 설계 단계에서의 시스템 간 충돌도 사전에 방지할 수 있습니다.' },
  { q: '도면이 아직 없는 단계인데 견적 요청이 가능한가요?', a: '가능합니다. 사업장 위치, 용도, 연면적, 층수 등 기본 정보만 알려주시면 유사 프로젝트 레퍼런스를 기반으로 개략 견적을 제공해 드립니다.' },
  { q: '시공 이후 유지관리는 어떻게 진행되나요?', a: '준공 후 1년간은 무상 A/S가 제공되며, 이후에는 연간 유지관리 계약 또는 건별 점검 두 가지 형태로 선택하실 수 있습니다.' },
  { q: '긴급한 소방·기계설비 고장 시 출동 가능한가요?', a: '전국 5개 거점에서 24시간 긴급대응 체계를 운영합니다. 1588-0000 으로 연락 주시면 권역별 기술팀이 평균 2시간 이내 출동합니다.' },
  { q: '소형 사업장이나 리모델링도 수행하시나요?', a: '네, 규모와 무관하게 검토해 드립니다. 다만 일정과 현장 여건에 따라 우선순위가 조정될 수 있습니다.' },
  { q: '협력사로 등록하고 싶습니다.', a: '매년 상·하반기 정기 등록을 운영합니다. partners@joeun-enc.co.kr 로 회사소개서를 보내주시기 바랍니다.' },
];

const CONTACT_PILLS = [
  { icon: '☎', label: '/ MAIN', value: '02-0000-0000' },
  { icon: '✉', label: '/ SALES', value: 'sales@joeun-enc.co.kr' },
  { icon: '24', label: '/ EMERGENCY', value: '1588-0000' },
  { icon: '⌚', label: '/ HOURS', value: '평일 09:00 — 18:00' },
];

export default function Support() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 영업일 기준 1-2일 이내에 회신드리겠습니다.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="section" style={{ paddingTop: 100 }}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>SUPPORT
          </div>
          <div className="support-split">
            <div className="support-aside">
              <span className="eyebrow">/ GET IN TOUCH</span>
              <h1>프로젝트를<br />시작하세요.</h1>
              <p>사업 문의, 견적 요청, 기술 상담 — 어떤 단계에서든 편하게 연락 주십시오. 영업일 기준 1-2일 이내 회신드립니다.</p>
              <div className="support-pills">
                {CONTACT_PILLS.map((p) => (
                  <div key={p.label} className="support-pill">
                    <div className="icon">{p.icon}</div>
                    <div>
                      <div className="label">{p.label}</div>
                      <div className="value">{p.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label>회사명 *</label>
                    <input type="text" required placeholder="(주)○○○" />
                  </div>
                  <div className="field">
                    <label>담당자명 *</label>
                    <input type="text" required placeholder="홍길동" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>연락처 *</label>
                    <input type="tel" required placeholder="010-0000-0000" />
                  </div>
                  <div className="field">
                    <label>이메일 *</label>
                    <input type="email" required placeholder="name@company.com" />
                  </div>
                </div>

                <div className="field">
                  <label>문의 분야</label>
                  <select defaultValue="기계설비공사">
                    <option>기계설비공사</option>
                    <option>소방시설공사</option>
                    <option>유지관리 / 점검</option>
                    <option>EPC (설계·조달·시공)</option>
                    <option>기타</option>
                  </select>
                </div>

                <div className="field">
                  <label>프로젝트 개요 *</label>
                  <textarea required placeholder="사업장 위치, 규모(연면적/층수), 일정, 도면 유무 등을 알려주시면 더 정확한 답변이 가능합니다." />
                </div>

                <div className="field-check">
                  <input type="checkbox" id="agree" required />
                  <label htmlFor="agree" style={{ fontWeight: 400, color: 'var(--text-muted)', marginBottom: 0, letterSpacing: 0, fontFamily: 'var(--font)', textTransform: 'none', fontSize: 13 }}>
                    개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}>
                  문의 접수하기 →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">FAQ</span>
            <h2>자주 묻는 질문.</h2>
          </div>
          <div style={{ maxWidth: 920, margin: '0 auto' }} className="faq-list">
            {FAQS.map((f, idx) => {
              const open = openIdx === idx;
              return (
                <div key={idx} className={`faq-item${open ? ' open' : ''}`}>
                  <div className="faq-q" onClick={() => setOpenIdx(open ? null : idx)}>
                    {f.q}
                    <span className="ico">+</span>
                  </div>
                  <div className="faq-a">
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="location">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">LOCATION</span>
            <h2>오시는 길.</h2>
            <p>서울특별시 강남구 테헤란로 000, 조은빌딩 10층</p>
          </div>

          <div
            style={{
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              aspectRatio: '16/6',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--text-subtle)',
              fontSize: 24,
              position: 'relative',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ fontSize: 48, marginBottom: 8, color: 'var(--accent)' }}>⌖</div>
              <div style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 12 }}>
                MAP AREA · Kakao / Naver Embed
              </div>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: 40 }}>
            {[
              { l: 'SUBWAY', v: '2호선 강남역 0번 출구 도보 5분\n신분당선 강남역 0번 출구 도보 3분' },
              { l: 'BUS', v: '간선 146, 360, 740\n지선 4412, 6411' },
              { l: 'PARKING', v: '건물 내 지하주차장 이용\n방문객 2시간 무료' },
            ].map((i) => (
              <div key={i.l}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--accent)', marginBottom: 12, textTransform: 'uppercase' }}>
                  / {i.l}
                </h4>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{i.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
