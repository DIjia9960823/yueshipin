// ===== Mock Data: 广东省教师招聘公告 =====
var MOCK_JOBS = [
  {
    id: 1,
    title: "广州市教育局2026年直属学校公开招聘事业编制教师358人公告",
    school: "广州市教育局",
    city: "广州",
    level: "直属学校",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 358,
    education: "本科及以上",
    deadline: "2026-11-20",
    recordedAt: "2026-11-03",
    source: "广州市教育局官网",
    sourceUrl: "http://jyj.gz.gov.cn",
    content: {
      intro: "为加强广州市教育系统人才队伍建设，根据事业单位公开招聘有关规定，广州市教育局决定面向社会公开招聘直属学校事业编制教师358名。",
      targets: ["2026年毕业生", "社会人员"],
      positions: "语文、数学、英语、物理、化学、生物、政治、历史、地理、体育、音乐、美术、信息技术等学科",
      conditions: [
        "具有中华人民共和国国籍，遵守宪法和法律",
        "具有良好的品行和职业道德",
        "具有相应学科的教师资格证",
        "年龄在35周岁以下（1991年11月1日后出生）",
        "具有本科及以上学历、学士及以上学位"
      ],
      process: "网上报名 → 资格初审 → 笔试 → 资格复审 → 面试 → 体检 → 考察 → 公示 → 聘用",
      signup: "2026年11月10日9:00至11月20日17:00",
      contact: "广州市教育局人事处（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 2,
    title: "深圳市2026年公开招聘教师1200人公告（市属+区属）",
    school: "深圳市教育局",
    city: "深圳",
    level: "市/区属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 1200,
    education: "本科及以上",
    deadline: "2026-11-25",
    recordedAt: "2026-11-03",
    source: "深圳市教育局官网",
    sourceUrl: "http://szeb.sz.gov.cn",
    content: {
      intro: "深圳市2026年度公办中小学教师招聘工作正式启动，共招聘教师1200名，涉及市属及各区属学校。",
      targets: ["2026年应届毕业生", "社会人员"],
      positions: "涵盖中小学全学科，重点招聘理科类、艺术类教师",
      conditions: [
        "本科及以上学历，学士及以上学位",
        "取得相应教师资格证",
        "年龄一般不超过35周岁",
        "应届毕业生须在2026年8月31日前取得学历学位证书"
      ],
      process: "网上报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月15日至11月25日",
      contact: "深圳市教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 3,
    title: "珠海市教育局2026年面向应届毕业生招聘公办中小学教师200人公告",
    school: "珠海市教育局",
    city: "珠海",
    level: "区属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 200,
    education: "本科及以上",
    deadline: "2026-11-15",
    recordedAt: "2026-11-02",
    source: "珠海市教育局官网",
    sourceUrl: "http://zhjyj.zhuhai.gov.cn",
    content: {
      intro: "珠海市教育局2026年面向全国应届毕业生招聘公办中小学教师200名，纳入事业编制管理。",
      targets: ["2026年应届毕业生（含择业期）"],
      positions: "中小学各学科教师",
      conditions: [
        "2026年应届毕业生，本科及以上学历",
        "具有相应教师资格证或已通过教师资格考试",
        "年龄在30周岁以下"
      ],
      process: "网上报名 → 资格审查 → 面试 → 签约",
      signup: "2026年11月8日至11月15日",
      contact: "珠海市教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 4,
    title: "佛山市南海区教育系统2026年公开招聘教师450人公告",
    school: "佛山市南海区教育局",
    city: "佛山",
    level: "区属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 450,
    education: "本科及以上",
    deadline: "2026-11-18",
    recordedAt: "2026-11-02",
    source: "南海区教育局官网",
    sourceUrl: "http://nanhai.gov.cn",
    content: {
      intro: "佛山市南海区教育系统2026年面向社会公开招聘公办中小学教师450名。",
      targets: ["应届毕业生", "社会人员"],
      positions: "中小学全学科，其中小学教师280名，中学教师170名",
      conditions: [
        "本科及以上学历",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月10日至11月18日",
      contact: "南海区教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 5,
    title: "东莞市教育局2026年上半年公开招聘事业编制教师353人公告",
    school: "东莞市教育局",
    city: "东莞",
    level: "市直属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 353,
    education: "本科及以上",
    deadline: "2026-11-12",
    recordedAt: "2026-11-01",
    source: "东莞市教育局官网",
    sourceUrl: "http://edu.dg.gov.cn",
    content: {
      intro: "东莞市教育局2026年上半年面向社会公开招聘公办学校事业编制教师353名。",
      targets: ["社会人员", "应届毕业生"],
      positions: "中小学各学科教师",
      conditions: [
        "具有中华人民共和国国籍",
        "本科及以上学历、学士及以上学位",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "网上报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月5日至11月12日",
      contact: "东莞市教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 6,
    title: "中山大学2026年公开招聘各类岗位人员公告（含教师岗）",
    school: "中山大学",
    city: "广州",
    level: "部属高校",
    stage: "高校",
    category: "高校招聘",
    establishment: "事业编/长聘",
    headcount: 500,
    education: "博士研究生",
    deadline: "2026-12-31",
    recordedAt: "2026-11-03",
    source: "中山大学官网",
    sourceUrl: "http://sysu.edu.cn",
    content: {
      intro: "中山大学2026年度面向海内外公开招聘教学科研人员、博士后及各类专业技术人员。",
      targets: ["海内外高层次人才", "应届博士毕业生"],
      positions: "教授、副教授、讲师、博士后、实验技术岗等",
      conditions: [
        "具有博士学位（部分岗位可放宽至硕士）",
        "在相关学科领域有较好的研究成果",
        "符合岗位具体要求"
      ],
      process: "网上报名 → 院系初审 → 面试答辩 → 学校审批",
      signup: "全年招聘，招满即止",
      contact: "中山大学人事处（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 7,
    title: "华南理工大学2026年教学科研岗位招聘公告",
    school: "华南理工大学",
    city: "广州",
    level: "部属高校",
    stage: "高校",
    category: "高校招聘",
    establishment: "事业编/长聘",
    headcount: 200,
    education: "博士研究生",
    deadline: "2026-12-15",
    recordedAt: "2026-11-02",
    source: "华南理工大学官网",
    sourceUrl: "http://scut.edu.cn",
    content: {
      intro: "华南理工大学2026年度面向海内外招聘教学科研人员，欢迎优秀青年学者加盟。",
      targets: ["海内外博士毕业生", "具有科研经历的学者"],
      positions: "各学院教学科研岗",
      conditions: [
        "具有博士学位",
        "具有较强的科研能力和发展潜力",
        "年龄一般不超过35周岁（副教授可放宽至40岁）"
      ],
      process: "网上报名 → 资格审查 → 面试 → 录用",
      signup: "2026年10月至12月15日",
      contact: "华南理工大学人事处（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 8,
    title: "深圳市龙华区2026年秋季面向应届毕业生招聘公办教师150人公告",
    school: "深圳市龙华区教育局",
    city: "深圳",
    level: "区属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 150,
    education: "本科及以上",
    deadline: "2026-11-10",
    recordedAt: "2026-11-01",
    source: "龙华区政府在线",
    sourceUrl: "http://longhua.gov.cn",
    content: {
      intro: "深圳市龙华区2026年秋季面向2026年应届毕业生公开招聘公办学校教师150名。",
      targets: ["2026年应届毕业生"],
      positions: "中小学各学科教师",
      conditions: [
        "2026年应届毕业生，本科及以上学历",
        "取得相应教师资格证",
        "年龄30周岁以下"
      ],
      process: "报名 → 资格审查 → 面试 → 体检 → 公示",
      signup: "2026年11月1日至11月10日",
      contact: "龙华区教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 9,
    title: "惠州市惠阳区2026年公开招聘公办中小学教师80人公告",
    school: "惠州市惠阳区教育局",
    city: "惠州",
    level: "区属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 80,
    education: "本科及以上",
    deadline: "2026-11-08",
    recordedAt: "2026-10-31",
    source: "惠阳区教育局官网",
    sourceUrl: "http://huiyang.gov.cn",
    content: {
      intro: "惠州市惠阳区2026年公开招聘公办中小学教师80名，纳入事业单位编制管理。",
      targets: ["社会人员", "应届毕业生"],
      positions: "小学语文、数学、英语，中学各学科",
      conditions: [
        "本科及以上学历",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月1日至11月8日",
      contact: "惠阳区教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 10,
    title: "汕头市教育局2026年直属学校公开招聘教师120人公告",
    school: "汕头市教育局",
    city: "汕头",
    level: "市直属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 120,
    education: "本科及以上",
    deadline: "2026-11-22",
    recordedAt: "2026-11-01",
    source: "汕头市教育局官网",
    sourceUrl: "http://jyj.shantou.gov.cn",
    content: {
      intro: "汕头市教育局2026年直属学校面向社会公开招聘教师120名。",
      targets: ["应届毕业生", "社会人员"],
      positions: "中小学各学科教师",
      conditions: [
        "本科及以上学历",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月12日至11月22日",
      contact: "汕头市教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 11,
    title: "暨南大学2026年公开招聘教学科研人员公告",
    school: "暨南大学",
    city: "广州",
    level: "部属高校",
    stage: "高校",
    category: "高校招聘",
    establishment: "事业编/长聘",
    headcount: 150,
    education: "博士研究生",
    deadline: "2026-12-20",
    recordedAt: "2026-11-03",
    source: "暨南大学官网",
    sourceUrl: "http://jnu.edu.cn",
    content: {
      intro: "暨南大学2026年度面向海内外公开招聘教学科研人员150名。",
      targets: ["海内外博士毕业生", "高层次人才"],
      positions: "各学院教学科研岗",
      conditions: [
        "具有博士学位",
        "在相关领域有一定研究基础",
        "符合各岗位具体条件"
      ],
      process: "报名 → 资格审查 → 面试 → 录用",
      signup: "2026年11月至12月20日",
      contact: "暨南大学人事处（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 12,
    title: "广东实验中学2026年公开招聘事业编制教师35人公告",
    school: "广东实验中学",
    city: "广州",
    level: "省直属",
    stage: "中学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 35,
    education: "本科及以上",
    deadline: "2026-11-28",
    recordedAt: "2026-11-02",
    source: "广东实验中学官网",
    sourceUrl: "http://gdsyzx.edu.cn",
    content: {
      intro: "广东实验中学2026年面向社会公开招聘事业编制教师35名。",
      targets: ["应届毕业生", "社会人员"],
      positions: "中学各学科教师",
      conditions: [
        "本科及以上学历，学士及以上学位",
        "具有相应教师资格证",
        "年龄35周岁以下，高级职称可放宽至40岁"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月18日至11月28日",
      contact: "广东实验中学（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 13,
    title: "湛江市教育局2026年直属学校公开招聘教师200人公告",
    school: "湛江市教育局",
    city: "湛江",
    level: "市直属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 200,
    education: "本科及以上",
    deadline: "2026-11-30",
    recordedAt: "2026-11-03",
    source: "湛江市教育局官网",
    sourceUrl: "http://jyj.zhanjiang.gov.cn",
    content: {
      intro: "湛江市教育局2026年直属学校面向社会公开招聘教师200名。",
      targets: ["应届毕业生", "社会人员"],
      positions: "中小学各学科教师",
      conditions: [
        "本科及以上学历",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月20日至11月30日",
      contact: "湛江市教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 14,
    title: "华南师范大学2026年教学科研岗位招聘公告",
    school: "华南师范大学",
    city: "广州",
    level: "省属高校",
    stage: "高校",
    category: "高校招聘",
    establishment: "事业编/长聘",
    headcount: 180,
    education: "博士研究生",
    deadline: "2026-12-10",
    recordedAt: "2026-11-01",
    source: "华南师范大学官网",
    sourceUrl: "http://scnu.edu.cn",
    content: {
      intro: "华南师范大学2026年度面向海内外招聘教学科研人员。",
      targets: ["海内外博士毕业生"],
      positions: "各学院教学科研岗",
      conditions: [
        "具有博士学位",
        "具有良好的科研能力",
        "年龄一般不超过35周岁"
      ],
      process: "报名 → 资格审查 → 面试 → 录用",
      signup: "2026年10月至12月10日",
      contact: "华南师范大学人事处（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 15,
    title: "江门市蓬江区2026年公开招聘公办中小学教师60人公告",
    school: "江门市蓬江区教育局",
    city: "江门",
    level: "区属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 60,
    education: "本科及以上",
    deadline: "2026-11-05",
    recordedAt: "2026-10-30",
    source: "蓬江区政府官网",
    sourceUrl: "http://pengjiang.gov.cn",
    content: {
      intro: "江门市蓬江区2026年公开招聘公办中小学教师60名。",
      targets: ["应届毕业生", "社会人员"],
      positions: "中小学各学科教师",
      conditions: [
        "本科及以上学历",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年10月28日至11月5日",
      contact: "蓬江区教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 16,
    title: "深圳职业技术学院2026年公开招聘教师及管理人员80人公告",
    school: "深圳职业技术学院",
    city: "深圳",
    level: "市属高校",
    stage: "高职",
    category: "高校招聘",
    establishment: "事业编",
    headcount: 80,
    education: "硕士及以上",
    deadline: "2026-11-28",
    recordedAt: "2026-11-02",
    source: "深圳职业技术学院官网",
    sourceUrl: "http://szpt.edu.cn",
    content: {
      intro: "深圳职业技术学院2026年面向社会公开招聘教师及管理人员80名。",
      targets: ["社会人员", "应届毕业生"],
      positions: "专业教师、实训教师、管理岗",
      conditions: [
        "硕士及以上学历（部分岗位本科可报）",
        "具有相关工作经验优先",
        "年龄40周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月18日至11月28日",
      contact: "深圳职业技术学院人事处（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 17,
    title: "中山市教育和体育局2026年直属学校公开招聘教师100人公告",
    school: "中山市教育和体育局",
    city: "中山",
    level: "市直属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 100,
    education: "本科及以上",
    deadline: "2026-11-16",
    recordedAt: "2026-11-01",
    source: "中山市教体局官网",
    sourceUrl: "http://jytyj.zs.gov.cn",
    content: {
      intro: "中山市教育和体育局2026年直属学校公开招聘教师100名。",
      targets: ["应届毕业生", "社会人员"],
      positions: "中小学各学科教师",
      conditions: [
        "本科及以上学历",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月6日至11月16日",
      contact: "中山市教体局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 18,
    title: "广州市番禺区2026年公开招聘公办教师500人公告",
    school: "广州市番禺区教育局",
    city: "广州",
    level: "区属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 500,
    education: "本科及以上",
    deadline: "2026-11-21",
    recordedAt: "2026-11-03",
    source: "番禺区政府官网",
    sourceUrl: "http://panyu.gov.cn",
    content: {
      intro: "广州市番禺区2026年面向社会公开招聘公办中小学教师500名。",
      targets: ["应届毕业生", "社会人员"],
      positions: "中小学各学科教师，其中小学300名，中学200名",
      conditions: [
        "本科及以上学历",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月11日至11月21日",
      contact: "番禺区教育局（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 19,
    title: "广东工业大学2026年公开招聘教学科研人员120人公告",
    school: "广东工业大学",
    city: "广州",
    level: "省属高校",
    stage: "高校",
    category: "高校招聘",
    establishment: "事业编/长聘",
    headcount: 120,
    education: "博士研究生",
    deadline: "2026-12-05",
    recordedAt: "2026-10-31",
    source: "广东工业大学官网",
    sourceUrl: "http://gdut.edu.cn",
    content: {
      intro: "广东工业大学2026年度面向海内外公开招聘教学科研人员120名。",
      targets: ["海内外博士毕业生"],
      positions: "各学院教学科研岗",
      conditions: [
        "具有博士学位",
        "具有较强的科研能力",
        "年龄35周岁以下"
      ],
      process: "报名 → 资格审查 → 面试 → 录用",
      signup: "2026年10月至12月5日",
      contact: "广东工业大学人事处（具体联系方式以官方公告原文为准）"
    }
  },
  {
    id: 20,
    title: "梅州市教育局2026年直属学校公开招聘教师90人公告",
    school: "梅州市教育局",
    city: "梅州",
    level: "市直属",
    stage: "中小学",
    category: "公办编制",
    establishment: "正式编",
    headcount: 90,
    education: "本科及以上",
    deadline: "2026-11-26",
    recordedAt: "2026-11-02",
    source: "梅州市教育局官网",
    sourceUrl: "http://jyj.meizhou.gov.cn",
    content: {
      intro: "梅州市教育局2026年直属学校面向社会公开招聘教师90名。",
      targets: ["应届毕业生", "社会人员"],
      positions: "中小学各学科教师",
      conditions: [
        "本科及以上学历",
        "具有相应教师资格证",
        "年龄35周岁以下"
      ],
      process: "报名 → 笔试 → 面试 → 体检 → 公示",
      signup: "2026年11月16日至11月26日",
      contact: "梅州市教育局（具体联系方式以官方公告原文为准）"
    }
  }
];

// 筛选选项
const FILTER_OPTIONS = {
  city: ["全部", "广东", "广州", "深圳", "珠海", "佛山", "东莞", "惠州", "汕头", "湛江", "江门", "中山", "梅州"],
  stage: ["全部", "中小学", "小学", "中学", "高校", "高职", "幼儿园"],
  establishment: ["全部", "正式编", "事业编/长聘", "合同制"],
  category: ["全部", "公办编制", "高校招聘"],
  education: ["全部", "本科及以上", "硕士及以上", "博士", "大专及以上"]
};
