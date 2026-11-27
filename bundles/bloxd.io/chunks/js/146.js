export const id = 146;
export const ids = [146, 147];
export const modules = {
  7532: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(1283);

    function EW(WW) {
      let {
        href: iW,
        children: OW
      } = WW;
      return (0, mW.jsxs)("a", {
        className: "WorldCodeAiExternalLink",
        href: iW,
        target: "_blank",
        rel: "noreferrer noopener",
        children: [OW, " ", (0, mW.jsx)("span", {
          "aria-hidden": "true",
          children: "\u2197"
        })]
      })
    }
  },
  7525: (WW, iW, OW) => {
    OW.d(iW, {
      WorldCodeAiChatGptNotice: () => tW,
      WorldCodeAiDeepSeekNotice: () => wW,
      d: () => PW,
      f: () => cW,
      i: () => LW
    });
    var mW = OW(1172),
      EW = OW(7532),
      NW = OW(1283);
    const PW = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
      LW = "https://openai.com/policies/terms-of-use/",
      cW = "https://openai.com/policies/privacy-policy/";

    function wW() {
      const {
        t: WW
      } = (0, mW.B)();
      return (0, NW.jsxs)(NW.Fragment, {
        children: [WW("superBotXd:deepSeekNotice"), " ", (0, NW.jsx)(EW.d, {
          href: PW,
          children: WW("superBotXd:deepSeekPrivacyPolicy")
        })]
      })
    }

    function tW() {
      const {
        t: WW
      } = (0, mW.B)();
      return (0, NW.jsxs)(NW.Fragment, {
        children: [WW("aiHelperChatGpt:notice"), " ", (0, NW.jsx)(EW.d, {
          href: LW,
          children: WW("aiHelperChatGpt:terms")
        }), " ", (0, NW.jsx)(EW.d, {
          href: cW,
          children: WW("aiHelperChatGpt:privacyPolicy")
        })]
      })
    }
  },
  7519: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => nW
    });
    var mW = OW(62),
      EW = OW(1172),
      NW = OW(136),
      PW = OW(212),
      LW = OW(1532),
      cW = OW(1339),
      wW = OW(25),
      tW = OW(1787),
      ZW = OW(4588),
      xW = OW(4582),
      lW = OW(4287),
      AW = OW(1283);

    function bW(WW) {
      let {
        allowsPersonalizedAds: iW
      } = WW;
      return (0, AW.jsxs)(AW.Fragment, {
        children: [(0, AW.jsx)("h2", {
          children: "4. Cookies and Tracking Technologies"
        }), (0, AW.jsx)("h3", {
          children: "4.1 What Are Cookies?"
        }), (0, AW.jsx)("p", {
          children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
        }), (0, AW.jsx)("h3", {
          children: "4.2 Types of Cookies We Use"
        }), (0, AW.jsx)("p", {
          children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Type of Cookie"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Purpose"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Example"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Functional Cookies"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Ensure the website works properly by enabling basic functions like navigation and settings."
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Remembering your game settings, progress or language preferences."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Analytical Cookies"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Help us understand how players use the site by collecting anonymized data (e.g., pages visited)."
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Tracking the number of visitors or identifying popular game features."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Ad Cookies"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["Manage ad display frequency, prevent repetitive ads, and help detect fraudulent activity", iW ? ", and with your consent, enable personalized advertising based on your interests and browsing behavior." : "."]
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["Ensuring the same ad doesn\u2019t appear too frequently or detecting fraudulent ad interactions", iW ? ", and when you consent, showing you ads that are more relevant to your interests." : "."]
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Notice Acceptance Cookies"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Record whether you have acknowledged or accepted notices, such as our cookie policy."
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Storing your acceptance of our cookie banner or other notifications."
              })
            })]
          }), xW.e && (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Session Recording Storage (only until a recording is sent)"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Store, on your device, parts of a recording that haven\u2019t been sent to us yet, and a small helper that finishes sending them after you close the page. They hold no ID that links them to you or your device."
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Session recordings (section 2.5)."
              })
            })]
          })]
        }), (0, AW.jsx)("h3", {
          children: "4.3 Managing Cookies"
        }), (0, AW.jsx)("p", {
          children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
          }), (0, AW.jsx)("li", {
            children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
          }), (0, AW.jsx)("li", {
            children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
          }), (0, AW.jsx)("li", {
            children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
          })]
        })]
      })
    }

    function jW(WW) {
      let {
        allowsPersonalizedAds: iW
      } = WW;
      return (0, AW.jsxs)(AW.Fragment, {
        children: [(0, AW.jsx)("h2", {
          children: "2. Information We Collect, Why We Collect It, and How It Is Used"
        }), (0, AW.jsx)("h3", {
          children: "2.1 Visitors"
        }), (0, AW.jsx)("h4", {
          children: "2.1.1 Data Collection and Usage"
        }), (0, AW.jsxs)("p", {
          children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information necessary to operate the website and ensure its functionality.", xW.e && " In some places we also record some visits (section 2.5).", " The following types of information may be collected:", " "]
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Type of Information"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What We Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Why We Collect It"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Technical Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "IP address, browser type, device type, screen resolution, language selection"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To ensure the website functions correctly and displays in your preferred language."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Usage Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Pages visited, time spent on pages, clicks, and interactions"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To analyze how the website is used and to improve player experience."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Cookie Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["Cookies that store settings, advert frequency, fraud prevention", iW ? ", and with your consent, enable personalized advertising" : ""]
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["To enhance your experience by remembering your preferences, save your game progress, and ensure ads are displayed an appropriate number of times and to prevent fraudulent activity.", iW ? " With your consent, cookies may also be used to enable personalized advertising based on your interests." : ""]
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Moderation Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Anonymized IP address, Chat logs, username, reports"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To maintain a safe environment in chat rooms and enforce community guidelines."
              })
            })]
          })]
        }), (0, AW.jsx)("p", {
          children: "Data Retention:\xa0Data related to visitors is retained as long as the account is active, or 14 months after your last play session. If a user requests account deletion, the associated data will be deleted promptly, typically within 30 days after the request is processed."
        }), (0, AW.jsx)("h3", {
          children: "2.2 Chat Rooms"
        }), (0, AW.jsx)("p", {
          children: "Bloxd.io includes online social features, such as chat rooms, where players can interact. We implement several measures to ensure chat safety:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Automated Moderation: Tools are used to automatically detect and filter inappropriate content."
          }), (0, AW.jsx)("li", {
            children: "Manual Moderation: Human moderators review flagged content to ensure compliance with our chat safety rules."
          }), (0, AW.jsx)("li", {
            children: "User Reports: players can report content they believe violates guidelines, and it will be reviewed by moderators."
          })]
        }), xW.e && (0, AW.jsxs)(AW.Fragment, {
          children: [(0, AW.jsx)("p", {
            children: "We keep chat logs for moderation because it is in our legitimate interest, and our players', to keep chat safe."
          }), (0, AW.jsx)("p", {
            children: "Chat you send, including private messages, may appear in other players\u2019 session recordings, watched only by Bloxd staff to fix problems in the game, and staff watching one may read the chat sent in its games from these logs (section 2.5). Chat logs are kept 30 days."
          })]
        }), (0, AW.jsx)("p", {
          children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
        }), (0, AW.jsx)("h3", {
          children: "2.3 Registered players"
        }), (0, AW.jsx)("h4", {
          children: "2.3.1 Age Requirements and Parental Consent"
        }), (0, AW.jsxs)("p", {
          children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer to", " ", (0, AW.jsx)("a", {
            href: "https://families.google.com/familylink/privacy/child-policy",
            children: "Google\u2019s Child Privacy Policy"
          }), "."]
        }), (0, AW.jsx)("h4", {
          children: "2.3.2 Data Collection for Registered Players"
        }), (0, AW.jsx)("p", {
          children: "When creating an account, the following data is collected to provide personalized services and enhance user experience:"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Type of Information"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What We Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Why We Collect It"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Account Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Username, email address"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To create and manage user accounts."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Profile Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Optional profile details (e.g., avatar)"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To personalize the user experience."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Technical Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "IP address, device type, browser type"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To secure accounts and ensure the website functions correctly."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Usage Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Pages visited, site interactions"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To improve the user experience and offer tailored features."
              })
            })]
          })]
        }), (0, AW.jsx)("p", {
          children: "Data Retention: Data related to registered players is retained for as long as the account is active, 14 months after your last play session or If a user requests account deletion, the associated data will be deleted promptly, typically within 30 days after the request is processed."
        }), (0, AW.jsx)("h3", {
          children: "2.3.3 Data Collection for Store Purchases"
        }), (0, AW.jsx)("p", {
          children: "When making a store purchase as a registered player, the following data is collected by us or our payment partners listed in section 3.3 to provide a compliant checkout experience and access to their purchase:"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Type of Information"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What We Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Why We Collect It"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Account Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "User ID, email address"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To attach any purchase made to your account."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Technical Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Transaction ID, IP address, device type, browser type"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Combat fraud and reporting."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Usage Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Pages visited, site interactions, purchase history"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: xW.e ? "To secure accounts, ensure the website functions correctly, and understand how players use the store so we can improve it (section 2.6)." : "To secure accounts and ensure the website functions correctly."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Usage Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Pages visited, site interactions"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To improve the user experience and offer tailored features after purchase."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Payment Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Payment Information, Billing address "
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To complete and validate your purchase"
              })
            })]
          })]
        }), (0, AW.jsx)("p", {
          children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
        }), (0, AW.jsx)("p", {
          children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
        }), (0, AW.jsx)("h3", {
          children: "2.4 When You Contact Us"
        }), (0, AW.jsx)("p", {
          children: "When you reach out to us, we collect information to help us respond to you effectively:"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Type of Information"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What We Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Why We Collect It"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Contact Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Your email address or phone number"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To get back to you about your questions or concerns."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Message Content"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What you say in your message"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "To understand and address your issue or feedback."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Technical Info"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Date, time, and details of how you contacted us"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "For security and to ensure we respond appropriately."
              })
            })]
          })]
        }), (0, AW.jsx)("p", {
          children: "Data Retention:\xa0We will retain the personal data collected from your inquiries for up to\xa0three months after your query is resolved or closed. This extended period allows us to ensure that any follow-up questions can be addressed. If the inquiry is from a child under the age of 13, any data collected will be deleted as soon as possible."
        })]
      })
    }

    function UW(WW) {
      let {
        allowsPersonalizedAds: iW
      } = WW;
      return (0, AW.jsxs)(AW.Fragment, {
        children: [(0, AW.jsx)("h3", {
          children: "3.3 Service Providers"
        }), (0, AW.jsx)("p", {
          children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your information. The key service providers we work with are categorized as follows:"
        }), (0, AW.jsx)("h4", {
          children: "Hosting and Data Storage"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Service Provider"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Do"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "AWS Cloud"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Data storage and processing"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Hosts our servers and stores backup, data securely."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Digital Ocean"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Data storage and processing"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Hosts our servers and stores data securely."
              })
            })]
          }), xW.e && (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Hetzner"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Session recordings and analytics data (sections 2.5 and 2.6)"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Runs, in Finland, the tool our staff use to watch session recordings and search our analytics data. It processes and plays back session recordings, which Amazon Web Services stores, and stores the tool\u2019s own staff accounts, saved charts and their results, notes and view log."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Google Firebase"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Email, User data, app usage data, device information"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Provides backend services including database for registered users"
              })
            })]
          })]
        }), (0, AW.jsx)("h4", {
          children: "Website Security and Performance"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Service Provider"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Do"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://www.cloudflare.com/en-gb/privacypolicy/",
                  children: "Cloudflare"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "IP addresses, browser types, device information"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Provides\xa0website security, performance optimization, and protection against malicious attacks."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://policies.google.com/privacy",
                  children: "Google reCAPTCHA"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "IP addresses, browser types, device information"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Protection against malicious attacks."
              })
            })]
          })]
        }), (0, AW.jsx)("h4", {
          children: "Advertising Management"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Service Provider"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Do"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://adinplay.com/privacy-policy",
                  children: "Adinplay"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["Advertiser data, ad performance data", iW ? ", personalized with your consent" : ""]
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Manages and delivers in-game advertisements on our website."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://aditude.com/privacy",
                  children: "Aditude"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["Advertiser data, ad performance data", iW ? ", personalized with your consent" : ""]
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Manages and delivers in-game advertisements on our website."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://policies.google.com/privacy",
                  children: "Google Ads Manager"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["Advertiser data, ad performance data", iW ? ", personalized with your consent" : ""]
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Manages and optimizes the display of advertisements on our website."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://policies.google.com/privacy",
                  children: "Google AdMob"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["Device advertising identifier, IP address, app usage and ad interaction data", iW ? ", personalized with your consent" : ""]
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Delivers banner, interstitial, and rewarded ads within our iOS and Android mobile apps."
              })
            })]
          })]
        }), (0, AW.jsx)("h4", {
          children: "Analytics"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Service Provider"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Do"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://policies.google.com/technologies/partner-sites",
                  children: "Google Analytics"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Usage data, pages visited, interactions on the site"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Analyzes website usage to help us understand how the site is used and improve user experience."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://docs.bytebrew.io/BBSettings/privacypolicy",
                  children: "ByteBrew"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Usage data, device data, interactions on the site"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Analyzes website usage to help us understand how the site is used and improve user experience."
              })
            })]
          })]
        }), (0, AW.jsx)("h4", {
          children: "Content Moderation"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Service Provider"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Do"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://www.lassomoderation.com/privacy-policy/",
                  children: "Lasso Moderation"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Anonymized IP addresses, chat logs, usernames, reports, custom lobby metadata, custom game metadata, thumbnail uploads"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Provides automated and manual moderation services to ensure chat safety and compliance with guidelines."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://www.purgomalum.com/",
                  children: "PurgoMalum"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Chat logs"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Provides profanity filtering for moderating chat messages."
              })
            })]
          })]
        }), (0, AW.jsx)("h4", {
          children: "Payment Providers"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Service Provider"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Do"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "https://xsolla.com/privacypolicy",
                  children: "Xsolla"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "User ID, Email Address, IP addresses, Purchase History, Purchase Request"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Act as our merchant of record, handling all our secure payment protection insurance and checkout experience to complete your purchase and handle payment support."
              })
            })]
          })]
        }), (0, AW.jsx)("h4", {
          children: "Platform Integrations"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Service Provider"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Information Processed"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Do"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: "http://www.google.com/policies/privacy",
                  children: "YouTube API Services"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Public YouTube channel identifiers submitted by creators"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Retrieves and displays publicly available YouTube content."
              })
            })]
          })]
        })]
      })
    }
    const kW = {
        CA: {
          name: "Canada",
          status: "bySubdivision"
        },
        US: {
          name: "the United States",
          status: "bySubdivision"
        },
        AT: {
          name: "Austria",
          status: "off"
        },
        AX: {
          name: "\xc5land",
          status: "off"
        },
        BE: {
          name: "Belgium",
          status: "off"
        },
        BG: {
          name: "Bulgaria",
          status: "off"
        },
        CY: {
          name: "Cyprus",
          status: "off"
        },
        CZ: {
          name: "Czechia",
          status: "off"
        },
        DE: {
          name: "Germany",
          status: "off"
        },
        DK: {
          name: "Denmark",
          status: "off"
        },
        EE: {
          name: "Estonia",
          status: "off"
        },
        ES: {
          name: "Spain",
          status: "off"
        },
        FI: {
          name: "Finland",
          status: "off"
        },
        FR: {
          name: "France",
          status: "off"
        },
        GB: {
          name: "the United Kingdom",
          status: "off"
        },
        GF: {
          name: "French Guiana",
          status: "off"
        },
        GG: {
          name: "Guernsey",
          status: "off"
        },
        GI: {
          name: "Gibraltar",
          status: "off"
        },
        GP: {
          name: "Guadeloupe",
          status: "off"
        },
        GR: {
          name: "Greece",
          status: "off"
        },
        HR: {
          name: "Croatia",
          status: "off"
        },
        HU: {
          name: "Hungary",
          status: "off"
        },
        IE: {
          name: "Ireland",
          status: "off"
        },
        IM: {
          name: "the Isle of Man",
          status: "off"
        },
        IS: {
          name: "Iceland",
          status: "off"
        },
        IT: {
          name: "Italy",
          status: "off"
        },
        JE: {
          name: "Jersey",
          status: "off"
        },
        LI: {
          name: "Liechtenstein",
          status: "off"
        },
        LT: {
          name: "Lithuania",
          status: "off"
        },
        LU: {
          name: "Luxembourg",
          status: "off"
        },
        LV: {
          name: "Latvia",
          status: "off"
        },
        MF: {
          name: "Saint Martin",
          status: "off"
        },
        MQ: {
          name: "Martinique",
          status: "off"
        },
        MT: {
          name: "Malta",
          status: "off"
        },
        NL: {
          name: "the Netherlands",
          status: "off"
        },
        NO: {
          name: "Norway",
          status: "off"
        },
        PL: {
          name: "Poland",
          status: "off"
        },
        PT: {
          name: "Portugal",
          status: "off"
        },
        RE: {
          name: "R\xe9union",
          status: "off"
        },
        RO: {
          name: "Romania",
          status: "off"
        },
        SE: {
          name: "Sweden",
          status: "off"
        },
        SI: {
          name: "Slovenia",
          status: "off"
        },
        SK: {
          name: "Slovakia",
          status: "off"
        },
        YT: {
          name: "Mayotte",
          status: "off"
        }
      },
      sW = {
        "CA-QC": {
          name: "Quebec",
          status: "linked"
        },
        "CA-AB": {
          name: "Alberta",
          status: "linked"
        },
        "CA-BC": {
          name: "British Columbia",
          status: "linked"
        },
        "CA-MB": {
          name: "Manitoba",
          status: "linked"
        },
        "CA-NB": {
          name: "New Brunswick",
          status: "linked"
        },
        "CA-NL": {
          name: "Newfoundland and Labrador",
          status: "linked"
        },
        "CA-NS": {
          name: "Nova Scotia",
          status: "linked"
        },
        "CA-NT": {
          name: "the Northwest Territories",
          status: "linked"
        },
        "CA-NU": {
          name: "Nunavut",
          status: "linked"
        },
        "CA-ON": {
          name: "Ontario",
          status: "linked"
        },
        "CA-PE": {
          name: "Prince Edward Island",
          status: "linked"
        },
        "CA-SK": {
          name: "Saskatchewan",
          status: "linked"
        },
        "CA-YT": {
          name: "Yukon",
          status: "linked"
        },
        "US-AK": {
          name: "Alaska",
          status: "linked"
        },
        "US-AL": {
          name: "Alabama",
          status: "linked"
        },
        "US-AR": {
          name: "Arkansas",
          status: "linked"
        },
        "US-AZ": {
          name: "Arizona",
          status: "linked"
        },
        "US-CA": {
          name: "California",
          status: "linked"
        },
        "US-CO": {
          name: "Colorado",
          status: "linked"
        },
        "US-CT": {
          name: "Connecticut",
          status: "linked"
        },
        "US-DC": {
          name: "the District of Columbia (Washington, DC)",
          status: "linked"
        },
        "US-DE": {
          name: "Delaware",
          status: "linked"
        },
        "US-FL": {
          name: "Florida",
          status: "linked"
        },
        "US-GA": {
          name: "Georgia",
          status: "linked"
        },
        "US-HI": {
          name: "Hawaii",
          status: "linked"
        },
        "US-IA": {
          name: "Iowa",
          status: "linked"
        },
        "US-ID": {
          name: "Idaho",
          status: "linked"
        },
        "US-IL": {
          name: "Illinois",
          status: "linked"
        },
        "US-IN": {
          name: "Indiana",
          status: "linked"
        },
        "US-KS": {
          name: "Kansas",
          status: "linked"
        },
        "US-KY": {
          name: "Kentucky",
          status: "linked"
        },
        "US-LA": {
          name: "Louisiana",
          status: "linked"
        },
        "US-MA": {
          name: "Massachusetts",
          status: "linked"
        },
        "US-MD": {
          name: "Maryland",
          status: "linked"
        },
        "US-ME": {
          name: "Maine",
          status: "linked"
        },
        "US-MI": {
          name: "Michigan",
          status: "linked"
        },
        "US-MN": {
          name: "Minnesota",
          status: "linked"
        },
        "US-MO": {
          name: "Missouri",
          status: "linked"
        },
        "US-MS": {
          name: "Mississippi",
          status: "linked"
        },
        "US-MT": {
          name: "Montana",
          status: "linked"
        },
        "US-NC": {
          name: "North Carolina",
          status: "linked"
        },
        "US-ND": {
          name: "North Dakota",
          status: "linked"
        },
        "US-NE": {
          name: "Nebraska",
          status: "linked"
        },
        "US-NH": {
          name: "New Hampshire",
          status: "linked"
        },
        "US-NJ": {
          name: "New Jersey",
          status: "linked"
        },
        "US-NM": {
          name: "New Mexico",
          status: "linked"
        },
        "US-NV": {
          name: "Nevada",
          status: "linked"
        },
        "US-NY": {
          name: "New York",
          status: "linked"
        },
        "US-OH": {
          name: "Ohio",
          status: "linked"
        },
        "US-OK": {
          name: "Oklahoma",
          status: "linked"
        },
        "US-OR": {
          name: "Oregon",
          status: "linked"
        },
        "US-PA": {
          name: "Pennsylvania",
          status: "linked"
        },
        "US-RI": {
          name: "Rhode Island",
          status: "linked"
        },
        "US-SC": {
          name: "South Carolina",
          status: "off"
        },
        "US-SD": {
          name: "South Dakota",
          status: "linked"
        },
        "US-TN": {
          name: "Tennessee",
          status: "linked"
        },
        "US-TX": {
          name: "Texas",
          status: "linked"
        },
        "US-UT": {
          name: "Utah",
          status: "linked"
        },
        "US-VA": {
          name: "Virginia",
          status: "linked"
        },
        "US-VT": {
          name: "Vermont",
          status: "linked"
        },
        "US-WA": {
          name: "Washington",
          status: "linked"
        },
        "US-WI": {
          name: "Wisconsin",
          status: "linked"
        },
        "US-WV": {
          name: "West Virginia",
          status: "linked"
        },
        "US-WY": {
          name: "Wyoming",
          status: "linked"
        }
      };
    new Set;

    function MW(WW, iW) {
      return WW.replace(/^the /, "").localeCompare(iW.replace(/^the /, ""))
    }
    const KW = new Intl.ListFormat("en-GB", {
      type: "conjunction"
    });

    function SW() {
      const {
        countries: WW,
        subdivisions: iW
      } = function(WW) {
        const iW = [],
          OW = [];
        for (const [mW, EW] of Object.entries(kW))
          if ("bySubdivision" === EW.status) {
            const iW = Object.entries(sW).filter((iW => {
              let [OW, EW] = iW;
              return OW.startsWith(`${mW}-`) && WW(EW)
            })).map((WW => {
              let [, iW] = WW;
              return iW.name
            }));
            iW.length > 0 && OW.push({
              country: EW.name,
              names: iW.sort(MW)
            })
          } else WW({
            ...EW,
            status: EW.status
          }) && iW.push(EW.name);
        return {
          countries: iW.sort(MW),
          subdivisions: OW.sort(((WW, iW) => MW(WW.country, iW.country)))
        }
      }((WW => {
        let {
          status: iW
        } = WW;
        return "off" === iW
      }));
      return (0, AW.jsxs)("ul", {
        children: [(0, AW.jsxs)("li", {
          children: ["Countries and territories: ", KW.format(WW), "."]
        }), iW.map((WW => {
          let {
            country: iW,
            names: OW
          } = WW;
          return (0, AW.jsxs)("li", {
            children: ["In ", iW, ": ", KW.format(OW), "."]
          }, iW)
        }))]
      })
    }

    function YW() {
      return (0, AW.jsxs)(AW.Fragment, {
        children: [(0, AW.jsx)("h3", {
          id: "session-recordings",
          children: "2.5 Session Recordings"
        }), (0, AW.jsx)("p", {
          children: "To fix problems in the game, we pick some players at random when they join Bloxd, players of any age and guests too, and record every visit they make for the next 90 days, once they have agreed to Bloxd\u2019s privacy popup. We record on bloxd.io in a web browser and in our Android and iOS apps, never in our desktop apps or on other websites and platforms that host Bloxd, such as Discord or CrazyGames."
        }), (0, AW.jsx)("p", {
          children: "What we record: your screen in the game and on Bloxd\u2019s pages as you see them, including chat, usernames, other players\u2019 characters and builds; where you move, click, tap and scroll, and which keys and buttons you press; which pages, games and menus you open and what happens in them, such as dying, changing a setting or starting a purchase; how smoothly the game runs (frame rate, loading times, connection and error messages), the kind of device and browser you use, your country, and when the recording was made. Text typed into input fields, such as the chat box, is hidden, as is chat you are still typing on a controller\u2019s on-screen keyboard. Everything else on screen is recorded, including the Code Editor and the World Code you write in it, the AI Helper\u2019s answers, signs, name tags, party codes, lobby names, and text a page shows back as you type, such as search hints and previews. We never record sound, your camera or microphone, payment pages or adverts. Chat you send, including private messages, can appear in other players\u2019 recordings, and staff may also read the chat sent in a recorded game from the chat logs we keep for moderation (section 2.2)."
        }), (0, AW.jsx)("p", {
          children: "Each recording is linked to your player ID: your account\u2019s when you are logged in, else your guest ID, so our staff can watch a picked player\u2019s recordings together. It also keeps a scrambled code made from your internet (IP) address, never the address itself, and whether your network looks shared by many people, such as a school\u2019s."
        }), (0, AW.jsx)("p", {
          children: "Why: to fix problems in the game, which is in our legitimate interest. Recording the same player for 90 days shows us bugs that only appear over time, such as lost progress, and whether our fixes work. Only Bloxd staff can watch recordings, and we never use one to make decisions about anyone, such as bans. If a recording shows a bug, our staff may look at your other recordings, and may keep recording every game you play for up to 14 days to find and fix it; while that happens you\u2019ll see \u201cRecording to help fix a bug\u201d on screen. In our iOS app, you\u2019ll see a red dot on screen while any other recording is made. We use your player ID in recordings only to keep Bloxd working: to find, fix and check bugs. We never use it to contact you, to show you adverts or for anything else."
        }), (0, AW.jsx)("p", {
          children: "Where we never record: we only record when your IP address shows which country you\u2019re in and your device\u2019s time zone is in the same country, never when your IP address belongs to a VPN, proxy or hosting service, and never in these places:"
        }), (0, AW.jsx)(SW, {}), (0, AW.jsx)("p", {
          children: "Where they\u2019re kept: recordings are stored with Amazon Web Services, and their events in our analytics database at DigitalOcean, both in the United States. Our staff tool at Hetzner in Finland processes them and lets staff watch them (section 2.6). Section 6 explains how we protect data stored in other countries."
        }), (0, AW.jsx)("p", {
          children: "How long: we delete each recording 90 days after it is made. If our staff keep a recording to fix a bug, for example one that may come back in next year\u2019s Halloween or Christmas event, we keep that copy until the bug is fixed, and never more than a year after it was made. Chat logs, which staff may see beside a recording, are kept 30 days."
        }), (0, AW.jsxs)("p", {
          children: ["Your right to object: you can object to being recorded at any time, without giving a reason, whether you are logged in or a guest. Email", " ", (0, AW.jsx)("a", {
            href: "mailto:privacy@bloxd.io",
            children: "privacy@bloxd.io"
          }), " with your player ID, shown in Settings (Account) on bloxd.io and in our phone apps, and from your next visit we never record you under that ID."]
        }), (0, AW.jsxs)("p", {
          children: ["Your rights: to ask about recordings of your play or have them deleted, email us at ", (0, AW.jsx)("a", {
            href: "mailto:privacy@bloxd.io",
            children: "privacy@bloxd.io"
          }), " with your player ID. We reply within 30 days (section 8)."]
        })]
      })
    }

    function yW() {
      return (0, AW.jsxs)(AW.Fragment, {
        children: [(0, AW.jsx)("h3", {
          children: "2.6 Our Staff Analytics Tool"
        }), (0, AW.jsx)("p", {
          children: "Bloxd staff use a tool we run ourselves, PostHog, on servers at Hetzner in Finland, to watch session recordings (section 2.5), which Amazon Web Services stores in the United States, and to search our analytics data. Through it, staff can see how players use Bloxd, store purchases (what was bought, when and for how much, but never card or bank details), and AI Helper questions and answers that players chose to share with us, which we keep for 30 days."
        }), (0, AW.jsx)("p", {
          children: "Only Bloxd staff can use it. We use each kind of data only for the reasons this policy gives for collecting it: for example, shared AI Helper conversations only to improve the AI Helper. Besides parts of session recordings, the tool keeps staff accounts, saved charts and their results, notes and a log of what staff viewed, for the times in section 7."
        })]
      })
    }

    function TW() {
      return (0, AW.jsxs)(AW.Fragment, {
        children: [(0, AW.jsx)("h2", {
          children: "8. Your Rights"
        }), (0, AW.jsx)("h3", {
          children: "8.1 Your Choices and Control"
        }), (0, AW.jsx)("p", {
          children: "As a user of Bloxd.io, you have the right to:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Access Your Data: Request a copy of the personal information we hold about you."
          }), (0, AW.jsx)("li", {
            children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
          }), (0, AW.jsx)("li", {
            children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
          }), (0, AW.jsx)("li", {
            children: "Limit Data Collection: Request that we limit the collection or use of your data."
          }), (0, AW.jsx)("li", {
            children: "Object to Data Processing: Object to certain types of data processing, such as for marketing purposes."
          }), (0, AW.jsxs)("li", {
            children: ["Withdraw Consent: Where we rely on your consent, withdraw it at any time, as described in section 3.2, or for the AI Helper in section", xW.e ? " 2.7" : " 2.5", "."]
          }), xW.e && (0, AW.jsx)("li", {
            children: "Session Recordings: you can object to being recorded, or ask to see or delete recordings of your play (section 2.5)."
          })]
        }), (0, AW.jsx)("h3", {
          children: "8.2 Parental Choices and Control "
        }), (0, AW.jsx)("p", {
          children: "As a verified parent or guardian of a child using Bloxd.io, you have the right to:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Access Your Child\u2019s Data: Request a copy of the personal information we\u2019ve collected about your child, including details like username, email address, and chat logs."
          }), (0, AW.jsx)("li", {
            children: "Correct Your Child\u2019s Data: Ask us to correct any inaccurate or incomplete information about your child."
          }), (0, AW.jsx)("li", {
            children: "Delete Your Child\u2019s Data: Request the deletion of your child\u2019s account and all associated data. Once verified, we will delete this data promptly, typically within 30 days. This will also remove any saved progress in the game."
          }), (0, AW.jsx)("li", {
            children: "Limit Data Collection for Your Child: Request that we limit the collection or use of certain types of data, such as usage information, from your child."
          })]
        }), xW.e && (0, AW.jsx)("p", {
          children: "For session recordings, you can also object to your child being recorded, or ask to see or delete recordings of their play (section 2.5)."
        }), (0, AW.jsx)("h3", {
          children: "8.3 How to Exercise Your Rights"
        }), (0, AW.jsx)("p", {
          children: "To exercise any of these rights, contact us using the information provided below. We may require proof of identity before proceeding with your request. Responses will typically be provided within 30 days."
        }), (0, AW.jsx)("h3", {
          children: "8.4 Your California Privacy Rights"
        }), (0, AW.jsx)("p", {
          children: "If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (together, the \u201cCCPA\u201d), gives you the rights below. This section supplements the rest of this Privacy Policy."
        }), (0, AW.jsx)("p", {
          children: "Personal Information We Collect: In the past 12 months we have collected the following categories of personal information, from you, from your device, and from the service providers listed in section 3.3, for the purposes described in sections 2 and 3:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Identifiers, such as your username, email address, user ID, IP address and device advertising identifiers."
          }), (0, AW.jsx)("li", {
            children: "Internet or other electronic network activity information, such as pages visited, interactions with our website and ad interactions."
          }), (0, AW.jsx)("li", {
            children: "Commercial information, such as your purchase history."
          })]
        }), (0, AW.jsx)("p", {
          children: "Sale and Sharing of Personal Information: Our advertising partners listed in section 3.3 may collect identifiers and internet or other electronic network activity information through cookies and similar technologies on our website to deliver and measure ads. This may be considered a \u201csale\u201d or \u201csharing\u201d of personal information under the CCPA."
        }), (0, AW.jsx)("p", {
          children: "Under the CCPA, you have the right to:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Know: Request the categories and specific pieces of personal information we have collected about you, and how we use and disclose it."
          }), (0, AW.jsx)("li", {
            children: "Delete: Request the deletion of personal information we have collected from you."
          }), (0, AW.jsx)("li", {
            children: "Correct: Ask us to correct inaccurate personal information we hold about you."
          }), (0, AW.jsx)("li", {
            children: "Opt Out of Sale or Sharing: Opt out of the sale or sharing of your personal information."
          }), (0, AW.jsx)("li", {
            children: "Non-Discrimination: Exercise any of these rights without being treated differently by us."
          })]
        }), (0, AW.jsxs)("p", {
          children: ["To opt out of the sale or sharing of your personal information, use the \u201cDo Not Sell My Personal Information\u201d link shown to California visitors in the footer of our home page and at the top of this Privacy Policy, or email us at", " ", (0, AW.jsx)("a", {
            href: "mailto:privacy@bloxd.io",
            children: "privacy@bloxd.io"
          }), ". To exercise your other rights, contact us as described in section 8.3. You may also ask an authorized agent to make a request on your behalf; we may ask the agent for proof of your permission and ask you to verify your identity with us."]
        })]
      })
    }
    var JW = OW(7525);

    function hW() {
      const {
        t: WW
      } = (0, EW.B)(), iW = !(0, PW.shouldUseUkPrivacyPolicy)(), OW = xW.e ? "2.7" : "2.5";
      return (0, AW.jsxs)("div", {
        className: "LegalText",
        children: [(0, AW.jsx)("div", {
          className: "BloxdInformationHeader FullyFancyText",
          children: WW("homePage:privacyPolicy")
        }), (0, AW.jsx)("p", {
          children: (0, AW.jsxs)("em", {
            children: ["Last updated: ", ZW.f.toLocaleDateString()]
          })
        }), (0, AW.jsx)("p", {
          children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
        }), (0, AW.jsx)("h2", {
          children: "1. Who We Are"
        }), (0, AW.jsx)("p", {
          children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you understand what information we collect, why we collect it, and how we keep it safe. We also want to ensure that you know your rights and how you can exercise them."
        }), (0, AW.jsx)("p", {
          children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players while respecting the privacy and concerns of parents and guardians."
        }), (0, AW.jsx)(jW, {
          allowsPersonalizedAds: iW
        }), xW.e && (0, AW.jsxs)(AW.Fragment, {
          children: [(0, AW.jsx)(YW, {}), (0, AW.jsx)(yW, {})]
        }), (0, AW.jsxs)("h3", {
          children: [OW, " The AI Helper in the Code Editor"]
        }), (0, AW.jsx)("p", {
          children: "The Code Editor\u2019s AI Helper answers questions about the code of games made in Bloxd.io. To answer, the AI is sent your question, your game\u2019s code, the recent messages in that chat, errors your game showed and the AI notes you kept. When the AI looks it up, it is also sent what is in your game: its blocks, your position, health and inventory, and the names and positions of players near you. Where this goes depends on the AI you use:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Bot.xd: your browser sends them to OVHcloud, a company in France, whose AI models answer."
          }), (0, AW.jsx)("li", {
            children: "Super Bot.xd: our game servers send them to DeepSeek, a company in China, or to OVHcloud when Super Bot.xd runs on its models. We ask for your consent before you first use DeepSeek."
          }), (0, AW.jsxs)("li", {
            children: ["ChatGPT: when Bot.xd isn\u2019t working on our website, you can ask ChatGPT instead. We open it in a new tab that sends OpenAI, a company in the United States, your question, the code of the file you have open, the names and line counts of your other files and the names of the functions in your main file; a question too long for that is copied for you to paste in yourself. We ask for your consent first, ChatGPT is for ages 13 and up, and OpenAI\u2019s ", (0, AW.jsx)("a", {
              href: JW.i,
              children: "terms"
            }), " and ", (0, AW.jsx)("a", {
              href: JW.f,
              children: "privacy policy"
            }), " apply. If you paste its answer back, the code it puts in your files goes with your later questions as part of your files; its words don\u2019t, except to your own keys while their safety check is off. We count how many answers are pasted."]
          }), (0, AW.jsx)("li", {
            children: "Your own API key: if you add a key from another AI company, your browser sends your questions straight to that company, and its terms and privacy policy apply. Your key is kept only in your browser."
          })]
        }), (0, AW.jsx)("p", {
          children: "Bot.xd\u2019s and Super Bot.xd\u2019s questions and answers are also sent to a safety model run by OVHcloud to check them, and so is the code sent with Super Bot.xd\u2019s questions. So are your own keys\u2019 questions and answers, unless you turn off the safety check for your own keys. A ChatGPT answer you paste back isn\u2019t checked. Where we ask for your consent, that consent is our basis for sending this data; otherwise our basis is providing the AI Helper you asked to use."
        }), (0, AW.jsx)("p", {
          children: "If you agree when asked, we keep what the AI was sent for each question, as listed above, and its answers, linked to your account or guest account, to improve the AI Helper. You can change this in the AI Helper\u2019s AI settings. To stop sending anything to DeepSeek or ChatGPT, stop using Super Bot.xd or ChatGPT."
        }), (0, AW.jsx)("p", {
          children: "Data Retention: AI Helper chats you agreed to share are deleted after 30 days."
        }), (0, AW.jsx)("h2", {
          children: "3. Third-Party Data Use"
        }), (0, AW.jsx)("h3", {
          children: "3.1 Scope of This Privacy Policy"
        }), (0, AW.jsxs)("p", {
          children: ["This Privacy Policy applies only to the Bloxd.io game and its related services when accessed through the official Bloxd.io website or our mobile apps (such as those on iOS and Android).", " "]
        }), (0, AW.jsx)("p", {
          children: "If you use Bloxd.io through a third-party platform or website, this Privacy Policy does not cover those environments. We recommend checking the privacy policies of those sites or platforms and making sure you understand how your data is used before engaging with them."
        }), (0, AW.jsx)("p", {
          children: "We may also work with third-party services for some features in our game. These third parties have their own privacy policies, which apply in addition to ours. We encourage you to review those policies as well."
        }), (0, AW.jsx)("h3", {
          children: "3.2 Advertisers"
        }), (0, AW.jsx)("p", {
          children: "Bloxd.io displays ads from selected partners. On our website, ads are managed and delivered by our web advertising partners; within our mobile apps (available on iOS and Android), ads are delivered through Google AdMob."
        }), iW && (0, AW.jsx)("p", {
          children: "With your consent, we may display personalized ads tailored to your interests based on information such as your browsing history, device information, your device\u2019s advertising identifier, and your interactions with our site and apps. Where you do not provide consent, you will only be shown non-personalized ads."
        }), !iW && (0, AW.jsx)("p", {
          children: "These ads are non-personalized, meaning they are not based on your personal data or browsing behavior, but rather on general context. We do not collect personal data from children under 13 for advertising purposes."
        }), (0, AW.jsx)("p", {
          children: "Where the EU or UK General Data Protection Regulation (GDPR) applies, our website asks for your advertising and cookie choices through a consent prompt registered with the IAB Transparency and Consent Framework when you first visit. You can review, change or withdraw your consent at any time through the consent settings link shown in the footer of our home page and at the top of this Privacy Policy, or by contacting us. Withdrawing consent does not affect processing carried out before you withdrew it."
        }), (0, AW.jsx)(UW, {
          allowsPersonalizedAds: iW
        }), (0, AW.jsx)("h4", {
          children: "AI Helper"
        }), (0, AW.jsxs)("table", {
          children: [(0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Service Provider"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Collect"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "What They Do"
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "OVHcloud"
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["AI Helper questions, game code and chats, as section ", OW, " describes"]
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Runs the AI models that answer Bot.xd and some Super Bot.xd questions, and the safety check."
              })
            })]
          }), (0, AW.jsxs)("tr", {
            children: [(0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: (0, AW.jsx)("a", {
                  href: JW.d,
                  children: "DeepSeek"
                })
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsxs)("p", {
                children: ["AI Helper questions, game code and chats, as section ", OW, " describes"]
              })
            }), (0, AW.jsx)("td", {
              children: (0, AW.jsx)("p", {
                children: "Runs the AI model that answers Super Bot.xd questions."
              })
            })]
          })]
        }), (0, AW.jsx)("h3", {
          children: "3.4 YouTube API Services"
        }), (0, AW.jsxs)("p", {
          children: ["Bloxd.io uses YouTube API Services to show YouTube videos, livestreams and Shorts from Bloxd creators on our homepage, and to find the YouTube channel that a creator links to their Bloxd profile. By using these features, you agree to be bound by the", " ", (0, AW.jsx)("a", {
            href: "https://www.youtube.com/t/terms",
            children: "YouTube Terms of Service"
          }), "."]
        }), (0, AW.jsxs)("p", {
          children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, AW.jsx)("a", {
            href: "http://www.google.com/policies/privacy",
            children: "http://www.google.com/policies/privacy"
          }), "."]
        }), (0, AW.jsx)("p", {
          children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Google for these features, and we do not access your YouTube account. Creators can remove their linked YouTube handle from their profile, or contact us to remove it, at any time; this deletes the stored channel ID straight away, and deleting an account removes it too."
        }), (0, AW.jsx)(bW, {
          allowsPersonalizedAds: iW
        }), (0, AW.jsx)("h2", {
          children: "5. Security Measures"
        }), (0, AW.jsx)("p", {
          children: "We take the security of your data seriously. We implement various measures to ensure your personal information is protected and manage it according to applicable data protection laws."
        }), (0, AW.jsx)("h3", {
          children: "5.1 Technologies and Procedures"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "We use encryption\xa0and other security technologies to safeguard your personal information during transmission and storage."
          }), (0, AW.jsx)("li", {
            children: "Our servers are hosted by trusted partners who apply high security standards to protect the data we store."
          }), (0, AW.jsx)("li", {
            children: "We regularly monitor our systems for potential vulnerabilities and use firewalls and anti-virus software to prevent unauthorized access."
          })]
        }), (0, AW.jsx)("h3", {
          children: "5.2 Staff Training and Compliance"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Our team is trained to manage your data securely and in accordance with data protection laws like GDPR\xa0and COPPA."
          }), (0, AW.jsx)("li", {
            children: "Internal procedures are in place to ensure that only authorized personnel can access sensitive data."
          })]
        }), (0, AW.jsx)("h3", {
          children: "5.3 Data Breach Notification"
        }), (0, AW.jsx)("p", {
          children: "In the unlikely event of a data breach that affects your personal information:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "We will promptly notify\xa0affected users, as required by law."
          }), (0, AW.jsx)("li", {
            children: "The notification will include:"
          })]
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "What data was compromised."
          }), (0, AW.jsx)("li", {
            children: "The steps we are taking to resolve the issue and protect your data."
          }), (0, AW.jsx)("li", {
            children: "Recommendations for what you can do to protect yourself (e.g., change passwords)."
          })]
        }), (0, AW.jsx)("p", {
          children: "We take all necessary steps to ensure that breaches are addressed swiftly to minimize any potential harm."
        }), (0, AW.jsx)("h2", {
          children: "6. International Data Transfers"
        }), (0, AW.jsxs)("p", {
          children: ["Your data may be transferred to servers in other countries. All international transfers comply with relevant data protection regulations, ensuring that your information is safeguarded.", xW.e && " Session recordings are stored in the United States by Amazon Web Services, and their events in our analytics database at DigitalOcean in the United States. Our staff analytics tool at Hetzner in Finland processes and plays back recordings (section 2.6).", " ", "The AI Helper sends data to France and China, and ChatGPT to the United States, as section ", OW, " describes. With your own API key, your questions go to the company you chose, wherever it is."]
        }), (0, AW.jsx)("h2", {
          children: "7. Data Retention"
        }), (0, AW.jsx)("p", {
          children: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsx)("li", {
            children: "Technical and Usage Data:\xa0Retained for 14 months after your last visit to the site or until you request removal and the removal is verified."
          }), (0, AW.jsx)("li", {
            children: "Personal Data for Registered players:\xa0Retained for as long as the account is active. Upon request for account deletion, data will be removed promptly, typically within 30 days after the request is processed."
          }), (0, AW.jsx)("li", {
            children: "Contact Information:\xa0Retained for three months after the query is resolved or closed. If personal data from children is collected, it will be deleted as soon as possible."
          }), (0, AW.jsx)("li", {
            children: "Cookies:\xa0Cookies are retained for varying periods, depending on their purpose. Functional cookies are typically retained for as long as they are needed to operate the site, while analytical cookies may be retained for a shorter period to analyze site performance."
          }), (0, AW.jsx)("li", {
            children: "YouTube API Data:\xa0Public video metadata retrieved from YouTube API Services is refreshed every hour and is never kept for more than 24 hours. Creator-linked YouTube handles and channel IDs are retained while the link remains on the account and deleted as soon as it is removed."
          }), xW.e && (0, AW.jsxs)(AW.Fragment, {
            children: [(0, AW.jsx)("li", {
              children: "Session Recordings:\xa0Retained for 90 days after each recording, or up to one year if kept to fix a bug (section 2.5)."
            }), (0, AW.jsx)("li", {
              children: "Staff Analytics Tool:\xa0staff notes on a recording are deleted with it; the log of what staff viewed is kept for one year; saved charts are reviewed every year and deleted once unused for a year, and their results are refreshed or deleted within 7 days; staff accounts are deleted within 30 days of a staff member leaving (section 2.6)."
            })]
          }), (0, AW.jsxs)("li", {
            children: ["AI Helper Chats:\xa0Kept only if you agree to share them, and deleted after 30 days", xW.e && " (section 2.7)", "."]
          })]
        }), (0, AW.jsx)("p", {
          children: "If we collect personal data beyond what is outlined above, we will remove it as soon as possible once it is no longer needed."
        }), (0, AW.jsx)(TW, {}), (0, AW.jsx)("h2", {
          children: "9. Contact Us"
        }), (0, AW.jsx)("p", {
          children: "Got questions or concerns? We\u2019re here to help. Reach out to us at:"
        }), (0, AW.jsxs)("ul", {
          children: [(0, AW.jsxs)("li", {
            children: ["Email: ", (0, AW.jsx)("a", {
              href: "mailto:privacy@bloxd.io",
              children: "privacy@bloxd.io"
            })]
          }), (0, AW.jsx)("li", {
            children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
          })]
        }), (0, AW.jsx)("h2", {
          children: "10. Updates to This Policy"
        }), (0, AW.jsx)("p", {
          children: "We may update this policy occasionally to reflect changes in our practices or the law. When we do, we\u2019ll update the \u201cLast updated\u201d date at the top. Please check back occasionally to stay informed."
        })]
      })
    }

    function HW() {
      const {
        adMobPrivacyOptionsRequired: WW
      } = (0, wW.p)(["adMobPrivacyOptionsRequired"]);
      if (!WW) return null;
      return (0, AW.jsx)(LW.f, {
        className: "PrivacyChoicesButton",
        onClick: () => {
          (async () => {
            try {
              await tW.d.request("ads.showPrivacyOptions", {})
            } catch (WW) {
              console.error("Failed to open AdMob privacy options:", WW)
            }
          })()
        },
        children: "Manage Privacy Choices"
      })
    }

    function nW() {
      return (0, mW.useEffect)((() => {
        const WW = window.location.hash.slice(1);
        var iW;
        "" !== WW && (null === (iW = document.getElementById(WW)) || void 0 === iW || iW.scrollIntoView())
      }), []), (0, AW.jsxs)(AW.Fragment, {
        children: [(0, NW.isDiscordClient)() && (0, AW.jsx)(AW.Fragment, {
          children: (0, AW.jsx)(LW.f, {
            className: "PrivacyChoicesButton",
            onClick: () => {
              (0, cW.q)()
            },
            children: "Adjust Discord Privacy Choices"
          })
        }), (0, AW.jsx)(HW, {}), (0, AW.jsx)(lW.c, {
          className: "PrivacyPolicyLinks"
        }), (0, AW.jsx)(hW, {})]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);