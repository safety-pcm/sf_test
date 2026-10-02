// ============================================================
//  설정 파일 - 이 파일만 고치면 다른 회사/현장용으로 바꿀 수 있습니다.
//  (설치안내.md 의 7번 단계에서 firebase 항목을 채웁니다)
// ============================================================
export const CONFIG = {
  appName: "신규 입사자 QR 등록",
  companyName: "",      // 예: 대라수건설(주)  → 근로계약서 사업체명에 자동 입력
  siteName: "",         // 예: OO아파트 신축공사 → 근무장소, "현장 소장 귀하"에 자동 입력

  // false(권장): 주민(외국인)등록번호를 앞 6자리 + 성별 1자리까지만 저장합니다.
  // true: 13자리 전체를 저장합니다. (유출 시 위험이 커지므로 꼭 필요할 때만)
  storeFullRrn: false,

  // Firebase 콘솔 > 프로젝트 설정 > 내 앱 > 웹 앱의 firebaseConfig 값을 붙여넣으세요.
  firebase: {
    apiKey: "여기에 붙여넣기",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
