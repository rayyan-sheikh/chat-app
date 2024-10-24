const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div>
            <div>
                <label>
                    <span>Male</span>
                    <input
                        type="checkbox"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Female</span>
                    <input
                        type="checkbox"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;
