import { useState } from 'react';
import {
    SidePanelMain,
    SidePanelSection,
    SidePanelHeader
} from './SidePanel.styles'

import Card from '../card/Card'
import Button from '../button/Button';


export default function SidePanel({ isOpen, setIsOpen, setActive, widgetList }) {
    

    const handleclick = () => { setIsOpen(false) };

    return (
        isOpen && <SidePanelMain id='sidePan'>
            <SidePanelHeader>
                <Button
                    handleclick={handleclick}
                    label={'close'}
                />
            </SidePanelHeader>
            <SidePanelSection>
                {widgetList.map((index) =>
                    <Card
                        key={index}
                        index={index}
                        draggble={true}
                        setActive={setActive}
                        />)}
            </SidePanelSection>
        </SidePanelMain>
    )
}