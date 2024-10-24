const MessageSkeleton = () => {
	return (
		<>
			<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
				<div
					style={{
						width: "40px",
						height: "40px",
						borderRadius: "50%",
						backgroundColor: "#ccc", // or your skeleton color
					}}
				></div>
				<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
					<div
						style={{
							height: "16px",
							width: "160px",
							backgroundColor: "#ccc", // or your skeleton color
						}}
					></div>
					<div
						style={{
							height: "16px",
							width: "160px",
							backgroundColor: "#ccc", // or your skeleton color
						}}
					></div>
				</div>
			</div>
			<div style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "flex-end" }}>
				<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
					<div
						style={{
							height: "16px",
							width: "160px",
							backgroundColor: "#ccc", // or your skeleton color
						}}
					></div>
				</div>
				<div
					style={{
						width: "40px",
						height: "40px",
						borderRadius: "50%",
						backgroundColor: "#ccc", // or your skeleton color
					}}
				></div>
			</div>
		</>
	);
};

export default MessageSkeleton;
