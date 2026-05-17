using System.Threading.Tasks;

namespace EvaluationSystem.Core.Interfaces
{
    public interface IScoreCalculatorService
    {
        /// <summary>
        /// 입력된 데이터와 기준에 따라 최종 평가 점수를 계산합니다.
        /// </summary>
        /// <param name="inputData">평가에 사용될 원본 데이터.</param>
        /// <param name="criteria">평가 기준 및 가중치.</param>
        /// <returns>최종 계산된 점수.</returns>
        Task<double> CalculateScoreAsync(object inputData, object criteria);
    }
}