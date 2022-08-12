import React from "react";

function Projects({ data }) {
  if (data) {
    var projects = data.projects.map((project) => {
      var title = project.title;
      var projectImage = "images/portfolio/" + project.image;
      var url = project.url;
      return (
        <div key={title}>
          <div>
            <a href={url}>
              <img
                className="rounded-xl hover:opacity-40 duration-300"
                src={projectImage}
                alt={title}
              />
              <div className="flex justify-center items-center font-bold hover:underline">
                {title}
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="projects">
      <div className="">
        <div className="mt-8 mb-8 text-center font-bold text-black text-4xl">
          <h1>Projects</h1>
        </div>
        <div className="overflow-hidden p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {projects}
        </div>
      </div>
    </section>
  );
}

export default Projects;

//flex flex-col items-center w-screen h-96 mt-28 mb-40
// w-auto h-auto flex flex-row justify-center items-center
