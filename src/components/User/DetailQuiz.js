import {useParams, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {getDataQuiz} from "../../services/apiService";
import _ from "lodash";
import './DetailQuiz.scss';

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    console.log(location);
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
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr/>
                <div className="q-body">
                    <img/>
                </div>
                <div className="q-content">
                    <div className="question">Question 1: How are you doing?</div>
                    <div className="answer">
                        <div className="a-child">A. dm</div>
                        <div className="a-child">B. vvf</div>
                        <div className="a-child">c. fvvf</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz;