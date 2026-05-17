using EvaluationSystem.Core.Interfaces;
using System.Threading.Tasks;

namespace EvaluationSystem.Application.Services
{
    public class ScoreCalculatorService : IScoreCalculatorService
    {
        private readonly IMLogicEngine _logicEngine; // ML.NET 로직 엔진 주입 가정

        public ScoreCalculatorService(IMLogicEngine logicEngine)
        {
            _logicEngine = logicEngine;
        }

        public async Task<double> CalculateScoreAsync(object inputData, object criteria)
        {
            // 1. 입력 데이터와 기준을 ML.NET 모델에 맞게 변환 (ML.NET 통합 지점)
            var processedData = await _logicEngine.ProcessInputForMLNet(inputData);
            var criteriaVector = await _logicEngine.ProcessCriteriaForMLNet(criteria);

            // 2. 핵심 비즈니스 로직 수행 (여기서는 예시로 단순 합산 로직을 ML.NET 결과에 연동)
            double rawScore = processedData.ToDouble() + criteriaVector.ToDouble();

            // 3. 최종 점수 계산 및 모델 예측 통합 (ML.NET의 핵심 역할)
            var finalPrediction = await _logicEngine.Predict(processedData, criteriaVector);
            
            return finalPrediction.PredictedScore;
        }
    }
}