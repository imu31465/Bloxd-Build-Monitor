export const id = 93;
export const ids = [93];
export const modules = {
  5243: UU => {
    function XU(UU) {
      return UU instanceof Map ? UU.clear = UU.delete = UU.set = function() {
        throw new Error("map is read-only")
      } : UU instanceof Set && (UU.add = UU.clear = UU.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(UU), Object.getOwnPropertyNames(UU).forEach((zU => {
        const cU = UU[zU],
          yU = typeof cU;
        "object" !== yU && "function" !== yU || Object.isFrozen(cU) || XU(cU)
      })), UU
    }
    class zU {
      constructor(UU) {
        void 0 === UU.data && (UU.data = {}), this.data = UU.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function cU(UU) {
      return UU.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function yU(UU) {
      const XU = Object.create(null);
      for (const QU in UU) XU[QU] = UU[QU];
      for (var zU = arguments.length, cU = new Array(zU > 1 ? zU - 1 : 0), yU = 1; yU < zU; yU++) cU[yU - 1] = arguments[yU];
      return cU.forEach((function(UU) {
        for (const zU in UU) XU[zU] = UU[zU]
      })), XU
    }
    const QU = UU => !!UU.scope;
    class AU {
      constructor(UU, XU) {
        this.buffer = "", this.classPrefix = XU.classPrefix, UU.walk(this)
      }
      addText(UU) {
        this.buffer += cU(UU)
      }
      openNode(UU) {
        if (!QU(UU)) return;
        const XU = ((UU, XU) => {
          let {
            prefix: zU
          } = XU;
          if (UU.startsWith("language:")) return UU.replace("language:", "language-");
          if (UU.includes(".")) {
            const XU = UU.split(".");
            return [`${zU}${XU.shift()}`, ...XU.map(((UU, XU) => `${UU}${"_".repeat(XU+1)}`))].join(" ")
          }
          return `${zU}${UU}`
        })(UU.scope, {
          prefix: this.classPrefix
        });
        this.span(XU)
      }
      closeNode(UU) {
        QU(UU) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(UU) {
        this.buffer += `<span class="${UU}">`
      }
    }
    const FU = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const XU = {
        children: []
      };
      return Object.assign(XU, UU), XU
    };
    class oU {
      constructor() {
        this.WG = FU(), this.stack = [this.WG]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.WG
      }
      add(UU) {
        this.top.children.push(UU)
      }
      openNode(UU) {
        const XU = FU({
          scope: UU
        });
        this.add(XU), this.stack.push(XU)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.WG, null, 4)
      }
      walk(UU) {
        return this.constructor._walk(UU, this.WG)
      }
      static _walk(UU, XU) {
        return "string" === typeof XU ? UU.addText(XU) : XU.children && (UU.openNode(XU), XU.children.forEach((XU => this._walk(UU, XU))), UU.closeNode(XU)), UU
      }
      static _collapse(UU) {
        "string" !== typeof UU && UU.children && (UU.children.every((UU => "string" === typeof UU)) ? UU.children = [UU.children.join("")] : UU.children.forEach((UU => {
          oU._collapse(UU)
        })))
      }
    }
    class DU extends oU {
      constructor(UU) {
        super(), this.options = UU
      }
      addText(UU) {
        "" !== UU && this.add(UU)
      }
      startScope(UU) {
        this.openNode(UU)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(UU, XU) {
        const zU = UU.root;
        XU && (zU.scope = `language:${XU}`), this.add(zU)
      }
      toHTML() {
        return new AU(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function EU(UU) {
      return UU ? "string" === typeof UU ? UU : UU.source : null
    }

    function YU(UU) {
      return pU("(?=", UU, ")")
    }

    function NU(UU) {
      return pU("(?:", UU, ")*")
    }

    function IU(UU) {
      return pU("(?:", UU, ")?")
    }

    function pU() {
      for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
      return XU.map((UU => EU(UU))).join("")
    }

    function aU() {
      for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
      const cU = function(UU) {
        const XU = UU[UU.length - 1];
        return "object" === typeof XU && XU.constructor === Object ? (UU.splice(UU.length - 1, 1), XU) : {}
      }(XU);
      return "(" + (cU.capture ? "" : "?:") + XU.map((UU => EU(UU))).join("|") + ")"
    }

    function tU(UU) {
      return new RegExp(UU.toString() + "|").exec("").length - 1
    }
    const gU = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function kU(UU, XU) {
      let {
        joinWith: zU
      } = XU, cU = 0;
      return UU.map((UU => {
        cU += 1;
        const XU = cU;
        let zU = EU(UU),
          yU = "";
        for (; zU.length > 0;) {
          const UU = gU.exec(zU);
          if (!UU) {
            yU += zU;
            break
          }
          yU += zU.substring(0, UU.index), zU = zU.substring(UU.index + UU[0].length), "\\" === UU[0][0] && UU[1] ? yU += "\\" + String(Number(UU[1]) + XU) : (yU += UU[0], "(" === UU[0] && cU++)
        }
        return yU
      })).map((UU => `(${UU})`)).join(zU)
    }
    const GU = "[a-zA-Z]\\w*",
      BU = "[a-zA-Z_]\\w*",
      ZU = "\\b\\d+(\\.\\d+)?",
      RU = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      PU = "\\b(0b[01]+)",
      WU = {
        gY: "\\\\[\\s\\S]",
        relevance: 0
      },
      dU = {
        scope: "string",
        gY: "'",
        end: "'",
        illegal: "\\n",
        contains: [WU]
      },
      LU = {
        scope: "string",
        gY: '"',
        end: '"',
        illegal: "\\n",
        contains: [WU]
      },
      eU = function(UU, XU) {
        const zU = yU({
          scope: "comment",
          gY: UU,
          end: XU,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        zU.contains.push({
          scope: "doctag",
          gY: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const cU = aU("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return zU.contains.push({
          gY: pU(/[ ]+/, "(", cU, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), zU
      },
      CU = eU("//", "$"),
      wU = eU("/\\*", "\\*/"),
      qU = eU("#", "$"),
      OU = {
        scope: "number",
        gY: ZU,
        relevance: 0
      },
      SU = {
        scope: "number",
        gY: RU,
        relevance: 0
      },
      rU = {
        scope: "number",
        gY: PU,
        relevance: 0
      },
      uU = {
        scope: "regexp",
        gY: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [WU, {
          gY: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [WU]
        }]
      },
      fU = {
        scope: "title",
        gY: GU,
        relevance: 0
      },
      iU = {
        scope: "title",
        gY: BU,
        relevance: 0
      },
      HU = {
        gY: "\\.\\s*" + BU,
        relevance: 0
      };
    var MU = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: dU,
      BACKSLASH_ESCAPE: WU,
      BINARY_NUMBER_MODE: rU,
      BINARY_NUMBER_RE: PU,
      COMMENT: eU,
      C_BLOCK_COMMENT_MODE: wU,
      C_LINE_COMMENT_MODE: CU,
      C_NUMBER_MODE: SU,
      C_NUMBER_RE: RU,
      END_SAME_AS_BEGIN: function(UU) {
        return Object.assign(UU, {
          "on:begin": (UU, XU) => {
            XU.data._beginMatch = UU[1]
          },
          "on:end": (UU, XU) => {
            XU.data._beginMatch !== UU[1] && XU.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: qU,
      IDENT_RE: GU,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: HU,
      NUMBER_MODE: OU,
      NUMBER_RE: ZU,
      PHRASAL_WORDS_MODE: {
        gY: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: LU,
      REGEXP_MODE: uU,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const XU = /^#![ ]*\//;
        return UU.binary && (UU.gY = pU(XU, /.*\b/, UU.binary, /\b.*/)), yU({
          scope: "meta",
          gY: XU,
          end: /$/,
          relevance: 0,
          "on:begin": (UU, XU) => {
            0 !== UU.index && XU.ignoreMatch()
          }
        }, UU)
      },
      TITLE_MODE: fU,
      UNDERSCORE_IDENT_RE: BU,
      UNDERSCORE_TITLE_MODE: iU
    });

    function vU(UU, XU) {
      "." === UU.input[UU.index - 1] && XU.ignoreMatch()
    }

    function VU(UU, XU) {
      void 0 !== UU.className && (UU.scope = UU.className, delete UU.className)
    }

    function sU(UU, XU) {
      XU && UU.beginKeywords && (UU.gY = "\\b(" + UU.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", UU.__beforeBegin = vU, UU.keywords = UU.keywords || UU.beginKeywords, delete UU.beginKeywords, void 0 === UU.relevance && (UU.relevance = 0))
    }

    function nU(UU, XU) {
      Array.isArray(UU.illegal) && (UU.illegal = aU(...UU.illegal))
    }

    function mU(UU, XU) {
      if (UU.match) {
        if (UU.gY || UU.end) throw new Error("begin & end are not supported with match");
        UU.gY = UU.match, delete UU.match
      }
    }

    function lU(UU, XU) {
      void 0 === UU.relevance && (UU.relevance = 1)
    }
    const xU = (UU, XU) => {
        if (!UU.beforeMatch) return;
        if (UU.starts) throw new Error("beforeMatch cannot be used with starts");
        const zU = Object.assign({}, UU);
        Object.keys(UU).forEach((XU => {
          delete UU[XU]
        })), UU.keywords = zU.keywords, UU.gY = pU(zU.beforeMatch, YU(zU.gY)), UU.starts = {
          relevance: 0,
          contains: [Object.assign(zU, {
            endsParent: !0
          })]
        }, UU.relevance = 0, delete zU.beforeMatch
      },
      JU = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function jU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const cU = Object.create(null);
      return "string" === typeof UU ? yU(zU, UU.split(" ")) : Array.isArray(UU) ? yU(zU, UU) : Object.keys(UU).forEach((function(zU) {
        Object.assign(cU, jU(UU[zU], XU, zU))
      })), cU;

      function yU(UU, zU) {
        XU && (zU = zU.map((UU => UU.toLowerCase()))), zU.forEach((function(XU) {
          const zU = XU.split("|");
          cU[zU[0]] = [UU, KU(zU[0], zU[1])]
        }))
      }
    }

    function KU(UU, XU) {
      return XU ? Number(XU) : function(UU) {
        return JU.includes(UU.toLowerCase())
      }(UU) ? 0 : 1
    }
    const bU = {},
      TU = UU => {
        console.error(UU)
      },
      hU = function(UU) {
        for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
        console.log(`WARN: ${UU}`, ...zU)
      },
      UX = (UU, XU) => {
        bU[`${UU}/${XU}`] || (console.log(`Deprecated as of ${UU}. ${XU}`), bU[`${UU}/${XU}`] = !0)
      },
      XX = new Error;

    function zX(UU, XU, zU) {
      let {
        key: cU
      } = zU, yU = 0;
      const QU = UU[cU],
        AU = {},
        FU = {};
      for (let oU = 1; oU <= XU.length; oU++) FU[oU + yU] = QU[oU], AU[oU + yU] = !0, yU += tU(XU[oU - 1]);
      UU[cU] = FU, UU[cU]._emit = AU, UU[cU]._multi = !0
    }

    function cX(UU) {
      ! function(UU) {
        UU.scope && "object" === typeof UU.scope && null !== UU.scope && (UU.beginScope = UU.scope, delete UU.scope)
      }(UU), "string" === typeof UU.beginScope && (UU.beginScope = {
          _wrap: UU.beginScope
        }), "string" === typeof UU.endScope && (UU.endScope = {
          _wrap: UU.endScope
        }),
        function(UU) {
          if (Array.isArray(UU.gY)) {
            if (UU.skip || UU.excludeBegin || UU.returnBegin) throw TU("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), XX;
            if ("object" !== typeof UU.beginScope || null === UU.beginScope) throw TU("beginScope must be object"), XX;
            zX(UU, UU.gY, {
              key: "beginScope"
            }), UU.gY = kU(UU.gY, {
              joinWith: ""
            })
          }
        }(UU),
        function(UU) {
          if (Array.isArray(UU.end)) {
            if (UU.skip || UU.excludeEnd || UU.returnEnd) throw TU("skip, excludeEnd, returnEnd not compatible with endScope: {}"), XX;
            if ("object" !== typeof UU.endScope || null === UU.endScope) throw TU("endScope must be object"), XX;
            zX(UU, UU.end, {
              key: "endScope"
            }), UU.end = kU(UU.end, {
              joinWith: ""
            })
          }
        }(UU)
    }

    function yX(UU) {
      function XU(XU, zU) {
        return new RegExp(EU(XU), "m" + (UU.case_insensitive ? "i" : "") + (UU.unicodeRegex ? "u" : "") + (zU ? "g" : ""))
      }
      class zU {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(UU, XU) {
          XU.position = this.position++, this.matchIndexes[this.matchAt] = XU, this.regexes.push([XU, UU]), this.matchAt += tU(UU) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const UU = this.regexes.map((UU => UU[1]));
          this.matcherRe = XU(kU(UU, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(UU) {
          this.matcherRe.lastIndex = this.lastIndex;
          const XU = this.matcherRe.exec(UU);
          if (!XU) return null;
          const zU = XU.findIndex(((UU, XU) => XU > 0 && void 0 !== UU)),
            cU = this.matchIndexes[zU];
          return XU.splice(0, zU), Object.assign(XU, cU)
        }
      }
      class cU {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(UU) {
          if (this.multiRegexes[UU]) return this.multiRegexes[UU];
          const XU = new zU;
          return this.rules.slice(UU).forEach((UU => {
            let [zU, cU] = UU;
            return XU.addRule(zU, cU)
          })), XU.compile(), this.multiRegexes[UU] = XU, XU
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(UU, XU) {
          this.rules.push([UU, XU]), "gY" === XU.type && this.count++
        }
        exec(UU) {
          const XU = this.getMatcher(this.regexIndex);
          XU.lastIndex = this.lastIndex;
          let zU = XU.exec(UU);
          if (this.resumingScanAtSamePosition())
            if (zU && zU.index === this.lastIndex);
            else {
              const XU = this.getMatcher(0);
              XU.lastIndex = this.lastIndex + 1, zU = XU.exec(UU)
            } return zU && (this.regexIndex += zU.position + 1, this.regexIndex === this.count && this.considerAll()), zU
        }
      }
      if (UU.compilerExtensions || (UU.compilerExtensions = []), UU.contains && UU.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return UU.classNameAliases = yU(UU.classNameAliases || {}),
        function zU(QU, AU) {
          const FU = QU;
          if (QU.isCompiled) return FU;
          [VU, mU, cX, xU].forEach((UU => UU(QU, AU))), UU.compilerExtensions.forEach((UU => UU(QU, AU))), QU.__beforeBegin = null, [sU, nU, lU].forEach((UU => UU(QU, AU))), QU.isCompiled = !0;
          let oU = null;
          return "object" === typeof QU.keywords && QU.keywords.$pattern && (QU.keywords = Object.assign({}, QU.keywords), oU = QU.keywords.$pattern, delete QU.keywords.$pattern), oU = oU || /\w+/, QU.keywords && (QU.keywords = jU(QU.keywords, UU.case_insensitive)), FU.keywordPatternRe = XU(oU, !0), AU && (QU.gY || (QU.gY = /\B|\b/), FU.beginRe = XU(FU.gY), QU.end || QU.endsWithParent || (QU.end = /\B|\b/), QU.end && (FU.endRe = XU(FU.end)), FU.terminatorEnd = EU(FU.end) || "", QU.endsWithParent && AU.terminatorEnd && (FU.terminatorEnd += (QU.end ? "|" : "") + AU.terminatorEnd)), QU.illegal && (FU.illegalRe = XU(QU.illegal)), QU.contains || (QU.contains = []), QU.contains = [].concat(...QU.contains.map((function(UU) {
            return function(UU) {
              UU.variants && !UU.cachedVariants && (UU.cachedVariants = UU.variants.map((function(XU) {
                return yU(UU, {
                  variants: null
                }, XU)
              })));
              if (UU.cachedVariants) return UU.cachedVariants;
              if (QX(UU)) return yU(UU, {
                starts: UU.starts ? yU(UU.starts) : null
              });
              if (Object.isFrozen(UU)) return yU(UU);
              return UU
            }("self" === UU ? QU : UU)
          }))), QU.contains.forEach((function(UU) {
            zU(UU, FU)
          })), QU.starts && zU(QU.starts, AU), FU.matcher = function(UU) {
            const XU = new cU;
            return UU.contains.forEach((UU => XU.addRule(UU.gY, {
              rule: UU,
              type: "gY"
            }))), UU.terminatorEnd && XU.addRule(UU.terminatorEnd, {
              type: "end"
            }), UU.illegal && XU.addRule(UU.illegal, {
              type: "illegal"
            }), XU
          }(FU), FU
        }(UU)
    }

    function QX(UU) {
      return !!UU && (UU.endsWithParent || QX(UU.starts))
    }
    class AX extends Error {
      constructor(UU, XU) {
        super(UU), this.name = "HTMLInjectionError", this.html = XU
      }
    }
    const FX = cU,
      oX = yU,
      DX = Symbol("nomatch"),
      EX = function(UU) {
        const cU = Object.create(null),
          yU = Object.create(null),
          QU = [];
        let AU = !0;
        const FU = "Could not find the language '{}', did you forget to load/include a language module?",
          oU = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let EU = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: DU
        };

        function tU(UU) {
          return EU.noHighlightRe.test(UU)
        }

        function gU(UU, XU, zU) {
          let cU = "",
            yU = "";
          "object" === typeof XU ? (cU = UU, zU = XU.ignoreIllegals, yU = XU.language) : (UX("10.7.0", "highlight(lang, code, ...args) has been deprecated."), UX("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), yU = UU, cU = XU), void 0 === zU && (zU = !0);
          const QU = {
            code: cU,
            language: yU
          };
          LU("before:highlight", QU);
          const AU = QU.result ? QU.result : kU(QU.language, QU.code, zU);
          return AU.code = QU.code, LU("after:highlight", AU), AU
        }

        function kU(UU, XU, yU, QU) {
          const oU = Object.create(null);

          function DU() {
            if (!LU.keywords) return void CU.addText(wU);
            let UU = 0;
            LU.keywordPatternRe.lastIndex = 0;
            let XU = LU.keywordPatternRe.exec(wU),
              zU = "";
            for (; XU;) {
              zU += wU.substring(UU, XU.index);
              const yU = RU.case_insensitive ? XU[0].toLowerCase() : XU[0],
                QU = (cU = yU, LU.keywords[cU]);
              if (QU) {
                const [UU, cU] = QU;
                if (CU.addText(zU), zU = "", oU[yU] = (oU[yU] || 0) + 1, oU[yU] <= 7 && (qU += cU), UU.startsWith("_")) zU += XU[0];
                else {
                  const zU = RU.classNameAliases[UU] || UU;
                  NU(XU[0], zU)
                }
              } else zU += XU[0];
              UU = LU.keywordPatternRe.lastIndex, XU = LU.keywordPatternRe.exec(wU)
            }
            var cU;
            zU += wU.substring(UU), CU.addText(zU)
          }

          function YU() {
            null != LU.subLanguage ? function() {
              if ("" === wU) return;
              let UU = null;
              if ("string" === typeof LU.subLanguage) {
                if (!cU[LU.subLanguage]) return void CU.addText(wU);
                UU = kU(LU.subLanguage, wU, !0, eU[LU.subLanguage]), eU[LU.subLanguage] = UU._top
              } else UU = GU(wU, LU.subLanguage.length ? LU.subLanguage : null);
              LU.relevance > 0 && (qU += UU.relevance), CU.__addSublanguage(UU._emitter, UU.language)
            }() : DU(), wU = ""
          }

          function NU(UU, XU) {
            "" !== UU && (CU.startScope(XU), CU.addText(UU), CU.endScope())
          }

          function IU(UU, XU) {
            let zU = 1;
            const cU = XU.length - 1;
            for (; zU <= cU;) {
              if (!UU._emit[zU]) {
                zU++;
                continue
              }
              const cU = RU.classNameAliases[UU[zU]] || UU[zU],
                yU = XU[zU];
              cU ? NU(yU, cU) : (wU = yU, DU(), wU = ""), zU++
            }
          }

          function pU(UU, XU) {
            return UU.scope && "string" === typeof UU.scope && CU.openNode(RU.classNameAliases[UU.scope] || UU.scope), UU.beginScope && (UU.beginScope._wrap ? (NU(wU, RU.classNameAliases[UU.beginScope._wrap] || UU.beginScope._wrap), wU = "") : UU.beginScope._multi && (IU(UU.beginScope, XU), wU = "")), LU = Object.create(UU, {
              parent: {
                value: LU
              }
            }), LU
          }

          function aU(UU, XU, cU) {
            let yU = function(UU, XU) {
              const zU = UU && UU.exec(XU);
              return zU && 0 === zU.index
            }(UU.endRe, cU);
            if (yU) {
              if (UU["on:end"]) {
                const cU = new zU(UU);
                UU["on:end"](XU, cU), cU.isMatchIgnored && (yU = !1)
              }
              if (yU) {
                for (; UU.endsParent && UU.parent;) UU = UU.parent;
                return UU
              }
            }
            if (UU.endsWithParent) return aU(UU.parent, XU, cU)
          }

          function tU(UU) {
            return 0 === LU.matcher.regexIndex ? (wU += UU[0], 1) : (rU = !0, 0)
          }

          function gU(UU) {
            const zU = UU[0],
              cU = XU.substring(UU.index),
              yU = aU(LU, UU, cU);
            if (!yU) return DX;
            const QU = LU;
            LU.endScope && LU.endScope._wrap ? (YU(), NU(zU, LU.endScope._wrap)) : LU.endScope && LU.endScope._multi ? (YU(), IU(LU.endScope, UU)) : QU.skip ? wU += zU : (QU.returnEnd || QU.excludeEnd || (wU += zU), YU(), QU.excludeEnd && (wU = zU));
            do {
              LU.scope && CU.closeNode(), LU.skip || LU.subLanguage || (qU += LU.relevance), LU = LU.parent
            } while (LU !== yU.parent);
            return yU.starts && pU(yU.starts, UU), QU.returnEnd ? 0 : zU.length
          }
          let BU = {};

          function ZU(cU, QU) {
            const FU = QU && QU[0];
            if (wU += cU, null == FU) return YU(), 0;
            if ("gY" === BU.type && "end" === QU.type && BU.index === QU.index && "" === FU) {
              if (wU += XU.slice(QU.index, QU.index + 1), !AU) {
                const XU = new Error(`0 width match regex (${UU})`);
                throw XU.languageName = UU, XU.badRule = BU.rule, XU
              }
              return 1
            }
            if (BU = QU, "gY" === QU.type) return function(UU) {
              const XU = UU[0],
                cU = UU.rule,
                yU = new zU(cU),
                QU = [cU.__beforeBegin, cU["on:begin"]];
              for (const zU of QU)
                if (zU && (zU(UU, yU), yU.isMatchIgnored)) return tU(XU);
              return cU.skip ? wU += XU : (cU.excludeBegin && (wU += XU), YU(), cU.returnBegin || cU.excludeBegin || (wU = XU)), pU(cU, UU), cU.returnBegin ? 0 : XU.length
            }(QU);
            if ("illegal" === QU.type && !yU) {
              const UU = new Error('Illegal lexeme "' + FU + '" for mode "' + (LU.scope || "<unnamed>") + '"');
              throw UU.mode = LU, UU
            }
            if ("end" === QU.type) {
              const UU = gU(QU);
              if (UU !== DX) return UU
            }
            if ("illegal" === QU.type && "" === FU) return wU += "\n", 1;
            if (SU > 1e5 && SU > 3 * QU.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return wU += FU, FU.length
          }
          const RU = PU(UU);
          if (!RU) throw TU(FU.replace("{}", UU)), new Error('Unknown language: "' + UU + '"');
          const WU = yX(RU);
          let dU = "",
            LU = QU || WU;
          const eU = {},
            CU = new EU.__emitter(EU);
          ! function() {
            const UU = [];
            for (let XU = LU; XU !== RU; XU = XU.parent) XU.scope && UU.unshift(XU.scope);
            UU.forEach((UU => CU.openNode(UU)))
          }();
          let wU = "",
            qU = 0,
            OU = 0,
            SU = 0,
            rU = !1;
          try {
            if (RU.__emitTokens) RU.__emitTokens(XU, CU);
            else {
              for (LU.matcher.considerAll();;) {
                SU++, rU ? rU = !1 : LU.matcher.considerAll(), LU.matcher.lastIndex = OU;
                const UU = LU.matcher.exec(XU);
                if (!UU) break;
                const zU = ZU(XU.substring(OU, UU.index), UU);
                OU = UU.index + zU
              }
              ZU(XU.substring(OU))
            }
            return CU.finalize(), dU = CU.toHTML(), {
              language: UU,
              value: dU,
              relevance: qU,
              illegal: !1,
              _emitter: CU,
              _top: LU
            }
          } catch (uU) {
            if (uU.message && uU.message.includes("Illegal")) return {
              language: UU,
              value: FX(XU),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: uU.message,
                index: OU,
                context: XU.slice(OU - 100, OU + 100),
                mode: uU.mode,
                resultSoFar: dU
              },
              _emitter: CU
            };
            if (AU) return {
              language: UU,
              value: FX(XU),
              illegal: !1,
              relevance: 0,
              errorRaised: uU,
              _emitter: CU,
              _top: LU
            };
            throw uU
          }
        }

        function GU(UU, XU) {
          XU = XU || EU.languages || Object.keys(cU);
          const zU = function(UU) {
              const XU = {
                value: FX(UU),
                illegal: !1,
                relevance: 0,
                _top: oU,
                _emitter: new EU.__emitter(EU)
              };
              return XU._emitter.addText(UU), XU
            }(UU),
            yU = XU.filter(PU).filter(dU).map((XU => kU(XU, UU, !1)));
          yU.unshift(zU);
          const QU = yU.sort(((UU, XU) => {
              if (UU.relevance !== XU.relevance) return XU.relevance - UU.relevance;
              if (UU.language && XU.language) {
                if (PU(UU.language).supersetOf === XU.language) return 1;
                if (PU(XU.language).supersetOf === UU.language) return -1
              }
              return 0
            })),
            [AU, FU] = QU,
            DU = AU;
          return DU.secondBest = FU, DU
        }

        function BU(UU) {
          let XU = null;
          const zU = function(UU) {
            let XU = UU.className + " ";
            XU += UU.parentNode ? UU.parentNode.className : "";
            const zU = EU.languageDetectRe.exec(XU);
            if (zU) {
              const XU = PU(zU[1]);
              return XU || (hU(FU.replace("{}", zU[1])), hU("Falling back to no-highlight mode for this block.", UU)), XU ? zU[1] : "no-highlight"
            }
            return XU.split(/\s+/).find((UU => tU(UU) || PU(UU)))
          }(UU);
          if (tU(zU)) return;
          if (LU("before:highlightElement", {
              el: UU,
              language: zU
            }), UU.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", UU);
          if (UU.children.length > 0 && (EU.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(UU)), EU.throwUnescapedHTML)) {
            throw new AX("One of your code blocks includes unescaped HTML.", UU.innerHTML)
          }
          XU = UU;
          const cU = XU.textContent,
            QU = zU ? gU(cU, {
              language: zU,
              ignoreIllegals: !0
            }) : GU(cU);
          UU.innerHTML = QU.value, UU.dataset.highlighted = "yes",
            function(UU, XU, zU) {
              const cU = XU && yU[XU] || zU;
              UU.classList.add("hljs"), UU.classList.add(`language-${cU}`)
            }(UU, zU, QU.language), UU.result = {
              language: QU.language,
              re: QU.relevance,
              relevance: QU.relevance
            }, QU.secondBest && (UU.secondBest = {
              language: QU.secondBest.language,
              relevance: QU.secondBest.relevance
            }), LU("after:highlightElement", {
              el: UU,
              result: QU,
              text: cU
            })
        }
        let ZU = !1;

        function RU() {
          if ("loading" === document.readyState) return ZU || window.addEventListener("DOMContentLoaded", (function() {
            RU()
          }), !1), void(ZU = !0);
          document.querySelectorAll(EU.cssSelector).forEach(BU)
        }

        function PU(UU) {
          return UU = (UU || "").toLowerCase(), cU[UU] || cU[yU[UU]]
        }

        function WU(UU, XU) {
          let {
            languageName: zU
          } = XU;
          "string" === typeof UU && (UU = [UU]), UU.forEach((UU => {
            yU[UU.toLowerCase()] = zU
          }))
        }

        function dU(UU) {
          const XU = PU(UU);
          return XU && !XU.disableAutodetect
        }

        function LU(UU, XU) {
          const zU = UU;
          QU.forEach((function(UU) {
            UU[zU] && UU[zU](XU)
          }))
        }
        Object.assign(UU, {
          highlight: gU,
          highlightAuto: GU,
          highlightAll: RU,
          highlightElement: BU,
          highlightBlock: function(UU) {
            return UX("10.7.0", "highlightBlock will be removed entirely in v12.0"), UX("10.7.0", "Please use highlightElement now."), BU(UU)
          },
          configure: function(UU) {
            EU = oX(EU, UU)
          },
          initHighlighting: () => {
            RU(), UX("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            RU(), UX("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(XU, zU) {
            let yU = null;
            try {
              yU = zU(UU)
            } catch (QU) {
              if (TU("Language definition for '{}' could not be registered.".replace("{}", XU)), !AU) throw QU;
              TU(QU), yU = oU
            }
            yU.name || (yU.name = XU), cU[XU] = yU, yU.rawDefinition = zU.bind(null, UU), yU.aliases && WU(yU.aliases, {
              languageName: XU
            })
          },
          unregisterLanguage: function(UU) {
            delete cU[UU];
            for (const XU of Object.keys(yU)) yU[XU] === UU && delete yU[XU]
          },
          listLanguages: function() {
            return Object.keys(cU)
          },
          getLanguage: PU,
          registerAliases: WU,
          autoDetection: dU,
          inherit: oX,
          addPlugin: function(UU) {
            ! function(UU) {
              UU["before:highlightBlock"] && !UU["before:highlightElement"] && (UU["before:highlightElement"] = XU => {
                UU["before:highlightBlock"](Object.assign({
                  block: XU.el
                }, XU))
              }), UU["after:highlightBlock"] && !UU["after:highlightElement"] && (UU["after:highlightElement"] = XU => {
                UU["after:highlightBlock"](Object.assign({
                  block: XU.el
                }, XU))
              })
            }(UU), QU.push(UU)
          },
          removePlugin: function(UU) {
            const XU = QU.indexOf(UU); - 1 !== XU && QU.splice(XU, 1)
          }
        }), UU.debugMode = function() {
          AU = !1
        }, UU.safeMode = function() {
          AU = !0
        }, UU.versionString = "11.11.1", UU.regex = {
          concat: pU,
          lookahead: YU,
          either: aU,
          optional: IU,
          anyNumberOfTimes: NU
        };
        for (const zU in MU) "object" === typeof MU[zU] && XU(MU[zU]);
        return Object.assign(UU, MU), UU
      },
      YX = EX({});
    YX.newInstance = () => EX({}), UU.exports = YX, YX.HighlightJS = YX, YX.default = YX
  },
  5235: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = zU(5243)
  },
  5251: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => YU
    });
    const cU = "[A-Za-z$_][0-9A-Za-z$_]*",
      yU = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      QU = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      AU = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      FU = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      oU = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      DU = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      EU = [].concat(oU, AU, FU);

    function YU(UU) {
      const XU = UU.regex,
        zU = cU,
        YU = "<>",
        NU = "</>",
        IU = {
          gY: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (UU, XU) => {
            const zU = UU[0].length + UU.index,
              cU = UU.input[zU];
            if ("<" === cU || "," === cU) return void XU.ignoreMatch();
            let yU;
            ">" === cU && (((UU, XU) => {
              let {
                after: zU
              } = XU;
              const cU = "</" + UU[0].slice(1);
              return -1 !== UU.input.indexOf(cU, zU)
            })(UU, {
              after: zU
            }) || XU.ignoreMatch());
            const QU = UU.input.substring(zU);
            ((yU = QU.match(/^\s*=/)) || (yU = QU.match(/^\s+extends\s+/)) && 0 === yU.index) && XU.ignoreMatch()
          }
        },
        pU = {
          $pattern: cU,
          keyword: yU,
          literal: QU,
          built_in: EU,
          "variable.language": DU
        },
        aU = "[0-9](_?[0-9])*",
        tU = `\\.(${aU})`,
        gU = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        kU = {
          className: "number",
          variants: [{
            gY: `(\\b(${gU})((${tU})|\\.)?|(${tU}))[eE][+-]?(${aU})\\b`
          }, {
            gY: `\\b(${gU})\\b((${tU})\\b|\\.)?|(${tU})\\b`
          }, {
            gY: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            gY: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            gY: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            gY: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            gY: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        GU = {
          className: "subst",
          gY: "\\$\\{",
          end: "\\}",
          keywords: pU,
          contains: []
        },
        BU = {
          gY: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, GU],
            subLanguage: "xml"
          }
        },
        ZU = {
          gY: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, GU],
            subLanguage: "css"
          }
        },
        RU = {
          gY: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, GU],
            subLanguage: "graphql"
          }
        },
        PU = {
          className: "string",
          gY: "`",
          end: "`",
          contains: [UU.BACKSLASH_ESCAPE, GU]
        },
        WU = {
          className: "comment",
          variants: [UU.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              gY: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                gY: "@[A-Za-z]+"
              }, {
                className: "type",
                gY: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                gY: zU + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                gY: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), UU.C_BLOCK_COMMENT_MODE, UU.C_LINE_COMMENT_MODE]
        },
        dU = [UU.APOS_STRING_MODE, UU.QUOTE_STRING_MODE, BU, ZU, RU, PU, {
          match: /\$\d+/
        }, kU];
      GU.contains = dU.concat({
        gY: /\{/,
        end: /\}/,
        keywords: pU,
        contains: ["self"].concat(dU)
      });
      const LU = [].concat(WU, GU.contains),
        eU = LU.concat([{
          gY: /(\s*)\(/,
          end: /\)/,
          keywords: pU,
          contains: ["self"].concat(LU)
        }]),
        CU = {
          className: "params",
          gY: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: pU,
          contains: eU
        },
        wU = {
          variants: [{
            match: [/class/, /\s+/, zU, /\s+/, /extends/, /\s+/, XU.concat(zU, "(", XU.concat(/\./, zU), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, zU],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        qU = {
          relevance: 0,
          match: XU.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...AU, ...FU]
          }
        },
        OU = {
          variants: [{
            match: [/function/, /\s+/, zU, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [CU],
          illegal: /%/
        };
      const SU = {
        match: XU.concat(/\b/, (rU = [...oU, "super", "import"].map((UU => `${UU}\\s*\\(`)), XU.concat("(?!", rU.join("|"), ")")), zU, XU.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var rU;
      const uU = {
          gY: XU.concat(/\./, XU.lookahead(XU.concat(zU, /(?![0-9A-Za-z$_(])/))),
          end: zU,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        fU = {
          match: [/get|set/, /\s+/, zU, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            gY: /\(\)/
          }, CU]
        },
        iU = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + UU.UNDERSCORE_IDENT_RE + ")\\s*=>",
        HU = {
          match: [/const|var|let/, /\s+/, zU, /\s*/, /=\s*/, /(async\s*)?/, XU.lookahead(iU)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [CU]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: pU,
        exports: {
          PARAMS_CONTAINS: eU,
          CLASS_REFERENCE: qU
        },
        illegal: /#(?![$_A-z])/,
        contains: [UU.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          gY: /^\s*['"]use (strict|asm)['"]/
        }, UU.APOS_STRING_MODE, UU.QUOTE_STRING_MODE, BU, ZU, RU, PU, WU, {
          match: /\$\d+/
        }, kU, qU, {
          scope: "attr",
          match: zU + XU.lookahead(":"),
          relevance: 0
        }, HU, {
          gY: "(" + UU.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [WU, UU.REGEXP_MODE, {
            className: "function",
            gY: iU,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                gY: UU.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                gY: /\(\s*\)/,
                skip: !0
              }, {
                gY: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: pU,
                contains: eU
              }]
            }]
          }, {
            gY: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              gY: YU,
              end: NU
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              gY: IU.gY,
              "on:begin": IU.isTrulyOpeningTag,
              end: IU.end
            }],
            subLanguage: "xml",
            contains: [{
              gY: IU.gY,
              end: IU.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, OU, {
          beginKeywords: "while if switch catch for"
        }, {
          gY: "\\b(?!function)" + UU.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [CU, UU.inherit(UU.TITLE_MODE, {
            gY: zU,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, uU, {
          match: "\\$" + zU,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [CU]
        }, SU, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, wU, fU, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5253: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => NU
    });
    const cU = "[A-Za-z$_][0-9A-Za-z$_]*",
      yU = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      QU = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      AU = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      FU = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      oU = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      DU = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      EU = [].concat(oU, AU, FU);

    function YU(UU) {
      const XU = UU.regex,
        zU = cU,
        YU = "<>",
        NU = "</>",
        IU = {
          gY: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (UU, XU) => {
            const zU = UU[0].length + UU.index,
              cU = UU.input[zU];
            if ("<" === cU || "," === cU) return void XU.ignoreMatch();
            let yU;
            ">" === cU && (((UU, XU) => {
              let {
                after: zU
              } = XU;
              const cU = "</" + UU[0].slice(1);
              return -1 !== UU.input.indexOf(cU, zU)
            })(UU, {
              after: zU
            }) || XU.ignoreMatch());
            const QU = UU.input.substring(zU);
            ((yU = QU.match(/^\s*=/)) || (yU = QU.match(/^\s+extends\s+/)) && 0 === yU.index) && XU.ignoreMatch()
          }
        },
        pU = {
          $pattern: cU,
          keyword: yU,
          literal: QU,
          built_in: EU,
          "variable.language": DU
        },
        aU = "[0-9](_?[0-9])*",
        tU = `\\.(${aU})`,
        gU = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        kU = {
          className: "number",
          variants: [{
            gY: `(\\b(${gU})((${tU})|\\.)?|(${tU}))[eE][+-]?(${aU})\\b`
          }, {
            gY: `\\b(${gU})\\b((${tU})\\b|\\.)?|(${tU})\\b`
          }, {
            gY: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            gY: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            gY: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            gY: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            gY: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        GU = {
          className: "subst",
          gY: "\\$\\{",
          end: "\\}",
          keywords: pU,
          contains: []
        },
        BU = {
          gY: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, GU],
            subLanguage: "xml"
          }
        },
        ZU = {
          gY: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, GU],
            subLanguage: "css"
          }
        },
        RU = {
          gY: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, GU],
            subLanguage: "graphql"
          }
        },
        PU = {
          className: "string",
          gY: "`",
          end: "`",
          contains: [UU.BACKSLASH_ESCAPE, GU]
        },
        WU = {
          className: "comment",
          variants: [UU.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              gY: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                gY: "@[A-Za-z]+"
              }, {
                className: "type",
                gY: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                gY: zU + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                gY: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), UU.C_BLOCK_COMMENT_MODE, UU.C_LINE_COMMENT_MODE]
        },
        dU = [UU.APOS_STRING_MODE, UU.QUOTE_STRING_MODE, BU, ZU, RU, PU, {
          match: /\$\d+/
        }, kU];
      GU.contains = dU.concat({
        gY: /\{/,
        end: /\}/,
        keywords: pU,
        contains: ["self"].concat(dU)
      });
      const LU = [].concat(WU, GU.contains),
        eU = LU.concat([{
          gY: /(\s*)\(/,
          end: /\)/,
          keywords: pU,
          contains: ["self"].concat(LU)
        }]),
        CU = {
          className: "params",
          gY: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: pU,
          contains: eU
        },
        wU = {
          variants: [{
            match: [/class/, /\s+/, zU, /\s+/, /extends/, /\s+/, XU.concat(zU, "(", XU.concat(/\./, zU), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, zU],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        qU = {
          relevance: 0,
          match: XU.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...AU, ...FU]
          }
        },
        OU = {
          variants: [{
            match: [/function/, /\s+/, zU, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [CU],
          illegal: /%/
        };
      const SU = {
        match: XU.concat(/\b/, (rU = [...oU, "super", "import"].map((UU => `${UU}\\s*\\(`)), XU.concat("(?!", rU.join("|"), ")")), zU, XU.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var rU;
      const uU = {
          gY: XU.concat(/\./, XU.lookahead(XU.concat(zU, /(?![0-9A-Za-z$_(])/))),
          end: zU,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        fU = {
          match: [/get|set/, /\s+/, zU, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            gY: /\(\)/
          }, CU]
        },
        iU = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + UU.UNDERSCORE_IDENT_RE + ")\\s*=>",
        HU = {
          match: [/const|var|let/, /\s+/, zU, /\s*/, /=\s*/, /(async\s*)?/, XU.lookahead(iU)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [CU]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: pU,
        exports: {
          PARAMS_CONTAINS: eU,
          CLASS_REFERENCE: qU
        },
        illegal: /#(?![$_A-z])/,
        contains: [UU.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          gY: /^\s*['"]use (strict|asm)['"]/
        }, UU.APOS_STRING_MODE, UU.QUOTE_STRING_MODE, BU, ZU, RU, PU, WU, {
          match: /\$\d+/
        }, kU, qU, {
          scope: "attr",
          match: zU + XU.lookahead(":"),
          relevance: 0
        }, HU, {
          gY: "(" + UU.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [WU, UU.REGEXP_MODE, {
            className: "function",
            gY: iU,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                gY: UU.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                gY: /\(\s*\)/,
                skip: !0
              }, {
                gY: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: pU,
                contains: eU
              }]
            }]
          }, {
            gY: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              gY: YU,
              end: NU
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              gY: IU.gY,
              "on:begin": IU.isTrulyOpeningTag,
              end: IU.end
            }],
            subLanguage: "xml",
            contains: [{
              gY: IU.gY,
              end: IU.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, OU, {
          beginKeywords: "while if switch catch for"
        }, {
          gY: "\\b(?!function)" + UU.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [CU, UU.inherit(UU.TITLE_MODE, {
            gY: zU,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, uU, {
          match: "\\$" + zU,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [CU]
        }, SU, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, wU, fU, {
          match: /\$[(.]/
        }]
      }
    }

    function NU(UU) {
      const XU = UU.regex,
        zU = YU(UU),
        AU = cU,
        FU = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        oU = {
          gY: [/namespace/, /\s+/, UU.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        NU = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: FU
          },
          contains: [zU.exports.CLASS_REFERENCE]
        },
        IU = {
          $pattern: cU,
          keyword: yU.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: QU,
          built_in: EU.concat(FU),
          "variable.language": DU
        },
        pU = {
          className: "meta",
          gY: "@" + AU
        },
        aU = (UU, XU, zU) => {
          const cU = UU.contains.findIndex((UU => UU.label === XU));
          if (-1 === cU) throw new Error("can not find mode to replace");
          UU.contains.splice(cU, 1, zU)
        };
      Object.assign(zU.keywords, IU), zU.exports.PARAMS_CONTAINS.push(pU);
      const tU = zU.contains.find((UU => "attr" === UU.scope)),
        gU = Object.assign({}, tU, {
          match: XU.concat(AU, XU.lookahead(/\s*\?:/))
        });
      zU.exports.PARAMS_CONTAINS.push([zU.exports.CLASS_REFERENCE, tU, gU]), zU.contains = zU.contains.concat([pU, oU, NU, gU]), aU(zU, "shebang", UU.SHEBANG()), aU(zU, "use_strict", {
        className: "meta",
        relevance: 10,
        gY: /^\s*['"]use strict['"]/
      });
      return zU.contains.find((UU => "func.def" === UU.label)).relevance = 0, Object.assign(zU, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), zU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);