import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: '기계설비공사와 소방시설공사를 동시에 의뢰할 수 있나요?',
    a: '네, 조은건설은 두 분야의 종합 면허를 모두 보유하고 있어 한 곳에서 일괄 발주가 가능합니다. 별도 시공사와의 협업 관리 부담을 줄일 수 있고, 설계 단계에서의 시스템 간 충돌도 사전에 방지할 수 있습니다.',
  },
  {
    q: '도면이 아직 없는 단계인데 견적 요청이 가능한가요?',
    a: '가능합니다. 사업장 위치, 용도, 연면적, 층수 등 기본 정보만 알려주시면 유사 프로젝트 레퍼런스를 기반으로 개략 견적을 제공해 드립니다. 정확한 견적은 도면 또는 현장 실사 후 산출됩니다.',
  },
  {
    q: '시공 이후 유지관리는 어떻게 진행되나요?',
    a: '준공 후 1년간은 무상 A/S가 제공되며, 이후에는 연간 유지관리 계약 또는 건별 점검 두 가지 형태로 선택하실 수 있습니다. 법정 점검은 별도 계약 없이도 대행이 가능합니다.',
  },
  {
    q: '긴급한 소방·기계설비 고장 시 출동 가능한가요?',
    a: '전국 5개 거점에서 24시간 긴급대응 체계를 운영하고 있습니다. 1588-0000 으로 연락 주시면 권역별 담당 기술팀이 출동합니다. 평균 출동시간은 2시간 이내입니다.',
  },
  {
    q: '소형 사업장이나 리모델링도 수행하시나요?',
    a: '네, 규모와 무관하게 검토해 드립니다. 다만 일정과 현장 여건에 따라 우선순위가 조정될 수 있으니, 미리 문의 부탁드립니다.',
  },
  {
    q: '협력사로 등록하고 싶습니다.',
    a: '매년 상·하반기 정기 등록을 운영하며, 분야별 면허·실적 요건과 안전·품질 평가를 통과한 업체와 거래합니다. partners@joeun-enc.co.kr 로 회사소개서를 보내주시기 바랍니다.',
  },
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
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">HOME</Link><span>›</span>고객지원
          </div>
          <h1>고객지원</h1>
          <p>사업 문의, 견적 요청, 기술 상담 — 어떤 단계에서든 편하게 연락 주십시오.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="support-grid">
            <div className="contact-form">
              <h3 style={{ fontSize: 24, marginBottom: 8 }}>사업 문의</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: 32, fontSize: 14 }}>
                접수 후 영업일 기준 1-2일 이내에 담당자가 회신드립니다.
              </p>

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
                  <label
                    htmlFor="agree"
                    style={{ fontWeight: 400, color: 'var(--color-text-light)', marginBottom: 0, letterSpacing: 0 }}
                  >
                    개인정보 수집 및 이용에 동의합니다. (수집항목: 회사명, 담당자, 연락처, 이메일 / 보유기간: 3년)
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}
                >
                  문의 접수하기
                </button>
              </form>
            </div>

            <div>
              <div className="contact-info">
                <h3>직접 연락하기</h3>
                {[
                  { label: '대표 전화', value: '02-0000-0000' },
                  { label: '사업 문의', value: 'sales@joeun-enc.co.kr' },
                  { label: '24시간 긴급대응', value: '1588-0000' },
                  { label: '업무시간', value: '평일 09:00 — 18:00' },
                ].map((i) => (
                  <div key={i.label} className="info-item">
                    <div className="info-label">{i.label}</div>
                    <div className="info-value">{i.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--color-border)', padding: 32, marginTop: 24 }}>
                <h3 style={{ fontSize: 18, marginBottom: 16 }}>전국 거점</h3>
                <ul style={{ fontSize: 14, color: 'var(--color-text-light)', lineHeight: 2 }}>
                  <li><strong style={{ color: 'var(--color-text)' }}>본사 (서울)</strong> · 강남구 테헤란로</li>
                  <li><strong style={{ color: 'var(--color-text)' }}>중부지사 (대전)</strong> · 유성구</li>
                  <li><strong style={{ color: 'var(--color-text)' }}>남부지사 (부산)</strong> · 해운대구</li>
                  <li><strong style={{ color: 'var(--color-text)' }}>호남지사 (광주)</strong> · 광산구</li>
                  <li><strong style={{ color: 'var(--color-text)' }}>수도권지사 (인천)</strong> · 연수구</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">FAQ</span>
            <h2>자주 묻는 질문</h2>
          </div>
          <div style={{ maxWidth: 860, margin: '0 auto' }} className="faq-list">
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
            <h2>오시는 길</h2>
            <p>서울특별시 강남구 테헤란로 000, 조은빌딩 10층</p>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg,#1a3a5c 0%,#0d2540 100%)',
              aspectRatio: '16/6',
              display: 'grid',
              placeItems: 'center',
              color: 'rgba(255,255,255,0.6)',
              fontSize: 24,
              position: 'relative',
              borderRadius: 8,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>⌖</div>
              <div>지도 영역</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>
                Kakao Map 또는 Naver Map 임베드 위치
              </div>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: 40 }}>
            <div>
              <h4 style={{ fontSize: 14, letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 12 }}>지하철</h4>
              <p style={{ fontSize: 15, color: 'var(--color-text-light)' }}>
                2호선 강남역 0번 출구 도보 5분<br />
                신분당선 강남역 0번 출구 도보 3분
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 14, letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 12 }}>버스</h4>
              <p style={{ fontSize: 15, color: 'var(--color-text-light)' }}>
                간선 146, 360, 740<br />
                지선 4412, 6411
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 14, letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 12 }}>자가용</h4>
              <p style={{ fontSize: 15, color: 'var(--color-text-light)' }}>
                건물 내 지하주차장 이용<br />
                방문객 2시간 무료 (안내 데스크 등록)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
