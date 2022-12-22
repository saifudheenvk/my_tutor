import { createGlobalStyle } from 'styled-components';

interface IGlobalStyles {
	themeState: string;
	theme: any
}

const GlobalStyles = createGlobalStyle`
    h2 {
		font-weight: 600;
		font-size: 20px;
	}
	body {
		margin: 0;
        font-family: ${(props: IGlobalStyles) => props.theme.fonts.main};
		color: ${(props: IGlobalStyles) =>
		props.themeState === 'dark' ? '#ffffff80' : '#848C94'} !important;
	}

	.ant-layout{
		// background: #f2f8f9 !important;
    }
	.ant-layout {
    background:${(props: IGlobalStyles) =>
		props.themeState === 'dark' ? 'rgb(50, 52, 60)' : '#F3F3F4'} !important;
;
}
${props =>
		props.themeState !== 'dark' &&
		`.ant-btn-default{
	background:#E8ECEF !important;
	border: 1px solid #C7CBCE !important;
}
.ant-btn-disabled, .ant-btn.disabled, .ant-btn[disabled], .ant-btn-disabled:hover, .ant-btn.disabled:hover, .ant-btn[disabled]:hover, .ant-btn-disabled:focus, .ant-btn.disabled:focus, .ant-btn[disabled]:focus, .ant-btn-disabled:active, .ant-btn.disabled:active, .ant-btn[disabled]:active, .ant-btn-disabled.active, .ant-btn.disabled.active, .ant-btn[disabled].active {
background: #b9bec154 !important;
    border-color: #cccccc !important;
    color: #cccccc! important;
}
.ant-layout-footer {
    background: #f3f3f4 !important;
}
`}

	.ant-page-header {
	   font-size: 22px !important;
	}

	.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
		background: none !important;
		border-left: 3px solid #f6a821 !important;
		
	}
	.ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, .ant-menu-inline .ant-menu-item::after{
		border-right: 3px solid #239be1 !important;
	}
	.ant-menu-item .anticon,
    .ant-menu-submenu-title .anticon {
     margin-left: 10px;
    }

	.ant-menu-horizontal{
		border-bottom: none !important;
	}
	 .ant-form-item label {
		font-weight: 600;
		color: #fff;
		}
		.ant-legacy-form-item label{
			color: #848C94;
		font-weight: normal;

		}
      .ant-form-explain {
		color: #6d757d;
		font-size: 12px;
		}
		.ant-legacy-form-explain {
			color: #6d757d;
		font-size: 12px;
}
	  .ant-input-affix-wrapper .ant-input {
		color: #949ba2;
	  }
	  .ant-input[disabled] {
		border: none !important;
	}


	  
	  .ant-card {
		background: ${props =>
		props.themeState === 'dark' ? '#3B3E48' : '#fff'} !important;
	  }

	  .ant-popover {
		background: #32343C;
	  }
	  .ant-select-selection{
		background-color:transparent !important;
	  }
    	  
	  .ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
		background-color: rgba(255, 255, 255, 0.08) !important;
	  }
	  .ant-modal-header {
		border-bottom: 1px solid #5d5c5c45 !important;
	  }
	.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
		color: #848c94 !important;
		border: solid 1px #848c94 !important;
		border-bottom: none !important;
		background: #32343b !important;
	}
	.ant-tabs-bar {
		border-bottom: 1px solid #848c94 !important;
	}

	.ant-table-thead > tr > th {
		border-bottom: 1px solid #848C94 !important;
	}
.ant-table-thead > tr > td {
		border-bottom: 1px solid #848C94 !important;
	}

	.ant-table-tbody > tr.ant-table-row-selected td {
		background: none !important;
	}

	.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
		background: ${props =>
		props.themeState === 'dark' ? '#32343C' : '#E8ECEF'} !important;
		cursor: pointer;
	}

	.ant-table-placeholder {
		background: none !important;
	}

	.ant-page-header-back-button {
		color: #ffffff !important;
	}	  

	 .ant-cascader-menus {
		background-color: #32343c !important;
		border: 1px solid #848c94 !important;
	}	

	 .ant-cascader-menu {
		font-size: 12px;
		height: auto !important;
		}
// 		.ant-list-pagination {
//     position: absolute !important;
//     right: 0 !important;
// 		bottom: -10px !important;
// 		margin-bottom: 16px !important;
// }
.ant-spin-nested-loading {
    margin-bottom: 20px;
}
* {
  scrollbar-color:${props =>
		props.themeState === 'dark' ? '#5b5d62 #3b3e48' : '#fff #e1e6ed'};
  scrollbar-width: thin;
}
  ::-webkit-scrollbar {
    background-color: ${props =>
		props.themeState === 'dark' ? '#2f323b' : '#ffffff'};
		width: 6px;
		height:4px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
::-webkit-scrollbar-thumb {
    background-color: ${props =>
		props.themeState === 'dark' ? '#3b3e48' : '#ffffff'};
    -webkit-border-radius: 1ex;
  }

  .ant-collapse{
	  border:none !important;
  }
  .ant-collapse > .ant-collapse-item {
    border:none !important;
}
.ant-modal-close:hover {
    color: ${props =>
		props.themeState === 'dark' ? '#FFC107' : '#49548D'} !important;
}
.ant-tabs-tab {
	border:none !important;
	background:none !important;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
	color: ${props =>
		props.themeState === 'dark' ? '#FFC107' : '#49548D'} !important;
	background:none !important;
	border:none !important;
	border-bottom: 2px solid ${props =>
		props.themeState === 'dark' ? '#FFC107' : '#49548D'} !important;
  }

  .ant-input::placeholder {
	color: #bfbfbf !important;
	}

`;

export default GlobalStyles;
