import Section from "./Section";
import Achievement from "./Achievement";

function CvBody() {
  return (
    <div className="cv-body">
      <Section>
        <Section.Header title="Experience"/>
        <Section.Item
          description="2019-2022"
          title="Embedded Software Engineer Apprentice | SAGEMCOM"
        >
          <Achievement
            text="Worked as main developper on the analytics data collection module written in C++."
            skills={["C", "C++", "Linux"]}
          />
          <Achievement
            text="Took part in a custom Alexa skill's development designed to work as a hotline."
            skills={["Nodejs", "APL"]}
          />
        </Section.Item>
        <Section.Item
          description="2018-2019"
          title="Bridge Teacher | LYON YOUNG BRIDGE CLUB"
        >
          <Achievement
            text="Taught bridge lessons up to 5h a week to initiate people aged from 13 to 35."
            skills={["Teaching", "Patience"]}
          />
        </Section.Item>
      </Section>
      <div className="cv-row">
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
                Master degree focused on Web, Mobile and Software development
              </div>
              <div className="award">
                Average : 16.83/20 Rank : 2/20
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
              <div className="award">
                Average : 16/20 Best Rank : 3/154
              </div>
            </Section.Item>
          </Section>
          <Section>
            <Section.Header title="Skills"/>
            <div className="section-item-short">
              <div className="text-header3">Software development</div>
              C, C++, Java
            </div>

            <div className="section-item-short">
              <div className="text-header3">Web</div>
               HTML, CSS, Javascript, React, Devops, AWS
            </div>

            <div className="section-item-short">
              <div className="text-header3">Mobile</div>
              React Native, Kotlin, Android, Swift, IOS
            </div>

            <div className="section-item-short">
              <div className="text-header3">Mathematics</div>
              Algebra, Statistics
            </div>

            <div className="section-item-short">
              <div className="text-header3">Languages</div>
              French, English (TOEIC 975/990)
            </div>
          </Section>
        </div>
        <Section>
          <Section.Header title="Projects"/>
          <Section.Item
            description="Since 2020"
            title="Planeat - Personal project"
          >
            <div className="summary">
              Mobile app - Cooking planner and organizer
            </div>
            Developed in React Native.<br/>
            Allow users to create, import and customize their recipes within the app.<br/>
            Makes it easy to plan meals through the week and generate a shopping list to eat homemade without difficulties.
          </Section.Item>
          <Section.Item
            description="2022"
            title="Equals - EPITA"
          >
            <div className="summary">
              Web page - Women compared to Men in society since 2000.
            </div>
            <div className="cv-link">
                <a className="fix" href="https://equals-front.herokuapp.com">https://equals-front.herokuapp.com</a>
            </div>
            Programmed data prediction using mathematical interpolation functions.<br/>
            Developed an interface using Vue.js to visualize results and alter parameters.<br/>
          </Section.Item>
        </Section>
      </div>
      <Section>
        <Section.Header title="Interests"/>
        <Section.Item
          description="Bridge"
        >
          Member of the French national team since 2014, several national and international awards
          <div className="cv-text-row">
            <div className="text-column">
              U16
            </div>
            <div className="text-column">
              World vice champion (2014)<br/>
              European vice champion (2015)<br/>
              World bronze medalist (2016)
            </div>
            <div className="text-column">
              U21
            </div>
            <div className="text-column">
              European vice champion (2019)<br/>
            </div>
          </div>
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
