namespace EvaluationSystem.Domain.Models
{
    public class Score
    {
        public int Id { get; set; }
        public double CalculatedScore { get; set; }
        public string Result { get; set; } // 예: Pass, Fail, NeedsReview
        public DateTime CalculationDate { get; set; } = DateTime.UtcNow;
    }
}