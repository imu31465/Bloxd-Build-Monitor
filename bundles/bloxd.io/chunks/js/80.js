export const id = 80;
export const ids = [80];
export const modules = {
  4816: TT => {
    function UT(TT) {
      return TT instanceof Map ? TT.clear = TT.delete = TT.set = function() {
        throw new Error("map is read-only")
      } : TT instanceof Set && (TT.add = TT.clear = TT.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(TT), Object.getOwnPropertyNames(TT).forEach((mT => {
        const WT = TT[mT],
          zT = typeof WT;
        "object" !== zT && "function" !== zT || Object.isFrozen(WT) || UT(WT)
      })), TT
    }
    class mT {
      constructor(TT) {
        void 0 === TT.data && (TT.data = {}), this.data = TT.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function WT(TT) {
      return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function zT(TT) {
      const UT = Object.create(null);
      for (const MT in TT) UT[MT] = TT[MT];
      for (var mT = arguments.length, WT = new Array(mT > 1 ? mT - 1 : 0), zT = 1; zT < mT; zT++) WT[zT - 1] = arguments[zT];
      return WT.forEach((function(TT) {
        for (const mT in TT) UT[mT] = TT[mT]
      })), UT
    }
    const MT = TT => !!TT.scope;
    class gT {
      constructor(TT, UT) {
        this.buffer = "", this.classPrefix = UT.classPrefix, TT.walk(this)
      }
      addText(TT) {
        this.buffer += WT(TT)
      }
      openNode(TT) {
        if (!MT(TT)) return;
        const UT = ((TT, UT) => {
          let {
            prefix: mT
          } = UT;
          if (TT.startsWith("language:")) return TT.replace("language:", "language-");
          if (TT.includes(".")) {
            const UT = TT.split(".");
            return [`${mT}${UT.shift()}`, ...UT.map(((TT, UT) => `${TT}${"_".repeat(UT+1)}`))].join(" ")
          }
          return `${mT}${TT}`
        })(TT.scope, {
          prefix: this.classPrefix
        });
        this.span(UT)
      }
      closeNode(TT) {
        MT(TT) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(TT) {
        this.buffer += `<span class="${TT}">`
      }
    }
    const nT = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const UT = {
        children: []
      };
      return Object.assign(UT, TT), UT
    };
    class HT {
      constructor() {
        this.oq = nT(), this.stack = [this.oq]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.oq
      }
      add(TT) {
        this.top.children.push(TT)
      }
      openNode(TT) {
        const UT = nT({
          scope: TT
        });
        this.add(UT), this.stack.push(UT)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.oq, null, 4)
      }
      walk(TT) {
        return this.constructor._walk(TT, this.oq)
      }
      static _walk(TT, UT) {
        return "string" === typeof UT ? TT.addText(UT) : UT.children && (TT.openNode(UT), UT.children.forEach((UT => this._walk(TT, UT))), TT.closeNode(UT)), TT
      }
      static _collapse(TT) {
        "string" !== typeof TT && TT.children && (TT.children.every((TT => "string" === typeof TT)) ? TT.children = [TT.children.join("")] : TT.children.forEach((TT => {
          HT._collapse(TT)
        })))
      }
    }
    class kT extends HT {
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
      __addSublanguage(TT, UT) {
        const mT = TT.root;
        UT && (mT.scope = `language:${UT}`), this.add(mT)
      }
      toHTML() {
        return new gT(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function jT(TT) {
      return TT ? "string" === typeof TT ? TT : TT.source : null
    }

    function lT(TT) {
      return BT("(?=", TT, ")")
    }

    function LT(TT) {
      return BT("(?:", TT, ")*")
    }

    function pT(TT) {
      return BT("(?:", TT, ")?")
    }

    function BT() {
      for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
      return UT.map((TT => jT(TT))).join("")
    }

    function ZT() {
      for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
      const WT = function(TT) {
        const UT = TT[TT.length - 1];
        return "object" === typeof UT && UT.constructor === Object ? (TT.splice(TT.length - 1, 1), UT) : {}
      }(UT);
      return "(" + (WT.capture ? "" : "?:") + UT.map((TT => jT(TT))).join("|") + ")"
    }

    function cT(TT) {
      return new RegExp(TT.toString() + "|").exec("").length - 1
    }
    const vT = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function fT(TT, UT) {
      let {
        joinWith: mT
      } = UT, WT = 0;
      return TT.map((TT => {
        WT += 1;
        const UT = WT;
        let mT = jT(TT),
          zT = "";
        for (; mT.length > 0;) {
          const TT = vT.exec(mT);
          if (!TT) {
            zT += mT;
            break
          }
          zT += mT.substring(0, TT.index), mT = mT.substring(TT.index + TT[0].length), "\\" === TT[0][0] && TT[1] ? zT += "\\" + String(Number(TT[1]) + UT) : (zT += TT[0], "(" === TT[0] && WT++)
        }
        return zT
      })).map((TT => `(${TT})`)).join(mT)
    }
    const qT = "[a-zA-Z]\\w*",
      iT = "[a-zA-Z_]\\w*",
      bT = "\\b\\d+(\\.\\d+)?",
      OT = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      eT = "\\b(0b[01]+)",
      YT = {
        np: "\\\\[\\s\\S]",
        relevance: 0
      },
      JT = {
        scope: "string",
        np: "'",
        end: "'",
        illegal: "\\n",
        contains: [YT]
      },
      xT = {
        scope: "string",
        np: '"',
        end: '"',
        illegal: "\\n",
        contains: [YT]
      },
      dT = function(TT, UT) {
        const mT = zT({
          scope: "comment",
          np: TT,
          end: UT,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        mT.contains.push({
          scope: "doctag",
          np: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const WT = ZT("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return mT.contains.push({
          np: BT(/[ ]+/, "(", WT, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), mT
      },
      wT = dT("//", "$"),
      tT = dT("/\\*", "\\*/"),
      aT = dT("#", "$"),
      yT = {
        scope: "number",
        np: bT,
        relevance: 0
      },
      XT = {
        scope: "number",
        np: OT,
        relevance: 0
      },
      IT = {
        scope: "number",
        np: eT,
        relevance: 0
      },
      QT = {
        scope: "regexp",
        np: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [YT, {
          np: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [YT]
        }]
      },
      sT = {
        scope: "title",
        np: qT,
        relevance: 0
      },
      FT = {
        scope: "title",
        np: iT,
        relevance: 0
      },
      PT = {
        np: "\\.\\s*" + iT,
        relevance: 0
      };
    var VT = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: JT,
      BACKSLASH_ESCAPE: YT,
      BINARY_NUMBER_MODE: IT,
      BINARY_NUMBER_RE: eT,
      COMMENT: dT,
      C_BLOCK_COMMENT_MODE: tT,
      C_LINE_COMMENT_MODE: wT,
      C_NUMBER_MODE: XT,
      C_NUMBER_RE: OT,
      END_SAME_AS_BEGIN: function(TT) {
        return Object.assign(TT, {
          "on:begin": (TT, UT) => {
            UT.data._beginMatch = TT[1]
          },
          "on:end": (TT, UT) => {
            UT.data._beginMatch !== TT[1] && UT.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: aT,
      IDENT_RE: qT,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: PT,
      NUMBER_MODE: yT,
      NUMBER_RE: bT,
      PHRASAL_WORDS_MODE: {
        np: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: xT,
      REGEXP_MODE: QT,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const UT = /^#![ ]*\//;
        return TT.binary && (TT.np = BT(UT, /.*\b/, TT.binary, /\b.*/)), zT({
          scope: "meta",
          np: UT,
          end: /$/,
          relevance: 0,
          "on:begin": (TT, UT) => {
            0 !== TT.index && UT.ignoreMatch()
          }
        }, TT)
      },
      TITLE_MODE: sT,
      UNDERSCORE_IDENT_RE: iT,
      UNDERSCORE_TITLE_MODE: FT
    });

    function uT(TT, UT) {
      "." === TT.input[TT.index - 1] && UT.ignoreMatch()
    }

    function CT(TT, UT) {
      void 0 !== TT.className && (TT.scope = TT.className, delete TT.className)
    }

    function rT(TT, UT) {
      UT && TT.beginKeywords && (TT.np = "\\b(" + TT.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", TT.__beforeBegin = uT, TT.keywords = TT.keywords || TT.beginKeywords, delete TT.beginKeywords, void 0 === TT.relevance && (TT.relevance = 0))
    }

    function KT(TT, UT) {
      Array.isArray(TT.illegal) && (TT.illegal = ZT(...TT.illegal))
    }

    function ST(TT, UT) {
      if (TT.match) {
        if (TT.np || TT.end) throw new Error("begin & end are not supported with match");
        TT.np = TT.match, delete TT.match
      }
    }

    function GT(TT, UT) {
      void 0 === TT.relevance && (TT.relevance = 1)
    }
    const NT = (TT, UT) => {
        if (!TT.beforeMatch) return;
        if (TT.starts) throw new Error("beforeMatch cannot be used with starts");
        const mT = Object.assign({}, TT);
        Object.keys(TT).forEach((UT => {
          delete TT[UT]
        })), TT.keywords = mT.keywords, TT.np = BT(mT.beforeMatch, lT(mT.np)), TT.starts = {
          relevance: 0,
          contains: [Object.assign(mT, {
            endsParent: !0
          })]
        }, TT.relevance = 0, delete mT.beforeMatch
      },
      ET = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function hT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const WT = Object.create(null);
      return "string" === typeof TT ? zT(mT, TT.split(" ")) : Array.isArray(TT) ? zT(mT, TT) : Object.keys(TT).forEach((function(mT) {
        Object.assign(WT, hT(TT[mT], UT, mT))
      })), WT;

      function zT(TT, mT) {
        UT && (mT = mT.map((TT => TT.toLowerCase()))), mT.forEach((function(UT) {
          const mT = UT.split("|");
          WT[mT[0]] = [TT, DT(mT[0], mT[1])]
        }))
      }
    }

    function DT(TT, UT) {
      return UT ? Number(UT) : function(TT) {
        return ET.includes(TT.toLowerCase())
      }(TT) ? 0 : 1
    }
    const oT = {},
      AT = TT => {
        console.error(TT)
      },
      RT = function(TT) {
        for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
        console.log(`WARN: ${TT}`, ...mT)
      },
      TU = (TT, UT) => {
        oT[`${TT}/${UT}`] || (console.log(`Deprecated as of ${TT}. ${UT}`), oT[`${TT}/${UT}`] = !0)
      },
      UU = new Error;

    function mU(TT, UT, mT) {
      let {
        key: WT
      } = mT, zT = 0;
      const MT = TT[WT],
        gT = {},
        nT = {};
      for (let HT = 1; HT <= UT.length; HT++) nT[HT + zT] = MT[HT], gT[HT + zT] = !0, zT += cT(UT[HT - 1]);
      TT[WT] = nT, TT[WT]._emit = gT, TT[WT]._multi = !0
    }

    function WU(TT) {
      ! function(TT) {
        TT.scope && "object" === typeof TT.scope && null !== TT.scope && (TT.beginScope = TT.scope, delete TT.scope)
      }(TT), "string" === typeof TT.beginScope && (TT.beginScope = {
          _wrap: TT.beginScope
        }), "string" === typeof TT.endScope && (TT.endScope = {
          _wrap: TT.endScope
        }),
        function(TT) {
          if (Array.isArray(TT.np)) {
            if (TT.skip || TT.excludeBegin || TT.returnBegin) throw AT("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), UU;
            if ("object" !== typeof TT.beginScope || null === TT.beginScope) throw AT("beginScope must be object"), UU;
            mU(TT, TT.np, {
              key: "beginScope"
            }), TT.np = fT(TT.np, {
              joinWith: ""
            })
          }
        }(TT),
        function(TT) {
          if (Array.isArray(TT.end)) {
            if (TT.skip || TT.excludeEnd || TT.returnEnd) throw AT("skip, excludeEnd, returnEnd not compatible with endScope: {}"), UU;
            if ("object" !== typeof TT.endScope || null === TT.endScope) throw AT("endScope must be object"), UU;
            mU(TT, TT.end, {
              key: "endScope"
            }), TT.end = fT(TT.end, {
              joinWith: ""
            })
          }
        }(TT)
    }

    function zU(TT) {
      function UT(UT, mT) {
        return new RegExp(jT(UT), "m" + (TT.case_insensitive ? "i" : "") + (TT.unicodeRegex ? "u" : "") + (mT ? "g" : ""))
      }
      class mT {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(TT, UT) {
          UT.position = this.position++, this.matchIndexes[this.matchAt] = UT, this.regexes.push([UT, TT]), this.matchAt += cT(TT) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const TT = this.regexes.map((TT => TT[1]));
          this.matcherRe = UT(fT(TT, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(TT) {
          this.matcherRe.lastIndex = this.lastIndex;
          const UT = this.matcherRe.exec(TT);
          if (!UT) return null;
          const mT = UT.findIndex(((TT, UT) => UT > 0 && void 0 !== TT)),
            WT = this.matchIndexes[mT];
          return UT.splice(0, mT), Object.assign(UT, WT)
        }
      }
      class WT {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(TT) {
          if (this.multiRegexes[TT]) return this.multiRegexes[TT];
          const UT = new mT;
          return this.rules.slice(TT).forEach((TT => {
            let [mT, WT] = TT;
            return UT.addRule(mT, WT)
          })), UT.compile(), this.multiRegexes[TT] = UT, UT
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(TT, UT) {
          this.rules.push([TT, UT]), "np" === UT.type && this.count++
        }
        exec(TT) {
          const UT = this.getMatcher(this.regexIndex);
          UT.lastIndex = this.lastIndex;
          let mT = UT.exec(TT);
          if (this.resumingScanAtSamePosition())
            if (mT && mT.index === this.lastIndex);
            else {
              const UT = this.getMatcher(0);
              UT.lastIndex = this.lastIndex + 1, mT = UT.exec(TT)
            } return mT && (this.regexIndex += mT.position + 1, this.regexIndex === this.count && this.considerAll()), mT
        }
      }
      if (TT.compilerExtensions || (TT.compilerExtensions = []), TT.contains && TT.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return TT.classNameAliases = zT(TT.classNameAliases || {}),
        function mT(MT, gT) {
          const nT = MT;
          if (MT.isCompiled) return nT;
          [CT, ST, WU, NT].forEach((TT => TT(MT, gT))), TT.compilerExtensions.forEach((TT => TT(MT, gT))), MT.__beforeBegin = null, [rT, KT, GT].forEach((TT => TT(MT, gT))), MT.isCompiled = !0;
          let HT = null;
          return "object" === typeof MT.keywords && MT.keywords.$pattern && (MT.keywords = Object.assign({}, MT.keywords), HT = MT.keywords.$pattern, delete MT.keywords.$pattern), HT = HT || /\w+/, MT.keywords && (MT.keywords = hT(MT.keywords, TT.case_insensitive)), nT.keywordPatternRe = UT(HT, !0), gT && (MT.np || (MT.np = /\B|\b/), nT.beginRe = UT(nT.np), MT.end || MT.endsWithParent || (MT.end = /\B|\b/), MT.end && (nT.endRe = UT(nT.end)), nT.terminatorEnd = jT(nT.end) || "", MT.endsWithParent && gT.terminatorEnd && (nT.terminatorEnd += (MT.end ? "|" : "") + gT.terminatorEnd)), MT.illegal && (nT.illegalRe = UT(MT.illegal)), MT.contains || (MT.contains = []), MT.contains = [].concat(...MT.contains.map((function(TT) {
            return function(TT) {
              TT.variants && !TT.cachedVariants && (TT.cachedVariants = TT.variants.map((function(UT) {
                return zT(TT, {
                  variants: null
                }, UT)
              })));
              if (TT.cachedVariants) return TT.cachedVariants;
              if (MU(TT)) return zT(TT, {
                starts: TT.starts ? zT(TT.starts) : null
              });
              if (Object.isFrozen(TT)) return zT(TT);
              return TT
            }("self" === TT ? MT : TT)
          }))), MT.contains.forEach((function(TT) {
            mT(TT, nT)
          })), MT.starts && mT(MT.starts, gT), nT.matcher = function(TT) {
            const UT = new WT;
            return TT.contains.forEach((TT => UT.addRule(TT.np, {
              rule: TT,
              type: "np"
            }))), TT.terminatorEnd && UT.addRule(TT.terminatorEnd, {
              type: "end"
            }), TT.illegal && UT.addRule(TT.illegal, {
              type: "illegal"
            }), UT
          }(nT), nT
        }(TT)
    }

    function MU(TT) {
      return !!TT && (TT.endsWithParent || MU(TT.starts))
    }
    class gU extends Error {
      constructor(TT, UT) {
        super(TT), this.name = "HTMLInjectionError", this.html = UT
      }
    }
    const nU = WT,
      HU = zT,
      kU = Symbol("nomatch"),
      jU = function(TT) {
        const WT = Object.create(null),
          zT = Object.create(null),
          MT = [];
        let gT = !0;
        const nT = "Could not find the language '{}', did you forget to load/include a language module?",
          HT = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let jT = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: kT
        };

        function cT(TT) {
          return jT.noHighlightRe.test(TT)
        }

        function vT(TT, UT, mT) {
          let WT = "",
            zT = "";
          "object" === typeof UT ? (WT = TT, mT = UT.ignoreIllegals, zT = UT.language) : (TU("10.7.0", "highlight(lang, code, ...args) has been deprecated."), TU("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), zT = TT, WT = UT), void 0 === mT && (mT = !0);
          const MT = {
            code: WT,
            language: zT
          };
          xT("before:highlight", MT);
          const gT = MT.result ? MT.result : fT(MT.language, MT.code, mT);
          return gT.code = MT.code, xT("after:highlight", gT), gT
        }

        function fT(TT, UT, zT, MT) {
          const HT = Object.create(null);

          function kT() {
            if (!xT.keywords) return void wT.addText(tT);
            let TT = 0;
            xT.keywordPatternRe.lastIndex = 0;
            let UT = xT.keywordPatternRe.exec(tT),
              mT = "";
            for (; UT;) {
              mT += tT.substring(TT, UT.index);
              const zT = OT.case_insensitive ? UT[0].toLowerCase() : UT[0],
                MT = (WT = zT, xT.keywords[WT]);
              if (MT) {
                const [TT, WT] = MT;
                if (wT.addText(mT), mT = "", HT[zT] = (HT[zT] || 0) + 1, HT[zT] <= 7 && (aT += WT), TT.startsWith("_")) mT += UT[0];
                else {
                  const mT = OT.classNameAliases[TT] || TT;
                  LT(UT[0], mT)
                }
              } else mT += UT[0];
              TT = xT.keywordPatternRe.lastIndex, UT = xT.keywordPatternRe.exec(tT)
            }
            var WT;
            mT += tT.substring(TT), wT.addText(mT)
          }

          function lT() {
            null != xT.subLanguage ? function() {
              if ("" === tT) return;
              let TT = null;
              if ("string" === typeof xT.subLanguage) {
                if (!WT[xT.subLanguage]) return void wT.addText(tT);
                TT = fT(xT.subLanguage, tT, !0, dT[xT.subLanguage]), dT[xT.subLanguage] = TT._top
              } else TT = qT(tT, xT.subLanguage.length ? xT.subLanguage : null);
              xT.relevance > 0 && (aT += TT.relevance), wT.__addSublanguage(TT._emitter, TT.language)
            }() : kT(), tT = ""
          }

          function LT(TT, UT) {
            "" !== TT && (wT.startScope(UT), wT.addText(TT), wT.endScope())
          }

          function pT(TT, UT) {
            let mT = 1;
            const WT = UT.length - 1;
            for (; mT <= WT;) {
              if (!TT._emit[mT]) {
                mT++;
                continue
              }
              const WT = OT.classNameAliases[TT[mT]] || TT[mT],
                zT = UT[mT];
              WT ? LT(zT, WT) : (tT = zT, kT(), tT = ""), mT++
            }
          }

          function BT(TT, UT) {
            return TT.scope && "string" === typeof TT.scope && wT.openNode(OT.classNameAliases[TT.scope] || TT.scope), TT.beginScope && (TT.beginScope._wrap ? (LT(tT, OT.classNameAliases[TT.beginScope._wrap] || TT.beginScope._wrap), tT = "") : TT.beginScope._multi && (pT(TT.beginScope, UT), tT = "")), xT = Object.create(TT, {
              parent: {
                value: xT
              }
            }), xT
          }

          function ZT(TT, UT, WT) {
            let zT = function(TT, UT) {
              const mT = TT && TT.exec(UT);
              return mT && 0 === mT.index
            }(TT.endRe, WT);
            if (zT) {
              if (TT["on:end"]) {
                const WT = new mT(TT);
                TT["on:end"](UT, WT), WT.isMatchIgnored && (zT = !1)
              }
              if (zT) {
                for (; TT.endsParent && TT.parent;) TT = TT.parent;
                return TT
              }
            }
            if (TT.endsWithParent) return ZT(TT.parent, UT, WT)
          }

          function cT(TT) {
            return 0 === xT.matcher.regexIndex ? (tT += TT[0], 1) : (IT = !0, 0)
          }

          function vT(TT) {
            const mT = TT[0],
              WT = UT.substring(TT.index),
              zT = ZT(xT, TT, WT);
            if (!zT) return kU;
            const MT = xT;
            xT.endScope && xT.endScope._wrap ? (lT(), LT(mT, xT.endScope._wrap)) : xT.endScope && xT.endScope._multi ? (lT(), pT(xT.endScope, TT)) : MT.skip ? tT += mT : (MT.returnEnd || MT.excludeEnd || (tT += mT), lT(), MT.excludeEnd && (tT = mT));
            do {
              xT.scope && wT.closeNode(), xT.skip || xT.subLanguage || (aT += xT.relevance), xT = xT.parent
            } while (xT !== zT.parent);
            return zT.starts && BT(zT.starts, TT), MT.returnEnd ? 0 : mT.length
          }
          let iT = {};

          function bT(WT, MT) {
            const nT = MT && MT[0];
            if (tT += WT, null == nT) return lT(), 0;
            if ("np" === iT.type && "end" === MT.type && iT.index === MT.index && "" === nT) {
              if (tT += UT.slice(MT.index, MT.index + 1), !gT) {
                const UT = new Error(`0 width match regex (${TT})`);
                throw UT.languageName = TT, UT.badRule = iT.rule, UT
              }
              return 1
            }
            if (iT = MT, "np" === MT.type) return function(TT) {
              const UT = TT[0],
                WT = TT.rule,
                zT = new mT(WT),
                MT = [WT.__beforeBegin, WT["on:begin"]];
              for (const mT of MT)
                if (mT && (mT(TT, zT), zT.isMatchIgnored)) return cT(UT);
              return WT.skip ? tT += UT : (WT.excludeBegin && (tT += UT), lT(), WT.returnBegin || WT.excludeBegin || (tT = UT)), BT(WT, TT), WT.returnBegin ? 0 : UT.length
            }(MT);
            if ("illegal" === MT.type && !zT) {
              const TT = new Error('Illegal lexeme "' + nT + '" for mode "' + (xT.scope || "<unnamed>") + '"');
              throw TT.mode = xT, TT
            }
            if ("end" === MT.type) {
              const TT = vT(MT);
              if (TT !== kU) return TT
            }
            if ("illegal" === MT.type && "" === nT) return tT += "\n", 1;
            if (XT > 1e5 && XT > 3 * MT.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return tT += nT, nT.length
          }
          const OT = eT(TT);
          if (!OT) throw AT(nT.replace("{}", TT)), new Error('Unknown language: "' + TT + '"');
          const YT = zU(OT);
          let JT = "",
            xT = MT || YT;
          const dT = {},
            wT = new jT.__emitter(jT);
          ! function() {
            const TT = [];
            for (let UT = xT; UT !== OT; UT = UT.parent) UT.scope && TT.unshift(UT.scope);
            TT.forEach((TT => wT.openNode(TT)))
          }();
          let tT = "",
            aT = 0,
            yT = 0,
            XT = 0,
            IT = !1;
          try {
            if (OT.__emitTokens) OT.__emitTokens(UT, wT);
            else {
              for (xT.matcher.considerAll();;) {
                XT++, IT ? IT = !1 : xT.matcher.considerAll(), xT.matcher.lastIndex = yT;
                const TT = xT.matcher.exec(UT);
                if (!TT) break;
                const mT = bT(UT.substring(yT, TT.index), TT);
                yT = TT.index + mT
              }
              bT(UT.substring(yT))
            }
            return wT.finalize(), JT = wT.toHTML(), {
              language: TT,
              value: JT,
              relevance: aT,
              illegal: !1,
              _emitter: wT,
              _top: xT
            }
          } catch (QT) {
            if (QT.message && QT.message.includes("Illegal")) return {
              language: TT,
              value: nU(UT),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: QT.message,
                index: yT,
                context: UT.slice(yT - 100, yT + 100),
                mode: QT.mode,
                resultSoFar: JT
              },
              _emitter: wT
            };
            if (gT) return {
              language: TT,
              value: nU(UT),
              illegal: !1,
              relevance: 0,
              errorRaised: QT,
              _emitter: wT,
              _top: xT
            };
            throw QT
          }
        }

        function qT(TT, UT) {
          UT = UT || jT.languages || Object.keys(WT);
          const mT = function(TT) {
              const UT = {
                value: nU(TT),
                illegal: !1,
                relevance: 0,
                _top: HT,
                _emitter: new jT.__emitter(jT)
              };
              return UT._emitter.addText(TT), UT
            }(TT),
            zT = UT.filter(eT).filter(JT).map((UT => fT(UT, TT, !1)));
          zT.unshift(mT);
          const MT = zT.sort(((TT, UT) => {
              if (TT.relevance !== UT.relevance) return UT.relevance - TT.relevance;
              if (TT.language && UT.language) {
                if (eT(TT.language).supersetOf === UT.language) return 1;
                if (eT(UT.language).supersetOf === TT.language) return -1
              }
              return 0
            })),
            [gT, nT] = MT,
            kT = gT;
          return kT.secondBest = nT, kT
        }

        function iT(TT) {
          let UT = null;
          const mT = function(TT) {
            let UT = TT.className + " ";
            UT += TT.parentNode ? TT.parentNode.className : "";
            const mT = jT.languageDetectRe.exec(UT);
            if (mT) {
              const UT = eT(mT[1]);
              return UT || (RT(nT.replace("{}", mT[1])), RT("Falling back to no-highlight mode for this block.", TT)), UT ? mT[1] : "no-highlight"
            }
            return UT.split(/\s+/).find((TT => cT(TT) || eT(TT)))
          }(TT);
          if (cT(mT)) return;
          if (xT("before:highlightElement", {
              el: TT,
              language: mT
            }), TT.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", TT);
          if (TT.children.length > 0 && (jT.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(TT)), jT.throwUnescapedHTML)) {
            throw new gU("One of your code blocks includes unescaped HTML.", TT.innerHTML)
          }
          UT = TT;
          const WT = UT.textContent,
            MT = mT ? vT(WT, {
              language: mT,
              ignoreIllegals: !0
            }) : qT(WT);
          TT.innerHTML = MT.value, TT.dataset.highlighted = "yes",
            function(TT, UT, mT) {
              const WT = UT && zT[UT] || mT;
              TT.classList.add("hljs"), TT.classList.add(`language-${WT}`)
            }(TT, mT, MT.language), TT.result = {
              language: MT.language,
              re: MT.relevance,
              relevance: MT.relevance
            }, MT.secondBest && (TT.secondBest = {
              language: MT.secondBest.language,
              relevance: MT.secondBest.relevance
            }), xT("after:highlightElement", {
              el: TT,
              result: MT,
              text: WT
            })
        }
        let bT = !1;

        function OT() {
          if ("loading" === document.readyState) return bT || window.addEventListener("DOMContentLoaded", (function() {
            OT()
          }), !1), void(bT = !0);
          document.querySelectorAll(jT.cssSelector).forEach(iT)
        }

        function eT(TT) {
          return TT = (TT || "").toLowerCase(), WT[TT] || WT[zT[TT]]
        }

        function YT(TT, UT) {
          let {
            languageName: mT
          } = UT;
          "string" === typeof TT && (TT = [TT]), TT.forEach((TT => {
            zT[TT.toLowerCase()] = mT
          }))
        }

        function JT(TT) {
          const UT = eT(TT);
          return UT && !UT.disableAutodetect
        }

        function xT(TT, UT) {
          const mT = TT;
          MT.forEach((function(TT) {
            TT[mT] && TT[mT](UT)
          }))
        }
        Object.assign(TT, {
          highlight: vT,
          highlightAuto: qT,
          highlightAll: OT,
          highlightElement: iT,
          highlightBlock: function(TT) {
            return TU("10.7.0", "highlightBlock will be removed entirely in v12.0"), TU("10.7.0", "Please use highlightElement now."), iT(TT)
          },
          configure: function(TT) {
            jT = HU(jT, TT)
          },
          initHighlighting: () => {
            OT(), TU("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            OT(), TU("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(UT, mT) {
            let zT = null;
            try {
              zT = mT(TT)
            } catch (MT) {
              if (AT("Language definition for '{}' could not be registered.".replace("{}", UT)), !gT) throw MT;
              AT(MT), zT = HT
            }
            zT.name || (zT.name = UT), WT[UT] = zT, zT.rawDefinition = mT.bind(null, TT), zT.aliases && YT(zT.aliases, {
              languageName: UT
            })
          },
          unregisterLanguage: function(TT) {
            delete WT[TT];
            for (const UT of Object.keys(zT)) zT[UT] === TT && delete zT[UT]
          },
          listLanguages: function() {
            return Object.keys(WT)
          },
          getLanguage: eT,
          registerAliases: YT,
          autoDetection: JT,
          inherit: HU,
          addPlugin: function(TT) {
            ! function(TT) {
              TT["before:highlightBlock"] && !TT["before:highlightElement"] && (TT["before:highlightElement"] = UT => {
                TT["before:highlightBlock"](Object.assign({
                  block: UT.el
                }, UT))
              }), TT["after:highlightBlock"] && !TT["after:highlightElement"] && (TT["after:highlightElement"] = UT => {
                TT["after:highlightBlock"](Object.assign({
                  block: UT.el
                }, UT))
              })
            }(TT), MT.push(TT)
          },
          removePlugin: function(TT) {
            const UT = MT.indexOf(TT); - 1 !== UT && MT.splice(UT, 1)
          }
        }), TT.debugMode = function() {
          gT = !1
        }, TT.safeMode = function() {
          gT = !0
        }, TT.versionString = "11.11.1", TT.regex = {
          concat: BT,
          lookahead: lT,
          either: ZT,
          optional: pT,
          anyNumberOfTimes: LT
        };
        for (const mT in VT) "object" === typeof VT[mT] && UT(VT[mT]);
        return Object.assign(TT, VT), TT
      },
      lU = jU({});
    lU.newInstance = () => jU({}), TT.exports = lU, lU.HighlightJS = lU, lU.default = lU
  },
  4808: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    const WT = mT(4816)
  },
  4825: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => lT
    });
    const WT = "[A-Za-z$_][0-9A-Za-z$_]*",
      zT = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      MT = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      gT = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      nT = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      HT = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      kT = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      jT = [].concat(HT, gT, nT);

    function lT(TT) {
      const UT = TT.regex,
        mT = WT,
        lT = "<>",
        LT = "</>",
        pT = {
          np: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (TT, UT) => {
            const mT = TT[0].length + TT.index,
              WT = TT.input[mT];
            if ("<" === WT || "," === WT) return void UT.ignoreMatch();
            let zT;
            ">" === WT && (((TT, UT) => {
              let {
                after: mT
              } = UT;
              const WT = "</" + TT[0].slice(1);
              return -1 !== TT.input.indexOf(WT, mT)
            })(TT, {
              after: mT
            }) || UT.ignoreMatch());
            const MT = TT.input.substring(mT);
            ((zT = MT.match(/^\s*=/)) || (zT = MT.match(/^\s+extends\s+/)) && 0 === zT.index) && UT.ignoreMatch()
          }
        },
        BT = {
          $pattern: WT,
          keyword: zT,
          literal: MT,
          built_in: jT,
          "variable.language": kT
        },
        ZT = "[0-9](_?[0-9])*",
        cT = `\\.(${ZT})`,
        vT = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        fT = {
          className: "number",
          variants: [{
            np: `(\\b(${vT})((${cT})|\\.)?|(${cT}))[eE][+-]?(${ZT})\\b`
          }, {
            np: `\\b(${vT})\\b((${cT})\\b|\\.)?|(${cT})\\b`
          }, {
            np: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            np: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            np: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            np: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            np: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        qT = {
          className: "subst",
          np: "\\$\\{",
          end: "\\}",
          keywords: BT,
          contains: []
        },
        iT = {
          np: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, qT],
            subLanguage: "xml"
          }
        },
        bT = {
          np: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, qT],
            subLanguage: "css"
          }
        },
        OT = {
          np: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, qT],
            subLanguage: "graphql"
          }
        },
        eT = {
          className: "string",
          np: "`",
          end: "`",
          contains: [TT.BACKSLASH_ESCAPE, qT]
        },
        YT = {
          className: "comment",
          variants: [TT.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              np: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                np: "@[A-Za-z]+"
              }, {
                className: "type",
                np: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                np: mT + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                np: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), TT.C_BLOCK_COMMENT_MODE, TT.C_LINE_COMMENT_MODE]
        },
        JT = [TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, iT, bT, OT, eT, {
          match: /\$\d+/
        }, fT];
      qT.contains = JT.concat({
        np: /\{/,
        end: /\}/,
        keywords: BT,
        contains: ["self"].concat(JT)
      });
      const xT = [].concat(YT, qT.contains),
        dT = xT.concat([{
          np: /(\s*)\(/,
          end: /\)/,
          keywords: BT,
          contains: ["self"].concat(xT)
        }]),
        wT = {
          className: "params",
          np: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: BT,
          contains: dT
        },
        tT = {
          variants: [{
            match: [/class/, /\s+/, mT, /\s+/, /extends/, /\s+/, UT.concat(mT, "(", UT.concat(/\./, mT), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, mT],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        aT = {
          relevance: 0,
          match: UT.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...gT, ...nT]
          }
        },
        yT = {
          variants: [{
            match: [/function/, /\s+/, mT, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [wT],
          illegal: /%/
        };
      const XT = {
        match: UT.concat(/\b/, (IT = [...HT, "super", "import"].map((TT => `${TT}\\s*\\(`)), UT.concat("(?!", IT.join("|"), ")")), mT, UT.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var IT;
      const QT = {
          np: UT.concat(/\./, UT.lookahead(UT.concat(mT, /(?![0-9A-Za-z$_(])/))),
          end: mT,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        sT = {
          match: [/get|set/, /\s+/, mT, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            np: /\(\)/
          }, wT]
        },
        FT = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + TT.UNDERSCORE_IDENT_RE + ")\\s*=>",
        PT = {
          match: [/const|var|let/, /\s+/, mT, /\s*/, /=\s*/, /(async\s*)?/, UT.lookahead(FT)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [wT]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: BT,
        exports: {
          PARAMS_CONTAINS: dT,
          CLASS_REFERENCE: aT
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
          np: /^\s*['"]use (strict|asm)['"]/
        }, TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, iT, bT, OT, eT, YT, {
          match: /\$\d+/
        }, fT, aT, {
          scope: "attr",
          match: mT + UT.lookahead(":"),
          relevance: 0
        }, PT, {
          np: "(" + TT.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [YT, TT.REGEXP_MODE, {
            className: "function",
            np: FT,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                np: TT.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                np: /\(\s*\)/,
                skip: !0
              }, {
                np: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: BT,
                contains: dT
              }]
            }]
          }, {
            np: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              np: lT,
              end: LT
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              np: pT.np,
              "on:begin": pT.isTrulyOpeningTag,
              end: pT.end
            }],
            subLanguage: "xml",
            contains: [{
              np: pT.np,
              end: pT.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, yT, {
          beginKeywords: "while if switch catch for"
        }, {
          np: "\\b(?!function)" + TT.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [wT, TT.inherit(TT.TITLE_MODE, {
            np: mT,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, QT, {
          match: "\\$" + mT,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [wT]
        }, XT, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, tT, sT, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4833: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT
    });
    const WT = "[A-Za-z$_][0-9A-Za-z$_]*",
      zT = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      MT = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      gT = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      nT = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      HT = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      kT = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      jT = [].concat(HT, gT, nT);

    function lT(TT) {
      const UT = TT.regex,
        mT = WT,
        lT = "<>",
        LT = "</>",
        pT = {
          np: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (TT, UT) => {
            const mT = TT[0].length + TT.index,
              WT = TT.input[mT];
            if ("<" === WT || "," === WT) return void UT.ignoreMatch();
            let zT;
            ">" === WT && (((TT, UT) => {
              let {
                after: mT
              } = UT;
              const WT = "</" + TT[0].slice(1);
              return -1 !== TT.input.indexOf(WT, mT)
            })(TT, {
              after: mT
            }) || UT.ignoreMatch());
            const MT = TT.input.substring(mT);
            ((zT = MT.match(/^\s*=/)) || (zT = MT.match(/^\s+extends\s+/)) && 0 === zT.index) && UT.ignoreMatch()
          }
        },
        BT = {
          $pattern: WT,
          keyword: zT,
          literal: MT,
          built_in: jT,
          "variable.language": kT
        },
        ZT = "[0-9](_?[0-9])*",
        cT = `\\.(${ZT})`,
        vT = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        fT = {
          className: "number",
          variants: [{
            np: `(\\b(${vT})((${cT})|\\.)?|(${cT}))[eE][+-]?(${ZT})\\b`
          }, {
            np: `\\b(${vT})\\b((${cT})\\b|\\.)?|(${cT})\\b`
          }, {
            np: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            np: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            np: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            np: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            np: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        qT = {
          className: "subst",
          np: "\\$\\{",
          end: "\\}",
          keywords: BT,
          contains: []
        },
        iT = {
          np: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, qT],
            subLanguage: "xml"
          }
        },
        bT = {
          np: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, qT],
            subLanguage: "css"
          }
        },
        OT = {
          np: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, qT],
            subLanguage: "graphql"
          }
        },
        eT = {
          className: "string",
          np: "`",
          end: "`",
          contains: [TT.BACKSLASH_ESCAPE, qT]
        },
        YT = {
          className: "comment",
          variants: [TT.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              np: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                np: "@[A-Za-z]+"
              }, {
                className: "type",
                np: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                np: mT + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                np: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), TT.C_BLOCK_COMMENT_MODE, TT.C_LINE_COMMENT_MODE]
        },
        JT = [TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, iT, bT, OT, eT, {
          match: /\$\d+/
        }, fT];
      qT.contains = JT.concat({
        np: /\{/,
        end: /\}/,
        keywords: BT,
        contains: ["self"].concat(JT)
      });
      const xT = [].concat(YT, qT.contains),
        dT = xT.concat([{
          np: /(\s*)\(/,
          end: /\)/,
          keywords: BT,
          contains: ["self"].concat(xT)
        }]),
        wT = {
          className: "params",
          np: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: BT,
          contains: dT
        },
        tT = {
          variants: [{
            match: [/class/, /\s+/, mT, /\s+/, /extends/, /\s+/, UT.concat(mT, "(", UT.concat(/\./, mT), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, mT],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        aT = {
          relevance: 0,
          match: UT.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...gT, ...nT]
          }
        },
        yT = {
          variants: [{
            match: [/function/, /\s+/, mT, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [wT],
          illegal: /%/
        };
      const XT = {
        match: UT.concat(/\b/, (IT = [...HT, "super", "import"].map((TT => `${TT}\\s*\\(`)), UT.concat("(?!", IT.join("|"), ")")), mT, UT.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var IT;
      const QT = {
          np: UT.concat(/\./, UT.lookahead(UT.concat(mT, /(?![0-9A-Za-z$_(])/))),
          end: mT,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        sT = {
          match: [/get|set/, /\s+/, mT, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            np: /\(\)/
          }, wT]
        },
        FT = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + TT.UNDERSCORE_IDENT_RE + ")\\s*=>",
        PT = {
          match: [/const|var|let/, /\s+/, mT, /\s*/, /=\s*/, /(async\s*)?/, UT.lookahead(FT)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [wT]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: BT,
        exports: {
          PARAMS_CONTAINS: dT,
          CLASS_REFERENCE: aT
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
          np: /^\s*['"]use (strict|asm)['"]/
        }, TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, iT, bT, OT, eT, YT, {
          match: /\$\d+/
        }, fT, aT, {
          scope: "attr",
          match: mT + UT.lookahead(":"),
          relevance: 0
        }, PT, {
          np: "(" + TT.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [YT, TT.REGEXP_MODE, {
            className: "function",
            np: FT,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                np: TT.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                np: /\(\s*\)/,
                skip: !0
              }, {
                np: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: BT,
                contains: dT
              }]
            }]
          }, {
            np: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              np: lT,
              end: LT
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              np: pT.np,
              "on:begin": pT.isTrulyOpeningTag,
              end: pT.end
            }],
            subLanguage: "xml",
            contains: [{
              np: pT.np,
              end: pT.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, yT, {
          beginKeywords: "while if switch catch for"
        }, {
          np: "\\b(?!function)" + TT.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [wT, TT.inherit(TT.TITLE_MODE, {
            np: mT,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, QT, {
          match: "\\$" + mT,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [wT]
        }, XT, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, tT, sT, {
          match: /\$[(.]/
        }]
      }
    }

    function LT(TT) {
      const UT = TT.regex,
        mT = lT(TT),
        gT = WT,
        nT = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        HT = {
          np: [/namespace/, /\s+/, TT.IDENT_RE],
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
            built_in: nT
          },
          contains: [mT.exports.CLASS_REFERENCE]
        },
        pT = {
          $pattern: WT,
          keyword: zT.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: MT,
          built_in: jT.concat(nT),
          "variable.language": kT
        },
        BT = {
          className: "meta",
          np: "@" + gT
        },
        ZT = (TT, UT, mT) => {
          const WT = TT.contains.findIndex((TT => TT.label === UT));
          if (-1 === WT) throw new Error("can not find mode to replace");
          TT.contains.splice(WT, 1, mT)
        };
      Object.assign(mT.keywords, pT), mT.exports.PARAMS_CONTAINS.push(BT);
      const cT = mT.contains.find((TT => "attr" === TT.scope)),
        vT = Object.assign({}, cT, {
          match: UT.concat(gT, UT.lookahead(/\s*\?:/))
        });
      mT.exports.PARAMS_CONTAINS.push([mT.exports.CLASS_REFERENCE, cT, vT]), mT.contains = mT.contains.concat([BT, HT, LT, vT]), ZT(mT, "shebang", TT.SHEBANG()), ZT(mT, "use_strict", {
        className: "meta",
        relevance: 10,
        np: /^\s*['"]use strict['"]/
      });
      return mT.contains.find((TT => "func.def" === TT.label)).relevance = 0, Object.assign(mT, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), mT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);