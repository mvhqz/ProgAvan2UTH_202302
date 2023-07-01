import{U as e,k as l,F as t,l as r}from"./indexhtml-731d6daa.js";import{labelProperties as s,helperTextProperties as i,errorMessageProperties as p}from"./vaadin-text-field-e82c445d-b8b0f2d6.js";const c={tagName:"vaadin-select",displayName:"Select",elements:[{selector:"vaadin-select::part(input-field)",displayName:"Field",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,l.height,l.paddingInline]},{selector:"vaadin-select vaadin-select-value-button>vaadin-select-item",displayName:"Field text",properties:[t.textColor,t.fontSize,t.fontWeight]},{selector:"vaadin-select::part(toggle-button)",displayName:"Field toggle button",properties:[r.iconColor,r.iconSize]},{selector:"vaadin-select::part(label)",displayName:"Label",properties:s},{selector:"vaadin-select::part(helper-text)",displayName:"Helper text",properties:i},{selector:"vaadin-select::part(error-message)",displayName:"Error message",properties:p},{selector:"vaadin-select-overlay::part(overlay)",displayName:"Overlay",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,e.padding]},{selector:"vaadin-select-overlay vaadin-select-item",displayName:"Overlay items",properties:[t.textColor,t.fontSize,t.fontWeight]},{selector:"vaadin-select-overlay vaadin-select-item::part(checkmark)::before",displayName:"Overlay item checkmark",properties:[r.iconColor,r.iconSize]}],async setupElement(a){a.overlayClass=a.getAttribute("class"),a.items=[{label:"Item",value:"value"}],a.value="value",a.opened=!0,await new Promise(o=>setTimeout(o,10))},async cleanupElement(a){a.opened=!1}};export{c as default};
