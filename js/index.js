// 设置时区为GMT+8
function getChinaTime(date) {
  return new Date(
    date.getTime() + date.getTimezoneOffset() * 60000 + 8 * 3600000
  );
}

// 计算两个日期之间的天数差
function getDaysDiff(startDate, endDate) {
  // 将日期转换为GMT+8时间
  const start = getChinaTime(new Date(startDate));
  const end = getChinaTime(new Date(endDate));

  // 获取日期部分（忽略时间）
  const startDay = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate()
  );
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  // 计算天数差
  const diffTime = Math.abs(endDay - startDay);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

// 初始化日期
const beginDate = new Date("1997-09-24"); // 示例开始日期
const endDate = new Date("2097-09-24"); // 示例结束日期
const today = new Date(); // 当前日期

// 计算总天数和已完成天数
const totalDays = getDaysDiff(beginDate, endDate);
let completedDays = getDaysDiff(beginDate, today);

// 确保完成天数不超过总天数
if (completedDays > totalDays) {
  completedDays = totalDays;
}

// 计算进度百分比
const progressPercent = totalDays > 0 ? (completedDays / totalDays) * 100 : 0;
const formattedPercent = progressPercent.toFixed(1);

// 更新进度条和数值
const progressBar = document.getElementById("progressBar");
const progressValue = document.getElementById("progressValue");

setTimeout(() => {
  progressBar.style.width = formattedPercent + "%";
  progressBar.setAttribute("aria-valuenow", formattedPercent);
  progressValue.textContent = Math.floor(formattedPercent);
}, 100); // 延迟一点时间让页面先渲染
