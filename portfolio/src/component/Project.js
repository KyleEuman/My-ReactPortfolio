/* eslint-disable no-unused-vars */
import  React, {useEffect, useState} from 'react';
import project from '../../portfolio/schemas/project.js';
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    return (
        <main className="bg-white min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center">My Projects</h1>
                <h2 className="text-lg text-blue-600 flex justify-center mb-12">Welcome to my Projects page</h2>
                <section className="grid grid-cols-2 gap-8">
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-white text-3xl font-bold mb-2 hover:text-black">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-white text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-white leading-relaxed">
                                {project.description}
                                </p>
                                <a href={project.link}rel="noopener noreferrer" target="_blank" classname="text-white font-bold hover:underline hover:text-black"
                                >
                                    View The Project{" "}
                            <span role="img" aria-label="right pointer">
                                👉
                                </span>
                            </a>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}