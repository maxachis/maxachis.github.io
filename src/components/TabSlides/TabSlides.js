import React from "react";
import styled from "styled-components";
import s from "csd";



const Tab = ({ title, onClick, isFocused }) => {
    return (
        <StyledTab onClick={onClick} isFocused={isFocused}>
            <button>{title}</button>
        </StyledTab>
    );
};
export {Tab};



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

export const Sliders = ({ focusedIdx, children, duration = 300 }) => {
    const offset = -100 * focusedIdx;

    return (
        <StyledOuterSliders>
            <StyledSliders offset={offset} duration={duration}>
                {children}
            </StyledSliders>
        </StyledOuterSliders>
    );
};

export const TabSlides = ({TitleComponent, SlideContent, arr}) => {
    const [focusedIdx, setFocusedIdx] = React.useState(0);

    return (
        <div>
            <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
                {arr.map((elem) => (
                    <Tab title={<TitleComponent elem={elem}/>}/>
                    // <TabContent elem={elem}/>
                ))}
            </Tabs>
            <hr/>
            <Sliders focusedIdx={focusedIdx}>
                {arr.map((elem) => (
                    <SlideContent elem={elem}/>
                ))}
            </Sliders>
        </div>
    );
};


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
const StyledTabs = styled.div`
  position: relative;
  list-style: none;
  //height: 30px;
  z-index: 0;
  ${s.row}
`;

