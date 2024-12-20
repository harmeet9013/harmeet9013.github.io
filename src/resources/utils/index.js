export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const yOffset = 0;
        const y =
            section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};
