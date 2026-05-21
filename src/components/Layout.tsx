import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const NAV_ITEMS = [
  { to: '/about', label: '회사소개' },
  { to: '/business', label: '사업분야' },
  { to: '/projects', label: '프로젝트' },
  { to: '/sustainability', label: '지속가능경영' },
  { to: '/support', label: '고객지원' },
];

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const options = [
    { value: 'classic', label: '클래식' },
    { value: 'sleek', label: '모던' },
    { value: 'studio', label: '스튜디오' },
  ] as const;
  return (
    <div className="theme-switch" role="group" aria-label="테마 전환">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={theme === o.value ? 'active' : ''}
          onClick={() => setTheme(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <ThemeSwitch />
        <Link to="/support">고객문의</Link>
        <Link to="/support#location">오시는 길</Link>
        <a href="#">채용</a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-mark">조</span>
          <span>
            조은건설
            <small style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, marginLeft: 6 }}>
              JOEUN E&amp;C
            </small>
          </span>
        </Link>
        <nav className={`nav${open ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          ≡
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-mark">조</span>
              <span>조은건설</span>
            </div>
            <p>
              (주)조은건설<br />
              대표이사 김조은<br />
              사업자등록번호 123-45-67890<br />
              서울특별시 강남구 테헤란로 000, 10층
            </p>
          </div>
          <div>
            <h4>회사</h4>
            <ul>
              <li><Link to="/about">회사소개</Link></li>
              <li><Link to="/about#history">연혁</Link></li>
              <li><Link to="/about#values">경영이념</Link></li>
            </ul>
          </div>
          <div>
            <h4>사업</h4>
            <ul>
              <li><Link to="/business#mechanical">기계설비</Link></li>
              <li><Link to="/business#fire">소방시설</Link></li>
              <li><Link to="/projects">프로젝트</Link></li>
            </ul>
          </div>
          <div>
            <h4>문의</h4>
            <ul>
              <li>대표 02-0000-0000</li>
              <li>contact@joeun-enc.co.kr</li>
              <li><Link to="/support">고객지원</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 JOEUN E&amp;C Co., Ltd. All rights reserved.</div>
          <div>
            <a href="#">개인정보처리방침</a> · <a href="#">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Topbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
