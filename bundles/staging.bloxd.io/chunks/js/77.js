export const id = 77;
export const ids = [77];
export const modules = {
  4566: QQ => {
    function FQ(QQ) {
      return QQ instanceof Map ? QQ.clear = QQ.delete = QQ.set = function() {
        throw new Error("map is read-only")
      } : QQ instanceof Set && (QQ.add = QQ.clear = QQ.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(QQ), Object.getOwnPropertyNames(QQ).forEach((wQ => {
        const LQ = QQ[wQ],
          qQ = typeof LQ;
        "object" !== qQ && "function" !== qQ || Object.isFrozen(LQ) || FQ(LQ)
      })), QQ
    }
    class wQ {
      constructor(QQ) {
        void 0 === QQ.data && (QQ.data = {}), this.data = QQ.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function LQ(QQ) {
      return QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function qQ(QQ) {
      const FQ = Object.create(null);
      for (const oQ in QQ) FQ[oQ] = QQ[oQ];
      for (var wQ = arguments.length, LQ = new Array(wQ > 1 ? wQ - 1 : 0), qQ = 1; qQ < wQ; qQ++) LQ[qQ - 1] = arguments[qQ];
      return LQ.forEach((function(QQ) {
        for (const wQ in QQ) FQ[wQ] = QQ[wQ]
      })), FQ
    }
    const oQ = QQ => !!QQ.scope;
    class DQ {
      constructor(QQ, FQ) {
        this.buffer = "", this.classPrefix = FQ.classPrefix, QQ.walk(this)
      }
      addText(QQ) {
        this.buffer += LQ(QQ)
      }
      openNode(QQ) {
        if (!oQ(QQ)) return;
        const FQ = ((QQ, FQ) => {
          let {
            prefix: wQ
          } = FQ;
          if (QQ.startsWith("language:")) return QQ.replace("language:", "language-");
          if (QQ.includes(".")) {
            const FQ = QQ.split(".");
            return [`${wQ}${FQ.shift()}`, ...FQ.map(((QQ, FQ) => `${QQ}${"_".repeat(FQ+1)}`))].join(" ")
          }
          return `${wQ}${QQ}`
        })(QQ.scope, {
          prefix: this.classPrefix
        });
        this.span(FQ)
      }
      closeNode(QQ) {
        oQ(QQ) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(QQ) {
        this.buffer += `<span class="${QQ}">`
      }
    }
    const kQ = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const FQ = {
        children: []
      };
      return Object.assign(FQ, QQ), FQ
    };
    class vQ {
      constructor() {
        this.yG = kQ(), this.stack = [this.yG]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.yG
      }
      add(QQ) {
        this.top.children.push(QQ)
      }
      openNode(QQ) {
        const FQ = kQ({
          scope: QQ
        });
        this.add(FQ), this.stack.push(FQ)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.yG, null, 4)
      }
      walk(QQ) {
        return this.constructor._walk(QQ, this.yG)
      }
      static _walk(QQ, FQ) {
        return "string" === typeof FQ ? QQ.addText(FQ) : FQ.children && (QQ.openNode(FQ), FQ.children.forEach((FQ => this._walk(QQ, FQ))), QQ.closeNode(FQ)), QQ
      }
      static _collapse(QQ) {
        "string" !== typeof QQ && QQ.children && (QQ.children.every((QQ => "string" === typeof QQ)) ? QQ.children = [QQ.children.join("")] : QQ.children.forEach((QQ => {
          vQ._collapse(QQ)
        })))
      }
    }
    class mQ extends vQ {
      constructor(QQ) {
        super(), this.options = QQ
      }
      addText(QQ) {
        "" !== QQ && this.add(QQ)
      }
      startScope(QQ) {
        this.openNode(QQ)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(QQ, FQ) {
        const wQ = QQ.root;
        FQ && (wQ.scope = `language:${FQ}`), this.add(wQ)
      }
      toHTML() {
        return new DQ(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function uQ(QQ) {
      return QQ ? "string" === typeof QQ ? QQ : QQ.source : null
    }

    function HQ(QQ) {
      return xQ("(?=", QQ, ")")
    }

    function bQ(QQ) {
      return xQ("(?:", QQ, ")*")
    }

    function YQ(QQ) {
      return xQ("(?:", QQ, ")?")
    }

    function xQ() {
      for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
      return FQ.map((QQ => uQ(QQ))).join("")
    }

    function AQ() {
      for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
      const LQ = function(QQ) {
        const FQ = QQ[QQ.length - 1];
        return "object" === typeof FQ && FQ.constructor === Object ? (QQ.splice(QQ.length - 1, 1), FQ) : {}
      }(FQ);
      return "(" + (LQ.capture ? "" : "?:") + FQ.map((QQ => uQ(QQ))).join("|") + ")"
    }

    function tQ(QQ) {
      return new RegExp(QQ.toString() + "|").exec("").length - 1
    }
    const eQ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function MQ(QQ, FQ) {
      let {
        joinWith: wQ
      } = FQ, LQ = 0;
      return QQ.map((QQ => {
        LQ += 1;
        const FQ = LQ;
        let wQ = uQ(QQ),
          qQ = "";
        for (; wQ.length > 0;) {
          const QQ = eQ.exec(wQ);
          if (!QQ) {
            qQ += wQ;
            break
          }
          qQ += wQ.substring(0, QQ.index), wQ = wQ.substring(QQ.index + QQ[0].length), "\\" === QQ[0][0] && QQ[1] ? qQ += "\\" + String(Number(QQ[1]) + FQ) : (qQ += QQ[0], "(" === QQ[0] && LQ++)
        }
        return qQ
      })).map((QQ => `(${QQ})`)).join(wQ)
    }
    const GQ = "[a-zA-Z]\\w*",
      pQ = "[a-zA-Z_]\\w*",
      cQ = "\\b\\d+(\\.\\d+)?",
      CQ = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      SQ = "\\b(0b[01]+)",
      iQ = {
        mY: "\\\\[\\s\\S]",
        relevance: 0
      },
      WQ = {
        scope: "string",
        mY: "'",
        end: "'",
        illegal: "\\n",
        contains: [iQ]
      },
      RQ = {
        scope: "string",
        mY: '"',
        end: '"',
        illegal: "\\n",
        contains: [iQ]
      },
      OQ = function(QQ, FQ) {
        const wQ = qQ({
          scope: "comment",
          mY: QQ,
          end: FQ,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        wQ.contains.push({
          scope: "doctag",
          mY: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const LQ = AQ("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return wQ.contains.push({
          mY: xQ(/[ ]+/, "(", LQ, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), wQ
      },
      sQ = OQ("//", "$"),
      rQ = OQ("/\\*", "\\*/"),
      IQ = OQ("#", "$"),
      UQ = {
        scope: "number",
        mY: cQ,
        relevance: 0
      },
      NQ = {
        scope: "number",
        mY: CQ,
        relevance: 0
      },
      TQ = {
        scope: "number",
        mY: SQ,
        relevance: 0
      },
      KQ = {
        scope: "regexp",
        mY: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [iQ, {
          mY: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [iQ]
        }]
      },
      zQ = {
        scope: "title",
        mY: GQ,
        relevance: 0
      },
      lQ = {
        scope: "title",
        mY: pQ,
        relevance: 0
      },
      jQ = {
        mY: "\\.\\s*" + pQ,
        relevance: 0
      };
    var aQ = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: WQ,
      BACKSLASH_ESCAPE: iQ,
      BINARY_NUMBER_MODE: TQ,
      BINARY_NUMBER_RE: SQ,
      COMMENT: OQ,
      C_BLOCK_COMMENT_MODE: rQ,
      C_LINE_COMMENT_MODE: sQ,
      C_NUMBER_MODE: NQ,
      C_NUMBER_RE: CQ,
      END_SAME_AS_BEGIN: function(QQ) {
        return Object.assign(QQ, {
          "on:begin": (QQ, FQ) => {
            FQ.data._beginMatch = QQ[1]
          },
          "on:end": (QQ, FQ) => {
            FQ.data._beginMatch !== QQ[1] && FQ.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: IQ,
      IDENT_RE: GQ,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: jQ,
      NUMBER_MODE: UQ,
      NUMBER_RE: cQ,
      PHRASAL_WORDS_MODE: {
        mY: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: RQ,
      REGEXP_MODE: KQ,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const FQ = /^#![ ]*\//;
        return QQ.binary && (QQ.mY = xQ(FQ, /.*\b/, QQ.binary, /\b.*/)), qQ({
          scope: "meta",
          mY: FQ,
          end: /$/,
          relevance: 0,
          "on:begin": (QQ, FQ) => {
            0 !== QQ.index && FQ.ignoreMatch()
          }
        }, QQ)
      },
      TITLE_MODE: zQ,
      UNDERSCORE_IDENT_RE: pQ,
      UNDERSCORE_TITLE_MODE: lQ
    });

    function XQ(QQ, FQ) {
      "." === QQ.input[QQ.index - 1] && FQ.ignoreMatch()
    }

    function fQ(QQ, FQ) {
      void 0 !== QQ.className && (QQ.scope = QQ.className, delete QQ.className)
    }

    function VQ(QQ, FQ) {
      FQ && QQ.beginKeywords && (QQ.mY = "\\b(" + QQ.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", QQ.__beforeBegin = XQ, QQ.keywords = QQ.keywords || QQ.beginKeywords, delete QQ.beginKeywords, void 0 === QQ.relevance && (QQ.relevance = 0))
    }

    function hQ(QQ, FQ) {
      Array.isArray(QQ.illegal) && (QQ.illegal = AQ(...QQ.illegal))
    }

    function JQ(QQ, FQ) {
      if (QQ.match) {
        if (QQ.mY || QQ.end) throw new Error("begin & end are not supported with match");
        QQ.mY = QQ.match, delete QQ.match
      }
    }

    function EQ(QQ, FQ) {
      void 0 === QQ.relevance && (QQ.relevance = 1)
    }
    const nQ = (QQ, FQ) => {
        if (!QQ.beforeMatch) return;
        if (QQ.starts) throw new Error("beforeMatch cannot be used with starts");
        const wQ = Object.assign({}, QQ);
        Object.keys(QQ).forEach((FQ => {
          delete QQ[FQ]
        })), QQ.keywords = wQ.keywords, QQ.mY = xQ(wQ.beforeMatch, HQ(wQ.mY)), QQ.starts = {
          relevance: 0,
          contains: [Object.assign(wQ, {
            endsParent: !0
          })]
        }, QQ.relevance = 0, delete wQ.beforeMatch
      },
      gQ = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function PQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const LQ = Object.create(null);
      return "string" === typeof QQ ? qQ(wQ, QQ.split(" ")) : Array.isArray(QQ) ? qQ(wQ, QQ) : Object.keys(QQ).forEach((function(wQ) {
        Object.assign(LQ, PQ(QQ[wQ], FQ, wQ))
      })), LQ;

      function qQ(QQ, wQ) {
        FQ && (wQ = wQ.map((QQ => QQ.toLowerCase()))), wQ.forEach((function(FQ) {
          const wQ = FQ.split("|");
          LQ[wQ[0]] = [QQ, ZQ(wQ[0], wQ[1])]
        }))
      }
    }

    function ZQ(QQ, FQ) {
      return FQ ? Number(FQ) : function(QQ) {
        return gQ.includes(QQ.toLowerCase())
      }(QQ) ? 0 : 1
    }
    const yQ = {},
      BQ = QQ => {
        console.error(QQ)
      },
      dQ = function(QQ) {
        for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
        console.log(`WARN: ${QQ}`, ...wQ)
      },
      QF = (QQ, FQ) => {
        yQ[`${QQ}/${FQ}`] || (console.log(`Deprecated as of ${QQ}. ${FQ}`), yQ[`${QQ}/${FQ}`] = !0)
      },
      FF = new Error;

    function wF(QQ, FQ, wQ) {
      let {
        key: LQ
      } = wQ, qQ = 0;
      const oQ = QQ[LQ],
        DQ = {},
        kQ = {};
      for (let vQ = 1; vQ <= FQ.length; vQ++) kQ[vQ + qQ] = oQ[vQ], DQ[vQ + qQ] = !0, qQ += tQ(FQ[vQ - 1]);
      QQ[LQ] = kQ, QQ[LQ]._emit = DQ, QQ[LQ]._multi = !0
    }

    function LF(QQ) {
      ! function(QQ) {
        QQ.scope && "object" === typeof QQ.scope && null !== QQ.scope && (QQ.beginScope = QQ.scope, delete QQ.scope)
      }(QQ), "string" === typeof QQ.beginScope && (QQ.beginScope = {
          _wrap: QQ.beginScope
        }), "string" === typeof QQ.endScope && (QQ.endScope = {
          _wrap: QQ.endScope
        }),
        function(QQ) {
          if (Array.isArray(QQ.mY)) {
            if (QQ.skip || QQ.excludeBegin || QQ.returnBegin) throw BQ("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), FF;
            if ("object" !== typeof QQ.beginScope || null === QQ.beginScope) throw BQ("beginScope must be object"), FF;
            wF(QQ, QQ.mY, {
              key: "beginScope"
            }), QQ.mY = MQ(QQ.mY, {
              joinWith: ""
            })
          }
        }(QQ),
        function(QQ) {
          if (Array.isArray(QQ.end)) {
            if (QQ.skip || QQ.excludeEnd || QQ.returnEnd) throw BQ("skip, excludeEnd, returnEnd not compatible with endScope: {}"), FF;
            if ("object" !== typeof QQ.endScope || null === QQ.endScope) throw BQ("endScope must be object"), FF;
            wF(QQ, QQ.end, {
              key: "endScope"
            }), QQ.end = MQ(QQ.end, {
              joinWith: ""
            })
          }
        }(QQ)
    }

    function qF(QQ) {
      function FQ(FQ, wQ) {
        return new RegExp(uQ(FQ), "m" + (QQ.case_insensitive ? "i" : "") + (QQ.unicodeRegex ? "u" : "") + (wQ ? "g" : ""))
      }
      class wQ {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(QQ, FQ) {
          FQ.position = this.position++, this.matchIndexes[this.matchAt] = FQ, this.regexes.push([FQ, QQ]), this.matchAt += tQ(QQ) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const QQ = this.regexes.map((QQ => QQ[1]));
          this.matcherRe = FQ(MQ(QQ, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(QQ) {
          this.matcherRe.lastIndex = this.lastIndex;
          const FQ = this.matcherRe.exec(QQ);
          if (!FQ) return null;
          const wQ = FQ.findIndex(((QQ, FQ) => FQ > 0 && void 0 !== QQ)),
            LQ = this.matchIndexes[wQ];
          return FQ.splice(0, wQ), Object.assign(FQ, LQ)
        }
      }
      class LQ {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(QQ) {
          if (this.multiRegexes[QQ]) return this.multiRegexes[QQ];
          const FQ = new wQ;
          return this.rules.slice(QQ).forEach((QQ => {
            let [wQ, LQ] = QQ;
            return FQ.addRule(wQ, LQ)
          })), FQ.compile(), this.multiRegexes[QQ] = FQ, FQ
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(QQ, FQ) {
          this.rules.push([QQ, FQ]), "mY" === FQ.type && this.count++
        }
        exec(QQ) {
          const FQ = this.getMatcher(this.regexIndex);
          FQ.lastIndex = this.lastIndex;
          let wQ = FQ.exec(QQ);
          if (this.resumingScanAtSamePosition())
            if (wQ && wQ.index === this.lastIndex);
            else {
              const FQ = this.getMatcher(0);
              FQ.lastIndex = this.lastIndex + 1, wQ = FQ.exec(QQ)
            } return wQ && (this.regexIndex += wQ.position + 1, this.regexIndex === this.count && this.considerAll()), wQ
        }
      }
      if (QQ.compilerExtensions || (QQ.compilerExtensions = []), QQ.contains && QQ.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return QQ.classNameAliases = qQ(QQ.classNameAliases || {}),
        function wQ(oQ, DQ) {
          const kQ = oQ;
          if (oQ.isCompiled) return kQ;
          [fQ, JQ, LF, nQ].forEach((QQ => QQ(oQ, DQ))), QQ.compilerExtensions.forEach((QQ => QQ(oQ, DQ))), oQ.__beforeBegin = null, [VQ, hQ, EQ].forEach((QQ => QQ(oQ, DQ))), oQ.isCompiled = !0;
          let vQ = null;
          return "object" === typeof oQ.keywords && oQ.keywords.$pattern && (oQ.keywords = Object.assign({}, oQ.keywords), vQ = oQ.keywords.$pattern, delete oQ.keywords.$pattern), vQ = vQ || /\w+/, oQ.keywords && (oQ.keywords = PQ(oQ.keywords, QQ.case_insensitive)), kQ.keywordPatternRe = FQ(vQ, !0), DQ && (oQ.mY || (oQ.mY = /\B|\b/), kQ.beginRe = FQ(kQ.mY), oQ.end || oQ.endsWithParent || (oQ.end = /\B|\b/), oQ.end && (kQ.endRe = FQ(kQ.end)), kQ.terminatorEnd = uQ(kQ.end) || "", oQ.endsWithParent && DQ.terminatorEnd && (kQ.terminatorEnd += (oQ.end ? "|" : "") + DQ.terminatorEnd)), oQ.illegal && (kQ.illegalRe = FQ(oQ.illegal)), oQ.contains || (oQ.contains = []), oQ.contains = [].concat(...oQ.contains.map((function(QQ) {
            return function(QQ) {
              QQ.variants && !QQ.cachedVariants && (QQ.cachedVariants = QQ.variants.map((function(FQ) {
                return qQ(QQ, {
                  variants: null
                }, FQ)
              })));
              if (QQ.cachedVariants) return QQ.cachedVariants;
              if (oF(QQ)) return qQ(QQ, {
                starts: QQ.starts ? qQ(QQ.starts) : null
              });
              if (Object.isFrozen(QQ)) return qQ(QQ);
              return QQ
            }("self" === QQ ? oQ : QQ)
          }))), oQ.contains.forEach((function(QQ) {
            wQ(QQ, kQ)
          })), oQ.starts && wQ(oQ.starts, DQ), kQ.matcher = function(QQ) {
            const FQ = new LQ;
            return QQ.contains.forEach((QQ => FQ.addRule(QQ.mY, {
              rule: QQ,
              type: "mY"
            }))), QQ.terminatorEnd && FQ.addRule(QQ.terminatorEnd, {
              type: "end"
            }), QQ.illegal && FQ.addRule(QQ.illegal, {
              type: "illegal"
            }), FQ
          }(kQ), kQ
        }(QQ)
    }

    function oF(QQ) {
      return !!QQ && (QQ.endsWithParent || oF(QQ.starts))
    }
    class DF extends Error {
      constructor(QQ, FQ) {
        super(QQ), this.name = "HTMLInjectionError", this.html = FQ
      }
    }
    const kF = LQ,
      vF = qQ,
      mF = Symbol("nomatch"),
      uF = function(QQ) {
        const LQ = Object.create(null),
          qQ = Object.create(null),
          oQ = [];
        let DQ = !0;
        const kQ = "Could not find the language '{}', did you forget to load/include a language module?",
          vQ = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let uQ = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: mQ
        };

        function tQ(QQ) {
          return uQ.noHighlightRe.test(QQ)
        }

        function eQ(QQ, FQ, wQ) {
          let LQ = "",
            qQ = "";
          "object" === typeof FQ ? (LQ = QQ, wQ = FQ.ignoreIllegals, qQ = FQ.language) : (QF("10.7.0", "highlight(lang, code, ...args) has been deprecated."), QF("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), qQ = QQ, LQ = FQ), void 0 === wQ && (wQ = !0);
          const oQ = {
            code: LQ,
            language: qQ
          };
          RQ("before:highlight", oQ);
          const DQ = oQ.result ? oQ.result : MQ(oQ.language, oQ.code, wQ);
          return DQ.code = oQ.code, RQ("after:highlight", DQ), DQ
        }

        function MQ(QQ, FQ, qQ, oQ) {
          const vQ = Object.create(null);

          function mQ() {
            if (!RQ.keywords) return void sQ.addText(rQ);
            let QQ = 0;
            RQ.keywordPatternRe.lastIndex = 0;
            let FQ = RQ.keywordPatternRe.exec(rQ),
              wQ = "";
            for (; FQ;) {
              wQ += rQ.substring(QQ, FQ.index);
              const qQ = CQ.case_insensitive ? FQ[0].toLowerCase() : FQ[0],
                oQ = (LQ = qQ, RQ.keywords[LQ]);
              if (oQ) {
                const [QQ, LQ] = oQ;
                if (sQ.addText(wQ), wQ = "", vQ[qQ] = (vQ[qQ] || 0) + 1, vQ[qQ] <= 7 && (IQ += LQ), QQ.startsWith("_")) wQ += FQ[0];
                else {
                  const wQ = CQ.classNameAliases[QQ] || QQ;
                  bQ(FQ[0], wQ)
                }
              } else wQ += FQ[0];
              QQ = RQ.keywordPatternRe.lastIndex, FQ = RQ.keywordPatternRe.exec(rQ)
            }
            var LQ;
            wQ += rQ.substring(QQ), sQ.addText(wQ)
          }

          function HQ() {
            null != RQ.subLanguage ? function() {
              if ("" === rQ) return;
              let QQ = null;
              if ("string" === typeof RQ.subLanguage) {
                if (!LQ[RQ.subLanguage]) return void sQ.addText(rQ);
                QQ = MQ(RQ.subLanguage, rQ, !0, OQ[RQ.subLanguage]), OQ[RQ.subLanguage] = QQ._top
              } else QQ = GQ(rQ, RQ.subLanguage.length ? RQ.subLanguage : null);
              RQ.relevance > 0 && (IQ += QQ.relevance), sQ.__addSublanguage(QQ._emitter, QQ.language)
            }() : mQ(), rQ = ""
          }

          function bQ(QQ, FQ) {
            "" !== QQ && (sQ.startScope(FQ), sQ.addText(QQ), sQ.endScope())
          }

          function YQ(QQ, FQ) {
            let wQ = 1;
            const LQ = FQ.length - 1;
            for (; wQ <= LQ;) {
              if (!QQ._emit[wQ]) {
                wQ++;
                continue
              }
              const LQ = CQ.classNameAliases[QQ[wQ]] || QQ[wQ],
                qQ = FQ[wQ];
              LQ ? bQ(qQ, LQ) : (rQ = qQ, mQ(), rQ = ""), wQ++
            }
          }

          function xQ(QQ, FQ) {
            return QQ.scope && "string" === typeof QQ.scope && sQ.openNode(CQ.classNameAliases[QQ.scope] || QQ.scope), QQ.beginScope && (QQ.beginScope._wrap ? (bQ(rQ, CQ.classNameAliases[QQ.beginScope._wrap] || QQ.beginScope._wrap), rQ = "") : QQ.beginScope._multi && (YQ(QQ.beginScope, FQ), rQ = "")), RQ = Object.create(QQ, {
              parent: {
                value: RQ
              }
            }), RQ
          }

          function AQ(QQ, FQ, LQ) {
            let qQ = function(QQ, FQ) {
              const wQ = QQ && QQ.exec(FQ);
              return wQ && 0 === wQ.index
            }(QQ.endRe, LQ);
            if (qQ) {
              if (QQ["on:end"]) {
                const LQ = new wQ(QQ);
                QQ["on:end"](FQ, LQ), LQ.isMatchIgnored && (qQ = !1)
              }
              if (qQ) {
                for (; QQ.endsParent && QQ.parent;) QQ = QQ.parent;
                return QQ
              }
            }
            if (QQ.endsWithParent) return AQ(QQ.parent, FQ, LQ)
          }

          function tQ(QQ) {
            return 0 === RQ.matcher.regexIndex ? (rQ += QQ[0], 1) : (TQ = !0, 0)
          }

          function eQ(QQ) {
            const wQ = QQ[0],
              LQ = FQ.substring(QQ.index),
              qQ = AQ(RQ, QQ, LQ);
            if (!qQ) return mF;
            const oQ = RQ;
            RQ.endScope && RQ.endScope._wrap ? (HQ(), bQ(wQ, RQ.endScope._wrap)) : RQ.endScope && RQ.endScope._multi ? (HQ(), YQ(RQ.endScope, QQ)) : oQ.skip ? rQ += wQ : (oQ.returnEnd || oQ.excludeEnd || (rQ += wQ), HQ(), oQ.excludeEnd && (rQ = wQ));
            do {
              RQ.scope && sQ.closeNode(), RQ.skip || RQ.subLanguage || (IQ += RQ.relevance), RQ = RQ.parent
            } while (RQ !== qQ.parent);
            return qQ.starts && xQ(qQ.starts, QQ), oQ.returnEnd ? 0 : wQ.length
          }
          let pQ = {};

          function cQ(LQ, oQ) {
            const kQ = oQ && oQ[0];
            if (rQ += LQ, null == kQ) return HQ(), 0;
            if ("mY" === pQ.type && "end" === oQ.type && pQ.index === oQ.index && "" === kQ) {
              if (rQ += FQ.slice(oQ.index, oQ.index + 1), !DQ) {
                const FQ = new Error(`0 width match regex (${QQ})`);
                throw FQ.languageName = QQ, FQ.badRule = pQ.rule, FQ
              }
              return 1
            }
            if (pQ = oQ, "mY" === oQ.type) return function(QQ) {
              const FQ = QQ[0],
                LQ = QQ.rule,
                qQ = new wQ(LQ),
                oQ = [LQ.__beforeBegin, LQ["on:begin"]];
              for (const wQ of oQ)
                if (wQ && (wQ(QQ, qQ), qQ.isMatchIgnored)) return tQ(FQ);
              return LQ.skip ? rQ += FQ : (LQ.excludeBegin && (rQ += FQ), HQ(), LQ.returnBegin || LQ.excludeBegin || (rQ = FQ)), xQ(LQ, QQ), LQ.returnBegin ? 0 : FQ.length
            }(oQ);
            if ("illegal" === oQ.type && !qQ) {
              const QQ = new Error('Illegal lexeme "' + kQ + '" for mode "' + (RQ.scope || "<unnamed>") + '"');
              throw QQ.mode = RQ, QQ
            }
            if ("end" === oQ.type) {
              const QQ = eQ(oQ);
              if (QQ !== mF) return QQ
            }
            if ("illegal" === oQ.type && "" === kQ) return rQ += "\n", 1;
            if (NQ > 1e5 && NQ > 3 * oQ.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return rQ += kQ, kQ.length
          }
          const CQ = SQ(QQ);
          if (!CQ) throw BQ(kQ.replace("{}", QQ)), new Error('Unknown language: "' + QQ + '"');
          const iQ = qF(CQ);
          let WQ = "",
            RQ = oQ || iQ;
          const OQ = {},
            sQ = new uQ.__emitter(uQ);
          ! function() {
            const QQ = [];
            for (let FQ = RQ; FQ !== CQ; FQ = FQ.parent) FQ.scope && QQ.unshift(FQ.scope);
            QQ.forEach((QQ => sQ.openNode(QQ)))
          }();
          let rQ = "",
            IQ = 0,
            UQ = 0,
            NQ = 0,
            TQ = !1;
          try {
            if (CQ.__emitTokens) CQ.__emitTokens(FQ, sQ);
            else {
              for (RQ.matcher.considerAll();;) {
                NQ++, TQ ? TQ = !1 : RQ.matcher.considerAll(), RQ.matcher.lastIndex = UQ;
                const QQ = RQ.matcher.exec(FQ);
                if (!QQ) break;
                const wQ = cQ(FQ.substring(UQ, QQ.index), QQ);
                UQ = QQ.index + wQ
              }
              cQ(FQ.substring(UQ))
            }
            return sQ.finalize(), WQ = sQ.toHTML(), {
              language: QQ,
              value: WQ,
              relevance: IQ,
              illegal: !1,
              _emitter: sQ,
              _top: RQ
            }
          } catch (KQ) {
            if (KQ.message && KQ.message.includes("Illegal")) return {
              language: QQ,
              value: kF(FQ),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: KQ.message,
                index: UQ,
                context: FQ.slice(UQ - 100, UQ + 100),
                mode: KQ.mode,
                resultSoFar: WQ
              },
              _emitter: sQ
            };
            if (DQ) return {
              language: QQ,
              value: kF(FQ),
              illegal: !1,
              relevance: 0,
              errorRaised: KQ,
              _emitter: sQ,
              _top: RQ
            };
            throw KQ
          }
        }

        function GQ(QQ, FQ) {
          FQ = FQ || uQ.languages || Object.keys(LQ);
          const wQ = function(QQ) {
              const FQ = {
                value: kF(QQ),
                illegal: !1,
                relevance: 0,
                _top: vQ,
                _emitter: new uQ.__emitter(uQ)
              };
              return FQ._emitter.addText(QQ), FQ
            }(QQ),
            qQ = FQ.filter(SQ).filter(WQ).map((FQ => MQ(FQ, QQ, !1)));
          qQ.unshift(wQ);
          const oQ = qQ.sort(((QQ, FQ) => {
              if (QQ.relevance !== FQ.relevance) return FQ.relevance - QQ.relevance;
              if (QQ.language && FQ.language) {
                if (SQ(QQ.language).supersetOf === FQ.language) return 1;
                if (SQ(FQ.language).supersetOf === QQ.language) return -1
              }
              return 0
            })),
            [DQ, kQ] = oQ,
            mQ = DQ;
          return mQ.secondBest = kQ, mQ
        }

        function pQ(QQ) {
          let FQ = null;
          const wQ = function(QQ) {
            let FQ = QQ.className + " ";
            FQ += QQ.parentNode ? QQ.parentNode.className : "";
            const wQ = uQ.languageDetectRe.exec(FQ);
            if (wQ) {
              const FQ = SQ(wQ[1]);
              return FQ || (dQ(kQ.replace("{}", wQ[1])), dQ("Falling back to no-highlight mode for this block.", QQ)), FQ ? wQ[1] : "no-highlight"
            }
            return FQ.split(/\s+/).find((QQ => tQ(QQ) || SQ(QQ)))
          }(QQ);
          if (tQ(wQ)) return;
          if (RQ("before:highlightElement", {
              el: QQ,
              language: wQ
            }), QQ.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", QQ);
          if (QQ.children.length > 0 && (uQ.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(QQ)), uQ.throwUnescapedHTML)) {
            throw new DF("One of your code blocks includes unescaped HTML.", QQ.innerHTML)
          }
          FQ = QQ;
          const LQ = FQ.textContent,
            oQ = wQ ? eQ(LQ, {
              language: wQ,
              ignoreIllegals: !0
            }) : GQ(LQ);
          QQ.innerHTML = oQ.value, QQ.dataset.highlighted = "yes",
            function(QQ, FQ, wQ) {
              const LQ = FQ && qQ[FQ] || wQ;
              QQ.classList.add("hljs"), QQ.classList.add(`language-${LQ}`)
            }(QQ, wQ, oQ.language), QQ.result = {
              language: oQ.language,
              re: oQ.relevance,
              relevance: oQ.relevance
            }, oQ.secondBest && (QQ.secondBest = {
              language: oQ.secondBest.language,
              relevance: oQ.secondBest.relevance
            }), RQ("after:highlightElement", {
              el: QQ,
              result: oQ,
              text: LQ
            })
        }
        let cQ = !1;

        function CQ() {
          if ("loading" === document.readyState) return cQ || window.addEventListener("DOMContentLoaded", (function() {
            CQ()
          }), !1), void(cQ = !0);
          document.querySelectorAll(uQ.cssSelector).forEach(pQ)
        }

        function SQ(QQ) {
          return QQ = (QQ || "").toLowerCase(), LQ[QQ] || LQ[qQ[QQ]]
        }

        function iQ(QQ, FQ) {
          let {
            languageName: wQ
          } = FQ;
          "string" === typeof QQ && (QQ = [QQ]), QQ.forEach((QQ => {
            qQ[QQ.toLowerCase()] = wQ
          }))
        }

        function WQ(QQ) {
          const FQ = SQ(QQ);
          return FQ && !FQ.disableAutodetect
        }

        function RQ(QQ, FQ) {
          const wQ = QQ;
          oQ.forEach((function(QQ) {
            QQ[wQ] && QQ[wQ](FQ)
          }))
        }
        Object.assign(QQ, {
          highlight: eQ,
          highlightAuto: GQ,
          highlightAll: CQ,
          highlightElement: pQ,
          highlightBlock: function(QQ) {
            return QF("10.7.0", "highlightBlock will be removed entirely in v12.0"), QF("10.7.0", "Please use highlightElement now."), pQ(QQ)
          },
          configure: function(QQ) {
            uQ = vF(uQ, QQ)
          },
          initHighlighting: () => {
            CQ(), QF("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            CQ(), QF("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(FQ, wQ) {
            let qQ = null;
            try {
              qQ = wQ(QQ)
            } catch (oQ) {
              if (BQ("Language definition for '{}' could not be registered.".replace("{}", FQ)), !DQ) throw oQ;
              BQ(oQ), qQ = vQ
            }
            qQ.name || (qQ.name = FQ), LQ[FQ] = qQ, qQ.rawDefinition = wQ.bind(null, QQ), qQ.aliases && iQ(qQ.aliases, {
              languageName: FQ
            })
          },
          unregisterLanguage: function(QQ) {
            delete LQ[QQ];
            for (const FQ of Object.keys(qQ)) qQ[FQ] === QQ && delete qQ[FQ]
          },
          listLanguages: function() {
            return Object.keys(LQ)
          },
          getLanguage: SQ,
          registerAliases: iQ,
          autoDetection: WQ,
          inherit: vF,
          addPlugin: function(QQ) {
            ! function(QQ) {
              QQ["before:highlightBlock"] && !QQ["before:highlightElement"] && (QQ["before:highlightElement"] = FQ => {
                QQ["before:highlightBlock"](Object.assign({
                  block: FQ.el
                }, FQ))
              }), QQ["after:highlightBlock"] && !QQ["after:highlightElement"] && (QQ["after:highlightElement"] = FQ => {
                QQ["after:highlightBlock"](Object.assign({
                  block: FQ.el
                }, FQ))
              })
            }(QQ), oQ.push(QQ)
          },
          removePlugin: function(QQ) {
            const FQ = oQ.indexOf(QQ); - 1 !== FQ && oQ.splice(FQ, 1)
          }
        }), QQ.debugMode = function() {
          DQ = !1
        }, QQ.safeMode = function() {
          DQ = !0
        }, QQ.versionString = "11.11.1", QQ.regex = {
          concat: xQ,
          lookahead: HQ,
          either: AQ,
          optional: YQ,
          anyNumberOfTimes: bQ
        };
        for (const wQ in aQ) "object" === typeof aQ[wQ] && FQ(aQ[wQ]);
        return Object.assign(QQ, aQ), QQ
      },
      HF = uF({});
    HF.newInstance = () => uF({}), QQ.exports = HF, HF.HighlightJS = HF, HF.default = HF
  },
  4557: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    const LQ = wQ(4566)
  },
  4575: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => HQ
    });
    const LQ = "[A-Za-z$_][0-9A-Za-z$_]*",
      qQ = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      oQ = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      DQ = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      kQ = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      vQ = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      mQ = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      uQ = [].concat(vQ, DQ, kQ);

    function HQ(QQ) {
      const FQ = QQ.regex,
        wQ = LQ,
        HQ = "<>",
        bQ = "</>",
        YQ = {
          mY: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (QQ, FQ) => {
            const wQ = QQ[0].length + QQ.index,
              LQ = QQ.input[wQ];
            if ("<" === LQ || "," === LQ) return void FQ.ignoreMatch();
            let qQ;
            ">" === LQ && (((QQ, FQ) => {
              let {
                after: wQ
              } = FQ;
              const LQ = "</" + QQ[0].slice(1);
              return -1 !== QQ.input.indexOf(LQ, wQ)
            })(QQ, {
              after: wQ
            }) || FQ.ignoreMatch());
            const oQ = QQ.input.substring(wQ);
            ((qQ = oQ.match(/^\s*=/)) || (qQ = oQ.match(/^\s+extends\s+/)) && 0 === qQ.index) && FQ.ignoreMatch()
          }
        },
        xQ = {
          $pattern: LQ,
          keyword: qQ,
          literal: oQ,
          built_in: uQ,
          "variable.language": mQ
        },
        AQ = "[0-9](_?[0-9])*",
        tQ = `\\.(${AQ})`,
        eQ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        MQ = {
          className: "number",
          variants: [{
            mY: `(\\b(${eQ})((${tQ})|\\.)?|(${tQ}))[eE][+-]?(${AQ})\\b`
          }, {
            mY: `\\b(${eQ})\\b((${tQ})\\b|\\.)?|(${tQ})\\b`
          }, {
            mY: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            mY: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            mY: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            mY: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            mY: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        GQ = {
          className: "subst",
          mY: "\\$\\{",
          end: "\\}",
          keywords: xQ,
          contains: []
        },
        pQ = {
          mY: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, GQ],
            subLanguage: "xml"
          }
        },
        cQ = {
          mY: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, GQ],
            subLanguage: "css"
          }
        },
        CQ = {
          mY: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, GQ],
            subLanguage: "graphql"
          }
        },
        SQ = {
          className: "string",
          mY: "`",
          end: "`",
          contains: [QQ.BACKSLASH_ESCAPE, GQ]
        },
        iQ = {
          className: "comment",
          variants: [QQ.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              mY: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                mY: "@[A-Za-z]+"
              }, {
                className: "type",
                mY: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                mY: wQ + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                mY: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), QQ.C_BLOCK_COMMENT_MODE, QQ.C_LINE_COMMENT_MODE]
        },
        WQ = [QQ.APOS_STRING_MODE, QQ.QUOTE_STRING_MODE, pQ, cQ, CQ, SQ, {
          match: /\$\d+/
        }, MQ];
      GQ.contains = WQ.concat({
        mY: /\{/,
        end: /\}/,
        keywords: xQ,
        contains: ["self"].concat(WQ)
      });
      const RQ = [].concat(iQ, GQ.contains),
        OQ = RQ.concat([{
          mY: /(\s*)\(/,
          end: /\)/,
          keywords: xQ,
          contains: ["self"].concat(RQ)
        }]),
        sQ = {
          className: "params",
          mY: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: xQ,
          contains: OQ
        },
        rQ = {
          variants: [{
            match: [/class/, /\s+/, wQ, /\s+/, /extends/, /\s+/, FQ.concat(wQ, "(", FQ.concat(/\./, wQ), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, wQ],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        IQ = {
          relevance: 0,
          match: FQ.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...DQ, ...kQ]
          }
        },
        UQ = {
          variants: [{
            match: [/function/, /\s+/, wQ, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [sQ],
          illegal: /%/
        };
      const NQ = {
        match: FQ.concat(/\b/, (TQ = [...vQ, "super", "import"].map((QQ => `${QQ}\\s*\\(`)), FQ.concat("(?!", TQ.join("|"), ")")), wQ, FQ.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var TQ;
      const KQ = {
          mY: FQ.concat(/\./, FQ.lookahead(FQ.concat(wQ, /(?![0-9A-Za-z$_(])/))),
          end: wQ,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        zQ = {
          match: [/get|set/, /\s+/, wQ, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            mY: /\(\)/
          }, sQ]
        },
        lQ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + QQ.UNDERSCORE_IDENT_RE + ")\\s*=>",
        jQ = {
          match: [/const|var|let/, /\s+/, wQ, /\s*/, /=\s*/, /(async\s*)?/, FQ.lookahead(lQ)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [sQ]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: xQ,
        exports: {
          PARAMS_CONTAINS: OQ,
          CLASS_REFERENCE: IQ
        },
        illegal: /#(?![$_A-z])/,
        contains: [QQ.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          mY: /^\s*['"]use (strict|asm)['"]/
        }, QQ.APOS_STRING_MODE, QQ.QUOTE_STRING_MODE, pQ, cQ, CQ, SQ, iQ, {
          match: /\$\d+/
        }, MQ, IQ, {
          scope: "attr",
          match: wQ + FQ.lookahead(":"),
          relevance: 0
        }, jQ, {
          mY: "(" + QQ.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [iQ, QQ.REGEXP_MODE, {
            className: "function",
            mY: lQ,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                mY: QQ.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                mY: /\(\s*\)/,
                skip: !0
              }, {
                mY: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: xQ,
                contains: OQ
              }]
            }]
          }, {
            mY: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              mY: HQ,
              end: bQ
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              mY: YQ.mY,
              "on:begin": YQ.isTrulyOpeningTag,
              end: YQ.end
            }],
            subLanguage: "xml",
            contains: [{
              mY: YQ.mY,
              end: YQ.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, UQ, {
          beginKeywords: "while if switch catch for"
        }, {
          mY: "\\b(?!function)" + QQ.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [sQ, QQ.inherit(QQ.TITLE_MODE, {
            mY: wQ,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, KQ, {
          match: "\\$" + wQ,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [sQ]
        }, NQ, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, rQ, zQ, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4582: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ
    });
    const LQ = "[A-Za-z$_][0-9A-Za-z$_]*",
      qQ = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      oQ = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      DQ = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      kQ = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      vQ = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      mQ = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      uQ = [].concat(vQ, DQ, kQ);

    function HQ(QQ) {
      const FQ = QQ.regex,
        wQ = LQ,
        HQ = "<>",
        bQ = "</>",
        YQ = {
          mY: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (QQ, FQ) => {
            const wQ = QQ[0].length + QQ.index,
              LQ = QQ.input[wQ];
            if ("<" === LQ || "," === LQ) return void FQ.ignoreMatch();
            let qQ;
            ">" === LQ && (((QQ, FQ) => {
              let {
                after: wQ
              } = FQ;
              const LQ = "</" + QQ[0].slice(1);
              return -1 !== QQ.input.indexOf(LQ, wQ)
            })(QQ, {
              after: wQ
            }) || FQ.ignoreMatch());
            const oQ = QQ.input.substring(wQ);
            ((qQ = oQ.match(/^\s*=/)) || (qQ = oQ.match(/^\s+extends\s+/)) && 0 === qQ.index) && FQ.ignoreMatch()
          }
        },
        xQ = {
          $pattern: LQ,
          keyword: qQ,
          literal: oQ,
          built_in: uQ,
          "variable.language": mQ
        },
        AQ = "[0-9](_?[0-9])*",
        tQ = `\\.(${AQ})`,
        eQ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        MQ = {
          className: "number",
          variants: [{
            mY: `(\\b(${eQ})((${tQ})|\\.)?|(${tQ}))[eE][+-]?(${AQ})\\b`
          }, {
            mY: `\\b(${eQ})\\b((${tQ})\\b|\\.)?|(${tQ})\\b`
          }, {
            mY: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            mY: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            mY: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            mY: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            mY: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        GQ = {
          className: "subst",
          mY: "\\$\\{",
          end: "\\}",
          keywords: xQ,
          contains: []
        },
        pQ = {
          mY: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, GQ],
            subLanguage: "xml"
          }
        },
        cQ = {
          mY: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, GQ],
            subLanguage: "css"
          }
        },
        CQ = {
          mY: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, GQ],
            subLanguage: "graphql"
          }
        },
        SQ = {
          className: "string",
          mY: "`",
          end: "`",
          contains: [QQ.BACKSLASH_ESCAPE, GQ]
        },
        iQ = {
          className: "comment",
          variants: [QQ.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              mY: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                mY: "@[A-Za-z]+"
              }, {
                className: "type",
                mY: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                mY: wQ + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                mY: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), QQ.C_BLOCK_COMMENT_MODE, QQ.C_LINE_COMMENT_MODE]
        },
        WQ = [QQ.APOS_STRING_MODE, QQ.QUOTE_STRING_MODE, pQ, cQ, CQ, SQ, {
          match: /\$\d+/
        }, MQ];
      GQ.contains = WQ.concat({
        mY: /\{/,
        end: /\}/,
        keywords: xQ,
        contains: ["self"].concat(WQ)
      });
      const RQ = [].concat(iQ, GQ.contains),
        OQ = RQ.concat([{
          mY: /(\s*)\(/,
          end: /\)/,
          keywords: xQ,
          contains: ["self"].concat(RQ)
        }]),
        sQ = {
          className: "params",
          mY: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: xQ,
          contains: OQ
        },
        rQ = {
          variants: [{
            match: [/class/, /\s+/, wQ, /\s+/, /extends/, /\s+/, FQ.concat(wQ, "(", FQ.concat(/\./, wQ), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, wQ],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        IQ = {
          relevance: 0,
          match: FQ.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...DQ, ...kQ]
          }
        },
        UQ = {
          variants: [{
            match: [/function/, /\s+/, wQ, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [sQ],
          illegal: /%/
        };
      const NQ = {
        match: FQ.concat(/\b/, (TQ = [...vQ, "super", "import"].map((QQ => `${QQ}\\s*\\(`)), FQ.concat("(?!", TQ.join("|"), ")")), wQ, FQ.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var TQ;
      const KQ = {
          mY: FQ.concat(/\./, FQ.lookahead(FQ.concat(wQ, /(?![0-9A-Za-z$_(])/))),
          end: wQ,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        zQ = {
          match: [/get|set/, /\s+/, wQ, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            mY: /\(\)/
          }, sQ]
        },
        lQ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + QQ.UNDERSCORE_IDENT_RE + ")\\s*=>",
        jQ = {
          match: [/const|var|let/, /\s+/, wQ, /\s*/, /=\s*/, /(async\s*)?/, FQ.lookahead(lQ)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [sQ]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: xQ,
        exports: {
          PARAMS_CONTAINS: OQ,
          CLASS_REFERENCE: IQ
        },
        illegal: /#(?![$_A-z])/,
        contains: [QQ.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          mY: /^\s*['"]use (strict|asm)['"]/
        }, QQ.APOS_STRING_MODE, QQ.QUOTE_STRING_MODE, pQ, cQ, CQ, SQ, iQ, {
          match: /\$\d+/
        }, MQ, IQ, {
          scope: "attr",
          match: wQ + FQ.lookahead(":"),
          relevance: 0
        }, jQ, {
          mY: "(" + QQ.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [iQ, QQ.REGEXP_MODE, {
            className: "function",
            mY: lQ,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                mY: QQ.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                mY: /\(\s*\)/,
                skip: !0
              }, {
                mY: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: xQ,
                contains: OQ
              }]
            }]
          }, {
            mY: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              mY: HQ,
              end: bQ
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              mY: YQ.mY,
              "on:begin": YQ.isTrulyOpeningTag,
              end: YQ.end
            }],
            subLanguage: "xml",
            contains: [{
              mY: YQ.mY,
              end: YQ.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, UQ, {
          beginKeywords: "while if switch catch for"
        }, {
          mY: "\\b(?!function)" + QQ.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [sQ, QQ.inherit(QQ.TITLE_MODE, {
            mY: wQ,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, KQ, {
          match: "\\$" + wQ,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [sQ]
        }, NQ, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, rQ, zQ, {
          match: /\$[(.]/
        }]
      }
    }

    function bQ(QQ) {
      const FQ = QQ.regex,
        wQ = HQ(QQ),
        DQ = LQ,
        kQ = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        vQ = {
          mY: [/namespace/, /\s+/, QQ.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        bQ = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: kQ
          },
          contains: [wQ.exports.CLASS_REFERENCE]
        },
        YQ = {
          $pattern: LQ,
          keyword: qQ.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: oQ,
          built_in: uQ.concat(kQ),
          "variable.language": mQ
        },
        xQ = {
          className: "meta",
          mY: "@" + DQ
        },
        AQ = (QQ, FQ, wQ) => {
          const LQ = QQ.contains.findIndex((QQ => QQ.label === FQ));
          if (-1 === LQ) throw new Error("can not find mode to replace");
          QQ.contains.splice(LQ, 1, wQ)
        };
      Object.assign(wQ.keywords, YQ), wQ.exports.PARAMS_CONTAINS.push(xQ);
      const tQ = wQ.contains.find((QQ => "attr" === QQ.scope)),
        eQ = Object.assign({}, tQ, {
          match: FQ.concat(DQ, FQ.lookahead(/\s*\?:/))
        });
      wQ.exports.PARAMS_CONTAINS.push([wQ.exports.CLASS_REFERENCE, tQ, eQ]), wQ.contains = wQ.contains.concat([xQ, vQ, bQ, eQ]), AQ(wQ, "shebang", QQ.SHEBANG()), AQ(wQ, "use_strict", {
        className: "meta",
        relevance: 10,
        mY: /^\s*['"]use strict['"]/
      });
      return wQ.contains.find((QQ => "func.def" === QQ.label)).relevance = 0, Object.assign(wQ, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), wQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);