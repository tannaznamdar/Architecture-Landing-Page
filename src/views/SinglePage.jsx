import { useParams } from "react-router";

export default function SinglePage() {

    const{category} = useParams()

    return (
      <>
        <div className="container mx-auto">
           <h1> Single Page {category} </h1>
        </div>
      </>
    );
  }
  