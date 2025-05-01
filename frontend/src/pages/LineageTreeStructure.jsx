import React from "react";
import Node from "./Node";

export default function LineageTreeStructure() {
  return (
    <>
      <div className="flex justify-center min-w-fit">
        <Node
          label="1"
          name="Mahaguru"
          image="krishna.jpg"
          details="The originator of the pooja tradition, Mahaguru established the spiritual lineage with divine wisdom and discipline."
          children={[
            <Node
              label="2"
              name="Follower 1"
              image="follow.jpg"
              details="Disciple of Mahaguru who spread the teachings across villages and emphasized daily rituals."
              children={[
                <Node
                  label="5"
                  name="Follower 1 - Sub 1"
                  image="guru.jpg"
                  details="Focused on meditation and guided early morning aartis in the community."
                />,
                <Node
                  label="6"
                  name="Follower 1 - Sub 2"
                  image="guru.jpg"
                  details="Known for performing yajnas and preserving Vedic chants."
                />,
                <Node
                  label="7"
                  name="Follower 1 - Sub 3"
                  image="guru.jpg"
                  details="Taught pooja discipline and initiated students into deeper mantra practices."
                  children={[
                    <Node
                      label="11"
                      name="Sub 3 - Branch A"
                      image="guru.jpg"
                      details="Preserved ancient texts and authored a commentary on ritual purity."
                      children={[
                        <Node
                          label="14"
                          name="Branch A - Sub A"
                          image="guru.jpg"
                          details="Emphasized devotion and music in rituals, created a bhajan tradition."
                          children={[
                            <Node
                              label="18"
                              name="Sub A - Tier 1"
                              image="guru.jpg"
                              details="Started a temple that became a pilgrimage center for seekers."
                              children={[
                                <Node
                                  label="22"
                                  name="Tier 1 - Leaf 1"
                                  image="guru.jpg"
                                  details="Led women's participation in daily pooja and spiritual discourse."
                                />,
                                <Node
                                  label="23"
                                  name="Tier 1 - Leaf 2"
                                  image="guru.jpg"
                                  details="Focused on children’s spiritual education and mantra training."
                                />,
                              ]}
                            />,
                            <Node
                              label="19"
                              name="Sub A - Tier 2"
                              image="guru.jpg"
                              details="Known for austerity and long hours of silent pooja in solitude."
                            />,
                          ]}
                        />,
                        <Node
                          label="15"
                          name="Branch A - Sub B"
                          image="guru.jpg"
                          details="Travelled widely conducting pooja camps and healing rituals."
                        />,
                      ]}
                    />,
                  ]}
                />,
                <Node
                  label="8"
                  name="Follower 1 - Sub 4"
                  image="guru.jpg"
                  details="Practiced tantric pooja rituals and protected ancient temple grounds."
                />,
              ]}
            />,
            <Node
              label="3"
              name="Follower 2"
              image="follow.jpg"
              details="Spread Mahaguru's message in the northern region and built community prayer halls."
            />,
            <Node
              label="4"
              name="Follower 3"
              image="follow.jpg"
              details="Known for composing devotional hymns and teaching students."
              children={[
                <Node
                  label="9"
                  name="Follower 3 - Sub A"
                  image="guru.jpg"
                  details="Led weekly poojas for the sick and poor in the villages."
                  children={[
                    <Node
                      label="12"
                      name="Sub A - Branch A"
                      image="guru.jpg"
                      details="Wrote a daily prayer book used in many households."
                      children={[
                        <Node
                          label="16"
                          name="Branch A - Leaf A"
                          image="guru.jpg"
                          details="Encouraged prayer as a daily habit and taught simplicity in rituals."
                          children={[
                            <Node
                              label="20"
                              name="Leaf A - Extension"
                              image="guru.jpg"
                              details="Started pooja education classes for youth."
                              children={[
                                <Node
                                  label="24"
                                  name="Final Leaf 1"
                                  image="guru.jpg"
                                  details="Youngest in the lineage, organizes modern-day digital satsangs."
                                />,
                              ]}
                            />,
                          ]}
                        />,
                      ]}
                    />,
                  ]}
                />,
                <Node
                  label="10"
                  name="Follower 3 - Sub B"
                  image="guru.jpg"
                  details="A fierce protector of dharma, led several processions and awareness drives."
                  children={[
                    <Node
                      label="13"
                      name="Sub B - Branch A"
                      image="guru.jpg"
                      details="Specialist in sacred fire rituals and large community havans."
                      children={[
                        <Node
                          label="17"
                          name="Branch A - Leaf A"
                          image="guru.jpg"
                          details="Performed rituals in times of drought and brought hope to farmers."
                          children={[
                            <Node
                              label="21"
                              name="Leaf A - Extension"
                              image="guru.jpg"
                              details="Merged spiritual teachings with environmental awareness."
                              children={[
                                <Node
                                  label="25"
                                  name="Final Leaf 2"
                                  image="guru.jpg"
                                  details="Current generation disciple promoting eco-friendly pooja."
                                />,
                              ]}
                            />,
                          ]}
                        />,
                      ]}
                    />,
                  ]}
                />,
              ]}
            />,
          ]}
        />
      </div>
    </>
  );
}
