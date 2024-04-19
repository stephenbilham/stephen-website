import React, { FC } from "react";
import Section from "../../app/components/Section";
import CertificateCard from "../../app/components/CertificateCard";
import { certificates } from "../../../src/portfolio";

const CertificatesSection: FC<{ theme: string }> = ({ theme }) => {
	if (certificates.length === 0) return null;

	return (
		<Section theme={theme}>
			<div>
				<h1
					className="text-3xl font-bold mb-4 text-left montserrat"
					id="certifications">
					Certifications
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{certificates.map((certificate, index) => (
						<CertificateCard
							key={index}
							certificate={certificate}
							theme={theme}
						/>
					))}
				</div>
			</div>
		</Section>
	);
};

export default CertificatesSection;
