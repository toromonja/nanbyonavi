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
      "根本的治療法なし。不随意運動にテトラベナジン（tetrabenazine）、精神症状に抗精神病薬・抗うつ薬。HTTタンパク質を標的とするアンチセンス療法が研究中。",
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
      "ヘリオトロープ疹（上眼瞼の紫紅色浮腫性紅斑）",
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
    nanbyoNumber: 22,
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
      "酵素補充療法（アガルシダーゼα：リプレガル、アガルシダーゼβ：ファブラザイム）・シャペロン療法（ミガラスタット：特定変異の患者のみ適応）。早期開始が重要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?disease=%E3%83%95%E3%82%A1%E3%83%96%E3%83%AA%E3%83%BC%E7%97%85",
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
    nanbyoNumber: 9,
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
      "腱反射低下〜消失",
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
      "フェニル酢酸による特有の体臭（ネズミ様・カビ様）",
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
      "抗BP180（XVII型コラーゲン・NC16Aドメイン）抗体および抗BP230（ジスプラキン）抗体による表皮下水疱形成。",
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
    nanbyoNumber: 23,
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    slug: "multifocal-motor-neuropathy",
    name: "多巣性運動ニューロパチー",
    nameEn: "Multifocal Motor Neuropathy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    category: "心・血管疾患",
    categorySlug: "cardio",
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
    categorySlug: "cardio",
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
    slug: "congenital-heart-disease-adult",
    name: "成人先天性心疾患",
    nameEn: "Adult Congenital Heart Disease",
    category: "心・血管疾患",
    categorySlug: "cardio",
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
    categorySlug: "cardio",
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
    nanbyoNumber: 28,
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    categorySlug: "metabolic",
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
    nanbyoNumber: 201,
    category: "希少遺伝疾患",
    categorySlug: "metabolic",
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
    nanbyoNumber: 198,
    category: "希少遺伝疾患",
    categorySlug: "metabolic",
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
    nanbyoNumber: 199,
    category: "希少遺伝疾患",
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    slug: "nemaline-myopathy",
    name: "ネマリンミオパチー",
    nameEn: "Nemaline Myopathy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    category: "消化器疾患",
    categorySlug: "gastro",
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

  // ─── 内分泌疾患（追加） ────────────────────────────────
  {
    slug: "mccune-albright",
    name: "マクーン・オルブライト症候群",
    nameEn: "McCune-Albright Syndrome",
    nanbyoNumber: 197,
    category: "内分泌疾患",
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    categorySlug: "neuro",
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
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
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
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
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
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
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
    categorySlug: "immune",
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
    categorySlug: "immune",
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
    nanbyoNumber: 47,
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
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
    nanbyoNumber: 46,
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
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
    categorySlug: "gastro",
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
    category: "消化器疾患",
    categorySlug: "gastro",
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
    slug: "oculocutaneous-albinism",
    name: "眼皮膚白皮症",
    nameEn: "Oculocutaneous Albinism",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
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
    categorySlug: "cardio",
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
    category: "心・血管疾患",
    categorySlug: "cardio",
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
    category: "心・血管疾患",
    categorySlug: "cardio",
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
    categorySlug: "cardio",
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
    categorySlug: "cardio",
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
    categorySlug: "ophthalmology",
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
    categorySlug: "gastro",
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
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    categorySlug: "metabolic",
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
    category: "神経・筋疾患",
    categorySlug: "neuro",
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
    categorySlug: "metabolic",
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
    categorySlug: "neuro",
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
  {
    slug: "inclusion-body-myositis",
    name: "封入体筋炎",
    nameEn: "Inclusion Body Myositis",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "50歳以上の成人に好発する、ゆっくり進行する炎症性筋疾患。手指屈筋・大腿四頭筋の筋力低下と萎縮が特徴で、嚥下障害を合併することが多い。免疫抑制療法への反応が乏しく、現在有効な治療法が確立されていない。",
    symptoms: [
      "手指屈曲力低下（把持困難）",
      "大腿四頭筋萎縮・膝折れ",
      "嚥下障害（誤嚥リスク）",
      "緩徐進行性の筋力低下",
      "転倒・歩行障害",
      "前腕・下腿の筋萎縮",
    ],
    causes:
      "原因不明。筋細胞内にT細胞・マクロファージの浸潤と、タウ・TDP-43などの異常タンパク蓄積（封入体）が共存する。自己免疫機序と変性機序の複合と考えられている。抗cN1A抗体が約30〜40%に陽性。",
    diagnosis:
      "筋生検（封入体：電子顕微鏡で管状細線維、光顕でrimmed vacuole）。CK軽度上昇。筋電図（筋原性変化）。抗cN1A抗体。MRI（筋萎縮パターン）。臨床的特徴（発症年齢・筋力低下パターン）による診断基準。",
    treatment:
      "確立した有効治療なし。免疫抑制療法（プレドニゾロン・免疫グロブリン）は通常効果不十分。リハビリテーション（筋力維持・転倒予防）。嚥下障害への対応（食事形態調整・経管栄養）。新規治療（ビマグルマブ等）の臨床試験進行中。",
    prognosis:
      "緩徐だが不可逆的に進行。診断から10〜15年で歩行補助具・車椅子を要することが多い。嚥下障害による誤嚥性肺炎が生命予後を左右する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Inclusion+Body+Myositis",
  },
  {
    slug: "drpla",
    name: "歯状核赤核淡蒼球ルイ体萎縮症（DRPLA）",
    nameEn: "Dentatorubral-Pallidoluysian Atrophy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "ATN1遺伝子のCAGリピート伸長による常染色体優性の神経変性疾患。小脳性運動失調・ミオクローヌス・てんかん・舞踏病・認知症を呈し、発症年齢によって症状が異なる。日本人に比較的多い希少疾患。",
    symptoms: [
      "小脳性運動失調（歩行困難・構音障害）",
      "ミオクローヌス",
      "てんかん（若年発症型に多い）",
      "舞踏病・アテトーシス（成人発症型）",
      "認知症・人格変化",
      "精神症状（うつ・幻覚）",
    ],
    causes:
      "ATN1（アトロフィン1）遺伝子のCAGトリプレットリピート伸長（正常：6〜35回、発症：49回以上）。リピート数が多いほど発症年齢が若く（表現促進現象）、重症化する。",
    diagnosis:
      "遺伝子検査（ATN1 CAGリピート数測定）。家族歴。MRI（大脳・小脳・脳幹萎縮）。電気生理（ミオクローヌス評価）。",
    treatment:
      "根本治療なし。対症療法：てんかん（抗てんかん薬）、ミオクローヌス（クロナゼパム・バルプロ酸）、運動失調（リハビリ）、精神症状（精神科薬物療法）。",
    prognosis:
      "緩徐進行性。若年発症（20歳未満）はてんかん・ミオクローヌスが重篤で予後不良。成人発症は比較的緩徐な経過。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=DRPLA",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/211",
  },
  {
    slug: "machado-joseph-sca3",
    name: "マシャド・ジョセフ病（脊髄小脳変性症3型）",
    nameEn: "Machado-Joseph Disease / SCA3",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "ATXN3遺伝子のCAGリピート伸長による常染色体優性の脊髄小脳変性症。世界で最も頻度の高い遺伝性脊髄小脳変性症の一つ。小脳性運動失調・眼球運動障害・錐体外路症状・末梢神経障害を呈する。",
    symptoms: [
      "小脳性運動失調（歩行・四肢・構音）",
      "眼球運動障害（眼振・核上性眼球運動障害）",
      "錐体外路症状（パーキンソニズム・ジストニア）",
      "末梢神経障害（感覚障害・腱反射低下）",
      "痙性麻痺（錐体路症状）",
      "嚥下障害・顔面ファシクレーション",
    ],
    causes:
      "ATXN3遺伝子のCAGリピート伸長（正常：12〜44回、発症：61回以上）。アタキシン-3タンパクのポリグルタミン伸長による神経毒性。常染色体優性遺伝、表現促進現象あり。",
    diagnosis:
      "遺伝子検査（ATXN3 CAGリピート数）。MRI（脳幹・小脳萎縮）。神経伝導検査（末梢神経障害評価）。家族歴。",
    treatment:
      "根本治療なし。対症療法：運動失調（リハビリ・バクロフェン）、パーキンソニズム（レボドパ）、痙縮（バクロフェン）、嚥下障害管理。",
    prognosis:
      "緩徐進行性。発症から15〜20年で重篤な運動障害を来す。呼吸障害・誤嚥が予後を左右する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Machado+Joseph+Disease+SCA3",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/3062",
  },
  {
    slug: "hnpp",
    name: "遺伝性圧迫性末梢神経障害（HNPP）",
    nameEn: "Hereditary Neuropathy with Liability to Pressure Palsies",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "PMP22遺伝子の欠失または変異による常染色体優性の末梢神経疾患。軽微な圧迫や伸展で反復性の単神経麻痺を来す。シャルコー・マリー・トゥース病1A型とは対照的に、PMP22の1コピー欠失が原因。",
    symptoms: [
      "反復性の単神経麻痺（腓骨神経・尺骨神経・橈骨神経）",
      "軽微な圧迫・外傷後の急性神経症状",
      "感覚障害・筋力低下（通常可逆性）",
      "びまん性の腱反射低下",
      "慢性・軽度の多発神経炎様症状",
      "症状は無症状から重篤まで個人差大",
    ],
    causes:
      "17p11.2のPMP22遺伝子を含む1.5Mbの欠失（約80%）またはPMP22点変異。ミエリン形成タンパクPMP22の半量体不足により神経がソーセージ様ミエリン肥厚（tomacula）を形成し、圧迫に脆弱となる。",
    diagnosis:
      "神経伝導検査（潜時延長・速度低下：圧迫好発部位）。遺伝子検査（PMP22欠失：MLPA法）。腓腹神経生検（tomacula形成）。家族歴。",
    treatment:
      "圧迫回避指導（特定の姿勢・動作の禁止）。急性麻痺：保存的治療（リハビリ・装具）。神経毒性薬剤回避。予後は通常良好（数週〜数ヶ月で回復）。",
    prognosis:
      "個々の麻痺エピソードは多くが回復するが、反復により永続的な神経障害が残ることもある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=HNPP+Hereditary+Neuropathy",
  },
  {
    slug: "post-polio-syndrome",
    name: "ポストポリオ症候群",
    nameEn: "Post-Polio Syndrome",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "急性ポリオ（灰白髄炎）から数十年後に、一旦安定していた機能が再び低下する症候群。疲労・筋力低下・疼痛・呼吸障害が主症状。ポリオ生存者の約25〜40%に発症すると言われる。",
    symptoms: [
      "新たな筋力低下・筋萎縮（かつて罹患した筋肉）",
      "異常疲労（全身・筋疲労）",
      "筋肉・関節の疼痛",
      "呼吸・嚥下障害の悪化",
      "寒冷不耐性",
      "睡眠障害",
    ],
    causes:
      "急性期に生き残った運動ニューロンが数十年かけて機能低下する機序が推定される。代償性に肥大した神経終末の代謝的疲弊、慢性的な低レベル炎症、加齢変化の重複などが関与すると考えられている。",
    diagnosis:
      "診断基準：①急性ポリオ既往（確認済みまたは強く疑われる）、②部分的な神経学的回復期、③安定期（≥15年）の後の新たな症状、④他の医学的原因の除外。筋電図・筋生検は補助的。",
    treatment:
      "根本治療なし。疲労管理（活動の配分・ペーシング）。疼痛管理。呼吸補助（必要時）。リハビリ（過負荷を避けた適度な運動）。睡眠改善。",
    prognosis:
      "ゆっくり進行するが急速悪化は少ない。適切な管理でQOL維持が可能。呼吸障害合併例は経過注意を要する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Post+Polio+Syndrome",
  },
  {
    slug: "sca1",
    name: "脊髄小脳変性症1型（SCA1）",
    nameEn: "Spinocerebellar Ataxia Type 1",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "ATXN1遺伝子のCAGリピート伸長による常染色体優性の脊髄小脳変性症。小脳性運動失調に加え、錐体路症状・眼球運動障害・嚥下障害が初期から出現しやすく、比較的進行が速い。",
    symptoms: [
      "小脳性運動失調（歩行・四肢・構音）",
      "錐体路症状（腱反射亢進・痙性）",
      "眼球運動障害（眼振・核間性眼筋麻痺）",
      "嚥下障害（早期から）",
      "末梢神経障害",
      "認知機能低下（進行期）",
    ],
    causes:
      "ATXN1遺伝子のCAGリピート伸長（正常：6〜44回、発症：39回以上）。アタキシン-1タンパクのポリグルタミン毒性による小脳プルキンエ細胞・脊髄神経変性。",
    diagnosis:
      "遺伝子検査（ATXN1 CAGリピート数）。MRI（小脳・脳幹萎縮）。家族歴と臨床症状。",
    treatment:
      "根本治療なし。対症療法（リハビリテーション・嚥下障害管理・呼吸管理）。臨床試験（アンチセンス核酸等）が進行中。",
    prognosis:
      "SCA1はSCA3と並び比較的進行が速い。発症から10〜15年程度で高度の障害を来すことが多い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Spinocerebellar+Ataxia+Type+1",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/3062",
  },
  {
    slug: "sca2",
    name: "脊髄小脳変性症2型（SCA2）",
    nameEn: "Spinocerebellar Ataxia Type 2",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "ATXN2遺伝子のCAGリピート伸長による常染色体優性の脊髄小脳変性症。緩徐な眼球運動（サッケード低下）と末梢神経障害が特徴的で、パーキンソニズムを呈することもある。",
    symptoms: [
      "小脳性運動失調",
      "緩徐なサッケード（眼球運動の特徴的所見）",
      "末梢神経障害（感覚障害・腱反射消失）",
      "パーキンソニズム（一部の症例）",
      "筋萎縮側索硬化症類似症状（一部）",
      "認知機能低下",
    ],
    causes:
      "ATXN2遺伝子のCAGリピート伸長（正常：22〜31回、発症：34回以上）。アタキシン-2タンパクの毒性蓄積による神経変性。",
    diagnosis:
      "遺伝子検査（ATXN2 CAGリピート）。眼球運動検査（サッケード速度測定）。神経伝導検査。MRI（小脳・脳幹萎縮）。",
    treatment:
      "根本治療なし。リハビリテーション・対症療法。",
    prognosis:
      "SCA1よりやや緩徐な経過が多いが、個人差が大きい。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Spinocerebellar+Ataxia+Type+2",
  },
  {
    slug: "sca6",
    name: "脊髄小脳変性症6型（SCA6）",
    nameEn: "Spinocerebellar Ataxia Type 6",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "CACNA1A遺伝子のCAGリピート伸長による常染色体優性の脊髄小脳変性症。比較的高齢発症（平均50歳代）で純粋小脳型運動失調を呈し、自律神経障害や認知症は少ない。進行は比較的緩徐。",
    symptoms: [
      "純粋小脳性運動失調（歩行・四肢・構音）",
      "注視眼振",
      "体幹動揺",
      "嚥下障害（進行期）",
      "自律神経障害・認知症は少ない",
    ],
    causes:
      "CACNA1A遺伝子のCAGリピート伸長（正常：4〜18回、発症：20回以上）。電位依存性Caチャネルαサブユニットの機能異常による小脳プルキンエ細胞変性。",
    diagnosis:
      "遺伝子検査（CACNA1A CAGリピート）。MRI（小脳萎縮が主体）。",
    treatment:
      "根本治療なし。リハビリテーション中心。",
    prognosis:
      "SCAの中では比較的良性経過。発症から20〜30年以上経過しても歩行可能な例も多い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Spinocerebellar+Ataxia+Type+6",
  },
  {
    slug: "sca7",
    name: "脊髄小脳変性症7型（SCA7）",
    nameEn: "Spinocerebellar Ataxia Type 7",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "ATXN7遺伝子のCAGリピート伸長による常染色体優性の脊髄小脳変性症。小脳性運動失調に加え、網膜変性（視力低下・色覚異常）が特徴的で、失明に至ることもある。若年発症例は進行が速い。",
    symptoms: [
      "小脳性運動失調（歩行・四肢・構音）",
      "網膜変性（視力低下・色覚異常・光過敏）",
      "進行性視野障害・失明",
      "眼振",
      "嚥下障害",
    ],
    causes:
      "ATXN7遺伝子のCAGリピート伸長（正常：4〜35回、発症：37回以上）。アタキシン-7の毒性蓄積による小脳・網膜の神経変性。",
    diagnosis:
      "遺伝子検査（ATXN7 CAGリピート）。眼科検査（眼底・視野・ERG）。MRI（小脳・脳幹萎縮）。",
    treatment:
      "根本治療なし。視力低下への対応（視覚補助具）。リハビリテーション。",
    prognosis:
      "若年発症例は急速進行し、発症数年以内に高度障害。成人発症はやや緩徐。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Spinocerebellar+Ataxia+Type+7",
  },
  {
    slug: "hyperphenylalaninemia",
    name: "高フェニルアラニン血症（BH4欠乏症）",
    nameEn: "Hyperphenylalaninemia due to BH4 Deficiency",
    nanbyoNumber: 111,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "テトラヒドロビオプテリン（BH4）の合成または再生に関わる酵素の欠乏による高フェニルアラニン血症。フェニルケトン尿症（PAH欠乏）とは異なり、ドーパミン・セロトニン合成も障害されるため、食事療法だけでは神経症状を防げない。",
    symptoms: [
      "発達遅滞・知的障害",
      "筋緊張低下",
      "不随意運動（ジストニア・ミオクローヌス）",
      "てんかん",
      "易刺激性・不機嫌",
      "眼球運動障害・嚥下障害（重症型）",
    ],
    causes:
      "GCH1（GTPシクロヒドロラーゼI）、PTS（6-ピルボイルテトラヒドロプテリン合成酵素）、QDPR（ジヒドロプテリジンレダクターゼ）、PCD（プテリン4α-カルビノールアミン脱水酵素）の遺伝子変異。常染色体劣性遺伝（一部優性）。",
    diagnosis:
      "新生児マススクリーニング（フェニルアラニン高値）後にBH4負荷試験。プテリン分析（尿・血液）。神経伝達物質代謝産物（CSF）。遺伝子検査。",
    treatment:
      "BH4補充（サプロプテリン）。神経伝達物質前駆体補充（L-DOPA/カルビドパ、5-ヒドロキシトリプトファン）。フェニルアラニン制限食（補助的）。",
    prognosis:
      "早期診断・治療で神経学的予後は改善するが、治療開始が遅れると重篤な神経障害が残遺する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hyperphenylalaninemia+BH4+Deficiency",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/1124",
  },
  {
    slug: "holocarboxylase-synthetase-deficiency",
    name: "ホロカルボキシラーゼ合成酵素欠乏症",
    nameEn: "Holocarboxylase Synthetase Deficiency",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "ホロカルボキシラーゼ合成酵素（HLCS）の欠乏により複数のカルボキシラーゼ（ピルビン酸・プロピオニルCoA・β-メチルクロトニルCoA・アセチルCoAカルボキシラーゼ）が不活性化する有機酸代謝異常症。新生児〜乳児期に発症し、代謝性ケトアシドーシスと皮膚・神経症状を呈する。",
    symptoms: [
      "代謝性ケトアシドーシス（嘔吐・呼吸困難・意識障害）",
      "皮膚炎（落屑性・湿疹様）",
      "脱毛",
      "筋緊張低下",
      "けいれん",
      "免疫不全（感染易感染性）",
    ],
    causes:
      "HLCS遺伝子変異による常染色体劣性遺伝。HLCS酵素がビオチンをカルボキシラーゼに結合させられず、複数カルボキシラーゼが同時欠損する「複合カルボキシラーゼ欠乏症」の一型。",
    diagnosis:
      "新生児マススクリーニング（タンデムマス：3-ヒドロキシイソ吉草酸・プロピオニルカルニチン等）。尿中有機酸分析。酵素活性測定。HLCS遺伝子検査。",
    treatment:
      "高用量ビオチン補充（10〜40mg/日）で多くの代謝異常が改善する。生涯継続投与が必要。",
    prognosis:
      "早期診断・ビオチン投与で予後良好。治療遅延例では不可逆的な神経障害が残遺することがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Holocarboxylase+Synthetase+Deficiency",
  },
  {
    slug: "nonketotic-hyperglycinemia",
    name: "グリシン脳症（非ケトーシス性高グリシン血症）",
    nameEn: "Glycine Encephalopathy / Nonketotic Hyperglycinemia",
    nanbyoNumber: 242,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "グリシン開裂系酵素の欠乏によりグリシンが脳脊髄液・血液に蓄積する先天性代謝異常症。新生児型は重篤で、重度の筋緊張低下・意識障害・難治性てんかんを呈する。グリシンがNMDA受容体を過剰刺激することで神経毒性を発揮する。",
    symptoms: [
      "重度の筋緊張低下（新生児期）",
      "意識障害・無呼吸（新生児型）",
      "難治性てんかん（ヒプスアリスミア等）",
      "重度知的障害",
      "発達遅滞",
      "痙縮（進行期）",
    ],
    causes:
      "グリシン開裂系（GCS）の構成タンパク（P蛋白：GLDC・T蛋白：AMT・H蛋白：GCSH）をコードする遺伝子変異。常染色体劣性遺伝。グリシンのCSF/血漿比高値が特徴。",
    diagnosis:
      "血漿・CSFグリシン測定（CSF/血漿比：正常<0.02、患者>0.08）。脳波（バーストサプレッション）。MRI（髄鞘形成不全）。遺伝子検査（GLDC・AMT等）。",
    treatment:
      "ベンゾジアゼピン（NMDA受容体拮抗）・デキストロメトルファン。低グリシン食（効果限定的）。デキサメタゾン。根本治療なし。",
    prognosis:
      "新生児型は重篤。多くが重度知的障害・難治性てんかんを残す。生命予後は改善してきたが神経学的予後は依然不良。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Glycine+Encephalopathy+Nonketotic+Hyperglycinemia",
  },
  {
    slug: "smith-lemli-opitz",
    name: "スミス・レムリ・オピッツ症候群",
    nameEn: "Smith-Lemli-Opitz Syndrome",
    nanbyoNumber: 256,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "DHCR7遺伝子変異による7-デヒドロコレステロール還元酵素欠乏症。コレステロール合成障害により多発奇形・知的障害・行動障害を呈する。2・3趾の合趾（皮膚性合指）と小頭症が特徴的。",
    symptoms: [
      "小頭症・特徴的顔貌（上向き鼻孔・眼瞼下垂）",
      "2・3趾合趾",
      "多指症・外生殖器異常（男性）",
      "知的障害・発達遅滞",
      "自閉症様行動・自傷",
      "先天性心疾患・腎奇形（一部）",
    ],
    causes:
      "DHCR7遺伝子変異による常染色体劣性遺伝。7-DHCRの欠乏で7-デヒドロコレステロール（7-DHC）が蓄積し、コレステロールが低下する。コレステロールは細胞膜・ステロイド・ヘッジホッグシグナル等に必須。",
    diagnosis:
      "血漿7-デヒドロコレステロール高値・コレステロール低値。DHCR7遺伝子検査。出生前診断（羊水・CVS）が可能。",
    treatment:
      "コレステロール補充（卵黄・コレステロール製剤）。症状対応（心疾患手術・リハビリ・行動療法）。胆汁酸補充（研究中）。",
    prognosis:
      "軽症から重症まで幅広い。重症型は新生児期死亡例あり。生存例では知的障害・行動障害が主な課題となる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Smith+Lemli+Opitz+Syndrome",
  },
  {
    slug: "lowe-syndrome",
    name: "ロウ症候群（眼脳腎症候群）",
    nameEn: "Lowe Syndrome / Oculocerebrorenal Syndrome",
    nanbyoNumber: 233,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "OCRL遺伝子変異によるX連鎖性の代謝疾患。先天性白内障・知的障害・近位尿細管機能障害（ファンコニ症候群）を三徴とする。男児に発症し、女性保因者は白内障を来すことがある。",
    symptoms: [
      "先天性白内障（両眼）",
      "知的障害・発達遅滞",
      "筋緊張低下",
      "腎ファンコニ症候群（アミノ酸尿・リン酸尿・糖尿・低カリウム血症）",
      "腎不全（進行性）",
      "行動障害（癇癪・自傷）",
    ],
    causes:
      "OCRL遺伝子（Xq26.1）変異によるイノシトールポリリン酸5-ホスファターゼの欠乏。X連鎖性劣性遺伝。ゴルジ体・エンドソームの機能障害が多臓器病変を引き起こす。",
    diagnosis:
      "臨床三徴（白内障・知的障害・近位尿細管障害）。尿検査（ファンコニ症候群のパターン）。OCRL遺伝子検査。酵素活性測定。",
    treatment:
      "白内障手術（早期）。腎ファンコニ症候群の補充療法（リン酸・重炭酸・カリウム）。腎不全管理（透析・移植）。リハビリ・教育支援。",
    prognosis:
      "進行性腎不全が主な予後規定因子。腎移植で生命予後は改善するが知的障害は残遺。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Lowe+Syndrome+OCRL",
  },
  {
    slug: "hereditary-fructose-intolerance",
    name: "遺伝性フルクトース不耐症",
    nameEn: "Hereditary Fructose Intolerance",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "ALDOB遺伝子変異によるフルクトース-1-リン酸アルドラーゼB欠乏症。フルクトース（果糖）・スクロース（砂糖）・ソルビトール摂取後に低血糖・嘔吐・肝障害を来す。フルクトース除去食で症状は完全にコントロールできる。",
    symptoms: [
      "フルクトース摂取後の低血糖（冷汗・意識障害）",
      "嘔吐・腹痛（摂取後）",
      "肝腫大・肝機能障害",
      "成長障害・発育遅延（慢性摂取時）",
      "腎尿細管障害",
      "フルクトース嫌悪（患者が自然に甘い物を避ける）",
    ],
    causes:
      "ALDOB遺伝子変異による常染色体劣性遺伝。フルクトース-1-リン酸（F1P）の蓄積がATP枯渇・低血糖・肝細胞障害を引き起こす。",
    diagnosis:
      "フルクトース負荷試験（低血糖・リン酸低下：危険を伴うため慎重に）。ALDOB遺伝子検査（推奨）。肝生検（酵素活性）。",
    treatment:
      "フルクトース・スクロース・ソルビトール除去食（生涯継続）。急性低血糖時：ブドウ糖静注。食事管理で予後は良好。",
    prognosis:
      "適切な食事管理で正常な生活が可能。未診断例では肝硬変・腎不全のリスクあり。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hereditary+Fructose+Intolerance",
  },
  {
    slug: "wiskott-aldrich-syndrome",
    name: "ウィスコット・アルドリッチ症候群",
    nameEn: "Wiskott-Aldrich Syndrome",
    nanbyoNumber: 65,
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "WAS遺伝子変異によるX連鎖性の原発性免疫不全症。微小血小板減少性紫斑病・湿疹・免疫不全の三徴を呈する。自己免疫疾患・悪性腫瘍（リンパ腫等）の合併リスクが高い。造血幹細胞移植が根治療法。",
    symptoms: [
      "血小板減少・出血傾向（点状出血・血便）",
      "難治性湿疹（アトピー様）",
      "反復感染（細菌・ウイルス・真菌）",
      "自己免疫疾患（溶血性貧血・腎炎）",
      "悪性リンパ腫のリスク増大",
    ],
    causes:
      "WAS遺伝子（Xp11.23）変異によるWASP蛋白欠乏または機能異常。X連鎖性劣性遺伝（男児発症）。WASPはアクチン重合調節に関与し、免疫細胞・血小板の機能に必須。",
    diagnosis:
      "血小板数低下（微小血小板）・IgM低下・IgA/IgE上昇。WASPタンパク発現（フローサイトメトリー）。WAS遺伝子検査。",
    treatment:
      "造血幹細胞移植（根治療法：早期施行が望ましい）。支持療法（抗生剤予防投与・免疫グロブリン補充・輸血）。スプレノクトミー（脾摘：出血対策）。遺伝子治療（臨床試験）。",
    prognosis:
      "未治療では生命予後不良（感染・出血・悪性腫瘍）。適切な時期に造血幹細胞移植を行えば長期生存が期待できる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Wiskott+Aldrich+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/1461",
  },
  {
    slug: "hyper-ige-syndrome",
    name: "高IgE症候群",
    nameEn: "Hyper-IgE Syndrome",
    nanbyoNumber: 66,
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "血清IgEの著明な高値（>2000 IU/mL）・反復性皮膚膿瘍・難治性肺炎を三徴とする原発性免疫不全症。STAT3変異による常染色体優性型（Job症候群）とDOCK8変異による常染色体劣性型がある。特徴的顔貌・骨格異常を伴う。",
    symptoms: [
      "新生児期からの湿疹（膿痂疹様）",
      "反復性皮膚膿瘍（黄色ブドウ球菌：「冷たい膿瘍」）",
      "難治性肺炎・肺囊胞形成",
      "血清IgE著明高値",
      "特徴的顔貌（粗い顔貌・広い鼻梁）",
      "骨折しやすい（骨粗鬆症様）",
    ],
    causes:
      "STAT3遺伝子変異（常染色体優性型）：Th17細胞分化障害によりIL-17産生不全→黄色ブドウ球菌・真菌感染感受性亢進。DOCK8変異（常染色体劣性型）：T・NK・B細胞移動障害。",
    diagnosis:
      "血清IgE高値（>2000 IU/mL）。NIHスコア（臨床スコア）≥40点。STAT3/DOCK8遺伝子検査。好酸球増多。Th17細胞数低下。",
    treatment:
      "抗菌薬予防投与（抗ブドウ球菌・抗真菌）。皮膚管理（保湿・外用ステロイド）。肺囊胞合併症対応（外科）。造血幹細胞移植（DOCK8型で有効）。",
    prognosis:
      "STAT3型は感染・内臓動脈瘤・悪性腫瘍リスクあり。DOCK8型は重篤な感染・悪性腫瘍リスクが高い。移植で予後改善が期待できる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Hyper+IgE+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/1461",
  },
  {
    slug: "traps",
    name: "TNF受容体関連周期性症候群（TRAPS）",
    nameEn: "TNF Receptor-Associated Periodic Syndrome",
    nanbyoNumber: 269,
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "TNFRSF1A遺伝子変異による常染色体優性の自己炎症性疾患。長期間（1〜3週間）の発熱発作・筋肉痛・皮疹・眼症状・漿膜炎を特徴とする。アミロイドーシスの合併リスクがある。",
    symptoms: [
      "長期発熱発作（1〜3週間）",
      "筋肉痛・筋膜炎（移動性）",
      "皮疹（遠心性紅斑）",
      "眼症状（結膜炎・眼窩周囲浮腫）",
      "漿膜炎（腹膜炎・胸膜炎）",
      "リンパ節腫脹",
    ],
    causes:
      "TNFRSF1A遺伝子変異によりTNFR1の細胞膜発現・脱落が障害され、TNFシグナルが過剰持続する。常染色体優性遺伝だが、低浸透率変異（R92Q・P46L）は頻度が高く病原性が低い。",
    diagnosis:
      "臨床診断基準（Eurofever/PRINTO）。TNFRSF1A遺伝子検査。発作時の炎症反応高値（CRP・SAA・フィブリノゲン）。可溶性TNFR1低値（一部）。家族性地中海熱・他の周期熱の除外。",
    treatment:
      "急性期：NSAIDs・ステロイド。寛解維持：IL-1阻害薬（アナキンラ・カナキヌマブ）が有効。TNF阻害薬（エタネルセプト）は一部有効。アミロイドーシス予防のためSAA正常化を目標とする。",
    prognosis:
      "治療で発作コントロール可能。未治療・長期炎症持続例ではAAアミロイドーシス（腎不全）のリスクがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=TRAPS+TNF+Receptor",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/3093",
  },
  {
    slug: "blau-syndrome",
    name: "ブラウ症候群",
    nameEn: "Blau Syndrome",
    nanbyoNumber: 270,
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "NOD2遺伝子変異による常染色体優性の小児期発症自己炎症性疾患。肉芽腫性関節炎・皮膚炎・ぶどう膜炎の三徴を呈する。散発性の若年発症サルコイドーシス（Jabs病）と同一疾患と考えられている。",
    symptoms: [
      "多発関節炎（滑膜の嚢胞状肥厚）",
      "皮膚炎（鱗屑性・魚鱗癬様）",
      "ぶどう膜炎（汎ぶどう膜炎）",
      "発熱（間欠性）",
      "カンペトダクティリー（屈曲拘縮）",
    ],
    causes:
      "NOD2遺伝子（16q12.1）の活性化変異（R334W・R334Q等）による過剰なNF-κB活性化→炎症性サイトカイン産生亢進。常染色体優性遺伝。",
    diagnosis:
      "臨床三徴。皮膚・滑膜生検（非乾酪性肉芽腫）。NOD2遺伝子検査。サルコイドーシスとの鑑別。",
    treatment:
      "ステロイド（関節・眼症状）。MTX・アザチオプリン（免疫抑制薬）。IL-1阻害薬・TNF阻害薬（難治例）。眼科的合併症（緑内障・白内障）の管理。",
    prognosis:
      "ぶどう膜炎の慢性化・緑内障による視力障害が主な問題。適切な治療で関節症状は比較的管理可能。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Blau+Syndrome+NOD2",
  },
  {
    slug: "pfapa",
    name: "周期性発熱・アフタ性口内炎・咽頭炎・頸部リンパ節炎（PFAPA症候群）",
    nameEn: "Periodic Fever, Aphthous Stomatitis, Pharyngitis, Adenitis (PFAPA)",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "小児に好発する規則的な周期性発熱症候群。3〜6週ごとに発熱・アフタ性口内炎・咽頭炎・頸部リンパ節炎が数日間出現し、自然軽快を繰り返す。成長とともに自然寛解することが多い。",
    symptoms: [
      "規則的な周期性発熱（38〜40℃、3〜6週間周期）",
      "アフタ性口内炎",
      "咽頭炎（滲出液を伴うことがある）",
      "頸部リンパ節腫脹",
      "発作間欠期の完全な健康",
      "抗生剤無効",
    ],
    causes:
      "原因不明。一部にMEFV遺伝子変異が関与する報告あり。自己炎症的機序（IL-1β過剰産生）が示唆される。感染症・自己免疫とは異なる病態。",
    diagnosis:
      "Marshall診断基準：①規則的周期性発熱（<5日）、②以下の1つ以上：アフタ・咽頭炎・リンパ節炎、③ウイルス感染除外、④発作間欠期の完全回復、⑤正常発育。遺伝子検査（MEFV等：除外目的）。",
    treatment:
      "プレドニゾロン単回投与（発作短縮に有効）。シメチジン（予防：効果は限定的）。扁桃摘出術（寛解率高い）。",
    prognosis:
      "多くは数年以内に自然寛解。成人への移行は少ない。QOL障害（学校欠席等）が問題となる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=PFAPA+Syndrome+Periodic+Fever",
  },
  {
    slug: "congenital-dyserythropoietic-anemia",
    name: "先天性赤血球形成異常性貧血（CDA）",
    nameEn: "Congenital Dyserythropoietic Anemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "骨髄での赤血球形成（赤血球造血）の異常により慢性溶血性貧血と無効造血を来す先天性貧血群。I型（CDAN1変異）、II型（SEC23B変異）、III型（KIF23変異）に分類され、それぞれ特徴的な形態異常を呈する。",
    symptoms: [
      "慢性溶血性貧血（黄疸・脾腫）",
      "輸血依存性貧血（重症型）",
      "鉄過剰症（繰り返す輸血・溶血による）",
      "胆石症",
      "脾腫",
      "骨格異常（I型：多指症等を合併する例あり）",
    ],
    causes:
      "CDA I型：CDAN1（コダノシン）またはC15orf41変異。II型：SEC23B変異（最多）。III型：KIF23変異（常染色体優性）。赤芽球の異常な核形態・細胞間橋形成・多核赤芽球が特徴。",
    diagnosis:
      "末梢血（多形性赤血球）。骨髄像（異常赤芽球：細胞間橋・多核・核間橋）。電子顕微鏡。ハムテスト（II型陽性）。遺伝子検査。",
    treatment:
      "輸血（重症例）。鉄キレート療法（鉄過剰対策）。脾摘（溶血軽減）。造血幹細胞移植（重症I・III型）。インターフェロンα（I型に有効な場合）。",
    prognosis:
      "型・重症度により大きく異なる。適切な管理で長期生存可能。鉄過剰による臓器障害が長期的問題。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Dyserythropoietic+Anemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/297",
  },
  {
    slug: "diamond-blackfan-anemia",
    name: "ダイアモンド・ブラックファン貧血",
    nameEn: "Diamond-Blackfan Anemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "骨髄での赤芽球の選択的欠如による先天性赤芽球癆。生後1年以内に発症する重症大球性貧血・網状赤血球の著減を呈する。リボソームタンパク遺伝子変異が約60〜70%に同定される。先天奇形を約50%に合併。",
    symptoms: [
      "生後1年以内の重症大球性貧血",
      "網状赤血球著減",
      "顔面奇形（Pierre Robin・口蓋裂・拇指奇形）",
      "身長低値・成長障害",
      "先天性心疾患（一部）",
      "悪性腫瘍リスク増大",
    ],
    causes:
      "リボソームタンパク遺伝子変異（RPS19：最多25%、RPS26・RPL5・RPL11等）の常染色体優性変異。リボソーム生合成障害がp53活性化→赤芽球アポトーシスを引き起こす。",
    diagnosis:
      "大球性貧血・網状赤血球減少・骨髄の赤芽球欠如。エリスロポエチン高値。赤血球アデノシンデアミナーゼ（eADA）高値。リボソームタンパク遺伝子検査。胎児ヘモグロビン高値。",
    treatment:
      "副腎皮質ステロイド（プレドニゾロン）が第一選択（約80%に反応）。輸血（ステロイド無効・非適応例）。造血幹細胞移植（根治療法）。ロイシン補充（臨床試験）。",
    prognosis:
      "ステロイド長期使用の副作用（成長障害・骨粗鬆症）が問題。造血幹細胞移植で根治可能。悪性腫瘍（骨肉腫・白血病）リスクあり。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Diamond+Blackfan+Anemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/297",
  },
  {
    slug: "fanconi-anemia",
    name: "ファンコニ貧血",
    nameEn: "Fanconi Anemia",
    nanbyoNumber: 57,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "FANC遺伝子群の変異によるDNA修復障害（染色体不安定性症候群）。進行性の骨髄不全・先天奇形・悪性腫瘍（AML・固形癌）への高い感受性を特徴とする。拇指・橈骨奇形・低身長・色素異常が典型的。",
    symptoms: [
      "進行性汎血球減少（骨髄不全）",
      "拇指・橈骨奇形",
      "低身長・発育遅滞",
      "皮膚色素異常（カフェオレ斑・色素沈着）",
      "急性骨髄性白血病（AML）への移行リスク",
      "頭頸部・婦人科系固形癌リスク",
    ],
    causes:
      "FANCA（最多：60〜65%）・FANCC・FANCG等FANC遺伝子群変異による常染色体劣性遺伝（FANCB：X連鎖性）。FANCタンパク複合体がDNA鎖間架橋修復に必須で、変異により染色体不安定性が生じる。",
    diagnosis:
      "染色体破断試験（DEB・MMC：FAを特異的に検出）。フローサイトメトリー（細胞周期G2/M期停止）。FANC遺伝子パネル検査。骨髄検査。",
    treatment:
      "造血幹細胞移植（骨髄不全・AMLに対する根治療法：低強度前処置）。アンドロゲン療法（一時的な血球増加）。G-CSF。悪性腫瘍サーベイランス。遺伝子治療（臨床試験）。",
    prognosis:
      "造血幹細胞移植で骨髄不全は治癒可能だが、固形癌リスクは移植後も持続する。長期サーベイランスが必須。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Fanconi+Anemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/297",
  },
  {
    slug: "g6pd-deficiency",
    name: "グルコース6リン酸脱水素酵素（G6PD）欠乏症",
    nameEn: "Glucose-6-Phosphate Dehydrogenase Deficiency",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "G6PD遺伝子変異によるX連鎖性の赤血球酵素欠乏症。酸化ストレス（薬剤・感染・蚕豆摂取）への曝露で急性溶血性貧血を来す。世界で最も頻度の高い酵素欠乏症で、約4億人以上が罹患していると推定される。",
    symptoms: [
      "急性溶血性貧血（急性発症の黄疸・血色素尿）",
      "誘因（抗マラリア薬・サルファ剤・蚕豆摂取・感染症）",
      "新生児黄疸（重症型）",
      "慢性非球状赤血球性溶血性貧血（重症型：Class I）",
      "溶血発作間欠期は無症状",
    ],
    causes:
      "G6PD遺伝子（Xq28）の多彩な変異による酵素活性低下。G6PDはペントースリン酸回路でNADPHを産生し、赤血球をグルタチオンで酸化ストレスから守る。G6PD欠乏赤血球は酸化ストレスに脆弱でHeinz小体形成→溶血。",
    diagnosis:
      "G6PD酵素活性測定（蛍光スポット試験・比色法）。溶血期は偽陰性に注意（若い赤血球は活性高い）。遺伝子検査。",
    treatment:
      "誘因物質の厳格な回避（薬剤リスト管理）。急性溶血時：輸血（重症例）・補液。新生児黄疸：光線療法・交換輸血。根本治療なし（遺伝子治療研究中）。",
    prognosis:
      "誘因回避で通常の生活が可能。重症型（Class I）は慢性貧血の管理が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=G6PD+Deficiency",
  },
  {
    slug: "pyruvate-kinase-deficiency",
    name: "ピルビン酸キナーゼ欠乏症",
    nameEn: "Pyruvate Kinase Deficiency",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "PKLR遺伝子変異による常染色体劣性の赤血球解糖酵素欠乏症。先天性非球状赤血球性溶血性貧血を来す赤血球酵素欠乏症の中で最も頻度が高い。新生児黄疸から成人まで幅広い重症度を示す。",
    symptoms: [
      "慢性溶血性貧血（黄疸・脾腫・胆石）",
      "新生児黄疸（重症型）",
      "輸血依存性貧血（重症例）",
      "鉄過剰症（慢性溶血・輸血による）",
      "骨髄外造血（脾・肝腫大）",
      "溶血発作（感染・妊娠で増悪）",
    ],
    causes:
      "PKLR遺伝子変異によるピルビン酸キナーゼ（赤血球型）の活性低下。解糖系後段の障害でATP産生不全→赤血球変形能低下→早期破壊。2,3-DPG蓄積による酸素解離曲線右方移動（組織への酸素供給は比較的保たれる）。",
    diagnosis:
      "ピルビン酸キナーゼ酵素活性低下（自動化蛍光アッセイ）。PKLR遺伝子検査。溶血の検査所見（LDH高値・ハプトグロビン低値・網状赤血球増多）。",
    treatment:
      "輸血（重症例）。鉄キレート療法。脾摘（溶血・輸血量軽減）。ミタピバット（活性化剤：近年承認）。造血幹細胞移植（重症例）。",
    prognosis:
      "ミタピバットの登場で治療が進歩。脾摘と組み合わせることで輸血非依存を達成できる例が増えている。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Pyruvate+Kinase+Deficiency",
  },
  {
    slug: "congenital-bile-acid-synthesis-disorder",
    name: "先天性胆汁酸合成異常症",
    nameEn: "Congenital Bile Acid Synthesis Disorder",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "胆汁酸合成経路の酵素欠乏による先天性代謝異常症。正常な胆汁酸が産生されず、肝毒性を有する中間代謝物が蓄積することで進行性肝疾患・神経障害を来す。新生児肝炎・慢性肝疾患の希少な原因となる。",
    symptoms: [
      "新生児肝炎・黄疸（直接型）",
      "進行性胆汁うっ滞性肝疾患",
      "脂溶性ビタミン欠乏（A・D・E・K）",
      "神経障害（小脳失調・ニューロパチー：一部の型）",
      "成長障害",
      "低γGTP（GGT正常〜低値）",
    ],
    causes:
      "複数の酵素欠乏（3β-HSD・Δ4-3-oxosteroid 5β-reductase・AMACR・SCP2等）。それぞれ異なる遺伝子変異による常染色体劣性遺伝。コール酸・ケノデオキシコール酸が産生されず、異常胆汁酸が肝細胞障害を引き起こす。",
    diagnosis:
      "尿中胆汁酸分析（FAB-MS：異常胆汁酸の同定）。血清胆汁酸（正常〜低値）。低GGTの胆汁うっ滞。遺伝子検査。肝生検（胆汁うっ滞・肝細胞障害）。",
    treatment:
      "一次胆汁酸補充（コール酸：多くの型で有効）。脂溶性ビタミン補充。コール酸補充により肝機能が著明に改善する型が多い。肝移植（重症・コール酸無効例）。",
    prognosis:
      "早期診断・コール酸投与で良好な予後が期待できる型が多い。診断遅延例では進行性肝硬変・肝不全を来す。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Bile+Acid+Synthesis+Disorder",
  },
  {
    slug: "alagille-syndrome",
    name: "アラジール症候群",
    nameEn: "Alagille Syndrome",
    nanbyoNumber: 169,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "JAG1またはNOTCH2遺伝子変異による常染色体優性の多臓器発達異常症候群。肝内胆管減少症を主体とし、心疾患・蝶形椎骨・眼角膜後胎生輪・特徴的顔貌を三徴として呈する。",
    symptoms: [
      "新生児期〜乳児期の黄疸・胆汁うっ滞",
      "掻痒症（重篤な場合がある）",
      "先天性心疾患（肺動脈狭窄が最多）",
      "蝶形椎骨",
      "眼後胎生輪（角膜）",
      "特徴的顔貌（広い額・深い眼窩・長い鼻）",
    ],
    causes:
      "JAG1遺伝子変異（約94%）またはNOTCH2変異（約1〜2%）による常染色体優性遺伝。Notchシグナル経路の障害が肝内胆管・心臓・骨格・眼・腎の発達異常を引き起こす。",
    diagnosis:
      "肝生検（肝内胆管数減少：胆管/門脈比<0.5）。JAG1/NOTCH2遺伝子検査。心エコー（肺動脈狭窄）。脊椎X線（蝶形椎骨）。眼科（後胎生輪）。",
    treatment:
      "胆汁うっ滞：UDCA・コレスチラミン・リファンピシン（掻痒症）。栄養管理（MCTオイル・脂溶性ビタミン補充）。心疾患手術。肝移植（肝不全・QOL不良例）。",
    prognosis:
      "表現型は多様。約15〜25%が成人前に肝移植を要する。心疾患の重症度が予後を左右する場合もある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Alagille+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/169",
  },
  {
    slug: "biliary-atresia",
    name: "胆道閉鎖症",
    nameEn: "Biliary Atresia",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "生後間もなく肝外胆管が進行性に閉塞・消失する希少な小児肝疾患。早期に葛西手術（肝門部腸管吻合術）を行わなければ急速に肝硬変・肝不全へ進行する。肝移植を要する小児の最大原因疾患。",
    symptoms: [
      "遷延性新生児黄疸（直接型）",
      "灰白色便（胆汁流出障害）",
      "腹部膨満・肝脾腫大",
      "栄養障害・成長不良",
      "肝硬変・腹水・食道静脈瘤（進行期）",
    ],
    causes:
      "原因不明。出生前・周産期のウイルス感染（ロタウイルス・CMV等）・免疫異常・胆管発達障害が複合的に関与すると考えられている。遺伝的素因の関与も示唆される。",
    diagnosis:
      "肝胆道シンチグラフィ（胆汁排泄障害）。腹部超音波（胆嚢低形成・triangular cord sign）。直接ビリルビン優位の高ビリルビン血症。肝生検（胆管増生・線維化）。術中胆道造影（確定診断）。",
    treatment:
      "葛西手術（生後60日以内：肝門部空腸吻合術）が第一選択。胆汁流出不良例・肝硬変進行例：肝移植（生体・脳死）。術後：UDCA・栄養管理・感染予防。",
    prognosis:
      "早期葛西手術で自己肝生存率が向上するが、長期的に約50〜70%が肝移植を要する。肝移植後の長期生存率は良好（>80%）。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Biliary+Atresia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/167",
  },
  {
    slug: "familial-adenomatous-polyposis",
    name: "家族性腺腫性ポリポーシス（FAP）",
    nameEn: "Familial Adenomatous Polyposis",
    nanbyoNumber: 191,
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "APC遺伝子変異による常染色体優性の大腸ポリポーシス症候群。大腸に100個以上（多い場合は数千個）の腺腫性ポリープが生じ、放置すると必ず大腸癌へ進行する。デスモイド腫瘍・上部消化管病変・硬膜線維腫等の腸管外病変も合併する。",
    symptoms: [
      "多発大腸腺腫（思春期〜20歳代から出現）",
      "血便・下痢",
      "大腸癌（未治療では40歳代までにほぼ全例）",
      "デスモイド腫瘍（腹腔内・腸間膜）",
      "十二指腸・胃ポリープ",
      "網膜色素上皮過誤腫（CHRPE）",
    ],
    causes:
      "APC遺伝子（5q22.2）変異による常染色体優性遺伝（新生変異が約25%）。APC蛋白はβ-カテニン分解を調節し、Wntシグナルの過活性化がポリープ形成を促す。",
    diagnosis:
      "下部消化管内視鏡（多発腺腫）。APC遺伝子検査（確定・家族スクリーニング）。上部消化管内視鏡・デスモイド評価（CT）。",
    treatment:
      "予防的大腸切除術（全大腸切除・回腸嚢肛門吻合術または回腸直腸吻合術）。定期内視鏡。デスモイド：スリンダク・抗エストロゲン薬・imatinib・手術。",
    prognosis:
      "予防的手術で大腸癌を回避できる。主な死因はデスモイド腫瘍・十二指腸癌・術後合併症。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Familial+Adenomatous+Polyposis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/191",
  },
  {
    slug: "congenital-central-hypoventilation",
    name: "先天性中枢性肺胞低換気症候群（オンディーヌの呪い）",
    nameEn: "Congenital Central Hypoventilation Syndrome",
    nanbyoNumber: 126,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "PHOX2B遺伝子変異による自律性呼吸調節の障害。睡眠中（特に非REM睡眠）に自発呼吸が著減・停止し、高CO2・低酸素血症を来す。自律神経系の広範な障害（Hirschsprung病・神経芽腫等）を合併することがある。",
    symptoms: [
      "睡眠中の呼吸停止・低換気",
      "覚醒時呼吸は正常または軽度障害",
      "チアノーゼ・無呼吸（新生児期から）",
      "自律神経障害（発汗異常・瞳孔反応異常）",
      "Hirschsprung病合併（約20%）",
      "神経芽腫・神経節神経腫（一部）",
    ],
    causes:
      "PHOX2B遺伝子のポリアラニンリピート伸長変異（約90%：正常20/20→20/25〜20/33等）または点変異。常染色体優性遺伝（新生変異が多い）。PHOX2Bは自律神経系の発達に必須の転写因子。",
    diagnosis:
      "睡眠ポリグラフ検査（低換気の証明）。PHOX2B遺伝子検査（確定）。Hirschsprung病・神経芽腫のスクリーニング。",
    treatment:
      "生涯にわたる換気補助が必須。睡眠時陽圧換気（NIPPV）・気管切開人工換気。横隔神経ペースメーカー（一部症例）。",
    prognosis:
      "適切な換気補助で生存・成長が可能。知的発達は換気管理の質に依存する。リピート長が長いほど重篤（覚醒時も換気補助が必要）。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Central+Hypoventilation+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/126",
  },
  {
    slug: "ebstein-anomaly",
    name: "エブスタイン病",
    nameEn: "Ebstein's Anomaly",
    nanbyoNumber: 152,
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "三尖弁が右室内に下方偏位・形成異常を来す先天性心疾患。右室が「心房化右室」と機能的右室に分かれ、三尖弁閉鎖不全・右心不全・不整脈（WPW症候群等）を来す。重症度は軽微から胎児・新生児期死亡まで幅広い。",
    symptoms: [
      "チアノーゼ（右左短絡）",
      "心不全症状（呼吸困難・浮腫・疲労）",
      "不整脈（発作性上室性頻拍・WPW症候群）",
      "運動耐容能低下",
      "心房中隔欠損・卵円孔開存の合併",
    ],
    causes:
      "三尖弁の心内膜クッションからの剥離異常による先天性形成不全。原因は多因子性。妊娠初期のリチウム曝露との関連が報告されていたが、現在は弱い関連とされる。",
    diagnosis:
      "心エコー（三尖弁の下方偏位・三尖弁閉鎖不全・心房化右室）。胸部X線（心拡大）。心電図（WPW・右脚ブロック・P波高大）。心臓カテーテル検査。",
    treatment:
      "軽症：経過観察・薬物療法（不整脈）。手術：三尖弁修復/置換術・コーン術・心房中隔欠損閉鎖。WPW：カテーテルアブレーション。重症新生児：Blalock-Taussig短絡・一心室修復。",
    prognosis:
      "軽症〜中等症は適切な手術で予後良好。重症型（特に胎児・新生児）は手術リスクが高い。長期的な不整脈・右室機能の管理が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Ebstein+Anomaly",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/152",
  },
  {
    slug: "single-ventricle",
    name: "単心室症",
    nameEn: "Single Ventricle / Univentricular Heart",
    nanbyoNumber: 154,
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "心臓に機能的に1つの心室しか存在しない先天性心疾患の総称。三尖弁閉鎖・左心低形成症候群・両大血管右室起始（一心室型）等を含む。Fontan手術による段階的外科治療で生存が可能になった。",
    symptoms: [
      "チアノーゼ（混合血）",
      "心不全症状（呼吸困難・浮腫）",
      "運動耐容能低下",
      "Fontan循環特有の合併症（蛋白漏出性腸症・肝機能障害・不整脈）",
      "成長障害",
    ],
    causes:
      "先天性の心臓発育異常（多因子性）。一部に遺伝子異常（GATA4・NKX2.5等）が関与。心室の一つが低形成・欠如し、もう一方が両心室の機能を担う。",
    diagnosis:
      "心エコー（心臓解剖の評価）。心臓カテーテル検査・造影CT（術前評価）。心電図。",
    treatment:
      "段階的外科治療：①Blalock-Taussig短絡（新生児期）→②Glenn手術（上大静脈肺動脈吻合：生後6ヶ月）→③Fontan手術（全体静脈肺動脈接続：2〜4歳）。Fontan循環の長期合併症管理が必要。",
    prognosis:
      "Fontan手術後の20年生存率は約70〜80%に向上。長期的なFontan循環の破綻（蛋白漏出性腸症・肝線維化・不整脈・心不全）が課題。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Single+Ventricle+Univentricular+Heart",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/154",
  },
  {
    slug: "kartagener-syndrome",
    name: "カルタゲナー症候群",
    nameEn: "Kartagener Syndrome",
    nanbyoNumber: 121,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "内臓逆位・気管支拡張症・副鼻腔炎の三徴を呈する原発性線毛機能不全症（PCD）の一型。線毛の動力タンパク（ダイニン）の遺伝子変異により線毛が正常に動かず、気道粘液クリアランス・内臓位置決定・精子運動が障害される。",
    symptoms: [
      "内臓逆位（右胸心・腹部臓器逆位）",
      "慢性気管支炎・気管支拡張症",
      "慢性副鼻腔炎・鼻ポリープ",
      "慢性中耳炎",
      "男性不妊（精子無力症）",
      "女性不妊（線毛機能障害）",
    ],
    causes:
      "DNAI1・DNAI2・DNAH5・DNAH11等の多数の遺伝子変異による常染色体劣性遺伝。外腕ダイニン等の線毛運動装置の欠損・機能不全。内臓逆位はPCDの約50%に生じる（Kartagener症候群）。",
    diagnosis:
      "鼻NO測定（著明に低値）。電子顕微鏡（気管支粘膜の線毛構造異常）。高速ビデオ顕微鏡（線毛運動パターン）。遺伝子パネル検査。胸部CT（気管支拡張）。",
    treatment:
      "気道クリアランス（理学療法・吸入生理食塩水）。抗菌薬（感染急性増悪・長期予防投与）。副鼻腔・耳の管理。男性不妊：顕微授精（ICSI）。",
    prognosis:
      "適切な気道管理で肺機能低下を遅延できる。反復感染・気管支拡張の進行が長期的課題。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Kartagener+Syndrome+Primary+Ciliary",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/121",
  },
  {
    slug: "loeys-dietz-syndrome",
    name: "ロイス・ディーツ症候群",
    nameEn: "Loeys-Dietz Syndrome",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "TGFBR1・TGFBR2・SMAD3・TGFB2・TGFB3遺伝子変異によるTGF-βシグナル関連の遺伝性大動脈瘤・解離症候群。マルファン症候群と異なり大動脈弁上・頭頸部動脈瘤が多く、より早期に手術介入が必要。ぶどう膜・口蓋垂二裂等を合併。",
    symptoms: [
      "大動脈瘤・大動脈解離（若年発症）",
      "頸動脈・頭蓋内動脈瘤",
      "関節過可動性・側弯",
      "眼距離増大・口蓋垂二裂",
      "クモ状指・漏斗胸・鳩胸",
      "皮膚菲薄化・皮下出血しやすい",
    ],
    causes:
      "TGFBR1/2（I/II型）・SMAD3（III型）・TGFB2（IV型）・TGFB3（V型）の常染色体優性変異。TGF-βシグナル過活性化による結合組織の構造異常。",
    diagnosis:
      "臨床症状・家族歴。遺伝子パネル検査（TGFBR1/2・SMAD3・TGFB2/3）。大動脈・全身動脈MRA・CT（動脈瘤・解離の評価）。眼科・整形外科評価。",
    treatment:
      "β遮断薬・ARB（大動脈拡大抑制）。大動脈手術（より小さい径で介入：マルファンより基準が厳しい）。動脈瘤の定期画像監視。",
    prognosis:
      "早期診断・定期的モニタリングと予防的手術により予後改善。未診断の解離・破裂が主な死因。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Loeys+Dietz+Syndrome",
  },
  {
    slug: "pseudoxanthoma-elasticum",
    name: "弾性線維性仮性黄色腫（PXE）",
    nameEn: "Pseudoxanthoma Elasticum",
    nanbyoNumber: 339,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "ABCC6遺伝子変異による常染色体劣性の結合組織疾患。皮膚・眼・心血管系の弾性線維に異常石灰化が生じる。特徴的な「鶏皮様」皮膚変化・眼底血管様線条・早発動脈硬化・消化管出血が主な臨床像。",
    symptoms: [
      "皮膚の鶏皮様変化（頸部・腋窩・鼠径部）",
      "眼底血管様線条（Bruch膜亀裂）",
      "脈絡膜新生血管・視力低下（加齢黄斑変性様）",
      "早発動脈硬化・末梢血管疾患",
      "消化管出血（胃動脈石灰化）",
      "狭心症・心筋梗塞（若年発症）",
    ],
    causes:
      "ABCC6遺伝子変異による常染色体劣性遺伝。ABCC6蛋白は肝・腎での無機ピロリン酸（PPi）産生に関与し、PPi欠乏により弾性線維への病的石灰化（ハイドロキシアパタイト沈着）が起こる。",
    diagnosis:
      "皮膚生検（弾性線維の石灰化：von Kossa染色）。眼底検査（血管様線条）。ABCC6遺伝子検査。",
    treatment:
      "根本治療なし。ビタミンK補充（石灰化抑制・臨床試験）。眼科的治療（抗VEGF薬：脈絡膜新生血管）。心血管リスク管理。コンタクトスポーツ回避（眼底出血リスク）。",
    prognosis:
      "視力障害・心血管疾患が主な合併症。適切な管理で長期生存は可能だが、QOL障害が問題となる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Pseudoxanthoma+Elasticum",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/339",
  },
  {
    slug: "netherton-syndrome",
    name: "ネザートン症候群",
    nameEn: "Netherton Syndrome",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "SPINK5遺伝子変異による常染色体劣性の先天性皮膚疾患。先天性魚鱗癬（回旋状線状魚鱗癬）・竹節状毛髪・アトピー性素因（IgE高値・アレルギー）の三徴を呈する。皮膚バリア機能が著しく障害され、感染・高体温が問題となる。",
    symptoms: [
      "先天性紅皮症・魚鱗癬（回旋状線状）",
      "竹節状毛髪（trichorrhexis invaginata）",
      "IgE高値・アトピー性皮膚炎",
      "食物アレルギー・アナフィラキシー",
      "高体温（発汗障害）",
      "反復皮膚感染",
    ],
    causes:
      "SPINK5遺伝子変異によるLEKTI（リンフォエピセリアルカリクレイン阻害剤）欠乏。カリクレイン（KLK5・KLK7）の過剰活性化→角質細胞剥離亢進・バリア機能障害・炎症促進。",
    diagnosis:
      "臨床三徴。毛髪の電子顕微鏡（竹節状毛髪）。SPINK5遺伝子検査。皮膚生検。IgE高値・好酸球増多。",
    treatment:
      "皮膚保湿・エモリエント（大量）。外用ステロイド・タクロリムス（炎症）。感染管理（抗菌薬）。体温調節（冷却）。IL-4/13阻害薬（デュピルマブ）の有効性が報告されている。",
    prognosis:
      "生涯にわたる皮膚管理が必要。幼少期は重篤な感染リスクがあり、成人になると若干改善する傾向あり。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Netherton+Syndrome",
  },
  {
    slug: "congenital-stationary-night-blindness",
    name: "先天性停止性夜盲症（CSNB）",
    nameEn: "Congenital Stationary Night Blindness",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "夜間視力低下（夜盲）を呈するが進行しない先天性網膜疾患群。網膜の光受容体（桿体・錐体）からの信号伝達障害が原因で、進行性の視野障害はない。近視・眼振・斜視を合併することが多い。",
    symptoms: [
      "夜盲（暗所での視力低下）",
      "高度近視（多くの型で）",
      "眼振",
      "斜視",
      "昼間視力は比較的保たれる",
    ],
    causes:
      "X連鎖型（CACNA1F・NYX遺伝子変異）・常染色体劣性型（CABP4・TRPM1・GPR179・LRIT3等）・常染色体優性型（GNAT1・CACNA1S等）など多数の遺伝子型が存在する。光信号から双極細胞への伝達経路の障害。",
    diagnosis:
      "網膜電図（ERG）：桿体反応の特徴的パターン（完全型・不完全型）。眼底検査（正常または軽微な変化）。遺伝子パネル検査。",
    treatment:
      "根本治療なし。眼鏡・コンタクトレンズ（屈折矯正）。弱視治療（眼帯・プリズム）。暗所での補助具。",
    prognosis:
      "視力は安定しており、進行性の変性はない。近視・眼振による視力障害が主な機能的問題。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Stationary+Night+Blindness",
  },
  {
    slug: "congenital-glaucoma",
    name: "先天性緑内障",
    nameEn: "Congenital Glaucoma",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "出生時または生後間もなく発症する房水流出路（隅角）の発達異常による眼圧上昇。角膜混濁・牛眼（眼球拡大）・視神経障害を来し、早期外科治療が行われなければ不可逆的な失明に至る。",
    symptoms: [
      "眼球拡大（牛眼：Buphthalmos）",
      "角膜混濁・浮腫",
      "羞明（光過敏）・流涙",
      "眼圧上昇",
      "視神経障害（視野欠損）",
    ],
    causes:
      "CYP1B1遺伝子変異（常染色体劣性：原発性先天性緑内障の最多原因）・LTBP2等。隅角（前隅角）の発達不全による房水流出抵抗増大。一部は他の先天異常症候群に合併（Axenfeld-Rieger症候群等）。",
    diagnosis:
      "全身麻酔下眼科診察（眼圧測定・角膜径・隅角鏡）。眼底（視神経乳頭）評価。CYP1B1遺伝子検査。",
    treatment:
      "外科治療が第一選択：隅角切開術（goniotomy）または線維柱帯切開術（trabeculotomy）。薬物療法（点眼：補助的）。繰り返し手術が必要なことがある。",
    prognosis:
      "早期外科治療で眼圧コントロール可能な例は視力を保つことができる。治療遅延・難治例では視機能障害が残遺する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Congenital+Glaucoma",
  },
  {
    slug: "dent-disease",
    name: "デント病",
    nameEn: "Dent Disease",
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "CLCN5（Dent病1型）またはOCRL（Dent病2型）遺伝子変異によるX連鎖性の腎近位尿細管疾患。低分子蛋白尿・高カルシウム尿症・腎石灰化・腎石灰化・腎不全を特徴とする。男性のみが重篤な症状を呈する。",
    symptoms: [
      "低分子蛋白尿（β2ミクログロブリン等）",
      "高カルシウム尿症",
      "腎石灰化・尿路結石",
      "アミノ酸尿・リン酸尿（ファンコニ症候群様）",
      "慢性腎不全（進行性：成人期）",
      "くる病・骨軟化症（低リン血症）",
    ],
    causes:
      "CLCN5遺伝子変異（ClC-5塩素チャネル欠損：Dent病1型）・OCRL変異（Dent病2型）。X連鎖性劣性遺伝（男性発症）。近位尿細管エンドソーム機能障害による蛋白再吸収不全・カルシウム代謝異常。",
    diagnosis:
      "尿検査（低分子蛋白尿・高カルシウム尿・アミノ酸尿）。腎超音波・CT（腎石灰化）。CLCN5/OCRL遺伝子検査。eGFR。",
    treatment:
      "根本治療なし。低カルシウム・低シュウ酸食。十分な水分摂取（尿路結石予防）。サイアザイド利尿薬（高カルシウム尿軽減）。腎不全管理（透析・腎移植）。",
    prognosis:
      "多くの男性患者が中年（30〜50歳代）までに末期腎不全に至る。腎移植後も低分子蛋白尿は持続するが腎機能は回復する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Dent+Disease",
  },
  {
    slug: "primary-hyperoxaluria",
    name: "原発性高シュウ酸尿症",
    nameEn: "Primary Hyperoxaluria",
    nanbyoNumber: 228,
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "シュウ酸代謝酵素の遺伝的欠乏により尿中シュウ酸排泄が著明に増加し、反復性腎石灰化・尿路結石・進行性腎不全を来す希少疾患。1型（AGXT遺伝子：最多・最重症）・2型（GRHPR）・3型（HOGA1）に分類される。",
    symptoms: [
      "反復性腎石灰化・尿路結石（幼少期から）",
      "血尿・側腹部疼痛（結石発作）",
      "進行性腎不全",
      "腎不全後のシュウ酸全身沈着（心臓・骨・眼・神経：1型）",
      "骨折（骨シュウ酸沈着）",
    ],
    causes:
      "1型：AGXT変異（肝ペルオキシソーム内アラニングリオキシル酸アミノトランスフェラーゼ欠乏）。2型：GRHPR変異。3型：HOGA1変異。シュウ酸の過剰産生により尿中シュウ酸カルシウム結晶形成・腎障害が進行。",
    diagnosis:
      "24時間蓄尿シュウ酸定量（著明高値）。腎超音波・CT（腎石灰化・結石）。遺伝子検査（AGXT/GRHPR/HOGA1）。肝生検（酵素活性測定：1型）。",
    treatment:
      "高水分摂取（尿希釈）。シュウ酸制限食・低脂肪食。ビタミンB6（1型のピリドキシン反応型）。Lumasiran（siRNA：AGXT干渉：1型で承認）。肝腎同時移植（1型の根治療法）。",
    prognosis:
      "1型は最重症で腎不全に至ることが多い。Lumasiranの登場で治療が大きく改善。2・3型は比較的軽症。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Primary+Hyperoxaluria",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/228",
  },
  {
    slug: "renal-fanconi-syndrome",
    name: "腎性ファンコニ症候群",
    nameEn: "Renal Fanconi Syndrome",
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "腎近位尿細管の多発性輸送機能障害により、グルコース・アミノ酸・リン酸・重炭酸・尿酸・低分子蛋白等が過剰に尿中へ排泄される症候群。多くの原因疾患（シスチン症・Wilson病・ロウ症候群・毒性物質等）の共通病態として現れる。",
    symptoms: [
      "低リン血症・くる病/骨軟化症",
      "低カリウム血症",
      "代謝性アシドーシス（重炭酸喪失）",
      "アミノ酸尿・糖尿（血糖正常）",
      "低尿酸血症",
      "多尿・脱水（原因疾患により異なる）",
    ],
    causes:
      "原発性：EHHADH・SLC34A1等の遺伝子変異。続発性：シスチン症（最多小児原因）・Wilson病・ガラクトース血症・糖原病・毒性物質（鉛・水銀・カドミウム）・薬剤（テノホビル・シスプラチン）・多発性骨髄腫。",
    diagnosis:
      "尿中グルコース・アミノ酸・リン酸・重炭酸・低分子蛋白の測定（多発性障害の確認）。原因疾患の検索（シスチン症：白血球シスチン・眼科；Wilson病：銅代謝等）。",
    treatment:
      "原因疾患の治療（シスチン症：シスタミン；Wilson病：キレート療法）。電解質補充（リン酸・カリウム・重炭酸）。ビタミンD（くる病治療）。",
    prognosis:
      "原因疾患の治療が可能であれば改善が期待できる。放置すると骨軟化症・成長障害・腎不全が進行する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Renal+Fanconi+Syndrome",
  },
  {
    slug: "corrected-transposition",
    name: "修正大血管転位（ccTGA）",
    nameEn: "Congenitally Corrected Transposition of the Great Arteries",
    nanbyoNumber: 153,
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "心室と大血管の両方が転位することで血流方向は正常（修正）されるが、形態的右室が体循環を担う先天性心疾患。体循環を支える右室の長期的疲弊・三尖弁逆流・完全房室ブロックが主な問題。",
    symptoms: [
      "無症状（単純型）〜心不全（合併症による）",
      "チアノーゼ（VSD・PS合併時）",
      "完全房室ブロック（徐脈・失神）",
      "三尖弁（体側房室弁）逆流",
      "右室（体循環心室）機能低下",
      "Wolff-Parkinson-White症候群合併例あり",
    ],
    causes:
      "左右の心室ループ形成異常（L-ループ）により心室転位と大血管転位が同時に起こる。多因子性。心室中隔欠損（VSD）・肺動脈狭窄（PS）・完全房室ブロックを高頻度に合併する。",
    diagnosis:
      "心エコー（解剖評価：心室形態・大血管起始・弁機能）。心臓MRI（右室容積・機能）。心臓カテーテル検査。心電図（房室ブロック・WPW）。",
    treatment:
      "合併奇形の手術。完全房室ブロック：ペースメーカー。右室機能低下・三尖弁逆流：手術（二心室修復・解剖学的修復）。重症心不全：心臓移植。",
    prognosis:
      "単純型は長期間無症状であるが、体循環右室は加齢とともに機能低下する。定期的フォローアップと適切な手術タイミングが予後を左右する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Corrected+Transposition+Great+Arteries",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/153",
  },
  {
    slug: "pachyonychia-congenita",
    name: "パキオニキア先天症（先天性厚皮症）",
    nameEn: "Pachyonychia Congenita",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "KRT6A・KRT6B・KRT6C・KRT16・KRT17遺伝子変異による常染色体優性の先天性角化異常症。爪の著明な肥厚・硬化、足底の疼痛性角化症（掌蹠角化症）、口腔粘膜白板症、毛包性角化症が特徴。足底疼痛が主なQOL障害因子。",
    symptoms: [
      "爪の著明な肥厚・変色（全爪）",
      "足底の疼痛性角化症（歩行困難）",
      "掌の角化症",
      "口腔粘膜白板症",
      "毛包性角化症",
      "多汗症・水疱形成（足底）",
    ],
    causes:
      "ケラチン遺伝子（KRT6A/B/C・KRT16・KRT17）の機能獲得変異による常染色体優性遺伝。中間径フィラメント（ケラチン）のドミナントネガティブ効果が角化細胞の機能障害を引き起こす。",
    diagnosis:
      "臨床症状（爪肥厚・足底角化症）。家族歴。遺伝子検査（KRT6A/B/C・KRT16・KRT17）。皮膚生検（角化亢進）。",
    treatment:
      "根本治療なし。足底ケア（定期的な角質除去・フットケア）。鎮痛薬（足底疼痛）。レチノイド（効果限定的）。mTOR阻害薬（rapamycin：局所塗布：臨床試験）。",
    prognosis:
      "生涯持続するが生命予後は正常。足底疼痛・歩行障害が主なQOL障害。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Pachyonychia+Congenita",
  },
  {
    slug: "twenty-nail-dystrophy",
    name: "二十爪ジストロフィー（全爪ジストロフィー）",
    nameEn: "Twenty-Nail Dystrophy / Trachyonychia",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "全20爪（手指10爪・足趾10爪）が粗糙・混濁・縦走線・もろさを示す爪疾患。「砂用紙爪」とも呼ばれる。扁平苔癬・円形脱毛症・アトピー性皮膚炎・尋常性乾癬等の皮膚疾患に合併する場合と、特発性の場合がある。",
    symptoms: [
      "全爪の表面粗糙（縦走線・点状陥凹）",
      "爪の混濁・不透明化",
      "爪のもろさ・欠損",
      "光沢消失",
      "関連皮膚疾患の症状（合併型）",
    ],
    causes:
      "特発性（原因不明）または扁平苔癬・円形脱毛症・アトピー性皮膚炎・乾癬等の皮膚疾患に続発。特発性は小児に多く、爪母への炎症性変化が推定される。",
    diagnosis:
      "臨床診断（全爪の特徴的外観）。関連疾患の検索（皮膚科的評価）。爪生検（扁平苔癬等の病理確認：必要時）。",
    treatment:
      "原因疾患の治療。局所ステロイド（爪周囲）。特発性は経過観察で自然軽快することが多い（特に小児）。",
    prognosis:
      "特発性小児型は数年以内に自然改善することが多い。扁平苔癬型は慢性経過。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Twenty+Nail+Dystrophy+Trachyonychia",
  },
  {
    slug: "williams-campbell-syndrome",
    name: "ウィリアムズ・キャンベル症候群",
    nameEn: "Williams-Campbell Syndrome",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "気管支軟骨の先天性欠如による希少な先天性気道疾患。第3〜8次気管支の軟骨が欠如し、呼気時に中枢気道が虚脱・拡張を繰り返すことで気管支拡張症・反復肺感染を来す。気管気管支軟化症の一型。",
    symptoms: [
      "幼少期から反復する気管支炎・肺炎",
      "慢性咳嗽・喀痰",
      "喘鳴（呼気性）",
      "気管支拡張症",
      "労作時呼吸困難（進行期）",
      "ばち指",
    ],
    causes:
      "気管支の発育過程での軟骨形成不全（先天性）。常染色体劣性遺伝が示唆されているが遺伝子は特定されていない。",
    diagnosis:
      "胸部HRCT（中枢気道拡張・呼気時虚脱・気管支拡張）。気管支鏡（軟骨欠如の確認）。肺機能検査（閉塞性換気障害）。",
    treatment:
      "気道クリアランス（理学療法）。抗菌薬（感染急性増悪・長期予防）。気管支拡張薬（吸入β2刺激薬）。重症例：気管支ステント・手術（肺切除）。",
    prognosis:
      "進行性に気管支拡張・肺機能低下をきたす。適切な感染管理でQOL維持を図る。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Williams+Campbell+Syndrome",
  },
  {
    slug: "peroxisomal-disorder",
    name: "ペルオキシソーム病（非レフサム型）",
    nameEn: "Peroxisomal Biogenesis Disorder",
    nanbyoNumber: 235,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "PEX遺伝子群の変異によるペルオキシソーム形成障害（PBD：Peroxisomal Biogenesis Disorder）の総称。ツェルウェーガー症候群スペクトラム（ZSD）が代表的で、神経発達障害・肝疾患・感覚障害・骨格異常を呈する。",
    symptoms: [
      "重度の筋緊張低下・発達遅滞（重症型）",
      "特徴的顔貌（広い額・眼距離増大）",
      "てんかん",
      "網膜変性・聴力障害",
      "肝機能障害・黄疸",
      "骨点状石灰化",
    ],
    causes:
      "PEX1（最多）・PEX2・PEX3・PEX5・PEX6・PEX10・PEX12・PEX13・PEX14・PEX16・PEX19・PEX26等のPEX遺伝子変異による常染色体劣性遺伝。ペルオキシソームの生合成障害→超長鎖脂肪酸・フィタン酸・ピペコリン酸等の蓄積。",
    diagnosis:
      "血漿超長鎖脂肪酸（VLCFA）高値。ピペコリン酸・フィタン酸高値（一部）。血漿プラスマローゲン低値。PEX遺伝子パネル検査。脳MRI（白質異常・脳回形成異常）。",
    treatment:
      "根本治療なし。対症療法：栄養管理・てんかん治療・難聴への対応・視力補助。DHA補充（臨床試験）。",
    prognosis:
      "重症型（Zellweger症候群）は生後数ヶ月以内に死亡することが多い。中等症〜軽症型は成人まで生存するが神経・感覚障害が進行する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Peroxisomal+Biogenesis+Disorder",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/235",
  },
  {
    slug: "restrictive-cardiomyopathy-hereditary",
    name: "遺伝性拘束型心筋症",
    nameEn: "Hereditary Restrictive Cardiomyopathy",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "心筋の拡張障害（拡張能障害）が主体で収縮能は比較的保たれる稀な心筋症。心室充満障害から心房拡大・心不全・不整脈・血栓塞栓症を来す。TNNI3・TNNT2・MYH7等の遺伝子変異による常染色体優性遺伝型がある。",
    symptoms: [
      "労作時呼吸困難・易疲労感",
      "浮腫（下腿・腹水）",
      "起坐呼吸",
      "動悸・不整脈（心房細動）",
      "血栓塞栓症（脳梗塞等）",
      "小児発症例では急速な悪化",
    ],
    causes:
      "遺伝性：TNNI3・TNNT2・MYH7・MYL2・TPM1等のサルコメア遺伝子変異。その他：デスミン蓄積症・トロポニン異常等。続発性（アミロイドーシス・ヘモクロマトーシス・サルコイドーシス等）との鑑別が必要。",
    diagnosis:
      "心エコー（両心房拡大・左室壁厚正常・拡張能障害）。心臓カテーテル（Square-root sign）。心臓MRI（心筋線維化評価）。遺伝子パネル検査。心筋生検（原因検索）。",
    treatment:
      "利尿薬（うっ血改善）。抗凝固薬（心房細動・血栓予防）。β遮断薬（心拍数管理）。根本治療なし（原因が特定可能な場合は原因治療）。心臓移植（重症末期例）。",
    prognosis:
      "予後不良。特に小児発症例は急速に悪化し心臓移植が必要になることが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Restrictive+Cardiomyopathy+Hereditary",
  },

  // ─── 神経・筋疾患（追加） ────────────────────────────────
  {
    slug: "olivopontocerebellar-atrophy",
    name: "オリーブ橋小脳萎縮症",
    nameEn: "Olivopontocerebellar Atrophy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "小脳・橋・下オリーブ核が進行性に萎縮する神経変性疾患。多系統萎縮症の一亜型としても位置づけられ、小脳性運動失調を主体とし、自律神経障害・パーキンソン症状を合併することが多い。",
    symptoms: [
      "小脳性運動失調（歩行障害・四肢の協調運動障害）",
      "構音障害・嚥下困難",
      "自律神経障害（起立性低血圧・排尿障害）",
      "眼球運動障害",
      "パーキンソン症状（振戦・筋強剛）",
    ],
    causes:
      "孤発性（多系統萎縮症小脳型）と遺伝性（脊髄小脳失調症の一部）がある。αシヌクレインの異常蓄積が孤発性の主な病態。遺伝性では各種SCA遺伝子変異が原因となる。",
    diagnosis:
      "MRIで小脳・橋・下オリーブ核の萎縮を確認。筋電図・自律神経機能検査・遺伝子検査を組み合わせて診断する。多系統萎縮症の診断基準に準じる。",
    treatment:
      "根本的治療法はなく、症状緩和が中心。小脳失調にはタルチレリン水和物、パーキンソン症状にはレボドパ（効果は限定的）、自律神経症状には対症療法を行う。",
    prognosis:
      "発症から5〜10年で車椅子状態、その後呼吸障害・肺炎等で死亡することが多い。孤発性は遺伝性より進行が速い傾向がある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Olivopontocerebellar+Atrophy",
  },
  {
    slug: "bulbar-palsy-progressive",
    name: "球脊髄性筋萎縮症（延髄麻痺）",
    nameEn: "Progressive Bulbar Palsy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "延髄の運動ニューロンが選択的に障害され、構音障害・嚥下困難・舌萎縮を主症状とする疾患。ALSの一亜型または独立した疾患として扱われ、進行性に呼吸障害へ至る。",
    symptoms: [
      "構音障害（鼻声・呂律困難）",
      "嚥下困難・誤嚥",
      "舌萎縮・線維束性収縮",
      "顔面筋力低下",
      "呼吸筋麻痺（進行期）",
    ],
    causes:
      "上位・下位運動ニューロンの変性が延髄レベルで優位に生じる。多くはALSの延髄型発症とされ、TDP-43異常蓄積が病態に関与する。",
    diagnosis:
      "神経学的診察・筋電図（延髄支配筋の脱神経所見）・MRI（延髄の萎縮）・嚥下機能評価により診断。ALSのEl Escorial基準に準じる。",
    treatment:
      "リルゾール・エダラボン。嚥下障害には胃瘻造設・経腸栄養管理。呼吸管理（非侵襲的陽圧換気・気管切開）。言語聴覚士によるコミュニケーション支援。",
    prognosis:
      "延髄型発症のALSは呼吸障害の進行が速く、予後は四肢型より不良な傾向がある。発症から2〜3年で人工呼吸器が必要になることが多い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Progressive+Bulbar+Palsy",
  },
  {
    slug: "dravet-syndrome",
    name: "ドラベ症候群（乳児重症ミオクロニーてんかん）",
    nameEn: "Dravet Syndrome",
    nanbyoNumber: 145,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "生後1年以内に発症する難治性てんかんで、SCN1A遺伝子変異が主な原因。発熱に誘発される重篤な痙攣発作から始まり、多彩な発作型・知的障害・自閉的傾向を呈する。",
    symptoms: [
      "発熱誘発性の長時間痙攣発作（乳児期）",
      "多彩な発作型（ミオクロニー・欠神・焦点性）",
      "知的発達障害・言語発達遅滞",
      "歩行障害（しゃがみ歩き）",
      "自律神経症状",
    ],
    causes:
      "約80%でSCN1A遺伝子（ナトリウムチャネルNav1.1をコード）の病的バリアントが同定される。ナトリウムチャネルの機能喪失により抑制性介在ニューロンの活動が低下し、過剰興奮が生じる。",
    diagnosis:
      "臨床経過・発作の特徴・SCN1A遺伝子検査・脳波検査（多棘徐波・光過敏性）により診断。乳児期は発熱誘発性発作が診断の鍵となる。",
    treatment:
      "バルプロ酸・クロバザムが第一選択。フェンフルラミン・スチリペントールが難治例に使用。カルバマゼピン・ラモトリギン等のナトリウムチャネル遮断薬は禁忌。",
    prognosis:
      "発作は難治性で生涯続くことが多い。知的障害・運動障害が残存する。SUDEP（てんかんに関連した突然死）のリスクがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Dravet+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4836",
  },
  {
    slug: "cerebrotendinous-xanthomatosis",
    name: "脳腱黄色腫症",
    nameEn: "Cerebrotendinous Xanthomatosis",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "CYP27A1遺伝子変異による胆汁酸合成障害で、コレスタノールが神経・腱・水晶体に蓄積する遺伝性脂質代謝異常症。若年から白内障・腱黄色腫が現れ、成人期に進行性神経症状を呈する。",
    symptoms: [
      "腱黄色腫（アキレス腱・伸筋腱）",
      "若年性白内障",
      "小脳失調",
      "痙性対麻痺",
      "認知機能低下・精神症状",
      "慢性下痢（小児期）",
    ],
    causes:
      "CYP27A1遺伝子（ステロール27-水酸化酵素をコード）の両アレル性病的バリアントにより、胆汁酸合成が障害されコレスタノールが全身に蓄積する。常染色体劣性遺伝。",
    diagnosis:
      "血清・尿中コレスタノール上昇、血中ケノデオキシコール酸低下。CYP27A1遺伝子検査。MRI（小脳・大脳白質変化）・腱超音波・眼科検査。",
    treatment:
      "ケノデオキシコール酸（CDCA）補充療法が基本治療でコレスタノール蓄積を抑制。スタチン系薬との併用も有効。早期治療開始が神経障害の予防に重要。",
    prognosis:
      "早期診断・早期治療開始により神経症状の進行を抑制できる。未治療の場合は成人期に重篤な神経障害が進行する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Cerebrotendinous+Xanthomatosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/248",
  },

  // ─── 代謝・遺伝疾患（追加） ────────────────────────────────
  {
    slug: "mucolipidosis",
    name: "ムコリピドーシス",
    nameEn: "Mucolipidosis",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "ライソゾーム内に脂質と糖質が同時に蓄積するライソゾーム病の一群。I型（シアリドーシス）・II型（I-cell病）・III型（偽ハーラー多発性ジストロフィー）・IV型があり、骨格・神経・眼に多彩な症状を呈する。",
    symptoms: [
      "粗雑顔貌・骨格変形",
      "知的障害・発達遅滞",
      "角膜混濁",
      "肝脾腫",
      "心弁膜症",
      "繰り返す感染症",
    ],
    causes:
      "II型・III型はGNPTAB遺伝子またはGNPTG遺伝子変異によりライソゾーム酵素のマンノース-6-リン酸標識が障害され、酵素が細胞外に分泌される。IV型はMCOLN1遺伝子変異による。",
    diagnosis:
      "血清ライソゾーム酵素活性（著明上昇）・遺伝子検査・線維芽細胞培養による酵素活性測定・電子顕微鏡による細胞内封入体確認。",
    treatment:
      "根本的治療法はなく、対症療法が中心。骨格変形・心合併症の外科的治療。造血幹細胞移植が一部で検討される。理学・言語・作業療法によるリハビリテーション。",
    prognosis:
      "II型（I-cell病）は最重症で多くが小児期に死亡。III型は比較的軽症で成人まで生存可能。型により予後は大きく異なる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Mucolipidosis",
  },
  {
    slug: "gm1-gangliosidosis",
    name: "GM1ガングリオシドーシス",
    nameEn: "GM1 Gangliosidosis",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "βガラクトシダーゼ欠損によりGM1ガングリオシドが神経系を中心に蓄積するライソゾーム病。乳児型・遅発乳児型・青年型・成人型に分類され、神経退行・骨格変形を呈する。",
    symptoms: [
      "精神運動発達退行",
      "痙攣発作",
      "眼底のチェリーレッドスポット（乳児型）",
      "骨格変形・関節拘縮",
      "肝脾腫（乳児型）",
      "錐体外路症状（成人型）",
    ],
    causes:
      "GLB1遺伝子（βガラクトシダーゼをコード）の両アレル性病的バリアント。常染色体劣性遺伝。βガラクトシダーゼ欠損によりGM1ガングリオシド・オリゴ糖・ケラタン硫酸が蓄積する。",
    diagnosis:
      "白血球・線維芽細胞でのβガラクトシダーゼ活性測定（著明低下）・尿中オリゴ糖分析・GLB1遺伝子検査・MRI所見・骨格X線。",
    treatment:
      "承認された根本的治療法はなく、対症療法が中心。遺伝子治療・基質合成阻害療法が臨床研究段階。痙攣には抗てんかん薬、栄養管理、リハビリテーション。",
    prognosis:
      "乳児型は重症で2〜3歳までに死亡することが多い。遅発乳児型・青年型は比較的緩徐だが不可逆的な神経障害が進行する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=GM1+Gangliosidosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/262",
  },
  {
    slug: "gm2-gangliosidosis-tay-sachs",
    name: "GM2ガングリオシドーシス（テイ・サックス病）",
    nameEn: "GM2 Gangliosidosis / Tay-Sachs Disease",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "ヘキソサミニダーゼA欠損によりGM2ガングリオシドが神経系に蓄積するライソゾーム病。乳児型（テイ・サックス病）は急速な神経退行を示し、慢性型は成人まで生存することもある。",
    symptoms: [
      "精神運動発達退行（乳児型では4〜6か月から）",
      "チェリーレッドスポット（眼底）",
      "驚愕反応亢進",
      "視力低下・失明",
      "痙攣発作",
      "筋緊張低下から痙性麻痺へ",
    ],
    causes:
      "HEXA遺伝子（ヘキソサミニダーゼαサブユニットをコード）の両アレル性病的バリアントによる。常染色体劣性遺伝。アシュケナージ系ユダヤ人に高頻度。",
    diagnosis:
      "血清・白血球でのヘキソサミニダーゼA活性測定（著明低下）・HEXA遺伝子検査・MRI（大脳白質変化・視床高信号）・眼底検査。",
    treatment:
      "承認された根本的治療法はなく、対症療法が中心。遺伝子治療・基質合成阻害療法（ミグルスタット等）が研究段階。症状緩和・栄養管理・緩和ケア。",
    prognosis:
      "乳児型は急速に進行し、通常4〜5歳までに死亡。青年型・成人型は比較的緩徐だが神経障害は不可逆的に進行する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=GM2+Gangliosidosis+Tay-Sachs",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/263",
  },
  {
    slug: "sanfilippo-syndrome",
    name: "サンフィリッポ症候群（ムコ多糖症III型）",
    nameEn: "Sanfilippo Syndrome / MPS III",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "ヘパラン硫酸の分解酵素欠損によりヘパラン硫酸が蓄積するムコ多糖症の一型。A〜D型の4亜型があり、重篤な知的退行・行動障害を主徴とし、身体症状は比較的軽度。",
    symptoms: [
      "重篤な知的発達退行（幼児期以降）",
      "多動・攻撃的行動・睡眠障害",
      "言語発達遅滞・消失",
      "けいれん発作",
      "粗雑顔貌（比較的軽度）",
      "慢性下痢",
    ],
    causes:
      "A型：SGSH遺伝子（ヘパラン-N-スルファターゼ）、B型：NAGLU遺伝子、C型：HGSNAT遺伝子、D型：GNS遺伝子の各病的バリアントによる。常染色体劣性遺伝。",
    diagnosis:
      "尿中ヘパラン硫酸増加・各型に応じた酵素活性測定・遺伝子検査・MRI（大脳萎縮・白質変化）。尿中グリコサミノグリカン分析がスクリーニングに有用。",
    treatment:
      "承認された根本的治療法はなく、対症療法が中心。行動障害・睡眠障害・痙攣への薬物療法。遺伝子治療・酵素補充療法が臨床研究段階。",
    prognosis:
      "知的退行は小児期に急速に進行し、多くは青年期に重篤な認知・行動障害に至る。生命予後は通常10〜20代。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Sanfilippo+Syndrome",
  },
  {
    slug: "maroteaux-lamy-syndrome",
    name: "マロトー・ラミー症候群（ムコ多糖症VI型）",
    nameEn: "Maroteaux-Lamy Syndrome / MPS VI",
    nanbyoNumber: 249,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "N-アセチルガラクトサミン-4-スルファターゼ（アリールスルファターゼB）欠損によりデルマタン硫酸が蓄積するムコ多糖症VI型。骨格変形・角膜混濁・心弁膜症を主徴とし、知的障害は通常みられない。",
    symptoms: [
      "骨格変形（低身長・胸郭変形・脊柱変形）",
      "関節拘縮",
      "角膜混濁",
      "心弁膜症",
      "肝脾腫",
      "気道閉塞・呼吸障害",
    ],
    causes:
      "ARSB遺伝子（N-アセチルガラクトサミン-4-スルファターゼをコード）の両アレル性病的バリアント。常染色体劣性遺伝。デルマタン硫酸・コンドロイチン-4-硫酸が蓄積する。",
    diagnosis:
      "尿中デルマタン硫酸増加・白血球アリールスルファターゼB活性低下・ARSB遺伝子検査・骨格X線・心エコー・眼科検査。",
    treatment:
      "酵素補充療法（ガルスルファーゼ：ナグラザイム）が承認済みで、身体症状の進行抑制に有効。造血幹細胞移植も選択肢。外科的治療（骨格・心弁膜症・脊髄圧迫）。",
    prognosis:
      "酵素補充療法により運動機能・呼吸機能の改善が期待できる。早期治療開始が重要。骨格・心合併症の管理が生命予後に影響する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Maroteaux-Lamy+Syndrome",
  },
  {
    slug: "sly-syndrome",
    name: "スライ症候群（ムコ多糖症VII型）",
    nameEn: "Sly Syndrome / MPS VII",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "βグルクロニダーゼ欠損によりコンドロイチン硫酸・デルマタン硫酸・ヘパラン硫酸が蓄積するムコ多糖症の最も稀な型。胎児水腫から重症まで表現型は多様で、骨格変形・知的障害を呈する。",
    symptoms: [
      "胎児水腫（重症新生児型）",
      "粗雑顔貌・骨格変形",
      "知的障害・発達遅滞",
      "肝脾腫",
      "角膜混濁",
      "繰り返す気道感染症",
    ],
    causes:
      "GUSB遺伝子（βグルクロニダーゼをコード）の両アレル性病的バリアント。常染色体劣性遺伝。複数の糖質コンジュゲートの分解が障害される。",
    diagnosis:
      "尿中グリコサミノグリカン増加（コンドロイチン硫酸・デルマタン硫酸）・白血球βグルクロニダーゼ活性低下・GUSB遺伝子検査・骨格X線・眼科検査。",
    treatment:
      "酵素補充療法（ベストロニダーゼアルファ：MEPSEVII）が承認。造血幹細胞移植が選択肢。骨格変形・水頭症・気道閉塞の外科的治療。",
    prognosis:
      "新生児水腫型は最重症で早期死亡。軽症型は成人まで生存可能。早期診断・治療が予後を改善する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Sly+Syndrome+MPS+VII",
  },
  {
    slug: "carnitine-cycle-disorder",
    name: "カルニチン回路異常症",
    nameEn: "Carnitine Cycle Disorder",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "長鎖脂肪酸のミトコンドリア内輸送に必要なカルニチン回路の酵素・トランスポーター欠損による先天性代謝異常症群。低ケトン性低血糖・心筋症・筋力低下を主徴とし、新生児マススクリーニングで発見される。",
    symptoms: [
      "低ケトン性低血糖（空腹・感染時）",
      "心筋症（拡張型）",
      "骨格筋力低下・横紋筋融解症",
      "肝機能障害",
      "突然死（未治療の場合）",
    ],
    causes:
      "カルニチントランスポーター（SLC22A5）・カルニチンパルミトイルトランスフェラーゼI/II（CPT1/2）・カルニチンアシルカルニチントランスロカーゼ（CACT）の遺伝子変異による。常染色体劣性遺伝。",
    diagnosis:
      "タンデムマス法によるアシルカルニチン分析（新生児スクリーニング）・血清遊離カルニチン測定・遺伝子検査・心エコー・酵素活性測定。",
    treatment:
      "L-カルニチン補充療法が基本。低脂肪・高炭水化物食。空腹を避ける。感染時の積極的なブドウ糖補充。CPT2欠損では高度の運動・発熱を避ける。",
    prognosis:
      "早期診断・治療開始により多くで正常発達が期待できる。未治療の場合は突然死・重篤な臓器障害のリスクがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Carnitine+Cycle+Disorder",
  },
  {
    slug: "lchad-deficiency",
    name: "LCHAD欠乏症（長鎖3-ヒドロキシアシルCoA脱水素酵素欠乏症）",
    nameEn: "Long-chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "長鎖脂肪酸β酸化の主要酵素であるLCHADの欠損による先天性代謝異常症。新生児〜乳幼児期に低ケトン性低血糖・心筋症・横紋筋融解症を発症し、進行性末梢神経障害・網膜色素変性を合併する。",
    symptoms: [
      "低ケトン性低血糖",
      "心筋症（拡張型・肥大型）",
      "横紋筋融解症",
      "末梢神経障害（進行性）",
      "網膜色素変性・視力低下",
      "肝機能障害",
    ],
    causes:
      "HADHA遺伝子（ミトコンドリア三機能タンパク質αサブユニットをコード）の両アレル性病的バリアント。常染色体劣性遺伝。母親が保因者の場合、妊娠中にAFLP（急性妊娠脂肪肝）・HELLPを発症するリスクがある。",
    diagnosis:
      "タンデムマス法でC16-OH・C18-OH・C18:1-OHアシルカルニチン上昇。尿中有機酸分析。HADHA遺伝子検査。酵素活性測定（線維芽細胞）。",
    treatment:
      "長鎖脂肪制限・中鎖脂肪酸（MCT）補充食事療法が基本。L-カルニチン補充。空腹を避ける。網膜色素変性にはDHA補充が試みられる。",
    prognosis:
      "早期治療で代謝発作の予防は可能だが、末梢神経障害・網膜色素変性は進行性で予防困難。生命予後は改善しているが長期的な神経・視覚障害が課題。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=LCHAD+Deficiency",
  },
  {
    slug: "glut1-deficiency",
    name: "グルコーストランスポーター1欠損症（GLUT1欠損症）",
    nameEn: "Glucose Transporter Type 1 Deficiency Syndrome",
    nanbyoNumber: 141,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "SLC2A1遺伝子変異によりGLUT1タンパク質の機能が障害され、脳へのグルコース輸送が低下する神経代謝疾患。難治性てんかん・発達遅滞・運動障害を呈し、ケトン食療法が有効な数少ない疾患。",
    symptoms: [
      "乳幼児期発症の難治性てんかん",
      "知的障害・発達遅滞",
      "運動失調・ジストニア・痙性",
      "小頭症",
      "空腹・運動・発熱で悪化する症状",
      "脳脊髄液グルコース低値",
    ],
    causes:
      "SLC2A1遺伝子（GLUT1をコード）の病的バリアント（多くはde novo、一部常染色体優性遺伝）。GLUT1機能低下により脳へのグルコース供給が障害される。",
    diagnosis:
      "脳脊髄液グルコース低値（血糖比0.6未満）・脳脊髄液乳酸正常〜低値・SLC2A1遺伝子検査・赤血球GLUT1機能評価。",
    treatment:
      "ケトン食療法（古典的ケトン食・MCT食・修正アトキンス食）が第一選択で発作・運動症状に著効。抗てんかん薬は補助的。ケトン食は早期開始が重要。",
    prognosis:
      "ケトン食療法開始により発作・運動症状の改善が期待できる。認知機能への効果は限定的。成人でも継続が必要な場合がある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=GLUT1+Deficiency+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4892",
  },
  {
    slug: "cdg-syndrome",
    name: "先天性グリコシル化異常症（CDG症候群）",
    nameEn: "Congenital Disorders of Glycosylation",
    nanbyoNumber: 226,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "糖タンパク質や糖脂質の糖鎖合成・修飾過程の酵素・トランスポーター欠損による先天性代謝異常症群。PMM2-CDGが最も多く、小脳失調・知的障害・凝固異常・多臓器障害を呈する多系統疾患。",
    symptoms: [
      "小脳失調・筋緊張低下",
      "知的障害・発達遅滞",
      "肝機能障害",
      "凝固異常（出血・血栓）",
      "心合併症",
      "特徴的皮下脂肪陥凹（PMM2-CDG）",
    ],
    causes:
      "PMM2遺伝子（ホスホマンノムターゼ2）欠損が最多（PMM2-CDG）。その他100種以上の遺伝子変異による亜型が存在。常染色体劣性遺伝が多い。N型・O型・複合型に分類される。",
    diagnosis:
      "血清トランスフェリンの等電点電気泳動（CDGスクリーニング）・各酵素活性測定・遺伝子パネル検査・尿中オリゴ糖・血清グリカン解析。",
    treatment:
      "亜型によって異なる。PMM2-CDGは対症療法のみ。MPI-CDGはマンノース補充が有効。SLC35C1-CDGはフコース補充。各型に応じた栄養・リハビリ管理。",
    prognosis:
      "最多のPMM2-CDGは知的障害・小脳失調が残存するが長期生存可能。重症亜型では乳幼児期死亡例もある。亜型により大きく異なる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Disorders+Glycosylation",
  },

  // ─── 免疫・自己免疫疾患（追加） ────────────────────────────────
  {
    slug: "papa-syndrome",
    name: "PAPA症候群",
    nameEn: "Pyogenic Arthritis, Pyoderma Gangrenosum, and Acne Syndrome",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "化膿性関節炎・壊疽性膿皮症・嚢胞性痤瘡を三徴とする自己炎症性疾患。PSTPIP1遺伝子変異によりインフラマソーム経路が過活性化し、反復する無菌性炎症を生じる。常染色体優性遺伝。",
    symptoms: [
      "反復性化膿性関節炎（小児期〜青年期）",
      "壊疽性膿皮症（皮膚潰瘍）",
      "重篤な嚢胞性痤瘡",
      "発熱（炎症時）",
    ],
    causes:
      "PSTPIP1遺伝子（CD2BP1ともいう）の病的バリアントによる常染色体優性遺伝疾患。pyrinとの相互作用が障害されIL-1β・IL-18過剰産生が生じる。",
    diagnosis:
      "臨床三徴の確認・PSTPIP1遺伝子検査・炎症マーカー上昇・関節液の無菌性確認（培養陰性）・病理組織検査。",
    treatment:
      "IL-1阻害薬（アナキンラ・カナキヌマブ）が有効。コルヒチン・コルチコステロイドが使用される。TNF阻害薬も選択肢。皮膚創傷管理。",
    prognosis:
      "繰り返す関節炎で関節破壊が生じることがある。皮膚病変は難治性で瘢痕を残すことがある。IL-1阻害療法で炎症コントロールが改善する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=PAPA+Syndrome",
  },
  {
    slug: "hyper-igd-syndrome",
    name: "ハイパーIgD症候群（HIDS）",
    nameEn: "Hyperimmunoglobulinemia D Syndrome",
    nanbyoNumber: 106,
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "MVK遺伝子変異によるメバロン酸キナーゼ欠損を原因とする自己炎症性疾患。乳幼児期から4〜7日周期で反復する高熱・リンパ節腫脹・腹痛・皮疹を呈し、血清IgDが上昇する。",
    symptoms: [
      "周期的高熱発作（4〜7日続く）",
      "頸部リンパ節腫脹",
      "腹痛・嘔吐・下痢",
      "皮疹（紅斑・丘疹）",
      "関節痛・関節炎",
      "血清IgD・IgA高値",
    ],
    causes:
      "MVK遺伝子（メバロン酸キナーゼをコード）の両アレル性病的バリアントによる常染色体劣性遺伝疾患。コレステロール合成経路の障害によりイソプレノイド欠乏が生じ炎症が誘発される。",
    diagnosis:
      "血清IgD高値（>100 IU/mL）・発作時尿中メバロン酸増加・MVK遺伝子検査・メバロン酸キナーゼ酵素活性低下。臨床的周期熱パターンが重要。",
    treatment:
      "IL-1阻害薬（アナキンラ・カナキヌマブ）が有効で保険適応。コルヒチン・NSAIDs・コルチコステロイドが使用される。スタチン系薬の効果は限定的。",
    prognosis:
      "発作は成人になると頻度・重症度が軽減することが多い。アミロイドーシス合併が長期予後に影響することがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hyperimmunoglobulinemia+D+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4551",
  },
  {
    slug: "alps",
    name: "自己免疫性リンパ増殖症候群（ALPS）",
    nameEn: "Autoimmune Lymphoproliferative Syndrome",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "FAS遺伝子等のアポトーシス経路遺伝子変異によりリンパ球のアポトーシスが障害される免疫調節異常疾患。慢性非悪性リンパ増殖・自己免疫性血球減少・リンパ腫リスク増大を特徴とする。",
    symptoms: [
      "慢性脾腫・リンパ節腫脹",
      "自己免疫性溶血性貧血",
      "免疫性血小板減少症（ITP）",
      "自己免疫性好中球減少症",
      "ダブルネガティブT細胞増加",
      "悪性リンパ腫のリスク増大",
    ],
    causes:
      "FAS（CD95）遺伝子変異が最多（ALPS-FAS型）。FASLG・CASP8・CASP10遺伝子変異による亜型もある。アポトーシス障害によりリンパ球が蓄積し自己免疫が生じる。",
    diagnosis:
      "末梢血ダブルネガティブT細胞（CD3+TCRαβ+CD4-CD8-）増加・FASを介したアポトーシス障害の機能試験・遺伝子検査・血清sFASL・IL-10・ビタミンB12上昇。",
    treatment:
      "自己免疫性血球減少にはコルチコステロイド・リツキシマブ・シクロスポリン。シロリムス（mTOR阻害薬）が有効でリンパ増殖・自己免疫を改善。脾摘は避ける（敗血症リスク）。",
    prognosis:
      "適切な治療でコントロール可能だが、リンパ腫リスクは一般人口の数十倍。長期フォローアップが不可欠。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Autoimmune+Lymphoproliferative+Syndrome",
  },
  {
    slug: "ipex-syndrome",
    name: "IPEX症候群",
    nameEn: "Immune Dysregulation, Polyendocrinopathy, Enteropathy, X-linked Syndrome",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "FOXP3遺伝子変異による制御性T細胞（Treg）機能不全を原因とするX連鎖免疫調節異常症。男児に多く、新生児〜乳幼児期から重篤な難治性腸炎・1型糖尿病・湿疹性皮膚炎を呈する。",
    symptoms: [
      "難治性腸炎（重篤な下痢・栄養障害）",
      "1型糖尿病（乳幼児期発症）",
      "湿疹性皮膚炎",
      "甲状腺炎・その他の自己免疫疾患",
      "反復感染症",
      "多臓器自己免疫攻撃",
    ],
    causes:
      "FOXP3遺伝子（制御性T細胞の主要転写因子をコード）の病的バリアントによるX連鎖劣性遺伝疾患。Treg機能不全により免疫寛容が破綻し全身性自己免疫が生じる。",
    diagnosis:
      "男児の新生児〜乳幼児期の典型三徴・FOXP3遺伝子検査・末梢血Treg数/機能評価・自己抗体検査（抗インスリン抗体等）・腸管病理組織。",
    treatment:
      "免疫抑制療法（シクロスポリン・タクロリムス・ラパマイシン）が症状を一時的に緩和。造血幹細胞移植が根治的治療。栄養管理（経静脈栄養・経腸栄養）。",
    prognosis:
      "未治療では多くが乳幼児期に感染症・多臓器不全で死亡。造血幹細胞移植により長期生存が可能だが、既存の臓器障害（糖尿病等）は残存する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=IPEX+Syndrome",
  },
  {
    slug: "digeorge-syndrome",
    name: "DiGeorge症候群（22q11.2欠失症候群）",
    nameEn: "DiGeorge Syndrome / 22q11.2 Deletion Syndrome",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "22番染色体長腕11.2領域の微細欠失による症候群。先天性心疾患・免疫不全（T細胞欠損）・低カルシウム血症・口蓋裂・顔貌異常・精神神経症状の多彩な表現型を示す最も頻度の高い染色体微細欠失症候群。",
    symptoms: [
      "先天性心疾患（円錐動脈幹奇形）",
      "T細胞免疫不全（繰り返す感染症）",
      "低カルシウム血症・副甲状腺機能低下症",
      "口蓋裂・鼻声",
      "特徴的顔貌",
      "学習障害・精神発達遅滞・統合失調症リスク",
    ],
    causes:
      "22q11.2領域の約3MbのヘテロRing欠失（通常）。TBX1遺伝子を含む領域の欠失が心臓・免疫・カルシウム代謝異常の主な原因。多くはde novoで発生し、一部は親から遺伝。",
    diagnosis:
      "FISH法・染色体マイクロアレイ検査による22q11.2欠失の確認。T細胞数・機能評価・血清カルシウム・副甲状腺ホルモン・心エコー・口蓋評価。",
    treatment:
      "先天性心疾患の外科的修復。免疫不全への予防接種管理・感染治療（生ワクチン禁忌の場合あり）。低カルシウムにはカルシウム・ビタミンD補充。胸腺移植（重症T細胞欠損）。教育・精神科的支援。",
    prognosis:
      "先天性心疾患・免疫不全の重症度に依存するが、多くは成人まで生存可能。精神疾患（統合失調症スペクトラム）のリスクが高く、生涯にわたる支援が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=DiGeorge+Syndrome",
  },

  // ─── 血液疾患（追加） ────────────────────────────────
  {
    slug: "congenital-amegakaryocytic-thrombocytopenia",
    name: "先天性無巨核球性血小板減少症",
    nameEn: "Congenital Amegakaryocytic Thrombocytopenia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "MPL遺伝子（トロンボポエチン受容体）変異により巨核球の産生が障害される先天性骨髄不全症候群。生後早期から重篤な血小板減少を呈し、進行性に汎血球減少・骨髄不全へ移行する。",
    symptoms: [
      "新生児期からの重篤な血小板減少",
      "出血傾向（点状出血・紫斑・頭蓋内出血リスク）",
      "進行性汎血球減少",
      "骨髄巨核球欠如",
      "脳・心臓奇形合併例あり",
    ],
    causes:
      "MPL遺伝子（c-Mpl/トロンボポエチン受容体をコード）の両アレル性病的バリアントによる常染色体劣性遺伝。トロンボポエチンシグナルが伝達されず巨核球の分化・増殖が障害される。",
    diagnosis:
      "血小板減少（重篤）・骨髄検査（巨核球著明減少・欠如）・MPL遺伝子検査・血清トロンボポエチン高値・他の骨髄不全症との鑑別。",
    treatment:
      "造血幹細胞移植が唯一の根治的治療。移植前には血小板輸血・感染予防管理。トロンボポエチン受容体作動薬（エルトロンボパグ等）は効果が限定的。",
    prognosis:
      "未治療の場合、進行性骨髄不全で生命予後は不良。早期に造血幹細胞移植を行うことで長期生存が期待できる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Amegakaryocytic+Thrombocytopenia",
  },
  {
    slug: "bernard-soulier-syndrome",
    name: "ベルナール・スーリエ症候群",
    nameEn: "Bernard-Soulier Syndrome",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "血小板膜糖タンパク質Ib-IX-V複合体の欠損または機能異常による先天性血小板機能異常症。血小板巨大化・血小板数減少・出血時間延長・フォン・ヴィレブランド因子への接着障害を特徴とする。",
    symptoms: [
      "反復する粘膜出血（鼻出血・歯肉出血）",
      "皮膚の点状出血・紫斑",
      "外傷・手術時の過度の出血",
      "女性では過多月経",
      "重篤な出血（まれに頭蓋内出血）",
    ],
    causes:
      "GP1BA・GP1BB・GP9遺伝子（血小板糖タンパクIbα・Ibβ・IXをコード）の病的バリアントによる常染色体劣性遺伝。GPIb-IX-V複合体欠損によりvWF・トロンビンへの接着が障害される。",
    diagnosis:
      "血小板数軽〜中等度減少・血小板巨大化（MPV高値）・リストセチン凝集不良・フローサイトメトリーによるGPIb-IX欠損確認・遺伝子検査。",
    treatment:
      "根本的治療法はなく、出血管理が中心。血小板輸血（HLA適合・GPIb-IX保有）・デスモプレシン・抗線溶薬（トラネキサム酸）。遺伝子治療が研究段階。",
    prognosis:
      "重篤な出血時には生命の危機もあるが、適切な管理で日常生活は可能。血小板輸血への同種抗体形成が繰り返す輸血の問題となる。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Bernard-Soulier+Syndrome",
  },
  {
    slug: "glanzmann-thrombasthenia",
    name: "グランツマン血小板無力症",
    nameEn: "Glanzmann Thrombasthenia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "血小板膜糖タンパクIIb/IIIa（インテグリンαIIbβ3）の欠損または機能異常による先天性血小板機能異常症。血小板数・形態は正常だが血小板の凝集が障害され、重篤な出血傾向を呈する。",
    symptoms: [
      "幼児期からの重篤な粘膜出血（鼻出血・歯肉出血）",
      "過多月経（女性）",
      "点状出血・紫斑",
      "手術・外傷時の大量出血",
      "消化管出血",
    ],
    causes:
      "ITGA2B遺伝子（GPIIb/インテグリンαIIb）またはITGB3遺伝子（GPIIIa/インテグリンβ3）の両アレル性病的バリアント。常染色体劣性遺伝。フィブリノゲン・vWF等へのADP誘発血小板凝集が障害される。",
    diagnosis:
      "血小板凝集能検査（ADP・コラーゲン・トロンビン等で凝集不良、リストセチン凝集正常）・フローサイトメトリーによるGPIIb/IIIa発現低下・遺伝子検査。",
    treatment:
      "血小板輸血（HLA適合）・トラネキサム酸・デスモプレシン・局所止血処置。重篤出血時には活性化血液凝固第VII因子（rFVIIa）が有効。同種抗体形成が問題となる。",
    prognosis:
      "重篤な出血は生命を脅かすことがある。適切な出血管理で日常生活は可能。繰り返す血小板輸血による同種抗体形成が長期的課題。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Glanzmann+Thrombasthenia",
  },
  {
    slug: "protein-c-deficiency",
    name: "先天性プロテインC欠乏症",
    nameEn: "Congenital Protein C Deficiency",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "PROC遺伝子変異による抗凝固因子プロテインCの欠乏を原因とする遺伝性血栓性素因。若年からの深部静脈血栓症・肺血栓塞栓症を繰り返す。重症ホモ接合型は新生児期に電撃性紫斑病を発症する。",
    symptoms: [
      "若年発症の深部静脈血栓症",
      "肺血栓塞栓症",
      "脳静脈洞血栓症",
      "電撃性紫斑病（重症新生児型）",
      "クマリン系薬誘発性皮膚壊死",
      "反復する血栓塞栓症",
    ],
    causes:
      "PROC遺伝子（プロテインCをコード）の病的バリアント。ヘテロ接合型（常染色体優性遺伝）は中等度欠乏で血栓リスク増大。ホモ接合型は重篤な電撃性紫斑病を呈する。",
    diagnosis:
      "血漿プロテインC活性・抗原量低下・PROC遺伝子検査。抗リン脂質抗体症候群・後天性低下（肝疾患・DIC・ビタミンK欠乏）との鑑別。",
    treatment:
      "急性血栓症：ヘパリン→ワルファリン長期抗凝固療法。DOAC（直接経口抗凝固薬）も選択肢。電撃性紫斑病：新鮮凍結血漿・プロテインC濃縮製剤（承認済み）の緊急投与。",
    prognosis:
      "抗凝固療法により血栓再発を予防できるが、生涯にわたる治療が必要。重症ホモ型は新生児期に適切に治療しないと致死的。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Protein+C+Deficiency",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/345",
  },
  {
    slug: "protein-s-deficiency",
    name: "先天性プロテインS欠乏症",
    nameEn: "Congenital Protein S Deficiency",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "PROS1遺伝子変異による抗凝固因子プロテインSの欠乏を原因とする遺伝性血栓性素因。プロテインCのコファクターとして機能し、欠乏すると凝固制御が破綻して血栓症リスクが上昇する。日本人に比較的多い。",
    symptoms: [
      "若年発症の深部静脈血栓症",
      "肺血栓塞栓症",
      "脳梗塞・脳静脈洞血栓症",
      "皮膚壊死（抗凝固薬開始初期）",
      "妊娠関連血栓症",
    ],
    causes:
      "PROS1遺伝子（プロテインSをコード）の病的バリアントによる常染色体優性（またはまれに劣性）遺伝。活性化プロテインCのコファクター機能が低下し、凝固因子Va・VIIIaの不活化が障害される。",
    diagnosis:
      "血漿プロテインS活性・総抗原量・遊離型抗原量低下・PROS1遺伝子検査。後天性低下（妊娠・経口避妊薬・肝疾患・ビタミンK欠乏）との鑑別が重要。",
    treatment:
      "急性血栓症：ヘパリン→ワルファリン（またはDOAC）長期抗凝固療法。ワルファリン開始時はヘパリンと重複投与（皮膚壊死予防）。妊娠中はLMWHを使用。",
    prognosis:
      "抗凝固療法により血栓再発を抑制できるが、生涯にわたる管理が必要。妊娠・手術・長期臥床等の血栓高リスク時は特に注意が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Protein+S+Deficiency",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/346",
  },

  // ─── 消化器疾患（追加） ────────────────────────────────
  {
    slug: "congenital-chloride-diarrhea",
    name: "先天性クロライド下痢症",
    nameEn: "Congenital Chloride Diarrhea",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "SLC26A3遺伝子変異による腸管Cl-/HCO3-交換輸送体欠損を原因とする先天性下痢症。出生前から大量の水様性下痢（Cl-高濃度）を呈し、低クロル性代謝性アルカローシスと低ナトリウム血症を生じる稀な遺伝性疾患。",
    symptoms: [
      "胎児期からの腸管拡張（羊水過多）",
      "出生直後からの大量水様性下痢",
      "低クロル性代謝性アルカローシス",
      "低ナトリウム血症・低カリウム血症",
      "腹部膨満",
      "成長障害",
    ],
    causes:
      "SLC26A3遺伝子（DRA：Down-Regulated in Adenoma）の両アレル性病的バリアントによる常染色体劣性遺伝。腸管でのCl-吸収障害によりClが糞便中に過剰排泄される。",
    diagnosis:
      "糞便中Cl-高値（>90 mEq/L）・血清電解質（低Cl・低Na・低K・アルカローシス）・SLC26A3遺伝子検査。出生前診断（羊水過多・腸管拡張）も可能。",
    treatment:
      "生涯にわたるNaCl・KCl補充療法が基本治療。プロトンポンプ阻害薬が腸管Cl分泌を抑制し補充量を減少させる。適切な電解質補充により正常発育が期待できる。",
    prognosis:
      "生涯にわたる補充療法が必要だが、適切な管理で通常の生活が可能。治療中断は致死的な電解質異常を招く。腎合併症（腎石灰化）に注意。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Chloride+Diarrhea",
  },
  {
    slug: "hirschsprung-long-segment",
    name: "ヒルシュスプルング病（長節型）",
    nameEn: "Hirschsprung Disease, Long-segment",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "腸管神経節細胞の先天性欠如による腸管蠕動障害で、長節型（S状結腸より口側に無神経節領域が及ぶ）は全結腸型・全腸型を含み、外科的根治が困難なことがある稀重症型。",
    symptoms: [
      "新生児期の胎便排泄遅延・腸閉塞",
      "慢性便秘・腹部膨満",
      "嘔吐・成長障害",
      "ヒルシュスプルング関連腸炎（発熱・水様下痢）",
      "腸管穿孔のリスク",
    ],
    causes:
      "腸管神経堤細胞の遊走・増殖・分化障害。RET・GDNF・EDNRB・EDN3・SOX10等の遺伝子変異が関与。多くは孤発性だが家族例もある。トリソミー21・ワールデンブルグ症候群との合併例がある。",
    diagnosis:
      "バリウム注腸（移行帯の確認）・直腸生検（神経節細胞欠如・アセチルコリンエステラーゼ染色）・直腸肛門内圧検査。全腸型は生検部位の選択が重要。",
    treatment:
      "外科的根治術（プルスルー手術）が基本。長節型・全結腸型では腸管の長さが不足するため小腸瘻造設・段階的手術が必要なことがある。術後も便排泄・腸炎管理が継続的に必要。",
    prognosis:
      "短節型は外科的根治後QOLは良好。長節型・全腸型は術後も便排泄障害・腸炎を繰り返すことがあり、長期的消化器管理が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hirschsprung+Disease+Long+Segment",
  },
  {
    slug: "mitochondrial-gi-disease",
    name: "ミトコンドリア病消化器型",
    nameEn: "Mitochondrial Disease with Gastrointestinal Involvement",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "ミトコンドリア機能異常が腸管平滑筋・神経に及び、慢性偽性腸閉塞・腸管拡張・吸収障害を主徴とする稀な消化器疾患。MNGIE（筋・神経・消化管・脳症症候群）等が代表的。",
    symptoms: [
      "慢性偽性腸閉塞（腸管拡張・麻痺性イレウス）",
      "悪心・嘔吐・腹部膨満",
      "重篤な吸収障害・栄養不良",
      "体重減少・るいそう",
      "末梢神経障害（MNGIEでは顕著）",
      "眼瞼下垂・外眼筋麻痺（MNGIE）",
    ],
    causes:
      "MNGIE型ではTYMP遺伝子（チミジンホスホリラーゼ）変異によるミトコンドリアDNA不安定化。その他ミトコンドリア呼吸鎖酵素複合体の遺伝子変異も原因となる。",
    diagnosis:
      "血漿チミジン・デオキシウリジン高値（MNGIE）・白血球チミジンホスホリラーゼ活性低下・TYMP遺伝子検査・筋生検（ミトコンドリア異常）・消化管機能検査・MtDNA解析。",
    treatment:
      "根本的治療は困難。造血幹細胞移植がMNGIEで有効例あり。栄養管理（経腸・経静脈栄養）・腸管運動促進薬（エリスロマイシン・オクトレオチド）・症状緩和。",
    prognosis:
      "進行性で重篤な栄養障害・感染症により生命予後は不良なことが多い。MNGIE造血幹細胞移植は有望だが移植リスクも高い。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Mitochondrial+Gastrointestinal+Encephalomyopathy",
  },

  // ─── 呼吸器疾患（追加） ────────────────────────────────
  {
    slug: "nonspecific-interstitial-pneumonia",
    name: "非特異性間質性肺炎（NSIP）",
    nameEn: "Nonspecific Interstitial Pneumonia",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "間質性肺炎の一病理型で、均一な時相の炎症・線維化を特徴とする。特発性（iNSIP）と膠原病・薬剤性に続発するものがあり、UIP（通常型間質性肺炎）より予後が良好なことが多い。",
    symptoms: [
      "労作時呼吸困難（緩徐進行）",
      "慢性乾性咳嗽",
      "ばち指（一部）",
      "両側の捻髪音（fine crackles）",
      "倦怠感・体重減少",
    ],
    causes:
      "特発性NSIPの原因は不明。続発性では膠原病（強皮症・皮筋炎・シェーグレン症候群等）・薬剤性・過敏性肺炎などが原因となる。自己抗体（抗アミノアシルtRNA合成酵素抗体等）が関連する場合がある。",
    diagnosis:
      "胸部HRCT（両側対称性のすりガラス影・牽引性気管支拡張・胸膜下温存）・外科的肺生検（均一な炎症・線維化）・自己抗体検索・BAL（リンパ球増加）。",
    treatment:
      "ステロイド（プレドニゾロン）が第一選択。ステロイド抵抗性にはアザチオプリン・シクロホスファミドなどの免疫抑制薬を追加。続発性は基礎疾患の治療。",
    prognosis:
      "IPF（UIP）より予後は良好で、ステロイドへの反応性が高い。細胞性NSIPはほぼ治癒可能。線維性NSIPは一部が進行性で予後不良。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Nonspecific+Interstitial+Pneumonia",
  },
  {
    slug: "primary-bronchiectasis",
    name: "気管支拡張症（原発性）",
    nameEn: "Primary Bronchiectasis",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "気管支壁の破壊・拡張を特徴とする慢性呼吸器疾患。原発性（先天性・特発性）は原因不明または遺伝性素因によるもので、慢性咳嗽・大量喀痰・反復する気道感染症を呈する。",
    symptoms: [
      "慢性湿性咳嗽・大量喀痰",
      "反復する気道感染症（緑膿菌・非結核性抗酸菌）",
      "喀血",
      "労作時呼吸困難",
      "ばち指（進行例）",
    ],
    causes:
      "先天性（原発性線毛機能不全・α1-アンチトリプシン欠乏症・免疫不全など）または特発性。気道炎症・感染の悪循環により気管支壁が破壊・拡張する。",
    diagnosis:
      "胸部HRCT（signet ring sign・気管支壁肥厚・気管支拡張）・喀痰培養・肺機能検査・免疫学的評価・線毛機能検査（必要に応じて）。",
    treatment:
      "気道クリアランス（体位排痰・ネブライザー・高振動数胸壁振動法）・吸入抗菌薬・慢性感染症の抗菌薬治療（マクロライド長期投与等）・感染増悪時の全身抗菌薬。",
    prognosis:
      "適切な管理で進行を緩徐にできるが、慢性感染症・呼吸機能低下が不可逆的に進行することがある。緑膿菌・非結核性抗酸菌感染は予後悪化因子。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Primary+Bronchiectasis",
  },

  // ─── 心・血管疾患（追加） ────────────────────────────────
  {
    slug: "complete-av-block-congenital",
    name: "先天性完全房室ブロック",
    nameEn: "Congenital Complete Atrioventricular Block",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "出生前または出生後早期に発症する完全房室ブロック。母体の抗Ro/La抗体による新生児ループスに伴う例と、先天性心疾患（修正大血管転位等）に伴う例がある。徐脈・心不全・突然死リスクを伴う。",
    symptoms: [
      "胎児期からの徐脈（胎児水腫を伴う重症例）",
      "新生児・乳幼児期の心不全症状",
      "失神・めまい（アダムス・ストークス発作）",
      "運動耐容能低下",
      "心拡大",
    ],
    causes:
      "免疫性（母体抗Ro52/Ro60/La抗体が胎盤通過し胎児房室結節を障害）と非免疫性（修正大血管転位・心室中隔欠損等の構造的心疾患に伴う）がある。",
    diagnosis:
      "胎児心エコー（胎児徐脈・完全房室解離）・12誘導心電図（完全房室ブロック）・母体抗体検査（抗Ro/La抗体）・心エコー（心構造異常の確認）。",
    treatment:
      "症候性・重症例にはペースメーカー植え込み（永久・一時的）。新生児ループスによる免疫性では母体へのデキサメタゾン投与・血漿交換が試みられる。β刺激薬（イソプロテレノール）の一時的使用。",
    prognosis:
      "ペースメーカー植え込みにより多くは正常生活が可能。未治療の重症例は突然死のリスクがある。ペースメーカー依存の生涯管理が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Complete+AV+Block",
  },
  {
    slug: "familial-atrial-fibrillation",
    name: "家族性心房細動",
    nameEn: "Familial Atrial Fibrillation",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "遺伝的素因によって若年から発症する心房細動。KCNQ1・SCN5A・KCNE2等のイオンチャネル遺伝子変異が原因で、通常の後天性心房細動と異なり若年・無基礎疾患で発症し、脳卒中・心不全リスクを伴う。",
    symptoms: [
      "動悸・心拍不整",
      "若年発症の心房細動（40歳以前）",
      "めまい・失神",
      "呼吸困難・胸部不快感",
      "脳卒中（心原性塞栓症）",
    ],
    causes:
      "KCNQ1・KCNE2・KCNJ2・SCN5A・SCN1B・NPPA・GJA5・PITX2等のイオンチャネル・ギャップ結合・転写因子遺伝子の病的バリアント。常染色体優性遺伝が多い。",
    diagnosis:
      "心電図（心房細動の確認）・若年発症（<40歳）・家族歴・遺伝子検査（イオンチャネル遺伝子パネル）・心エコー（器質的心疾患の除外）・ホルター心電図。",
    treatment:
      "抗凝固療法（脳卒中予防）・心拍数/リズムコントロール（抗不整脈薬・カテーテルアブレーション）。遺伝子型に応じた薬剤選択（一部は特定の薬剤が禁忌）。",
    prognosis:
      "適切な治療でQOLを維持できる。脳卒中・心不全の予防が重要。カテーテルアブレーションで洞調律を維持できる場合もある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Familial+Atrial+Fibrillation",
  },

  // ─── 皮膚疾患（追加） ────────────────────────────────
  {
    slug: "harlequin-ichthyosis",
    name: "ハーレクイン型魚鱗癬",
    nameEn: "Harlequin Ichthyosis",
    nanbyoNumber: 165,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "ABCA12遺伝子変異による最重症型先天性魚鱗癬。出生時に全身を厚い角質板が覆い、深い亀裂（ハーレクイン様外観）を呈する。現代の治療では多くが生存可能だが、生涯にわたる皮膚管理が必要。",
    symptoms: [
      "出生時の全身性厚い角質板・深い亀裂",
      "眼瞼外反・口唇外反",
      "耳介変形・鼻孔狭窄",
      "体温調節障害（汗腺機能不全）",
      "四肢の可動域制限",
      "皮膚感染症・敗血症リスク",
    ],
    causes:
      "ABCA12遺伝子（ラメラ顆粒へのセラミド輸送に関与するABCトランスポーター）の両アレル性病的バリアントによる常染色体劣性遺伝。脂質バリア機能が著しく障害される。",
    diagnosis:
      "臨床所見（出生時の典型的外観）・ABCA12遺伝子検査・皮膚生検（電子顕微鏡でラメラ顆粒異常）。出生前診断も可能。",
    treatment:
      "保湿剤（ワセリン等）の多量頻回塗布が生涯継続。レチノイド（アシトレチン・イソトレチノイン）が角質化を軽減。感染予防・体温管理・眼科管理（点眼・眼瞼外反の外科的治療）。",
    prognosis:
      "過去は新生児期に致死的だったが、現代の集中的管理で生存率は向上。生涯にわたる皮膚ケアが必須。体温調節障害は暑熱環境で危険。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Harlequin+Ichthyosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/5039",
  },
  {
    slug: "epidermolytic-hyperkeratosis",
    name: "表皮融解性過角化症",
    nameEn: "Epidermolytic Hyperkeratosis",
    nanbyoNumber: 164,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "KRT1またはKRT10遺伝子変異による先天性表皮融解性魚鱗癬。出生時に全身の水疱・びらんを呈し、その後肥厚した角質化病変に移行する。常染色体優性遺伝で、感染症・悪臭が日常生活の大きな問題となる。",
    symptoms: [
      "出生時の全身性水疱・びらん・紅皮症",
      "加齢とともに肥厚した暗褐色の角質化病変",
      "皮膚の悪臭（細菌増殖）",
      "体温調節障害",
      "手掌・足底の過角化（KRT1変異型）",
    ],
    causes:
      "KRT1（ケラチン1）またはKRT10（ケラチン10）遺伝子の病的バリアントによる常染色体優性遺伝。ケラチン中間径フィラメント網が脆弱化し、軽微な機械的刺激で表皮細胞が融解する。",
    diagnosis:
      "臨床所見・皮膚生検（光学顕微鏡：表皮顆粒層の融解・封入体；電子顕微鏡：ケラチン凝集）・KRT1/KRT10遺伝子検査。",
    treatment:
      "保湿剤・角質溶解薬（尿素・乳酸・サリチル酸）。感染管理（消毒浴・抗菌薬）。レチノイド（アシトレチン）が角質化を軽減。臭気対策（亜鉛軟膏・頻回の清潔ケア）。",
    prognosis:
      "生命予後は通常正常だが、QOLへの影響が大きい。感染症・体温調節障害が合併症として重要。生涯にわたる皮膚管理が必要。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Epidermolytic+Hyperkeratosis",
  },
  {
    slug: "pityriasis-rubra-pilaris-refractory",
    name: "毛孔性紅色粃糠疹（難治性）",
    nameEn: "Pityriasis Rubra Pilaris, Refractory",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "毛包の角化異常と周囲の炎症を特徴とする慢性炎症性皮膚疾患。橙赤色の鱗屑性紅斑・毛孔性丘疹・手掌足底の黄橙色角化を呈し、難治性のものは生涯にわたる経過をとることがある。",
    symptoms: [
      "橙赤色の鱗屑性紅斑（融合して紅皮症様）",
      "毛孔性角化性丘疹",
      "手掌・足底の黄橙色角化",
      "「島状皮膚」（正常皮膚が点在）",
      "爪甲混濁・爪肥厚",
      "掻痒感・灼熱感",
    ],
    causes:
      "多くは原因不明（後天性）。遺伝性（家族性）型はCARD14遺伝子変異が関与する。免疫学的機序（IL-17・IL-23経路の関与が示唆）と角化異常が合わさって発症する。",
    diagnosis:
      "特徴的臨床像・皮膚生検（毛孔周囲角化・角質栓・真皮炎症）・乾癬・脂漏性皮膚炎との鑑別。遺伝性型ではCARD14遺伝子検査。",
    treatment:
      "レチノイド（アシトレチン・イソトレチノイン）が第一選択。メトトレキサート・シクロスポリン。難治例にはIL-17阻害薬・IL-12/23阻害薬等の生物学的製剤が使用される。",
    prognosis:
      "I型（古典的成人型）の多くは3年以内に自然寛解するが再発あり。III型（古典的若年型）は難治性で生涯続くことがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Pityriasis+Rubra+Pilaris",
  },

  // ─── 眼科疾患（追加） ────────────────────────────────
  {
    slug: "congenital-nystagmus",
    name: "先天性眼振（乳児眼振症候群）",
    nameEn: "Congenital Nystagmus / Infantile Nystagmus Syndrome",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "出生後6か月以内に発症する眼球の律動的振動（眼振）を特徴とする症候群。水平眼振が最も多く、視力低下・頭位異常（代償頭位）を伴うことがある。特発性または感覚性障害・先天性眼疾患に続発する。",
    symptoms: [
      "眼球の律動的振動（主に水平性）",
      "視力低下（程度は様々）",
      "代償頭位（null zoneを利用した頭の傾き）",
      "弱視",
      "光感受性亢進（まれ）",
    ],
    causes:
      "特発性（常染色体優性・劣性・X連鎖）とアルビノ・先天性白内障・先天性網膜疾患等の感覚性障害に続発するものがある。FRMD7遺伝子変異（X連鎖型）が最も多く同定される遺伝子。",
    diagnosis:
      "眼科的眼振検査・眼底検査（網膜・視神経評価）・視力・視野・電気生理検査（ERG・VEP）・頭部MRI（神経性眼振の除外）・遺伝子検査。",
    treatment:
      "弱視治療（眼鏡・遮蔽）・眼振を軽減する薬物（メマンチン・ガバペンチン）・代償頭位を軽減する外眼筋手術（Kestenbaum-Anderson法）。基礎疾患がある場合はその治療。",
    prognosis:
      "特発性の場合、視力は低下するが重篤な失明は稀。外眼筋手術で代償頭位を改善できる。感覚性眼振は基礎疾患に依存する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Nystagmus+Infantile",
  },
  {
    slug: "hereditary-congenital-cataract",
    name: "遺伝性先天性白内障",
    nameEn: "Hereditary Congenital Cataract",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "遺伝子変異により出生時または出生直後から水晶体混濁を呈する先天性白内障。クリスタリン遺伝子・膜タンパク遺伝子等の変異が原因で、弱視予防のために早期治療が必須となる。",
    symptoms: [
      "白色瞳孔（白色瞳孔反射）",
      "視力低下・弱視（形態覚剥奪）",
      "眼振（両側性重症例）",
      "斜視",
      "眼球振盪",
    ],
    causes:
      "CRYAA・CRYAB・CRYBB1・CRYBB2・CRYGD・GJA3・GJA8・MIP等の遺伝子（クリスタリン・コネキシン・アクアポリン等をコード）の病的バリアント。常染色体優性・劣性・X連鎖の遺伝形式がある。",
    diagnosis:
      "細隙灯顕微鏡（水晶体混濁の確認・分類）・視力・眼底・視覚誘発電位・眼超音波・遺伝子検査・全身合併症の評価（染色体検査等）。",
    treatment:
      "早期白内障摘出（弱視形成を防ぐ）・眼内レンズ挿入または無水晶体眼の光学補正（コンタクト・眼鏡）・弱視訓練（健眼遮蔽）。就学前までの治療開始が視力予後を決定する。",
    prognosis:
      "早期発見・早期治療（生後数週間以内）で視力発達が期待できる。治療開始が遅れるほど弱視が残存しやすい。両側性は片側性より視力予後が比較的良好。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Hereditary+Congenital+Cataract",
  },

  // ─── 腎・泌尿器疾患（追加） ────────────────────────────────
  {
    slug: "arpkd",
    name: "常染色体劣性多発性嚢胞腎（ARPKD）",
    nameEn: "Autosomal Recessive Polycystic Kidney Disease",
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "PKHD1遺伝子変異による先天性腎・肝疾患で、集合管に多数の微小嚢胞が形成される。出生前から重篤な腎機能低下・両腎腫大・呼吸障害を呈することがあり、肝線維症・胆管拡張（カロリ症候群）を合併する。",
    symptoms: [
      "出生時の著明な両腎腫大",
      "呼吸障害（肺低形成）",
      "新生児期からの腎機能低下",
      "高血圧",
      "肝線維症・門脈圧亢進症",
      "カロリ症候群（胆管嚢胞性拡張）",
    ],
    causes:
      "PKHD1遺伝子（フィブロシスチン/ポリダクチンをコード）の両アレル性病的バリアントによる常染色体劣性遺伝。集合管の増殖・分化が障害され多数の微小嚢胞が形成される。",
    diagnosis:
      "胎児超音波・出生後腎超音波（両腎腫大・高エコー）・PKHD1遺伝子検査・腎機能評価・肝超音波・MRI（肝線維症・胆管拡張）。",
    treatment:
      "腎代替療法（透析・腎移植）が根幹。高血圧管理（ACE阻害薬・ARB）。呼吸障害には人工呼吸管理。肝合併症管理（門脈圧亢進症・胆管炎）。バソプレシンV2受容体拮抗薬（トルバプタン）の効果が研究段階。",
    prognosis:
      "重症型（出生時呼吸不全）は新生児期に死亡することがあるが、生存例の多くは数年以内に末期腎不全に至る。腎移植後は比較的良好な経過。肝合併症が長期予後に影響する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Autosomal+Recessive+Polycystic+Kidney+Disease",
  },
  {
    slug: "methylmalonic-acidemia-renal",
    name: "メチルマロン酸血症（腎合併型）",
    nameEn: "Methylmalonic Acidemia with Renal Involvement",
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "メチルマロン酸血症の長期合併症として進行性慢性腎不全を呈する型。メチルマロン酸等の有機酸が腎尿細管に蓄積し、腎機能が進行性に低下する。代謝コントロールが良好でも腎障害が進行することがある。",
    symptoms: [
      "慢性腎不全の進行（糸球体濾過率低下）",
      "タンパク尿",
      "尿細管機能障害",
      "代謝性アシドーシス（腎性）",
      "高血圧",
      "メチルマロン酸血症の基本症状（代謝発作・神経障害）",
    ],
    causes:
      "MMUT・MMAA・MMAB・MMADHC等の遺伝子変異によるメチルマロン酸血症に合併する腎障害。メチルマロン酸の腎毒性・ミトコンドリア機能障害が腎尿細管障害を引き起こす。",
    diagnosis:
      "血中・尿中メチルマロン酸高値・腎機能検査（血清クレアチニン・GFR低下）・尿検査（タンパク尿・尿細管機能障害マーカー）・腎生検（ミトコンドリア障害・尿細管変性）。",
    treatment:
      "タンパク質制限食・コバラミン補充（反応性の場合）・カルニチン補充。腎不全進行時は腎代替療法（透析・腎移植）。肝腎同時移植が根本的治療として選択される場合がある。",
    prognosis:
      "腎障害は代謝コントロールとは独立して進行することがあり、多くが成人期に末期腎不全に至る。腎移植後も代謝疾患は継続するが腎予後は改善する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Methylmalonic+Acidemia+Renal",
  },

  // ─── 追加の神経・代謝疾患 ────────────────────────────────
  {
    slug: "poems-syndrome",
    name: "クロウ・深瀬症候群（POEMS症候群）",
    nameEn: "POEMS Syndrome / Crow-Fukase Syndrome",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "形質細胞増殖に伴う多発神経障害・臓器腫大・内分泌障害・M蛋白・皮膚変化を特徴とする稀な多系統疾患。血管内皮増殖因子（VEGF）の過剰産生が病態の中心で、神経障害と浮腫が主な臨床問題となる。",
    symptoms: [
      "多発神経障害（末梢神経・運動＞感覚）",
      "臓器腫大（肝脾腫・リンパ節腫脹）",
      "内分泌障害（糖尿病・甲状腺機能低下・性腺機能低下）",
      "M蛋白（IgA・IgGλ型）",
      "皮膚変化（色素沈着・血管腫・多毛・浮腫）",
      "全身浮腫・腹水・胸水",
      "骨硬化性病変",
    ],
    causes:
      "クローナルな形質細胞からのVEGF過剰産生が主な病態。IL-6・IL-1β等のサイトカインも関与する。形質細胞腫・多発性骨髄腫類縁疾患として分類される。",
    diagnosis:
      "POEMS基準（多発神経障害＋M蛋白が必須、臓器腫大・内分泌障害・皮膚変化・乳頭浮腫が補助基準）・血清VEGF高値・骨髄生検・骨格X線/CT（硬化性骨病変）。",
    treatment:
      "局所放射線療法（孤立性病変）・大量メルファラン＋自家末梢血幹細胞移植（全身型）・レナリドミド＋デキサメタゾン・ベバシズマブ（VEGF阻害）。",
    prognosis:
      "適切な治療で長期生存が可能で、神経障害の改善も期待できる。自家幹細胞移植後の生存期間中央値は10年以上。未治療・重症例の予後は不良。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=POEMS+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4784",
  },
  {
    slug: "congenital-sodium-diarrhea",
    name: "先天性ナトリウム下痢症",
    nameEn: "Congenital Sodium Diarrhea",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "腸管ナトリウム輸送体の先天性欠損による分泌性下痢症。糞便中にナトリウムが過剰に失われ、低ナトリウム血症・代謝性アシドーシスを生じる極めて稀な遺伝性疾患。SPINT2遺伝子変異が原因の一型がある。",
    symptoms: [
      "出生直後からの大量水様性下痢",
      "低ナトリウム血症",
      "代謝性アシドーシス",
      "脱水・腹部膨満",
      "成長障害",
      "羊水過多（胎児型）",
    ],
    causes:
      "SPINT2遺伝子（セリンプロテアーゼ阻害因子）変異による先天性タフトング腸症（腸管絨毛上皮異形成を合併する型）や、その他のイオン輸送体遺伝子変異が原因となる。常染色体劣性遺伝。",
    diagnosis:
      "糞便中ナトリウム高値・血清電解質異常（低Na・アシドーシス）・腸管生検（絨毛萎縮・上皮異形成）・遺伝子検査（SPINT2等）。",
    treatment:
      "ナトリウム補充療法（経口・経静脈）が基本。症状に応じた栄養管理（経腸・経静脈栄養）。原因遺伝子・病型に応じた対症療法。",
    prognosis:
      "生涯にわたる補充療法が必要で、適切な管理で生存・成長が可能。腸管上皮異形成合併型は予後が悪い場合がある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Congenital+Sodium+Diarrhea",
  },
  {
    slug: "cardiac-rhabdomyoma-tsc",
    name: "心臓横紋筋腫（結節性硬化症合併）",
    nameEn: "Cardiac Rhabdomyoma with Tuberous Sclerosis Complex",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "結節性硬化症（TSC1/TSC2遺伝子変異）に合併する心臓の良性腫瘍。胎児期・新生児期に最も多く、心腔内を占拠して不整脈・流出路閉塞・心不全を呈することがある。多くは自然退縮する。",
    symptoms: [
      "胎児・新生児期の心腔内腫瘤（超音波所見）",
      "胎児水腫・心不全（重症例）",
      "心室性不整脈（心室頻拍・WPW症候群）",
      "流出路閉塞による症状",
      "結節性硬化症の全身症状（皮膚・脳・腎合併症）",
    ],
    causes:
      "TSC1（ハマルチン）またはTSC2（チュベリン）遺伝子変異による結節性硬化症に合併する過誤腫性良性腫瘍。mTOR経路の過活性化により心筋細胞が腫瘤を形成する。",
    diagnosis:
      "胎児・小児心エコー（心腔内腫瘤の確認）・MRI・TSC1/TSC2遺伝子検査・皮膚所見（葉状白斑・血管線維腫）・頭部MRI（皮質結節・上衣下結節）。",
    treatment:
      "多くは経過観察で自然退縮する。症候性（不整脈・心不全・閉塞）にはmTOR阻害薬（エベロリムス）が有効で腫瘍縮小効果あり。重篤な症例では外科的切除。",
    prognosis:
      "心臓横紋筋腫自体は良性で多くが自然退縮する。TSC全体の予後は脳・腎病変の重症度に依存する。不整脈管理が重要な場合がある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Cardiac+Rhabdomyoma+Tuberous+Sclerosis",
  },
  {
    slug: "noonan-syndrome-renal",
    name: "ヌーナン症候群（腎合併型）",
    nameEn: "Noonan Syndrome with Renal Anomalies",
    category: "腎・泌尿器疾患",
    categorySlug: "renal",
    overview:
      "RAS-MAPKシグナル経路の遺伝子変異によるヌーナン症候群において、腎・泌尿器奇形（水腎症・重複腎盂尿管・馬蹄腎等）を合併する型。先天性心疾患・低身長・顔貌異常に加えて腎機能管理が重要となる。",
    symptoms: [
      "先天性腎・泌尿器奇形（水腎症・馬蹄腎・重複腎盂尿管）",
      "先天性心疾患（肺動脈弁狭窄・肥大型心筋症）",
      "低身長",
      "特徴的顔貌（眼間解離・耳介低位等）",
      "出血傾向（凝固因子欠乏）",
      "精巣未下降（男性）",
    ],
    causes:
      "PTPN11（最多）・SOS1・RAF1・KRAS・NRAS・BRAF・RIT1等のRAS-MAPK経路遺伝子の病的バリアント。常染色体優性遺伝（多くはde novo）。",
    diagnosis:
      "臨床所見・遺伝子検査（RAS-MAPKパネル）・腎超音波・排尿時膀胱尿道造影・腎機能検査・心エコー・凝固検査。",
    treatment:
      "腎奇形に対する泌尿器科的管理・手術。先天性心疾患の外科的治療。低身長へのGH療法。出血傾向の管理（手術前凝固評価）。MEK阻害薬（ビニメチニブ等）が研究段階。",
    prognosis:
      "腎・心合併症の重症度に依存するが、適切な管理で多くは成人まで生存可能。ヌーナン症候群関連白血病（JMML等）のリスクがある。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Noonan+Syndrome+Renal",
  },
  {
    slug: "congenital-intestinal-malrotation-refractory",
    name: "腸回転異常症（難治性）",
    nameEn: "Intestinal Malrotation, Refractory",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "胎生期の腸管回転・固定の異常により、腸捻転・ラッド靭帯による十二指腸閉塞・短腸症候群等の重篤な合併症を繰り返す難治性型。先天性心疾患・内臓逆位等との合併例も多い。",
    symptoms: [
      "新生児期の胆汁性嘔吐・腹部膨満",
      "中腸捻転（腸管虚血・壊死）",
      "慢性腹痛・消化吸収障害",
      "短腸症候群（広範切除後）",
      "先天性心疾患・他の奇形の合併",
    ],
    causes:
      "胎生4〜12週の腸管回転・固定の発生障害。多くは散発性。先天性心疾患・無脾症候群・多脾症候群・内臓逆位・胃壁破裂等と合併することが多い。原因遺伝子は主に不明。",
    diagnosis:
      "上部消化管造影（屈曲十二指腸・「コークスクリュー」状の小腸）・腹部超音波（SMA/SMV反転）・腹部CT・内視鏡検査。",
    treatment:
      "ラッド手術（腸回転異常の外科的修復）が基本。中腸捻転は緊急手術が必要。短腸症候群には長期栄養管理（TPN・腸管移植）。",
    prognosis:
      "中腸捻転で広範囲腸管壊死をきたすと短腸症候群となり長期的なTPN依存となる。早期診断・手術が予後を決定する。",
    jrctSearchUrl:
      "https://jrct.niph.go.jp/search?query=Intestinal+Malrotation",
  },
  {
    slug: "fukuyama-congenital-muscular-dystrophy",
    name: "福山型先天性筋ジストロフィー",
    nameEn: "Fukuyama Congenital Muscular Dystrophy",
    nanbyoNumber: 112,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "フクチン遺伝子（FKTN）の変異により生じる常染色体劣性遺伝の先天性筋ジストロフィー。日本人に多く、筋力低下・関節拘縮とともに脳奇形（鵞卵石様脳回異常）・重度知的障害・てんかんを合併する。生後早期より筋緊張低下が顕著で、独歩不能例が多い。",
    symptoms: ["筋緊張低下", "筋力低下", "関節拘縮", "脳奇形", "重度知的障害", "てんかん", "眼異常（網膜剥離）"],
    causes: "FKTN遺伝子変異によりフクチンタンパク質が欠損し、α-ジストログリカンの糖鎖修飾異常が生じる。常染色体劣性遺伝。",
    diagnosis: "血清CK高値、筋生検によるα-ジストログリカン免疫染色低下、MRI脳奇形所見、遺伝子検査。",
    treatment: "根治療法なし。リハビリテーション・装具療法・栄養管理・抗てんかん薬・呼吸管理が主体。",
    prognosis: "多くは10歳代までに死亡。人工呼吸管理で20歳代まで生存例あり。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Fukuyama+Congenital+Muscular+Dystrophy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/112",
  },
  {
    slug: "emery-dreifuss-muscular-dystrophy",
    name: "エメリー・ドレイフス型筋ジストロフィー",
    nameEn: "Emery-Dreifuss Muscular Dystrophy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "エメリン遺伝子またはLMNA遺伝子変異により生じる筋ジストロフィー。早期の関節拘縮（肘・足首・頸部）、緩徐進行性の筋萎縮・筋力低下、そして致死的な心筋症・刺激伝導障害を三徴とする。突然死のリスクが高く、心臓管理が最重要。",
    symptoms: ["早期関節拘縮", "筋力低下", "心房細動", "刺激伝導障害", "突然死リスク", "心筋症"],
    causes: "X連鎖型はEMD（エメリン）遺伝子変異、常染色体型はLMNA遺伝子変異。核膜タンパク質の機能異常。",
    diagnosis: "筋生検・免疫染色、心電図・ホルター心電図、心エコー、遺伝子検査。",
    treatment: "ペースメーカー・ICD植込みが心臓突然死予防に不可欠。筋症状にはリハビリテーション。",
    prognosis: "心臓管理により生命予後は改善。ペースメーカー未植込みの場合、突然死リスク高。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Emery-Dreifuss+Muscular+Dystrophy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/113",
  },
  {
    slug: "lgmd",
    name: "肢帯型筋ジストロフィー",
    nameEn: "Limb-Girdle Muscular Dystrophy",
    nanbyoNumber: 114,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "肩帯・骨盤帯を中心とした筋萎縮・筋力低下を呈する遺伝性筋疾患群の総称。30以上のサブタイプが存在し、常染色体優性（LGMD1型）と劣性（LGMD2型）に分類される。発症年齢・進行速度・心肺合併症の有無はサブタイプにより大きく異なる。",
    symptoms: ["肩帯筋力低下", "骨盤帯筋力低下", "歩行障害", "階段昇降困難", "心筋症（一部）", "呼吸障害（一部）"],
    causes: "サルコグリカン・ジスフェリン・カルパイン3など筋構造タンパクをコードする遺伝子変異。サブタイプにより異なる。",
    diagnosis: "血清CK測定、筋電図、筋MRI、筋生検・免疫染色、遺伝子パネル検査。",
    treatment: "根治療法なし。理学療法・装具・呼吸管理・心臓管理をサブタイプに応じて実施。",
    prognosis: "サブタイプにより大きく異なる。軽症例は長期就労可能。重症例は早期に車椅子依存。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Limb-Girdle+Muscular+Dystrophy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/114",
  },
  {
    slug: "congenital-myasthenic-syndrome",
    name: "先天性筋無力症候群",
    nameEn: "Congenital Myasthenic Syndrome",
    nanbyoNumber: 115,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "神経筋接合部の遺伝的機能異常により生じる疾患群。自己免疫機序ではなく遺伝子変異が原因で、アセチルコリン受容体サブユニット・コリンエステラーゼ・シナプス前膜タンパクなど多様な遺伝子が関与する。眼症状・易疲労性・呼吸障害を呈する。",
    symptoms: ["眼瞼下垂", "外眼筋麻痺", "易疲労性", "四肢筋力低下", "呼吸困難", "嚥下障害"],
    causes: "CHRNE・RAPSN・DOK7・COLQ・SCN4Aなど神経筋接合部関連遺伝子の変異。常染色体劣性が多い。",
    diagnosis: "反復神経刺激試験、単線維筋電図、遺伝子検査。抗AChR抗体・抗MuSK抗体は陰性。",
    treatment: "サブタイプにより異なる。コリンエステラーゼ阻害薬・3,4-ジアミノピリジン・サルブタモール・エフェドリンなど。",
    prognosis: "サブタイプにより大きく異なる。適切な治療で安定するものから、呼吸管理が必要な重症例まで。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Congenital+Myasthenic+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/115",
  },
  {
    slug: "oculopharyngeal-muscular-dystrophy",
    name: "眼咽頭型筋ジストロフィー",
    nameEn: "Oculopharyngeal Muscular Dystrophy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "PABPN1遺伝子のGCG三塩基繰り返し伸長により生じる常染色体優性遺伝の筋ジストロフィー。中年以降に発症し、眼瞼下垂と嚥下障害を主徴とする。進行すると外眼筋麻痺・四肢近位筋の筋力低下も出現する。誤嚥性肺炎が予後を左右する。",
    symptoms: ["眼瞼下垂", "嚥下障害", "外眼筋麻痺", "近位筋力低下", "誤嚥", "構音障害"],
    causes: "PABPN1遺伝子のポリアラニン伸長変異（GCG繰り返し増加）。常染色体優性遺伝。",
    diagnosis: "臨床症状・家族歴、筋生検（核内封入体）、遺伝子検査。",
    treatment: "根治療法なし。眼瞼下垂には外科的挙上術、嚥下障害には食事形態調整・経管栄養・嚥下リハビリ。",
    prognosis: "緩徐進行性。嚥下管理により誤嚥性肺炎を予防することで予後改善が期待できる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Oculopharyngeal+Muscular+Dystrophy",
  },
  {
    slug: "miyoshi-myopathy",
    name: "遠位型ミオパチー（三好型）",
    nameEn: "Miyoshi Myopathy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "ジスフェリン遺伝子（DYSF）変異による常染色体劣性遺伝の遠位型ミオパチー。10〜30歳代に下腿後面筋（腓腹筋・ヒラメ筋）の萎縮・筋力低下で発症し、CKが著明高値を示す。徐々に近位筋にも波及し、歩行障害が進行する。",
    symptoms: ["下腿後面筋力低下", "足首背屈困難", "CK著明高値", "歩行障害", "近位筋力低下（後期）"],
    causes: "DYSF遺伝子変異によるジスフェリンタンパク質欠損。筋細胞膜修復機構の障害。",
    diagnosis: "血清CK（数千〜数万IU/L）、筋MRI（後面優位）、筋生検・ジスフェリン免疫染色、遺伝子検査。",
    treatment: "根治療法なし。理学療法・装具療法。ステロイドは無効または有害な場合あり。",
    prognosis: "緩徐進行性。発症20〜30年後に車椅子依存となる例が多い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Miyoshi+Myopathy",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/116",
  },
  {
    slug: "hypokalemic-periodic-paralysis",
    name: "周期性四肢麻痺（低カリウム性）",
    nameEn: "Hypokalemic Periodic Paralysis",
    nanbyoNumber: 117,
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "発作性の低カリウム血症に伴う四肢弛緩性麻痺を呈する疾患。CACNA1S・SCN4A遺伝子変異による一次性（家族性）と、甲状腺機能亢進症・腎疾患などによる二次性がある。睡眠・食事・運動後に発作が誘発されやすい。",
    symptoms: ["発作性四肢麻痺", "低カリウム血症", "筋痛", "呼吸困難（重症）", "不整脈"],
    causes: "カルシウムチャネル（CACNA1S）またはナトリウムチャネル（SCN4A）遺伝子変異。カリウムの細胞内移行異常。",
    diagnosis: "発作時血清K値低下、筋電図、遺伝子検査。甲状腺機能検査で二次性を除外。",
    treatment: "急性発作にはカリウム補充。予防にはアセタゾラミド・ジクロルフェナミド。誘因回避（高糖質食・過労・寒冷）。",
    prognosis: "発作は中年以降に減少傾向。繰り返す発作により固定筋力低下が生じることがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Hypokalemic+Periodic+Paralysis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/117",
  },
  {
    slug: "congenital-adrenal-hyperplasia",
    name: "先天性副腎過形成（21水酸化酵素欠損症）",
    nameEn: "Congenital Adrenal Hyperplasia",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "CYP21A2遺伝子変異により21水酸化酵素が欠損し、コルチゾール・アルドステロン産生不全とアンドロゲン過剰を生じる。塩喪失型（重症）・単純男性化型・非古典型の病型がある。女児では外性器男性化、男児では早発思春期を呈する。",
    symptoms: ["副腎クリーゼ（塩喪失型）", "低血糖", "低血圧", "外性器男性化（女児）", "早発思春期", "低身長"],
    causes: "CYP21A2遺伝子変異。常染色体劣性遺伝。先天性副腎過形成の約90%を占める。",
    diagnosis: "新生児マススクリーニング（17-OHP高値）、血清電解質・コルチゾール・アンドロゲン測定、遺伝子検査。",
    treatment: "ヒドロコルチゾン（コルチゾール補充）、フルドロコルチゾン（塩喪失型）、食塩補充。外性器形成術（女児）。",
    prognosis: "適切な治療で通常の生活が可能。ストレス時の副腎クリーゼに注意が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Congenital+Adrenal+Hyperplasia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/48",
  },
  {
    slug: "men1",
    name: "多発性内分泌腫瘍症1型（MEN1）",
    nameEn: "Multiple Endocrine Neoplasia Type 1",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "MEN1遺伝子（メニン）変異による常染色体優性遺伝の腫瘍症候群。副甲状腺腺腫（原発性副甲状腺機能亢進症）・膵内分泌腫瘍（ガストリノーマ・インスリノーマなど）・下垂体腺腫の三主徴を呈する。浸透率は90%以上。",
    symptoms: ["高カルシウム血症", "消化性潰瘍（ゾリンジャー・エリソン症候群）", "低血糖（インスリノーマ）", "頭痛", "視野障害", "骨粗鬆症"],
    causes: "MEN1遺伝子（11q13）の変異によるメニンタンパク機能喪失。腫瘍抑制遺伝子のヘテロ接合性喪失。",
    diagnosis: "血清カルシウム・PTH・ガストリン・インスリン測定、画像検査（CT・MRI・ソマトスタチン受容体シンチ）、遺伝子検査。",
    treatment: "副甲状腺手術・膵腫瘍切除・下垂体腺腫治療を組み合わせる。プロトンポンプ阻害薬（ガストリノーマ）。",
    prognosis: "定期的サーベイランスにより腫瘍を早期発見することで予後改善。膵腫瘍の悪性化が予後を左右する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Multiple+Endocrine+Neoplasia+Type+1",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/58",
  },
  {
    slug: "men2",
    name: "多発性内分泌腫瘍症2型（MEN2）",
    nameEn: "Multiple Endocrine Neoplasia Type 2",
    nanbyoNumber: 59,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "RET遺伝子変異による常染色体優性遺伝の腫瘍症候群。甲状腺髄様癌（MTC）を主徴とし、MEN2Aでは褐色細胞腫・原発性副甲状腺機能亢進症を、MEN2Bでは褐色細胞腫・神経節神経腫・マルファン様体型を合併する。",
    symptoms: ["甲状腺髄様癌", "褐色細胞腫", "高血圧発作", "原発性副甲状腺機能亢進症（MEN2A）", "粘膜神経腫（MEN2B）"],
    causes: "RET遺伝子変異（10q11.2）。常染色体優性遺伝。変異コドンにより病型と悪性度が異なる。",
    diagnosis: "血清カルシトニン（MTC腫瘍マーカー）、カテコラミン・メタネフリン（褐色細胞腫）、画像検査、遺伝子検査。",
    treatment: "予防的甲状腺全摘（遺伝子検査で診断後）。褐色細胞腫先行手術後に甲状腺手術。進行MTCにはバンデタニブ・カボザンチニブ。",
    prognosis: "MTC予後はリンパ節転移・遠隔転移の有無に依存。予防的手術で根治可能な例あり。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Multiple+Endocrine+Neoplasia+Type+2",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/59",
  },
  {
    slug: "vhl-disease",
    name: "フォン・ヒッペル・リンドウ病",
    nameEn: "Von Hippel-Lindau Disease",
    nanbyoNumber: 30,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "VHL腫瘍抑制遺伝子変異による常染色体優性遺伝の多発腫瘍症候群。網膜血管芽腫・中枢神経血管芽腫（小脳・脊髄）・腎細胞癌・褐色細胞腫・膵病変（嚢胞・神経内分泌腫瘍）を多発する。若年発症・多臓器発生が特徴。",
    symptoms: ["網膜血管芽腫（視力低下）", "小脳血管芽腫（頭痛・運動失調）", "腎細胞癌", "褐色細胞腫", "膵嚢胞・腫瘍"],
    causes: "VHL遺伝子（3p25）変異。HIF経路の恒常的活性化によりVEGFなど血管新生因子が過剰産生される。",
    diagnosis: "眼底検査・MRI（脳・脊髄・腹部）・CT・尿カテコラミン、遺伝子検査。定期的多臓器サーベイランスが必須。",
    treatment: "血管芽腫・腎細胞癌の外科切除または定位放射線治療。ベルゾウチファダブ（HIF-2α阻害薬）が腎細胞癌・血管芽腫に使用可能。",
    prognosis: "定期サーベイランスと早期治療で予後改善。腎細胞癌・中枢神経病変の悪化が予後を左右。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Von+Hippel-Lindau+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/30",
  },
  {
    slug: "tuberous-sclerosis",
    name: "結節性硬化症",
    nameEn: "Tuberous Sclerosis Complex",
    nanbyoNumber: 24,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "TSC1またはTSC2遺伝子変異によりmTOR経路が恒常的に活性化し、全身多臓器に過誤腫（正常組織が混在した良性腫瘍）が多発する常染色体優性遺伝疾患。皮膚病変・てんかん・知的障害・自閉スペクトラム症・腎血管筋脂肪腫・肺リンパ脈管筋腫症を合併する。",
    symptoms: ["顔面血管線維腫", "葉状白斑", "てんかん", "知的障害", "自閉症", "腎血管筋脂肪腫", "肺LAM（女性）"],
    causes: "TSC1（9q34、ハマルチン）またはTSC2（16p13.3、チュベリン）遺伝子変異。mTORC1の過活性化。",
    diagnosis: "皮膚所見・MRI（脳結節・上衣下結節・巨細胞性星細胞腫）・腹部CT・胸部CT・眼底検査、遺伝子検査。",
    treatment: "エベロリムス（mTOR阻害薬）が上衣下巨細胞性星細胞腫・腎血管筋脂肪腫・肺LAMに有効。抗てんかん薬（ビガバトリン等）。",
    prognosis: "てんかんコントロールと腎病変管理が鍵。mTOR阻害薬の登場で腫瘍縮小が可能となった。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Tuberous+Sclerosis+Complex",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/24",
  },
  {
    slug: "nf1",
    name: "神経線維腫症1型（NF1）",
    nameEn: "Neurofibromatosis Type 1",
    nanbyoNumber: 34,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "NF1遺伝子（ニューロフィブロミン）変異による常染色体優性遺伝疾患。カフェオレ斑・皮膚神経線維腫・腋窩・鼠径部そばかす・ライシュ結節・視神経膠腫・骨病変を特徴とする。出生3000人に1人と比較的頻度が高い。",
    symptoms: ["カフェオレ斑", "皮膚神経線維腫", "叢状神経線維腫", "ライシュ結節（虹彩過誤腫）", "視神経膠腫", "学習障害", "骨異形成"],
    causes: "NF1遺伝子（17q11.2）変異によるRas-GTPase活性化（ニューロフィブロミン機能喪失）。常染色体優性遺伝、約50%が新生変異。",
    diagnosis: "NF1診断基準（カフェオレ斑6個以上・神経線維腫2個以上など）を満たすことで臨床診断。遺伝子検査で確定。",
    treatment: "セルメチニブ（MEK阻害薬）が叢状神経線維腫に保険適用。視神経膠腫にはカルボプラチン+ビンクリスチン。",
    prognosis: "悪性末梢神経鞘腫瘍（MPNST）への移行が最大の予後規定因子。定期的な画像モニタリングが重要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Neurofibromatosis+Type+1",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/34",
  },
  {
    slug: "nf2",
    name: "神経線維腫症2型（NF2）",
    nameEn: "Neurofibromatosis Type 2",
    nanbyoNumber: 35,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "NF2遺伝子（メルリン）変異による常染色体優性遺伝疾患。両側聴神経鞘腫（前庭神経鞘腫）を主徴とし、髄膜腫・脊髄腫瘍・末梢神経鞘腫を多発する。10〜30歳代に難聴・耳鳴り・平衡障害で発症することが多い。",
    symptoms: ["両側聴神経鞘腫", "難聴", "耳鳴り", "平衡障害", "髄膜腫", "脊髄腫瘍", "白内障（若年性）"],
    causes: "NF2遺伝子（22q12.2）変異によるメルリンタンパク機能喪失。常染色体優性遺伝、約50%が新生変異。",
    diagnosis: "MRI（両側内耳道腫瘍が診断的）、聴力検査、遺伝子検査。診断基準あり。",
    treatment: "ベバシズマブ（聴神経鞘腫縮小効果）、外科的切除、定位放射線治療（ガンマナイフ）。セリタメプロチバルト（NF2関連髄膜腫）。",
    prognosis: "腫瘍の多発・再発により難聴・神経機能障害が進行。両側難聴は避けがたいが人工内耳等で対応。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Neurofibromatosis+Type+2",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/35",
  },
  {
    slug: "cornelia-de-lange-syndrome",
    name: "コーネリア・デ・ランゲ症候群",
    nameEn: "Cornelia de Lange Syndrome",
    nanbyoNumber: 188,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "コヒーシン複合体関連遺伝子（NIPBL・SMC1A・SMC3・RAD21・HDAC8）変異により生じる先天異常症候群。特徴的顔貌（睫毛長・合指眉・薄い上唇）・四肢奇形（前腕短縮・指合着）・成長障害・知的障害・行動異常を特徴とする。",
    symptoms: ["特徴的顔貌", "成長障害", "知的障害", "四肢奇形", "行動異常（自傷・常同行動）", "消化管奇形", "心奇形"],
    causes: "NIPBL遺伝子変異が約60%を占める。コヒーシン複合体の機能異常により発生・転写調節が障害される。",
    diagnosis: "臨床診断基準に基づく表現型評価、遺伝子パネル検査。",
    treatment: "対症療法中心。理学療法・作業療法・言語療法・行動療法。消化管・心奇形の外科的修復。",
    prognosis: "重症度は遺伝子変異・表現型により幅広い。適切な支援で社会参加可能な例から重症知的障害まで。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Cornelia+de+Lange+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/188",
  },
  {
    slug: "evans-syndrome",
    name: "エバンス症候群",
    nameEn: "Evans Syndrome",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "自己免疫性溶血性貧血（AIHA）と免疫性血小板減少症（ITP）が同時または逐次的に合併する自己免疫疾患。稀に自己免疫性好中球減少症も伴う。基礎疾患（SLE・CLL・原発性免疫不全症）に伴う二次性と原発性がある。難治性で再発を繰り返しやすい。",
    symptoms: ["溶血性貧血", "黄疸", "血小板減少", "出血傾向", "脾腫", "疲労感"],
    causes: "赤血球・血小板に対する自己抗体産生。調節性T細胞の機能異常が関与する。約50%に基礎疾患あり。",
    diagnosis: "直接クームス試験陽性・網状赤血球増加・血小板減少の組合せ。基礎疾患検索（骨髄検査・免疫検査・リンパ節生検）。",
    treatment: "ステロイド療法、リツキシマブ、IVIG、免疫抑制薬（ミコフェノール酸・アザチオプリン）。難治例に脾摘。",
    prognosis: "再発・寛解を繰り返す慢性経過が多い。基礎疾患の治療が予後に影響する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Evans+Syndrome",
  },
  {
    slug: "cold-agglutinin-disease",
    name: "寒冷凝集素症",
    nameEn: "Cold Agglutinin Disease",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "低温（37℃以下）で活性化するIgM型自己抗体（寒冷凝集素）が赤血球表面のI抗原に結合し、補体（C3b）を介した血管外溶血と血管内溶血を起こす自己免疫性溶血性貧血。寒冷暴露で溶血発作・チアノーゼ・レイノー現象が誘発される。",
    symptoms: ["溶血性貧血", "黄疸", "寒冷暴露による症状悪化", "レイノー現象", "チアノーゼ（末梢）", "疲労感", "血色素尿"],
    causes: "原発性（CLDNと関連するMYD88変異クローン）または続発性（マイコプラズマ感染・リンパ腫）。補体経路の活性化が溶血を起こす。",
    diagnosis: "直接クームス試験（C3d陽性・IgM陰性）、寒冷凝集素価測定、末梢血塗抹（凝集像）、骨髄生検。",
    treatment: "保温が最重要。スティカトリマブ（補体C1s阻害薬）・リツキシマブ・ベンダムスチン+リツキシマブ。ステロイドは無効。",
    prognosis: "慢性経過。寒冷暴露を避けることで症状コントロール可能。リンパ腫合併の有無が長期予後に影響。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Cold+Agglutinin+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/61",
  },
  {
    slug: "eosinophilic-fasciitis",
    name: "好酸球性筋膜炎（シュルマン症候群）",
    nameEn: "Eosinophilic Fasciitis",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "四肢を中心とした皮下・筋膜の炎症と線維化により皮膚硬化・関節拘縮をきたす稀な炎症性疾患。末梢血好酸球増多・高γグロブリン血症を伴う。激しい運動や過労が発症の誘因となる例がある。全身性強皮症との鑑別が重要。",
    symptoms: ["四肢皮膚硬化（皮下・筋膜）", "関節拘縮", "好酸球増多", "皮膚陥凹（溝状変化）", "倦怠感", "筋痛"],
    causes: "不明。自己免疫機序が推定される。T細胞・好酸球の組織浸潤と線維化が病態の主体。",
    diagnosis: "皮膚生検（筋膜生検が確診的）、末梢血好酸球増多、MRI（筋膜肥厚・造影効果）、高γグロブリン血症。",
    treatment: "副腎皮質ステロイドが第一選択。難治例にヒドロキシクロロキン・メトトレキサートを追加。",
    prognosis: "早期ステロイド治療で寛解例あり。関節拘縮が残存する場合は理学療法が重要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Eosinophilic+Fasciitis",
  },
  {
    slug: "polymyalgia-rheumatica",
    name: "リウマチ性多発筋痛症",
    nameEn: "Polymyalgia Rheumatica",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "50歳以上の高齢者に発症し、肩・頸部・腰部・大腿部の筋痛・こわばりを主徴とする炎症性疾患。CRP・ESR著明高値を伴い、低用量ステロイドに劇的に奏効する。巨細胞性動脈炎と密接に関連し、約15〜20%に合併する。",
    symptoms: ["肩・腰・大腿の筋痛", "朝のこわばり", "CRP・ESR高値", "発熱", "体重減少", "倦怠感"],
    causes: "不明。自然免疫・獲得免疫双方の異常が推定される。遺伝的素因（HLA-DR4）と環境因子の関与。",
    diagnosis: "2012年ACR/EULAR分類基準。肩・腰の超音波検査（滑液包炎）、PET-CTで血管炎除外、低用量PSL著効が支持的。",
    treatment: "プレドニゾロン10〜20mg/日から開始し漸減。トシリズマブがステロイド依存例に有効。",
    prognosis: "ステロイド治療で速やかに症状改善。再燃・再発を繰り返す例では長期治療が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Polymyalgia+Rheumatica",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/53",
  },
  {
    slug: "crmo",
    name: "慢性再発性多巣性骨髄炎",
    nameEn: "Chronic Recurrent Multifocal Osteomyelitis",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "感染症を伴わない非細菌性の骨炎が多発・再発する小児・青年期の炎症性骨疾患。長管骨（大腿骨・脛骨・鎖骨）・脊椎・骨盤に好発する。皮膚病変（掌蹠膿疱症・乾癬）・炎症性腸疾患を合併することがある。成人型はSAPHO症候群と関連。",
    symptoms: ["骨痛", "局所腫脹", "発熱", "多発骨病変", "皮膚病変合併（一部）", "脊椎炎"],
    causes: "IL-1β・TNF-αなど炎症性サイトカインの過剰産生。IL10・LPIN2などの遺伝子変異が関与する例あり。",
    diagnosis: "全身MRI（骨炎の多発分布確認）、骨生検（感染・腫瘍除外）、炎症マーカー。細菌培養陰性。",
    treatment: "NSAIDs（第一選択）、ビスホスホネート、コルヒチン、TNF阻害薬、IL-1阻害薬（カナキヌマブ）。",
    prognosis: "数年で寛解する例が多いが、脊椎炎・関節破壊が残存する場合あり。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Chronic+Recurrent+Multifocal+Osteomyelitis",
  },
  {
    slug: "kostmann-syndrome",
    name: "先天性好中球減少症（コストマン症候群）",
    nameEn: "Congenital Neutropenia / Kostmann Syndrome",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "出生時から重篤な好中球減少症（好中球数500/μL未満）を呈する遺伝性疾患群の総称。ELANE・HAX1・G6PC3などの遺伝子変異が同定されている。反復する重症細菌感染（肺炎・皮膚感染・敗血症）を起こし、骨髄異形成症候群・急性骨髄性白血病への転化リスクがある。",
    symptoms: ["重篤な好中球減少", "反復する細菌感染", "口腔内潰瘍", "皮膚膿瘍", "肺炎", "敗血症"],
    causes: "ELANE（顆粒球エラスターゼ）・HAX1・G6PC3遺伝子変異など多様。骨髄での好中球成熟障害。",
    diagnosis: "好中球絶対数測定（ANC<500/μL）、骨髄検査（成熟障害）、遺伝子検査。",
    treatment: "G-CSF（フィルグラスチム）が第一選択。難治例・MDS/AML転化リスク高例には造血幹細胞移植。",
    prognosis: "G-CSF治療で感染管理が可能となったが、MDS/AML転化リスクの長期モニタリングが必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Congenital+Neutropenia+Kostmann",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/64",
  },
  {
    slug: "cyclic-neutropenia",
    name: "周期性好中球減少症",
    nameEn: "Cyclic Neutropenia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "約21日周期（通常15〜35日）で好中球数が周期的に低下し、好中球減少期（3〜6日間）に口腔内潰瘍・発熱・感染症を繰り返す遺伝性疾患。ELANE遺伝子変異が原因。重症例ではクロストリジウム菌による致死的腸炎も起こりうる。",
    symptoms: ["周期的発熱", "口腔内潰瘍", "歯肉炎", "頸部リンパ節腫脹", "腹痛", "好中球数周期的低下"],
    causes: "ELANE遺伝子（顆粒球エラスターゼ）変異による骨髄の顆粒球産生周期的障害。常染色体優性遺伝。",
    diagnosis: "3〜6週にわたる週3回の好中球数測定（周期性確認）、ELANE遺伝子検査。",
    treatment: "G-CSF（サイクル短縮・最低値の改善）。口腔衛生管理・感染時の抗菌薬投与。",
    prognosis: "成人になっても周期は継続するが、感染重症度が軽減する例も多い。コストマン症候群より予後良好。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Cyclic+Neutropenia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/65",
  },
  {
    slug: "chediak-higashi-syndrome",
    name: "チェディアック・東症候群",
    nameEn: "Chediak-Higashi Syndrome",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "LYST遺伝子変異によりリソソーム関連オルガネラの輸送が障害される常染色体劣性遺伝疾患。部分的白子症（銀白色の毛髪・虹彩低色素）・反復細菌感染・血小板機能異常・神経障害を特徴とする。多くの患者が「加速期」（HLH様病態）を呈し致死的となる。",
    symptoms: ["部分的白子症（銀色毛髪）", "反復感染", "出血傾向", "神経障害（末梢神経・小脳）", "HLH様加速期"],
    causes: "LYST遺伝子（1q42.1-q42.2）変異。巨大顆粒が好中球・血小板・メラノサイト・神経細胞に形成される。",
    diagnosis: "末梢血好中球の巨大顆粒（チェディアック顆粒）、皮膚・毛髪の低色素、遺伝子検査。",
    treatment: "造血幹細胞移植が加速期予防に最も有効。HLH様加速期にはエトポシド・ステロイド。",
    prognosis: "HSCT未施行の場合、多くは10歳以前に加速期で死亡。移植後は感染症・神経障害の管理が継続課題。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Chediak-Higashi+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/66",
  },
  {
    slug: "langerhans-cell-histiocytosis",
    name: "ランゲルハンス細胞組織球症",
    nameEn: "Langerhans Cell Histiocytosis",
    nanbyoNumber: 67,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "CD1a・CD207（ランゲリン）陽性の組織球様細胞が臓器に浸潤・増殖する腫瘍性疾患。BRAF V600E変異が約60%に認められる。骨・皮膚・リンパ節・下垂体・肺・肝臓など多臓器に病変を形成する。単病巣（好発：骨好酸球性肉芽腫）から多臓器重症型まで幅広い。",
    symptoms: ["骨痛・骨折", "皮膚発疹（脂漏性湿疹様）", "尿崩症（下垂体浸潤）", "肝機能障害", "呼吸障害（肺型）", "リンパ節腫脹"],
    causes: "BRAF V600E変異（約60%）、MAP2K1変異（約10〜15%）などMAPK経路の体細胞変異。クローン性疾患。",
    diagnosis: "生検（CD1a・CD207陽性・電顕でビルベック顆粒）、全身評価（FDG-PET/CT）、BRAF変異検索。",
    treatment: "単病巣骨病変はキュレタージ・局所ステロイド注射。多臓器型にはビンブラスチン+プレドニゾロン。BRAF変異陽性にはベムラフェニブ。",
    prognosis: "単病巣型は予後良好。肝・脾・骨髄浸潤を伴うリスク臓器型は予後不良。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Langerhans+Cell+Histiocytosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/67",
  },
  {
    slug: "castleman-disease",
    name: "キャッスルマン病",
    nameEn: "Castleman Disease",
    nanbyoNumber: 68,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "リンパ節の過形成を特徴とする稀なリンパ増殖性疾患。単中心性（UCD：通常は切除で治癒）と多中心性（MCD）に分類される。多中心性のうちHHV-8関連型とHHV-8非関連型（iMCD）があり、iMCDはIL-6過剰産生による全身炎症症状が主体。",
    symptoms: ["リンパ節腫脹", "発熱", "倦怠感", "体重減少", "浮腫", "貧血", "腎機能障害（iMCD）"],
    causes: "HHV-8（ヒトヘルペスウイルス8型）感染またはIL-6過剰産生（体細胞PDGFRA変異など）。",
    diagnosis: "リンパ節生検（病理組織）、IL-6値、HHV-8検査、PET-CT（病変分布）、除外診断。",
    treatment: "UCD：外科切除。HHV-8関連MCD：リツキシマブ。iMCD：シルツキシマブ（IL-6阻害薬）・トシリズマブ。",
    prognosis: "UCDは切除で良好。iMCDは治療継続が必要で、臓器不全を伴うCAPS（サイトカイン嵐）は致死的。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Castleman+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/68",
  },
  {
    slug: "scid",
    name: "重症複合免疫不全症",
    nameEn: "Severe Combined Immunodeficiency",
    nanbyoNumber: 69,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "T細胞とB細胞（および/またはNK細胞）の高度な機能不全により、出生直後から重篤な感染症（細菌・ウイルス・真菌・日和見感染）を繰り返す致死的な原発性免疫不全症。X連鎖型（IL2RG変異）・ADA欠損型・RAG1/2欠損型など多様な遺伝的背景がある。",
    symptoms: ["重篤な反復感染", "慢性下痢", "体重増加不良", "カンジダ症", "PCP肺炎", "BCG接種後の播種性感染"],
    causes: "IL2RG・ADA・RAG1・RAG2・JAK3・IL7R遺伝子変異など。T細胞発生・機能の根本的障害。",
    diagnosis: "リンパ球サブセット（T細胞著減）、免疫グロブリン低値、TRECスクリーニング（新生児）、遺伝子検査。",
    treatment: "造血幹細胞移植が根治療法。ADA欠損型には酵素補充療法（PEG-ADA）・遺伝子治療。移植まで無菌環境管理・IVIG・抗感染薬予防投与。",
    prognosis: "早期診断・早期移植で70〜90%が長期生存。診断遅延や感染合併は予後を著しく悪化させる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Severe+Combined+Immunodeficiency",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/69",
  },
  {
    slug: "autoimmune-enteropathy",
    name: "自己免疫性腸疾患",
    nameEn: "Autoimmune Enteropathy",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "腸管上皮細胞に対する自己抗体（抗腸上皮細胞抗体・抗杯細胞抗体）が産生され、重篤な難治性下痢・吸収不良・栄養障害をきたす疾患。乳幼児期発症（IPEX症候群など）から成人発症まで幅広い。免疫制御異常（Treg機能不全）が基盤にある。",
    symptoms: ["難治性水様性下痢", "重篤な吸収不良", "体重減少", "浮腫", "低栄養", "自己免疫疾患合併"],
    causes: "FOXP3・IL2RA・CTLA4などの遺伝子変異（小児型）、成人ではリンパ腫・薬剤・不明原因。制御性T細胞の機能喪失。",
    diagnosis: "腸管生検（絨毛萎縮・陰窩上皮へのリンパ球浸潤）、血清自己抗体検査、遺伝子検査（IPEX疑い）。",
    treatment: "免疫抑制療法（ステロイド・シクロスポリン・タクロリムス・ラパマイシン）。IPEX症候群には造血幹細胞移植。栄養管理（TPN・経腸栄養）。",
    prognosis: "重篤な栄養障害・感染症が致死的となりうる。早期免疫抑制と栄養支持が重要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Autoimmune+Enteropathy",
  },
  {
    slug: "intestinal-amyloidosis",
    name: "腸管アミロイドーシス",
    nameEn: "Intestinal Amyloidosis",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "アミロイド線維が消化管壁に沈着し、蠕動障害・吸収不良・出血・穿孔などをきたす疾患。全身性AL型（形質細胞異常症関連）・AA型（慢性炎症関連）・遺伝性TTR型などが腸管に波及する。下痢・便秘の交互発現・体重減少が特徴的。",
    symptoms: ["下痢・便秘交互", "腹痛", "吸収不良", "消化管出血", "体重減少", "低栄養", "腸閉塞（重症）"],
    causes: "免疫グロブリン軽鎖（AL型）・SAA蛋白（AA型）・トランスサイレチン（TTR型）などのアミロイド線維蓄積。",
    diagnosis: "消化管生検（コンゴーレッド染色・偏光顕微鏡でリンゴグリーン複屈折）、アミロイド型別同定、全身評価。",
    treatment: "基礎疾患治療が主体。AL型：ボルテゾミブ等の形質細胞療法。AA型：基礎炎症疾患治療。TTR型：タファミジス・patisiran（siRNA）。",
    prognosis: "腸管病変は基礎疾患の治療で進行抑制が期待できるが、既存の沈着は消退しにくい。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Intestinal+Amyloidosis",
  },
  {
    slug: "hypersensitivity-pneumonitis-chronic",
    name: "過敏性肺臓炎（慢性型）",
    nameEn: "Chronic Hypersensitivity Pneumonitis",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "有機粉塵・真菌・鳥類蛋白などの抗原への反復吸入曝露により生じる肉芽腫性・線維性肺疾患。慢性型は抗原が同定されない例（線維型過敏性肺臓炎）も多く、IPFとの鑑別が重要。進行性線維化を呈する難治例がある。",
    symptoms: ["労作性呼吸困難", "乾性咳嗽", "体重減少", "倦怠感", "捻髪音（聴診）", "ばち指（一部）"],
    causes: "鳥の羽毛・糞、真菌（農夫肺）、イソシアネートなどへの過感受性免疫応答。III型・IV型アレルギー。",
    diagnosis: "胸部HRCT（モザイクパターン・蜂巣肺）、気管支肺胞洗浄（リンパ球増多）、抗原特異抗体、外科的肺生検。",
    treatment: "抗原回避が最重要。ステロイド療法。進行性線維化にはニンテダニブ（抗線維化薬）。",
    prognosis: "慢性線維型は抗原回避後も進行しうる。IPFと同様の進行性線維化型は予後不良。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Hypersensitivity+Pneumonitis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/86",
  },
  {
    slug: "pulmonary-eosinophilia",
    name: "肺好酸球増多症（好酸球性肺炎）",
    nameEn: "Pulmonary Eosinophilia / Eosinophilic Pneumonia",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "肺組織への好酸球異常浸潤により生じる疾患群の総称。単純肺好酸球症（レフラー症候群）・急性好酸球性肺炎・慢性好酸球性肺炎・EGPA（アレルギー性肉芽腫性血管炎）・特発性過好酸球症候群（肺型）などが含まれる。",
    symptoms: ["発熱", "咳嗽", "呼吸困難", "喘鳴", "胸痛", "末梢血好酸球増多", "低酸素血症"],
    causes: "薬剤・真菌・寄生虫・不明。IL-5などにより好酸球が肺組織に動員・活性化される。",
    diagnosis: "胸部CT（末梢優位・移動性陰影が慢性型の特徴）、気管支肺胞洗浄（好酸球>25%）、末梢血好酸球、寄生虫・薬剤歴。",
    treatment: "原因除去（薬剤中止・駆虫療法）。副腎皮質ステロイドが劇的に奏効。慢性型は長期ステロイド・ベンラリズマブ。",
    prognosis: "急性型・薬剤性は治療反応良好。慢性型は再発しやすいが、長期管理で良好な経過が得られる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Eosinophilic+Pneumonia",
  },
  {
    slug: "pleural-mesothelioma",
    name: "胸膜中皮腫（石綿関連難治性）",
    nameEn: "Pleural Mesothelioma",
    nanbyoNumber: 301,
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "胸膜の中皮細胞から発生する悪性腫瘍。石綿（アスベスト）暴露後20〜50年の潜伏期を経て発症する。上皮型・肉腫型・二相型の病型があり、上皮型が最も多い。胸水・胸痛・呼吸困難を主訴とし、発見時に既に進行している場合が多い。",
    symptoms: ["呼吸困難", "胸痛", "胸水", "咳嗽", "体重減少", "倦怠感", "胸壁浸潤"],
    causes: "石綿繊維の吸入によるDNA損傷・BAP1遺伝子変異など。石綿以外の原因（放射線・SV40）は稀。",
    diagnosis: "胸部CT・PET-CT、胸水細胞診・生検（ビデオ補助下胸腔鏡）、免疫組織化学（カルレチニン・WT-1陽性）。",
    treatment: "切除可能例：胸膜肺全摘・胸膜切除術+化学療法（シスプラチン+ペメトレキセド）。切除不能例：ニボルマブ+イピリムマブ（免疫療法）。",
    prognosis: "全体的な予後は不良（中央生存期間12〜18ヵ月）。上皮型・早期例は比較的良好。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Pleural+Mesothelioma",
  },
  {
    slug: "primary-raynaud",
    name: "レイノー症候群（原発性重症）",
    nameEn: "Primary Raynaud Phenomenon / Syndrome",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "寒冷・情動ストレスにより末梢血管（主に指趾）が発作性に攣縮し、白色（虚血）→青色（チアノーゼ）→赤色（充血）の三色変化を呈する疾患。基礎疾患を伴わない原発性（レイノー病）と強皮症・混合性結合組織病などに続発する続発性に分類される。重症原発性は潰瘍・壊疽をきたす。",
    symptoms: ["指趾の三色変化", "疼痛", "感覚異常", "指趾潰瘍（重症）", "壊疽（最重症）"],
    causes: "原発性：血管攣縮の神経・内皮機能異常。続発性：基礎疾患による血管構造・機能障害（内皮障害・線維化）。",
    diagnosis: "臨床症状（三色変化の確認）、寒冷負荷試験、爪郭毛細血管鏡（続発性は異常血管像）、抗核抗体・強皮症関連抗体。",
    treatment: "保温・禁煙。カルシウム拮抗薬（ニフェジピン）が第一選択。重症にはプロスタサイクリン静注・エンドセリン受容体拮抗薬・PDE5阻害薬。潰瘍には局所治療。",
    prognosis: "原発性は生命予後良好。続発性は基礎疾患の進行に伴い血管病変が悪化する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Raynaud+Syndrome",
  },
  {
    slug: "peripheral-avm",
    name: "動静脈奇形（脳以外）",
    nameEn: "Peripheral Arteriovenous Malformation",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "脳以外（四肢・体幹・内臓・肺など）の動脈と静脈が毛細血管を介さず直接吻合する先天性血管奇形。高流速病変でKASABACH-MERRITT症候群・高拍出性心不全・出血・疼痛・皮膚潰瘍をきたす。HHT（遺伝性出血性毛細血管拡張症）との合併も重要。",
    symptoms: ["拍動性腫瘤", "皮膚温上昇", "出血・潰瘍", "疼痛", "高拍出性心不全（大型）", "美容的問題"],
    causes: "胚発生期の血管形成異常。MAP2K1・KRAS・PIK3CA遺伝子の体細胞変異が関与する例あり。",
    diagnosis: "超音波・ドプラ、造影CT・MRI・MRA、血管造影（診断・塞栓術計画に必須）。",
    treatment: "カテーテル塞栓術（エタノール・コイル）が主体。根治的切除が可能な症例には外科切除。PIK3CA変異型にはアルペリシブ（PI3K阻害薬）。",
    prognosis: "根治困難な場合が多く、再発・増大を繰り返す。症状コントロールと機能保全を目標とする。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Arteriovenous+Malformation+Peripheral",
  },
  {
    slug: "coats-disease",
    name: "コーツ病（網膜毛細血管拡張症）",
    nameEn: "Coats Disease",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "網膜の毛細血管の異常拡張・蛇行（毛細血管拡張症）により血漿成分が網膜下に漏出し、滲出性網膜剥離・視力障害をきたす先天性血管奇形。男児に多く、多くは片眼性。遺伝性は少なく孤発性が大半。重症例は失明・眼球萎縮に至る。",
    symptoms: ["白色瞳孔（白色瞳孔反射）", "視力低下・失明", "斜視", "眼痛（続発性緑内障）", "片眼性（大半）"],
    causes: "網膜血管内皮の先天的異常。NDP遺伝子変異がノリー病との関連で報告されているが、多くは孤発性。",
    diagnosis: "眼底検査・フルオレセイン蛍光眼底造影（毛細血管拡張・漏出）、眼部超音波（滲出性網膜剥離）。網膜芽細胞腫との鑑別が重要。",
    treatment: "レーザー光凝固・冷凍凝固（異常血管壁を閉塞）。滲出性網膜剥離には硝子体手術・抗VEGF硝子体注射を組み合わせる。",
    prognosis: "早期発見・治療で視機能温存が可能。発見遅延で網膜剥離・緑内障・眼球萎縮に至る例あり。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Coats+Disease",
  },
  {
    slug: "acquired-epidermolysis-bullosa",
    name: "後天性表皮水疱症",
    nameEn: "Epidermolysis Bullosa Acquisita",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "VII型コラーゲンに対する自己抗体により真皮表皮接合部が障害され、皮膚・粘膜に水疱・びらんを繰り返す自己免疫性水疱症。外傷部位に水疱が生じやすい古典型と、炎症性の水疱性類天疱瘡様型・線状IgA型があり、クローン病と合併する例がある。",
    symptoms: ["皮膚水疱・びらん", "瘢痕・粟粒腫形成", "粘膜病変（口腔・食道・眼）", "爪甲脱落", "食道狭窄（重症）"],
    causes: "VII型コラーゲン（COL7A1）に対するIgG/IgA自己抗体。クローン病との合併が知られる。",
    diagnosis: "皮膚生検・直接免疫蛍光（真皮表皮接合部IgG沈着）、間接免疫蛍光（1M NaCl分離皮膚で真皮側陽性）、抗VII型コラーゲン抗体ELISA。",
    treatment: "ダプソン・コルヒチン、ステロイド、免疫抑制薬（シクロスポリン・リツキシマブ）。類天疱瘡との治療反応の違いに注意。",
    prognosis: "難治性が多く、瘢痕・粘膜狭窄の蓄積が機能障害をもたらす。早期から積極的治療が重要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Epidermolysis+Bullosa+Acquisita",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/162",
  },
  {
    slug: "chronic-spontaneous-urticaria",
    name: "慢性特発性蕁麻疹（難治性）",
    nameEn: "Chronic Spontaneous Urticaria",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "明確な誘因なく膨疹・紅斑が6週間以上持続または再発する疾患。約50%に自己免疫機序（抗IgE受容体抗体・抗IgE抗体）が関与する。H1抗ヒスタミン薬抵抗性の難治例が存在し、QOLを著しく低下させる。血管性浮腫を伴う例は窒息リスクがある。",
    symptoms: ["膨疹（かゆみを伴う）", "紅斑", "血管性浮腫", "口唇・眼瞼腫脹", "睡眠障害", "抑うつ"],
    causes: "自己免疫性（抗FcεRIα抗体・抗IgE抗体）、感染症（H.pylori・寄生虫）、不明。肥満細胞からのヒスタミン遊離が主病態。",
    diagnosis: "6週間以上の症状確認、UAS7（蕁麻疹活動性スコア）評価、自己血清皮膚試験（ASST）、IgE抗体、H.pylori検査。",
    treatment: "第2世代H1抗ヒスタミン薬（最大4倍量）が第一選択。難治例にはオマリズマブ（抗IgE抗体）が有効。シクロスポリン・ステロイド短期使用も選択肢。",
    prognosis: "約半数が5年以内に自然寛解。オマリズマブで難治例も症状コントロールが可能となった。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Chronic+Spontaneous+Urticaria",
  },
  {
    slug: "pigmented-urticaria-mastocytosis",
    name: "色素性蕁麻疹（皮膚肥満細胞症）",
    nameEn: "Urticaria Pigmentosa / Cutaneous Mastocytosis",
    nanbyoNumber: 225,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "皮膚に肥満細胞が異常増殖する疾患で、摩擦・熱・薬剤などの刺激でヒスタミンが大量放出され、膨疹・紅斑・かゆみ（ダリエ徴候）・アナフィラキシーをきたす。小児型（孤立性肥満細胞腫・色素性蕁麻疹）と成人型（全身性肥満細胞症）がある。KIT D816V変異が多数例に存在。",
    symptoms: ["皮膚色素斑・丘疹", "ダリエ徴候（摩擦で膨疹）", "かゆみ", "フラッシング", "アナフィラキシー", "下痢・腹痛（ヒスタミン過剰）"],
    causes: "KIT遺伝子（D816V変異）によるKITチロシンキナーゼの恒常的活性化。肥満細胞の異常増殖・蓄積。",
    diagnosis: "皮膚生検（肥満細胞浸潤）、血清トリプターゼ値、骨髄生検（全身性評価）、KIT D816V変異検索。",
    treatment: "H1/H2抗ヒスタミン薬・クロモグリク酸ナトリウム（肥満細胞安定化薬）。全身性肥満細胞症にはミドスタウリン・アバプリチニブ（KIT阻害薬）。アナフィラキシー時はエピネフリン。",
    prognosis: "小児型の多くは思春期までに自然消退。成人型は慢性経過で全身性移行に注意。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Cutaneous+Mastocytosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/225",
  },
  {
    slug: "retinoblastoma-hereditary",
    name: "網膜芽細胞腫（遺伝性）",
    nameEn: "Hereditary Retinoblastoma",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "RB1腫瘍抑制遺伝子の生殖細胞変異により生じる眼内悪性腫瘍。遺伝性は両眼性・多発性が特徴で、早期乳幼児期（平均診断年齢12〜18ヵ月）に発症する。白色瞳孔（猫目）・斜視で気づかれることが多い。二次悪性腫瘍（骨肉腫など）のリスクが高い。",
    symptoms: ["白色瞳孔（白色瞳孔反射）", "斜視", "視力低下", "眼球突出（進行例）", "二次悪性腫瘍リスク"],
    causes: "RB1遺伝子（13q14.2）の両アレル不活化（Knudsonの二段階変異説）。遺伝性は一方の変異を生殖細胞に保有。",
    diagnosis: "眼底検査（眼底鏡・全身麻酔下検査）、眼部超音波、MRI（視神経浸潤・頭蓋内転移評価）、遺伝子検査。",
    treatment: "動脈注射化学療法（IAC）・経静脈化学療法・レーザー光凝固・冷凍凝固・眼球摘出術。転移例には全身化学療法。",
    prognosis: "早期診断・治療で眼球温存率・生命予後が大幅に改善。遺伝性例は生涯にわたる二次腫瘍サーベイランスが必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Hereditary+Retinoblastoma",
  },
  {
    slug: "autoimmune-hemolytic-anemia-warm",
    name: "自己免疫性溶血性貧血（温式）",
    nameEn: "Warm Autoimmune Hemolytic Anemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "37℃付近で最大活性を示すIgG型自己抗体が赤血球表面に結合し、脾臓・肝臓での血管外溶血をきたす自己免疫疾患。原発性（特発性）と続発性（SLE・CLL・リンパ腫・薬剤性）がある。溶血性貧血の中で最も頻度が高いタイプ。",
    symptoms: ["貧血（倦怠感・動悸・息切れ）", "黄疸", "脾腫", "尿色濃化", "網状赤血球増加"],
    causes: "赤血球自己抗原（Rh系など）に対するIgG自己抗体。続発性は基礎疾患による免疫制御異常。",
    diagnosis: "直接クームス試験陽性（IgG・C3d）、網状赤血球増加、間接ビリルビン上昇、LDH高値、ハプトグロビン低値。",
    treatment: "ステロイド（プレドニゾロン1〜1.5mg/kg）が第一選択。難治例にはリツキシマブ・脾摘・免疫抑制薬。フォスタマチニブ（SYK阻害薬）も選択肢。",
    prognosis: "ステロイドに反応する例が多いが、慢性経過や再発例では長期管理が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Autoimmune+Hemolytic+Anemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/60",
  },
  {
    slug: "weaver-syndrome",
    name: "ウィーバー症候群",
    nameEn: "Weaver Syndrome",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "NSD1遺伝子（ヌクレオソームリモデリング関連ヒストンメチルトランスフェラーゼ）のヘテロ接合変異による先天異常症候群。生後早期から著明な過成長・前進した骨年齢・特徴的顔貌・知的障害・運動発達遅滞を特徴とする。ソトス症候群との関連が深い。",
    symptoms: ["過成長（出生前〜乳児期）", "骨年齢前進", "特徴的顔貌（下垂した口角・瞳間解離）", "知的障害", "運動発達遅滞", "低音声（嗄声）"],
    causes: "NSD1遺伝子（5q35）のヘテロ接合変異または欠失。常染色体優性遺伝だが多くは新生変異。",
    diagnosis: "臨床所見・骨年齢評価、遺伝子検査（NSD1変異）。ソトス症候群との区別は遺伝子で確定。",
    treatment: "対症療法。理学療法・作業療法・言語療法・特別支援教育。合併する心奇形・脊椎側弯の外科的管理。",
    prognosis: "成人後は過成長が落ち着く。知的障害の程度は幅広く、自立度は個人差が大きい。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Weaver+Syndrome",
  },
  {
    slug: "pheochromocytoma-cardiomyopathy",
    name: "褐色細胞腫関連心筋症",
    nameEn: "Pheochromocytoma-Related Cardiomyopathy",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "副腎髄質または傍神経節細胞から発生する褐色細胞腫・傍神経節腫が分泌するカテコラミン過剰により生じる心筋症。たこつぼ型心筋症・び漫性心筋炎・閉塞性肥大型心筋症など多様な病態をとる。高血圧発作・心不全・不整脈で発症し、腫瘍切除により劇的に改善する例がある。",
    symptoms: ["高血圧発作", "頭痛・発汗・動悸の三徴", "心不全", "不整脈", "胸痛", "心筋炎様病態"],
    causes: "カテコラミン（ノルアドレナリン・アドレナリン）の慢性過剰刺激による心筋毒性・血管攣縮。",
    diagnosis: "血漿・尿中メタネフリン測定、副腎CT/MRI、心エコー（心機能評価）、MIBG心筋シンチ、遺伝子検査（VHL・RET・SDHx等）。",
    treatment: "α遮断薬（フェノキシベンザミン）で前処置後、腫瘍外科的切除。心不全には支持療法。術後に心機能回復を確認。",
    prognosis: "腫瘍切除後に心筋症が著明に改善する例多数。悪性褐色細胞腫は予後不良。遺伝性例は多発・再発に注意。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Pheochromocytoma+Cardiomyopathy",
  },
  {
    slug: "congenital-ptosis-severe",
    name: "先天性眼瞼下垂（重症）",
    nameEn: "Severe Congenital Ptosis",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "出生時から上眼瞼が下垂し、瞳孔を覆う程度の重症例では弱視・乱視・斜視が生じる。上眼瞼挙筋の先天性低形成が主な原因。片眼性重症例は不同視弱視のリスクが高く、視力発達の臨界期内の早期手術と弱視治療が重要。",
    symptoms: ["上眼瞼下垂", "弱視（片眼性重症）", "乱視", "斜視", "頭部後屈姿勢（代償）", "眉毛挙上"],
    causes: "上眼瞼挙筋の先天性低形成・線維化。眼瞼下垂の遺伝子（ZFHX4・PTOS1など）変異、Marcus Gunn現象（翼状突起連合運動）関連例もある。",
    diagnosis: "眼瞼裂幅・MRD1測定、挙筋機能評価（LF）、眼位・屈折検査、弱視スクリーニング。",
    treatment: "挙筋短縮術・前頭筋吊り上げ術（シリコンロッドまたは大腿筋膜）。弱視治療（眼鏡・遮閉法）を並行。",
    prognosis: "早期手術と適切な弱視治療で視機能を保護できる。再発・過矯正に対する再手術が必要な場合あり。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Congenital+Ptosis",
  },
  {
    slug: "congenital-ocular-motor-apraxia",
    name: "先天性眼球運動障害（オクソル型）",
    nameEn: "Congenital Ocular Motor Apraxia",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "随意的水平眼球運動（特に素早い随意的サッカード）が障害される先天性疾患。視線を移動する際に頭部を大きく振る特徴的な代償運動を示す。COMA（先天性眼球運動失行）とも呼ばれ、男児に多い。Joubert症候群など脳奇形との合併例もある。",
    symptoms: ["随意的水平サッカード障害", "頭部衝動運動（代償）", "読書困難", "眼振", "発達遅滞（合併例）"],
    causes: "孤発性が多い。前頭眼野・上丘・橋などの眼球運動制御回路の先天的発達異常。Joubert症候群（JBTS遺伝子群）との合併あり。",
    diagnosis: "眼球運動検査（サッカード・衝動眼球運動評価）、MRI（脳奇形・小脳虫部低形成）、神経発達評価。",
    treatment: "根治療法なし。読書支援・低視力補助具・リハビリテーション。合併疾患の管理。",
    prognosis: "代償運動は成長とともに軽減する例が多い。読み書き困難が学業・社会参加に影響することがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Congenital+Ocular+Motor+Apraxia",
  },
  {
    slug: "alpha1-antitrypsin-lung",
    name: "α1アンチトリプシン欠乏症関連肺疾患",
    nameEn: "Alpha-1 Antitrypsin Deficiency Lung Disease",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "SERPINA1遺伝子変異によりα1アンチトリプシン（AAT）が欠乏し、中性顆粒球エラスターゼなどのプロテアーゼが肺胞を破壊することで全小葉型肺気腫をきたす遺伝性疾患。若年（30〜40歳代）から肺気腫が進行し、喫煙で著明に増悪する。肝疾患（肝硬変）も合併する。",
    symptoms: ["若年性肺気腫", "労作性呼吸困難", "慢性咳嗽・喀痰", "喘鳴", "繰り返す感染症", "肝機能障害（肝疾患型）"],
    causes: "SERPINA1遺伝子のZZ型・SZ型変異（Pi*ZZ最重症）。常染色体劣性遺伝。",
    diagnosis: "血清AAT濃度測定、Pi型（表現型）・遺伝子型検査、肺機能検査（閉塞性パターン）、胸部CT（下葉優位全小葉型肺気腫）。",
    treatment: "禁煙が最重要。AAT補充療法（アルファ-1プロテイナーゼインヒビター静注）が肺気腫進行抑制に有効。重症肺気腫には肺移植。",
    prognosis: "非喫煙者は比較的緩徐な進行。喫煙により若年で高度肺気腫となり予後不良。AAT補充療法で進行抑制が期待される。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Alpha-1+Antitrypsin+Deficiency",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/171",
  },
  {
    slug: "aiha-warm",
    name: "温式自己免疫性溶血性貧血（難治性）",
    nameEn: "Refractory Warm AIHA",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "ステロイド・脾摘後も溶血が持続する難治性の温式自己免疫性溶血性貧血。基礎疾患（SLE・リンパ腫・原発性免疫不全症）の合併や、エバンス症候群への移行が問題となる。免疫抑制療法の選択と感染症合併予防が管理の要点。",
    symptoms: ["難治性貧血", "黄疸", "脾腫", "溶血発作", "基礎疾患合併"],
    causes: "赤血球自己抗体産生が持続。免疫制御機構の恒常的破綻、リンパ増殖性疾患の関与。",
    diagnosis: "直接クームス試験持続陽性、骨髄・リンパ節評価（基礎疾患検索）、フローサイトメトリー。",
    treatment: "リツキシマブ（B細胞除去）・ミコフェノール酸モフェチル・シクロスポリン・ダナゾール・フォスタマチニブ・スニチニブ（難治例）。",
    prognosis: "基礎疾患の有無・免疫抑制療法の反応性により大きく異なる。長期管理が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Warm+Autoimmune+Hemolytic+Anemia+Refractory",
  },
  {
    slug: "primary-immunodeficiency-cvid",
    name: "分類不能型免疫不全症（CVID）",
    nameEn: "Common Variable Immunodeficiency",
    nanbyoNumber: 70,
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "低免疫グロブリン血症・B細胞機能不全を特徴とする原発性免疫不全症の中で最も頻度が高い疾患。反復する気道・消化管感染症・自己免疫疾患・肉芽腫・リンパ増殖・悪性腫瘍リスク増大を伴う。多くは20〜30歳代に診断される後天性免疫不全症。",
    symptoms: ["反復する肺炎・副鼻腔炎", "気管支拡張症", "消化管感染症（ランブル鞭毛虫など）", "自己免疫疾患合併", "リンパ節腫脹", "脾腫"],
    causes: "ICOS・TACI・BAFFR・CD19・CD20・CD81などの遺伝子変異が少数で同定。多くは多因子性・未解明。",
    diagnosis: "血清IgG著減（<4g/L）＋IgA/IgM低下、ワクチン抗体産生不全、B細胞数正常だが形質細胞への分化障害。",
    treatment: "免疫グロブリン補充療法（IVIG/SCIG）が生涯継続の主治療。感染時抗菌薬・自己免疫疾患への免疫抑制療法。",
    prognosis: "IgG補充療法で感染症は大幅に軽減。肺疾患・悪性腫瘍・自己免疫疾患が長期予後を規定。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Common+Variable+Immunodeficiency",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/70",
  },
  // ===== 神経・筋疾患 =====
  {
    slug: "isaacs-syndrome",
    name: "アイザックス症候群（神経筋強直症）",
    nameEn: "Isaacs Syndrome (Neuromyotonia)",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "末梢神経の過剰興奮により筋肉が持続的に収縮・弛緩を繰り返す自己免疫性神経疾患。抗CASPR2抗体や抗LGI1抗体が関与することが多く、筋硬直・筋痙攣・発汗過多・筋線維束攣縮を特徴とする。中年男性に多く、胸腺腫や悪性腫瘍との関連も報告されている。",
    symptoms: ["筋硬直・筋強直", "持続する筋線維束攣縮（ミオキミア）", "筋痙攣", "発汗過多", "体重減少", "不眠"],
    causes: "抗CASPR2抗体・抗LGI1抗体による電位依存性カリウムチャネル複合体の機能障害。胸腺腫など傍腫瘍性機序も存在する。",
    diagnosis: "筋電図でのミオキミア放電・ニューロミオトニア放電の確認、血清抗CASPR2/抗LGI1抗体測定。",
    treatment: "免疫療法（ステロイド・IVIG・血漿交換）、症状緩和に抗てんかん薬（カルバマゼピン・メキシレチン）。",
    prognosis: "免疫療法に反応する症例が多いが、再発を繰り返すことがある。胸腺腫切除で改善する例もある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Isaacs+Syndrome+Neuromyotonia",
  },
  {
    slug: "morvan-syndrome",
    name: "モールバン症候群",
    nameEn: "Morvan Syndrome",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "神経筋強直症（ニューロミオトニア）に中枢神経症状（幻覚・不眠・自律神経障害・認知機能低下）を合併する稀な自己免疫性脳炎。抗CASPR2抗体が高頻度に陽性で、胸腺腫との関連が強い。アイザックス症候群の中枢型ともいえる疾患。",
    symptoms: ["高度な不眠（無睡眠に近い）", "幻覚", "筋強直・ミオキミア", "自律神経障害（発汗・血圧変動）", "認知機能低下", "疼痛"],
    causes: "抗CASPR2抗体が電位依存性カリウムチャネル複合体を攻撃する自己免疫機序。胸腺腫合併が50〜60%に認められる。",
    diagnosis: "抗CASPR2抗体陽性、筋電図でのニューロミオトニア放電、脳MRI・脳脊髄液検査。胸腺腫の精査（CT）。",
    treatment: "胸腺腫摘除、免疫療法（ステロイド・IVIG・血漿交換・リツキシマブ）。",
    prognosis: "早期治療で改善例あり。胸腺腫切除後に長期寛解する例もあるが、重篤な経過をたどる例もある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Morvan+Syndrome",
  },
  {
    slug: "neuroacanthocytosis",
    name: "神経有棘赤血球症",
    nameEn: "Neuroacanthocytosis",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "末梢血に有棘赤血球（アカントサイト）が出現し、基底核変性による不随意運動・認知機能低下・神経精神症状を呈する遺伝性神経変性疾患群。コレア・アカントサイトーシス（VPS13A遺伝子変異）とマクロード症候群（XK遺伝子変異）が代表的。",
    symptoms: ["口周囲・四肢の舞踏運動", "ジストニア", "筋萎縮", "神経精神症状（強迫・衝動制御障害）", "嚥下障害", "てんかん"],
    causes: "コレア・アカントサイトーシスはVPS13A遺伝子の常染色体劣性変異、マクロード症候群はXK遺伝子のX連鎖性変異による。",
    diagnosis: "末梢血塗抹標本でのアカントサイト確認（>3%）、遺伝子検査、頭部MRI（尾状核萎縮）、クレアチンキナーゼ上昇。",
    treatment: "対症療法のみ。舞踏運動にテトラベナジン・ハロペリドール、てんかんに抗てんかん薬。",
    prognosis: "進行性で根治療法なし。発症から10〜20年で重篤な身体障害に至ることが多い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Neuroacanthocytosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/4893",
  },
  {
    slug: "neuronal-ceroid-lipofuscinosis",
    name: "神経セロイドリポフスチノーシス",
    nameEn: "Neuronal Ceroid Lipofuscinosis",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "リソソームに蛍光性リポ色素（セロイドリポフスチン）が蓄積する遺伝性神経変性疾患群。CLN1〜CLN14など14種以上の遺伝子変異が原因で、小児期から成人期にかけて発症し、進行性の視力障害・認知機能低下・てんかん・運動機能低下を来す。",
    symptoms: ["進行性視力低下・失明", "てんかん発作", "認知機能低下・認知症", "運動機能低下・失調", "行動異常"],
    causes: "CLN1（PPT1）・CLN2（TPP1）・CLN3など複数の遺伝子変異によりリソソーム酵素機能が障害される。常染色体劣性遺伝が多い。",
    diagnosis: "電子顕微鏡での皮膚・白血球内封入体確認、遺伝子検査、酵素活性測定（CLN1/CLN2）、網膜電図・視覚誘発電位。",
    treatment: "CLN2型に酵素補充療法（セルリポナーゼ アルファ）が承認。他は対症療法（抗てんかん薬・理学療法）。",
    prognosis: "多くは進行性で予後不良。CLN2型は酵素療法で進行を遅らせることが可能となった。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Neuronal+Ceroid+Lipofuscinosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/218",
  },
  {
    slug: "cpeo",
    name: "慢性進行性外眼筋麻痺",
    nameEn: "Chronic Progressive External Ophthalmoplegia",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "ミトコンドリアDNA欠失・点変異により外眼筋が進行性に麻痺する疾患。眼瞼下垂と眼球運動障害が主徴で、四肢筋力低下・網膜色素変性・伝導障害（カーンズ・セイヤー症候群）を合併する場合がある。散発例と遺伝例（核DNA変異）が存在する。",
    symptoms: ["両側眼瞼下垂", "眼球運動障害（複視は少ない）", "四肢筋力低下", "嚥下障害", "運動耐容能低下"],
    causes: "ミトコンドリアDNAの大欠失（散発）またはPOLG・TWNK・SLC25A4などの核DNA変異による常染色体遺伝例。",
    diagnosis: "眼科的検査（眼瞼下垂・眼球運動評価）、筋生検（ラギッドレッドファイバー）、ミトコンドリアDNA解析。",
    treatment: "根治療法なし。眼瞼下垂に対して外科的眼瞼挙上術。補酵素Q10・リボフラビンの補充を行う施設もある。",
    prognosis: "ゆっくり進行するが生命予後は比較的良好。合併する心伝導障害（KSS）は突然死リスクがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Chronic+Progressive+External+Ophthalmoplegia",
  },
  {
    slug: "kearns-sayre-syndrome",
    name: "カーンズ・セイヤー症候群",
    nameEn: "Kearns-Sayre Syndrome",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "20歳以前に発症し、慢性進行性外眼筋麻痺・網膜色素変性・心伝導障害の三徴を示すミトコンドリア病。ミトコンドリアDNAの大欠失（1〜8kb）が原因で散発性に発症する。小脳失調・感音難聴・内分泌異常・認知機能低下を合併することも多い。",
    symptoms: ["眼瞼下垂・眼球運動障害", "網膜色素変性による夜盲・視野狭窄", "心ブロック（突然死リスク）", "小脳性失調", "感音難聴", "低身長・内分泌障害"],
    causes: "ミトコンドリアDNAの大欠失（散発性変異）。親から遺伝しないことが多いが、母方からの遺伝例もある。",
    diagnosis: "三徴の確認、心電図（心ブロック）、眼底検査（網膜色素変性）、筋生検（ラギッドレッドファイバー）、mtDNA欠失解析。",
    treatment: "心ブロックに対してペースメーカー植込みが必須。補酵素Q10・リボフラビン補充。定期的な心臓モニタリング。",
    prognosis: "心伝導障害による突然死が最大のリスク。ペースメーカーで予防可能。他の症状は進行性。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Kearns-Sayre+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/21",
  },
  {
    slug: "neuromelanin-deficiency-dystonia",
    name: "ニューロメラニン欠乏ジストニア（NBIA）",
    nameEn: "Neurodegeneration with Brain Iron Accumulation",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "脳内（特に淡蒼球・黒質）への鉄蓄積を特徴とする遺伝性神経変性疾患群。PKAN（PANK2変異）が最多で、進行性のジストニア・パーキンソニズム・錐体路徴候・網膜色素変性を呈する。MRIで「目の中の虎（eye of the tiger）サイン」が特徴的。",
    symptoms: ["ジストニア（四肢・体幹・口周囲）", "パーキンソニズム", "錐体路徴候（痙縮・腱反射亢進）", "網膜色素変性", "神経精神症状", "構音障害"],
    causes: "PANK2・PLA2G6・C19orf12・FA2Hなど複数遺伝子の変異。常染色体劣性遺伝が主体。",
    diagnosis: "頭部MRI（T2強調画像で淡蒼球の低信号と高信号：eye of the tiger sign）、遺伝子検査。",
    treatment: "対症療法のみ。ジストニアにボツリヌス毒素・バクロフェン、鉄キレート療法の効果は限定的。",
    prognosis: "進行性で根治療法なし。小児発症型は数十年で重篤な障害に至る。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Neurodegeneration+Brain+Iron+Accumulation",
  },
  // ===== 代謝・遺伝疾患 =====
  {
    slug: "cfc-syndrome",
    name: "心臓顔面皮膚症候群（CFC症候群）",
    nameEn: "Cardiofaciocutaneous Syndrome",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "RAS/MAPKシグナル経路の遺伝子変異（BRAF・MEK1/MEK2・KRAS）による先天性疾患。特徴的顔貌・先天性心疾患・皮膚異常・知的障害・成長障害を呈する。ヌーナン症候群・コステロ症候群と同じRASopathyに属する。",
    symptoms: ["特徴的顔貌（広い額・眉毛疎ら・低い鼻梁）", "先天性心疾患（肺動脈狭窄・心房中隔欠損）", "皮膚の過角化・毛囊角化症", "知的障害・発達遅滞", "低身長", "てんかん"],
    causes: "BRAF（75%）・MAP2K1/2・KRAS遺伝子の常染色体優性変異。ほとんどが新生突然変異。",
    diagnosis: "臨床的特徴の評価、心臓超音波、遺伝子パネル検査（RASopathy遺伝子）。",
    treatment: "対症療法。心疾患に外科的修復、てんかんに抗てんかん薬、成長ホルモン療法（一部）。",
    prognosis: "心疾患の重症度と知的障害の程度が予後を規定。悪性腫瘍（白血病）リスクの増加が報告されている。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Cardiofaciocutaneous+Syndrome",
  },
  {
    slug: "sotos-syndrome",
    name: "ソトス症候群",
    nameEn: "Sotos Syndrome",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "NSD1遺伝子の変異・欠失による過成長症候群。出生時から幼児期にかけて著明な身長・頭囲の過成長、特徴的顔貌（広い高い額・眼距離開大・顎が尖る）、知的障害・発達遅滞を呈する。多くは新生突然変異によるが常染色体優性遺伝も報告される。",
    symptoms: ["過成長（高身長・大頭症）", "特徴的顔貌", "知的障害・学習困難", "発達遅滞（言語・運動）", "行動異常（自閉スペクトラム傾向）", "先天異常（心疾患・腎疾患）"],
    causes: "染色体5q35のNSD1遺伝子のハプロ不全（欠失または点変異）。90%以上が新生突然変異。",
    diagnosis: "臨床的特徴の評価、染色体マイクロアレイ・NSD1遺伝子検査。骨年齢の前進。",
    treatment: "対症療法。早期からの療育・言語療法・作業療法。行動問題への支援。",
    prognosis: "成人期には過成長は目立たなくなる。多くは自立した生活が可能だが、知的障害の程度は様々。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Sotos+Syndrome",
  },
  {
    slug: "bardet-biedl-syndrome",
    name: "バルデー・ビードル症候群",
    nameEn: "Bardet-Biedl Syndrome",
    nanbyoNumber: 200,
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "繊毛機能不全（繊毛症）による多臓器疾患。網膜ジストロフィ・肥満・多指趾症・腎機能障害・性腺機能低下・知的障害の六主徴を特徴とする。BBS1〜BBS22など22以上の遺伝子変異が原因で、常染色体劣性遺伝。",
    symptoms: ["進行性網膜色素変性（失明）", "肥満（体幹型）", "多指趾症", "腎機能障害・腎嚢胞", "性腺機能低下", "知的障害・学習困難"],
    causes: "BBS1・BBS10・BBS2など多数のBBS遺伝子の変異による一次繊毛機能障害。常染色体劣性遺伝。",
    diagnosis: "主徴4項目以上または3項目＋副次徴4項目以上で臨床診断。遺伝子検査で確定。",
    treatment: "根治療法なし。肥満管理・腎保護療法・網膜専門医による定期観察。セトメラノタイドが一部症例に承認。",
    prognosis: "視力は10〜20歳代で失明することが多い。腎不全が主な死因。生命予後は腎機能に依存。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Bardet-Biedl+Syndrome",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/200",
  },
  {
    slug: "alstrom-syndrome",
    name: "アルストレーム症候群",
    nameEn: "Alström Syndrome",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "ALMS1遺伝子変異による繊毛症の一種。乳幼児期からの錐体桿体ジストロフィによる失明・感音難聴・肥満・2型糖尿病・拡張型心筋症・腎機能障害・肝疾患を多臓器にわたり合併する稀な常染色体劣性遺伝疾患。",
    symptoms: ["錐体桿体ジストロフィ（光過敏・視力低下・失明）", "感音難聴", "肥満・インスリン抵抗性", "2型糖尿病", "拡張型心筋症", "腎機能障害"],
    causes: "2p13のALMS1遺伝子の両アレル変異。常染色体劣性遺伝。繊毛構造・機能の異常が多臓器障害を引き起こす。",
    diagnosis: "臨床的特徴の組み合わせ、ALMS1遺伝子検査による確定診断。眼底検査・聴力検査・心臓超音波・腎機能評価。",
    treatment: "各臓器への対症療法。糖尿病管理・心不全治療・腎保護。補聴器・視覚支援。",
    prognosis: "多臓器合併症の進行により予後は不良。心不全・腎不全が主要死因。平均寿命は短縮する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Alstrom+Syndrome",
  },
  {
    slug: "joubert-syndrome",
    name: "ジュベール症候群",
    nameEn: "Joubert Syndrome",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "小脳虫部・脳幹の先天性奇形（モラーキューラー歯状核・赤核束の交叉異常）による稀な繊毛症。MRIで「臼歯様」（molar tooth sign）が特徴的。低緊張・発達遅滞・眼球運動異常・呼吸調節異常を呈し、網膜ジストロフィ・腎疾患・肝線維症を合併する。",
    symptoms: ["低緊張（筋緊張低下）", "発達遅滞・知的障害", "眼球運動異常（眼球運動失行）", "新生児期の呼吸調節異常", "小脳性失調", "網膜ジストロフィ（合併型）"],
    causes: "AHI1・NPHP1・CEP290・TMEM67など30以上の繊毛関連遺伝子の常染色体劣性変異（まれにX連鎖性）。",
    diagnosis: "頭部MRI（molar tooth sign＝臼歯様サイン）、遺伝子パネル検査。腎・肝・眼の評価。",
    treatment: "対症療法。早期療育・理学療法・作業療法。網膜ジストロフィへの視覚支援。腎・肝合併症の管理。",
    prognosis: "知的障害の程度・合併臓器障害により予後は大きく異なる。腎不全・肝不全が長期予後を規定することがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Joubert+Syndrome",
  },
  {
    slug: "meckel-gruber-syndrome",
    name: "メッケル・グルーバー症候群",
    nameEn: "Meckel-Gruber Syndrome",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "後脳の脳瘤・多嚢胞性腎・多指趾症の三徴を呈する、致死性の常染色体劣性遺伝の繊毛症。MKS1・TMEM216・TMEM67など多数の繊毛関連遺伝子変異が原因。出生前診断が可能だが、出生後ほぼ全例が新生児期に死亡する最重症の繊毛症の一つ。",
    symptoms: ["後頭部脳瘤", "多嚢胞性腎（巨大腎・羊水過少）", "多指趾症（軸後型多趾）", "口蓋裂・口唇裂", "肝線維症", "中枢神経奇形"],
    causes: "MKS1・TMEM216・TMEM67・CEP290・RPGRIP1Lなど繊毛関連遺伝子の両アレル機能喪失変異。常染色体劣性遺伝。",
    diagnosis: "出生前超音波（脳瘤・多嚢胞腎・多指趾症）、羊水・絨毛DNA遺伝子検査で確定。",
    treatment: "致死性疾患であり積極的治療は行わない。出生前診断後の遺伝カウンセリングが重要。",
    prognosis: "ほぼ全例が死産または新生児期早期に死亡する。次子への再発リスクは25%（常染色体劣性）。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Meckel-Gruber+Syndrome",
  },
  {
    slug: "holt-oram-syndrome",
    name: "ホルト・オラム症候群",
    nameEn: "Holt-Oram Syndrome",
    category: "代謝・遺伝疾患",
    categorySlug: "metabolic",
    overview:
      "TBX5遺伝子変異による先天性上肢奇形と心疾患を特徴とする常染色体優性遺伝疾患。母指・橈側の発育異常（母指低形成〜欠損・橈骨欠損・鎖骨奇形）と心房中隔欠損・心室中隔欠損・伝導異常を呈する。全例に上肢奇形があるが重症度は様々。",
    symptoms: ["上肢奇形（母指異常・橈骨低形成・鎖骨異常）", "心房中隔欠損", "心室中隔欠損", "洞房結節・伝導系異常", "不整脈"],
    causes: "12q24のTBX5遺伝子の常染色体優性変異。新生突然変異も多い。浸透率は高く、表現度は様々。",
    diagnosis: "臨床的特徴（上肢奇形＋心疾患）、TBX5遺伝子検査。心臓超音波・心電図。",
    treatment: "心疾患に対して外科的修復（ASD閉鎖術など）。不整脈にペースメーカー・薬物療法。上肢奇形に手術・リハビリ。",
    prognosis: "心疾患の適切な治療により生命予後は良好。上肢機能障害の程度が生活の質を規定する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Holt-Oram+Syndrome",
  },
  // ===== 免疫・自己免疫疾患 =====
  {
    slug: "hyper-igm-syndrome",
    name: "ハイパーIgM症候群",
    nameEn: "Hyper-IgM Syndrome",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "免疫グロブリンクラススイッチ組換え障害により、IgMは正常〜高値だがIgG・IgA・IgEが著減する原発性免疫不全症。X連鎖性（CD40L変異：最多）と常染色体劣性（AID・UNG変異など）がある。日和見感染（ニューモシスチス肺炎）・自己免疫疾患・悪性腫瘍リスクが高い。",
    symptoms: ["反復する細菌感染症（肺炎・副鼻腔炎）", "ニューモシスチス肺炎（日和見感染）", "クリプトスポリジウム胆管炎", "好中球減少症", "自己免疫性溶血性貧血", "リンパ節腫脹"],
    causes: "CD40LG（X連鎖・最多）・AICDA（AID）・UNG・CD40・NEMO遺伝子変異による免疫グロブリンクラススイッチ障害。",
    diagnosis: "血清IgG・IgA・IgE著減、IgM正常〜高値。リンパ球サブセット・遺伝子検査。CD40L発現解析（X連鎖型）。",
    treatment: "免疫グロブリン補充療法（IVIG）、ST合剤（ニューモシスチス予防）。造血幹細胞移植が根治的治療（X連鎖型）。",
    prognosis: "適切な治療なしでは感染症・肝胆道疾患で早期死亡。造血幹細胞移植で予後改善が期待される。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Hyper-IgM+Syndrome",
  },
  {
    slug: "xla-bruton",
    name: "X連鎖無ガンマグロブリン血症（XLA）",
    nameEn: "X-linked Agammaglobulinemia",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "BTK遺伝子変異によりB細胞の成熟が障害され、末梢血B細胞がほぼ消失し全免疫グロブリンクラスが著減する原発性免疫不全症。男児のみ発症（X連鎖劣性）。母体移行抗体がなくなる生後6ヵ月以降に反復する重篤な細菌感染症を発症する。",
    symptoms: ["重篤な反復細菌感染症（肺炎・中耳炎・副鼻腔炎）", "ウイルス感染への脆弱性", "ポリオワクチン関連麻痺", "腸管エンテロウイルス感染による慢性脳炎", "関節炎"],
    causes: "X染色体上のBTK遺伝子変異によるB細胞前駆体の成熟停止。X連鎖劣性遺伝。保因者の母から男児に遺伝。",
    diagnosis: "末梢血B細胞ほぼ消失（<1%）、全免疫グロブリン著減、BTK遺伝子検査。",
    treatment: "免疫グロブリン補充療法（IVIG/SCIG）の生涯継続。感染時適切な抗菌薬・抗ウイルス薬。",
    prognosis: "早期診断・IVIG補充療法で感染症を大幅に減少できる。慢性肺疾患・腸管エンテロウイルス感染が長期合併症。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=X-linked+Agammaglobulinemia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/65",
  },
  {
    slug: "selective-iga-deficiency",
    name: "選択的IgA欠乏症（重症）",
    nameEn: "Selective IgA Deficiency",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "血清IgAが著減（<7mg/dL）し他の免疫グロブリンは正常な最も頻度の高い原発性免疫不全症。多くは無症状だが、一部は反復する気道・消化管感染症・自己免疫疾患・アレルギー疾患・悪性腫瘍を合併する。IgA欠乏症のうち重症例が難治性管理の対象となる。",
    symptoms: ["反復する気道感染症（副鼻腔炎・気管支炎）", "消化管感染症・下痢", "自己免疫疾患合併（SLE・関節炎）", "アレルギー・喘息", "血液製剤へのアナフィラキシーリスク"],
    causes: "多くは原因不明（多因子性）。一部でTACI・TNFRSF13B変異が報告。CVID移行例も存在する。",
    diagnosis: "血清IgA<7mg/dL、IgG・IgM正常、4歳以降の診断（母体移行抗体消失後）。",
    treatment: "根治療法なし。IgAを含む血液製剤（IVIG）は使用禁忌（アナフィラキシーリスク）。感染予防・治療。",
    prognosis: "多くは良好。一部はCVIDへ移行する。自己免疫疾患・悪性腫瘍合併例では予後が不良になりうる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Selective+IgA+Deficiency",
  },
  {
    slug: "autoimmune-polyendocrine-syndrome",
    name: "自己免疫性多内分泌腺症候群（APS）",
    nameEn: "Autoimmune Polyendocrine Syndrome",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "複数の内分泌腺に自己免疫性障害を来す症候群。APS1（AIRE遺伝子変異：副甲状腺機能低下・副腎不全・慢性皮膚粘膜カンジダ症）、APS2（副腎不全＋自己免疫性甲状腺炎・1型糖尿病）、APS3（甲状腺自己免疫＋他疾患）に分類される。",
    symptoms: ["副腎不全（アジソン病）", "1型糖尿病", "自己免疫性甲状腺疾患（橋本病・バセドウ病）", "副甲状腺機能低下症", "慢性皮膚粘膜カンジダ症（APS1）", "性腺機能低下症"],
    causes: "APS1はAIRE遺伝子の常染色体劣性変異。APS2・3はHLA遺伝子座・免疫調節遺伝子の多因子性素因。",
    diagnosis: "各内分泌腺の機能検査・自己抗体（抗副腎・抗甲状腺・抗インスリン等）、AIRE遺伝子検査（APS1）。",
    treatment: "各内分泌腺機能低下に対してホルモン補充療法。カンジダ症に抗真菌薬。定期的な内分泌機能スクリーニング。",
    prognosis: "ホルモン補充療法で症状管理が可能。APS1は副腎クリーゼなどで生命の危機になりうる。長期フォローが必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Autoimmune+Polyendocrine+Syndrome",
  },
  {
    slug: "anti-mda5-dermatomyositis",
    name: "抗MDA5抗体陽性皮膚筋炎",
    nameEn: "Anti-MDA5 Antibody-Positive Dermatomyositis",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "抗MDA5（抗CADM-140）抗体陽性の皮膚筋炎の一型。急速進行性間質性肺炎を合併し、筋症状が軽微（clinically amyopathic dermatomyositis）であることが多い。発熱・手指の潰瘍・関節炎・皮膚潰瘍を特徴とし、間質性肺炎の急速進行が予後を決定する。",
    symptoms: ["急速進行性間質性肺炎（致死的）", "皮膚筋炎の皮疹（ゴットロン丘疹・ヘリオトロープ疹）", "手指・口腔内潰瘍", "関節炎・関節痛", "発熱", "筋力低下（軽微〜なし）"],
    causes: "抗MDA5（メラノーマ分化関連遺伝子5）抗体を産生する自己免疫反応が肺・皮膚・関節を攻撃する。",
    diagnosis: "抗MDA5抗体測定（ELISA法）、高分解能CT（間質性肺炎パターン）、筋生検（炎症所見）。",
    treatment: "ステロイド大量療法＋タクロリムス・シクロスポリンの早期併用。重症間質性肺炎にシクロホスファミド・リツキシマブ・血漿交換。",
    prognosis: "急速進行性間質性肺炎の致死率が高い（50〜70%）。早期診断・積極的治療が生存率改善に直結する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Anti-MDA5+Dermatomyositis",
  },
  {
    slug: "anti-srp-necrotizing-myopathy",
    name: "抗SRP抗体陽性壊死性筋症",
    nameEn: "Anti-SRP Antibody-Positive Necrotizing Myopathy",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "抗シグナル認識粒子（SRP）抗体を特徴とする免疫介在性壊死性筋症（IMNM）の一型。急性〜亜急性に発症する高度な近位筋力低下・筋肉痛と著明なCK上昇を呈する。筋生検では壊死・再生筋線維が優勢で炎症細胞浸潤は乏しい。",
    symptoms: ["急速進行する近位筋力低下（上肢・下肢）", "著明なCK上昇（10,000 IU/L以上）", "筋肉痛", "嚥下障害", "間質性肺炎（一部）", "心筋炎（一部）"],
    causes: "抗SRP抗体による筋細胞（筋線維）への自己免疫攻撃。ミオパチーを引き起こす。スタチン投与が誘因になることがある。",
    diagnosis: "抗SRP抗体陽性（放射免疫測定法）、CK著明上昇、筋生検（壊死・再生、MHC-I発現亢進）、筋電図。",
    treatment: "ステロイド大量療法が第一選択。IVIGや免疫抑制薬（アザチオプリン・メトトレキサート）の早期併用が推奨。リツキシマブも有効例あり。",
    prognosis: "通常の炎症性筋疾患より難治性で再発しやすい。早期の積極的免疫療法で機能改善が得られる例もある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Anti-SRP+Necrotizing+Myopathy",
  },
  {
    slug: "seronegative-arthritis",
    name: "血清反応陰性関節炎（難治性）",
    nameEn: "Seronegative Arthritis (Refractory)",
    category: "免疫・自己免疫疾患",
    categorySlug: "immune",
    overview:
      "リウマトイド因子・抗CCP抗体が陰性の難治性関節炎の総称。乾癬性関節炎・反応性関節炎・未分化脊椎関節炎などが含まれる。HLA-B27関連が多く、脊椎関節症の病態を持つ場合は体軸・末梢関節炎・付着部炎・ぶどう膜炎を合併する。",
    symptoms: ["末梢関節炎（非対称性）", "脊椎・仙腸関節炎", "付着部炎（腱・靱帯付着部の炎症）", "乾癬性皮疹", "ぶどう膜炎", "指腸炎（ソーセージ指）"],
    causes: "HLA-B27遺伝的素因・腸管免疫異常・感染トリガー（リアクティブ）など多因子性。病原性Th17細胞・TNFの過剰産生が関与。",
    diagnosis: "臨床的評価（CASPAR基準・mNY基準）、画像検査（X線・MRI）、HLA-B27検査。RFと抗CCP抗体は陰性。",
    treatment: "NSAIDs・生物学的製剤（TNF阻害薬・IL-17阻害薬・IL-23阻害薬）・DMARDs（メトトレキサート）。",
    prognosis: "生物学的製剤の登場により予後は大幅改善。ただし難治性・再発性の経過をたどる例も存在する。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Seronegative+Arthritis",
  },
  // ===== 血液疾患 =====
  {
    slug: "waldenstrom-macroglobulinemia",
    name: "ウォルデンストレームマクログロブリン血症",
    nameEn: "Waldenström Macroglobulinemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "MYD88 L265P変異を有するIgMを産生するリンパ形質細胞性リンパ腫。骨髄・脾臓・リンパ節に腫瘍細胞が浸潤し、IgMの高産生による高粘稠度症候群・冷凝集素症・末梢神経障害などを引き起こす。緩徐進行性の稀な血液悪性腫瘍。",
    symptoms: ["倦怠感・貧血", "高粘稠度症候群（視力障害・頭痛・出血傾向）", "末梢神経障害（IgM関連ニューロパチー）", "リンパ節腫脹・脾腫", "冷凝集素症（寒冷時の溶血）"],
    causes: "MYD88 L265P変異（>90%）とCXCR4変異（30〜40%）が主要ドライバー変異。原因は不明。",
    diagnosis: "骨髄生検（リンパ形質細胞浸潤）、血清IgMモノクローナル蛋白、MYD88 L265P変異検出。",
    treatment: "無症状例は経過観察。症状発現時はブルトン型チロシンキナーゼ阻害薬（イブルチニブ・ザヌブルチニブ）、リツキシマブ併用化学療法。",
    prognosis: "中央生存期間は10年超と比較的良好。MYD88野生型・TP53変異例などは予後不良因子。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Waldenstrom+Macroglobulinemia",
  },
  {
    slug: "hairy-cell-leukemia",
    name: "ヘアリー細胞白血病",
    nameEn: "Hairy Cell Leukemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "毛様突起（ヘアリープロジェクション）を持つB細胞が骨髄・脾臓・末梢血に浸潤する稀な慢性B細胞性白血病。BRAF V600E変異が病因。汎血球減少・脾腫・易感染性を特徴とし、男性に多く、中高年に好発する。進行は緩徐だが未治療では重篤な感染症で死亡しうる。",
    symptoms: ["汎血球減少（貧血・好中球減少・血小板減少）", "脾腫（巨大脾腫）", "易感染性（非定型菌感染）", "倦怠感・体重減少", "単球減少（特徴的）"],
    causes: "BRAF V600E変異がほぼ全例で認められる。発症要因は不明。",
    diagnosis: "末梢血・骨髄塗抹（ヘアリー細胞）、フローサイトメトリー（CD11c/CD25/CD103/CD123陽性）、BRAF V600E変異検出。",
    treatment: "クラドリビン（2-CdA）またはペントスタチンが第一選択で90%以上で完全寛解。再発にはBRAF阻害薬（ベムラフェニブ）。",
    prognosis: "化学療法への反応性が高く、長期寛解が得られる症例が多い。通常の生命予後に近い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Hairy+Cell+Leukemia",
  },
  {
    slug: "t-lgll",
    name: "T細胞大顆粒リンパ球白血病",
    nameEn: "T-Cell Large Granular Lymphocyte Leukemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "大顆粒リンパ球（CD3+CD8+T細胞）のクローン性増殖を特徴とする稀な血液腫瘍。STAT3変異が多くの症例で認められる。好中球減少症による反復感染・貧血（赤芽球癆合併）・脾腫を特徴とし、関節リウマチや自己免疫疾患との合併が多い。",
    symptoms: ["重篤な好中球減少症", "反復する細菌感染症", "貧血（赤芽球癆合併）", "脾腫", "関節リウマチ様関節炎", "B症状（発熱・体重減少）"],
    causes: "STAT3変異（30〜40%）・STAT5b変異（まれ）。慢性ウイルス感染（EBVなど）や自己免疫疾患との関連が示唆される。",
    diagnosis: "末梢血・骨髄（大顆粒リンパ球のクローン性増殖）、フローサイトメトリー、T細胞受容体遺伝子再構成、STAT3変異検出。",
    treatment: "無症状例は経過観察。症状例にメトトレキサート・シクロスポリン・シクロホスファミド。G-CSF（好中球増加）。",
    prognosis: "緩徐進行性で予後は比較的良好。感染症が主な死因。STAT5b変異型は攻撃的経過をたどることがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=T-Cell+Large+Granular+Lymphocyte+Leukemia",
  },
  {
    slug: "high-risk-mds",
    name: "骨髄異形成症候群（高リスク群）",
    nameEn: "Myelodysplastic Syndrome High Risk",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "骨髄系細胞の形態異常と無効造血を特徴とする造血幹細胞腫瘍で、急性骨髄性白血病（AML）へ移行リスクが高い群。IPSS-Rスコアで高リスク・最高リスクに分類され、余命が限られ積極的治療が必要。TP53変異・複雑核型などが高リスク因子。",
    symptoms: ["重篤な貧血", "好中球減少による感染症", "血小板減少・出血傾向", "倦怠感・息切れ", "AML移行による急性症状"],
    causes: "造血幹細胞のDNA損傷蓄積（TP53・RUNX1・ASXL1変異・複雑核型など）。加齢・化学療法・放射線療法後に多い。",
    diagnosis: "骨髄生検（芽球比率・異形成評価）、染色体分析、次世代シークエンシング、IPSS-Rスコアリング。",
    treatment: "アザシチジン（低メチル化薬）が標準治療。適格例には同種造血幹細胞移植（根治的）。TP53変異にデシタビン。",
    prognosis: "高リスク群の中央生存期間は1〜2年程度。造血幹細胞移植が現時点での唯一の根治的治療。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Myelodysplastic+Syndrome+High+Risk",
  },
  {
    slug: "cmml",
    name: "慢性骨髄単球性白血病（CMML）",
    nameEn: "Chronic Myelomonocytic Leukemia",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "末梢血単球数が1×10^9/L以上持続し、骨髄異形成と骨髄増殖性特性を兼ね備えるクローン性造血幹細胞腫瘍。高齢者（中央年齢72歳）に好発し、TET2・SRSF2・ASXL1変異が多い。AMLへの移行リスクが高く、予後不良の疾患。",
    symptoms: ["貧血・倦怠感", "脾腫（腹部不快感・早期満腹感）", "易感染性", "血小板減少・出血傾向", "体重減少", "皮膚浸潤"],
    causes: "TET2（60%）・SRSF2（50%）・ASXL1・RAS変異などの体細胞変異。加齢関連の造血幹細胞変異が主原因。",
    diagnosis: "末梢血単球増加（≥1×10^9/L）、骨髄生検（芽球率・異形成）、染色体分析、遺伝子変異解析。",
    treatment: "アザシチジン（低メチル化薬）。輸血・G-CSF（支持療法）。適格例には同種造血幹細胞移植。",
    prognosis: "中央生存期間は20〜30ヵ月程度。CPSS-Molスコアで予後層別化。移植のみが根治的治療。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Chronic+Myelomonocytic+Leukemia",
  },
  // ===== 消化器疾患 =====
  {
    slug: "esophageal-achalasia",
    name: "食道アカラシア（難治性）",
    nameEn: "Esophageal Achalasia",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "下部食道括約筋の弛緩不全と食道蠕動運動消失を特徴とする食道神経筋疾患。嚥下障害・嘔吐・胸痛・体重減少を呈し、難治性の場合は経皮的食道筋層切開術や外科手術が必要。食道アウエルバッハ神経叢の炎症・変性が病因。",
    symptoms: ["嚥下障害（固形物・液体とも）", "食物の逆流・嘔吐", "胸痛・胸部不快感", "体重減少", "夜間の誤嚥（吸引性肺炎リスク）"],
    causes: "下部食道括約筋を支配するアウエルバッハ神経叢の抑制性ニューロン（NO産生・VIP産生）の変性・消失。自己免疫・ウイルス説もある。",
    diagnosis: "食道造影（食道体部の拡張・鳥嘴状狭窄）、食道内圧検査（HRM：下部食道括約筋弛緩不全・蠕動消失）、上部消化管内視鏡。",
    treatment: "内視鏡的バルーン拡張術・経口内視鏡的筋層切開術（POEM）・腹腔鏡下ヘラー筋層切開術。ボツリヌス毒素注射。",
    prognosis: "治療により症状の長期改善が可能だが、一部は再発・難治性経過をたどる。長期経過で食道癌リスクが上昇。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Esophageal+Achalasia",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/233",
  },
  {
    slug: "chronic-intestinal-pseudo-obstruction-rare",
    name: "慢性偽性腸閉塞（難治性）",
    nameEn: "Chronic Intestinal Pseudo-Obstruction",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "機械的閉塞がないにもかかわらず腸管麻痺・拡張を来す慢性腸管運動障害。腸管神経・平滑筋・間質細胞の病変が原因で、腹部膨満・嘔吐・便秘・下痢を繰り返す。重症例では中心静脈栄養が必要となる。先天性（腸管神経節細胞僅少症含む）と後天性がある。",
    symptoms: ["慢性的な腹部膨満・腹痛", "嘔吐・逆流", "便秘と下痢の繰り返し", "栄養障害・体重減少", "腸管穿孔リスク"],
    causes: "腸管神経細胞変性（腸管神経症）・平滑筋病変・カハール介在細胞異常など。ミトコンドリア疾患・膠原病・傍腫瘍性などが基礎疾患になることもある。",
    diagnosis: "消化管造影（機械的閉塞の除外）、腸管圧検査、腸管生検（神経・筋の評価）。基礎疾患の精査。",
    treatment: "腸管安静・経腸栄養・中心静脈栄養。プロキネティクス（ネオスチグミン・エリスロマイシン）。外科的腸管切除（局所病変）。",
    prognosis: "原因により予後は大きく異なる。腸管不全に至り中心静脈栄養依存となる症例もあり、長期管理が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Chronic+Intestinal+Pseudo-Obstruction",
  },
  {
    slug: "intestinal-hypoganglionosis",
    name: "腸管神経節細胞僅少症",
    nameEn: "Intestinal Hypoganglionosis",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "腸管壁のアウエルバッハ神経叢・マイスナー神経叢の神経節細胞が先天的に著明に減少する疾患。ヒルシュスプルング病に似た症状（便秘・腸閉塞）を来すが、無神経節領域が短いまたは神経節細胞が減少している。遺伝的原因は多様。",
    symptoms: ["慢性便秘（新生児期から）", "腸閉塞症状（腹部膨満・嘔吐）", "栄養障害・発育不良", "排便困難"],
    causes: "腸管神経発生に関わる遺伝子（RET・GDNF・EDN3・EDNRB等）の変異。ヒルシュスプルング病に隣接した疾患概念。",
    diagnosis: "腸管生検（神経節細胞密度の評価・アセチルコリンエステラーゼ染色）、注腸造影、腸管圧検査。",
    treatment: "外科的腸管切除（罹患腸管の切除・吻合）。一部では人工肛門・腸管栄養管理が必要。",
    prognosis: "外科的治療後も排便機能が改善しない例があり、長期的な排便管理・栄養管理が必要な場合がある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Intestinal+Hypoganglionosis",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/103",
  },
  // ===== 呼吸器疾患 =====
  {
    slug: "cteph",
    name: "慢性血栓塞栓性肺高血圧症（CTEPH）",
    nameEn: "Chronic Thromboembolic Pulmonary Hypertension",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "肺動脈内の器質化血栓により肺動脈が閉塞し、慢性的な肺高血圧症を来す疾患。急性肺血栓塞栓症後に発症することが多いが、血栓塞栓症の既往がない例も存在する。進行すると右心不全に至る。外科的肺動脈内膜摘除術（PEA）が根治的治療となる唯一の肺高血圧症。",
    symptoms: ["労作時呼吸困難（最も多い主訴）", "運動耐容能低下", "胸痛", "失神・前失神", "右心不全症状（浮腫・腹水）", "喀血（まれ）"],
    causes: "急性肺血栓塞栓症後の血栓器質化・血管リモデリング。血栓溶解障害・血栓症素因（抗リン脂質抗体症候群等）が関与。",
    diagnosis: "換気血流シンチグラフィ（不一致欠損）、右心カテーテル（mPAP≥25mmHg）、CTPA・肺動脈造影。",
    treatment: "手術適応例：肺動脈内膜摘除術（PEA）が根治的治療。非手術例：バルーン肺動脈形成術（BPA）、リオシグアト。",
    prognosis: "PEA成功例では血行動態が劇的に改善し予後良好。BPAでも大幅な改善が得られる症例が増加している。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Chronic+Thromboembolic+Pulmonary+Hypertension",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/86",
  },
  {
    slug: "pulmonary-veno-occlusive-disease",
    name: "肺静脈閉塞症",
    nameEn: "Pulmonary Veno-Occlusive Disease",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "肺静脈・肺毛細血管の閉塞・線維化により肺高血圧症を来す稀な疾患。肺動脈性肺高血圧症（PAH）に似た症状を呈するが、血管拡張薬による肺水腫悪化が特徴的。EIF2AK4遺伝子変異が両側性遺伝形式で認められ、散発性は化学療法・結合組織病後にも発症する。",
    symptoms: ["進行性労作時呼吸困難", "低酸素血症", "肺水腫（血管拡張薬投与後に悪化）", "右心不全症状", "喀血"],
    causes: "EIF2AK4遺伝子の常染色体劣性変異（遺伝性）。化学療法（マイトマイシンC・アルキル化薬）・骨髄移植後・結合組織病後（散発性）。",
    diagnosis: "高分解能CT（小葉中心性すりガラス影・小葉間隔壁肥厚・縦隔リンパ節腫脹）、右心カテーテル、EIF2AK4遺伝子検査。",
    treatment: "根治的治療は肺移植のみ。血管拡張薬は慎重に使用（肺水腫悪化リスク）。エポプロステノールを橋渡し治療として使用することがある。",
    prognosis: "予後不良で診断後の生存期間は短い。肺移植が唯一の根治的選択肢だが移植適応・臓器確保が課題。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Pulmonary+Veno-Occlusive+Disease",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/87",
  },
  {
    slug: "pulmonary-capillary-hemangiomatosis",
    name: "肺毛細血管腫症",
    nameEn: "Pulmonary Capillary Hemangiomatosis",
    category: "呼吸器疾患",
    categorySlug: "respiratory",
    overview:
      "肺毛細血管の異常増殖により肺高血圧症・低酸素血症を来す極めて稀な疾患。肺静脈閉塞症と病理学的に重複することが多く、EIF2AK4遺伝子変異が関与する。劇的に進行する場合もあり、肺移植が最終的な治療選択となる。",
    symptoms: ["進行性呼吸困難", "低酸素血症", "喀血（毛細血管の出血）", "右心不全症状", "肺高血圧に伴う胸痛"],
    causes: "EIF2AK4遺伝子変異（肺静脈閉塞症と共通）。散発性は特発性または化学療法後にも発症する。",
    diagnosis: "高分解能CT（びまん性すりガラス影・小葉中心性結節）、肺生検（毛細血管の異常増殖）、右心カテーテル。",
    treatment: "根治療法は肺移植のみ。対症療法（利尿薬・酸素療法）。血管拡張薬は肺水腫悪化のリスクがある。",
    prognosis: "予後不良。診断から肺移植または死亡までの期間が短いことが多い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Pulmonary+Capillary+Hemangiomatosis",
  },
  // ===== 心・血管疾患 =====
  {
    slug: "leopard-syndrome",
    name: "レオパード症候群（多発性黒子症候群）",
    nameEn: "LEOPARD Syndrome",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "PTPN11・RAF1・BRAF遺伝子変異によるRASopathyの一型。全身の多発性黒子（lentigines）・心電図異常・眼距離開大・肺動脈狭窄・生殖器異常・成長遅滞・難聴をLEOPARDの頭字語で表す。ヌーナン症候群と類縁疾患で常染色体優性遺伝。",
    symptoms: ["多発性黒子（色素斑）", "肥大型心筋症・肺動脈狭窄・心電図異常", "眼距離開大", "難聴（感音性）", "低身長", "生殖器異常（停留精巣）"],
    causes: "PTPN11（Q510E・T468M等）・RAF1・BRAF遺伝子の常染色体優性変異。ヌーナン症候群と異なる変異部位。",
    diagnosis: "臨床的特徴の評価、遺伝子検査（PTPN11優先）、心臓超音波（肥大型心筋症・肺動脈狭窄）、聴力検査。",
    treatment: "心疾患に外科的修復・薬物療法。肥大型心筋症にβ遮断薬・カルシウム拮抗薬。補聴器。",
    prognosis: "心疾患の重症度が予後を規定。肥大型心筋症が進行する例がある。知的障害は比較的軽度。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=LEOPARD+Syndrome",
  },
  {
    slug: "coffin-siris-syndrome",
    name: "コフィン・シリス症候群",
    nameEn: "Coffin-Siris Syndrome",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "BAF複合体（SWI/SNFクロマチンリモデリング複合体）の構成遺伝子（ARID1B・SMARCA4・SMARCB1等）変異による稀な先天性疾患。知的障害・第5指末節骨（爪）の低形成・粗い顔貌・皮膚多毛・先天性心疾患を特徴とする。",
    symptoms: ["知的障害・発達遅滞", "第5指（趾）末節骨・爪の低形成/欠損", "粗い顔貌（厚い唇・広い口）", "皮膚多毛", "先天性心疾患", "成長障害"],
    causes: "ARID1B（最多）・SMARCA4・SMARCB1・SMARCE1・ARID1A・SOX11などBAF複合体遺伝子の常染色体優性変異。多くは新生突然変異。",
    diagnosis: "臨床的特徴の評価、遺伝子パネル検査（BAF複合体遺伝子）。染色体マイクロアレイ。",
    treatment: "対症療法。早期療育・言語療法・作業療法。心疾患に外科的修復。",
    prognosis: "知的障害は通常中等度から重度。心疾患管理により生命予後は改善。悪性腫瘍（横紋筋肉腫）リスクが一部で報告。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Coffin-Siris+Syndrome",
  },
  {
    slug: "turner-syndrome-cardiac",
    name: "ターナー症候群（難治性心合併症）",
    nameEn: "Turner Syndrome with Cardiac Complications",
    category: "心・血管疾患",
    categorySlug: "cardio",
    overview:
      "X染色体のモノソミー（45,X）または構造異常による女性の染色体疾患。低身長・性腺機能不全が主徴だが、難治性の心血管合併症（大動脈二尖弁・大動脈縮窄・大動脈拡張・大動脈解離リスク）を有する例が難病管理の対象となる。大動脈解離は生命を脅かす。",
    symptoms: ["大動脈二尖弁（30〜50%）", "大動脈縮窄（10〜20%）", "大動脈拡張・大動脈解離リスク", "高血圧", "低身長", "性腺機能不全・不妊"],
    causes: "45,Xまたは46,X,i(Xq)・モザイクなどX染色体異常。心血管奇形はTBX1など胎生期発達関連遺伝子との関連が示唆される。",
    diagnosis: "染色体検査（G分染法）、心臓超音波・MRI（大動脈評価）、定期的な大動脈径モニタリング。",
    treatment: "大動脈縮窄にカテーテル治療・外科修復。大動脈拡張例にβ遮断薬・ARB。大動脈解離の緊急外科手術。",
    prognosis: "大動脈解離による突然死リスクが最大の問題。定期的な画像モニタリングと適切な血圧管理で予防を図る。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Turner+Syndrome+Cardiac+Complications",
  },
  // ===== 皮膚疾患 =====
  {
    slug: "hidradenitis-suppurativa",
    name: "化膿性汗腺炎（ヒドラデニティス化膿性汗腺炎）",
    nameEn: "Hidradenitis Suppurativa",
    nanbyoNumber: 143,
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "腋窩・鼠径部・乳房下・殿部などアポクリン汗腺の豊富な部位に繰り返す疼痛性結節・膿瘍・瘻孔・瘢痕形成を来す慢性炎症性皮膚疾患。毛包閉塞と免疫異常が病因で、IL-17・TNFが関与。難治性で患者のQOLを著しく低下させる。",
    symptoms: ["疼痛性皮下結節・膿瘍（腋窩・鼠径部・殿部）", "排膿・悪臭", "瘻孔（皮下トンネル形成）", "瘢痕・線維化", "再発を繰り返す"],
    causes: "毛包閉塞を起点とした細菌感染・免疫異常（IL-1β・TNF・IL-17過剰産生）。喫煙・肥満が増悪因子。",
    diagnosis: "臨床診断（Hurley分類で重症度評価）。病理組織・細菌培養で除外診断。",
    treatment: "局所・全身抗菌薬、ステロイド局注。生物学的製剤（アダリムマブ・セクキヌマブが保険適用）。外科的病巣切除。",
    prognosis: "慢性再発性経過で根治は困難。生物学的製剤により寛解維持例が増加。外科的広範切除後の再発も報告される。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Hidradenitis+Suppurativa",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/143",
  },
  {
    slug: "pyoderma-gangrenosum",
    name: "壊疽性膿皮症",
    nameEn: "Pyoderma Gangrenosum",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "好中球性皮膚疾患の一型で、急速に拡大する疼痛性潰瘍を特徴とする。炎症性腸疾患（クローン病・潰瘍性大腸炎）・関節炎・血液疾患（IgAモノクローナル異常症）との合併が多い。病態生理にIL-1β・TNFが関与し、ステロイド・免疫抑制薬が有効。",
    symptoms: ["急速に拡大する疼痛性皮膚潰瘍", "潰瘍辺縁の紫紅色・不規則な縁取り", "病的外傷後の皮膚破壊（パタージー現象）", "発熱・全身倦怠感", "炎症性腸疾患症状（合併時）"],
    causes: "好中球機能異常・IL-1β・TNFなどの炎症性サイトカイン過剰産生。炎症性腸疾患・関節炎・血液疾患が基礎疾患となることが多い。",
    diagnosis: "臨床的特徴・除外診断（感染・血管性潰瘍を除外）。病理組織（好中球浸潤）。基礎疾患の精査。",
    treatment: "ステロイド全身投与・シクロスポリン。難治例に生物学的製剤（アダリムマブ・インフリキシマブ）。局所創傷管理。",
    prognosis: "治療で改善するが再発しやすい。基礎疾患のコントロールが重要。瘢痕を残すことが多い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Pyoderma+Gangrenosum",
    nanbyouInfoUrl: "https://www.nanbyou.or.jp/entry/269",
  },
  {
    slug: "sweet-syndrome",
    name: "スウィート症候群（急性熱性好中球性皮膚症）",
    nameEn: "Sweet Syndrome",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "発熱・好中球増加・疼痛を伴う急性の隆起性浮腫性紅斑を特徴とする好中球性皮膚疾患。特発性（感染後・炎症性腸疾患合併）・薬剤性・悪性腫瘍（AML・MDS）合併の3型がある。IL-1β・TNFが病態に関与し、ステロイドが著効する。",
    symptoms: ["急速に出現する疼痛性・浮腫性紅斑（顔・頸・上肢）", "発熱（38℃以上）", "末梢血好中球増加", "眼症状（結膜炎・強膜炎）", "関節痛"],
    causes: "感染（上気道炎・腸管感染）後の免疫反応、薬剤（G-CSF・レチノイン酸）、悪性腫瘍（AML・固形癌）。IL-1β・TNF過剰産生が皮膚の好中球浸潤を誘導。",
    diagnosis: "臨床的特徴（発熱・好中球増加・疼痛性紅斑）＋病理組織（真皮上層の密な好中球浸潤・浮腫）。悪性腫瘍の除外。",
    treatment: "ステロイド全身投与で著明改善。コルヒチン・ダプソン（軽症例・維持療法）。基礎疾患の治療。",
    prognosis: "特発性は予後良好。悪性腫瘍合併例は基礎疾患の経過に依存する。再発することがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Sweet+Syndrome",
  },
  {
    slug: "eosinophilic-pustular-folliculitis",
    name: "好酸球性膿疱性毛包炎",
    nameEn: "Eosinophilic Pustular Folliculitis",
    category: "皮膚疾患",
    categorySlug: "skin",
    overview:
      "毛包を中心とした再発性の好酸球性膿疱形成を特徴とする稀な炎症性皮膚疾患。古典型（Ofuji病：東アジア男性に多い）・HIV関連型・免疫不全関連型に分類される。強い瘙痒を伴い、顔面・頭皮・体幹に好発する。",
    symptoms: ["顔面・頭皮の再発性好酸球性膿疱", "強い瘙痒感", "慢性再発性経過", "末梢血好酸球増加（一部）"],
    causes: "古典型はProstaglandin D2・IL-5経路の調節異常が示唆される。HIV関連型は免疫再構築や免疫抑制の影響。",
    diagnosis: "臨床的特徴・病理組織（毛包周囲の好酸球浸潤・海綿状変化）。古典型はHIV検査陰性。",
    treatment: "古典型：インドメタシン（第一選択・保険適用外）・ステロイド外用。HIV関連型：抗レトロウイルス療法。",
    prognosis: "古典型は慢性再発性経過だが生命予後は良好。インドメタシンで症状コントロールが可能な例が多い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Eosinophilic+Pustular+Folliculitis",
  },
  // ===== 眼科疾患 =====
  {
    slug: "fuchs-endothelial-dystrophy",
    name: "フックス角膜内皮ジストロフィ",
    nameEn: "Fuchs Endothelial Corneal Dystrophy",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "角膜内皮細胞の進行性減少と異常なデスメ膜（滴状突起：グッタータ形成）による両側性角膜混濁・浮腫を来す遺伝性角膜ジストロフィ。女性に多く、中年以降に発症・進行する。角膜浮腫による視力低下・眩光・霧視が主症状で、進行すると角膜移植が必要となる。",
    symptoms: ["朝起き時に悪化する霧視（角膜浮腫）", "眩光・グレア", "進行性視力低下", "疼痛（水疱性角膜症合併時）"],
    causes: "TCF4遺伝子の三塩基リピート伸長（最多）・SLC4A11・LOXHD1など複数遺伝子の変異。常染色体優性遺伝が多い。",
    diagnosis: "細隙灯顕微鏡（グッタータ・角膜浮腫）、鏡面反射型顕微鏡（角膜内皮細胞密度減少）、角膜光干渉断層計。",
    treatment: "早期：高張食塩水点眼・ドライヤーによる角膜乾燥。進行例：角膜移植（DSAEK・DMAEKが主流）。",
    prognosis: "適切な角膜移植で視力が大幅に回復する。ただし内皮細胞数は年齢とともに自然減少するため、長期フォローが必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Fuchs+Endothelial+Corneal+Dystrophy",
  },
  {
    slug: "lattice-corneal-dystrophy",
    name: "格子状角膜ジストロフィ",
    nameEn: "Lattice Corneal Dystrophy",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "TGFBI遺伝子変異によりアミロイドが角膜実質に沈着し、格子状の混濁を呈する遺伝性角膜ジストロフィ。常染色体優性遺伝（最多）。反復する角膜糜爛による疼痛・流涙と進行性視力低下を特徴とする。変異部位により複数の型がある（Biber-Haab-Dimmer型が最多）。",
    symptoms: ["反復する角膜糜爛（疼痛・流涙・羞明）", "格子状角膜混濁（細隙灯で確認）", "進行性視力低下", "霧視"],
    causes: "5q31のTGFBI（βig-h3）遺伝子変異。Arg124Cys・Arg124His変異が最多。常染色体優性遺伝。",
    diagnosis: "細隙灯顕微鏡（格子状・線状混濁）、TGFBI遺伝子検査。共焦点顕微鏡でアミロイド繊維確認。",
    treatment: "反復角膜糜爛に対して治療用コンタクトレンズ・角膜上皮掻爬。進行例：エキシマレーザー角膜切除術（PTK）・角膜移植。",
    prognosis: "進行性だが緩徐。PTKで一時的に混濁除去が可能。角膜移植後も再発（ドナー角膜上での再蓄積）することがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Lattice+Corneal+Dystrophy",
  },
  {
    slug: "progressive-keratoconus",
    name: "進行性円錐角膜",
    nameEn: "Progressive Keratoconus",
    category: "眼科疾患",
    categorySlug: "ophthalmology",
    overview:
      "角膜が非炎症性に菲薄化・突出し、不正乱視・近視が進行する変性疾患。青年期（10〜20歳代）に発症し片眼または両眼に進行する。アレルギー・目こすり・コラーゲン代謝異常が関与。進行例では角膜移植が必要となり、難治例として管理される。",
    symptoms: ["進行する不正乱視・近視", "視力低下（眼鏡矯正困難）", "霧視・二重視", "急性角膜水腫（Descemetocele破裂：急激な視力低下・疼痛）"],
    causes: "コラーゲン線維（特にV型）の酵素分解亢進・酸化ストレス・遺伝的素因（VSX1・SOD1等）。目こすり・アトピーが増悪因子。",
    diagnosis: "角膜トポグラフィ（前面・後面曲率マップ・屈折力マップ）、角膜断層撮影（Pentacam）で角膜菲薄化・突出の評価。",
    treatment: "軽症：ハードコンタクトレンズによる矯正。進行抑制：角膜クロスリンキング（CXL：コラーゲン架橋術）。重症：角膜移植（全層・深部層状）。",
    prognosis: "角膜クロスリンキングにより進行抑制が可能。重症例では角膜移植で視力改善が得られることが多い。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Progressive+Keratoconus",
  },
  // ===== 追加：神経・筋疾患 =====
  {
    slug: "mmn-multifocal-motor",
    name: "多巣性運動ニューロパチー（MMN）",
    nameEn: "Multifocal Motor Neuropathy",
    category: "神経・筋疾患",
    categorySlug: "neuro",
    overview:
      "多発単神経炎の分布を示す純粋な運動性末梢神経障害。抗GM1 IgM抗体が陽性のことが多く、神経伝導検査で局所的な伝導ブロックを認める。筋萎縮性側索硬化症（ALS）との鑑別が重要で、免疫グロブリン大量静注療法（IVIG）が有効な免疫介在性疾患。",
    symptoms: ["非対称性の上肢遠位筋力低下・筋萎縮", "筋線維束攣縮", "感覚障害なし（純粋運動性）", "手指の巧緻運動障害", "腱反射低下〜消失"],
    causes: "抗GM1 IgM抗体による局所的な脱髄・軸索障害。自己免疫機序。",
    diagnosis: "神経伝導検査（伝導ブロック）、抗GM1 IgM抗体陽性（60〜80%）、MRI（神経肥大）。ALSとの鑑別が重要。",
    treatment: "IVIG（免疫グロブリン大量静注）が第一選択で多くの症例に有効。維持療法として定期的IVIG投与。",
    prognosis: "IVIGに反応性が良く、長期にわたり機能維持が可能。ただし完全寛解は少なく、継続的治療が必要。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Multifocal+Motor+Neuropathy",
  },
  // ===== 追加：血液疾患 =====
  {
    slug: "primary-myelofibrosis-advanced",
    name: "原発性骨髄線維症（進行期）",
    nameEn: "Primary Myelofibrosis Advanced Stage",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "JAK2・CALR・MPL遺伝子変異を有するBCR-ABL陰性の骨髄増殖性腫瘍。進行期では重篤な貧血・巨大脾腫・骨髄不全・白血病転化リスクが増大する。JAK1/2阻害薬（ルキソリチニブ・フェドラチニブ）が症状改善に有効だが、唯一の根治的治療は同種造血幹細胞移植。",
    symptoms: ["重篤な貧血・輸血依存", "巨大脾腫（腹部膨満・疼痛・早期満腹感）", "B症状（発熱・寝汗・体重減少）", "骨痛", "門脈圧亢進症・腹水", "白血病転化"],
    causes: "JAK2 V617F（60%）・CALR（20〜25%）・MPL変異（5〜8%）により造血幹細胞クローンが増殖、骨髄線維化を引き起こす。高リスク変異（ASXL1・EZH2・SRSF2・IDH1/2）は予後不良。",
    diagnosis: "骨髄生検（線維化・異形成・巨核球異常）、JAK2/CALR/MPL変異、次世代シークエンシング（追加遺伝子変異）。",
    treatment: "ルキソリチニブ（JAK1/2阻害薬）が脾腫縮小・B症状改善に有効。適格例：同種造血幹細胞移植。輸血・EPO・ダナゾール（貧血対応）。",
    prognosis: "DIPSS-plusで予後層別化。高リスク群の中央生存期間は2〜3年程度。移植で長期寛解が得られる例がある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Primary+Myelofibrosis+Advanced",
  },
  {
    slug: "refractory-essential-thrombocythemia",
    name: "本態性血小板血症（難治性）",
    nameEn: "Essential Thrombocythemia Refractory",
    category: "血液疾患",
    categorySlug: "blood",
    overview:
      "JAK2・CALR・MPL変異を有するBCR-ABL陰性骨髄増殖性腫瘍で、持続する血小板増多（>450×10^9/L）を特徴とする。難治性（標準治療抵抗性または不耐容）例は血栓・出血リスクが高く、骨髄線維症・AMLへの移行リスクも存在する。",
    symptoms: ["血栓症（脳・心・腸管・四肢）", "出血（血小板機能異常による）", "頭痛・めまい・視覚障害（微小血管障害）", "脾腫", "掻痒感"],
    causes: "JAK2 V617F（60%）・CALR（25%）・MPL変異（5%）による血小板産生亢進。CALR変異型はCALR野生型より血栓リスクが低いとされる。",
    diagnosis: "血小板持続増多（450×10^9/L以上）、骨髄生検（巨核球増多・クラスタリング）、JAK2/CALR/MPL変異検出。",
    treatment: "低リスク：アスピリン。高リスク（60歳以上・血栓既往）：ヒドロキシウレア・アナグレリド。難治例：ルキソリチニブ・インターフェロンα。",
    prognosis: "血栓・出血の予防が重要。生命予後は比較的良好だが、骨髄線維症・AML移行例は予後不良。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Essential+Thrombocythemia+Refractory",
  },
  // ===== 追加：消化器疾患 =====
  {
    slug: "autoimmune-hepatitis-refractory",
    name: "自己免疫性肝炎（難治性）",
    nameEn: "Autoimmune Hepatitis Refractory",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "自己免疫機序による肝細胞障害を来す慢性炎症性肝疾患の難治性型。抗核抗体・抗平滑筋抗体陽性、高IgGが特徴。標準治療（ステロイド＋アザチオプリン）への不応・不耐容・副作用などにより寛解維持が困難な例。肝硬変・肝不全へ進行するリスクがある。",
    symptoms: ["慢性肝炎症状（倦怠感・食欲不振・黄疸）", "ALT・AST上昇", "高IgG血症", "自己抗体陽性（ANA・抗SMA）", "急性増悪（劇症化リスク）", "肝硬変症状（進行例）"],
    causes: "CD4+T細胞主体の肝自己抗原への免疫攻撃。HLA-DR3/DR4（type1）・HLA-DR7（type2）との関連。遺伝的素因＋環境因子。",
    diagnosis: "国際自己免疫性肝炎グループ（IAIHG）改訂スコア、肝生検（インターフェース肝炎・形質細胞浸潤）、自己抗体・IgG測定。",
    treatment: "一次治療：プレドニゾロン±アザチオプリン。難治例：タクロリムス・ミコフェノール酸モフェチル・リツキシマブ。肝移植（末期肝不全）。",
    prognosis: "寛解維持例では生命予後は一般人口に近い。難治性・肝硬変進行例では肝不全・肝癌リスクがある。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Autoimmune+Hepatitis+Refractory",
  },
  {
    slug: "primary-biliary-cholangitis-advanced",
    name: "原発性胆汁性胆管炎（進行期）",
    nameEn: "Primary Biliary Cholangitis Advanced",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "抗ミトコンドリア抗体（AMA）陽性の慢性胆汁うっ滞性自己免疫性肝疾患の進行期。ウルソデオキシコール酸（UDCA）不応例は線維化・肝硬変・肝不全へと進行する。掻痒感・倦怠感が著明で、胆管消失症候群の進行が病態の本質。",
    symptoms: ["掻痒感（難治性）", "倦怠感・疲労感", "黄疸（進行期）", "骨粗鬆症", "門脈圧亢進症（進行例）", "肝不全症状"],
    causes: "AMAが小胆管の胆管上皮細胞を攻撃するT細胞介在性自己免疫反応。HLA・IL-12シグナル経路の遺伝的素因。",
    diagnosis: "AMA-M2陽性（95%）＋胆汁うっ滞（ALP・GGT上昇）、肝生検（小胆管消失・胆管周囲炎）。",
    treatment: "UDCA（第一選択）。UDCA不応例：オベチコール酸（FXRアゴニスト）・フィブラート系薬（ベザフィブラート）。難治性掻痒にリファンピシン・血漿交換。肝移植（末期）。",
    prognosis: "UDCA反応例は生命予後良好。不応例・進行例では肝移植が必要となる。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Primary+Biliary+Cholangitis+Advanced",
  },
  {
    slug: "primary-sclerosing-cholangitis-advanced",
    name: "原発性硬化性胆管炎（進行期）",
    nameEn: "Primary Sclerosing Cholangitis Advanced",
    category: "消化器疾患",
    categorySlug: "gastro",
    overview:
      "肝内外胆管の進行性線維性炎症・狭窄を来す原因不明の慢性胆汁うっ滞性疾患の進行期。炎症性腸疾患（潰瘍性大腸炎）との合併が80%に及ぶ。胆管癌合併リスクが高く、肝硬変・肝不全への進行が避けられない。有効な薬物療法が確立されておらず、肝移植が唯一の根治的治療。",
    symptoms: ["掻痒感・黄疸", "倦怠感・疲労感", "腹痛（胆管炎）", "発熱（細菌性胆管炎）", "体重減少", "脂溶性ビタミン欠乏", "潰瘍性大腸炎症状（合併時）"],
    causes: "胆管上皮細胞への自己免疫攻撃・腸肝軸（腸内細菌・腸管免疫異常）・遺伝的素因（HLA-DRB1*0301等）。腸内細菌移行説・ウイルス説もある。",
    diagnosis: "MRCP・ERCPでのビーズ状胆管像・多発狭窄、ALP著明上昇、p-ANCA陽性（一部）、肝生検。",
    treatment: "有効な内科的治療なし（UDCAは症状改善に用いるが予後改善未証明）。胆管狭窄：内視鏡的拡張・ステント留置。肝移植（終末期）。",
    prognosis: "肝移植なしでの生存期間は診断後10〜15年程度。胆管癌合併（7〜15%）が予後不良因子。",
    jrctSearchUrl: "https://jrct.niph.go.jp/search?query=Primary+Sclerosing+Cholangitis+Advanced",
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
