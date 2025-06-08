# 🎮 League of Legends 아이템 사용 빈도와 승률의 상관관계
[프로젝트 설명](https://docs.google.com/presentation/d/1_TP5WkTrBMgQR4E5sjE4-FAQdvJhzd35/edit?usp=sharing&ouid=107631402573327716926&rtpof=true&sd=true)
<br />
**개발 환경**: Google Colab / Python  
**분석 도구**: Pandas, Scikit-learn, Matplotlib  
**데이터 수집**: Riot Games API

---

## 📌 프로젝트 개요

본 프로젝트는 리그 오브 레전드(LoL)의 실시간 게임 데이터를 기반으로,  
**아이템 사용 빈도와 게임 승률 간의 관계**를 분석한 데이터 분석 실습입니다.  
총 100건의 게임 데이터를 수집하여 **PCA 차원 축소 및 선형 회귀 분석**을 수행하고,  
특정 아이템이 게임 결과에 미치는 영향을 통계적으로 탐색하는 것을 목표로 하였습니다.

---

## 🧩 사용 기술

| 구분 | 기술 |
|------|------|
| 데이터 수집 | Riot Games API, Python `requests` |
| 분석 도구 | pandas, numpy, scikit-learn |
| 시각화 | matplotlib, seaborn |
| 전처리 | MinMaxScaler (정규화), 결측치 제거 |
| 분석 기법 | PCA (주성분 분석), Linear Regression (선형 회귀) |

---

## 🧪 데이터 개요

- 총 **100건의 게임 기록**
- 각 게임마다 수집한 컬럼:
  - `summoner_name`: 소환사 이름
  - `win`: 승리 여부 (1: 승리, 0: 패배)
  - `items`: 사용한 아이템 목록 (최대 6개)
  - `game_duration`: 게임 시간(초)

---

## 🔧 분석 절차

1. **Riot Games API로 게임 데이터 수집**
2. **아이템 빈도수 계산**
   - 각 게임에서 등장한 아이템별 빈도 집계
3. **MinMaxScaler로 정규화**
   - 가장 많이 사용된 아이템(0번 아이템)은 71번 등장 → 정규화 후 `1.0`
4. **PCA를 통한 차원 축소**
   - 고차원 아이템 벡터를 2D로 축소하여 시각화 및 분석
5. **선형 회귀 분석**
   - 특정 아이템 사용 여부와 `win` 간의 상관관계 모델링

---

## 📈 주요 결과

- 가장 많이 사용된 아이템은 **0번 아이템 (71회 등장)**  
- 정규화 결과, 해당 아이템은 입력 특성 중 **최댓값(1.0)**으로 설정됨
- PCA 분석을 통해 아이템 구성 패턴의 군집 특성을 시각적으로 확인
![image](https://github.com/user-attachments/assets/8aaede9b-8e22-4988-8a4d-ca2cb254742b)
![image](https://github.com/user-attachments/assets/c19bf601-a2e6-441a-903d-4100237be909)
![image](https://github.com/user-attachments/assets/3f3b48e3-6786-4507-872f-af070c2ca9f9)


---

## 📚 배운 점

- Riot Games API 사용법 및 게임 데이터 자동 수집 실습
- 차원 축소(PCA)와 회귀 분석을 실제 데이터에 적용해봄
- 게임 UX 관점에서 "아이템 선택이 성능에 미치는 영향"을 수치화해보는 데이터 과학적 시도

---

## 📎 관련 자료

- 🔗 [Riot API 문서](https://developer.riotgames.com/)

