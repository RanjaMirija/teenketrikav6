"use client";
import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";

import theme from "../theme";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin", "latin-ext"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin", "latin-ext"],
});

const metadata: Metadata = {
    title: "teen'Ketrika",
    description: "recherche emploi",
};

function Appbar() {
    return (
        <Toolbar
            sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 3,              // plus de padding horizontal
                py: 1,              // padding vertical
                minHeight: 64,
            }}
        >
            {/* Logo split en deux */}
            <Typography
                variant="h5"
                component="div"
                sx={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: "bold",
                    letterSpacing: 1,
                }}
            >
                <Box component="span" sx={{ color: theme.palette.primary.main }}>
                    Teen
                </Box>
                <Box component="span" sx={{ color: "#000" }}>
                    'Ketrika
                </Box>
            </Typography>

            {/* Boutons icônes agrandis */}
            <Box>
                {[
                    { Icon: SearchIcon, href: "/search", label: "search" },
                    { Icon: AccountCircleIcon, href: "/account", label: "account" },
                    { Icon: InfoIcon, href: "/about", label: "about" },
                ].map(({ Icon, href, label }) => (
                    <IconButton
                        key={label}
                        href={href}
                        aria-label={label}
                        sx={{
                            ml: 1,
                            p: 1,
                            "& .MuiSvgIcon-root": {
                                fontSize: 32,       // ← corrigé ici
                            },
                        }}
                    >
                        <Icon />
                    </IconButton>
                ))}
            </Box>

        </Toolbar>
    );
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body style={{ marginTop: 64 }} className={`${geistSans.variable} ${geistMono.variable}`}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    {/* AppBar fixe, fond blanc (ou transparent si vous préférez) */}
                    <AppBar
                        position="fixed"
                        elevation={0}
                        sx={{
                            backgroundColor: "white",         // ou "transparent"
                            borderBottom: `1px solid ${theme.palette.divider}`,
                        }}
                    >
                        <Appbar />
                    </AppBar>

                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
