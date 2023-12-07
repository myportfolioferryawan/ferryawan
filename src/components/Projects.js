import React, {useState, useEffect} from "react";

// Import data 
import {projectsData} from '../data';

// Import project Nav-bar
import {projectsNav} from '../data';
// import componen
import Project from './Project';

const Projects = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        //  get projects base on item 
        if (item.name === 'all') {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter(
                (project) => {
                    return project.category.toLowerCase() === item.name;
                }
            );
                setProjects(newProjects);
        }
    },[item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index)
    }

    return (
        <div>
        <nav className="mb-12 pt-12 max-w-xl mx-auto">
            <ul className="flex flex-col md:flex-row justify-evenly items-center text-white ">
                {projectsNav.map((item, index) => {
                    return (
                        <li onClick={(e) => {
                            handleClick(e, index);
                        }} 
                        className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                        key={index}>{item.name}</li>
                    );
                })}
            </ul>
        </nav>
        { /* Project grid */}
        <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
            {projects.map ((item) => {
                return (
                    <Project item={item} key={item.id}  />
                );
            })}
        </section>
        </div>
    );
}

export default Projects;