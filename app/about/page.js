import AboutContent from "./components/AboutContent";
import ImageCover from "@/app/components/ImageCover";
import Downtown from '@/public/downtown-vanc.jpg'

export default function About() {
    return (
        <>
            <AboutContent/>
            <ImageCover image={Downtown} alt={"Downtown Vancouver, WA"}/>
        </>
    );
}