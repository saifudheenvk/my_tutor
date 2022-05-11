import styled from "styled-components";
import Icon from '@ant-design/icons';
import { Dropdown, Menu } from "antd";
import LanguageSwitch from '../../assets/icons/LanguaguageSwitch';

const LanguageIcon = styled(Icon)`
  margin-top: 20px;
`;

const LanguageSelector = () =>{

    const languages = ['ar', 'en', 'hin'];
    const menu = (
      <Menu>
        {languages.map(lang => (
          <Menu.Item key={lang}>{lang.toLocaleUpperCase()}</Menu.Item>
        ))}
      </Menu>)

return (
    <Dropdown overlay={menu} trigger={['click']}>
      <LanguageIcon component={LanguageSwitch} />
    </Dropdown>
  );

}

export default LanguageSelector