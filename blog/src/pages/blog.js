import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import { blogauthor, bloglisting, blogpost, blogtitle } from "../css/blogpost.module.css"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
const { rhythm } = typography

class IndexPage extends React.Component {
  render() {
    var moment = require('moment');
    let str = "dd/mm/yyyy06/06/2018 yyyy/mm/dd 2018/02/12 d/m/yy 1/1/18 dd/mm/yy 18/12/12 mm/d/yyyy 12/2/2018 m/dd/yyyy 1/12/2018 yy/m/d 18/1/1 yy/mm/d 18/12/1 yyyy/2018/1/1";
    return (
      < IndexPageLayout >
        <Link style={{ textDecoration: `none` }} to="/">
          <h3
            style={{
              color: `black`,
              marginBottom: rhythm(1.5),
              fontFamily: "Georgia,serif",
              fontSize: "40px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <img
              src={jenkinsLogo}
              alt="Jenkins Logo"
              style={{
                height: "80px",
              }}
            />{" "}
            The Jenkins Blog
          </h3>
        </Link>
        <ul className={bloglisting}>
          {console.log(this.props.data.allAsciidoc)}
          {this.props.data.allAsciidoc.edges.map(({ node }) => {
            if (node.document.title !== "Author") {
              return (
                <li key={node.fields.slug} className={blogpost}>
                  <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={node.pageAttributes.opengraph ?? "../../images/gsoc/opengraph.png"}
                        alt={node.document.title}
                        height="250px"
                        width="100%"
                      />
                    </div>
                    <span className={blogtitle}>{node.document.title}</span>
                  </Link>
                  <br />
                  <div style={{ display: "flex" }}>
                    <img src={("../../images/images/avatars/" + node.pageAttributes.author + ".jpg" ?? "../../images/images/avatars/" + node.pageAttributes.author + ".png") ?? "../../images/images/avatars/" + node.pageAttributes.author + ".jpeg"} style={{ height: "1rem", width: "1rem", borderRadius: "50%", display: "inline", position: "relative", top: ".3rem" }} alt={""} />
                    <p className={blogauthor}>{node.pageAttributes.author}</p>
                    <span>
                      {node.fields.slug}
                    </span>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </IndexPageLayout >
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query{
  allAsciidoc(
    sort: {fields: {slug: DESC}}
    filter: {document: {main: {ne: "Jenkins Changelog Styleguide"}}}
  ) {
    edges {
      node {
        fields {
          slug
        }
        document {
          main
          title
        }
        pageAttributes {
          tags
          author
          author_name
          github
          opengraph
          linkedin
        }
      }
    }
  }
}`
