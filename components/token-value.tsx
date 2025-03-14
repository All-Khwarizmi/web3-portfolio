export function TokenValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-black/30 border border-purple-900/30 rounded-md p-2 text-center">
      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
        {value}
      </div>
      <div className="text-xs text-gray-400 font-mono">{label}</div>
    </div>
  )
}

