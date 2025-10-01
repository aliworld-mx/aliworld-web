import { useState } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
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
    placeholder?: string;
}

const ComboBox = ({
    name,
    label,
    value,
    onChange,
    multiple = true,
    options,
    placeholder = "Escribe para buscar...",
}: ComboBoxProps) => {
    const [query, setQuery] = useState("");

    const filteredOptions =
        query === ""
            ? options.slice(0, 10)
            : options.filter((option) =>
                option.label.toLowerCase().includes(query.toLowerCase()),
            ).slice(0, 15);

    const onRemove = (id: string) => {
        onChange(value.filter((option) => option.id !== id));
    }

    const isSelected = (option: ComboBoxOption) => {
        return value.some(selectedOption => selectedOption.id === option.id);
    }

    return (
        <Combobox
            as="div"
            id={name}
            value={value}
            onChange={onChange}
            multiple={multiple}
            onClose={() => setQuery('')}
            className="space-y-3"
        >
            <>
                <Label
                    name={name}
                    label={label}
                />
                
                {/* Selected Options Tags */}
                {value.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {value.map((option) => (
                            <span 
                                key={option.id} 
                                className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1.5 rounded-full border border-primary-200 hover:bg-primary-200 transition-colors duration-200"
                            >
                                <span className="truncate max-w-[120px]">{option.label}</span>
                                <button
                                    type="button"
                                    onClick={() => onRemove(option.id)}
                                    className="inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-primary-300 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-primary-500"
                                    aria-label={`Remover ${option.label}`}
                                >
                                    <XMarkIcon className="w-3 h-3" />
                                </button>
                            </span>
                        ))}
                    </div>
                )}

                {/* Combobox Input */}
                <div className="relative">
                    <ComboboxInput
                        className="w-full rounded-lg border-0 py-3 pl-4 pr-10 text-neutral-900 bg-white shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6 transition-all duration-200"
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={placeholder}
                        displayValue={() => query}
                    />
                    <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-lg px-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <ChevronDownIcon
                            className="h-5 w-5 text-neutral-400 group-hover:text-neutral-600 transition-colors duration-200"
                            aria-hidden="true"
                        />
                    </ComboboxButton>

                    {/* Dropdown Options */}
                    <ComboboxOptions 
                        transition 
                        className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-xl ring-1 ring-black/5 border border-neutral-200 transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 focus:outline-none sm:text-sm"
                    >
                        {filteredOptions.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-3 px-4 text-neutral-500 text-center">
                                <span>No se encontraron resultados.</span>
                                <p className="text-xs mt-1">Intenta con otro término de búsqueda.</p>
                            </div>
                        ) : (
                            filteredOptions.map((option) => (
                                <ComboboxOption
                                    key={option.id}
                                    value={option}
                                    className="group relative cursor-pointer select-none py-3 px-4 text-neutral-900 hover:bg-primary-50 data-selected:bg-primary-100 data-focus:bg-primary-50 transition-colors duration-150"
                                >
                                    {({ focus, selected }) => (
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={classNames(
                                                    "block truncate",
                                                    isSelected(option) ? "font-semibold text-primary-900" : "font-normal",
                                                    focus ? "text-primary-800" : "text-neutral-900"
                                                )}
                                            >
                                                {option.label}
                                            </span>
                                            
                                            {isSelected(option) && (
                                                <CheckIcon 
                                                    className="h-5 w-5 text-primary-600" 
                                                    aria-hidden="true" 
                                                />
                                            )}
                                        </div>
                                    )}
                                </ComboboxOption>
                            ))
                        )}
                    </ComboboxOptions>
                </div>

                {/* Helper Text */}
                {options.length > 0 && (
                    <p className="text-xs text-neutral-500 mt-2">
                        {value.length > 0 
                            ? `${value.length} seleccionado${value.length > 1 ? 's' : ''} de ${options.length} disponibles`
                            : `${options.length} opciones disponibles`
                        }
                    </p>
                )}
            </>
        </Combobox>
    );
};

export default ComboBox;
