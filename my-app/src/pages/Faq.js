import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";

export default function Faq() {
  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        Frequently Asked Questions
      </h2>
      <div
        style={{
          padding: "30px",
        }}
      >
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle={
              <>
                <MDBIcon fas icon="question-circle" /> &nbsp; What is sugaring?
              </>
            }
          >
            Sugaring is a method of hair removal that involves the use of a
            sticky paste made from natural ingredients, such as sugar, lemon
            juice, and water. The paste is applied to the skin and then removed
            along with the hair, leaving the skin smooth and hair-free.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle={
              <>
                <MDBIcon fas icon="question-circle" /> &nbsp; Is sugaring less
                painful than waxing?
              </>
            }
          >
            Many people find sugaring to be less painful than waxing, as the
            paste is applied at a lower temperature and adheres to the hair
            rather than the skin. However, everyone's pain tolerance is
            different, so it's hard to say definitively that one method is
            always less painful than the other.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle={
              <>
                <MDBIcon fas icon="question-circle" /> &nbsp; Can sugaring be
                done on any part of the body?
              </>
            }
          >
            Sugaring can be done on any part of the body where unwanted hair
            grows. It is commonly used to remove hair from the eyebrows, face,
            legs, arms, underarms, and bikini area.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle={
              <>
                <MDBIcon fas icon="question-circle" /> &nbsp; How long does the
                hair need to be for sugaring?
              </>
            }
          >
            The hair should be about ¼ inch long for the best results with
            sugaring. If the hair is too short, the paste may not be able to
            effectively remove it. If the hair is too long, it may be more
            difficult to remove and may cause discomfort.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle={
              <>
                <MDBIcon fas icon="question-circle" /> &nbsp; How long does the
                sugaring process take?
              </>
            }
          >
            The length of the sugaring process will depend on the area being
            treated and the amount of hair being removed. Generally, the process
            takes longer than waxing, as the paste must be applied, allowed to
            cool and harden, and then removed.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={6}
            headerTitle={
              <>
                <MDBIcon fas icon="question-circle" /> &nbsp; How often should
                sugaring be done?
              </>
            }
          >
            The frequency of sugaring will depend on the individual's hair
            growth pattern. Some people may need to have the treatment done
            every two to four weeks, while others may be able to go longer
            between treatments.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={7}
            headerTitle={
              <>
                <MDBIcon fas icon="question-circle" /> &nbsp; Is sugaring
                suitable for all skin types?
              </>
            }
          >
            Sugaring is generally considered to be suitable for all skin types,
            as the paste is made from natural ingredients and is less likely to
            cause irritation or allergies than some other hair removal methods.
            However, it is always a good idea to do a patch test before trying a
            new hair removal method, especially if you have sensitive skin.
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
    </>
  );
}
