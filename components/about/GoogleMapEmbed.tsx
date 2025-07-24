export function GoogleMapEmbed() {
  return (
    <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-italian-green to-italian-red">
        <div className="text-center text-white">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-xl font-bold mb-2">Papa Dimos Location</h3>
          <p className="text-sm opacity-90">123 Italian Street, Cairo, Egypt</p>
          <p className="text-xs mt-2 opacity-75">Interactive map would be embedded here</p>
        </div>
      </div>
    </div>
  )
}
