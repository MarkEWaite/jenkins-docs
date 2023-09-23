import React from "react"
import { Link } from "gatsby"
import Author from "./Author"

import typography from "../utils/typography"
import { BackToButton } from "./BackToButton"
const { rhythm } = typography

const BlogPost = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        marginTop: rhythm(1.5),
        marginBottom: rhythm(1.5),
        maxWidth: 900,
        paddingLeft: rhythm(3 / 4),
        paddingRight: rhythm(3 / 4),
      }}
    >
      <Link to="/blog">
        <BackToButton>Back to Blogs</BackToButton>
      </Link>
      {children}
      <Author />
    </div>
  );
}

export default BlogPost
