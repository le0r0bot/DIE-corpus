//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// From WAC
var OneNoteRibbonData = {
  "name": "CommandUI",
  "attrs": {
    "xmlns": "http:\u002f\u002fschemas.microsoft.com\u002fsharepoint\u002f"
  },
  children: [{
    "name": "QAT",
    "attrs": {
      "Id": "qatOneNote"
    },
    children: [{
      "name": "Controls",
      "attrs": {
        "Id": "ctrlQAT"
      },
      children: [{
        "name": "Button",
        "attrs": {
          "Id": "qatUndo",
          "Command": "0xA66C4568",
          "Image16by16": "IMGMAP@one@UndoPS",
          "LabelText": "STR@L_Undo"
        }
      }, {
        "name": "Button",
        "attrs": {
          "Id": "qatRedo",
          "Command": "0xF957BFBE",
          "Image16by16": "IMGMAP@one@RedoPS",
          "LabelText": "STR@L_Redo"
        }
      }]
    }]
  }, {
    "name": "Jewel",
    "attrs": {
      "Alt": "STR@L_DocumentMenu",
      "Id": "jewelOneNote",
      "CommandMenuOpen": "0x215688C3",
      "CommandMenuClose": "0xB15EF301",
      "Image": "IMGMAP@one@OfficeButton_OneNote_Normal",
      "ImageDown": "IMGMAP@one@OfficeButton_OneNote_Pressed",
      "ImageHover": "IMGMAP@one@OfficeButton_OneNote_Hover"
    },
    children: [{
      "name": "Menu",
      "attrs": {
        "Id": "menuJewel"
      },
      children: [{
        "name": "MenuSection",
        "attrs": {
          "Id": "msJewel",
          "DisplayMode": "Menu32"
        },
        children: [{
          "name": "Controls",
          "attrs": {
            "Id": "ctrlJewels"
          },
          children: [{
            "name": "Button",
            "attrs": {
              "Alt": "STR@L_OpenInOneNote",
              "Id": "btnjOpenInClient",
              "Command": "0xD5DF198A",
              "Image32by32": "IMGMAP@one@EditInOneNotePH",
              "LabelText": "STR@L_OpenInOneNote",
              "Description": "STR@L_OpenInOneNoteDescription"
            }
          }]
        }]
      }, {
        "name": "MenuSection",
        "attrs": {
          "Id": "msJewelClose",
          "DisplayMode": "Menu32"
        },
        children: [{
          "name": "Controls",
          "attrs": {
            "Id": "ctrlJewels2"
          },
          children: [{
            "name": "Button",
            "attrs": {
              "Alt": "STR@L_Close",
              "Id": "btnjClose",
              "Command": "0xB4CE0C4E",
              "Image32by32": "IMGMAP@one@ClosePH",
              "LabelText": "STR@L_Close",
              "Description": "STR@L_CloseDescription"
            }
          }]
        }]
      }]
    }]
  }, {
    "name": "Ribbon",
    "attrs": {
      "Id": "OneNote",
      "TeamId": "WAC",
      "RootEventCommand": "0xA9CEBE8B",
      "Image32by32GroupPopupDefault": "IMGMAP@NoIconYetPH",
      "TabSwitchCommand": "0xE2EB63FF",
      "TextDirection": "ltr"
    },
    children: [{
      "name": "Tabs",
      "attrs": {
        "Id": "tabs"
      },
      children: [{
        "name": "Tab",
        "attrs": {
          "Id": "tabHome",
          "Description": "",
          "Title": "STR@L_TabHome"
        },
        children: [{
          "name": "Scaling",
          "attrs": {},
          children: [{
            "name": "MaxSize",
            "attrs": {
              "Id": "grpClipboard.Scaling.MaxSize",
              "Sequence": "10",
              "GroupId": "grpClipboard",
              "Size": "LargeMedium"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpBasicText.Scaling.MaxSize",
              "Sequence": "20",
              "GroupId": "grpBasicText",
              "Size": "Large"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpStyles.Scaling.MaxSize",
              "Sequence": "30",
              "GroupId": "grpStyles",
              "Size": "5style"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpNoteTags.Scaling.MaxSize",
              "Sequence": "40",
              "GroupId": "grpNoteTags",
              "Size": "Large"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpSpelling.Scaling.MaxSize",
              "Sequence": "50",
              "GroupId": "grpSpelling",
              "Size": "Large"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpFeedback.Scaling.MaxSize",
              "Sequence": "60",
              "GroupId": "grpFeedback",
              "Size": "Large"
            }
          }, {
            "name": "Scale",
            "attrs": {
              "Id": "grpClipboard.Scaling.LargeSmall",
              "Sequence": "70",
              "GroupId": "grpClipboard",
              "Size": "LargeSmall"
            }
          }, {
            "name": "Scale",
            "attrs": {
              "Id": "grpStyles.Scaling.4style",
              "Sequence": "80",
              "GroupId": "grpStyles",
              "Size": "4style"
            }
          }, {
            "name": "Scale",
            "attrs": {
              "Id": "grpStyles.Scaling.3style",
              "Sequence": "90",
              "GroupId": "grpStyles",
              "Size": "3style"
            }
          }, {
            "name": "Scale",
            "attrs": {
              "Id": "grpStyles.Scaling.MoreOnly",
              "Sequence": "100",
              "GroupId": "grpStyles",
              "Size": "MoreOnly"
            }
          }]
        }, {
          "name": "Groups",
          "attrs": {},
          children: [{
            "name": "Group",
            "attrs": {
              "Id": "grpClipboard",
              "Description": "",
              "Title": "STR@L_GroupClipboard",
              "Template": "tmpClipboard"
            },
            children: [{
              "name": "Controls",
              "attrs": {
                "id": "ctrlClipboard"
              },
              children: [{
                "name": "Button",
                "attrs": {
                  "Id": "fseaPaste",
                  "Command": "0x0E249AB3",
                  "Image16by16": "IMGMAP@one@PastePS",
                  "Image32by32": "IMGMAP@one@PastePH",
                  "LabelText": "STR@L_Paste",
                  "TemplateAlias": "paste"
                }
              }, {
                "name": "Button",
                "attrs": {
                  "Id": "fseaCopy",
                  "Command": "0xC9ADDC35",
                  "Image16by16": "IMGMAP@one@CopyPS",
                  "LabelText": "STR@L_Copy",
                  "TemplateAlias": "copy"
                }
              }, {
                "name": "Button",
                "attrs": {
                  "Id": "fseaCut",
                  "Command": "0x89A31DE2",
                  "Image16by16": "IMGMAP@one@CutPS",
                  "LabelText": "STR@L_Cut",
                  "TemplateAlias": "cut"
                }
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpBasicText",
              "Description": "",
              "Title": "STR@L_GroupBasicText",
              "Template": "tmpBasicText"
            },
            children: [{
              "name": "Controls",
              "attrs": {},
              children: [{
                "name": "ComboBox",
                "attrs": {
                  "Alt": "STR@L_FontName",
                  "Id": "fontName",
                  "MenuAlt": "STR@L_FontName",
                  "Command": "0xCC7BD8E3",
                  "CommandMenuOpen": "0x215688C3",
                  "CommandMenuClose": "0xB15EF301",
                  "QueryCommand": "0x48F327A5",
                  "Width": "80px",
                  "TemplateAlias": "font",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "PopulateDynamically": "true",
                  "PopulateOnlyOnce": "false",
                  "PopulateQueryCommand": "0x0AB30E9C",
                  "CacheMenuVersions": "false",
                  "AllowFreeForm": "true"
                }
              }, {
                "name": "ComboBox",
                "attrs": {
                  "Alt": "STR@L_FontSize",
                  "Id": "fontSize",
                  "MenuAlt": "STR@L_FontSize",
                  "Command": "0x8585837E",
                  "CommandMenuOpen": "0x215688C3",
                  "CommandMenuClose": "0xB15EF301",
                  "QueryCommand": "0xE43EEA4E",
                  "TemplateAlias": "fontSize",
                  "Width": "30px",
                  "AllowFreeForm": "true",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {},
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "fontSizes"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "ctrlFontSizes"
                      },
                      children: [{
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "8",
                          "Id": "8",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize8"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "9",
                          "Id": "9",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize9"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "10",
                          "Id": "10",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize10"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "11",
                          "Id": "11",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize11"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "12",
                          "Id": "12",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize12"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "14",
                          "Id": "14",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize14"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "16",
                          "Id": "16",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize16"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "18",
                          "Id": "18",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize18"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "20",
                          "Id": "20",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize20"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "24",
                          "Id": "24",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize24"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "26",
                          "Id": "26",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize26"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "28",
                          "Id": "28",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize28"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "36",
                          "Id": "36",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize36"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "48",
                          "Id": "48",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize48"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "MenuItemId": "72",
                          "Id": "72",
                          "Command": "0x8585837E",
                          "LabelText": "STR@L_FontSize72"
                        }
                      }]
                    }]
                  }]
                }]
              }, {
                "name": "FlyoutAnchor",
                "attrs": {
                  "Id": "fsfaBullets",
                  "Command": "0xBA49231F",
                  "CommandMenuClose": "0xB15EF301",
                  "MenuAlt": "STR@L_MenuBullets",
                  "LabelText": "STR@L_MenuBullets",
                  "Image16by16": "IMGMAP@one@BulletsPS",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "TemplateAlias": "bullets"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuBullets"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msAllBulletStyles",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "ctrlBulletStyles"
                      },
                      children: [{
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonBulletStyleRemove",
                          "Command": "0x36C0ADC5",
                          "Image16by16": "IMGMAP@one@BulletsPS",
                          "LabelText": "STR@L_RemoveBullet"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonBulletStyleDefault",
                          "Command": "0x36C0ADC5",
                          "Image16by16": "IMGMAP@one@BulletsPS",
                          "LabelText": "STR@L_BulletStyleDefault"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonBulletStyle1",
                          "Command": "0x36C0ADC5",
                          "Image16by16": "IMGMAP@one@BulletsPS",
                          "LabelText": "STR@L_BulletStyle1"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonBulletStyle2",
                          "Command": "0x36C0ADC5",
                          "Image16by16": "IMGMAP@one@BulletsPS",
                          "LabelText": "STR@L_BulletStyle2"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonBulletStyle3",
                          "Command": "0x36C0ADC5",
                          "Image16by16": "IMGMAP@one@BulletsPS",
                          "LabelText": "STR@L_BulletStyle3"
                        }
                      }]
                    }]
                  }]
                }]
              }, {
                "name": "FlyoutAnchor",
                "attrs": {
                  "Id": "fsfaNumbering",
                  "Command": "0xBA49231F",
                  "CommandMenuClose": "0xB15EF301",
                  "MenuAlt": "STR@L_MenuNumbering",
                  "LabelText": "STR@L_MenuNumbering",
                  "Image16by16": "IMGMAP@one@NumberingPS",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "TemplateAlias": "numbering"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuNumbering"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msAllNumberStyles",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "ctrlNumberStyles"
                      },
                      children: [{
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonNumberStyleRemove",
                          "Command": "0x2E609993",
                          "Image16by16": "IMGMAP@one@NumberingPS",
                          "LabelText": "STR@L_RemoveNumber"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonNumberStyleDefault",
                          "Command": "0x2E609993",
                          "Image16by16": "IMGMAP@one@NumberingPS",
                          "LabelText": "STR@L_NumberStyleDefault"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonNumberStyle1",
                          "Command": "0x2E609993",
                          "Image16by16": "IMGMAP@one@NumberingPS",
                          "LabelText": "STR@L_NumberStyle1"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonNumberStyle2",
                          "Command": "0x2E609993",
                          "Image16by16": "IMGMAP@one@NumberingPS",
                          "LabelText": "STR@L_NumberStyle2"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonNumberStyle3",
                          "Command": "0x2E609993",
                          "Image16by16": "IMGMAP@one@NumberingPS",
                          "LabelText": "STR@L_NumberStyle3"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonNumberStyle4",
                          "Command": "0x2E609993",
                          "Image16by16": "IMGMAP@one@NumberingPS",
                          "LabelText": "STR@L_NumberStyle4"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonNumberStyle5",
                          "Command": "0x2E609993",
                          "Image16by16": "IMGMAP@one@NumberingPS",
                          "LabelText": "STR@L_NumberStyle5"
                        }
                      }]
                    }]
                  }]
                }]
              }, {
                "name": "Button",
                "attrs": {
                  "Id": "fseaClearFormatting",
                  "Command": "0x8A46CCCC",
                  "Image16by16": "IMGMAP@one@ClearFormattingPS",
                  "LabelText": "STR@L_ClearFormatting",
                  "TemplateAlias": "clearformat"
                }
              }, {
                "name": "ToggleButton",
                "attrs": {
                  "Id": "fsbcBold",
                  "Alt": "STR@L_Bold",
                  "Command": "0xF6F32311",
                  "QueryCommand": "0x575E8BDF",
                  "Image16by16": "IMGMAP@one@BoldPS",
                  "TemplateAlias": "bold"
                }
              }, {
                "name": "ToggleButton",
                "attrs": {
                  "Id": "fsbcItalic",
                  "Alt": "STR@L_Italic",
                  "Command": "0x693612DA",
                  "QueryCommand": "0xFC350CA2",
                  "Image16by16": "IMGMAP@one@ItalicPS",
                  "TemplateAlias": "italic"
                }
              }, {
                "name": "ToggleButton",
                "attrs": {
                  "Id": "fsbcUnderline",
                  "Alt": "STR@L_Underline",
                  "Command": "0x6F0FAAC6",
                  "QueryCommand": "0x89383C62",
                  "Image16by16": "IMGMAP@one@UnderlinePS",
                  "TemplateAlias": "underline"
                }
              }, {
                "name": "ToggleButton",
                "attrs": {
                  "Id": "fsbcStrikethrough",
                  "Alt": "STR@L_Strikethrough",
                  "Command": "0xF87F5805",
                  "QueryCommand": "0xA3731E4F",
                  "Image16by16": "IMGMAP@one@Strikethrough2PS",
                  "LabelText": "STR@L_Strikethrough",
                  "TemplateAlias": "strikethrough"
                }
              }, {
                "name": "SplitButton",
                "attrs": {
                  "Id": "sbSubscript",
                  "Alt": "STR@L_Subscript",
                  "Command": "0x56BFC40F",
                  "CommandMenuOpen": "0x215688C3",
                  "CommandMenuClose": "0xB15EF301",
                  "Image16by16": "IMGMAP@one@SubscriptPS",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "TemplateAlias": "subscript"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuSubscript"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msSubscript",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "msSubscript.Controls"
                      },
                      children: [{
                        "name": "ToggleButton",
                        "attrs": {
                          "Id": "fsbcSubscript",
                          "Command": "0x56BFC40F",
                          "QueryCommand": "0xEC0CB24D",
                          "Image16by16": "IMGMAP@one@SubscriptPS",
                          "LabelText": "STR@L_Subscript"
                        }
                      }, {
                        "name": "ToggleButton",
                        "attrs": {
                          "Id": "fsbcSuperscript",
                          "Command": "0x0010E69E",
                          "QueryCommand": "0x294CD86A",
                          "Image16by16": "IMGMAP@one@SuperscriptPS",
                          "LabelText": "STR@L_Superscript"
                        }
                      }]
                    }]
                  }]
                }]
              }, {
                "name": "FlyoutAnchor",
                "attrs": {
                  "Id": "fontColor",
                  "Command": "0xBA49231F",
                  "CommandMenuClose": "0xB15EF301",
                  "Image16by16": "IMGMAP@one@FontColorPS",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "LabelText": "STR@L_MenuFontColor",
                  "TemplateAlias": "fontColor"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuFontColor"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "fontColor",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "Font.Color.Menu.Controls"
                      },
                      children: [{
                        "name": "Button",
                        "attrs": {
                          "Command": "0xD0232D5B",
                          "LabelText": "STR@L_Automatic",
                          "Id": "automatic",
                          "Image16by16": "IMGMAP@one@NoIconYetPS"
                        }
                      }]
                    }]
                  }, {
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "Colors"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "Font.Color.Menu.Controls"
                      },
                      children: [{
                        "name": "ColorPicker",
                        "attrs": {
                          "Id": "fontColor",
                          "Command": "0xC6D2EFE6"
                        },
                        children: [{
                          "name": "Colors",
                          "attrs": {},
                          children: [{
                            "name": "Color",
                            "attrs": {
                              "Color": "FFFFFF",
                              "DisplayColor": "#FFFFFF",
                              "Alt": "STR@L_FontColorWhite"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "000000",
                              "DisplayColor": "#000000",
                              "Alt": "STR@L_FontColorBlack"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "E1ECEE",
                              "DisplayColor": "#EEECE1",
                              "Alt": "STR@L_FontColorTan"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "7D491F",
                              "DisplayColor": "#1F497D",
                              "Alt": "STR@L_FontColorDarkBlue"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "BD814F",
                              "DisplayColor": "#4F81BD",
                              "Alt": "STR@L_FontColorBlue"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "4D50C0",
                              "DisplayColor": "#C0504D",
                              "Alt": "STR@L_FontColorRed"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "59BB9B",
                              "DisplayColor": "#9BBB59",
                              "Alt": "STR@L_FontColorOliveGreen"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "A26480",
                              "DisplayColor": "#8064A2",
                              "Alt": "STR@L_FontColorPurple"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "C6AC4B",
                              "DisplayColor": "#4BACC6",
                              "Alt": "STR@L_FontColorAqua"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "4696F7",
                              "DisplayColor": "#F79646",
                              "Alt": "STR@L_FontColorOrange"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "F2F2F2",
                              "DisplayColor": "#F2F2F2",
                              "Alt": "STR@L_FontColorWhiteDarker5pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "7F7F7F",
                              "DisplayColor": "#7F7F7F",
                              "Alt": "STR@L_FontColorBlackLighter50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "C3D9DD",
                              "DisplayColor": "#DDD9C3",
                              "Alt": "STR@L_FontColorTanDarker10pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "F0D9C6",
                              "DisplayColor": "#C6D9F0",
                              "Alt": "STR@L_FontColorDarkBlueLighter80pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "F1E5DB",
                              "DisplayColor": "#DBE5F1",
                              "Alt": "STR@L_FontColorBlueLighter80pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "DBDCF2",
                              "DisplayColor": "#F2DCDB",
                              "Alt": "STR@L_FontColorRedLighter80pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "DDF1EB",
                              "DisplayColor": "#EBF1DD",
                              "Alt": "STR@L_FontColorOliveGreenLighter80pct "
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "ECE0E5",
                              "DisplayColor": "#E5E0EC",
                              "Alt": "STR@L_FontColorPurpleLighter80pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "F3EEDB",
                              "DisplayColor": "#DBEEF3",
                              "Alt": "STR@L_FontColorAquaLighter80pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "DAEAFD",
                              "DisplayColor": "#FDEADA",
                              "Alt": "STR@L_FontColorOrangeLighter80pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "D8D8D8",
                              "DisplayColor": "#D8D8D8",
                              "Alt": "STR@L_FontColorWhiteDarker15pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "595959",
                              "DisplayColor": "#595959",
                              "Alt": "STR@L_FontColorBlackLighter35pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "97BDC4",
                              "DisplayColor": "#C4BD97",
                              "Alt": "STR@L_FontColorTanDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "E2B38D",
                              "DisplayColor": "#8DB3E2",
                              "Alt": "STR@L_FontColorDarkBlueLighter60pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "E4CCB8",
                              "DisplayColor": "#B8CCE4",
                              "Alt": "STR@L_FontColorBlueLighter60pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "B7B9E5",
                              "DisplayColor": "#E5B9B7",
                              "Alt": "STR@L_FontColorRedLighter60pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "BCE3D7",
                              "DisplayColor": "#D7E3BC",
                              "Alt": "STR@L_FontColorOliveGreenLighter60pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "D9C1CC",
                              "DisplayColor": "#CCC1D9",
                              "Alt": "STR@L_FontColorPurpleLighter60pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "E8DDB7",
                              "DisplayColor": "#B7DDE8",
                              "Alt": "STR@L_FontColorAquaLighter60pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "B5D5FB",
                              "DisplayColor": "#FBD5B5",
                              "Alt": "STR@L_FontColorOrangeLighter60pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "BFBFBF",
                              "DisplayColor": "#BFBFBF",
                              "Alt": "STR@L_FontColorWhiteDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "3F3F3F",
                              "DisplayColor": "#3F3F3F",
                              "Alt": "STR@L_FontColorBlackLighter25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "538993",
                              "DisplayColor": "#938953",
                              "Alt": "STR@L_FontColorTanDarker50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "D48D54",
                              "DisplayColor": "#548DD4",
                              "Alt": "STR@L_FontColorDarkBlueLighter40pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "D7B395",
                              "DisplayColor": "#95B3D7",
                              "Alt": "STR@L_FontColorBlueLighter40pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "9496D9",
                              "DisplayColor": "#D99694",
                              "Alt": "STR@L_FontColorRedLighter40pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "9BD6C3",
                              "DisplayColor": "#C3D69B",
                              "Alt": "STR@L_FontColorOliveGreenLighter40pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "C7A2B2",
                              "DisplayColor": "#B2A2C7",
                              "Alt": "STR@L_FontColorPurpleLighter40pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "DCCD92",
                              "DisplayColor": "#92CDDC",
                              "Alt": "STR@L_FontColorAquaLighter40pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "8FC0FA",
                              "DisplayColor": "#FAC08F",
                              "Alt": "STR@L_FontColorOrangeLighter40pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "A5A5A5",
                              "DisplayColor": "#A5A5A5",
                              "Alt": "STR@L_FontColorWhiteDarker35pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "262626",
                              "DisplayColor": "#262626",
                              "Alt": "STR@L_FontColorBlackLighter15pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "294449",
                              "DisplayColor": "#494429",
                              "Alt": "STR@L_FontColorTanDarker75pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "5D3617",
                              "DisplayColor": "#17365D",
                              "Alt": "STR@L_FontColorDarkBlueDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "926036",
                              "DisplayColor": "#366092",
                              "Alt": "STR@L_FontColorBlueDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "343795",
                              "DisplayColor": "#953734",
                              "Alt": "STR@L_FontColorRedDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "3C9276",
                              "DisplayColor": "#76923C",
                              "Alt": "STR@L_FontColorOliveGreenDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "7A495F",
                              "DisplayColor": "#5F497A",
                              "Alt": "STR@L_FontColorPurpleDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "9B8431",
                              "DisplayColor": "#31849B",
                              "Alt": "STR@L_FontColorAquaDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "096CE3",
                              "DisplayColor": "#E36C09",
                              "Alt": "STR@L_FontColorOrangeDarker25pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "7F7F7F",
                              "DisplayColor": "#7F7F7F",
                              "Alt": "STR@L_FontColorWhiteDarker50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "0C0C0C",
                              "DisplayColor": "#0C0C0C",
                              "Alt": "STR@L_FontColorBlackLighter5pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "101B1D",
                              "DisplayColor": "#1D1B10",
                              "Alt": "STR@L_FontColorTan Darker90pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "E3240F",
                              "DisplayColor": "#0F243E",
                              "Alt": "STR@L_FontColorDarkBlueDarker50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "614024",
                              "DisplayColor": "#244061",
                              "Alt": "STR@L_FontColorBlueDarker50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "232463",
                              "DisplayColor": "#632423",
                              "Alt": "STR@L_FontColorRedDarker50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "28614F",
                              "DisplayColor": "#4F6128",
                              "Alt": "STR@L_FontColorOliveGreenDarker50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "51313F",
                              "DisplayColor": "#3F3151",
                              "Alt": "STR@L_FontColorPurpleDarker50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "675820",
                              "DisplayColor": "#205867",
                              "Alt": "STR@L_FontColorAquaDarker50pct"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "064898",
                              "DisplayColor": "#984806",
                              "Alt": "STR@L_FontColorOrangeDarker50pct"
                            }
                          }]
                        }]
                      }]
                    }]
                  }, {
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "fontColor",
                      "Title": "STR@L_MenuStandardColors"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "Font.Color.Menu.Controls"
                      },
                      children: [{
                        "name": "ColorPicker",
                        "attrs": {
                          "Id": "fontColor",
                          "Command": "0xC6D2EFE6"
                        },
                        children: [{
                          "name": "Colors",
                          "attrs": {},
                          children: [{
                            "name": "Color",
                            "attrs": {
                              "Color": "0000C0",
                              "Alt": "STR@L_FontColorDarkRed",
                              "DisplayColor": "#C00000"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "0000FF",
                              "Alt": "STR@L_FontColorRed",
                              "DisplayColor": "#FF0000"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "00C0FF",
                              "Alt": "STR@L_FontColorOrange",
                              "DisplayColor": "#FFC000"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "00FFFF",
                              "Alt": "STR@L_FontColorYellow",
                              "DisplayColor": "#FFFF00"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "50D092",
                              "Alt": "STR@L_FontColorLightGreen",
                              "DisplayColor": "#92D050"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "50B000",
                              "Alt": "STR@L_FontColorDarkGreen",
                              "DisplayColor": "#00B050"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "F0B000",
                              "Alt": "STR@L_FontColorLightBlue",
                              "DisplayColor": "#00B0F0"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "C07000",
                              "Alt": "STR@L_FontColorBlue",
                              "DisplayColor": "#0070C0"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "602000",
                              "Alt": "STR@L_FontColorDarkBlue",
                              "DisplayColor": "#002060"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "A03070",
                              "Alt": "STR@L_FontColorPurple",
                              "DisplayColor": "#7030A0"
                            }
                          }]
                        }]
                      }]
                    }]
                  }]
                }]
              }, {
                "name": "FlyoutAnchor",
                "attrs": {
                  "Id": "fontBackgroundColor",
                  "Command": "0xBA49231F",
                  "CommandMenuClose": "0xB15EF301",
                  "Image16by16": "IMGMAP@one@HighlightPS",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "LabelText": "STR@L_MenuHighlightColor",
                  "TemplateAlias": "fontBackgroundColor"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuFontBackgroundColor"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "fontBackgroundColor"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "Background.Font.Color.Menu.Controls"
                      },
                      children: [{
                        "name": "ColorPicker",
                        "attrs": {
                          "Id": "fontBackgroundColor",
                          "Command": "0x1DE8534A"
                        },
                        children: [{
                          "name": "Colors",
                          "attrs": {},
                          children: [{
                            "name": "Color",
                            "attrs": {
                              "Color": "00FFFF",
                              "Alt": "STR@L_FontColorYellow",
                              "DisplayColor": "#FFFF00"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "00FF00",
                              "Alt": "STR@L_FontColorGreen",
                              "DisplayColor": "#00FF00"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "FFFF00",
                              "Alt": "STR@L_FontColorCyan",
                              "DisplayColor": "#00FFFF"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "FF00FF",
                              "Alt": "STR@L_FontColorMagenta",
                              "DisplayColor": "#FF00FF"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "FF0000",
                              "Alt": "STR@L_FontColorBlue",
                              "DisplayColor": "#0000FF"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "0000FF",
                              "Alt": "STR@L_FontColorRed",
                              "DisplayColor": "#FF0000"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "800000",
                              "Alt": "STR@L_FontColorDarkBlue",
                              "DisplayColor": "#000080"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "808000",
                              "Alt": "STR@L_FontColorDarkCyan",
                              "DisplayColor": "#008080"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "008000",
                              "Alt": "STR@L_FontColorDarkGreen",
                              "DisplayColor": "#008080"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "800080",
                              "Alt": "STR@L_FontColorDarkMagenta",
                              "DisplayColor": "#800080"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "000080",
                              "Alt": "STR@L_FontColorDarkRed",
                              "DisplayColor": "#800000"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "008080",
                              "Alt": "STR@L_FontColorDarkYellow",
                              "DisplayColor": "#808000"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "808080",
                              "Alt": "STR@L_FontColorGrey",
                              "DisplayColor": "#808080"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "C0C0C0",
                              "Alt": "STR@L_FontColorLightGrey",
                              "DisplayColor": "#C0C0C0"
                            }
                          }, {
                            "name": "Color",
                            "attrs": {
                              "Color": "000000",
                              "Alt": "STR@L_FontColorBlack",
                              "DisplayColor": "#000000"
                            }
                          }]
                        }]
                      }]
                    }]
                  }, {
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "noFontBackgroundColor",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "No.Background.Font.Color.Menu.Controls"
                      },
                      children: [{
                        "name": "Button",
                        "attrs": {
                          "Command": "0x2184F4E5",
                          "Id": "none",
                          "LabelText": "STR@L_NoHighlight",
                          "Image16by16": "IMGMAP@one@NoIconYetPS"
                        }
                      }]
                    }]
                  }]
                }]
              }, {
                "name": "Button",
                "attrs": {
                  "Id": "fseaOutdent",
                  "Command": "0xDE14BFF6",
                  "Image16by16": "IMGMAP@one@OutdentPS",
                  "LabelText": "STR@L_DecreaseIndent",
                  "TemplateAlias": "outdent"
                }
              }, {
                "name": "Button",
                "attrs": {
                  "Id": "fseaIndent",
                  "Command": "0x52C8F8EA",
                  "Image16by16": "IMGMAP@one@IndentPS",
                  "LabelText": "STR@L_IncreaseIndent",
                  "TemplateAlias": "indent"
                }
              }, {
                "name": "FlyoutAnchor",
                "attrs": {
                  "Id": "faAlignment",
                  "Command": "0xBA49231F",
                  "CommandMenuClose": "0xB15EF301",
                  "LabelText": "STR@L_MenuAlignment",
                  "Image16by16": "IMGMAP@one@LeftJustifyPS",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "TemplateAlias": "alignment"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuAlignment"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msAlignment",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "msAlignment.Controls"
                      },
                      children: [{
                        "name": "ToggleButton",
                        "attrs": {
                          "Id": "LeftJustify",
                          "Command": "0x9757E6E5",
                          "QueryCommand": "0xE25D77A3",
                          "Image16by16": "IMGMAP@one@LeftJustifyPS",
                          "Alt": "STR@L_AlignTextLeft",
                          "LabelText": "STR@L_AlignTextLeft"
                        }
                      }, {
                        "name": "ToggleButton",
                        "attrs": {
                          "Id": "CenterJustify",
                          "Command": "0xFF58B829",
                          "QueryCommand": "0xC27E85BB",
                          "Image16by16": "IMGMAP@one@CenteredPS",
                          "Alt": "STR@L_JustifyCenter",
                          "LabelText": "STR@L_JustifyCenter"
                        }
                      }, {
                        "name": "ToggleButton",
                        "attrs": {
                          "Id": "RightJustify",
                          "Command": "0x17730524",
                          "QueryCommand": "0x776E8734",
                          "Image16by16": "IMGMAP@one@RightJustifyPS",
                          "Alt": "STR@L_AlignTextRight",
                          "LabelText": "STR@L_AlignTextRight"
                        }
                      }]
                    }]
                  }, {
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msAlignmentLTR",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "msAlignmentLTR.Controls"
                      },
                      children: [{
                        "name": "ToggleButton",
                        "attrs": {
                          "Id": "TextDirLTR",
                          "Command": "0xF47C0C5A",
                          "QueryCommand": "0x44D4414A",
                          "Image16by16": "IMGMAP@one@LtrPS",
                          "LabelText": "STR@L_TextDirLTR"
                        }
                      }, {
                        "name": "ToggleButton",
                        "attrs": {
                          "Id": "TextDirRTL",
                          "Command": "0x4A9EE59A",
                          "QueryCommand": "0x44D43E8A",
                          "Image16by16": "IMGMAP@one@RtlPS",
                          "LabelText": "STR@L_TextDirRTL"
                        }
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpStyles",
              "Description": "",
              "Title": "STR@L_GroupStyles",
              "Template": "tmpStyles"
            },
            children: [{
              "name": "Controls",
              "attrs": {},
              children: [{
                "name": "GalleryButton",
                "attrs": {
                  "Id": "buttonStaticStyle1",
                  "Command": "0x3E088D63",
                  "QueryCommand": "0xBA30CCB1",
                  "InnerHTML": "\u003cDIV class=\u0022PreviewStyleContainer\u0022\u003e\u003cP class=\u0022PreviewStaticStyle1\u0022 id=\u0022labelPreviewContent0\u0022\u003eAaBbCc\u003c\u002fP\u003e\u003cP class=\u0022PreviewStyleLabel\u0022 id=\u0022labelPreviewStyle0\u0022\u003eHeading 1\u003c\u002fP\u003e\u003c\u002fDIV\u003e",
                  "ElementDimensions": "Size64by48",
                  "LabelText": "STR@L_StyleHeading1",
                  "Alt": "STR@L_StyleHeading1",
                  "TemplateAlias": "preview1"
                }
              }, {
                "name": "GalleryButton",
                "attrs": {
                  "Id": "buttonStaticStyle2",
                  "Command": "0x3E088D63",
                  "QueryCommand": "0xBA30CCB1",
                  "InnerHTML": "\u003cDIV class=\u0022PreviewStyleContainer\u0022\u003e\u003cP class=\u0022PreviewStaticStyle2\u0022 id=\u0022labelPreviewContent1\u0022\u003eAaBbCc\u003c\u002fP\u003e\u003cP class=\u0022PreviewStyleLabel\u0022 id=\u0022labelPreviewStyle1\u0022\u003eHeading 2\u003c\u002fP\u003e\u003c\u002fDIV\u003e",
                  "ElementDimensions": "Size64by48",
                  "LabelText": "STR@L_StyleHeading2",
                  "Alt": "STR@L_StyleHeading2",
                  "TemplateAlias": "preview2"
                }
              }, {
                "name": "GalleryButton",
                "attrs": {
                  "Id": "buttonStaticStyle3",
                  "QueryCommand": "0xBA30CCB1",
                  "Command": "0x3E088D63",
                  "InnerHTML": "\u003cDIV class=\u0022PreviewStyleContainer\u0022\u003e\u003cP class=\u0022PreviewStaticStyle3\u0022 id=\u0022labelPreviewContent2\u0022\u003eAaBbCc\u003c\u002fP\u003e\u003cP class=\u0022PreviewStyleLabel\u0022 id=\u0022labelPreviewStyle2\u0022\u003eHeading 3\u003c\u002fP\u003e\u003c\u002fDIV\u003e",
                  "ElementDimensions": "Size64by48",
                  "LabelText": "STR@L_StyleHeading3",
                  "Alt": "STR@L_StyleHeading3",
                  "TemplateAlias": "preview3"
                }
              }, {
                "name": "GalleryButton",
                "attrs": {
                  "Id": "buttonStaticStyle4",
                  "Command": "0x3E088D63",
                  "QueryCommand": "0xBA30CCB1",
                  "InnerHTML": "\u003cDIV class=\u0022PreviewStyleContainer\u0022\u003e\u003cP class=\u0022PreviewStaticStyle4\u0022 id=\u0022labelPreviewContent3\u0022\u003eAaBbCc\u003c\u002fP\u003e\u003cP class=\u0022PreviewStyleLabel\u0022 id=\u0022labelPreviewStyle3\u0022\u003eQuote\u003c\u002fP\u003e\u003c\u002fDIV\u003e",
                  "ElementDimensions": "Size64by48",
                  "LabelText": "STR@L_StyleQuote",
                  "Alt": "STR@L_StyleQuote",
                  "TemplateAlias": "preview4"
                }
              }, {
                "name": "GalleryButton",
                "attrs": {
                  "Id": "buttonStaticStyle5",
                  "Command": "0x3E088D63",
                  "QueryCommand": "0xBA30CCB1",
                  "InnerHTML": "\u003cDIV class=\u0022PreviewStyleContainer\u0022\u003e\u003cP class=\u0022PreviewStaticStyle5\u0022 id=\u0022labelPreviewContent4\u0022\u003eAaBbCc\u003c\u002fP\u003e\u003cP class=\u0022PreviewStyleLabel\u0022 id=\u0022labelPreviewStyle4\u0022\u003eCitation\u003c\u002fP\u003e\u003c\u002fDIV\u003e",
                  "ElementDimensions": "Size64by48",
                  "LabelText": "STR@L_StyleCitation",
                  "Alt": "STR@L_StyleCitation",
                  "TemplateAlias": "preview5"
                }
              }, {
                "name": "FlyoutAnchor",
                "attrs": {
                  "Alt": "STR@L_MenuMoreStyles",
                  "Id": "fsfaMoreStyles",
                  "Command": "0xBA49231F",
                  "MenuAlt": "STR@L_MenuMoreStyles",
                  "LabelText": "STR@L_MenuMoreStyles",
                  "Image32by32": "IMGMAP@one@UxGalWordQuickFormatsHH",
                  "Image16by16": "IMGMAP@one@NoIconYetPS",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "TemplateAlias": "morestyles",
                  "PopulateDynamically": "true",
                  "PopulateOnlyOnce": "false",
                  "PopulateQueryCommand": "0x289E9560",
                  "CommandMenuClose": "0xB15EF301",
                  "CacheMenuVersions": "false"
                }
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpNoteTags",
              "Description": "",
              "Title": "STR@L_GroupTags",
              "Template": "tmpOneButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {
                "Id": "grpNoteTags.Controls"
              },
              children: [{
                "name": "FlyoutAnchor",
                "attrs": {
                  "Id": "flyNoteTags",
                  "Alt": "STR@L_NoteTags",
                  "Image32by32": "IMGMAP@one@NoteTagsHH",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "LabelText": "STR@L_NoteTags",
                  "Command": "0x0316F274",
                  "CommandMenuOpen": "0x215688C3",
                  "CommandMenuClose": "0xB15EF301",
                  "TemplateAlias": "button1"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuNoteTags"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msNoteTagInsert",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "ctrlNoteTagInsert"
                      },
                      children: [{
                        "name": "Button",
                        "attrs": {
                          "Id": "NT0",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@3_16_M",
                          "LabelText": "STR@l_NoteTag_0"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT1",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@13_16_N",
                          "LabelText": "STR@l_NoteTag_1"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT2",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@15_16_N",
                          "LabelText": "STR@l_NoteTag_2"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT3",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@NoteTagNoShape",
                          "LabelText": "STR@l_NoteTag_3"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT4",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@NoteTagNoShape",
                          "LabelText": "STR@l_NoteTag_4"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT5",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@136_16_N",
                          "LabelText": "STR@l_NoteTag_5"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT6",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@118_16_N",
                          "LabelText": "STR@l_NoteTag_6"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT7",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@23_16_N",
                          "LabelText": "STR@l_NoteTag_7"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT8",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@18_16_N",
                          "LabelText": "STR@l_NoteTag_8"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT9",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@125_16_N",
                          "LabelText": "STR@l_NoteTag_9"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT10",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@21_16_N",
                          "LabelText": "STR@l_NoteTag_10"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT11",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@131_16_N",
                          "LabelText": "STR@l_NoteTag_11"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT12",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@17_16_N",
                          "LabelText": "STR@l_NoteTag_12"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT13",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@100_16_N",
                          "LabelText": "STR@l_NoteTag_13"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT14",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@101_16_N",
                          "LabelText": "STR@l_NoteTag_14"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT15",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@122_16_N",
                          "LabelText": "STR@l_NoteTag_15"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT16",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@132_16_N",
                          "LabelText": "STR@l_NoteTag_16"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT17",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@121_16_N",
                          "LabelText": "STR@l_NoteTag_17"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "NT18",
                          "Command": "0x81B914F1",
                          "Image16by16": "IMGMAP@one@125_16_N",
                          "LabelText": "STR@l_NoteTag_18"
                        }
                      }, {
                        "name": "FlyoutAnchor",
                        "attrs": {
                          "Id": "flyNoteTagsMore",
                          "Alt": "STR@L_NoteTagsMore",
                          "Image16by16": "IMGMAP@one@BlankButtonPS",
                          "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                          "LabelText": "STR@L_NoteTagsMore",
                          "Command": "0x0316F274",
                          "TemplateAlias": "button1"
                        },
                        children: [{
                          "name": "Menu",
                          "attrs": {
                            "Id": "menuNoteTagMore"
                          },
                          children: [{
                            "name": "MenuSection",
                            "attrs": {
                              "Id": "msNoteTagMore",
                              "DisplayMode": "Menu16"
                            },
                            children: [{
                              "name": "Controls",
                              "attrs": {
                                "Id": "ctrlNoteTagMore"
                              },
                              children: [{
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT19",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@24_16_N",
                                  "LabelText": "STR@l_NoteTag_19"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT20",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@94_16_M",
                                  "LabelText": "STR@l_NoteTag_20"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT21",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@94_16_M",
                                  "LabelText": "STR@l_NoteTag_21"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT22",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@95_16_M",
                                  "LabelText": "STR@l_NoteTag_22"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT23",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@106_16_N",
                                  "LabelText": "STR@l_NoteTag_23"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT24",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@12_16_M",
                                  "LabelText": "STR@l_NoteTag_24"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT25",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@12_16_M",
                                  "LabelText": "STR@l_NoteTag_25"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT26",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@28_16_M",
                                  "LabelText": "STR@l_NoteTag_26"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT27",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@71_16_M",
                                  "LabelText": "STR@l_NoteTag_27"
                                }
                              }, {
                                "name": "Button",
                                "attrs": {
                                  "Id": "NT28",
                                  "Command": "0x81B914F1",
                                  "Image16by16": "IMGMAP@one@8_16_M",
                                  "LabelText": "STR@l_NoteTag_28"
                                }
                              }]
                            }]
                          }]
                        }]
                      }]
                    }]
                  }, {
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msNoteTagCommands",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "ctrlNoteTagCommands"
                      },
                      children: [{
                        "name": "Button",
                        "attrs": {
                          "Id": "buttonNoteTagRemoveAll",
                          "Command": "0x5C016681",
                          "Image16by16": "IMGMAP@one@NoIconYetPS",
                          "LabelText": "STR@L_NoteTagRemove"
                        }
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpSpelling",
              "Description": "",
              "Title": "STR@L_GroupProofing",
              "Template": "tmpOneButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {
                "Id": "grpSpelling.Controls"
              },
              children: [{
                "name": "SplitButton",
                "attrs": {
                  "Id": "sbSpelling",
                  "Alt": "STR@L_NextSpellingError",
                  "LabelText": "STR@L_NextSpellingError",
                  "Command": "0x9DBB85E9",
                  "CommandMenuOpen": "0x215688C3",
                  "CommandMenuClose": "0xB15EF301",
                  "Image32by32": "IMGMAP@one@SpellingHH",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "TemplateAlias": "button1"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuSpelling"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msSpelling",
                      "DisplayMode": "Menu16"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "msSpelling.Controls"
                      },
                      children: [{
                        "name": "Button",
                        "attrs": {
                          "Id": "fseaNextSpellingError",
                          "Command": "0x9DBB85E9",
                          "Image16by16": "IMGMAP@one@SpellingHS",
                          "LabelText": "STR@L_NextSpellingError"
                        }
                      }, {
                        "name": "Button",
                        "attrs": {
                          "Id": "fseaSetLanguage",
                          "Command": "0x9842D690",
                          "Image16by16": "IMGMAP@one@SetLanguagePS",
                          "LabelText": "STR@L_SetLanguageMenu"
                        }
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpFeedback",
              "Description": "",
              "Title": "STR@L_Feedback",
              "Template": "tmpOneButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {
                "Id": "grpFeedback.Controls"
              },
              children: [{
                "name": "Button",
                "attrs": {
                  "Id": "buttonSurveyOfTheMonth",
                  "Command": "0x5142AA26",
                  "Image32by32": "IMGMAP@one@CustomerFeedbackPH",
                  "LabelText": "STR@L_GiveFeedback",
                  "Alt": "STR@L_GiveFeedback",
                  "TemplateAlias": "button1"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "Tab",
        "attrs": {
          "Id": "tabInsert",
          "Description": "",
          "Title": "STR@L_TabInsert"
        },
        children: [{
          "name": "Scaling",
          "attrs": {
            "Id": "Insert.Scaling"
          },
          children: [{
            "name": "MaxSize",
            "attrs": {
              "Id": "grpInsertNotebook.Scaling.MaxSize",
              "Sequence": "10",
              "GroupId": "grpNotebook",
              "Size": "Large"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpInsertTables.Scaling.MaxSize",
              "Sequence": "20",
              "GroupId": "grpInsertTables",
              "Size": "Large"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpIllustrations.Scaling.MaxSize",
              "Sequence": "30",
              "GroupId": "grpIllustrations",
              "Size": "Large"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpInsertLinks.Scaling.MaxSize",
              "Sequence": "40",
              "GroupId": "grpInsertLinks",
              "Size": "Large"
            }
          }]
        }, {
          "name": "Groups",
          "attrs": {
            "Id": "Insert.Groups"
          },
          children: [{
            "name": "Group",
            "attrs": {
              "Id": "grpNotebook",
              "Description": "",
              "Title": "STR@L_GroupNotebook",
              "Template": "tmpTwoButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {
                "Id": "grpNotebook.Controls"
              },
              children: [{
                "name": "Button",
                "attrs": {
                  "Id": "fseaNew",
                  "Command": "0x1F15EF8B",
                  "Image16by16": "IMGMAP@one@NewHS",
                  "Image32by32": "IMGMAP@one@NewHH",
                  "LabelText": "STR@L_NewPage",
                  "TemplateAlias": "button1"
                }
              }, {
                "name": "Button",
                "attrs": {
                  "Id": "fseaNewSection",
                  "Command": "0xA20EA835",
                  "Image16by16": "IMGMAP@one@JotInsertSectionHS",
                  "Image32by32": "IMGMAP@one@msotJotInsertSectionShortHH",
                  "LabelText": "STR@L_NewSection",
                  "TemplateAlias": "button2"
                }
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpInsertTables",
              "Description": "",
              "Title": "STR@L_GroupTables",
              "Template": "tmpOneButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {
                "Id": "InsertTable.Controls"
              },
              children: [{
                "name": "FlyoutAnchor",
                "attrs": {
                  "Id": "flyInsertTable",
                  "Alt": "STR@L_Table",
                  "Image32by32": "IMGMAP@one@TablePH",
                  "Image16by16": "IMGMAP@one@TablePS",
                  "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                  "LabelText": "STR@L_Table",
                  "Command": "0xB271D79B",
                  "CommandMenuOpen": "0x215688C3",
                  "CommandMenuClose": "0xB15EF301",
                  "TemplateAlias": "button1"
                },
                children: [{
                  "name": "Menu",
                  "attrs": {
                    "Id": "menuInsertTable"
                  },
                  children: [{
                    "name": "MenuSection",
                    "attrs": {
                      "Id": "msInserTable",
                      "Title": "STR@L_MenuInsertTable"
                    },
                    children: [{
                      "name": "Controls",
                      "attrs": {
                        "Id": "Insert.Table.Menu.Controls"
                      },
                      children: [{
                        "name": "InsertTable",
                        "attrs": {
                          "Id": "insertTable",
                          "Alt": "STR@L_MenuInsertTableGrid",
                          "Command": "0x3A21CA91",
                          "MenuSectionInitialTitle": "STR@L_MenuInsertTable",
                          "MenuSectionTitle": "STR@L_MenuInsertTableGrid"
                        }
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpIllustrations",
              "Description": "",
              "Title": "STR@L_GroupMedia",
              "Template": "tmpTwoButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {},
              children: [{
                "name": "Button",
                "attrs": {
                  "Id": "fseaInsertPicture",
                  "Command": "0x9F2ED567",
                  "Image32by32": "IMGMAP@one@InsertPicturePH",
                  "LabelText": "STR@L_Picture",
                  "TemplateAlias": "button1"
                }
              }, {
                "name": "Button",
                "attrs": {
                  "Id": "fseaInsertClipart",
                  "Command": "0x91888286",
                  "Image32by32": "IMGMAP@one@ClipArtHH",
                  "LabelText": "STR@L_ClipArt",
                  "TemplateAlias": "button2"
                }
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpInsertLinks",
              "Description": "",
              "Title": "STR@L_GroupLinks",
              "Template": "tmpOneButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {
                "Id": "ctrlInsert"
              },
              children: [{
                "name": "Button",
                "attrs": {
                  "Id": "fseaInsertHyperlink",
                  "Command": "0xA19EE2D9",
                  "Image32by32": "IMGMAP@one@WebInsertHyperlinkPH",
                  "Image16by16": "IMGMAP@one@WebInsertHyperlinkPS",
                  "LabelText": "STR@L_Hyperlink",
                  "TemplateAlias": "button1"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "Tab",
        "attrs": {
          "Id": "tabHistory",
          "Description": "",
          "Title": "STR@L_TabHistory"
        },
        children: [{
          "name": "Scaling",
          "attrs": {},
          children: [{
            "name": "MaxSize",
            "attrs": {
              "Id": "grpAuthors.Scaling.MaxSize",
              "Sequence": "10",
              "GroupId": "grpAuthors",
              "Size": "Large"
            }
          }, {
            "name": "MaxSize",
            "attrs": {
              "Id": "grpVersions.Scaling.MaxSize",
              "Sequence": "20",
              "GroupId": "grpVersions",
              "Size": "Large"
            }
          }]
        }, {
          "name": "Groups",
          "attrs": {},
          children: [{
            "name": "Group",
            "attrs": {
              "Id": "grpAuthors",
              "Description": "",
              "Title": "STR@L_GroupAuthors",
              "Template": "tmpOneButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {},
              children: [{
                "name": "ToggleButton",
                "attrs": {
                  "Id": "fsbcShowAuthorInfo",
                  "Alt": "STR@L_ShowAuthors",
                  "Command": "0x8C3942AB",
                  "QueryCommand": "0x53A2D8A7",
                  "Image32by32": "IMGMAP@one@ShowAuthorsHH",
                  "Image16by16": "IMGMAP@one@NoIconYetPS",
                  "LabelText": "STR@L_ShowAuthors",
                  "TemplateAlias": "button1"
                }
              }]
            }]
          }, {
            "name": "Group",
            "attrs": {
              "Id": "grpVersions",
              "Description": "",
              "Title": "STR@L_GroupVersions",
              "Template": "tmpOneButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {},
              children: [{
                "name": "ToggleButton",
                "attrs": {
                  "Id": "fsbcShowVersions",
                  "Alt": "STR@L_ShowVersions",
                  "Command": "0xCCB576ED",
                  "QueryCommand": "0x3D948D71",
                  "Image32by32": "IMGMAP@one@VersionsPH",
                  "LabelText": "STR@L_ShowVersions",
                  "TemplateAlias": "button1"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "Tab",
        "attrs": {
          "Id": "tabView",
          "Description": "",
          "Title": "STR@L_TabView"
        },
        children: [{
          "name": "Scaling",
          "attrs": {},
          children: [{
            "name": "MaxSize",
            "attrs": {
              "Id": "grpViews.Scaling.MaxSize",
              "Sequence": "10",
              "GroupId": "grpViews",
              "Size": "Large"
            }
          }]
        }, {
          "name": "Groups",
          "attrs": {},
          children: [{
            "name": "Group",
            "attrs": {
              "Id": "grpViews",
              "Description": "",
              "Title": "STR@L_GroupNotebookViews",
              "Template": "tmpTwoButton"
            },
            children: [{
              "name": "Controls",
              "attrs": {},
              children: [{
                "name": "Button",
                "attrs": {
                  "Alt": "STR@L_ReadView",
                  "Id": "btnReadingMode",
                  "Command": "0xE56FA2A1",
                  "LabelText": "STR@L_ReadView",
                  "Image32by32": "IMGMAP@one@ReadingModePH",
                  "TemplateAlias": "button1"
                }
              }, {
                "name": "ToggleButton",
                "attrs": {
                  "Alt": "STR@L_Edit",
                  "Id": "btnEditOnWeb",
                  "Command": "0x864FCF9B",
                  "QueryCommand": "0x3EC7EEA9",
                  "LabelText": "STR@L_Edit",
                  "Image32by32": "IMGMAP@one@EditPH",
                  "TemplateAlias": "button2"
                }
              }]
            }]
          }]
        }]
      }]
    }, {
      "name": "ContextualTabs",
      "attrs": {
        "Id": "ContextualTabs"
      },
      children: [{
        "name": "ContextualGroup",
        "attrs": {
          "Color": "Yellow",
          "ContextualGroupId": "cgidTableGroup",
          "Id": "ContextualTabs.Tables",
          "Command": "0x712E133C",
          "Title": "STR@L_TabTableTools"
        },
        children: [{
          "name": "Tab",
          "attrs": {
            "Id": "ContextualTabs.Tables.Layout",
            "Description": "",
            "Title": "STR@L_TabLayout"
          },
          children: [{
            "name": "Scaling",
            "attrs": {
              "Id": "ContextualTabs.Tables.Layout.Scaling"
            },
            children: [{
              "name": "MaxSize",
              "attrs": {
                "Sequence": "0",
                "GroupId": "ContextualTabs.Tables.Layout.Select",
                "Size": "Large"
              }
            }, {
              "name": "MaxSize",
              "attrs": {
                "Sequence": "0",
                "GroupId": "ContextualTabs.Tables.Layout.Delete",
                "Size": "Large"
              }
            }, {
              "name": "MaxSize",
              "attrs": {
                "Sequence": "0",
                "GroupId": "ContextualTabs.Tables.Layout.Insert",
                "Size": "Large"
              }
            }, {
              "name": "MaxSize",
              "attrs": {
                "Sequence": "0",
                "GroupId": "ContextualTabs.Tables.Layout.Borders",
                "Size": "Large"
              }
            }, {
              "name": "MaxSize",
              "attrs": {
                "Sequence": "0",
                "GroupId": "ContextualTabs.Tables.Layout.Alignment",
                "Size": "Large"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "10",
                "GroupId": "ContextualTabs.Tables.Layout.Select",
                "Size": "Medium"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "15",
                "GroupId": "ContextualTabs.Tables.Layout.Alignment",
                "Size": "Medium"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "20",
                "GroupId": "ContextualTabs.Tables.Layout.Delete",
                "Size": "Medium"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "30",
                "GroupId": "ContextualTabs.Tables.Layout.Insert",
                "Size": "Medium"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "40",
                "GroupId": "ContextualTabs.Tables.Layout.Select",
                "Size": "Small"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "50",
                "GroupId": "ContextualTabs.Tables.Layout.Insert",
                "Size": "Small"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "55",
                "GroupId": "ContextualTabs.Tables.Layout.Alignment",
                "Size": "Small"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "60",
                "GroupId": "ContextualTabs.Tables.Layout.Select",
                "Size": "Collapsed"
              }
            }, {
              "name": "Scale",
              "attrs": {
                "Sequence": "70",
                "GroupId": "ContextualTabs.Tables.Layout.Delete",
                "Size": "Collapsed"
              }
            }]
          }, {
            "name": "Groups",
            "attrs": {
              "Id": "ContextualTabs.Tables.Layout.Groups"
            },
            children: [{
              "name": "Group",
              "attrs": {
                "Id": "ContextualTabs.Tables.Layout.Select",
                "Description": "",
                "Title": "STR@L_GroupSelect",
                "Template": "tmpFourButton"
              },
              children: [{
                "name": "Controls",
                "attrs": {
                  "Id": "ContextualTabs.Tables.Layout.Select.Controls"
                },
                children: [{
                  "name": "Button",
                  "attrs": {
                    "Id": "btnSelectTable",
                    "Command": "0x8980B8D6",
                    "Image32by32": "IMGMAP@one@TableSelectTablePH",
                    "Image16by16": "IMGMAP@one@TableSelectTablePS",
                    "LabelText": "STR@L_SelectTable",
                    "TemplateAlias": "button1"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnSelectColumn",
                    "Command": "0x8B95D5D4",
                    "Image32by32": "IMGMAP@one@TableSelectColumnPH",
                    "Image16by16": "IMGMAP@one@TableSelectColumnPS",
                    "LabelText": "STR@L_SelectColumn",
                    "TemplateAlias": "button2"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnSelectRow",
                    "Command": "0xD117E3D2",
                    "Image32by32": "IMGMAP@one@TableSelectRowPH",
                    "Image16by16": "IMGMAP@one@TableSelectRowPS",
                    "LabelText": "STR@L_SelectRow",
                    "TemplateAlias": "button3"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnSelectCell",
                    "Command": "0x06A11EAE",
                    "Image32by32": "IMGMAP@one@TableSelectCellPH",
                    "Image16by16": "IMGMAP@one@TableSelectCellPS",
                    "LabelText": "STR@L_SelectCell",
                    "TemplateAlias": "button4"
                  }
                }, {
                  "name": "FlyoutAnchor",
                  "attrs": {
                    "Alt": "STR@L_Select",
                    "Id": "idTableSelect",
                    "Image32by32": "IMGMAP@one@TableSelectTablePH",
                    "LabelText": "STR@L_Select",
                    "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                    "TemplateAlias": "flyout"
                  },
                  children: [{
                    "name": "Menu",
                    "attrs": {
                      "Id": "menuTableSelect"
                    },
                    children: [{
                      "name": "MenuSection",
                      "attrs": {
                        "Id": "msTableSelect",
                        "DisplayMode": "Menu16"
                      },
                      children: [{
                        "name": "Controls",
                        "attrs": {
                          "Id": "ContextualTabs.Tables.Layout.SelectMenu.Controls"
                        },
                        children: [{
                          "name": "Button",
                          "attrs": {
                            "Id": "btnSelectTable",
                            "Command": "0x8980B8D6",
                            "Image32by32": "IMGMAP@one@TableSelectTablePH",
                            "Image16by16": "IMGMAP@one@TableSelectTablePS",
                            "LabelText": "STR@L_SelectTable"
                          }
                        }, {
                          "name": "Button",
                          "attrs": {
                            "Id": "btnSelectColumn",
                            "Command": "0x8B95D5D4",
                            "Image32by32": "IMGMAP@one@TableSelectColumnPH",
                            "Image16by16": "IMGMAP@one@TableSelectColumnPS",
                            "LabelText": "STR@L_SelectColumn"
                          }
                        }, {
                          "name": "Button",
                          "attrs": {
                            "Id": "btnSelectRow",
                            "Command": "0xD117E3D2",
                            "Image32by32": "IMGMAP@one@TableSelectRowPH",
                            "Image16by16": "IMGMAP@one@TableSelectRowPS",
                            "LabelText": "STR@L_SelectRow"
                          }
                        }, {
                          "name": "Button",
                          "attrs": {
                            "Id": "btnSelectCell",
                            "Command": "0x06A11EAE",
                            "Image32by32": "IMGMAP@one@TableSelectCellPH",
                            "Image16by16": "IMGMAP@one@TableSelectCellPS",
                            "LabelText": "STR@L_SelectCell"
                          }
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }, {
              "name": "Group",
              "attrs": {
                "Id": "ContextualTabs.Tables.Layout.Delete",
                "Description": "",
                "Title": "STR@L_GroupDelete",
                "Template": "tmpThreeButton"
              },
              children: [{
                "name": "Controls",
                "attrs": {
                  "Id": "ContextualTabs.Tables.Layout.Delete.Controls"
                },
                children: [{
                  "name": "Button",
                  "attrs": {
                    "Id": "btnTableDelete",
                    "Command": "0x6C7624AB",
                    "Image32by32": "IMGMAP@one@TableDeleteTablePH",
                    "Image16by16": "IMGMAP@one@TableDeleteTablePS",
                    "LabelText": "STR@L_DeleteTable",
                    "TemplateAlias": "button1"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnColumnDelete",
                    "Command": "0xB1CE5D9F",
                    "Image32by32": "IMGMAP@one@TableDeleteColumnPH",
                    "Image16by16": "IMGMAP@one@TableDeleteColumnPS",
                    "LabelText": "STR@L_DeleteColumn",
                    "TemplateAlias": "button2"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnRowDelete",
                    "Command": "0x518E0B87",
                    "Image32by32": "IMGMAP@one@TableDeleteRowPH",
                    "Image16by16": "IMGMAP@one@TableDeleteRowPS",
                    "LabelText": "STR@L_DeleteRow",
                    "TemplateAlias": "button3"
                  }
                }, {
                  "name": "FlyoutAnchor",
                  "attrs": {
                    "Alt": "STR@L_Delete",
                    "Id": "idTableDelete",
                    "Image32by32": "IMGMAP@one@TableDeleteTablePH",
                    "LabelText": "STR@L_Delete",
                    "ImageArrow": "IMGMAP@one@SplitButtonArrow",
                    "TemplateAlias": "flyout"
                  },
                  children: [{
                    "name": "Menu",
                    "attrs": {
                      "Id": "menuTableDelete"
                    },
                    children: [{
                      "name": "MenuSection",
                      "attrs": {
                        "Id": "msTableDelete",
                        "DisplayMode": "Menu16"
                      },
                      children: [{
                        "name": "Controls",
                        "attrs": {
                          "Id": "ContextualTabs.Tables.Layout.DeleteMenu.Controls"
                        },
                        children: [{
                          "name": "Button",
                          "attrs": {
                            "Id": "btnTableDelete",
                            "Command": "0x6C7624AB",
                            "Image32by32": "IMGMAP@one@TableDeleteTablePH",
                            "Image16by16": "IMGMAP@one@TableDeleteTablePS",
                            "LabelText": "STR@L_DeleteTable"
                          }
                        }, {
                          "name": "Button",
                          "attrs": {
                            "Id": "btnColumnDelete",
                            "Command": "0xB1CE5D9F",
                            "Image32by32": "IMGMAP@one@TableDeleteColumnPH",
                            "Image16by16": "IMGMAP@one@TableDeleteColumnPS",
                            "LabelText": "STR@L_DeleteColumn"
                          }
                        }, {
                          "name": "Button",
                          "attrs": {
                            "Id": "btnRowDelete",
                            "Command": "0x518E0B87",
                            "Image32by32": "IMGMAP@one@TableDeleteRowPH",
                            "Image16by16": "IMGMAP@one@TableDeleteRowPS",
                            "LabelText": "STR@L_DeleteRow"
                          }
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }, {
              "name": "Group",
              "attrs": {
                "Id": "ContextualTabs.Tables.Layout.Insert",
                "Description": "",
                "Title": "STR@L_GroupInsert",
                "Template": "tmpFourButton"
              },
              children: [{
                "name": "Controls",
                "attrs": {
                  "Id": "ContextualTabs.Tables.Layout.Insert.Controls"
                },
                children: [{
                  "name": "Button",
                  "attrs": {
                    "Id": "btnInsertRowAbove",
                    "Command": "0x8138CF12",
                    "Image32by32": "IMGMAP@one@TableInsertRowAbovePH",
                    "Image16by16": "IMGMAP@one@TableInsertRowAbovePS",
                    "LabelText": "STR@L_InsertAbove",
                    "TemplateAlias": "button1"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnInsertRowBelow",
                    "Command": "0xDD172B5E",
                    "Image32by32": "IMGMAP@one@TableInsertRowBelowPH",
                    "Image16by16": "IMGMAP@one@TableInsertRowBelowPS",
                    "LabelText": "STR@L_InsertBelow",
                    "TemplateAlias": "button2"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnInsertColumnLeft",
                    "Command": "0x3C041B80",
                    "Image32by32": "IMGMAP@one@TableInsertColumnLeftPH",
                    "Image16by16": "IMGMAP@one@TableInsertColumnLeftPS",
                    "LabelText": "STR@L_InsertLeft",
                    "TemplateAlias": "button3"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnInsertColumnRight",
                    "Command": "0x6773C219",
                    "Image32by32": "IMGMAP@one@TableInsertColumnRightPH",
                    "Image16by16": "IMGMAP@one@TableInsertColumnRightPS",
                    "LabelText": "STR@L_InsertRight",
                    "TemplateAlias": "button4"
                  }
                }]
              }]
            }, {
              "name": "Group",
              "attrs": {
                "Id": "ContextualTabs.Tables.Layout.Borders",
                "Description": "",
                "Title": "STR@L_GroupBorders",
                "Template": "tmpOneButton"
              },
              children: [{
                "name": "Controls",
                "attrs": {
                  "Id": "ContextualTabs.Tables.Layout.Borders.Controls"
                },
                children: [{
                  "name": "ToggleButton",
                  "attrs": {
                    "Id": "btnHideBorders",
                    "Command": "0x6C020651",
                    "QueryCommand": "0x0B155E1B",
                    "Image32by32": "IMGMAP@one@TableHideBordersPH",
                    "LabelText": "STR@L_HideBorders",
                    "Alt": "STR@L_HideBorders",
                    "TemplateAlias": "button1"
                  }
                }]
              }]
            }, {
              "name": "Group",
              "attrs": {
                "Id": "ContextualTabs.Tables.Layout.Alignment",
                "Description": "",
                "Title": "STR@L_GroupAlignment",
                "Template": "tmpThreeButton"
              },
              children: [{
                "name": "Controls",
                "attrs": {
                  "Id": "ContextualTabs.Tables.Layout.Alignment.Controls"
                },
                children: [{
                  "name": "ToggleButton",
                  "attrs": {
                    "Id": "LeftJustify",
                    "Command": "0x6F4BD314",
                    "QueryCommand": "0xE25D77A3",
                    "Image16by16": "IMGMAP@one@LeftJustifyPS",
                    "Image32by32": "IMGMAP@one@NoIconYetPH",
                    "LabelText": "STR@L_AlignLeft",
                    "Alt": "STR@L_AlignTextLeft",
                    "TemplateAlias": "button1"
                  }
                }, {
                  "name": "ToggleButton",
                  "attrs": {
                    "Id": "CenterJustify",
                    "Command": "0xC6A376F8",
                    "QueryCommand": "0xC27E85BB",
                    "Image16by16": "IMGMAP@one@CenteredPS",
                    "Image32by32": "IMGMAP@one@NoIconYetPH",
                    "LabelText": "STR@L_JustifyCenter",
                    "Alt": "STR@L_JustifyCenter",
                    "TemplateAlias": "button2"
                  }
                }, {
                  "name": "ToggleButton",
                  "attrs": {
                    "Id": "RightJustify",
                    "Command": "0xD59F0217",
                    "QueryCommand": "0x776E8734",
                    "Image16by16": "IMGMAP@one@RightJustifyPS",
                    "Image32by32": "IMGMAP@one@NoIconYetPH",
                    "LabelText": "STR@L_AlignRight",
                    "Alt": "STR@L_AlignTextRight",
                    "TemplateAlias": "button3"
                  }
                }]
              }]
            }]
          }]
        }]
      }, {
        "name": "ContextualGroup",
        "attrs": {
          "Color": "Magenta",
          "ContextualGroupId": "cgidPictureToolsGroup",
          "Id": "cgrpPictureToolsGroup",
          "Command": "0xD2057E46",
          "Title": "STR@L_TabPictureTools"
        },
        children: [{
          "name": "Tab",
          "attrs": {
            "Id": "ctabPictureTools",
            "Description": "",
            "Title": "STR@L_TabFormatPicture"
          },
          children: [{
            "name": "Scaling",
            "attrs": {},
            children: [{
              "name": "MaxSize",
              "attrs": {
                "Id": "grpImageText.Scaling.MaxSize",
                "Sequence": "10",
                "GroupId": "grpImageText",
                "Size": "Large"
              }
            }, {
              "name": "MaxSize",
              "attrs": {
                "Id": "grpImageSize.Scaling.MaxSize",
                "Sequence": "20",
                "GroupId": "grpImageSize",
                "Size": "Large"
              }
            }]
          }, {
            "name": "Groups",
            "attrs": {},
            children: [{
              "name": "Group",
              "attrs": {
                "Id": "grpImageText",
                "Description": "",
                "Title": "STR@L_GroupImageText",
                "Template": "tmpOneButton"
              },
              children: [{
                "name": "Controls",
                "attrs": {},
                children: [{
                  "name": "Button",
                  "attrs": {
                    "Id": "btnAltText",
                    "Command": "0x288DC156",
                    "Image32by32": "IMGMAP@one@NoIconYetPH",
                    "Image16by16": "IMGMAP@one@NoIconYetPS",
                    "LabelText": "STR@L_AltText",
                    "TemplateAlias": "button1"
                  }
                }]
              }]
            }, {
              "name": "Group",
              "attrs": {
                "Id": "grpImageSize",
                "Description": "",
                "Title": "STR@L_GroupImageSize",
                "Template": "tmpImageSize"
              },
              children: [{
                "name": "Controls",
                "attrs": {},
                children: [{
                  "name": "Button",
                  "attrs": {
                    "Id": "btnImageGrow",
                    "Command": "0x464C6D12",
                    "Image16by16": "IMGMAP@one@NoIconYetPS",
                    "LabelText": "STR@L_Grow",
                    "TemplateAlias": "grow"
                  }
                }, {
                  "name": "Button",
                  "attrs": {
                    "Id": "btnImageShrink",
                    "Command": "0xF571A3C0",
                    "Image16by16": "IMGMAP@one@NoIconYetPS",
                    "LabelText": "STR@L_Shrink",
                    "TemplateAlias": "shrink"
                  }
                }, {
                  "name": "Label",
                  "attrs": {
                    "Id": "lblScale",
                    "LabelText": "STR@L_PictureScaleLabel",
                    "TemplateAlias": "scaleLabel"
                  }
                }, {
                  "name": "Spinner",
                  "attrs": {
                    "Id": "spnSize",
                    "DefaultUnit": "percent",
                    "DefaultValue": "100",
                    "ImageUpArrow": "IMGMAP@one@PickerArrowUp",
                    "AltUpArrow": "STR@L_More",
                    "ImageDownArrow": "IMGMAP@one@PickerArrow",
                    "AltDownArrow": "STR@L_Less",
                    "AccelerationInterval": "125",
                    "MultiplierInterval": "2000",
                    "Command": "0x50D14FC5",
                    "QueryCommand": "0x3276C7D7",
                    "TemplateAlias": "spinner"
                  },
                  children: [{
                    "name": "Unit",
                    "attrs": {
                      "Name": "percent",
                      "MinimumValue": ".1",
                      "MaximumValue": "128000",
                      "DecimalDigits": "1",
                      "Interval": "1"
                    },
                    children: [{
                      "name": "UnitAbbreviation",
                      "attrs": {
                        "Value": "\u0025"
                      }
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }, {
    "name": "Templates",
    "attrs": {},
    children: [{
      "name": "RibbonTemplates",
      "attrs": {
        "Id": "OneNote.Templates"
      },
      children: [{
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpOneButton"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "Large"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpTwoButton"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "Large"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button2",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpThreeButton"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "Large"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button2",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button3",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "Medium"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "ThreeRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Medium"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button2",
                  "DisplayMode": "Medium"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button3",
                  "DisplayMode": "Medium"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "Small"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "ThreeRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Small"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button2",
                  "DisplayMode": "Small"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button3",
                  "DisplayMode": "Small"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "Collapsed"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "flyout",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpFourButton"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "Large"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button2",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button3",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button4",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "Medium"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }, {
            "name": "Section",
            "attrs": {
              "Type": "ThreeRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button2",
                  "DisplayMode": "Medium"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button3",
                  "DisplayMode": "Medium"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button4",
                  "DisplayMode": "Medium"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "Small"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }, {
            "name": "Section",
            "attrs": {
              "Type": "ThreeRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button2",
                  "DisplayMode": "Small"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button3",
                  "DisplayMode": "Small"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button4",
                  "DisplayMode": "Small"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "Collapsed"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "flyout",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpFiveButton"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "Large"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button1",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button2",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button3",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button4",
                  "DisplayMode": "Large"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "button5",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpClipboard"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "LargeMedium"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "paste",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }, {
            "name": "Section",
            "attrs": {
              "Type": "TwoRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "cut",
                  "DisplayMode": "Medium"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "copy",
                  "DisplayMode": "Medium"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "LargeSmall"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "paste",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }, {
            "name": "Section",
            "attrs": {
              "Type": "TwoRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "cut",
                  "DisplayMode": "Small"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "copy",
                  "DisplayMode": "Small"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpBasicText"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "Large"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "TwoRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "font",
                  "DisplayMode": "Medium"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "fontSize",
                  "DisplayMode": "Medium"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "bullets",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "numbering",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "clearformat",
                  "DisplayMode": "Small"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "bold",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "italic",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "underline",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "strikethrough",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "subscript",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "fontBackgroundColor",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "fontColor",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "outdent",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "indent",
                  "DisplayMode": "Small"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "alignment",
                  "DisplayMode": "Small"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpImageSize"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "Large"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "TwoRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "grow",
                  "DisplayMode": "Medium"
                }
              }]
            }, {
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "shrink",
                  "DisplayMode": "Medium"
                }
              }]
            }]
          }, {
            "name": "Section",
            "attrs": {
              "Type": "Divider"
            }
          }, {
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "scaleLabel",
                  "DisplayMode": "Medium"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "spinner",
                  "DisplayMode": "Medium"
                }
              }]
            }]
          }]
        }]
      }, {
        "name": "GroupTemplate",
        "attrs": {
          "Id": "tmpStyles"
        },
        children: [{
          "name": "Layout",
          "attrs": {
            "Title": "5style"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview1",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview2",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview3",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview4",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview5",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "morestyles",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "4style"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview1",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview2",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview3",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview4",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "morestyles",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "3style"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview1",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview2",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "preview3",
                  "DisplayMode": "Default"
                }
              }, {
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "morestyles",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }, {
          "name": "Layout",
          "attrs": {
            "Title": "MoreOnly"
          },
          children: [{
            "name": "Section",
            "attrs": {
              "Type": "OneRow"
            },
            children: [{
              "name": "Row",
              "attrs": {},
              children: [{
                "name": "ControlRef",
                "attrs": {
                  "TemplateAlias": "morestyles",
                  "DisplayMode": "Large"
                }
              }]
            }]
          }]
        }]
      }]
    }]
  }]
};
var MAX_DUMP_DEPTH = 50;

function dumpObj(obj, name, indent, depth) {
  if (depth > MAX_DUMP_DEPTH) {
    return indent + name + ": <Maximum Depth Reached>\n";
  }

  if (obj instanceof Object || obj instanceof Array) {
    var child = null;
    var output = indent + name + "\n";
    indent += "\t";

    for (var item in obj) {
      child = obj[item];

      if (child instanceof Object || child instanceof Array) {
        output += dumpObj(child, item, indent, depth + 1);
      } else {
        output += indent + item + ": " + child + "\n";
      }
    }

    return output;
  } else {
    return obj;
  }
}

console.log(dumpObj(OneNoteRibbonData, "OneNoteRibbonData", "", 0));
