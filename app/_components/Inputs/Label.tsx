interface LabelProps {
    name: string;
    label?: string;
    Component?: React.FC;
  }
  
  const Label = ({ name, label, Component }: LabelProps) => {
    if (!label) {
      return null;
    }
  
    const LabelComponent = Component ?? "div";
  
    return (
      <LabelComponent className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      </LabelComponent>
    );
  };
  
  export default Label;
  