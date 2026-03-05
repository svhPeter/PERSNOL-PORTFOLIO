import Script from 'next/script';
import './globals.css';

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
        <link href="/css/app.css" rel="stylesheet" />
      </head>
      <body className="home">
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
        <Script src="/js/vendor.bundle.js" strategy="afterInteractive" />
        <Script id="videojs-guard" strategy="afterInteractive">
          {`(function(){
            var stub = { ready: function(f){ (f&&f)(); return this; }, on: function(){ return this; }, play: function(){ return this; }, pause: function(){ return this; } };
            if (typeof window.videojs !== 'undefined') {
              var orig = window.videojs;
              window.videojs = function(el, opts) {
                var target = typeof el === 'string' ? document.getElementById(el) : el;
                if (!target || !target.tagName) return stub;
                try {
                  var result = orig.apply(this, arguments);
                  return (result && typeof result.on === 'function') ? result : stub;
                } catch (e) {
                  return stub;
                }
              };
            } else {
              window.videojs = function(){ return stub; };
            }
          })();`}
        </Script>
        <Script id="videojs-fix" strategy="afterInteractive">
          {`(function(){
            var ensure = function(id) {
              if (!document.getElementById(id)) {
                var v = document.createElement('video');
                v.id = id;
                v.setAttribute('playsinline','');
                v.setAttribute('muted','');
                v.setAttribute('loop','');
                v.setAttribute('preload','none');
                v.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;visibility:hidden;pointer-events:none';
                document.body.appendChild(v);
              }
            };
            ensure('videoPlayer');
            ensure('videoPlayer_red');
          })();`}
        </Script>
        <Script id="app-bundle-loader" strategy="afterInteractive">
          {`(function(){
            function loadAppBundle() {
              var s = document.createElement('script');
              s.src = '/js/app.bundle.js';
              s.async = false;
              document.body.appendChild(s);
            }
            if (document.readyState === 'complete') {
              setTimeout(loadAppBundle, 300);
            } else {
              window.addEventListener('load', function(){ setTimeout(loadAppBundle, 300); });
            }
          })();`}
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
          {`
            (function(){
              var startBtn = document.getElementById('js-page-loading_start');
              if (startBtn) setTimeout(function(){ startBtn.click(); }, 3000);
              setTimeout(function(){
                document.documentElement.style.setProperty('overflow-y','auto','important');
                document.body.style.setProperty('overflow-y','auto','important');
                document.addEventListener('wheel', function(e){
                  var h = document.documentElement.scrollHeight - window.innerHeight;
                  if (h < 50) return;
                  var top = window.scrollY || document.documentElement.scrollTop;
                  if ((e.deltaY > 0 && top < h - 2) || (e.deltaY < 0 && top > 2)) {
                    window.scrollBy(0, e.deltaY);
                    e.preventDefault();
                  }
                }, { passive: false });
              }, 4000);
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
