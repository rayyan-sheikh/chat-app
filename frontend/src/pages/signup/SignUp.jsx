import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};


  return (
    <div>
    <div>
        <h1>
            Sign Up <span> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Full Name</span>
                </label>
                <input
                    type="text"
                    placeholder="John Doe"
                    value={inputs.fullName}
                    onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                />
            </div>

            <div>
                <label>
                    <span>Username</span>
                </label>
                <input
                    type="text"
                    placeholder="johndoe"
                    value={inputs.username}
                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                />
            </div>

            <div>
                <label>
                    <span>Password</span>
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={inputs.password}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
            </div>

            <div>
                <label>
                    <span>Confirm Password</span>
                </label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                />
            </div>

            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

            <Link to="/login">
                Already have an account?
            </Link>

            <div>
                <button disabled={loading}>
                    {loading ? <span></span> : "Sign Up"}
                </button>
            </div>
        </form>
    </div>
</div>

  )
}

export default SignUp