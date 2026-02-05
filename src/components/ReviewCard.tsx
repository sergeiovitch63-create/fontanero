import { GlassCard } from "@/components";
import { Review } from "@/types/site";
import { Star } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-white/20 text-white/20"
        }`}
      />
    ));
  };

  return (
    <GlassCard>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {renderStars(review.rating)}
          </div>
          <span className="text-white/60 text-xs">{review.date}</span>
        </div>
        <h4 className="text-white font-semibold text-sm">{review.author}</h4>
        <p className="text-white/90 text-sm leading-relaxed">{review.text}</p>
      </div>
    </GlassCard>
  );
}

