import Section from "./Section";

function CvBody() {
  return (
    <div className="cv-body">
      <Section>
        <Section.Header title="Experience"/>
        <Section.Item
          description="Since September 2019"
          title="Embedded Software Engineer Apprentice | SAGEMCOM"
        >
          I became main developer on the analytics data collector
        </Section.Item>
        <Section.Item
          description="2018-2019"
          title="Bridge Teacher | LYON YOUNG BRIDGE CLUB"
        >
          Taught bridge lessons up to 5h a week<br />
          Initiated people aged 13 to 35 to play bridge
        </Section.Item>
      </Section>
      <div className="cv-body-row">
        <Section style={styles.rowSection}>
          <Section.Header title="Education"/>
          <Section.Item
            description="2019-2022"
            title="EPITA"
          >
            Web, IOT, multimedia Apprenticeship<br/>
            Semester 5 17.5/20 rank unknown
          </Section.Item>
          <Section.Item
            description="2017-2019"
            title="Université Claude Bernard, Lyon 1"
          >
            Mathematics and Computer science License<br/>
            Semester 1 15.2/20 rank 26/365<br/>
            Semester 2 16.1/20 rank 13/306<br/>
            Semester 3 16.5/20 rank unknown<br/>
            Semester 4 16.3/20 rank 3/154
          </Section.Item>
        </Section>
        <Section>
          <Section.Header title="Projects"/>
          <Section.Item
            description="Since 2020"
            title="Personal project"
          >
            cooking mobile app React Native
            • Create, import and customize your
            recipes
            • Plan your meals and generate your
            shopping list
          </Section.Item>
          <Section.Item
            description="2022"
            title="EPITA"
          >
            Master's project : data analysis
          </Section.Item>
        </Section>
      </div>
      <Section>
        <Section.Header title="Interests"/>
        <Section.Item
          description="Bridge"
        >
          Member of the French national team since 2014, several national and international awards<br/>
          World vice champion (2014)<br/>
          U16 European vice champion (2015) U21 European vice champion (2019)<br/>
          Worlds bronze medal (2016)
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

const styles = {
  rowSection: {
    paddingRight: 4,
    marginRight: 4,
  }
}

export default CvBody;
