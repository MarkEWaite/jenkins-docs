import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import Video from "../components/Video"
import { blogauthor, bloglisting, blogpost, blogtitle } from "../css/blogpost.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <section style={{ padding: "1rem 4rem" }}>
          <img src="../../images/images/logos/jenkins/Jenkins-stop-the-war.svg" style={{ width: "356px", "float": "left" }} />
          <h1>Jenkins</h1>
          <h2>Build great things at any scale</h2>
          <p>The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
            We stand with the people of Ukraine. Please assist humanitarian efforts for the Ukrainian people and those affected by the military invasion of Ukraine by supporting international aid organizations, including the <a href="https://redcross.org.ua/en/donate/">Ukrainian Red Cross</a>
          </p>
          <button>Documentation</button>
          <button>Download</button>
        </section>
        <div style={{
          background: "#4799d6",
          backgroundImage: "../../images/images/cdf/cdf-background-wide.jpg" ? "url(../../images/images/cdf/cdf-background-wide.jpg)" : "inherit",
          backgroundSize: 'cover',
          margin: "2rem 0rem",
          padding: 36,
        }}
        >
          <Swiper
            spaceBetween={36}
            slidesPerView={3}
            onSlideChange={() => console.log('Slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <a href="">
                  <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png"
                       style={{ height: "300px", objectFit: "cover" }}
                  />
                  <h2 className="legend">Welcome to GSoC 2023!
                    Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.
                  </h2>
                  <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                  <a href=""><button>More Info</button></a>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="">
                  <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png"
                       style={{ height: "300px", objectFit: "cover" }}
                  />
                  <h2 className="legend">Welcome to GSoC 2023!
                    Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.
                  </h2>
                  <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                  <a href=""><button>More Info</button></a>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="">
                  <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png"
                       style={{ height: "300px", objectFit: "cover" }}
                  />
                  <h2 className="legend">Welcome to GSoC 2023!
                    Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.
                  </h2>
                  <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                  <a href=""><button>More Info</button></a>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          style={{ padding: 36 }}>
          <div className="row chunks features uniform-height">
            <div className="col-md-6 col-lg-4">
              <div className="box cicd">
                <ion-icon name="git-pull-request-outline" role="img" className="md hydrated"></ion-icon>
                <h5>
                  Continuous Integration and Continuous Delivery
                </h5>
                <p>
                  As an extensible automation server, Jenkins can be used as a simple
                  CI server or turned into the continuous delivery hub for any project.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box install">
                <ion-icon name="download-outline" role="img" className="md hydrated"></ion-icon>
                <h5>
                  Easy installation
                </h5>
                <p>
                  Jenkins is a self-contained Java-based program, ready to run
                  out-of-the-box, with packages for Windows, Linux, macOS and other
                  Unix-like operating systems.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box settings">
                <ion-icon name="options-outline" role="img" className="md hydrated"></ion-icon>
                <h5>
                  Easy configuration
                </h5>
                <p>
                  Jenkins can be easily set up and configured via its web interface,
                  which includes on-the-fly error checks and built-in help.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box ecosystem">
                <ion-icon name="apps-outline" role="img" className="md hydrated"></ion-icon>
                <h5>
                  Plugins
                </h5>
                <p>
                  With hundreds of plugins in the Update Center, Jenkins integrates
                  with practically every tool in the continuous integration and
                  continuous delivery toolchain.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box extend">
                <ion-icon name="extension-puzzle-outline" role="img" className="md hydrated"></ion-icon>
                <h5>
                  Extensible
                </h5>
                <p>
                  Jenkins can be extended via its plugin architecture, providing
                  nearly infinite possibilities for what Jenkins can do.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box distributed">
                <ion-icon name="git-network-outline" role="img" className="md hydrated"></ion-icon>
                <h5>
                  Distributed
                </h5>
                <p>
                  Jenkins can easily distribute work across multiple machines,
                  helping drive builds, tests and deployments across multiple
                  platforms faster.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Video />
        <IndexPageLayout>
          <h2>Related Post</h2>
          <ul className={bloglisting}>
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
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <span className={blogtitle}>{node.document.title}</span>
                    </Link>
                    <br />
                    <p className={blogauthor}>{node.pageAttributes.authors}</p>
                  </li>
                );
              }
            })}
          </ul>
        </IndexPageLayout>
        <div>
          <div>
            <p>
              <center>
                <strong>
                  We thank the following organizations for their major commitments to
                  support the Jenkins project.
                </strong>
              </center>
            </p>
            <ul style={{ display: "flex", justifyContent: "space-evenly", listStyle: "none", padding: "0rem 5rem" }}>
              <li>
                <a href="https://cloudbees.com" rel="noreferrer noopener" target="_blank">
                  <img alt="CloudBees, Inc." src="../../images/images/sponsors/cloudbees.png" title="CloudBees, Inc." />
                </a>
              </li>
              <li>
                <a href="https://osuosl.org" rel="noreferrer noopener" target="_blank">
                  <img alt="Oregon State University Open Source Lab" src="../../images/images/sponsors/osuosl.png" title="Oregon State University Open Source Lab" />
                </a>
              </li>
              <li>
                <a href="https://cd.foundation/" rel="noreferrer noopener" target="_blank">
                  <img alt="Continuous Delivery Foundation" src="../../images/images/sponsors/cdf.png" title="Continuous Delivery Foundation" />
                </a>
              </li>
              <li>
                <a href="https://redhat.com" rel="noreferrer noopener" target="_blank">
                  <img alt="Red Hat, Inc." src="../../images/images/sponsors/redhat.png" title="Red Hat, Inc." />
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com/" rel="noreferrer noopener" target="_blank">
                  <img alt="AWS" src="../../images/images/sponsors/aws.png" title="AWS" />
                </a>
              </li>
              <li>
                <a href="https://github.com" rel="noreferrer noopener" target="_blank">
                  <img alt="GitHub, Inc." src="../../images/images/sponsors/github.png" title="GitHub, Inc." />
                </a>
              </li>
              <li>
                <a href="https://jfrog.com" rel="noreferrer noopener" target="_blank">
                  <img alt="JFrog" src="../../images/images/sponsors/jfrog.png" title="JFrog" />
                </a>
              </li>
            </ul>
          </div>
          <div className="supporters">
            <p>
              <center>
                <strong>
                  We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.
                </strong>
              </center>
            </p>
            <ul style={{ fontWeight: "bold", display: "flex", justifyContent: "space-evenly", listStyle: "none", padding: "0rem 10rem" }}>
              <li><a href="https://atlassian.com/">Atlassian</a></li>
              <li><a href="https://www.datadoghq.com/">Datadog</a></li>
              <li><a href="https://www.digitalocean.com/">Digital Ocean</a></li>
              <li><a href="https://www.discourse.org/">Discourse</a></li>
              <li><a href="https://www.fastly.com/">Fastly</a></li>
              <li><a href="https://www.ibm.com/">IBM</a></li>
              <li><a href="https://www.netlify.com/">Netlify</a></li>
              <li><a href="https://pagerduty.com/">Pagerduty</a></li>
              <li><a href="https://sentry.io/">Sentry</a></li>
              <li><a href="https://www.tsinghua.edu.cn/">Tsinghua University</a></li>
              <li><a href="https://xmission.com/">XMission</a></li>
            </ul>
          </div>
        </div >
      </>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query{
  allAsciidoc(limit: 9) {
    edges {
      node {
        fields {
          slug
        }
        document {
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
