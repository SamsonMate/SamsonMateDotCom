import React, { type ReactNode } from 'react';
import './SkillsTable.css'
import SkillsModal from './SkillsModal';

interface Skill {
    title?: string;
    description?: string;
}

interface DynamicTableProps {
    languages: Skill[];
    frontEndSkills: Skill[];
    backEndSkills: Skill[];
    networkingSkills: Skill[];
    interpersonalSkills: Skill[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({
    languages,
    frontEndSkills,
    backEndSkills,
    networkingSkills,
    interpersonalSkills,
}) => {
    const maxLength = Math.max(
        languages.length,
        frontEndSkills.length,
        backEndSkills.length,
        networkingSkills.length,
        interpersonalSkills.length
    );

    const getCell = (arr: Skill[], index: number) => 
    <SkillsModal title={arr[index].title} description={arr[index].description}/>;

    return (
        <div className="table-wrapper">
            <table className="dynamic-table">
                <thead>
                    <tr>
                        <th>Languages</th>
                        <th>Front-End</th>
                        <th>Back-End</th>
                        <th>Networking</th>
                        <th>Interpersonal</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: maxLength }).map((_, index) => (
                        <tr key={index}>
                            <td data-label="Languages">{getCell(languages, index)}</td>
                            <td data-label="Front-End">{getCell(frontEndSkills, index)}</td>
                            <td data-label="Back-End">{getCell(backEndSkills, index)}</td>
                            <td data-label="Networking">{getCell(networkingSkills, index)}</td>
                            <td data-label="Interpersonal">{getCell(interpersonalSkills, index)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DynamicTable;
