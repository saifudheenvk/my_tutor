import { theme as antd_theme } from 'antd';

export const getThemes = (theme: string) => {
    if (theme === 'dark') {
        return {
            // algorithm: antd_theme.darkAlgorithm,
            components: {
                Layout: {
                    colorBgBase: '#32343C',
                    colorBgHeader: '#32343C'
                },
                Menu: {
                    colorItemBgSelected: '#ffc107'
                },
                Button: {
                    colorBgBase: 'transparent',
                    colorPrimary: '#fff',
                    colorBorder: '#32343C'
                },
                Table: {
                    borderRadius: 2,
                    paddingContentHorizontal: 16,
                    paddingContentVertical: 16
                },
                Input: {
                    colorIcon: 'ffc107d9',
                    colorTextPlaceholder: '#ffffff4d',
                    colorBgBase: 'transparent'
                },
                FloatButton:{
                    colorBgBase: '#49548D',
                }
            },
            token: {
                colorText: '#ffffff80',
                colorPrimary: '#ffc107',
                colorSuccess: '#36b639',
                colorError: '#eb0404',
                colorPrimaryBg: '#ffc107',
                colorBgMask: '#32343C',
                borderRadius: 2,
                colorBgBase: '#32343C',
                colorBgContainer: '#32343C',
                colorIconHover: '#ffffffbf',
                colorTextHeading: '#ffffffd9',
                colorTextSecondary: '#ffffff73',
                colorBorder: '#848c94',
                colorSplit: '#32343C',
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica,'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif",
                colorTextDisabled: '#ffffff4d'
            },
        }
    } else {
        return {
            // algorithm: antd_theme.darkAlgorithm,
            components: {
                Layout: {
                    colorBgBase: '#E8ECEF',
                    colorBgHeader: '#E8ECEF'
                },
                Popover: {
                    colorBgBase: '#fff',
                },
                Table: {
                    borderRadius: 2,
                    paddingContentHorizontal: 16,
                    paddingContentVertical: 16
                },
                Menu: {
                    colorItemBgSelected: '#49548D'
                },
                Button: {
                    colorBgBase: 'transparent',
                    colorPrimary: '#fff',
                    colorBorder: '#C7CBCE'
                },
                Input: {
                    colorIcon: '#49548dd9',
                    colorTextPlaceholder: '#848C94',
                    colorBgBase: 'transparent',
                },
                FloatButton:{
                    colorBgBase: '#49548D',
                }
            },
            token: {
                colorText: '#848C94',
                colorPrimary: '#49548D',
                colorSuccess: '#36b639',
                colorError: '#eb0404',
                colorPrimaryBg: '#49548D',
                colorBgMask: '#E8ECEF',
                borderRadius: 2,
                colorBgBase: '#E8ECEF',
                colorBgContainer: '#E8ECEF',
                colorIconHover: '#ffffffbf',
                colorTextHeading: '#49548D',
                colorTextSecondary: '#848c9473',
                colorBorder: '#E1E6ED',
                colorSplit: '#E8ECEF',
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica,'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif",
                colorTextDisabled: '#ffffff4d'
            },
        }
    }
}