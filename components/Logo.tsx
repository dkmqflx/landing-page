import { Mountain } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-emerald-500">
        <Mountain className="h-6 w-6" />
      </div>
      <span className="text-lg font-bold">Road to Road</span>
    </div>
  );
};

export default Logo;
