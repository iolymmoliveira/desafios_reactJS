export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeigh: "40px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "var(--dsc-color-placeholder)",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  option: (provided: any) => ({
    ...provided,
    color: "var(--dsc-color-primary)",
  }),
}