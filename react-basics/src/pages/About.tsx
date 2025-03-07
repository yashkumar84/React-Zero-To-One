import { useSearchParams } from "react-router-dom";

const About = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  const y = params.get("y");

  return (
    <div>
      About {query} {y}
    </div>
  );
};

export default About;
