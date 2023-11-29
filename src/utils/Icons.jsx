import { ReactComponent as DeleteButton } from "../assets/button-delete.svg";
import { ReactComponent as EditButton } from "../assets/button-edit.svg";
import { ReactComponent as CheckedButton } from "../assets/button-checked.svg";
import { ReactComponent as UncheckedButton } from "../assets/button-unchecked.svg";
import { ReactComponent as ButtonAdd } from "../assets/button-add.svg";
import styled from "@emotion/styled";

export const StyledAddButton = styled(ButtonAdd)({
  "&:hover": {
    "& rect": {
      fill: "#23221F",
    },
  },
});

export const StyledDeleteButton = styled(DeleteButton)({
  "&:hover": {
    "& rect": {
      fill: "#23221F",
    },
  },
});
export const StyledEditButton = styled(EditButton)({
  "&:hover": {
    "& rect": {
      fill: "#23221F",
    },
  },
});
export const StyledCheckedButton = styled(CheckedButton)({
  "&:hover": {
    "& rect": {
      fill: "#23221F",
    },
  },
});
export const StyledUncheckedButton = styled(UncheckedButton)({
  "&:hover": {
    "& rect": {
      fill: "#23221F",
    },
  },
});
