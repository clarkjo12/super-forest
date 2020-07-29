import React from "react";
import {
  faHourglassHalf,
  faSmileBeam,
  faHeartbeat,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "one"
    };
  }

  render() {
    const switchBorder = () => {
      switch (this.state.currentView) {
        case "one":
          return (
            <div className="border-div">
              <div className="tab tab-border"></div>
              <div className="tab"></div>
              <div className="tab"></div>
            </div>
          );
        case "two":
          return (
            <div className="border-div">
              <div className="tab"></div>
              <div className="tab tab-border"></div>
              <div className="tab"></div>
            </div>
          );
        case "three":
          return (
            <div className="border-div">
              <div className="tab"></div>
              <div className="tab "></div>
              <div className="tab tab-border"></div>
            </div>
          );
      }
    };

    const switchView = () => {
      switch (this.state.currentView) {
        case "one":
          return (
            <div className="tab1 tab-item">
              <h1 className="tab1-title tab-title siphon">
                Dont wait too long,
              </h1>
              <p className="tab-p tab-content kollektif">
                Delaying the wrong project could lead to even bigger headaches
                in the future. Wait no longer and call us now to set up a free,
                quick and easy visit, to see how we can help.
              </p>
              <p className="tab-p tab-content kollektif">
                Due to ongoing Covid concerns, we have been accepting
                picture/text messages, of trees in question, for even faster
                quotes!
              </p>
            </div>
          );
        case "two":
          return (
            <div className="tab2 tab-item">
              <h1 className="tab2-title tab-title siphon">Rest Assured</h1>
              <div className="tab-content kollektif">
                <p className="tab-2-left">
                  Insured and bonded to the nines; along with valuable years of
                  experience, applied to safely remove any tree, in any
                  situation. Soon see why so many others have gone Supreme, and
                  witness our 5 star effort first hand.
                </p>

                <div className="tab-2-right">
                  <ul className="kollektif">
                    <li>
                      <FontAwesomeIcon className="bullet-star" icon={faStar} />
                      Tree Removal
                    </li>
                    <li>
                      <FontAwesomeIcon className="bullet-star" icon={faStar} />
                      Stump Grinding
                    </li>
                    <li>
                      <FontAwesomeIcon className="bullet-star" icon={faStar} />
                      Pruning
                    </li>
                    <li>
                      <FontAwesomeIcon className="bullet-star" icon={faStar} />
                      Consulting
                    </li>
                    <li>
                      <FontAwesomeIcon className="bullet-star" icon={faStar} />
                      Mulch, available as well
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        case "three":
          return (
            <div className="tab3 tab-item">
              <h1 className="tab3-title tab-title siphon">Longevity.</h1>
              <p className="tab-p tab-content kollektif">
                Sometimes the whole tree doesnt need to come down. We are one,
                of a very few, who specialize in "Spike-less" tree climbing.
                Climbing a tree you'd like keep, with spikes, will actually
                leave open wounds on the tree, that can be easily infected and cause
                premature death!
              </p>
              <p className="tab-p tab-content kollektif">
                Along with proper, seasoned arboriculture practices; everything we do, is
                to ensure your trees last longer than you do.
              </p>
            </div>
          );
      }
    };

    return (
      <section className="tabs">
        <div className="container siphon">
          <div
            onClick={e => this.setState({ currentView: "one" })}
            className="tab-item"
          >
            <FontAwesomeIcon icon={faHourglassHalf} size="5x" />
          </div>
          <div
            onClick={e => this.setState({ currentView: "two" })}
            className="tab-item"
          >
            <FontAwesomeIcon icon={faSmileBeam} size="5x" />
          </div>
          <div
            onClick={e => this.setState({ currentView: "three" })}
            className="tab-item"
          >
            <FontAwesomeIcon icon={faHeartbeat} size="5x" />
          </div>
        </div>
        <div className="border-container">{switchBorder()}</div>
        <div className="main-content-div">{switchView()}</div>
      </section>
    );
  }
}
