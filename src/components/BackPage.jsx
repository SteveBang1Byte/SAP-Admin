import { useNavigate } from "react-router";

const BackPage = () => {

    let navigate = useNavigate();

    return (

          <button onClick={() => navigate(-1)} className="flex items-center py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-iemXMA text-slate-700 text-sm "><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span className="text-slate-700 text-sm font-normal ml-2" > Back </span>
          </button> 

    );
};

export default BackPage;