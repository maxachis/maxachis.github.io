import React from "react";
import Config from "../config";
import 'react-slideshow-image/dist/styles.css'
import '../App.css'
import styled from "styled-components";
import s from "csd";

const Projects = () => {
    const [focusedIdx, setFocusedIdx] = React.useState(0);
    return (
        <div className={"project-container"}>
            <h1>Projects</h1>
            <div>
                <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
                    {Config.PROJECTS.map((entry, index) => (
                        <Tab title={entry.name}/>
                        ))}
                </Tabs>
                <hr/>
                <Sliders focusedIdx={focusedIdx}>
                    {Config.PROJECTS.map((entry, index) => (
                            <div className="slide-container" style={{backgroundImage: "url(" + entry.image +")"}}>
                                <div className="slideshow-content">
                                    <h2>{entry.name}</h2>
                                    {entry.description.map((p) => (
                                        <p>{p}</p>
                                    ))}
                                </div>
                            </div>
                    ))}
                </Sliders>
            </div>
        </div>
    )};


const StyledTabIndicator = styled.div`
  position: absolute;
  // Ensure width of tab indicator properly changes with number of tabs
  width: ${(props) => 100 / props.tabCount}%;
  top: 0%;
  transform: translate(${(props) => props.offset}, 0%);
  transition: transform ${(props) => props.duration}ms;

  // Control appearance of line indicating selected tab
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const StyledTab = styled.li`
  flex: 1;
  height: 100%;

  button {
    cursor: pointer;
    transition: color 0.3s;
    color: ${(props) => (props.isFocused ? "#000" : "#777")};
    border: none;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0);
  }
`;

export const Tab = ({ title, onClick, isFocused }) => {
    return (
        <StyledTab onClick={onClick} isFocused={isFocused}>
            <button>{title}</button>
        </StyledTab>
    );
};

const StyledTabs = styled.div`
  position: relative;
  list-style: none;
  height: 30px;
  z-index: 0;
  ${s.row}
`;

export const Tabs = ({ focusedIdx, children, onChange, duration = 300 }) => {
    return (
        <StyledTabs>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    key: i,
                    isFocused: focusedIdx === i,
                    onClick: (e) => {
                        onChange(i);
                    }
                })
            )}
            <StyledTabIndicator
                duration={duration}
                tabCount={children.length}
                offset={`${100 * focusedIdx}%`}
            />
        </StyledTabs>
    );
};
const StyledOuterSliders = styled.div`
  overflow: hidden;
`;
const StyledSliders = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  transform: translateX(${(props) => `${props.offset}%`});
  transition: transform ${(props) => props.duration}ms;

  div {
    flex-shrink: 0;
    width: 100%;
  }
`;

const Sliders = ({ focusedIdx, children, duration = 300 }) => {
    const offset = -100 * focusedIdx;

    return (
        <StyledOuterSliders>
            <StyledSliders offset={offset} duration={duration}>
                {children}
            </StyledSliders>
        </StyledOuterSliders>
    );
};



export default Projects;
