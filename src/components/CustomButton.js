import { Button } from "react-bootstrap";

export const CustomButton =({variant,type}) => {
    return (
        <Button variant={variant} type={type} style={{ marginTop: "10px" }}>
                Submit
        </Button>
    )
}