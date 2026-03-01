import { getResourcePosts } from "@/lib/resources";
import ClientPage from "./ClientPage";

export default function ResourcesPage() {
    const tutorials = getResourcePosts();
    return <ClientPage tutorials={tutorials} />;
}
