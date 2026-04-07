import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 模块分布数据
const moduleData = [
  { name: '员工管理', value: 33 },
  { name: '招聘', value: 25 },
  { name: '薪酬', value: 18 },
  { name: '考勤', value: 17 },
  { name: '消息', value: 6 },
  { name: '培训', value: 4 },
  { name: '其它类型', value: 26 },
];

// 业务线分布数据
const businessLineData = [
  { name: '产品自提需求', value: 33, percentage: 31.7 },
  { name: 'C&B', value: 20, percentage: 19.2 },
  { name: 'TA部门', value: 11, percentage: 10.6 },
  { name: 'Network部门', value: 10, percentage: 9.6 },
  { name: '其他', value: 29, percentage: 28.9 },
];

// 优先级分布数据
const priorityData = [
  { name: '高', value: 42 },
  { name: '中', value: 38 },
  { name: '低', value: 24 },
];

// 色彩方案
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#8dd1e1', '#a4de6c'];

// 国家功能使用数据
const countryUsageData = [
  { name: '泰国', usage: 58, dailyAverage: 2.6,上线日期: '2026-03-05' },
  { name: '菲律宾', usage: 578, dailyAverage: 7.3,上线日期: '2026-01-07' },
];

// 查询日志节省工时数据
const logQueryData = [
  { country: '泰国', faceLog: 34, leaveArchive: 19, total: 53, monthlyAverage: 21.2, savedHours: 3.53 },
  { country: '菲律宾', faceLog: 39, leaveArchive: 18, total: 57, monthlyAverage: 22.8, savedHours: 3.8 },
  { country: '马来西亚', faceLog: 18, leaveArchive: 0, total: 18, monthlyAverage: 7.2, savedHours: 1.2 },
  { country: '总计', faceLog: 91, leaveArchive: 37, total: 128, monthlyAverage: 51.2, savedHours: 8.53 },
];

// 自动恢复在职节省工时数据
const autoRestoreData = [
  { country: '泰国', restoreCount: 113, savedHours: 18.83, monthlySavedHours: 10.09 },
  { country: '菲律宾', restoreCount: 293, savedHours: 48.83, monthlySavedHours: 26.16 },
];

