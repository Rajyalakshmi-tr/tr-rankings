type Props = {
  label: string;
  value: number;
};

export default function ScoreBar({ label, value }: Props) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{label}</span>
        <span className="font-bold">{value}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-700 h-3 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}