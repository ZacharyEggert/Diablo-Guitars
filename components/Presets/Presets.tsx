import React from 'react';
import { emptyContext, IFormContext, UseFormContext } from '../../lib/context';
import formPresets from './formPresets';

interface Props {
    alterForm: (Object: Partial<IFormContext>) => void;
    alterOther:(Object:Partial<IFormContext>)=>void; 
}
const Presets: React.FC<Props> = ({ alterForm, alterOther }) => {
    const selectRef = React.useRef<HTMLSelectElement>(null);

    const formState = UseFormContext();

    const printStateToConsole = () => {
        console.log({ formState });
    };

    const handlePresetApplication = () => {
        const selectedPreset = selectRef.current.value;
        const preset = formPresets[selectedPreset];
        alterForm(preset);
        alterOther(emptyContext);
    };

    return (
        <div className='py-4 text-white'>
            <h3 className='inline mx-12 text-2xl font-bold'>Presets</h3>
            <select
                className='mx-4 bg-gray-800 w-72'
                defaultValue='select...'
                ref={selectRef}>
                <option value='select...' disabled>
                    Select a preset
                </option>
                {Object.values(formPresets).map((preset, i) => (
                    <option
                        key={i}
                        value={Object.keys(formPresets)[i]}
                        className='bg-gray-800'>
                        {preset.name}
                    </option>
                ))}
            </select>
            <button onClick={handlePresetApplication} className='mx-4'>
                Apply
            </button>
            <button onClick={printStateToConsole} className='float-right mx-4'>
                Make Preset
            </button>
        </div>
    );
};

export default Presets;