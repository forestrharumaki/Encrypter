var key__ = document.getElementById('key');
var before__ = document.getElementById('before');
var after__ = document.getElementById('after');
var customcss = document.getElementById('customcss');
var ccc = document.getElementById('customcssc');
var v1 = /** @class */ (function () {
    function v1() {
        this.alphaset = ['亜', '哀', '愛', '悪', '握', '圧', '扱', '安', '暗', '案', '以', '位', '依', '偉', '囲', '委', '威', '尉', '意', '慰', '易', '為', '異', '移', '維', '緯', '胃', '衣', '違', '遺', '医', '井', '域', '育', '一', '壱', '逸', '稲', '芋', '印', '員', '因', '姻', '引', '飲', '院', '陰', '隠', '韻', '右', '宇', '羽', '雨', '渦', '浦', '運', '雲', '営', '影', '映', '栄', '永', '泳', '英', '衛', '詠', '鋭', '液', '疫', '益', '駅', '悦', '謁', '越', '閲', '円', '園', '宴', '延', '援', '沿', '演', '炎', '煙', '猿', '縁', '遠', '鉛', '塩', '汚', '凹', '央', '奥', '往', '応', '押', '横', '欧', '殴', '王', '翁', '黄', '沖', '億', '屋', '憶', '乙', '卸', '恩', '温', '穏', '音', '下', '化', '仮', '何', '価', '佳', '加', '可', '夏', '嫁', '家', '寡', '科', '暇', '果', '架', '歌', '河', '火', '禍', '稼', '箇', '花', '荷', '華', '菓', '課', '貨', '過', '蚊', '我', '画', '芽', '賀', '雅', '餓', '介', '会', '解', '回', '塊', '壊', '快', '怪', '悔', '懐', '戒', '拐', '改', '械', '海', '灰', '界', '皆', '絵', '開', '階', '貝', '劾', '外', '害', '慨', '概', '涯', '街', '該', '垣', '嚇', '各', '拡', '格', '核', '殻', '獲', '確', '穫', '覚', '角', '較', '郭', '閣', '隔', '革', '学', '岳', '楽', '額', '掛', '潟', '割', '喝', '括', '活', '渇', '滑', '褐', '轄', '且', '株', '刈', '乾', '冠', '寒', '刊', '勘', '勧', '巻', '喚', '堪', '完', '官', '寛', '干', '幹', '患', '感', '慣', '憾', '換', '敢', '棺', '款', '歓', '汗', '漢', '環', '甘', '監', '看', '管', '簡', '緩', '缶', '肝', '艦', '観', '貫', '還', '鑑', '間', '閑', '関', '陥', '館', '丸', '含', '岸', '眼', '岩', '頑', '顔', '願', '企', '危', '喜', '器', '基', '奇', '寄', '岐', '希', '幾', '忌', '揮', '机', '旗', '既', '期', '棋', '棄', '機', '帰', '気', '汽', '祈', '季', '紀', '規', '記', '貴', '起', '軌', '輝', '飢', '騎', '鬼', '偽', '儀', '宜', '戯', '技', '擬', '欺', '犠', '疑', '義', '議', '菊', '吉', '喫', '詰', '却', '客', '脚', '虐', '逆', '丘', '久', '休', '及', '吸', '宮', '弓', '急', '救', '朽', '求', '泣', '球', '究', '窮', '級', '糾', '給', '旧', '牛', '去', '居', '巨', '拒', '拠', '挙', '虚', '許', '距', '漁', '魚', '享', '京', '供', '競', '共', '凶', '協', '叫', '境', '峡', '強', '恐', '恭', '挟', '教', '橋', '況', '狂', '狭', '矯', '胸', '脅', '興', '郷', '鏡', '響', '驚', '仰', '凝', '暁', '業', '局', '曲', '極', '玉', '勤', '均', '斤', '琴', '禁', '筋', '緊', '菌', '襟', '謹', '近', '金', '吟', '銀', '九', '句', '区', '苦', '駆', '具', '愚', '虞', '空', '偶', '遇', '隅', '屈', '掘', '靴', '繰', '桑', '勲', '君', '薫', '訓', '群', '軍', '郡', '係', '傾', '刑', '兄', '啓', '型', '契', '形', '径', '恵', '慶', '憩', '掲', '携', '敬', '景', '渓', '系', '経', '継', '茎', '蛍', '計', '警', '軽', '鶏', '芸', '迎', '鯨', '劇', '撃', '激', '傑', '欠', '決', '潔', '穴', '結', '血', '月', '件', '倹', '健', '兼', '券', '剣', '圏', '堅', '嫌', '建', '憲', '懸', '検', '権', '犬', '献', '研', '絹', '県', '肩', '見', '謙', '賢', '軒', '遣', '険', '顕', '験', '元', '原', '厳', '幻', '弦', '減', '源', '玄', '現', '言', '限', '個', '古', '呼', '固', '孤', '己', '庫', '弧', '戸', '故', '枯', '湖', '誇', '雇', '顧', '鼓', '五', '互', '午', '呉', '娯', '後', '御', '悟', '碁', '語', '誤', '護', '交', '侯', '候', '光', '公', '功', '効', '厚', '口', '向', '后', '坑', '好', '孔', '孝', '工', '巧', '幸', '広', '康', '恒', '慌', '抗', '拘', '控', '攻', '更', '校', '構', '江', '洪', '港', '溝', '甲', '皇', '硬', '稿', '紅', '絞', '綱', '耕', '考', '肯', '航', '荒', '行', '衡', '講', '貢', '購', '郊', '酵', '鉱', '鋼', '降', '項', '香', '高', '剛', '号', '合', '拷', '豪', '克', '刻', '告', '国', '穀', '酷', '黒', '獄', '腰', '骨', '込', '今', '困', '墾', '婚', '恨', '懇', '昆', '根', '混', '紺', '魂', '佐', '唆', '左', '差', '査', '砂', '詐', '鎖', '座', '債', '催', '再', '最', '妻', '宰', '彩', '才', '採', '栽', '歳', '済', '災', '砕', '祭', '斎', '細', '菜', '裁', '載', '際', '剤', '在', '材', '罪', '財', '坂', '咲', '崎', '作', '削', '搾', '昨', '策', '索', '錯', '桜', '冊', '刷', '察', '撮', '擦', '札', '殺', '雑', '皿', '三', '傘', '参', '山', '惨', '散', '桟', '産', '算', '蚕', '賛', '酸', '暫', '残', '仕', '伺', '使', '刺', '司', '史', '嗣', '四', '士', '始', '姉', '姿', '子', '市', '師', '志', '思', '指', '支', '施', '旨', '枝', '止', '死', '氏', '祉', '私', '糸', '紙', '紫', '肢', '脂', '至', '視', '詞', '詩', '試', '誌', '諮', '資', '賜', '雌', '飼', '歯', '事', '似', '侍', '児', '字', '寺', '慈', '持', '時', '次', '滋', '治', '璽', '磁', '示', '耳', '自', '辞', '式', '識', '軸', '七', '執', '失', '室', '湿', '漆', '疾', '質', '実', '芝', '舎', '写', '射', '捨', '赦', '斜', '煮', '社', '者', '謝', '車', '遮', '蛇', '邪', '借', '勺', '尺', '爵', '酌', '釈', '若', '寂', '弱', '主', '取', '守', '手', '朱', '殊', '狩', '珠', '種', '趣', '酒', '首', '儒', '受', '寿', '授', '樹', '需', '囚', '収', '周', '宗', '就', '州', '修', '愁', '拾', '秀', '秋', '終', '習', '臭', '舟', '衆', '襲', '週', '酬', '集', '醜', '住', '充', '十', '従', '柔', '汁', '渋', '獣', '縦', '重', '銃', '叔', '宿', '淑', '祝', '縮', '粛', '塾', '熟', '出', '術', '述', '俊', '春', '瞬', '准', '循', '旬', '殉', '準', '潤', '盾', '純', '巡', '遵', '順', '処', '初', '所', '暑', '庶', '緒', '署', '書', '諸', '助', '叙', '女', '序', '徐', '除', '傷', '償', '勝', '匠', '升', '召', '商', '唱', '奨', '宵', '将', '小', '少', '尚', '床', '彰', '承', '抄', '招', '掌', '昇', '昭', '晶', '松', '沼', '消', '渉', '焼', '焦', '照', '症', '省', '硝', '礁', '祥', '称', '章', '笑', '粧', '紹', '肖', '衝', '訟', '証', '詔', '詳', '象', '賞', '鐘', '障', '上', '丈', '乗', '冗', '剰', '城', '場', '壌', '嬢', '常', '情', '条', '浄', '状', '畳', '蒸', '譲', '醸', '錠', '嘱', '飾', '植', '殖', '織', '職', '色', '触', '食', '辱', '伸', '信', '侵', '唇', '娠', '寝', '審', '心', '慎', '振', '新', '森', '浸', '深', '申', '真', 'ﾈ', 'ｺ', '紳', '臣', '薪', '親', '診', '身', '辛', '進', '針', '震', '人', '仁', '刃', '尋', '甚', '尽', '迅', '陣', '酢', '図', '吹', '垂', '帥', '推', '水', '炊', '睡', '粋', '衰', '遂', '酔', '錘', '随', '髄', '崇', '数', '枢', '据', '杉', '澄', '寸', '世', '瀬', '畝', '是', '制', '勢', '姓', '征', '性', '成', '政', '整', '星', '晴', '正', '清', '牲', '生', '盛', '精', '聖', '声', '製', '西', '誠', '誓', '請', '逝', '青', '静', '斉', '税', '隻', '席', '惜', '斥', '昔', '析', '石', '積', '籍', '績', '責', '赤', '跡', '切', '拙', '接', '摂', '折', '設', '窃', '節', '説', '雪', '絶', '舌', '仙', '先', '千', '占', '宣', '専', '川', '戦', '扇', '栓', '泉', '浅', '洗', '染', '潜', '旋', '線', '繊', '船', '薦', '践', '選', '遷', '銭', '銑', '鮮', '前', '善', '漸', '然', '全', '禅', '繕', '塑', '措', '疎', '礎', '祖', '租', '粗', '素', '組', '訴', '阻', '僧', '創', '双', '倉', '喪', '壮', '奏', '層', '想', '捜', '掃', '挿', '操', '早', '曹', '巣', '槽', '燥', '争', '相', '窓', '総', '草', '荘', '葬', '藻', '装', '走', '送', '遭', '霜', '騒', '像', '増', '憎', '臓', '蔵', '贈', '造', '促', '側', '則', '即', '息', '束', '測', '足', '速', '俗', '属', '賊', '族', '続', '卒', '存', '孫', '尊', '損', '村', '他', '多', '太', '堕', '妥', '惰', '打', '駄', '体', '対', '耐', '帯', '待', '怠', '態', '替', '泰', '滞', '胎', '袋', '貸', '退', '逮', '隊', '代', '台', '大', '第', '題', '滝', '卓', '宅', '択', '拓', '沢', '濯', '託', '濁', '諾', '但', '達', '奪', '脱', '棚', '谷', '丹', '単', '嘆', '担', '探', '淡', '炭', '短', '端', '胆', '誕', '鍛', '団', '壇', '弾', '断', '暖', '段', '男', '談', '値', '知', '地', '恥', '池', '痴', '稚', '置', '致', '遅', '築', '畜', '竹', '蓄', '逐', '秩', '窒', '茶', '嫡', '着', '中', '仲', '宙', '忠', '抽', '昼', '柱', '注', '虫', '衷', '鋳', '駐', '著', '貯', '丁', '兆', '帳', '庁', '弔', '張', '彫', '徴', '懲', '挑', '朝', '潮', '町', '眺', '聴', '脹', '腸', '調', '超', '跳', '長', '頂', '鳥', '勅', '直', '朕', '沈', '珍', '賃', '鎮', '陳', '津', '墜', '追', '痛', '通', '塚', '漬', '坪', '釣', '亭', '低', '停', '偵', '貞', '呈', '堤', '定', '帝', '底', '庭', '廷', '弟', '抵', '提', '程', '締', '艇', '訂', '逓', '邸', '泥', '摘', '敵', '滴', '的', '笛', '適', '哲', '徹', '撤', '迭', '鉄', '典', '天', '展', '店', '添', '転', '点', '伝', '殿', '田', '電', '吐', '塗', '徒', '斗', '渡', '登', '途', '都', '努', '度', '土', '奴', '怒', '倒', '党', '冬', '凍', '刀', '唐', '塔', '島', '悼', '投', '搭', '東', '桃', '棟', '盗', '湯', '灯', '当', '痘', '等', '答', '筒', '糖', '統', '到', '討', '謄', '豆', '踏', '逃', '透', '陶', '頭', '騰', '闘', '働', '動', '同', '堂', '導', '洞', '童', '胴', '道', '銅', '峠', '匿', '得', '徳', '特', '督', '篤', '毒', '独', '読', '凸', '突', '届', '屯', '豚', '曇', '鈍', '内', '縄', '南', '軟', '難', '二', '尼', '弐', '肉', '日', '乳', '入', '如', '尿', '任', '妊', '忍', '認', '寧', '猫', '熱', '年', '念', '燃', '粘', '悩', '濃', '納', '能', '脳', '農', '把', '覇', '波', '派', '破', '婆', '馬', '俳', '廃', '拝', '排', '敗', '杯', '背', '肺', '輩', '配', '倍', '培', '媒', '梅', '買', '売', '賠', '陪', '伯', '博', '拍', '泊', '白', '舶', '薄', '迫', '漠', '爆', '縛', '麦', '箱', '肌', '畑', '八', '鉢', '発', '髪', '伐', '罰', '抜', '閥', '伴', '判', '半', '反', '帆', '搬', '板', '版', '犯', '班', '畔', '繁', '般', '藩', '販', '範', '煩', '頒', '飯', '晩', '番', '盤', '蛮', '卑', '否', '妃', '彼', '悲', '扉', '批', '披', '比', '泌', '疲', '皮', '碑', '秘', '罷', '肥', '被', '費', '避', '非', '飛', '備', '尾', '微', '美', '鼻', '匹', '必', '筆', '姫', '百', '俵', '標', '氷', '漂', '票', '表', '評', '描', '病', '秒', '苗', '品', '浜', '貧', '賓', '頻', '敏', '瓶', '不', '付', '夫', '婦', '富', '布', '府', '怖', '扶', '敷', '普', '浮', '父', '符', '腐', '膚', '譜', '負', '賦', '赴', '附', '侮', '武', '舞', '部', '封', '風', '伏', '副', '復', '幅', '服', '福', '腹', '複', '覆', '払', '沸', '仏', '物', '分', '噴', '墳', '憤', '奮', '粉', '紛', '雰', '文', '聞', '丙', '併', '兵', '塀', '幣', '平', '弊', '柄', '並', '閉', '陛', '米', '壁', '癖', '別', '偏', '変', '片', '編', '辺', '返', '遍', '便', '勉', '弁', '保', '舗', '捕', '歩', '補', '穂', '募', '墓', '慕', '暮', '母', '簿', '倣', '俸', '包', '報', '奉', '宝', '峰', '崩', '抱', '放', '方', '法', '泡', '砲', '縫', '胞', '芳', '褒', '訪', '豊', '邦', '飽', '乏', '亡', '傍', '剖', '坊', '妨', '帽', '忘', '忙', '房', '暴', '望', '某', '棒', '冒', '紡', '肪', '膨', '謀', '貿', '防', '北', '僕', '墨', '撲', '朴', '牧', '没', '堀', '奔', '本', '翻', '凡', '盆', '摩', '磨', '魔', '麻', '埋', '妹', '枚', '毎', '幕', '膜', '又', '抹', '末', '繭', '万', '慢', '満', '漫', '味', '未', '魅', '岬', '密', '脈', '妙', '民', '眠', '務', '夢', '無', '矛', '霧', '婿', '娘', '名', '命', '明', '盟', '迷', '銘', '鳴', '滅', '免', '綿', '面', '模', '茂', '妄', '毛', '猛', '盲', '網', '耗', '木', '黙', '目', '戻', '問', '紋', '門', '匁', '夜', '野', '矢', '厄', '役', '約', '薬', '訳', '躍', '柳', '愉', '油', '癒', '諭', '輸', '唯', '優', '勇', '友', '幽', '悠', '憂', '有', '猶', '由', '裕', '誘', '遊', '郵', '雄', '融', '夕', '予', '余', '与', '誉', '預', '幼', '容', '庸', '揚', '揺', '擁', '曜', '様', '洋', '溶', '用', '窯', '羊', '葉', '要', '謡', '踊', '陽', '養', '抑', '欲', '浴', '翌', '翼', '羅', '裸', '来', '頼', '雷', '絡', '落', '酪', '乱', '卵', '欄', '濫', '覧', '利', '吏', '履', '理', '痢', '裏', '里', '離', '陸', '律', '率', '立', '略', '流', '留', '硫', '粒', '隆', '竜', '慮', '旅', '虜', '了', '僚', '両', '寮', '料', '涼', '猟', '療', '糧', '良', '量', '陵', '領', '力', '緑', '倫', '厘', '林', '臨', '輪', '隣', '塁', '涙', '累', '類', '令', '例', '冷', '励', '礼', '鈴', '隷', '零', '霊', '麗', '齢', '暦', '歴', '列', '劣', '烈', '裂', '廉', '恋', '練', '連', '錬', '炉', '路', '露', '労', '廊', '朗', '楼', '浪', '漏', '老', '郎', '六', '録', '論', '和', '話', '賄', '惑', '枠', '湾', '腕', ' ', '　', '　', ' ', '⊃', ' ', '♪', ' ', 'Ｏ', ' ', 'ｒ', ' ', 'さ', ' ', 'ひ', ' ', 'わ', ' ', 'ス', ' ', 'ブ', ' ', 'ン', ' ', 'β', ' ', 'Ё', ' ', 'в', ' ', 'ю', ' ', '┝', ' ', '≒', ' ', '∫', ' ', '∠', ' ', '∩', ' ', '　', ' ', '、', ' ', '‐', ' ', '【', ' ', '＊', ' ', '∪', ' ', '†', ' ', 'Ｐ', ' ', 'ｓ', ' ', 'ざ', ' ', 'び', ' ', 'ゐ', ' ', 'ズ', ' ', 'プ', ' ', 'ヴ', ' ', 'γ', ' ', 'Ж', ' ', 'г', ' ', 'я', ' ', '┰', ' ', '≡', ' ', '⊥', ' ', '∵', ' ', '∪', ' ', '　', ' ', '。', ' ', '／', ' ', '】', ' ', '＠', ' ', '∩', ' ', '‡', ' ', 'Ｑ', ' ', 'ｔ', ' ', 'し', ' ', 'ぴ', ' ', 'ゑ', ' ', 'セ', ' ', 'ヘ', ' ', 'ヵ', ' ', 'δ', ' ', 'З', ' ', 'д', ' ', '─', ' ', '┥', ' ', '　', ' ', '，', ' ', '＼', ' ', '＋', ' ', '§', ' ', '∧', ' ', '¶', ' ', 'Ｒ', ' ', 'ｕ', ' ', 'じ', ' ', 'ふ', ' ', 'を', ' ', 'ゼ', ' ', 'ベ', ' ', 'ヶ', ' ', 'ε', ' ', 'И', ' ', 'е', ' ', '│', ' ', '┸', ' ', '!', ' ', ':', ' ', 'S', ' ', 'l', ' ', '．', ' ', '～', ' ', '－', ' ', '☆', ' ', '∨', ' ', '◯', ' ', 'Ｓ', ' ', 'ｖ', ' ', 'す', ' ', 'ぶ', ' ', 'ん', ' ', 'ソ', ' ', 'ペ', ' ', 'Α', ' ', 'ζ', ' ', 'Й', ' ', 'ё', ' ', '┌', ' ', '╂', ' ', '"', ' ', ';', ' ', 'T', ' ', 'm', ' ', '・', ' ', '∥', ' ', '±', ' ', '★', ' ', '￢', ' ', '0', ' ', 'Ｔ', ' ', 'ｗ', ' ', 'ず', ' ', 'ぷ', ' ', 'ァ', ' ', 'ゾ', ' ', 'ホ', ' ', 'Β', ' ', 'η', ' ', 'К', ' ', 'ж', ' ', '┐', ' ', '#', ' ', '<', ' ', 'U', ' ', 'n', ' ', '：', ' ', '｜', ' ', '×', ' ', '○', ' ', '⇒', ' ', '1', ' ', 'Ｕ', ' ', 'ｘ', ' ', 'せ', ' ', 'へ', ' ', 'ア', ' ', 'タ', ' ', 'ボ', ' ', 'Γ', ' ', 'θ', ' ', 'Л', ' ', 'з', ' ', '┘', ' ', '$', ' ', '=', ' ', 'V', ' ', 'o', ' ', '；', ' ', '…', ' ', '÷', ' ', '●', ' ', '⇔', ' ', '2', ' ', 'Ｖ', ' ', 'ｙ', ' ', 'ぜ', ' ', 'べ', ' ', 'ィ', ' ', 'ダ', ' ', 'ポ', ' ', 'Δ', ' ', 'ι', ' ', 'М', ' ', 'и', ' ', '└', ' ', '%', ' ', '>', ' ', 'W', ' ', 'p', ' ', '？', ' ', '‥', ' ', '＝', ' ', '◎', ' ', '∀', ' ', '3', ' ', 'Ｗ', ' ', 'ｚ', ' ', 'そ', ' ', 'ぺ', ' ', 'イ', ' ', 'チ', ' ', 'マ', ' ', 'Ε', ' ', 'κ', ' ', 'Н', ' ', 'й', ' ', '├', ' ', '&', ' ', '?', ' ', 'X', ' ', 'q', ' ', '！', ' ', '‘', ' ', '≠', ' ', '◇', ' ', '∃', ' ', '4', ' ', 'Ｘ', ' ', 'ぁ', ' ', 'ぞ', ' ', 'ほ', ' ', 'ゥ', ' ', 'ヂ', ' ', 'ミ', ' ', 'Ζ', ' ', 'λ', ' ', 'О', ' ', 'к', ' ', '┬', ' ', '"', ' ', '@', ' ', 'Y', ' ', 'r', ' ', '゛', ' ', '’', ' ', '＜', ' ', '◆', ' ', '∠', ' ', '5', ' ', 'Ｙ', ' ', 'あ', ' ', 'た', ' ', 'ぼ', ' ', 'ウ', ' ', 'ッ', ' ', 'ム', ' ', 'Η', ' ', 'μ', ' ', 'П', ' ', 'л', ' ', '┤', ' ', '(', ' ', 'A', ' ', 'Z', ' ', 's', ' ', '゜', ' ', '“', ' ', '＞', ' ', '□', ' ', '⊥', ' ', '6', ' ', 'Ｚ', ' ', 'ぃ', ' ', 'だ', ' ', 'ぽ', ' ', 'ェ', ' ', 'ツ', ' ', 'メ', ' ', 'Θ', ' ', 'ν', ' ', 'Р', ' ', 'м', ' ', '┴', ' ', ')', ' ', 'B', ' ', '[', ' ', 't', ' ', '´', ' ', '”', ' ', '≦', ' ', '■', ' ', '⌒', ' ', '7', ' ', 'ａ', ' ', 'い', ' ', 'ち', ' ', 'ま', ' ', 'エ', ' ', 'ヅ', ' ', 'モ', ' ', 'Ι', ' ', 'ξ', ' ', 'С', ' ', 'н', ' ', '┼', ' ', '*', ' ', 'C', ' ', '\',', ',', '（', '≧', ' ', '△', ' ', '∂', ' ', '8', ' ', 'ｂ', ' ', 'ぅ', ' ', 'ぢ', ' ', 'み', ' ', 'ォ', ' ', 'テ', ' ', 'ャ', ' ', 'Κ', ' ', 'ο', ' ', 'Т', ' ', 'о', ' ', '━', ' ', '+', ' ', 'D', ' ', ']', ' ', 'v', ' ', '¨', ' ', '）', ' ', '∞', ' ', '▲', ' ', '∇', ' ', '9', ' ', 'ｃ', ' ', 'う', ' ', 'っ', ' ', 'む', ' ', 'オ', ' ', 'デ', ' ', 'ヤ', ' ', 'Λ', ' ', 'π', ' ', 'У', ' ', 'п', ' ', '┃', ' ', ',', ' ', 'E', ' ', '^', ' ', 'w', ' ', '＾', ' ', '〔', ' ', '∴', ' ', '▽', ' ', '≡', ' ', 'Ａ', ' ', 'ｄ', ' ', 'ぇ', ' ', 'つ', ' ', 'め', ' ', 'カ', ' ', 'ト', ' ', 'ュ', ' ', 'Μ', ' ', 'ρ', ' ', 'Ф', ' ', 'р', ' ', '┏', ' ', '-', ' ', 'F', ' ', '_', ' ', 'x', ' ', '￣', ' ', '〕', ' ', '♂', ' ', '▼', ' ', '≒', ' ', 'Ｂ', ' ', 'ｅ', ' ', 'え', ' ', 'づ', ' ', 'も', ' ', 'ガ', ' ', 'ド', ' ', 'ユ', ' ', 'Ν', ' ', 'σ', ' ', 'Х', ' ', 'с', ' ', '┓', ' ', '.', ' ', 'G', ' ', '`', ' ', 'y', ' ', '＿', ' ', '［', ' ', '♀', ' ', '※', ' ', '≪', ' ', 'Ｃ', ' ', 'ｆ', ' ', 'ぉ', ' ', 'て', ' ', 'ゃ', ' ', 'キ', ' ', 'ナ', ' ', 'ョ', ' ', 'Ξ', ' ', 'τ', ' ', 'Ц', ' ', 'т', ' ', '┛', ' ', '/', ' ', 'H', ' ', 'a', ' ', 'z', ' ', 'ヽ', ' ', '］', ' ', '°', ' ', '〒', ' ', '≫', ' ', 'Ｄ', ' ', 'ｇ', ' ', 'お', ' ', 'で', ' ', 'や', ' ', 'ギ', ' ', 'ニ', ' ', 'ヨ', ' ', 'Ο', ' ', 'υ', ' ', 'Ч', ' ', 'у', ' ', '┗', ' ', '0', ' ', 'I', ' ', 'b', ' ', '{', ' ', 'ヾ', ' ', '｛', ' ', '′', ' ', '→', ' ', '√', ' ', 'Ｅ', ' ', 'ｈ', ' ', 'か', ' ', 'と', ' ', 'ゅ', ' ', 'ク', ' ', 'ヌ', ' ', 'ラ', ' ', 'Π', ' ', 'φ', ' ', 'Ш', ' ', 'ф', ' ', '┣', ' ', '1', ' ', 'J', ' ', 'c', ' ', '|', ' ', 'ゝ', ' ', '｝', ' ', '″', ' ', '←', ' ', '∽', ' ', 'Ｆ', ' ', 'ｉ', ' ', 'が', ' ', 'ど', ' ', 'ゆ', ' ', 'グ', ' ', 'ネ', ' ', 'リ', ' ', 'Ρ', ' ', 'χ', ' ', 'Щ', ' ', 'х', ' ', '┳', ' ', '2', ' ', 'K', ' ', 'd', ' ', '}', ' ', 'ゞ', ' ', '〈', ' ', '℃', ' ', '↑', ' ', '∝', ' ', 'Ｇ', ' ', 'ｊ', ' ', 'き', ' ', 'な', ' ', 'ょ', ' ', 'ケ', ' ', 'ノ', ' ', 'ル', ' ', 'Σ', ' ', 'ψ', ' ', 'Ъ', ' ', 'ц', ' ', '┫', ' ', '3', ' ', 'L', ' ', 'e', ' ', '~', ' ', '〃', ' ', '〉', ' ', '￥', ' ', '↓', ' ', '∵', ' ', 'Ｈ', ' ', 'ｋ', ' ', 'ぎ', ' ', 'に', ' ', 'よ', ' ', 'ゲ', ' ', 'ハ', ' ', 'レ', ' ', 'Τ', ' ', 'ω', ' ', 'Ы', ' ', 'ч', ' ', '┻', ' ', '4', ' ', 'M', ' ', 'f', ' ', '仝', ' ', '《', ' ', '＄', ' ', '〓', ' ', '∫', ' ', 'Ｉ', ' ', 'ｌ', ' ', 'く', ' ', 'ぬ', ' ', 'ら', ' ', 'コ', ' ', 'バ', ' ', 'ロ', ' ', 'Υ', ' ', 'А', ' ', 'Ь', ' ', 'ш', ' ', '╋', ' ', '5', ' ', 'N', ' ', 'g', ' ', '々', ' ', '》', ' ', '￠', ' ', '∈', ' ', '∬', ' ', 'Ｊ', ' ', 'ｍ', ' ', 'ぐ', ' ', 'ね', ' ', 'り', ' ', 'ゴ', ' ', 'パ', ' ', 'ヮ', ' ', 'Φ', ' ', 'Б', ' ', 'Э', ' ', 'щ', ' ', '┠', ' ', '6', ' ', 'O', ' ', 'h', ' ', '〆', ' ', '「', ' ', '￡', ' ', '∋', ' ', 'Å', ' ', 'Ｋ', ' ', 'ｎ', ' ', 'け', ' ', 'の', ' ', 'る', ' ', 'サ', ' ', 'ヒ', ' ', 'ワ', ' ', 'Χ', ' ', 'В', ' ', 'Ю', ' ', 'ъ', ' ', '┯', ' ', '7', ' ', 'P', ' ', 'i', ' ', '〇', ' ', '」', ' ', '％', ' ', '⊆', ' ', '‰', ' ', 'Ｌ', ' ', 'ｏ', ' ', 'げ', ' ', 'は', ' ', 'れ', ' ', 'ザ', ' ', 'ビ', ' ', 'ヰ', ' ', 'Ψ', ' ', 'Г', ' ', 'Я', ' ', 'ы', ' ', '┨', ' ', '8', ' ', 'Q', ' ', 'j', ' ', 'ー', ' ', '『', ' ', '＃', ' ', '⊇', ' ', '♯', ' ', 'Ｍ', ' ', 'ｐ', ' ', 'こ', ' ', 'ば', ' ', 'ろ', ' ', 'シ', ' ', 'ピ', ' ', 'ヱ', ' ', 'Ω', ' ', 'Д', ' ', 'а', ' ', 'ь', ' ', '┷', ' ', '9', ' ', 'R', ' ', 'k', ' ', '―', ' ', '』', ' ', '＆', ' ', '⊂', ' ', '♭', ' ', 'Ｎ', ' ', 'ｑ', ' ', 'ご', ' ', 'ぱ', ' ', 'ゎ', ' ', 'ジ', ' ', 'フ', ' ', 'ヲ', ' ', 'α', ' ', 'Е', ' ', 'б', ' ', 'э', ' ', '┿', 'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', '、', '。', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    }
    v1.prototype.encryption = function (before, key) {
        var after = [];
        for (var i = 0; i < before.length; ++i) {
            var result = this.alphaset.indexOf(before.charAt(i));
            if (result === -1) {
                result = 0;
            }
            else {
                result *= key;
            }
            after.push(result.toString(16));
        }
        return after.join(',');
    };
    v1.prototype.decryption = function (before, key) {
        var after = before.split(',');
        for (var i = 0; i < after.length; ++i) {
            var result = void 0;
            try {
                result = this.alphaset[parseInt(after[i], 16) / key];
            }
            catch (_a) {
                result = '?';
            }
            after[i] = result;
        }
        return after.join('');
    };
    return v1;
}());
var ver1 = new v1();
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.e = function () {
        after__.value = ver1.encryption(before__.value, parseFloat(key__.value));
        return;
    };
    UI.d = function () {
        before__.value = ver1.decryption(after__.value, parseFloat(key__.value));
        return;
    };
    UI.cc = function (v) {
        customcss.setAttribute('href', v);
        return;
    };
    return UI;
}());
ccc.addEventListener('change', function (event) {
    UI.cc(ccc.value);
});
