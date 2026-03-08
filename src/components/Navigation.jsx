import { useNavigate } from "react-router"
const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className="fab">

                <button tabIndex={0} role="button" className="btn btn-lg btn-circle bg-primary border-0 tooltip tooltip-secondary tooltip-left text-white" data-tip="Navigate">
                    <img
                        src="/nav.svg"
                        alt="nav"
                    />
                </button>

            <div className="tooltip tooltip-secondary tooltip-left text-white" data-tip="Homepage">
                <button onClick={() => navigate('/')} className="btn btn-lg btn-circle border-primary border-2">
                    <img
                        src="/home.svg"
                        alt="Home"
                        width={40}
                        height={40}
                    />
                </button>
            </div>

            <div className="tooltip tooltip-secondary tooltip-left text-white" data-tip="About me">
                <button onClick={() => navigate('/about')} className="btn btn-lg btn-circle border-primary border-2">
                    <img
                        src="/about.svg"
                        alt="About"
                    />
                </button>
            </div>

            <div className="tooltip tooltip-secondary tooltip-left text-white" data-tip="See my projects">
                <button onClick={() => navigate('/projects')} className="btn btn-lg btn-circle border-primary border-2">
                    <img
                        src="/project.svg"
                        alt="Project"
                        width={39}
                        height={39}
                    />
                </button>
            </div>

            <div className="tooltip tooltip-secondary tooltip-left text-white" data-tip="Work and experience">
                <button onClick={() => navigate('/experience')} className="btn btn-lg btn-circle border-primary border-2">
                    <img
                        src="/exp.svg"
                        alt="Experience"
                        width={60}
                        height={60}
                    />
                </button>
            </div>

            <div className="tooltip tooltip-secondary tooltip-left text-white" data-tip="Connect me">
                <button onClick={() => navigate('/contact')} className="btn btn-lg btn-circle border-primary border-2">
                    <img
                        src="/contact.svg"
                        alt="Contact"
                    />
                </button>
            </div>
        </div>
    )
}

export default Navigation