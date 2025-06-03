import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import Label from "./Label";
import { ComboBoxOption } from "@/app/_types/input/ComboBoxOption";
import { classNames } from "@/app/_utils/classNames";

interface ComboBoxProps {
    name: string;
    label: string;
    value: ComboBoxOption[];
    onChange: (value: ComboBoxOption[]) => void;
    options: ComboBoxOption[];
    multiple?: boolean;
}

const ComboBox = ({
    name,
    label,
    value,
    onChange,
    multiple,
    options,
}: ComboBoxProps) => {
    const [query, setQuery] = useState("");

    const filteredOptions =
        query === ""
            ? options.slice(0, 5)
            : options.filter((option) =>
                option.label.toLowerCase().includes(query.toLowerCase()),
            ).slice(0, 5);

    const onRemove = (id: string) => {
        onChange(value.filter((option) => option.id !== id));
    }

    return (
        <Combobox
            as="div"
            id={name}
            value={value}
            onChange={onChange}
            multiple={multiple}
            onClose={() => setQuery('')}
            className="space-y-4"
        >
            <>
                <Label
                    name={name}
                    label={label}
                />
                {value.length > 0 && (
                    <ul className="flex flex-row flex-wrap gap-2">
                        {value.map((option) => (
                            <li key={option.id} onClick={() => onRemove(option.id)} className="bg-sky-600 text-xs text-white w-max p-2 space-4 rounded-full cursor-pointer hover:bg-sky-800">{option.label}</li>
                        ))}
                    </ul>
                )}
                <div className="relative mt-2">
                    <ComboboxInput
                        className="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Escribe para buscar..."
                    />
                    <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </ComboboxButton>
                    <ComboboxOptions transition className="origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-30 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredOptions.map((option) => (
                            <ComboboxOption
                                key={option.id}
                                value={option}
                                className="relative select-none py-2 px-4 cursor-pointer text-gray-900 data-selected:bg-sky-100 hover:bg-sky-100"
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={classNames(
                                                "block truncate",
                                                selected ? "font-semibold" : "",
                                            )}
                                        >
                                            {option.label}
                                        </span>
                                    </>
                                )}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </div>
            </>
        </Combobox>
    );
};

export default ComboBox;
