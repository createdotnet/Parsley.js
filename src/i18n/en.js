// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};

// Define then the messages
window.ParsleyConfig.i18n.en = $.extend(window.ParsleyConfig.i18n.en || {}, {
  defaultLabel:   "This value",
  defaultMessage: "{{label}} seems to be invalid.",
  type: {
    email:        "{{label}} should be a valid email.",
    url:          "{{label}} should be a valid url.",
    number:       "{{label}} should be a valid number.",
    integer:      "{{label}} should be a valid integer.",
    digits:       "{{label}} should be digits.",
    alphanum:     "{{label}} should be alphanumeric."
  },
  notblank:       "{{label}} should not be blank.",
  required:       "{{label}} is required.",
  pattern:        "{{label}} seems to be invalid.",
  min:            "{{label}} should be greater than or equal to %s.",
  max:            "{{label}} should be lower than or equal to %s.",
  range:          "{{label}} should be between %s and %s.",
  minlength:      "{{label}} is too short. It should have %s characters or more.",
  maxlength:      "{{label}} is too long. It should have %s characters or fewer.",
  length:         "{{label}} length is invalid. It should be between %s and %s characters long.",
  mincheck:       "You must select at least %s choices.",
  maxcheck:       "You must select %s choices or fewer.",
  check:          "You must select between %s and %s choices.",
  equalto:        "{{label}} should be the same."
});

// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.ParsleyValidator)
  window.ParsleyValidator.addCatalog('en', window.ParsleyConfig.i18n.en, true);
