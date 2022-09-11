import { WebDevProject } from "./WebDevProject";

type Props = {
  projects: Array<any>;
};

const WebDevProjects = ({ projects }: Props) => {
  return (
    <>
      <div className=" relative bg-brandPrimary">
        <h1 className="text-4xl md:text-6xl text-brandTextPrimary font-brandSecondary font-extrabold text-center background pt-32 pb-16">
          Projects
        </h1>
      </div>
      {projects
        .slice(0)
        .reverse()
        .map(({ id, name, description, image, url }, index) => (
          <WebDevProject
            key={id}
            id={index}
            name={name}
            description={description}
            image={image}
            url={url}
          />
        ))}
    </>
  );
};

export default WebDevProjects;
