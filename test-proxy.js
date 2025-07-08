const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");

const proxyAgent = new HttpsProxyAgent("http://127.0.0.1:7890");

console.log(
  "正在使用独立的 Node.js 脚本，通过代理 http://127.0.0.1:7890 尝试访问 Google...",
);

async function testFetch() {
  try {
    const response = await axios.get("https://www.google.com", {
      httpsAgent: proxyAgent, // 强制 axios 使用我们的代理 agent
      timeout: 15000, // 设置15秒超时
    });

    if (response.status >= 200 && response.status < 300) {
      console.log("✅ [成功]：测试脚本成功通过代理访问了 Google！");
      console.log("响应状态:", response.status);
    } else {
      console.error("❌ [失败]：收到了一个非成功的响应状态码。");
      console.error("响应状态:", response.status);
    }
  } catch (error) {
    console.error("❌ [严重失败]：在测试脚本运行时发生了错误。");
    if (error.code) {
      console.error("错误代码:", error.code);
    }
    if (error.message) {
      console.error("错误信息:", error.message);
    }
  }
}

testFetch();
