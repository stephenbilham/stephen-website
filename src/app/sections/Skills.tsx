import React, { FC } from "react";
import Section from "./Section";

const SkillsSection: FC<{ theme: string }> = ({ theme }) => {
    return (
        <Section theme={theme} height="h-40">
            <p className="text-lg leading-relaxed">
                Add content about yourself here. Talk about your background, experience, and other relevant information.
            </p>
        </Section>
    );
};

export default SkillsSection;
