import './mbm.scss'

export function RechargeButton(props: { className?: string }) {
  return (
    <button className={`gpt-button color-button`}>
      充值我的账户
      <div className="my-count-hover"></div>
      <span className="light iconfont icon-shandian"></span>
    </button>
  )
}
