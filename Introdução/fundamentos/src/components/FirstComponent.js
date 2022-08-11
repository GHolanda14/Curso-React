import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return(
        <div className="FirstComponent">
            <h1>Meu primeiro componente</h1>
            <h2>testando apenas uma coisa</h2>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;