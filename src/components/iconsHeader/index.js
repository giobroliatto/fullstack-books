import profile from '../../assets/profile.svg';
import bag from '../../assets/bag.svg';
import styled from 'styled-components';

const Icon = styled.li`
  margin-right: 30px;
  width: 25px;
  cursor: pointer;
`

const Icons = styled.ul`
  display: flex;
  align-items: center;
`

const icons = [profile, bag];

function IconsHeader() {
    return (
        
      <Icons>
        { icons.map(icon => (
          <Icon><img src={icon} alt='icon'></img></Icon>
        )) }
      </Icons>

    )
}

export default IconsHeader;