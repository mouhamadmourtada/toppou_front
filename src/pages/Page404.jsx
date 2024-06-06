// une page 404
import { Link } from "react-router-dom";
export const Page404 = () => {

    return (
        <div>
            404 Not Found
            {/* buton pour retourner à l'accueil */}
            <button className="btn btn-primary">
                {/* link */}
                <Link to ="/">
                    Retourner à l'accueil
                </Link>
            </button>
        </div>
    )
}