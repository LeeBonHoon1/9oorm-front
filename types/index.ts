export interface Direction {
  id: number;
  value: string;
  address: string;
  description: string;
  href: string;
}

export interface Langueges {
  id: number
  value: string
  code: string
}

export interface Directions {
  north: Direction[];
  east: Direction[];
  west: Direction[];
  south: Direction[];
}

export interface Place {
  kr: Directions;
  jp: Directions;
  en: Directions;
  zh: Directions;
}

export const places: Place = {
  kr: {
    north: [
      { id: 1, value: '용두암', address: '제주시 용두암길 15', description: '용이 포요하며 바다에서 솟구쳐 오르는 형상을 띈 바위', href: "/youngdo.jpg" },
      { id: 2, value: '제주 러브랜드', address: '제주시 1100로 2894-72', description: '성을 주제로 한 테마공원으로 성을 예술로 승화시킨 작품들이 있다 ', href: "loveland.jpg" },
      { id: 3, value: '민속자연사박물관', address: '제주시 삼성로 40', description: '제주의 전통문화와 자연환경을 깊이 들여다보고 이해할 수 있는 박물관이다.', href: "museum.jpg" },
      { id: 4, value: '에코랜드', address: '제주시 조천읍 번영로 1278-169', description: '아이들과 가기 좋은 사계절 테마파크', href: "ecoland.jpg" },
    ],
    west: [
      { id: 1, value: '협재해변', address: '제주시 한림읍 한림로 329-10', description: '투명한 물에 에메랄드빛 물감을 풀어놓은 듯한 바다가 있는 해수욕장', href: "hyopjae.jpg" },
      { id: 2, value: '한림공원', address: '제주시 한림읍 한림로 300', description: '다양한 식물을 만날 수 있는 9개 테마로 이루어진 테마 파크', href: "hanlim.jpg" },
      { id: 3, value: '9.81 파크', address: '제주시 애월읍 천덕로 880-24', description: '세계 최초의 그레비티 레이싱 테마파크', href: "9.81.jpg" },
      { id: 4, value: '수월봉', address: '제주시 한경면 고산리 3760', description: '해발 77m 높이의 제주 서부지역 조망봉', href: "suwol.jpg" },
    ],
    east: [
      { id: 1, value: '우도', address: '제주시 우도면 상양고수물길 1', description: '소가 누워있는 모양을 닮은 섬', href: "udo.jpg" },
      { id: 2, value: '성산일출봉', address: '서귀포시 성산읍 일출로 284-12', description: 'unesco 세계자연유산에 등재된 오름', href: "seongsan.jpg" },
      { id: 3, value: '만장굴', address: '제주시 구좌읍 만장굴길 182', description: '아주 깊다는 의미의 용암동굴', href: "manjang.jpg" },
      { id: 4, value: '섭지코지', address: '서귀포시 성산읍 고성리', description: '성산 일출봉을 배경으로 한 해안 풍경이 들어오는 해안', href: "seopjikoji.jpg" },
    ],
    south: [
      { id: 1, value: '천지연폭포', address: '서귀포시 남성중로 2-15', description: '22m 높이에 달하는 폭포', href: "cheonji.jpg" },
      { id: 2, value: '주상절리', address: '서귀포시 이어도로 36-30', description: '예리한 조각 칼로 깍아낸 듯한 현무암질 수직 절리', href: "jusang.jpg" },
      { id: 3, value: '한라산 국립공원', address: '제주시 1100로 2070-61', description: '한반도의 3대 영산에 속하는 unseco 생물권 보전지역', href: "hallasan.jpg" },
      { id: 4, value: '1100 고지', address: '서귀포시 1100로 1555', description: '제주도 최고의 눈꽃명소, 가장 쉽게 한라산을 조망할 수 있는 뷰포인트', href: "1100.jpg" },
    ]
  },
  jp: {
    north: [
      { id: 1, value: '竜頭岩', address: '济州市두头岩街15', description: '竜が抱かれて海から舞い上がる形をした岩', href: "/youngdo.jpg" },
      { id: 2, value: '済州ラブランド', address: '济州市1100路2894-72', description: '城をテーマにしたテーマパークで、城を芸術に昇華させた作品がある', href: "loveland.jpg" },
      { id: 3, value: '民俗自然史博物館', address: '济州市三成路40', description: '済州の伝統文化と自然環境を深く観察し、理解できる博物館だ', href: "museum.jpg" },
      { id: 4, value: 'エコランド', address: '济州市朝天邑繁荣路1278-169', description: '子供たちと行くのに良い四季テーマパーク', href: "ecoland.jpg" },
    ],
    west: [
      { id: 1, value: 'ヒョプジェ海辺', address: '济州市翰林邑翰林路329-10', description: '透明な水にエメラルド色の絵の具を入れたような海のある海水浴場', href: "hyopjae.jpg" },
      { id: 2, value: '翰林公園', address: '济州市翰林邑翰林路300', description: '様々な植物に出会える9つのテーマからなるテーマパーク', href: "hanlim.jpg" },
      { id: 3, value: '9.81 パーク', address: '济州市涯月邑天德路880-24', description: '世界初のグレビティ·レーシング·テーマパーク', href: "9.81.jpg" },
      { id: 4, value: '水月峰', address: '济州市翰京面高山里3760', description: '標高77mの高さの済州西部地域の眺望峰', href: "suwol.jpg" },
    ],
    east: [
      { id: 1, value: '牛刀.', address: '济州市牛岛面上阳古水路街1', description: '牛の寝そべに似た島', href: "udo.jpg" },
      { id: 2, value: '城山日出峰', address: '西归浦市城山邑日出路284-12', description: 'unesco世界自然遺産に登録されたオルム', href: "seongsan.jpg" },
      { id: 3, value: '万丈窟', address: '济州市旧左邑万丈窟街182', description: '非常に深いという意味の溶岩洞窟', href: "manjang.jpg" },
      { id: 4, value: 'ソプチコジ', address: '西归浦市城山邑古城里', description: '城山日出峰を背景にした海岸の風景が入ってくる海岸', href: "seopjikoji.jpg" },
    ],
    south: [
      { id: 1, value: '天地淵滝', address: '西归浦市南城中路2-15', description: '高さ22mの滝', href: "cheonji.jpg" },
      { id: 2, value: '柱状節理', address: '西归浦市离于岛路36-30', description: '鋭利な彫刻刀で切り取ったような玄武岩質の垂直節理', href: "jusang.jpg" },
      { id: 3, value: '漢拏山国立公園', address: '济州市一一零零路2070-61', description: '韓半島の三大霊山に属するunseco生物圏保全地域', href: "hallasan.jpg" },
      { id: 4, value: '1100高地', address: '西归浦市1100路1555', description: '済州島最高の雪花名所、最も簡単に漢拏山を眺望できるビューポイント', href: "1100.jpg" },
    ]
  },
  en: {
    north: [
      { id: 1, value: 'caryngeal rock', address: '15 Yongduam-gil, Jeju-si', description: 'a rock in the shape of a dragon soaring from the sea', href: "/youngdo.jpg" },
      { id: 2, value: 'Jeju Love Land', address: '2894-72, 1100-ro, Jeju-si', description: 'It is a theme park with the theme of a castle, and there are works that sublimate the castle into art', href: "loveland.jpg" },
      { id: 3, value: 'Folk Museum of Natural History', address: '40 Samseong-ro, Jeju-si', description: 'It is a museum where you can take a deep look at and understand Jeju`s traditional culture and natural environment', href: "museum.jpg" },
      { id: 4, value: 'ECOLAND', address: '1278-169 Prosperity-ro, Jocheon-eup, Jeju-si', description: 'Four Seasons Theme Park that`s good to go with children', href: "ecoland.jpg" },
    ],
    west: [
      { id: 1, value: 'Hyeopjae Beach', address: '329-10 Hallim-ro, Hallim-eup, Jeju-si', description: 'a beach with a sea that looks like emerald paint in transparent water', href: "hyopjae.jpg" },
      { id: 2, value: 'Hallim Park', address: '300 Hallim-ro, Hallim-eup, Jeju-si', description: 'A theme park with nine themes where you can meet a variety of plants', href: "hanlim.jpg" },
      { id: 3, value: '9.81 Park', address: '880-24 Cheondeok-ro, Aewol-eup, Jeju-si', description: 'World`s First Grevy Racing Theme Park', href: "9.81.jpg" },
      { id: 4, value: 'a light stick', address: '3760 Gosan-ri, Hankyung-myeon, Jeju-si', description: 'View Peak in the western part of Jeju, which is 77m above sea level', href: "suwol.jpg" },
    ],
    east: [
      { id: 1, value: 'Udo Island', address: 'Sangyang Gosumul-gil, Udo-myeon, Jeju-si, 1', description: 'an island resembling a cow lying down', href: "udo.jpg" },
      { id: 2, value: 'Seongsan Ilchulbong Tuff Cone', address: '284-12 Sunrise-ro, Seongsan-eup, Seogwipo-si', description: 'List of UNESCO World Heritage Sites', href: "seongsan.jpg" },
      { id: 3, value: 'Manjanggul Cave', address: '182, Manjanggul-gil, Gujwa-eup, Jeju-si', description: 'Lava Cave, which means very deep', href: "manjang.jpg" },
      { id: 4, value: 'Seopjikoji', address: 'Goseong-ri, Seongsan-eup, Seogwipo-si', description: 'Coast with coastal scenery against Seongsan Ilchulbong Peak', href: "seopjikoji.jpg" },
    ],
    south: [
      { id: 1, value: 'Cheonjiyeon Falls', address: '2-15, male middle-ro, Seogwipo-si', description: 'a waterfall that reaches a height of 22m', href: "cheonji.jpg" },
      { id: 2, value: 'Columnar joint', address: '36-30 Ieodo-ro, Seogwipo-si', description: 'a basalt vertical joint that appears to have been cut with a sharp carving knife', href: "jusang.jpg" },
      { id: 3, value: 'Hallasan National Park', address: '2070-61, 1100-ro, Jeju-si', description: 'Unseco Biosphere Reserve, one of the three major mountain areas on the Korean Peninsula', href: "hallasan.jpg" },
      { id: 4, value: '1100 Highlands', address: '1555 1100-ro, Seogwipo-si', description: 'Jeju Island`s best snowflake attraction, the most easy view point to see Hallasan Mountain', href: "1100.jpg" },
    ]
  },
  zh: {
    north: [
      { id: 1, value: '龙头岩', address: '济州市두头岩街15', description: '巨龙盘石', href: "/youngdo.jpg" },
      { id: 2, value: '济州爱情乐园', address: '济州市1100路2894-72', description: '以城堡为主题的主题公园, 有将城堡升华为艺术的作品', href: "loveland.jpg" },
      { id: 3, value: '民俗自然史博物馆', address: '济州市三成路40', description: '是可以深入了解济州传统文化和自然环境的博物馆', href: "museum.jpg" },
      { id: 4, value: '生态乐园', address: '济州市朝天邑繁荣路1278-169', description: '适合和孩子们去地四季主题公园', href: "ecoland.jpg" },
    ],
    west: [
      { id: 1, value: '挟才海边', address: '济州市翰林邑翰林路329-10', description: '一个海水浴场,仿佛在透明的水中注入了翡翠绿颜料.', href: "hyopjae.jpg" },
      { id: 2, value: '翰林公园', address: '济州市翰林邑翰林路300', description: '由9个主题组成的主题公园, 供游客们可以观赏到各种植物.', href: "hanlim.jpg" },
      { id: 3, value: '9.81公园', address: '济州市涯月邑天德路880-24', description: '世界首个格列维蒂赛车主题公园', href: "9.81.jpg" },
      { id: 4, value: '水月峰', address: '济州市翰京面高山里3760', description: '海拔77米高的济州西部地区眺望峰', href: "suwol.jpg" },
    ],
    east: [
      { id: 1, value: '牛岛', address: '济州市牛岛面上阳古水路街1', description: '一个酷似牛卧的岛屿.', href: "udo.jpg" },
      { id: 2, value: '城山日出峰', address: '西归浦市城山邑日出路284-12', description: 'unesco被列入世界自然遗产名录的山峰', href: "seongsan.jpg" },
      { id: 3, value: '万丈窟', address: '济州市旧左邑万丈窟街182', description: '深邃的熔岩洞窟', href: "manjang.jpg" },
      { id: 4, value: '涉地可支', address: '西归浦市城山邑古城里', description: '以城山日出峰为背景的海岸风景如画的海岸', href: "seopjikoji.jpg" },
    ],
    south: [
      { id: 1, value: '天地渊瀑布', address: '西归浦市南城中路2-15', description: '一个22米高的瀑布.', href: "cheonji.jpg" },
      { id: 2, value: '柱状节理 。', address: '西归浦市离于岛路36-30', description: '锐利的雕刻刀削般的玄武岩垂直节理', href: "jusang.jpg" },
      { id: 3, value: '汉拿山国立公园', address: '济州市一一零零路2070-61', description: '属于韩半岛三大灵山的unseco生物圈保护区', href: "hallasan.jpg" },
      { id: 4, value: '1100高地', address: '西归浦市1100路1555', description: '济州岛最好的雪花名胜，最容易眺望汉拿山的风景点', href: "1100.jpg" },
    ]
  }
};

export const direction = [{ id: 1, value: '동부' }, { id: 2, value: '서부' }, { id: 3, value: '남부' }, { id: 4, value: '북부' }]

export interface PromptStoreItem {
  lang: string
  keyword: string
}