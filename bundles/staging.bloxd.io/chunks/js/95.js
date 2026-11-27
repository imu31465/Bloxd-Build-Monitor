export const id = 95;
export const ids = [95];
export const modules = {
  5618: RR => {
    function JR(RR) {
      return RR instanceof Map ? RR.clear = RR.delete = RR.set = function() {
        throw new Error("map is read-only")
      } : RR instanceof Set && (RR.add = RR.clear = RR.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(RR), Object.getOwnPropertyNames(RR).forEach((GR => {
        const yR = RR[GR],
          tR = typeof yR;
        "object" !== tR && "function" !== tR || Object.isFrozen(yR) || JR(yR)
      })), RR
    }
    class GR {
      constructor(RR) {
        void 0 === RR.data && (RR.data = {}), this.data = RR.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function yR(RR) {
      return RR.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function tR(RR) {
      const JR = Object.create(null);
      for (const uR in RR) JR[uR] = RR[uR];
      for (var GR = arguments.length, yR = new Array(GR > 1 ? GR - 1 : 0), tR = 1; tR < GR; tR++) yR[tR - 1] = arguments[tR];
      return yR.forEach((function(RR) {
        for (const GR in RR) JR[GR] = RR[GR]
      })), JR
    }
    const uR = RR => !!RR.scope;
    class ZR {
      constructor(RR, JR) {
        this.buffer = "", this.classPrefix = JR.classPrefix, RR.walk(this)
      }
      addText(RR) {
        this.buffer += yR(RR)
      }
      openNode(RR) {
        if (!uR(RR)) return;
        const JR = ((RR, JR) => {
          let {
            prefix: GR
          } = JR;
          if (RR.startsWith("language:")) return RR.replace("language:", "language-");
          if (RR.includes(".")) {
            const JR = RR.split(".");
            return [`${GR}${JR.shift()}`, ...JR.map(((RR, JR) => `${RR}${"_".repeat(JR+1)}`))].join(" ")
          }
          return `${GR}${RR}`
        })(RR.scope, {
          prefix: this.classPrefix
        });
        this.span(JR)
      }
      closeNode(RR) {
        uR(RR) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(RR) {
        this.buffer += `<span class="${RR}">`
      }
    }
    const qR = function() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const JR = {
        children: []
      };
      return Object.assign(JR, RR), JR
    };
    class iR {
      constructor() {
        this.pW = qR(), this.stack = [this.pW]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.pW
      }
      add(RR) {
        this.top.children.push(RR)
      }
      openNode(RR) {
        const JR = qR({
          scope: RR
        });
        this.add(JR), this.stack.push(JR)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.pW, null, 4)
      }
      walk(RR) {
        return this.constructor._walk(RR, this.pW)
      }
      static _walk(RR, JR) {
        return "string" === typeof JR ? RR.addText(JR) : JR.children && (RR.openNode(JR), JR.children.forEach((JR => this._walk(RR, JR))), RR.closeNode(JR)), RR
      }
      static _collapse(RR) {
        "string" !== typeof RR && RR.children && (RR.children.every((RR => "string" === typeof RR)) ? RR.children = [RR.children.join("")] : RR.children.forEach((RR => {
          iR._collapse(RR)
        })))
      }
    }
    class fR extends iR {
      constructor(RR) {
        super(), this.options = RR
      }
      addText(RR) {
        "" !== RR && this.add(RR)
      }
      startScope(RR) {
        this.openNode(RR)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(RR, JR) {
        const GR = RR.root;
        JR && (GR.scope = `language:${JR}`), this.add(GR)
      }
      toHTML() {
        return new ZR(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function VR(RR) {
      return RR ? "string" === typeof RR ? RR : RR.source : null
    }

    function KR(RR) {
      return eR("(?=", RR, ")")
    }

    function wR(RR) {
      return eR("(?:", RR, ")*")
    }

    function rR(RR) {
      return eR("(?:", RR, ")?")
    }

    function eR() {
      for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
      return JR.map((RR => VR(RR))).join("")
    }

    function aR() {
      for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
      const yR = function(RR) {
        const JR = RR[RR.length - 1];
        return "object" === typeof JR && JR.constructor === Object ? (RR.splice(RR.length - 1, 1), JR) : {}
      }(JR);
      return "(" + (yR.capture ? "" : "?:") + JR.map((RR => VR(RR))).join("|") + ")"
    }

    function LR(RR) {
      return new RegExp(RR.toString() + "|").exec("").length - 1
    }
    const nR = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function UR(RR, JR) {
      let {
        joinWith: GR
      } = JR, yR = 0;
      return RR.map((RR => {
        yR += 1;
        const JR = yR;
        let GR = VR(RR),
          tR = "";
        for (; GR.length > 0;) {
          const RR = nR.exec(GR);
          if (!RR) {
            tR += GR;
            break
          }
          tR += GR.substring(0, RR.index), GR = GR.substring(RR.index + RR[0].length), "\\" === RR[0][0] && RR[1] ? tR += "\\" + String(Number(RR[1]) + JR) : (tR += RR[0], "(" === RR[0] && yR++)
        }
        return tR
      })).map((RR => `(${RR})`)).join(GR)
    }
    const WR = "[a-zA-Z]\\w*",
      AR = "[a-zA-Z_]\\w*",
      CR = "\\b\\d+(\\.\\d+)?",
      XR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      MR = "\\b(0b[01]+)",
      BR = {
        UK: "\\\\[\\s\\S]",
        relevance: 0
      },
      lR = {
        scope: "string",
        UK: "'",
        end: "'",
        illegal: "\\n",
        contains: [BR]
      },
      pR = {
        scope: "string",
        UK: '"',
        end: '"',
        illegal: "\\n",
        contains: [BR]
      },
      gR = function(RR, JR) {
        const GR = tR({
          scope: "comment",
          UK: RR,
          end: JR,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        GR.contains.push({
          scope: "doctag",
          UK: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const yR = aR("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return GR.contains.push({
          UK: eR(/[ ]+/, "(", yR, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), GR
      },
      bR = gR("//", "$"),
      vR = gR("/\\*", "\\*/"),
      OR = gR("#", "$"),
      xR = {
        scope: "number",
        UK: CR,
        relevance: 0
      },
      NR = {
        scope: "number",
        UK: XR,
        relevance: 0
      },
      DR = {
        scope: "number",
        UK: MR,
        relevance: 0
      },
      HR = {
        scope: "regexp",
        UK: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [BR, {
          UK: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [BR]
        }]
      },
      oR = {
        scope: "title",
        UK: WR,
        relevance: 0
      },
      cR = {
        scope: "title",
        UK: AR,
        relevance: 0
      },
      PR = {
        UK: "\\.\\s*" + AR,
        relevance: 0
      };
    var IR = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: lR,
      BACKSLASH_ESCAPE: BR,
      BINARY_NUMBER_MODE: DR,
      BINARY_NUMBER_RE: MR,
      COMMENT: gR,
      C_BLOCK_COMMENT_MODE: vR,
      C_LINE_COMMENT_MODE: bR,
      C_NUMBER_MODE: NR,
      C_NUMBER_RE: XR,
      END_SAME_AS_BEGIN: function(RR) {
        return Object.assign(RR, {
          "on:begin": (RR, JR) => {
            JR.data._beginMatch = RR[1]
          },
          "on:end": (RR, JR) => {
            JR.data._beginMatch !== RR[1] && JR.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: OR,
      IDENT_RE: WR,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: PR,
      NUMBER_MODE: xR,
      NUMBER_RE: CR,
      PHRASAL_WORDS_MODE: {
        UK: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: pR,
      REGEXP_MODE: HR,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const JR = /^#![ ]*\//;
        return RR.binary && (RR.UK = eR(JR, /.*\b/, RR.binary, /\b.*/)), tR({
          scope: "meta",
          UK: JR,
          end: /$/,
          relevance: 0,
          "on:begin": (RR, JR) => {
            0 !== RR.index && JR.ignoreMatch()
          }
        }, RR)
      },
      TITLE_MODE: oR,
      UNDERSCORE_IDENT_RE: AR,
      UNDERSCORE_TITLE_MODE: cR
    });

    function mR(RR, JR) {
      "." === RR.input[RR.index - 1] && JR.ignoreMatch()
    }

    function zR(RR, JR) {
      void 0 !== RR.className && (RR.scope = RR.className, delete RR.className)
    }

    function SR(RR, JR) {
      JR && RR.beginKeywords && (RR.UK = "\\b(" + RR.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", RR.__beforeBegin = mR, RR.keywords = RR.keywords || RR.beginKeywords, delete RR.beginKeywords, void 0 === RR.relevance && (RR.relevance = 0))
    }

    function jR(RR, JR) {
      Array.isArray(RR.illegal) && (RR.illegal = aR(...RR.illegal))
    }

    function dR(RR, JR) {
      if (RR.match) {
        if (RR.UK || RR.end) throw new Error("begin & end are not supported with match");
        RR.UK = RR.match, delete RR.match
      }
    }

    function ER(RR, JR) {
      void 0 === RR.relevance && (RR.relevance = 1)
    }
    const YR = (RR, JR) => {
        if (!RR.beforeMatch) return;
        if (RR.starts) throw new Error("beforeMatch cannot be used with starts");
        const GR = Object.assign({}, RR);
        Object.keys(RR).forEach((JR => {
          delete RR[JR]
        })), RR.keywords = GR.keywords, RR.UK = eR(GR.beforeMatch, KR(GR.UK)), RR.starts = {
          relevance: 0,
          contains: [Object.assign(GR, {
            endsParent: !0
          })]
        }, RR.relevance = 0, delete GR.beforeMatch
      },
      kR = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function QR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const yR = Object.create(null);
      return "string" === typeof RR ? tR(GR, RR.split(" ")) : Array.isArray(RR) ? tR(GR, RR) : Object.keys(RR).forEach((function(GR) {
        Object.assign(yR, QR(RR[GR], JR, GR))
      })), yR;

      function tR(RR, GR) {
        JR && (GR = GR.map((RR => RR.toLowerCase()))), GR.forEach((function(JR) {
          const GR = JR.split("|");
          yR[GR[0]] = [RR, FR(GR[0], GR[1])]
        }))
      }
    }

    function FR(RR, JR) {
      return JR ? Number(JR) : function(RR) {
        return kR.includes(RR.toLowerCase())
      }(RR) ? 0 : 1
    }
    const TR = {},
      sR = RR => {
        console.error(RR)
      },
      hR = function(RR) {
        for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
        console.log(`WARN: ${RR}`, ...GR)
      },
      RJ = (RR, JR) => {
        TR[`${RR}/${JR}`] || (console.log(`Deprecated as of ${RR}. ${JR}`), TR[`${RR}/${JR}`] = !0)
      },
      JJ = new Error;

    function GJ(RR, JR, GR) {
      let {
        key: yR
      } = GR, tR = 0;
      const uR = RR[yR],
        ZR = {},
        qR = {};
      for (let iR = 1; iR <= JR.length; iR++) qR[iR + tR] = uR[iR], ZR[iR + tR] = !0, tR += LR(JR[iR - 1]);
      RR[yR] = qR, RR[yR]._emit = ZR, RR[yR]._multi = !0
    }

    function yJ(RR) {
      ! function(RR) {
        RR.scope && "object" === typeof RR.scope && null !== RR.scope && (RR.beginScope = RR.scope, delete RR.scope)
      }(RR), "string" === typeof RR.beginScope && (RR.beginScope = {
          _wrap: RR.beginScope
        }), "string" === typeof RR.endScope && (RR.endScope = {
          _wrap: RR.endScope
        }),
        function(RR) {
          if (Array.isArray(RR.UK)) {
            if (RR.skip || RR.excludeBegin || RR.returnBegin) throw sR("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), JJ;
            if ("object" !== typeof RR.beginScope || null === RR.beginScope) throw sR("beginScope must be object"), JJ;
            GJ(RR, RR.UK, {
              key: "beginScope"
            }), RR.UK = UR(RR.UK, {
              joinWith: ""
            })
          }
        }(RR),
        function(RR) {
          if (Array.isArray(RR.end)) {
            if (RR.skip || RR.excludeEnd || RR.returnEnd) throw sR("skip, excludeEnd, returnEnd not compatible with endScope: {}"), JJ;
            if ("object" !== typeof RR.endScope || null === RR.endScope) throw sR("endScope must be object"), JJ;
            GJ(RR, RR.end, {
              key: "endScope"
            }), RR.end = UR(RR.end, {
              joinWith: ""
            })
          }
        }(RR)
    }

    function tJ(RR) {
      function JR(JR, GR) {
        return new RegExp(VR(JR), "m" + (RR.case_insensitive ? "i" : "") + (RR.unicodeRegex ? "u" : "") + (GR ? "g" : ""))
      }
      class GR {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(RR, JR) {
          JR.position = this.position++, this.matchIndexes[this.matchAt] = JR, this.regexes.push([JR, RR]), this.matchAt += LR(RR) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const RR = this.regexes.map((RR => RR[1]));
          this.matcherRe = JR(UR(RR, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(RR) {
          this.matcherRe.lastIndex = this.lastIndex;
          const JR = this.matcherRe.exec(RR);
          if (!JR) return null;
          const GR = JR.findIndex(((RR, JR) => JR > 0 && void 0 !== RR)),
            yR = this.matchIndexes[GR];
          return JR.splice(0, GR), Object.assign(JR, yR)
        }
      }
      class yR {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(RR) {
          if (this.multiRegexes[RR]) return this.multiRegexes[RR];
          const JR = new GR;
          return this.rules.slice(RR).forEach((RR => {
            let [GR, yR] = RR;
            return JR.addRule(GR, yR)
          })), JR.compile(), this.multiRegexes[RR] = JR, JR
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(RR, JR) {
          this.rules.push([RR, JR]), "UK" === JR.type && this.count++
        }
        exec(RR) {
          const JR = this.getMatcher(this.regexIndex);
          JR.lastIndex = this.lastIndex;
          let GR = JR.exec(RR);
          if (this.resumingScanAtSamePosition())
            if (GR && GR.index === this.lastIndex);
            else {
              const JR = this.getMatcher(0);
              JR.lastIndex = this.lastIndex + 1, GR = JR.exec(RR)
            } return GR && (this.regexIndex += GR.position + 1, this.regexIndex === this.count && this.considerAll()), GR
        }
      }
      if (RR.compilerExtensions || (RR.compilerExtensions = []), RR.contains && RR.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return RR.classNameAliases = tR(RR.classNameAliases || {}),
        function GR(uR, ZR) {
          const qR = uR;
          if (uR.isCompiled) return qR;
          [zR, dR, yJ, YR].forEach((RR => RR(uR, ZR))), RR.compilerExtensions.forEach((RR => RR(uR, ZR))), uR.__beforeBegin = null, [SR, jR, ER].forEach((RR => RR(uR, ZR))), uR.isCompiled = !0;
          let iR = null;
          return "object" === typeof uR.keywords && uR.keywords.$pattern && (uR.keywords = Object.assign({}, uR.keywords), iR = uR.keywords.$pattern, delete uR.keywords.$pattern), iR = iR || /\w+/, uR.keywords && (uR.keywords = QR(uR.keywords, RR.case_insensitive)), qR.keywordPatternRe = JR(iR, !0), ZR && (uR.UK || (uR.UK = /\B|\b/), qR.beginRe = JR(qR.UK), uR.end || uR.endsWithParent || (uR.end = /\B|\b/), uR.end && (qR.endRe = JR(qR.end)), qR.terminatorEnd = VR(qR.end) || "", uR.endsWithParent && ZR.terminatorEnd && (qR.terminatorEnd += (uR.end ? "|" : "") + ZR.terminatorEnd)), uR.illegal && (qR.illegalRe = JR(uR.illegal)), uR.contains || (uR.contains = []), uR.contains = [].concat(...uR.contains.map((function(RR) {
            return function(RR) {
              RR.variants && !RR.cachedVariants && (RR.cachedVariants = RR.variants.map((function(JR) {
                return tR(RR, {
                  variants: null
                }, JR)
              })));
              if (RR.cachedVariants) return RR.cachedVariants;
              if (uJ(RR)) return tR(RR, {
                starts: RR.starts ? tR(RR.starts) : null
              });
              if (Object.isFrozen(RR)) return tR(RR);
              return RR
            }("self" === RR ? uR : RR)
          }))), uR.contains.forEach((function(RR) {
            GR(RR, qR)
          })), uR.starts && GR(uR.starts, ZR), qR.matcher = function(RR) {
            const JR = new yR;
            return RR.contains.forEach((RR => JR.addRule(RR.UK, {
              rule: RR,
              type: "UK"
            }))), RR.terminatorEnd && JR.addRule(RR.terminatorEnd, {
              type: "end"
            }), RR.illegal && JR.addRule(RR.illegal, {
              type: "illegal"
            }), JR
          }(qR), qR
        }(RR)
    }

    function uJ(RR) {
      return !!RR && (RR.endsWithParent || uJ(RR.starts))
    }
    class ZJ extends Error {
      constructor(RR, JR) {
        super(RR), this.name = "HTMLInjectionError", this.html = JR
      }
    }
    const qJ = yR,
      iJ = tR,
      fJ = Symbol("nomatch"),
      VJ = function(RR) {
        const yR = Object.create(null),
          tR = Object.create(null),
          uR = [];
        let ZR = !0;
        const qR = "Could not find the language '{}', did you forget to load/include a language module?",
          iR = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let VR = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: fR
        };

        function LR(RR) {
          return VR.noHighlightRe.test(RR)
        }

        function nR(RR, JR, GR) {
          let yR = "",
            tR = "";
          "object" === typeof JR ? (yR = RR, GR = JR.ignoreIllegals, tR = JR.language) : (RJ("10.7.0", "highlight(lang, code, ...args) has been deprecated."), RJ("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), tR = RR, yR = JR), void 0 === GR && (GR = !0);
          const uR = {
            code: yR,
            language: tR
          };
          pR("before:highlight", uR);
          const ZR = uR.result ? uR.result : UR(uR.language, uR.code, GR);
          return ZR.code = uR.code, pR("after:highlight", ZR), ZR
        }

        function UR(RR, JR, tR, uR) {
          const iR = Object.create(null);

          function fR() {
            if (!pR.keywords) return void bR.addText(vR);
            let RR = 0;
            pR.keywordPatternRe.lastIndex = 0;
            let JR = pR.keywordPatternRe.exec(vR),
              GR = "";
            for (; JR;) {
              GR += vR.substring(RR, JR.index);
              const tR = XR.case_insensitive ? JR[0].toLowerCase() : JR[0],
                uR = (yR = tR, pR.keywords[yR]);
              if (uR) {
                const [RR, yR] = uR;
                if (bR.addText(GR), GR = "", iR[tR] = (iR[tR] || 0) + 1, iR[tR] <= 7 && (OR += yR), RR.startsWith("_")) GR += JR[0];
                else {
                  const GR = XR.classNameAliases[RR] || RR;
                  wR(JR[0], GR)
                }
              } else GR += JR[0];
              RR = pR.keywordPatternRe.lastIndex, JR = pR.keywordPatternRe.exec(vR)
            }
            var yR;
            GR += vR.substring(RR), bR.addText(GR)
          }

          function KR() {
            null != pR.subLanguage ? function() {
              if ("" === vR) return;
              let RR = null;
              if ("string" === typeof pR.subLanguage) {
                if (!yR[pR.subLanguage]) return void bR.addText(vR);
                RR = UR(pR.subLanguage, vR, !0, gR[pR.subLanguage]), gR[pR.subLanguage] = RR._top
              } else RR = WR(vR, pR.subLanguage.length ? pR.subLanguage : null);
              pR.relevance > 0 && (OR += RR.relevance), bR.__addSublanguage(RR._emitter, RR.language)
            }() : fR(), vR = ""
          }

          function wR(RR, JR) {
            "" !== RR && (bR.startScope(JR), bR.addText(RR), bR.endScope())
          }

          function rR(RR, JR) {
            let GR = 1;
            const yR = JR.length - 1;
            for (; GR <= yR;) {
              if (!RR._emit[GR]) {
                GR++;
                continue
              }
              const yR = XR.classNameAliases[RR[GR]] || RR[GR],
                tR = JR[GR];
              yR ? wR(tR, yR) : (vR = tR, fR(), vR = ""), GR++
            }
          }

          function eR(RR, JR) {
            return RR.scope && "string" === typeof RR.scope && bR.openNode(XR.classNameAliases[RR.scope] || RR.scope), RR.beginScope && (RR.beginScope._wrap ? (wR(vR, XR.classNameAliases[RR.beginScope._wrap] || RR.beginScope._wrap), vR = "") : RR.beginScope._multi && (rR(RR.beginScope, JR), vR = "")), pR = Object.create(RR, {
              parent: {
                value: pR
              }
            }), pR
          }

          function aR(RR, JR, yR) {
            let tR = function(RR, JR) {
              const GR = RR && RR.exec(JR);
              return GR && 0 === GR.index
            }(RR.endRe, yR);
            if (tR) {
              if (RR["on:end"]) {
                const yR = new GR(RR);
                RR["on:end"](JR, yR), yR.isMatchIgnored && (tR = !1)
              }
              if (tR) {
                for (; RR.endsParent && RR.parent;) RR = RR.parent;
                return RR
              }
            }
            if (RR.endsWithParent) return aR(RR.parent, JR, yR)
          }

          function LR(RR) {
            return 0 === pR.matcher.regexIndex ? (vR += RR[0], 1) : (DR = !0, 0)
          }

          function nR(RR) {
            const GR = RR[0],
              yR = JR.substring(RR.index),
              tR = aR(pR, RR, yR);
            if (!tR) return fJ;
            const uR = pR;
            pR.endScope && pR.endScope._wrap ? (KR(), wR(GR, pR.endScope._wrap)) : pR.endScope && pR.endScope._multi ? (KR(), rR(pR.endScope, RR)) : uR.skip ? vR += GR : (uR.returnEnd || uR.excludeEnd || (vR += GR), KR(), uR.excludeEnd && (vR = GR));
            do {
              pR.scope && bR.closeNode(), pR.skip || pR.subLanguage || (OR += pR.relevance), pR = pR.parent
            } while (pR !== tR.parent);
            return tR.starts && eR(tR.starts, RR), uR.returnEnd ? 0 : GR.length
          }
          let AR = {};

          function CR(yR, uR) {
            const qR = uR && uR[0];
            if (vR += yR, null == qR) return KR(), 0;
            if ("UK" === AR.type && "end" === uR.type && AR.index === uR.index && "" === qR) {
              if (vR += JR.slice(uR.index, uR.index + 1), !ZR) {
                const JR = new Error(`0 width match regex (${RR})`);
                throw JR.languageName = RR, JR.badRule = AR.rule, JR
              }
              return 1
            }
            if (AR = uR, "UK" === uR.type) return function(RR) {
              const JR = RR[0],
                yR = RR.rule,
                tR = new GR(yR),
                uR = [yR.__beforeBegin, yR["on:begin"]];
              for (const GR of uR)
                if (GR && (GR(RR, tR), tR.isMatchIgnored)) return LR(JR);
              return yR.skip ? vR += JR : (yR.excludeBegin && (vR += JR), KR(), yR.returnBegin || yR.excludeBegin || (vR = JR)), eR(yR, RR), yR.returnBegin ? 0 : JR.length
            }(uR);
            if ("illegal" === uR.type && !tR) {
              const RR = new Error('Illegal lexeme "' + qR + '" for mode "' + (pR.scope || "<unnamed>") + '"');
              throw RR.mode = pR, RR
            }
            if ("end" === uR.type) {
              const RR = nR(uR);
              if (RR !== fJ) return RR
            }
            if ("illegal" === uR.type && "" === qR) return vR += "\n", 1;
            if (NR > 1e5 && NR > 3 * uR.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return vR += qR, qR.length
          }
          const XR = MR(RR);
          if (!XR) throw sR(qR.replace("{}", RR)), new Error('Unknown language: "' + RR + '"');
          const BR = tJ(XR);
          let lR = "",
            pR = uR || BR;
          const gR = {},
            bR = new VR.__emitter(VR);
          ! function() {
            const RR = [];
            for (let JR = pR; JR !== XR; JR = JR.parent) JR.scope && RR.unshift(JR.scope);
            RR.forEach((RR => bR.openNode(RR)))
          }();
          let vR = "",
            OR = 0,
            xR = 0,
            NR = 0,
            DR = !1;
          try {
            if (XR.__emitTokens) XR.__emitTokens(JR, bR);
            else {
              for (pR.matcher.considerAll();;) {
                NR++, DR ? DR = !1 : pR.matcher.considerAll(), pR.matcher.lastIndex = xR;
                const RR = pR.matcher.exec(JR);
                if (!RR) break;
                const GR = CR(JR.substring(xR, RR.index), RR);
                xR = RR.index + GR
              }
              CR(JR.substring(xR))
            }
            return bR.finalize(), lR = bR.toHTML(), {
              language: RR,
              value: lR,
              relevance: OR,
              illegal: !1,
              _emitter: bR,
              _top: pR
            }
          } catch (HR) {
            if (HR.message && HR.message.includes("Illegal")) return {
              language: RR,
              value: qJ(JR),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: HR.message,
                index: xR,
                context: JR.slice(xR - 100, xR + 100),
                mode: HR.mode,
                resultSoFar: lR
              },
              _emitter: bR
            };
            if (ZR) return {
              language: RR,
              value: qJ(JR),
              illegal: !1,
              relevance: 0,
              errorRaised: HR,
              _emitter: bR,
              _top: pR
            };
            throw HR
          }
        }

        function WR(RR, JR) {
          JR = JR || VR.languages || Object.keys(yR);
          const GR = function(RR) {
              const JR = {
                value: qJ(RR),
                illegal: !1,
                relevance: 0,
                _top: iR,
                _emitter: new VR.__emitter(VR)
              };
              return JR._emitter.addText(RR), JR
            }(RR),
            tR = JR.filter(MR).filter(lR).map((JR => UR(JR, RR, !1)));
          tR.unshift(GR);
          const uR = tR.sort(((RR, JR) => {
              if (RR.relevance !== JR.relevance) return JR.relevance - RR.relevance;
              if (RR.language && JR.language) {
                if (MR(RR.language).supersetOf === JR.language) return 1;
                if (MR(JR.language).supersetOf === RR.language) return -1
              }
              return 0
            })),
            [ZR, qR] = uR,
            fR = ZR;
          return fR.secondBest = qR, fR
        }

        function AR(RR) {
          let JR = null;
          const GR = function(RR) {
            let JR = RR.className + " ";
            JR += RR.parentNode ? RR.parentNode.className : "";
            const GR = VR.languageDetectRe.exec(JR);
            if (GR) {
              const JR = MR(GR[1]);
              return JR || (hR(qR.replace("{}", GR[1])), hR("Falling back to no-highlight mode for this block.", RR)), JR ? GR[1] : "no-highlight"
            }
            return JR.split(/\s+/).find((RR => LR(RR) || MR(RR)))
          }(RR);
          if (LR(GR)) return;
          if (pR("before:highlightElement", {
              el: RR,
              language: GR
            }), RR.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", RR);
          if (RR.children.length > 0 && (VR.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(RR)), VR.throwUnescapedHTML)) {
            throw new ZJ("One of your code blocks includes unescaped HTML.", RR.innerHTML)
          }
          JR = RR;
          const yR = JR.textContent,
            uR = GR ? nR(yR, {
              language: GR,
              ignoreIllegals: !0
            }) : WR(yR);
          RR.innerHTML = uR.value, RR.dataset.highlighted = "yes",
            function(RR, JR, GR) {
              const yR = JR && tR[JR] || GR;
              RR.classList.add("hljs"), RR.classList.add(`language-${yR}`)
            }(RR, GR, uR.language), RR.result = {
              language: uR.language,
              re: uR.relevance,
              relevance: uR.relevance
            }, uR.secondBest && (RR.secondBest = {
              language: uR.secondBest.language,
              relevance: uR.secondBest.relevance
            }), pR("after:highlightElement", {
              el: RR,
              result: uR,
              text: yR
            })
        }
        let CR = !1;

        function XR() {
          if ("loading" === document.readyState) return CR || window.addEventListener("DOMContentLoaded", (function() {
            XR()
          }), !1), void(CR = !0);
          document.querySelectorAll(VR.cssSelector).forEach(AR)
        }

        function MR(RR) {
          return RR = (RR || "").toLowerCase(), yR[RR] || yR[tR[RR]]
        }

        function BR(RR, JR) {
          let {
            languageName: GR
          } = JR;
          "string" === typeof RR && (RR = [RR]), RR.forEach((RR => {
            tR[RR.toLowerCase()] = GR
          }))
        }

        function lR(RR) {
          const JR = MR(RR);
          return JR && !JR.disableAutodetect
        }

        function pR(RR, JR) {
          const GR = RR;
          uR.forEach((function(RR) {
            RR[GR] && RR[GR](JR)
          }))
        }
        Object.assign(RR, {
          highlight: nR,
          highlightAuto: WR,
          highlightAll: XR,
          highlightElement: AR,
          highlightBlock: function(RR) {
            return RJ("10.7.0", "highlightBlock will be removed entirely in v12.0"), RJ("10.7.0", "Please use highlightElement now."), AR(RR)
          },
          configure: function(RR) {
            VR = iJ(VR, RR)
          },
          initHighlighting: () => {
            XR(), RJ("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            XR(), RJ("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(JR, GR) {
            let tR = null;
            try {
              tR = GR(RR)
            } catch (uR) {
              if (sR("Language definition for '{}' could not be registered.".replace("{}", JR)), !ZR) throw uR;
              sR(uR), tR = iR
            }
            tR.name || (tR.name = JR), yR[JR] = tR, tR.rawDefinition = GR.bind(null, RR), tR.aliases && BR(tR.aliases, {
              languageName: JR
            })
          },
          unregisterLanguage: function(RR) {
            delete yR[RR];
            for (const JR of Object.keys(tR)) tR[JR] === RR && delete tR[JR]
          },
          listLanguages: function() {
            return Object.keys(yR)
          },
          getLanguage: MR,
          registerAliases: BR,
          autoDetection: lR,
          inherit: iJ,
          addPlugin: function(RR) {
            ! function(RR) {
              RR["before:highlightBlock"] && !RR["before:highlightElement"] && (RR["before:highlightElement"] = JR => {
                RR["before:highlightBlock"](Object.assign({
                  block: JR.el
                }, JR))
              }), RR["after:highlightBlock"] && !RR["after:highlightElement"] && (RR["after:highlightElement"] = JR => {
                RR["after:highlightBlock"](Object.assign({
                  block: JR.el
                }, JR))
              })
            }(RR), uR.push(RR)
          },
          removePlugin: function(RR) {
            const JR = uR.indexOf(RR); - 1 !== JR && uR.splice(JR, 1)
          }
        }), RR.debugMode = function() {
          ZR = !1
        }, RR.safeMode = function() {
          ZR = !0
        }, RR.versionString = "11.11.1", RR.regex = {
          concat: eR,
          lookahead: KR,
          either: aR,
          optional: rR,
          anyNumberOfTimes: wR
        };
        for (const GR in IR) "object" === typeof IR[GR] && JR(IR[GR]);
        return Object.assign(RR, IR), RR
      },
      KJ = VJ({});
    KJ.newInstance = () => VJ({}), RR.exports = KJ, KJ.HighlightJS = KJ, KJ.default = KJ
  },
  5610: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    const yR = GR(5618)
  },
  5624: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR
    });
    const yR = "[A-Za-z$_][0-9A-Za-z$_]*",
      tR = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      uR = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      ZR = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      qR = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      iR = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      fR = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      VR = [].concat(iR, ZR, qR);

    function KR(RR) {
      const JR = RR.regex,
        GR = yR,
        KR = "<>",
        wR = "</>",
        rR = {
          UK: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (RR, JR) => {
            const GR = RR[0].length + RR.index,
              yR = RR.input[GR];
            if ("<" === yR || "," === yR) return void JR.ignoreMatch();
            let tR;
            ">" === yR && (((RR, JR) => {
              let {
                after: GR
              } = JR;
              const yR = "</" + RR[0].slice(1);
              return -1 !== RR.input.indexOf(yR, GR)
            })(RR, {
              after: GR
            }) || JR.ignoreMatch());
            const uR = RR.input.substring(GR);
            ((tR = uR.match(/^\s*=/)) || (tR = uR.match(/^\s+extends\s+/)) && 0 === tR.index) && JR.ignoreMatch()
          }
        },
        eR = {
          $pattern: yR,
          keyword: tR,
          literal: uR,
          built_in: VR,
          "variable.language": fR
        },
        aR = "[0-9](_?[0-9])*",
        LR = `\\.(${aR})`,
        nR = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        UR = {
          className: "number",
          variants: [{
            UK: `(\\b(${nR})((${LR})|\\.)?|(${LR}))[eE][+-]?(${aR})\\b`
          }, {
            UK: `\\b(${nR})\\b((${LR})\\b|\\.)?|(${LR})\\b`
          }, {
            UK: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            UK: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            UK: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            UK: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            UK: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        WR = {
          className: "subst",
          UK: "\\$\\{",
          end: "\\}",
          keywords: eR,
          contains: []
        },
        AR = {
          UK: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [RR.BACKSLASH_ESCAPE, WR],
            subLanguage: "xml"
          }
        },
        CR = {
          UK: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [RR.BACKSLASH_ESCAPE, WR],
            subLanguage: "css"
          }
        },
        XR = {
          UK: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [RR.BACKSLASH_ESCAPE, WR],
            subLanguage: "graphql"
          }
        },
        MR = {
          className: "string",
          UK: "`",
          end: "`",
          contains: [RR.BACKSLASH_ESCAPE, WR]
        },
        BR = {
          className: "comment",
          variants: [RR.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              UK: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                UK: "@[A-Za-z]+"
              }, {
                className: "type",
                UK: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                UK: GR + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                UK: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), RR.C_BLOCK_COMMENT_MODE, RR.C_LINE_COMMENT_MODE]
        },
        lR = [RR.APOS_STRING_MODE, RR.QUOTE_STRING_MODE, AR, CR, XR, MR, {
          match: /\$\d+/
        }, UR];
      WR.contains = lR.concat({
        UK: /\{/,
        end: /\}/,
        keywords: eR,
        contains: ["self"].concat(lR)
      });
      const pR = [].concat(BR, WR.contains),
        gR = pR.concat([{
          UK: /(\s*)\(/,
          end: /\)/,
          keywords: eR,
          contains: ["self"].concat(pR)
        }]),
        bR = {
          className: "params",
          UK: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: eR,
          contains: gR
        },
        vR = {
          variants: [{
            match: [/class/, /\s+/, GR, /\s+/, /extends/, /\s+/, JR.concat(GR, "(", JR.concat(/\./, GR), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, GR],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        OR = {
          relevance: 0,
          match: JR.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...ZR, ...qR]
          }
        },
        xR = {
          variants: [{
            match: [/function/, /\s+/, GR, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [bR],
          illegal: /%/
        };
      const NR = {
        match: JR.concat(/\b/, (DR = [...iR, "super", "import"].map((RR => `${RR}\\s*\\(`)), JR.concat("(?!", DR.join("|"), ")")), GR, JR.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var DR;
      const HR = {
          UK: JR.concat(/\./, JR.lookahead(JR.concat(GR, /(?![0-9A-Za-z$_(])/))),
          end: GR,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        oR = {
          match: [/get|set/, /\s+/, GR, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            UK: /\(\)/
          }, bR]
        },
        cR = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + RR.UNDERSCORE_IDENT_RE + ")\\s*=>",
        PR = {
          match: [/const|var|let/, /\s+/, GR, /\s*/, /=\s*/, /(async\s*)?/, JR.lookahead(cR)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [bR]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: eR,
        exports: {
          PARAMS_CONTAINS: gR,
          CLASS_REFERENCE: OR
        },
        illegal: /#(?![$_A-z])/,
        contains: [RR.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          UK: /^\s*['"]use (strict|asm)['"]/
        }, RR.APOS_STRING_MODE, RR.QUOTE_STRING_MODE, AR, CR, XR, MR, BR, {
          match: /\$\d+/
        }, UR, OR, {
          scope: "attr",
          match: GR + JR.lookahead(":"),
          relevance: 0
        }, PR, {
          UK: "(" + RR.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [BR, RR.REGEXP_MODE, {
            className: "function",
            UK: cR,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                UK: RR.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                UK: /\(\s*\)/,
                skip: !0
              }, {
                UK: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: eR,
                contains: gR
              }]
            }]
          }, {
            UK: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              UK: KR,
              end: wR
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              UK: rR.UK,
              "on:begin": rR.isTrulyOpeningTag,
              end: rR.end
            }],
            subLanguage: "xml",
            contains: [{
              UK: rR.UK,
              end: rR.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, xR, {
          beginKeywords: "while if switch catch for"
        }, {
          UK: "\\b(?!function)" + RR.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [bR, RR.inherit(RR.TITLE_MODE, {
            UK: GR,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, HR, {
          match: "\\$" + GR,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [bR]
        }, NR, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, vR, oR, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5629: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => wR
    });
    const yR = "[A-Za-z$_][0-9A-Za-z$_]*",
      tR = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      uR = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      ZR = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      qR = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      iR = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      fR = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      VR = [].concat(iR, ZR, qR);

    function KR(RR) {
      const JR = RR.regex,
        GR = yR,
        KR = "<>",
        wR = "</>",
        rR = {
          UK: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (RR, JR) => {
            const GR = RR[0].length + RR.index,
              yR = RR.input[GR];
            if ("<" === yR || "," === yR) return void JR.ignoreMatch();
            let tR;
            ">" === yR && (((RR, JR) => {
              let {
                after: GR
              } = JR;
              const yR = "</" + RR[0].slice(1);
              return -1 !== RR.input.indexOf(yR, GR)
            })(RR, {
              after: GR
            }) || JR.ignoreMatch());
            const uR = RR.input.substring(GR);
            ((tR = uR.match(/^\s*=/)) || (tR = uR.match(/^\s+extends\s+/)) && 0 === tR.index) && JR.ignoreMatch()
          }
        },
        eR = {
          $pattern: yR,
          keyword: tR,
          literal: uR,
          built_in: VR,
          "variable.language": fR
        },
        aR = "[0-9](_?[0-9])*",
        LR = `\\.(${aR})`,
        nR = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        UR = {
          className: "number",
          variants: [{
            UK: `(\\b(${nR})((${LR})|\\.)?|(${LR}))[eE][+-]?(${aR})\\b`
          }, {
            UK: `\\b(${nR})\\b((${LR})\\b|\\.)?|(${LR})\\b`
          }, {
            UK: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            UK: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            UK: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            UK: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            UK: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        WR = {
          className: "subst",
          UK: "\\$\\{",
          end: "\\}",
          keywords: eR,
          contains: []
        },
        AR = {
          UK: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [RR.BACKSLASH_ESCAPE, WR],
            subLanguage: "xml"
          }
        },
        CR = {
          UK: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [RR.BACKSLASH_ESCAPE, WR],
            subLanguage: "css"
          }
        },
        XR = {
          UK: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [RR.BACKSLASH_ESCAPE, WR],
            subLanguage: "graphql"
          }
        },
        MR = {
          className: "string",
          UK: "`",
          end: "`",
          contains: [RR.BACKSLASH_ESCAPE, WR]
        },
        BR = {
          className: "comment",
          variants: [RR.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              UK: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                UK: "@[A-Za-z]+"
              }, {
                className: "type",
                UK: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                UK: GR + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                UK: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), RR.C_BLOCK_COMMENT_MODE, RR.C_LINE_COMMENT_MODE]
        },
        lR = [RR.APOS_STRING_MODE, RR.QUOTE_STRING_MODE, AR, CR, XR, MR, {
          match: /\$\d+/
        }, UR];
      WR.contains = lR.concat({
        UK: /\{/,
        end: /\}/,
        keywords: eR,
        contains: ["self"].concat(lR)
      });
      const pR = [].concat(BR, WR.contains),
        gR = pR.concat([{
          UK: /(\s*)\(/,
          end: /\)/,
          keywords: eR,
          contains: ["self"].concat(pR)
        }]),
        bR = {
          className: "params",
          UK: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: eR,
          contains: gR
        },
        vR = {
          variants: [{
            match: [/class/, /\s+/, GR, /\s+/, /extends/, /\s+/, JR.concat(GR, "(", JR.concat(/\./, GR), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, GR],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        OR = {
          relevance: 0,
          match: JR.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...ZR, ...qR]
          }
        },
        xR = {
          variants: [{
            match: [/function/, /\s+/, GR, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [bR],
          illegal: /%/
        };
      const NR = {
        match: JR.concat(/\b/, (DR = [...iR, "super", "import"].map((RR => `${RR}\\s*\\(`)), JR.concat("(?!", DR.join("|"), ")")), GR, JR.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var DR;
      const HR = {
          UK: JR.concat(/\./, JR.lookahead(JR.concat(GR, /(?![0-9A-Za-z$_(])/))),
          end: GR,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        oR = {
          match: [/get|set/, /\s+/, GR, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            UK: /\(\)/
          }, bR]
        },
        cR = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + RR.UNDERSCORE_IDENT_RE + ")\\s*=>",
        PR = {
          match: [/const|var|let/, /\s+/, GR, /\s*/, /=\s*/, /(async\s*)?/, JR.lookahead(cR)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [bR]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: eR,
        exports: {
          PARAMS_CONTAINS: gR,
          CLASS_REFERENCE: OR
        },
        illegal: /#(?![$_A-z])/,
        contains: [RR.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          UK: /^\s*['"]use (strict|asm)['"]/
        }, RR.APOS_STRING_MODE, RR.QUOTE_STRING_MODE, AR, CR, XR, MR, BR, {
          match: /\$\d+/
        }, UR, OR, {
          scope: "attr",
          match: GR + JR.lookahead(":"),
          relevance: 0
        }, PR, {
          UK: "(" + RR.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [BR, RR.REGEXP_MODE, {
            className: "function",
            UK: cR,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                UK: RR.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                UK: /\(\s*\)/,
                skip: !0
              }, {
                UK: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: eR,
                contains: gR
              }]
            }]
          }, {
            UK: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              UK: KR,
              end: wR
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              UK: rR.UK,
              "on:begin": rR.isTrulyOpeningTag,
              end: rR.end
            }],
            subLanguage: "xml",
            contains: [{
              UK: rR.UK,
              end: rR.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, xR, {
          beginKeywords: "while if switch catch for"
        }, {
          UK: "\\b(?!function)" + RR.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [bR, RR.inherit(RR.TITLE_MODE, {
            UK: GR,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, HR, {
          match: "\\$" + GR,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [bR]
        }, NR, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, vR, oR, {
          match: /\$[(.]/
        }]
      }
    }

    function wR(RR) {
      const JR = RR.regex,
        GR = KR(RR),
        ZR = yR,
        qR = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        iR = {
          UK: [/namespace/, /\s+/, RR.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        wR = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: qR
          },
          contains: [GR.exports.CLASS_REFERENCE]
        },
        rR = {
          $pattern: yR,
          keyword: tR.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: uR,
          built_in: VR.concat(qR),
          "variable.language": fR
        },
        eR = {
          className: "meta",
          UK: "@" + ZR
        },
        aR = (RR, JR, GR) => {
          const yR = RR.contains.findIndex((RR => RR.label === JR));
          if (-1 === yR) throw new Error("can not find mode to replace");
          RR.contains.splice(yR, 1, GR)
        };
      Object.assign(GR.keywords, rR), GR.exports.PARAMS_CONTAINS.push(eR);
      const LR = GR.contains.find((RR => "attr" === RR.scope)),
        nR = Object.assign({}, LR, {
          match: JR.concat(ZR, JR.lookahead(/\s*\?:/))
        });
      GR.exports.PARAMS_CONTAINS.push([GR.exports.CLASS_REFERENCE, LR, nR]), GR.contains = GR.contains.concat([eR, iR, wR, nR]), aR(GR, "shebang", RR.SHEBANG()), aR(GR, "use_strict", {
        className: "meta",
        relevance: 10,
        UK: /^\s*['"]use strict['"]/
      });
      return GR.contains.find((RR => "func.def" === RR.label)).relevance = 0, Object.assign(GR, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), GR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);