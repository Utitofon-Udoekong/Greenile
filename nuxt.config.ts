import { defineNuxtConfig } from 'nuxt3'
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
            hid: "description",
            name: "description",
            content:
                "A Marketplace to aquire lands and apartments as NFTS seamlessly",
        },
        { name: "og:title", content: "Greenile" },
        { name: "og:site_name", content: "Greenile" },
        {
            name: "og:description",
            content:
                "A Marketplace to aquire lands and apartments as NFTS seamlessly",
        },
        { name: "og:type", content: "website" },
        // { name: "og:url", content: "https://www.madewithsupabase.com/" },
        // { name: "og:image", content: "https://www.madewithsupabase.com/og.png" },

        // { name: "twitter:card", content: "summary_large_image" },
        // { name: "twitter:site", content: "@madewifsupabase" },
        // { name: "twitter:creator", content: "@madewifsupabase" },
        // { name: "twitter:title", content: "Showcase ⚡ Made with Supabase" },
        // {
        //     name: "twitter:description",
        //     content:
        //         "A collection of projects made with Supabase – Websites, Mobile Apps, SaaS, Plugins and more!",
        // },
        // {
        //     name: "twitter:image",
        //     content: "https://www.madewithsupabase.com/og.png",
        // },
    ],
    css: [
        "@/assets/css/styles.css",
        "swiper/swiper.min.css",
        "swiper/components/navigation/navigation.min.css",
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        transpile: [
            "swiper"
        ]
    },
    vite: {
        plugins: [
            Components({
                resolvers: [IconsResolver()]
            }),
            Icons(),
        ],
    }

})
