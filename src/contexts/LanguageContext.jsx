import { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

export const languages = {
  en: {
    name: 'English',
    code: 'en',
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    features: 'Features',
    bookNow: 'Book Now',
    currentLanguage: 'Current Language',
    changeLanguage: 'Change Language',
    // Home Page
    greeting: 'Welcome to HyperLocal Pro',
    tagline: 'India\'s Most Intelligent Home Services Platform',
    predictiveHealth: 'Predictive Home Health',
    predictiveDesc: 'AI digital twin monitors appliances, predicts failures up to 30 days ahead.',
    autoBooking: 'Auto-Booking Mode',
    autoBookingDesc: 'Enable Set & Forget — app detects issues and books the best professional automatically.',
    blockchainTrust: 'Blockchain Trust',
    blockchainDesc: 'Every job permanently stored on-chain. Tamper-proof reputation for life.',
    moodAware: 'AI Mood-Aware Booking',
    moodAwareDesc: 'Detects urgency from typing speed and tone. Prioritizes faster slots automatically.',
    offlineMode: 'Offline & Rural Mode',
    offlineModeDesc: 'Book via missed call or SMS. AI converts it into a full service request.',
    multiLanguage: 'Multi-language AI',
    multiLanguageDesc: 'Supports Tamil, Hindi, Telugu, Kannada and more. Truly inclusive.',
  },
  ta: {
    name: 'தமிழ்',
    code: 'ta',
    // Navigation
    home: 'வீடு',
    dashboard: 'டாஷ்போர்ட்',
    features: 'அம்சங்கள்',
    bookNow: 'இப்போது புக் செய்யவும்',
    currentLanguage: 'தற்போதைய மொழி',
    changeLanguage: 'மொழி மாற்று',
    // Home Page
    greeting: 'HyperLocal Pro க்கு வரவேற்கிறோம்',
    tagline: 'இந்தியாவின் மிகவும் புத்திசாலி வீட்டு சேவை தளம்',
    predictiveHealth: 'முன்கணிப்பு வீட்டு ஆரோக்கியம்',
    predictiveDesc: 'AI டிজிটல் ட்வின் சாதனங்களை கண்காணிக்கிறது, 30 நாட்களுக்கு முன்னதாக தோல்விகளை முன்கணிக்கிறது.',
    autoBooking: 'தானாகவே புக்கிங் பயன்முறை',
    autoBookingDesc: 'அமை மற்றும் மறந்துவிடு - செயல்பாடு சிக்கல்களை கண்டறிந்து சிறந்த நிபுணரை தானாகவே புக் செய்கிறது.',
    blockchainTrust: 'தொகுதிசங்கிலி நம்பிக்கை',
    blockchainDesc: 'ஒவ்வொரு வேலையும் நிரந்தரமாக சங்கிலியில் சேமிக்கப்பட்டுள்ளது. வாழ்க்கையின் பொய்மையற்ற க声்ஞ்சனம்.',
    moodAware: 'AI மனநிலை-விழிப்புணர்வு புக்கிங்',
    moodAwareDesc: 'தட்டச்சு வேகம் மற்றும் டோன் से জরুري detect செய்கிறது। வேகமான slotsக்கு முன்னுரிமை தரும்.',
    offlineMode: 'ஆஃப்லைன் & கிராமीண பயன்முறை',
    offlineModeDesc: 'மிஸ் கால் அல்லது SMS மூலம் ப்க் செய்யவும். AI ஐ பூர்ணமான சேவை கோரிக்கையாக மாற்றுகிறது.',
    multiLanguage: 'பல-மொழி AI',
    multiLanguageDesc: 'தமிழ், வடமொழி, தெலுங்கு, கன்னடம் மற்றும் மேலும் ஆதரிக்கிறது. உண்மையான அனுபவி।',
  },
  hi: {
    name: 'हिन्दी',
    code: 'hi',
    // Navigation
    home: 'होम',
    dashboard: 'डैशबोर्ड',
    features: 'विशेषताएं',
    bookNow: 'अब बुक करें',
    currentLanguage: 'वर्तमान भाषा',
    changeLanguage: 'भाषा बदलें',
    // Home Page
    greeting: 'HyperLocal Pro में आपका स्वागत है',
    tagline: 'भारत का सबसे बुद्धिमान गृह सेवा मंच',
    predictiveHealth: 'भविष्यसूचक गृह स्वास्थ्य',
    predictiveDesc: 'AI डिजिटल जुड़वां उपकरणों की निगरानी करता है, 30 दिन पहले विफलता की भविष्यवाणी करता है।',
    autoBooking: 'ऑटो-बुकिंग मोड',
    autoBookingDesc: 'सेट और भूल जाओ - ऐप समस्याओं का पता लगाता है और सर्वश्रेष्ठ पेशेवर को स्वचालित रूप से बुक करता है।',
    blockchainTrust: 'ब्लॉकचेन विश्वास',
    blockchainDesc: 'हर नौकरी स्ट्रिंग पर स्थायी रूप से संग्रहीत। जीवन के लिए जाली-प्रमाण प्रतिष्ठा।',
    moodAware: 'AI मूड-जागरूक बुकिंग',
    moodAwareDesc: 'टाइपिंग गति और टोन से तात्कालिकता का पता लगाता है। तेज़ स्लॉट को स्वचालित रूप से प्राथमिकता देता है।',
    offlineMode: 'ऑफलाइन और ग्रामीण मोड',
    offlineModeDesc: 'मिस्ड कॉल या एसएमएस के माध्यम से बुक करें। AI इसे पूर्ण सेवा अनुरोध में परिवर्तित करता है।',
    multiLanguage: 'बहुभाषी AI',
    multiLanguageDesc: 'तमिल, हिंदी, तेलुगु, कन्नड़ और अधिक का समर्थन करता है। वास्तव में समावेशी।',
  },
  bn: {
    name: 'বাংলা',
    code: 'bn',
    // Navigation
    home: 'হোম',
    dashboard: 'ড্যাশবোর্ড',
    features: 'বৈশিষ্ট্যসমূহ',
    bookNow: 'এখনই বুক করুন',
    currentLanguage: 'বর্তমান ভাষা',
    changeLanguage: 'ভাষা পরিবর্তন করুন',
    // Home Page
    greeting: 'HyperLocal Pro তে স্বাগতম',
    tagline: 'ভারতের সবচেয়ে বুদ্ধিমান গৃহ সেবা প্ল্যাটফর্ম',
    predictiveHealth: 'ভবিষ্যদ্বাণীমূলক গৃহ স্বাস্থ্য',
    predictiveDesc: 'AI ডিজিটাল টুইন যন্ত্রপাতি নিরীক্ষণ করে, 30 দিন আগে ব্যর্থতার পূর্বাভাস দেয়।',
    autoBooking: 'স্বয়ংক্রিয় বুকিং মোড',
    autoBookingDesc: 'সেট করুন এবং ভুলে যান - অ্যাপ সমস্যা সনাক্ত করে এবং স্বয়ংক্রিয়ভাবে সেরা পেশাদার বুক করে।',
    blockchainTrust: 'ব্লকচেইন বিশ্বস্ততা',
    blockchainDesc: 'প্রতিটি কাজ চেইনে স্থায়ীভাবে সংরক্ষিত। জীবনের জন্য জালিয়াতি-প্রমাণ সুনাম।',
    moodAware: 'AI মেজাজ-সচেতন বুকিং',
    moodAwareDesc: 'টাইপিং গতি এবং টোন থেকে জরুরিতা সনাক্ত করে। দ্রুত স্লট স্বয়ংক্রিয়ভাবে অগ্রাধিকার দেয়।',
    offlineMode: 'অফলাইন এবং গ্রামীণ মোড',
    offlineModeDesc: 'মিস করা কল বা এসএমএসের মাধ্যমে বুক করুন। AI এটি একটি সম্পূর্ণ সেবা অনুরোধে রূপান্তরিত করে।',
    multiLanguage: 'বহুভাষিক AI',
    multiLanguageDesc: 'তামিল, হিন্দি, তেলুগু, কন্নড় এবং আরও অনেক কিছু সমর্থন করে। সত্যিকারের অন্তর্ভুক্তিমূলক।',
  },
  te: {
    name: 'తెలుగు',
    code: 'te',
    // Navigation
    home: 'హోమ్',
    dashboard: 'డ్యాష్‌బోర్డ్',
    features: 'లక్షణాలు',
    bookNow: 'ఇప్పుడే బుక్ చేయండి',
    currentLanguage: 'ప్రస్తుత భాష',
    changeLanguage: 'భాషను మార్చండి',
    // Home Page
    greeting: 'HyperLocal Pro కు స్వాగతం',
    tagline: 'భారతదేశం యొక్క అత్యంత తెలివైన గృహ సేవల ప్లాట్‌ఫారమ్',
    predictiveHealth: 'ఊహాత్మక గృహ ఆరోగ్యం',
    predictiveDesc: 'AI డిజిటల్ ట్విన్ పరికరాలను పర్యవేక్షిస్తుంది, 30 రోజుల ముందు విఫలතలను ఊహిస్తుంది.',
    autoBooking: 'స్వయంచాలక బుకింగ్ మోడ్',
    autoBookingDesc: 'సెట్ చేసి మరచిపోండి - యాప్ సమస్యలను గుర్తించి, సর్వోత్తమ నిపుణుడిని స్వయంచాలకంగా బుక్ చేస్తుంది.',
    blockchainTrust: 'బ్లాక్‌చెయిన్ నమ్మకం',
    blockchainDesc: 'ప్రతిটి పని చెయిన్‌లో శాశ్వతంగా నిల్వ చేయబడుతుంది. జీవితకాలం కల్పిత-రుజువు ఖ్యాతి.',
    moodAware: 'AI మానసిక స్థితి-సচేతన బుకింగ్',
    moodAwareDesc: 'టైపింగ్ వేగం మరియు టోన్ నుండి విషయ సంకీర్ణతను గుర్తిస్తుంది. వేగవంతమైన స్లాట్‌లకు స్వయంచాలకంగా ప్రాధాన్యం ఇస్తుంది.',
    offlineMode: 'ఆఫ్‌లైన్ & గ్రామీణ మోడ్',
    offlineModeDesc: 'మిస్ కాల్ లేదా SMS ద్వారా బుక్ చేయండి. AI దీనిని పూర్తి సేవా అభ్యర్థనగా మారుస్తుంది.',
    multiLanguage: 'బహుభాషా AI',
    multiLanguageDesc: 'తమిళం, హిందీ, తెలుగు, కన్నడ మరియు మరిన్నవి సమర్థిస్తుంది. నిజమైన కలుపుకొని రావటం.',
  },
  kn: {
    name: 'ಕನ್ನಡ',
    code: 'kn',
    // Navigation
    home: 'ಮನೆ',
    dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
    bookNow: 'ಈಗಲೇ ಬುಕ್ ಮಾಡಿ',
    currentLanguage: 'ಪ್ರಸ್ತುತ ಭಾಷೆ',
    changeLanguage: 'ಭಾಷೆ ಬದಲಾಯಿಸಿ',
    // Home Page
    greeting: 'HyperLocal Pro ಗೆ ಸುಸ್ವಾಗತ',
    tagline: 'ಭಾರತದ ಅತ್ಯಂತ ಬುದ್ಧಿಮಾನ್ಯ ಮನೆ ಸೇವಾ ವೇದಿಕೆ',
    predictiveHealth: 'ಊಹೆಯ ಮನೆ ಆರೋಗ್ಯ',
    predictiveDesc: 'AI ಡಿಜಿಟಲ್ ಟ್ವಿನ್ ಸಾಧನಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತದೆ, 30 ದಿನಗಳ ಮೊದಲು ವೈಫಲ್ಯಗಳನ್ನು ಊಹಿಸುತ್ತದೆ.',
    autoBooking: 'ಸ್ವಯಂ-ಬುಕಿಂಗ್ ವಿಧಾನ',
    autoBookingDesc: 'ಸೆಟ್ ಮತ್ತು ಮರೆತುಬಿಡಿ - ಅ್ಯಾಪ್ ಸಮಸ್ಯೆಗಳನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಸ್ವಯಂ-ಕ್ರಿಯವಾಗಿ ಉತ್ತಮ ವೃತ್ತಿಪರನನ್ನು ಬುಕ್ ಮಾಡುತ್ತದೆ.',
    blockchainTrust: 'ಬ್ಲಾಕ್‌ಚೇನ್ ವಿಶ್ವಾಸ',
    blockchainDesc: 'ಪ್ರತಿಯೊಂದು ಕೆಲಸ ಶೃಂಖಲೆಯಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ಸಂರಕ್ಷಿತವಾಗಿದೆ. ಜೀವನಕಾಲದ ನಕಲಿ-ಪುರಾವೆ ಖ್ಯಾತಿ.',
    moodAware: 'AI ಮನಸ್ಸು-ಅರಿವಿನ ಬುಕಿಂಗ್',
    moodAwareDesc: 'ಟೈಪಿಂಗ್ ವೇಗ ಮತ್ತು ಟೋನ್‌ನಿಂದ ತುರ್ತತೆಯನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ. ವೇಗದ ಸ್ಲಾಟ್‌ಗಳನ್ನು ಸ್ವಯಂ-ಕ್ರಿಯವಾಗಿ ಆದ್ಯತೆ ನೀಡುತ್ತದೆ.',
    offlineMode: 'ಆಫ್‌ಲೈನ್ ಮತ್ತು ಗ್ರಾಮೀಣ ವಿಧಾನ',
    offlineModeDesc: 'ಮಿಸ್ ಕಾಲ್ ಅಥವಾ ಎಸ್‌ಎಂಎಸ್‌ನ ಮೂಲಕ ಬುಕ್ ಮಾಡಿ. AI ಅದನ್ನು ಸಂಪೂರ್ಣ ಸೇವಾ ವಿನಂತಿಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ.',
    multiLanguage: 'ಬಹುಭಾಷಾ AI',
    multiLanguageDesc: 'ತಮಿಳು, ಹಿಂದಿ, ತೆಲುಗು, ಕನ್ನಡ ಮತ್ತು ಹೆಚ್ಚಿನವುಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. ನಿಜವಾದ ಸಮಾವೇಶನ.',
  },
  ml: {
    name: 'മലയാളം',
    code: 'ml',
    // Navigation
    home: 'ഹോം',
    dashboard: 'ഡാഷ്‌ബോര്‍ഡ്',
    features: 'ഫീച്ചറുകൾ',
    bookNow: 'ഇപ്പോൾ ബുക്കുചെയ്യുക',
    currentLanguage: 'നിലവിലെ ഭാഷ',
    changeLanguage: 'ഭാഷ മാറ്റുക',
    // Home Page
    greeting: 'HyperLocal Pro ആയി സ്വാഗതം',
    tagline: 'ഭാരതത്തിലെ ഏറ്റവും മേധാവி ഹോം സര്‍വീസ് പ്ലാറ്റ്ഫോം',
    predictiveHealth: 'പ്രവചനാത്മക വീട്ടിന്റെ ആരോഗ്യം',
    predictiveDesc: 'എഐ ഡിജിറ്റൽ ട്വിൻ ഉപകരണങ്ങൾ നിരീക്ഷിക്കുകയും 30 ദിവസം മുമ്പ് തകരാറുകൾ പ്രവചിക്കുകയും ചെയ്യുന്നു.',
    autoBooking: 'സ്വയംരേഖ ബുക്കിംഗ് മോഡ്',
    autoBookingDesc: 'സെറ്റ് ചെയ്ത് മറന്നുപോകുക - അപ്പ് പ്രശ്നങ്ങൾ കണ്ടെത്തുകയും ഏറ്റവും നല്ല പ്രൊഫഷണലിനെ സ്വയമായി ബുക്ക് ചെയ്യുകയും ചെയ്യുന്നു.',
    blockchainTrust: 'ബ്ലോക്കെച്ചെയ്ൻ വിശ്വാസം',
    blockchainDesc: 'ഓരോ ജോലിയും ശൃംഖലയിൽ സ്ഥാപി എന്നിരിക്കുന്നു. കെണ്ടെലി പ്രൂഫ് കീര്തി.',
    moodAware: 'എഐ മന:സ്ഥിതി-ബോധപൂർവ്വം ബുക്കിംഗ്',
    moodAwareDesc: 'ടൈപിംഗ് വേഗതയും ടോൺ നിന്നും അത്യാവശ്യതയെ കണ്ടെത്തുന്നു. വേഗതയേറിയ സ്ലോട്ടുകൾക്ക് സ്വയം മുൻഗണന നല്കുന്നു.',
    offlineMode: 'ഓഫ്‌ലൈൻ ഹോം ഓൾ മോഡ്',
    offlineModeDesc: 'നിയമിത കഴിച്ച് അല്ലെങ്കിൽ എസ്എംএസ മഴ്ജന കൊയിക്കുക. കണ്ടെന്ത് ജെന്ലെ സേവന ഡ്യവതിലെഒoscopy്യിലി പൂര്ണ്ണ സയവ ബോദ്ധ്തേയായി മാര്‍പെണ്ട് കെന്ത്യതെയ്റെയിനിലെ ഈ പാഫ്കെ നിലെ അന്നെലെ നേയിലെ ഇരെ.',
    multiLanguage: 'പഞ്ചാഷ്ട ഭാഷ എഐ',
    multiLanguageDesc: 'തമിഴ്, ഹിന്ദി, തെലുഗ്, കന്നഡ എന്നിവയെ പിണ്ഡ്. വാസ്തവിക കെില്ലായിലെ.',
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage')
      if (savedLanguage && languages[savedLanguage]) {
        setLanguage(savedLanguage)
      }
    }
    setMounted(true)
  }, [])

  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setLanguage(langCode)
      // Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferredLanguage', langCode)
      }
      // Force re-render of all components using this context
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: langCode }))
    }
  }

  const t = (key) => {
    return languages[language]?.[key] || languages.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, languages, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}
