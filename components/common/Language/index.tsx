'use client'

import { SupportedLanguages, languageMap } from "@/constants";
import { changeLanguage } from "@/lib/actions/language";
import { useCallback, useMemo } from "react";
import Select, { GroupBase, Props as SelectProps } from 'react-select';


type Option = { value: SupportedLanguages, label: string };
type Props = {
    className?: string
    lang: string;
}

const options = (Object.entries(languageMap) as [SupportedLanguages, string][])
    .map<Option>(([value, label]) => ({ value, label }));

export default function Language({ className, lang }: Props) {
    const handleSelect = useCallback((newValue: SupportedLanguages | null) => {
        if (newValue === null) {
            return;
        }

        changeLanguage(newValue)
    }, []);

    const selectProps: SelectProps<Option, false, GroupBase<Option>> = useMemo(() => ({
        defaultValue: options.find((item) => item.value === lang) ?? null,
        options,
        onChange: (newValue) => newValue && handleSelect(newValue.value),
    }), [lang, handleSelect])

    return <Select
        {...selectProps}
        isSearchable={false}
        className={`w-fit ${className ?? ''}`}
        classNames={{
            container: () => '!z-50',
            option: () => "text-center",
            indicatorsContainer: () => "!hidden",
        }}
    />;
}