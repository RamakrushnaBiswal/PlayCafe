import React, { useEffect } from "react";

const GoogleTranslate = () => {
    useEffect(() => {
        let retryCount = 0;
        const maxRetries = 50; // Adjust as needed

        window.googleTranslateInit = () => {
            if (!window.google?.translate?.TranslateElement) {
                if (retryCount < maxRetries) {
                    retryCount++;
                } else {
                    console.error('Failed to initialize Google Translate after maximum retries.');
                }
                setTimeout(window.googleTranslateInit, 100);
            } else {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,nl,fr,de,it,ta,te',
                    layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
                    defaultLanguage: 'en',
                    autoDisplay: false,
                }, 'google_element');
            }
        };

        const loadGoogleTranslateScript = () => {
            if (!document.getElementById("google_translate_script")) {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
                script.id = "google_translate_script";
                script.onerror = () => console.error('Error loading Google Translate script');
                document.body.appendChild(script);
            }
        };

        loadGoogleTranslateScript();

        if (window.google?.translate) {
            window.googleTranslateInit();
        }

        return () => {
            // Cleanup logic if necessary
        };
    }, []);

    return (
        <div id="google_element" className="pl-20 max-sm:pl-0 md:pl-0">
            <style jsx>{`
                .goog-te-combo {
                    @apply w-full bg-white border border-gray-300 rounded px-2 py-1 text-sm;
                }
                .goog-te-gadget {
                    @apply flex flex-col items-start text-xs text-gray-500;
                }
                .goog-te-gadget > div {
                    @apply w-full mb-1;
                }
                .goog-te-gadget > span {
                    @apply flex flex-col items-start;
                }
                .goog-te-gadget .goog-logo-link {
                    @apply flex items-center;
                }
                .goog-te-gadget .goog-logo-link img {
                    @apply ml-1;
                }
                .goog-te-gadget > span > a:last-child {
                    @apply mt-[-2px];
                }
                .goog-te-banner-frame {
                    @apply hidden !important;
                }
                .goog-te-menu-frame {
                    @apply max-h-96 overflow-y-auto bg-white border border-gray-300 rounded;
                }
                .skiptranslate > iframe {
                    @apply h-0 border-none shadow-none;
                }
            `}</style>
        </div>
    );
};

export default GoogleTranslate;