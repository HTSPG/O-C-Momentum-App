const quotes = [
  {
    quote:
      "당신이 읽는 Fundamentals(경제기초)들은 일반적으로 쓸모없다.\n 시장은 이미 가격에 대해 의심하고 있기 때문이다. \n그래서 나는 Funny-mentals라고 부른다",
    author: "에드 세이코타",
  },
  {
    quote:
      "오직 모든 요소가 당신의 기호에 맞을 때 시장에 참여하라. \n단 한명의 사람도 아무때나 시장에 참여해서 이길수 없다. \n경제적 이유 뿐만 아니라 감정적 이유로 인해 완벽하게 시장해서 벗어나야 할 때가 있다.",
    author: "제시 리버모어",
  },
  {
    quote:
      "많은 트레이더 들은 높은 지점에 사고 낮은 지점에 판다. \n정확히 반대로 하는것이 바른 전략이다",
    author: "존 폴슨",
  },
  {
    quote:
      "그때는 원칙과 자금관리를 배워야만 한다고 처음으로 결심했던 때다.\n 내게는 지우고 싶은 경험이자 구석에 몰린 심정으로, 트레이더로써 내능력에 대해 질문 했던 때이자 그만두지 않기로 결정했을 때이다.\n 나는 돌아가서 싸우리라 결심했다. 나는 내 트레이딩에 대해 원칙과 효용을 갖추리라 결심했다.",
    author: "폴 튜더 존슨",
  },
  {
    quote:
      "나는 분명히 역추세 매매를 했다.\n그러나 경험상 단신이 어설프게 그것을 할 필요는 없다고 생각한다.",
    author: "리차드 데니스",
  },
  {
    quote:
      "나는 '조지 소로스'로부터 많은 것을 배웠지만, 아마도 내가 가장 중요한 것은 \n트레이딩에 있어 내가 맞았냐, 틀렸냐가 아니라 내가 옳았을 때 얼마를 벌었고, 내가 틀렸을 때 얼마를 잃었냐이다.",
    author: "스탠리 드럭켄 밀러",
  },
  {
    quote:
      "시장은 끊임없이 불확실하고 유동적인 상태에 있으며\n 수익은 명백한 것을 진실이라 여기지 않고 예상치 못한것에 배팅할 때 만들어진다",
    author: "조지 소로스",
  },
  {
    quote:
      "트레이더로써 성공하는 방법의 첫번 째 고려대상은 성공적으로 거래하는 것이다.\n 돈은 두번 째 고려대상이다.",
    author: "알랙산더 엘더, 심리투자의 법칙",
  },
  {
    quote:
      "You can be free. You can live and work anywhere in the world.\n You can be independent from routine and not answer to anybody.",
    author: "Alexander Elder",
  },
  {
    quote: "I believe in analysis and not forecasting.",
    author: "Nicolas Darvas",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
