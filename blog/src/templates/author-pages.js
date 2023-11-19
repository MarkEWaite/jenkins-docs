import GitHubIcon from '@mui/icons-material/GitHub';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import { blue, cyan, indigo } from '@mui/material/colors';
import { Link, graphql } from "gatsby";
import React from "react";
import PageName from "../components/PageName";
import Seo from "../components/Seo";
import { authoravataricons, authorpageavatar, authorimagecontainer, blog, github, linkedin, twitter } from "../css/authorpost.module.css";
import {
  blogauthorinfo,
  bloglisting,
  blogpost,
  blogteaser,
  blogtitle,
  blogauthorimage,
} from "../css/blogpost.module.css";
import IndexPageLayout from "../layouts";
import { formatDate, blogAuthorImage } from "../utils/index.js";

const AuthorPage = ({ data, pageContext, path }) => {
  const { filteredAuthors } = pageContext
  const author = path.slice(8, -1);
  return (
    < IndexPageLayout >
      <PageName title={'Jenkins Community Blog Contributors'} />
      {
        filteredAuthors.map((node) => (
          <>
            {(node.node.pageAttributes.github === author) ? <>
              <div className={authorpageavatar}>
                <img src={node.node.pageAttributes.authoravatar ? node.node.pageAttributes.authoravatar : "../../images/images/avatars/no_image.svg"} alt={node.node.pageAttributes.author_name} />
              </div>
              <h2>{node.node.pageAttributes.author_name}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.node.html }} />
              <div className={authoravataricons} style={{ width: "10rem" }}>
                {node.node.pageAttributes.github ? <a href={"https://github.com/" + node.node.pageAttributes.github}><Avatar sx={{ bgcolor: "rgb(60, 60, 60)" }}> <GitHubIcon className={github} /></Avatar></a> : null}
                {node.node.pageAttributes.linkedin ? <a href={"https://linkedin.com/in/" + node.node.pageAttributes.linkedin}><Avatar sx={{ bgcolor: blue[700] }}><LinkedInIcon className={linkedin} /></Avatar></a> : null}
                {node.node.pageAttributes.twitter ? <a href={"https://twitter.com/" + node.node.pageAttributes.twitter}><Avatar sx={{ bgcolor: cyan[50] }}> <TwitterIcon className={twitter} /></Avatar></a> : null}
                {node.node.pageAttributes.blog ? <a href={node.node.pageAttributes.blog}><Avatar sx={{ bgcolor: indigo[50] }}><ImportContactsIcon className={blog} /></Avatar></a> : null}
              </div>
            </> : null}
          </>
        ))
      }

      {/* blog posts by an author */}
      <ul className={bloglisting}>
        {data.allFile.nodes.map(({ childrenAsciidoc }) => {
          const authorList = blogAuthorImage(childrenAsciidoc[0].pageAttributes.author)
          const formattedDate = formatDate(childrenAsciidoc[0].fields.slug);
          const opengraphImageSource =
            childrenAsciidoc[0].pageAttributes.opengraph ||
            "../../images/gsoc/opengraph.png";
          return (
            <li key={`${childrenAsciidoc[0].fields.slug}-${childrenAsciidoc[0].document.title}`} className={blogpost}>
              <Link
                to={childrenAsciidoc[0].fields.slug}
                style={{ textDecoration: "none", display: "flex", gap: "1.25rem", flexDirection: "column" }}
              >
                <div
                  className={{ authorimagecontainer }}
                >
                  <img
                    src={opengraphImageSource}
                    alt={childrenAsciidoc[0].document.title}
                    height="250px"
                    width="100%"
                  />
                </div>
                <h5 className={blogtitle}>{childrenAsciidoc[0].document.title}</h5>
                <div className={blogteaser}>
                  Will include the blog teaser
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={blogauthorinfo}>
                    {authorList.map((auth) => {
                      return (
                        filteredAuthors.map((node) => {
                          return node.node.pageAttributes.github === auth ? (
                            <Link className={blogauthorinfo} to={`/author/${node.node.pageAttributes.github}`}>
                              {node.node.pageAttributes.authoravatar ? <img
                                loading="lazy"
                                src={node.node.pageAttributes.authoravatar}
                                className={blogauthorimage}
                                alt={node.node.pageAttributes.author}
                              /> : <img
                                loading="lazy"
                                src="../../images/images/avatars/no_image.svg"
                                className={blogauthorimage}
                                alt={node.node.pageAttributes.author}
                              />}
                              {authorList.length < 3 ? <p>{node.node.pageAttributes.author_name}</p> : null}
                            </Link>
                          ) : null;
                        })
                      );
                    })}
                  </div>
                  <span>{formattedDate}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </IndexPageLayout >
  )
}

export const Head = () => <Seo title="Jenkins Author Page" />

export default AuthorPage

export const pageQuery = graphql`
query AuthorPage($authorName: String!) {
  allFile(
    filter: {childrenAsciidoc: {elemMatch: {document: {title: {ne: "Jenkins Changelog Styleguide"}}, pageAttributes: {author: {glob: $authorName}}}}}
    sort: {childrenAsciidoc: {fields: {slug: DESC}}}
  ) {
    nodes {
      childrenAsciidoc {
        html
        fields {
          slug
        }
        document {
          title
        }
        pageAttributes {
          author
          author_name
          github
          opengraph
          linkedin
          blog
          twitter
          medium
          irc
          description
          authoravatar
        }
      }
    }
  }
}
`
