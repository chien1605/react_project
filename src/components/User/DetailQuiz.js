import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getDataQuiz} from "../../services/apiService";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    useEffect(async () => {
        let res = await getDataQuiz(quizId);
    }, [quizId])
    return (
        <div className="detail-quiz-container">
            DetailQuiz
        </div>
    )
}

export default DetailQuiz;