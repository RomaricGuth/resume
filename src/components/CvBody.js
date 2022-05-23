import Section from "./Section";

function CvBody() {
  return (
    <div className="cv-body">
      <Section>
        <Section.Header title="Experience"/>
        <Section.Item
          description="2019-2022"
          title="Embedded Software Engineer Apprentice | SAGEMCOM"
        >
          Worked as main developper on the analytics collection module.<br/>
          Took part in the developpement of a custom Alexa skill designed to work as a hotline.
        </Section.Item>
        <Section.Item
          description="2018-2019"
          title="Bridge Teacher | LYON YOUNG BRIDGE CLUB"
        >
          Taught bridge lessons up to 5h a week.<br />
          Initiated people aged 13 to 35 to play bridge.
        </Section.Item>
      </Section>
      <div className="cv-row">
        <Section style={styles.rowSection}>
          <Section.Header title="Education"/>
          <Section.Item
            description="2019-2022"
            title="EPITA Apprenticeship"
          >
            Master degree focused on Web, Mobile and Software development<br/>
            Semester 5 17.5/20 rank unknown
          </Section.Item>
          <Section.Item
            description="2017-2019"
            title="Université Claude Bernard, Lyon 1"
          >
            Mathematics and Computer Science License<br/>
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
            title="Planeat - Personal project"
          >
            Cooking mobile app React Native<br />
            Create, import and customize your recipes<br/>
            Plan your meals and generate your shopping list<br/>
          </Section.Item>
          <Section.Item
            description="2022"
            title="Equals - EPITA"
          >
            <a href="https://equals-front.herokuapp.com">EQUALS</a>
            Data analysis - Women compared to Men in society since 2000.<br/>
            Programmed data prediction using mathematical interpolation functions.<br/>
            Designed interface to visualize results and alter parameters.
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

const styles = {
  rowSection: {
    paddingRight: 4,
    marginRight: 4,
  }
}

export default CvBody;
