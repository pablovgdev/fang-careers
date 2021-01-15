import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Job } from "../models/job";
import styles from "../styles/job-card.module.css";
import { getCompanyStyle } from "../utils/util";
import TagLabel from "./tag-label";

interface JobProps {
  job: Job;
}

export default function JobCard({ job }: JobProps) {
  const companyStyle = getCompanyStyle(job.company);
  const location = job.locations.map(location => location.split(",")[0]).join(", ");
  const [open, setOpen] = useState(false);

  function parseTitle() {
    let title = job.title;
    title = title.split(",")[0];
    title = title.split(" -")[0];
    title = title.split(" –")[0];
    title = title.split(" (")[0];
    return title;
  }

  function toggleDescription() {
    setOpen(!open);
  };

  function openClose() {
    return open ? styles.open : styles.close;
  }

  return (
    <div className={styles.card}>
      <div
        className={`${styles.header} ${openClose()}`}
        onClick={toggleDescription}
        style={{ backgroundColor: companyStyle.background }}
      >
        <div className={`${styles.logo} ${openClose()}`}>
          <img src={companyStyle.logo} alt="logo" />
        </div>
        <div className={styles.main}>
          <div className={styles.section}>
            <h2
              className={styles.title}
              style={{ color: companyStyle.primary }}
            >
              {ReactHtmlParser(parseTitle())}
            </h2>
            <div className={styles.details}>
              <p
                className={styles.location}
                style={{ color: companyStyle.secondary }}
              >
                {location}
              </p>
              {/* <p className={styles.date}>{dateFormat(job.date)}</p> */}
            </div>
          </div>
          <div
            className={styles.tags}
            style={{ display: job.tags.length ? "flex" : "none" }}
          >
            {job.tags.map(tag => <TagLabel tag={tag.value} companyStyle={companyStyle} key={tag.value} />)}
          </div>
        </div>
      </div>
      <div className={`${styles.description} ${openClose()}`}>
        <div>{ReactHtmlParser(job.description)}</div>
      </div>
    </div>
  );
}