// 电子合同节省工时数据
const contractData = [
  { name: '传统方式', timePerContract: 20, totalContracts: 22, totalTime: 440 },
  { name: '自动发送', timePerContract: 0, totalContracts: 22, totalTime: 0 },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 添加页面载入动画
    if (headerRef.current) {
      headerRef.current.classList.add('animate-fadeIn');
    }
    
    // 滚动到顶部
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
       {/* 顶部导航 */}
      <nav className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="https://lf-code-agent.coze.cn/obj/x-ai-cn/294545100034/attachment/Logo_FlashExpress-PNG@White_20260407095715.png" alt="Flash Express" className="h-8 mr-4" />
              <h1 className="text-xl font-bold">2026年Q1季度总结</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#module-overview" className="font-medium hover:text-blue-500 transition-colors">上线需求概况</a>
              <a href="#okr-progress" className="font-medium hover:text-blue-500 transition-colors">OKR进展汇报</a>
              <a href="#challenges" className="font-medium hover:text-blue-500 transition-colors">挑战与成长</a>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'}`}
              >
                {theme === 'dark' ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 头部区域 */}
        <div ref={headerRef} className="text-center mb-12 opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">2026年Q1季度总结汇报</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">数据截至：2026-03-31</p>
        </div>
        
         {/* 上线需求概况 */}
        <section id="module-overview" className={`mb-16 p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <i className="fas fa-rocket mr-2 text-blue-500"></i>上线需求概况
          </h3>
          <p className="text-lg mb-8">Q1共计完成上线：<span className="text-2xl font-bold text-blue-600 dark:text-blue-400">104</span> 个需求</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 按模块分布 */}
            <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h4 className="text-xl font-semibold mb-4">按模块分布</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={moduleData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {moduleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4">
                {moduleData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 按业务线分布 */}
            <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h4 className="text-xl font-semibold mb-4">按业务线分布</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={businessLineData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                  >
                    {businessLineData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4">
                {businessLineData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.value} ({item.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 按优先级分布 */}
            <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h4 className="text-xl font-semibold mb-4">按优先级分布</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={priorityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8">
                    {priorityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4">
                {priorityData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span>{item.name}优先级</span>
                    </div>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
         {/* OKR进展汇报 */}
        <section id="okr-progress" className={`mb-16 p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <i className="fas fa-chart-line mr-2 text-green-500"></i>OKR进展汇报
          </h3>
          
          {/* 一线业务部门重要支持 */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-building mr-2 text-purple-500"></i>一线业务部门重要支持
            </h4>
            
            {/* 外协员工审批流信息查询 - 表格呈现 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">泰国、菲律宾 HCM支持外协员工审批流信息查询：取数使用率</h5>
              <div className="overflow-x-auto">
                <table className={`min-w-full divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                  <thead>
                    <tr>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>国家</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>上线日期</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>累计使用次数</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>日均使用次数</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                    {countryUsageData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? (theme === 'dark' ? 'bg-gray-700' : 'bg-white') : (theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50')}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.上线日期}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.usage}次</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.dailyAverage}次</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <p>数据来源：nigix日志："/outsourcing-order/getAuditList"访问情况</p>
              </div>
            </div>
            
            {/* 修改考勤批量处理中日薪制员工逻辑更新 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">修改考勤批量处理中日薪制员工逻辑更新</h5>
              <p className="mb-4">2026-01-28日上线，上线后经历2个泰国发薪周期，总计通过批量处理上传过日薪制员工187人次，相当于消除了潜在异常数据187次，保证了数据准确性。</p>
            </div>
            
            {/* 转岗后（月薪转日薪）OT倍数变化 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">转岗后（月薪转日薪）OT倍数变化</h5>
              <p className="mb-4">泰国目前拦截3例，均为月薪员工转日薪员工场景，避免薪资错误发放。</p>
            </div>
            
            {/* 泰国、菲律宾 HUB恢复BY数据支持批量处理工号查看 - 表格呈现 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">泰国、菲律宾 HUB恢复BY数据支持批量处理工号查看</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">泰国数据（2026-03-05至2026-03-27）</h6>
                  <div className="overflow-x-auto">
                    <table className={`min-w-full divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                      <tbody className={`divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                        <tr className={theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">总操作次数</td>
                          <td className="px-4 py-2 whitespace-nowrap">126次</td>
                        </tr>
                        <tr className={theme === 'dark' ? 'bg-gray-700' : 'bg-white'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">批量处理次数</td>
                          <td className="px-4 py-2 whitespace-nowrap">41次</td>
                        </tr>
                        <tr className={theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">批量处理工号数</td>
                          <td className="px-4 py-2 whitespace-nowrap">239个</td>
                        </tr>
                        <tr className={theme === 'dark' ? 'bg-gray-700' : 'bg-white'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">节省操作次数</td>
                          <td className="px-4 py-2 whitespace-nowrap">198次</td>
                        </tr>
                        <tr className={theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">节省工时</td>
                          <td className="px-4 py-2 whitespace-nowrap">约1.1小时</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-sm">批量处理占比32.54%</p>
                </div>
                
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">菲律宾数据（2026-03-05至2026-03-27）</h6>
                  <div className="overflow-x-auto">
                    <table className={`min-w-full divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                      <tbody className={`divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                        <tr className={theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">总操作次数</td>
                          <td className="px-4 py-2 whitespace-nowrap">511次</td>
                        </tr>
                        <tr className={theme === 'dark' ? 'bg-gray-700' : 'bg-white'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">批量处理次数</td>
                          <td className="px-4 py-2 whitespace-nowrap">103次</td>
                        </tr>
                        <tr className={theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">批量处理工号数</td>
                          <td className="px-4 py-2 whitespace-nowrap">4073个</td>
                        </tr>
                        <tr className={theme === 'dark' ? 'bg-gray-700' : 'bg-white'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">节省操作次数</td>
                          <td className="px-4 py-2 whitespace-nowrap">3970次</td>
                        </tr>
                        <tr className={theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}>
                          <td className="px-4 py-2 whitespace-nowrap font-medium">节省工时</td>
                          <td className="px-4 py-2 whitespace-nowrap">约22.05小时</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-sm">批量处理占比20.16%</p>
                </div>
              </div>
            </div>
            
            {/* 泰国新增外协国籍选项 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">泰国新增外协国籍选项（用于区分外劳员工）</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg text-center ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'} shadow`}>
                  <p className="font-medium">泰国籍劳工申请</p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4,252</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2026-03-05至2026-03-30</p>
                </div>
                <div className={`p-4 rounded-lg text-center ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-50'} shadow`}>
                  <p className="font-medium">外籍劳工申请</p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">791</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2026-03-05至2026-03-30</p>
                </div>
              </div>
            </div>
            
            {/* 系统支持新公司、新职位增加 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">系统支持新公司、新职位增加，配合公司政策落地</h5>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>泰国重启Van Feeder职位，2026-01-14完成系统改造</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>泰国Bulk Bulk公司项目流程线上化支持，2026-01-28完成系统改造</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>泰国新增 HUB Driver Staf/Leader职位，2026-02-24完成系统改造</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-hourglass-half text-yellow-500 mr-2 mt-1"></i>
                  <span>泰国汽运 Fleet Management 转移新公司 Premier Partner，正在进行中，预计Q2完成上线</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 职能部门重要支持 */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-users-cog mr-2 text-orange-500"></i>职能部门重要支持
            </h4>
            
            {/* 根据当地法规与公司政策变化 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">根据当地法规与公司政策变化，系统配套进行支持</h5>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-calendar-check text-green-500 mr-2 mt-1"></i>
                  <span>泰国允许试用期员工申请陪产假 2026/03/12上线</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-calendar-check text-green-500 mr-2 mt-1"></i>
                  <span>泰国个人代理合同新增罚款补充协议 2026/01/01上线</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-calendar-check text-green-500 mr-2 mt-1"></i>
                  <span>菲律宾产假、陪产假、丧假、女性特殊假规则变更 2026/01/22上线</span>
                </li>
              </ul>
            </div>
            
            {/* 查询打卡/刷脸日志 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">支持功能查询打卡/刷脸日志和查询已归档的请假记录</h5>
              <div className="overflow-x-auto">
                <table className={`min-w-full divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                  <thead>
                    <tr>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>国家</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>刷脸日志</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>请假归档记录</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>总计</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>月均</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>节省工时</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                    {logQueryData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? (theme === 'dark' ? 'bg-gray-700' : 'bg-white') : (theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50')}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.country}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.faceLog}次</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.leaveArchive}次</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.total}次</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.monthlyAverage}次/月</td>
                         <td className="px-6 py-4 whitespace-nowrap text-green-600 dark:text-green-400">{item.savedHours}h/月</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">上线时间：2026-1-14，数据截至：2026-03-30（共75天）</p>
            </div>
            
            {/* 请假通过后自动恢复在职 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">请假通过后自动恢复在职</h5>
              <div className="overflow-x-auto">
                <table className={`min-w-full divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                  <thead>
                    <tr>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>国家</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>恢复人数</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>节省工时</th>
                      <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300 bg-gray-600' : 'text-gray-500 bg-gray-100'}`}>估算后月均节省</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y divide-gray-200 ${theme === 'dark' ? 'divide-gray-700' : ''}`}>
                    {autoRestoreData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? (theme === 'dark' ? 'bg-gray-700' : 'bg-white') : (theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50')}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.country}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.restoreCount}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-green-600 dark:text-green-400">{item.savedHours}h</td>
                         <td className="px-6 py-4 whitespace-nowrap text-green-600 dark:text-green-400">{item.monthlySavedHours}h</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">上线时间：2026-1-28，数据截至：2026-03-25（共56天）</p>
            </div>
            
            {/* 消息相关优化成果 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">消息相关优化成果</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">支持PDF消息与签名文件合并生成一个整体文件进行下载</h6>
                  <p className="text-sm mb-2">提升文件权威性与法律效益</p>
                  <div className="mt-2">
                    <p className="text-sm mb-1">泰国：累计下载签字证明24次，批量下载1次，涉及42人签字文件</p>
                    <p className="text-sm">菲律宾：累计下载签字证明31次，批量下载9次，涉及1294人签字文件</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">数据来源：2026年3月一整月</p>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">预览功能优化消息发送体验</h6>
                  <div className="mt-2">
                    <p className="text-sm mb-1">泰国：累计使用预览功能9次，涉及预览消息7条</p>
                    <p className="text-sm">菲律宾：累计使用预览功能6次，涉及预览消息2条</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">上线时间：2026-03-19至2026-03-31</p>
                    <p className="text-sm mt-2 text-green-600 dark:text-green-400">上线初期用户已经主动使用，达到一定效果，长期使用情况乐观</p>
                  </div>
                </div>
              </div>
            </div>
            
             {/* 菲律宾总部员工自动发送电子合同 */}
             <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
               <h5 className="text-lg font-medium mb-4">菲律宾总部员工自动发送电子合同</h5>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-50'} shadow flex flex-col items-center justify-center text-center`}>
                   <div className="text-4xl font-bold text-green-600 dark:text-green-400">22</div>
                   <div className="text-lg mt-2">累计自动发送</div>
                   <div className="text-sm mt-4">（2026-03-19 至 2026-03-30，共17天）</div>
                 </div>
                 <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow flex flex-col justify-center`}>
                   <p className="mb-2">主要集中部门：Fleet Management（18份）</p>
                   <p className="mb-2">线上处理每份合同耗时：<span className="font-bold text-green-600 dark:text-green-400">≈0分钟</span></p>
                   <p className="mb-2">传统方式每份合同耗时：<span className="font-bold">20分钟</span></p>
                   <p className="font-medium text-green-600 dark:text-green-400">月均节省约13小时</p>
                 </div>
               </div>
             </div>
            
            {/* 修改考勤工具增加批量修改班次 */}
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">修改考勤工具增加批量修改班次</h5>
              <p className="mb-4">2026-03-19上线至2026-03-30截止，泰国目前没有使用，菲律宾使用2次，累计修改11名员工，上线时间较短，需要进一步观察使用情况。</p>
            </div>
          </div>
          
          {/* 产品主动推进项目 */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-lightbulb mr-2 text-yellow-500"></i>产品主动推进项目
            </h4>
            
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">用户体验增强</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">APP端水印优化</h6>
                  <p className="text-sm mb-2">在原有工号、日期的基础上，增加国家码和时间显示</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">作用：提升效率，反馈截图更清晰，有效增强问题查询速度，减少基础问题提问</p>
                </div>
                
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">可选班次维护查询历史记录</h6>
                  <p className="text-sm mb-2">解决历史维护可选班次范围靠"猜"的困境，直观展现配置值</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">维护更清晰方便，所有国家均已上线</p>
                </div>
                
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">HCM轮休管理页面交互优化</h6>
                  <p className="text-sm mb-2">支持列隐藏/显示，根据使用习惯设置关注的列</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">扩大有效区域展示范围，所有国家均已上线</p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow mb-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">安全类升级</h5>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                <p className="mb-2">过滤掉停业网点、虚拟网点打卡坐标</p>
                <p className="text-green-600 dark:text-green-400 flex items-center">
                  <i className="fas fa-shield-alt mr-2"></i>
                  作用：避免虚假打卡，减少员工作弊风险
                </p>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h5 className="text-lg font-medium mb-4">FHR商业化升级</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">考勤数据展示优化</h6>
                  <p className="text-sm">增加"按考勤周期"展示考勤数据，让用户除了用自然月查看多一种视角，根据不同公司配置的考勤周期进行考勤统计与查看，为用户</p>
                </div>
                
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">消息菜单筛选增强</h6>
                  <p className="text-sm">增加筛选发布人、发布时间、发布状态筛选项，方便用户操作</p>
                </div>
                
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'} shadow`}>
                  <h6 className="font-medium mb-2">请假额度适配优化</h6>
                  <p className="text-sm">按小时折算，再也不会超过设置的每日最大值上限</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 任务池完成情况 */}
        <section className={`mb-16 p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <i className="fas fa-tasks mr-2 text-purple-500"></i>任务池完成情况
          </h3>
          
          <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="flex items-center mb-4">
              <i className="fas fa-globe text-blue-500 mr-3 text-xl"></i>
              <h4 className="text-xl font-semibold">Flash HR官网完成调研，设计初版完成</h4>
            </div>
            <p className="mb-4">已完成初步的官网调研工作，并完成了设计初版。</p>
            <div className="flex items-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                <i className="fas fa-hourglass-half mr-1"></i>
                待完善后进入研发阶段
              </span>
            </div>
          </div>
        </section>
        
        {/* 部门贡献 */}
        <section className={`mb-16 p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <i className="fas fa-users mr-2 text-indigo-500"></i>部门贡献
          </h3>
          
          <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="flex items-center mb-4">
              <i className="fab fa-line text-green-500 mr-3 text-xl"></i>
              <h4 className="text-xl font-semibold">Line调研完成初版，启发思路</h4>
            </div>
            <p>为后续招聘落地抛砖引玉，提供了宝贵的参考方向。</p>
          </div>
        </section>
        
         {/* 挑战与成长 */}
        <section id="challenges" className={`mb-16 p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <i className="fas fa-mountain mr-2 text-red-500"></i>挑战与成长
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 成长 */}
            <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h4 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400 flex items-center">
                <i className="fas fa-arrow-up mr-2"></i>成长
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>利用AI生成SQL语句提取数据</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>利用AI清洗整理了数据内容</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>利用AI制作可呈现的网页内容</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <span>留了更多思考时间给内容本身，能够专注于需求本身的总结</span>
                </li>
              </ul>
            </div>
            
            {/* 挑战 */}
            <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h4 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400 flex items-center">
                <i className="fas fa-exclamation-triangle mr-2"></i>挑战
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-orange-500 mr-2 mt-1"></i>
                  <span>Claude限于账号问题，没能成功落地，及时调整AI方向，转用Coze扣子完成了相似内容制作</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-orange-500 mr-2 mt-1"></i>
                  <span>OSM系统作为一个未知领域，由快递产品侧交接给HR 产品侧，是机遇也是挑战</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 总结 - 扩写 */}
          <div className={`mt-8 p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-flag-checkered mr-2 text-blue-600 dark:text-blue-400"></i>总结
            </h4>
             <p className="text-lg">在挑战中成长，在调整中前行。AI工具不是简单的效率外挂，而是推动思维方式升级的重要引擎。未来，需要将继续以开放的心态拥抱技术变化，把AI更深入地融入工作流中，探索更多可能的落地场景。</p>
          </div>
        </section>
      </main>
      
      {/* 页脚 */}
      <footer className={`py-6 border-t ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 HR产品团队. 版权所有.</p>
        </div>
      </footer>
    </div>
  );
}