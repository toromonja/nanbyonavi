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
];

// カテゴリ別に疾患を取得するユーティリティ
export function getDiseasesByCategory(categorySlug: string): Disease[] {
  return diseases.filter((d) => d.categorySlug === categorySlug);
}

// スラッグから疾患を取得
export function getDiseaseBySlug(slug: string): Disease | undefined {
  return diseases.find((d) => d.slug === slug);
}
