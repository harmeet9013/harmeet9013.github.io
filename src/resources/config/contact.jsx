import { ContactMailRounded } from "@mui/icons-material";
import { CONTACT_INFO } from "./common";

export const CONTACT_SECTION_DATA = {
    title: "contact",
    icon: <ContactMailRounded fontSize="large" color="primary" />,
    description: (
        <>
            you can get in touch with me through various mediums.
            <br />i promise i will get back to you at my earliest.
        </>
    ),
    links: CONTACT_INFO["links"],
};
