export const id = 76;
export const ids = [76];
export const modules = {
  4217: TT => {
    function oT(TT) {
      return TT instanceof Map ? TT.clear = TT.delete = TT.set = function() {
        throw new Error("map is read-only")
      } : TT instanceof Set && (TT.add = TT.clear = TT.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(TT), Object.getOwnPropertyNames(TT).forEach((IT => {
        const iT = TT[IT],
          zT = typeof iT;
        "object" !== zT && "function" !== zT || Object.isFrozen(iT) || oT(iT)
      })), TT
    }
    class IT {
      constructor(TT) {
        void 0 === TT.data && (TT.data = {}), this.data = TT.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function iT(TT) {
      return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function zT(TT) {
      const oT = Object.create(null);
      for (const kT in TT) oT[kT] = TT[kT];
      for (var IT = arguments.length, iT = new Array(IT > 1 ? IT - 1 : 0), zT = 1; zT < IT; zT++) iT[zT - 1] = arguments[zT];
      return iT.forEach((function(TT) {
        for (const IT in TT) oT[IT] = TT[IT]
      })), oT
    }
    const kT = TT => !!TT.scope;
    class WT {
      constructor(TT, oT) {
        this.buffer = "", this.classPrefix = oT.classPrefix, TT.walk(this)
      }
      addText(TT) {
        this.buffer += iT(TT)
      }
      openNode(TT) {
        if (!kT(TT)) return;
        const oT = ((TT, oT) => {
          let {
            prefix: IT
          } = oT;
          if (TT.startsWith("language:")) return TT.replace("language:", "language-");
          if (TT.includes(".")) {
            const oT = TT.split(".");
            return [`${IT}${oT.shift()}`, ...oT.map(((TT, oT) => `${TT}${"_".repeat(oT+1)}`))].join(" ")
          }
          return `${IT}${TT}`
        })(TT.scope, {
          prefix: this.classPrefix
        });
        this.span(oT)
      }
      closeNode(TT) {
        kT(TT) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(TT) {
        this.buffer += `<span class="${TT}">`
      }
    }
    const XT = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const oT = {
        children: []
      };
      return Object.assign(oT, TT), oT
    };
    class BT {
      constructor() {
        this.Im = XT(), this.stack = [this.Im]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.Im
      }
      add(TT) {
        this.top.children.push(TT)
      }
      openNode(TT) {
        const oT = XT({
          scope: TT
        });
        this.add(oT), this.stack.push(oT)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.Im, null, 4)
      }
      walk(TT) {
        return this.constructor._walk(TT, this.Im)
      }
      static _walk(TT, oT) {
        return "string" === typeof oT ? TT.addText(oT) : oT.children && (TT.openNode(oT), oT.children.forEach((oT => this._walk(TT, oT))), TT.closeNode(oT)), TT
      }
      static _collapse(TT) {
        "string" !== typeof TT && TT.children && (TT.children.every((TT => "string" === typeof TT)) ? TT.children = [TT.children.join("")] : TT.children.forEach((TT => {
          BT._collapse(TT)
        })))
      }
    }
    class FT extends BT {
      constructor(TT) {
        super(), this.options = TT
      }
      addText(TT) {
        "" !== TT && this.add(TT)
      }
      startScope(TT) {
        this.openNode(TT)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(TT, oT) {
        const IT = TT.root;
        oT && (IT.scope = `language:${oT}`), this.add(IT)
      }
      toHTML() {
        return new WT(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function ST(TT) {
      return TT ? "string" === typeof TT ? TT : TT.source : null
    }

    function DT(TT) {
      return cT("(?=", TT, ")")
    }

    function LT(TT) {
      return cT("(?:", TT, ")*")
    }

    function xT(TT) {
      return cT("(?:", TT, ")?")
    }

    function cT() {
      for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
      return oT.map((TT => ST(TT))).join("")
    }

    function KT() {
      for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
      const iT = function(TT) {
        const oT = TT[TT.length - 1];
        return "object" === typeof oT && oT.constructor === Object ? (TT.splice(TT.length - 1, 1), oT) : {}
      }(oT);
      return "(" + (iT.capture ? "" : "?:") + oT.map((TT => ST(TT))).join("|") + ")"
    }

    function MT(TT) {
      return new RegExp(TT.toString() + "|").exec("").length - 1
    }
    const rT = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function AT(TT, oT) {
      let {
        joinWith: IT
      } = oT, iT = 0;
      return TT.map((TT => {
        iT += 1;
        const oT = iT;
        let IT = ST(TT),
          zT = "";
        for (; IT.length > 0;) {
          const TT = rT.exec(IT);
          if (!TT) {
            zT += IT;
            break
          }
          zT += IT.substring(0, TT.index), IT = IT.substring(TT.index + TT[0].length), "\\" === TT[0][0] && TT[1] ? zT += "\\" + String(Number(TT[1]) + oT) : (zT += TT[0], "(" === TT[0] && iT++)
        }
        return zT
      })).map((TT => `(${TT})`)).join(IT)
    }
    const gT = "[a-zA-Z]\\w*",
      hT = "[a-zA-Z_]\\w*",
      wT = "\\b\\d+(\\.\\d+)?",
      mT = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      eT = "\\b(0b[01]+)",
      RT = {
        hx: "\\\\[\\s\\S]",
        relevance: 0
      },
      uT = {
        scope: "string",
        hx: "'",
        end: "'",
        illegal: "\\n",
        contains: [RT]
      },
      vT = {
        scope: "string",
        hx: '"',
        end: '"',
        illegal: "\\n",
        contains: [RT]
      },
      ET = function(TT, oT) {
        const IT = zT({
          scope: "comment",
          hx: TT,
          end: oT,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        IT.contains.push({
          scope: "doctag",
          hx: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const iT = KT("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return IT.contains.push({
          hx: cT(/[ ]+/, "(", iT, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), IT
      },
      fT = ET("//", "$"),
      CT = ET("/\\*", "\\*/"),
      jT = ET("#", "$"),
      JT = {
        scope: "number",
        hx: wT,
        relevance: 0
      },
      UT = {
        scope: "number",
        hx: mT,
        relevance: 0
      },
      aT = {
        scope: "number",
        hx: eT,
        relevance: 0
      },
      YT = {
        scope: "regexp",
        hx: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [RT, {
          hx: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [RT]
        }]
      },
      QT = {
        scope: "title",
        hx: gT,
        relevance: 0
      },
      OT = {
        scope: "title",
        hx: hT,
        relevance: 0
      },
      HT = {
        hx: "\\.\\s*" + hT,
        relevance: 0
      };
    var nT = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: uT,
      BACKSLASH_ESCAPE: RT,
      BINARY_NUMBER_MODE: aT,
      BINARY_NUMBER_RE: eT,
      COMMENT: ET,
      C_BLOCK_COMMENT_MODE: CT,
      C_LINE_COMMENT_MODE: fT,
      C_NUMBER_MODE: UT,
      C_NUMBER_RE: mT,
      END_SAME_AS_BEGIN: function(TT) {
        return Object.assign(TT, {
          "on:begin": (TT, oT) => {
            oT.data._beginMatch = TT[1]
          },
          "on:end": (TT, oT) => {
            oT.data._beginMatch !== TT[1] && oT.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: jT,
      IDENT_RE: gT,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: HT,
      NUMBER_MODE: JT,
      NUMBER_RE: wT,
      PHRASAL_WORDS_MODE: {
        hx: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: vT,
      REGEXP_MODE: YT,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const oT = /^#![ ]*\//;
        return TT.binary && (TT.hx = cT(oT, /.*\b/, TT.binary, /\b.*/)), zT({
          scope: "meta",
          hx: oT,
          end: /$/,
          relevance: 0,
          "on:begin": (TT, oT) => {
            0 !== TT.index && oT.ignoreMatch()
          }
        }, TT)
      },
      TITLE_MODE: QT,
      UNDERSCORE_IDENT_RE: hT,
      UNDERSCORE_TITLE_MODE: OT
    });

    function qT(TT, oT) {
      "." === TT.input[TT.index - 1] && oT.ignoreMatch()
    }

    function ZT(TT, oT) {
      void 0 !== TT.className && (TT.scope = TT.className, delete TT.className)
    }

    function lT(TT, oT) {
      oT && TT.beginKeywords && (TT.hx = "\\b(" + TT.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", TT.__beforeBegin = qT, TT.keywords = TT.keywords || TT.beginKeywords, delete TT.beginKeywords, void 0 === TT.relevance && (TT.relevance = 0))
    }

    function sT(TT, oT) {
      Array.isArray(TT.illegal) && (TT.illegal = KT(...TT.illegal))
    }

    function tT(TT, oT) {
      if (TT.match) {
        if (TT.hx || TT.end) throw new Error("begin & end are not supported with match");
        TT.hx = TT.match, delete TT.match
      }
    }

    function GT(TT, oT) {
      void 0 === TT.relevance && (TT.relevance = 1)
    }
    const pT = (TT, oT) => {
        if (!TT.beforeMatch) return;
        if (TT.starts) throw new Error("beforeMatch cannot be used with starts");
        const IT = Object.assign({}, TT);
        Object.keys(TT).forEach((oT => {
          delete TT[oT]
        })), TT.keywords = IT.keywords, TT.hx = cT(IT.beforeMatch, DT(IT.hx)), TT.starts = {
          relevance: 0,
          contains: [Object.assign(IT, {
            endsParent: !0
          })]
        }, TT.relevance = 0, delete IT.beforeMatch
      },
      bT = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function yT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const iT = Object.create(null);
      return "string" === typeof TT ? zT(IT, TT.split(" ")) : Array.isArray(TT) ? zT(IT, TT) : Object.keys(TT).forEach((function(IT) {
        Object.assign(iT, yT(TT[IT], oT, IT))
      })), iT;

      function zT(TT, IT) {
        oT && (IT = IT.map((TT => TT.toLowerCase()))), IT.forEach((function(oT) {
          const IT = oT.split("|");
          iT[IT[0]] = [TT, NT(IT[0], IT[1])]
        }))
      }
    }

    function NT(TT, oT) {
      return oT ? Number(oT) : function(TT) {
        return bT.includes(TT.toLowerCase())
      }(TT) ? 0 : 1
    }
    const PT = {},
      dT = TT => {
        console.error(TT)
      },
      VT = function(TT) {
        for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
        console.log(`WARN: ${TT}`, ...IT)
      },
      To = (TT, oT) => {
        PT[`${TT}/${oT}`] || (console.log(`Deprecated as of ${TT}. ${oT}`), PT[`${TT}/${oT}`] = !0)
      },
      oo = new Error;

    function Io(TT, oT, IT) {
      let {
        key: iT
      } = IT, zT = 0;
      const kT = TT[iT],
        WT = {},
        XT = {};
      for (let BT = 1; BT <= oT.length; BT++) XT[BT + zT] = kT[BT], WT[BT + zT] = !0, zT += MT(oT[BT - 1]);
      TT[iT] = XT, TT[iT]._emit = WT, TT[iT]._multi = !0
    }

    function io(TT) {
      ! function(TT) {
        TT.scope && "object" === typeof TT.scope && null !== TT.scope && (TT.beginScope = TT.scope, delete TT.scope)
      }(TT), "string" === typeof TT.beginScope && (TT.beginScope = {
          _wrap: TT.beginScope
        }), "string" === typeof TT.endScope && (TT.endScope = {
          _wrap: TT.endScope
        }),
        function(TT) {
          if (Array.isArray(TT.hx)) {
            if (TT.skip || TT.excludeBegin || TT.returnBegin) throw dT("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), oo;
            if ("object" !== typeof TT.beginScope || null === TT.beginScope) throw dT("beginScope must be object"), oo;
            Io(TT, TT.hx, {
              key: "beginScope"
            }), TT.hx = AT(TT.hx, {
              joinWith: ""
            })
          }
        }(TT),
        function(TT) {
          if (Array.isArray(TT.end)) {
            if (TT.skip || TT.excludeEnd || TT.returnEnd) throw dT("skip, excludeEnd, returnEnd not compatible with endScope: {}"), oo;
            if ("object" !== typeof TT.endScope || null === TT.endScope) throw dT("endScope must be object"), oo;
            Io(TT, TT.end, {
              key: "endScope"
            }), TT.end = AT(TT.end, {
              joinWith: ""
            })
          }
        }(TT)
    }

    function zo(TT) {
      function oT(oT, IT) {
        return new RegExp(ST(oT), "m" + (TT.case_insensitive ? "i" : "") + (TT.unicodeRegex ? "u" : "") + (IT ? "g" : ""))
      }
      class IT {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(TT, oT) {
          oT.position = this.position++, this.matchIndexes[this.matchAt] = oT, this.regexes.push([oT, TT]), this.matchAt += MT(TT) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const TT = this.regexes.map((TT => TT[1]));
          this.matcherRe = oT(AT(TT, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(TT) {
          this.matcherRe.lastIndex = this.lastIndex;
          const oT = this.matcherRe.exec(TT);
          if (!oT) return null;
          const IT = oT.findIndex(((TT, oT) => oT > 0 && void 0 !== TT)),
            iT = this.matchIndexes[IT];
          return oT.splice(0, IT), Object.assign(oT, iT)
        }
      }
      class iT {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(TT) {
          if (this.multiRegexes[TT]) return this.multiRegexes[TT];
          const oT = new IT;
          return this.rules.slice(TT).forEach((TT => {
            let [IT, iT] = TT;
            return oT.addRule(IT, iT)
          })), oT.compile(), this.multiRegexes[TT] = oT, oT
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(TT, oT) {
          this.rules.push([TT, oT]), "hx" === oT.type && this.count++
        }
        exec(TT) {
          const oT = this.getMatcher(this.regexIndex);
          oT.lastIndex = this.lastIndex;
          let IT = oT.exec(TT);
          if (this.resumingScanAtSamePosition())
            if (IT && IT.index === this.lastIndex);
            else {
              const oT = this.getMatcher(0);
              oT.lastIndex = this.lastIndex + 1, IT = oT.exec(TT)
            } return IT && (this.regexIndex += IT.position + 1, this.regexIndex === this.count && this.considerAll()), IT
        }
      }
      if (TT.compilerExtensions || (TT.compilerExtensions = []), TT.contains && TT.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return TT.classNameAliases = zT(TT.classNameAliases || {}),
        function IT(kT, WT) {
          const XT = kT;
          if (kT.isCompiled) return XT;
          [ZT, tT, io, pT].forEach((TT => TT(kT, WT))), TT.compilerExtensions.forEach((TT => TT(kT, WT))), kT.__beforeBegin = null, [lT, sT, GT].forEach((TT => TT(kT, WT))), kT.isCompiled = !0;
          let BT = null;
          return "object" === typeof kT.keywords && kT.keywords.$pattern && (kT.keywords = Object.assign({}, kT.keywords), BT = kT.keywords.$pattern, delete kT.keywords.$pattern), BT = BT || /\w+/, kT.keywords && (kT.keywords = yT(kT.keywords, TT.case_insensitive)), XT.keywordPatternRe = oT(BT, !0), WT && (kT.hx || (kT.hx = /\B|\b/), XT.beginRe = oT(XT.hx), kT.end || kT.endsWithParent || (kT.end = /\B|\b/), kT.end && (XT.endRe = oT(XT.end)), XT.terminatorEnd = ST(XT.end) || "", kT.endsWithParent && WT.terminatorEnd && (XT.terminatorEnd += (kT.end ? "|" : "") + WT.terminatorEnd)), kT.illegal && (XT.illegalRe = oT(kT.illegal)), kT.contains || (kT.contains = []), kT.contains = [].concat(...kT.contains.map((function(TT) {
            return function(TT) {
              TT.variants && !TT.cachedVariants && (TT.cachedVariants = TT.variants.map((function(oT) {
                return zT(TT, {
                  variants: null
                }, oT)
              })));
              if (TT.cachedVariants) return TT.cachedVariants;
              if (ko(TT)) return zT(TT, {
                starts: TT.starts ? zT(TT.starts) : null
              });
              if (Object.isFrozen(TT)) return zT(TT);
              return TT
            }("self" === TT ? kT : TT)
          }))), kT.contains.forEach((function(TT) {
            IT(TT, XT)
          })), kT.starts && IT(kT.starts, WT), XT.matcher = function(TT) {
            const oT = new iT;
            return TT.contains.forEach((TT => oT.addRule(TT.hx, {
              rule: TT,
              type: "hx"
            }))), TT.terminatorEnd && oT.addRule(TT.terminatorEnd, {
              type: "end"
            }), TT.illegal && oT.addRule(TT.illegal, {
              type: "illegal"
            }), oT
          }(XT), XT
        }(TT)
    }

    function ko(TT) {
      return !!TT && (TT.endsWithParent || ko(TT.starts))
    }
    class Wo extends Error {
      constructor(TT, oT) {
        super(TT), this.name = "HTMLInjectionError", this.html = oT
      }
    }
    const Xo = iT,
      Bo = zT,
      Fo = Symbol("nomatch"),
      So = function(TT) {
        const iT = Object.create(null),
          zT = Object.create(null),
          kT = [];
        let WT = !0;
        const XT = "Could not find the language '{}', did you forget to load/include a language module?",
          BT = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let ST = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: FT
        };

        function MT(TT) {
          return ST.noHighlightRe.test(TT)
        }

        function rT(TT, oT, IT) {
          let iT = "",
            zT = "";
          "object" === typeof oT ? (iT = TT, IT = oT.ignoreIllegals, zT = oT.language) : (To("10.7.0", "highlight(lang, code, ...args) has been deprecated."), To("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), zT = TT, iT = oT), void 0 === IT && (IT = !0);
          const kT = {
            code: iT,
            language: zT
          };
          vT("before:highlight", kT);
          const WT = kT.result ? kT.result : AT(kT.language, kT.code, IT);
          return WT.code = kT.code, vT("after:highlight", WT), WT
        }

        function AT(TT, oT, zT, kT) {
          const BT = Object.create(null);

          function FT() {
            if (!vT.keywords) return void fT.addText(CT);
            let TT = 0;
            vT.keywordPatternRe.lastIndex = 0;
            let oT = vT.keywordPatternRe.exec(CT),
              IT = "";
            for (; oT;) {
              IT += CT.substring(TT, oT.index);
              const zT = mT.case_insensitive ? oT[0].toLowerCase() : oT[0],
                kT = (iT = zT, vT.keywords[iT]);
              if (kT) {
                const [TT, iT] = kT;
                if (fT.addText(IT), IT = "", BT[zT] = (BT[zT] || 0) + 1, BT[zT] <= 7 && (jT += iT), TT.startsWith("_")) IT += oT[0];
                else {
                  const IT = mT.classNameAliases[TT] || TT;
                  LT(oT[0], IT)
                }
              } else IT += oT[0];
              TT = vT.keywordPatternRe.lastIndex, oT = vT.keywordPatternRe.exec(CT)
            }
            var iT;
            IT += CT.substring(TT), fT.addText(IT)
          }

          function DT() {
            null != vT.subLanguage ? function() {
              if ("" === CT) return;
              let TT = null;
              if ("string" === typeof vT.subLanguage) {
                if (!iT[vT.subLanguage]) return void fT.addText(CT);
                TT = AT(vT.subLanguage, CT, !0, ET[vT.subLanguage]), ET[vT.subLanguage] = TT._top
              } else TT = gT(CT, vT.subLanguage.length ? vT.subLanguage : null);
              vT.relevance > 0 && (jT += TT.relevance), fT.__addSublanguage(TT._emitter, TT.language)
            }() : FT(), CT = ""
          }

          function LT(TT, oT) {
            "" !== TT && (fT.startScope(oT), fT.addText(TT), fT.endScope())
          }

          function xT(TT, oT) {
            let IT = 1;
            const iT = oT.length - 1;
            for (; IT <= iT;) {
              if (!TT._emit[IT]) {
                IT++;
                continue
              }
              const iT = mT.classNameAliases[TT[IT]] || TT[IT],
                zT = oT[IT];
              iT ? LT(zT, iT) : (CT = zT, FT(), CT = ""), IT++
            }
          }

          function cT(TT, oT) {
            return TT.scope && "string" === typeof TT.scope && fT.openNode(mT.classNameAliases[TT.scope] || TT.scope), TT.beginScope && (TT.beginScope._wrap ? (LT(CT, mT.classNameAliases[TT.beginScope._wrap] || TT.beginScope._wrap), CT = "") : TT.beginScope._multi && (xT(TT.beginScope, oT), CT = "")), vT = Object.create(TT, {
              parent: {
                value: vT
              }
            }), vT
          }

          function KT(TT, oT, iT) {
            let zT = function(TT, oT) {
              const IT = TT && TT.exec(oT);
              return IT && 0 === IT.index
            }(TT.endRe, iT);
            if (zT) {
              if (TT["on:end"]) {
                const iT = new IT(TT);
                TT["on:end"](oT, iT), iT.isMatchIgnored && (zT = !1)
              }
              if (zT) {
                for (; TT.endsParent && TT.parent;) TT = TT.parent;
                return TT
              }
            }
            if (TT.endsWithParent) return KT(TT.parent, oT, iT)
          }

          function MT(TT) {
            return 0 === vT.matcher.regexIndex ? (CT += TT[0], 1) : (aT = !0, 0)
          }

          function rT(TT) {
            const IT = TT[0],
              iT = oT.substring(TT.index),
              zT = KT(vT, TT, iT);
            if (!zT) return Fo;
            const kT = vT;
            vT.endScope && vT.endScope._wrap ? (DT(), LT(IT, vT.endScope._wrap)) : vT.endScope && vT.endScope._multi ? (DT(), xT(vT.endScope, TT)) : kT.skip ? CT += IT : (kT.returnEnd || kT.excludeEnd || (CT += IT), DT(), kT.excludeEnd && (CT = IT));
            do {
              vT.scope && fT.closeNode(), vT.skip || vT.subLanguage || (jT += vT.relevance), vT = vT.parent
            } while (vT !== zT.parent);
            return zT.starts && cT(zT.starts, TT), kT.returnEnd ? 0 : IT.length
          }
          let hT = {};

          function wT(iT, kT) {
            const XT = kT && kT[0];
            if (CT += iT, null == XT) return DT(), 0;
            if ("hx" === hT.type && "end" === kT.type && hT.index === kT.index && "" === XT) {
              if (CT += oT.slice(kT.index, kT.index + 1), !WT) {
                const oT = new Error(`0 width match regex (${TT})`);
                throw oT.languageName = TT, oT.badRule = hT.rule, oT
              }
              return 1
            }
            if (hT = kT, "hx" === kT.type) return function(TT) {
              const oT = TT[0],
                iT = TT.rule,
                zT = new IT(iT),
                kT = [iT.__beforeBegin, iT["on:begin"]];
              for (const IT of kT)
                if (IT && (IT(TT, zT), zT.isMatchIgnored)) return MT(oT);
              return iT.skip ? CT += oT : (iT.excludeBegin && (CT += oT), DT(), iT.returnBegin || iT.excludeBegin || (CT = oT)), cT(iT, TT), iT.returnBegin ? 0 : oT.length
            }(kT);
            if ("illegal" === kT.type && !zT) {
              const TT = new Error('Illegal lexeme "' + XT + '" for mode "' + (vT.scope || "<unnamed>") + '"');
              throw TT.mode = vT, TT
            }
            if ("end" === kT.type) {
              const TT = rT(kT);
              if (TT !== Fo) return TT
            }
            if ("illegal" === kT.type && "" === XT) return CT += "\n", 1;
            if (UT > 1e5 && UT > 3 * kT.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return CT += XT, XT.length
          }
          const mT = eT(TT);
          if (!mT) throw dT(XT.replace("{}", TT)), new Error('Unknown language: "' + TT + '"');
          const RT = zo(mT);
          let uT = "",
            vT = kT || RT;
          const ET = {},
            fT = new ST.__emitter(ST);
          ! function() {
            const TT = [];
            for (let oT = vT; oT !== mT; oT = oT.parent) oT.scope && TT.unshift(oT.scope);
            TT.forEach((TT => fT.openNode(TT)))
          }();
          let CT = "",
            jT = 0,
            JT = 0,
            UT = 0,
            aT = !1;
          try {
            if (mT.__emitTokens) mT.__emitTokens(oT, fT);
            else {
              for (vT.matcher.considerAll();;) {
                UT++, aT ? aT = !1 : vT.matcher.considerAll(), vT.matcher.lastIndex = JT;
                const TT = vT.matcher.exec(oT);
                if (!TT) break;
                const IT = wT(oT.substring(JT, TT.index), TT);
                JT = TT.index + IT
              }
              wT(oT.substring(JT))
            }
            return fT.finalize(), uT = fT.toHTML(), {
              language: TT,
              value: uT,
              relevance: jT,
              illegal: !1,
              _emitter: fT,
              _top: vT
            }
          } catch (YT) {
            if (YT.message && YT.message.includes("Illegal")) return {
              language: TT,
              value: Xo(oT),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: YT.message,
                index: JT,
                context: oT.slice(JT - 100, JT + 100),
                mode: YT.mode,
                resultSoFar: uT
              },
              _emitter: fT
            };
            if (WT) return {
              language: TT,
              value: Xo(oT),
              illegal: !1,
              relevance: 0,
              errorRaised: YT,
              _emitter: fT,
              _top: vT
            };
            throw YT
          }
        }

        function gT(TT, oT) {
          oT = oT || ST.languages || Object.keys(iT);
          const IT = function(TT) {
              const oT = {
                value: Xo(TT),
                illegal: !1,
                relevance: 0,
                _top: BT,
                _emitter: new ST.__emitter(ST)
              };
              return oT._emitter.addText(TT), oT
            }(TT),
            zT = oT.filter(eT).filter(uT).map((oT => AT(oT, TT, !1)));
          zT.unshift(IT);
          const kT = zT.sort(((TT, oT) => {
              if (TT.relevance !== oT.relevance) return oT.relevance - TT.relevance;
              if (TT.language && oT.language) {
                if (eT(TT.language).supersetOf === oT.language) return 1;
                if (eT(oT.language).supersetOf === TT.language) return -1
              }
              return 0
            })),
            [WT, XT] = kT,
            FT = WT;
          return FT.secondBest = XT, FT
        }

        function hT(TT) {
          let oT = null;
          const IT = function(TT) {
            let oT = TT.className + " ";
            oT += TT.parentNode ? TT.parentNode.className : "";
            const IT = ST.languageDetectRe.exec(oT);
            if (IT) {
              const oT = eT(IT[1]);
              return oT || (VT(XT.replace("{}", IT[1])), VT("Falling back to no-highlight mode for this block.", TT)), oT ? IT[1] : "no-highlight"
            }
            return oT.split(/\s+/).find((TT => MT(TT) || eT(TT)))
          }(TT);
          if (MT(IT)) return;
          if (vT("before:highlightElement", {
              el: TT,
              language: IT
            }), TT.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", TT);
          if (TT.children.length > 0 && (ST.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(TT)), ST.throwUnescapedHTML)) {
            throw new Wo("One of your code blocks includes unescaped HTML.", TT.innerHTML)
          }
          oT = TT;
          const iT = oT.textContent,
            kT = IT ? rT(iT, {
              language: IT,
              ignoreIllegals: !0
            }) : gT(iT);
          TT.innerHTML = kT.value, TT.dataset.highlighted = "yes",
            function(TT, oT, IT) {
              const iT = oT && zT[oT] || IT;
              TT.classList.add("hljs"), TT.classList.add(`language-${iT}`)
            }(TT, IT, kT.language), TT.result = {
              language: kT.language,
              re: kT.relevance,
              relevance: kT.relevance
            }, kT.secondBest && (TT.secondBest = {
              language: kT.secondBest.language,
              relevance: kT.secondBest.relevance
            }), vT("after:highlightElement", {
              el: TT,
              result: kT,
              text: iT
            })
        }
        let wT = !1;

        function mT() {
          if ("loading" === document.readyState) return wT || window.addEventListener("DOMContentLoaded", (function() {
            mT()
          }), !1), void(wT = !0);
          document.querySelectorAll(ST.cssSelector).forEach(hT)
        }

        function eT(TT) {
          return TT = (TT || "").toLowerCase(), iT[TT] || iT[zT[TT]]
        }

        function RT(TT, oT) {
          let {
            languageName: IT
          } = oT;
          "string" === typeof TT && (TT = [TT]), TT.forEach((TT => {
            zT[TT.toLowerCase()] = IT
          }))
        }

        function uT(TT) {
          const oT = eT(TT);
          return oT && !oT.disableAutodetect
        }

        function vT(TT, oT) {
          const IT = TT;
          kT.forEach((function(TT) {
            TT[IT] && TT[IT](oT)
          }))
        }
        Object.assign(TT, {
          highlight: rT,
          highlightAuto: gT,
          highlightAll: mT,
          highlightElement: hT,
          highlightBlock: function(TT) {
            return To("10.7.0", "highlightBlock will be removed entirely in v12.0"), To("10.7.0", "Please use highlightElement now."), hT(TT)
          },
          configure: function(TT) {
            ST = Bo(ST, TT)
          },
          initHighlighting: () => {
            mT(), To("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            mT(), To("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(oT, IT) {
            let zT = null;
            try {
              zT = IT(TT)
            } catch (kT) {
              if (dT("Language definition for '{}' could not be registered.".replace("{}", oT)), !WT) throw kT;
              dT(kT), zT = BT
            }
            zT.name || (zT.name = oT), iT[oT] = zT, zT.rawDefinition = IT.bind(null, TT), zT.aliases && RT(zT.aliases, {
              languageName: oT
            })
          },
          unregisterLanguage: function(TT) {
            delete iT[TT];
            for (const oT of Object.keys(zT)) zT[oT] === TT && delete zT[oT]
          },
          listLanguages: function() {
            return Object.keys(iT)
          },
          getLanguage: eT,
          registerAliases: RT,
          autoDetection: uT,
          inherit: Bo,
          addPlugin: function(TT) {
            ! function(TT) {
              TT["before:highlightBlock"] && !TT["before:highlightElement"] && (TT["before:highlightElement"] = oT => {
                TT["before:highlightBlock"](Object.assign({
                  block: oT.el
                }, oT))
              }), TT["after:highlightBlock"] && !TT["after:highlightElement"] && (TT["after:highlightElement"] = oT => {
                TT["after:highlightBlock"](Object.assign({
                  block: oT.el
                }, oT))
              })
            }(TT), kT.push(TT)
          },
          removePlugin: function(TT) {
            const oT = kT.indexOf(TT); - 1 !== oT && kT.splice(oT, 1)
          }
        }), TT.debugMode = function() {
          WT = !1
        }, TT.safeMode = function() {
          WT = !0
        }, TT.versionString = "11.11.1", TT.regex = {
          concat: cT,
          lookahead: DT,
          either: KT,
          optional: xT,
          anyNumberOfTimes: LT
        };
        for (const IT in nT) "object" === typeof nT[IT] && oT(nT[IT]);
        return Object.assign(TT, nT), TT
      },
      Do = So({});
    Do.newInstance = () => So({}), TT.exports = Do, Do.HighlightJS = Do, Do.default = Do
  },
  4209: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    const iT = IT(4217)
  },
  4224: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => DT
    });
    const iT = "[A-Za-z$_][0-9A-Za-z$_]*",
      zT = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      kT = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      WT = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      XT = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      BT = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      FT = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      ST = [].concat(BT, WT, XT);

    function DT(TT) {
      const oT = TT.regex,
        IT = iT,
        DT = "<>",
        LT = "</>",
        xT = {
          hx: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (TT, oT) => {
            const IT = TT[0].length + TT.index,
              iT = TT.input[IT];
            if ("<" === iT || "," === iT) return void oT.ignoreMatch();
            let zT;
            ">" === iT && (((TT, oT) => {
              let {
                after: IT
              } = oT;
              const iT = "</" + TT[0].slice(1);
              return -1 !== TT.input.indexOf(iT, IT)
            })(TT, {
              after: IT
            }) || oT.ignoreMatch());
            const kT = TT.input.substring(IT);
            ((zT = kT.match(/^\s*=/)) || (zT = kT.match(/^\s+extends\s+/)) && 0 === zT.index) && oT.ignoreMatch()
          }
        },
        cT = {
          $pattern: iT,
          keyword: zT,
          literal: kT,
          built_in: ST,
          "variable.language": FT
        },
        KT = "[0-9](_?[0-9])*",
        MT = `\\.(${KT})`,
        rT = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        AT = {
          className: "number",
          variants: [{
            hx: `(\\b(${rT})((${MT})|\\.)?|(${MT}))[eE][+-]?(${KT})\\b`
          }, {
            hx: `\\b(${rT})\\b((${MT})\\b|\\.)?|(${MT})\\b`
          }, {
            hx: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            hx: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            hx: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            hx: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            hx: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        gT = {
          className: "subst",
          hx: "\\$\\{",
          end: "\\}",
          keywords: cT,
          contains: []
        },
        hT = {
          hx: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, gT],
            subLanguage: "xml"
          }
        },
        wT = {
          hx: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, gT],
            subLanguage: "css"
          }
        },
        mT = {
          hx: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, gT],
            subLanguage: "graphql"
          }
        },
        eT = {
          className: "string",
          hx: "`",
          end: "`",
          contains: [TT.BACKSLASH_ESCAPE, gT]
        },
        RT = {
          className: "comment",
          variants: [TT.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              hx: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                hx: "@[A-Za-z]+"
              }, {
                className: "type",
                hx: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                hx: IT + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                hx: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), TT.C_BLOCK_COMMENT_MODE, TT.C_LINE_COMMENT_MODE]
        },
        uT = [TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, hT, wT, mT, eT, {
          match: /\$\d+/
        }, AT];
      gT.contains = uT.concat({
        hx: /\{/,
        end: /\}/,
        keywords: cT,
        contains: ["self"].concat(uT)
      });
      const vT = [].concat(RT, gT.contains),
        ET = vT.concat([{
          hx: /(\s*)\(/,
          end: /\)/,
          keywords: cT,
          contains: ["self"].concat(vT)
        }]),
        fT = {
          className: "params",
          hx: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: cT,
          contains: ET
        },
        CT = {
          variants: [{
            match: [/class/, /\s+/, IT, /\s+/, /extends/, /\s+/, oT.concat(IT, "(", oT.concat(/\./, IT), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, IT],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        jT = {
          relevance: 0,
          match: oT.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...WT, ...XT]
          }
        },
        JT = {
          variants: [{
            match: [/function/, /\s+/, IT, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [fT],
          illegal: /%/
        };
      const UT = {
        match: oT.concat(/\b/, (aT = [...BT, "super", "import"].map((TT => `${TT}\\s*\\(`)), oT.concat("(?!", aT.join("|"), ")")), IT, oT.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var aT;
      const YT = {
          hx: oT.concat(/\./, oT.lookahead(oT.concat(IT, /(?![0-9A-Za-z$_(])/))),
          end: IT,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        QT = {
          match: [/get|set/, /\s+/, IT, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            hx: /\(\)/
          }, fT]
        },
        OT = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + TT.UNDERSCORE_IDENT_RE + ")\\s*=>",
        HT = {
          match: [/const|var|let/, /\s+/, IT, /\s*/, /=\s*/, /(async\s*)?/, oT.lookahead(OT)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [fT]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: cT,
        exports: {
          PARAMS_CONTAINS: ET,
          CLASS_REFERENCE: jT
        },
        illegal: /#(?![$_A-z])/,
        contains: [TT.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          hx: /^\s*['"]use (strict|asm)['"]/
        }, TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, hT, wT, mT, eT, RT, {
          match: /\$\d+/
        }, AT, jT, {
          scope: "attr",
          match: IT + oT.lookahead(":"),
          relevance: 0
        }, HT, {
          hx: "(" + TT.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [RT, TT.REGEXP_MODE, {
            className: "function",
            hx: OT,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                hx: TT.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                hx: /\(\s*\)/,
                skip: !0
              }, {
                hx: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: cT,
                contains: ET
              }]
            }]
          }, {
            hx: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              hx: DT,
              end: LT
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              hx: xT.hx,
              "on:begin": xT.isTrulyOpeningTag,
              end: xT.end
            }],
            subLanguage: "xml",
            contains: [{
              hx: xT.hx,
              end: xT.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, JT, {
          beginKeywords: "while if switch catch for"
        }, {
          hx: "\\b(?!function)" + TT.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [fT, TT.inherit(TT.TITLE_MODE, {
            hx: IT,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, YT, {
          match: "\\$" + IT,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [fT]
        }, UT, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, CT, QT, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4226: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => LT
    });
    const iT = "[A-Za-z$_][0-9A-Za-z$_]*",
      zT = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      kT = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      WT = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      XT = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      BT = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      FT = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      ST = [].concat(BT, WT, XT);

    function DT(TT) {
      const oT = TT.regex,
        IT = iT,
        DT = "<>",
        LT = "</>",
        xT = {
          hx: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (TT, oT) => {
            const IT = TT[0].length + TT.index,
              iT = TT.input[IT];
            if ("<" === iT || "," === iT) return void oT.ignoreMatch();
            let zT;
            ">" === iT && (((TT, oT) => {
              let {
                after: IT
              } = oT;
              const iT = "</" + TT[0].slice(1);
              return -1 !== TT.input.indexOf(iT, IT)
            })(TT, {
              after: IT
            }) || oT.ignoreMatch());
            const kT = TT.input.substring(IT);
            ((zT = kT.match(/^\s*=/)) || (zT = kT.match(/^\s+extends\s+/)) && 0 === zT.index) && oT.ignoreMatch()
          }
        },
        cT = {
          $pattern: iT,
          keyword: zT,
          literal: kT,
          built_in: ST,
          "variable.language": FT
        },
        KT = "[0-9](_?[0-9])*",
        MT = `\\.(${KT})`,
        rT = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        AT = {
          className: "number",
          variants: [{
            hx: `(\\b(${rT})((${MT})|\\.)?|(${MT}))[eE][+-]?(${KT})\\b`
          }, {
            hx: `\\b(${rT})\\b((${MT})\\b|\\.)?|(${MT})\\b`
          }, {
            hx: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            hx: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            hx: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            hx: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            hx: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        gT = {
          className: "subst",
          hx: "\\$\\{",
          end: "\\}",
          keywords: cT,
          contains: []
        },
        hT = {
          hx: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, gT],
            subLanguage: "xml"
          }
        },
        wT = {
          hx: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, gT],
            subLanguage: "css"
          }
        },
        mT = {
          hx: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, gT],
            subLanguage: "graphql"
          }
        },
        eT = {
          className: "string",
          hx: "`",
          end: "`",
          contains: [TT.BACKSLASH_ESCAPE, gT]
        },
        RT = {
          className: "comment",
          variants: [TT.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              hx: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                hx: "@[A-Za-z]+"
              }, {
                className: "type",
                hx: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                hx: IT + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                hx: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), TT.C_BLOCK_COMMENT_MODE, TT.C_LINE_COMMENT_MODE]
        },
        uT = [TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, hT, wT, mT, eT, {
          match: /\$\d+/
        }, AT];
      gT.contains = uT.concat({
        hx: /\{/,
        end: /\}/,
        keywords: cT,
        contains: ["self"].concat(uT)
      });
      const vT = [].concat(RT, gT.contains),
        ET = vT.concat([{
          hx: /(\s*)\(/,
          end: /\)/,
          keywords: cT,
          contains: ["self"].concat(vT)
        }]),
        fT = {
          className: "params",
          hx: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: cT,
          contains: ET
        },
        CT = {
          variants: [{
            match: [/class/, /\s+/, IT, /\s+/, /extends/, /\s+/, oT.concat(IT, "(", oT.concat(/\./, IT), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, IT],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        jT = {
          relevance: 0,
          match: oT.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...WT, ...XT]
          }
        },
        JT = {
          variants: [{
            match: [/function/, /\s+/, IT, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [fT],
          illegal: /%/
        };
      const UT = {
        match: oT.concat(/\b/, (aT = [...BT, "super", "import"].map((TT => `${TT}\\s*\\(`)), oT.concat("(?!", aT.join("|"), ")")), IT, oT.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var aT;
      const YT = {
          hx: oT.concat(/\./, oT.lookahead(oT.concat(IT, /(?![0-9A-Za-z$_(])/))),
          end: IT,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        QT = {
          match: [/get|set/, /\s+/, IT, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            hx: /\(\)/
          }, fT]
        },
        OT = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + TT.UNDERSCORE_IDENT_RE + ")\\s*=>",
        HT = {
          match: [/const|var|let/, /\s+/, IT, /\s*/, /=\s*/, /(async\s*)?/, oT.lookahead(OT)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [fT]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: cT,
        exports: {
          PARAMS_CONTAINS: ET,
          CLASS_REFERENCE: jT
        },
        illegal: /#(?![$_A-z])/,
        contains: [TT.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          hx: /^\s*['"]use (strict|asm)['"]/
        }, TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, hT, wT, mT, eT, RT, {
          match: /\$\d+/
        }, AT, jT, {
          scope: "attr",
          match: IT + oT.lookahead(":"),
          relevance: 0
        }, HT, {
          hx: "(" + TT.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [RT, TT.REGEXP_MODE, {
            className: "function",
            hx: OT,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                hx: TT.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                hx: /\(\s*\)/,
                skip: !0
              }, {
                hx: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: cT,
                contains: ET
              }]
            }]
          }, {
            hx: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              hx: DT,
              end: LT
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              hx: xT.hx,
              "on:begin": xT.isTrulyOpeningTag,
              end: xT.end
            }],
            subLanguage: "xml",
            contains: [{
              hx: xT.hx,
              end: xT.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, JT, {
          beginKeywords: "while if switch catch for"
        }, {
          hx: "\\b(?!function)" + TT.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [fT, TT.inherit(TT.TITLE_MODE, {
            hx: IT,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, YT, {
          match: "\\$" + IT,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [fT]
        }, UT, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, CT, QT, {
          match: /\$[(.]/
        }]
      }
    }

    function LT(TT) {
      const oT = TT.regex,
        IT = DT(TT),
        WT = iT,
        XT = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        BT = {
          hx: [/namespace/, /\s+/, TT.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        LT = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: XT
          },
          contains: [IT.exports.CLASS_REFERENCE]
        },
        xT = {
          $pattern: iT,
          keyword: zT.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: kT,
          built_in: ST.concat(XT),
          "variable.language": FT
        },
        cT = {
          className: "meta",
          hx: "@" + WT
        },
        KT = (TT, oT, IT) => {
          const iT = TT.contains.findIndex((TT => TT.label === oT));
          if (-1 === iT) throw new Error("can not find mode to replace");
          TT.contains.splice(iT, 1, IT)
        };
      Object.assign(IT.keywords, xT), IT.exports.PARAMS_CONTAINS.push(cT);
      const MT = IT.contains.find((TT => "attr" === TT.scope)),
        rT = Object.assign({}, MT, {
          match: oT.concat(WT, oT.lookahead(/\s*\?:/))
        });
      IT.exports.PARAMS_CONTAINS.push([IT.exports.CLASS_REFERENCE, MT, rT]), IT.contains = IT.contains.concat([cT, BT, LT, rT]), KT(IT, "shebang", TT.SHEBANG()), KT(IT, "use_strict", {
        className: "meta",
        relevance: 10,
        hx: /^\s*['"]use strict['"]/
      });
      return IT.contains.find((TT => "func.def" === TT.label)).relevance = 0, Object.assign(IT, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), IT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);