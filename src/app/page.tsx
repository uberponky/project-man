// import Link from "next/link"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"

export default function Home() {
  return (
    <div className="body">
      <header className="header boxed-content">
        <div className="header__content">
          <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.27 85.99" className="header__logo">
            <g id="Layer_1-2">
                <polygon points="58.08 76.54 55.2 74.12 53.81 77.71 49.42 78.91 52.25 72.01 46.44 67.47 50.99 66.22 53.82 68.55 55.17 65.08 59.45 63.92 56.7 70.63 62.71 75.28 58.08 76.54"/>
                <path d="M43.96,77.19c.71-.19,1.23-.59,1.55-1.2.32-.61.37-1.34.13-2.2s-.64-1.44-1.22-1.79c-.58-.35-1.23-.43-1.94-.24s-1.23.59-1.55,1.19c-.32.6-.37,1.32-.14,2.16s.64,1.46,1.23,1.82c.59.36,1.23.44,1.94.25M44.82,80.36c-1.23.34-2.42.39-3.55.15-1.13-.23-2.1-.72-2.91-1.47-.81-.74-1.36-1.69-1.67-2.82s-.3-2.21.01-3.26c.32-1.05.9-1.96,1.75-2.73.85-.77,1.9-1.32,3.15-1.66s2.44-.4,3.57-.17c1.13.23,2.09.71,2.89,1.45.8.74,1.35,1.68,1.66,2.81s.31,2.23,0,3.28c-.31,1.05-.89,1.96-1.75,2.74-.86.78-1.91,1.33-3.16,1.68Z"/>
                <path d="M24.43,73.13l.77,2.84,2.9-.79c1.42-.39,2-1.06,1.74-2.01s-1.09-1.22-2.51-.83l-2.9.79ZM30.34,80.88c1.48-.4,2.08-1.1,1.81-2.1s-1.15-1.29-2.62-.89l-3.53.96.82,2.99,3.53-.96ZM32.82,75.18c.93.06,1.72.34,2.38.83.65.49,1.1,1.18,1.34,2.06.35,1.29.1,2.43-.76,3.42-.86.99-2.28,1.75-4.27,2.29l-8.05,2.2-4.02-14.73,7.62-2.08c1.9-.52,3.44-.57,4.63-.14,1.18.42,1.94,1.22,2.26,2.4.19.7.19,1.38,0,2.03-.2.65-.57,1.22-1.12,1.72Z"/>
                <polygon points="69.05 51.8 68.18 53.32 68.94 56.12 64.9 57.22 61.29 43.98 64.93 41.39 66.92 48.69 69.96 43.59 74.75 42.28 71.3 48.47 78.27 53.58 73.37 54.91 69.05 51.8"/>
                <path d="M56,47.2c1.43-.39,2.7-.28,3.8.32,1.1.6,1.89,1.75,2.35,3.45l1.78,6.52-4.05,1.1-1.6-5.87c-.42-1.56-1.27-2.16-2.53-1.82-.7.19-1.19.57-1.49,1.13-.3.56-.32,1.29-.08,2.19l1.5,5.51-4.05,1.1-2.71-9.92,3.45-2.54.34,1.24c.33-.59.77-1.09,1.33-1.5.56-.42,1.21-.72,1.94-.93"/>
                <path d="M43.99,60.42c.47-.13.85-.35,1.14-.67.29-.32.46-.72.5-1.2l-.27-.99-1.75.48c-1.18.32-1.66.87-1.45,1.64.1.35.31.59.63.73.33.14.72.14,1.19.01M41.61,51.12c1.92-.52,3.5-.49,4.74.1,1.24.59,2.11,1.77,2.59,3.55l1.73,6.33-3.77,1.03-.4-1.47c-.28,1.27-1.26,2.13-2.95,2.59-.89.24-1.71.3-2.45.17-.74-.13-1.34-.41-1.82-.85-.48-.44-.81-.99-.99-1.66-.29-1.08-.1-2.03.57-2.86.67-.82,1.89-1.48,3.63-1.95l2.3-.63c-.4-1.19-1.38-1.57-2.94-1.14-.55.15-1.09.39-1.61.72-.52.33-.94.7-1.25,1.12l-2.1-2.34c.52-.6,1.21-1.13,2.06-1.61.85-.48,1.74-.85,2.66-1.1Z"/>
                <polygon points="30.56 52.36 34.2 49.77 38.22 64.5 34.18 65.61 30.56 52.36"/>
                <path d="M20,56.88l.77,2.84,2.9-.79c1.42-.39,2-1.06,1.74-2.01s-1.09-1.22-2.51-.83l-2.9.79ZM25.91,64.63c1.48-.4,2.08-1.1,1.81-2.1s-1.15-1.29-2.62-.89l-3.53.96.82,2.99,3.53-.96ZM28.38,58.93c.93.06,1.72.34,2.38.83.65.49,1.1,1.18,1.34,2.06.35,1.29.1,2.43-.76,3.42-.86.99-2.28,1.75-4.27,2.3l-8.05,2.2-4.02-14.73,7.62-2.08c1.9-.52,3.44-.57,4.63-.14s1.94,1.22,2.26,2.4c.19.7.19,1.38,0,2.03-.2.65-.57,1.22-1.12,1.72Z"/>
                <path d="M65.36,74.56c1.03-.28,1.64-1.34,1.36-2.35s-1.34-1.62-2.37-1.34-1.64,1.34-1.36,2.35,1.34,1.62,2.37,1.34"/>
                <polygon points="54.78 0 62.32 27.62 19.59 39.28 8.87 0 0 0 13.56 49.69 72.8 33.53 63.65 0 54.78 0"/>
            </g>
          </svg>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li>
                Pricing
              </li>
              <li>
                Resources
              </li>
              <li>
                Changelog
              </li>
              <li className="header__btn header__btn--first">
                <LoginLink>Sign in</LoginLink>
              </li>
              <li className="header__btn header__btn--accent">
                Sign up
              </li>
            </ul>
            <svg className="header__menu-icon header__menu-icon--open" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
            </svg>
            <svg className="header__menu-icon header__menu-icon--close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
            </svg>
          </nav>
        </div>
      </header>

      <main className="main boxed-content">
        <div className="version-box">
          <svg className="version-box__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
          </svg>
          <p className="version-box__text">What&apos;s new in our <span className="version-box__text version-box__text--highlight">latest version 1.05</span></p>
        </div>
        <h1 className="hero-heading">Projects and proofing<br></br>for designers, by designers</h1>

        <div className="demo-box">
          <div className="demo-box__btn">
            Try our free demo
          </div>
          <img src="/images/trusted-headshots.png" className="demo-box__image" alt="User headshots"/>
          <p className="demo-box__wording">Trusted by thousands of designers</p>
        </div>
        <picture className="product-preview"> 
          <div className="product-preview__con">
            <div className="product-preview__image">
              <img className="product-preview__menu-preview" src="/images/tickets-mockup-menu.jpg" />
            </div>
            <div className="product-preview__image product-preview__image--delay">
              <img className="product-preview__body-preview" src="/images/tickets-mockup-body.jpg" />
            </div>
          </div>
        </picture>
      </main>
    </div>
  );
}


