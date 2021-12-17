module.exports = {
    content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
    theme: {
        extend: {
            dropShadow: {
                main: "0 4px 4px rgba(0, 0, 0, 0.15)",
                second: "0px 12px 24px -12px rgba(0, 0, 0, 0.25)  ",
            },
            boxShadow: {
                main: "  0px 0px 4px 4px rgba(100, 100, 100, 0.15)",
                second: "  0px 0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
            colors: {
                "linear-start": "#1D55A9 0%",
                "linear-end": "#0A325A 100%",
                primary: "#2C2F33 80%",
            },
            gridTemplateColumns: {
                project: "38% 33% 25% ",
            },
        },
    },
    plugins: [],
};
