import './AboutIntro.css';
import paintCanImage from '../assets/top-view-paint-can.jpg';

const AboutIntro = () => {
    return (
        <section className="about-intro">
            <div className="about-intro__container">

                <div className="about-intro__content-wrapper">
                    {/* Left Column: Text Content */}
                    <div className="about-intro__text-column">
                        <h2 className="about-intro__section-title">About the Company</h2>
                        <h1 className="about-intro__company-name">Yashwanth Colour Coatings</h1>

                        <div className="about-intro__body">
                            <p>
                                Yashwanth Colour Coatings, based in Chennai, Tamil Nadu, is a trusted manufacturer of synthetic enamel paints, spray paints, and powder coating services. We specialize in providing high-quality, durable, and innovative coating solutions for industrial, commercial, and residential applications.
                            </p>
                            <p>
                                Our products deliver superior finish, excellent coverage, and long-lasting protection, while our powder coating services ensure eco-friendly and durable finishes using advanced technology.
                            </p>
                            <p>
                                Driven by quality, precision, and timely delivery, Yashwanth Colour Coatings continues to be a reliable partner for clients across Tamil Nadu.
                            </p>
                        </div>

                        <div className="about-intro__slogan">
                            Yashwanth Colour Coatings – Quality, Protection, and Colour that Lasts.
                        </div>

                        <div className="about-intro__established">
                            <span className="label">Year of Establishment:</span>
                            <span className="year">1995</span>
                        </div>
                    </div>

                    {/* Right Column: Paint Can Image */}
                    <div className="about-intro__image-column">
                        <img
                            src={paintCanImage}
                            alt="Yashwanth Colour Coatings Paint Can"
                            className="about-intro__image"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutIntro;
