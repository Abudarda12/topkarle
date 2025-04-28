import './footer.css';


export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <h1>topKarle.com</h1>
                </div>
                <div className="footer-menu">
                    <a href="#">Syllabus</a>
                    <a href="#">Courses</a>
                    <a href="#">Exams</a>
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-social">
                   <i class="fa-brands fa-linkedin"></i>
                   <i class="fa-brands fa-github"></i>
                   <i class="fa-brands fa-instagram"></i>
                     
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2023 topKarle.com. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}