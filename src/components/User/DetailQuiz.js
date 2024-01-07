import {useParams, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDataQuiz} from "../../services/apiService";
import _ from "lodash";
import './DetailQuiz.scss';
import Question from "./Question";
import data from "bootstrap/js/src/dom/data";

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    console.log(location);
    const quizId = params.id;
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);
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
                        item.answers.isSelected = false;
                        answers.push(item.answers);
                    })
                    return  {questionId: key, answers, questionDescriptions, image}

                })
                .value()
            console.log(data);
            setDataQuiz(data);
        }
    }, [quizId])

    const handlePre = () => {
            if (index - 1 < 0) return;

            setIndex(index - 1);
    }
    
    const handleNex = () => {
        if (dataQuiz && dataQuiz.length > index + 1)
            setIndex(index + 1);
    }

    const handleCheckBox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionId === +questionId);
        if (question && question.answers) {
            question.answers = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId);
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    }
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
                    <Question
                        index={index}
                        handleCheckBox={handleCheckBox}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}/>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => handlePre()}>Prev</button>
                    <button className="btn btn-primary" onClick={() => handleNex()}>Next</button>

                    <button className="btn btn-warning" onClick={() => handleNex()}>Finish</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz;