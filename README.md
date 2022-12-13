## SEED Project

SEED Project는 탬플릿 프로젝트로, 최소한의 개발 가이드 역할을 할 프로젝트입니다.

### 디렉토리 구조

```
public
├─locales (번역파일)
src
├─common
│ ├── config
│ ├── layout
│ └── ui (외부 데이터 의존성이 없는 재사용 UI)
│     ├── counter
│     └── modal (portal)
├─feature (상태에 따른 UI, config, queryKey, api, useQuery, recoil)
│ ├── auth
│ ├── cart
│ └── locales
├─pages
└─services (storage, format 등 util 함수)
  └── format (number, date ...)
```

![image](https://user-images.githubusercontent.com/89558973/206370294-3651c224-d573-4bfd-a756-38f421505d47.png)
