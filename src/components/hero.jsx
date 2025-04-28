import './hero.css';
import Pyq from './pyq';

export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-text">
                    <h1>topKarle.com</h1>
                    <p>Get ready for your exams with topKarle.com</p>
                    <p>अब पढ़ाई शुरू करें <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzfZHDofi97EF0i3Qa_XuH3O37woRakwSHY1h4qd9tp34TbGD8vWccpo&s" alt="gif" /></p>
                    <p>ab syllabus  ka kya kroge kuchh PYQ's paper hai wahi solve karle bhai</p>
                </div>
                <Pyq />

            </div>
        </>
    )
}