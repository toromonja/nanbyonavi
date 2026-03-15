export interface Disease {
  slug: string;
  name: string;
  nameEn: string;
  nanbyoNumber?: number;
  category: string;
  categorySlug: string;
  overview: string;
  symptoms: string[];
  causes: string;
  diagnosis: string;
  treatment: string;
  prognosis?: string;
  jrctSearchUrl: string;
  nanbyouInfoUrl?: string;
}

export const diseases: Disease[] = [
  // ─── 神経・筋疾患 ────────────────────────────────
  {
    slug: "als",
    name: "筋萎縮性側索硬化症（ALS）",
    nameEn: "Amyotrophic Lateral Sclerosis",
    nanbyoNumber: 2,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "運動神経が進行性に障害され、全身の筋肉が萎縮していく神経変性疾患。根本的な治療法はまだなく、症状の進行を遅らせる治療が中心。感覚・知性・眼球運動は比較的保たれる。",
    symptoms: [
      "手足の筋力低下・筋萎縮",
      "呂律が回らない・嚥下困難",
      "呼吸筋の麻痺",
      "筋肉のピクつき（線維束性収縮）",
      "感覚障害は通常みられない",
    ],
    causes:
      "上位・下位運動ニューロンが選択的に障害される。約10%が家族性（SOD1・TDP-43・FUS等の遺伝子変異）、約90%は孤発性で原因不明。酸化ストレス・グルタミン酸毒性・タンパク質凝集が機序として示唆される。",
    diagnosis:
      "El Escorial基準による臨床診断。筋電図（針筋電図で脱神経所見）・画像検査（MRI）・遺伝子検査を組み合わせる。鑑別診断として頸椎症・多巣性運動ニューロパチー等を除外する。",
    treatment:
      "リルゾール（グルタミン酸拮抗・進行遅延）・エダラボン（抗酸化・日本初承認）が承認済み。呼吸管理（NPPV・気管切開）・栄養管理（胃瘻造設）・コミュニケーション支援（AAC機器）が生命予後・QOL維持に重要。",
    prognosis:
      "発症から3〜5年で呼吸障害が生命予後に関わる。人工呼吸器（TPPV）使用で長期生存例もある。球麻痺型は呼吸障害の進行が速い傾向がある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E7%AD%8B%E8%90%8E%E7%B8%AE%E6%80%A7%E5%81%B4%E7%B4%A2%E7%A1%AC%E5%8C%96",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/214",
  },
  {
    slug: "parkinsons",
    name: "パーキンソン病",
    nameEn: "Parkinson's Disease",
    nanbyoNumber: 6,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "脳の黒質のドパミン神経細胞が変性・脱落することで生じる神経変性疾患。高齢者に多く、国内推定患者数は約15〜20万人。適切な治療で長期にわたりQOLを維持できる。",
    symptoms: [
      "振戦（安静時のふるえ）",
      "固縮（筋肉のこわばり）",
      "無動・動作緩慢",
      "姿勢反射障害（転びやすい）",
      "抑うつ・便秘・睡眠障害などの非運動症状",
    ],
    causes:
      "黒質のα-シヌクレイン蓄積（レビー小体形成）による神経細胞死。多くは孤発性。LRRK2・PINK1・Parkin等の遺伝子変異による家族性例もある。農薬・環境毒素との関連も研究されている。",
    diagnosis:
      "臨床診断（UK脳バンク基準）。DATスキャン（線条体ドパミントランスポーター画像）・心臓MIBGシンチグラフィが補助的に有用。レボドパ反応性の確認も重要。",
    treatment:
      "ドパミン補充療法（レボドパ・ドパミンアゴニスト）が主体。MAO-B阻害薬・COMT阻害薬を組み合わせる。脳深部刺激療法（DBS）は薬剤で制御困難な運動症状に有効。",
    prognosis:
      "緩徐に進行するが、適切な治療で長期間QOLを維持可能。発症後10〜20年で高度な介護を要することが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%BD%E3%83%B3%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/169",
  },
  {
    slug: "ms",
    name: "多発性硬化症（MS）",
    nameEn: "Multiple Sclerosis",
    nanbyoNumber: 13,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "中枢神経系の髄鞘が免疫攻撃により脱髄する疾患。再発と寛解を繰り返すことが多く、若い女性に多い。国内患者数は約1万9千人。",
    symptoms: [
      "視力低下・眼球運動障害（視神経炎）",
      "四肢の脱力・しびれ",
      "小脳症状（ふらつき・協調運動障害）",
      "排尿障害",
      "認知機能障害・疲労感",
    ],
    causes:
      "自己免疫機序により中枢神経の髄鞘が破壊される。環境因子（日照不足・ビタミンD欠乏・EBウイルス感染・喫煙）と遺伝的素因（HLA-DR15）の関与が示唆される。",
    diagnosis:
      "McDonald基準（2017年改訂版）に基づく。MRI（多発性・時間的・空間的多発性の脱髄病変）・髄液検査（オリゴクローナルバンド）・誘発電位検査を組み合わせる。",
    treatment:
      "急性期はステロイド大量静注療法（メチルプレドニゾロン）。再発予防にインターフェロンβ・グラチラマー酢酸塩・フィンゴリモド・ナタリズマブ・オクレリズマブ等の疾患修飾薬（DMT）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%A4%9A%E7%99%BA%E6%80%A7%E7%A1%AC%E5%8C%96%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/271",
  },
  {
    slug: "myasthenia-gravis",
    name: "重症筋無力症",
    nameEn: "Myasthenia Gravis",
    nanbyoNumber: 11,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "神経筋接合部のアセチルコリン受容体に対する自己抗体により、筋力低下と易疲労性が生じる自己免疫疾患。眼症状から始まることが多く、全身型に進展する場合もある。",
    symptoms: [
      "眼瞼下垂・複視（眼症状）",
      "嚥下困難・構音障害",
      "四肢の筋力低下（夕方・疲労時に悪化）",
      "呼吸困難（クリーゼ：生命の危機）",
    ],
    causes:
      "抗AChR抗体（約80%）または抗MuSK抗体（約5〜10%）による神経筋接合部の障害。胸腺異常（胸腺腫・胸腺過形成）を合併することが多い。",
    diagnosis:
      "抗体検査（抗AChR抗体・抗MuSK抗体）・テンシロンテスト（エドロフォニウム投与による症状改善確認）・筋電図（反復神経刺激試験）・CT/MRI（胸腺検索）。",
    treatment:
      "コリンエステラーゼ阻害薬（ピリドスチグミン）・ステロイド・免疫抑制薬（タクロリムス・アザチオプリン）・胸腺摘除術・血液浄化療法（血漿交換・免疫吸着）。補体阻害薬（エクリズマブ・ラブリズマブ）・FcRn阻害薬も承認済み。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%87%8D%E7%97%87%E7%AD%8B%E7%84%A1%E5%8A%9B%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/187",
  },
  {
    slug: "sma",
    name: "脊髄性筋萎縮症（SMA）",
    nameEn: "Spinal Muscular Atrophy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "脊髄の運動ニューロンが変性する遺伝性疾患。SMN1遺伝子変異による。ゾルゲンスマ（遺伝子治療）・スピンラザ（ASO療法）・エブリスディ（経口薬）の3種の治療薬が利用可能で、早期介入が予後を大きく変える。",
    symptoms: [
      "進行性の筋力低下・筋萎縮",
      "呼吸困難（呼吸筋の筋力低下）",
      "嚥下障害",
      "型（1〜4型）により重症度・発症年齢が異なる",
      "感覚障害・知的障害はみられない",
    ],
    causes:
      "SMN1遺伝子の欠失・変異による生存運動ニューロンタンパク質（SMN）の不足。常染色体劣性遺伝。SMN2遺伝子のコピー数が重症度に影響する。",
    diagnosis:
      "遺伝子検査（SMN1欠失確認）が確定診断に必須。新生児スクリーニング対象疾患（一部都道府県で実施中）。筋電図・筋生検で補助的に評価。",
    treatment:
      "ゾルゲンスマ（オナセムノゲンアベパルボベク：1回投与遺伝子治療・2歳未満対象）、スピンラザ（ヌシネルセン：髄腔内注射・生涯投与）、エブリスディ（リスジプラム：経口薬・生後2ヶ月以上）。呼吸・栄養管理・リハビリとの組み合わせが重要。",
    prognosis:
      "治療薬の登場により予後が劇的に改善。特に症状発現前（新生児スクリーニング後）の早期治療開始が最も効果的。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%84%8A%E9%AB%84%E6%80%A7%E7%AD%8B%E8%90%8E%E7%B8%AE%E7%97%87",
  },
  {
    slug: "msa",
    name: "多系統萎縮症",
    nameEn: "Multiple System Atrophy",
    nanbyoNumber: 17,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "パーキンソン症状・小脳失調・自律神経障害が組み合わさって現れる神経変性疾患。α-シヌクレインが神経細胞に蓄積する。進行は比較的速い。",
    symptoms: [
      "パーキンソン症状（振戦・固縮・無動）",
      "小脳失調（歩行障害・構音障害）",
      "自律神経障害（起立性低血圧・排尿障害・発汗異常）",
      "睡眠時行動異常症（REM睡眠行動障害）",
    ],
    causes:
      "神経細胞内（主にオリゴデンドログリア）へのα-シヌクレイン凝集体（GCI）の蓄積が病態の中心。孤発性で遺伝子変異は同定されていない。",
    diagnosis:
      "MRI（小脳・脳幹の萎縮・被殻後外側の異常信号）・自律神経機能検査・臨床症状の組み合わせ。確定診断は病理診断による。",
    treatment:
      "根本的治療法なし。パーキンソン症状にレボドパ（効果が限定的）、起立性低血圧に昇圧薬、排尿障害に抗コリン薬、リハビリテーション。",
    prognosis:
      "発症後平均8〜10年で嚥下障害・呼吸障害が進行し生命予後に影響する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%A4%9A%E7%B3%BB%E7%B5%B1%E8%90%8E%E7%B8%AE%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/231",
  },
  {
    slug: "sca",
    name: "脊髄小脳変性症",
    nameEn: "Spinocerebellar Degeneration",
    nanbyoNumber: 18,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "小脳・脳幹・脊髄が選択的に障害される神経変性疾患の総称。遺伝性と孤発性に分けられ、30種類以上の遺伝性サブタイプがある。",
    symptoms: [
      "小脳失調（歩行障害・四肢の協調運動障害）",
      "構音障害（言葉が不明瞭）",
      "眼球運動障害",
      "パーキンソン症状・自律神経障害（一部のサブタイプ）",
    ],
    causes:
      "遺伝性（常染色体優性・劣性・X連鎖性）と孤発性に大別される。遺伝性では三核酸反復配列伸長（CAG・CTG等）が多くのサブタイプで原因となる。",
    diagnosis:
      "遺伝子検査（遺伝性の場合）・MRI（小脳・脳幹萎縮の評価）・臨床症状に基づく診断。",
    treatment:
      "根本的治療法なし。タルチレリン（小脳失調改善薬）・プロチレリン・リハビリテーション（バランス・歩行訓練）が中心。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%84%8A%E9%AB%84%E5%B0%8F%E8%84%B3%E5%A4%89%E6%80%A7%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/234",
  },
  {
    slug: "huntington",
    name: "ハンチントン病",
    nameEn: "Huntington's Disease",
    nanbyoNumber: 8,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "HTT遺伝子内のCAG三核酸反復配列の異常伸長により、不随意運動・精神症状・認知症が進行する神経変性疾患。常染色体優性遺伝で、発症すれば全員が同様の経過をたどる。",
    symptoms: [
      "不随意運動（舞踏様運動・ミオクローヌス）",
      "精神症状（抑うつ・不安・易刺激性・強迫症状）",
      "認知機能低下・認知症",
      "嚥下障害・構音障害",
    ],
    causes:
      "HTT遺伝子のCAG反復配列が36回以上に伸長することで異常ハンチンチンタンパク質が産生され、神経細胞（特に線条体）が障害される。常染色体優性遺伝。",
    diagnosis:
      "遺伝子検査（CAG反復数の確認）が確定診断。発症前診断も可能だが、遺伝カウンセリングとのセットが必須。MRI（尾状核萎縮）・神経心理検査も参照。",
    treatment:
      "根本的治療法なし。不随意運動にテトラベナジン・重酒石酸バレナクリン、精神症状に抗精神病薬・抗うつ薬。HTTタンパク質を標的とするアンチセンス療法が研究中。",
    prognosis:
      "発症後15〜20年で死亡することが多い。自殺リスクが高く、精神科的サポートが重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%8F%E3%83%B3%E3%83%81%E3%83%B3%E3%83%88%E3%83%B3%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/221",
  },
  {
    slug: "nmosd",
    name: "視神経脊髄炎スペクトラム障害（NMOSD）",
    nameEn: "Neuromyelitis Optica Spectrum Disorder",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "アストロサイトの水チャネル（AQP4）に対する自己抗体により、視神経炎・横断性脊髄炎が重症かつ再発性に生じる自己免疫疾患。多発性硬化症と鑑別が重要。",
    symptoms: [
      "視神経炎（急性の視力低下・眼痛）",
      "横断性脊髄炎（対麻痺・感覚障害・排尿障害）",
      "最後野症候群（難治性の嘔気・しゃっくり）",
      "再発のたびに障害が蓄積しやすい",
    ],
    causes:
      "抗AQP4抗体（約75%）または抗MOG抗体陽性例が存在する。女性に多く、アジア人に多い傾向がある。",
    diagnosis:
      "抗AQP4抗体・抗MOG抗体検査・MRI（脊髄の長節型横断病変・視神経病変）・視覚誘発電位。",
    treatment:
      "急性期はステロイド大量療法・血漿交換。再発予防に免疫抑制薬（アザチオプリン・ミコフェノール酸）。抗AQP4抗体陽性例にはエクリズマブ・イネビリズマブ・サトラリズマブが承認済み。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%A6%96%E7%A5%9E%E7%B5%8C%E8%84%8A%E9%AB%84%E7%82%8E",
  },
  {
    slug: "duchenne",
    name: "デュシェンヌ型筋ジストロフィー",
    nameEn: "Duchenne Muscular Dystrophy",
    nanbyoNumber: 113,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "ジストロフィン遺伝子変異によりジストロフィンが欠損する進行性筋疾患。X染色体劣性遺伝のため男児に発症し、幼児期に筋力低下が始まる。エクソンスキッピング療法など新規治療薬が相次いで登場している。",
    symptoms: [
      "幼児期（3〜5歳）からの下肢近位筋筋力低下",
      "Gowers徴候（床から立ち上がる際に手を使う）",
      "腓腹筋の仮性肥大",
      "10〜12歳頃に車椅子使用",
      "心筋症・呼吸障害（成人以降）",
    ],
    causes:
      "DMD遺伝子（X染色体上）の変異によりジストロフィンが欠損・不足する。欠失型変異が最多（約65%）。母親が保因者の場合が多いが、新規変異も約1/3を占める。",
    diagnosis:
      "血清CK高値・遺伝子検査（欠失・重複・点変異）・筋生検（ジストロフィン免疫染色で陰性）。",
    treatment:
      "ステロイド（プレドニゾロン・デフラザコート）が筋力維持・呼吸機能温存に有効。エクソンスキッピング療法（エテプリルセン・ビルトラルセン・カシメルセン）・ゴロディルセン。遺伝子補充療法が研究段階。呼吸管理・心不全管理・リハビリが重要。",
    prognosis:
      "呼吸管理・心臓管理の進歩により20〜30代以降まで生存する例が増加している。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%87%E3%83%A5%E3%82%B7%E3%82%A7%E3%83%B3%E3%83%8C%E5%9E%8B%E7%AD%8B%E3%82%B8%E3%82%B9%E3%83%88%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/143",
  },

  // ─── 免疫・膠原病 ────────────────────────────────
  {
    slug: "sle",
    name: "全身性エリテマトーデス（SLE）",
    nameEn: "Systemic Lupus Erythematosus",
    nanbyoNumber: 49,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "多臓器に及ぶ全身性自己免疫疾患。主に若い女性に発症し、再発・寛解を繰り返す。腎炎・中枢神経病変・心血管合併症が予後に影響する。",
    symptoms: [
      "蝶形紅斑（頬の発疹）",
      "関節炎・関節痛",
      "光線過敏",
      "ループス腎炎（蛋白尿・血尿）",
      "血球減少（貧血・白血球減少・血小板減少）",
      "発熱・倦怠感",
    ],
    causes:
      "免疫調節異常により自己抗体（抗dsDNA抗体・抗Sm抗体等）が産生され、免疫複合体の沈着により組織障害が生じる。遺伝的素因・紫外線・ホルモン環境・感染等の環境因子が関与する。",
    diagnosis:
      "ACR/EULAR分類基準（2019年版）に基づく。抗核抗体（スクリーニング）・抗dsDNA抗体・抗Sm抗体・補体（C3・C4・CH50）検査等。腎生検（腎炎の型分類に必須）。",
    treatment:
      "ヒドロキシクロロキン（全例の基本薬）・ステロイド・免疫抑制薬（ミコフェノール酸モフェチル・アザチオプリン等）。ベリムマブ（抗BLyS抗体）・アニフロルマブも使用可能。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%85%A8%E8%BA%AB%E6%80%A7%E3%82%A8%E3%83%AA%E3%83%86%E3%83%9E%E3%83%88%E3%83%BC%E3%83%87%E3%82%B9",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/215",
  },
  {
    slug: "systemic-sclerosis",
    name: "全身性強皮症",
    nameEn: "Systemic Sclerosis",
    nanbyoNumber: 51,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "皮膚や内臓の線維化と血管障害を特徴とする自己免疫疾患。レイノー現象が初発症状となることが多く、間質性肺疾患・肺動脈性肺高血圧症が生命予後に関わる。",
    symptoms: [
      "皮膚の硬化・肥厚（手指・顔面・体幹）",
      "レイノー現象（手指の色調変化：白→青→赤）",
      "間質性肺疾患（労作時呼吸困難・乾性咳嗽）",
      "肺動脈性肺高血圧症",
      "消化管障害（嚥下困難・逆流性食道炎・吸収障害）",
    ],
    causes:
      "自己免疫異常による線維芽細胞の活性化と血管内皮障害が中心。抗トポイソメラーゼI抗体（びまん型）・抗セントロメア抗体（限局型）等の自己抗体が検出される。",
    diagnosis:
      "ACR/EULAR基準（2013年版）。自己抗体検査・皮膚硬化の範囲・mRSS評価・高分解能CT（肺）・心臓エコー・肺機能検査。",
    treatment:
      "根治療法なし。肺線維化にニンテダニブ・免疫抑制薬（シクロホスファミド・ミコフェノール酸）。PAHに血管拡張薬。レイノー現象にカルシウム拮抗薬・ボセンタン。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%85%A8%E8%BA%AB%E6%80%A7%E5%BC%B7%E7%9A%AE%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/217",
  },
  {
    slug: "behcets",
    name: "ベーチェット病",
    nameEn: "Behçet's Disease",
    nanbyoNumber: 56,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "口腔内アフタ性潰瘍・外陰部潰瘍・眼症状・皮膚症状を4主徴とする全身性炎症性疾患。シルクロード沿いの地域（日本・中東・地中海）に多い。",
    symptoms: [
      "口腔内アフタ（再発性口内炎）",
      "外陰部潰瘍",
      "眼症状（ぶどう膜炎・失明リスク）",
      "皮膚症状（結節性紅斑・毛嚢炎様皮疹）",
      "神経症状・消化管潰瘍（特殊型）",
    ],
    causes:
      "遺伝的素因（HLA-B51との強い関連）に感染等の環境因子が加わり好中球主体の炎症が生じる。IL-17・IL-23経路の関与が示唆される。",
    diagnosis:
      "国際基準（2014年ICBD基準）または日本の診断基準に基づく臨床診断。病理組織（血管周囲炎症）・針反応（皮膚過敏反応）を参照。",
    treatment:
      "コルヒチン（口腔内アフタ・関節炎）・ステロイド・免疫抑制薬（シクロスポリン・アザチオプリン）。眼症状にシクロスポリン・インフリキシマブ（眼型ベーチェット病に承認済み）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%99%E3%83%BC%E3%83%81%E3%82%A7%E3%83%83%E3%83%88%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/220",
  },
  {
    slug: "pm-dm",
    name: "多発性筋炎・皮膚筋炎",
    nameEn: "Polymyositis / Dermatomyositis",
    nanbyoNumber: 50,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "近位筋の筋力低下・筋炎を主体とする自己免疫疾患。皮膚筋炎ではヘリオトロープ疹・Gottron徴候などの特徴的な皮疹を呈する。間質性肺疾患の合併が予後を左右する。",
    symptoms: [
      "近位筋の筋力低下（立ち上がり・腕の挙上困難）",
      "ヘリオトープ疹（上眼瞼の紫紅色浮腫性紅斑）",
      "Gottron徴候（指関節背面の丘疹・紅斑）",
      "間質性肺疾患（乾性咳嗽・呼吸困難）",
      "嚥下困難・筋肉痛",
    ],
    causes:
      "自己免疫異常による骨格筋・皮膚・肺への炎症。筋炎特異的自己抗体（抗Jo-1抗体・抗MDA5抗体等）が病型分類と予後予測に有用。悪性腫瘍の合併（傍腫瘍性）に注意が必要。",
    diagnosis:
      "臨床症状・筋酵素（CK・LD・アルドラーゼ）・自己抗体・筋電図・筋MRI・筋生検。",
    treatment:
      "ステロイド（第一選択）・免疫抑制薬（メトトレキサート・タクロリムス・アザチオプリン）。難治例にIVIG（免疫グロブリン大量療法）・リツキシマブ。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%A4%9A%E7%99%BA%E6%80%A7%E7%AD%8B%E7%82%8E",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/216",
  },

  // ─── 消化器疾患 ────────────────────────────────
  {
    slug: "crohn",
    name: "クローン病",
    nameEn: "Crohn's Disease",
    nanbyoNumber: 96,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "口腔から肛門まで消化管のあらゆる部位に起こりうる慢性肉芽腫性炎症疾患。10〜20代の若年者に多く、再発・寛解を繰り返す。",
    symptoms: [
      "腹痛・下痢（慢性・再発性）",
      "体重減少・栄養障害",
      "発熱",
      "肛門病変（痔瘻・裂肛・膿瘍）",
      "関節炎・皮膚病変などの腸管外合併症",
    ],
    causes:
      "腸内細菌叢・免疫異常・遺伝的素因・環境因子（食事・喫煙）の複合的関与。NOD2等の遺伝子変異との関連が知られる。腸管粘膜の過剰な免疫応答が組織障害を引き起こす。",
    diagnosis:
      "内視鏡検査（縦走潰瘍・敷石像）・病理組織（非乾酪性肉芽腫）・画像検査（CT・MRI腸管造影）。カプセル内視鏡・小腸内視鏡も活用。",
    treatment:
      "栄養療法（成分栄養・経腸栄養）・5-ASA製剤・ステロイド・免疫調節薬（アザチオプリン・6-MP）・生物学的製剤（抗TNFα抗体・抗IL-12/23抗体・抗インテグリン抗体）・JAK阻害薬。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%B3%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/81",
  },
  {
    slug: "ulcerative-colitis",
    name: "潰瘍性大腸炎",
    nameEn: "Ulcerative Colitis",
    nanbyoNumber: 97,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "大腸粘膜に限局した慢性炎症疾患。血便・下痢・腹痛が主症状で、再発・寛解を繰り返す。国内最多の指定難病の一つで、患者数は約22万人。",
    symptoms: [
      "血便・粘血便",
      "下痢・頻便",
      "腹痛・腹部不快感",
      "発熱・体重減少（重症例）",
      "関節炎・虹彩炎などの腸管外合併症",
    ],
    causes:
      "腸管免疫の異常が主体と考えられているが、完全には解明されていない。腸内細菌との関連・遺伝的素因（HLA・IL-23R等）が関与。",
    diagnosis:
      "内視鏡検査（直腸から連続する大腸粘膜の炎症・浮腫・潰瘍・血管透見像消失）・生検による病理診断。CRP・便中カルプロテクチンが活動性評価に有用。",
    treatment:
      "5-ASA製剤（メサラジン）・ステロイド・免疫調節薬・生物学的製剤（インフリキシマブ・ベドリズマブ・ウステキヌマブ等）・JAK阻害薬（トファシチニブ・フィルゴチニブ）。重症例は手術（大腸全摘＋回腸嚢肛門吻合術）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%BD%B0%E7%98%8D%E6%80%A7%E5%A4%A7%E8%85%B8%E7%82%8E",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/82",
  },
  {
    slug: "pbc",
    name: "原発性胆汁性胆管炎（PBC）",
    nameEn: "Primary Biliary Cholangitis",
    nanbyoNumber: 93,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "肝内の小葉間胆管が慢性炎症により障害される自己免疫性肝疾患。中年以降の女性に多く、胆汁うっ滞による症状が現れる。抗ミトコンドリア抗体が特異的マーカー。",
    symptoms: [
      "かゆみ（皮膚掻痒感）",
      "倦怠感",
      "黄疸（進行例）",
      "無症候性の場合も多い（健診での肝機能異常で発見）",
      "骨粗鬆症・脂溶性ビタミン欠乏（長期経過後）",
    ],
    causes:
      "自己免疫機序により肝内胆管上皮細胞が障害される。抗ミトコンドリア抗体（AMA）が約90〜95%で陽性。遺伝的素因と環境因子の関与が示唆される。",
    diagnosis:
      "抗ミトコンドリア抗体（M2分画）・肝機能（ALP・GGT・ビリルビン）・肝生検（必要に応じ）。",
    treatment:
      "ウルソデオキシコール酸（UDCA）が第一選択（胆汁分泌促進・胆管保護）。効果不十分例にオベチコール酸・ベザフィブラート。かゆみにコレスチラミン・リファンピシン。",
    prognosis:
      "UDCA治療で多くの患者は進行が抑制される。一部は肝硬変・肝不全に進行し、肝移植の適応となる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%8E%9F%E7%99%BA%E6%80%A7%E8%83%86%E6%B1%81%E6%80%A7%E8%83%86%E7%AE%A1%E7%82%8E",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/271",
  },
  {
    slug: "aih",
    name: "自己免疫性肝炎（AIH）",
    nameEn: "Autoimmune Hepatitis",
    nanbyoNumber: 95,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "自己抗体と高γグロブリン血症を特徴とする慢性肝炎。自己免疫機序により肝細胞が障害される。女性に多く、ステロイド治療に反応しやすい。",
    symptoms: [
      "倦怠感・食欲不振",
      "黄疸",
      "急性肝炎様発症（一部）",
      "無症状で健診の肝機能異常から発見される場合も多い",
      "他の自己免疫疾患（甲状腺炎・関節リウマチ等）の合併",
    ],
    causes:
      "自己免疫機序による肝細胞障害。抗核抗体（ANA）・抗平滑筋抗体（ASMA）が陽性となることが多い。遺伝的素因（HLA-DR4）と環境因子の関与。",
    diagnosis:
      "国際診断スコア（IAIHG基準）。抗核抗体・抗平滑筋抗体・IgG高値・肝生検（界面肝炎・形質細胞浸潤）。",
    treatment:
      "プレドニゾロン（ステロイド）単独またはアザチオプリン併用が標準治療。寛解導入後は維持療法を継続。ステロイド依存性・不応例にタクロリムス・ミコフェノール酸。",
    prognosis:
      "治療に反応した場合は良好。治療中断による再燃が多いため長期の維持療法が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%87%AA%E5%B7%B1%E5%85%8D%E7%96%AB%E6%80%A7%E8%82%9D%E7%82%8E",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/272",
  },
  {
    slug: "psc",
    name: "原発性硬化性胆管炎（PSC）",
    nameEn: "Primary Sclerosing Cholangitis",
    nanbyoNumber: 94,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "肝内外の胆管に線維化・炎症が生じ、進行性に胆管が狭窄する慢性疾患。潰瘍性大腸炎との合併が多く（約70%）、肝移植が唯一の根治療法。",
    symptoms: [
      "黄疸・かゆみ",
      "倦怠感・右上腹部不快感",
      "反復する胆管炎（発熱・悪寒）",
      "胆石・胆管結石の合併",
      "胆管がん・大腸がんのリスク上昇",
    ],
    causes:
      "原因不明。自己免疫・腸内細菌（腸肝循環）・遺伝的素因の関与が示唆される。IBD（特に潰瘍性大腸炎）との強い関連がある。",
    diagnosis:
      "MRCP・内視鏡的胆管造影（数珠状胆管所見）・肝生検（onion skin線維化）・ALP・GGT高値。p-ANCA陽性率が高い。",
    treatment:
      "根本的な内科治療法なし。ウルソデオキシコール酸の効果は限定的。胆管狭窄に内視鏡的拡張術。進行例には肝移植。胆管がんの定期的スクリーニングが必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%8E%9F%E7%99%BA%E6%80%A7%E7%A1%AC%E5%8C%96%E6%80%A7%E8%83%86%E7%AE%A1%E7%82%8E",
  },

  // ─── 循環器疾患 ────────────────────────────────
  {
    slug: "pah",
    name: "肺動脈性肺高血圧症（PAH）",
    nameEn: "Pulmonary Arterial Hypertension",
    nanbyoNumber: 86,
    category: "循環器疾患",
    categorySlug: "cardio",
    overview:
      "肺動脈の閉塞・収縮により肺循環の抵抗が増大し、右心不全をきたす進行性疾患。若い女性に多く、早期診断・早期治療が予後改善に重要。",
    symptoms: [
      "労作時呼吸困難（階段・坂道での息切れ）",
      "易疲労感",
      "動悸・失神",
      "下肢浮腫（右心不全症状）",
      "胸痛",
    ],
    causes:
      "特発性（孤発性・家族性：BMPR2遺伝子変異）・膠原病合併（強皮症等）・先天性心疾患合併・門脈圧亢進症合併・HIV感染合併など複数の病因がある。",
    diagnosis:
      "右心カテーテル検査（平均肺動脈圧≥25mmHg・肺動脈楔入圧≤15mmHg）が診断確定に必須。心エコー（スクリーニング）・6分間歩行試験・心肺運動負荷試験・肺機能検査を組み合わせる。",
    treatment:
      "肺血管拡張薬（プロスタサイクリン製剤・ERA・PDE5阻害薬・sGC刺激薬）の組み合わせ（combination therapy）。リオシグアト・マシテンタン・セレキシパグ等。根治は肺移植。",
    prognosis:
      "治療薬の進歩により5年生存率が大幅に改善。早期・積極的治療が重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%82%BA%E5%8B%95%E8%84%88%E6%80%A7%E8%82%BA%E9%AB%98%E8%A1%80%E5%9C%A7%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/255",
  },
  {
    slug: "taa",
    name: "高安動脈炎（大動脈炎症候群）",
    nameEn: "Takayasu Arteritis",
    nanbyoNumber: 40,
    category: "循環器疾患",
    categorySlug: "cardio",
    overview:
      "大動脈とその主要分枝の肉芽腫性炎症により、血管の狭窄・閉塞・拡張をきたす大血管炎。若い女性（10〜30代）に多い。日本で最初に報告された疾患。",
    symptoms: [
      "全身症状（発熱・倦怠感・体重減少）",
      "上肢の脈拍減弱・血圧左右差",
      "頸部血管雑音",
      "虚血症状（脳虚血・上肢跛行・腎血管性高血圧）",
      "大動脈弁閉鎖不全症（進行例）",
    ],
    causes:
      "自己免疫機序による大血管炎症。HLA-B52との関連が知られる。IL-6・IL-12/IL-23経路の関与が示唆される。",
    diagnosis:
      "ACR/EULAR分類基準。PET-CT（炎症評価に有用）・MRA・CT-A・血管造影（狭窄・拡張の評価）。炎症マーカー（CRP・ESR・IL-6）。",
    treatment:
      "ステロイドが第一選択。難治例・再燃例に免疫抑制薬（メトトレキサート・アザチオプリン）・トシリズマブ（抗IL-6受容体抗体）。血管病変（高度狭窄）に血管内治療・外科的血行再建。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%AB%98%E5%AE%89%E5%8B%95%E8%84%88%E7%82%8E",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/197",
  },

  // ─── 代謝疾患 ────────────────────────────────
  {
    slug: "fabry",
    name: "ファブリー病",
    nameEn: "Fabry Disease",
    nanbyoNumber: 18,
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "α-ガラクトシダーゼA酵素の欠損によりGb3（グロボトリアオシルセラミド）が全身臓器に蓄積するライソゾーム病。X染色体劣性遺伝。早期に酵素補充療法を開始することで臓器障害の進行を抑えられる。",
    symptoms: [
      "四肢末端の疼痛・灼熱感（四肢痛危機）",
      "皮膚血管腫（被角血管腫）",
      "発汗減少（無汗症・低汗症）",
      "腎障害（蛋白尿→慢性腎不全）",
      "心肥大・不整脈（心室肥大・心房細動）",
      "脳卒中（若年性）",
    ],
    causes:
      "GLA遺伝子変異によるα-ガラクトシダーゼA活性低下・欠損。X染色体劣性遺伝のため男性に重症例が多いが、女性保因者も症状を呈することがある（ヘテロ接合体女性）。",
    diagnosis:
      "酵素活性測定（男性：白血球・血漿）・遺伝子検査（女性では必須）・血漿Lyso-Gb3測定・腎生検（Gb3封入体）。",
    treatment:
      "酵素補充療法（アガルシダーゼα：ファブラザイム、アガルシダーゼβ：リプレガル）・シャペロン療法（ミガラスタット：特定変異の患者のみ適応）。早期開始が重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%95%E3%82%A1%E3%83%96%E3%83%AA%E3%83%BC%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/231",
  },
  {
    slug: "gaucher",
    name: "ゴーシェ病",
    nameEn: "Gaucher Disease",
    nanbyoNumber: 19,
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "グルコセレブロシダーゼ欠損により糖脂質が細網内皮系細胞（マクロファージ）に蓄積するライソゾーム病。最も頻度の高いライソゾーム病で、酵素補充療法が有効。",
    symptoms: [
      "肝脾腫（腹部膨満・早期満腹感）",
      "骨病変（骨痛・骨梗塞・骨折・骨壊死）",
      "血球減少（貧血・血小板減少→出血傾向）",
      "1型（非神経型）・2型（急性神経型）・3型（慢性神経型）に分類",
    ],
    causes:
      "GBA遺伝子変異。常染色体劣性遺伝。日本では1型（非神経型・肝脾腫・骨病変・血球減少）が多い。",
    diagnosis:
      "白血球・皮膚線維芽細胞でのグルコセレブロシダーゼ活性測定・遺伝子検査。骨髄にゴーシェ細胞（サイトゾルを充満した大型マクロファージ）を認める。",
    treatment:
      "酵素補充療法（イミグルセラーゼ・ベラグルセラーゼα・タリグルセラーゼα）・基質合成抑制療法（エリグルスタット：特定遺伝子型のみ、ミグルスタット）。",
    prognosis:
      "1型は治療反応が良好。2型は進行が速く生命予後不良。3型は適切な治療で長期生存可能。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%B4%E3%83%BC%E3%82%B7%E3%82%A7%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/232",
  },
  {
    slug: "pompe",
    name: "ポンペ病",
    nameEn: "Pompe Disease",
    nanbyoNumber: 20,
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "酸性α-グルコシダーゼ（GAA）の欠損・活性低下によりグリコーゲンがライソゾームに蓄積する遺伝性筋疾患。乳児型（IOPD）と遅発型（LOPD）がある。",
    symptoms: [
      "進行性の近位筋筋力低下",
      "呼吸障害（横隔膜筋力低下）",
      "嚥下障害・言語障害",
      "乳児型：哺乳不良・心肥大・呼吸障害（生後数ヶ月で重症化）",
      "遅発型：成人期からの呼吸不全・歩行障害",
    ],
    causes:
      "GAA遺伝子変異。常染色体劣性遺伝。c.-32-13T>G（splicing変異）が遅発型に多い。",
    diagnosis:
      "血液DBS（乾燥血液）でのGAA活性測定（新生児スクリーニング対象）・遺伝子検査・尿中グルコース四糖体（Glc4）測定・筋生検（ライソゾームグリコーゲン蓄積）。",
    treatment:
      "酵素補充療法（アルグルコシダーゼα・アバルグルコシダーゼα）。早期開始が予後改善に重要。呼吸管理（NPPV・気管切開）・栄養管理・リハビリ。",
    prognosis:
      "乳児型は酵素補充療法により生存期間が大幅に延長。遅発型は治療で進行を遅らせることができる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%9D%E3%83%B3%E3%83%9A%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/233",
  },
  {
    slug: "wilson",
    name: "ウィルソン病",
    nameEn: "Wilson's Disease",
    nanbyoNumber: 171,
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "ATP7B遺伝子変異により銅の胆汁排泄が障害され、肝臓・脳・角膜等に銅が蓄積する常染色体劣性遺伝の代謝疾患。早期診断・治療で正常生活が可能。",
    symptoms: [
      "肝障害（慢性肝炎・肝硬変・急性肝不全）",
      "神経症状（振戦・構音障害・精神症状・認知症）",
      "カイザー-フライシャー輪（角膜への銅沈着：緑〜金褐色輪）",
      "溶血性貧血",
      "腎障害（ファンコニー症候群）",
    ],
    causes:
      "ATP7B遺伝子変異。常染色体劣性遺伝。銅輸送ATPaseの機能喪失により、銅の胆汁排泄が障害され臓器に蓄積する。",
    diagnosis:
      "血清セルロプラスミン低値・尿中銅排泄増加・肝銅量測定・スリットランプ検査（KF輪）・遺伝子検査。",
    treatment:
      "キレート療法（D-ペニシラミン・トリエンチン：銅排泄促進）・亜鉛製剤（銅吸収抑制）。食事制限（レバー・貝類・ナッツ等の銅含量の多い食品を制限）。",
    prognosis:
      "早期発見・治療継続で正常に近い生活が可能。無治療では肝不全・神経障害が進行する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%A6%E3%82%A3%E3%83%AB%E3%82%BD%E3%83%B3%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/241",
  },

  // ─── 血液疾患 ────────────────────────────────
  {
    slug: "aplastic-anemia",
    name: "再生不良性貧血",
    nameEn: "Aplastic Anemia",
    nanbyoNumber: 60,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "骨髄での造血幹細胞が障害され、汎血球減少（赤血球・白血球・血小板の全てが減少）をきたす疾患。重症度に応じて治療方針が大きく異なる。",
    symptoms: [
      "貧血症状（動悸・息切れ・倦怠感・顔面蒼白）",
      "感染症にかかりやすい（白血球減少）",
      "出血しやすい（血小板減少：紫斑・鼻出血・歯肉出血）",
    ],
    causes:
      "多くは自己免疫性（T細胞による造血幹細胞攻撃）。一部は薬剤性・ウイルス感染後（肝炎ウイルス等）・先天性（ファンコニー貧血等）。",
    diagnosis:
      "末梢血検査（汎血球減少）・骨髄検査（低形成・脂肪髄・造血細胞の著減）。重症度分類（非重症・重症・最重症）が治療方針に影響。",
    treatment:
      "同種造血幹細胞移植（若年・重症例・ドナーあり）・免疫抑制療法（抗胸腺細胞グロブリン＋シクロスポリン）・エルトロンボパグ（血小板産生促進薬、造血幹細胞刺激効果もあり）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%86%8D%E7%94%9F%E4%B8%8D%E8%89%AF%E6%80%A7%E8%B2%A7%E8%A1%80",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/250",
  },
  {
    slug: "itp",
    name: "免疫性血小板減少症（ITP）",
    nameEn: "Immune Thrombocytopenia",
    nanbyoNumber: 63,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "血小板に対する自己抗体により血小板が脾臓で破壊され、血小板数が著しく減少する自己免疫疾患。出血傾向が主症状で、難治性の場合は脾臓摘除や新規薬剤が検討される。",
    symptoms: [
      "点状出血・紫斑（皮下出血）",
      "鼻出血・歯肉出血・口腔内出血",
      "月経過多（女性）",
      "重症例では消化管出血・頭蓋内出血のリスク",
    ],
    causes:
      "血小板表面GPIIb/IIIa・GPIb/IXへの自己抗体産生により、脾臓でのマクロファージによる血小板貪食・破壊が亢進する。",
    diagnosis:
      "末梢血で孤立性血小板減少（<100,000/μL）・他疾患除外（骨髄検査・SLE・薬剤性等の鑑別）。",
    treatment:
      "ステロイド（第一選択）・免疫グロブリン大量療法（緊急時）・脾臓摘除・トロンボポエチン受容体作動薬（エルトロンボパグ・ロミプロスチム）・リツキシマブ・フォスタマチニブ。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%85%8D%E7%96%AB%E6%80%A7%E8%A1%80%E5%B0%8F%E6%9D%BF%E6%B8%9B%E5%B0%91%E7%97%87",
  },

  // ─── 皮膚疾患 ────────────────────────────────
  {
    slug: "eb",
    name: "表皮水疱症",
    nameEn: "Epidermolysis Bullosa",
    nanbyoNumber: 43,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "皮膚や粘膜に軽微な摩擦や外力で水疱が生じる遺伝性疾患群。「バタフライチルドレン」とも呼ばれる。単純型・接合部型・栄養障害型・カインドラー型に大別される。",
    symptoms: [
      "皮膚の水疱・びらん・潰瘍（軽い摩擦で生じる）",
      "口腔・消化管粘膜の水疱（摂食障害）",
      "爪の脱落・変形",
      "癒合指（重症型：指が癒合する）",
      "皮膚がんリスクの増加（栄養障害型重症例）",
    ],
    causes:
      "皮膚構造タンパク質（ケラチン14/5・コラーゲンXVII・ラミニン332・コラーゲンVII等）をコードする遺伝子変異。遺伝形式は優性・劣性の両方あり。",
    diagnosis:
      "皮膚生検（電子顕微鏡・免疫蛍光法による水疱形成部位の同定）・遺伝子検査。",
    treatment:
      "根治療法は限定的（遺伝子治療・幹細胞治療の研究が進行中）。創傷管理（無菌的包帯交換）・感染予防・疼痛管理が中心。ビルデカブタジェン アウタセル（外用遺伝子治療：特定型に承認済み）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%A1%A8%E7%9A%AE%E6%B0%B4%E7%96%B1%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/183",
  },

  // ─── 骨・関節疾患 ────────────────────────────────
  {
    slug: "osteogenesis-imperfecta",
    name: "骨形成不全症",
    nameEn: "Osteogenesis Imperfecta",
    nanbyoNumber: 272,
    category: "骨・関節疾患",
    categorySlug: "bone",
    overview:
      "コラーゲン（主にI型）の遺伝子変異により骨が脆弱になる疾患群。「ガラスの骨」とも呼ばれる。重症度は非常に幅広く、軽症から周産期死亡に至る重症型まで存在する。",
    symptoms: [
      "骨折しやすい（軽微な外力での骨折・反復骨折）",
      "低身長・脊柱変形",
      "青色強膜（眼の白目が青く見える）",
      "難聴（成人以降に増加）",
      "歯牙形成不全（乳白色・半透明な歯：一部の型）",
    ],
    causes:
      "COL1A1・COL1A2等のI型コラーゲン遺伝子変異が主体（80〜85%）。常染色体優性遺伝が多いが、劣性遺伝もある。新規変異も多い。",
    diagnosis:
      "臨床症状・遺伝子検査・骨密度測定（DXA法）・X線検査（骨構造評価・亀裂骨折）。",
    treatment:
      "ビスホスホネート製剤（ゾレドロン酸等：骨密度改善・骨折予防）。ロモソズマブ・デノスマブの研究もある。理学療法・整形外科的介入（骨折後の固定・骨延長術）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%AA%A8%E5%BD%A2%E6%88%90%E4%B8%8D%E5%85%A8%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/297",
  },
  {
    slug: "marfan",
    name: "マルファン症候群",
    nameEn: "Marfan Syndrome",
    nanbyoNumber: 262,
    category: "骨・関節疾患",
    categorySlug: "bone",
    overview:
      "FBN1遺伝子変異によるフィブリリン1異常をきたす遺伝性結合組織疾患。心血管・眼・骨格系に多彩な症状が現れる。大動脈解離が最も重篤な合併症。",
    symptoms: [
      "大動脈瘤・大動脈解離（最も生命予後に関わる）",
      "水晶体脱臼・高度近視",
      "高身長・四肢の細長さ・蜘蛛指（アラクノダクチリー）",
      "漏斗胸・側弯症",
      "自然気胸",
    ],
    causes:
      "FBN1遺伝子変異によるフィブリリン1タンパク質の異常（構造的欠損・TGF-β経路の過活性化）。常染色体優性遺伝。約25%は新規変異。",
    diagnosis:
      "Ghent基準（2010年改訂版）に基づく。遺伝子検査（FBN1変異）・心臓エコー（大動脈径測定）・眼科検査（水晶体脱臼・近視）。",
    treatment:
      "大動脈の定期的な画像評価（CT・MRI・心臓エコー）が必須。β遮断薬・ARB（ロサルタン）による大動脈拡張抑制。大動脈径が基準以上になれば予防的手術（Bentall手術等）。",
    prognosis:
      "定期的な心血管フォローアップで大動脈解離のリスクを大幅に低減できる。適切な管理で通常に近い寿命が期待できる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%9E%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E7%97%87%E5%80%99%E7%BE%A4",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/280",
  },

  // ─── 神経・筋疾患（追加） ────────────────────────────────
  {
    slug: "friedreich-ataxia",
    name: "フリードライヒ失調症",
    nameEn: "Friedreich Ataxia",
    nanbyoNumber: 19,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "FXN遺伝子変異によるGAA三塩基反復拡大が原因の常染色体劣性遺伝性脊髄小脳失調症。若年発症（通常10〜15歳）で進行性。心筋症・糖尿病を合併することが多い。",
    symptoms: [
      "進行性の四肢・体幹失調（歩行障害・ふらつき）",
      "深部感覚障害（位置覚・振動覚の低下）",
      "腱反射消失（特に下肢）",
      "心筋症（肥大型・心不全の原因となる）",
      "糖尿病合併（30〜40%）",
      "側弯症・開張足（骨格変形）",
    ],
    causes:
      "FXN遺伝子イントロン1のGAAトリプレットリピート異常伸長（66回以上）によるフラタキシンタンパク質の減少。フラタキシンはミトコンドリア鉄代謝に関わる。常染色体劣性遺伝。",
    diagnosis:
      "臨床症状・遺伝子検査（GAA反復数の確認）・神経伝導検査（感覚神経障害）・心臓エコー（心筋症評価）・脊髄MRI。",
    treatment:
      "根治療法なし。オマベロキソロン（Nrf2活性化薬・欧米で承認・日本での状況要確認）。リハビリテーション・心疾患管理（β遮断薬・ACE阻害薬）・糖尿病管理・装具療法。",
    prognosis:
      "発症後10〜15年で車椅子使用となることが多い。心筋症が主な死因のひとつ。平均寿命は40〜50代。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%95%E3%83%AA%E3%83%BC%E3%83%89%E3%83%A9%E3%82%A4%E3%83%92%E5%A4%B1%E8%AA%BF%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/218",
  },
  {
    slug: "charcot-marie-tooth",
    name: "シャルコー・マリー・トゥース病",
    nameEn: "Charcot-Marie-Tooth Disease",
    nanbyoNumber: 10,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "末梢神経の遺伝性疾患群の総称で、最も頻度の高い遺伝性末梢神経疾患。PMP22遺伝子重複が最多原因。緩徐に進行するが、多くの場合は歩行能力を長期に維持できる。",
    symptoms: [
      "下肢遠位部の筋萎縮・筋力低下（逆三角形の脚）",
      "足変形（開張足・鉤爪趾）",
      "歩行障害・つまずき・ぺたぺた歩き",
      "下肢のしびれ・感覚障害",
      "腱反射低下〜消失",
    ],
    causes:
      "40以上の遺伝子変異が報告されている。CMT1A（PMP22重複・常染色体優性・最多）が最も一般的。髄鞘型（CMT1）と軸索型（CMT2）に大別される。",
    diagnosis:
      "神経伝導検査（神経伝導速度低下or振幅低下）・遺伝子検査（PMP22コピー数・遺伝子パネル）・家族歴の確認。",
    treatment:
      "根治療法なし。装具療法（足底板・短下肢装具：歩行支援）・理学療法・作業療法。疼痛に対する薬物療法（プレガバリン等）。足外科手術（変形矯正）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%B7%E3%83%A3%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%BB%E3%83%9E%E3%83%AA%E3%83%BC%E3%83%BB%E3%83%88%E3%82%A5%E3%83%BC%E3%82%B9%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/228",
  },
  {
    slug: "sbma",
    name: "球脊髄性筋萎縮症（SBMA）",
    nameEn: "Spinal and Bulbar Muscular Atrophy",
    nanbyoNumber: 3,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "アンドロゲン受容体遺伝子のCAGリピート異常伸長による成人男性に発症するX連鎖性運動ニューロン疾患。Kennedy病とも呼ばれる。30〜50歳代に発症することが多い。",
    symptoms: [
      "四肢近位部の筋力低下・萎縮",
      "球麻痺（嚥下困難・構音障害・舌の萎縮）",
      "線維束性収縮（筋肉のピクつき）",
      "感覚障害（しびれ・振動覚低下）",
      "女性化乳房・精巣萎縮・勃起障害（内分泌異常）",
    ],
    causes:
      "AR（アンドロゲン受容体）遺伝子のCAGリピート異常伸長（36回以上）による毒性獲得型変異。X染色体劣性遺伝のため男性のみが発症し、女性は保因者。",
    diagnosis:
      "遺伝子検査（AR遺伝子CAGリピート数の測定）が確定診断。筋電図（下位運動ニューロン障害パターン）・神経伝導検査（感覚障害確認）。",
    treatment:
      "根治療法なし。リュープロレリン（GnRHアナログ：血清テストステロン低下）の臨床試験で一定の効果が示唆。リハビリテーション・嚥下管理・呼吸管理。",
    prognosis:
      "ALSと比べて進行が緩徐。多くの患者が発症後20〜30年にわたり歩行能力を維持できる場合もある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E7%90%83%E8%84%8A%E9%AB%84%E6%80%A7%E7%AD%8B%E8%90%8E%E7%B8%AE%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/216",
  },
  {
    slug: "psp",
    name: "進行性核上性麻痺（PSP）",
    nameEn: "Progressive Supranuclear Palsy",
    nanbyoNumber: 5,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "タウタンパク質の蓄積による神経変性疾患。パーキンソン症候群の一型で、核上性眼球運動障害・姿勢不安定・認知機能障害を特徴とする。パーキンソン病との鑑別が重要。",
    symptoms: [
      "垂直方向の核上性眼球運動障害（特に下方視困難）",
      "易転倒性（後方への転倒が特徴的）",
      "構音・嚥下障害",
      "前頭葉性認知機能障害（無関心・脱抑制）",
      "仮面様顔貌・驚愕様表情",
    ],
    causes:
      "4リピートタウ（4R-tau）の蓄積による神経変性。MAPT遺伝子のH1ハプロタイプが遺伝的危険因子。多くは孤発性。",
    diagnosis:
      "MRI（中脳被蓋萎縮・ハミングバードサイン・蜂鳥様変化）・DATスキャン・MIBG心筋シンチ（正常）。MDS-PSP診断基準（2017年）による臨床診断。",
    treatment:
      "根治療法なし。L-dopaは一時的・部分的効果のみ。転倒予防（歩行補助具・環境整備）・嚥下管理（食事形態調整・胃瘻）・リハビリ。抗タウ療法の臨床試験が進行中。",
    prognosis:
      "発症後平均5〜9年で死亡。嚥下障害による誤嚥性肺炎が主な死因。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%80%B2%E8%A1%8C%E6%80%A7%E6%A0%B8%E4%B8%8A%E6%80%A7%E9%BA%BB%E7%97%BA",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/233",
  },
  {
    slug: "cbd",
    name: "大脳皮質基底核変性症（CBD）",
    nameEn: "Corticobasal Degeneration",
    nanbyoNumber: 7,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "大脳皮質と基底核の神経変性により、高度の運動障害と認知機能障害をきたすタウオパチー。一側上肢の失行や異人手症候群が特徴的だが、臨床像は多様。",
    symptoms: [
      "一側上肢の失行・筋強剛・ジストニア",
      "異人手症候群（手が勝手に動く感覚）",
      "ミオクローヌス",
      "認知機能低下・失語（前頭葉・頭頂葉症状）",
      "眼球運動障害（一部）",
    ],
    causes:
      "4リピートタウの蓄積（PSPと病理的に重複）。MAPT遺伝子変異例もあり。多くは孤発性で、臨床症候群（CBS）と病理学的診断（CBD）が一致しないことがある。",
    diagnosis:
      "Armstrong基準による臨床診断。PET（FDG-PET・タウPET）・MRI（非対称性大脳萎縮）。",
    treatment:
      "根治療法なし。ジストニア・ミオクローヌスへの対症療法。リハビリテーション・言語療法・介護支援。",
    prognosis:
      "発症後平均6〜8年で死亡。PSPより予後が良いとされるが個人差が大きい。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%A4%A7%E8%84%B3%E7%9A%AE%E8%B3%AA%E5%9F%BA%E5%BA%95%E6%A0%B8%E5%A4%89%E6%80%A7%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/235",
  },
  {
    slug: "dlb",
    name: "レビー小体型認知症（DLB）",
    nameEn: "Dementia with Lewy Bodies",
    nanbyoNumber: 78,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "レビー小体の大脳皮質への広範な蓄積による変性疾患。認知機能変動・繰り返す具体的な幻視・パーキンソン症状・REM睡眠行動障害を4大特徴とし、アルツハイマー病に次いで多い認知症。",
    symptoms: [
      "認知機能の変動（日内・日差変動が著明）",
      "繰り返す具体的な幻視（人物・動物が見える）",
      "パーキンソン症状（振戦・固縮・動作緩慢）",
      "REM睡眠行動障害（睡眠中の異常行動・大声）",
      "自律神経障害（起立性低血圧・便秘・失神）",
    ],
    causes:
      "α-シヌクレインの凝集体（レビー小体）の大脳皮質への広範な蓄積。パーキンソン病と連続するスペクトラム疾患と考えられている。",
    diagnosis:
      "McKeith基準（2017年改訂版）による臨床診断。DATスキャン（線条体ドパミントランスポーター低下）・MIBGシンチ（心臓交感神経障害）・睡眠ポリグラフ（RBD確認）が補助診断。",
    treatment:
      "コリンエステラーゼ阻害薬（リバスチグミン・ドネペジル：認知機能・幻視改善）。抗精神病薬は過敏反応（パーキンソン症状悪化・意識障害）に注意し原則禁忌または慎重投与。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%AC%E3%83%93%E3%83%BC%E5%B0%8F%E4%BD%93%E5%9E%8B%E8%AA%8D%E7%9F%A5%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/251",
  },
  {
    slug: "stiff-person-syndrome",
    name: "スティッフパーソン症候群",
    nameEn: "Stiff Person Syndrome",
    nanbyoNumber: 136,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "抗グルタミン酸脱炭酸酵素（GAD）抗体等の自己抗体により体幹・四肢の筋強剛と有痛性筋痙攣をきたす希少自己免疫性神経疾患。他の自己免疫疾患（1型糖尿病等）との合併が多い。",
    symptoms: [
      "体幹・四肢の進行性筋強剛",
      "刺激誘発性の有痛性筋痙攣・痙縮",
      "腰椎前弯の増強（体幹前傾困難）",
      "歩行障害・転倒リスク",
      "自律神経症状（発汗・頻脈）",
    ],
    causes:
      "抗GAD65抗体（80%以上）または抗グリシン受容体抗体（一部）による抑制性神経伝達（GABA・グリシン）の障害。自己免疫性。1型糖尿病・甲状腺炎・悪性腫瘍との合併に注意。",
    diagnosis:
      "抗GAD65抗体（血清・髄液：高力価が特異的）・筋電図（持続性運動単位活動電位）・臨床症状。",
    treatment:
      "筋強剛の緩和にジアゼパム（GABA-A増強）・バクロフェン（GABA-B作動薬）。免疫療法（ステロイド・IVIG・血漿交換・リツキシマブ）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%B9%E3%83%86%E3%82%A3%E3%83%83%E3%83%95%E3%83%91%E3%83%BC%E3%82%BD%E3%83%B3%E7%97%87%E5%80%99%E7%BE%A4",
  },
  {
    slug: "myotonic-dystrophy",
    name: "筋強直性ジストロフィー",
    nameEn: "Myotonic Dystrophy",
    nanbyoNumber: 116,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "DMPK遺伝子のCTGリピート異常伸長による最も頻度の高い成人発症型筋ジストロフィー。筋強直・筋萎縮に加えて多臓器合併症を伴い、表現予期（世代を経るごとに重症化）がみられる。",
    symptoms: [
      "筋強直（ミオトニア：握った手を開きにくい・ドアノブが離せない）",
      "顔面・頸部・四肢遠位部の筋萎縮・筋力低下",
      "若年性白内障",
      "不整脈・心筋症（突然死リスク）",
      "糖尿病・甲状腺機能低下など内分泌異常",
      "過眠・認知機能障害・無気力",
    ],
    causes:
      "DMPK遺伝子3'UTRのCTGトリプレットリピート異常伸長（50回以上）。常染色体優性遺伝。反復数が多いほど重症で、世代を経るごとに反復数が増加（表現予期）。",
    diagnosis:
      "遺伝子検査（CTGリピート数の測定）・筋電図（ミオトニー放電の確認）・各種臓器評価（心電図・眼科・内分泌）。",
    treatment:
      "根治療法なし。ミオトニーにメキシレチン（Na⁺チャネル阻害）。不整脈管理（ペースメーカー・ICD）・呼吸管理が予後に関わる。定期的な多科フォローアップが必須。",
    prognosis:
      "心肺合併症により平均寿命が短縮。突然死予防のための心臓管理が重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E7%AD%8B%E5%BC%B7%E7%9B%B4%E6%80%A7%E3%82%B8%E3%82%B9%E3%83%88%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/261",
  },
  {
    slug: "lems",
    name: "Lambert-Eaton筋無力症候群（LEMS）",
    nameEn: "Lambert-Eaton Myasthenic Syndrome",
    nanbyoNumber: 12,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "電位依存性カルシウムチャネル（VGCC）に対する自己抗体によるアセチルコリン放出障害をきたす神経筋接合部疾患。悪性腫瘍（小細胞肺癌）合併例と自己免疫例がある。",
    symptoms: [
      "近位筋優位の四肢筋力低下（下肢から始まることが多い）",
      "反復運動で一時的に筋力が改善（Lambert現象）",
      "自律神経症状（口腔乾燥・便秘・起立性低血圧・勃起障害）",
      "腱反契低下〜消失",
      "眼症状・球症状（重症筋無力症より軽度）",
    ],
    causes:
      "抗VGCC抗体によるアセチルコリン放出障害。60%は悪性腫瘍合併（傍腫瘍性・小細胞肺癌が多い）、40%は自己免疫性単独発症。",
    diagnosis:
      "抗VGCC抗体測定・反復神経刺激試験（高頻度刺激で誘発電位増大：増分反応が特徴）・腫瘍検索（CT・PET）。",
    treatment:
      "腫瘍合併例は腫瘍治療が最優先（腫瘍切除で神経症状が改善する場合あり）。3,4-ジアミノピリジン（DAP）・コリンエステラーゼ阻害薬。免疫療法（IVIG・ステロイド・血漿交換）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=Lambert-Eaton%E7%AD%8B%E7%84%A1%E5%8A%9B%E7%97%87%E5%80%99%E7%BE%A4",
  },

  // ─── 免疫・膠原病（追加） ────────────────────────────────
  {
    slug: "mctd",
    name: "混合性結合組織病（MCTD）",
    nameEn: "Mixed Connective Tissue Disease",
    nanbyoNumber: 52,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "SLE・全身性強皮症・多発性筋炎の特徴が混在し、抗U1RNP抗体が陽性の自己免疫疾患。レイノー現象・手指腫脹が特徴的で、肺動脈性肺高血圧症が最も重要な合併症。",
    symptoms: [
      "レイノー現象（手指の色調変化）",
      "手指・手背の腫脹（ソーセージ指）",
      "多関節炎",
      "肺動脈性肺高血圧症（最重要合併症・予後規定）",
      "筋炎（近位筋筋力低下）",
      "食道運動障害（逆流性食道炎）",
    ],
    causes:
      "抗U1-snRNP抗体（抗U1RNP抗体）の産生を伴う自己免疫疾患。遺伝的素因（HLA-DR4）と環境因子の関与が示唆される。",
    diagnosis:
      "Sharp基準またはAlarcon-Segovia基準等による診断。抗U1RNP抗体高値が必須要件。各臓器評価（心臓エコー・肺機能・筋酵素）。",
    treatment:
      "症状・臓器病変に応じた治療。PAHは積極的に肺血管拡張薬（ERA・PDE5阻害薬・プロスタサイクリン製剤）を使用。ステロイド・免疫抑制薬（ミコフェノール酸・アザチオプリン）。",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/219",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%B7%B7%E5%90%88%E6%80%A7%E7%B5%90%E5%90%88%E7%B5%84%E7%B9%94%E7%97%85",
  },
  {
    slug: "iga-nephropathy",
    name: "IgA腎症",
    nameEn: "IgA Nephropathy",
    nanbyoNumber: 67,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "糸球体メサンギウム領域へのIgA沈着を特徴とする最も頻度の高い原発性糸球体腎炎。慢性進行性に腎機能が低下し、20〜30年で約30〜40%が末期腎不全に至る。",
    symptoms: [
      "血尿（肉眼的または顕微鏡的）",
      "蛋白尿",
      "高血圧",
      "腎機能低下（進行すると末期腎不全）",
      "上気道感染時の肉眼的血尿（synpharyngitic hematuria）",
    ],
    causes:
      "糖鎖異常IgA1（Gd-IgA1）の産生増加・それに対する自己抗体形成・免疫複合体の糸球体沈着という多段階の機序。遺伝的素因と環境因子（扁桃・腸管粘膜免疫）が関与。",
    diagnosis:
      "腎生検（糸球体メサンギウムへのIgA優位沈着：免疫蛍光法）が確定診断に必須。オックスフォード分類（MEST-C）による病理分類が予後予測に有用。",
    treatment:
      "扁桃摘除＋ステロイドパルス療法（日本発のエビデンス・保険適用）。RAS阻害薬による血圧・蛋白尿管理。ブデソニド腸溶製剤（Nefecon）。SGLT2阻害薬・スパルセンタン。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=IgA%E8%85%8E%E7%97%87",
  },
  {
    slug: "aps",
    name: "抗リン脂質抗体症候群（APS）",
    nameEn: "Antiphospholipid Syndrome",
    nanbyoNumber: 48,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "抗リン脂質抗体の持続陽性と動静脈血栓症・習慣性流産を特徴とする自己免疫疾患。SLEに合併する二次性と単独発症する一次性がある。",
    symptoms: [
      "深部静脈血栓症・肺血栓塞栓症（静脈血栓）",
      "脳梗塞・一過性脳虚血発作（動脈血栓）",
      "習慣性流産・胎盤機能不全・胎児死亡",
      "血小板減少",
      "網状皮斑（皮膚の網目状紫紅色変化）",
    ],
    causes:
      "抗カルジオリピン抗体・ループスアンチコアグラント・抗β2GPI抗体による凝固系活性化・血管内皮障害・血小板活性化。",
    diagnosis:
      "Sapporo/Sydney基準。抗リン脂質抗体（3種類）の12週以上の間隔を置いた2回以上の持続陽性確認＋臨床症状（血栓症または産科合併症）。",
    treatment:
      "血栓症予防にワルファリン（INR 2.0〜3.0）。妊娠合併例は低用量アスピリン＋ヘパリン（低分子量ヘパリン）。カタストロフィック型APSはIVIG・血漿交換・ステロイド・抗凝固の集学的治療。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%8A%97%E3%83%AA%E3%83%B3%E8%84%82%E8%B3%AA%E6%8A%97%E4%BD%93%E7%97%87%E5%80%99%E7%BE%A4",
  },
  {
    slug: "adult-onset-stills",
    name: "成人スティル病",
    nameEn: "Adult-Onset Still's Disease",
    nanbyoNumber: 44,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "弛張熱・関節炎・サーモンピンク色の皮疹・高フェリチン血症を特徴とする全身性炎症性疾患。自然免疫系の過剰活性化（IL-1β・IL-6・IL-18高値）が病態の中心。",
    symptoms: [
      "弛張熱（39℃以上の高熱が毎日・夕方に高くなる）",
      "関節炎・関節痛",
      "サーモンピンク疹（発熱時に出現・解熱と共に消退する一過性皮疹）",
      "高フェリチン血症（数万〜数十万ng/mLに達することがある）",
      "肝脾腫・リンパ節腫脹",
      "血球貪食症候群（生命を脅かす重症合併症）",
    ],
    causes:
      "未解明。自然免疫系の過剰活性化（インフラマソーム活性化・IL-1β・IL-18の過剰産生）が関与。感染をきっかけに発症することが多い。",
    diagnosis:
      "Yamaguchi基準（主要4項目・副項目）による診断。感染症・悪性腫瘍（悪性リンパ腫等）・他の膠原病を除外することが重要。",
    treatment:
      "NSAIDs・ステロイドが第一選択。難治性・再発例にMTX・IL-1阻害薬（アナキンラ・カナキヌマブ）・IL-6阻害薬（トシリズマブ）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%88%90%E4%BA%BA%E3%82%B9%E3%83%86%E3%82%A3%E3%83%AB%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/201",
  },
  {
    slug: "anca-vasculitis",
    name: "ANCA関連血管炎",
    nameEn: "ANCA-Associated Vasculitis",
    nanbyoNumber: 45,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "抗好中球細胞質抗体（ANCA）と関連する小型血管の壊死性血管炎の総称。多発血管炎性肉芽腫症（GPA）・顕微鏡的多発血管炎（MPA）・好酸球性多発血管炎性肉芽腫症（EGPA）が含まれる。",
    symptoms: [
      "急速進行性糸球体腎炎（血尿・蛋白尿・腎機能急速低下）",
      "肺出血・肺浸潤影（びまん性肺胞出血）",
      "上気道症状（副鼻腔炎・中耳炎・鼻出血・鞍鼻変形）",
      "末梢神経炎（多発単神経炎）",
      "皮膚潰瘍・触れると痛む紫斑",
    ],
    causes:
      "PR3-ANCA（GPA）またはMPO-ANCA（MPA・EGPA）の産生による好中球の異常活性化と血管壊死性炎症。",
    diagnosis:
      "ANCA測定（PR3-ANCA/MPO-ANCA）・組織生検（壊死性血管炎・肉芽腫）・臨床症状。ACR/EULAR 2022分類基準。",
    treatment:
      "寛解導入：ステロイド＋シクロホスファミドまたはリツキシマブ。寛解維持：アザチオプリン・メトトレキサート・リツキシマブ。重症腎炎・肺出血には血漿交換を追加。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=ANCA%E9%96%A2%E9%80%A3%E8%A1%80%E7%AE%A1%E7%82%8E",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/199",
  },
  {
    slug: "igg4-related",
    name: "IgG4関連疾患",
    nameEn: "IgG4-Related Disease",
    nanbyoNumber: 300,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "IgG4陽性形質細胞の組織浸潤と線維化により多臓器に腫瘤性病変をきたす全身性疾患。自己免疫性膵炎・硬化性胆管炎・涙腺・唾液腺病変（ミクリッツ病）などが代表的。ステロイドに著明に反応する。",
    symptoms: [
      "膵腫大・閉塞性黄疸（自己免疫性膵炎）",
      "涙腺・唾液腺腫大（ミクリッツ病）",
      "後腹膜線維症（水腎症）",
      "大動脈周囲炎",
      "間質性腎炎（腎機能障害）",
    ],
    causes:
      "未解明。T細胞・B細胞の過剰活性化とIgG4産生形質細胞の浸潤が中心的役割。分子模倣・自己抗原（ラクトフェリン・炭酸脱水酵素II等）への免疫応答が関与する可能性。",
    diagnosis:
      "血清IgG4高値（135mg/dL以上）・特徴的な組織病理像（IgG4陽性形質細胞浸潤・花筵状線維化・閉塞性静脈炎）・ステロイド反応性。包括的診断基準（2020年改訂版）。",
    treatment:
      "ステロイド（プレドニゾロン30〜40mg/日から漸減）で著明改善。再発例に免疫抑制薬・リツキシマブ。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=IgG4%E9%96%A2%E9%80%A3%E7%96%BE%E6%82%A3",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/246",
  },
  {
    slug: "giant-cell-arteritis",
    name: "巨細胞性動脈炎（GCA）",
    nameEn: "Giant Cell Arteritis",
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "50歳以上の高齢者の大型〜中型動脈に生じる肉芽腫性血管炎。側頭動脈炎とも呼ばれ、突然の片眼失明（眼動脈閉塞）が最も恐れられる合併症。リウマチ性多発筋痛症と高率に合併。",
    symptoms: [
      "側頭部頭痛・側頭動脈の圧痛・索状硬化",
      "顎跛行（咀嚼時の顎の疲れ・痛み）",
      "突然の片眼失明（眼動脈閉塞・緊急）",
      "発熱・倦怠感・体重減少",
      "リウマチ性多発筋痛症の合併（50%）",
    ],
    causes:
      "未解明。加齢・遺伝的素因（HLA-DR4）・EBVやその他のウイルス感染が誘因となる可能性。樹状細胞・T細胞・マクロファージによる血管壁への炎症。",
    diagnosis:
      "側頭動脈生検（巨細胞を伴う肉芽腫性炎症：確定診断）。超音波（ハローサイン）・FDG-PET・MRI血管造影。CRP・ESR著明高値。ACR/EULAR 2022分類基準。",
    treatment:
      "高用量ステロイド（プレドニゾロン40〜60mg/日）を失明リスクのため疑った時点で緊急開始。トシリズマブ（抗IL-6受容体抗体：ステロイド減量効果・再発抑制）が承認済み。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%B7%A8%E7%B4%B0%E8%83%9E%E6%80%A7%E5%8B%95%E8%84%88%E7%82%8E",
  },

  // ─── 消化器疾患（追加） ────────────────────────────────
  {
    slug: "eosinophilic-gi",
    name: "好酸球性消化管疾患",
    nameEn: "Eosinophilic Gastrointestinal Disease",
    nanbyoNumber: 98,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "消化管壁への好酸球浸潤による慢性炎症疾患。好酸球性食道炎（EoE）・好酸球性胃腸炎（EGE）に分類される。アトピー性疾患との合併が多く、食物アレルギーとの関連が深い。",
    symptoms: [
      "嚥下困難・食物のつかえ感・胸焼け（食道炎）",
      "腹痛・嘔吐・下痢（胃腸炎）",
      "食物アレルギーとの関連（複数の食物に反応）",
      "体重減少・栄養障害",
      "腸閉塞・腸管穿孔（重症例）",
    ],
    causes:
      "食物抗原・環境アレルゲンに対するTh2主体のアレルギー性炎症反応。IL-5・エオタキシン・IgEが関与。アトピー性皮膚炎・気管支喘息・アレルギー性鼻炎との合併が多い。",
    diagnosis:
      "上部消化管内視鏡生検（食道：15好酸球/HPF以上・胃腸炎は病変部で20〜30/HPF以上）が確定診断に必須。",
    treatment:
      "食道炎：プロトンポンプ阻害薬・フルチカゾン（局所ステロイド嚥下）・食事療法（六食品除去食）。デュピルマブ（抗IL-4受容体α抗体）が承認。胃腸炎：ステロイド・食事療法。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%A5%BD%E9%85%B8%E7%90%83%E6%80%A7%E6%B6%88%E5%8C%96%E7%AE%A1%E7%96%BE%E6%82%A3",
  },
  {
    slug: "autoimmune-pancreatitis",
    name: "自己免疫性膵炎（AIP）",
    nameEn: "Autoimmune Pancreatitis",
    nanbyoNumber: 172,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "膵臓に生じるIgG4関連疾患の一型（1型）および膵特異的自己免疫（2型）。閉塞性黄疸で発症することが多く、膵癌との鑑別が重要。ステロイドが著効する。",
    symptoms: [
      "閉塞性黄疸（皮膚・眼球の黄染・尿の褐色化）",
      "上腹部痛・腹部不快感",
      "体重減少",
      "糖尿病（新規発症または悪化）",
      "他臓器病変（硬化性胆管炎・涙腺炎・腎炎等：1型）",
    ],
    causes:
      "1型：IgG4関連疾患の一型。2型：膵特異的自己免疫（IDCP：好中球上皮病変を特徴とする）。",
    diagnosis:
      "HISORt基準またはアジア診断基準。IgG4高値・特徴的CT/MRI所見（びまん性膵腫大・カプセル様辺縁）・ステロイド反応性。膵癌との鑑別が最重要。",
    treatment:
      "ステロイド（プレドニゾロン30〜40mg/日から漸減）で著明改善。再発例にはメンテナンス投与（少量ステロイド継続）。",
    prognosis:
      "1型は再発が多い（50〜60%）。長期ステロイド管理が必要。糖尿病合併例はインスリン療法を継続。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%87%AA%E5%B7%B1%E5%85%8D%E7%96%AB%E6%80%A7%E8%86%B5%E7%82%8E",
  },
  {
    slug: "primary-intestinal-lymphangiectasia",
    name: "原発性腸リンパ管拡張症",
    nameEn: "Primary Intestinal Lymphangiectasia",
    nanbyoNumber: 99,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "腸リンパ管の先天的または後天的な拡張・閉塞によりリンパ液が腸管内に漏出し、低蛋白血症・浮腫・リンパ球減少をきたす希少疾患。蛋白漏出性胃腸症の一型。",
    symptoms: [
      "低蛋白血症による浮腫（下肢・腹水・胸水・心嚢液）",
      "下痢（脂肪便・蛋白漏出性腸症）",
      "リンパ球減少による免疫不全（易感染性）",
      "乳び腹水・乳び胸水（腸管外リンパ管異常）",
    ],
    causes:
      "先天性（リンパ管発生異常・Gorham病等との関連）と後天性（心不全・腫瘍・炎症・放射線による続発性）がある。",
    diagnosis:
      "内視鏡（腸管白色絨毛・白色斑点）・カプセル内視鏡・CT（腸管壁肥厚・腹水）・α1-アンチトリプシンクリアランス（蛋白漏出量の評価）。",
    treatment:
      "中鎖脂肪酸（MCT）食・低脂肪食（長鎖脂肪酸を制限することでリンパ流を減らす）。シロリムス（mTOR阻害薬：PIK3CA関連疾患例で有効）。限局性病変は外科的切除。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%85%B8%E3%83%AA%E3%83%B3%E3%83%91%E7%AE%A1%E6%8B%A1%E5%BC%B5%E7%97%87",
  },

  // ─── 血液疾患（追加） ────────────────────────────────
  {
    slug: "pnh",
    name: "発作性夜間ヘモグロビン尿症（PNH）",
    nameEn: "Paroxysmal Nocturnal Hemoglobinuria",
    nanbyoNumber: 61,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "PIG-A遺伝子体細胞変異によりGPIアンカー欠損クローンが拡大し、補体による溶血性貧血・血栓症・造血障害をきたす後天性クローン性疾患。エクリズマブ等の補体阻害薬が予後を劇的に改善した。",
    symptoms: [
      "溶血性貧血（疲労感・息切れ・黄疸）",
      "血栓症（門脈・腸間膜・肝静脈・脳静脈など非典型部位）",
      "血色素尿（朝の褐色〜赤色尿：PNH名称の由来）",
      "腎障害（慢性溶血による）",
      "腹痛・嚥下困難（平滑筋ジストニア：NOの消費）",
    ],
    causes:
      "造血幹細胞のPIG-A遺伝子体細胞変異によるGPIアンカー欠損。補体制御因子（CD55・CD59）を欠く血球が補体による溶血・血小板活性化を受ける。",
    diagnosis:
      "フローサイトメトリー（GPI欠損血球の検出：FLAER法・CD59欠損確認）が確定診断。Ham試験は補助的。",
    treatment:
      "エクリズマブ（抗C5抗体・2週毎皮下注）・ラブリズマブ（8週毎皮下注）による補体阻害で溶血・血栓を著明抑制。ダニコパン（経口D因子阻害薬）。同種造血幹細胞移植（根治）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E7%99%BA%E4%BD%9C%E6%80%A7%E5%A4%9C%E9%96%93%E3%83%98%E3%83%A2%E3%82%B0%E3%83%AD%E3%83%93%E3%83%B3%E5%B0%BF%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/252",
  },
  {
    slug: "mds",
    name: "骨髄異形成症候群（MDS）",
    nameEn: "Myelodysplastic Syndrome",
    nanbyoNumber: 62,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "造血幹細胞の遺伝子変異により血球の分化・成熟が異常となり、血球減少と急性骨髄性白血病への移行リスクを特徴とする後天性造血器腫瘍。高齢者に多い。",
    symptoms: [
      "貧血症状（動悸・息切れ・倦怠感・顔面蒼白）",
      "易感染性（白血球・好中球減少）",
      "出血傾向（血小板減少：紫斑・鼻出血）",
      "脾腫（一部の症例）",
      "急性骨髄性白血病への移行（約20〜30%）",
    ],
    causes:
      "体細胞変異の蓄積（TET2・SRSF2・SF3B1・TP53等）による造血幹細胞の形質転換。骨髄クローン性疾患。",
    diagnosis:
      "末梢血・骨髄検査（血球形態の異形成・芽球比率の評価）・染色体検査（del(5q)・del(7)等）・遺伝子変異解析（次世代シーケンス）。WHO/ICC分類。",
    treatment:
      "低リスク：輸血支持療法・エリスロポエチン製剤・レナリドミド（del(5q)型）・ルスパテルセプト。高リスク：アザシチジン（低メチル化薬）・同種造血幹細胞移植（唯一の根治療法）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%AA%A8%E9%AB%84%E7%95%B0%E5%BD%A2%E6%88%90%E7%97%87%E5%80%99%E7%BE%A4",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/253",
  },
  {
    slug: "polycythemia-vera",
    name: "真性多血症（PV）",
    nameEn: "Polycythemia Vera",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "JAK2遺伝子変異による骨髄増殖性腫瘍。赤血球増加を主体とし、血液粘度上昇による血栓症リスクが高い。適切な管理で長期生存が可能。",
    symptoms: [
      "顔面紅潮・頭痛・めまい・耳鳴り",
      "血栓症（脳梗塞・心筋梗塞・深部静脈血栓症）",
      "掻痒感（特に入浴後の温熱刺激で悪化）",
      "脾腫（腹部膨満・早期満腹感）",
      "出血傾向（一部・特に高度血小板増加時）",
    ],
    causes:
      "JAK2 V617F変異（95%以上）またはJAK2エクソン12変異による赤血球系・血小板系・顆粒球系の自律的増殖。",
    diagnosis:
      "WHO 2022基準。JAK2変異・ヘマトクリット値（女性>49%・男性>52%）・EPO低値・骨髄生検（三系統過形成）。",
    treatment:
      "瀉血（ヘマトクリット維持<45%）・低用量アスピリン。高リスク例にヒドロキシウレア・インターフェロン。ルキソリチニブ（JAK1/2阻害薬：ヒドロキシウレア抵抗性例）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E7%9C%9F%E6%80%A7%E5%A4%9A%E8%A1%80%E7%97%87",
  },
  {
    slug: "essential-thrombocythemia",
    name: "本態性血小板血症（ET）",
    nameEn: "Essential Thrombocythemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "骨髄増殖性腫瘍の一型。著明な血小板増加を特徴とし、血栓症と出血リスクを併せ持つ。多くは緩徐に経過するが、骨髄線維症や急性白血病への移行リスクがある。",
    symptoms: [
      "血小板増加（通常>450×10⁹/L）",
      "血栓症（脳梗塞・TIA・深部静脈血栓症）",
      "出血症状（鼻出血・消化管出血：極高値血小板時）",
      "頭痛・四肢末端の灼熱感・発赤（肢端紅痛症）",
      "脾腫",
    ],
    causes:
      "JAK2 V617F変異（60%）・CALR変異（25%）・MPL変異（4%）等のドライバー変異による巨核球系の自律的増殖。",
    diagnosis:
      "WHO 2022基準。持続的血小板増加（>450×10⁹/L）＋骨髄生検（巨核球増殖・大型巨核球）＋原因除外（反応性血小板増加の除外）。",
    treatment:
      "低リスク：経過観察・低用量アスピリン（血栓予防）。高リスク：ヒドロキシウレア・アナグレリド・インターフェロン（若年・妊娠希望例）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%9C%AC%E6%85%8B%E6%80%A7%E8%A1%80%E5%B0%8F%E6%9D%BF%E8%A1%80%E7%97%87",
  },
  {
    slug: "hemophilia-a",
    name: "血友病A",
    nameEn: "Hemophilia A",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "凝固第VIII因子の欠乏・機能異常による出血性疾患。X染色体劣性遺伝で主に男性が発症。重症度は第VIII因子活性値による（重症:1%未満・中等症:1〜5%・軽症:5〜40%）。",
    symptoms: [
      "関節内出血（関節血腫）による関節破壊・慢性関節症",
      "筋肉内出血（血腫）",
      "頭蓋内出血（生命危険・重症例）",
      "軽微な外傷での止血困難・遷延出血",
      "自然出血（重症例）",
    ],
    causes:
      "F8遺伝子変異による第VIII因子欠乏。X染色体劣性遺伝（インバージョン・大欠失・点変異等）。約30%はインヒビター（中和抗体）を発生し治療を困難にする。",
    diagnosis:
      "凝固検査（APTT延長・PT正常）・第VIII因子活性値測定・遺伝子検査。インヒビター検索（ベセスダ法）が重要。",
    treatment:
      "第VIII因子製剤（定期補充療法・オンデマンド療法）。エミシズマブ（抗体製剤・FIXa/FX架橋・皮下注射・インヒビター有無を問わず適応）。遺伝子治療（フィダノコゲン アルバパルボベク）が承認済み。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%A1%80%E5%8F%8B%E7%97%87A",
  },
  {
    slug: "hemophilia-b",
    name: "血友病B",
    nameEn: "Hemophilia B",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "凝固第IX因子の欠乏・機能異常による出血性疾患。血友病Aと同様の症状を呈するが頻度はやや低い（A:B=約4:1）。遺伝子治療が近年承認された。",
    symptoms: [
      "関節内出血（関節血腫・関節破壊）",
      "筋肉内出血",
      "頭蓋内出血（重症例）",
      "軽微な外傷での止血困難",
    ],
    causes:
      "F9遺伝子変異による第IX因子欠乏。X染色体劣性遺伝。",
    diagnosis:
      "凝固検査（APTT延長・PT正常）・第IX因子活性値測定・遺伝子検査。インヒビター検索。",
    treatment:
      "第IX因子製剤（定期補充療法・長時間作用型製剤で投与頻度を低減可能）。フィトデシュ アルバパルボベク（遺伝子治療・一回投与で長期効果）が承認済み。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%A1%80%E5%8F%8B%E7%97%87B",
  },
  {
    slug: "myelofibrosis",
    name: "骨髄線維症（MF）",
    nameEn: "Myelofibrosis",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "骨髄の線維化により造血障害・著明な脾腫・骨髄外造血をきたす骨髄増殖性腫瘍。原発性（PMF）と真性多血症・本態性血小板血症からの移行型（post-PV/ET MF）がある。",
    symptoms: [
      "著明な脾腫（腹部膨満・腹痛・早期満腹感）",
      "貧血（輸血依存になることが多い）",
      "全身症状（発熱・寝汗・体重減少・掻痒感）",
      "出血・血栓",
      "骨痛",
    ],
    causes:
      "JAK2 V617F・CALR・MPL変異等のドライバー変異に加え、ASXL1・EZH2・TP53等の付加的変異による骨髄線維化。",
    diagnosis:
      "WHO 2022基準。骨髄生検（線維化グレードMF-0〜3）・遺伝子変異解析・骨髄外造血の評価（画像）。",
    treatment:
      "ルキソリチニブ・フェドラチニブ・パクリチニブ（JAK阻害薬：症状・脾腫改善）。同種造血幹細胞移植（唯一の根治療法）。貧血に輸血・エリスロポエチン・ルスパテルセプト。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%AA%A8%E9%AB%84%E7%B7%9A%E7%B6%AD%E7%97%87",
  },

  // ─── 代謝疾患（追加） ────────────────────────────────
  {
    slug: "niemann-pick",
    name: "ニーマン・ピック病",
    nameEn: "Niemann-Pick Disease",
    nanbyoNumber: 21,
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "スフィンゴミエリナーゼ欠損（A/B型）またはNPC1/NPC2タンパク質異常（C型）によるライソゾーム病。C型は若年発症の神経変性疾患として重要。全型とも常染色体劣性遺伝。",
    symptoms: [
      "肝脾腫（A/B/C型共通）",
      "核上性眼球運動障害（C型の特徴的所見）",
      "小脳失調・構音障害・認知症（C型）",
      "カタプレキシー（突然の脱力：C型）",
      "間質性肺疾患（B型）",
    ],
    causes:
      "A/B型：SMPD1遺伝子変異によるスフィンゴミエリナーゼ欠損。C型：NPC1（95%）またはNPC2変異によるコレステロール・スフィンゴ脂質の細胞内輸送障害。",
    diagnosis:
      "A/B型：白血球での酵素活性測定。C型：フィリピン染色（細胞内コレステロール蓄積）・遺伝子検査・血漿オキシステロール（7-ケトコレステロール・25-ヒドロキシコレステロール）測定。",
    treatment:
      "A型：根治療法なし（支持療法）。B型：オラノマブ（酵素補充療法・要確認）。C型：ミグルスタット（基質合成抑制・神経症状進行抑制）・アリムタセン（RNA干渉・試験中）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%8B%E3%83%BC%E3%83%9E%E3%83%B3%E3%83%BB%E3%83%94%E3%83%83%E3%82%AF%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/244",
  },
  {
    slug: "mucopolysaccharidosis",
    name: "ムコ多糖症",
    nameEn: "Mucopolysaccharidosis",
    nanbyoNumber: 22,
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "グリコサミノグリカン（ムコ多糖）の分解に関わるライソゾーム酵素の欠損により、全身臓器に蓄積する疾患群の総称。複数の型（I〜IX型）があり、重症度・臨床像は型によって異なる。",
    symptoms: [
      "特徴的な顔貌（粗野な顔つき・大頭）",
      "骨格異常・低身長（多発性骨形成不全）",
      "肝脾腫",
      "角膜混濁（視力障害）",
      "知的障害（型による：ハーラー病等は重度）",
      "心弁膜症・上気道閉塞・呼吸障害",
    ],
    causes:
      "各型で異なる酵素の遺伝子変異（I型：IDUA、II型：IDS等）。常染色体劣性遺伝（II型のみX染色体劣性）。",
    diagnosis:
      "尿中グリコサミノグリカン測定（スクリーニング）・白血球での酵素活性測定・遺伝子検査。新生児スクリーニング（I型・II型：一部都道府県で実施）。",
    treatment:
      "酵素補充療法（I型ラロニダーゼ・II型イデュルスルファーゼ・IVA型エロスルファーゼα・VI型ガルスルファーゼ・VII型ベストロニダーゼα）。造血幹細胞移植（I型：早期実施で神経症状進行抑制効果）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%A0%E3%82%B3%E5%A4%9A%E7%B3%96%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/243",
  },
  {
    slug: "phenylketonuria",
    name: "フェニルケトン尿症（PKU）",
    nameEn: "Phenylketonuria",
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "フェニルアラニン水酸化酵素（PAH）欠損によりフェニルアラニンが蓄積し、治療しない場合は重度知的障害をきたす先天性アミノ酸代謝異常症。新生児スクリーニング対象疾患で、早期介入で正常発達が可能。",
    symptoms: [
      "治療しない場合：重度知的障害・発達遅滞・てんかん",
      "マウスのような体臭（フェニルアセチン尿）",
      "皮膚・毛髪・眼の色素減少（メラニン合成低下）",
      "湿疹様皮膚炎",
      "治療中でも神経心理学的問題が残ることがある",
    ],
    causes:
      "PAH遺伝子変異によるPAH活性低下。常染色体劣性遺伝。BH4（テトラヒドロビオプテリン）欠乏症との鑑別が必要。",
    diagnosis:
      "新生児マス・スクリーニング（タンデムマス法）によるフェニルアラニン高値の検出・確認検査（血中Phe/Tyr比）。遺伝子検査。",
    treatment:
      "フェニルアラニン制限食（生涯継続）。BH4補充療法（サプロプテリン：BH4反応性PKUに有効）。ペグバリアーゼ（PEG化フェニルアラニンアンモニアリアーゼ：成人重症例）。",
    prognosis:
      "新生児期からの適切な食事管理で通常の知的発達が期待できる。成人後も厳格な食事管理継続が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%95%E3%82%A7%E3%83%8B%E3%83%AB%E3%82%B1%E3%83%88%E3%83%B3%E5%B0%BF%E7%97%87",
  },
  {
    slug: "urea-cycle-disorder",
    name: "尿素サイクル異常症",
    nameEn: "Urea Cycle Disorder",
    nanbyoNumber: 25,
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "アンモニアを尿素に変換する尿素サイクルの酵素欠損によりアンモニア蓄積をきたす先天性代謝異常症群。OTC欠損症（OTCD）が最多（X染色体劣性）。新生児期の高アンモニア血症は致死的緊急事態。",
    symptoms: [
      "高アンモニア血症による脳症（意識障害・けいれん・昏睡）",
      "嘔吐・哺乳不良（新生児期）",
      "タンパク質嫌いの食行動（年長児・未診断例）",
      "慢性的な認知機能障害・発達遅滞",
    ],
    causes:
      "OTC・CPS1・ASS1（シトルリン血症I型）・ASL・ARG1等の尿素回路酵素の遺伝子変異。OTCD（X染色体劣性）が最多。",
    diagnosis:
      "血中アミノ酸分析（シトルリン・アルギニン等の変化）・尿中オロト酸（OTCD：高値）・アンモニア測定・酵素活性・遺伝子検査。新生児マス・スクリーニング（タンデムマス法）。",
    treatment:
      "急性期：血液透析・アンモニア排泄促進薬（安息香酸ナトリウム・フェニル酢酸ナトリウム：グリシン・グルタミンと抱合して窒素排泄）。慢性期：低タンパク食＋シトルリン・アルギニン補充。肝移植（根治・但し肝臓以外の症状は改善しない）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%B0%BF%E7%B4%A0%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E7%95%B0%E5%B8%B8%E7%97%87",
  },

  // ─── 皮膚疾患（追加） ────────────────────────────────
  {
    slug: "pemphigus",
    name: "天疱瘡",
    nameEn: "Pemphigus",
    nanbyoNumber: 162,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "皮膚・粘膜のデスモグレインに対する自己抗体により水疱・びらんが生じる自己免疫性水疱症。尋常性天疱瘡（口腔粘膜病変が先行）と落葉状天疱瘡（体幹優位の浅い水疱）が主な型。",
    symptoms: [
      "皮膚の弛緩性水疱・びらん（ニコルスキー現象陽性）",
      "口腔粘膜のびらん・疼痛（尋常性・口腔内病変が先行）",
      "体幹の浅い水疱・落屑（落葉状）",
      "感染症合併リスクの増加（皮膚バリア破綻）",
    ],
    causes:
      "抗デスモグレイン3抗体（口腔粘膜病変）・抗デスモグレイン1抗体（皮膚病変）の産生による表皮細胞間の接着破綻（棘融解）。",
    diagnosis:
      "皮膚生検（組織病理：棘融解・表皮内水疱・直接蛍光抗体法：表皮細胞間へのIgG沈着）・血清自己抗体測定（ELISA）。",
    treatment:
      "ステロイド（プレドニゾロン）が第一選択。リツキシマブ（抗CD20抗体：難治例・再発例に著効・日本でも承認）。免疫抑制薬（ミコフェノール酸・アザチオプリン）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%A4%A9%E7%96%B1%E7%98%A1",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/275",
  },
  {
    slug: "bullous-pemphigoid",
    name: "類天疱瘡",
    nameEn: "Bullous Pemphigoid",
    nanbyoNumber: 163,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "基底膜帯のBP180/BP230に対する自己抗体により緊満性水疱を形成する自己免疫性水疱症。高齢者に多く、掻痒感が強い。神経疾患（脳梗塞・パーキンソン病・認知症）との合併が注目されている。",
    symptoms: [
      "全身の緊満性水疱・紅斑",
      "強い掻痒感（水疱出現前から存在することが多い）",
      "口腔粘膜病変は少ない（天疱瘡と異なる）",
      "高齢者に多い（70〜80歳代）",
      "ニコルスキー現象陰性（天疱瘡との鑑別点）",
    ],
    causes:
      "抗BP180（XVII型コラーゲン・NCL6A5ドメイン）抗体および抗BP230（ジスプラキン）抗体による表皮下水疱形成。",
    diagnosis:
      "皮膚生検（表皮下水疱・好酸球浸潤）・直接蛍光抗体法（基底膜帯へのIgG/C3線状沈着）・血清抗BP180抗体ELISA（活動性の指標）。",
    treatment:
      "ステロイド（外用・内服）。重症例・高齢者でのステロイド副作用軽減のためリツキシマブ・デュピルマブが検討される。難治性掻痒にオマリズマブ。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%A1%9E%E5%A4%A9%E7%96%B1%E7%98%A1",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/276",
  },
  {
    slug: "psoriasis-pustulosa",
    name: "膿疱性乾癬（汎発型）",
    nameEn: "Generalized Pustular Psoriasis",
    nanbyoNumber: 54,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "全身性の無菌性膿疱を急激に発症する重症型乾癬。IL36RN遺伝子変異が日本人に多く、高熱・全身症状を伴う皮膚科的緊急疾患。スペソリマブ（抗IL-36受容体抗体）が急性期治療薬として承認された。",
    symptoms: [
      "急激な全身の無菌性膿疱・膿湖・紅斑",
      "高熱（39〜40℃）・全身倦怠感",
      "白血球増多・CRP高値（炎症反応）",
      "低カルシウム血症・低アルブミン血症",
      "再発を繰り返す",
    ],
    causes:
      "IL36RN（IL-36受容体アンタゴニスト）遺伝子変異（常染色体劣性）が日本人患者に多い（60〜70%）。CARD14・AP1S3変異例も。感染・妊娠（インプエティゴ・ヘルペティホルミス）・薬剤中止が誘因。",
    diagnosis:
      "臨床所見・病理組織（Munro微小膿瘍・好中球浸潤・表皮下の海綿状膿疱）・遺伝子検査（IL36RN等）。細菌培養（無菌を確認）。",
    treatment:
      "スペソリマブ（抗IL-36受容体抗体・急性期静注）が2023年承認。ビオロジクス（IL-17阻害：セクキヌマブ・イキセキズマブ・ビメキズマブ、IL-23阻害：リサンキズマブ・グセルクマブ）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%86%BF%E7%96%B1%E6%80%A7%E4%B9%BE%E7%99%AC",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/211",
  },
  {
    slug: "ichthyosis",
    name: "先天性魚鱗癬様紅皮症",
    nameEn: "Congenital Ichthyosiform Erythroderma",
    nanbyoNumber: 166,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "皮膚の角化・落屑を特徴とする遺伝性角化症疾患群の総称。多数の遺伝子変異が原因として知られ、全身の乾燥・落屑・発汗障害による体温調節異常が日常生活に影響する。",
    symptoms: [
      "全身の皮膚乾燥・落屑（鱗様皮膚）",
      "発汗障害による体温調節異常（熱中症リスク）",
      "掻痒感",
      "眼・耳への影響（角膜炎・外耳道閉塞）",
      "関節可動域制限（重症例）",
    ],
    causes:
      "TGM1（板状魚鱗癬）・ABCA12（ハーレキン型）・CYP4F22・ALOX12B等の多数の遺伝子変異。型によって遺伝形式（常染色体優性・劣性）が異なる。",
    diagnosis:
      "遺伝子検査・皮膚生検・電子顕微鏡。臨床型分類による評価（板状魚鱗癬・非水疱型先天性魚鱗癬様紅皮症・水疱型等）。",
    treatment:
      "根治療法なし。保湿・角質軟化（尿素・サリチル酸・乳酸配合外用薬）・入浴（毎日の浸漬で落屑除去）。重症型にエトレチナート（レチノイド）内服。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%AD%9A%E9%B1%97%E7%99%AC",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/284",
  },

  // ─── 骨・関節疾患（追加） ────────────────────────────────
  {
    slug: "achondroplasia",
    name: "軟骨無形成症",
    nameEn: "Achondroplasia",
    nanbyoNumber: 264,
    category: "骨・関節疾患",
    categorySlug: "bone",
    overview:
      "FGFR3遺伝子の点変異（G380R）による最も頻度の高い短肢型低身長症（発生頻度：約1/20,000〜25,000出生）。軟骨内骨化障害により四肢・顔面・体幹に特徴的な形態をとる。",
    symptoms: [
      "著明な四肢短縮型低身長（平均身長：男性131cm・女性124cm）",
      "大頭・前額部突出・中顔面低形成",
      "肘関節伸展制限",
      "脊柱管狭窄（成人期の腰痛・下肢症状・間欠跛行）",
      "水頭症（乳児期：大孔狭窄による）",
    ],
    causes:
      "FGFR3遺伝子p.Gly380Arg変異（常染色体優性遺伝）。約80%は新規変異（高齢父親が危険因子）。FGFR3の恒常的活性化により軟骨内骨化が抑制される。",
    diagnosis:
      "臨床・画像所見（X線：近位四肢短縮・骨盤形態）・遺伝子検査。出生前診断（超音波・羊水・絨毛遺伝子検査）も可能。",
    treatment:
      "ボソリチド（Cナトリウム利尿ペプチドアナログ：FGFR3シグナル阻害・2023年日本承認・2歳〜）による身長改善。脊柱管拡大術・水頭症シャント術・大孔拡大術。",
    prognosis:
      "ボソリチドにより身長改善が期待される。脊柱管狭窄への適切な管理で通常の活動が可能。知的障害なし。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%BB%9F%E9%AA%A8%E7%84%A1%E5%BD%A2%E6%88%90%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/287",
  },
  {
    slug: "hypophosphatasia",
    name: "低ホスファターゼ症",
    nameEn: "Hypophosphatasia",
    category: "骨・関節疾患",
    categorySlug: "bone",
    overview:
      "組織非特異的アルカリホスファターゼ（TNSALP）の遺伝子変異により骨・歯の石灰化障害をきたす代謝性骨疾患。重症度は周産期致死型から無症候型まで多様。",
    symptoms: [
      "骨軟化症・疲労骨折（成人型：特に足のMTP骨折）",
      "乳歯の早期脱落（6歳未満：歯根吸収なしに脱落）",
      "くる病様変化（小児型：骨変形・疼痛）",
      "筋力低下・筋肉痛（ピリドキシン代謝異常）",
      "重症乳幼児型：呼吸障害・ビタミンB6反応性痙攣・頭蓋早期癒合",
    ],
    causes:
      "ALPL遺伝子変異による組織非特異的アルカリホスファターゼ活性低下。常染色体優性遺伝（軽症型）または劣性遺伝（重症型）。",
    diagnosis:
      "血清ALP低値（年齢・性別正常値を参照）・尿中ホスホエタノールアミン増加・ビタミンB6（PLP）上昇・遺伝子検査。",
    treatment:
      "アスホターゼアルファ（組換えTNSALP・酵素補充療法）が承認。重症乳幼児型・小児型・成人型に使用可能。骨折予防・リハビリ。ビスホスホネートは禁忌（アルカリホスファターゼ活性をさらに低下させる）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E4%BD%8E%E3%83%9B%E3%82%B9%E3%83%95%E3%82%A1%E3%82%BF%E3%83%BC%E3%82%BC%E7%97%87",
  },
  {
    slug: "fop",
    name: "進行性骨化性線維異形成症（FOP）",
    nameEn: "Fibrodysplasia Ossificans Progressiva",
    category: "骨・関節疾患",
    categorySlug: "bone",
    overview:
      "ACVR1遺伝子変異により筋肉・腱・靱帯等の軟部組織が進行性に骨化する極めて希少な疾患。外傷・手術・注射が骨化を誘発するため、不用意な医療処置が厳禁。",
    symptoms: [
      "軟部組織の進行性骨化（不可逆的・体幹から四肢へ）",
      "生下時の足趾変形（外反母趾様・第1趾の短縮）",
      "外傷・手術・注射・感染が骨化フレアアップを誘発",
      "体幹・四肢・顎の運動制限の進行",
      "若年成人での著明なADL障害（食事・呼吸）",
    ],
    causes:
      "ACVR1（ALK2）遺伝子変異（R206H変異が90%以上）によるBMP（骨形成タンパク質）シグナルの恒常的活性化。常染色体優性遺伝。約97%が新規変異。",
    diagnosis:
      "臨床症状（足趾変形＋軟部組織骨化）・遺伝子検査（ACVR1変異確認）。生検は骨化フレアアップを誘発するため原則禁忌。",
    treatment:
      "根治療法なし。プレドニゾロン（フレアアップ時の短期投与：浮腫・炎症軽減）。パロバロテン（レチノイン酸受容体γアゴニスト・BMP阻害・欧米で承認）。",
    prognosis:
      "進行性に骨化が広がり、成人期以降に著明な運動制限と呼吸障害が生じる。平均寿命は40〜50代とされる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%80%B2%E8%A1%8C%E6%80%A7%E9%AA%A8%E5%8C%96%E6%80%A7%E7%B7%9A%E7%B6%AD%E7%95%B0%E5%BD%A2%E6%88%90%E7%97%87",
  },
  {
    slug: "ehlers-danlos",
    name: "エーラス・ダンロス症候群（EDS）",
    nameEn: "Ehlers-Danlos Syndrome",
    nanbyoNumber: 167,
    category: "骨・関節疾患",
    categorySlug: "bone",
    overview:
      "コラーゲンの合成・構造異常による結合組織疾患群の総称。13の型（古典型・過可動型・血管型等）があり、皮膚過伸展・関節過可動性・皮膚脆弱性を主徴とする。",
    symptoms: [
      "皮膚の過伸展性（ゴムのように伸びる）",
      "関節過可動性（脱臼・捻挫を繰り返す）",
      "皮膚脆弱性（傷が治りにくい・ミミズ腫れ状瘢痕）",
      "動脈・消化管・子宮の突然破裂（血管型：生命危険）",
      "慢性疼痛・易疲労感・起立不耐症",
    ],
    causes:
      "COL5A1/2（古典型）・COL3A1（血管型）・TNXB等の複数のコラーゲン関連遺伝子変異。過可動型（最多：60〜80%）は原因遺伝子不明。",
    diagnosis:
      "2017年国際EDS基準（型別の臨床基準＋確定的遺伝子検査）。Beightonスコア（関節過可動性評価：9点満点）。",
    treatment:
      "根治療法なし。血管型は定期的な血管画像監視・予防的手術。慢性疼痛管理・物理療法・装具（関節安定化）・心理サポート。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%A8%E3%83%BC%E3%83%A9%E3%82%B9%E3%83%BB%E3%83%80%E3%83%B3%E3%83%AD%E3%82%B9%E7%97%87%E5%80%99%E7%BE%A4",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/283",
  },

  // ─── 内分泌・その他疾患（追加） ────────────────────────────
  {
    slug: "addisons-disease",
    name: "アジソン病（原発性副腎皮質機能低下症）",
    nameEn: "Addison's Disease",
    category: "代謝疾患",
    categorySlug: "metabolic",
    overview:
      "副腎皮質が破壊され、コルチゾール・アルドステロンの産生が低下する疾患。先進国では自己免疫性が最多（約70〜80%）。副腎クリーゼは生命に関わる緊急事態。",
    symptoms: [
      "全身倦怠感・虚弱・体重減少・食欲不振",
      "皮膚・粘膜の色素沈着（ACTH過剰分泌による）",
      "低血圧・起立性低血圧",
      "消化器症状（悪心・嘔吐・下痢・腹痛）",
      "副腎クリーゼ（急性副腎不全：ストレス時の高熱・ショック・意識障害）",
    ],
    causes:
      "自己免疫性（抗21水酸化酵素抗体・抗副腎皮質抗体：70〜80%）・感染症（結核・真菌）・出血（ウォーターハウス・フリードリクセン症候群）・腫瘍転移等による副腎皮質破壊。",
    diagnosis:
      "血清コルチゾール低値・ACTH高値（一次性）・迅速ACTH負荷試験（コルチゾール反応不良）・抗21水酸化酵素抗体（自己免疫性確認）。副腎CT（萎縮・石灰化等）。",
    treatment:
      "生涯にわたるホルモン補充療法：ヒドロコルチゾン（コルチゾール補充：通常15〜25mg/日分服）・フルドロコルチゾン（ミネラルコルチコイド補充）。ストレス時・手術時の補充量増加（シック・デイ・ルール）が必須。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%89%AF%E8%85%8E%E7%9A%AE%E8%B3%AA%E6%A9%9F%E8%83%BD%E4%BD%8E%E4%B8%8B%E7%97%87",
  },
  // ─── 神経・筋疾患（追加バッチ1） ────────────────────────────────
  {
    slug: "moyamoya",
    name: "もやもや病",
    nameEn: "Moyamoya Disease",
    nanbyoNumber: 22,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "内頸動脈末端の進行性狭窄・閉塞により、脳底部に異常血管網（もやもや血管）が形成される疾患。脳虚血発作と脳出血の両方を引き起こす。日本人に多く、RNF213遺伝子変異との関連が示唆されている。",
    symptoms: [
      "脳虚血発作（TIA・脳梗塞：小児に多い）",
      "脳出血（成人に多い）",
      "頭痛",
      "けいれん",
      "認知機能障害（慢性虚血）",
    ],
    causes:
      "RNF213遺伝子変異との関連が示唆されている（日本人に多い）が、詳細な発症機序は不明。内頸動脈末端の進行性狭窄により側副血行路として異常血管網が発達する。",
    diagnosis:
      "脳血管造影・MRA（特徴的なもやもや血管像）による診断。MRI/MRAで両側内頸動脈末端の狭窄・閉塞と側副血管の確認。",
    treatment:
      "脳血行再建術（直接バイパス術：浅側頭動脈-中大脳動脈吻合、間接バイパス術：EDAS・EMS等）が虚血発作予防に有効。脳出血例への外科治療も施行される。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%82%E3%82%84%E3%82%82%E3%82%84%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/199",
  },
  {
    slug: "cidp",
    name: "慢性炎症性脱髄性多発神経炎（CIDP）",
    nameEn: "Chronic Inflammatory Demyelinating Polyneuropathy",
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "自己免疫機序による末梢神経のミエリン鞘破壊が進行性または再発性に起こる疾患。四肢の脱力・感覚障害が主症状で、治療により改善が得られる例が多い。",
    symptoms: [
      "四肢の対称性筋力低下",
      "しびれ・感覚障害",
      "腱反射消失・低下",
      "歩行障害",
      "脳神経障害（顔面神経麻痺等、一部の例）",
    ],
    causes:
      "自己免疫性末梢神経疾患。抗ノドーソパラノドーパシー（抗コンタクチン1・抗ニューロファスシン155抗体等）が一部に同定される。",
    diagnosis:
      "神経伝導検査（伝導速度低下・伝導ブロック）・髄液検査（蛋白細胞解離）・神経生検・自己抗体検索。",
    treatment:
      "静注免疫グロブリン（IVIG）・ステロイド（プレドニゾロン）・血漿交換・リツキシマブ（抗ノドーソパラノドーパシー例）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%85%A2%E6%80%A7%E7%82%8E%E7%97%87%E6%80%A7%E8%84%B1%E9%AB%84%E6%80%A7%E5%A4%9A%E7%99%BA%E7%A5%9E%E7%B5%8C%E7%82%8E",
  },
  {
    slug: "narcolepsy",
    name: "ナルコレプシー",
    nameEn: "Narcolepsy",
    nanbyoNumber: 128,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "オレキシン（ヒポクレチン）産生神経細胞の消失による過眠症。日中の耐えがたい眠気と情動脱力発作（カタプレキシー）が特徴。",
    symptoms: [
      "日中過眠（耐えがたい眠気・突発的入眠）",
      "情動脱力発作（カタプレキシー：感情誘発性の脱力）",
      "入眠時幻覚",
      "睡眠麻痺（金縛り）",
      "夜間睡眠障害",
    ],
    causes:
      "視床下部のオレキシン産生神経細胞の自己免疫性消失。HLA-DQB1*06:02との強い関連があり、環境因子（インフルエンザ感染・A/H1N1ワクチン）が誘因になる場合がある。",
    diagnosis:
      "反復睡眠潜時検査（MSLT：平均睡眠潜時8分未満・SOREMP2回以上）・髄液オレキシン-1濃度測定（110pg/mL以下）・HLA-DQB1*06:02検査。",
    treatment:
      "モダフィニル・塩酸メチルフェニデート（日中過眠）・ナトリウムオキシベート（カタプレキシー・過眠）・クロミプラミン・SSRI（カタプレキシー）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%8A%E3%83%AB%E3%82%B3%E3%83%AC%E3%83%97%E3%82%B7%E3%83%BC",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5083",
  },
  {
    slug: "creutzfeldt-jakob",
    name: "クロイツフェルト・ヤコブ病（CJD）",
    nameEn: "Creutzfeldt-Jakob Disease",
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "異常プリオンタンパク（PrPSc）の蓄積による急速進行性致死性脳症。孤発性（85%）・遺伝性・医原性・変異型（vCJD：BSE関連）がある。",
    symptoms: [
      "急速進行性認知症",
      "ミオクローヌス（突発性筋収縮）",
      "視覚障害・幻視",
      "小脳失調",
      "無動無言状態（末期）",
    ],
    causes:
      "異常プリオンタンパク（PrPSc）の蓄積による神経細胞死。孤発性が85%を占め、PRNP遺伝子変異による遺伝性・医原性（硬膜移植等）・変異型（vCJD：BSE感染牛由来）がある。",
    diagnosis:
      "脳波（周期性鋭波複合：PSWCs）・MRI（DWI拡散制限：皮質・基底核・視床）・髄液RT-QuIC検査（高感度）・14-3-3タンパク。",
    treatment:
      "根本的治療法なし。緩和ケア・症状緩和（ミオクローヌスに抗てんかん薬）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%AF%E3%83%AD%E3%82%A4%E3%83%84%E3%83%95%E3%82%A7%E3%83%AB%E3%83%88%E3%83%BB%E3%83%A4%E3%82%B3%E3%83%96%E7%97%85",
  },
  {
    slug: "restless-legs",
    name: "レストレスレッグス症候群",
    nameEn: "Restless Legs Syndrome",
    nanbyoNumber: 15,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "安静時の下肢不快感と「動かしたい衝動」を主症状とする感覚運動障害。夜間に悪化し睡眠障害を引き起こす。ドパミン機能異常・鉄欠乏・遺伝的素因が関与する。",
    symptoms: [
      "下肢の不快感（むずむず・虫がはう感じ・灼熱感）",
      "安静時に悪化し動かすと軽減",
      "夕方〜夜間に悪化",
      "周期性四肢運動（睡眠中）",
      "不眠・日中の眠気",
    ],
    causes:
      "ドパミン機能異常・脳内鉄欠乏が主因。遺伝的素因（BTBD9・MEIS1等の遺伝子多型）。続発性は鉄欠乏性貧血・腎不全・妊娠・薬剤（抗精神病薬・抗うつ薬）による。",
    diagnosis:
      "国際RLS研究グループ（IRLSSG）の臨床診断基準4必須項目による臨床診断。血清フェリチン測定・ドパミンアゴニスト治療反応性の確認。",
    treatment:
      "ドパミンアゴニスト（プラミペキソール・ロピニロール・ロチゴチンパッチ）・α2δリガンド（ガバペンチン・プレガバリン）・鉄補充（フェリチン低値例）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%AC%E3%82%B9%E3%83%88%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%82%B0%E3%82%B9%E7%97%87%E5%80%99%E7%BE%A4",
  },
  {
    slug: "syringomyelia",
    name: "脊髄空洞症",
    nameEn: "Syringomyelia",
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "脊髄内に液体貯留（空洞）が形成され、神経障害を引き起こす疾患。キアリ奇形・外傷・腫瘍・脊髄係留等が原因となる。",
    symptoms: [
      "解離性感覚障害（痛覚・温度覚低下、触覚保存）",
      "筋力低下・筋萎縮（手内在筋）",
      "脊柱側弯",
      "自律神経障害",
      "疼痛（頸部〜肩・腕）",
    ],
    causes:
      "キアリ奇形（I型）が最多。外傷後・脊髄腫瘍・癒着性くも膜炎・脊髄係留・特発性も原因となる。脳脊髄液循環障害が空洞形成に関与する。",
    diagnosis:
      "MRI（矢状断・軸位断：脊髄内の空洞描出）。原因疾患（キアリ奇形・腫瘍等）の検索も必須。",
    treatment:
      "原因疾患の治療が優先（キアリ奇形：後頭蓋窩減圧術、腫瘍：摘出等）。空洞縮小が得られない例にはシャント術（空洞-くも膜下腔シャント等）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%84%8A%E9%AB%84%E7%A9%BA%E6%B4%9E%E7%97%87",
  },
  {
    slug: "hereditary-spastic-paraplegia",
    name: "遺伝性痙性対麻痺",
    nameEn: "Hereditary Spastic Paraplegia",
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "進行性の下肢痙性・歩行障害を特徴とする遺伝性神経疾患群。70以上の遺伝子座（SPG）が同定されており、SPG4（SPAST遺伝子変異）が最も多い。",
    symptoms: [
      "下肢痙性（痙縮）",
      "筋力低下・歩行困難",
      "膀胱機能障害（尿意切迫・尿失禁）",
      "腱反射亢進・病的反射",
      "複雑型では認知機能障害・末梢神経障害を伴う",
    ],
    causes:
      "常染色体優性・劣性・X連鎖性等、多様な遺伝形式。SPAST（SPG4）変異が常染色体優性型の最多原因。軸索輸送・ミトコンドリア機能・脂質代謝等の障害が機序として示唆される。",
    diagnosis:
      "遺伝子検査・神経伝導検査・体性感覚誘発電位・MRI（脊髄萎縮）。家族歴の確認が重要。",
    treatment:
      "根治療法なし。バクロフェン・チザニジン（痙縮緩和）・ボツリヌス毒素注射・リハビリテーション・膀胱管理。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E9%81%BA%E4%BC%9D%E6%80%A7%E7%97%99%E6%80%A7%E5%AF%BE%E9%BA%BB%E7%97%BA",
  },
  {
    slug: "stiff-person",
    name: "スティッフパーソン症候群",
    nameEn: "Stiff Person Syndrome",
    nanbyoNumber: 136,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "体幹・四肢の進行性筋強剛と有痛性筋痙攣を特徴とする自己免疫性神経疾患。抗GAD65抗体によるGABA作動性抑制性神経伝達障害が主な機序。",
    symptoms: [
      "体幹の筋強剛・腰椎前弯増強",
      "刺激誘発性の有痛性筋痙攣",
      "歩行障害・転倒",
      "不安・恐怖感",
      "自律神経症状（発汗・頻脈）",
    ],
    causes:
      "抗GAD65抗体（80%以上）によるGABA作動性介在ニューロンへの攻撃で抑制性神経伝達が障害される。自己免疫性疾患（1型糖尿病・甲状腺疾患等）との合併が多い。腫瘍随伴性（抗アンフィフィシン抗体）例もある。",
    diagnosis:
      "抗GAD抗体測定・筋電図（持続的運動単位活動電位）・臨床症状による診断。腫瘍随伴性除外のため悪性腫瘍の検索も必要。",
    treatment:
      "ジアゼパム・バクロフェン（筋強剛・痙攣の緩和）・静注免疫グロブリン（IVIG）・ステロイド・血漿交換・リツキシマブ。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%B9%E3%83%86%E3%82%A3%E3%83%83%E3%83%95%E3%83%91%E3%83%BC%E3%82%BD%E3%83%B3%E7%97%87%E5%80%99%E7%BE%A4",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5131",
  },
  {
    slug: "multifocal-motor-neuropathy",
    name: "多巣性運動ニューロパチー",
    nameEn: "Multifocal Motor Neuropathy",
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "非対称性の純粋運動障害を示す末梢神経疾患。ALSとの鑑別が重要で、IVIGに著効する治療可能な疾患。抗GM1抗体が50〜60%に陽性。",
    symptoms: [
      "上肢優位の非対称性筋力低下",
      "筋萎縮・線維束性収縮",
      "腱反射低下〜消失",
      "感覚障害は通常みられない",
      "手指・手関節の筋力低下が先行しやすい",
    ],
    causes:
      "抗GM1 IgM抗体（50〜60%に陽性）による末梢神経ランビエ絞輪部への攻撃が示唆される。",
    diagnosis:
      "神経伝導検査（多巣性伝導ブロック：運動神経のみ）・抗GM1 IgM抗体測定。感覚神経伝導は正常。",
    treatment:
      "静注免疫グロブリン（IVIG）が第一選択で著効する。維持療法が必要な例が多い。難治例にシクロホスファミド。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%A4%9A%E5%B7%A3%E6%80%A7%E9%81%8B%E5%8B%95%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%AD%E3%83%91%E3%83%81%E3%83%BC",
  },
  {
    slug: "lewy-body-dementia",
    name: "レビー小体型認知症",
    nameEn: "Dementia with Lewy Bodies",
    nanbyoNumber: 78,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "αシヌクレインの蓄積（レビー小体）による認知症。パーキンソン病認知症と連続する疾患概念。認知機能の変動・繰り返す幻視・パーキンソン症状の三徴が特徴。",
    symptoms: [
      "認知機能の変動（覚醒度・注意の日内変動）",
      "繰り返す具体的な幻視",
      "パーキンソン症状（動作緩慢・振戦・固縮）",
      "REM睡眠行動障害（寝言・寝ぼけ行動）",
      "自律神経障害（起立性低血圧・便秘）",
    ],
    causes:
      "αシヌクレインの神経細胞内蓄積（レビー小体形成）による神経細胞死。コリン作動性・ドパミン作動性神経が障害される。多くは孤発性。",
    diagnosis:
      "McKeith診断基準（2017）。補助的バイオマーカー：DATスキャン（線条体ドパミン取り込み低下）・心臓MIBGシンチ（交感神経障害）・睡眠ポリグラフ（REM睡眠行動障害）。",
    treatment:
      "コリンエステラーゼ阻害薬（リバスチグミン・ドネペジル）が認知機能・幻視に有効。抗精神病薬は過敏反応（重篤な副作用）があり原則禁忌。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%AC%E3%83%93%E3%83%BC%E5%B0%8F%E4%BD%93%E5%9E%8B%E8%AA%8D%E7%9F%A5%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5655",
  },

  // ─── 免疫・膠原病（追加バッチ1） ────────────────────────────────
  {
    slug: "sjogrens",
    name: "シェーグレン症候群",
    nameEn: "Sjögren's Syndrome",
    nanbyoNumber: 53,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "涙腺・唾液腺を主標的とした自己免疫疾患で、口腔乾燥・眼乾燥（シッカ症候群）が主症状。全身性病変（間質性肺疾患・末梢神経炎・腎炎等）を合併しうる。悪性リンパ腫のリスクが高まる。",
    symptoms: [
      "口腔乾燥（唾液分泌低下・虫歯増加）",
      "眼乾燥（ドライアイ・角膜障害）",
      "関節炎・関節痛",
      "間質性肺疾患",
      "末梢神経炎・中枢神経病変",
    ],
    causes:
      "抗SS-A/Ro抗体・抗SS-B/La抗体が特徴的自己抗体。T細胞・B細胞による外分泌腺への免疫攻撃。ウイルス感染（EBV等）・遺伝的素因が関与する。",
    diagnosis:
      "眼科検査（Schirmerテスト：涙液分泌量測定、ローズベンガル染色）・唾液腺生検（小唾液腺へのリンパ球浸潤）・抗SS-A/SS-B抗体・唾液腺シンチグラフィ。",
    treatment:
      "乾燥症状：人工涙液・人工唾液・塩酸セビメリン（唾液分泌促進）。全身性病変：ヒドロキシクロロキン・ステロイド・免疫抑制薬（メトトレキサート・ミゾリビン等）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%B7%E3%82%A7%E3%83%BC%E3%82%B0%E3%83%AC%E3%83%B3%E7%97%87%E5%80%99%E7%BE%A4",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/339",
  },
  {
    slug: "relapsing-polychondritis",
    name: "再発性多発軟骨炎",
    nameEn: "Relapsing Polychondritis",
    nanbyoNumber: 193,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "耳介・鼻・気管・関節・眼等の軟骨・結合組織への自己免疫性炎症が再発を繰り返す疾患。気管軟骨の炎症による気道障害が生命予後に関わる。",
    symptoms: [
      "耳介軟骨炎（耳介の発赤・腫脹・疼痛：耳垂は非罹患）",
      "鼻軟骨炎（鞍鼻変形）",
      "気管・気管支軟骨炎（咳嗽・呼吸困難・気道狭窄）",
      "眼炎症（強膜炎・ぶどう膜炎）",
      "多関節炎・心臓弁膜症",
    ],
    causes:
      "コラーゲン（特にII型）・マトリリン-1・COMP等に対する自己免疫反応が示唆される。他の自己免疫疾患（MDS・血管炎等）との合併が多い。",
    diagnosis:
      "McAdam基準（6項目中3項目以上、または組織生検で軟骨炎確認）による臨床診断。耳介・気管生検（好中球・リンパ球浸潤・軟骨破壊）。",
    treatment:
      "ステロイド（急性期）・ダプソン（軽症）・コルヒチン・免疫抑制薬（メトトレキサート・アザチオプリン等）・IL-6阻害薬（トシリズマブ）・気道病変には気管ステント。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%86%8D%E7%99%BA%E6%80%A7%E5%A4%9A%E7%99%BA%E8%BB%9F%E9%AA%A8%E7%82%8E",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/3703",
  },
  {
    slug: "familial-mediterranean-fever",
    name: "家族性地中海熱",
    nameEn: "Familial Mediterranean Fever",
    nanbyoNumber: 266,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "MEFV遺伝子変異によるピリン（マレノストリン）機能異常でIL-1βが過剰産生される自己炎症疾患。発熱・漿膜炎の発作を繰り返し、無治療では続発性AAアミロイドーシスをきたす。",
    symptoms: [
      "繰り返す発熱（12〜72時間・自然軽快）",
      "腹膜炎（腹痛・腹部緊張）",
      "胸膜炎（胸痛・呼吸困難）",
      "関節炎（膝・足首等の大関節）",
      "丹毒様皮疹（下腿）",
    ],
    causes:
      "MEFV遺伝子変異（M694V等）によるピリンタンパク機能異常。インフラマソーム過活性化によりIL-1βが過剰産生される。地中海沿岸民族（アシュケナジユダヤ人・アルメニア人・トルコ人・アラブ人）に多い。",
    diagnosis:
      "遺伝子検査（MEFV遺伝子変異）・臨床基準（繰り返す発熱発作＋漿膜炎）・コルヒチン治療反応性。",
    treatment:
      "コルヒチン（発作予防・AAアミロイドーシス予防の標準治療）。コルヒチン抵抗例・不耐例にはIL-1阻害薬（アナキンラ・カナキヌマブ）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%AE%B6%E6%97%8F%E6%80%A7%E5%9C%B0%E4%B8%AD%E6%B5%B7%E7%86%B1",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/3848",
  },
  {
    slug: "caps",
    name: "クリオピリン関連周期熱症候群（CAPS）",
    nameEn: "Cryopyrin-Associated Periodic Syndrome",
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "NLRP3遺伝子変異によるクリオピリンの機能獲得型変異でIL-1βが過剰産生される自己炎症疾患群。重症度により家族性寒冷自己炎症症候群（FCAS）・Muckle-Wells症候群（MWS）・新生児期多臓器炎症性疾患（NOMID/CINCA）に分類される。",
    symptoms: [
      "繰り返す発熱・蕁麻疹様皮疹",
      "関節痛・関節炎",
      "感音性難聴（MWS・NOMID）",
      "眼病変（結膜炎・ぶどう膜炎）",
      "中枢神経症状・脳症（NOMID重症型）",
    ],
    causes:
      "NLRP3（CIAS1）遺伝子の常染色体優性変異によるインフラマソーム過活性化とIL-1β過剰産生。",
    diagnosis:
      "遺伝子検査（NLRP3変異）・臨床症状・炎症マーカー高値（CRP・SAA）。",
    treatment:
      "IL-1阻害薬（カナキヌマブ・アナキンラ・リロナセプト）が著効。早期治療開始が難聴・アミロイドーシス予防に重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%AF%E3%83%AA%E3%82%AA%E3%83%94%E3%83%AA%E3%83%B3%E9%96%A2%E9%80%A3%E5%91%A8%E6%9C%9F%E7%86%B1%E7%97%87%E5%80%99%E7%BE%A4",
  },
  {
    slug: "hlh",
    name: "血球貪食性リンパ組織球症（HLH）",
    nameEn: "Hemophagocytic Lymphohistiocytosis",
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "過剰な免疫活性化（サイトカインストーム）による生命を脅かす多臓器障害症候群。原発性（遺伝性：穿孔素欠損等）と続発性（感染・悪性腫瘍・自己免疫疾患）に分類される。",
    symptoms: [
      "持続する高熱（抗菌薬不応性）",
      "血球減少（汎血球減少）",
      "肝脾腫",
      "高フェリチン血症（≥500ng/mL）",
      "骨髄・脾臓での血球貪食像",
    ],
    causes:
      "遺伝性：穿孔素（PRF1）・UNC13D・STX11等の変異によりNK細胞・CTL機能が障害され免疫応答が制御不能になる。続発性：EBV感染・悪性リンパ腫・自己免疫疾患等が誘因。",
    diagnosis:
      "HLH-2004診断基準（8項目中5項目以上）：発熱・脾腫・血球減少・高トリグリセリド血症/低フィブリノゲン血症・血球貪食像・NK細胞活性低下・高フェリチン血症・sCD25高値。",
    treatment:
      "HLH-94/2004プロトコール（エトポシド・デキサメタゾン・シクロスポリン）。原発性例には同種造血幹細胞移植が唯一の根治療法。EBV関連にはリツキシマブ。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%A1%80%E7%90%83%E8%B2%AA%E9%A3%9F%E6%80%A7%E3%83%AA%E3%83%B3%E3%83%91%E7%B5%84%E7%B9%94%E7%90%83%E7%97%87",
  },
  {
    slug: "antiphospholipid-syndrome",
    name: "抗リン脂質抗体症候群",
    nameEn: "Antiphospholipid Syndrome",
    nanbyoNumber: 48,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "抗リン脂質抗体（ループスアンチコアグラント・抗カルジオリピン抗体・抗β2GPI抗体）の持続陽性に伴い、動静脈血栓症や妊娠合併症をきたす自己免疫疾患。SLEに合併する続発性と、単独の原発性がある。",
    symptoms: [
      "深部静脈血栓症・肺塞栓症",
      "脳梗塞・TIA（若年者の脳血管障害）",
      "習慣性流産・死産・早産",
      "血小板減少・網状皮斑",
      "カタストロフィック抗リン脂質抗体症候群（CAPS：多臓器血栓症・急速進行）",
    ],
    causes:
      "抗カルジオリピン抗体・ループスアンチコアグラント・抗β2GPI抗体が凝固系・内皮・血小板に作用し血栓形成促進状態をきたす。",
    diagnosis:
      "血栓症または妊娠合併症の臨床基準＋抗リン脂質抗体（12週以上の間隔をあけた2回以上の陽性）によるSapporo/Sydney基準。",
    treatment:
      "血栓症例：ワルファリン長期抗凝固療法（INR 2.0〜3.0）。妊娠例：低用量アスピリン＋ヘパリン。CAPS：多剤免疫療法（ステロイド・IVIG・血漿交換・リツキシマブ）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%8A%97%E3%83%AA%E3%83%B3%E8%84%82%E8%B3%AA%E6%8A%97%E4%BD%93%E7%97%87%E5%80%99%E7%BE%A4",
  },
  {
    slug: "adult-stills",
    name: "成人スティル病",
    nameEn: "Adult-onset Still's Disease",
    nanbyoNumber: 44,
    category: "免疫・膠原病",
    categorySlug: "immune",
    overview:
      "弛張熱・関節炎・サーモンピンク色の一過性皮疹・高フェリチン血症を特徴とする全身性自己炎症性疾患。IL-1β・IL-18・IL-6等のサイトカインが病態に関与する。",
    symptoms: [
      "弛張熱（39℃以上：夕方〜夜に出現し解熱）",
      "サーモンピンク色の一過性皮疹（発熱時に出現）",
      "関節炎・関節痛",
      "咽頭痛・リンパ節腫脹・肝脾腫",
      "高フェリチン血症（>1000ng/mL）",
    ],
    causes:
      "IL-1β・IL-18・IL-6等の自然免疫系サイトカインの過剰産生による自己炎症。感染（ウイルス等）が誘因となる場合がある。",
    diagnosis:
      "山口基準（Yamaguchi criteria：大基準4項目・小基準4項目）。感染症・悪性腫瘍・他の自己免疫疾患の除外が必須。",
    treatment:
      "NSAIDs・ステロイド（中等症〜重症）・IL-1受容体拮抗薬（アナキンラ）・IL-6阻害薬（トシリズマブ）・メトトレキサート（慢性関節型）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%88%90%E4%BA%BA%E3%82%B9%E3%83%86%E3%82%A3%E3%83%AB%E7%97%85",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/323",
  },

  // ─── 呼吸器疾患（追加バッチ1） ────────────────────────────────
  {
    slug: "ipf",
    name: "特発性肺線維症",
    nameEn: "Idiopathic Pulmonary Fibrosis",
    nanbyoNumber: 85,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "原因不明の進行性かつ不可逆性の肺線維化を特徴とするびまん性肺疾患。予後不良で、診断後の中央生存期間は2〜3年とされていたが、抗線維化薬により進行抑制が可能となった。",
    symptoms: [
      "労作時息切れ（進行性）",
      "乾性咳嗽（慢性）",
      "捻髪音（fine crackles：肺底部）",
      "バチ指",
      "急性増悪（感染等を契機とした急激な悪化）",
    ],
    causes:
      "原因不明。反復する上皮障害と異常な修復機転（TGF-β・線維芽細胞活性化）による線維化が機序として示唆される。喫煙・加齢・遺伝的素因（MUC5B変異等）が関与。",
    diagnosis:
      "HRCT（UIPパターン：蜂巣肺・牽引性気管支拡張）・必要に応じて外科的肺生検（UIP病理像）。感染・薬剤性・膠原病性等の除外。",
    treatment:
      "抗線維化薬：ニンテダニブ（チロシンキナーゼ阻害薬）・ピルフェニドン（TGF-β抑制）が進行を遅延。急性増悪にステロイドパルス。肺移植（適応例）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E7%89%B9%E7%99%BA%E6%80%A7%E8%82%BA%E7%B7%9A%E7%B6%AD%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/237",
  },
  {
    slug: "lam",
    name: "リンパ脈管筋腫症（LAM）",
    nameEn: "Lymphangioleiomyomatosis",
    nanbyoNumber: 189,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "主に若い女性に発症するmTOR経路の異常活性化による嚢胞性肺疾患。TSC1/TSC2遺伝子変異（結節性硬化症関連）または体細胞TSC2変異（孤発性）による。",
    symptoms: [
      "進行性息切れ・労作時呼吸困難",
      "自然気胸（反復しやすい）",
      "乳び胸水・乳び腹水",
      "腎血管筋脂肪腫（AML：多発・両側）",
      "腹部リンパ節腫大",
    ],
    causes:
      "TSC1/TSC2遺伝子変異によるmTOR（哺乳類ラパマイシン標的タンパク）経路の過活性化。LAM細胞が肺・リンパ節・腎臓等に浸潤・増殖する。女性ホルモン（エストロゲン）依存性がある。",
    diagnosis:
      "HRCT（両側びまん性薄壁嚢胞）・血清VEGF-D高値・腎AML確認・組織生検（HMB45陽性LAM細胞）。",
    treatment:
      "シロリムス（エベロリムス）：mTOR阻害薬が肺機能低下抑制・リンパ系病変縮小に有効。気胸には胸膜癒着術。重症肺機能低下例には肺移植。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%AA%E3%83%B3%E3%83%91%E8%84%88%E7%AE%A1%E7%AD%8B%E8%85%AB%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/255",
  },
  {
    slug: "pulmonary-alveolar-proteinosis",
    name: "肺胞蛋白症",
    nameEn: "Pulmonary Alveolar Proteinosis",
    nanbyoNumber: 190,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "肺胞内にサーファクタント類似物質（リポ蛋白）が蓄積し呼吸不全をきたす疾患。後天性（自己免疫性：抗GM-CSF抗体陽性）が最多。",
    symptoms: [
      "進行性息切れ・労作時呼吸困難",
      "乾性咳嗽",
      "低酸素血症",
      "易感染性（ノカルジア等の日和見感染）",
      "軽症例では無症状のこともある",
    ],
    causes:
      "後天性（自己免疫性）：抗GM-CSF自己抗体によりGM-CSFシグナルが障害され肺胞マクロファージによるサーファクタント代謝が低下。遺伝性・続発性（白血病・シリカ吸入等）もある。",
    diagnosis:
      "HRCT（crazy paving pattern：スリガラス影＋小葉間隔壁肥厚）・気管支肺胞洗浄（BAL：乳白色洗浄液・PAS染色陽性）・血清抗GM-CSF抗体。",
    treatment:
      "全肺洗浄（WLL：標準治療）。後天性にはGM-CSF吸入療法・皮下注射。リツキシマブ（再発難治例）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%82%BA%E8%83%9E%E8%9B%8B%E7%99%BD%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/256",
  },
  {
    slug: "sarcoidosis",
    name: "サルコイドーシス",
    nameEn: "Sarcoidosis",
    nanbyoNumber: 84,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "肺・リンパ節・眼・皮膚・心臓等の多臓器に非乾酪性類上皮細胞肉芽腫が形成される全身性疾患。多くは自然寛解するが、心臓サルコイドーシスは致死的不整脈の原因となる。",
    symptoms: [
      "両側肺門リンパ節腫脹・肺浸潤影（無症状のことも多い）",
      "眼病変（ぶどう膜炎・視力障害）",
      "皮膚病変（結節性紅斑・凍瘡状狼瘡・皮下結節）",
      "心臓サルコイドーシス（刺激伝導障害・致死的不整脈・心不全）",
      "神経サルコイドーシス（顔面神経麻痺・髄膜炎）",
    ],
    causes:
      "原因不明の肉芽腫性疾患。環境抗原（マイコバクテリア・プロピオニバクテリウム・粉塵等）に対する異常なTh1免疫応答が示唆される。遺伝的素因もある。",
    diagnosis:
      "組織生検（非乾酪性類上皮細胞肉芽腫の確認）・胸部X線・CT・ガリウムシンチグラフィ・血清ACE高値・血清リゾチーム高値。心臓はPET/MRI。",
    treatment:
      "自然寛解例は経過観察。眼・心臓・神経・重症肺病変はステロイド治療。難治例にメトトレキサート・アザチオプリン等。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%B5%E3%83%AB%E3%82%B3%E3%82%A4%E3%83%89%E3%83%BC%E3%82%B7%E3%82%B9",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/234",
  },
  {
    slug: "primary-ciliary-dyskinesia",
    name: "原発性線毛機能不全症",
    nameEn: "Primary Ciliary Dyskinesia",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "線毛の構造・機能異常により気道粘液クリアランス・精子運動・胚の左右決定が障害される遺伝性疾患。内臓逆位を伴う場合をKartagener症候群と呼ぶ。",
    symptoms: [
      "反復性気道感染（慢性副鼻腔炎・慢性中耳炎・気管支炎）",
      "気管支拡張症（反復感染による）",
      "内臓逆位（約50%：situs inversus）",
      "男性不妊（精子鞭毛の運動障害）",
      "水頭症（一部の例）",
    ],
    causes:
      "DNAI1・DNAH5・DNAH11・CCDC39・CCDC40等、40以上の遺伝子変異が同定されている。常染色体劣性が多い。",
    diagnosis:
      "鼻腔NO測定（著明低値）・透過型電子顕微鏡（繊毛の超微細構造異常）・高速ビデオ顕微鏡（線毛運動解析）・遺伝子検査。",
    treatment:
      "気道クリアランス（体位排痰・高振動数胸壁振動装置）・早期積極的抗菌薬療法（緑膿菌除菌含む）・定期呼吸器専門管理。根治療法なし。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%8E%9F%E7%99%BA%E6%80%A7%E7%B7%9A%E6%AF%9B%E6%A9%9F%E8%83%BD%E4%B8%8D%E5%85%A8%E7%97%87",
  },

  // ─── 腎・泌尿器疾患（追加バッチ1） ────────────────────────────────
  {
    slug: "alport-syndrome",
    name: "アルポート症候群",
    nameEn: "Alport Syndrome",
    nanbyoNumber: 218,
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "COL4A3・COL4A4・COL4A5遺伝子変異によるIV型コラーゲン異常で糸球体基底膜が障害される遺伝性腎疾患。血尿・進行性腎不全・感音性難聴・眼異常が特徴。",
    symptoms: [
      "持続性顕微鏡的血尿（乳児期から）",
      "進行性蛋白尿・腎不全",
      "感音性難聴（高音域：思春期以降に顕在化）",
      "眼異常（前円錐水晶体・黄斑周囲網膜病変）",
      "平滑筋腫（X連鎖型の一部）",
    ],
    causes:
      "X連鎖型（COL4A5変異：最多・男性重症）・常染色体劣性型（COL4A3/A4変異）・常染色体優性型（COL4A3/A4変異：比較的軽症）。IV型コラーゲンα3α4α5鎖の異常で基底膜の菲薄化・分層化が生じる。",
    diagnosis:
      "遺伝子検査（COL4A3/A4/A5変異）・腎生検（光学顕微鏡・免疫蛍光・電子顕微鏡：基底膜の菲薄化・分層化・密在化）。",
    treatment:
      "RAS阻害薬（ACE阻害薬・ARB）による早期開始で腎不全進行抑制。末期腎不全には透析・腎移植（移植後抗GBM腎炎に注意）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%A2%E3%83%AB%E3%83%9D%E3%83%BC%E3%83%88%E7%97%87%E5%80%99%E7%BE%A4",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4893",
  },
  {
    slug: "adpkd",
    name: "常染色体優性多発性嚢胞腎（ADPKD）",
    nameEn: "Autosomal Dominant Polycystic Kidney Disease",
    nanbyoNumber: 67,
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "PKD1/PKD2遺伝子変異による遺伝性腎疾患の中で最も頻度が高い疾患。両側腎に多発嚢胞が形成され進行性に腎機能が低下する。肝嚢胞・脳動脈瘤等の腎外病変も重要。",
    symptoms: [
      "腹部膨満・腰背部痛（腎腫大による）",
      "血尿・腎結石",
      "高血圧（早期から）",
      "末期腎不全（60歳頃までに約50%）",
      "脳動脈瘤（約8%：くも膜下出血リスク）",
    ],
    causes:
      "PKD1（ポリシスチン-1：約85%）またはPKD2（ポリシスチン-2：約15%）遺伝子変異。常染色体優性遺伝。嚢胞上皮細胞のmTORC1・cAMP経路過活性化が嚢胞増大に関与する。",
    diagnosis:
      "超音波・CT・MRI（両側腎・肝の多発嚢胞）・遺伝子検査。若年診断・腎外病変の確認のためMRA（脳動脈瘤スクリーニング）も重要。",
    treatment:
      "トルバプタン（V2受容体拮抗薬：嚢胞増大抑制・進行遅延）・降圧療法（ACE阻害薬/ARB）・腎移植（末期腎不全）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%A4%9A%E7%99%BA%E6%80%A7%E5%9A%A2%E8%83%9E%E8%85%8E",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/135",
  },
  {
    slug: "nephrotic-syndrome-primary",
    name: "一次性ネフローゼ症候群",
    nameEn: "Primary Nephrotic Syndrome",
    nanbyoNumber: 222,
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "大量蛋白尿・低アルブミン血症・浮腫・高脂血症を四徴とする糸球体疾患群。微小変化型（小児多い）・巣状分節性糸球体硬化症・膜性腎症（成人多い）・膜性増殖性糸球体腎炎等が含まれる。",
    symptoms: [
      "浮腫（全身性：下腿・眼瞼・腹水・胸水）",
      "大量蛋白尿（3.5g/日以上）",
      "低アルブミン血症（3.0g/dL以下）",
      "高脂血症・脂肪尿",
      "血栓塞栓症（腎静脈血栓等のリスク）",
    ],
    causes:
      "微小変化型：T細胞機能異常による糸球体透過性因子の産生。巣状分節性糸球体硬化症：遺伝性・続発性・原発性。膜性腎症：抗PLA2R抗体（成人原発性の80%）。",
    diagnosis:
      "尿蛋白定量・血清アルブミン・脂質・腎生検（光顕・電顕・蛍光抗体）による病理診断。抗PLA2R抗体測定（膜性腎症）。",
    treatment:
      "微小変化型：ステロイドが著効（高頻度再発例にシクロスポリン・ミゾリビン・リツキシマブ）。膜性腎症：リツキシマブ（第一選択へ移行中）・シクロスポリン。巣状分節性：ステロイド・免疫抑制薬。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%8D%E3%83%95%E3%83%AD%E3%83%BC%E3%82%BC%E7%97%87%E5%80%99%E7%BE%A4",
  },
  {
    slug: "thin-basement-membrane",
    name: "菲薄基底膜症候群",
    nameEn: "Thin Basement Membrane Nephropathy",
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "COL4A3/COL4A4遺伝子変異（ヘテロ接合性）による糸球体基底膜の菲薄化を特徴とする疾患。持続性顕微鏡的血尿が主症状で、多くは良性経過だが一部でアルポート症候群へ移行する。",
    symptoms: [
      "持続性顕微鏡的血尿（無症候性）",
      "軽度蛋白尿（一部の例）",
      "肉眼的血尿（感染後等）",
      "大部分では腎機能は正常または軽度低下にとどまる",
    ],
    causes:
      "COL4A3またはCOL4A4遺伝子のヘテロ接合性変異による糸球体基底膜の菲薄化（正常250〜350nm → 150〜225nm）。常染色体優性遺伝。",
    diagnosis:
      "腎生検（電子顕微鏡：基底膜の菲薄化）・遺伝子検査（COL4A3/A4変異）。アルポート症候群との鑑別が重要。",
    treatment:
      "多くは経過観察。蛋白尿・高血圧例にはRAS阻害薬。定期的な尿蛋白・腎機能・血圧のモニタリングが重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%8F%B2%E8%96%84%E5%9F%BA%E5%BA%95%E8%86%9C%E7%97%87%E5%80%99%E7%BE%A4",
  },

  // ─── 眼疾患（追加バッチ1） ────────────────────────────────
  {
    slug: "retinitis-pigmentosa",
    name: "網膜色素変性症",
    nameEn: "Retinitis Pigmentosa",
    nanbyoNumber: 90,
    category: "眼疾患",
    categorySlug: "ophthalmology",
    overview:
      "視細胞（杆体・錐体）の遺伝性変性により夜盲・視野狭窄・視力低下が進行する難病。多数の遺伝子変異（RP1・RHO・PRPF31・RPGR等）が原因となる遺伝的多様性の高い疾患群。",
    symptoms: [
      "夜盲（暗所での視力低下：初発症状）",
      "求心性視野狭窄（周辺視野から中心に向けて進行）",
      "進行性視力低下（中心視力は比較的後期まで保たれる）",
      "色覚異常",
      "羞明（まぶしさ）",
    ],
    causes:
      "RP1・RHO・PRPF31・RPGR・RPGR ORF15等、70以上の遺伝子変異が同定されている。常染色体優性・劣性・X連鎖性等、多様な遺伝形式をとる。",
    diagnosis:
      "眼底検査（骨小体様色素沈着・視神経乳頭蒼白・血管狭細）・視野検査（求心性狭窄）・網膜電図（ERG：a波・b波振幅低下〜消失）・遺伝子検査。",
    treatment:
      "根治療法なし。ビタミンA棕榈酸エステル補充（進行緩徐化の可能性）・遮光眼鏡・低視力支援（ルーペ・拡大読書器）。遺伝子治療研究（RPE65変異型には承認済み）・人工網膜研究が進行中。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E7%B6%B2%E8%86%9C%E8%89%B2%E7%B4%A0%E5%A4%89%E6%80%A7%E7%97%87",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/271",
  },
  {
    slug: "stargardt-disease",
    name: "スタルガルト病",
    nameEn: "Stargardt Disease",
    category: "眼疾患",
    categorySlug: "ophthalmology",
    overview:
      "ABCA4遺伝子変異による若年性黄斑変性。ビスレチノイド（A2E）蓄積によりRPEが変性し中心視力が進行性に低下する。常染色体劣性遺伝。",
    symptoms: [
      "中心視力の進行性低下（両眼性）",
      "色覚異常",
      "明所での視力低下（羞明）",
      "暗点・読書困難",
      "比較的早期（10〜20歳代）に発症することが多い",
    ],
    causes:
      "ABCA4（ATP-binding cassette transporter）遺伝子の両アレル変異によりA2Eが蓄積しRPEが変性する。常染色体劣性遺伝が多いが、ELOVL4変異による常染色体優性型もある。",
    diagnosis:
      "眼底自発蛍光（FAF：黄色フレーク・RPE萎縮領域の蛍光消失）・フルオレセイン蛍光眼底造影（dark choroid現象）・ERG・遺伝子検査。",
    treatment:
      "根治療法なし。遮光（紫外線曝露回避）・低視力支援。遺伝子治療・細胞治療（RPE細胞移植）・ABCA4機能回復薬の臨床試験が進行中。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%B9%E3%82%BF%E3%83%AB%E3%82%AC%E3%83%AB%E3%83%88%E7%97%85",
  },
  {
    slug: "leber-optic-neuropathy",
    name: "レーバー遺伝性視神経症（LHON）",
    nameEn: "Leber Hereditary Optic Neuropathy",
    category: "眼疾患",
    categorySlug: "ophthalmology",
    overview:
      "ミトコンドリアDNA変異（m.11778G>A・m.3460G>A・m.14484T>C等）による視神経障害。若年男性に多く、急性〜亜急性の中心視力喪失が両眼性に生じる。",
    symptoms: [
      "急性〜亜急性の中心視力低下（一眼から両眼へ、数週〜数ヶ月で両眼性）",
      "中心暗点・傍中心暗点",
      "色覚異常（赤緑色覚）",
      "視神経萎縮（急性期後）",
      "一部に心臓伝導障害・神経症状を伴う",
    ],
    causes:
      "ミトコンドリアDNAの点変異（m.11778G>A：ND4遺伝子が85%を占める）による複合体I機能障害とATP産生低下・活性酸素増加で視神経細胞が変性する。母系遺伝。男性が発症しやすい（浸透率の性差）。",
    diagnosis:
      "眼底検査・視野検査・色覚検査・光干渉断層計（OCT）・ミトコンドリアDNA変異解析（血液）。",
    treatment:
      "イデベノン（補酵素Q10類似体：早期例の視力維持に有効）。喫煙・アルコール回避。遺伝子治療（AAV2-ND4：lenadogene nolparvovec）が一部で承認。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%AC%E3%83%BC%E3%83%90%E3%83%BC%E9%81%BA%E4%BC%9D%E6%80%A7%E8%A6%96%E7%A5%9E%E7%B5%8C%E7%97%87",
  },
  {
    slug: "choroideremia",
    name: "脈絡膜欠如",
    nameEn: "Choroideremia",
    category: "眼疾患",
    categorySlug: "ophthalmology",
    overview:
      "CHM遺伝子（Rab escort protein 1：REP-1をコード）変異によるX連鎖劣性遺伝性網膜変性疾患。脈絡膜・RPE・視細胞が進行性に萎縮する。",
    symptoms: [
      "夜盲（小児期から）",
      "進行性求心性視野狭窄",
      "中心視力は成人期まで比較的保たれる",
      "女性保因者は軽度の眼底異常を示すことがある",
    ],
    causes:
      "CHM遺伝子（X染色体）変異によりREP-1タンパクが欠損し、Rabタンパクのゲラニルゲラニル化が障害されRPE・光受容体・脈絡膜毛細血管が変性する。X連鎖劣性遺伝（男性が重症）。",
    diagnosis:
      "眼底検査（脈絡膜・RPEの進行性萎縮・境界明瞭）・眼底自発蛍光・OCT・視野検査・遺伝子検査（CHM変異）。",
    treatment:
      "根治療法なし（現時点）。遺伝子治療（AAV2-REP1）の臨床試験が進行中。低視力支援・遮光。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%84%88%E7%B5%A1%E8%86%9C%E6%AC%A0%E5%A6%82",
  },

  // ─── 内分泌疾患（追加バッチ1） ────────────────────────────────
  {
    slug: "graves-disease",
    name: "バセドウ病",
    nameEn: "Graves' Disease",
    category: "内分泌疾患",
    categorySlug: "endocrine",
    overview:
      "TSH受容体に対する自己抗体（TRAb：甲状腺刺激抗体）によって甲状腺が持続的に刺激される自己免疫性甲状腺機能亢進症。女性に多く（男女比1:4〜5）、バセドウ眼症を合併することがある。",
    symptoms: [
      "動悸・頻脈・不整脈（心房細動）",
      "体重減少・多食",
      "発汗過多・暑がり",
      "甲状腺腫大（びまん性）",
      "眼球突出・バセドウ眼症（眼瞼後退・複視・視神経障害）",
    ],
    causes:
      "TSH受容体自己抗体（TRAb/TSAb）によるTSH受容体の持続的刺激。遺伝的素因（HLA-DRB1等）＋環境因子（ストレス・ヨウ素過剰・喫煙等）の相互作用。",
    diagnosis:
      "TSH低値・FT3/FT4高値・TRAb（TSAb）陽性・甲状腺超音波（血流増加）・シンチグラフィ（99mTc：均一集積亢進）。",
    treatment:
      "抗甲状腺薬（チアマゾール・プロピルチオウラシル）・放射性ヨウ素（131I）内用療法・外科（甲状腺亜全摘・全摘）。眼症は眼科連携。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%90%E3%82%BB%E3%83%89%E3%82%A6%E7%97%85",
  },
  {
    slug: "type1-diabetes",
    name: "1型糖尿病",
    nameEn: "Type 1 Diabetes Mellitus",
    category: "内分泌疾患",
    categorySlug: "endocrine",
    overview:
      "膵β細胞への自己免疫攻撃によりインスリン産生が絶対的に欠乏する疾患。小児〜若年者に多いが成人発症（劇症1型・緩徐進行型）もある。生涯インスリン療法が必要。",
    symptoms: [
      "口渇・多飲・多尿",
      "急激な体重減少",
      "倦怠感・易疲労感",
      "糖尿病性ケトアシドーシス（DKA：悪心・嘔吐・腹痛・意識障害）",
      "低血糖（インスリン治療中）",
    ],
    causes:
      "膵島関連自己抗体（抗GAD抗体・抗IA-2抗体・抗ZnT8抗体・インスリン自己抗体）を伴うβ細胞破壊。HLA-DR4/DR9との関連。劇症1型はウイルス感染が誘因となる場合がある。",
    diagnosis:
      "血糖値・HbA1c・血清Cペプチド（著明低値）・膵島関連自己抗体（GAD抗体等）・尿ケトン体。",
    treatment:
      "インスリン強化療法（基礎インスリン＋追加インスリン：MDI/CSII）・持続血糖モニタリング（CGM）・人工膵臓システム（AID）。膵島移植・iPS細胞由来β細胞移植の研究が進行中。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=1%E5%9E%8B%E7%B3%96%E5%B0%BF%E7%97%85",
  },
  {
    slug: "cushing-syndrome",
    name: "クッシング症候群",
    nameEn: "Cushing's Syndrome",
    category: "内分泌疾患",
    categorySlug: "endocrine",
    overview:
      "コルチゾール過剰産生による代謝・心血管・骨格系への広範な障害を引き起こす疾患群。下垂体ACTH産生腫瘍（クッシング病）が最多原因。",
    symptoms: [
      "中心性肥満・満月様顔貌（moon face）・野牛肩",
      "皮膚線条（紫紅色：腹部・大腿等）・皮膚菲薄化・易出血性",
      "糖尿病・高血圧・脂質異常症",
      "骨粗鬆症・骨折",
      "筋力低下（近位筋）・精神症状（うつ・認知機能障害）",
    ],
    causes:
      "ACTH依存性：下垂体ACTH産生腫瘍（クッシング病：60〜70%）・異所性ACTH産生腫瘍（小細胞肺癌等）。ACTH非依存性：副腎腺腫・副腎癌・副腎過形成。医原性（ステロイド長期投与）も重要。",
    diagnosis:
      "尿中遊離コルチゾール（24時間）・深夜唾液コルチゾール・1mg DST（デキサメタゾン抑制試験）でスクリーニング。原因鑑別にACTH測定・CRH負荷試験・高用量DST・下垂体MRI・下錐体静脈洞サンプリング（IPSS）。",
    treatment:
      "下垂体手術（経鼻内視鏡的腫瘍摘出）・副腎手術（副腎腺腫・癌）・放射線治療・副腎皮質ステロイド合成阻害薬（メチラポン・ミトタン・オシロドロスタット）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%82%AF%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E7%97%87%E5%80%99%E7%BE%A4",
  },
  {
    slug: "acromegaly",
    name: "先端巨大症",
    nameEn: "Acromegaly",
    category: "内分泌疾患",
    categorySlug: "endocrine",
    overview:
      "GH産生下垂体腺腫による成長ホルモン（GH）過剰分泌によって生じる疾患。骨格・軟部組織の肥大と糖尿病・高血圧・心血管疾患・睡眠時無呼吸等の全身合併症を引き起こす。",
    symptoms: [
      "末端肥大（手・足・鼻・唇・下顎が大きくなる）",
      "顔貌変化（眉弓突出・鼻・唇肥大・下顎前突）",
      "関節痛・関節変形",
      "糖尿病・高血圧・心肥大・心不全",
      "睡眠時無呼吸症候群・結腸ポリープ（大腸癌リスク増加）",
    ],
    causes:
      "GH産生下垂体腺腫（腺腫内のGSP・AIP・MEN1等の遺伝子変異を伴う例がある）による過剰GH→肝臓でのIGF-1過剰産生が全身作用をもたらす。",
    diagnosis:
      "血清IGF-1高値（年齢・性別基準値超）・GH随時値高値・OGTT-GH抑制試験（GH抑制不良）・下垂体MRI（腺腫確認）。",
    treatment:
      "経鼻内視鏡的下垂体腫瘍摘出術（第一選択）・ソマトスタチンアナログ（オクトレオチド・ランレオチド：GH/IGF-1抑制）・GH受容体拮抗薬（ペグビソマント：IGF-1正常化）・放射線治療（残存腫瘍）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E5%85%88%E7%AB%AF%E5%B7%A8%E5%A4%A7%E7%97%87",
  },
  {
    slug: "hashimotos-thyroiditis",
    name: "橋本病（慢性甲状腺炎）",
    nameEn: "Hashimoto's Thyroiditis",
    category: "内分泌疾患",
    categorySlug: "endocrine",
    overview:
      "甲状腺への自己免疫攻撃（抗TPO抗体・抗サイログロブリン抗体）による慢性炎症で、甲状腺機能低下症をきたす最も一般的な自己免疫性甲状腺疾患。女性に圧倒的に多い（男女比1:10〜20）。",
    symptoms: [
      "甲状腺機能低下症状（倦怠感・体重増加・浮腫・便秘・寒がり・記憶力低下）",
      "甲状腺腫大（びまん性・無痛性）",
      "一過性甲状腺中毒症（橋本甲状腺炎の破壊性甲状腺炎フェーズ）",
      "不妊・月経不順",
      "筋力低下・うつ症状",
    ],
    causes:
      "抗TPO抗体（甲状腺ペルオキシダーゼ抗体）・抗サイログロブリン抗体による甲状腺への自己免疫攻撃とリンパ球浸潤による甲状腺組織破壊。遺伝的素因＋環境因子。",
    diagnosis:
      "TSH高値（顕性甲状腺機能低下症）またはTSH高値・FT4正常（潜在性甲状腺機能低下症）・抗TPO抗体・抗サイログロブリン抗体陽性・甲状腺超音波（不均一低エコー）。",
    treatment:
      "甲状腺機能低下症が顕在化した場合は甲状腺ホルモン（レボチロキシン）補充療法。機能正常例は定期経過観察。妊娠前・妊娠中は厳格な甲状腺機能管理が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E6%A9%8B%E6%9C%AC%E7%97%85",
  },

  {
    slug: "systemic-mastocytosis",
    name: "全身性肥満細胞症",
    nameEn: "Systemic Mastocytosis",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "KIT遺伝子変異（D816V変異が最多）による肥満細胞の単クローン性増殖が全身臓器に生じる疾患。アナフィラキシー・骨痛・臓器浸潤が主な症状で、稀に高度悪性型に進行する。",
    symptoms: [
      "色素性蕁麻疹（皮膚の褐色斑：Darier徴候陽性）",
      "アナフィラキシー（蜂毒・薬剤・食物等の刺激で誘発）",
      "骨痛・骨粗鬆症・骨折（骨髄浸潤）",
      "肝脾腫・リンパ節腫脹（進行型）",
      "顔面紅潮・消化器症状（ヒスタミン過剰放出）",
    ],
    causes:
      "KIT（CD117）遺伝子D816V体細胞変異（80〜90%）による肥満細胞の異常増殖・生存延長。",
    diagnosis:
      "骨髄生検（肥満細胞浸潤の確認：WHO 2022大基準・小基準）・血清トリプターゼ高値（20ng/mL以上）・KIT D816V変異検出。",
    treatment:
      "ミドスタウリン・アバプリチニブ（KIT D816V阻害薬：全身性肥満細胞症に承認）。アナフィラキシー予防（エピペン携帯必須）・抗ヒスタミン薬・プロトンポンプ阻害薬。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E8%82%A5%E6%BA%80%E7%B4%B0%E8%83%9E%E7%97%87",
  },

  // ─── 心・血管疾患（追加分） ────────────────────────────────
  {
    slug: "cardiac-sarcoidosis",
    name: "心サルコイドーシス",
    nameEn: "Cardiac Sarcoidosis",
    nanbyoNumber: 58,
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "サルコイドーシスの心臓病変で、非乾酪性肉芽腫が心筋に形成される。伝導障害・心室頻拍・心不全・突然死を来す。全サルコイドーシス患者の約5〜30%に心病変が生じるとされ、日本では欧米より高率。",
    symptoms: [
      "完全房室ブロック・束枝ブロック",
      "心室頻拍・心室細動",
      "心不全（息切れ・浮腫）",
      "失神・突然死",
      "心筋壁運動異常",
    ],
    causes:
      "サルコイドーシスの全身性肉芽腫形成の一部として心臓に非乾酪性肉芽腫が浸潤する。原因は不明だが、免疫異常（Th1優位）と環境因子・遺伝的素因の関与が示唆される。",
    diagnosis:
      "心臓MRI（遅延造影：ガドリニウム）・FDG-PETが主要検査。心電図・ホルター心電図・心エコー・心臓カテーテル（生検）を組み合わせる。日本心臓病学会・日本サルコイドーシス/肉芽腫性疾患学会の診断基準を用いる。",
    treatment:
      "ステロイド（プレドニゾロン）が基本。伝導障害には恒久ペースメーカー植込み、致死性不整脈には植込み型除細動器（ICD）が必要。心不全管理（β遮断薬・ACE阻害薬・利尿薬）。",
    prognosis:
      "心室頻拍・重度ブロック・心不全が予後不良因子。適切な治療介入で突然死リスクを軽減できる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Cardiac+Sarcoidosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/296",
  },
  {
    slug: "cardiac-amyloidosis",
    name: "心アミロイドーシス",
    nameEn: "Cardiac Amyloidosis",
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "アミロイド線維が心筋に沈着し、拘束型心筋症・心不全・不整脈を来す疾患。主にAL型（免疫グロブリン軽鎖）とTTR型（トランスサイレチン）がある。TTR型はトランスサイレチン安定化薬の登場で予後が改善している。",
    symptoms: [
      "心不全（息切れ・浮腫・疲労感）",
      "拘束型心筋症による拡張障害",
      "不整脈（心房細動・房室ブロック）",
      "起立性低血圧",
      "手根管症候群（TTR型の先行症状）",
    ],
    causes:
      "AL型：形質細胞由来の免疫グロブリン軽鎖が線維化し心筋沈着。TTR型：トランスサイレチン（野生型または遺伝性変異型）が誤って折り畳まれアミロイドを形成。",
    diagnosis:
      "心エコー（心筋輝度増加・スペックルトラッキング法：基底部保存・心尖部低下パターン）・心臓MRI・テクネチウムシンチ（TTR型）・血液検査（血清FLC・BNP・トロポニン）・心筋生検。",
    treatment:
      "TTR型：タファミジス（トランスサイレチン安定化薬）・siRNA製剤（パチシランなど）。AL型：骨髄腫治療（化学療法・自家造血幹細胞移植）。心不全管理（利尿薬：ループ利尿薬）。",
    prognosis:
      "AL型は未治療では予後不良（中央生存期間1年未満）。TTR型はタファミジスで死亡率・入院率が有意に改善。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Cardiac+Amyloidosis",
  },
  {
    slug: "takayasu-arteritis",
    name: "大動脈炎症候群（高安動脈炎）",
    nameEn: "Takayasu Arteritis",
    nanbyoNumber: 40,
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "大動脈とその主要分枝に肉芽腫性炎症が生じる大型血管炎。若い女性に多く、狭窄・閉塞・動脈瘤を来す。脈なし病とも呼ばれ、上肢の脈拍が触れないことがある。",
    symptoms: [
      "上肢の脈拍消失・左右差",
      "上肢血圧の左右差（10mmHg以上）",
      "頭部虚血症状（頭痛・めまい・失神）",
      "高血圧（腎動脈病変）",
      "炎症症状（発熱・倦怠感・筋痛）",
    ],
    causes:
      "自己免疫機序による大型血管壁の炎症。HLA-B52との関連が日本人で強い。T細胞・マクロファージによる肉芽腫形成が血管壁を障害する。",
    diagnosis:
      "ACR/EULAR分類基準（2022年）。造影CT・MRA・PET-CTで血管病変を評価。炎症マーカー（CRP・ESR）・血管造影（確定診断）。",
    treatment:
      "ステロイド（初期治療の基本）。再発例・難治例にメトトレキサート・アザチオプリン・抗TNFα薬（インフリキシマブ）・抗IL-6受容体抗体（トシリズマブ）。血管病変にはインターベンション（PTA・ステント・バイパス術）。",
    prognosis:
      "再発率が高く（約40〜60%）長期管理が必要。視力障害・脳卒中・心不全などの臓器障害が予後に影響。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Takayasu+Arteritis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/217",
  },
  {
    slug: "congenital-heart-disease-adult",
    name: "成人先天性心疾患",
    nameEn: "Adult Congenital Heart Disease",
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "胎児期の心臓発達異常に起因する心臓構造異常の総称。医療の進歩で小児期を生き延びた患者が成人に達し、成人先天性心疾患（ACHD）として管理が必要となる。心房中隔欠損・ファロー四徴症・大血管転位症などが含まれる。",
    symptoms: [
      "動悸・不整脈（成人期に増加）",
      "心不全症状（息切れ・浮腫）",
      "チアノーゼ（複雑心奇形・Eisenmenger症候群）",
      "血栓塞栓症（心房細動合併）",
      "感染性心内膜炎",
    ],
    causes:
      "遺伝的素因（22q11欠失・ダウン症候群・ターナー症候群等）、胎内環境（母体糖尿病・風疹・薬剤）などが関与するが、多くは原因不明の多因子性。",
    diagnosis:
      "心エコー（経胸壁・経食道）・心臓MRI・造影CT・心臓カテーテル検査。成人期の解剖学的・生理学的変化に精通した専門施設での評価が必要。",
    treatment:
      "疾患・重症度に応じた外科的修復術・カテーテルインターベンション（ASD閉鎖術等）。合併症管理（抗凝固療法・抗不整脈薬・心不全治療）。ACHD専門外来での長期フォロー。",
    prognosis:
      "適切な管理で多くが長期生存可能。修復後も残遺症・続発症（不整脈・心不全・感染性心内膜炎）のリスクが継続する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Adult+Congenital+Heart+Disease",
  },
  {
    slug: "hereditary-hemorrhagic-telangiectasia",
    name: "遺伝性出血性毛細血管拡張症（オスラー病）",
    nameEn: "Hereditary Hemorrhagic Telangiectasia",
    nanbyoNumber: 227,
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "ENG・ACVRL1等の遺伝子変異による常染色体優性遺伝疾患。全身の毛細血管・小静脈に異常血管拡張（テランジェクタジア）と動静脈奇形（AVM）が生じる。繰り返す鼻出血が特徴的。",
    symptoms: [
      "反復性鼻出血（最も一般的な症状）",
      "皮膚・粘膜の毛細血管拡張",
      "消化管出血（貧血）",
      "肺動静脈奇形（低酸素血症・脳塞栓）",
      "脳・肝臓の動静脈奇形",
    ],
    causes:
      "ENG（エンドグリン）・ACVRL1（ALK1）・SMAD4等の遺伝子変異によるBMP/TGF-βシグナル異常。血管発達障害により異常血管が形成される。",
    diagnosis:
      "Curaçao基準（鼻出血・毛細血管拡張・内臓AVM・家族歴）。造影CT・MRIで肺・脳・肝臓のAVM検索。遺伝子検査で原因遺伝子を同定。",
    treatment:
      "鼻出血：鼻腔レーザー焼灼・ベバシズマブ（抗VEGF薬）点鼻・全身投与。肺AVM：コイル塞栓術。脳AVM：外科切除・定位放射線。貧血には鉄補充・輸血。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hereditary+Hemorrhagic+Telangiectasia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4803",
  },

  // ─── 神経・筋疾患（追加分） ────────────────────────────────
  {
    slug: "prion-disease",
    name: "プリオン病（クロイツフェルト・ヤコブ病を含む）",
    nameEn: "Prion Disease",
    nanbyoNumber: 20,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "異常プリオン蛋白（PrPSc）が脳に蓄積し、急速進行性認知症・神経症状を来す致死的疾患群。孤発性・家族性・獲得性（医原性・変異型）に分類される。クロイツフェルト・ヤコブ病（CJD）が代表的。",
    symptoms: [
      "急速進行性認知症",
      "ミオクローヌス（筋肉の不随意収縮）",
      "小脳失調・視覚異常",
      "錐体路・錐体外路症状",
      "無動性無言状態（末期）",
    ],
    causes:
      "異常プリオン蛋白（PrPSc）が正常PrPCを鋳型として連鎖的に変換・蓄積し神経細胞死を引き起こす。孤発性（85%）・PRNP遺伝子変異による家族性・汚染組織による獲得性がある。",
    diagnosis:
      "脳MRI（DWI：大脳皮質・基底核の拡散制限）・髄液RT-QuIC法（高感度・特異度）・脳波（周期性同期性放電）・血液・髄液14-3-3蛋白。確定診断は脳生検または剖検。",
    treatment:
      "根本的治療法なし。対症療法（抗痙攣薬・疼痛管理）と緩和ケアが中心。四次元的なサーベイランス体制が整備されている。",
    prognosis:
      "孤発性CJDは発症から数ヶ月〜1年以内に死亡することが多い。家族性は経過が様々。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Prion+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/298",
  },
  {
    slug: "sspe",
    name: "亜急性硬化性全脳炎（SSPE）",
    nameEn: "Subacute Sclerosing Panencephalitis",
    nanbyoNumber: 24,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "麻疹ウイルスの変異株が脳内に持続感染し、数年後に発症する進行性神経変性疾患。小児・青年期に多く、認知機能低下・ミオクローヌス・植物状態と進行し致死的。麻疹ワクチンで予防可能。",
    symptoms: [
      "人格変化・認知機能低下（初期）",
      "周期性大振幅ミオクローヌス",
      "小脳失調・視覚障害",
      "自律神経症状",
      "植物状態・死亡（末期）",
    ],
    causes:
      "幼少期（2歳以前）の麻疹感染後、変異した欠損型麻疹ウイルスが脳内に潜伏し、数年〜十数年後に免疫回避して持続感染・脳炎を引き起こす。",
    diagnosis:
      "臨床症状・脳波（Radermecker複合波）・髄液・血清の麻疹抗体高値（IgG）・MRI（白質病変）。髄液中の抗麻疹IgG抗体の高値が特徴的。",
    treatment:
      "確立した根本治療なし。イノシンプラノベクス（免疫賦活薬）・インターフェロンα脳室内投与が進行抑制に部分的効果。",
    prognosis:
      "多くは発症後1〜3年で死亡。まれに自然寛解例あり。麻疹ワクチン2回接種による予防が重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Subacute+Sclerosing+Panencephalitis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/307",
  },
  {
    slug: "spinal-muscular-atrophy-adult",
    name: "球脊髄性筋萎縮症（SBMA/ケネディ病）",
    nameEn: "Spinal and Bulbar Muscular Atrophy",
    nanbyoNumber: 3,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "アンドロゲン受容体遺伝子のCAGリピート伸長による成人発症のX連鎖性神経変性疾患。中年男性に顔面・舌・四肢の筋萎縮・筋力低下が生じる。女性保因者は軽症または無症状。",
    symptoms: [
      "四肢近位筋の筋力低下・筋萎縮",
      "球麻痺（嚥下困難・構音障害・舌萎縮）",
      "線維束性収縮（筋肉のピクつき）",
      "女性化乳房・精巣萎縮（アンドロゲン不応性）",
      "感覚障害（感覚神経障害を伴う）",
    ],
    causes:
      "アンドロゲン受容体（AR）遺伝子エクソン1のCAGリピート数が38以上に伸長することで、ポリグルタミン鎖を持つ異常ARが神経細胞に蓄積し毒性を発揮する。",
    diagnosis:
      "遺伝子検査（AR遺伝子CAGリピート数測定）で確定診断。針筋電図（慢性神経原性変化）・神経伝導検査（感覚神経障害）・血清CK上昇・血清テストステロン値。",
    treatment:
      "根本治療なし。テストステロン低下療法（酢酸リュープロレリン）が一部の患者で症状進行抑制の可能性（国内臨床試験実施）。嚥下リハビリ・呼吸管理・栄養管理。",
    prognosis:
      "ALS等に比べ進行は緩徐。多くは60〜70代まで生存するが、嚥下障害・肺炎が予後に影響。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Spinal+Bulbar+Muscular+Atrophy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5185",
  },

  // ─── 代謝・遺伝疾患（追加分） ────────────────────────────────
  {
    slug: "galactosemia",
    name: "ガラクトース血症",
    nameEn: "Galactosemia",
    nanbyoNumber: 248,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "ガラクトース代謝酵素の先天的欠損により、ガラクトースおよびその代謝物が体内に蓄積する常染色体劣性遺伝疾患。新生児マススクリーニングで発見される。早期発見・乳糖除去食で重症合併症を予防できる。",
    symptoms: [
      "新生児期の哺乳不良・嘔吐・黄疸",
      "肝腫大・肝不全（重症型）",
      "大腸菌敗血症（新生児期）",
      "白内障（ガラクチトール蓄積）",
      "知的障害・言語発達遅滞（長期合併症）",
    ],
    causes:
      "GALT（ガラクトース-1-リン酸ウリジルトランスフェラーゼ）欠損が最多（古典型）。他にGALK（ガラクトキナーゼ）・GALE（エピメラーゼ）欠損型もある。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（ガラクトース・酵素活性）。血液・尿のガラクトース-1-リン酸測定・酵素活性測定・遺伝子検査で確定。",
    treatment:
      "乳糖（ガラクトース）制限食が基本。母乳・乳糖含有ミルクを中止しガラクトースフリーミルクへ切り替え。カルシウム・ビタミンD補充。",
    prognosis:
      "早期治療で急性期合併症は予防できる。長期的に認知・言語・卵巣機能（女性）への影響が残る場合がある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Galactosemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/246",
  },
  {
    slug: "maple-syrup-urine-disease",
    name: "メープルシロップ尿症",
    nameEn: "Maple Syrup Urine Disease",
    nanbyoNumber: 243,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "分岐鎖アミノ酸（ロイシン・イソロイシン・バリン）の代謝酵素（BCKD複合体）欠損による先天代謝異常症。尿・汗にメープルシロップ様の甘い臭いが生じることが名称の由来。新生児期に急性脳症を来す。",
    symptoms: [
      "新生児期の哺乳不良・嘔吐・昏睡",
      "特有の甘い臭い（尿・汗・耳垢）",
      "筋緊張低下・痙攣",
      "脳浮腫・脳症（急性期）",
      "知的障害（管理不良例）",
    ],
    causes:
      "BCKDHA・BCKDHB・DBT・DLD遺伝子のいずれかの変異による分岐鎖ケト酸デヒドロゲナーゼ（BCKD）複合体活性低下。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス法：分岐鎖アミノ酸高値）。血漿アミノ酸分析・尿有機酸分析・酵素活性・遺伝子検査。",
    treatment:
      "分岐鎖アミノ酸制限食（特殊ミルク使用）。急性代謝不全時は高カロリー輸液・腹膜透析・血液透析。チアミン（ビタミンB1）反応型には大量チアミン投与。",
    prognosis:
      "早期診断・厳格な食事療法で知的予後は改善する。発熱・感染時の代謝危機（metabolic crisis）に注意が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Maple+Syrup+Urine+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4637",
  },
  {
    slug: "homocystinuria",
    name: "ホモシスチン尿症",
    nameEn: "Homocystinuria",
    nanbyoNumber: 246,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "シスタチオニンβ合成酵素（CBS）等の欠損によりホモシステインが蓄積する先天代謝異常症。マルファン様体型・水晶体脱臼・骨粗鬆症・血栓症・知的障害が特徴的。",
    symptoms: [
      "水晶体脱臼（視力障害）",
      "マルファン様体型（高身長・蜘蛛状指）",
      "骨粗鬆症・脊柱側弯",
      "静脈・動脈血栓症",
      "知的障害・精神症状",
    ],
    causes:
      "CBS遺伝子変異（最多）・MTHFR欠損・コバラミン代謝異常等により、メチオニン代謝経路でホモシステインが蓄積。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス法：メチオニン高値）。血漿ホモシステイン・アミノ酸分析・尿アミノ酸分析・酵素活性・遺伝子検査。",
    treatment:
      "ビタミンB6（ピリドキシン）反応型：大量B6投与。非反応型：メチオニン制限食＋シスチン補充・ベタイン投与・葉酸・B12補充。血栓予防（抗血小板薬・抗凝固薬）。",
    prognosis:
      "早期治療で合併症（血栓・知的障害）を予防できる。未治療では30歳までに血栓イベントが高頻度。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Homocystinuria",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/249",
  },
  {
    slug: "glutaric-acidemia",
    name: "グルタル酸血症1型",
    nameEn: "Glutaric Acidemia Type 1",
    nanbyoNumber: 261,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "グルタリルCoAデヒドロゲナーゼ欠損による有機酸代謝異常症。発熱・感染などの急性期に線条体（尾状核・被殻）が選択的に障害され、ジストニアなどの不可逆的な運動障害を来す。",
    symptoms: [
      "大頭症（出生時から）",
      "急性脳症エピソード（発熱時）後のジストニア",
      "舞踏運動・アテトーゼ",
      "筋緊張異常",
      "発達遅滞",
    ],
    causes:
      "GCDH遺伝子変異によるグルタリルCoAデヒドロゲナーゼ（GCDH）欠損。グルタル酸・3-ヒドロキシグルタル酸が蓄積し神経毒性を発揮。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス法：グルタリルカルニチン高値）。尿有機酸分析（グルタル酸高値）・酵素活性・遺伝子検査・頭部MRI（側頭葉の開口・線条体病変）。",
    treatment:
      "リジン制限食（グルタル酸前駆体制限）・L-カルニチン補充。急性期管理が最重要（積極的エネルギー補充・リジン制限強化・カルニチン静注）で線条体障害を予防。",
    prognosis:
      "発症前に適切な急性期管理を徹底することで線条体障害を予防できる。一度ジストニアが生じると不可逆的。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Glutaric+Acidemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4627",
  },
  {
    slug: "propionic-acidemia",
    name: "プロピオン酸血症",
    nameEn: "Propionic Acidemia",
    nanbyoNumber: 257,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "プロピオニルCoAカルボキシラーゼ欠損による有機酸血症。新生児期の代謝性アシドーシス・高アンモニア血症で発症し、心筋症・基底核障害を来すことがある。",
    symptoms: [
      "新生児期の嘔吐・哺乳不良・意識障害",
      "代謝性アシドーシス・ケトアシドーシス",
      "高アンモニア血症",
      "心筋症・QT延長",
      "基底核変性（ジストニア・舞踏運動）",
    ],
    causes:
      "PCCA・PCCB遺伝子変異によるプロピオニルCoAカルボキシラーゼ欠損。プロピオン酸・メチルクエン酸・3-ヒドロキシプロピオン酸が蓄積し多臓器障害を引き起こす。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス法：プロピオニルカルニチン高値）。尿有機酸分析・血液アミノ酸分析・酵素活性・遺伝子検査。",
    treatment:
      "タンパク質制限食（イソロイシン・バリン・メチオニン・スレオニン制限）・L-カルニチン補充・ビオチン補充。急性期は高カロリー輸液・透析。肝移植が根本治療として有効。",
    prognosis:
      "早期介入で急性死亡を回避できる。長期的に心筋症・神経合併症・成長障害が問題となる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Propionic+Acidemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4635",
  },
  {
    slug: "isovaleric-acidemia",
    name: "イソ吉草酸血症",
    nameEn: "Isovaleric Acidemia",
    nanbyoNumber: 259,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "イソバレリルCoAデヒドロゲナーゼ欠損によるロイシン代謝障害。特有の「汗臭・チーズ臭」が特徴的で、新生児マススクリーニングで発見される。",
    symptoms: [
      "特有の汗臭・チーズ臭",
      "新生児期の嘔吐・哺乳不良・昏睡",
      "代謝性アシドーシス",
      "好中球減少・血小板減少",
      "知的障害（管理不良例）",
    ],
    causes:
      "IVD遺伝子変異によるイソバレリルCoAデヒドロゲナーゼ（IVD）欠損。ロイシン代謝障害によりイソ吉草酸・イソバレリルグリシンが蓄積。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス法：イソバレリルカルニチン高値）。尿有機酸分析（イソバレリルグリシン高値）・酵素活性・遺伝子検査。",
    treatment:
      "ロイシン制限食・L-カルニチン補充・グリシン補充（イソ吉草酸の排泄促進）。急性期は高カロリー輸液でタンパク異化を抑制。",
    prognosis:
      "新生児マススクリーニングで早期発見・治療することで予後は良好。急性型は緊急治療が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Isovaleric+Acidemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4629",
  },

  // ─── 免疫・アレルギー疾患（追加分） ────────────────────────────────
  {
    slug: "chronic-active-ebv",
    name: "慢性活動性EBウイルス感染症",
    nameEn: "Chronic Active Epstein-Barr Virus Infection",
    nanbyoNumber: 22,
    category: "免疫・アレルギー疾患",
    categorySlug: "immune",
    overview:
      "EBウイルス（EBV）がTリンパ球またはNKリンパ球に感染し慢性活動性感染を来す疾患。発熱・肝脾腫・リンパ節腫脹が持続し、悪性リンパ腫・血球貪食症候群へ移行する可能性がある。",
    symptoms: [
      "長期持続する発熱・倦怠感",
      "肝脾腫・リンパ節腫脹",
      "肝障害（肝炎）",
      "血球減少（汎血球減少）",
      "蚊アレルギー（種痘様水疱症様リンパ増殖症では）",
    ],
    causes:
      "EBウイルスがT細胞またはNK細胞に感染し、免疫系による排除を逃れて持続増殖する。宿主免疫異常（先天性・後天性）が背景にあると考えられるが、詳細機序は不明。",
    diagnosis:
      "EBV-DNA定量（末梢血・感染細胞の同定）・血清EBV抗体価（VCA-IgA・EA-IgA等の異常パターン）・組織生検（T/NK細胞浸潤・EBER陽性）。感染T/NK細胞の同定が診断の鍵。",
    treatment:
      "同種造血幹細胞移植（唯一の根治療法）が施行可能な症例に推奨。化学療法（L-アスパラギナーゼ含むレジメン）でコントロールしながら移植を目指す。",
    prognosis:
      "未治療または移植不能例では数年以内に血球貪食症候群・悪性リンパ腫・臓器不全で死亡することが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Chronic+Active+EBV+Infection",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/472",
  },
  {
    slug: "iga-vasculitis",
    name: "IgA血管炎（ヘノッホ・シェーンライン紫斑病）",
    nameEn: "IgA Vasculitis",
    nanbyoNumber: 223,
    category: "免疫・アレルギー疾患",
    categorySlug: "immune",
    overview:
      "IgAを主体とする免疫複合体が小型血管壁に沈着し炎症を来す全身性血管炎。皮膚紫斑・腹痛・関節痛・腎炎（IgA腎症様）の4主徴が特徴的。小児に多いが成人例は重症化しやすい。",
    symptoms: [
      "触知可能な紫斑（下肢・臀部）",
      "関節痛・関節炎（膝・足首）",
      "腹痛・消化管出血（腸管紫斑）",
      "腎炎（血尿・蛋白尿）",
      "陰嚢腫脹（小児男性）",
    ],
    causes:
      "感染（溶連菌等）・薬剤・食物等が引き金となり、IgA1免疫複合体が血管壁・腎メサンギウムに沈着して炎症を誘発。発症機序にIgA1の糖鎖異常が関与する。",
    diagnosis:
      "EULAR/PRINTO/PRES分類基準。皮膚・腎生検（IgA沈着の確認）。血液検査（血清IgA高値50〜70%）・尿検査（腎炎評価）。",
    treatment:
      "多くは自然軽快。重症腹痛・腎炎にはステロイド（プレドニゾロン）。腎炎の重症例にはステロイド大量療法・免疫抑制薬（ミコフェノール酸モフェチル）・扁桃摘出術。",
    prognosis:
      "小児の多くは数週間で自然軽快。成人・腎炎例は慢性腎疾患への進行に注意が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=IgA+Vasculitis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5188",
  },

  // ─── 血液疾患（追加分） ────────────────────────────────
  {
    slug: "pure-red-cell-aplasia",
    name: "赤芽球癆",
    nameEn: "Pure Red Cell Aplasia",
    nanbyoNumber: 63,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "骨髄における赤血球系前駆細胞（赤芽球）が選択的に障害され、重篤な貧血を来す疾患。後天性は自己免疫機序（抗EPO抗体・T細胞性）や胸腺腫・リンパ腫・ウイルス感染（B19パルボウイルス）と関連する。",
    symptoms: [
      "重篤な貧血（急速に進行することも）",
      "息切れ・動悸・疲労感",
      "顔面蒼白",
      "胸腺腫合併例では縦隔腫瘍症状",
      "白血球・血小板数は正常",
    ],
    causes:
      "後天性：自己抗体（抗EPO受容体抗体）・細胞傷害性T細胞による赤芽球破壊。胸腺腫・リンパ腫・SLE・薬剤（エリスロポエチン製剤抗体など）・B19パルボウイルス感染が誘因。先天性（Diamond-Blackfan貧血）は別疾患。",
    diagnosis:
      "骨髄検査（赤芽球の著明減少・欠如：網赤血球ほぼゼロ）。胸腺腫検索（胸部CT）。ウイルス検索（B19 DNA）・自己抗体検索・リンパ腫評価。",
    treatment:
      "胸腺腫合併例は胸腺摘出術。免疫抑制療法（シクロスポリン・ステロイド）が主体。B19ウイルス性には免疫グロブリン静注（IVIG）。リツキシマブ・エルスロポエチン製剤。",
    prognosis:
      "免疫抑制療法で50〜60%が奏効。再発例・難治例では長期の輸血依存となりうる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Pure+Red+Cell+Aplasia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/327",
  },
  {
    slug: "sideroblastic-anemia",
    name: "鉄芽球性貧血",
    nameEn: "Sideroblastic Anemia",
    nanbyoNumber: 64,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "骨髄の赤芽球ミトコンドリアに鉄が異常沈着（環状鉄芽球）し、効率的な赤血球産生が障害される疾患群。先天性（X連鎖・常染色体遺伝）と後天性（骨髄異形成症候群関連・薬剤性・アルコール性等）がある。",
    symptoms: [
      "貧血症状（息切れ・動悸・倦怠感）",
      "鉄過剰症状（肝障害・心臓合併症）",
      "脾腫（髄外造血）",
      "小球性〜正球性貧血",
      "血清フェリチン高値・トランスフェリン飽和度上昇",
    ],
    causes:
      "先天性：ALAS2（X連鎖型）・SLC25A38・GLRX5等の遺伝子変異。後天性：MDS（SF3B1変異）・アルコール・薬剤（イソニアジド・クロラムフェニコール）・銅欠乏。ヘム合成経路障害が共通機序。",
    diagnosis:
      "骨髄塗抹・鉄染色（環状鉄芽球：鉄芽球の15%以上が環状型）。血液検査（血清鉄・フェリチン・TIBC）・遺伝子検査（先天性疑い時）。",
    treatment:
      "先天性X連鎖型：ピリドキシン（ビタミンB6）反応型に大量B6投与。後天性：原因除去（薬剤中止・禁酒）。鉄過剰には瀉血または鉄キレート療法（デフェラシロクス）。MDS関連には輸血・造血幹細胞移植。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Sideroblastic+Anemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4818",
  },

  // ─── 皮膚疾患（追加分） ────────────────────────────────
  {
    slug: "xeroderma-pigmentosum",
    name: "色素性乾皮症",
    nameEn: "Xeroderma Pigmentosum",
    nanbyoNumber: 159,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "核酸除去修復（NER）または複製後修復遺伝子の欠損により、紫外線によるDNA損傷が修復されず、皮膚がんと神経変性が生じる常染色体劣性遺伝疾患。日光過敏・皮膚悪性腫瘍・神経症状が三主徴。",
    symptoms: [
      "日光過敏（軽微な日光暴露で重度の日焼け・水疱）",
      "色素沈着・色素脱失の混在",
      "皮膚悪性腫瘍（基底細胞がん・扁平上皮がん・悪性黒色腫）の早期・多発",
      "眼症状（羞明・角膜炎・眼瞼がん）",
      "神経症状（XP-A/D/G型：進行性神経変性・難聴・小頭症）",
    ],
    causes:
      "XPA〜XPG・XPVの8つの相補性群に分類される遺伝子（NER関連）のいずれかの変異。日本ではXP-A型（XPA遺伝子変異）が多数を占める。常染色体劣性遺伝。",
    diagnosis:
      "臨床症状・家族歴・DNA修復能試験（紫外線照射後の不定期DNA合成：UDS）・遺伝子検査（相補性群同定）。",
    treatment:
      "根本治療なし。紫外線の完全遮断（外出時の完全防護・UV遮断フィルム）が最重要。皮膚腫瘍の早期外科切除・経口レチノイン酸（予防的）。神経症状には対症療法。",
    prognosis:
      "厳格な紫外線防護で皮膚腫瘍発生を大幅に抑制できる。神経型（XP-A）では神経変性が進行し予後不良。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Xeroderma+Pigmentosum",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/292",
  },
  {
    slug: "linear-iga-bullous-dermatosis",
    name: "線状IgA水疱性皮膚症",
    nameEn: "Linear IgA Bullous Dermatosis",
    nanbyoNumber: 163,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "皮膚基底膜部へのIgA自己抗体による表皮下水疱を形成する自己免疫性水疱症。直線状または弧状に配列する水疱・緊満性疱疹が特徴的。成人型と小児型（小児慢性類天疱瘡）がある。",
    symptoms: [
      "躯幹・四肢の緊満性水疱・びらん",
      "弧状・環状に配列する水疱（花環状配列）",
      "口腔粘膜病変（口内炎・びらん）",
      "掻痒感",
      "眼症状（結膜炎・瘢痕性眼瞼炎：一部）",
    ],
    causes:
      "基底膜ゾーン構成タンパク（XVII型コラーゲン・ラミニン332等）に対するIgA自己抗体が形成される。薬剤（バンコマイシン等）誘発性もある。",
    diagnosis:
      "皮膚生検（H&E：表皮下水疱）・直接蛍光抗体法（DIF：基底膜帯へのIgA線状沈着）・間接蛍光抗体法・ELISA（抗基底膜帯IgA抗体）。",
    treatment:
      "ダプソン（DDS）が第一選択。ステロイド全身投与・コルヒチン・スルファピリジン。重症例にはIVIG・免疫抑制薬。",
    prognosis:
      "多くは治療でコントロール可能。小児型は思春期に自然寛解することがある。成人型は慢性経過。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Linear+IgA+Bullous+Dermatosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/285",
  },
  {
    slug: "refractory-skin-ulcer",
    name: "難治性皮膚潰瘍",
    nameEn: "Refractory Skin Ulcer",
    nanbyoNumber: 268,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "通常の治療に抵抗し8週間以上治癒しない皮膚潰瘍の総称。壊疽性膿皮症・リポデルマトスクレローシス・カルシフィラキシス・血管炎性潰瘍等が含まれる。基礎疾患の管理と創傷管理が重要。",
    symptoms: [
      "慢性・難治性の皮膚潰瘍（下腿・足部に多い）",
      "潰瘍辺縁の疼痛・発赤",
      "滲出液・壊死組織",
      "治癒不全・再発",
      "基礎疾患症状（糖尿病・膠原病・血管炎等）",
    ],
    causes:
      "血管障害（動脈硬化・静脈不全・血管炎）・免疫異常（壊疽性膿皮症）・代謝障害（糖尿病性神経障害・カルシフィラキシス）・感染・悪性腫瘍など多因子性。",
    diagnosis:
      "創傷の詳細評価（大きさ・深さ・辺縁・滲出液）・生検（壊疽性膿皮症の除外診断）・血管評価（ABI・超音波）・基礎疾患検索（血液検査・免疫検査）。",
    treatment:
      "創傷管理（適切な被覆材・デブリードマン）・基礎疾患治療・血行再建術（血管障害例）・高気圧酸素療法・陰圧創傷療法（NPWT）。壊疽性膿皮症にはステロイド・シクロスポリン・生物学的製剤。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Refractory+Skin+Ulcer",
  },

  // ─── 骨・筋肉疾患（追加分） ────────────────────────────────
  {
    slug: "fibrous-dysplasia",
    name: "線維性骨異形成症",
    nameEn: "Fibrous Dysplasia",
    nanbyoNumber: 192,
    category: "骨・筋肉疾患",
    categorySlug: "bone",
    overview:
      "骨の正常組織が線維組織と未熟な骨組織に置き換わる非腫瘍性骨疾患。GNAS遺伝子の体細胞変異が原因で、単骨性・多骨性（マクーン・オルブライト症候群を含む）に分類される。",
    symptoms: [
      "骨痛・骨変形（脚長差・頭蓋顔面変形）",
      "病的骨折（荷重部位：大腿骨の「羊飼いの杖」変形）",
      "内分泌異常（多骨性：GH過剰・甲状腺機能亢進症等）",
      "皮膚カフェオレ斑（マクーン・オルブライト症候群）",
      "思春期早発症（多骨性女性）",
    ],
    causes:
      "GNAS遺伝子（Gsα）の機能獲得型体細胞変異（R201H/C等）により、骨芽細胞分化が障害されて線維組織が蓄積する。出生後の体細胞変異でモザイク状に生じる。",
    diagnosis:
      "X線（すりガラス状陰影・骨変形）・MRI・骨シンチグラフィ（全身病変評価）・骨生検（線維組織と未熟骨梁の混在）・GNAS遺伝子検査（病変組織）。",
    treatment:
      "根本治療なし。ビスホスホネート（パミドロン酸・ゾレドロン酸）で骨痛改善・骨折予防。整形外科的手術（骨折治療・矯正骨切り術）。",
    prognosis:
      "多くは骨格成熟後に安定する。病変が広範な多骨性では機能障害・疼痛が持続する。悪性転化はまれ（<1%）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Fibrous+Dysplasia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/308",
  },

  // ─── 希少遺伝疾患 ────────────────────────────────
  {
    slug: "williams-syndrome",
    name: "ウィリアムズ症候群",
    nameEn: "Williams Syndrome",
    nanbyoNumber: 344,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "7番染色体長腕（7q11.23）の微細欠失による隣接遺伝子症候群。大動脈弁上狭窄を含む先天性心疾患・特徴的な顔貌・知的障害・過社交性（over-friendliness）・高カルシウム血症が特徴的。",
    symptoms: [
      "特徴的顔貌（妖精様顔貌：星状虹彩・鞍鼻・厚い唇）",
      "大動脈弁上狭窄・末梢性肺動脈狭窄",
      "知的障害（軽度〜中等度）と特異な認知プロファイル",
      "過社交性・言語能力の相対的保存",
      "高カルシウム血症・腎尿路異常",
    ],
    causes:
      "7q11.23領域の約1.5Mbの微細欠失（ELN・LIMK1・GTF2IRD1等の複数遺伝子を含む）。多くは新生突然変異で、常染色体優性遺伝形式をとる。",
    diagnosis:
      "FISH法またはMLPA・マイクロアレイCGHによる7q11.23欠失の検出。臨床症状（特徴的顔貌・心血管奇形・発達特性）も診断の手がかり。",
    treatment:
      "対症療法が中心。心血管奇形（大動脈弁上狭窄等）の外科的修復・カテーテル治療。高カルシウム血症管理（カルシウム・ビタミンD制限）。早期療育・特別支援教育・就労支援。",
    prognosis:
      "適切な支援で社会参加が可能。成人期に心血管合併症・高血圧・関節拘縮の管理が重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Williams+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/6251",
  },
  {
    slug: "russell-silver-syndrome",
    name: "ラッセル・シルバー症候群",
    nameEn: "Russell-Silver Syndrome",
    nanbyoNumber: 95,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "子宮内発育遅延・出生後の低身長・身体的非対称性・特徴的顔貌・摂食困難を特徴とする先天性発育障害。11p15のインプリンティング異常またはUPD(7)matが主な原因。",
    symptoms: [
      "子宮内発育遅延（出生体重・身長の著明な低下）",
      "出生後の低身長（成長障害）",
      "身体的非対称性（半側肥大）",
      "特徴的顔貌（三角形顔・広い前額部・小さな顎）",
      "摂食困難・低血糖（乳幼児期）",
    ],
    causes:
      "11番染色体短腕（11p15.5）のインプリンティング異常（ICR1のメチル化消失：約40%）または母由来7番染色体のUPD（UPD(7)mat：約10%）が多い。残り50%は他の遺伝的変化または不明。",
    diagnosis:
      "臨床診断基準（Netchine-Harbison スコア）に基づく。確定診断にはメチル化解析（11p15）・マイクロアレイ・染色体検査・UPD検索。",
    treatment:
      "成長ホルモン補充療法（低身長・筋肉量低下の改善）。摂食支援・栄養管理（低血糖予防）。心理・教育支援・作業療法。",
    prognosis:
      "成長ホルモン治療で身長改善が期待できる。成人期の最終身長は依然低めとなることが多い。学習困難を伴う場合あり。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Russell+Silver+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4851",
  },
  {
    slug: "prader-willi-syndrome",
    name: "プラダー・ウィリー症候群",
    nameEn: "Prader-Willi Syndrome",
    nanbyoNumber: 98,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "15番染色体父由来領域（15q11-q13）の機能消失による先天性インプリンティング疾患。新生児期の筋緊張低下・哺乳不良から、幼児期以降に過食・肥満・知的障害・行動障害へと症状が変化する。",
    symptoms: [
      "新生児期の筋緊張低下（フロッピーインファント）・哺乳不良",
      "過食・肥満（2〜3歳以降に顕在化）",
      "低身長（成長ホルモン分泌不全）",
      "性腺機能低下症（陰茎・陰嚢低形成・停留精巣）",
      "知的障害・行動障害（こだわり・自傷行為）",
    ],
    causes:
      "父由来15q11-q13の欠失（約70%）・母由来UPD（UPD(15)mat：約25%）・インプリンティングセンター異常（約5%）。父由来SNRPN等の遺伝子群が機能しないことが病因。",
    diagnosis:
      "メチル化解析（15q11-q13）でほぼ全例診断可能。欠失はFISH・マイクロアレイで確認。UPDはマイクロサテライト解析で同定。",
    treatment:
      "成長ホルモン補充療法（身長・筋肉量・QOL改善）が中心。食事管理（過食・肥満対策）・行動療法・特別支援教育・性ホルモン補充（思春期以降）。",
    prognosis:
      "適切な管理で多くが成人に達する。肥満合併症（2型糖尿病・睡眠時無呼吸）と行動・精神症状が成人期の主な問題。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Prader+Willi+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4845",
  },
  {
    slug: "angelman-syndrome",
    name: "アンジェルマン症候群",
    nameEn: "Angelman Syndrome",
    nanbyoNumber: 99,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "母由来15q11-q13（UBE3A）の機能消失による先天性インプリンティング疾患。重度知的障害・てんかん・笑いの多発・言語発達欠如・運動失調が特徴的で、「幸せな人形症候群」とも呼ばれた。",
    symptoms: [
      "重度知的障害・言語発達欠如（発語なし〜数語）",
      "難治性てんかん（2〜3歳頃に発症）",
      "頻回の笑い・上機嫌な性格",
      "運動失調・振戦（手を上げた歩行）",
      "小頭症・色素希薄化（金髪・青い眼が多い）",
    ],
    causes:
      "母由来15q11-q13の欠失（約70%）・父由来UPD（UPD(15)pat：約7%）・UBE3A遺伝子変異（約11%）・インプリンティング異常（約3%）。母由来UBE3A遺伝子が機能しないことが病因。",
    diagnosis:
      "メチル化解析（15q11-q13）・FISH・マイクロアレイ・UBE3A遺伝子シーケンス。臨床診断基準に基づく臨床評価と遺伝学的検査の組み合わせ。",
    treatment:
      "根本治療なし。てんかん：バルプロ酸・クロナゼパム・レベチラセタム（lamotrigineは悪化の可能性）。コミュニケーション支援（AAC）・理学・作業・言語療法。",
    prognosis:
      "てんかんは成人期に軽減することもある。知的・言語障害は持続する。適切な支援で社会参加の質が向上する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Angelman+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4839",
  },
  {
    slug: "rett-syndrome",
    name: "レット症候群",
    nameEn: "Rett Syndrome",
    nanbyoNumber: 156,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "MECP2遺伝子変異による神経発達疾患で、ほぼ女児のみに発症する。6〜18ヶ月の正常発達の後、目的手運動の喪失・手もみ運動・コミュニケーション障害・てんかん・呼吸異常が特徴的に生じる。",
    symptoms: [
      "目的手運動の喪失・手もみ・手洗い様ステレオタイプ運動",
      "コミュニケーション・社会性の後退",
      "不規則呼吸（過換気・呼吸停止）",
      "難治性てんかん",
      "脊柱側弯・運動機能低下",
    ],
    causes:
      "Xq28に位置するMECP2（メチルCpG結合タンパク2）遺伝子の変異。ほぼ全例が新生突然変異。MeCP2はシナプス成熟・神経回路形成に重要な転写調節因子。男性では致死的または重篤。",
    diagnosis:
      "臨床診断基準（Neul 2010年改訂版）。MECP2遺伝子シーケンス・欠失重複解析（NGSパネル含む）。",
    treatment:
      "根本治療なし（遺伝子治療の臨床試験進行中）。てんかん管理・呼吸管理・脊柱側弯管理（装具・外科）。トロフィネチド（MECP2変異によるレット症候群に米国FDA承認・2023年）。理学・作業・言語療法。",
    prognosis:
      "多くは成人まで生存するが、重度障害が持続する。心臓自律神経異常（QT延長）による突然死リスクがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Rett+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/157",
  },
  {
    slug: "22q11-deletion",
    name: "22q11.2欠失症候群（ディジョージ症候群）",
    nameEn: "22q11.2 Deletion Syndrome",
    nanbyoNumber: 346,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "22番染色体長腕近位部（22q11.2）の微細欠失による最多の染色体微細欠失症候群。先天性心疾患・口蓋異常・免疫不全（胸腺低形成）・低カルシウム血症・学習障害・精神疾患リスクが特徴。",
    symptoms: [
      "先天性心疾患（円錐動脈幹奇形：ファロー四徴症・総動脈幹症等）",
      "口蓋裂・粘膜下口蓋裂・鼻咽腔閉鎖不全（鼻声）",
      "T細胞免疫不全（胸腺低形成・反復感染）",
      "低カルシウム血症（副甲状腺低形成）",
      "学習障害・統合失調症リスク増大",
    ],
    causes:
      "22q11.2領域の約3Mbの微細欠失（TBX1を含む30以上の遺伝子）。約90%は新生突然変異で、10%は親から遺伝。常染色体優性遺伝形式。",
    diagnosis:
      "FISH法・MLPA・マイクロアレイCGHで22q11.2欠失を検出。先天性心疾患・口蓋異常・低Ca血症・免疫異常の組み合わせで疑う。",
    treatment:
      "先天性心疾患の外科的修復。低カルシウム血症：カルシウム・活性型ビタミンD補充。免疫不全：感染管理・必要時に胸腺移植。言語療法・発達支援・精神科的サポート（統合失調症予防・治療）。",
    prognosis:
      "心疾患の重症度や合併症により多様。精神疾患（統合失調症：成人期に約25〜30%）が長期的な生活の質に影響する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=22q11+Deletion+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/6253",
  },

  // ─── 神経・筋疾患（さらに追加） ────────────────────────────────
  {
    slug: "fabry-neurological",
    name: "ファブリー病（神経型）",
    nameEn: "Fabry Disease (Neurological Type)",
    nanbyoNumber: 98,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "α-ガラクトシダーゼA欠損によるライソゾーム蓄積症。神経型では四肢末梢の灼熱痛（ファブリー疼痛）・脳卒中が先行することがある。X連鎖性遺伝で男性に重症、女性保因者も症状を呈する。",
    symptoms: [
      "四肢末梢の灼熱痛・刺痛（アクロパレスチジア）",
      "発汗低下（無汗症）",
      "角膜混濁（ボルティセラ角膜）",
      "若年性脳卒中・TIA",
      "腎障害・心肥大（臓器蓄積による）",
    ],
    causes:
      "GLA遺伝子変異によるα-ガラクトシダーゼA（α-Gal A）欠損。グロボトリアオシルセラミド（Gb3）が神経・血管・腎・心に蓄積し障害を引き起こす。X連鎖劣性遺伝。",
    diagnosis:
      "α-Gal A酵素活性（白血球・血漿：男性で低下）・血漿Gb3・リゾ-Gb3・GLA遺伝子検査（女性は酵素活性正常でも変異で診断）。",
    treatment:
      "酵素補充療法（アガルシダーゼα・アガルシダーゼβ：2週毎静注）。シャペロン療法（ミガラスタット：特定変異に経口投与）。疼痛管理（カルバマゼピン・ガバペンチン）。",
    prognosis:
      "酵素補充療法の早期開始で臓器障害の進行を抑制できる。脳卒中・腎不全・心筋症が生命予後に影響する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Fabry+Disease+Neurological",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/254",
  },
  {
    slug: "hereditary-spastic-paraplegia-new",
    name: "遺伝性痙性対麻痺",
    nameEn: "Hereditary Spastic Paraplegia",
    nanbyoNumber: 126,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "皮質脊髄路（上位運動ニューロン）の変性により下肢の痙性・筋力低下・歩行障害が徐々に進行する遺伝性疾患群。単純型と複雑型（他神経症状を伴う）に分類され、80以上の遺伝子型（SPG1〜）が同定されている。",
    symptoms: [
      "下肢の痙性麻痺（ハサミ脚歩行）",
      "下肢筋力低下",
      "腱反射亢進・病的反射陽性",
      "排尿障害（神経因性膀胱）",
      "複雑型では感覚障害・小脳失調・知的障害等を伴う",
    ],
    causes:
      "SPG4（SPAST：スパスチン）が最多（常染色体優性型の約40%）。その他SPG3A・SPG11・SPG15・SPG7等多数の遺伝子変異。常染色体優性・劣性・X連鎖性・ミトコンドリア遺伝等多様な遺伝形式。",
    diagnosis:
      "臨床症状・家族歴・遺伝子パネル検査（NGS）。MRI（頸髄・胸髄の萎縮・白質異常）・神経伝導検査・筋電図で評価。",
    treatment:
      "根本治療なし。痙性管理（バクロフェン・チザニジン・ボツリヌス毒素・バクロフェン髄腔内投与）。リハビリテーション（歩行訓練・装具・車椅子）・排尿障害管理。",
    prognosis:
      "単純型は緩徐進行で寿命は正常に近い。複雑型は障害が多岐にわたる。SPG4は発症年齢が早いほど進行が速い傾向。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hereditary+Spastic+Paraplegia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/240",
  },
  {
    slug: "nemaline-myopathy",
    name: "ネマリンミオパチー",
    nameEn: "Nemaline Myopathy",
    nanbyoNumber: 116,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "骨格筋にネマリン小体（棹状体）が蓄積する先天性ミオパチー。NEB・ACTA1等の遺伝子変異が原因で、筋緊張低下・筋力低下・呼吸障害が生じる。重症度は多様で新生児致死型から軽症型まで。",
    symptoms: [
      "筋緊張低下（出生時または乳児期）",
      "全身筋力低下（近位筋優位・顔面筋含む）",
      "呼吸筋障害（呼吸不全）",
      "嚥下困難・哺乳不良",
      "細長い顔・高口蓋・脊柱変形",
    ],
    causes:
      "NEB（ネブリン）・ACTA1（骨格筋アクチン）・TPM2・TPM3・TNNT1等の遺伝子変異によるサルコメア構成タンパクの異常。常染色体優性・劣性両者あり。",
    diagnosis:
      "筋生検（Gomori trichrome染色でネマリン小体の確認）・遺伝子パネル検査（NGS）・筋電図（ミオパチーパターン）・呼吸機能検査。",
    treatment:
      "根本治療なし。呼吸管理（NPPV・気管切開）・栄養管理（胃瘻）・リハビリテーション・装具療法。",
    prognosis:
      "重症型（新生児型）は呼吸障害で早期死亡が多い。軽症型は長期生存可能で歩行可能なことも多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Nemaline+Myopathy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5185",
  },
  {
    slug: "melas",
    name: "MELAS（ミトコンドリア脳筋症・乳酸アシドーシス・脳卒中様発作症候群）",
    nameEn: "MELAS Syndrome",
    nanbyoNumber: 21,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "ミトコンドリアDNA（主にmt.3243A>G変異）によるエネルギー産生障害で、脳卒中様発作・痙攣・乳酸アシドーシス・筋力低下・難聴などが生じる母系遺伝性ミトコンドリア病。",
    symptoms: [
      "脳卒中様発作（突然の頭痛・視覚障害・失語・片麻痺）",
      "痙攣・てんかん",
      "乳酸アシドーシス",
      "難聴（感音性）",
      "筋力低下・運動不耐性・易疲労感",
    ],
    causes:
      "ミトコンドリアDNA（mtDNA）mt.3243A>G変異（約80%）によるtRNALeu(UUR)異常。電子伝達系複合体の機能不全でATP産生が低下し、高エネルギー要求臓器（脳・筋）が障害される。母系遺伝（ヘテロプラスミー）。",
    diagnosis:
      "血液・髄液の乳酸・ピルビン酸高値。mtDNA変異検索（血液・尿沈渣・筋生検）。頭部MRI（後頭葉〜頭頂葉の拡散制限・皮質信号変化）・FDG-PET・脳波。筋生検（ラギッドレッドファイバー）。",
    treatment:
      "根本治療なし。アルギニン（急性期静注：脳卒中様発作の軽減）・シトルリン（慢性期予防）。CoQ10・ビタミンB群・カルニチン補充。てんかん管理（バルプロ酸は禁忌）。",
    prognosis:
      "脳卒中様発作の繰り返しで神経症状が段階的に悪化する。予後は変異型・ヘテロプラスミー率・臓器病変の程度による。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=MELAS+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/288",
  },
  {
    slug: "merrf",
    name: "MERRF症候群",
    nameEn: "MERRF Syndrome",
    nanbyoNumber: 21,
    category: "神経・筋疾患",
    categorySlug: "neuromuscular",
    overview:
      "ミオクローヌスてんかん・ラギッドレッドファイバーを特徴とするミトコンドリア病。mt.8344A>G変異（tRNALys）が主な原因で、難聴・小脳失調・認知機能低下を伴う。",
    symptoms: [
      "ミオクローヌスてんかん（難治性）",
      "小脳失調（歩行障害・構音障害）",
      "筋力低下・運動不耐性",
      "感音性難聴",
      "認知機能低下・短身長",
    ],
    causes:
      "mtDNA mt.8344A>G変異（約80〜90%）によるtRNALys機能障害。ミトコンドリア呼吸鎖複合体I・IVの欠損が生じる。母系遺伝（ヘテロプラスミー）。",
    diagnosis:
      "血液・髄液乳酸高値・mtDNA変異検索。筋生検（ラギッドレッドファイバー・SDH強陽性線維）。脳波（多焦点性棘波）・脳MRI・聴力検査。",
    treatment:
      "根本治療なし。てんかん管理（レベチラセタム・クロナゼパム：バルプロ酸は可能な限り回避）。CoQ10・ビタミンB群補充。リハビリテーション。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=MERRF+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/289",
  },

  // ─── 代謝・遺伝疾患（さらに追加） ────────────────────────────────
  {
    slug: "methylmalonic-acidemia",
    name: "メチルマロン酸血症",
    nameEn: "Methylmalonic Acidemia",
    nanbyoNumber: 258,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "メチルマロニルCoAムターゼ（MUT）またはコバラミン代謝酵素の欠損による有機酸代謝異常症。プロピオン酸血症と並ぶ主要な有機酸血症で、腎障害・眼病変・代謝危機を来す。",
    symptoms: [
      "新生児期の嘔吐・哺乳不良・意識障害",
      "代謝性アシドーシス・高アンモニア血症",
      "慢性腎障害（長期合併症）",
      "視神経障害（眼底病変）",
      "基底核病変（代謝危機後の神経障害）",
    ],
    causes:
      "MMUT遺伝子変異（MUTase欠損型：mut0・mut-）・MMAA・MMAB・MMADHC等のコバラミン代謝遺伝子変異。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス法：プロピオニルカルニチン高値）。血漿メチルマロン酸・尿有機酸分析・酵素活性・遺伝子検査・ビタミンB12反応試験。",
    treatment:
      "タンパク制限食（イソロイシン・バリン・メチオニン・スレオニン制限）・L-カルニチン補充。ビタミンB12反応型（cbI型）には大量B12投与。急性期は透析・高カロリー輸液。肝移植または肝腎同時移植。",
    prognosis:
      "mut0型は予後不良。早期診断・治療と肝移植で腎障害の進行を抑制できる可能性がある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Methylmalonic+Acidemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4633",
  },
  {
    slug: "biotinidase-deficiency",
    name: "ビオチニダーゼ欠損症",
    nameEn: "Biotinidase Deficiency",
    nanbyoNumber: 263,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "ビオチニダーゼ欠損によりビオチンが再利用されず、多種カルボキシラーゼ欠損が生じる先天代謝異常症。痙攣・皮膚炎・脱毛・視聴覚障害が生じるが、早期診断でビオチン投与により症状発現を完全に予防できる。",
    symptoms: [
      "難治性てんかん・痙攣",
      "皮膚炎・落屑・脱毛",
      "視神経萎縮（視力障害）・難聴",
      "筋緊張低下・発達遅滞",
      "代謝性アシドーシス（重症例）",
    ],
    causes:
      "BTD遺伝子変異によるビオチニダーゼ（BTD）欠損。ビオチン再利用障害により複数のカルボキシラーゼが機能不全となる。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（BTD活性：蛍光法・比色法）。確定診断に酵素活性定量・BTD遺伝子検査。",
    treatment:
      "経口ビオチン補充（5〜20mg/日）が唯一かつ非常に有効な治療。早期開始で症状発現を完全に予防できる。",
    prognosis:
      "新生児マススクリーニングで早期発見し生涯ビオチンを継続することで正常な発達が期待できる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Biotinidase+Deficiency",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4621",
  },
  {
    slug: "tyrosinemia-type1",
    name: "チロシン血症1型",
    nameEn: "Tyrosinemia Type 1",
    nanbyoNumber: 244,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "フマリルアセト酢酸ヒドロラーゼ（FAH）欠損によるチロシン代謝最終段階の障害。サクシニルアセトンが蓄積し肝障害・腎障害・神経症状（急性ポルフィリン様発作）・肝細胞がんを来す。",
    symptoms: [
      "急性肝不全（乳児期早期）",
      "慢性肝障害・肝硬変・肝細胞がん",
      "ファンコニ症候群（腎尿細管障害）",
      "神経症状（急性ポルフィリン様発作：疼痛・筋力低下）",
      "くる病様骨病変",
    ],
    causes:
      "FAH遺伝子変異によるフマリルアセト酢酸ヒドロラーゼ欠損。サクシニルアセトン（強力なΔ-ALA脱水酵素阻害薬）の蓄積が多臓器に毒性を発揮。常染色体劣性遺伝。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス法：チロシン高値・サクシニルアセトン高値）。尿有機酸分析・血液アミノ酸分析・FAH酵素活性・遺伝子検査。",
    treatment:
      "ニチシノン（NTBC：4-ヒドロキシフェニルピルビン酸ジオキシゲナーゼ阻害薬）が劇的に予後を改善する第一選択薬。チロシン・フェニルアラニン制限食の併用。肝細胞がんのサーベイランス。肝移植。",
    prognosis:
      "NTBC早期開始で肝不全・神経発作を予防できる。肝細胞がんリスクは残存するためサーベイランスが重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Tyrosinemia+Type+1",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4641",
  },

  // ─── 免疫・アレルギー疾患（さらに追加） ────────────────────────────────
  {
    slug: "common-variable-immunodeficiency",
    name: "分類不能型免疫不全症（CVID）",
    nameEn: "Common Variable Immunodeficiency",
    category: "免疫・アレルギー疾患",
    categorySlug: "immune",
    overview:
      "低ガンマグロブリン血症と抗体産生障害を特徴とする最も頻度の高い症候性原発性免疫不全症。反復性細菌感染・自己免疫疾患・リンパ増殖症・消化管病変・悪性腫瘍リスク増大を来す。",
    symptoms: [
      "反復性呼吸器感染（肺炎・副鼻腔炎・中耳炎）",
      "慢性肺疾患（気管支拡張症・間質性肺炎）",
      "消化器症状（慢性下痢・吸収不良・炎症性腸疾患様）",
      "自己免疫性血球減少（ITP・AIHA）",
      "リンパ節腫大・脾腫",
    ],
    causes:
      "B細胞分化・抗体産生に関わる複数の遺伝子（TNFRSF13B・TNFRSF13C・ICOS・CD19・CD20等）変異が一部で同定されるが、多くは原因不明の多因子性。",
    diagnosis:
      "血清IgG著明低下（年齢正常値の2SD以下）＋IgA・IgMの低下。ワクチン（肺炎球菌・インフルエンザ）接種後の特異的抗体産生不良。他の低Ig血症原因の除外。",
    treatment:
      "免疫グロブリン補充療法（IVIG：3〜4週毎静注またはSCIG：皮下注）が主体。感染の早期・適切な抗菌薬治療。自己免疫合併症にはステロイド・リツキシマブ等。",
    prognosis:
      "適切なIg補充で感染合併症は大幅に減少。肺の不可逆的障害・悪性リンパ腫・胃がんリスクに注意。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Common+Variable+Immunodeficiency",
  },
  {
    slug: "hemophagocytic-lymphohistiocytosis-primary",
    name: "原発性血球貪食性リンパ組織球症（FHL）",
    nameEn: "Familial Hemophagocytic Lymphohistiocytosis",
    nanbyoNumber: 16,
    category: "免疫・アレルギー疾患",
    categorySlug: "immune",
    overview:
      "細胞傷害性Tリンパ球・NK細胞の機能障害による過剰な免疫活性化で致死的なサイトカインストームを来す遺伝性疾患。幼小児に多く、発熱・肝脾腫・血球減少・凝固異常が急速に進行する。",
    symptoms: [
      "高熱（持続性・抗生物質不応性）",
      "肝脾腫",
      "汎血球減少（貧血・血小板減少・白血球減少）",
      "フィブリノゲン低下・高フェリチン血症",
      "神経症状（痙攣・意識障害）",
    ],
    causes:
      "FHL1〜5：PRF1（パーフォリン）・UNC13D・STX11・STXBP2等の遺伝子変異によりNK/CTL細胞の顆粒開口分泌が障害される。常染色体劣性遺伝。",
    diagnosis:
      "HLH-2004診断基準（8項目中5項目以上）：発熱・脾腫・血球減少・高TG/低フィブリノゲン・血球貪食・低NK活性・高フェリチン・高sCD25。遺伝子検査で確定。",
    treatment:
      "HLH-94/HLH-2004プロトコル（デキサメタゾン・エトポシド・シクロスポリン）で寛解導入後、同種造血幹細胞移植（唯一の根治療法）。",
    prognosis:
      "未治療では致命的。移植後5年生存率は約60〜70%。再発・神経後遺症が予後に影響。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Familial+Hemophagocytic+Lymphohistiocytosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/464",
  },
  {
    slug: "chronic-granulomatous-disease",
    name: "慢性肉芽腫症",
    nameEn: "Chronic Granulomatous Disease",
    category: "免疫・アレルギー疾患",
    categorySlug: "immune",
    overview:
      "食細胞（好中球・マクロファージ）のNADPHオキシダーゼ機能欠損により活性酸素産生が障害される原発性免疫不全症。特定の細菌・真菌（カタラーゼ陽性菌）への易感染性と肉芽腫形成が特徴。",
    symptoms: [
      "反復性・重症感染症（アスペルギルス・スタフィロコッカス・ノカルジア等）",
      "肺炎・リンパ節炎・肝膿瘍・骨髄炎",
      "各臓器の肉芽腫形成（消化管・膀胱：閉塞症状）",
      "BCGitis（BCGワクチン関連：播種性）",
      "炎症性腸疾患様症状",
    ],
    causes:
      "CYBB遺伝子変異（X連鎖型：gp91phox欠損、約70%）・CYBA・NCF1・NCF2・NCF4遺伝子変異（常染色体劣性型）によるNADPHオキシダーゼ機能不全。",
    diagnosis:
      "DHR（ジヒドロローダミン）フローサイトメトリー・NBTテスト（好中球のオキシダーゼ活性）・遺伝子検査。",
    treatment:
      "予防的抗菌薬（トリメトプリム-スルファメトキサゾール）・抗真菌薬（イトラコナゾール）・IFN-γ投与。感染時には積極的な抗菌・抗真菌療法・外科的ドレナージ。同種造血幹細胞移植が根治療法。",
    prognosis:
      "適切な予防療法で感染合併症を軽減できる。造血幹細胞移植後の長期生存率は改善している。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Chronic+Granulomatous+Disease",
  },

  // ─── 呼吸器疾患（追加） ────────────────────────────────
  {
    slug: "hereditary-pulmonary-hypertension",
    name: "遺伝性肺動脈性肺高血圧症",
    nameEn: "Hereditary Pulmonary Arterial Hypertension",
    nanbyoNumber: 86,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "BMPR2等の遺伝子変異により肺小動脈に閉塞性血管病変が生じる家族性・遺伝性の肺高血圧症。若年成人（特に女性）に発症しやすく、右心不全の進行で予後不良だったが近年治療法が飛躍的に進歩している。",
    symptoms: [
      "労作性息切れ・易疲労感（初期症状）",
      "動悸・失神",
      "右心不全症状（浮腫・腹水・頸静脈怒張）",
      "胸痛",
      "咳嗽・血痰（進行例）",
    ],
    causes:
      "BMPR2遺伝子変異（約80%の遺伝性PAH）・ACVRL1・ENG・SMAD9・CAV1・KCNK3等の変異。常染色体優性遺伝（浸透率約20%）。TGF-β/BMP経路障害により肺血管平滑筋細胞の増殖・収縮が亢進する。",
    diagnosis:
      "右心カテーテル（平均肺動脈圧≥20mmHg・PVR≥2WU）で確定。遺伝子検査（BMPR2等）・肺血管拡張試験（急性血管反応性試験）・6分間歩行距離・BNP/NT-proBNP・心エコー・造影CT。",
    treatment:
      "肺血管拡張薬3系統：エンドセリン受容体拮抗薬（ボセンタン・アンブリセンタン・マシテンタン）・PDE-5阻害薬（シルデナフィル・タダラフィル）・プロスタサイクリン誘導体（エポプロステノール・トレプロスチニル・セレキシパグ）。積極的な初期併用療法が推奨される。",
    prognosis:
      "近年の治療進歩で5年生存率が大幅改善。早期診断・積極的治療・遺伝カウンセリングが重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hereditary+Pulmonary+Arterial+Hypertension",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/255",
  },
  {
    slug: "bronchiolitis-obliterans",
    name: "閉塞性細気管支炎",
    nameEn: "Bronchiolitis Obliterans",
    nanbyoNumber: 87,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "細気管支の線維性閉塞による不可逆的な閉塞性換気障害を来す稀少疾患。感染後（アデノウイルス・マイコプラズマ）・造血幹細胞移植後（GVHD関連）・肺移植後・薬剤・吸入物質（バターフレーバー等）が原因となる。",
    symptoms: [
      "慢性咳嗽・喘鳴",
      "進行性の息切れ・運動耐容能低下",
      "気管支拡張薬に反応しない閉塞性換気障害",
      "反復性呼吸器感染",
      "チアノーゼ（進行例）",
    ],
    causes:
      "細気管支への傷害後の異常修復・線維化で管腔が閉塞する。HSCT後GVHDが主な原因（慢性GVHDの肺病変として最多）。感染後（小児：アデノウイルス3型等）・薬剤・吸入化学物質も原因。",
    diagnosis:
      "高分解能CT（モザイク状陰影・空気捕捉）・呼吸機能検査（FEV1低下・気管支拡張薬反応不良）・肺生検（確定診断だが侵襲的）。HSCT後はBOS（閉塞性細気管支炎症候群）の診断基準を用いる。",
    treatment:
      "確立した治療なし。HSCT後BOS：カルシニューリン阻害薬・ステロイド・FAM（フルチカゾン・アジスロマイシン・モンテルカスト）療法・イマチニブ等。感染制御・気道管理・酸素療法・肺移植（重症例）。",
    prognosis:
      "不可逆的な肺機能低下が進行する。HSCT後BOS は5年死亡率が高く、移植後の重要な合併症。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Bronchiolitis+Obliterans",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/319",
  },

  // ─── 腎疾患（追加） ────────────────────────────────
  {
    slug: "fabry-renal",
    name: "ファブリー病（腎型）",
    nameEn: "Fabry Disease (Renal Type)",
    nanbyoNumber: 98,
    category: "腎疾患",
    categorySlug: "renal",
    overview:
      "α-ガラクトシダーゼA欠損によるライソゾーム蓄積症の腎型。Gb3が腎実質（糸球体・尿細管）に蓄積し、蛋白尿・腎機能低下が生じ末期腎不全に至る。酵素補充療法で腎保護効果が期待される。",
    symptoms: [
      "蛋白尿（初期：微量アルブミン尿）",
      "腎機能低下（慢性腎臓病の進行）",
      "末期腎不全（透析・移植が必要）",
      "高血圧",
      "他臓器病変（心肥大・脳卒中・疼痛）の合併",
    ],
    causes:
      "GLA遺伝子変異によるα-ガラクトシダーゼA欠損。Gb3が腎糸球体足細胞・内皮細胞・近位尿細管細胞等に蓄積し、線維化・硬化を引き起こす。",
    diagnosis:
      "α-Gal A酵素活性・血漿Gb3・リゾ-Gb3測定。GLA遺伝子検査。腎生検（電子顕微鏡：封入体の蓄積）。腎機能・蛋白尿の経時的評価。",
    treatment:
      "酵素補充療法（アガルシダーゼα・β）・シャペロン療法（ミガラスタット）。ACE阻害薬・ARBによる蛋白尿・腎保護。末期腎不全には透析・腎移植。",
    prognosis:
      "早期の酵素補充開始で腎機能低下を遅延できる。未治療では40〜50代で末期腎不全に至ることが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Fabry+Disease+Renal",
  },
  {
    slug: "hypocomplementemic-urticarial-vasculitis",
    name: "低補体血症性蕁麻疹様血管炎症候群（マクダフィー症候群）",
    nameEn: "Hypocomplementemic Urticarial Vasculitis Syndrome",
    nanbyoNumber: 315,
    category: "腎疾患",
    categorySlug: "renal",
    overview:
      "慢性蕁麻疹様皮疹・低補体血症・全身性血管炎を特徴とする稀少疾患。腎炎・ぶどう膜炎・閉塞性肺疾患・関節炎・漿膜炎を合併する。抗C1q抗体が特徴的に検出される。",
    symptoms: [
      "慢性蕁麻疹様皮疹（24時間以上持続・灼熱感・疼痛）",
      "低補体血症（C1q・C3・C4低下）",
      "腎炎（メサンギウム増殖性・膜性増殖性）",
      "ぶどう膜炎・眼症状",
      "閉塞性肺疾患・漿膜炎・関節炎",
    ],
    causes:
      "抗C1q抗体（C1q沈殿素）が補体系を活性化し小型血管に免疫複合体が沈着する。SLEとの関連・オーバーラップが見られることがある。",
    diagnosis:
      "臨床症状（慢性蕁麻疹様皮疹・低補体血症・全身合併症）・皮膚生検（白血球破砕性血管炎）・抗C1q抗体陽性・C1q・C3・C4の低下・ANA・抗dsDNA抗体検索。",
    treatment:
      "NSAIDs・ヒドロキシクロロキン（軽症）。ステロイド・免疫抑制薬（アザチオプリン・ミコフェノール酸モフェチル）。重症例にはリツキシマブ・ダプソン。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hypocomplementemic+Urticarial+Vasculitis",
  },

  // ─── 消化器疾患（追加） ────────────────────────────────
  {
    slug: "intestinal-behcets",
    name: "腸管ベーチェット病",
    nameEn: "Intestinal Behcet's Disease",
    nanbyoNumber: 56,
    category: "消化器疾患",
    categorySlug: "digestive",
    overview:
      "ベーチェット病の消化管病変で、回盲部を中心とした深い腸管潰瘍が特徴的。腹痛・下痢・消化管出血・穿孔・瘻孔形成を来す。難治性で生物学的製剤が有効な例がある。",
    symptoms: [
      "腹痛（右下腹部痛：回盲部病変）",
      "下痢・血便・消化管出血",
      "発熱・体重減少",
      "腸管穿孔・瘻孔形成（重症合併症）",
      "再発性口腔内アフタ・外陰部潰瘍（ベーチェット病の他症状）",
    ],
    causes:
      "ベーチェット病の全身性自己炎症性疾患の一部として消化管（特に回盲部）に潰瘍が生じる。HLA-B51と強い関連あり。好中球機能亢進・Th1/Th17応答異常が関与。",
    diagnosis:
      "下部消化管内視鏡（回盲部の典型的な単発〜少数の深い類円形潰瘍）・造影CT・腹部MRI。ベーチェット病診断基準（反復性口腔アフタ＋他2主症状以上）と腸管病変の組み合わせで診断。",
    treatment:
      "メサラジン・ステロイド（軽〜中等症）。コルヒチン（再発予防）。重症・ステロイド依存例にアダリムマブ（TNF阻害薬：日本で承認）・インフリキシマブ。外科（穿孔・大量出血時）。",
    prognosis:
      "再発率が高く長期管理が必要。生物学的製剤の登場で外科手術率は低下傾向。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Intestinal+Behcets+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/224",
  },
  {
    slug: "lymphangioleiomyomatosis",
    name: "リンパ脈管筋腫症（LAM）",
    nameEn: "Lymphangioleiomyomatosis",
    nanbyoNumber: 189,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "TSC2またはTSC1遺伝子変異による平滑筋様細胞（LAM細胞）が肺・リンパ管・腎（血管筋脂肪腫）に増殖する多系統疾患。ほぼ女性のみに発症し、進行性の気流制限と気胸を繰り返す。",
    symptoms: [
      "労作性息切れ・咳嗽（進行性）",
      "自然気胸（再発性）",
      "乳び胸・乳び腹水",
      "腎血管筋脂肪腫（AML：腹部腫瘤・出血）",
      "結節性硬化症の他病変（皮膚・脳）",
    ],
    causes:
      "TSC2（約80%）またはTSC1遺伝子の変異（孤発性LAMは通常体細胞変異）によりmTORC1経路が過剰活性化し、LAM細胞が異常増殖・浸潤する。",
    diagnosis:
      "高分解能CT（両肺野均等分布の薄壁嚢腫）・血清VEGF-D高値（＞800pg/mL：高特異度）・肺生検（LAM細胞：HMB-45陽性）・腎AML（CT）・TSC2/TSC1遺伝子検査。",
    treatment:
      "シロリムス（mTOR阻害薬：FEV1低下速度の抑制・VEGF-D低下・LAM症状改善）が第一選択。気胸管理（胸膜固定術）・乳び腹水（食事制限・オクトレオチド・シロリムス）・腎AML（エベロリムス・塞栓術）。",
    prognosis:
      "シロリムス治療で進行を抑制できる。重症例では肺移植が適応。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Lymphangioleiomyomatosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/274",
  },

  // ─── 内分泌疾患（追加） ────────────────────────────────
  {
    slug: "mccune-albright",
    name: "マクーン・オルブライト症候群",
    nameEn: "McCune-Albright Syndrome",
    nanbyoNumber: 193,
    category: "内分泌疾患",
    categorySlug: "endocrine",
    overview:
      "GNAS遺伝子の体細胞変異による多骨性線維性骨異形成・皮膚カフェオレ斑・内分泌機能亢進（思春期早発症・甲状腺機能亢進症・GH過剰等）を三主徴とする稀少疾患。",
    symptoms: [
      "カフェオレ斑（不整形・地図状）",
      "多骨性線維性骨異形成（病的骨折・骨変形）",
      "思春期早発症（女児：月経・乳房発達の早期出現）",
      "甲状腺機能亢進症・甲状腺腫",
      "末端肥大症・クッシング症候群等の内分泌異常",
    ],
    causes:
      "GNAS遺伝子（Gsα）のArg201（R201H/C）体細胞機能獲得変異がモザイク状に生じる。cAMP産生が恒常的に亢進し、骨・皮膚・内分泌腺の各細胞が異常活性化する。",
    diagnosis:
      "三主徴の組み合わせで臨床診断。GNAS遺伝子変異（病変組織：骨・皮膚・血液で検出感度が異なる）・X線・MRI（骨病変）・内分泌機能検査（LH・FSH・エストラジオール・GH・IGF-1・甲状腺機能等）。",
    treatment:
      "思春期早発症：アロマターゼ阻害薬（レトロゾール・アナストロゾール）・ビカルタミド。GH過剰：ソマトスタチンアナログ・ペグビソマント・ランレオチド。骨病変：ビスホスホネート。甲状腺機能亢進：抗甲状腺薬・外科。",
    prognosis:
      "骨折・変形・内分泌障害の程度により予後は多様。適切な管理で長期生存可能。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=McCune+Albright+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/308",
  },
  {
    slug: "wolfram-syndrome",
    name: "ウォルフラム症候群",
    nameEn: "Wolfram Syndrome",
    category: "内分泌疾患",
    categorySlug: "endocrine",
    overview:
      "WFS1またはCISD2遺伝子変異による稀少常染色体劣性遺伝疾患。糖尿病・視神経萎縮・尿崩症・難聴（DIDMOAD症候群）を来し、進行性の神経変性を伴う。",
    symptoms: [
      "小児期発症1型様糖尿病（自己抗体陰性）",
      "視神経萎縮（視力低下・色覚異常）",
      "中枢性尿崩症",
      "感音性難聴",
      "神経変性（小脳失調・脳幹萎縮）",
    ],
    causes:
      "WFS1遺伝子変異（小胞体ストレス応答・カルシウム恒常性）による膵β細胞・神経細胞の変性。常染色体劣性遺伝（まれに優性変異でWFS1関連疾患）。",
    diagnosis:
      "DIDMOAD症状の組み合わせ・WFS1遺伝子検査。MRI（脳幹・小脳萎縮）・聴力検査・視野検査・内分泌検査。",
    treatment:
      "根本治療なし。インスリン療法（糖尿病）・デスモプレシン（尿崩症）・補聴器（難聴）・視覚補助。神経変性への対症療法。",
    prognosis:
      "神経変性が進行し30〜40代で呼吸不全・腎不全等で死亡することが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Wolfram+Syndrome",
  },

  // ─── 眼科疾患（追加） ────────────────────────────────
  {
    slug: "best-disease",
    name: "ベスト病（卵黄様黄斑ジストロフィー）",
    nameEn: "Best Disease",
    nanbyoNumber: 308,
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "BEST1（ベストロフィン1）遺伝子変異による常染色体優性黄斑ジストロフィー。RPE（網膜色素上皮）に卵黄様病変が形成され、中心視力が低下する。EOG（眼電図）のArden比低下が特徴的。",
    symptoms: [
      "中心視力の緩徐な低下（青年〜中年期に顕在化）",
      "変視症・中心暗点",
      "卵黄様黄斑病変（眼底検査・OCT）",
      "色覚障害（軽度）",
      "周辺視野は比較的保たれる",
    ],
    causes:
      "BEST1遺伝子変異によるベストロフィン1チャネル（RPEのクロライドイオンチャネル）機能不全。RPEのリポフスチン代謝・液体輸送が障害され卵黄様物質が蓄積する。常染色体優性遺伝。",
    diagnosis:
      "眼底検査・OCT（黄斑部の卵黄様病変〜瘢痕）・眼電図（EOG：Arden比著明低下が本疾患の特徴）・ERG（正常）・BEST1遺伝子検査。",
    treatment:
      "根本治療なし。サングラス（光障害予防）・低視力補助（拡大鏡・電子補助具）。CNV（脈絡膜新生血管）合併時に抗VEGF薬（ベバシズマブ・ラニビズマブ）の適応あり。遺伝子治療の臨床試験進行中。",
    prognosis:
      "多くは中等度の視力低下にとどまり日常生活が可能。一部は中心視力が著しく低下する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Best+Disease+Macular+Dystrophy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4877",
  },
  {
    slug: "gyrate-atrophy",
    name: "回旋状脈絡膜萎縮",
    nameEn: "Gyrate Atrophy of Choroid and Retina",
    nanbyoNumber: 311,
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "OAT（オルニチンアミノトランスフェラーゼ）遺伝子変異による高オルニチン血症を伴う脈絡膜・網膜の進行性萎縮疾患。近視・夜盲・視野狭窄から始まり中心視力が低下する。アルギニン制限食・ビタミンB6で進行抑制が期待できる。",
    symptoms: [
      "夜盲（暗所での視力低下：10代から）",
      "進行性視野狭窄（求心性）",
      "高度近視",
      "後嚢下白内障",
      "黄斑変性による中心視力低下（進行期）",
    ],
    causes:
      "OAT遺伝子変異によるオルニチンアミノトランスフェラーゼ欠損。血漿オルニチン著明高値（正常の10〜20倍）となりRPE・光受容体が障害される。常染色体劣性遺伝。",
    diagnosis:
      "血漿アミノ酸分析（オルニチン著明高値）・眼底検査（境界明瞭な地図状脈絡膜萎縮）・ERG（錐体・桿体機能低下）・OAT遺伝子検査。",
    treatment:
      "アルギニン制限食（オルニチン前駆体を減少）・ピリドキシン（ビタミンB6）反応型に大量B6投与。クレアチン補充（筋症状のある例）。定期的な眼科経過観察。",
    prognosis:
      "アルギニン制限食の厳格な継続で脈絡膜萎縮の進行を抑制できる。視力予後は管理の良否に依存する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Gyrate+Atrophy+Choroid+Retina",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4877",
  },

  // ─── 骨・筋肉疾患（さらに追加） ────────────────────────────────
  {
    slug: "cleidocranial-dysplasia",
    name: "鎖骨頭蓋骨異形成症",
    nameEn: "Cleidocranial Dysplasia",
    nanbyoNumber: 203,
    category: "骨・筋肉疾患",
    categorySlug: "bone",
    overview:
      "RUNX2遺伝子変異による全身性の骨・歯発達障害。鎖骨の低形成・欠損（肩を前で合わせられる）・大泉門の晩期閉鎖・過剰歯・乳歯の晩期脱落が特徴的。",
    symptoms: [
      "鎖骨の低形成・欠損（両肩を前胸で接触できる）",
      "大泉門の晩期閉鎖・縫合線開存",
      "過剰歯・乳歯の脱落遅延",
      "短身長",
      "骨盤異形成（出産時問題となりうる）",
    ],
    causes:
      "RUNX2（CBFA1）遺伝子のヘテロ接合性変異。骨芽細胞分化の転写因子が機能不全となり、軟骨内骨化・膜性骨化が障害される。常染色体優性遺伝（新生突然変異も多い）。",
    diagnosis:
      "臨床診断（特徴的な症状・X線所見）・骨格X線（鎖骨欠損・頭蓋縫合開存）・RUNX2遺伝子検査。",
    treatment:
      "根本治療なし。歯科管理（過剰歯抜去・矯正・インプラント）・聴覚評価と補聴器・脊柱管狭窄管理・帝王切開（骨盤変形例）。",
    prognosis:
      "知能は正常。身長は低いが日常生活に大きな障害はない。歯科問題が最も大きな日常的問題となる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Cleidocranial+Dysplasia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4857",
  },
  {
    slug: "camptodactyly-syndrome",
    name: "先天性多発性関節拘縮症",
    nameEn: "Arthrogryposis Multiplex Congenita",
    nanbyoNumber: 214,
    category: "骨・筋肉疾患",
    categorySlug: "bone",
    overview:
      "出生時に複数の関節が固定した肢位で拘縮している先天性疾患群の総称。原因は多様（神経・筋・骨・子宮内運動制限等）で、早期からのリハビリ・装具・外科治療が機能改善に重要。",
    symptoms: [
      "複数の関節の固定した拘縮（出生時）",
      "内反足・股関節脱臼・膝関節拘縮",
      "上肢の関節拘縮（手関節屈曲・肘関節伸展拘縮）",
      "脊柱側弯",
      "筋萎縮・皮膚のくびれ",
    ],
    causes:
      "胎内での胎動減少（fetal akinesia）が最終共通経路。原因として神経筋疾患（SMA・先天性ミオパチー）・結合組織異常・子宮内環境異常（羊水過少・子宮奇形）・骨格異常など多数。",
    diagnosis:
      "臨床診断（出生時の多発関節拘縮）・詳細な原因精査（筋電図・筋生検・遺伝子パネル・画像）が重要。",
    treatment:
      "理学療法（関節可動域訓練）・シリアルキャスティング（内反足等）・装具療法。外科的矯正術（腱延長・骨切り・脊柱側弯手術）。早期介入で歩行能力改善が期待できる。",
    prognosis:
      "原因と重症度により多様。多くが歩行可能となる。知能は正常なことが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Arthrogryposis+Multiplex+Congenita",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4859",
  },

  // ─── 希少遺伝疾患（さらに追加） ────────────────────────────────
  {
    slug: "noonan-syndrome",
    name: "ヌーナン症候群",
    nameEn: "Noonan Syndrome",
    nanbyoNumber: 343,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "RAS-MAPK経路遺伝子（PTPN11・SOS1・RAF1・RIT1等）変異による多発奇形症候群。先天性心疾患・低身長・翼状頸・特徴的顔貌・出血傾向・学習障害を特徴とする。RASopathiesの一つ。",
    symptoms: [
      "特徴的顔貌（内眼角贅皮・眼間開離・低耳介・翼状頸）",
      "先天性心疾患（肺動脈弁狭窄・肥大型心筋症・ASD）",
      "低身長（成長ホルモン分泌不全も合併しうる）",
      "出血傾向（第XI因子欠乏・血小板機能異常）",
      "学習障害・発達遅滞（軽度）",
    ],
    causes:
      "PTPN11（約50%）・SOS1・RAF1・RIT1・KRAS・NRAS等のRAS-MAPKシグナル伝達経路遺伝子の機能獲得変異。多くは新生突然変異で、一部は常染色体優性遺伝。",
    diagnosis:
      "臨床診断（van der Burgt基準）。遺伝子パネル検査（NGS）で原因遺伝子を同定。心エコー・凝固検査・成長評価・認知評価。",
    treatment:
      "先天性心疾患の外科・カテーテル治療。成長ホルモン療法（低身長：日本で承認）。出血への対応（術前の凝固評価・新鮮凍結血漿）。発達支援・学習支援。",
    prognosis:
      "心疾患の重症度が最大の予後規定因子。多くが成人まで生存し、社会参加が可能。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Noonan+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/6249",
  },
  {
    slug: "costello-syndrome",
    name: "コステロ症候群",
    nameEn: "Costello Syndrome",
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "HRAS遺伝子変異による稀少なRASopathy。生後の哺乳不良・成長障害・特徴的顔貌・皮膚乳頭腫・心疾患（肥大型心筋症・不整脈）・軽度〜中等度知的障害・悪性腫瘍リスク増大を特徴とする。",
    symptoms: [
      "哺乳不良・成長障害（乳児期）",
      "特徴的顔貌（粗い顔立ち・厚い唇・大きな口）",
      "手掌・足底の皮膚乳頭腫",
      "肥大型心筋症・心室頻拍",
      "軽度〜中等度知的障害・発達遅滞",
    ],
    causes:
      "HRAS遺伝子の機能獲得型変異（p.G12S等）。ほぼ全例が新生突然変異。HRAS活性化によりRAS-MAPKシグナルが過剰活性化する。",
    diagnosis:
      "臨床診断・HRAS遺伝子検査（直接シーケンス・NGSパネル）。心エコー・認知評価・腫瘍サーベイランス（横紋筋肉腫・神経芽腫）。",
    treatment:
      "対症療法。肥大型心筋症・不整脈管理。哺乳不良への栄養支援（胃管・胃瘻）。乳頭腫の外科的切除。悪性腫瘍の定期的サーベイランス。発達支援。",
    prognosis:
      "悪性腫瘍リスク（横紋筋肉腫・膀胱がん等）が課題。心疾患管理と腫瘍サーベイランスが重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Costello+Syndrome",
  },
  {
    slug: "kabuki-syndrome",
    name: "歌舞伎症候群（Kabuki症候群）",
    nameEn: "Kabuki Syndrome",
    nanbyoNumber: 336,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "KMT2D（MLL4）またはKDM6A遺伝子変異によるクロマチンリモデリング障害疾患。特徴的な歌舞伎役者様顔貌・成長障害・知的障害・骨格異常・持続する指紋の胎児様パターンが5主徴。",
    symptoms: [
      "特徴的顔貌（長い眼瞼裂・眼瞼下垂・弓型眉毛・耳介異常）",
      "知的障害（中等度）",
      "低身長・成長障害",
      "骨格異常（短い指・脊柱側弯）",
      "持続する指紋の胎児様隆線（指腹の豊かな肉付き）",
    ],
    causes:
      "KMT2D遺伝子変異（約75%）またはKDM6A変異（約5%）。ヒストンH3K4・H3K27メチル化制御に関わるクロマチン修飾因子の機能喪失による遺伝子発現の広範な異常。多くは新生突然変異で、常染色体優性遺伝。",
    diagnosis:
      "臨床診断（Niikawa-Kuroki診断基準）。KMT2D・KDM6A遺伝子検査（NGSパネル・単一遺伝子）。",
    treatment:
      "根本治療なし。発達支援・特別支援教育。成長ホルモン療法（低身長例）。心疾患・腎奇形・内分泌異常等の合併症管理。",
    prognosis:
      "知能・行動面の支援で社会参加が可能。成人期の合併症管理（肥満・糖尿病・感染）が課題。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Kabuki+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/6247",
  },
  {
    slug: "charge-syndrome",
    name: "CHARGE症候群",
    nameEn: "CHARGE Syndrome",
    nanbyoNumber: 107,
    category: "希少遺伝疾患",
    categorySlug: "rare_genetic",
    overview:
      "CHD7遺伝子変異による多臓器奇形症候群。コロボーマ（C）・先天性心疾患（H）・後鼻孔閉鎖（A）・成長発達遅滞（R）・性器低形成（G）・耳奇形/難聴（E）の頭文字から命名された。",
    symptoms: [
      "眼コロボーマ（虹彩・脈絡膜の欠損）",
      "先天性心疾患（様々なタイプ）",
      "後鼻孔閉鎖（片側または両側：新生児期呼吸困難）",
      "外耳道狭窄・耳小骨奇形・感音性難聴",
      "半規管低形成（前庭機能障害・バランス障害）",
    ],
    causes:
      "CHD7遺伝子（ATP依存性クロマチンリモデリングヘリカーゼ）変異（約70%）。ほぼ全例が新生突然変異。発生期の多臓器の転写調節・神経堤細胞発達が障害される。",
    diagnosis:
      "CHARGE診断基準（Blake・Verloes）。CHD7遺伝子検査（シーケンス・MLPA）。全身評価（心エコー・内視鏡的後鼻孔確認・MRI・聴力検査・内分泌検査）。",
    treatment:
      "後鼻孔閉鎖：外科的開通術（緊急）。先天性心疾患：外科・カテーテル。難聴：補聴器・人工内耳。眼科フォロー。嚥下機能評価・栄養管理。発達支援（コミュニケーション支援）。",
    prognosis:
      "複数の重篤な奇形を合併する場合は新生児期が最もリスクが高い。適切な管理で多くが長期生存可能。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=CHARGE+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/6255",
  },
  {
    slug: "pml",
    name: "進行性多巣性白質脳症",
    nameEn: "Progressive Multifocal Leukoencephalopathy",
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "JCウイルス（JCV）の再活性化による脱髄性疾患。免疫抑制状態（HIV感染・血液悪性腫瘍・免疫抑制薬使用）で発症し、脳白質に多発性脱髄病変を生じる。進行が速く、重篤な神経障害をきたす。",
    symptoms: [
      "片麻痺・片側感覚障害",
      "視野障害・複視",
      "失語・構音障害",
      "認知機能低下・認知症",
      "小脳失調・歩行障害",
      "痙攣発作",
    ],
    causes:
      "幼少期に不顕性感染したJCウイルスが、免疫抑制状態（AIDS・白血病・リンパ腫・ナタリズマブ等の生物学的製剤）下で再活性化し、脳オリゴデンドロサイトを破壊することで発症する。",
    diagnosis:
      "MRI（T2/FLAIR高信号の多発性白質病変）。CSF中JCV-DNA定量PCR（感度・特異度ともに高い）。脳生検（病理：巨大核の変性オリゴデンドロサイト、JCV免疫染色）。",
    treatment:
      "根本治療なし。免疫再構築が最重要（HIV例：抗レトロウイルス療法の早期開始、生物学的製剤例：中止）。免疫再構築炎症症候群（IRIS）のステロイド管理。マイルド免疫賦活化薬（メフロキン・シタラビン等）は有効性未確立。",
    prognosis:
      "予後不良。HIV関連PMLでは抗レトロウイルス療法により生存率が改善。非HIV例の死亡率は高く、生存例でも重篤な神経後遺症を残すことが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Progressive+Multifocal+Leukoencephalopathy",
  },
  {
    slug: "adem",
    name: "急性散在性脳脊髄炎",
    nameEn: "Acute Disseminated Encephalomyelitis",
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "感染症またはワクチン接種後に誘発される免疫介在性の多発性脱髄疾患。主に小児に多く、脳・脊髄の白質に広範な炎症性脱髄病変を生じる。通常は単相性だが再発型もある。",
    symptoms: [
      "急性の意識障害・傾眠",
      "発熱・頭痛",
      "多発性神経学的症状（運動麻痺・感覚障害）",
      "視神経炎・複視",
      "小脳失調",
      "痙攣発作",
    ],
    causes:
      "先行感染（麻疹・水痘・EBウイルス等）またはワクチン接種後の自己免疫機序。感染病原体と中枢神経ミエリン成分の交差反応（分子的模倣）による髄鞘破壊と考えられる。",
    diagnosis:
      "MRI（T2/FLAIR高信号の多発性皮質下・深部白質・基底核・視床・脳幹・脊髄病変）。髄液検査（細胞増多・蛋白上昇）。抗MOG抗体・抗AQP4抗体検査（鑑別に重要）。",
    treatment:
      "高用量コルチコステロイドパルス療法（メチルプレドニゾロン）が第一選択。難治例：血漿交換・IVIG。再発型はMMF・アザチオプリン等の免疫抑制療法。",
    prognosis:
      "多くは数週間〜数ヶ月で回復するが、重篤例や再発型では永続的な神経障害が残ることがある。小児は成人より回復が良好。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Acute+Disseminated+Encephalomyelitis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/3434",
  },
  {
    slug: "anti-nmdar-encephalitis",
    name: "抗NMDA受容体脳炎",
    nameEn: "Anti-NMDA Receptor Encephalitis",
    nanbyoNumber: 127,
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "NMDA型グルタミン酸受容体に対する自己抗体（抗GluN1抗体）が産生される自己免疫性脳炎。若年女性に多く、卵巣奇形腫の合併が約半数にみられる。精神症状から始まり急速に重篤な神経症状をきたす。",
    symptoms: [
      "精神症状（幻覚・妄想・攻撃性）",
      "意識障害・昏睡",
      "不随意運動（口・四肢のステレオタイプ運動）",
      "自律神経障害（頻脈・高血圧・過呼吸）",
      "言語障害（無言症・エコラリア）",
      "痙攣発作",
    ],
    causes:
      "NMDA受容体GluN1サブユニットに対する自己抗体が産生され、NMDA受容体の機能を阻害することで発症。卵巣奇形腫や他の腫瘍が抗体産生のトリガーとなることがある（腫瘍随伴性）。",
    diagnosis:
      "血清・髄液中の抗GluN1（NR1）抗体測定。脳MRIは正常または辺縁系病変。脳波（δブラシパターン）。卵巣奇形腫の検索（超音波・CT・MRI）。",
    treatment:
      "腫瘍合併例：腫瘍摘出。免疫療法（第一選択：高用量ステロイド+IVIG+血漿交換）。難治例：リツキシマブ・シクロホスファミド。",
    prognosis:
      "早期治療で約80%が良好に回復するが、回復に数ヶ月〜1年以上かかることがある。再発率は約25%。重症例では長期人工呼吸管理が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Anti-NMDA+Receptor+Encephalitis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4500",
  },
  {
    slug: "rasmussen-encephalitis",
    name: "ラスムッセン脳炎",
    nameEn: "Rasmussen Encephalitis",
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "主に小児に発症する一側大脳半球の慢性進行性炎症疾患。難治性焦点性てんかん（持続部分てんかん）と一側性の大脳萎縮を特徴とする。原因不明の自己免疫性疾患と考えられる。",
    symptoms: [
      "難治性焦点性てんかん（持続部分てんかん：epilepsia partialis continua）",
      "片麻痺・偏側不全麻痺",
      "一側大脳萎縮の進行",
      "認知機能低下",
      "言語障害（優位半球障害時）",
      "視野障害",
    ],
    causes:
      "原因不明。グルタミン酸受容体GluR3に対する自己抗体の関与が示唆されるが一定していない。CD8陽性T細胞が神経細胞・アストロサイトを攻撃する細胞傷害性免疫反応が主病態とされる。",
    diagnosis:
      "臨床基準（持続部分てんかん+片麻痺+一側大脳萎縮）。MRI（一側大脳半球の進行性萎縮・皮質/白質T2高信号）。脳波（一側多焦点てんかん様放電）。脳生検（T細胞浸潤・グリオーシス）。",
    treatment:
      "抗てんかん薬は難治性。免疫療法（IVIG・ステロイドパルス・血漿交換）は一時的効果。根本的治療：機能的半球切除術（てんかん発作の制御に有効だが、対側半身麻痺が残る）。",
    prognosis:
      "進行性。多くは発症後数年以内に重篤な神経機能障害に至る。半球切除後もてんかん発作は改善するが、片麻痺・視野障害・言語障害は残存する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Rasmussen+Encephalitis",
  },
  {
    slug: "alexander-disease",
    name: "アレキサンダー病",
    nameEn: "Alexander Disease",
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "グリア繊維性酸性蛋白（GFAP）遺伝子の変異による希少なアストロサイト疾患。前頭部優位の白質変性と、ローゼンタール線維（アストロサイト内封入体）蓄積を特徴とする白質ジストロフィー。",
    symptoms: [
      "乳児型：大頭症・けいれん・精神運動発達遅滞",
      "若年型：球麻痺症状（嚥下障害・構音障害）・小脳失調",
      "成人型：球麻痺・自律神経障害・軟口蓋ミオクローヌス",
      "水頭症",
      "痙性対麻痺",
    ],
    causes:
      "GFAP遺伝子のヘテロ接合性ミスセンス変異（ほぼ全例が新生突然変異）。変異GFAPの異常集積がアストロサイト機能を障害し、ローゼンタール線維を形成してミエリン形成・維持を障害する。",
    diagnosis:
      "MRI（前頭部優位白質異常信号・脳室周囲帯状変化・基底核/視床病変・脳幹病変）。GFAP遺伝子検査。血清・髄液GFAP測定（バイオマーカー）。",
    treatment:
      "根本治療なし。支持療法（抗てんかん薬・リハビリテーション・嚥下管理・栄養管理）。GFAP mRNAを標的とするアンチセンスオリゴヌクレオチド（ASO）療法が開発中。",
    prognosis:
      "乳児型は最も重篤で2〜3年以内に死亡することが多い。若年型・成人型は緩徐進行で長期生存可能だが、神経機能は徐々に低下する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Alexander+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/487",
  },
  {
    slug: "canavan-disease",
    name: "カナバン病",
    nameEn: "Canavan Disease",
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "アスパルトアシラーゼ（ASPA）欠乏によるN-アセチルアスパラギン酸（NAA）の蓄積を特徴とする白質ジストロフィー。アシュケナージ系ユダヤ人に多い常染色体劣性遺伝疾患。",
    symptoms: [
      "精神運動発達遅滞・退行",
      "大頭症（生後数ヶ月から）",
      "筋緊張低下（頭部支持不能）",
      "視力障害・視神経萎縮",
      "痙攣発作",
      "嚥下障害・哺乳障害",
    ],
    causes:
      "ASPA遺伝子変異による酵素欠損。NAAが脳に異常蓄積し、スポンジ状白質変性を引き起こす。NAAは神経細胞からオリゴデンドロサイトへの水・アセチル基転送に関与する。",
    diagnosis:
      "尿中NAA定量（著明高値）。MRI（広範な白質T2高信号・スポンジ状変性）。MRスペクトロスコピー（NAA著増）。ASPA遺伝子検査。酵素活性測定。",
    treatment:
      "根本治療なし。支持療法（抗てんかん薬・理学療法・作業療法・嚥下管理・栄養管理）。遺伝子治療（AAVベクターによるASPA遺伝子補充）の臨床試験が進行中。",
    prognosis:
      "重症型は乳幼児期から急速に進行し、多くは10歳までに死亡。軽症型・成人型もまれに報告される。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Canavan+Disease",
  },
  {
    slug: "refsum-disease",
    name: "レフサム病",
    nameEn: "Refsum Disease",
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "フィタン酸水酸化酵素（PHYH）またはPEX7遺伝子変異によりフィタン酸の代謝が障害され、組織に蓄積する常染色体劣性ペルオキシソーム病。網膜色素変性・末梢神経障害・小脳失調の三徴が特徴。",
    symptoms: [
      "網膜色素変性（夜盲症・視野狭窄・視力低下）",
      "末梢神経障害（四肢の感覚障害・筋力低下）",
      "小脳失調",
      "嗅覚消失",
      "難聴",
      "魚鱗癬様皮膚変化",
      "心伝導障害",
    ],
    causes:
      "PHYH（フィタノイル-CoAヒドロキシラーゼ）またはPEX7遺伝子変異。ペルオキシソームにおけるフィタン酸α酸化が障害され、食物由来のフィタン酸が神経組織・心臓・皮膚等に蓄積して障害をきたす。",
    diagnosis:
      "血漿フィタン酸濃度測定（著明高値）。PHYH/PEX7遺伝子検査。電気生理検査（末梢神経伝導検査）。眼科検査（網膜色素変性）。心電図（伝導障害）。",
    treatment:
      "低フィタン酸食（クロロフィルを含む緑色野菜・反芻動物の脂肪を制限）が最重要。急性増悪時：血漿交換・血漿アフェレシス（フィタン酸除去）。",
    prognosis:
      "食事療法の継続で神経障害の進行を抑制できるが、既存の網膜色素変性・難聴は不可逆。急性増悪時に不整脈・突然死のリスクがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Refsum+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5065",
  },
  {
    slug: "pls",
    name: "原発性側索硬化症",
    nameEn: "Primary Lateral Sclerosis",
    nanbyoNumber: 3,
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "上位運動ニューロン（皮質脊髄路・皮質延髄路）のみが選択的に変性する希少疾患。ALSと異なり下位運動ニューロンは障害されない。非常に緩徐進行で生命予後は比較的良好。",
    symptoms: [
      "両下肢の痙性麻痺（歩行障害）",
      "上肢の痙性麻痺（巧緻運動障害）",
      "球麻痺症状（構音障害・嚥下障害）",
      "腱反射亢進・病的反射（バビンスキー徴候）",
      "筋萎縮はみられないかごく軽度",
      "情動失禁（偽性球麻痺）",
    ],
    causes:
      "原因不明。多くは孤発性。一部でALS関連遺伝子（ALS2/アルシン、SPG7等）変異が報告される。上位運動ニューロンが選択的に変性する機序は不明。",
    diagnosis:
      "臨床診断（El Escorial基準の修正）。下位運動ニューロン徴候の欠如を4年以上確認（ALSへの移行除外）。MRI（皮質脊髄路のT2高信号・萎縮）。筋電図（下位ニューロン障害なし）。",
    treatment:
      "根本治療なし。痙性への対症療法（バクロフェン・チザニジン・ボトックス）。理学療法・作業療法・言語療法。コミュニケーション支援機器（進行例）。",
    prognosis:
      "ALSと比較して非常に緩徐進行。多くは車椅子使用になるまでに10〜20年以上かかる。生命予後は比較的良好で、呼吸不全をきたすことはまれ。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Primary+Lateral+Sclerosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/52",
  },
  {
    slug: "hemochromatosis",
    name: "遺伝性ヘモクロマトーシス",
    nameEn: "Hereditary Hemochromatosis",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "HFE遺伝子等の変異により鉄吸収が過剰となり、肝臓・心臓・膵臓・関節・皮膚等の臓器に鉄が過剰蓄積する常染色体劣性遺伝疾患。欧米に多く、アジアでは比較的まれ。",
    symptoms: [
      "肝障害・肝硬変（進行すると肝癌リスク増大）",
      "糖尿病（膵臓β細胞障害）",
      "心筋症・不整脈",
      "関節炎（特に第2・3MCP関節）",
      "皮膚色素沈着（古銅色・青銅色）",
      "性腺機能低下症",
      "全身倦怠感",
    ],
    causes:
      "HFE遺伝子（C282Y・H63D変異等）、TFR2、HJV、SLC40A1等の遺伝子変異によりヘプシジン調節が障害され、十二指腸からの鉄吸収が恒常的に亢進する。",
    diagnosis:
      "血清フェリチン（著明高値）・トランスフェリン飽和度（>45%）。HFE遺伝子検査。肝生検（鉄染色で肝内鉄沈着確認）。MRI（T2*での肝鉄定量）。",
    treatment:
      "瀉血療法（定期的な採血による鉄除去）が第一選択。維持療法として年数回の瀉血継続。臓器障害に対する対症療法（糖尿病・心不全管理等）。",
    prognosis:
      "早期発見・治療で正常な生命予後が期待できる。肝硬変・肝癌・糖尿病が進行すると予後不良。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hereditary+Hemochromatosis",
  },
  {
    slug: "alpha1-antitrypsin-deficiency",
    name: "アルファ1アンチトリプシン欠乏症",
    nameEn: "Alpha-1 Antitrypsin Deficiency",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "SERPINA1遺伝子変異により血清中のα1アンチトリプシン（AAT）が著減する常染色体劣性遺伝疾患。肺ではエラスターゼが阻害されずに肺胞を破壊し肺気腫をきたし、肝臓では異常AATが蓄積し肝障害をきたす。",
    symptoms: [
      "肺気腫（若年性・基底部優位）・慢性閉塞性肺疾患",
      "肝硬変・肝細胞癌（肝型）",
      "新生児肝炎・乳幼児期の黄疸",
      "壊疽性膿皮症（皮膚型）",
      "肉芽腫性膵炎（まれ）",
      "労作時呼吸困難",
    ],
    causes:
      "SERPINA1遺伝子変異（最多：ZZ型=Glu342Lys）。変異AATは小胞体から分泌されず肝細胞内に蓄積（肝障害）。血清AAT低値により肺でエラスターゼが阻害されず肺胞破壊が進行する。",
    diagnosis:
      "血清AAT濃度測定（<11μM）。AAT表現型（Pi型）解析。SERPINA1遺伝子型解析。肺機能検査（閉塞性パターン）・胸部CT（気腫性変化）。肝生検（PAS陽性封入体）。",
    treatment:
      "肺型：禁煙・気管支拡張薬・AAT補充療法（静注）。重症肺気腫：肺移植。肝型：肝庇護療法・肝移植（重症肝硬変）。siRNA/ASO療法が開発中（異常AAT産生抑制）。",
    prognosis:
      "喫煙者では急速に肺機能低下が進行し予後不良。非喫煙者は比較的良好だが肺気腫は進行する。肝型は小児期の重症例で肝移植が必要になることがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Alpha-1+Antitrypsin+Deficiency",
  },
  {
    slug: "cystinuria",
    name: "シスチン尿症",
    nameEn: "Cystinuria",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "尿細管・腸管におけるシスチン・オルニチン・アルギニン・リジン（COAL）の輸送障害により、シスチンが尿中に過剰排泄される常染色体遺伝疾患。シスチンの低溶解性により尿路結石を反復する。",
    symptoms: [
      "反復性尿路結石（シスチン結石）",
      "腎疝痛（側腹部〜下腹部の激烈な疼痛）",
      "血尿",
      "尿路感染症",
      "水腎症・腎機能障害（反復性結石による）",
    ],
    causes:
      "SLC3A1（rBAT）またはSLC7A9（b0,+AT）遺伝子変異による近位尿細管でのアミノ酸共輸送体障害。シスチンの再吸収が障害され尿中に過剰排泄される。",
    diagnosis:
      "尿中シスチン定量（>250mg/g creatinine）。尿シアン化ニトロプルシド試験（定性的スクリーニング）。結石分析（シスチン結石）。SLC3A1/SLC7A9遺伝子検査。",
    treatment:
      "水分大量摂取（尿量>3L/日）。尿アルカリ化（クエン酸カリウム・重曹）。チオール系薬剤（ペニシラミン・チオプロニン：シスチンと可溶性混合ジスルフィドを形成）。ESWL・内視鏡的結石除去。",
    prognosis:
      "適切な治療で結石形成を抑制できるが、完全な予防は困難で生涯にわたる管理が必要。反復性結石・感染により慢性腎障害が進行することがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Cystinuria",
  },
  {
    slug: "hurler-syndrome",
    name: "ハーラー症候群（ムコ多糖症I型）",
    nameEn: "Hurler Syndrome (Mucopolysaccharidosis Type I)",
    nanbyoNumber: 19,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "α-L-イズロニダーゼ欠乏によりデルマタン硫酸・ヘパラン硫酸が全身組織に蓄積するムコ多糖症の最重症型。早期から多臓器障害が進行し、精神発達遅滞・心弁膜症・気道閉塞をきたす。",
    symptoms: [
      "精神発達遅滞・退行（重症型）",
      "特徴的顔貌（大頭・粗な顔つき・鼻橋低位）",
      "骨変形（多発性骨異形成症）",
      "心弁膜症（僧帽弁・大動脈弁）",
      "反復性耳感染・難聴",
      "肝脾腫",
      "角膜混濁",
      "気道閉塞・呼吸障害",
    ],
    causes:
      "IDUA遺伝子変異によるα-L-イズロニダーゼ欠乏。ハーラー（重症）・シャイエ（軽症）・ハーラー/シャイエ（中間型）の3表現型が存在する。",
    diagnosis:
      "尿中ムコ多糖定量・分画（デルマタン硫酸・ヘパラン硫酸増加）。白血球/線維芽細胞でのα-L-イズロニダーゼ活性測定。IDUA遺伝子検査。新生児マススクリーニング（一部施設）。",
    treatment:
      "酵素補充療法（ラロニダーゼ：週1回静注）：非神経症状改善に有効。造血幹細胞移植（HSCT）：2歳以前の早期実施で神経進行を抑制。",
    prognosis:
      "重症型（ハーラー）は治療なしでは10歳前後に死亡。HSCT早期実施で知的発達・生命予後が大幅改善。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hurler+Syndrome+Mucopolysaccharidosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/317",
  },
  {
    slug: "hunter-syndrome",
    name: "ハンター症候群（ムコ多糖症II型）",
    nameEn: "Hunter Syndrome (Mucopolysaccharidosis Type II)",
    nanbyoNumber: 20,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "イズロン酸-2-スルファターゼ欠乏によるムコ多糖症で、X染色体連鎖劣性遺伝のため男性のみ発症。重症型（神経障害あり）と軽症型に分かれる。特徴的顔貌・多発性骨異形成・心弁膜症を呈する。",
    symptoms: [
      "特徴的顔貌（粗い顔つき・大頭）",
      "精神発達遅滞・行動障害（重症型）",
      "多発性骨異形成症",
      "心弁膜症・心筋症",
      "難聴",
      "肝脾腫",
      "関節拘縮",
      "皮膚結節（特徴的：肩甲骨周囲の象牙様皮膚変化）",
    ],
    causes:
      "IDS遺伝子（Xq28）変異によるイズロン酸-2-スルファターゼ欠乏。デルマタン硫酸とヘパラン硫酸が全身組織に蓄積する。X連鎖なので女性はキャリアで表現型なし（通常）。",
    diagnosis:
      "尿中ムコ多糖定量（デルマタン硫酸・ヘパラン硫酸増加）。白血球/血清イズロン酸-2-スルファターゼ活性測定（著明低下）。IDS遺伝子検査。",
    treatment:
      "酵素補充療法（イデュルスルファーゼ：週1回静注）：体性症状改善に有効だが脳関門を通過できず神経症状には限定的。髄腔内投与製剤が開発中。造血幹細胞移植。",
    prognosis:
      "重症型は10〜20代で死亡することが多い。軽症型は比較的長命で社会生活可能な例もある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hunter+Syndrome+Mucopolysaccharidosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/318",
  },
  {
    slug: "morquio-syndrome",
    name: "モルキオ症候群（ムコ多糖症IV型）",
    nameEn: "Morquio Syndrome (Mucopolysaccharidosis Type IV)",
    nanbyoNumber: 21,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "ガラクトース-6-硫酸スルファターゼ（IV-A型）またはβ-ガラクトシダーゼ（IV-B型）欠乏により、ケラタン硫酸が全身に蓄積するムコ多糖症。骨格・関節病変が主体で知能は正常。",
    symptoms: [
      "低身長（成人身長80〜120cm）",
      "脊柱側弯・後弯",
      "胸郭変形（鳩胸・漏斗胸）",
      "環軸椎不安定症（頸髄圧迫リスク）",
      "関節弛緩・関節痛",
      "角膜混濁",
      "難聴",
      "歯エナメル質形成不全",
    ],
    causes:
      "GALNS遺伝子（IV-A型）またはGLB1遺伝子（IV-B型）変異。ケラタン硫酸およびコンドロイチン-6-硫酸の分解障害により骨・軟骨・角膜等に蓄積する。",
    diagnosis:
      "尿中ケラタン硫酸測定（増加）。白血球/線維芽細胞での酵素活性測定。GALNS遺伝子検査。骨格X線検査（多発性骨異形成症・環軸椎不安定）。頸椎MRI（脊髄圧迫評価）。",
    treatment:
      "酵素補充療法（エロスルファーゼアルファ：週1回静注）。環軸椎不安定：外科的固定術（脊髄麻痺予防に重要）。整形外科的管理（脊柱・関節）。補装具・リハビリテーション。",
    prognosis:
      "知能は正常。骨格変形の程度により機能障害が異なる。適切な管理で長期生存可能。頸髄圧迫が最大の生命リスク。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Morquio+Syndrome+Mucopolysaccharidosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/320",
  },
  {
    slug: "ra-refractory",
    name: "難治性関節リウマチ",
    nameEn: "Refractory Rheumatoid Arthritis",
    category: "免疫・自己免疫疾患",
    categorySlug: "autoimmune",
    overview:
      "複数の疾患修飾性抗リウマチ薬（DMARDs）や生物学的製剤に反応せず、疾患活動性が持続する難治性の関節リウマチ。関節破壊・機能障害が進行し、生活の質が著しく低下する。",
    symptoms: [
      "多発性関節炎（腫脹・疼痛・熱感：小関節優位）",
      "朝のこわばり（1時間以上）",
      "関節破壊・変形（進行例）",
      "関節外症状（間質性肺炎・血管炎・皮下結節）",
      "貧血・全身倦怠感",
      "眼症状（強膜炎・上強膜炎）",
    ],
    causes:
      "自己免疫機序（抗CCP抗体・リウマトイド因子陽性）によりT細胞・B細胞・マクロファージが活性化し滑膜炎を持続させる。難治性の機序は未解明だが遺伝的素因・環境因子・サイトカイン調節異常が関与。",
    diagnosis:
      "2010年ACR/EULAR分類基準。DAS28・SDAI等の疾患活動性スコア。MRI・超音波（滑膜炎・骨びらん評価）。複数の生物学的製剤治療失敗の確認。",
    treatment:
      "csDMARDs（メトトレキサートを基本）に加え、bDMARDs（TNF阻害薬・IL-6阻害薬・アバタセプト）またはtsDMARDs（JAK阻害薬：トファシチニブ・バリシチニブ等）を選択・変更。",
    prognosis:
      "難治性例は関節破壊・機能障害が進行し、QOLが著しく低下する。新規作用機序の薬剤開発により予後は改善傾向にある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Refractory+Rheumatoid+Arthritis",
  },
  {
    slug: "ankylosing-spondylitis",
    name: "強直性脊椎炎",
    nameEn: "Ankylosing Spondylitis",
    nanbyoNumber: 271,
    category: "免疫・自己免疫疾患",
    categorySlug: "autoimmune",
    overview:
      "仙腸関節・脊椎を中心とする慢性炎症性疾患。HLA-B27との強い関連を示し、若年男性に多い。進行すると脊椎が竹様に癒合する「竹の節状脊椎」を形成し、可動域が著しく制限される。",
    symptoms: [
      "炎症性腰背部痛（安静時・夜間に悪化、運動で改善）",
      "朝のこわばり",
      "仙腸関節炎（臀部痛）",
      "脊椎可動域制限（頸椎・胸椎・腰椎）",
      "末梢関節炎（股関節・肩関節）",
      "虹彩炎（急性前部ぶどう膜炎）",
      "アキレス腱付着部炎",
    ],
    causes:
      "HLA-B27（日本人患者の約80-90%が陽性）と腸内細菌叢の関与が示唆される。IL-17・IL-23経路・TNFが主要な炎症サイトカイン。腸管免疫との関連（クローン病合併が多い）も指摘される。",
    diagnosis:
      "改訂ニューヨーク基準（X線で仙腸関節炎確認）またはASSAS基準（MRI）。HLA-B27検査。炎症マーカー（CRP・ESR）。MRI（仙腸関節炎・脂肪沈着）。",
    treatment:
      "NSAIDs（第一選択）。生物学的製剤（TNF阻害薬：エタネルセプト・インフリキシマブ等；IL-17A阻害薬：セクキヌマブ・イキセキズマブ）。リハビリテーション（姿勢保持・可動域維持）。",
    prognosis:
      "早期治療で炎症を抑制できるが、放置すると脊椎融合が進行し不可逆的可動域制限が残る。生物学的製剤により予後は大幅に改善した。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Ankylosing+Spondylitis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/3659",
  },
  {
    slug: "egpa",
    name: "好酸球性多発血管炎性肉芽腫症",
    nameEn: "Eosinophilic Granulomatosis with Polyangiitis",
    nanbyoNumber: 45,
    category: "免疫・自己免疫疾患",
    categorySlug: "autoimmune",
    overview:
      "気管支喘息・副鼻腔炎・末梢血好酸球増多を背景に発症するANCA関連血管炎。好酸球浸潤・肉芽腫形成を特徴とし、末梢神経・心臓・皮膚・消化管・腎臓を障害する。旧称：チャーグ・ストラウス症候群。",
    symptoms: [
      "気管支喘息（重症・難治性）",
      "副鼻腔炎・鼻ポリープ",
      "末梢神経障害（多発単神経炎：四肢の感覚・運動障害）",
      "皮膚紫斑・皮下結節",
      "心筋炎・心膜炎（予後規定因子）",
      "消化管出血・穿孔",
      "腎炎（糸球体腎炎）",
    ],
    causes:
      "原因不明。ANCA（主にMPO-ANCA）関連。IL-5を介した好酸球の過剰活性化が中心的役割を果たす。Th2優位免疫応答・IgE高値。喘息治療薬（ロイコトリエン拮抗薬）との関連が議論されている。",
    diagnosis:
      "2022年ACR/EULAR分類基準。末梢血好酸球増多（>10%または>1000/μL）。MPO-ANCA（約40%陽性）。組織生検（好酸球浸潤・肉芽腫・壊死性血管炎）。",
    treatment:
      "高用量グルココルチコイド（第一選択）。重症例（5因子スコア≥1）：シクロホスファミド併用。再発・難治例：メポリズマブ（抗IL-5抗体：ANCA陰性例に特に有効）・リツキシマブ。",
    prognosis:
      "心病変合併例は予後不良（主要死因）。適切な治療で85%以上が寛解達成。再発率は30〜40%。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Eosinophilic+Granulomatosis+Polyangiitis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4802",
  },
  {
    slug: "mpa",
    name: "顕微鏡的多発血管炎",
    nameEn: "Microscopic Polyangiitis",
    nanbyoNumber: 44,
    category: "免疫・自己免疫疾患",
    categorySlug: "autoimmune",
    overview:
      "MPO-ANCAが病因に関与する小型血管炎で、壊死性半月体形成糸球体腎炎と肺毛細血管炎（肺胞出血）を主病変とする。肉芽腫形成を伴わない点でEGPA・GPA（旧ウェゲナー）と区別される。",
    symptoms: [
      "急速進行性糸球体腎炎（血尿・蛋白尿・急性腎不全）",
      "肺胞出血（血痰・喀血・呼吸困難）",
      "間質性肺炎",
      "発熱・体重減少・全身倦怠感",
      "皮膚紫斑・網状皮斑",
      "末梢神経障害",
    ],
    causes:
      "MPO-ANCA（myeloperoxidase-ANCA）が好中球を過剰活性化し、小型血管に壊死性炎症を引き起こす。遺伝的素因（HLA等）と環境因子（感染・薬剤）の関与が推定される。",
    diagnosis:
      "MPO-ANCA測定（約70%陽性）。腎生検（壊死性半月体形成糸球体腎炎・免疫複合体沈着なし）。胸部CT（肺胞出血・間質性肺炎）。腎機能・尿沈渣。",
    treatment:
      "寛解導入：高用量グルココルチコイド+シクロホスファミドまたはリツキシマブ。重症（肺胞出血・透析要）：血漿交換追加。寛解維持：アザチオプリンまたはリツキシマブ。",
    prognosis:
      "早期治療で85%以上が寛解。ただし腎機能回復は部分的なことが多く、末期腎不全に至る例もある。5年生存率は約80%。再発率は30〜50%。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Microscopic+Polyangiitis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4804",
  },
  {
    slug: "hereditary-spherocytosis",
    name: "遺伝性球状赤血球症",
    nameEn: "Hereditary Spherocytosis",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "赤血球膜タンパク質（アンキリン・スペクトリン・バンド3等）の遺伝的異常により赤血球が球状化し、脾臓で破壊される溶血性貧血。常染色体優性遺伝が多く、黄疸・貧血・脾腫が三主徴。",
    symptoms: [
      "溶血性貧血（黄疸・蒼白）",
      "脾腫",
      "胆石症（ビリルビン胆石：若年から）",
      "溶血発作（感染・ストレスで急性悪化）",
      "再生不良発作（パルボウイルスB19感染で急激な貧血）",
      "新生児黄疸（重症例）",
    ],
    causes:
      "ANK1（アンキリン）・SPTB（βスペクトリン）・SLC4A1（バンド3）・EPB42（バンド4.2）・SPTA1等の遺伝子変異。膜スケルトン異常により赤血球の変形能が低下し球状化・脾臓での早期破壊をきたす。",
    diagnosis:
      "末梢血塗抹（球状赤血球の増加）。網状赤血球増加・間接ビリルビン高値・ハプトグロビン低値。浸透圧脆弱性試験・EMA結合試験・アシジファイドグリセロール溶血試験。遺伝子検査。",
    treatment:
      "葉酸補充。輸血（重症溶血発作・再生不良発作時）。脾摘（中等症以上：溶血改善の根本的治療）。胆嚢摘出術（胆石合併時）。",
    prognosis:
      "多くは比較的良好。脾摘後は溶血が著明に改善するが、感染リスク（莢膜菌）が増加するためワクチン接種が必須。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hereditary+Spherocytosis",
  },
  {
    slug: "sickle-cell-disease",
    name: "鎌状赤血球症",
    nameEn: "Sickle Cell Disease",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "βグロビン遺伝子変異（Glu6Val）により産生される異常ヘモグロビンS（HbS）が低酸素状態で重合し赤血球を鎌状に変形させる常染色体劣性遺伝疾患。血管閉塞・溶血性貧血・臓器障害が主病態。",
    symptoms: [
      "疼痛発作（血管閉塞クリーゼ：骨・胸・腹部の激烈な疼痛）",
      "急性胸部症候群（胸痛・発熱・呼吸困難）",
      "脳卒中（小児期から）",
      "慢性溶血性貧血",
      "脾機能亢進→脾萎縮（感染脆弱性）",
      "腎臓病・肺高血圧症",
      "骨壊死（大腿骨頭・上腕骨頭）",
    ],
    causes:
      "HBB遺伝子第6コドン変異（Glu→Val）によりHbSが産生される。脱酸素化時にHbSが重合・赤血球が鎌状化し微小血管を閉塞する。ホモ接合（HbSS）が最重症。アフリカ・中東・地中海沿岸に多い。",
    diagnosis:
      "ヘモグロビン電気泳動・HPLC（HbS定量）。鎌状化試験。末梢血塗抹（鎌状赤血球）。新生児マススクリーニング（一部国で実施）。",
    treatment:
      "ヒドロキシウレア（HbF誘導・疼痛発作・急性胸部症候群を減少）。クリーゼ：輸液・鎮痛・輸血。定期輸血（脳卒中高リスク児）。造血幹細胞移植（根治的）。遺伝子治療（ベタベジン遺伝子療法・CRISPR）が承認・承認申請中。",
    prognosis:
      "適切な管理で成人への生存が可能。先進国では中央生存年齢40〜50歳以上。遺伝子治療により根治の可能性が高まっている。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Sickle+Cell+Disease",
  },
  {
    slug: "beta-thalassemia",
    name: "βサラセミア",
    nameEn: "Beta-Thalassemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "HBB遺伝子変異によりβグロビン鎖の産生が減少・消失し、αグロビン鎖が過剰となる溶血性貧血。地中海・中東・東南アジアに多い。重症型（サラセミア大：β0/β0）では輸血依存性の重篤な貧血をきたす。",
    symptoms: [
      "重篤な溶血性貧血（重症型：生後6ヶ月以降）",
      "骨髄外造血（顔面骨変形・肝脾腫・傍脊椎腫瘤）",
      "骨変形（頭蓋骨・顔面骨・四肢骨）",
      "鉄過剰症（輸血・吸収亢進）：心筋症・肝硬変・内分泌障害",
      "発育障害",
      "黄疸",
    ],
    causes:
      "HBB遺伝子変異（200種類以上）によりβグロビン産生が減少（β+）または消失（β0）。αグロビン鎖が過剰となり不溶性重合体を形成し赤血球前駆細胞の無効造血・溶血をきたす。",
    diagnosis:
      "末梢血塗抹（小球性低色素性赤血球・赤芽球）。ヘモグロビン電気泳動（HbA低下・HbF増加・HbA2増加）。HBB遺伝子検査。鉄代謝（フェリチン・トランスフェリン飽和度）。",
    treatment:
      "重症型：定期輸血（4〜6週毎）+デフェラシロクス等の鉄キレート療法。造血幹細胞移植（根治的：早期実施が重要）。遺伝子治療（ベタベジン：2022年FDA承認）。ルスパテルセプト（無効造血改善）。",
    prognosis:
      "鉄キレート療法の普及で予後は改善。遺伝子治療で根治の可能性が現実化。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Beta+Thalassemia",
  },
  {
    slug: "von-willebrand-disease-severe",
    name: "フォン・ヴィレブランド病（重症型）",
    nameEn: "Von Willebrand Disease (Severe)",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "フォン・ヴィレブランド因子（VWF）の量的・質的異常による先天性出血性疾患で最多頻度。重症型（3型）はVWFがほぼ完全欠損し、血友病A類似の重篤な出血症状を呈する。",
    symptoms: [
      "粘膜出血（鼻出血・歯肉出血・過多月経）",
      "皮下出血・内出血（重症型）",
      "関節内出血・筋肉内出血（3型：血友病様）",
      "手術・外傷時の過剰出血",
      "消化管出血",
    ],
    causes:
      "VWF遺伝子変異。1型（量的部分欠損・常染色体優性）、2型（質的異常・各種亜型）、3型（量的完全欠損・常染色体劣性）に分類される。VWFは血小板接着および第VIII因子のキャリアとして機能する。",
    diagnosis:
      "出血時間延長。VWF:Ag（抗原量）・VWF:RCo（リストセチン補因子活性）測定。第VIII因子活性測定。VWFマルチマー解析（2型の亜型判定）。VWF遺伝子検査。",
    treatment:
      "1型・一部2型：デスモプレシン（DDAVP：VWF放出を刺激）。重症型・デスモプレシン無効例：VWF含有第VIII因子製剤輸注。フィブリン糊・トラネキサム酸（補助療法）。",
    prognosis:
      "1〜2型は適切な管理で良好な生活を送れる。3型は重篤な出血エピソードが繰り返し起こりQOL低下が著しい。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Von+Willebrand+Disease",
  },
  {
    slug: "ttp",
    name: "血栓性血小板減少性紫斑病",
    nameEn: "Thrombotic Thrombocytopenic Purpura",
    nanbyoNumber: 64,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "ADAMTS13（VWF切断プロテアーゼ）の先天性欠損または後天性自己抗体による活性低下により、超大型VWFマルチマーが蓄積し全身の微小血管に血小板血栓を形成する希少血液疾患。",
    symptoms: [
      "血小板減少（紫斑・出血傾向）",
      "微小血管症性溶血性貧血（破砕赤血球・LDH高値）",
      "神経症状（意識障害・痙攣・局所神経症状）",
      "腎機能障害（蛋白尿・血尿・急性腎不全）",
      "発熱",
      "腹痛・悪心・嘔吐",
    ],
    causes:
      "後天性TTP：ADAMTS13に対する自己抗体（IgG）による活性阻害（活性<10%）。先天性TTP（アップショー・シュルマン症候群）：ADAMTS13遺伝子変異による酵素欠損。",
    diagnosis:
      "ADAMTS13活性測定（<10%が診断的）・抗ADAMTS13抗体測定。末梢血塗抹（破砕赤血球）。血小板数・LDH・ハプトグロビン・ビリルビン。HUS等との鑑別。",
    treatment:
      "後天性TTP：血漿交換（緊急・毎日）+コルチコステロイド+リツキシマブ（再発予防）。カプラシズマブ（抗VWF Nanobody：急性期の血栓形成抑制）。先天性TTP：血漿輸注（ADAMTS13補充）。",
    prognosis:
      "未治療では高致死率。血漿交換により死亡率は10〜20%まで低下。再発は30〜50%に起こる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Thrombotic+Thrombocytopenic+Purpura",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4843",
  },
  {
    slug: "short-bowel-syndrome",
    name: "短腸症候群",
    nameEn: "Short Bowel Syndrome",
    nanbyoNumber: 100,
    category: "消化器疾患",
    categorySlug: "digestive",
    overview:
      "外科的切除・先天性・腸管壊死等により小腸の機能的残存長が著しく短縮し、栄養・水分・電解質の吸収が不十分となる病態。残存腸管長・部位・回盲弁の有無により重症度が大きく異なる。",
    symptoms: [
      "慢性下痢・大量の水様便",
      "低栄養・体重減少",
      "脱水・電解質異常（低マグネシウム・低カリウム等）",
      "脂溶性ビタミン欠乏（A・D・E・K）",
      "ビタミンB12欠乏（回腸切除）",
      "腸管不全関連肝障害（IFALD）",
      "腎結石（シュウ酸尿症）",
    ],
    causes:
      "新生児：腸回転異常・腸閉鎖・壊死性腸炎。成人：広範囲小腸切除（腸間膜血管閉塞・クローン病・外傷）。機能的短腸症候群（放射線腸炎・難治性吸収不良症）。",
    diagnosis:
      "小腸残存長の確認（手術記録・消化管造影）。栄養評価（血清アルブミン・プレアルブミン・脂溶性ビタミン）。電解質・腎機能。24時間便・尿量測定。",
    treatment:
      "急性期：中心静脈栄養（TPN）による生命維持。適応期：経腸栄養の段階的導入・腸管リハビリテーション。テデュグルチド（GLP-2アナログ：腸管適応促進・TPN減量効果）。外科的治療（腸管延長術・小腸移植）。",
    prognosis:
      "残存小腸100cm以上かつ回盲弁温存で腸管自律が達成できる可能性が高い。TPN依存例は長期合併症（肝障害・感染・血栓）の管理が重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Short+Bowel+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/221",
  },
  {
    slug: "protein-losing-enteropathy",
    name: "蛋白漏出性胃腸症",
    nameEn: "Protein-Losing Enteropathy",
    nanbyoNumber: 103,
    category: "消化器疾患",
    categorySlug: "digestive",
    overview:
      "消化管粘膜からの血清蛋白の異常漏出により低蛋白血症をきたす病態。原発性（リンパ管拡張症・メネトリエ病）と続発性（炎症性腸疾患・心疾患・悪性リンパ腫等）に分類される。",
    symptoms: [
      "低蛋白血症・低アルブミン血症",
      "浮腫（下腿・顔面・腹腔）",
      "腹水・胸水",
      "免疫グロブリン低下による感染症易罹患性",
      "低コレステロール血症",
      "下痢・腹痛（原疾患による）",
    ],
    causes:
      "腸粘膜透過性亢進（炎症・潰瘍）・リンパ管拡張（腸管リンパ管拡張症・右心不全）・粘膜糜爛（メネトリエ病）等により血清蛋白が腸管腔に漏出し便中に排泄される。",
    diagnosis:
      "アルファ1アンチトリプシン糞便クリアランス（蛋白漏出の定量）。99mTc標識アルブミンシンチグラフィ（漏出部位同定）。原疾患の評価（内視鏡・CT・心エコー）。",
    treatment:
      "原疾患の治療が基本。原発性腸管リンパ管拡張症：低脂肪・中鎖脂肪酸（MCT）食。蛋白補充（アルブミン輸液：一時的）。オクトレオチド（リンパ流・漏出抑制）。",
    prognosis:
      "原疾患に依存する。原発性腸管リンパ管拡張症は食事療法で長期管理可能だが完治は困難。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Protein+Losing+Enteropathy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/219",
  },
  {
    slug: "intestinal-lymphangiectasia",
    name: "腸管リンパ管拡張症",
    nameEn: "Intestinal Lymphangiectasia",
    category: "消化器疾患",
    categorySlug: "digestive",
    overview:
      "腸管粘膜のリンパ管が拡張し、リンパ液が腸管腔に漏出する疾患。原発性（先天性リンパ管形成異常）と続発性（腸間膜リンパ節腫大・右心不全等）に分かれ、蛋白漏出性胃腸症の主要原因の一つ。",
    symptoms: [
      "低蛋白血症・低アルブミン血症",
      "浮腫（下肢・全身性）",
      "下痢・脂肪便",
      "リンパ球減少症（免疫不全）",
      "低コレステロール・低脂溶性ビタミン",
      "乳糜腹水・乳糜胸水",
    ],
    causes:
      "原発性：先天性リンパ管形成異常（VEGFR3・FOXC2・PROX1等の遺伝子変異）。続発性：悪性リンパ腫・Whipple病・腸間膜線維症・収縮性心外膜炎・右心不全。",
    diagnosis:
      "内視鏡検査（小腸粘膜の白色絨毛・乳糜漏出）。小腸生検（リンパ管拡張・リンパ球浸潤）。カプセル内視鏡・バルーン内視鏡（病変範囲評価）。リンパ管造影・MRリンパ管造影。",
    treatment:
      "原発性：低脂肪・MCT食（腸管リンパ圧低下）。蛋白補充。オクトレオチド（乳糜漏出抑制）。外科的治療（限局性病変）。続発性：原疾患治療。",
    prognosis:
      "原発性は慢性的経過で食事療法の継続が必要。適切な管理で比較的長期生存可能。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Intestinal+Lymphangiectasia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/220",
  },
  {
    slug: "porphyria-cutanea",
    name: "ポルフィリン症（皮膚型）",
    nameEn: "Porphyria Cutanea Tarda",
    nanbyoNumber: 274,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "ポルフィリン合成経路の酵素異常により光感受性物質が皮膚に蓄積する遺伝性・後天性疾患群。晩発性皮膚ポルフィリン症（PCT）が最多で、日光露出部に水疱・糜爛を繰り返す。",
    symptoms: [
      "日光露出部（顔・手背）の水疱・糜爛・色素沈着",
      "皮膚脆弱性（軽微な外傷で水疱形成）",
      "多毛症（顔面）",
      "瘢痕・石灰沈着",
      "尿の赤〜赤褐色変色（ポルフィリン排泄）",
      "肝障害（PCT）",
    ],
    causes:
      "PCT（最多）：UROD（ウロポルフィリノーゲン脱炭酸酵素）活性低下（先天性または後天性）。鉄過剰・アルコール・HCV感染・エストロゲンが誘因。先天性赤芽球性ポルフィリン症（CEP）：UROS遺伝子変異（常染色体劣性）。",
    diagnosis:
      "血清・尿・便ポルフィリン分画測定。ウッド灯（尿・皮膚の蛍光）。尿中ウロポルフィリン測定。UROD遺伝子検査（PCT遺伝性型）。",
    treatment:
      "PCT：誘因除去（禁酒・鉄過剰治療・HCV治療）。瀉血（鉄除去）。クロロキン・ヒドロキシクロロキン（ポルフィリン可溶化促進）。CEP：遮光（最重要）・輸血・造血幹細胞移植。",
    prognosis:
      "PCT：誘因除去で長期寛解可能。CEP：重症の光線過敏・溶血性貧血・骨変形を呈し予後不良例もある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Porphyria+Cutanea+Tarda",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5185",
  },
  {
    slug: "epidermolysis-bullosa",
    name: "表皮水疱症",
    nameEn: "Epidermolysis Bullosa",
    nanbyoNumber: 36,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "軽微な外傷や摩擦で皮膚・粘膜に水疱・糜爛が生じる先天性遺伝疾患群。皮膚基底膜関連蛋白の遺伝子変異により表皮・真皮の接着が障害される。単純型・接合部型・栄養障害型・キンドラー症候群に分類。",
    symptoms: [
      "軽微な摩擦・外傷での水疱・糜爛",
      "粘膜病変（口腔・咽頭・消化管・角膜）",
      "瘢痕・偽合指（指間の癒合）",
      "爪変形・脱落",
      "食道狭窄（栄養障害型）",
      "皮膚癌（扁平上皮癌：慢性創傷部位）",
      "成長障害・貧血",
    ],
    causes:
      "ケラチン（KRT5/KRT14）・コラーゲンXVII（COL17A1）・ラミニン332（LAMA3/LAMB3/LAMC2）・コラーゲンVII（COL7A1：DEB）等の遺伝子変異。",
    diagnosis:
      "皮膚生検（電子顕微鏡・免疫蛍光法）。遺伝子検査（確定診断・型分類）。",
    treatment:
      "根本治療：遺伝子治療（クリトゥキセプタゲン・アウトルパルボベック：COL7A1遺伝子再構成T細胞）が実用化。支持療法：創傷ケア・非固着性ドレッシング・感染予防・栄養管理・疼痛管理。食道拡張術（狭窄）。",
    prognosis:
      "単純型は比較的軽症。栄養障害型・接合部型重症例は慢性難治性创傷・食道狭窄・皮膚癌リスクがあり予後不良例がある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Epidermolysis+Bullosa",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/261",
  },
  {
    slug: "darier-disease",
    name: "ダリエー病",
    nameEn: "Darier Disease",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "ATP2A2遺伝子変異による常染色体優性遺伝の角化症。皮脂分泌部位（脂漏部位）に特徴的な角化性丘疹が多発し、体臭・感染を伴いやすい。紫外線・熱・発汗が誘因となり増悪する。",
    symptoms: [
      "皮脂分泌部位（顔面・頸部・胸背部）の角化性褐色丘疹",
      "特徴的な爪変形（V字状亀裂・白赤縦線・脆弱性）",
      "口腔粘膜白色丘疹",
      "手掌・足底の角化性丘疹",
      "体臭（細菌・真菌の二次感染による）",
      "精神神経症状（双極性障害・てんかん合併が多い）",
    ],
    causes:
      "ATP2A2遺伝子（SERCA2：小胞体Ca2+ATPase）変異による細胞内Ca2+調節障害。ケラチノサイトの接着（デスモゾーム）と分化（角化）が障害され、棘融解・角化異常を生じる。",
    diagnosis:
      "臨床所見（特徴的皮疹・爪変形）。皮膚生検（棘融解・角化不全・特徴的角質内細胞変化）。ATP2A2遺伝子検査（確定診断）。",
    treatment:
      "誘因回避（遮光・過熱防止・発汗抑制）。レチノイド（アシトレチン・アダパレン）。局所ステロイド・抗菌薬・抗真菌薬（感染合併時）。重症例：全身レチノイド療法。",
    prognosis:
      "慢性進行性だが軽症化・安定化することもある。夏季・発汗で増悪しやすい。精神神経合併症の管理も重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Darier+Disease",
  },
  {
    slug: "lhon",
    name: "レーベル遺伝性視神経症",
    nameEn: "Leber Hereditary Optic Neuropathy",
    nanbyoNumber: 129,
    category: "眼科疾患",
    categorySlug: "ophthalmological",
    overview:
      "ミトコンドリアDNA点変異による遺伝性視神経症。母系遺伝を示し、主に若年男性に急性〜亜急性の視力低下をきたす。両眼が数週間〜数ヶ月の間隔で侵され、中心視野が著明に障害される。",
    symptoms: [
      "急性〜亜急性の視力低下（中心視野欠損）",
      "色覚異常",
      "光感覚異常",
      "視神経乳頭の充血・腫脹（急性期）→萎縮",
      "両眼性（片眼発症後、数週〜数ヶ月で対側発症）",
      "一部で不整脈・神経症状の合併",
    ],
    causes:
      "ミトコンドリアDNA点変異（m.11778G>A/MT-ND4が最多・約70%；m.3460G>A・m.14484T>C）。複合体I（NADH脱水素酵素）の機能低下によりATP産生障害と活性酸素産生亢進が視神経節細胞を障害する。",
    diagnosis:
      "ミトコンドリアDNA変異解析（血液・毛根等）。眼底検査（視神経乳頭毛細血管拡張・腫脹・萎縮）。視野検査（中心暗点）。光干渉断層計（OCT：神経線維層菲薄化）。",
    treatment:
      "イデベノン（CoQ10類似体：複合体I bypassして電子伝達を改善）：急性期・中心視力が残存する例に有効性の証拠あり。視覚補助機器。遺伝子治療（AAV2/MT-ND4）の臨床試験進行中。",
    prognosis:
      "m.14484変異は自然回復率が比較的高い（約50%）。m.11778変異は回復しにくく低視力が固定することが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Leber+Hereditary+Optic+Neuropathy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/477",
  },
  {
    slug: "oculocutaneous-albinism",
    name: "眼皮膚白皮症",
    nameEn: "Oculocutaneous Albinism",
    category: "眼科疾患",
    categorySlug: "ophthalmological",
    overview:
      "メラニン合成経路の遺伝的障害により皮膚・毛髪・眼のメラニン色素が先天的に欠乏または減少する疾患群。1型（TYR遺伝子変異・最重症）から7型まで分類される常染色体劣性遺伝疾患。",
    symptoms: [
      "皮膚・毛髪の色素欠如（白色〜金色）",
      "眼の色素欠如（虹彩：青灰色・光彩が透過性）",
      "眼振（水平性眼振）",
      "視力低下（中心窩低形成）",
      "眼瞼下垂・斜視",
      "強い羞明",
      "皮膚癌リスクの著明な増大",
    ],
    causes:
      "TYR（チロシナーゼ：OCA1）・OCA2・TYRP1（OCA3）・SLC45A2（OCA4）等の遺伝子変異によりメラニン合成が障害される。Hermansky-Pudlak・Chediak-Higashi症候群は血小板機能・免疫異常を合併する症候性白皮症。",
    diagnosis:
      "臨床所見（色素欠如・眼振・羞明）。眼科検査（視力・眼振・中心窩形成評価：ERG・OCT）。分子遺伝学的検査（型分類・遺伝カウンセリング）。",
    treatment:
      "根本治療なし。遮光（サングラス・帽子・日焼け止め：皮膚癌予防）。屈折矯正（眼鏡・コンタクトレンズ）。斜視・眼瞼下垂の外科的矯正。定期的皮膚癌スクリーニング。",
    prognosis:
      "適切な遮光で皮膚癌リスクを軽減できる。視力障害は不可逆だが補助具・教育支援で社会参加可能。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Oculocutaneous+Albinism",
  },
  {
    slug: "restrictive-cardiomyopathy",
    name: "拘束型心筋症",
    nameEn: "Restrictive Cardiomyopathy",
    nanbyoNumber: 58,
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "心筋の硬化・繊維化により拡張機能が著しく障害される心筋症。心室腔は正常または縮小、心房は著明に拡大する。収縮機能は比較的保たれるが充満圧の上昇により心不全症状をきたす。",
    symptoms: [
      "労作時呼吸困難・起坐呼吸",
      "浮腫（下腿・腹部）",
      "腹水・肝腫大（右心不全）",
      "動悸・不整脈",
      "全身倦怠感",
      "血栓塞栓症（心腔内血栓）",
    ],
    causes:
      "原発性（特発性・サルコメア遺伝子変異）。二次性：アミロイドーシス（心臓アミロイドーシス）・サルコイドーシス・ヘモクロマトーシス・ファブリー病・放射線心筋症・好酸球性心筋炎。",
    diagnosis:
      "心エコー（拡張機能障害・両房拡大・心室壁厚正常〜増加）。心臓MRI（繊維化評価：LGE）。心筋生検（原因疾患の確定）。心臓カテーテル（充満圧測定）。",
    treatment:
      "根本治療：原因疾患治療（アミロイドーシス：タファミジス等）。対症療法：利尿薬（慎重に：前負荷減少による低心拍出に注意）・抗不整脈薬・抗凝固薬。難治性心不全：心臓移植。",
    prognosis:
      "予後不良が多い。アミロイドーシス等の原因疾患に依存。5年生存率は特発性で約50%。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Restrictive+Cardiomyopathy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/485",
  },
  {
    slug: "arvc",
    name: "不整脈原性右室心筋症",
    nameEn: "Arrhythmogenic Right Ventricular Cardiomyopathy",
    nanbyoNumber: 57,
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "右室心筋が脂肪・繊維組織に置換される遺伝性心筋症。致死的心室不整脈・突然死・右心不全をきたす。デスモゾームタンパク質をコードする遺伝子変異が多く、若年スポーツ選手の突然死原因となる。",
    symptoms: [
      "動悸・不整脈（心室性期外収縮・心室頻拍）",
      "失神・前失神",
      "突然死（特に若年スポーツ時）",
      "右心不全症状（浮腫・腹水）",
      "胸痛",
      "無症状（健診発見）",
    ],
    causes:
      "PKP2（プラコフィリン2：最多）・DSP・DSC2・DSG2・JUP等のデスモゾーム遺伝子変異。デスモゾームの構造異常が心筋細胞の脱落と脂肪・繊維組織への置換を引き起こす。",
    diagnosis:
      "2010年修正タスクフォース基準（心電図・心エコー・MRI・組織検査・家族歴・遺伝子の総合評価）。心臓MRI（右室壁運動異常・脂肪浸潤・LGE）。電気生理検査。",
    treatment:
      "生活指導（激しいスポーツの制限が最重要）。抗不整脈薬（ソタロール・アミオダロン）。ICD植込み（突然死予防）。カテーテルアブレーション（頻回VT）。心不全治療。心臓移植（末期心不全）。",
    prognosis:
      "適切な管理（スポーツ制限・ICD）で突然死リスクを著明に軽減できる。右心不全の進行に伴い予後が悪化する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Arrhythmogenic+Right+Ventricular+Cardiomyopathy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/486",
  },
  {
    slug: "lvnc",
    name: "心筋緻密化障害",
    nameEn: "Left Ventricular Non-Compaction",
    nanbyoNumber: 56,
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "左室心筋の胎生期緻密化過程の障害により、非緻密化層（海綿状筋層：トラベキュラ）と緻密化層の二層構造が形成される先天性心筋症。心不全・不整脈・血栓塞栓症の三徴が特徴。",
    symptoms: [
      "心不全（収縮機能障害・拡張機能障害）",
      "動悸・心室性不整脈",
      "血栓塞栓症（脳卒中・末梢塞栓）",
      "失神",
      "小児例では心不全症状・チアノーゼ",
      "無症状（偶発的発見）",
    ],
    causes:
      "遺伝性（MYH7・MYBPC3・TNNT2・LDB3等のサルコメア/Z帯遺伝子変異）が約30〜40%。孤発性も多い。神経筋疾患・代謝疾患・染色体異常との合併もある。",
    diagnosis:
      "心エコー（Jenni基準：非緻密化層/緻密化層比>2、カラードプラでのトラベキュラ間陥入血流）。心臓MRI（Petersen基準：緻密化層/非緻密化層≦0.6）。遺伝子検査。",
    treatment:
      "心不全：RAAS阻害薬・β遮断薬・利尿薬。不整脈：抗不整脈薬・ICD。血栓塞栓症：抗凝固療法。難治性心不全：心臓移植・補助人工心臓。",
    prognosis:
      "表現型は多様で無症状〜重篤な心不全まで幅広い。突然死・血栓塞栓症リスクの管理が重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Left+Ventricular+Non-Compaction",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/488",
  },
  {
    slug: "long-qt-syndrome",
    name: "遺伝性QT延長症候群",
    nameEn: "Congenital Long QT Syndrome",
    nanbyoNumber: 281,
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "心臓イオンチャネル遺伝子変異により心電図QT間隔が延長し、torsades de pointes（TdP）型心室頻拍・心室細動・突然死をきたす遺伝性不整脈症候群。1型〜17型に分類され、LQT1・2・3型が約90%。",
    symptoms: [
      "失神（特に運動時・感情ストレス時・安静時）",
      "心臓突然死（若年者）",
      "動悸",
      "無症状（偶発的QT延長発見）",
      "LQT1：運動（水泳）で誘発",
      "LQT2：音刺激（目覚まし時計等）で誘発",
      "LQT3：安静・睡眠中に誘発",
    ],
    causes:
      "KCNQ1（Iks：LQT1）・KCNH2（Ikr：LQT2）・SCN5A（INa：LQT3）等のイオンチャネル遺伝子変異。カリウム・ナトリウムチャネルの機能異常により心筋再分極が延長しTdPが誘発される。",
    diagnosis:
      "心電図（QTc>460ms女性・>440ms男性）。ホルター心電図。運動負荷試験（LQT1：異常QT延長）。遺伝子検査（確定診断・型判定）。家族内スクリーニング。",
    treatment:
      "誘因回避（QT延長薬剤・低K血症の回避）・生活指導（LQT1：激しいスポーツ制限）。β遮断薬（LQT1・2に有効）。ICD（高リスク例・失神既往）。交感神経節切除術（左心臓交感神経切除）。",
    prognosis:
      "適切な治療で突然死リスクを大幅軽減できる。無治療では10年以内に約10〜20%が死亡または心停止を経験。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Long+QT+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4831",
  },
  {
    slug: "brugada-syndrome",
    name: "ブルガダ症候群",
    nameEn: "Brugada Syndrome",
    nanbyoNumber: 282,
    category: "心・血管疾患",
    categorySlug: "cardiovascular",
    overview:
      "右脚ブロック様パターンとV1〜V3誘導のST上昇を特徴とする心電図異常と、心室細動による失神・突然死をきたす遺伝性不整脈症候群。アジア人・中年男性に多く、睡眠中の突然死との関連が示唆される。",
    symptoms: [
      "心臓突然死・蘇生後状態",
      "失神（特に安静・睡眠時・発熱時）",
      "心室細動",
      "夜間の喘ぎ様呼吸・うめき声（ポックリ病と類似）",
      "無症状（家族スクリーニング発見）",
    ],
    causes:
      "SCN5A遺伝子変異（INa低下：約20〜30%）が最多。右室流出路の心外膜側の特殊電気生理学的特性（Ito電流優位）が基質。発熱・ナトリウムチャネル遮断薬・迷走神経亢進が誘発因子。",
    diagnosis:
      "自然発症または薬物誘発（アジマリン・フレカイニド）でのタイプ1ブルガダ型心電図（coved型ST上昇）。電気生理検査（心室細動誘発の補助診断的価値は議論あり）。SCN5A遺伝子検査。",
    treatment:
      "ICD植込み（心室細動・失神既往の高リスク例）。キニジン（TdP・嵐への対処）。カテーテルアブレーション（右室流出路の異常基質除去）。発熱・誘発薬剤の回避。",
    prognosis:
      "無症状例のリスク層別化が重要課題。症状既往例（失神・心停止蘇生）はICD植込みで突然死を予防。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Brugada+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4832",
  },
  {
    slug: "nephronophthisis",
    name: "ネフロン癆",
    nameEn: "Nephronophthisis",
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "腎尿細管基底膜の遺伝的異常により進行性の腎線維化・萎縮をきたす常染色体劣性遺伝疾患。小児〜若年者における末期腎不全の主要原因の一つ。網膜変性（Joubert症候群・Senior-Løken症候群）等の眼外症状を合併することがある。",
    symptoms: [
      "多尿・多飲（尿濃縮障害）",
      "塩分喪失（低ナトリウム血症）",
      "進行性腎機能低下",
      "貧血（正球性正色素性）",
      "成長障害",
      "網膜色素変性（Senior-Løken症候群合併例）",
      "小脳失調・精神発達遅滞（Joubert症候群合併例）",
    ],
    causes:
      "NPHP1（約25%）・NPHP2〜20等の線毛関連遺伝子変異。一次線毛機能異常（シリオパチー）が腎尿細管細胞の維持・修復を障害し、間質性腎炎・線維化を引き起こす。",
    diagnosis:
      "腎超音波（腎サイズ正常〜小、皮髄境界不明瞭、腎皮質嚢胞）。腎生検（尿細管基底膜肥厚・断裂・間質線維化）。NPHP遺伝子パネル検査。眼科検査（網膜変性）。",
    treatment:
      "根本治療なし。対症療法（水分・塩分補充、貧血管理、血圧管理）。進行した末期腎不全：透析・腎移植（最も有効）。",
    prognosis:
      "進行性腎不全は不可避で多くが若年（10〜20代）に末期腎不全に至る。腎移植後は腎外症状も含め生存率・QOLが改善する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Nephronophthisis",
  },
  {
    slug: "bartter-syndrome",
    name: "バーター症候群",
    nameEn: "Bartter Syndrome",
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "ヘンレ係蹄上行脚でのNaCl再吸収に関わるイオントランスポーターの遺伝的欠損により、低カリウム血症・代謝性アルカローシス・低塩素血症・血圧正常〜低値をきたす常染色体劣性遺伝疾患。",
    symptoms: [
      "低カリウム血症（筋力低下・筋痙攣・麻痺）",
      "代謝性アルカローシス",
      "多尿・多飲（尿濃縮障害）",
      "低血圧〜正常血圧（血圧上昇なし）",
      "成長障害（小児）",
      "新生児型（母体羊水過多・早産・重篤な電解質異常）",
      "腎石灰化（一部の型）",
    ],
    causes:
      "NKCC2（SLC12A1）・ROMK（KCNJ1）・ClC-Kb（CLCNKB）・バルチン（BSND）・CaSR（CASR）等の遺伝子変異。尿細管でのNa・K・Cl再吸収障害によりレニン・アルドステロンが高値となるが血圧は上昇しない。",
    diagnosis:
      "血清電解質（低K・低Cl・代謝性アルカローシス）。尿電解質（高K尿・高Cl尿）。血漿レニン・アルドステロン高値。遺伝子検査（型分類）。腎石灰化（超音波・CT）。",
    treatment:
      "電解質補充（KCl・MgCl2）。プロスタグランジン合成阻害薬（インドメタシン：特に新生児・乳幼児型）。スピロノラクトン・アミロライド（カリウム保持）。",
    prognosis:
      "適切な治療で電解質管理は可能だが完治は難しく生涯治療が必要。重症型は腎機能低下が進行することがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Bartter+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4965",
  },
  {
    slug: "congenital-cataract-metabolic",
    name: "代謝性先天性白内障",
    nameEn: "Metabolic Congenital Cataract",
    category: "眼科疾患",
    categorySlug: "ophthalmological",
    overview:
      "ガラクトース血症・ウィルソン病・ファブリー病・低カルシウム血症等の代謝異常に続発して生じる白内障。代謝産物の水晶体への蓄積や栄養障害が水晶体の透明性を障害する。",
    symptoms: [
      "視力低下（程度は原因疾患・発症時期による）",
      "弱視（乳幼児期発症例）",
      "羞明",
      "原因代謝疾患の症状（肝障害・神経症状等）",
      "眼振（重症弱視例）",
    ],
    causes:
      "ガラクトース血症（ガラクチトール蓄積）・ウィルソン病（銅沈着：ひまわり白内障）・ファブリー病（糖脂質沈着：クロス状混濁）・低カルシウム血症・副甲状腺機能低下症・糖尿病等の代謝異常。",
    diagnosis:
      "細隙灯顕微鏡（白内障の形態が代謝疾患に特徴的）。原因代謝疾患の血液・尿検査。遺伝子検査。",
    treatment:
      "原因代謝疾患の治療（最優先）。白内障手術（視力障害・弱視進行リスクに応じて）。術後光学矯正・弱視訓練（小児例）。",
    prognosis:
      "原因疾患の早期治療で白内障の進行を抑制できる場合がある。早期手術・弱視治療で視機能を改善できる例もある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Metabolic+Congenital+Cataract",
  },
  {
    slug: "chronic-intestinal-pseudo-obstruction",
    name: "慢性腸管偽性閉塞症",
    nameEn: "Chronic Intestinal Pseudo-Obstruction",
    nanbyoNumber: 101,
    category: "消化器疾患",
    categorySlug: "digestive",
    overview:
      "機械的閉塞がないにもかかわらず腸管蠕動が著しく障害され、繰り返す腸閉塞様症状（腹部膨満・嘔吐・排便障害）をきたす慢性疾患。腸管平滑筋または腸管神経の先天性・後天性異常が原因。",
    symptoms: [
      "腹部膨満（著明）",
      "悪心・嘔吐",
      "腹痛",
      "便秘または下痢",
      "栄養障害（吸収不良・低栄養）",
      "細菌異常増殖（小腸内細菌過増殖症候群）",
    ],
    causes:
      "先天性：腸管神経叢異常（神経細胞性）・平滑筋異常（筋細胞性）。後天性：膠原病（強皮症・SLE）・糖尿病性自律神経障害・傍腫瘍性（抗Hu抗体等）・線維筋症。",
    diagnosis:
      "腹部X線・CT（巨大腸管・ガス像）。消化管造影（器質的閉塞除外）。消化管通過時間測定。消化管生検（筋層・神経叢評価）。自律神経抗体検査。",
    treatment:
      "栄養管理（経腸栄養・中心静脈栄養）。腸管運動改善薬（ネオスチグミン・オクトレオチド）。小腸内細菌過増殖への抗菌薬。腸管減圧（内視鏡的・経皮的）。小腸移植（難治例）。",
    prognosis:
      "予後不良な例が多く、栄養管理・腸管減圧を繰り返しながら長期管理が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Chronic+Intestinal+Pseudo-Obstruction",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/215",
  },
  {
    slug: "congenital-factor-deficiency",
    name: "先天性凝固因子欠乏症（血友病以外）",
    nameEn: "Congenital Coagulation Factor Deficiency",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "第I・II・V・VII・X・XI・XIII因子の先天性欠乏による出血性疾患。血友病A（第VIII因子）・B（第IX因子）以外の凝固因子欠乏症で、常染色体遺伝を示す。第XI因子欠乏症（血友病C）はユダヤ人に多い。",
    symptoms: [
      "手術・外傷後の過剰出血",
      "粘膜出血（第VII・X・XI因子欠乏）",
      "関節・筋肉内出血（重症第X・XIII因子欠乏）",
      "新生児期の臍出血・頭蓋内出血（第XIII因子欠乏）",
      "創傷治癒障害（第XIII因子欠乏）",
    ],
    causes:
      "各凝固因子をコードする遺伝子の変異による酵素活性欠損。第XI因子欠乏症はASHKENAZI系ユダヤ人に遺伝子変異が多い。第XIII因子欠乏症は希少で早期診断が重要（PT・APTTは正常のため見落とされやすい）。",
    diagnosis:
      "凝固検査（PT・APTT・トロンビン時間）。各凝固因子の個別活性測定（確定診断）。遺伝子検査。第XIII因子欠乏：尿素溶解試験。",
    treatment:
      "新鮮凍結血漿（FFP）投与（汎用）。各因子の特定製剤（第VII・X・XI・XIII因子製剤）。トランスフェキサム酸（粘膜出血）。",
    prognosis:
      "欠乏因子と重症度による。第XIII因子欠乏症は早期診断・予防投与で重篤な合併症を防げる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Coagulation+Factor+Deficiency",
  },
  {
    slug: "niemann-pick-type-c",
    name: "ニーマン・ピック病C型",
    nameEn: "Niemann-Pick Disease Type C",
    nanbyoNumber: 8,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "NPC1またはNPC2蛋白の欠損によりコレステロール・糖脂質のリソソーム内輸送が障害され、細胞内に蓄積する常染色体劣性リソソーム蓄積症。神経症状・肝脾腫を特徴とし、小児〜成人まで幅広い発症年齢を示す。",
    symptoms: [
      "垂直方向核上性眼球運動障害（特徴的所見）",
      "小脳失調・歩行障害",
      "認知機能低下・学習障害",
      "構音・嚥下障害",
      "カタプレクシー（突然の脱力発作）",
      "肝脾腫（早発例）",
      "精神症状（成人発症例）",
    ],
    causes:
      "NPC1遺伝子（約95%）またはNPC2遺伝子変異。コレステロール・スフィンゴシンのリソソームから細胞内膜系への輸送が障害され、後期エンドソーム/リソソームに蓄積する。",
    diagnosis:
      "Filipin染色（皮膚線維芽細胞：コレステロール蓄積の蛍光染色）。血漿バイオマーカー（オキシステロール・胆汁酸誘導体）。NPC1/NPC2遺伝子検査。",
    treatment:
      "ミグルスタット（基質合成阻害薬：神経症状進行の抑制）。アルキルホスホコリン系薬剤（研究中）。対症療法（抗てんかん薬・理学療法）。",
    prognosis:
      "進行性神経変性で予後不良。発症年齢が若いほど急速進行。早期診断・治療開始で神経症状進行を一部遅延できる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Niemann-Pick+Disease+Type+C",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/310",
  },
  {
    slug: "krabbe-disease",
    name: "クラッベ病",
    nameEn: "Krabbe Disease",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "GALC（ガラクトセレブロシダーゼ）欠乏による球状細胞性白質ジストロフィー（グロボイド細胞白質ジストロフィー）。ガラクトシルセラミドが蓄積しミエリン破壊をきたす常染色体劣性リソソーム蓄積症。",
    symptoms: [
      "乳児型（早期型）：急速な神経退行（生後3〜6ヶ月）・易刺激性・発熱・けいれん",
      "筋緊張亢進→低下",
      "視覚・聴覚障害",
      "末梢神経障害",
      "後期発症型：緩徐進行の運動障害・視力低下",
    ],
    causes:
      "GALC遺伝子変異によりガラクトセレブロシダーゼが欠損。ガラクトシルセラミドが蓄積しグロボイド細胞（マクロファージ）を形成・ミエリン破壊。サイコシン（毒性代謝物）の蓄積もオリゴデンドロサイト傷害に関与。",
    diagnosis:
      "白血球/乾燥血液濾紙でのGALC酵素活性測定。血漿サイコシン測定（早期診断・疾患重症度の指標）。GALC遺伝子検査。MRI（白質変性・皮質脊髄路異常）。",
    treatment:
      "造血幹細胞移植（HSCT）：症状発現前（新生児スクリーニング発見）の早期実施で神経症状進行を遅延。症状出現後の移植効果は限定的。根本治療としての遺伝子治療が研究中。",
    prognosis:
      "早期型の予後は極めて不良で2歳までに死亡することが多い。症状前移植例は神経症状の進行を遅延できる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Krabbe+Disease",
  },
  {
    slug: "mld",
    name: "異染性白質ジストロフィー",
    nameEn: "Metachromatic Leukodystrophy",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "アリールスルファターゼA（ARSA）欠乏によりスルファチドが神経組織に蓄積し、進行性の脱髄をきたす常染色体劣性リソソーム蓄積症。乳児型・若年型・成人型があり、乳児型が最重症。",
    symptoms: [
      "乳児型：1〜2歳以降の運動退行・歩行障害",
      "若年型：学力低下・行動異常・運動失調",
      "成人型：精神症状（統合失調症様）・認知機能低下",
      "末梢神経障害（感覚障害・腱反射低下）",
      "けいれん発作",
      "球麻痺症状（嚥下障害・構音障害）",
    ],
    causes:
      "ARSA遺伝子変異（最多）またはプロサポシンB欠乏（まれ）。アリールスルファターゼA欠損によりスルファチド（ガラクトシル硫酸セラミド）が神経系・腎臓に蓄積し白質破壊をきたす。",
    diagnosis:
      "白血球/乾燥血液濾紙ARSA酵素活性測定。尿中スルファチド定量。ARSA遺伝子検査。MRI（U線維温存の対称性白質T2高信号）。",
    treatment:
      "造血幹細胞移植（HSCT）：症状前または早期例に有効。アチデルソカバン（ARSA遺伝子導入自家造血幹細胞移植：EU承認）：症状前例で顕著な効果。",
    prognosis:
      "乳児型は数年以内に死亡。若年型・成人型は緩徐進行。遺伝子治療で予後が大幅に改善しつつある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Metachromatic+Leukodystrophy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/480",
  },
  {
    slug: "x-adrenoleukodystrophy",
    name: "副腎白質ジストロフィー",
    nameEn: "X-linked Adrenoleukodystrophy",
    nanbyoNumber: 13,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "ABCD1遺伝子変異による極長鎖脂肪酸（VLCFA）の蓄積を特徴とするX染色体連鎖ペルオキシソーム病。男性に重症の脳型（小児期）・副腎脊髄神経障害型（成人型）が発症。副腎皮質不全を合併。",
    symptoms: [
      "脳型（小児）：学力低下・行動異常→急速な神経退行・失明・聴覚障害・痙性麻痺",
      "副腎脊髄神経障害型（成人男性）：緩徐進行性痙性対麻痺・末梢神経障害",
      "副腎皮質不全（Addison病様）：色素沈着・倦怠感・低血圧",
      "女性保因者：軽症の脊髄症状（成人以降）",
    ],
    causes:
      "ABCD1遺伝子（Xq28）変異によるABCD1蛋白（ペルオキシソームβ酸化輸送体）欠損。C26:0等の極長鎖脂肪酸がペルオキシソームで酸化できず蓄積し、神経・副腎を障害する。",
    diagnosis:
      "血漿VLCFA測定（C26:0・C26/C22比上昇）。ABCD1遺伝子検査。MRI（後頭・頭頂部白質T2高信号・ガドリニウム増強）。副腎皮質機能検査（ACTH負荷試験）。新生児スクリーニング（一部施設）。",
    treatment:
      "脳型（MRI異常軽度・神経症状前）：造血幹細胞移植（HSCT）・lenti-Dリソゲン（レンチウイルス遺伝子治療：欧米承認）。副腎皮質不全：副腎皮質ステロイド補充（生命維持に必須）。ロレンツォオイル（VLCFA低下）。",
    prognosis:
      "早期HSCT・遺伝子治療で脳型の進行抑制が可能。Addison型は副腎補充療法で管理可能。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=X-linked+Adrenoleukodystrophy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/481",
  },
  {
    slug: "zellweger-syndrome",
    name: "ツェルウェガー症候群",
    nameEn: "Zellweger Syndrome",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "PEX遺伝子群変異によるペルオキシソーム形成障害を原因とする最重症のペルオキシソーム病。新生児期から神経発達障害・肝障害・特徴的顔貌を呈し、早期に死亡する重篤な疾患。",
    symptoms: [
      "特徴的顔貌（広い大泉門・高い額・眼間開離）",
      "重篤な低緊張・反射消失",
      "けいれん発作",
      "肝腫大・肝機能障害",
      "網膜色素変性・視力障害",
      "聴覚障害",
      "腎嚢胞",
    ],
    causes:
      "PEX1・PEX6・PEX12等のPEX遺伝子群変異によりペルオキシソームの生合成が障害される。VLCFA代謝・プラスマローゲン合成・胆汁酸合成等の多種代謝が障害される。",
    diagnosis:
      "血漿VLCFA・フィタン酸・プラスマローゲン等の複数のペルオキシソーム機能指標測定。PEX遺伝子パネル検査。皮膚線維芽細胞でのペルオキシソーム機能検査。",
    treatment:
      "根本治療なし。対症療法（抗てんかん薬・栄養管理・胆汁酸補充）のみ。",
    prognosis:
      "重症型（ツェルウェガー）は生後1年以内に死亡することが多い。軽症型（新生児副腎白質ジストロフィー・乳児レフサム病）は比較的長命。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Zellweger+Syndrome",
  },
  {
    slug: "familial-hypercholesterolemia",
    name: "家族性高コレステロール血症",
    nameEn: "Familial Hypercholesterolemia",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "LDL受容体（またはApoB・PCSK9等）の遺伝子変異により血清LDLコレステロールが著明に高値となり、早発性動脈硬化・冠動脈疾患をきたす遺伝性高脂血症。ホモ接合体型は出生時から重篤。",
    symptoms: [
      "黄色腫（腱黄色腫：アキレス腱・指伸筋腱）",
      "眼瞼黄色腫",
      "角膜輪（若年性）",
      "早発性冠動脈疾患（若年性心筋梗塞：特にホモ接合体）",
      "大動脈弁狭窄症（ホモ接合体）",
    ],
    causes:
      "LDLR遺伝子変異（最多：LDL受容体欠損/機能低下）・APOB変異（LDLのLDLR結合部位異常）・PCSK9機能獲得変異（LDL受容体分解促進）。ホモ接合体型は両親からの変異が重複する。",
    diagnosis:
      "血清LDL-C（ヘテロ：>180mg/dL；ホモ：>400mg/dL）。腱黄色腫の確認。LDLR/APOB/PCSK9遺伝子検査。家族歴（第一度近親者の高LDL血症・早発性心疾患）。",
    treatment:
      "ヘテロ：スタチン（高用量）±エゼチミブ±PCSK9阻害薬（エボロクマブ・アリロクマブ）。ホモ接合体：LDLアフェレシス（2週毎）＋薬物療法。ロミタピド（MTP阻害薬）・エビナクマブ（抗ANGPTL3抗体：ホモ接合体用）。",
    prognosis:
      "ヘテロ接合体は早期治療で心血管イベントを大幅低減できる。ホモ接合体は治療困難で若年から冠動脈疾患が進行する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Familial+Hypercholesterolemia",
  },
  {
    slug: "myoclonic-epilepsy",
    name: "進行性ミオクローヌスてんかん",
    nameEn: "Progressive Myoclonic Epilepsy",
    nanbyoNumber: 136,
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "ミオクローヌス・全般てんかん発作・神経変性（小脳失調・認知症等）を三主徴とする遺伝性疾患群。ラフォラ病・ウンフェルリヒト・ルンドボルク病・MERRF症候群・ニーマン・ピック病C型等が含まれる。",
    symptoms: [
      "ミオクローヌス（刺激反応性・四肢の素早い不随意運動）",
      "全般性てんかん発作（ミオクロニー発作・強直間代発作）",
      "小脳失調（歩行障害・協調運動障害）",
      "認知機能低下（進行性）",
      "構音障害・嚥下障害（進行例）",
    ],
    causes:
      "ラフォラ病（EPM2A/NHLRC1遺伝子変異：ポリグルコサン体蓄積）・ULD（CSTB遺伝子変異：チスタチンB欠乏）・MERRF（ミトコンドリアDNA変異）・CLN（バッテン病）等、原因遺伝子は多種多様。",
    diagnosis:
      "臨床症状（三主徴）。脳波（全般性多棘徐波複合・光過敏性）。MRI（小脳萎縮）。皮膚生検（ラフォラ体・脂褐素体等：電子顕微鏡）。各疾患の遺伝子検査・酵素活性測定。",
    treatment:
      "抗てんかん薬（バルプロ酸・レベチラセタム・クロナゼパム：ミオクローヌス・てんかん発作の管理）。フェニトイン・カルバマゼピン・ガバペンチンはミオクローヌスを悪化させるため禁忌。リハビリテーション。",
    prognosis:
      "進行性で予後不良。各疾患により進行速度が異なる。ラフォラ病は発症10年以内に寝たきりとなる例が多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Progressive+Myoclonic+Epilepsy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4396",
  },
  {
    slug: "mcad-deficiency",
    name: "中鎖アシルCoA脱水素酵素欠乏症",
    nameEn: "Medium-Chain Acyl-CoA Dehydrogenase Deficiency",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic_genetic",
    overview:
      "ACADM遺伝子変異による中鎖脂肪酸β酸化障害。空腹・感染等の代謝ストレス時に低血糖・意識障害・突然死をきたす先天性代謝異常症。欧米白人に多く、新生児マススクリーニングで早期発見可能。",
    symptoms: [
      "低ケトン性低血糖（空腹・発熱時）",
      "意識障害・けいれん（低血糖発作）",
      "肝腫大・肝機能障害",
      "嘔吐・傾眠（発症エピソード時）",
      "突然死（診断前の初発エピソード）",
      "無症状（スクリーニング発見例）",
    ],
    causes:
      "ACADM遺伝子変異（c.985A>G：K329E変異が欧米人の約80%）によりMCAD酵素欠損。中鎖脂肪酸（C6〜C12）のβ酸化が障害され、空腹時・代謝ストレス時にATP産生不足・ケトン産生不全をきたす。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス：アシルカルニチン分析：C8・C10・C10:1増加）。尿中有機酸分析（ジカルボン酸尿：スベリン酸・アジピン酸）。ACADM遺伝子検査。",
    treatment:
      "低血糖発作時：ブドウ糖緊急投与（静注または経口）。管理：空腹を避ける（定期的食事・夜間の長時間絶食禁止）。発熱時の早期対応プロトコル（病院受診・ブドウ糖補液）。カルニチン補充（議論あり）。",
    prognosis:
      "スクリーニング発見・適切な管理で通常の生活が可能。未診断の発症エピソードは突然死・重篤な神経障害のリスクがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=MCAD+Deficiency",
  },
  {
    slug: "spinal-cord-infarction",
    name: "脊髄梗塞",
    nameEn: "Spinal Cord Infarction",
    category: "神経・筋疾患",
    categorySlug: "neurological",
    overview:
      "脊髄を栄養する血管の閉塞または解離による脊髄虚血性疾患。突然発症の対麻痺・感覚障害・膀胱直腸障害を呈する希少な脊髄疾患。大動脈手術・解離・塞栓症が主因。",
    symptoms: [
      "突然発症の両下肢の脱力・麻痺",
      "解離性感覚障害（温痛覚障害・触覚保存：脊髄前動脈症候群）",
      "膀胱直腸障害（尿閉・便秘）",
      "背部痛・腰痛（発症時）",
      "弛緩性麻痺（急性期）→痙性麻痺（慢性期）",
    ],
    causes:
      "大動脈解離・大動脈手術後（前脊髄動脈閉塞）・塞栓症（心源性・大動脈粥状硬化）・椎間板ヘルニアによるフィブロカルチラジノス塞栓症・減圧症・大動脈炎等。",
    diagnosis:
      "脊髄MRI（DWI・T2：急性期は変化が遅れる）。大動脈CT・MRA（原因評価）。CSF検査（梗塞後の炎症所見）。電気生理検査。",
    treatment:
      "急性期：原因治療（大動脈解離・塞栓症）。脊髄保護（血圧管理・ステロイド：効果不確立）。急性期後：リハビリテーション（対麻痺・膀胱直腸障害の機能回復）。",
    prognosis:
      "機能回復は発症重症度・虚血部位・範囲に依存。一部では機能回復があるが、重篤な麻痺・膀胱直腸障害が残遺する例も多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Spinal+Cord+Infarction",
  },
];

// カテゴリ別に疾患を取得するユーティリティ
export function getDiseasesByCategory(categorySlug: string): Disease[] {
  return diseases.filter((d) => d.categorySlug === categorySlug);
}

// スラッグから疾患を取得
export function getDiseaseBySlug(slug: string): Disease | undefined {
  return diseases.find((d) => d.slug === slug);
}
