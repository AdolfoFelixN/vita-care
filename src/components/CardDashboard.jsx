
function CardDashboard({title, quantity}) {
  return (
    <div className="bg-white rounded-sm font-semibold p-4 shadow-sm">
      <p className="text-gray-400 text-md">{title}</p>
      <p className="font-semibold text-lg">{quantity}</p>
      <span className="text-xs text-gray-400">+12% vs mes anterior</span>
    </div>
  );
}

export default CardDashboard;
