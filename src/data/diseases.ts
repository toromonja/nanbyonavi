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
];

// カテゴリ別に疾患を取得するユーティリティ
export function getDiseasesByCategory(categorySlug: string): Disease[] {
  return diseases.filter((d) => d.categorySlug === categorySlug);
}

// スラッグから疾患を取得
export function getDiseaseBySlug(slug: string): Disease | undefined {
  return diseases.find((d) => d.slug === slug);
}
