import React from 'react';
import './SkillsTable.css'
import SkillsModal from './SkillsModal';

interface Skill {
    title?: string;
    description?: string;
}

interface DynamicTableProps {
    languages: Skill[];
    libraries: Skill[];
    tools: Skill[];
    other: Skill[];
}

// TODO: Allow for any number of columns, not just 4
const DynamicTable: React.FC<DynamicTableProps> = ({
    languages,
    libraries,
    tools,
    other,
}) => {
    const maxLength = Math.max(
        languages.length,
        libraries.length,
        tools.length,
        other.length
    );

    const getCell = (arr: Skill[] | undefined, index: number) => {
        const skill = arr?.[index];
        return skill ? (
            <SkillsModal title={skill.title} description={skill.description} />
        ) : (
            null
        );
    };


    return (
        <div className="table-wrapper">
            <table className="dynamic-table">
                <thead>
                    <tr>
                        <th>Languages</th>
                        <th>Libraries</th>
                        <th>Tools</th>
                        <th>Other</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: maxLength }).map((_, index) => (
                        <tr key={index}>
                            <td data-label="Languages">{getCell(languages, index)}</td>
                            <td data-label="Libraries">{getCell(libraries, index)}</td>
                            <td data-label="Tools">{getCell(tools, index)}</td>
                            <td data-label="Other">{getCell(other, index)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DynamicTable;
