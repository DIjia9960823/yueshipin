// ===== Mock API Layer =====
// 模拟后端接口，实际项目中替换为真实 fetch 请求

const API = {
  // 获取公告列表（支持筛选）
  getJobs(filters = {}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let list = [...MOCK_JOBS];

        // 关键词搜索
        if (filters.keyword) {
          const kw = filters.keyword.toLowerCase();
          list = list.filter(j =>
            j.title.toLowerCase().includes(kw) ||
            j.school.toLowerCase().includes(kw) ||
            j.content?.positions?.toLowerCase().includes(kw)
          );
        }
        // 城市
        if (filters.city && filters.city !== "全部") {
          list = list.filter(j => j.city === filters.city);
        }
        // 学段
        if (filters.stage && filters.stage !== "全部") {
          list = list.filter(j => j.stage === filters.stage || j.stage.includes(filters.stage));
        }
        // 编制
        if (filters.establishment && filters.establishment !== "全部") {
          list = list.filter(j => j.establishment.includes(filters.establishment) || filters.establishment.includes(j.establishment));
        }
        // 类别
        if (filters.category && filters.category !== "全部") {
          list = list.filter(j => j.category === filters.category);
        }
        // 学历
        if (filters.education && filters.education !== "全部") {
          list = list.filter(j => j.education === filters.education);
        }
        // 只看正式编
        if (filters.onlyFormal) {
          list = list.filter(j => j.establishment.includes("正式编") || j.establishment.includes("事业编"));
        }
        // 即将截止（7天内）
        if (filters.onlySoon) {
          const today = new Date();
          list = list.filter(j => {
            if (!j.deadline) return false;
            const days = (new Date(j.deadline) - today) / (1000 * 60 * 60 * 24);
            return days >= 0 && days <= 7;
          });
        }
        // 隐藏已截止
        if (filters.hideExpired) {
          const today = new Date();
          list = list.filter(j => !j.deadline || new Date(j.deadline) >= today);
        }

        // 排序：按录入日期降序
        list.sort((a, b) => b.recordedAt.localeCompare(a.recordedAt));

        resolve({
          list,
          total: list.length
        });
      }, 200);
    });
  },

  // 获取公告详情
  getJobDetail(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const job = MOCK_JOBS.find(j => j.id === Number(id));
        resolve(job || null);
      }, 150);
    });
  },

  // 获取统计数据
  getStats() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const today = new Date();
        resolve({
          total: MOCK_JOBS.length,
          formalCount: MOCK_JOBS.filter(j => j.establishment.includes("正式编") || j.establishment.includes("事业编")).length,
          soonCount: MOCK_JOBS.filter(j => {
            if (!j.deadline) return false;
            const days = (new Date(j.deadline) - today) / (1000 * 60 * 60 * 24);
            return days >= 0 && days <= 7;
          }).length
        });
      }, 100);
    });
  }
};
