import Script from 'next/script';
import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulsami.dev'),
  title: 'Abdul Sami - Full Stack Developer & UI/UX Designer',
  description:
    "I'm a Computer Science graduate with expertise in UI/UX design, AI-assisted full-stack development, React, Next.js, and Flutter. Building clean, functional digital products.",
  openGraph: {
    title: 'Abdul Sami - Full Stack Developer & UI/UX Designer',
    description:
      "I'm a Computer Science graduate with expertise in UI/UX design, AI-assisted full-stack development, React, Next.js, and Flutter. Building clean, functional digital products.",
    images: ['/images/screenshot.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="js no-system-cursor">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'history.scrollRestoration = "manual";',
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: 'var siteData = {"siteUrl": ""};',
          }}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <meta name="theme-color" content="#0d0d0d" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="/css/app.css" rel="stylesheet" />
      </head>
      <body className="home">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var noop=function(){return this;};window.videojs=window.videojs||function(){return{on:noop,off:noop,one:noop,ready:function(f){f&&setTimeout(f,0);return this},trigger:noop,addClass:noop,removeClass:noop,el:function(){return document.createElement("div")},dispose:noop};};})();`,
          }}
        />
        <Script src="/js/caching.js" strategy="beforeInteractive" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-79VFDFP12E"
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-79VFDFP12E');
          `}
        </Script>
        <Script id="cursor-video-fix" strategy="afterInteractive">
          {`(function(){
            var CONTRACT_R = 56;
            function init() {
              var video = document.querySelector('.video');
              if (!video) return setTimeout(init, 200);
              function onEnter() {
                document.body.setAttribute('data-cursor-contract', '1');
                document.documentElement.style.setProperty('--r', CONTRACT_R + 'px');
              }
              function onLeave() {
                document.body.removeAttribute('data-cursor-contract');
                document.documentElement.style.removeProperty('--r');
              }
              video.addEventListener('mouseenter', onEnter);
              video.addEventListener('mouseleave', onLeave);
              document.addEventListener('mousemove', function(e) {
                if (video.contains(e.target)) {
                  requestAnimationFrame(function() {
                    document.documentElement.style.setProperty('--r', CONTRACT_R + 'px');
                  });
                }
              });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', init);
            } else {
              setTimeout(init, 100);
            }
          })();`}
        </Script>
        <Script src="/js/email-decode.min.js" strategy="afterInteractive" />
        <Script id="preloader-scroll" strategy="afterInteractive">
          {`(function(){
            function enableScroll(){
              document.documentElement.style.setProperty('overflow-y','auto','important');
              document.body.style.setProperty('overflow-y','auto','important');
              document.documentElement.style.setProperty('-webkit-overflow-scrolling','touch','important');
              document.body.style.setProperty('-webkit-overflow-scrolling','touch','important');
              document.addEventListener('wheel', function(e){
                var h = document.documentElement.scrollHeight - window.innerHeight;
                if (h < 50) return;
                var top = window.scrollY || document.documentElement.scrollTop;
                if ((e.deltaY > 0 && top < h - 2) || (e.deltaY < 0 && top > 2)) {
                  window.scrollBy(0, e.deltaY);
                  e.preventDefault();
                }
              }, { passive: false });
            }
            var startBtn = document.getElementById('js-page-loading_start');
            var triggered = false;
            function trigger(){
              if (triggered) return;
              triggered = true;
              enableScroll();
            }
            if (startBtn) {
              startBtn.addEventListener('click', trigger);
              setTimeout(function(){ if (startBtn) startBtn.click(); }, 3000);
            }
            var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            setTimeout(trigger, isTouch ? 500 : 4000);
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
