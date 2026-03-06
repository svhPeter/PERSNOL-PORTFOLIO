export default function Loader() {
  return (
    <div className="page-loading_loader">
      <svg viewBox="0 0 240 240" height={96} width={96} className="pl">
        <circle strokeLinecap="round" strokeDashoffset={-330} strokeDasharray="0 660" strokeWidth={20} stroke="#B7AB98" fill="none" r={105} cy={120} cx={120} className="pl__ring pl__ring--a" />
        <circle strokeLinecap="round" strokeDashoffset={-110} strokeDasharray="0 220" strokeWidth={20} stroke="#7e7e7e" fill="none" r={35} cy={120} cx={120} className="pl__ring pl__ring--b" />
        <circle strokeLinecap="round" strokeDasharray="0 440" strokeWidth={20} stroke="#686868" fill="none" r={70} cy={120} cx={85} className="pl__ring pl__ring--c" />
        <circle strokeLinecap="round" strokeDasharray="0 440" strokeWidth={20} stroke="#B7AB98" fill="none" r={70} cy={120} cx={155} className="pl__ring pl__ring--d" />
      </svg>
    </div>
  )
}
