export const id = 77;
export const ids = [77];
export const modules = {
  4700: TT => {
    function kT(TT) {
      return TT instanceof Map ? TT.clear = TT.delete = TT.set = function() {
        throw new Error("map is read-only")
      } : TT instanceof Set && (TT.add = TT.clear = TT.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(TT), Object.getOwnPropertyNames(TT).forEach((cT => {
        const lT = TT[cT],
          MT = typeof lT;
        "object" !== MT && "function" !== MT || Object.isFrozen(lT) || kT(lT)
      })), TT
    }
    class cT {
      constructor(TT) {
        void 0 === TT.data && (TT.data = {}), this.data = TT.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function lT(TT) {
      return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function MT(TT) {
      const kT = Object.create(null);
      for (const KT in TT) kT[KT] = TT[KT];
      for (var cT = arguments.length, lT = new Array(cT > 1 ? cT - 1 : 0), MT = 1; MT < cT; MT++) lT[MT - 1] = arguments[MT];
      return lT.forEach((function(TT) {
        for (const cT in TT) kT[cT] = TT[cT]
      })), kT
    }
    const KT = TT => !!TT.scope;
    class OT {
      constructor(TT, kT) {
        this.buffer = "", this.classPrefix = kT.classPrefix, TT.walk(this)
      }
      addText(TT) {
        this.buffer += lT(TT)
      }
      openNode(TT) {
        if (!KT(TT)) return;
        const kT = ((TT, kT) => {
          let {
            prefix: cT
          } = kT;
          if (TT.startsWith("language:")) return TT.replace("language:", "language-");
          if (TT.includes(".")) {
            const kT = TT.split(".");
            return [`${cT}${kT.shift()}`, ...kT.map(((TT, kT) => `${TT}${"_".repeat(kT+1)}`))].join(" ")
          }
          return `${cT}${TT}`
        })(TT.scope, {
          prefix: this.classPrefix
        });
        this.span(kT)
      }
      closeNode(TT) {
        KT(TT) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(TT) {
        this.buffer += `<span class="${TT}">`
      }
    }
    const yT = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const kT = {
        children: []
      };
      return Object.assign(kT, TT), kT
    };
    class fT {
      constructor() {
        this.mN = yT(), this.stack = [this.mN]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.mN
      }
      add(TT) {
        this.top.children.push(TT)
      }
      openNode(TT) {
        const kT = yT({
          scope: TT
        });
        this.add(kT), this.stack.push(kT)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.mN, null, 4)
      }
      walk(TT) {
        return this.constructor._walk(TT, this.mN)
      }
      static _walk(TT, kT) {
        return "string" === typeof kT ? TT.addText(kT) : kT.children && (TT.openNode(kT), kT.children.forEach((kT => this._walk(TT, kT))), TT.closeNode(kT)), TT
      }
      static _collapse(TT) {
        "string" !== typeof TT && TT.children && (TT.children.every((TT => "string" === typeof TT)) ? TT.children = [TT.children.join("")] : TT.children.forEach((TT => {
          fT._collapse(TT)
        })))
      }
    }
    class xT extends fT {
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
      __addSublanguage(TT, kT) {
        const cT = TT.root;
        kT && (cT.scope = `language:${kT}`), this.add(cT)
      }
      toHTML() {
        return new OT(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function IT(TT) {
      return TT ? "string" === typeof TT ? TT : TT.source : null
    }

    function AT(TT) {
      return vT("(?=", TT, ")")
    }

    function CT(TT) {
      return vT("(?:", TT, ")*")
    }

    function jT(TT) {
      return vT("(?:", TT, ")?")
    }

    function vT() {
      for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
      return kT.map((TT => IT(TT))).join("")
    }

    function tT() {
      for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
      const lT = function(TT) {
        const kT = TT[TT.length - 1];
        return "object" === typeof kT && kT.constructor === Object ? (TT.splice(TT.length - 1, 1), kT) : {}
      }(kT);
      return "(" + (lT.capture ? "" : "?:") + kT.map((TT => IT(TT))).join("|") + ")"
    }

    function hT(TT) {
      return new RegExp(TT.toString() + "|").exec("").length - 1
    }
    const NT = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function QT(TT, kT) {
      let {
        joinWith: cT
      } = kT, lT = 0;
      return TT.map((TT => {
        lT += 1;
        const kT = lT;
        let cT = IT(TT),
          MT = "";
        for (; cT.length > 0;) {
          const TT = NT.exec(cT);
          if (!TT) {
            MT += cT;
            break
          }
          MT += cT.substring(0, TT.index), cT = cT.substring(TT.index + TT[0].length), "\\" === TT[0][0] && TT[1] ? MT += "\\" + String(Number(TT[1]) + kT) : (MT += TT[0], "(" === TT[0] && lT++)
        }
        return MT
      })).map((TT => `(${TT})`)).join(cT)
    }
    const ST = "[a-zA-Z]\\w*",
      DT = "[a-zA-Z_]\\w*",
      aT = "\\b\\d+(\\.\\d+)?",
      FT = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      rT = "\\b(0b[01]+)",
      PT = {
        Ij: "\\\\[\\s\\S]",
        relevance: 0
      },
      wT = {
        scope: "string",
        Ij: "'",
        end: "'",
        illegal: "\\n",
        contains: [PT]
      },
      mT = {
        scope: "string",
        Ij: '"',
        end: '"',
        illegal: "\\n",
        contains: [PT]
      },
      bT = function(TT, kT) {
        const cT = MT({
          scope: "comment",
          Ij: TT,
          end: kT,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        cT.contains.push({
          scope: "doctag",
          Ij: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const lT = tT("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return cT.contains.push({
          Ij: vT(/[ ]+/, "(", lT, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), cT
      },
      zT = bT("//", "$"),
      JT = bT("/\\*", "\\*/"),
      oT = bT("#", "$"),
      HT = {
        scope: "number",
        Ij: aT,
        relevance: 0
      },
      eT = {
        scope: "number",
        Ij: FT,
        relevance: 0
      },
      GT = {
        scope: "number",
        Ij: rT,
        relevance: 0
      },
      VT = {
        scope: "regexp",
        Ij: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [PT, {
          Ij: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [PT]
        }]
      },
      ET = {
        scope: "title",
        Ij: ST,
        relevance: 0
      },
      ZT = {
        scope: "title",
        Ij: DT,
        relevance: 0
      },
      uT = {
        Ij: "\\.\\s*" + DT,
        relevance: 0
      };
    var XT = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: wT,
      BACKSLASH_ESCAPE: PT,
      BINARY_NUMBER_MODE: GT,
      BINARY_NUMBER_RE: rT,
      COMMENT: bT,
      C_BLOCK_COMMENT_MODE: JT,
      C_LINE_COMMENT_MODE: zT,
      C_NUMBER_MODE: eT,
      C_NUMBER_RE: FT,
      END_SAME_AS_BEGIN: function(TT) {
        return Object.assign(TT, {
          "on:begin": (TT, kT) => {
            kT.data._beginMatch = TT[1]
          },
          "on:end": (TT, kT) => {
            kT.data._beginMatch !== TT[1] && kT.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: oT,
      IDENT_RE: ST,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: uT,
      NUMBER_MODE: HT,
      NUMBER_RE: aT,
      PHRASAL_WORDS_MODE: {
        Ij: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: mT,
      REGEXP_MODE: VT,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const kT = /^#![ ]*\//;
        return TT.binary && (TT.Ij = vT(kT, /.*\b/, TT.binary, /\b.*/)), MT({
          scope: "meta",
          Ij: kT,
          end: /$/,
          relevance: 0,
          "on:begin": (TT, kT) => {
            0 !== TT.index && kT.ignoreMatch()
          }
        }, TT)
      },
      TITLE_MODE: ET,
      UNDERSCORE_IDENT_RE: DT,
      UNDERSCORE_TITLE_MODE: ZT
    });

    function dT(TT, kT) {
      "." === TT.input[TT.index - 1] && kT.ignoreMatch()
    }

    function LT(TT, kT) {
      void 0 !== TT.className && (TT.scope = TT.className, delete TT.className)
    }

    function RT(TT, kT) {
      kT && TT.beginKeywords && (TT.Ij = "\\b(" + TT.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", TT.__beforeBegin = dT, TT.keywords = TT.keywords || TT.beginKeywords, delete TT.beginKeywords, void 0 === TT.relevance && (TT.relevance = 0))
    }

    function gT(TT, kT) {
      Array.isArray(TT.illegal) && (TT.illegal = tT(...TT.illegal))
    }

    function UT(TT, kT) {
      if (TT.match) {
        if (TT.Ij || TT.end) throw new Error("begin & end are not supported with match");
        TT.Ij = TT.match, delete TT.match
      }
    }

    function YT(TT, kT) {
      void 0 === TT.relevance && (TT.relevance = 1)
    }
    const BT = (TT, kT) => {
        if (!TT.beforeMatch) return;
        if (TT.starts) throw new Error("beforeMatch cannot be used with starts");
        const cT = Object.assign({}, TT);
        Object.keys(TT).forEach((kT => {
          delete TT[kT]
        })), TT.keywords = cT.keywords, TT.Ij = vT(cT.beforeMatch, AT(cT.Ij)), TT.starts = {
          relevance: 0,
          contains: [Object.assign(cT, {
            endsParent: !0
          })]
        }, TT.relevance = 0, delete cT.beforeMatch
      },
      WT = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function nT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const lT = Object.create(null);
      return "string" === typeof TT ? MT(cT, TT.split(" ")) : Array.isArray(TT) ? MT(cT, TT) : Object.keys(TT).forEach((function(cT) {
        Object.assign(lT, nT(TT[cT], kT, cT))
      })), lT;

      function MT(TT, cT) {
        kT && (cT = cT.map((TT => TT.toLowerCase()))), cT.forEach((function(kT) {
          const cT = kT.split("|");
          lT[cT[0]] = [TT, pT(cT[0], cT[1])]
        }))
      }
    }

    function pT(TT, kT) {
      return kT ? Number(kT) : function(TT) {
        return WT.includes(TT.toLowerCase())
      }(TT) ? 0 : 1
    }
    const iT = {},
      qT = TT => {
        console.error(TT)
      },
      sT = function(TT) {
        for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
        console.log(`WARN: ${TT}`, ...cT)
      },
      Tk = (TT, kT) => {
        iT[`${TT}/${kT}`] || (console.log(`Deprecated as of ${TT}. ${kT}`), iT[`${TT}/${kT}`] = !0)
      },
      kk = new Error;

    function ck(TT, kT, cT) {
      let {
        key: lT
      } = cT, MT = 0;
      const KT = TT[lT],
        OT = {},
        yT = {};
      for (let fT = 1; fT <= kT.length; fT++) yT[fT + MT] = KT[fT], OT[fT + MT] = !0, MT += hT(kT[fT - 1]);
      TT[lT] = yT, TT[lT]._emit = OT, TT[lT]._multi = !0
    }

    function lk(TT) {
      ! function(TT) {
        TT.scope && "object" === typeof TT.scope && null !== TT.scope && (TT.beginScope = TT.scope, delete TT.scope)
      }(TT), "string" === typeof TT.beginScope && (TT.beginScope = {
          _wrap: TT.beginScope
        }), "string" === typeof TT.endScope && (TT.endScope = {
          _wrap: TT.endScope
        }),
        function(TT) {
          if (Array.isArray(TT.Ij)) {
            if (TT.skip || TT.excludeBegin || TT.returnBegin) throw qT("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), kk;
            if ("object" !== typeof TT.beginScope || null === TT.beginScope) throw qT("beginScope must be object"), kk;
            ck(TT, TT.Ij, {
              key: "beginScope"
            }), TT.Ij = QT(TT.Ij, {
              joinWith: ""
            })
          }
        }(TT),
        function(TT) {
          if (Array.isArray(TT.end)) {
            if (TT.skip || TT.excludeEnd || TT.returnEnd) throw qT("skip, excludeEnd, returnEnd not compatible with endScope: {}"), kk;
            if ("object" !== typeof TT.endScope || null === TT.endScope) throw qT("endScope must be object"), kk;
            ck(TT, TT.end, {
              key: "endScope"
            }), TT.end = QT(TT.end, {
              joinWith: ""
            })
          }
        }(TT)
    }

    function Mk(TT) {
      function kT(kT, cT) {
        return new RegExp(IT(kT), "m" + (TT.case_insensitive ? "i" : "") + (TT.unicodeRegex ? "u" : "") + (cT ? "g" : ""))
      }
      class cT {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(TT, kT) {
          kT.position = this.position++, this.matchIndexes[this.matchAt] = kT, this.regexes.push([kT, TT]), this.matchAt += hT(TT) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const TT = this.regexes.map((TT => TT[1]));
          this.matcherRe = kT(QT(TT, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(TT) {
          this.matcherRe.lastIndex = this.lastIndex;
          const kT = this.matcherRe.exec(TT);
          if (!kT) return null;
          const cT = kT.findIndex(((TT, kT) => kT > 0 && void 0 !== TT)),
            lT = this.matchIndexes[cT];
          return kT.splice(0, cT), Object.assign(kT, lT)
        }
      }
      class lT {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(TT) {
          if (this.multiRegexes[TT]) return this.multiRegexes[TT];
          const kT = new cT;
          return this.rules.slice(TT).forEach((TT => {
            let [cT, lT] = TT;
            return kT.addRule(cT, lT)
          })), kT.compile(), this.multiRegexes[TT] = kT, kT
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(TT, kT) {
          this.rules.push([TT, kT]), "Ij" === kT.type && this.count++
        }
        exec(TT) {
          const kT = this.getMatcher(this.regexIndex);
          kT.lastIndex = this.lastIndex;
          let cT = kT.exec(TT);
          if (this.resumingScanAtSamePosition())
            if (cT && cT.index === this.lastIndex);
            else {
              const kT = this.getMatcher(0);
              kT.lastIndex = this.lastIndex + 1, cT = kT.exec(TT)
            } return cT && (this.regexIndex += cT.position + 1, this.regexIndex === this.count && this.considerAll()), cT
        }
      }
      if (TT.compilerExtensions || (TT.compilerExtensions = []), TT.contains && TT.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return TT.classNameAliases = MT(TT.classNameAliases || {}),
        function cT(KT, OT) {
          const yT = KT;
          if (KT.isCompiled) return yT;
          [LT, UT, lk, BT].forEach((TT => TT(KT, OT))), TT.compilerExtensions.forEach((TT => TT(KT, OT))), KT.__beforeBegin = null, [RT, gT, YT].forEach((TT => TT(KT, OT))), KT.isCompiled = !0;
          let fT = null;
          return "object" === typeof KT.keywords && KT.keywords.$pattern && (KT.keywords = Object.assign({}, KT.keywords), fT = KT.keywords.$pattern, delete KT.keywords.$pattern), fT = fT || /\w+/, KT.keywords && (KT.keywords = nT(KT.keywords, TT.case_insensitive)), yT.keywordPatternRe = kT(fT, !0), OT && (KT.Ij || (KT.Ij = /\B|\b/), yT.beginRe = kT(yT.Ij), KT.end || KT.endsWithParent || (KT.end = /\B|\b/), KT.end && (yT.endRe = kT(yT.end)), yT.terminatorEnd = IT(yT.end) || "", KT.endsWithParent && OT.terminatorEnd && (yT.terminatorEnd += (KT.end ? "|" : "") + OT.terminatorEnd)), KT.illegal && (yT.illegalRe = kT(KT.illegal)), KT.contains || (KT.contains = []), KT.contains = [].concat(...KT.contains.map((function(TT) {
            return function(TT) {
              TT.variants && !TT.cachedVariants && (TT.cachedVariants = TT.variants.map((function(kT) {
                return MT(TT, {
                  variants: null
                }, kT)
              })));
              if (TT.cachedVariants) return TT.cachedVariants;
              if (Kk(TT)) return MT(TT, {
                starts: TT.starts ? MT(TT.starts) : null
              });
              if (Object.isFrozen(TT)) return MT(TT);
              return TT
            }("self" === TT ? KT : TT)
          }))), KT.contains.forEach((function(TT) {
            cT(TT, yT)
          })), KT.starts && cT(KT.starts, OT), yT.matcher = function(TT) {
            const kT = new lT;
            return TT.contains.forEach((TT => kT.addRule(TT.Ij, {
              rule: TT,
              type: "Ij"
            }))), TT.terminatorEnd && kT.addRule(TT.terminatorEnd, {
              type: "end"
            }), TT.illegal && kT.addRule(TT.illegal, {
              type: "illegal"
            }), kT
          }(yT), yT
        }(TT)
    }

    function Kk(TT) {
      return !!TT && (TT.endsWithParent || Kk(TT.starts))
    }
    class Ok extends Error {
      constructor(TT, kT) {
        super(TT), this.name = "HTMLInjectionError", this.html = kT
      }
    }
    const yk = lT,
      fk = MT,
      xk = Symbol("nomatch"),
      Ik = function(TT) {
        const lT = Object.create(null),
          MT = Object.create(null),
          KT = [];
        let OT = !0;
        const yT = "Could not find the language '{}', did you forget to load/include a language module?",
          fT = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let IT = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: xT
        };

        function hT(TT) {
          return IT.noHighlightRe.test(TT)
        }

        function NT(TT, kT, cT) {
          let lT = "",
            MT = "";
          "object" === typeof kT ? (lT = TT, cT = kT.ignoreIllegals, MT = kT.language) : (Tk("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Tk("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), MT = TT, lT = kT), void 0 === cT && (cT = !0);
          const KT = {
            code: lT,
            language: MT
          };
          mT("before:highlight", KT);
          const OT = KT.result ? KT.result : QT(KT.language, KT.code, cT);
          return OT.code = KT.code, mT("after:highlight", OT), OT
        }

        function QT(TT, kT, MT, KT) {
          const fT = Object.create(null);

          function xT() {
            if (!mT.keywords) return void zT.addText(JT);
            let TT = 0;
            mT.keywordPatternRe.lastIndex = 0;
            let kT = mT.keywordPatternRe.exec(JT),
              cT = "";
            for (; kT;) {
              cT += JT.substring(TT, kT.index);
              const MT = FT.case_insensitive ? kT[0].toLowerCase() : kT[0],
                KT = (lT = MT, mT.keywords[lT]);
              if (KT) {
                const [TT, lT] = KT;
                if (zT.addText(cT), cT = "", fT[MT] = (fT[MT] || 0) + 1, fT[MT] <= 7 && (oT += lT), TT.startsWith("_")) cT += kT[0];
                else {
                  const cT = FT.classNameAliases[TT] || TT;
                  CT(kT[0], cT)
                }
              } else cT += kT[0];
              TT = mT.keywordPatternRe.lastIndex, kT = mT.keywordPatternRe.exec(JT)
            }
            var lT;
            cT += JT.substring(TT), zT.addText(cT)
          }

          function AT() {
            null != mT.subLanguage ? function() {
              if ("" === JT) return;
              let TT = null;
              if ("string" === typeof mT.subLanguage) {
                if (!lT[mT.subLanguage]) return void zT.addText(JT);
                TT = QT(mT.subLanguage, JT, !0, bT[mT.subLanguage]), bT[mT.subLanguage] = TT._top
              } else TT = ST(JT, mT.subLanguage.length ? mT.subLanguage : null);
              mT.relevance > 0 && (oT += TT.relevance), zT.__addSublanguage(TT._emitter, TT.language)
            }() : xT(), JT = ""
          }

          function CT(TT, kT) {
            "" !== TT && (zT.startScope(kT), zT.addText(TT), zT.endScope())
          }

          function jT(TT, kT) {
            let cT = 1;
            const lT = kT.length - 1;
            for (; cT <= lT;) {
              if (!TT._emit[cT]) {
                cT++;
                continue
              }
              const lT = FT.classNameAliases[TT[cT]] || TT[cT],
                MT = kT[cT];
              lT ? CT(MT, lT) : (JT = MT, xT(), JT = ""), cT++
            }
          }

          function vT(TT, kT) {
            return TT.scope && "string" === typeof TT.scope && zT.openNode(FT.classNameAliases[TT.scope] || TT.scope), TT.beginScope && (TT.beginScope._wrap ? (CT(JT, FT.classNameAliases[TT.beginScope._wrap] || TT.beginScope._wrap), JT = "") : TT.beginScope._multi && (jT(TT.beginScope, kT), JT = "")), mT = Object.create(TT, {
              parent: {
                value: mT
              }
            }), mT
          }

          function tT(TT, kT, lT) {
            let MT = function(TT, kT) {
              const cT = TT && TT.exec(kT);
              return cT && 0 === cT.index
            }(TT.endRe, lT);
            if (MT) {
              if (TT["on:end"]) {
                const lT = new cT(TT);
                TT["on:end"](kT, lT), lT.isMatchIgnored && (MT = !1)
              }
              if (MT) {
                for (; TT.endsParent && TT.parent;) TT = TT.parent;
                return TT
              }
            }
            if (TT.endsWithParent) return tT(TT.parent, kT, lT)
          }

          function hT(TT) {
            return 0 === mT.matcher.regexIndex ? (JT += TT[0], 1) : (GT = !0, 0)
          }

          function NT(TT) {
            const cT = TT[0],
              lT = kT.substring(TT.index),
              MT = tT(mT, TT, lT);
            if (!MT) return xk;
            const KT = mT;
            mT.endScope && mT.endScope._wrap ? (AT(), CT(cT, mT.endScope._wrap)) : mT.endScope && mT.endScope._multi ? (AT(), jT(mT.endScope, TT)) : KT.skip ? JT += cT : (KT.returnEnd || KT.excludeEnd || (JT += cT), AT(), KT.excludeEnd && (JT = cT));
            do {
              mT.scope && zT.closeNode(), mT.skip || mT.subLanguage || (oT += mT.relevance), mT = mT.parent
            } while (mT !== MT.parent);
            return MT.starts && vT(MT.starts, TT), KT.returnEnd ? 0 : cT.length
          }
          let DT = {};

          function aT(lT, KT) {
            const yT = KT && KT[0];
            if (JT += lT, null == yT) return AT(), 0;
            if ("Ij" === DT.type && "end" === KT.type && DT.index === KT.index && "" === yT) {
              if (JT += kT.slice(KT.index, KT.index + 1), !OT) {
                const kT = new Error(`0 width match regex (${TT})`);
                throw kT.languageName = TT, kT.badRule = DT.rule, kT
              }
              return 1
            }
            if (DT = KT, "Ij" === KT.type) return function(TT) {
              const kT = TT[0],
                lT = TT.rule,
                MT = new cT(lT),
                KT = [lT.__beforeBegin, lT["on:begin"]];
              for (const cT of KT)
                if (cT && (cT(TT, MT), MT.isMatchIgnored)) return hT(kT);
              return lT.skip ? JT += kT : (lT.excludeBegin && (JT += kT), AT(), lT.returnBegin || lT.excludeBegin || (JT = kT)), vT(lT, TT), lT.returnBegin ? 0 : kT.length
            }(KT);
            if ("illegal" === KT.type && !MT) {
              const TT = new Error('Illegal lexeme "' + yT + '" for mode "' + (mT.scope || "<unnamed>") + '"');
              throw TT.mode = mT, TT
            }
            if ("end" === KT.type) {
              const TT = NT(KT);
              if (TT !== xk) return TT
            }
            if ("illegal" === KT.type && "" === yT) return JT += "\n", 1;
            if (eT > 1e5 && eT > 3 * KT.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return JT += yT, yT.length
          }
          const FT = rT(TT);
          if (!FT) throw qT(yT.replace("{}", TT)), new Error('Unknown language: "' + TT + '"');
          const PT = Mk(FT);
          let wT = "",
            mT = KT || PT;
          const bT = {},
            zT = new IT.__emitter(IT);
          ! function() {
            const TT = [];
            for (let kT = mT; kT !== FT; kT = kT.parent) kT.scope && TT.unshift(kT.scope);
            TT.forEach((TT => zT.openNode(TT)))
          }();
          let JT = "",
            oT = 0,
            HT = 0,
            eT = 0,
            GT = !1;
          try {
            if (FT.__emitTokens) FT.__emitTokens(kT, zT);
            else {
              for (mT.matcher.considerAll();;) {
                eT++, GT ? GT = !1 : mT.matcher.considerAll(), mT.matcher.lastIndex = HT;
                const TT = mT.matcher.exec(kT);
                if (!TT) break;
                const cT = aT(kT.substring(HT, TT.index), TT);
                HT = TT.index + cT
              }
              aT(kT.substring(HT))
            }
            return zT.finalize(), wT = zT.toHTML(), {
              language: TT,
              value: wT,
              relevance: oT,
              illegal: !1,
              _emitter: zT,
              _top: mT
            }
          } catch (VT) {
            if (VT.message && VT.message.includes("Illegal")) return {
              language: TT,
              value: yk(kT),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: VT.message,
                index: HT,
                context: kT.slice(HT - 100, HT + 100),
                mode: VT.mode,
                resultSoFar: wT
              },
              _emitter: zT
            };
            if (OT) return {
              language: TT,
              value: yk(kT),
              illegal: !1,
              relevance: 0,
              errorRaised: VT,
              _emitter: zT,
              _top: mT
            };
            throw VT
          }
        }

        function ST(TT, kT) {
          kT = kT || IT.languages || Object.keys(lT);
          const cT = function(TT) {
              const kT = {
                value: yk(TT),
                illegal: !1,
                relevance: 0,
                _top: fT,
                _emitter: new IT.__emitter(IT)
              };
              return kT._emitter.addText(TT), kT
            }(TT),
            MT = kT.filter(rT).filter(wT).map((kT => QT(kT, TT, !1)));
          MT.unshift(cT);
          const KT = MT.sort(((TT, kT) => {
              if (TT.relevance !== kT.relevance) return kT.relevance - TT.relevance;
              if (TT.language && kT.language) {
                if (rT(TT.language).supersetOf === kT.language) return 1;
                if (rT(kT.language).supersetOf === TT.language) return -1
              }
              return 0
            })),
            [OT, yT] = KT,
            xT = OT;
          return xT.secondBest = yT, xT
        }

        function DT(TT) {
          let kT = null;
          const cT = function(TT) {
            let kT = TT.className + " ";
            kT += TT.parentNode ? TT.parentNode.className : "";
            const cT = IT.languageDetectRe.exec(kT);
            if (cT) {
              const kT = rT(cT[1]);
              return kT || (sT(yT.replace("{}", cT[1])), sT("Falling back to no-highlight mode for this block.", TT)), kT ? cT[1] : "no-highlight"
            }
            return kT.split(/\s+/).find((TT => hT(TT) || rT(TT)))
          }(TT);
          if (hT(cT)) return;
          if (mT("before:highlightElement", {
              el: TT,
              language: cT
            }), TT.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", TT);
          if (TT.children.length > 0 && (IT.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(TT)), IT.throwUnescapedHTML)) {
            throw new Ok("One of your code blocks includes unescaped HTML.", TT.innerHTML)
          }
          kT = TT;
          const lT = kT.textContent,
            KT = cT ? NT(lT, {
              language: cT,
              ignoreIllegals: !0
            }) : ST(lT);
          TT.innerHTML = KT.value, TT.dataset.highlighted = "yes",
            function(TT, kT, cT) {
              const lT = kT && MT[kT] || cT;
              TT.classList.add("hljs"), TT.classList.add(`language-${lT}`)
            }(TT, cT, KT.language), TT.result = {
              language: KT.language,
              re: KT.relevance,
              relevance: KT.relevance
            }, KT.secondBest && (TT.secondBest = {
              language: KT.secondBest.language,
              relevance: KT.secondBest.relevance
            }), mT("after:highlightElement", {
              el: TT,
              result: KT,
              text: lT
            })
        }
        let aT = !1;

        function FT() {
          if ("loading" === document.readyState) return aT || window.addEventListener("DOMContentLoaded", (function() {
            FT()
          }), !1), void(aT = !0);
          document.querySelectorAll(IT.cssSelector).forEach(DT)
        }

        function rT(TT) {
          return TT = (TT || "").toLowerCase(), lT[TT] || lT[MT[TT]]
        }

        function PT(TT, kT) {
          let {
            languageName: cT
          } = kT;
          "string" === typeof TT && (TT = [TT]), TT.forEach((TT => {
            MT[TT.toLowerCase()] = cT
          }))
        }

        function wT(TT) {
          const kT = rT(TT);
          return kT && !kT.disableAutodetect
        }

        function mT(TT, kT) {
          const cT = TT;
          KT.forEach((function(TT) {
            TT[cT] && TT[cT](kT)
          }))
        }
        Object.assign(TT, {
          highlight: NT,
          highlightAuto: ST,
          highlightAll: FT,
          highlightElement: DT,
          highlightBlock: function(TT) {
            return Tk("10.7.0", "highlightBlock will be removed entirely in v12.0"), Tk("10.7.0", "Please use highlightElement now."), DT(TT)
          },
          configure: function(TT) {
            IT = fk(IT, TT)
          },
          initHighlighting: () => {
            FT(), Tk("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            FT(), Tk("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(kT, cT) {
            let MT = null;
            try {
              MT = cT(TT)
            } catch (KT) {
              if (qT("Language definition for '{}' could not be registered.".replace("{}", kT)), !OT) throw KT;
              qT(KT), MT = fT
            }
            MT.name || (MT.name = kT), lT[kT] = MT, MT.rawDefinition = cT.bind(null, TT), MT.aliases && PT(MT.aliases, {
              languageName: kT
            })
          },
          unregisterLanguage: function(TT) {
            delete lT[TT];
            for (const kT of Object.keys(MT)) MT[kT] === TT && delete MT[kT]
          },
          listLanguages: function() {
            return Object.keys(lT)
          },
          getLanguage: rT,
          registerAliases: PT,
          autoDetection: wT,
          inherit: fk,
          addPlugin: function(TT) {
            ! function(TT) {
              TT["before:highlightBlock"] && !TT["before:highlightElement"] && (TT["before:highlightElement"] = kT => {
                TT["before:highlightBlock"](Object.assign({
                  block: kT.el
                }, kT))
              }), TT["after:highlightBlock"] && !TT["after:highlightElement"] && (TT["after:highlightElement"] = kT => {
                TT["after:highlightBlock"](Object.assign({
                  block: kT.el
                }, kT))
              })
            }(TT), KT.push(TT)
          },
          removePlugin: function(TT) {
            const kT = KT.indexOf(TT); - 1 !== kT && KT.splice(kT, 1)
          }
        }), TT.debugMode = function() {
          OT = !1
        }, TT.safeMode = function() {
          OT = !0
        }, TT.versionString = "11.11.1", TT.regex = {
          concat: vT,
          lookahead: AT,
          either: tT,
          optional: jT,
          anyNumberOfTimes: CT
        };
        for (const cT in XT) "object" === typeof XT[cT] && kT(XT[cT]);
        return Object.assign(TT, XT), TT
      },
      Ak = Ik({});
    Ak.newInstance = () => Ik({}), TT.exports = Ak, Ak.HighlightJS = Ak, Ak.default = Ak
  },
  4698: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    const lT = cT(4700)
  },
  4702: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => AT
    });
    const lT = "[A-Za-z$_][0-9A-Za-z$_]*",
      MT = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      KT = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      OT = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      yT = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      fT = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      xT = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      IT = [].concat(fT, OT, yT);

    function AT(TT) {
      const kT = TT.regex,
        cT = lT,
        AT = "<>",
        CT = "</>",
        jT = {
          Ij: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (TT, kT) => {
            const cT = TT[0].length + TT.index,
              lT = TT.input[cT];
            if ("<" === lT || "," === lT) return void kT.ignoreMatch();
            let MT;
            ">" === lT && (((TT, kT) => {
              let {
                after: cT
              } = kT;
              const lT = "</" + TT[0].slice(1);
              return -1 !== TT.input.indexOf(lT, cT)
            })(TT, {
              after: cT
            }) || kT.ignoreMatch());
            const KT = TT.input.substring(cT);
            ((MT = KT.match(/^\s*=/)) || (MT = KT.match(/^\s+extends\s+/)) && 0 === MT.index) && kT.ignoreMatch()
          }
        },
        vT = {
          $pattern: lT,
          keyword: MT,
          literal: KT,
          built_in: IT,
          "variable.language": xT
        },
        tT = "[0-9](_?[0-9])*",
        hT = `\\.(${tT})`,
        NT = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        QT = {
          className: "number",
          variants: [{
            Ij: `(\\b(${NT})((${hT})|\\.)?|(${hT}))[eE][+-]?(${tT})\\b`
          }, {
            Ij: `\\b(${NT})\\b((${hT})\\b|\\.)?|(${hT})\\b`
          }, {
            Ij: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Ij: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Ij: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Ij: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Ij: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        ST = {
          className: "subst",
          Ij: "\\$\\{",
          end: "\\}",
          keywords: vT,
          contains: []
        },
        DT = {
          Ij: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, ST],
            subLanguage: "xml"
          }
        },
        aT = {
          Ij: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, ST],
            subLanguage: "css"
          }
        },
        FT = {
          Ij: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, ST],
            subLanguage: "graphql"
          }
        },
        rT = {
          className: "string",
          Ij: "`",
          end: "`",
          contains: [TT.BACKSLASH_ESCAPE, ST]
        },
        PT = {
          className: "comment",
          variants: [TT.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Ij: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Ij: "@[A-Za-z]+"
              }, {
                className: "type",
                Ij: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Ij: cT + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Ij: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), TT.C_BLOCK_COMMENT_MODE, TT.C_LINE_COMMENT_MODE]
        },
        wT = [TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, DT, aT, FT, rT, {
          match: /\$\d+/
        }, QT];
      ST.contains = wT.concat({
        Ij: /\{/,
        end: /\}/,
        keywords: vT,
        contains: ["self"].concat(wT)
      });
      const mT = [].concat(PT, ST.contains),
        bT = mT.concat([{
          Ij: /(\s*)\(/,
          end: /\)/,
          keywords: vT,
          contains: ["self"].concat(mT)
        }]),
        zT = {
          className: "params",
          Ij: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: vT,
          contains: bT
        },
        JT = {
          variants: [{
            match: [/class/, /\s+/, cT, /\s+/, /extends/, /\s+/, kT.concat(cT, "(", kT.concat(/\./, cT), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, cT],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        oT = {
          relevance: 0,
          match: kT.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...OT, ...yT]
          }
        },
        HT = {
          variants: [{
            match: [/function/, /\s+/, cT, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [zT],
          illegal: /%/
        };
      const eT = {
        match: kT.concat(/\b/, (GT = [...fT, "super", "import"].map((TT => `${TT}\\s*\\(`)), kT.concat("(?!", GT.join("|"), ")")), cT, kT.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var GT;
      const VT = {
          Ij: kT.concat(/\./, kT.lookahead(kT.concat(cT, /(?![0-9A-Za-z$_(])/))),
          end: cT,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        ET = {
          match: [/get|set/, /\s+/, cT, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Ij: /\(\)/
          }, zT]
        },
        ZT = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + TT.UNDERSCORE_IDENT_RE + ")\\s*=>",
        uT = {
          match: [/const|var|let/, /\s+/, cT, /\s*/, /=\s*/, /(async\s*)?/, kT.lookahead(ZT)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [zT]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: vT,
        exports: {
          PARAMS_CONTAINS: bT,
          CLASS_REFERENCE: oT
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
          Ij: /^\s*['"]use (strict|asm)['"]/
        }, TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, DT, aT, FT, rT, PT, {
          match: /\$\d+/
        }, QT, oT, {
          scope: "attr",
          match: cT + kT.lookahead(":"),
          relevance: 0
        }, uT, {
          Ij: "(" + TT.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [PT, TT.REGEXP_MODE, {
            className: "function",
            Ij: ZT,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Ij: TT.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Ij: /\(\s*\)/,
                skip: !0
              }, {
                Ij: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: vT,
                contains: bT
              }]
            }]
          }, {
            Ij: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Ij: AT,
              end: CT
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Ij: jT.Ij,
              "on:begin": jT.isTrulyOpeningTag,
              end: jT.end
            }],
            subLanguage: "xml",
            contains: [{
              Ij: jT.Ij,
              end: jT.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, HT, {
          beginKeywords: "while if switch catch for"
        }, {
          Ij: "\\b(?!function)" + TT.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [zT, TT.inherit(TT.TITLE_MODE, {
            Ij: cT,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, VT, {
          match: "\\$" + cT,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [zT]
        }, eT, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, JT, ET, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4705: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT
    });
    const lT = "[A-Za-z$_][0-9A-Za-z$_]*",
      MT = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      KT = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      OT = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      yT = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      fT = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      xT = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      IT = [].concat(fT, OT, yT);

    function AT(TT) {
      const kT = TT.regex,
        cT = lT,
        AT = "<>",
        CT = "</>",
        jT = {
          Ij: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (TT, kT) => {
            const cT = TT[0].length + TT.index,
              lT = TT.input[cT];
            if ("<" === lT || "," === lT) return void kT.ignoreMatch();
            let MT;
            ">" === lT && (((TT, kT) => {
              let {
                after: cT
              } = kT;
              const lT = "</" + TT[0].slice(1);
              return -1 !== TT.input.indexOf(lT, cT)
            })(TT, {
              after: cT
            }) || kT.ignoreMatch());
            const KT = TT.input.substring(cT);
            ((MT = KT.match(/^\s*=/)) || (MT = KT.match(/^\s+extends\s+/)) && 0 === MT.index) && kT.ignoreMatch()
          }
        },
        vT = {
          $pattern: lT,
          keyword: MT,
          literal: KT,
          built_in: IT,
          "variable.language": xT
        },
        tT = "[0-9](_?[0-9])*",
        hT = `\\.(${tT})`,
        NT = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        QT = {
          className: "number",
          variants: [{
            Ij: `(\\b(${NT})((${hT})|\\.)?|(${hT}))[eE][+-]?(${tT})\\b`
          }, {
            Ij: `\\b(${NT})\\b((${hT})\\b|\\.)?|(${hT})\\b`
          }, {
            Ij: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Ij: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Ij: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Ij: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Ij: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        ST = {
          className: "subst",
          Ij: "\\$\\{",
          end: "\\}",
          keywords: vT,
          contains: []
        },
        DT = {
          Ij: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, ST],
            subLanguage: "xml"
          }
        },
        aT = {
          Ij: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, ST],
            subLanguage: "css"
          }
        },
        FT = {
          Ij: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [TT.BACKSLASH_ESCAPE, ST],
            subLanguage: "graphql"
          }
        },
        rT = {
          className: "string",
          Ij: "`",
          end: "`",
          contains: [TT.BACKSLASH_ESCAPE, ST]
        },
        PT = {
          className: "comment",
          variants: [TT.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Ij: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Ij: "@[A-Za-z]+"
              }, {
                className: "type",
                Ij: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Ij: cT + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Ij: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), TT.C_BLOCK_COMMENT_MODE, TT.C_LINE_COMMENT_MODE]
        },
        wT = [TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, DT, aT, FT, rT, {
          match: /\$\d+/
        }, QT];
      ST.contains = wT.concat({
        Ij: /\{/,
        end: /\}/,
        keywords: vT,
        contains: ["self"].concat(wT)
      });
      const mT = [].concat(PT, ST.contains),
        bT = mT.concat([{
          Ij: /(\s*)\(/,
          end: /\)/,
          keywords: vT,
          contains: ["self"].concat(mT)
        }]),
        zT = {
          className: "params",
          Ij: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: vT,
          contains: bT
        },
        JT = {
          variants: [{
            match: [/class/, /\s+/, cT, /\s+/, /extends/, /\s+/, kT.concat(cT, "(", kT.concat(/\./, cT), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, cT],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        oT = {
          relevance: 0,
          match: kT.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...OT, ...yT]
          }
        },
        HT = {
          variants: [{
            match: [/function/, /\s+/, cT, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [zT],
          illegal: /%/
        };
      const eT = {
        match: kT.concat(/\b/, (GT = [...fT, "super", "import"].map((TT => `${TT}\\s*\\(`)), kT.concat("(?!", GT.join("|"), ")")), cT, kT.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var GT;
      const VT = {
          Ij: kT.concat(/\./, kT.lookahead(kT.concat(cT, /(?![0-9A-Za-z$_(])/))),
          end: cT,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        ET = {
          match: [/get|set/, /\s+/, cT, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Ij: /\(\)/
          }, zT]
        },
        ZT = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + TT.UNDERSCORE_IDENT_RE + ")\\s*=>",
        uT = {
          match: [/const|var|let/, /\s+/, cT, /\s*/, /=\s*/, /(async\s*)?/, kT.lookahead(ZT)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [zT]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: vT,
        exports: {
          PARAMS_CONTAINS: bT,
          CLASS_REFERENCE: oT
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
          Ij: /^\s*['"]use (strict|asm)['"]/
        }, TT.APOS_STRING_MODE, TT.QUOTE_STRING_MODE, DT, aT, FT, rT, PT, {
          match: /\$\d+/
        }, QT, oT, {
          scope: "attr",
          match: cT + kT.lookahead(":"),
          relevance: 0
        }, uT, {
          Ij: "(" + TT.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [PT, TT.REGEXP_MODE, {
            className: "function",
            Ij: ZT,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Ij: TT.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Ij: /\(\s*\)/,
                skip: !0
              }, {
                Ij: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: vT,
                contains: bT
              }]
            }]
          }, {
            Ij: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Ij: AT,
              end: CT
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Ij: jT.Ij,
              "on:begin": jT.isTrulyOpeningTag,
              end: jT.end
            }],
            subLanguage: "xml",
            contains: [{
              Ij: jT.Ij,
              end: jT.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, HT, {
          beginKeywords: "while if switch catch for"
        }, {
          Ij: "\\b(?!function)" + TT.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [zT, TT.inherit(TT.TITLE_MODE, {
            Ij: cT,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, VT, {
          match: "\\$" + cT,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [zT]
        }, eT, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, JT, ET, {
          match: /\$[(.]/
        }]
      }
    }

    function CT(TT) {
      const kT = TT.regex,
        cT = AT(TT),
        OT = lT,
        yT = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        fT = {
          Ij: [/namespace/, /\s+/, TT.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        CT = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: yT
          },
          contains: [cT.exports.CLASS_REFERENCE]
        },
        jT = {
          $pattern: lT,
          keyword: MT.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: KT,
          built_in: IT.concat(yT),
          "variable.language": xT
        },
        vT = {
          className: "meta",
          Ij: "@" + OT
        },
        tT = (TT, kT, cT) => {
          const lT = TT.contains.findIndex((TT => TT.label === kT));
          if (-1 === lT) throw new Error("can not find mode to replace");
          TT.contains.splice(lT, 1, cT)
        };
      Object.assign(cT.keywords, jT), cT.exports.PARAMS_CONTAINS.push(vT);
      const hT = cT.contains.find((TT => "attr" === TT.scope)),
        NT = Object.assign({}, hT, {
          match: kT.concat(OT, kT.lookahead(/\s*\?:/))
        });
      cT.exports.PARAMS_CONTAINS.push([cT.exports.CLASS_REFERENCE, hT, NT]), cT.contains = cT.contains.concat([vT, fT, CT, NT]), tT(cT, "shebang", TT.SHEBANG()), tT(cT, "use_strict", {
        className: "meta",
        relevance: 10,
        Ij: /^\s*['"]use strict['"]/
      });
      return cT.contains.find((TT => "func.def" === TT.label)).relevance = 0, Object.assign(cT, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), cT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);