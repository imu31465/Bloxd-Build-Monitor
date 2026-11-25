export const id = 83;
export const ids = [83];
export const modules = {
  5042: QQ => {
    function WQ(QQ) {
      return QQ instanceof Map ? QQ.clear = QQ.delete = QQ.set = function() {
        throw new Error("map is read-only")
      } : QQ instanceof Set && (QQ.add = QQ.clear = QQ.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(QQ), Object.getOwnPropertyNames(QQ).forEach((XQ => {
        const wQ = QQ[XQ],
          qQ = typeof wQ;
        "object" !== qQ && "function" !== qQ || Object.isFrozen(wQ) || WQ(wQ)
      })), QQ
    }
    class XQ {
      constructor(QQ) {
        void 0 === QQ.data && (QQ.data = {}), this.data = QQ.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function wQ(QQ) {
      return QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function qQ(QQ) {
      const WQ = Object.create(null);
      for (const TQ in QQ) WQ[TQ] = QQ[TQ];
      for (var XQ = arguments.length, wQ = new Array(XQ > 1 ? XQ - 1 : 0), qQ = 1; qQ < XQ; qQ++) wQ[qQ - 1] = arguments[qQ];
      return wQ.forEach((function(QQ) {
        for (const XQ in QQ) WQ[XQ] = QQ[XQ]
      })), WQ
    }
    const TQ = QQ => !!QQ.scope;
    class zQ {
      constructor(QQ, WQ) {
        this.buffer = "", this.classPrefix = WQ.classPrefix, QQ.walk(this)
      }
      addText(QQ) {
        this.buffer += wQ(QQ)
      }
      openNode(QQ) {
        if (!TQ(QQ)) return;
        const WQ = ((QQ, WQ) => {
          let {
            prefix: XQ
          } = WQ;
          if (QQ.startsWith("language:")) return QQ.replace("language:", "language-");
          if (QQ.includes(".")) {
            const WQ = QQ.split(".");
            return [`${XQ}${WQ.shift()}`, ...WQ.map(((QQ, WQ) => `${QQ}${"_".repeat(WQ+1)}`))].join(" ")
          }
          return `${XQ}${QQ}`
        })(QQ.scope, {
          prefix: this.classPrefix
        });
        this.span(WQ)
      }
      closeNode(QQ) {
        TQ(QQ) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(QQ) {
        this.buffer += `<span class="${QQ}">`
      }
    }
    const sQ = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const WQ = {
        children: []
      };
      return Object.assign(WQ, QQ), WQ
    };
    class FQ {
      constructor() {
        this.oV = sQ(), this.stack = [this.oV]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.oV
      }
      add(QQ) {
        this.top.children.push(QQ)
      }
      openNode(QQ) {
        const WQ = sQ({
          scope: QQ
        });
        this.add(WQ), this.stack.push(WQ)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.oV, null, 4)
      }
      walk(QQ) {
        return this.constructor._walk(QQ, this.oV)
      }
      static _walk(QQ, WQ) {
        return "string" === typeof WQ ? QQ.addText(WQ) : WQ.children && (QQ.openNode(WQ), WQ.children.forEach((WQ => this._walk(QQ, WQ))), QQ.closeNode(WQ)), QQ
      }
      static _collapse(QQ) {
        "string" !== typeof QQ && QQ.children && (QQ.children.every((QQ => "string" === typeof QQ)) ? QQ.children = [QQ.children.join("")] : QQ.children.forEach((QQ => {
          FQ._collapse(QQ)
        })))
      }
    }
    class PQ extends FQ {
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
      __addSublanguage(QQ, WQ) {
        const XQ = QQ.root;
        WQ && (XQ.scope = `language:${WQ}`), this.add(XQ)
      }
      toHTML() {
        return new zQ(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function gQ(QQ) {
      return QQ ? "string" === typeof QQ ? QQ : QQ.source : null
    }

    function JQ(QQ) {
      return jQ("(?=", QQ, ")")
    }

    function rQ(QQ) {
      return jQ("(?:", QQ, ")*")
    }

    function IQ(QQ) {
      return jQ("(?:", QQ, ")?")
    }

    function jQ() {
      for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
      return WQ.map((QQ => gQ(QQ))).join("")
    }

    function BQ() {
      for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
      const wQ = function(QQ) {
        const WQ = QQ[QQ.length - 1];
        return "object" === typeof WQ && WQ.constructor === Object ? (QQ.splice(QQ.length - 1, 1), WQ) : {}
      }(WQ);
      return "(" + (wQ.capture ? "" : "?:") + WQ.map((QQ => gQ(QQ))).join("|") + ")"
    }

    function yQ(QQ) {
      return new RegExp(QQ.toString() + "|").exec("").length - 1
    }
    const VQ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function DQ(QQ, WQ) {
      let {
        joinWith: XQ
      } = WQ, wQ = 0;
      return QQ.map((QQ => {
        wQ += 1;
        const WQ = wQ;
        let XQ = gQ(QQ),
          qQ = "";
        for (; XQ.length > 0;) {
          const QQ = VQ.exec(XQ);
          if (!QQ) {
            qQ += XQ;
            break
          }
          qQ += XQ.substring(0, QQ.index), XQ = XQ.substring(QQ.index + QQ[0].length), "\\" === QQ[0][0] && QQ[1] ? qQ += "\\" + String(Number(QQ[1]) + WQ) : (qQ += QQ[0], "(" === QQ[0] && wQ++)
        }
        return qQ
      })).map((QQ => `(${QQ})`)).join(XQ)
    }
    const pQ = "[a-zA-Z]\\w*",
      GQ = "[a-zA-Z_]\\w*",
      UQ = "\\b\\d+(\\.\\d+)?",
      bQ = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      vQ = "\\b(0b[01]+)",
      dQ = {
        gI: "\\\\[\\s\\S]",
        relevance: 0
      },
      HQ = {
        scope: "string",
        gI: "'",
        end: "'",
        illegal: "\\n",
        contains: [dQ]
      },
      aQ = {
        scope: "string",
        gI: '"',
        end: '"',
        illegal: "\\n",
        contains: [dQ]
      },
      lQ = function(QQ, WQ) {
        const XQ = qQ({
          scope: "comment",
          gI: QQ,
          end: WQ,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        XQ.contains.push({
          scope: "doctag",
          gI: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const wQ = BQ("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return XQ.contains.push({
          gI: jQ(/[ ]+/, "(", wQ, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), XQ
      },
      hQ = lQ("//", "$"),
      iQ = lQ("/\\*", "\\*/"),
      cQ = lQ("#", "$"),
      AQ = {
        scope: "number",
        gI: UQ,
        relevance: 0
      },
      RQ = {
        scope: "number",
        gI: bQ,
        relevance: 0
      },
      EQ = {
        scope: "number",
        gI: vQ,
        relevance: 0
      },
      CQ = {
        scope: "regexp",
        gI: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [dQ, {
          gI: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [dQ]
        }]
      },
      uQ = {
        scope: "title",
        gI: pQ,
        relevance: 0
      },
      LQ = {
        scope: "title",
        gI: GQ,
        relevance: 0
      },
      kQ = {
        gI: "\\.\\s*" + GQ,
        relevance: 0
      };
    var fQ = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: HQ,
      BACKSLASH_ESCAPE: dQ,
      BINARY_NUMBER_MODE: EQ,
      BINARY_NUMBER_RE: vQ,
      COMMENT: lQ,
      C_BLOCK_COMMENT_MODE: iQ,
      C_LINE_COMMENT_MODE: hQ,
      C_NUMBER_MODE: RQ,
      C_NUMBER_RE: bQ,
      END_SAME_AS_BEGIN: function(QQ) {
        return Object.assign(QQ, {
          "on:begin": (QQ, WQ) => {
            WQ.data._beginMatch = QQ[1]
          },
          "on:end": (QQ, WQ) => {
            WQ.data._beginMatch !== QQ[1] && WQ.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: cQ,
      IDENT_RE: pQ,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: kQ,
      NUMBER_MODE: AQ,
      NUMBER_RE: UQ,
      PHRASAL_WORDS_MODE: {
        gI: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: aQ,
      REGEXP_MODE: CQ,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const WQ = /^#![ ]*\//;
        return QQ.binary && (QQ.gI = jQ(WQ, /.*\b/, QQ.binary, /\b.*/)), qQ({
          scope: "meta",
          gI: WQ,
          end: /$/,
          relevance: 0,
          "on:begin": (QQ, WQ) => {
            0 !== QQ.index && WQ.ignoreMatch()
          }
        }, QQ)
      },
      TITLE_MODE: uQ,
      UNDERSCORE_IDENT_RE: GQ,
      UNDERSCORE_TITLE_MODE: LQ
    });

    function SQ(QQ, WQ) {
      "." === QQ.input[QQ.index - 1] && WQ.ignoreMatch()
    }

    function tQ(QQ, WQ) {
      void 0 !== QQ.className && (QQ.scope = QQ.className, delete QQ.className)
    }

    function oQ(QQ, WQ) {
      WQ && QQ.beginKeywords && (QQ.gI = "\\b(" + QQ.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", QQ.__beforeBegin = SQ, QQ.keywords = QQ.keywords || QQ.beginKeywords, delete QQ.beginKeywords, void 0 === QQ.relevance && (QQ.relevance = 0))
    }

    function eQ(QQ, WQ) {
      Array.isArray(QQ.illegal) && (QQ.illegal = BQ(...QQ.illegal))
    }

    function nQ(QQ, WQ) {
      if (QQ.match) {
        if (QQ.gI || QQ.end) throw new Error("begin & end are not supported with match");
        QQ.gI = QQ.match, delete QQ.match
      }
    }

    function xQ(QQ, WQ) {
      void 0 === QQ.relevance && (QQ.relevance = 1)
    }
    const YQ = (QQ, WQ) => {
        if (!QQ.beforeMatch) return;
        if (QQ.starts) throw new Error("beforeMatch cannot be used with starts");
        const XQ = Object.assign({}, QQ);
        Object.keys(QQ).forEach((WQ => {
          delete QQ[WQ]
        })), QQ.keywords = XQ.keywords, QQ.gI = jQ(XQ.beforeMatch, JQ(XQ.gI)), QQ.starts = {
          relevance: 0,
          contains: [Object.assign(XQ, {
            endsParent: !0
          })]
        }, QQ.relevance = 0, delete XQ.beforeMatch
      },
      NQ = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function ZQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const wQ = Object.create(null);
      return "string" === typeof QQ ? qQ(XQ, QQ.split(" ")) : Array.isArray(QQ) ? qQ(XQ, QQ) : Object.keys(QQ).forEach((function(XQ) {
        Object.assign(wQ, ZQ(QQ[XQ], WQ, XQ))
      })), wQ;

      function qQ(QQ, XQ) {
        WQ && (XQ = XQ.map((QQ => QQ.toLowerCase()))), XQ.forEach((function(WQ) {
          const XQ = WQ.split("|");
          wQ[XQ[0]] = [QQ, OQ(XQ[0], XQ[1])]
        }))
      }
    }

    function OQ(QQ, WQ) {
      return WQ ? Number(WQ) : function(QQ) {
        return NQ.includes(QQ.toLowerCase())
      }(QQ) ? 0 : 1
    }
    const KQ = {},
      mQ = QQ => {
        console.error(QQ)
      },
      MQ = function(QQ) {
        for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
        console.log(`WARN: ${QQ}`, ...XQ)
      },
      QW = (QQ, WQ) => {
        KQ[`${QQ}/${WQ}`] || (console.log(`Deprecated as of ${QQ}. ${WQ}`), KQ[`${QQ}/${WQ}`] = !0)
      },
      WW = new Error;

    function XW(QQ, WQ, XQ) {
      let {
        key: wQ
      } = XQ, qQ = 0;
      const TQ = QQ[wQ],
        zQ = {},
        sQ = {};
      for (let FQ = 1; FQ <= WQ.length; FQ++) sQ[FQ + qQ] = TQ[FQ], zQ[FQ + qQ] = !0, qQ += yQ(WQ[FQ - 1]);
      QQ[wQ] = sQ, QQ[wQ]._emit = zQ, QQ[wQ]._multi = !0
    }

    function wW(QQ) {
      ! function(QQ) {
        QQ.scope && "object" === typeof QQ.scope && null !== QQ.scope && (QQ.beginScope = QQ.scope, delete QQ.scope)
      }(QQ), "string" === typeof QQ.beginScope && (QQ.beginScope = {
          _wrap: QQ.beginScope
        }), "string" === typeof QQ.endScope && (QQ.endScope = {
          _wrap: QQ.endScope
        }),
        function(QQ) {
          if (Array.isArray(QQ.gI)) {
            if (QQ.skip || QQ.excludeBegin || QQ.returnBegin) throw mQ("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), WW;
            if ("object" !== typeof QQ.beginScope || null === QQ.beginScope) throw mQ("beginScope must be object"), WW;
            XW(QQ, QQ.gI, {
              key: "beginScope"
            }), QQ.gI = DQ(QQ.gI, {
              joinWith: ""
            })
          }
        }(QQ),
        function(QQ) {
          if (Array.isArray(QQ.end)) {
            if (QQ.skip || QQ.excludeEnd || QQ.returnEnd) throw mQ("skip, excludeEnd, returnEnd not compatible with endScope: {}"), WW;
            if ("object" !== typeof QQ.endScope || null === QQ.endScope) throw mQ("endScope must be object"), WW;
            XW(QQ, QQ.end, {
              key: "endScope"
            }), QQ.end = DQ(QQ.end, {
              joinWith: ""
            })
          }
        }(QQ)
    }

    function qW(QQ) {
      function WQ(WQ, XQ) {
        return new RegExp(gQ(WQ), "m" + (QQ.case_insensitive ? "i" : "") + (QQ.unicodeRegex ? "u" : "") + (XQ ? "g" : ""))
      }
      class XQ {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(QQ, WQ) {
          WQ.position = this.position++, this.matchIndexes[this.matchAt] = WQ, this.regexes.push([WQ, QQ]), this.matchAt += yQ(QQ) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const QQ = this.regexes.map((QQ => QQ[1]));
          this.matcherRe = WQ(DQ(QQ, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(QQ) {
          this.matcherRe.lastIndex = this.lastIndex;
          const WQ = this.matcherRe.exec(QQ);
          if (!WQ) return null;
          const XQ = WQ.findIndex(((QQ, WQ) => WQ > 0 && void 0 !== QQ)),
            wQ = this.matchIndexes[XQ];
          return WQ.splice(0, XQ), Object.assign(WQ, wQ)
        }
      }
      class wQ {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(QQ) {
          if (this.multiRegexes[QQ]) return this.multiRegexes[QQ];
          const WQ = new XQ;
          return this.rules.slice(QQ).forEach((QQ => {
            let [XQ, wQ] = QQ;
            return WQ.addRule(XQ, wQ)
          })), WQ.compile(), this.multiRegexes[QQ] = WQ, WQ
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(QQ, WQ) {
          this.rules.push([QQ, WQ]), "gI" === WQ.type && this.count++
        }
        exec(QQ) {
          const WQ = this.getMatcher(this.regexIndex);
          WQ.lastIndex = this.lastIndex;
          let XQ = WQ.exec(QQ);
          if (this.resumingScanAtSamePosition())
            if (XQ && XQ.index === this.lastIndex);
            else {
              const WQ = this.getMatcher(0);
              WQ.lastIndex = this.lastIndex + 1, XQ = WQ.exec(QQ)
            } return XQ && (this.regexIndex += XQ.position + 1, this.regexIndex === this.count && this.considerAll()), XQ
        }
      }
      if (QQ.compilerExtensions || (QQ.compilerExtensions = []), QQ.contains && QQ.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return QQ.classNameAliases = qQ(QQ.classNameAliases || {}),
        function XQ(TQ, zQ) {
          const sQ = TQ;
          if (TQ.isCompiled) return sQ;
          [tQ, nQ, wW, YQ].forEach((QQ => QQ(TQ, zQ))), QQ.compilerExtensions.forEach((QQ => QQ(TQ, zQ))), TQ.__beforeBegin = null, [oQ, eQ, xQ].forEach((QQ => QQ(TQ, zQ))), TQ.isCompiled = !0;
          let FQ = null;
          return "object" === typeof TQ.keywords && TQ.keywords.$pattern && (TQ.keywords = Object.assign({}, TQ.keywords), FQ = TQ.keywords.$pattern, delete TQ.keywords.$pattern), FQ = FQ || /\w+/, TQ.keywords && (TQ.keywords = ZQ(TQ.keywords, QQ.case_insensitive)), sQ.keywordPatternRe = WQ(FQ, !0), zQ && (TQ.gI || (TQ.gI = /\B|\b/), sQ.beginRe = WQ(sQ.gI), TQ.end || TQ.endsWithParent || (TQ.end = /\B|\b/), TQ.end && (sQ.endRe = WQ(sQ.end)), sQ.terminatorEnd = gQ(sQ.end) || "", TQ.endsWithParent && zQ.terminatorEnd && (sQ.terminatorEnd += (TQ.end ? "|" : "") + zQ.terminatorEnd)), TQ.illegal && (sQ.illegalRe = WQ(TQ.illegal)), TQ.contains || (TQ.contains = []), TQ.contains = [].concat(...TQ.contains.map((function(QQ) {
            return function(QQ) {
              QQ.variants && !QQ.cachedVariants && (QQ.cachedVariants = QQ.variants.map((function(WQ) {
                return qQ(QQ, {
                  variants: null
                }, WQ)
              })));
              if (QQ.cachedVariants) return QQ.cachedVariants;
              if (TW(QQ)) return qQ(QQ, {
                starts: QQ.starts ? qQ(QQ.starts) : null
              });
              if (Object.isFrozen(QQ)) return qQ(QQ);
              return QQ
            }("self" === QQ ? TQ : QQ)
          }))), TQ.contains.forEach((function(QQ) {
            XQ(QQ, sQ)
          })), TQ.starts && XQ(TQ.starts, zQ), sQ.matcher = function(QQ) {
            const WQ = new wQ;
            return QQ.contains.forEach((QQ => WQ.addRule(QQ.gI, {
              rule: QQ,
              type: "gI"
            }))), QQ.terminatorEnd && WQ.addRule(QQ.terminatorEnd, {
              type: "end"
            }), QQ.illegal && WQ.addRule(QQ.illegal, {
              type: "illegal"
            }), WQ
          }(sQ), sQ
        }(QQ)
    }

    function TW(QQ) {
      return !!QQ && (QQ.endsWithParent || TW(QQ.starts))
    }
    class zW extends Error {
      constructor(QQ, WQ) {
        super(QQ), this.name = "HTMLInjectionError", this.html = WQ
      }
    }
    const sW = wQ,
      FW = qQ,
      PW = Symbol("nomatch"),
      gW = function(QQ) {
        const wQ = Object.create(null),
          qQ = Object.create(null),
          TQ = [];
        let zQ = !0;
        const sQ = "Could not find the language '{}', did you forget to load/include a language module?",
          FQ = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let gQ = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: PQ
        };

        function yQ(QQ) {
          return gQ.noHighlightRe.test(QQ)
        }

        function VQ(QQ, WQ, XQ) {
          let wQ = "",
            qQ = "";
          "object" === typeof WQ ? (wQ = QQ, XQ = WQ.ignoreIllegals, qQ = WQ.language) : (QW("10.7.0", "highlight(lang, code, ...args) has been deprecated."), QW("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), qQ = QQ, wQ = WQ), void 0 === XQ && (XQ = !0);
          const TQ = {
            code: wQ,
            language: qQ
          };
          aQ("before:highlight", TQ);
          const zQ = TQ.result ? TQ.result : DQ(TQ.language, TQ.code, XQ);
          return zQ.code = TQ.code, aQ("after:highlight", zQ), zQ
        }

        function DQ(QQ, WQ, qQ, TQ) {
          const FQ = Object.create(null);

          function PQ() {
            if (!aQ.keywords) return void hQ.addText(iQ);
            let QQ = 0;
            aQ.keywordPatternRe.lastIndex = 0;
            let WQ = aQ.keywordPatternRe.exec(iQ),
              XQ = "";
            for (; WQ;) {
              XQ += iQ.substring(QQ, WQ.index);
              const qQ = bQ.case_insensitive ? WQ[0].toLowerCase() : WQ[0],
                TQ = (wQ = qQ, aQ.keywords[wQ]);
              if (TQ) {
                const [QQ, wQ] = TQ;
                if (hQ.addText(XQ), XQ = "", FQ[qQ] = (FQ[qQ] || 0) + 1, FQ[qQ] <= 7 && (cQ += wQ), QQ.startsWith("_")) XQ += WQ[0];
                else {
                  const XQ = bQ.classNameAliases[QQ] || QQ;
                  rQ(WQ[0], XQ)
                }
              } else XQ += WQ[0];
              QQ = aQ.keywordPatternRe.lastIndex, WQ = aQ.keywordPatternRe.exec(iQ)
            }
            var wQ;
            XQ += iQ.substring(QQ), hQ.addText(XQ)
          }

          function JQ() {
            null != aQ.subLanguage ? function() {
              if ("" === iQ) return;
              let QQ = null;
              if ("string" === typeof aQ.subLanguage) {
                if (!wQ[aQ.subLanguage]) return void hQ.addText(iQ);
                QQ = DQ(aQ.subLanguage, iQ, !0, lQ[aQ.subLanguage]), lQ[aQ.subLanguage] = QQ._top
              } else QQ = pQ(iQ, aQ.subLanguage.length ? aQ.subLanguage : null);
              aQ.relevance > 0 && (cQ += QQ.relevance), hQ.__addSublanguage(QQ._emitter, QQ.language)
            }() : PQ(), iQ = ""
          }

          function rQ(QQ, WQ) {
            "" !== QQ && (hQ.startScope(WQ), hQ.addText(QQ), hQ.endScope())
          }

          function IQ(QQ, WQ) {
            let XQ = 1;
            const wQ = WQ.length - 1;
            for (; XQ <= wQ;) {
              if (!QQ._emit[XQ]) {
                XQ++;
                continue
              }
              const wQ = bQ.classNameAliases[QQ[XQ]] || QQ[XQ],
                qQ = WQ[XQ];
              wQ ? rQ(qQ, wQ) : (iQ = qQ, PQ(), iQ = ""), XQ++
            }
          }

          function jQ(QQ, WQ) {
            return QQ.scope && "string" === typeof QQ.scope && hQ.openNode(bQ.classNameAliases[QQ.scope] || QQ.scope), QQ.beginScope && (QQ.beginScope._wrap ? (rQ(iQ, bQ.classNameAliases[QQ.beginScope._wrap] || QQ.beginScope._wrap), iQ = "") : QQ.beginScope._multi && (IQ(QQ.beginScope, WQ), iQ = "")), aQ = Object.create(QQ, {
              parent: {
                value: aQ
              }
            }), aQ
          }

          function BQ(QQ, WQ, wQ) {
            let qQ = function(QQ, WQ) {
              const XQ = QQ && QQ.exec(WQ);
              return XQ && 0 === XQ.index
            }(QQ.endRe, wQ);
            if (qQ) {
              if (QQ["on:end"]) {
                const wQ = new XQ(QQ);
                QQ["on:end"](WQ, wQ), wQ.isMatchIgnored && (qQ = !1)
              }
              if (qQ) {
                for (; QQ.endsParent && QQ.parent;) QQ = QQ.parent;
                return QQ
              }
            }
            if (QQ.endsWithParent) return BQ(QQ.parent, WQ, wQ)
          }

          function yQ(QQ) {
            return 0 === aQ.matcher.regexIndex ? (iQ += QQ[0], 1) : (EQ = !0, 0)
          }

          function VQ(QQ) {
            const XQ = QQ[0],
              wQ = WQ.substring(QQ.index),
              qQ = BQ(aQ, QQ, wQ);
            if (!qQ) return PW;
            const TQ = aQ;
            aQ.endScope && aQ.endScope._wrap ? (JQ(), rQ(XQ, aQ.endScope._wrap)) : aQ.endScope && aQ.endScope._multi ? (JQ(), IQ(aQ.endScope, QQ)) : TQ.skip ? iQ += XQ : (TQ.returnEnd || TQ.excludeEnd || (iQ += XQ), JQ(), TQ.excludeEnd && (iQ = XQ));
            do {
              aQ.scope && hQ.closeNode(), aQ.skip || aQ.subLanguage || (cQ += aQ.relevance), aQ = aQ.parent
            } while (aQ !== qQ.parent);
            return qQ.starts && jQ(qQ.starts, QQ), TQ.returnEnd ? 0 : XQ.length
          }
          let GQ = {};

          function UQ(wQ, TQ) {
            const sQ = TQ && TQ[0];
            if (iQ += wQ, null == sQ) return JQ(), 0;
            if ("gI" === GQ.type && "end" === TQ.type && GQ.index === TQ.index && "" === sQ) {
              if (iQ += WQ.slice(TQ.index, TQ.index + 1), !zQ) {
                const WQ = new Error(`0 width match regex (${QQ})`);
                throw WQ.languageName = QQ, WQ.badRule = GQ.rule, WQ
              }
              return 1
            }
            if (GQ = TQ, "gI" === TQ.type) return function(QQ) {
              const WQ = QQ[0],
                wQ = QQ.rule,
                qQ = new XQ(wQ),
                TQ = [wQ.__beforeBegin, wQ["on:begin"]];
              for (const XQ of TQ)
                if (XQ && (XQ(QQ, qQ), qQ.isMatchIgnored)) return yQ(WQ);
              return wQ.skip ? iQ += WQ : (wQ.excludeBegin && (iQ += WQ), JQ(), wQ.returnBegin || wQ.excludeBegin || (iQ = WQ)), jQ(wQ, QQ), wQ.returnBegin ? 0 : WQ.length
            }(TQ);
            if ("illegal" === TQ.type && !qQ) {
              const QQ = new Error('Illegal lexeme "' + sQ + '" for mode "' + (aQ.scope || "<unnamed>") + '"');
              throw QQ.mode = aQ, QQ
            }
            if ("end" === TQ.type) {
              const QQ = VQ(TQ);
              if (QQ !== PW) return QQ
            }
            if ("illegal" === TQ.type && "" === sQ) return iQ += "\n", 1;
            if (RQ > 1e5 && RQ > 3 * TQ.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return iQ += sQ, sQ.length
          }
          const bQ = vQ(QQ);
          if (!bQ) throw mQ(sQ.replace("{}", QQ)), new Error('Unknown language: "' + QQ + '"');
          const dQ = qW(bQ);
          let HQ = "",
            aQ = TQ || dQ;
          const lQ = {},
            hQ = new gQ.__emitter(gQ);
          ! function() {
            const QQ = [];
            for (let WQ = aQ; WQ !== bQ; WQ = WQ.parent) WQ.scope && QQ.unshift(WQ.scope);
            QQ.forEach((QQ => hQ.openNode(QQ)))
          }();
          let iQ = "",
            cQ = 0,
            AQ = 0,
            RQ = 0,
            EQ = !1;
          try {
            if (bQ.__emitTokens) bQ.__emitTokens(WQ, hQ);
            else {
              for (aQ.matcher.considerAll();;) {
                RQ++, EQ ? EQ = !1 : aQ.matcher.considerAll(), aQ.matcher.lastIndex = AQ;
                const QQ = aQ.matcher.exec(WQ);
                if (!QQ) break;
                const XQ = UQ(WQ.substring(AQ, QQ.index), QQ);
                AQ = QQ.index + XQ
              }
              UQ(WQ.substring(AQ))
            }
            return hQ.finalize(), HQ = hQ.toHTML(), {
              language: QQ,
              value: HQ,
              relevance: cQ,
              illegal: !1,
              _emitter: hQ,
              _top: aQ
            }
          } catch (CQ) {
            if (CQ.message && CQ.message.includes("Illegal")) return {
              language: QQ,
              value: sW(WQ),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: CQ.message,
                index: AQ,
                context: WQ.slice(AQ - 100, AQ + 100),
                mode: CQ.mode,
                resultSoFar: HQ
              },
              _emitter: hQ
            };
            if (zQ) return {
              language: QQ,
              value: sW(WQ),
              illegal: !1,
              relevance: 0,
              errorRaised: CQ,
              _emitter: hQ,
              _top: aQ
            };
            throw CQ
          }
        }

        function pQ(QQ, WQ) {
          WQ = WQ || gQ.languages || Object.keys(wQ);
          const XQ = function(QQ) {
              const WQ = {
                value: sW(QQ),
                illegal: !1,
                relevance: 0,
                _top: FQ,
                _emitter: new gQ.__emitter(gQ)
              };
              return WQ._emitter.addText(QQ), WQ
            }(QQ),
            qQ = WQ.filter(vQ).filter(HQ).map((WQ => DQ(WQ, QQ, !1)));
          qQ.unshift(XQ);
          const TQ = qQ.sort(((QQ, WQ) => {
              if (QQ.relevance !== WQ.relevance) return WQ.relevance - QQ.relevance;
              if (QQ.language && WQ.language) {
                if (vQ(QQ.language).supersetOf === WQ.language) return 1;
                if (vQ(WQ.language).supersetOf === QQ.language) return -1
              }
              return 0
            })),
            [zQ, sQ] = TQ,
            PQ = zQ;
          return PQ.secondBest = sQ, PQ
        }

        function GQ(QQ) {
          let WQ = null;
          const XQ = function(QQ) {
            let WQ = QQ.className + " ";
            WQ += QQ.parentNode ? QQ.parentNode.className : "";
            const XQ = gQ.languageDetectRe.exec(WQ);
            if (XQ) {
              const WQ = vQ(XQ[1]);
              return WQ || (MQ(sQ.replace("{}", XQ[1])), MQ("Falling back to no-highlight mode for this block.", QQ)), WQ ? XQ[1] : "no-highlight"
            }
            return WQ.split(/\s+/).find((QQ => yQ(QQ) || vQ(QQ)))
          }(QQ);
          if (yQ(XQ)) return;
          if (aQ("before:highlightElement", {
              el: QQ,
              language: XQ
            }), QQ.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", QQ);
          if (QQ.children.length > 0 && (gQ.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(QQ)), gQ.throwUnescapedHTML)) {
            throw new zW("One of your code blocks includes unescaped HTML.", QQ.innerHTML)
          }
          WQ = QQ;
          const wQ = WQ.textContent,
            TQ = XQ ? VQ(wQ, {
              language: XQ,
              ignoreIllegals: !0
            }) : pQ(wQ);
          QQ.innerHTML = TQ.value, QQ.dataset.highlighted = "yes",
            function(QQ, WQ, XQ) {
              const wQ = WQ && qQ[WQ] || XQ;
              QQ.classList.add("hljs"), QQ.classList.add(`language-${wQ}`)
            }(QQ, XQ, TQ.language), QQ.result = {
              language: TQ.language,
              re: TQ.relevance,
              relevance: TQ.relevance
            }, TQ.secondBest && (QQ.secondBest = {
              language: TQ.secondBest.language,
              relevance: TQ.secondBest.relevance
            }), aQ("after:highlightElement", {
              el: QQ,
              result: TQ,
              text: wQ
            })
        }
        let UQ = !1;

        function bQ() {
          if ("loading" === document.readyState) return UQ || window.addEventListener("DOMContentLoaded", (function() {
            bQ()
          }), !1), void(UQ = !0);
          document.querySelectorAll(gQ.cssSelector).forEach(GQ)
        }

        function vQ(QQ) {
          return QQ = (QQ || "").toLowerCase(), wQ[QQ] || wQ[qQ[QQ]]
        }

        function dQ(QQ, WQ) {
          let {
            languageName: XQ
          } = WQ;
          "string" === typeof QQ && (QQ = [QQ]), QQ.forEach((QQ => {
            qQ[QQ.toLowerCase()] = XQ
          }))
        }

        function HQ(QQ) {
          const WQ = vQ(QQ);
          return WQ && !WQ.disableAutodetect
        }

        function aQ(QQ, WQ) {
          const XQ = QQ;
          TQ.forEach((function(QQ) {
            QQ[XQ] && QQ[XQ](WQ)
          }))
        }
        Object.assign(QQ, {
          highlight: VQ,
          highlightAuto: pQ,
          highlightAll: bQ,
          highlightElement: GQ,
          highlightBlock: function(QQ) {
            return QW("10.7.0", "highlightBlock will be removed entirely in v12.0"), QW("10.7.0", "Please use highlightElement now."), GQ(QQ)
          },
          configure: function(QQ) {
            gQ = FW(gQ, QQ)
          },
          initHighlighting: () => {
            bQ(), QW("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            bQ(), QW("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(WQ, XQ) {
            let qQ = null;
            try {
              qQ = XQ(QQ)
            } catch (TQ) {
              if (mQ("Language definition for '{}' could not be registered.".replace("{}", WQ)), !zQ) throw TQ;
              mQ(TQ), qQ = FQ
            }
            qQ.name || (qQ.name = WQ), wQ[WQ] = qQ, qQ.rawDefinition = XQ.bind(null, QQ), qQ.aliases && dQ(qQ.aliases, {
              languageName: WQ
            })
          },
          unregisterLanguage: function(QQ) {
            delete wQ[QQ];
            for (const WQ of Object.keys(qQ)) qQ[WQ] === QQ && delete qQ[WQ]
          },
          listLanguages: function() {
            return Object.keys(wQ)
          },
          getLanguage: vQ,
          registerAliases: dQ,
          autoDetection: HQ,
          inherit: FW,
          addPlugin: function(QQ) {
            ! function(QQ) {
              QQ["before:highlightBlock"] && !QQ["before:highlightElement"] && (QQ["before:highlightElement"] = WQ => {
                QQ["before:highlightBlock"](Object.assign({
                  block: WQ.el
                }, WQ))
              }), QQ["after:highlightBlock"] && !QQ["after:highlightElement"] && (QQ["after:highlightElement"] = WQ => {
                QQ["after:highlightBlock"](Object.assign({
                  block: WQ.el
                }, WQ))
              })
            }(QQ), TQ.push(QQ)
          },
          removePlugin: function(QQ) {
            const WQ = TQ.indexOf(QQ); - 1 !== WQ && TQ.splice(WQ, 1)
          }
        }), QQ.debugMode = function() {
          zQ = !1
        }, QQ.safeMode = function() {
          zQ = !0
        }, QQ.versionString = "11.11.1", QQ.regex = {
          concat: jQ,
          lookahead: JQ,
          either: BQ,
          optional: IQ,
          anyNumberOfTimes: rQ
        };
        for (const XQ in fQ) "object" === typeof fQ[XQ] && WQ(fQ[XQ]);
        return Object.assign(QQ, fQ), QQ
      },
      JW = gW({});
    JW.newInstance = () => gW({}), QQ.exports = JW, JW.HighlightJS = JW, JW.default = JW
  },
  5036: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    const wQ = XQ(5042)
  },
  5049: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ
    });
    const wQ = "[A-Za-z$_][0-9A-Za-z$_]*",
      qQ = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      TQ = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      zQ = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      sQ = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      FQ = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      PQ = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      gQ = [].concat(FQ, zQ, sQ);

    function JQ(QQ) {
      const WQ = QQ.regex,
        XQ = wQ,
        JQ = "<>",
        rQ = "</>",
        IQ = {
          gI: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (QQ, WQ) => {
            const XQ = QQ[0].length + QQ.index,
              wQ = QQ.input[XQ];
            if ("<" === wQ || "," === wQ) return void WQ.ignoreMatch();
            let qQ;
            ">" === wQ && (((QQ, WQ) => {
              let {
                after: XQ
              } = WQ;
              const wQ = "</" + QQ[0].slice(1);
              return -1 !== QQ.input.indexOf(wQ, XQ)
            })(QQ, {
              after: XQ
            }) || WQ.ignoreMatch());
            const TQ = QQ.input.substring(XQ);
            ((qQ = TQ.match(/^\s*=/)) || (qQ = TQ.match(/^\s+extends\s+/)) && 0 === qQ.index) && WQ.ignoreMatch()
          }
        },
        jQ = {
          $pattern: wQ,
          keyword: qQ,
          literal: TQ,
          built_in: gQ,
          "variable.language": PQ
        },
        BQ = "[0-9](_?[0-9])*",
        yQ = `\\.(${BQ})`,
        VQ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        DQ = {
          className: "number",
          variants: [{
            gI: `(\\b(${VQ})((${yQ})|\\.)?|(${yQ}))[eE][+-]?(${BQ})\\b`
          }, {
            gI: `\\b(${VQ})\\b((${yQ})\\b|\\.)?|(${yQ})\\b`
          }, {
            gI: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            gI: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            gI: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            gI: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            gI: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        pQ = {
          className: "subst",
          gI: "\\$\\{",
          end: "\\}",
          keywords: jQ,
          contains: []
        },
        GQ = {
          gI: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, pQ],
            subLanguage: "xml"
          }
        },
        UQ = {
          gI: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, pQ],
            subLanguage: "css"
          }
        },
        bQ = {
          gI: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, pQ],
            subLanguage: "graphql"
          }
        },
        vQ = {
          className: "string",
          gI: "`",
          end: "`",
          contains: [QQ.BACKSLASH_ESCAPE, pQ]
        },
        dQ = {
          className: "comment",
          variants: [QQ.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              gI: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                gI: "@[A-Za-z]+"
              }, {
                className: "type",
                gI: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                gI: XQ + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                gI: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), QQ.C_BLOCK_COMMENT_MODE, QQ.C_LINE_COMMENT_MODE]
        },
        HQ = [QQ.APOS_STRING_MODE, QQ.QUOTE_STRING_MODE, GQ, UQ, bQ, vQ, {
          match: /\$\d+/
        }, DQ];
      pQ.contains = HQ.concat({
        gI: /\{/,
        end: /\}/,
        keywords: jQ,
        contains: ["self"].concat(HQ)
      });
      const aQ = [].concat(dQ, pQ.contains),
        lQ = aQ.concat([{
          gI: /(\s*)\(/,
          end: /\)/,
          keywords: jQ,
          contains: ["self"].concat(aQ)
        }]),
        hQ = {
          className: "params",
          gI: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: jQ,
          contains: lQ
        },
        iQ = {
          variants: [{
            match: [/class/, /\s+/, XQ, /\s+/, /extends/, /\s+/, WQ.concat(XQ, "(", WQ.concat(/\./, XQ), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, XQ],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        cQ = {
          relevance: 0,
          match: WQ.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...zQ, ...sQ]
          }
        },
        AQ = {
          variants: [{
            match: [/function/, /\s+/, XQ, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [hQ],
          illegal: /%/
        };
      const RQ = {
        match: WQ.concat(/\b/, (EQ = [...FQ, "super", "import"].map((QQ => `${QQ}\\s*\\(`)), WQ.concat("(?!", EQ.join("|"), ")")), XQ, WQ.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var EQ;
      const CQ = {
          gI: WQ.concat(/\./, WQ.lookahead(WQ.concat(XQ, /(?![0-9A-Za-z$_(])/))),
          end: XQ,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        uQ = {
          match: [/get|set/, /\s+/, XQ, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            gI: /\(\)/
          }, hQ]
        },
        LQ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + QQ.UNDERSCORE_IDENT_RE + ")\\s*=>",
        kQ = {
          match: [/const|var|let/, /\s+/, XQ, /\s*/, /=\s*/, /(async\s*)?/, WQ.lookahead(LQ)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [hQ]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: jQ,
        exports: {
          PARAMS_CONTAINS: lQ,
          CLASS_REFERENCE: cQ
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
          gI: /^\s*['"]use (strict|asm)['"]/
        }, QQ.APOS_STRING_MODE, QQ.QUOTE_STRING_MODE, GQ, UQ, bQ, vQ, dQ, {
          match: /\$\d+/
        }, DQ, cQ, {
          scope: "attr",
          match: XQ + WQ.lookahead(":"),
          relevance: 0
        }, kQ, {
          gI: "(" + QQ.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [dQ, QQ.REGEXP_MODE, {
            className: "function",
            gI: LQ,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                gI: QQ.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                gI: /\(\s*\)/,
                skip: !0
              }, {
                gI: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: jQ,
                contains: lQ
              }]
            }]
          }, {
            gI: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              gI: JQ,
              end: rQ
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              gI: IQ.gI,
              "on:begin": IQ.isTrulyOpeningTag,
              end: IQ.end
            }],
            subLanguage: "xml",
            contains: [{
              gI: IQ.gI,
              end: IQ.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, AQ, {
          beginKeywords: "while if switch catch for"
        }, {
          gI: "\\b(?!function)" + QQ.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [hQ, QQ.inherit(QQ.TITLE_MODE, {
            gI: XQ,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, CQ, {
          match: "\\$" + XQ,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [hQ]
        }, RQ, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, iQ, uQ, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5057: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => rQ
    });
    const wQ = "[A-Za-z$_][0-9A-Za-z$_]*",
      qQ = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      TQ = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      zQ = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      sQ = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      FQ = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      PQ = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      gQ = [].concat(FQ, zQ, sQ);

    function JQ(QQ) {
      const WQ = QQ.regex,
        XQ = wQ,
        JQ = "<>",
        rQ = "</>",
        IQ = {
          gI: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (QQ, WQ) => {
            const XQ = QQ[0].length + QQ.index,
              wQ = QQ.input[XQ];
            if ("<" === wQ || "," === wQ) return void WQ.ignoreMatch();
            let qQ;
            ">" === wQ && (((QQ, WQ) => {
              let {
                after: XQ
              } = WQ;
              const wQ = "</" + QQ[0].slice(1);
              return -1 !== QQ.input.indexOf(wQ, XQ)
            })(QQ, {
              after: XQ
            }) || WQ.ignoreMatch());
            const TQ = QQ.input.substring(XQ);
            ((qQ = TQ.match(/^\s*=/)) || (qQ = TQ.match(/^\s+extends\s+/)) && 0 === qQ.index) && WQ.ignoreMatch()
          }
        },
        jQ = {
          $pattern: wQ,
          keyword: qQ,
          literal: TQ,
          built_in: gQ,
          "variable.language": PQ
        },
        BQ = "[0-9](_?[0-9])*",
        yQ = `\\.(${BQ})`,
        VQ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        DQ = {
          className: "number",
          variants: [{
            gI: `(\\b(${VQ})((${yQ})|\\.)?|(${yQ}))[eE][+-]?(${BQ})\\b`
          }, {
            gI: `\\b(${VQ})\\b((${yQ})\\b|\\.)?|(${yQ})\\b`
          }, {
            gI: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            gI: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            gI: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            gI: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            gI: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        pQ = {
          className: "subst",
          gI: "\\$\\{",
          end: "\\}",
          keywords: jQ,
          contains: []
        },
        GQ = {
          gI: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, pQ],
            subLanguage: "xml"
          }
        },
        UQ = {
          gI: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, pQ],
            subLanguage: "css"
          }
        },
        bQ = {
          gI: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [QQ.BACKSLASH_ESCAPE, pQ],
            subLanguage: "graphql"
          }
        },
        vQ = {
          className: "string",
          gI: "`",
          end: "`",
          contains: [QQ.BACKSLASH_ESCAPE, pQ]
        },
        dQ = {
          className: "comment",
          variants: [QQ.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              gI: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                gI: "@[A-Za-z]+"
              }, {
                className: "type",
                gI: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                gI: XQ + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                gI: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), QQ.C_BLOCK_COMMENT_MODE, QQ.C_LINE_COMMENT_MODE]
        },
        HQ = [QQ.APOS_STRING_MODE, QQ.QUOTE_STRING_MODE, GQ, UQ, bQ, vQ, {
          match: /\$\d+/
        }, DQ];
      pQ.contains = HQ.concat({
        gI: /\{/,
        end: /\}/,
        keywords: jQ,
        contains: ["self"].concat(HQ)
      });
      const aQ = [].concat(dQ, pQ.contains),
        lQ = aQ.concat([{
          gI: /(\s*)\(/,
          end: /\)/,
          keywords: jQ,
          contains: ["self"].concat(aQ)
        }]),
        hQ = {
          className: "params",
          gI: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: jQ,
          contains: lQ
        },
        iQ = {
          variants: [{
            match: [/class/, /\s+/, XQ, /\s+/, /extends/, /\s+/, WQ.concat(XQ, "(", WQ.concat(/\./, XQ), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, XQ],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        cQ = {
          relevance: 0,
          match: WQ.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...zQ, ...sQ]
          }
        },
        AQ = {
          variants: [{
            match: [/function/, /\s+/, XQ, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [hQ],
          illegal: /%/
        };
      const RQ = {
        match: WQ.concat(/\b/, (EQ = [...FQ, "super", "import"].map((QQ => `${QQ}\\s*\\(`)), WQ.concat("(?!", EQ.join("|"), ")")), XQ, WQ.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var EQ;
      const CQ = {
          gI: WQ.concat(/\./, WQ.lookahead(WQ.concat(XQ, /(?![0-9A-Za-z$_(])/))),
          end: XQ,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        uQ = {
          match: [/get|set/, /\s+/, XQ, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            gI: /\(\)/
          }, hQ]
        },
        LQ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + QQ.UNDERSCORE_IDENT_RE + ")\\s*=>",
        kQ = {
          match: [/const|var|let/, /\s+/, XQ, /\s*/, /=\s*/, /(async\s*)?/, WQ.lookahead(LQ)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [hQ]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: jQ,
        exports: {
          PARAMS_CONTAINS: lQ,
          CLASS_REFERENCE: cQ
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
          gI: /^\s*['"]use (strict|asm)['"]/
        }, QQ.APOS_STRING_MODE, QQ.QUOTE_STRING_MODE, GQ, UQ, bQ, vQ, dQ, {
          match: /\$\d+/
        }, DQ, cQ, {
          scope: "attr",
          match: XQ + WQ.lookahead(":"),
          relevance: 0
        }, kQ, {
          gI: "(" + QQ.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [dQ, QQ.REGEXP_MODE, {
            className: "function",
            gI: LQ,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                gI: QQ.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                gI: /\(\s*\)/,
                skip: !0
              }, {
                gI: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: jQ,
                contains: lQ
              }]
            }]
          }, {
            gI: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              gI: JQ,
              end: rQ
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              gI: IQ.gI,
              "on:begin": IQ.isTrulyOpeningTag,
              end: IQ.end
            }],
            subLanguage: "xml",
            contains: [{
              gI: IQ.gI,
              end: IQ.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, AQ, {
          beginKeywords: "while if switch catch for"
        }, {
          gI: "\\b(?!function)" + QQ.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [hQ, QQ.inherit(QQ.TITLE_MODE, {
            gI: XQ,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, CQ, {
          match: "\\$" + XQ,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [hQ]
        }, RQ, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, iQ, uQ, {
          match: /\$[(.]/
        }]
      }
    }

    function rQ(QQ) {
      const WQ = QQ.regex,
        XQ = JQ(QQ),
        zQ = wQ,
        sQ = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        FQ = {
          gI: [/namespace/, /\s+/, QQ.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        rQ = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: sQ
          },
          contains: [XQ.exports.CLASS_REFERENCE]
        },
        IQ = {
          $pattern: wQ,
          keyword: qQ.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: TQ,
          built_in: gQ.concat(sQ),
          "variable.language": PQ
        },
        jQ = {
          className: "meta",
          gI: "@" + zQ
        },
        BQ = (QQ, WQ, XQ) => {
          const wQ = QQ.contains.findIndex((QQ => QQ.label === WQ));
          if (-1 === wQ) throw new Error("can not find mode to replace");
          QQ.contains.splice(wQ, 1, XQ)
        };
      Object.assign(XQ.keywords, IQ), XQ.exports.PARAMS_CONTAINS.push(jQ);
      const yQ = XQ.contains.find((QQ => "attr" === QQ.scope)),
        VQ = Object.assign({}, yQ, {
          match: WQ.concat(zQ, WQ.lookahead(/\s*\?:/))
        });
      XQ.exports.PARAMS_CONTAINS.push([XQ.exports.CLASS_REFERENCE, yQ, VQ]), XQ.contains = XQ.contains.concat([jQ, FQ, rQ, VQ]), BQ(XQ, "shebang", QQ.SHEBANG()), BQ(XQ, "use_strict", {
        className: "meta",
        relevance: 10,
        gI: /^\s*['"]use strict['"]/
      });
      return XQ.contains.find((QQ => "func.def" === QQ.label)).relevance = 0, Object.assign(XQ, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), XQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);