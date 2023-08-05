import { createClient } from "next-sanity";

const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: "2023-07-20",
    useCdn: true
});

export default client;