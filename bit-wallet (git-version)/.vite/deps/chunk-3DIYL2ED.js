import {
  ClassNameGenerator_default,
  createChainedFunction,
  debounce,
  deprecatedPropType,
  ownerDocument,
  ownerWindow,
  setRef,
  unsupportedProp,
  useEnhancedEffect_default,
  useId
} from "./chunk-6LXTNIWL.js";
import {
  clsx_default
} from "./chunk-2KHBIA62.js";

// node_modules/@mui/material/utils/createChainedFunction.js
var createChainedFunction_default = createChainedFunction;

// node_modules/@mui/material/utils/debounce.js
var debounce_default = debounce;

// node_modules/@mui/material/utils/deprecatedPropType.js
var deprecatedPropType_default = deprecatedPropType;

// node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument_default = ownerDocument;

// node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow_default = ownerWindow;

// node_modules/@mui/material/utils/setRef.js
var setRef_default = setRef;

// node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/@mui/material/utils/useId.js
var useId_default = useId;

// node_modules/@mui/material/utils/unsupportedProp.js
var unsupportedProp_default = unsupportedProp;

// node_modules/@mui/material/utils/mergeSlotProps.js
function mergeSlotProps(externalSlotProps, defaultSlotProps) {
  if (!externalSlotProps) {
    return defaultSlotProps;
  }
  if (typeof externalSlotProps === "function" || typeof defaultSlotProps === "function") {
    return (ownerState) => {
      const defaultSlotPropsValue = typeof defaultSlotProps === "function" ? defaultSlotProps(ownerState) : defaultSlotProps;
      const externalSlotPropsValue = typeof externalSlotProps === "function" ? externalSlotProps({
        ...ownerState,
        ...defaultSlotPropsValue
      }) : externalSlotProps;
      const className2 = clsx_default(ownerState == null ? void 0 : ownerState.className, defaultSlotPropsValue == null ? void 0 : defaultSlotPropsValue.className, externalSlotPropsValue == null ? void 0 : externalSlotPropsValue.className);
      return {
        ...defaultSlotPropsValue,
        ...externalSlotPropsValue,
        ...!!className2 && {
          className: className2
        },
        ...(defaultSlotPropsValue == null ? void 0 : defaultSlotPropsValue.style) && (externalSlotPropsValue == null ? void 0 : externalSlotPropsValue.style) && {
          style: {
            ...defaultSlotPropsValue.style,
            ...externalSlotPropsValue.style
          }
        }
      };
    };
  }
  const className = clsx_default(defaultSlotProps == null ? void 0 : defaultSlotProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  return {
    ...defaultSlotProps,
    ...externalSlotProps,
    ...!!className && {
      className
    },
    ...(defaultSlotProps == null ? void 0 : defaultSlotProps.style) && (externalSlotProps == null ? void 0 : externalSlotProps.style) && {
      style: {
        ...defaultSlotProps.style,
        ...externalSlotProps.style
      }
    }
  };
}

// node_modules/@mui/material/utils/index.js
var unstable_ClassNameGenerator = {
  configure: (generator) => {
    if (true) {
      console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join("\n"));
    }
    ClassNameGenerator_default.configure(generator);
  }
};

export {
  createChainedFunction_default,
  debounce_default,
  deprecatedPropType_default,
  ownerDocument_default,
  ownerWindow_default,
  setRef_default,
  useEnhancedEffect_default2 as useEnhancedEffect_default,
  useId_default,
  unsupportedProp_default,
  mergeSlotProps,
  unstable_ClassNameGenerator
};
//# sourceMappingURL=chunk-3DIYL2ED.js.map
