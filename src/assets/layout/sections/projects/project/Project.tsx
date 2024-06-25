


type ProjectPropsType  = {
    src:string
    description:string
};
export const Project = (props: ProjectPropsType) => {
    return (
        <div>
            <img src={props.src} alt=" "/>
            <p>{props.description}</p>
            <button>Edit for you</button>
            <button>see preview</button>
        </div>
    );
};