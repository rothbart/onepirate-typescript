import React from "react";
import clsx from "clsx";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import MuiTextField, { TextFieldProps } from "@material-ui/core/TextField";

export enum TextFieldSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
  XLarge = "xlarge",
}

const styles = (theme: any) =>
  createStyles({
    root: {
      padding: 0,
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      minWidth: theme.spacing(6),
      backgroundColor: theme.palette.common.white,
      "&$disabled": {
        backgroundColor: theme.palette.divider,
      },
    },
    inputBorder: {
      border: "1px solid #e9ddd0",
      "&:focus": {
        borderColor: theme.palette.secondary.main,
      },
    },
    disabled: {},
    [inputSyleMapping[TextFieldSize.Small]]: {
      fontSize: 14,
      padding: theme.spacing(1),
      width: `calc(100% - ${theme.spacing(2)}px)`,
    },
    [inputSyleMapping[TextFieldSize.Medium]]: {
      fontSize: 16,
      padding: theme.spacing(2),
      width: `calc(100% - ${theme.spacing(4)}px)`,
    },
    [inputSyleMapping[TextFieldSize.Large]]: {
      fontSize: 18,
      padding: 22,
      width: `calc(100% - ${22 * 2}px)`,
    },
    [inputSyleMapping[TextFieldSize.XLarge]]: {
      fontSize: 20,
      padding: 25,
      width: `calc(100% - ${25 * 2}px)`,
    },
    formLabel: {
      fontSize: 18,
    },
    select: {
      height: "auto",
      borderRadius: 0,
    },
    selectIcon: {
      top: "50%",
      marginTop: -12,
    },
  });

interface ExtraTextFieldProps {
  noBorder: boolean;
  size: TextFieldSize;
}

const inputSyleMapping = {
  [TextFieldSize.Small]: "inputSizeSmall",
  [TextFieldSize.Medium]: "inputSizeMedium",
  [TextFieldSize.Large]: "inputSizeLarge",
  [TextFieldSize.XLarge]: "inputSizeXlarge",
};

function TextField(
  props: Omit<TextFieldProps, "size"> &
    WithStyles<typeof styles> &
    ExtraTextFieldProps
) {
  const {
    classes,
    InputProps = {},
    InputLabelProps,
    noBorder = false,
    size,
    SelectProps,
    ...other
  } = props;

  const {
    classes: { input: InputPropsClassesInput, ...InputPropsClassesOther } = {},
    ...InputPropsOther
  } = InputProps;

  const disableUnderline = {
    disableUnderline: true,
  };

  return (
    <MuiTextField
      InputProps={{
        ...disableUnderline,
        classes: {
          root: classes.root,
          input: clsx(
            classes.input,
            classes[inputSyleMapping[size]],
            {
              [classes.inputBorder]: !noBorder,
            },
            InputPropsClassesInput
          ),
          disabled: classes.disabled,
          ...InputPropsClassesOther,
        },
        ...InputPropsOther,
      }}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        className: classes.formLabel,
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          select: classes.select,
          icon: classes.selectIcon,
        },
      }}
      {...other}
    />
  );
}

TextField.defaultProps = {
  size: TextFieldSize.Medium,
};

export default withStyles(styles)(TextField);
