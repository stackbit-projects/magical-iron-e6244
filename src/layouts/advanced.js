import React from 'react';
import _ from 'lodash';
import { motion } from 'framer-motion';

import components, { Layout } from '../components/index';
import { getPageUrl } from '../utils';

export default class Advanced extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const posts = _.get(this.props, 'posts');
        const page = _.get(this.props, 'page');
        const sections = _.get(page, 'sections');
        const pageUrl = getPageUrl(page);

        return (

            const IndexPage = () => {
  const [citation, setCitation] = useState(true);
  const [main, setMain] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    const ids = [
      setTimeout(() => setCitation(false), 4800),
      setTimeout(() => setMain(true), 5700),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [setCitation]);
            <Layout page={page} config={config}>
                {_.map(sections, (section, index) => {
                    const sectionType = _.get(section, 'type');
                    const component = _.upperFirst(_.camelCase(sectionType));
                    if (!component) {
                        throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
                    }
                    const Component = components[component];
                    if (!Component) {
                        throw new Error(`no component matching the page section's type: ${sectionType}`);
                    }
                    return  <Component key={index} section={section} data={data} posts={posts} />;
                })}
            </Layout>
        );
    }
}
