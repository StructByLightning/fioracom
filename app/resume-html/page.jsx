import { notFound } from "next/navigation";
import ExpandingHr from "@/components/ExpandingHr/ExpandingHr";
import css from "./page.module.scss";


export default async function FioraResume() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <>
    <main className={css.main}>
      <article className={css.resume} aria-label="Resume of Raven Schultz">
        <header className={css.header}>
          <h1 className={css.name}>Fiora Utroske · Retail Associate</h1>
          <nav className={css.links} aria-label="Contact information">
            <a href="tel:720 413 0951">720 413 0951</a>
            <a href="mailto:msravenschultz@gmail.com">fiorautroske@gmail.com</a>
            <a href="mailto:msravenschultz@gmail.com">Seattle, WA</a>
          </nav>
        </header>



        <section className={css.jobs} aria-labelledby="experience-heading">
          <article className={css.job}>
            <h3 className={css.sectionHeading}>Experience</h3>
            <header>
              <h3 className={css.title}>Production Associate</h3>
              <p className={css.tenure}>
                <span className={css.company}>Curios · 10/2025 — Present</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              <li>Coordinated outbound shipment of customer orders</li>
              <li>Fabricated custom products using laser engraving and metal inlay techniques</li>
              <li>Photographed products for ecommerce listings and edited images to improve purchase rates</li>
              <li>Reworked pieces as needed to meet high quality standards and precise specifications</li>
            </ul>
          </article>

          <article className={css.job}>
            <header>
              <h3 className={css.title}>Shelf Stocker</h3>
              <p className={css.tenure}>
                <span className={css.company}>Walmart · 07/2022 — 03/2023</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              <li>Sorted incoming merchandise and stocked shelves (grocery, frozen, dairy, deli, general merchandise) in overnight shifts</li>
              <li>Operated pallet jacks, electric jacks, box cutters, and baler equipment</li>
              <li>Assisted customers with product location and inquiries across multiple departments</li>
              <li>Faced and zoned aisles to maintain presentation and merchandising standards</li>
              <li>Recognized by management for speed and efficiency</li>
              <li>Maintained near-perfect attendance throughout 9-month tenure</li>
            </ul>
          </article>


          <article className={css.job}>
            <header>
              <h3 className={css.title}>Operations & Media</h3>
              <p className={css.tenure}>
                <span className={css.company}>Froggy's Lair · 07/2019 — 05/2021</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              <li>Packaged ~50 live animal shipments weekly using insulated containers for time-sensitive delivery</li>
              <li>Built and assembled frog terrariums and habitats in collaboration with team</li>
              <li>Produced product photography and ~30 promotional videos including filming, direction, and editing</li>
              <li>Designed and implemented inventory tracking spreadsheets, monitoring stock levels and sales daily</li>
            </ul>
          </article>

          <article className={css.job}>
            <header>
              <h3 className={css.title}>Event Support</h3>
              <p className={css.tenure}>
                <span className={css.company}>Chelsea's Place & Peakview Assisted Living · 2017 — 2021</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              <li>Provided event support including setup, food service, crafts, and cleanup</li>
              <li>Engaged elderly residents in conversation during activities and celebrations</li>
              <li>Built rapport with residents through Adopt a Grandparent companionship program</li>
            </ul>
          </article>

          <article className={css.job}>
            <header>
              <h3 className={css.title}>Event & Tech Support</h3>
              <p className={css.tenure}>
                <span className={css.company}>Beyond the Blackboard · 2018 — 2020</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              <li>Operated popcorn stand at community festivals, serving customers and collecting donations</li>
              <li>Provided on-call tech support for store printers and network issues</li>
            </ul>
          </article>
        </section>


        <footer className={css.ats}>
          {/*<section aria-labelledby="education-heading">
            <h2 id="education-heading" className={css.heading}>Education</h2>
            <p>University of Colorado, Denver (2022 - attended)</p>
          </section> */}
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className={css.heading}>Keywords</h2>
            <p className={css.keywords}>Stocking, Merchandising, Inventory Management, Customer Service, Pallet Jack, Baler, Barcode Scanner, Order Fulfillment, Shipping, Packaging, Overnight Shift, Open Availability, Lift 50+ lbs, Reliable, Detail-Oriented, Team Player, Facing, Zoning, Freight, Receiving, Warehouse, Fast-Paced Environment, Google Sheets, Microsoft Excel</p>
          </section>
        </footer>
      </article>
    </main>
  </>;
}
