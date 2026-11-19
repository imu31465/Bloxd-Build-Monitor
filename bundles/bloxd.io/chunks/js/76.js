export const id = 76;
export const ids = [76];
export const modules = {
  4515: DD => {
    function CD(DD) {
      return DD instanceof Map ? DD.clear = DD.delete = DD.set = function() {
        throw new Error("map is read-only")
      } : DD instanceof Set && (DD.add = DD.clear = DD.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(DD), Object.getOwnPropertyNames(DD).forEach((cD => {
        const ID = DD[cD],
          pD = typeof ID;
        "object" !== pD && "function" !== pD || Object.isFrozen(ID) || CD(ID)
      })), DD
    }
    class cD {
      constructor(DD) {
        void 0 === DD.data && (DD.data = {}), this.data = DD.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function ID(DD) {
      return DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function pD(DD) {
      const CD = Object.create(null);
      for (const iD in DD) CD[iD] = DD[iD];
      for (var cD = arguments.length, ID = new Array(cD > 1 ? cD - 1 : 0), pD = 1; pD < cD; pD++) ID[pD - 1] = arguments[pD];
      return ID.forEach((function(DD) {
        for (const cD in DD) CD[cD] = DD[cD]
      })), CD
    }
    const iD = DD => !!DD.scope;
    class fD {
      constructor(DD, CD) {
        this.buffer = "", this.classPrefix = CD.classPrefix, DD.walk(this)
      }
      addText(DD) {
        this.buffer += ID(DD)
      }
      openNode(DD) {
        if (!iD(DD)) return;
        const CD = ((DD, CD) => {
          let {
            prefix: cD
          } = CD;
          if (DD.startsWith("language:")) return DD.replace("language:", "language-");
          if (DD.includes(".")) {
            const CD = DD.split(".");
            return [`${cD}${CD.shift()}`, ...CD.map(((DD, CD) => `${DD}${"_".repeat(CD+1)}`))].join(" ")
          }
          return `${cD}${DD}`
        })(DD.scope, {
          prefix: this.classPrefix
        });
        this.span(CD)
      }
      closeNode(DD) {
        iD(DD) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(DD) {
        this.buffer += `<span class="${DD}">`
      }
    }
    const bD = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const CD = {
        children: []
      };
      return Object.assign(CD, DD), CD
    };
    class QD {
      constructor() {
        this.EX = bD(), this.stack = [this.EX]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.EX
      }
      add(DD) {
        this.top.children.push(DD)
      }
      openNode(DD) {
        const CD = bD({
          scope: DD
        });
        this.add(CD), this.stack.push(CD)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.EX, null, 4)
      }
      walk(DD) {
        return this.constructor._walk(DD, this.EX)
      }
      static _walk(DD, CD) {
        return "string" === typeof CD ? DD.addText(CD) : CD.children && (DD.openNode(CD), CD.children.forEach((CD => this._walk(DD, CD))), DD.closeNode(CD)), DD
      }
      static _collapse(DD) {
        "string" !== typeof DD && DD.children && (DD.children.every((DD => "string" === typeof DD)) ? DD.children = [DD.children.join("")] : DD.children.forEach((DD => {
          QD._collapse(DD)
        })))
      }
    }
    class wD extends QD {
      constructor(DD) {
        super(), this.options = DD
      }
      addText(DD) {
        "" !== DD && this.add(DD)
      }
      startScope(DD) {
        this.openNode(DD)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(DD, CD) {
        const cD = DD.root;
        CD && (cD.scope = `language:${CD}`), this.add(cD)
      }
      toHTML() {
        return new fD(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function SD(DD) {
      return DD ? "string" === typeof DD ? DD : DD.source : null
    }

    function BD(DD) {
      return tD("(?=", DD, ")")
    }

    function yD(DD) {
      return tD("(?:", DD, ")*")
    }

    function MD(DD) {
      return tD("(?:", DD, ")?")
    }

    function tD() {
      for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
      return CD.map((DD => SD(DD))).join("")
    }

    function ZD() {
      for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
      const ID = function(DD) {
        const CD = DD[DD.length - 1];
        return "object" === typeof CD && CD.constructor === Object ? (DD.splice(DD.length - 1, 1), CD) : {}
      }(CD);
      return "(" + (ID.capture ? "" : "?:") + CD.map((DD => SD(DD))).join("|") + ")"
    }

    function oD(DD) {
      return new RegExp(DD.toString() + "|").exec("").length - 1
    }
    const vD = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function ND(DD, CD) {
      let {
        joinWith: cD
      } = CD, ID = 0;
      return DD.map((DD => {
        ID += 1;
        const CD = ID;
        let cD = SD(DD),
          pD = "";
        for (; cD.length > 0;) {
          const DD = vD.exec(cD);
          if (!DD) {
            pD += cD;
            break
          }
          pD += cD.substring(0, DD.index), cD = cD.substring(DD.index + DD[0].length), "\\" === DD[0][0] && DD[1] ? pD += "\\" + String(Number(DD[1]) + CD) : (pD += DD[0], "(" === DD[0] && ID++)
        }
        return pD
      })).map((DD => `(${DD})`)).join(cD)
    }
    const gD = "[a-zA-Z]\\w*",
      XD = "[a-zA-Z_]\\w*",
      mD = "\\b\\d+(\\.\\d+)?",
      nD = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      OD = "\\b(0b[01]+)",
      PD = {
        VM: "\\\\[\\s\\S]",
        relevance: 0
      },
      HD = {
        scope: "string",
        VM: "'",
        end: "'",
        illegal: "\\n",
        contains: [PD]
      },
      UD = {
        scope: "string",
        VM: '"',
        end: '"',
        illegal: "\\n",
        contains: [PD]
      },
      xD = function(DD, CD) {
        const cD = pD({
          scope: "comment",
          VM: DD,
          end: CD,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        cD.contains.push({
          scope: "doctag",
          VM: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const ID = ZD("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return cD.contains.push({
          VM: tD(/[ ]+/, "(", ID, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), cD
      },
      qD = xD("//", "$"),
      JD = xD("/\\*", "\\*/"),
      KD = xD("#", "$"),
      aD = {
        scope: "number",
        VM: mD,
        relevance: 0
      },
      VD = {
        scope: "number",
        VM: nD,
        relevance: 0
      },
      zD = {
        scope: "number",
        VM: OD,
        relevance: 0
      },
      jD = {
        scope: "regexp",
        VM: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [PD, {
          VM: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [PD]
        }]
      },
      lD = {
        scope: "title",
        VM: gD,
        relevance: 0
      },
      LD = {
        scope: "title",
        VM: XD,
        relevance: 0
      },
      TD = {
        VM: "\\.\\s*" + XD,
        relevance: 0
      };
    var GD = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: HD,
      BACKSLASH_ESCAPE: PD,
      BINARY_NUMBER_MODE: zD,
      BINARY_NUMBER_RE: OD,
      COMMENT: xD,
      C_BLOCK_COMMENT_MODE: JD,
      C_LINE_COMMENT_MODE: qD,
      C_NUMBER_MODE: VD,
      C_NUMBER_RE: nD,
      END_SAME_AS_BEGIN: function(DD) {
        return Object.assign(DD, {
          "on:begin": (DD, CD) => {
            CD.data._beginMatch = DD[1]
          },
          "on:end": (DD, CD) => {
            CD.data._beginMatch !== DD[1] && CD.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: KD,
      IDENT_RE: gD,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: TD,
      NUMBER_MODE: aD,
      NUMBER_RE: mD,
      PHRASAL_WORDS_MODE: {
        VM: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: UD,
      REGEXP_MODE: jD,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const CD = /^#![ ]*\//;
        return DD.binary && (DD.VM = tD(CD, /.*\b/, DD.binary, /\b.*/)), pD({
          scope: "meta",
          VM: CD,
          end: /$/,
          relevance: 0,
          "on:begin": (DD, CD) => {
            0 !== DD.index && CD.ignoreMatch()
          }
        }, DD)
      },
      TITLE_MODE: lD,
      UNDERSCORE_IDENT_RE: XD,
      UNDERSCORE_TITLE_MODE: LD
    });

    function RD(DD, CD) {
      "." === DD.input[DD.index - 1] && CD.ignoreMatch()
    }

    function kD(DD, CD) {
      void 0 !== DD.className && (DD.scope = DD.className, delete DD.className)
    }

    function dD(DD, CD) {
      CD && DD.beginKeywords && (DD.VM = "\\b(" + DD.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", DD.__beforeBegin = RD, DD.keywords = DD.keywords || DD.beginKeywords, delete DD.beginKeywords, void 0 === DD.relevance && (DD.relevance = 0))
    }

    function YD(DD, CD) {
      Array.isArray(DD.illegal) && (DD.illegal = ZD(...DD.illegal))
    }

    function WD(DD, CD) {
      if (DD.match) {
        if (DD.VM || DD.end) throw new Error("begin & end are not supported with match");
        DD.VM = DD.match, delete DD.match
      }
    }

    function sD(DD, CD) {
      void 0 === DD.relevance && (DD.relevance = 1)
    }
    const ED = (DD, CD) => {
        if (!DD.beforeMatch) return;
        if (DD.starts) throw new Error("beforeMatch cannot be used with starts");
        const cD = Object.assign({}, DD);
        Object.keys(DD).forEach((CD => {
          delete DD[CD]
        })), DD.keywords = cD.keywords, DD.VM = tD(cD.beforeMatch, BD(cD.VM)), DD.starts = {
          relevance: 0,
          contains: [Object.assign(cD, {
            endsParent: !0
          })]
        }, DD.relevance = 0, delete cD.beforeMatch
      },
      eD = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function uD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const ID = Object.create(null);
      return "string" === typeof DD ? pD(cD, DD.split(" ")) : Array.isArray(DD) ? pD(cD, DD) : Object.keys(DD).forEach((function(cD) {
        Object.assign(ID, uD(DD[cD], CD, cD))
      })), ID;

      function pD(DD, cD) {
        CD && (cD = cD.map((DD => DD.toLowerCase()))), cD.forEach((function(CD) {
          const cD = CD.split("|");
          ID[cD[0]] = [DD, hD(cD[0], cD[1])]
        }))
      }
    }

    function hD(DD, CD) {
      return CD ? Number(CD) : function(DD) {
        return eD.includes(DD.toLowerCase())
      }(DD) ? 0 : 1
    }
    const rD = {},
      AD = DD => {
        console.error(DD)
      },
      FD = function(DD) {
        for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
        console.log(`WARN: ${DD}`, ...cD)
      },
      DC = (DD, CD) => {
        rD[`${DD}/${CD}`] || (console.log(`Deprecated as of ${DD}. ${CD}`), rD[`${DD}/${CD}`] = !0)
      },
      CC = new Error;

    function cC(DD, CD, cD) {
      let {
        key: ID
      } = cD, pD = 0;
      const iD = DD[ID],
        fD = {},
        bD = {};
      for (let QD = 1; QD <= CD.length; QD++) bD[QD + pD] = iD[QD], fD[QD + pD] = !0, pD += oD(CD[QD - 1]);
      DD[ID] = bD, DD[ID]._emit = fD, DD[ID]._multi = !0
    }

    function IC(DD) {
      ! function(DD) {
        DD.scope && "object" === typeof DD.scope && null !== DD.scope && (DD.beginScope = DD.scope, delete DD.scope)
      }(DD), "string" === typeof DD.beginScope && (DD.beginScope = {
          _wrap: DD.beginScope
        }), "string" === typeof DD.endScope && (DD.endScope = {
          _wrap: DD.endScope
        }),
        function(DD) {
          if (Array.isArray(DD.VM)) {
            if (DD.skip || DD.excludeBegin || DD.returnBegin) throw AD("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), CC;
            if ("object" !== typeof DD.beginScope || null === DD.beginScope) throw AD("beginScope must be object"), CC;
            cC(DD, DD.VM, {
              key: "beginScope"
            }), DD.VM = ND(DD.VM, {
              joinWith: ""
            })
          }
        }(DD),
        function(DD) {
          if (Array.isArray(DD.end)) {
            if (DD.skip || DD.excludeEnd || DD.returnEnd) throw AD("skip, excludeEnd, returnEnd not compatible with endScope: {}"), CC;
            if ("object" !== typeof DD.endScope || null === DD.endScope) throw AD("endScope must be object"), CC;
            cC(DD, DD.end, {
              key: "endScope"
            }), DD.end = ND(DD.end, {
              joinWith: ""
            })
          }
        }(DD)
    }

    function pC(DD) {
      function CD(CD, cD) {
        return new RegExp(SD(CD), "m" + (DD.case_insensitive ? "i" : "") + (DD.unicodeRegex ? "u" : "") + (cD ? "g" : ""))
      }
      class cD {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(DD, CD) {
          CD.position = this.position++, this.matchIndexes[this.matchAt] = CD, this.regexes.push([CD, DD]), this.matchAt += oD(DD) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const DD = this.regexes.map((DD => DD[1]));
          this.matcherRe = CD(ND(DD, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(DD) {
          this.matcherRe.lastIndex = this.lastIndex;
          const CD = this.matcherRe.exec(DD);
          if (!CD) return null;
          const cD = CD.findIndex(((DD, CD) => CD > 0 && void 0 !== DD)),
            ID = this.matchIndexes[cD];
          return CD.splice(0, cD), Object.assign(CD, ID)
        }
      }
      class ID {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(DD) {
          if (this.multiRegexes[DD]) return this.multiRegexes[DD];
          const CD = new cD;
          return this.rules.slice(DD).forEach((DD => {
            let [cD, ID] = DD;
            return CD.addRule(cD, ID)
          })), CD.compile(), this.multiRegexes[DD] = CD, CD
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(DD, CD) {
          this.rules.push([DD, CD]), "VM" === CD.type && this.count++
        }
        exec(DD) {
          const CD = this.getMatcher(this.regexIndex);
          CD.lastIndex = this.lastIndex;
          let cD = CD.exec(DD);
          if (this.resumingScanAtSamePosition())
            if (cD && cD.index === this.lastIndex);
            else {
              const CD = this.getMatcher(0);
              CD.lastIndex = this.lastIndex + 1, cD = CD.exec(DD)
            } return cD && (this.regexIndex += cD.position + 1, this.regexIndex === this.count && this.considerAll()), cD
        }
      }
      if (DD.compilerExtensions || (DD.compilerExtensions = []), DD.contains && DD.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return DD.classNameAliases = pD(DD.classNameAliases || {}),
        function cD(iD, fD) {
          const bD = iD;
          if (iD.isCompiled) return bD;
          [kD, WD, IC, ED].forEach((DD => DD(iD, fD))), DD.compilerExtensions.forEach((DD => DD(iD, fD))), iD.__beforeBegin = null, [dD, YD, sD].forEach((DD => DD(iD, fD))), iD.isCompiled = !0;
          let QD = null;
          return "object" === typeof iD.keywords && iD.keywords.$pattern && (iD.keywords = Object.assign({}, iD.keywords), QD = iD.keywords.$pattern, delete iD.keywords.$pattern), QD = QD || /\w+/, iD.keywords && (iD.keywords = uD(iD.keywords, DD.case_insensitive)), bD.keywordPatternRe = CD(QD, !0), fD && (iD.VM || (iD.VM = /\B|\b/), bD.beginRe = CD(bD.VM), iD.end || iD.endsWithParent || (iD.end = /\B|\b/), iD.end && (bD.endRe = CD(bD.end)), bD.terminatorEnd = SD(bD.end) || "", iD.endsWithParent && fD.terminatorEnd && (bD.terminatorEnd += (iD.end ? "|" : "") + fD.terminatorEnd)), iD.illegal && (bD.illegalRe = CD(iD.illegal)), iD.contains || (iD.contains = []), iD.contains = [].concat(...iD.contains.map((function(DD) {
            return function(DD) {
              DD.variants && !DD.cachedVariants && (DD.cachedVariants = DD.variants.map((function(CD) {
                return pD(DD, {
                  variants: null
                }, CD)
              })));
              if (DD.cachedVariants) return DD.cachedVariants;
              if (iC(DD)) return pD(DD, {
                starts: DD.starts ? pD(DD.starts) : null
              });
              if (Object.isFrozen(DD)) return pD(DD);
              return DD
            }("self" === DD ? iD : DD)
          }))), iD.contains.forEach((function(DD) {
            cD(DD, bD)
          })), iD.starts && cD(iD.starts, fD), bD.matcher = function(DD) {
            const CD = new ID;
            return DD.contains.forEach((DD => CD.addRule(DD.VM, {
              rule: DD,
              type: "VM"
            }))), DD.terminatorEnd && CD.addRule(DD.terminatorEnd, {
              type: "end"
            }), DD.illegal && CD.addRule(DD.illegal, {
              type: "illegal"
            }), CD
          }(bD), bD
        }(DD)
    }

    function iC(DD) {
      return !!DD && (DD.endsWithParent || iC(DD.starts))
    }
    class fC extends Error {
      constructor(DD, CD) {
        super(DD), this.name = "HTMLInjectionError", this.html = CD
      }
    }
    const bC = ID,
      QC = pD,
      wC = Symbol("nomatch"),
      SC = function(DD) {
        const ID = Object.create(null),
          pD = Object.create(null),
          iD = [];
        let fD = !0;
        const bD = "Could not find the language '{}', did you forget to load/include a language module?",
          QD = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let SD = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: wD
        };

        function oD(DD) {
          return SD.noHighlightRe.test(DD)
        }

        function vD(DD, CD, cD) {
          let ID = "",
            pD = "";
          "object" === typeof CD ? (ID = DD, cD = CD.ignoreIllegals, pD = CD.language) : (DC("10.7.0", "highlight(lang, code, ...args) has been deprecated."), DC("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), pD = DD, ID = CD), void 0 === cD && (cD = !0);
          const iD = {
            code: ID,
            language: pD
          };
          UD("before:highlight", iD);
          const fD = iD.result ? iD.result : ND(iD.language, iD.code, cD);
          return fD.code = iD.code, UD("after:highlight", fD), fD
        }

        function ND(DD, CD, pD, iD) {
          const QD = Object.create(null);

          function wD() {
            if (!UD.keywords) return void qD.addText(JD);
            let DD = 0;
            UD.keywordPatternRe.lastIndex = 0;
            let CD = UD.keywordPatternRe.exec(JD),
              cD = "";
            for (; CD;) {
              cD += JD.substring(DD, CD.index);
              const pD = nD.case_insensitive ? CD[0].toLowerCase() : CD[0],
                iD = (ID = pD, UD.keywords[ID]);
              if (iD) {
                const [DD, ID] = iD;
                if (qD.addText(cD), cD = "", QD[pD] = (QD[pD] || 0) + 1, QD[pD] <= 7 && (KD += ID), DD.startsWith("_")) cD += CD[0];
                else {
                  const cD = nD.classNameAliases[DD] || DD;
                  yD(CD[0], cD)
                }
              } else cD += CD[0];
              DD = UD.keywordPatternRe.lastIndex, CD = UD.keywordPatternRe.exec(JD)
            }
            var ID;
            cD += JD.substring(DD), qD.addText(cD)
          }

          function BD() {
            null != UD.subLanguage ? function() {
              if ("" === JD) return;
              let DD = null;
              if ("string" === typeof UD.subLanguage) {
                if (!ID[UD.subLanguage]) return void qD.addText(JD);
                DD = ND(UD.subLanguage, JD, !0, xD[UD.subLanguage]), xD[UD.subLanguage] = DD._top
              } else DD = gD(JD, UD.subLanguage.length ? UD.subLanguage : null);
              UD.relevance > 0 && (KD += DD.relevance), qD.__addSublanguage(DD._emitter, DD.language)
            }() : wD(), JD = ""
          }

          function yD(DD, CD) {
            "" !== DD && (qD.startScope(CD), qD.addText(DD), qD.endScope())
          }

          function MD(DD, CD) {
            let cD = 1;
            const ID = CD.length - 1;
            for (; cD <= ID;) {
              if (!DD._emit[cD]) {
                cD++;
                continue
              }
              const ID = nD.classNameAliases[DD[cD]] || DD[cD],
                pD = CD[cD];
              ID ? yD(pD, ID) : (JD = pD, wD(), JD = ""), cD++
            }
          }

          function tD(DD, CD) {
            return DD.scope && "string" === typeof DD.scope && qD.openNode(nD.classNameAliases[DD.scope] || DD.scope), DD.beginScope && (DD.beginScope._wrap ? (yD(JD, nD.classNameAliases[DD.beginScope._wrap] || DD.beginScope._wrap), JD = "") : DD.beginScope._multi && (MD(DD.beginScope, CD), JD = "")), UD = Object.create(DD, {
              parent: {
                value: UD
              }
            }), UD
          }

          function ZD(DD, CD, ID) {
            let pD = function(DD, CD) {
              const cD = DD && DD.exec(CD);
              return cD && 0 === cD.index
            }(DD.endRe, ID);
            if (pD) {
              if (DD["on:end"]) {
                const ID = new cD(DD);
                DD["on:end"](CD, ID), ID.isMatchIgnored && (pD = !1)
              }
              if (pD) {
                for (; DD.endsParent && DD.parent;) DD = DD.parent;
                return DD
              }
            }
            if (DD.endsWithParent) return ZD(DD.parent, CD, ID)
          }

          function oD(DD) {
            return 0 === UD.matcher.regexIndex ? (JD += DD[0], 1) : (zD = !0, 0)
          }

          function vD(DD) {
            const cD = DD[0],
              ID = CD.substring(DD.index),
              pD = ZD(UD, DD, ID);
            if (!pD) return wC;
            const iD = UD;
            UD.endScope && UD.endScope._wrap ? (BD(), yD(cD, UD.endScope._wrap)) : UD.endScope && UD.endScope._multi ? (BD(), MD(UD.endScope, DD)) : iD.skip ? JD += cD : (iD.returnEnd || iD.excludeEnd || (JD += cD), BD(), iD.excludeEnd && (JD = cD));
            do {
              UD.scope && qD.closeNode(), UD.skip || UD.subLanguage || (KD += UD.relevance), UD = UD.parent
            } while (UD !== pD.parent);
            return pD.starts && tD(pD.starts, DD), iD.returnEnd ? 0 : cD.length
          }
          let XD = {};

          function mD(ID, iD) {
            const bD = iD && iD[0];
            if (JD += ID, null == bD) return BD(), 0;
            if ("VM" === XD.type && "end" === iD.type && XD.index === iD.index && "" === bD) {
              if (JD += CD.slice(iD.index, iD.index + 1), !fD) {
                const CD = new Error(`0 width match regex (${DD})`);
                throw CD.languageName = DD, CD.badRule = XD.rule, CD
              }
              return 1
            }
            if (XD = iD, "VM" === iD.type) return function(DD) {
              const CD = DD[0],
                ID = DD.rule,
                pD = new cD(ID),
                iD = [ID.__beforeBegin, ID["on:begin"]];
              for (const cD of iD)
                if (cD && (cD(DD, pD), pD.isMatchIgnored)) return oD(CD);
              return ID.skip ? JD += CD : (ID.excludeBegin && (JD += CD), BD(), ID.returnBegin || ID.excludeBegin || (JD = CD)), tD(ID, DD), ID.returnBegin ? 0 : CD.length
            }(iD);
            if ("illegal" === iD.type && !pD) {
              const DD = new Error('Illegal lexeme "' + bD + '" for mode "' + (UD.scope || "<unnamed>") + '"');
              throw DD.mode = UD, DD
            }
            if ("end" === iD.type) {
              const DD = vD(iD);
              if (DD !== wC) return DD
            }
            if ("illegal" === iD.type && "" === bD) return JD += "\n", 1;
            if (VD > 1e5 && VD > 3 * iD.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return JD += bD, bD.length
          }
          const nD = OD(DD);
          if (!nD) throw AD(bD.replace("{}", DD)), new Error('Unknown language: "' + DD + '"');
          const PD = pC(nD);
          let HD = "",
            UD = iD || PD;
          const xD = {},
            qD = new SD.__emitter(SD);
          ! function() {
            const DD = [];
            for (let CD = UD; CD !== nD; CD = CD.parent) CD.scope && DD.unshift(CD.scope);
            DD.forEach((DD => qD.openNode(DD)))
          }();
          let JD = "",
            KD = 0,
            aD = 0,
            VD = 0,
            zD = !1;
          try {
            if (nD.__emitTokens) nD.__emitTokens(CD, qD);
            else {
              for (UD.matcher.considerAll();;) {
                VD++, zD ? zD = !1 : UD.matcher.considerAll(), UD.matcher.lastIndex = aD;
                const DD = UD.matcher.exec(CD);
                if (!DD) break;
                const cD = mD(CD.substring(aD, DD.index), DD);
                aD = DD.index + cD
              }
              mD(CD.substring(aD))
            }
            return qD.finalize(), HD = qD.toHTML(), {
              language: DD,
              value: HD,
              relevance: KD,
              illegal: !1,
              _emitter: qD,
              _top: UD
            }
          } catch (jD) {
            if (jD.message && jD.message.includes("Illegal")) return {
              language: DD,
              value: bC(CD),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: jD.message,
                index: aD,
                context: CD.slice(aD - 100, aD + 100),
                mode: jD.mode,
                resultSoFar: HD
              },
              _emitter: qD
            };
            if (fD) return {
              language: DD,
              value: bC(CD),
              illegal: !1,
              relevance: 0,
              errorRaised: jD,
              _emitter: qD,
              _top: UD
            };
            throw jD
          }
        }

        function gD(DD, CD) {
          CD = CD || SD.languages || Object.keys(ID);
          const cD = function(DD) {
              const CD = {
                value: bC(DD),
                illegal: !1,
                relevance: 0,
                _top: QD,
                _emitter: new SD.__emitter(SD)
              };
              return CD._emitter.addText(DD), CD
            }(DD),
            pD = CD.filter(OD).filter(HD).map((CD => ND(CD, DD, !1)));
          pD.unshift(cD);
          const iD = pD.sort(((DD, CD) => {
              if (DD.relevance !== CD.relevance) return CD.relevance - DD.relevance;
              if (DD.language && CD.language) {
                if (OD(DD.language).supersetOf === CD.language) return 1;
                if (OD(CD.language).supersetOf === DD.language) return -1
              }
              return 0
            })),
            [fD, bD] = iD,
            wD = fD;
          return wD.secondBest = bD, wD
        }

        function XD(DD) {
          let CD = null;
          const cD = function(DD) {
            let CD = DD.className + " ";
            CD += DD.parentNode ? DD.parentNode.className : "";
            const cD = SD.languageDetectRe.exec(CD);
            if (cD) {
              const CD = OD(cD[1]);
              return CD || (FD(bD.replace("{}", cD[1])), FD("Falling back to no-highlight mode for this block.", DD)), CD ? cD[1] : "no-highlight"
            }
            return CD.split(/\s+/).find((DD => oD(DD) || OD(DD)))
          }(DD);
          if (oD(cD)) return;
          if (UD("before:highlightElement", {
              el: DD,
              language: cD
            }), DD.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", DD);
          if (DD.children.length > 0 && (SD.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(DD)), SD.throwUnescapedHTML)) {
            throw new fC("One of your code blocks includes unescaped HTML.", DD.innerHTML)
          }
          CD = DD;
          const ID = CD.textContent,
            iD = cD ? vD(ID, {
              language: cD,
              ignoreIllegals: !0
            }) : gD(ID);
          DD.innerHTML = iD.value, DD.dataset.highlighted = "yes",
            function(DD, CD, cD) {
              const ID = CD && pD[CD] || cD;
              DD.classList.add("hljs"), DD.classList.add(`language-${ID}`)
            }(DD, cD, iD.language), DD.result = {
              language: iD.language,
              re: iD.relevance,
              relevance: iD.relevance
            }, iD.secondBest && (DD.secondBest = {
              language: iD.secondBest.language,
              relevance: iD.secondBest.relevance
            }), UD("after:highlightElement", {
              el: DD,
              result: iD,
              text: ID
            })
        }
        let mD = !1;

        function nD() {
          if ("loading" === document.readyState) return mD || window.addEventListener("DOMContentLoaded", (function() {
            nD()
          }), !1), void(mD = !0);
          document.querySelectorAll(SD.cssSelector).forEach(XD)
        }

        function OD(DD) {
          return DD = (DD || "").toLowerCase(), ID[DD] || ID[pD[DD]]
        }

        function PD(DD, CD) {
          let {
            languageName: cD
          } = CD;
          "string" === typeof DD && (DD = [DD]), DD.forEach((DD => {
            pD[DD.toLowerCase()] = cD
          }))
        }

        function HD(DD) {
          const CD = OD(DD);
          return CD && !CD.disableAutodetect
        }

        function UD(DD, CD) {
          const cD = DD;
          iD.forEach((function(DD) {
            DD[cD] && DD[cD](CD)
          }))
        }
        Object.assign(DD, {
          highlight: vD,
          highlightAuto: gD,
          highlightAll: nD,
          highlightElement: XD,
          highlightBlock: function(DD) {
            return DC("10.7.0", "highlightBlock will be removed entirely in v12.0"), DC("10.7.0", "Please use highlightElement now."), XD(DD)
          },
          configure: function(DD) {
            SD = QC(SD, DD)
          },
          initHighlighting: () => {
            nD(), DC("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            nD(), DC("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(CD, cD) {
            let pD = null;
            try {
              pD = cD(DD)
            } catch (iD) {
              if (AD("Language definition for '{}' could not be registered.".replace("{}", CD)), !fD) throw iD;
              AD(iD), pD = QD
            }
            pD.name || (pD.name = CD), ID[CD] = pD, pD.rawDefinition = cD.bind(null, DD), pD.aliases && PD(pD.aliases, {
              languageName: CD
            })
          },
          unregisterLanguage: function(DD) {
            delete ID[DD];
            for (const CD of Object.keys(pD)) pD[CD] === DD && delete pD[CD]
          },
          listLanguages: function() {
            return Object.keys(ID)
          },
          getLanguage: OD,
          registerAliases: PD,
          autoDetection: HD,
          inherit: QC,
          addPlugin: function(DD) {
            ! function(DD) {
              DD["before:highlightBlock"] && !DD["before:highlightElement"] && (DD["before:highlightElement"] = CD => {
                DD["before:highlightBlock"](Object.assign({
                  block: CD.el
                }, CD))
              }), DD["after:highlightBlock"] && !DD["after:highlightElement"] && (DD["after:highlightElement"] = CD => {
                DD["after:highlightBlock"](Object.assign({
                  block: CD.el
                }, CD))
              })
            }(DD), iD.push(DD)
          },
          removePlugin: function(DD) {
            const CD = iD.indexOf(DD); - 1 !== CD && iD.splice(CD, 1)
          }
        }), DD.debugMode = function() {
          fD = !1
        }, DD.safeMode = function() {
          fD = !0
        }, DD.versionString = "11.11.1", DD.regex = {
          concat: tD,
          lookahead: BD,
          either: ZD,
          optional: MD,
          anyNumberOfTimes: yD
        };
        for (const cD in GD) "object" === typeof GD[cD] && CD(GD[cD]);
        return Object.assign(DD, GD), DD
      },
      BC = SC({});
    BC.newInstance = () => SC({}), DD.exports = BC, BC.HighlightJS = BC, BC.default = BC
  },
  4512: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    const ID = cD(4515)
  },
  4524: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => BD
    });
    const ID = "[A-Za-z$_][0-9A-Za-z$_]*",
      pD = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      iD = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      fD = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      bD = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      QD = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      wD = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      SD = [].concat(QD, fD, bD);

    function BD(DD) {
      const CD = DD.regex,
        cD = ID,
        BD = "<>",
        yD = "</>",
        MD = {
          VM: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (DD, CD) => {
            const cD = DD[0].length + DD.index,
              ID = DD.input[cD];
            if ("<" === ID || "," === ID) return void CD.ignoreMatch();
            let pD;
            ">" === ID && (((DD, CD) => {
              let {
                after: cD
              } = CD;
              const ID = "</" + DD[0].slice(1);
              return -1 !== DD.input.indexOf(ID, cD)
            })(DD, {
              after: cD
            }) || CD.ignoreMatch());
            const iD = DD.input.substring(cD);
            ((pD = iD.match(/^\s*=/)) || (pD = iD.match(/^\s+extends\s+/)) && 0 === pD.index) && CD.ignoreMatch()
          }
        },
        tD = {
          $pattern: ID,
          keyword: pD,
          literal: iD,
          built_in: SD,
          "variable.language": wD
        },
        ZD = "[0-9](_?[0-9])*",
        oD = `\\.(${ZD})`,
        vD = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        ND = {
          className: "number",
          variants: [{
            VM: `(\\b(${vD})((${oD})|\\.)?|(${oD}))[eE][+-]?(${ZD})\\b`
          }, {
            VM: `\\b(${vD})\\b((${oD})\\b|\\.)?|(${oD})\\b`
          }, {
            VM: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            VM: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            VM: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            VM: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            VM: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        gD = {
          className: "subst",
          VM: "\\$\\{",
          end: "\\}",
          keywords: tD,
          contains: []
        },
        XD = {
          VM: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, gD],
            subLanguage: "xml"
          }
        },
        mD = {
          VM: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, gD],
            subLanguage: "css"
          }
        },
        nD = {
          VM: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, gD],
            subLanguage: "graphql"
          }
        },
        OD = {
          className: "string",
          VM: "`",
          end: "`",
          contains: [DD.BACKSLASH_ESCAPE, gD]
        },
        PD = {
          className: "comment",
          variants: [DD.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              VM: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                VM: "@[A-Za-z]+"
              }, {
                className: "type",
                VM: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                VM: cD + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                VM: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), DD.C_BLOCK_COMMENT_MODE, DD.C_LINE_COMMENT_MODE]
        },
        HD = [DD.APOS_STRING_MODE, DD.QUOTE_STRING_MODE, XD, mD, nD, OD, {
          match: /\$\d+/
        }, ND];
      gD.contains = HD.concat({
        VM: /\{/,
        end: /\}/,
        keywords: tD,
        contains: ["self"].concat(HD)
      });
      const UD = [].concat(PD, gD.contains),
        xD = UD.concat([{
          VM: /(\s*)\(/,
          end: /\)/,
          keywords: tD,
          contains: ["self"].concat(UD)
        }]),
        qD = {
          className: "params",
          VM: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: tD,
          contains: xD
        },
        JD = {
          variants: [{
            match: [/class/, /\s+/, cD, /\s+/, /extends/, /\s+/, CD.concat(cD, "(", CD.concat(/\./, cD), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, cD],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        KD = {
          relevance: 0,
          match: CD.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...fD, ...bD]
          }
        },
        aD = {
          variants: [{
            match: [/function/, /\s+/, cD, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [qD],
          illegal: /%/
        };
      const VD = {
        match: CD.concat(/\b/, (zD = [...QD, "super", "import"].map((DD => `${DD}\\s*\\(`)), CD.concat("(?!", zD.join("|"), ")")), cD, CD.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var zD;
      const jD = {
          VM: CD.concat(/\./, CD.lookahead(CD.concat(cD, /(?![0-9A-Za-z$_(])/))),
          end: cD,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        lD = {
          match: [/get|set/, /\s+/, cD, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            VM: /\(\)/
          }, qD]
        },
        LD = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + DD.UNDERSCORE_IDENT_RE + ")\\s*=>",
        TD = {
          match: [/const|var|let/, /\s+/, cD, /\s*/, /=\s*/, /(async\s*)?/, CD.lookahead(LD)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [qD]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: tD,
        exports: {
          PARAMS_CONTAINS: xD,
          CLASS_REFERENCE: KD
        },
        illegal: /#(?![$_A-z])/,
        contains: [DD.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          VM: /^\s*['"]use (strict|asm)['"]/
        }, DD.APOS_STRING_MODE, DD.QUOTE_STRING_MODE, XD, mD, nD, OD, PD, {
          match: /\$\d+/
        }, ND, KD, {
          scope: "attr",
          match: cD + CD.lookahead(":"),
          relevance: 0
        }, TD, {
          VM: "(" + DD.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [PD, DD.REGEXP_MODE, {
            className: "function",
            VM: LD,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                VM: DD.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                VM: /\(\s*\)/,
                skip: !0
              }, {
                VM: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: tD,
                contains: xD
              }]
            }]
          }, {
            VM: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              VM: BD,
              end: yD
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              VM: MD.VM,
              "on:begin": MD.isTrulyOpeningTag,
              end: MD.end
            }],
            subLanguage: "xml",
            contains: [{
              VM: MD.VM,
              end: MD.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, aD, {
          beginKeywords: "while if switch catch for"
        }, {
          VM: "\\b(?!function)" + DD.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [qD, DD.inherit(DD.TITLE_MODE, {
            VM: cD,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, jD, {
          match: "\\$" + cD,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [qD]
        }, VD, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, JD, lD, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4526: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => yD
    });
    const ID = "[A-Za-z$_][0-9A-Za-z$_]*",
      pD = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      iD = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      fD = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      bD = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      QD = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      wD = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      SD = [].concat(QD, fD, bD);

    function BD(DD) {
      const CD = DD.regex,
        cD = ID,
        BD = "<>",
        yD = "</>",
        MD = {
          VM: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (DD, CD) => {
            const cD = DD[0].length + DD.index,
              ID = DD.input[cD];
            if ("<" === ID || "," === ID) return void CD.ignoreMatch();
            let pD;
            ">" === ID && (((DD, CD) => {
              let {
                after: cD
              } = CD;
              const ID = "</" + DD[0].slice(1);
              return -1 !== DD.input.indexOf(ID, cD)
            })(DD, {
              after: cD
            }) || CD.ignoreMatch());
            const iD = DD.input.substring(cD);
            ((pD = iD.match(/^\s*=/)) || (pD = iD.match(/^\s+extends\s+/)) && 0 === pD.index) && CD.ignoreMatch()
          }
        },
        tD = {
          $pattern: ID,
          keyword: pD,
          literal: iD,
          built_in: SD,
          "variable.language": wD
        },
        ZD = "[0-9](_?[0-9])*",
        oD = `\\.(${ZD})`,
        vD = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        ND = {
          className: "number",
          variants: [{
            VM: `(\\b(${vD})((${oD})|\\.)?|(${oD}))[eE][+-]?(${ZD})\\b`
          }, {
            VM: `\\b(${vD})\\b((${oD})\\b|\\.)?|(${oD})\\b`
          }, {
            VM: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            VM: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            VM: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            VM: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            VM: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        gD = {
          className: "subst",
          VM: "\\$\\{",
          end: "\\}",
          keywords: tD,
          contains: []
        },
        XD = {
          VM: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, gD],
            subLanguage: "xml"
          }
        },
        mD = {
          VM: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, gD],
            subLanguage: "css"
          }
        },
        nD = {
          VM: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, gD],
            subLanguage: "graphql"
          }
        },
        OD = {
          className: "string",
          VM: "`",
          end: "`",
          contains: [DD.BACKSLASH_ESCAPE, gD]
        },
        PD = {
          className: "comment",
          variants: [DD.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              VM: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                VM: "@[A-Za-z]+"
              }, {
                className: "type",
                VM: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                VM: cD + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                VM: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), DD.C_BLOCK_COMMENT_MODE, DD.C_LINE_COMMENT_MODE]
        },
        HD = [DD.APOS_STRING_MODE, DD.QUOTE_STRING_MODE, XD, mD, nD, OD, {
          match: /\$\d+/
        }, ND];
      gD.contains = HD.concat({
        VM: /\{/,
        end: /\}/,
        keywords: tD,
        contains: ["self"].concat(HD)
      });
      const UD = [].concat(PD, gD.contains),
        xD = UD.concat([{
          VM: /(\s*)\(/,
          end: /\)/,
          keywords: tD,
          contains: ["self"].concat(UD)
        }]),
        qD = {
          className: "params",
          VM: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: tD,
          contains: xD
        },
        JD = {
          variants: [{
            match: [/class/, /\s+/, cD, /\s+/, /extends/, /\s+/, CD.concat(cD, "(", CD.concat(/\./, cD), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, cD],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        KD = {
          relevance: 0,
          match: CD.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...fD, ...bD]
          }
        },
        aD = {
          variants: [{
            match: [/function/, /\s+/, cD, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [qD],
          illegal: /%/
        };
      const VD = {
        match: CD.concat(/\b/, (zD = [...QD, "super", "import"].map((DD => `${DD}\\s*\\(`)), CD.concat("(?!", zD.join("|"), ")")), cD, CD.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var zD;
      const jD = {
          VM: CD.concat(/\./, CD.lookahead(CD.concat(cD, /(?![0-9A-Za-z$_(])/))),
          end: cD,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        lD = {
          match: [/get|set/, /\s+/, cD, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            VM: /\(\)/
          }, qD]
        },
        LD = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + DD.UNDERSCORE_IDENT_RE + ")\\s*=>",
        TD = {
          match: [/const|var|let/, /\s+/, cD, /\s*/, /=\s*/, /(async\s*)?/, CD.lookahead(LD)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [qD]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: tD,
        exports: {
          PARAMS_CONTAINS: xD,
          CLASS_REFERENCE: KD
        },
        illegal: /#(?![$_A-z])/,
        contains: [DD.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          VM: /^\s*['"]use (strict|asm)['"]/
        }, DD.APOS_STRING_MODE, DD.QUOTE_STRING_MODE, XD, mD, nD, OD, PD, {
          match: /\$\d+/
        }, ND, KD, {
          scope: "attr",
          match: cD + CD.lookahead(":"),
          relevance: 0
        }, TD, {
          VM: "(" + DD.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [PD, DD.REGEXP_MODE, {
            className: "function",
            VM: LD,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                VM: DD.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                VM: /\(\s*\)/,
                skip: !0
              }, {
                VM: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: tD,
                contains: xD
              }]
            }]
          }, {
            VM: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              VM: BD,
              end: yD
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              VM: MD.VM,
              "on:begin": MD.isTrulyOpeningTag,
              end: MD.end
            }],
            subLanguage: "xml",
            contains: [{
              VM: MD.VM,
              end: MD.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, aD, {
          beginKeywords: "while if switch catch for"
        }, {
          VM: "\\b(?!function)" + DD.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [qD, DD.inherit(DD.TITLE_MODE, {
            VM: cD,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, jD, {
          match: "\\$" + cD,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [qD]
        }, VD, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, JD, lD, {
          match: /\$[(.]/
        }]
      }
    }

    function yD(DD) {
      const CD = DD.regex,
        cD = BD(DD),
        fD = ID,
        bD = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        QD = {
          VM: [/namespace/, /\s+/, DD.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        yD = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: bD
          },
          contains: [cD.exports.CLASS_REFERENCE]
        },
        MD = {
          $pattern: ID,
          keyword: pD.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: iD,
          built_in: SD.concat(bD),
          "variable.language": wD
        },
        tD = {
          className: "meta",
          VM: "@" + fD
        },
        ZD = (DD, CD, cD) => {
          const ID = DD.contains.findIndex((DD => DD.label === CD));
          if (-1 === ID) throw new Error("can not find mode to replace");
          DD.contains.splice(ID, 1, cD)
        };
      Object.assign(cD.keywords, MD), cD.exports.PARAMS_CONTAINS.push(tD);
      const oD = cD.contains.find((DD => "attr" === DD.scope)),
        vD = Object.assign({}, oD, {
          match: CD.concat(fD, CD.lookahead(/\s*\?:/))
        });
      cD.exports.PARAMS_CONTAINS.push([cD.exports.CLASS_REFERENCE, oD, vD]), cD.contains = cD.contains.concat([tD, QD, yD, vD]), ZD(cD, "shebang", DD.SHEBANG()), ZD(cD, "use_strict", {
        className: "meta",
        relevance: 10,
        VM: /^\s*['"]use strict['"]/
      });
      return cD.contains.find((DD => "func.def" === DD.label)).relevance = 0, Object.assign(cD, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), cD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);