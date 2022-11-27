import { useEffect, useState } from "react";
import Button from "./builder-components/Button";
import Card from "./builder-components/Card";
import Description from "./builder-components/Description";
import InputLongText from "./builder-components/InputLongText";
import InputNumber from "./builder-components/InputNumber";
import InputShortText from "./builder-components/InputShortText";
import Text from "./builder-components/Text";
import Title from "./builder-components/Title";

export default function Builder(config) {
  // TO-DO: Keep track of every input component's
  // values in a dictionary so that

  const [state, setState] = useState({
    values: {},
  });
  const data = config.config;

  const updateState = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [key]: value,
      },
    }));
  };

  useEffect(() => {
    console.log(data.title, state);
  }, [state]);

  const renderComponent = (component, identifier) => {
    switch (component.type) {
      case "button":
        return (
          <Button
            key={identifier}
            title={component.title}
            style={component.style}
            callback={component.callback}
          />
        );
      case "input-long-text":
        return (
          <InputLongText
            key={identifier}
            placeholder={component.placeholder}
            title={component.title}
            description={component.description}
            style={component.style}
            identifier={identifier}
            updateState={updateState}
          />
        );
      case "input-number":
        return (
          <InputNumber
            key={identifier}
            placeholder={component.placeholder}
            title={component.title}
            description={component.description}
            style={component.style}
            updateState={updateState}
          />
        );
      case "input-short-text":
        return (
          <InputShortText
            key={identifier}
            placeholder={component.placeholder}
            title={component.title}
            description={component.description}
            style={component.style}
            updateState={updateState}
          />
        );
      case "text":
        return (
          <Text
            key={identifier}
            text={component.placeholder}
            description={component.description}
            style={component.style}
          />
        );
      default:
        return <div>Unknown component type: {component.type}</div>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card>
        {data.title && <Title title={data.title} />}
        {data.description && <Description text={data.description} />}
        {data.components.map((component, identifier) =>
          renderComponent(component, identifier)
        )}
      </Card>
    </div>
  );
}
