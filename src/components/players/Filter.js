import React, { useRef, useState, useEffect } from "react";
import { FilterStyle } from "../styles/containers/container";
import {
    FilterContainer,
    FilterAlternative,
    DropDown,
    DropDownActions,
    DropDownActionsButton,
    Alternative,
} from "../styles/filter/Filter";

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef("");
    const buttonRef = useRef("");

    const handleApply = () => {
        console.log("filter on division");
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const isDropdownClick =
                dropdownRef.current && dropdownRef.current.contains(e.target);
            const isButtonClick =
                buttonRef.current && buttonRef.current.contains(e.target);

            if (isDropdownClick || isButtonClick) {
                // If the ref is not defined or the user clicked on the menu, we don’t do anything.
                return;
            }
            // Otherwise we close the menu.
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside); // handle desktops
        document.addEventListener("touchstart", handleClickOutside); // handle touch devices

        // Event cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // handle desktops
            document.removeEventListener("touchstart", handleClickOutside); // handle touch devices
        };
    }, [dropdownRef, buttonRef]);

    return (
        <>
            <FilterStyle>
                <FilterContainer>
                    <FilterAlternative
                        ref={buttonRef}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Division
                    </FilterAlternative>
                    {isOpen && (
                        <Alternative>
                            <DropDown ref={dropdownRef}>
                                content will be here
                            </DropDown>
                            <DropDownActions>
                                filter__dropdown__actions
                            </DropDownActions>
                            ‍
                            <DropDownActionsButton onClick={handleApply}>
                                Apply
                            </DropDownActionsButton>
                        </Alternative>
                    )}
                </FilterContainer>
            </FilterStyle>
            ;
        </>
    );
};

export default Filter;
