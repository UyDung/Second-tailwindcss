module.exports = {
    content: ["./src/**/*.{html,js}","*.{html,js}", "./dist/**/*.{html,js}"],
    theme: {
        extend: {
            dropShadow: {
                main: "0 4px 4px rgba(0, 0, 0, 0.15)",
                second: "0px 12px 24px -12px rgba(0, 0, 0, 0.25)  ",
            },
            boxShadow: {
                main: "  0px 0px 4px 4px rgba(70, 70, 70, 0.45)",
                second: "  0px 0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
            colors: {
                "linear-start": "#1D55A9 0%",
                "linear-end": "#0A325A 100%",
                primary: "#2C2F33 80%",
            },
            gridTemplateColumns: {
                main: "7% 73% 20% ",
                project: "40% 35% 25%"
            },
        },
    },
    plugins: [],
};
