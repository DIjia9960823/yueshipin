// ===== Mock API Layer =====
// 模拟后端接口，实际项目中替换为真实 fetch 请求

// 判断公告属性：列表打标签和筛选共用，避免两处逻辑不一致
function isFormalJob(j) {
  const est = j.establishment || "";
  return est.includes("正式编") || est.includes("事业编");
}
function isSoonJob(j) {
  if (!j.deadline) return false;
  const days = (new Date(j.deadline) - new Date()) / (1000 * 60 * 60 * 24);
  return days >= 0 && days <= 7;
}
function isPrivateJob(j) {
  // 万行民办列表抓来的职位自带 isPrivate 标记，比猜名字可靠
  if (j.isPrivate === true) return true;
  return ((j.school || "") + (j.source || "") + (j.title || "")).includes("民办");
}

// 对外只展示官方来源：万行等第三方的抓取结果先压着，核验到官方原文才放出来
function isPublished(j) {
  if (j.pendingReview === true) return false;
  if ((j.source || "").includes("万行")) return false;
  if ((j.sourceUrl || "").includes("job910")) return false;
  return true;
}

const API = {
  // 获取公告列表（支持筛选）
  getJobs(filters = {}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let list = MOCK_JOBS.filter(isPublished);

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
          list = list.filter(isFormalJob);
        }
        // 即将截止（7天内）
        if (filters.onlySoon) {
          list = list.filter(isSoonJob);
        }
        // 只看民办
        if (filters.onlyPrivate) {
          list = list.filter(isPrivateJob);
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
        const job = MOCK_JOBS.filter(isPublished).find(j => j.id === Number(id));
        resolve(job || null);
      }, 150);
    });
  },

  // 获取统计数据
  getStats() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const today = new Date();
        const published = MOCK_JOBS.filter(isPublished);
        resolve({
          total: published.length,
          formalCount: published.filter(j => j.establishment.includes("正式编") || j.establishment.includes("事业编")).length,
          soonCount: published.filter(j => {
            if (!j.deadline) return false;
            const days = (new Date(j.deadline) - today) / (1000 * 60 * 60 * 24);
            return days >= 0 && days <= 7;
          }).length
        });
      }, 100);
    });
  }
};
