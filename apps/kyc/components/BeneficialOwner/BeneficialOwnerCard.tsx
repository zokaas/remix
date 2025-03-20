import React from "react";
import { Button } from "@ui-components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { T_BeneficialOwner } from "./beneficialOwnerFormTypes";
import { faTrash } from "@awesome.me/kit-60ea292f8c/icons/classic/regular";

export const BeneficialOwnerCard: React.FC<{
    owner: T_BeneficialOwner;
    onDelete: () => void;
}> = ({ owner, onDelete }) => (
    <div className="p-3 mb-3 border bg-white flex justify-between items-start">
        <div className="flex flex-col gap-1">
            <div>{owner.name}</div>
            <div>{owner.ssn}</div>
            <div>{owner.ownership}%</div>
            <div>{owner.country}</div>
        </div>
        <div className="ml-4">
            <Button variant="redBeneficialOwner" className="w-15" onClick={onDelete}>
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        </div>
    </div>
);

export default BeneficialOwnerCard;
