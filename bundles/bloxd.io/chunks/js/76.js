export const id = 76;
export const ids = [76];
export const modules = {
  4373: UU => {
    function RU(UU) {
      return UU instanceof Map ? UU.clear = UU.delete = UU.set = function() {
        throw new Error("map is read-only")
      } : UU instanceof Set && (UU.add = UU.clear = UU.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(UU), Object.getOwnPropertyNames(UU).forEach((gU => {
        const tU = UU[gU],
          pU = typeof tU;
        "object" !== pU && "function" !== pU || Object.isFrozen(tU) || RU(tU)
      })), UU
    }
    class gU {
      constructor(UU) {
        void 0 === UU.data && (UU.data = {}), this.data = UU.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function tU(UU) {
      return UU.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function pU(UU) {
      const RU = Object.create(null);
      for (const EU in UU) RU[EU] = UU[EU];
      for (var gU = arguments.length, tU = new Array(gU > 1 ? gU - 1 : 0), pU = 1; pU < gU; pU++) tU[pU - 1] = arguments[pU];
      return tU.forEach((function(UU) {
        for (const gU in UU) RU[gU] = UU[gU]
      })), RU
    }
    const EU = UU => !!UU.scope;
    class PU {
      constructor(UU, RU) {
        this.buffer = "", this.classPrefix = RU.classPrefix, UU.walk(this)
      }
      addText(UU) {
        this.buffer += tU(UU)
      }
      openNode(UU) {
        if (!EU(UU)) return;
        const RU = ((UU, RU) => {
          let {
            prefix: gU
          } = RU;
          if (UU.startsWith("language:")) return UU.replace("language:", "language-");
          if (UU.includes(".")) {
            const RU = UU.split(".");
            return [`${gU}${RU.shift()}`, ...RU.map(((UU, RU) => `${UU}${"_".repeat(RU+1)}`))].join(" ")
          }
          return `${gU}${UU}`
        })(UU.scope, {
          prefix: this.classPrefix
        });
        this.span(RU)
      }
      closeNode(UU) {
        EU(UU) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(UU) {
        this.buffer += `<span class="${UU}">`
      }
    }
    const TU = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const RU = {
        children: []
      };
      return Object.assign(RU, UU), RU
    };
    class qU {
      constructor() {
        this.vx = TU(), this.stack = [this.vx]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.vx
      }
      add(UU) {
        this.top.children.push(UU)
      }
      openNode(UU) {
        const RU = TU({
          scope: UU
        });
        this.add(RU), this.stack.push(RU)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.vx, null, 4)
      }
      walk(UU) {
        return this.constructor._walk(UU, this.vx)
      }
      static _walk(UU, RU) {
        return "string" === typeof RU ? UU.addText(RU) : RU.children && (UU.openNode(RU), RU.children.forEach((RU => this._walk(UU, RU))), UU.closeNode(RU)), UU
      }
      static _collapse(UU) {
        "string" !== typeof UU && UU.children && (UU.children.every((UU => "string" === typeof UU)) ? UU.children = [UU.children.join("")] : UU.children.forEach((UU => {
          qU._collapse(UU)
        })))
      }
    }
    class KU extends qU {
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
      __addSublanguage(UU, RU) {
        const gU = UU.root;
        RU && (gU.scope = `language:${RU}`), this.add(gU)
      }
      toHTML() {
        return new PU(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function cU(UU) {
      return UU ? "string" === typeof UU ? UU : UU.source : null
    }

    function GU(UU) {
      return CU("(?=", UU, ")")
    }

    function jU(UU) {
      return CU("(?:", UU, ")*")
    }

    function uU(UU) {
      return CU("(?:", UU, ")?")
    }

    function CU() {
      for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
      return RU.map((UU => cU(UU))).join("")
    }

    function hU() {
      for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
      const tU = function(UU) {
        const RU = UU[UU.length - 1];
        return "object" === typeof RU && RU.constructor === Object ? (UU.splice(UU.length - 1, 1), RU) : {}
      }(RU);
      return "(" + (tU.capture ? "" : "?:") + RU.map((UU => cU(UU))).join("|") + ")"
    }

    function QU(UU) {
      return new RegExp(UU.toString() + "|").exec("").length - 1
    }
    const eU = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function WU(UU, RU) {
      let {
        joinWith: gU
      } = RU, tU = 0;
      return UU.map((UU => {
        tU += 1;
        const RU = tU;
        let gU = cU(UU),
          pU = "";
        for (; gU.length > 0;) {
          const UU = eU.exec(gU);
          if (!UU) {
            pU += gU;
            break
          }
          pU += gU.substring(0, UU.index), gU = gU.substring(UU.index + UU[0].length), "\\" === UU[0][0] && UU[1] ? pU += "\\" + String(Number(UU[1]) + RU) : (pU += UU[0], "(" === UU[0] && tU++)
        }
        return pU
      })).map((UU => `(${UU})`)).join(gU)
    }
    const fU = "[a-zA-Z]\\w*",
      xU = "[a-zA-Z_]\\w*",
      mU = "\\b\\d+(\\.\\d+)?",
      IU = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      JU = "\\b(0b[01]+)",
      wU = {
        pu: "\\\\[\\s\\S]",
        relevance: 0
      },
      nU = {
        scope: "string",
        pu: "'",
        end: "'",
        illegal: "\\n",
        contains: [wU]
      },
      bU = {
        scope: "string",
        pu: '"',
        end: '"',
        illegal: "\\n",
        contains: [wU]
      },
      oU = function(UU, RU) {
        const gU = pU({
          scope: "comment",
          pu: UU,
          end: RU,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        gU.contains.push({
          scope: "doctag",
          pu: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const tU = hU("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return gU.contains.push({
          pu: CU(/[ ]+/, "(", tU, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), gU
      },
      ZU = oU("//", "$"),
      aU = oU("/\\*", "\\*/"),
      YU = oU("#", "$"),
      BU = {
        scope: "number",
        pu: mU,
        relevance: 0
      },
      VU = {
        scope: "number",
        pu: IU,
        relevance: 0
      },
      rU = {
        scope: "number",
        pu: JU,
        relevance: 0
      },
      XU = {
        scope: "regexp",
        pu: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [wU, {
          pu: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [wU]
        }]
      },
      vU = {
        scope: "title",
        pu: fU,
        relevance: 0
      },
      dU = {
        scope: "title",
        pu: xU,
        relevance: 0
      },
      HU = {
        pu: "\\.\\s*" + xU,
        relevance: 0
      };
    var SU = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: nU,
      BACKSLASH_ESCAPE: wU,
      BINARY_NUMBER_MODE: rU,
      BINARY_NUMBER_RE: JU,
      COMMENT: oU,
      C_BLOCK_COMMENT_MODE: aU,
      C_LINE_COMMENT_MODE: ZU,
      C_NUMBER_MODE: VU,
      C_NUMBER_RE: IU,
      END_SAME_AS_BEGIN: function(UU) {
        return Object.assign(UU, {
          "on:begin": (UU, RU) => {
            RU.data._beginMatch = UU[1]
          },
          "on:end": (UU, RU) => {
            RU.data._beginMatch !== UU[1] && RU.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: YU,
      IDENT_RE: fU,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: HU,
      NUMBER_MODE: BU,
      NUMBER_RE: mU,
      PHRASAL_WORDS_MODE: {
        pu: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: bU,
      REGEXP_MODE: XU,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const RU = /^#![ ]*\//;
        return UU.binary && (UU.pu = CU(RU, /.*\b/, UU.binary, /\b.*/)), pU({
          scope: "meta",
          pu: RU,
          end: /$/,
          relevance: 0,
          "on:begin": (UU, RU) => {
            0 !== UU.index && RU.ignoreMatch()
          }
        }, UU)
      },
      TITLE_MODE: vU,
      UNDERSCORE_IDENT_RE: xU,
      UNDERSCORE_TITLE_MODE: dU
    });

    function sU(UU, RU) {
      "." === UU.input[UU.index - 1] && RU.ignoreMatch()
    }

    function yU(UU, RU) {
      void 0 !== UU.className && (UU.scope = UU.className, delete UU.className)
    }

    function kU(UU, RU) {
      RU && UU.beginKeywords && (UU.pu = "\\b(" + UU.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", UU.__beforeBegin = sU, UU.keywords = UU.keywords || UU.beginKeywords, delete UU.beginKeywords, void 0 === UU.relevance && (UU.relevance = 0))
    }

    function FU(UU, RU) {
      Array.isArray(UU.illegal) && (UU.illegal = hU(...UU.illegal))
    }

    function iU(UU, RU) {
      if (UU.match) {
        if (UU.pu || UU.end) throw new Error("begin & end are not supported with match");
        UU.pu = UU.match, delete UU.match
      }
    }

    function AU(UU, RU) {
      void 0 === UU.relevance && (UU.relevance = 1)
    }
    const zU = (UU, RU) => {
        if (!UU.beforeMatch) return;
        if (UU.starts) throw new Error("beforeMatch cannot be used with starts");
        const gU = Object.assign({}, UU);
        Object.keys(UU).forEach((RU => {
          delete UU[RU]
        })), UU.keywords = gU.keywords, UU.pu = CU(gU.beforeMatch, GU(gU.pu)), UU.starts = {
          relevance: 0,
          contains: [Object.assign(gU, {
            endsParent: !0
          })]
        }, UU.relevance = 0, delete gU.beforeMatch
      },
      MU = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function DU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const tU = Object.create(null);
      return "string" === typeof UU ? pU(gU, UU.split(" ")) : Array.isArray(UU) ? pU(gU, UU) : Object.keys(UU).forEach((function(gU) {
        Object.assign(tU, DU(UU[gU], RU, gU))
      })), tU;

      function pU(UU, gU) {
        RU && (gU = gU.map((UU => UU.toLowerCase()))), gU.forEach((function(RU) {
          const gU = RU.split("|");
          tU[gU[0]] = [UU, LU(gU[0], gU[1])]
        }))
      }
    }

    function LU(UU, RU) {
      return RU ? Number(RU) : function(UU) {
        return MU.includes(UU.toLowerCase())
      }(UU) ? 0 : 1
    }
    const NU = {},
      lU = UU => {
        console.error(UU)
      },
      OU = function(UU) {
        for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
        console.log(`WARN: ${UU}`, ...gU)
      },
      UR = (UU, RU) => {
        NU[`${UU}/${RU}`] || (console.log(`Deprecated as of ${UU}. ${RU}`), NU[`${UU}/${RU}`] = !0)
      },
      RR = new Error;

    function gR(UU, RU, gU) {
      let {
        key: tU
      } = gU, pU = 0;
      const EU = UU[tU],
        PU = {},
        TU = {};
      for (let qU = 1; qU <= RU.length; qU++) TU[qU + pU] = EU[qU], PU[qU + pU] = !0, pU += QU(RU[qU - 1]);
      UU[tU] = TU, UU[tU]._emit = PU, UU[tU]._multi = !0
    }

    function tR(UU) {
      ! function(UU) {
        UU.scope && "object" === typeof UU.scope && null !== UU.scope && (UU.beginScope = UU.scope, delete UU.scope)
      }(UU), "string" === typeof UU.beginScope && (UU.beginScope = {
          _wrap: UU.beginScope
        }), "string" === typeof UU.endScope && (UU.endScope = {
          _wrap: UU.endScope
        }),
        function(UU) {
          if (Array.isArray(UU.pu)) {
            if (UU.skip || UU.excludeBegin || UU.returnBegin) throw lU("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), RR;
            if ("object" !== typeof UU.beginScope || null === UU.beginScope) throw lU("beginScope must be object"), RR;
            gR(UU, UU.pu, {
              key: "beginScope"
            }), UU.pu = WU(UU.pu, {
              joinWith: ""
            })
          }
        }(UU),
        function(UU) {
          if (Array.isArray(UU.end)) {
            if (UU.skip || UU.excludeEnd || UU.returnEnd) throw lU("skip, excludeEnd, returnEnd not compatible with endScope: {}"), RR;
            if ("object" !== typeof UU.endScope || null === UU.endScope) throw lU("endScope must be object"), RR;
            gR(UU, UU.end, {
              key: "endScope"
            }), UU.end = WU(UU.end, {
              joinWith: ""
            })
          }
        }(UU)
    }

    function pR(UU) {
      function RU(RU, gU) {
        return new RegExp(cU(RU), "m" + (UU.case_insensitive ? "i" : "") + (UU.unicodeRegex ? "u" : "") + (gU ? "g" : ""))
      }
      class gU {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(UU, RU) {
          RU.position = this.position++, this.matchIndexes[this.matchAt] = RU, this.regexes.push([RU, UU]), this.matchAt += QU(UU) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const UU = this.regexes.map((UU => UU[1]));
          this.matcherRe = RU(WU(UU, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(UU) {
          this.matcherRe.lastIndex = this.lastIndex;
          const RU = this.matcherRe.exec(UU);
          if (!RU) return null;
          const gU = RU.findIndex(((UU, RU) => RU > 0 && void 0 !== UU)),
            tU = this.matchIndexes[gU];
          return RU.splice(0, gU), Object.assign(RU, tU)
        }
      }
      class tU {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(UU) {
          if (this.multiRegexes[UU]) return this.multiRegexes[UU];
          const RU = new gU;
          return this.rules.slice(UU).forEach((UU => {
            let [gU, tU] = UU;
            return RU.addRule(gU, tU)
          })), RU.compile(), this.multiRegexes[UU] = RU, RU
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(UU, RU) {
          this.rules.push([UU, RU]), "pu" === RU.type && this.count++
        }
        exec(UU) {
          const RU = this.getMatcher(this.regexIndex);
          RU.lastIndex = this.lastIndex;
          let gU = RU.exec(UU);
          if (this.resumingScanAtSamePosition())
            if (gU && gU.index === this.lastIndex);
            else {
              const RU = this.getMatcher(0);
              RU.lastIndex = this.lastIndex + 1, gU = RU.exec(UU)
            } return gU && (this.regexIndex += gU.position + 1, this.regexIndex === this.count && this.considerAll()), gU
        }
      }
      if (UU.compilerExtensions || (UU.compilerExtensions = []), UU.contains && UU.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return UU.classNameAliases = pU(UU.classNameAliases || {}),
        function gU(EU, PU) {
          const TU = EU;
          if (EU.isCompiled) return TU;
          [yU, iU, tR, zU].forEach((UU => UU(EU, PU))), UU.compilerExtensions.forEach((UU => UU(EU, PU))), EU.__beforeBegin = null, [kU, FU, AU].forEach((UU => UU(EU, PU))), EU.isCompiled = !0;
          let qU = null;
          return "object" === typeof EU.keywords && EU.keywords.$pattern && (EU.keywords = Object.assign({}, EU.keywords), qU = EU.keywords.$pattern, delete EU.keywords.$pattern), qU = qU || /\w+/, EU.keywords && (EU.keywords = DU(EU.keywords, UU.case_insensitive)), TU.keywordPatternRe = RU(qU, !0), PU && (EU.pu || (EU.pu = /\B|\b/), TU.beginRe = RU(TU.pu), EU.end || EU.endsWithParent || (EU.end = /\B|\b/), EU.end && (TU.endRe = RU(TU.end)), TU.terminatorEnd = cU(TU.end) || "", EU.endsWithParent && PU.terminatorEnd && (TU.terminatorEnd += (EU.end ? "|" : "") + PU.terminatorEnd)), EU.illegal && (TU.illegalRe = RU(EU.illegal)), EU.contains || (EU.contains = []), EU.contains = [].concat(...EU.contains.map((function(UU) {
            return function(UU) {
              UU.variants && !UU.cachedVariants && (UU.cachedVariants = UU.variants.map((function(RU) {
                return pU(UU, {
                  variants: null
                }, RU)
              })));
              if (UU.cachedVariants) return UU.cachedVariants;
              if (ER(UU)) return pU(UU, {
                starts: UU.starts ? pU(UU.starts) : null
              });
              if (Object.isFrozen(UU)) return pU(UU);
              return UU
            }("self" === UU ? EU : UU)
          }))), EU.contains.forEach((function(UU) {
            gU(UU, TU)
          })), EU.starts && gU(EU.starts, PU), TU.matcher = function(UU) {
            const RU = new tU;
            return UU.contains.forEach((UU => RU.addRule(UU.pu, {
              rule: UU,
              type: "pu"
            }))), UU.terminatorEnd && RU.addRule(UU.terminatorEnd, {
              type: "end"
            }), UU.illegal && RU.addRule(UU.illegal, {
              type: "illegal"
            }), RU
          }(TU), TU
        }(UU)
    }

    function ER(UU) {
      return !!UU && (UU.endsWithParent || ER(UU.starts))
    }
    class PR extends Error {
      constructor(UU, RU) {
        super(UU), this.name = "HTMLInjectionError", this.html = RU
      }
    }
    const TR = tU,
      qR = pU,
      KR = Symbol("nomatch"),
      cR = function(UU) {
        const tU = Object.create(null),
          pU = Object.create(null),
          EU = [];
        let PU = !0;
        const TU = "Could not find the language '{}', did you forget to load/include a language module?",
          qU = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let cU = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: KU
        };

        function QU(UU) {
          return cU.noHighlightRe.test(UU)
        }

        function eU(UU, RU, gU) {
          let tU = "",
            pU = "";
          "object" === typeof RU ? (tU = UU, gU = RU.ignoreIllegals, pU = RU.language) : (UR("10.7.0", "highlight(lang, code, ...args) has been deprecated."), UR("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), pU = UU, tU = RU), void 0 === gU && (gU = !0);
          const EU = {
            code: tU,
            language: pU
          };
          bU("before:highlight", EU);
          const PU = EU.result ? EU.result : WU(EU.language, EU.code, gU);
          return PU.code = EU.code, bU("after:highlight", PU), PU
        }

        function WU(UU, RU, pU, EU) {
          const qU = Object.create(null);

          function KU() {
            if (!bU.keywords) return void ZU.addText(aU);
            let UU = 0;
            bU.keywordPatternRe.lastIndex = 0;
            let RU = bU.keywordPatternRe.exec(aU),
              gU = "";
            for (; RU;) {
              gU += aU.substring(UU, RU.index);
              const pU = IU.case_insensitive ? RU[0].toLowerCase() : RU[0],
                EU = (tU = pU, bU.keywords[tU]);
              if (EU) {
                const [UU, tU] = EU;
                if (ZU.addText(gU), gU = "", qU[pU] = (qU[pU] || 0) + 1, qU[pU] <= 7 && (YU += tU), UU.startsWith("_")) gU += RU[0];
                else {
                  const gU = IU.classNameAliases[UU] || UU;
                  jU(RU[0], gU)
                }
              } else gU += RU[0];
              UU = bU.keywordPatternRe.lastIndex, RU = bU.keywordPatternRe.exec(aU)
            }
            var tU;
            gU += aU.substring(UU), ZU.addText(gU)
          }

          function GU() {
            null != bU.subLanguage ? function() {
              if ("" === aU) return;
              let UU = null;
              if ("string" === typeof bU.subLanguage) {
                if (!tU[bU.subLanguage]) return void ZU.addText(aU);
                UU = WU(bU.subLanguage, aU, !0, oU[bU.subLanguage]), oU[bU.subLanguage] = UU._top
              } else UU = fU(aU, bU.subLanguage.length ? bU.subLanguage : null);
              bU.relevance > 0 && (YU += UU.relevance), ZU.__addSublanguage(UU._emitter, UU.language)
            }() : KU(), aU = ""
          }

          function jU(UU, RU) {
            "" !== UU && (ZU.startScope(RU), ZU.addText(UU), ZU.endScope())
          }

          function uU(UU, RU) {
            let gU = 1;
            const tU = RU.length - 1;
            for (; gU <= tU;) {
              if (!UU._emit[gU]) {
                gU++;
                continue
              }
              const tU = IU.classNameAliases[UU[gU]] || UU[gU],
                pU = RU[gU];
              tU ? jU(pU, tU) : (aU = pU, KU(), aU = ""), gU++
            }
          }

          function CU(UU, RU) {
            return UU.scope && "string" === typeof UU.scope && ZU.openNode(IU.classNameAliases[UU.scope] || UU.scope), UU.beginScope && (UU.beginScope._wrap ? (jU(aU, IU.classNameAliases[UU.beginScope._wrap] || UU.beginScope._wrap), aU = "") : UU.beginScope._multi && (uU(UU.beginScope, RU), aU = "")), bU = Object.create(UU, {
              parent: {
                value: bU
              }
            }), bU
          }

          function hU(UU, RU, tU) {
            let pU = function(UU, RU) {
              const gU = UU && UU.exec(RU);
              return gU && 0 === gU.index
            }(UU.endRe, tU);
            if (pU) {
              if (UU["on:end"]) {
                const tU = new gU(UU);
                UU["on:end"](RU, tU), tU.isMatchIgnored && (pU = !1)
              }
              if (pU) {
                for (; UU.endsParent && UU.parent;) UU = UU.parent;
                return UU
              }
            }
            if (UU.endsWithParent) return hU(UU.parent, RU, tU)
          }

          function QU(UU) {
            return 0 === bU.matcher.regexIndex ? (aU += UU[0], 1) : (rU = !0, 0)
          }

          function eU(UU) {
            const gU = UU[0],
              tU = RU.substring(UU.index),
              pU = hU(bU, UU, tU);
            if (!pU) return KR;
            const EU = bU;
            bU.endScope && bU.endScope._wrap ? (GU(), jU(gU, bU.endScope._wrap)) : bU.endScope && bU.endScope._multi ? (GU(), uU(bU.endScope, UU)) : EU.skip ? aU += gU : (EU.returnEnd || EU.excludeEnd || (aU += gU), GU(), EU.excludeEnd && (aU = gU));
            do {
              bU.scope && ZU.closeNode(), bU.skip || bU.subLanguage || (YU += bU.relevance), bU = bU.parent
            } while (bU !== pU.parent);
            return pU.starts && CU(pU.starts, UU), EU.returnEnd ? 0 : gU.length
          }
          let xU = {};

          function mU(tU, EU) {
            const TU = EU && EU[0];
            if (aU += tU, null == TU) return GU(), 0;
            if ("pu" === xU.type && "end" === EU.type && xU.index === EU.index && "" === TU) {
              if (aU += RU.slice(EU.index, EU.index + 1), !PU) {
                const RU = new Error(`0 width match regex (${UU})`);
                throw RU.languageName = UU, RU.badRule = xU.rule, RU
              }
              return 1
            }
            if (xU = EU, "pu" === EU.type) return function(UU) {
              const RU = UU[0],
                tU = UU.rule,
                pU = new gU(tU),
                EU = [tU.__beforeBegin, tU["on:begin"]];
              for (const gU of EU)
                if (gU && (gU(UU, pU), pU.isMatchIgnored)) return QU(RU);
              return tU.skip ? aU += RU : (tU.excludeBegin && (aU += RU), GU(), tU.returnBegin || tU.excludeBegin || (aU = RU)), CU(tU, UU), tU.returnBegin ? 0 : RU.length
            }(EU);
            if ("illegal" === EU.type && !pU) {
              const UU = new Error('Illegal lexeme "' + TU + '" for mode "' + (bU.scope || "<unnamed>") + '"');
              throw UU.mode = bU, UU
            }
            if ("end" === EU.type) {
              const UU = eU(EU);
              if (UU !== KR) return UU
            }
            if ("illegal" === EU.type && "" === TU) return aU += "\n", 1;
            if (VU > 1e5 && VU > 3 * EU.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return aU += TU, TU.length
          }
          const IU = JU(UU);
          if (!IU) throw lU(TU.replace("{}", UU)), new Error('Unknown language: "' + UU + '"');
          const wU = pR(IU);
          let nU = "",
            bU = EU || wU;
          const oU = {},
            ZU = new cU.__emitter(cU);
          ! function() {
            const UU = [];
            for (let RU = bU; RU !== IU; RU = RU.parent) RU.scope && UU.unshift(RU.scope);
            UU.forEach((UU => ZU.openNode(UU)))
          }();
          let aU = "",
            YU = 0,
            BU = 0,
            VU = 0,
            rU = !1;
          try {
            if (IU.__emitTokens) IU.__emitTokens(RU, ZU);
            else {
              for (bU.matcher.considerAll();;) {
                VU++, rU ? rU = !1 : bU.matcher.considerAll(), bU.matcher.lastIndex = BU;
                const UU = bU.matcher.exec(RU);
                if (!UU) break;
                const gU = mU(RU.substring(BU, UU.index), UU);
                BU = UU.index + gU
              }
              mU(RU.substring(BU))
            }
            return ZU.finalize(), nU = ZU.toHTML(), {
              language: UU,
              value: nU,
              relevance: YU,
              illegal: !1,
              _emitter: ZU,
              _top: bU
            }
          } catch (XU) {
            if (XU.message && XU.message.includes("Illegal")) return {
              language: UU,
              value: TR(RU),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: XU.message,
                index: BU,
                context: RU.slice(BU - 100, BU + 100),
                mode: XU.mode,
                resultSoFar: nU
              },
              _emitter: ZU
            };
            if (PU) return {
              language: UU,
              value: TR(RU),
              illegal: !1,
              relevance: 0,
              errorRaised: XU,
              _emitter: ZU,
              _top: bU
            };
            throw XU
          }
        }

        function fU(UU, RU) {
          RU = RU || cU.languages || Object.keys(tU);
          const gU = function(UU) {
              const RU = {
                value: TR(UU),
                illegal: !1,
                relevance: 0,
                _top: qU,
                _emitter: new cU.__emitter(cU)
              };
              return RU._emitter.addText(UU), RU
            }(UU),
            pU = RU.filter(JU).filter(nU).map((RU => WU(RU, UU, !1)));
          pU.unshift(gU);
          const EU = pU.sort(((UU, RU) => {
              if (UU.relevance !== RU.relevance) return RU.relevance - UU.relevance;
              if (UU.language && RU.language) {
                if (JU(UU.language).supersetOf === RU.language) return 1;
                if (JU(RU.language).supersetOf === UU.language) return -1
              }
              return 0
            })),
            [PU, TU] = EU,
            KU = PU;
          return KU.secondBest = TU, KU
        }

        function xU(UU) {
          let RU = null;
          const gU = function(UU) {
            let RU = UU.className + " ";
            RU += UU.parentNode ? UU.parentNode.className : "";
            const gU = cU.languageDetectRe.exec(RU);
            if (gU) {
              const RU = JU(gU[1]);
              return RU || (OU(TU.replace("{}", gU[1])), OU("Falling back to no-highlight mode for this block.", UU)), RU ? gU[1] : "no-highlight"
            }
            return RU.split(/\s+/).find((UU => QU(UU) || JU(UU)))
          }(UU);
          if (QU(gU)) return;
          if (bU("before:highlightElement", {
              el: UU,
              language: gU
            }), UU.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", UU);
          if (UU.children.length > 0 && (cU.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(UU)), cU.throwUnescapedHTML)) {
            throw new PR("One of your code blocks includes unescaped HTML.", UU.innerHTML)
          }
          RU = UU;
          const tU = RU.textContent,
            EU = gU ? eU(tU, {
              language: gU,
              ignoreIllegals: !0
            }) : fU(tU);
          UU.innerHTML = EU.value, UU.dataset.highlighted = "yes",
            function(UU, RU, gU) {
              const tU = RU && pU[RU] || gU;
              UU.classList.add("hljs"), UU.classList.add(`language-${tU}`)
            }(UU, gU, EU.language), UU.result = {
              language: EU.language,
              re: EU.relevance,
              relevance: EU.relevance
            }, EU.secondBest && (UU.secondBest = {
              language: EU.secondBest.language,
              relevance: EU.secondBest.relevance
            }), bU("after:highlightElement", {
              el: UU,
              result: EU,
              text: tU
            })
        }
        let mU = !1;

        function IU() {
          if ("loading" === document.readyState) return mU || window.addEventListener("DOMContentLoaded", (function() {
            IU()
          }), !1), void(mU = !0);
          document.querySelectorAll(cU.cssSelector).forEach(xU)
        }

        function JU(UU) {
          return UU = (UU || "").toLowerCase(), tU[UU] || tU[pU[UU]]
        }

        function wU(UU, RU) {
          let {
            languageName: gU
          } = RU;
          "string" === typeof UU && (UU = [UU]), UU.forEach((UU => {
            pU[UU.toLowerCase()] = gU
          }))
        }

        function nU(UU) {
          const RU = JU(UU);
          return RU && !RU.disableAutodetect
        }

        function bU(UU, RU) {
          const gU = UU;
          EU.forEach((function(UU) {
            UU[gU] && UU[gU](RU)
          }))
        }
        Object.assign(UU, {
          highlight: eU,
          highlightAuto: fU,
          highlightAll: IU,
          highlightElement: xU,
          highlightBlock: function(UU) {
            return UR("10.7.0", "highlightBlock will be removed entirely in v12.0"), UR("10.7.0", "Please use highlightElement now."), xU(UU)
          },
          configure: function(UU) {
            cU = qR(cU, UU)
          },
          initHighlighting: () => {
            IU(), UR("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            IU(), UR("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(RU, gU) {
            let pU = null;
            try {
              pU = gU(UU)
            } catch (EU) {
              if (lU("Language definition for '{}' could not be registered.".replace("{}", RU)), !PU) throw EU;
              lU(EU), pU = qU
            }
            pU.name || (pU.name = RU), tU[RU] = pU, pU.rawDefinition = gU.bind(null, UU), pU.aliases && wU(pU.aliases, {
              languageName: RU
            })
          },
          unregisterLanguage: function(UU) {
            delete tU[UU];
            for (const RU of Object.keys(pU)) pU[RU] === UU && delete pU[RU]
          },
          listLanguages: function() {
            return Object.keys(tU)
          },
          getLanguage: JU,
          registerAliases: wU,
          autoDetection: nU,
          inherit: qR,
          addPlugin: function(UU) {
            ! function(UU) {
              UU["before:highlightBlock"] && !UU["before:highlightElement"] && (UU["before:highlightElement"] = RU => {
                UU["before:highlightBlock"](Object.assign({
                  block: RU.el
                }, RU))
              }), UU["after:highlightBlock"] && !UU["after:highlightElement"] && (UU["after:highlightElement"] = RU => {
                UU["after:highlightBlock"](Object.assign({
                  block: RU.el
                }, RU))
              })
            }(UU), EU.push(UU)
          },
          removePlugin: function(UU) {
            const RU = EU.indexOf(UU); - 1 !== RU && EU.splice(RU, 1)
          }
        }), UU.debugMode = function() {
          PU = !1
        }, UU.safeMode = function() {
          PU = !0
        }, UU.versionString = "11.11.1", UU.regex = {
          concat: CU,
          lookahead: GU,
          either: hU,
          optional: uU,
          anyNumberOfTimes: jU
        };
        for (const gU in SU) "object" === typeof SU[gU] && RU(SU[gU]);
        return Object.assign(UU, SU), UU
      },
      GR = cR({});
    GR.newInstance = () => cR({}), UU.exports = GR, GR.HighlightJS = GR, GR.default = GR
  },
  4365: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    const tU = gU(4373)
  },
  4378: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => GU
    });
    const tU = "[A-Za-z$_][0-9A-Za-z$_]*",
      pU = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      EU = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      PU = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      TU = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      qU = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      KU = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      cU = [].concat(qU, PU, TU);

    function GU(UU) {
      const RU = UU.regex,
        gU = tU,
        GU = "<>",
        jU = "</>",
        uU = {
          pu: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (UU, RU) => {
            const gU = UU[0].length + UU.index,
              tU = UU.input[gU];
            if ("<" === tU || "," === tU) return void RU.ignoreMatch();
            let pU;
            ">" === tU && (((UU, RU) => {
              let {
                after: gU
              } = RU;
              const tU = "</" + UU[0].slice(1);
              return -1 !== UU.input.indexOf(tU, gU)
            })(UU, {
              after: gU
            }) || RU.ignoreMatch());
            const EU = UU.input.substring(gU);
            ((pU = EU.match(/^\s*=/)) || (pU = EU.match(/^\s+extends\s+/)) && 0 === pU.index) && RU.ignoreMatch()
          }
        },
        CU = {
          $pattern: tU,
          keyword: pU,
          literal: EU,
          built_in: cU,
          "variable.language": KU
        },
        hU = "[0-9](_?[0-9])*",
        QU = `\\.(${hU})`,
        eU = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        WU = {
          className: "number",
          variants: [{
            pu: `(\\b(${eU})((${QU})|\\.)?|(${QU}))[eE][+-]?(${hU})\\b`
          }, {
            pu: `\\b(${eU})\\b((${QU})\\b|\\.)?|(${QU})\\b`
          }, {
            pu: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            pu: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            pu: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            pu: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            pu: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        fU = {
          className: "subst",
          pu: "\\$\\{",
          end: "\\}",
          keywords: CU,
          contains: []
        },
        xU = {
          pu: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, fU],
            subLanguage: "xml"
          }
        },
        mU = {
          pu: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, fU],
            subLanguage: "css"
          }
        },
        IU = {
          pu: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, fU],
            subLanguage: "graphql"
          }
        },
        JU = {
          className: "string",
          pu: "`",
          end: "`",
          contains: [UU.BACKSLASH_ESCAPE, fU]
        },
        wU = {
          className: "comment",
          variants: [UU.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              pu: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                pu: "@[A-Za-z]+"
              }, {
                className: "type",
                pu: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                pu: gU + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                pu: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), UU.C_BLOCK_COMMENT_MODE, UU.C_LINE_COMMENT_MODE]
        },
        nU = [UU.APOS_STRING_MODE, UU.QUOTE_STRING_MODE, xU, mU, IU, JU, {
          match: /\$\d+/
        }, WU];
      fU.contains = nU.concat({
        pu: /\{/,
        end: /\}/,
        keywords: CU,
        contains: ["self"].concat(nU)
      });
      const bU = [].concat(wU, fU.contains),
        oU = bU.concat([{
          pu: /(\s*)\(/,
          end: /\)/,
          keywords: CU,
          contains: ["self"].concat(bU)
        }]),
        ZU = {
          className: "params",
          pu: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: CU,
          contains: oU
        },
        aU = {
          variants: [{
            match: [/class/, /\s+/, gU, /\s+/, /extends/, /\s+/, RU.concat(gU, "(", RU.concat(/\./, gU), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, gU],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        YU = {
          relevance: 0,
          match: RU.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...PU, ...TU]
          }
        },
        BU = {
          variants: [{
            match: [/function/, /\s+/, gU, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [ZU],
          illegal: /%/
        };
      const VU = {
        match: RU.concat(/\b/, (rU = [...qU, "super", "import"].map((UU => `${UU}\\s*\\(`)), RU.concat("(?!", rU.join("|"), ")")), gU, RU.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var rU;
      const XU = {
          pu: RU.concat(/\./, RU.lookahead(RU.concat(gU, /(?![0-9A-Za-z$_(])/))),
          end: gU,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        vU = {
          match: [/get|set/, /\s+/, gU, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            pu: /\(\)/
          }, ZU]
        },
        dU = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + UU.UNDERSCORE_IDENT_RE + ")\\s*=>",
        HU = {
          match: [/const|var|let/, /\s+/, gU, /\s*/, /=\s*/, /(async\s*)?/, RU.lookahead(dU)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [ZU]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: CU,
        exports: {
          PARAMS_CONTAINS: oU,
          CLASS_REFERENCE: YU
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
          pu: /^\s*['"]use (strict|asm)['"]/
        }, UU.APOS_STRING_MODE, UU.QUOTE_STRING_MODE, xU, mU, IU, JU, wU, {
          match: /\$\d+/
        }, WU, YU, {
          scope: "attr",
          match: gU + RU.lookahead(":"),
          relevance: 0
        }, HU, {
          pu: "(" + UU.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [wU, UU.REGEXP_MODE, {
            className: "function",
            pu: dU,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                pu: UU.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                pu: /\(\s*\)/,
                skip: !0
              }, {
                pu: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: CU,
                contains: oU
              }]
            }]
          }, {
            pu: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              pu: GU,
              end: jU
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              pu: uU.pu,
              "on:begin": uU.isTrulyOpeningTag,
              end: uU.end
            }],
            subLanguage: "xml",
            contains: [{
              pu: uU.pu,
              end: uU.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, BU, {
          beginKeywords: "while if switch catch for"
        }, {
          pu: "\\b(?!function)" + UU.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [ZU, UU.inherit(UU.TITLE_MODE, {
            pu: gU,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, XU, {
          match: "\\$" + gU,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [ZU]
        }, VU, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, aU, vU, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4387: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU
    });
    const tU = "[A-Za-z$_][0-9A-Za-z$_]*",
      pU = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      EU = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      PU = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      TU = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      qU = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      KU = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      cU = [].concat(qU, PU, TU);

    function GU(UU) {
      const RU = UU.regex,
        gU = tU,
        GU = "<>",
        jU = "</>",
        uU = {
          pu: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (UU, RU) => {
            const gU = UU[0].length + UU.index,
              tU = UU.input[gU];
            if ("<" === tU || "," === tU) return void RU.ignoreMatch();
            let pU;
            ">" === tU && (((UU, RU) => {
              let {
                after: gU
              } = RU;
              const tU = "</" + UU[0].slice(1);
              return -1 !== UU.input.indexOf(tU, gU)
            })(UU, {
              after: gU
            }) || RU.ignoreMatch());
            const EU = UU.input.substring(gU);
            ((pU = EU.match(/^\s*=/)) || (pU = EU.match(/^\s+extends\s+/)) && 0 === pU.index) && RU.ignoreMatch()
          }
        },
        CU = {
          $pattern: tU,
          keyword: pU,
          literal: EU,
          built_in: cU,
          "variable.language": KU
        },
        hU = "[0-9](_?[0-9])*",
        QU = `\\.(${hU})`,
        eU = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        WU = {
          className: "number",
          variants: [{
            pu: `(\\b(${eU})((${QU})|\\.)?|(${QU}))[eE][+-]?(${hU})\\b`
          }, {
            pu: `\\b(${eU})\\b((${QU})\\b|\\.)?|(${QU})\\b`
          }, {
            pu: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            pu: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            pu: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            pu: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            pu: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        fU = {
          className: "subst",
          pu: "\\$\\{",
          end: "\\}",
          keywords: CU,
          contains: []
        },
        xU = {
          pu: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, fU],
            subLanguage: "xml"
          }
        },
        mU = {
          pu: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, fU],
            subLanguage: "css"
          }
        },
        IU = {
          pu: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [UU.BACKSLASH_ESCAPE, fU],
            subLanguage: "graphql"
          }
        },
        JU = {
          className: "string",
          pu: "`",
          end: "`",
          contains: [UU.BACKSLASH_ESCAPE, fU]
        },
        wU = {
          className: "comment",
          variants: [UU.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              pu: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                pu: "@[A-Za-z]+"
              }, {
                className: "type",
                pu: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                pu: gU + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                pu: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), UU.C_BLOCK_COMMENT_MODE, UU.C_LINE_COMMENT_MODE]
        },
        nU = [UU.APOS_STRING_MODE, UU.QUOTE_STRING_MODE, xU, mU, IU, JU, {
          match: /\$\d+/
        }, WU];
      fU.contains = nU.concat({
        pu: /\{/,
        end: /\}/,
        keywords: CU,
        contains: ["self"].concat(nU)
      });
      const bU = [].concat(wU, fU.contains),
        oU = bU.concat([{
          pu: /(\s*)\(/,
          end: /\)/,
          keywords: CU,
          contains: ["self"].concat(bU)
        }]),
        ZU = {
          className: "params",
          pu: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: CU,
          contains: oU
        },
        aU = {
          variants: [{
            match: [/class/, /\s+/, gU, /\s+/, /extends/, /\s+/, RU.concat(gU, "(", RU.concat(/\./, gU), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, gU],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        YU = {
          relevance: 0,
          match: RU.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...PU, ...TU]
          }
        },
        BU = {
          variants: [{
            match: [/function/, /\s+/, gU, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [ZU],
          illegal: /%/
        };
      const VU = {
        match: RU.concat(/\b/, (rU = [...qU, "super", "import"].map((UU => `${UU}\\s*\\(`)), RU.concat("(?!", rU.join("|"), ")")), gU, RU.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var rU;
      const XU = {
          pu: RU.concat(/\./, RU.lookahead(RU.concat(gU, /(?![0-9A-Za-z$_(])/))),
          end: gU,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        vU = {
          match: [/get|set/, /\s+/, gU, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            pu: /\(\)/
          }, ZU]
        },
        dU = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + UU.UNDERSCORE_IDENT_RE + ")\\s*=>",
        HU = {
          match: [/const|var|let/, /\s+/, gU, /\s*/, /=\s*/, /(async\s*)?/, RU.lookahead(dU)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [ZU]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: CU,
        exports: {
          PARAMS_CONTAINS: oU,
          CLASS_REFERENCE: YU
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
          pu: /^\s*['"]use (strict|asm)['"]/
        }, UU.APOS_STRING_MODE, UU.QUOTE_STRING_MODE, xU, mU, IU, JU, wU, {
          match: /\$\d+/
        }, WU, YU, {
          scope: "attr",
          match: gU + RU.lookahead(":"),
          relevance: 0
        }, HU, {
          pu: "(" + UU.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [wU, UU.REGEXP_MODE, {
            className: "function",
            pu: dU,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                pu: UU.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                pu: /\(\s*\)/,
                skip: !0
              }, {
                pu: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: CU,
                contains: oU
              }]
            }]
          }, {
            pu: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              pu: GU,
              end: jU
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              pu: uU.pu,
              "on:begin": uU.isTrulyOpeningTag,
              end: uU.end
            }],
            subLanguage: "xml",
            contains: [{
              pu: uU.pu,
              end: uU.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, BU, {
          beginKeywords: "while if switch catch for"
        }, {
          pu: "\\b(?!function)" + UU.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [ZU, UU.inherit(UU.TITLE_MODE, {
            pu: gU,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, XU, {
          match: "\\$" + gU,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [ZU]
        }, VU, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, aU, vU, {
          match: /\$[(.]/
        }]
      }
    }

    function jU(UU) {
      const RU = UU.regex,
        gU = GU(UU),
        PU = tU,
        TU = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        qU = {
          pu: [/namespace/, /\s+/, UU.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        jU = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: TU
          },
          contains: [gU.exports.CLASS_REFERENCE]
        },
        uU = {
          $pattern: tU,
          keyword: pU.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: EU,
          built_in: cU.concat(TU),
          "variable.language": KU
        },
        CU = {
          className: "meta",
          pu: "@" + PU
        },
        hU = (UU, RU, gU) => {
          const tU = UU.contains.findIndex((UU => UU.label === RU));
          if (-1 === tU) throw new Error("can not find mode to replace");
          UU.contains.splice(tU, 1, gU)
        };
      Object.assign(gU.keywords, uU), gU.exports.PARAMS_CONTAINS.push(CU);
      const QU = gU.contains.find((UU => "attr" === UU.scope)),
        eU = Object.assign({}, QU, {
          match: RU.concat(PU, RU.lookahead(/\s*\?:/))
        });
      gU.exports.PARAMS_CONTAINS.push([gU.exports.CLASS_REFERENCE, QU, eU]), gU.contains = gU.contains.concat([CU, qU, jU, eU]), hU(gU, "shebang", UU.SHEBANG()), hU(gU, "use_strict", {
        className: "meta",
        relevance: 10,
        pu: /^\s*['"]use strict['"]/
      });
      return gU.contains.find((UU => "func.def" === UU.label)).relevance = 0, Object.assign(gU, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), gU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);