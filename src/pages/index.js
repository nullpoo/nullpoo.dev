import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Koki HASHIMOTO</h1>
    <p className={`${styles.snsIcon} ${styles.iconLocation}`}>
      <a href="https://goo.gl/maps/KAG16pAwwSAJVdMB7">Tokyo in Japan</a>
    </p>
    <p className={`${styles.snsIcon} ${styles.iconTwitter}`}>
      <a href="https://twitter.com/nullpoo">@nullpoo</a>
    </p>
    <p className={`${styles.snsIcon} ${styles.iconFacebook}`}>
      <a href="https://www.facebook.com/nullpoo">Koki Hashimoto</a>
    </p>
    <p className={`${styles.snsIcon} ${styles.iconLinkedin}`}>
      <a href="https://www.linkedin.com/in/nullpoo/">Koki Hashimoto</a>
    </p>
    <p className={`${styles.snsIcon} ${styles.iconGithub}`}>
      <a href="https://github.com/nullpoo">nullpoo</a>
    </p>
  </Layout>
)

export default IndexPage
