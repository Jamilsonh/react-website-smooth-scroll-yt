import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="discover">
                    Discover
                </SidebarLink>
                <SidebarLink to="services">
                    Services
                </SidebarLink>
                <SidebarLink to="about">
                    About
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar