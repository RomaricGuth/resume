import Section from "./Section";
import Achievement from "./Achievement";

function CvBody() {
  return (
    <div className="cv-body">
      <Section>
        <Section.Header title="Experience"/>
        <Section.Item
          description="From 2023"
          title="Freelance web developer"
        >
          <div className="summary">
            Working on several web projects mostly using Next.js and Tailwind CSS.
          </div>
        </Section.Item>
        <Section.Item
          description={() => (
            <div className="section-item-description">
              2022-2023<br/>
              Fulltime<br/>
              <br/>
              2019-2022<br/>
              Apprentice
            </div>
          )}
          title="Embedded Software Engineer | SAGEMCOM"
        >
          <div className="summary">
            Apprenticeship from Sept. 2019 to Sept. 2022&nbsp;&nbsp;|&nbsp;&nbsp;Feedback : 19/20 - "Beyond expectations"
          </div>
          <Achievement
            text={
              <div>
                Worked as lead developer on the analytics data collection module embedded on TV set top boxes, written in C++. Elevated the volume and accuracy of gathered data to enhance the significance of generated reports.<br/>
                Worked on a customized android open source project to speed up debug and developments before commercial launch of a new product.
              </div>
            }
            skills={["C", "C++", "Linux"]}
          />
        </Section.Item>
      </Section>
      <div className="cv-middle-row ">
        <div className="cv-middle-section">
          <Section>
            <Section.Header title="Education"/>
            <Section.Item
              description="2019-2022"
              title="EPITA Apprenticeship"
            >
              {/*
              <Achievement
                text=""
                skills={["C", "C++", "Java", "React", "AWS", "Devops", "Kotlin", "Android", "Swift", "IOS"]}
                award="Average : 16.83/20 Rank : 2/20"
              />
              */}
              <div className="summary">
                Master degree focused on Web and Mobile development
              </div>
              <div className="cv-row-spaced">
                <div className="award">
                  Average : 16.83/20
                </div>
                <div className="award">
                  Rank : 2/20
                </div>
              </div>
            </Section.Item>
            <Section.Item
              description="2017-2019"
              title="Universite Claude Bernard, Lyon 1"
            >
              {/*
              <Achievement
                text="Mathematics and Computer Science License"
                skills={["C++", "HTML", "CSS", "Javascript", "Algebra", "Statistics"]}
                award="Average : 16/20 Best Rank : 3/154"
              />
              */}
              <div className="summary">
                Mathematics and Computer Science Degree
              </div>
              <div className="cv-row-spaced">
                <div className="award">
                  Average : 16/20
                </div>
                <div className="award">
                  Best Rank : 3/154
                </div>
              </div>
            </Section.Item>
          </Section>
          <Section>
            <Section.Header title="Skills"/>

            <div className="section-item-short">
              <div className="text-header3">Web</div>
               Next.js, Tailwind CSS, Devops, SEO
            </div>

            <div className="section-item-short">
              <div className="text-header3">Mobile</div>
              React Native, Kotlin, Android OSP, Swift
            </div>

            <div className="section-item-short">
              <div className="text-header3">Software development</div>
              C, C++, Java
            </div>

            <div className="section-item-short">
              <div className="text-header3">Mathematics</div>
              Algebra, Statistics
            </div>

            <div className="section-item-short">
              <div className="text-header3">Languages</div>
              French (Native), English (TOEIC 975/990)
            </div>
          </Section>
        </div>
        <Section>
          <Section.Header title="Projects"/>
          <Section.Item
            description="2023"
            title="Le Mas d'Euliac"
          >
            <div className="summary">
              Website - Guesthouse property showcase.
            </div>
            <div className="cv-link">
                <a href="https://www.mas-euliac.fr/">https://www.mas-euliac.fr</a>
            </div>
            Designed and implemented a website showcasing a rental property, focusing on image optimization and responsive display modes to emphasize stunning property visuals.
          </Section.Item>
          <br/>
          <br/>
          <Section.Item
            description="Since 2021"
            title="Planeat - Personal project"
          >
            <div className="summary">
              Mobile app - Cooking planner and organizer
            </div>
            Developed in React Native.<br/>
            Allow users to create, import and customize their recipes within the app.<br/>
            Makes it easy to plan meals through the week and generate a shopping list to eat homemade without difficulties.
          </Section.Item>
        </Section>
      </div>
      <Section>
        <Section.Header title="Interests"/>
        <Section.Item
          description="Bridge"
        >
          Member of the French national team since 2014, several national and international awards :
          <ul className="cv-text-row">
            <div className="cv-text-column">
              <li>Under 31 World champion (2023)</li>
              <li>Under 21 European silver medalist (2019)</li>
            </div>
            <div className="cv-text-column">
              <li>Under 16 World silver medalist (2014)</li>
              <li>Under 16 European silver medalist (2015)</li>
            </div>
          </ul>
        </Section.Item>
        <Section.Item
          description="Piano"
        >
          Practiced in conservatory from 2006 to 2017 and self teaching since then
        </Section.Item>
      </Section>
    </div>
  )
}

export default CvBody;
