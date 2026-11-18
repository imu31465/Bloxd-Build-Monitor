export const id = 70;
export const ids = [70];
export const modules = {
  4119: JJ => {
    function cJ(JJ) {
      return JJ instanceof Map ? JJ.clear = JJ.delete = JJ.set = function() {
        throw new Error("map is read-only")
      } : JJ instanceof Set && (JJ.add = JJ.clear = JJ.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(JJ), Object.getOwnPropertyNames(JJ).forEach((ZJ => {
        const FJ = JJ[ZJ],
          UJ = typeof FJ;
        "object" !== UJ && "function" !== UJ || Object.isFrozen(FJ) || cJ(FJ)
      })), JJ
    }
    class ZJ {
      constructor(JJ) {
        void 0 === JJ.data && (JJ.data = {}), this.data = JJ.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function FJ(JJ) {
      return JJ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function UJ(JJ) {
      const cJ = Object.create(null);
      for (const eJ in JJ) cJ[eJ] = JJ[eJ];
      for (var ZJ = arguments.length, FJ = new Array(ZJ > 1 ? ZJ - 1 : 0), UJ = 1; UJ < ZJ; UJ++) FJ[UJ - 1] = arguments[UJ];
      return FJ.forEach((function(JJ) {
        for (const ZJ in JJ) cJ[ZJ] = JJ[ZJ]
      })), cJ
    }
    const eJ = JJ => !!JJ.scope;
    class XJ {
      constructor(JJ, cJ) {
        this.buffer = "", this.classPrefix = cJ.classPrefix, JJ.walk(this)
      }
      addText(JJ) {
        this.buffer += FJ(JJ)
      }
      openNode(JJ) {
        if (!eJ(JJ)) return;
        const cJ = ((JJ, cJ) => {
          let {
            prefix: ZJ
          } = cJ;
          if (JJ.startsWith("language:")) return JJ.replace("language:", "language-");
          if (JJ.includes(".")) {
            const cJ = JJ.split(".");
            return [`${ZJ}${cJ.shift()}`, ...cJ.map(((JJ, cJ) => `${JJ}${"_".repeat(cJ+1)}`))].join(" ")
          }
          return `${ZJ}${JJ}`
        })(JJ.scope, {
          prefix: this.classPrefix
        });
        this.span(cJ)
      }
      closeNode(JJ) {
        eJ(JJ) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(JJ) {
        this.buffer += `<span class="${JJ}">`
      }
    }
    const AJ = function() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const cJ = {
        children: []
      };
      return Object.assign(cJ, JJ), cJ
    };
    class qJ {
      constructor() {
        this.Wm = AJ(), this.stack = [this.Wm]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.Wm
      }
      add(JJ) {
        this.top.children.push(JJ)
      }
      openNode(JJ) {
        const cJ = AJ({
          scope: JJ
        });
        this.add(cJ), this.stack.push(cJ)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.Wm, null, 4)
      }
      walk(JJ) {
        return this.constructor._walk(JJ, this.Wm)
      }
      static _walk(JJ, cJ) {
        return "string" === typeof cJ ? JJ.addText(cJ) : cJ.children && (JJ.openNode(cJ), cJ.children.forEach((cJ => this._walk(JJ, cJ))), JJ.closeNode(cJ)), JJ
      }
      static _collapse(JJ) {
        "string" !== typeof JJ && JJ.children && (JJ.children.every((JJ => "string" === typeof JJ)) ? JJ.children = [JJ.children.join("")] : JJ.children.forEach((JJ => {
          qJ._collapse(JJ)
        })))
      }
    }
    class jJ extends qJ {
      constructor(JJ) {
        super(), this.options = JJ
      }
      addText(JJ) {
        "" !== JJ && this.add(JJ)
      }
      startScope(JJ) {
        this.openNode(JJ)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(JJ, cJ) {
        const ZJ = JJ.root;
        cJ && (ZJ.scope = `language:${cJ}`), this.add(ZJ)
      }
      toHTML() {
        return new XJ(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function YJ(JJ) {
      return JJ ? "string" === typeof JJ ? JJ : JJ.source : null
    }

    function hJ(JJ) {
      return nJ("(?=", JJ, ")")
    }

    function DJ(JJ) {
      return nJ("(?:", JJ, ")*")
    }

    function sJ(JJ) {
      return nJ("(?:", JJ, ")?")
    }

    function nJ() {
      for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
      return cJ.map((JJ => YJ(JJ))).join("")
    }

    function GJ() {
      for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
      const FJ = function(JJ) {
        const cJ = JJ[JJ.length - 1];
        return "object" === typeof cJ && cJ.constructor === Object ? (JJ.splice(JJ.length - 1, 1), cJ) : {}
      }(cJ);
      return "(" + (FJ.capture ? "" : "?:") + cJ.map((JJ => YJ(JJ))).join("|") + ")"
    }

    function fJ(JJ) {
      return new RegExp(JJ.toString() + "|").exec("").length - 1
    }
    const xJ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function rJ(JJ, cJ) {
      let {
        joinWith: ZJ
      } = cJ, FJ = 0;
      return JJ.map((JJ => {
        FJ += 1;
        const cJ = FJ;
        let ZJ = YJ(JJ),
          UJ = "";
        for (; ZJ.length > 0;) {
          const JJ = xJ.exec(ZJ);
          if (!JJ) {
            UJ += ZJ;
            break
          }
          UJ += ZJ.substring(0, JJ.index), ZJ = ZJ.substring(JJ.index + JJ[0].length), "\\" === JJ[0][0] && JJ[1] ? UJ += "\\" + String(Number(JJ[1]) + cJ) : (UJ += JJ[0], "(" === JJ[0] && FJ++)
        }
        return UJ
      })).map((JJ => `(${JJ})`)).join(ZJ)
    }
    const vJ = "[a-zA-Z]\\w*",
      mJ = "[a-zA-Z_]\\w*",
      QJ = "\\b\\d+(\\.\\d+)?",
      EJ = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      VJ = "\\b(0b[01]+)",
      KJ = {
        Fs: "\\\\[\\s\\S]",
        relevance: 0
      },
      yJ = {
        scope: "string",
        Fs: "'",
        end: "'",
        illegal: "\\n",
        contains: [KJ]
      },
      SJ = {
        scope: "string",
        Fs: '"',
        end: '"',
        illegal: "\\n",
        contains: [KJ]
      },
      IJ = function(JJ, cJ) {
        const ZJ = UJ({
          scope: "comment",
          Fs: JJ,
          end: cJ,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        ZJ.contains.push({
          scope: "doctag",
          Fs: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const FJ = GJ("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return ZJ.contains.push({
          Fs: nJ(/[ ]+/, "(", FJ, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), ZJ
      },
      MJ = IJ("//", "$"),
      bJ = IJ("/\\*", "\\*/"),
      wJ = IJ("#", "$"),
      WJ = {
        scope: "number",
        Fs: QJ,
        relevance: 0
      },
      gJ = {
        scope: "number",
        Fs: EJ,
        relevance: 0
      },
      HJ = {
        scope: "number",
        Fs: VJ,
        relevance: 0
      },
      PJ = {
        scope: "regexp",
        Fs: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [KJ, {
          Fs: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [KJ]
        }]
      },
      kJ = {
        scope: "title",
        Fs: vJ,
        relevance: 0
      },
      pJ = {
        scope: "title",
        Fs: mJ,
        relevance: 0
      },
      dJ = {
        Fs: "\\.\\s*" + mJ,
        relevance: 0
      };
    var zJ = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: yJ,
      BACKSLASH_ESCAPE: KJ,
      BINARY_NUMBER_MODE: HJ,
      BINARY_NUMBER_RE: VJ,
      COMMENT: IJ,
      C_BLOCK_COMMENT_MODE: bJ,
      C_LINE_COMMENT_MODE: MJ,
      C_NUMBER_MODE: gJ,
      C_NUMBER_RE: EJ,
      END_SAME_AS_BEGIN: function(JJ) {
        return Object.assign(JJ, {
          "on:begin": (JJ, cJ) => {
            cJ.data._beginMatch = JJ[1]
          },
          "on:end": (JJ, cJ) => {
            cJ.data._beginMatch !== JJ[1] && cJ.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: wJ,
      IDENT_RE: vJ,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: dJ,
      NUMBER_MODE: WJ,
      NUMBER_RE: QJ,
      PHRASAL_WORDS_MODE: {
        Fs: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: SJ,
      REGEXP_MODE: PJ,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const cJ = /^#![ ]*\//;
        return JJ.binary && (JJ.Fs = nJ(cJ, /.*\b/, JJ.binary, /\b.*/)), UJ({
          scope: "meta",
          Fs: cJ,
          end: /$/,
          relevance: 0,
          "on:begin": (JJ, cJ) => {
            0 !== JJ.index && cJ.ignoreMatch()
          }
        }, JJ)
      },
      TITLE_MODE: kJ,
      UNDERSCORE_IDENT_RE: mJ,
      UNDERSCORE_TITLE_MODE: pJ
    });

    function NJ(JJ, cJ) {
      "." === JJ.input[JJ.index - 1] && cJ.ignoreMatch()
    }

    function OJ(JJ, cJ) {
      void 0 !== JJ.className && (JJ.scope = JJ.className, delete JJ.className)
    }

    function TJ(JJ, cJ) {
      cJ && JJ.beginKeywords && (JJ.Fs = "\\b(" + JJ.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", JJ.__beforeBegin = NJ, JJ.keywords = JJ.keywords || JJ.beginKeywords, delete JJ.beginKeywords, void 0 === JJ.relevance && (JJ.relevance = 0))
    }

    function CJ(JJ, cJ) {
      Array.isArray(JJ.illegal) && (JJ.illegal = GJ(...JJ.illegal))
    }

    function uJ(JJ, cJ) {
      if (JJ.match) {
        if (JJ.Fs || JJ.end) throw new Error("begin & end are not supported with match");
        JJ.Fs = JJ.match, delete JJ.match
      }
    }

    function iJ(JJ, cJ) {
      void 0 === JJ.relevance && (JJ.relevance = 1)
    }
    const RJ = (JJ, cJ) => {
        if (!JJ.beforeMatch) return;
        if (JJ.starts) throw new Error("beforeMatch cannot be used with starts");
        const ZJ = Object.assign({}, JJ);
        Object.keys(JJ).forEach((cJ => {
          delete JJ[cJ]
        })), JJ.keywords = ZJ.keywords, JJ.Fs = nJ(ZJ.beforeMatch, hJ(ZJ.Fs)), JJ.starts = {
          relevance: 0,
          contains: [Object.assign(ZJ, {
            endsParent: !0
          })]
        }, JJ.relevance = 0, delete ZJ.beforeMatch
      },
      LJ = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function aJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const FJ = Object.create(null);
      return "string" === typeof JJ ? UJ(ZJ, JJ.split(" ")) : Array.isArray(JJ) ? UJ(ZJ, JJ) : Object.keys(JJ).forEach((function(ZJ) {
        Object.assign(FJ, aJ(JJ[ZJ], cJ, ZJ))
      })), FJ;

      function UJ(JJ, ZJ) {
        cJ && (ZJ = ZJ.map((JJ => JJ.toLowerCase()))), ZJ.forEach((function(cJ) {
          const ZJ = cJ.split("|");
          FJ[ZJ[0]] = [JJ, BJ(ZJ[0], ZJ[1])]
        }))
      }
    }

    function BJ(JJ, cJ) {
      return cJ ? Number(cJ) : function(JJ) {
        return LJ.includes(JJ.toLowerCase())
      }(JJ) ? 0 : 1
    }
    const tJ = {},
      oJ = JJ => {
        console.error(JJ)
      },
      lJ = function(JJ) {
        for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
        console.log(`WARN: ${JJ}`, ...ZJ)
      },
      Jc = (JJ, cJ) => {
        tJ[`${JJ}/${cJ}`] || (console.log(`Deprecated as of ${JJ}. ${cJ}`), tJ[`${JJ}/${cJ}`] = !0)
      },
      cc = new Error;

    function Zc(JJ, cJ, ZJ) {
      let {
        key: FJ
      } = ZJ, UJ = 0;
      const eJ = JJ[FJ],
        XJ = {},
        AJ = {};
      for (let qJ = 1; qJ <= cJ.length; qJ++) AJ[qJ + UJ] = eJ[qJ], XJ[qJ + UJ] = !0, UJ += fJ(cJ[qJ - 1]);
      JJ[FJ] = AJ, JJ[FJ]._emit = XJ, JJ[FJ]._multi = !0
    }

    function Fc(JJ) {
      ! function(JJ) {
        JJ.scope && "object" === typeof JJ.scope && null !== JJ.scope && (JJ.beginScope = JJ.scope, delete JJ.scope)
      }(JJ), "string" === typeof JJ.beginScope && (JJ.beginScope = {
          _wrap: JJ.beginScope
        }), "string" === typeof JJ.endScope && (JJ.endScope = {
          _wrap: JJ.endScope
        }),
        function(JJ) {
          if (Array.isArray(JJ.Fs)) {
            if (JJ.skip || JJ.excludeBegin || JJ.returnBegin) throw oJ("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), cc;
            if ("object" !== typeof JJ.beginScope || null === JJ.beginScope) throw oJ("beginScope must be object"), cc;
            Zc(JJ, JJ.Fs, {
              key: "beginScope"
            }), JJ.Fs = rJ(JJ.Fs, {
              joinWith: ""
            })
          }
        }(JJ),
        function(JJ) {
          if (Array.isArray(JJ.end)) {
            if (JJ.skip || JJ.excludeEnd || JJ.returnEnd) throw oJ("skip, excludeEnd, returnEnd not compatible with endScope: {}"), cc;
            if ("object" !== typeof JJ.endScope || null === JJ.endScope) throw oJ("endScope must be object"), cc;
            Zc(JJ, JJ.end, {
              key: "endScope"
            }), JJ.end = rJ(JJ.end, {
              joinWith: ""
            })
          }
        }(JJ)
    }

    function Uc(JJ) {
      function cJ(cJ, ZJ) {
        return new RegExp(YJ(cJ), "m" + (JJ.case_insensitive ? "i" : "") + (JJ.unicodeRegex ? "u" : "") + (ZJ ? "g" : ""))
      }
      class ZJ {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(JJ, cJ) {
          cJ.position = this.position++, this.matchIndexes[this.matchAt] = cJ, this.regexes.push([cJ, JJ]), this.matchAt += fJ(JJ) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const JJ = this.regexes.map((JJ => JJ[1]));
          this.matcherRe = cJ(rJ(JJ, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(JJ) {
          this.matcherRe.lastIndex = this.lastIndex;
          const cJ = this.matcherRe.exec(JJ);
          if (!cJ) return null;
          const ZJ = cJ.findIndex(((JJ, cJ) => cJ > 0 && void 0 !== JJ)),
            FJ = this.matchIndexes[ZJ];
          return cJ.splice(0, ZJ), Object.assign(cJ, FJ)
        }
      }
      class FJ {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(JJ) {
          if (this.multiRegexes[JJ]) return this.multiRegexes[JJ];
          const cJ = new ZJ;
          return this.rules.slice(JJ).forEach((JJ => {
            let [ZJ, FJ] = JJ;
            return cJ.addRule(ZJ, FJ)
          })), cJ.compile(), this.multiRegexes[JJ] = cJ, cJ
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(JJ, cJ) {
          this.rules.push([JJ, cJ]), "Fs" === cJ.type && this.count++
        }
        exec(JJ) {
          const cJ = this.getMatcher(this.regexIndex);
          cJ.lastIndex = this.lastIndex;
          let ZJ = cJ.exec(JJ);
          if (this.resumingScanAtSamePosition())
            if (ZJ && ZJ.index === this.lastIndex);
            else {
              const cJ = this.getMatcher(0);
              cJ.lastIndex = this.lastIndex + 1, ZJ = cJ.exec(JJ)
            } return ZJ && (this.regexIndex += ZJ.position + 1, this.regexIndex === this.count && this.considerAll()), ZJ
        }
      }
      if (JJ.compilerExtensions || (JJ.compilerExtensions = []), JJ.contains && JJ.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return JJ.classNameAliases = UJ(JJ.classNameAliases || {}),
        function ZJ(eJ, XJ) {
          const AJ = eJ;
          if (eJ.isCompiled) return AJ;
          [OJ, uJ, Fc, RJ].forEach((JJ => JJ(eJ, XJ))), JJ.compilerExtensions.forEach((JJ => JJ(eJ, XJ))), eJ.__beforeBegin = null, [TJ, CJ, iJ].forEach((JJ => JJ(eJ, XJ))), eJ.isCompiled = !0;
          let qJ = null;
          return "object" === typeof eJ.keywords && eJ.keywords.$pattern && (eJ.keywords = Object.assign({}, eJ.keywords), qJ = eJ.keywords.$pattern, delete eJ.keywords.$pattern), qJ = qJ || /\w+/, eJ.keywords && (eJ.keywords = aJ(eJ.keywords, JJ.case_insensitive)), AJ.keywordPatternRe = cJ(qJ, !0), XJ && (eJ.Fs || (eJ.Fs = /\B|\b/), AJ.beginRe = cJ(AJ.Fs), eJ.end || eJ.endsWithParent || (eJ.end = /\B|\b/), eJ.end && (AJ.endRe = cJ(AJ.end)), AJ.terminatorEnd = YJ(AJ.end) || "", eJ.endsWithParent && XJ.terminatorEnd && (AJ.terminatorEnd += (eJ.end ? "|" : "") + XJ.terminatorEnd)), eJ.illegal && (AJ.illegalRe = cJ(eJ.illegal)), eJ.contains || (eJ.contains = []), eJ.contains = [].concat(...eJ.contains.map((function(JJ) {
            return function(JJ) {
              JJ.variants && !JJ.cachedVariants && (JJ.cachedVariants = JJ.variants.map((function(cJ) {
                return UJ(JJ, {
                  variants: null
                }, cJ)
              })));
              if (JJ.cachedVariants) return JJ.cachedVariants;
              if (ec(JJ)) return UJ(JJ, {
                starts: JJ.starts ? UJ(JJ.starts) : null
              });
              if (Object.isFrozen(JJ)) return UJ(JJ);
              return JJ
            }("self" === JJ ? eJ : JJ)
          }))), eJ.contains.forEach((function(JJ) {
            ZJ(JJ, AJ)
          })), eJ.starts && ZJ(eJ.starts, XJ), AJ.matcher = function(JJ) {
            const cJ = new FJ;
            return JJ.contains.forEach((JJ => cJ.addRule(JJ.Fs, {
              rule: JJ,
              type: "Fs"
            }))), JJ.terminatorEnd && cJ.addRule(JJ.terminatorEnd, {
              type: "end"
            }), JJ.illegal && cJ.addRule(JJ.illegal, {
              type: "illegal"
            }), cJ
          }(AJ), AJ
        }(JJ)
    }

    function ec(JJ) {
      return !!JJ && (JJ.endsWithParent || ec(JJ.starts))
    }
    class Xc extends Error {
      constructor(JJ, cJ) {
        super(JJ), this.name = "HTMLInjectionError", this.html = cJ
      }
    }
    const Ac = FJ,
      qc = UJ,
      jc = Symbol("nomatch"),
      Yc = function(JJ) {
        const FJ = Object.create(null),
          UJ = Object.create(null),
          eJ = [];
        let XJ = !0;
        const AJ = "Could not find the language '{}', did you forget to load/include a language module?",
          qJ = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let YJ = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: jJ
        };

        function fJ(JJ) {
          return YJ.noHighlightRe.test(JJ)
        }

        function xJ(JJ, cJ, ZJ) {
          let FJ = "",
            UJ = "";
          "object" === typeof cJ ? (FJ = JJ, ZJ = cJ.ignoreIllegals, UJ = cJ.language) : (Jc("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Jc("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), UJ = JJ, FJ = cJ), void 0 === ZJ && (ZJ = !0);
          const eJ = {
            code: FJ,
            language: UJ
          };
          SJ("before:highlight", eJ);
          const XJ = eJ.result ? eJ.result : rJ(eJ.language, eJ.code, ZJ);
          return XJ.code = eJ.code, SJ("after:highlight", XJ), XJ
        }

        function rJ(JJ, cJ, UJ, eJ) {
          const qJ = Object.create(null);

          function jJ() {
            if (!SJ.keywords) return void MJ.addText(bJ);
            let JJ = 0;
            SJ.keywordPatternRe.lastIndex = 0;
            let cJ = SJ.keywordPatternRe.exec(bJ),
              ZJ = "";
            for (; cJ;) {
              ZJ += bJ.substring(JJ, cJ.index);
              const UJ = EJ.case_insensitive ? cJ[0].toLowerCase() : cJ[0],
                eJ = (FJ = UJ, SJ.keywords[FJ]);
              if (eJ) {
                const [JJ, FJ] = eJ;
                if (MJ.addText(ZJ), ZJ = "", qJ[UJ] = (qJ[UJ] || 0) + 1, qJ[UJ] <= 7 && (wJ += FJ), JJ.startsWith("_")) ZJ += cJ[0];
                else {
                  const ZJ = EJ.classNameAliases[JJ] || JJ;
                  DJ(cJ[0], ZJ)
                }
              } else ZJ += cJ[0];
              JJ = SJ.keywordPatternRe.lastIndex, cJ = SJ.keywordPatternRe.exec(bJ)
            }
            var FJ;
            ZJ += bJ.substring(JJ), MJ.addText(ZJ)
          }

          function hJ() {
            null != SJ.subLanguage ? function() {
              if ("" === bJ) return;
              let JJ = null;
              if ("string" === typeof SJ.subLanguage) {
                if (!FJ[SJ.subLanguage]) return void MJ.addText(bJ);
                JJ = rJ(SJ.subLanguage, bJ, !0, IJ[SJ.subLanguage]), IJ[SJ.subLanguage] = JJ._top
              } else JJ = vJ(bJ, SJ.subLanguage.length ? SJ.subLanguage : null);
              SJ.relevance > 0 && (wJ += JJ.relevance), MJ.__addSublanguage(JJ._emitter, JJ.language)
            }() : jJ(), bJ = ""
          }

          function DJ(JJ, cJ) {
            "" !== JJ && (MJ.startScope(cJ), MJ.addText(JJ), MJ.endScope())
          }

          function sJ(JJ, cJ) {
            let ZJ = 1;
            const FJ = cJ.length - 1;
            for (; ZJ <= FJ;) {
              if (!JJ._emit[ZJ]) {
                ZJ++;
                continue
              }
              const FJ = EJ.classNameAliases[JJ[ZJ]] || JJ[ZJ],
                UJ = cJ[ZJ];
              FJ ? DJ(UJ, FJ) : (bJ = UJ, jJ(), bJ = ""), ZJ++
            }
          }

          function nJ(JJ, cJ) {
            return JJ.scope && "string" === typeof JJ.scope && MJ.openNode(EJ.classNameAliases[JJ.scope] || JJ.scope), JJ.beginScope && (JJ.beginScope._wrap ? (DJ(bJ, EJ.classNameAliases[JJ.beginScope._wrap] || JJ.beginScope._wrap), bJ = "") : JJ.beginScope._multi && (sJ(JJ.beginScope, cJ), bJ = "")), SJ = Object.create(JJ, {
              parent: {
                value: SJ
              }
            }), SJ
          }

          function GJ(JJ, cJ, FJ) {
            let UJ = function(JJ, cJ) {
              const ZJ = JJ && JJ.exec(cJ);
              return ZJ && 0 === ZJ.index
            }(JJ.endRe, FJ);
            if (UJ) {
              if (JJ["on:end"]) {
                const FJ = new ZJ(JJ);
                JJ["on:end"](cJ, FJ), FJ.isMatchIgnored && (UJ = !1)
              }
              if (UJ) {
                for (; JJ.endsParent && JJ.parent;) JJ = JJ.parent;
                return JJ
              }
            }
            if (JJ.endsWithParent) return GJ(JJ.parent, cJ, FJ)
          }

          function fJ(JJ) {
            return 0 === SJ.matcher.regexIndex ? (bJ += JJ[0], 1) : (HJ = !0, 0)
          }

          function xJ(JJ) {
            const ZJ = JJ[0],
              FJ = cJ.substring(JJ.index),
              UJ = GJ(SJ, JJ, FJ);
            if (!UJ) return jc;
            const eJ = SJ;
            SJ.endScope && SJ.endScope._wrap ? (hJ(), DJ(ZJ, SJ.endScope._wrap)) : SJ.endScope && SJ.endScope._multi ? (hJ(), sJ(SJ.endScope, JJ)) : eJ.skip ? bJ += ZJ : (eJ.returnEnd || eJ.excludeEnd || (bJ += ZJ), hJ(), eJ.excludeEnd && (bJ = ZJ));
            do {
              SJ.scope && MJ.closeNode(), SJ.skip || SJ.subLanguage || (wJ += SJ.relevance), SJ = SJ.parent
            } while (SJ !== UJ.parent);
            return UJ.starts && nJ(UJ.starts, JJ), eJ.returnEnd ? 0 : ZJ.length
          }
          let mJ = {};

          function QJ(FJ, eJ) {
            const AJ = eJ && eJ[0];
            if (bJ += FJ, null == AJ) return hJ(), 0;
            if ("Fs" === mJ.type && "end" === eJ.type && mJ.index === eJ.index && "" === AJ) {
              if (bJ += cJ.slice(eJ.index, eJ.index + 1), !XJ) {
                const cJ = new Error(`0 width match regex (${JJ})`);
                throw cJ.languageName = JJ, cJ.badRule = mJ.rule, cJ
              }
              return 1
            }
            if (mJ = eJ, "Fs" === eJ.type) return function(JJ) {
              const cJ = JJ[0],
                FJ = JJ.rule,
                UJ = new ZJ(FJ),
                eJ = [FJ.__beforeBegin, FJ["on:begin"]];
              for (const ZJ of eJ)
                if (ZJ && (ZJ(JJ, UJ), UJ.isMatchIgnored)) return fJ(cJ);
              return FJ.skip ? bJ += cJ : (FJ.excludeBegin && (bJ += cJ), hJ(), FJ.returnBegin || FJ.excludeBegin || (bJ = cJ)), nJ(FJ, JJ), FJ.returnBegin ? 0 : cJ.length
            }(eJ);
            if ("illegal" === eJ.type && !UJ) {
              const JJ = new Error('Illegal lexeme "' + AJ + '" for mode "' + (SJ.scope || "<unnamed>") + '"');
              throw JJ.mode = SJ, JJ
            }
            if ("end" === eJ.type) {
              const JJ = xJ(eJ);
              if (JJ !== jc) return JJ
            }
            if ("illegal" === eJ.type && "" === AJ) return bJ += "\n", 1;
            if (gJ > 1e5 && gJ > 3 * eJ.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return bJ += AJ, AJ.length
          }
          const EJ = VJ(JJ);
          if (!EJ) throw oJ(AJ.replace("{}", JJ)), new Error('Unknown language: "' + JJ + '"');
          const KJ = Uc(EJ);
          let yJ = "",
            SJ = eJ || KJ;
          const IJ = {},
            MJ = new YJ.__emitter(YJ);
          ! function() {
            const JJ = [];
            for (let cJ = SJ; cJ !== EJ; cJ = cJ.parent) cJ.scope && JJ.unshift(cJ.scope);
            JJ.forEach((JJ => MJ.openNode(JJ)))
          }();
          let bJ = "",
            wJ = 0,
            WJ = 0,
            gJ = 0,
            HJ = !1;
          try {
            if (EJ.__emitTokens) EJ.__emitTokens(cJ, MJ);
            else {
              for (SJ.matcher.considerAll();;) {
                gJ++, HJ ? HJ = !1 : SJ.matcher.considerAll(), SJ.matcher.lastIndex = WJ;
                const JJ = SJ.matcher.exec(cJ);
                if (!JJ) break;
                const ZJ = QJ(cJ.substring(WJ, JJ.index), JJ);
                WJ = JJ.index + ZJ
              }
              QJ(cJ.substring(WJ))
            }
            return MJ.finalize(), yJ = MJ.toHTML(), {
              language: JJ,
              value: yJ,
              relevance: wJ,
              illegal: !1,
              _emitter: MJ,
              _top: SJ
            }
          } catch (PJ) {
            if (PJ.message && PJ.message.includes("Illegal")) return {
              language: JJ,
              value: Ac(cJ),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: PJ.message,
                index: WJ,
                context: cJ.slice(WJ - 100, WJ + 100),
                mode: PJ.mode,
                resultSoFar: yJ
              },
              _emitter: MJ
            };
            if (XJ) return {
              language: JJ,
              value: Ac(cJ),
              illegal: !1,
              relevance: 0,
              errorRaised: PJ,
              _emitter: MJ,
              _top: SJ
            };
            throw PJ
          }
        }

        function vJ(JJ, cJ) {
          cJ = cJ || YJ.languages || Object.keys(FJ);
          const ZJ = function(JJ) {
              const cJ = {
                value: Ac(JJ),
                illegal: !1,
                relevance: 0,
                _top: qJ,
                _emitter: new YJ.__emitter(YJ)
              };
              return cJ._emitter.addText(JJ), cJ
            }(JJ),
            UJ = cJ.filter(VJ).filter(yJ).map((cJ => rJ(cJ, JJ, !1)));
          UJ.unshift(ZJ);
          const eJ = UJ.sort(((JJ, cJ) => {
              if (JJ.relevance !== cJ.relevance) return cJ.relevance - JJ.relevance;
              if (JJ.language && cJ.language) {
                if (VJ(JJ.language).supersetOf === cJ.language) return 1;
                if (VJ(cJ.language).supersetOf === JJ.language) return -1
              }
              return 0
            })),
            [XJ, AJ] = eJ,
            jJ = XJ;
          return jJ.secondBest = AJ, jJ
        }

        function mJ(JJ) {
          let cJ = null;
          const ZJ = function(JJ) {
            let cJ = JJ.className + " ";
            cJ += JJ.parentNode ? JJ.parentNode.className : "";
            const ZJ = YJ.languageDetectRe.exec(cJ);
            if (ZJ) {
              const cJ = VJ(ZJ[1]);
              return cJ || (lJ(AJ.replace("{}", ZJ[1])), lJ("Falling back to no-highlight mode for this block.", JJ)), cJ ? ZJ[1] : "no-highlight"
            }
            return cJ.split(/\s+/).find((JJ => fJ(JJ) || VJ(JJ)))
          }(JJ);
          if (fJ(ZJ)) return;
          if (SJ("before:highlightElement", {
              el: JJ,
              language: ZJ
            }), JJ.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", JJ);
          if (JJ.children.length > 0 && (YJ.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(JJ)), YJ.throwUnescapedHTML)) {
            throw new Xc("One of your code blocks includes unescaped HTML.", JJ.innerHTML)
          }
          cJ = JJ;
          const FJ = cJ.textContent,
            eJ = ZJ ? xJ(FJ, {
              language: ZJ,
              ignoreIllegals: !0
            }) : vJ(FJ);
          JJ.innerHTML = eJ.value, JJ.dataset.highlighted = "yes",
            function(JJ, cJ, ZJ) {
              const FJ = cJ && UJ[cJ] || ZJ;
              JJ.classList.add("hljs"), JJ.classList.add(`language-${FJ}`)
            }(JJ, ZJ, eJ.language), JJ.result = {
              language: eJ.language,
              re: eJ.relevance,
              relevance: eJ.relevance
            }, eJ.secondBest && (JJ.secondBest = {
              language: eJ.secondBest.language,
              relevance: eJ.secondBest.relevance
            }), SJ("after:highlightElement", {
              el: JJ,
              result: eJ,
              text: FJ
            })
        }
        let QJ = !1;

        function EJ() {
          if ("loading" === document.readyState) return QJ || window.addEventListener("DOMContentLoaded", (function() {
            EJ()
          }), !1), void(QJ = !0);
          document.querySelectorAll(YJ.cssSelector).forEach(mJ)
        }

        function VJ(JJ) {
          return JJ = (JJ || "").toLowerCase(), FJ[JJ] || FJ[UJ[JJ]]
        }

        function KJ(JJ, cJ) {
          let {
            languageName: ZJ
          } = cJ;
          "string" === typeof JJ && (JJ = [JJ]), JJ.forEach((JJ => {
            UJ[JJ.toLowerCase()] = ZJ
          }))
        }

        function yJ(JJ) {
          const cJ = VJ(JJ);
          return cJ && !cJ.disableAutodetect
        }

        function SJ(JJ, cJ) {
          const ZJ = JJ;
          eJ.forEach((function(JJ) {
            JJ[ZJ] && JJ[ZJ](cJ)
          }))
        }
        Object.assign(JJ, {
          highlight: xJ,
          highlightAuto: vJ,
          highlightAll: EJ,
          highlightElement: mJ,
          highlightBlock: function(JJ) {
            return Jc("10.7.0", "highlightBlock will be removed entirely in v12.0"), Jc("10.7.0", "Please use highlightElement now."), mJ(JJ)
          },
          configure: function(JJ) {
            YJ = qc(YJ, JJ)
          },
          initHighlighting: () => {
            EJ(), Jc("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            EJ(), Jc("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(cJ, ZJ) {
            let UJ = null;
            try {
              UJ = ZJ(JJ)
            } catch (eJ) {
              if (oJ("Language definition for '{}' could not be registered.".replace("{}", cJ)), !XJ) throw eJ;
              oJ(eJ), UJ = qJ
            }
            UJ.name || (UJ.name = cJ), FJ[cJ] = UJ, UJ.rawDefinition = ZJ.bind(null, JJ), UJ.aliases && KJ(UJ.aliases, {
              languageName: cJ
            })
          },
          unregisterLanguage: function(JJ) {
            delete FJ[JJ];
            for (const cJ of Object.keys(UJ)) UJ[cJ] === JJ && delete UJ[cJ]
          },
          listLanguages: function() {
            return Object.keys(FJ)
          },
          getLanguage: VJ,
          registerAliases: KJ,
          autoDetection: yJ,
          inherit: qc,
          addPlugin: function(JJ) {
            ! function(JJ) {
              JJ["before:highlightBlock"] && !JJ["before:highlightElement"] && (JJ["before:highlightElement"] = cJ => {
                JJ["before:highlightBlock"](Object.assign({
                  block: cJ.el
                }, cJ))
              }), JJ["after:highlightBlock"] && !JJ["after:highlightElement"] && (JJ["after:highlightElement"] = cJ => {
                JJ["after:highlightBlock"](Object.assign({
                  block: cJ.el
                }, cJ))
              })
            }(JJ), eJ.push(JJ)
          },
          removePlugin: function(JJ) {
            const cJ = eJ.indexOf(JJ); - 1 !== cJ && eJ.splice(cJ, 1)
          }
        }), JJ.debugMode = function() {
          XJ = !1
        }, JJ.safeMode = function() {
          XJ = !0
        }, JJ.versionString = "11.11.1", JJ.regex = {
          concat: nJ,
          lookahead: hJ,
          either: GJ,
          optional: sJ,
          anyNumberOfTimes: DJ
        };
        for (const ZJ in zJ) "object" === typeof zJ[ZJ] && cJ(zJ[ZJ]);
        return Object.assign(JJ, zJ), JJ
      },
      hc = Yc({});
    hc.newInstance = () => Yc({}), JJ.exports = hc, hc.HighlightJS = hc, hc.default = hc
  },
  4111: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    const FJ = ZJ(4119)
  },
  4122: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => hJ
    });
    const FJ = "[A-Za-z$_][0-9A-Za-z$_]*",
      UJ = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      eJ = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      XJ = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      AJ = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      qJ = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      jJ = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      YJ = [].concat(qJ, XJ, AJ);

    function hJ(JJ) {
      const cJ = JJ.regex,
        ZJ = FJ,
        hJ = "<>",
        DJ = "</>",
        sJ = {
          Fs: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (JJ, cJ) => {
            const ZJ = JJ[0].length + JJ.index,
              FJ = JJ.input[ZJ];
            if ("<" === FJ || "," === FJ) return void cJ.ignoreMatch();
            let UJ;
            ">" === FJ && (((JJ, cJ) => {
              let {
                after: ZJ
              } = cJ;
              const FJ = "</" + JJ[0].slice(1);
              return -1 !== JJ.input.indexOf(FJ, ZJ)
            })(JJ, {
              after: ZJ
            }) || cJ.ignoreMatch());
            const eJ = JJ.input.substring(ZJ);
            ((UJ = eJ.match(/^\s*=/)) || (UJ = eJ.match(/^\s+extends\s+/)) && 0 === UJ.index) && cJ.ignoreMatch()
          }
        },
        nJ = {
          $pattern: FJ,
          keyword: UJ,
          literal: eJ,
          built_in: YJ,
          "variable.language": jJ
        },
        GJ = "[0-9](_?[0-9])*",
        fJ = `\\.(${GJ})`,
        xJ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        rJ = {
          className: "number",
          variants: [{
            Fs: `(\\b(${xJ})((${fJ})|\\.)?|(${fJ}))[eE][+-]?(${GJ})\\b`
          }, {
            Fs: `\\b(${xJ})\\b((${fJ})\\b|\\.)?|(${fJ})\\b`
          }, {
            Fs: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Fs: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Fs: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Fs: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Fs: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        vJ = {
          className: "subst",
          Fs: "\\$\\{",
          end: "\\}",
          keywords: nJ,
          contains: []
        },
        mJ = {
          Fs: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [JJ.BACKSLASH_ESCAPE, vJ],
            subLanguage: "xml"
          }
        },
        QJ = {
          Fs: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [JJ.BACKSLASH_ESCAPE, vJ],
            subLanguage: "css"
          }
        },
        EJ = {
          Fs: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [JJ.BACKSLASH_ESCAPE, vJ],
            subLanguage: "graphql"
          }
        },
        VJ = {
          className: "string",
          Fs: "`",
          end: "`",
          contains: [JJ.BACKSLASH_ESCAPE, vJ]
        },
        KJ = {
          className: "comment",
          variants: [JJ.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Fs: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Fs: "@[A-Za-z]+"
              }, {
                className: "type",
                Fs: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Fs: ZJ + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Fs: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), JJ.C_BLOCK_COMMENT_MODE, JJ.C_LINE_COMMENT_MODE]
        },
        yJ = [JJ.APOS_STRING_MODE, JJ.QUOTE_STRING_MODE, mJ, QJ, EJ, VJ, {
          match: /\$\d+/
        }, rJ];
      vJ.contains = yJ.concat({
        Fs: /\{/,
        end: /\}/,
        keywords: nJ,
        contains: ["self"].concat(yJ)
      });
      const SJ = [].concat(KJ, vJ.contains),
        IJ = SJ.concat([{
          Fs: /(\s*)\(/,
          end: /\)/,
          keywords: nJ,
          contains: ["self"].concat(SJ)
        }]),
        MJ = {
          className: "params",
          Fs: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: nJ,
          contains: IJ
        },
        bJ = {
          variants: [{
            match: [/class/, /\s+/, ZJ, /\s+/, /extends/, /\s+/, cJ.concat(ZJ, "(", cJ.concat(/\./, ZJ), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ZJ],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        wJ = {
          relevance: 0,
          match: cJ.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...XJ, ...AJ]
          }
        },
        WJ = {
          variants: [{
            match: [/function/, /\s+/, ZJ, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [MJ],
          illegal: /%/
        };
      const gJ = {
        match: cJ.concat(/\b/, (HJ = [...qJ, "super", "import"].map((JJ => `${JJ}\\s*\\(`)), cJ.concat("(?!", HJ.join("|"), ")")), ZJ, cJ.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var HJ;
      const PJ = {
          Fs: cJ.concat(/\./, cJ.lookahead(cJ.concat(ZJ, /(?![0-9A-Za-z$_(])/))),
          end: ZJ,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        kJ = {
          match: [/get|set/, /\s+/, ZJ, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Fs: /\(\)/
          }, MJ]
        },
        pJ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + JJ.UNDERSCORE_IDENT_RE + ")\\s*=>",
        dJ = {
          match: [/const|var|let/, /\s+/, ZJ, /\s*/, /=\s*/, /(async\s*)?/, cJ.lookahead(pJ)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [MJ]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: nJ,
        exports: {
          PARAMS_CONTAINS: IJ,
          CLASS_REFERENCE: wJ
        },
        illegal: /#(?![$_A-z])/,
        contains: [JJ.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Fs: /^\s*['"]use (strict|asm)['"]/
        }, JJ.APOS_STRING_MODE, JJ.QUOTE_STRING_MODE, mJ, QJ, EJ, VJ, KJ, {
          match: /\$\d+/
        }, rJ, wJ, {
          scope: "attr",
          match: ZJ + cJ.lookahead(":"),
          relevance: 0
        }, dJ, {
          Fs: "(" + JJ.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [KJ, JJ.REGEXP_MODE, {
            className: "function",
            Fs: pJ,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Fs: JJ.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Fs: /\(\s*\)/,
                skip: !0
              }, {
                Fs: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: nJ,
                contains: IJ
              }]
            }]
          }, {
            Fs: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Fs: hJ,
              end: DJ
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Fs: sJ.Fs,
              "on:begin": sJ.isTrulyOpeningTag,
              end: sJ.end
            }],
            subLanguage: "xml",
            contains: [{
              Fs: sJ.Fs,
              end: sJ.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, WJ, {
          beginKeywords: "while if switch catch for"
        }, {
          Fs: "\\b(?!function)" + JJ.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [MJ, JJ.inherit(JJ.TITLE_MODE, {
            Fs: ZJ,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, PJ, {
          match: "\\$" + ZJ,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [MJ]
        }, gJ, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, bJ, kJ, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4128: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => DJ
    });
    const FJ = "[A-Za-z$_][0-9A-Za-z$_]*",
      UJ = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      eJ = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      XJ = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      AJ = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      qJ = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      jJ = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      YJ = [].concat(qJ, XJ, AJ);

    function hJ(JJ) {
      const cJ = JJ.regex,
        ZJ = FJ,
        hJ = "<>",
        DJ = "</>",
        sJ = {
          Fs: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (JJ, cJ) => {
            const ZJ = JJ[0].length + JJ.index,
              FJ = JJ.input[ZJ];
            if ("<" === FJ || "," === FJ) return void cJ.ignoreMatch();
            let UJ;
            ">" === FJ && (((JJ, cJ) => {
              let {
                after: ZJ
              } = cJ;
              const FJ = "</" + JJ[0].slice(1);
              return -1 !== JJ.input.indexOf(FJ, ZJ)
            })(JJ, {
              after: ZJ
            }) || cJ.ignoreMatch());
            const eJ = JJ.input.substring(ZJ);
            ((UJ = eJ.match(/^\s*=/)) || (UJ = eJ.match(/^\s+extends\s+/)) && 0 === UJ.index) && cJ.ignoreMatch()
          }
        },
        nJ = {
          $pattern: FJ,
          keyword: UJ,
          literal: eJ,
          built_in: YJ,
          "variable.language": jJ
        },
        GJ = "[0-9](_?[0-9])*",
        fJ = `\\.(${GJ})`,
        xJ = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        rJ = {
          className: "number",
          variants: [{
            Fs: `(\\b(${xJ})((${fJ})|\\.)?|(${fJ}))[eE][+-]?(${GJ})\\b`
          }, {
            Fs: `\\b(${xJ})\\b((${fJ})\\b|\\.)?|(${fJ})\\b`
          }, {
            Fs: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Fs: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Fs: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Fs: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Fs: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        vJ = {
          className: "subst",
          Fs: "\\$\\{",
          end: "\\}",
          keywords: nJ,
          contains: []
        },
        mJ = {
          Fs: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [JJ.BACKSLASH_ESCAPE, vJ],
            subLanguage: "xml"
          }
        },
        QJ = {
          Fs: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [JJ.BACKSLASH_ESCAPE, vJ],
            subLanguage: "css"
          }
        },
        EJ = {
          Fs: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [JJ.BACKSLASH_ESCAPE, vJ],
            subLanguage: "graphql"
          }
        },
        VJ = {
          className: "string",
          Fs: "`",
          end: "`",
          contains: [JJ.BACKSLASH_ESCAPE, vJ]
        },
        KJ = {
          className: "comment",
          variants: [JJ.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Fs: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Fs: "@[A-Za-z]+"
              }, {
                className: "type",
                Fs: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Fs: ZJ + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Fs: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), JJ.C_BLOCK_COMMENT_MODE, JJ.C_LINE_COMMENT_MODE]
        },
        yJ = [JJ.APOS_STRING_MODE, JJ.QUOTE_STRING_MODE, mJ, QJ, EJ, VJ, {
          match: /\$\d+/
        }, rJ];
      vJ.contains = yJ.concat({
        Fs: /\{/,
        end: /\}/,
        keywords: nJ,
        contains: ["self"].concat(yJ)
      });
      const SJ = [].concat(KJ, vJ.contains),
        IJ = SJ.concat([{
          Fs: /(\s*)\(/,
          end: /\)/,
          keywords: nJ,
          contains: ["self"].concat(SJ)
        }]),
        MJ = {
          className: "params",
          Fs: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: nJ,
          contains: IJ
        },
        bJ = {
          variants: [{
            match: [/class/, /\s+/, ZJ, /\s+/, /extends/, /\s+/, cJ.concat(ZJ, "(", cJ.concat(/\./, ZJ), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ZJ],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        wJ = {
          relevance: 0,
          match: cJ.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...XJ, ...AJ]
          }
        },
        WJ = {
          variants: [{
            match: [/function/, /\s+/, ZJ, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [MJ],
          illegal: /%/
        };
      const gJ = {
        match: cJ.concat(/\b/, (HJ = [...qJ, "super", "import"].map((JJ => `${JJ}\\s*\\(`)), cJ.concat("(?!", HJ.join("|"), ")")), ZJ, cJ.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var HJ;
      const PJ = {
          Fs: cJ.concat(/\./, cJ.lookahead(cJ.concat(ZJ, /(?![0-9A-Za-z$_(])/))),
          end: ZJ,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        kJ = {
          match: [/get|set/, /\s+/, ZJ, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Fs: /\(\)/
          }, MJ]
        },
        pJ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + JJ.UNDERSCORE_IDENT_RE + ")\\s*=>",
        dJ = {
          match: [/const|var|let/, /\s+/, ZJ, /\s*/, /=\s*/, /(async\s*)?/, cJ.lookahead(pJ)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [MJ]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: nJ,
        exports: {
          PARAMS_CONTAINS: IJ,
          CLASS_REFERENCE: wJ
        },
        illegal: /#(?![$_A-z])/,
        contains: [JJ.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Fs: /^\s*['"]use (strict|asm)['"]/
        }, JJ.APOS_STRING_MODE, JJ.QUOTE_STRING_MODE, mJ, QJ, EJ, VJ, KJ, {
          match: /\$\d+/
        }, rJ, wJ, {
          scope: "attr",
          match: ZJ + cJ.lookahead(":"),
          relevance: 0
        }, dJ, {
          Fs: "(" + JJ.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [KJ, JJ.REGEXP_MODE, {
            className: "function",
            Fs: pJ,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Fs: JJ.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Fs: /\(\s*\)/,
                skip: !0
              }, {
                Fs: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: nJ,
                contains: IJ
              }]
            }]
          }, {
            Fs: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Fs: hJ,
              end: DJ
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Fs: sJ.Fs,
              "on:begin": sJ.isTrulyOpeningTag,
              end: sJ.end
            }],
            subLanguage: "xml",
            contains: [{
              Fs: sJ.Fs,
              end: sJ.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, WJ, {
          beginKeywords: "while if switch catch for"
        }, {
          Fs: "\\b(?!function)" + JJ.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [MJ, JJ.inherit(JJ.TITLE_MODE, {
            Fs: ZJ,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, PJ, {
          match: "\\$" + ZJ,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [MJ]
        }, gJ, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, bJ, kJ, {
          match: /\$[(.]/
        }]
      }
    }

    function DJ(JJ) {
      const cJ = JJ.regex,
        ZJ = hJ(JJ),
        XJ = FJ,
        AJ = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        qJ = {
          Fs: [/namespace/, /\s+/, JJ.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        DJ = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: AJ
          },
          contains: [ZJ.exports.CLASS_REFERENCE]
        },
        sJ = {
          $pattern: FJ,
          keyword: UJ.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: eJ,
          built_in: YJ.concat(AJ),
          "variable.language": jJ
        },
        nJ = {
          className: "meta",
          Fs: "@" + XJ
        },
        GJ = (JJ, cJ, ZJ) => {
          const FJ = JJ.contains.findIndex((JJ => JJ.label === cJ));
          if (-1 === FJ) throw new Error("can not find mode to replace");
          JJ.contains.splice(FJ, 1, ZJ)
        };
      Object.assign(ZJ.keywords, sJ), ZJ.exports.PARAMS_CONTAINS.push(nJ);
      const fJ = ZJ.contains.find((JJ => "attr" === JJ.scope)),
        xJ = Object.assign({}, fJ, {
          match: cJ.concat(XJ, cJ.lookahead(/\s*\?:/))
        });
      ZJ.exports.PARAMS_CONTAINS.push([ZJ.exports.CLASS_REFERENCE, fJ, xJ]), ZJ.contains = ZJ.contains.concat([nJ, qJ, DJ, xJ]), GJ(ZJ, "shebang", JJ.SHEBANG()), GJ(ZJ, "use_strict", {
        className: "meta",
        relevance: 10,
        Fs: /^\s*['"]use strict['"]/
      });
      return ZJ.contains.find((JJ => "func.def" === JJ.label)).relevance = 0, Object.assign(ZJ, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), ZJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);