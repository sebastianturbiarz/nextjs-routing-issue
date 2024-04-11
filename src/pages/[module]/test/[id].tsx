import {Layout} from "@/components/Layout";
import {Page} from "@/components/Page";


Page.getLayout = (page) => <Layout>{page} [ID] Page</Layout>

export default Page