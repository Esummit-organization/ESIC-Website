
import { BentoCard, BentoGrid } from "./bento_grid_sponsors";
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";
import { features } from "@/constants/sponsors";

export default function BentoDemo() {
    return (
        <div className="w-full">
            <BentoGrid className="lg:grid-rows-3 px-20 py-10 ">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </div>
    );
}
