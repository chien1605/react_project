import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getDataQuiz} from "../../services/apiService";
import _ from "lodash";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    useEffect(async () => {
        let res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescriptions, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescriptions = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers);
                    })
                    return  {questionId: key, answers, questionDescriptions, image}

                })
                .value()
            console.log(data);
        }
    }, [quizId])
    return (
        <div className="detail-quiz-container">
            DetailQuiz
        </div>
    )
}

export default DetailQuiz;