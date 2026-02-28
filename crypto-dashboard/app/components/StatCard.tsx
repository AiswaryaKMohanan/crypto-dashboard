interface Props{
    label :string,
    value:string,
 positive?: boolean;
}
export default function StatCard({label,value,positive}:Props){
    return( <div className="bg-white shadow-md rounded-xl p-4">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p
        className={`text-lg font-semibold ${
          positive === undefined
            ? ""
            : positive
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {value}
      </p>
    </div>)
}