export const id = 80;
export const ids = [80];
export const modules = {
  4906: BB => {
    function IB(BB) {
      return BB instanceof Map ? BB.clear = BB.delete = BB.set = function() {
        throw new Error("map is read-only")
      } : BB instanceof Set && (BB.add = BB.clear = BB.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(BB), Object.getOwnPropertyNames(BB).forEach((ZB => {
        const TB = BB[ZB],
          JB = typeof TB;
        "object" !== JB && "function" !== JB || Object.isFrozen(TB) || IB(TB)
      })), BB
    }
    class ZB {
      constructor(BB) {
        void 0 === BB.data && (BB.data = {}), this.data = BB.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function TB(BB) {
      return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function JB(BB) {
      const IB = Object.create(null);
      for (const oB in BB) IB[oB] = BB[oB];
      for (var ZB = arguments.length, TB = new Array(ZB > 1 ? ZB - 1 : 0), JB = 1; JB < ZB; JB++) TB[JB - 1] = arguments[JB];
      return TB.forEach((function(BB) {
        for (const ZB in BB) IB[ZB] = BB[ZB]
      })), IB
    }
    const oB = BB => !!BB.scope;
    class GB {
      constructor(BB, IB) {
        this.buffer = "", this.classPrefix = IB.classPrefix, BB.walk(this)
      }
      addText(BB) {
        this.buffer += TB(BB)
      }
      openNode(BB) {
        if (!oB(BB)) return;
        const IB = ((BB, IB) => {
          let {
            prefix: ZB
          } = IB;
          if (BB.startsWith("language:")) return BB.replace("language:", "language-");
          if (BB.includes(".")) {
            const IB = BB.split(".");
            return [`${ZB}${IB.shift()}`, ...IB.map(((BB, IB) => `${BB}${"_".repeat(IB+1)}`))].join(" ")
          }
          return `${ZB}${BB}`
        })(BB.scope, {
          prefix: this.classPrefix
        });
        this.span(IB)
      }
      closeNode(BB) {
        oB(BB) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(BB) {
        this.buffer += `<span class="${BB}">`
      }
    }
    const vB = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const IB = {
        children: []
      };
      return Object.assign(IB, BB), IB
    };
    class kB {
      constructor() {
        this.pU = vB(), this.stack = [this.pU]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.pU
      }
      add(BB) {
        this.top.children.push(BB)
      }
      openNode(BB) {
        const IB = vB({
          scope: BB
        });
        this.add(IB), this.stack.push(IB)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.pU, null, 4)
      }
      walk(BB) {
        return this.constructor._walk(BB, this.pU)
      }
      static _walk(BB, IB) {
        return "string" === typeof IB ? BB.addText(IB) : IB.children && (BB.openNode(IB), IB.children.forEach((IB => this._walk(BB, IB))), BB.closeNode(IB)), BB
      }
      static _collapse(BB) {
        "string" !== typeof BB && BB.children && (BB.children.every((BB => "string" === typeof BB)) ? BB.children = [BB.children.join("")] : BB.children.forEach((BB => {
          kB._collapse(BB)
        })))
      }
    }
    class cB extends kB {
      constructor(BB) {
        super(), this.options = BB
      }
      addText(BB) {
        "" !== BB && this.add(BB)
      }
      startScope(BB) {
        this.openNode(BB)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(BB, IB) {
        const ZB = BB.root;
        IB && (ZB.scope = `language:${IB}`), this.add(ZB)
      }
      toHTML() {
        return new GB(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function nB(BB) {
      return BB ? "string" === typeof BB ? BB : BB.source : null
    }

    function hB(BB) {
      return NB("(?=", BB, ")")
    }

    function zB(BB) {
      return NB("(?:", BB, ")*")
    }

    function FB(BB) {
      return NB("(?:", BB, ")?")
    }

    function NB() {
      for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
      return IB.map((BB => nB(BB))).join("")
    }

    function gB() {
      for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
      const TB = function(BB) {
        const IB = BB[BB.length - 1];
        return "object" === typeof IB && IB.constructor === Object ? (BB.splice(BB.length - 1, 1), IB) : {}
      }(IB);
      return "(" + (TB.capture ? "" : "?:") + IB.map((BB => nB(BB))).join("|") + ")"
    }

    function qB(BB) {
      return new RegExp(BB.toString() + "|").exec("").length - 1
    }
    const yB = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function UB(BB, IB) {
      let {
        joinWith: ZB
      } = IB, TB = 0;
      return BB.map((BB => {
        TB += 1;
        const IB = TB;
        let ZB = nB(BB),
          JB = "";
        for (; ZB.length > 0;) {
          const BB = yB.exec(ZB);
          if (!BB) {
            JB += ZB;
            break
          }
          JB += ZB.substring(0, BB.index), ZB = ZB.substring(BB.index + BB[0].length), "\\" === BB[0][0] && BB[1] ? JB += "\\" + String(Number(BB[1]) + IB) : (JB += BB[0], "(" === BB[0] && TB++)
        }
        return JB
      })).map((BB => `(${BB})`)).join(ZB)
    }
    const WB = "[a-zA-Z]\\w*",
      dB = "[a-zA-Z_]\\w*",
      CB = "\\b\\d+(\\.\\d+)?",
      QB = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      sB = "\\b(0b[01]+)",
      wB = {
        QF: "\\\\[\\s\\S]",
        relevance: 0
      },
      OB = {
        scope: "string",
        QF: "'",
        end: "'",
        illegal: "\\n",
        contains: [wB]
      },
      YB = {
        scope: "string",
        QF: '"',
        end: '"',
        illegal: "\\n",
        contains: [wB]
      },
      iB = function(BB, IB) {
        const ZB = JB({
          scope: "comment",
          QF: BB,
          end: IB,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        ZB.contains.push({
          scope: "doctag",
          QF: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const TB = gB("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return ZB.contains.push({
          QF: NB(/[ ]+/, "(", TB, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), ZB
      },
      pB = iB("//", "$"),
      aB = iB("/\\*", "\\*/"),
      HB = iB("#", "$"),
      MB = {
        scope: "number",
        QF: CB,
        relevance: 0
      },
      jB = {
        scope: "number",
        QF: QB,
        relevance: 0
      },
      PB = {
        scope: "number",
        QF: sB,
        relevance: 0
      },
      RB = {
        scope: "regexp",
        QF: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [wB, {
          QF: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [wB]
        }]
      },
      rB = {
        scope: "title",
        QF: WB,
        relevance: 0
      },
      mB = {
        scope: "title",
        QF: dB,
        relevance: 0
      },
      XB = {
        QF: "\\.\\s*" + dB,
        relevance: 0
      };
    var LB = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: OB,
      BACKSLASH_ESCAPE: wB,
      BINARY_NUMBER_MODE: PB,
      BINARY_NUMBER_RE: sB,
      COMMENT: iB,
      C_BLOCK_COMMENT_MODE: aB,
      C_LINE_COMMENT_MODE: pB,
      C_NUMBER_MODE: jB,
      C_NUMBER_RE: QB,
      END_SAME_AS_BEGIN: function(BB) {
        return Object.assign(BB, {
          "on:begin": (BB, IB) => {
            IB.data._beginMatch = BB[1]
          },
          "on:end": (BB, IB) => {
            IB.data._beginMatch !== BB[1] && IB.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: HB,
      IDENT_RE: WB,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: XB,
      NUMBER_MODE: MB,
      NUMBER_RE: CB,
      PHRASAL_WORDS_MODE: {
        QF: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: YB,
      REGEXP_MODE: RB,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const IB = /^#![ ]*\//;
        return BB.binary && (BB.QF = NB(IB, /.*\b/, BB.binary, /\b.*/)), JB({
          scope: "meta",
          QF: IB,
          end: /$/,
          relevance: 0,
          "on:begin": (BB, IB) => {
            0 !== BB.index && IB.ignoreMatch()
          }
        }, BB)
      },
      TITLE_MODE: rB,
      UNDERSCORE_IDENT_RE: dB,
      UNDERSCORE_TITLE_MODE: mB
    });

    function eB(BB, IB) {
      "." === BB.input[BB.index - 1] && IB.ignoreMatch()
    }

    function uB(BB, IB) {
      void 0 !== BB.className && (BB.scope = BB.className, delete BB.className)
    }

    function fB(BB, IB) {
      IB && BB.beginKeywords && (BB.QF = "\\b(" + BB.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", BB.__beforeBegin = eB, BB.keywords = BB.keywords || BB.beginKeywords, delete BB.beginKeywords, void 0 === BB.relevance && (BB.relevance = 0))
    }

    function lB(BB, IB) {
      Array.isArray(BB.illegal) && (BB.illegal = gB(...BB.illegal))
    }

    function AB(BB, IB) {
      if (BB.match) {
        if (BB.QF || BB.end) throw new Error("begin & end are not supported with match");
        BB.QF = BB.match, delete BB.match
      }
    }

    function tB(BB, IB) {
      void 0 === BB.relevance && (BB.relevance = 1)
    }
    const bB = (BB, IB) => {
        if (!BB.beforeMatch) return;
        if (BB.starts) throw new Error("beforeMatch cannot be used with starts");
        const ZB = Object.assign({}, BB);
        Object.keys(BB).forEach((IB => {
          delete BB[IB]
        })), BB.keywords = ZB.keywords, BB.QF = NB(ZB.beforeMatch, hB(ZB.QF)), BB.starts = {
          relevance: 0,
          contains: [Object.assign(ZB, {
            endsParent: !0
          })]
        }, BB.relevance = 0, delete ZB.beforeMatch
      },
      xB = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function EB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const TB = Object.create(null);
      return "string" === typeof BB ? JB(ZB, BB.split(" ")) : Array.isArray(BB) ? JB(ZB, BB) : Object.keys(BB).forEach((function(ZB) {
        Object.assign(TB, EB(BB[ZB], IB, ZB))
      })), TB;

      function JB(BB, ZB) {
        IB && (ZB = ZB.map((BB => BB.toLowerCase()))), ZB.forEach((function(IB) {
          const ZB = IB.split("|");
          TB[ZB[0]] = [BB, DB(ZB[0], ZB[1])]
        }))
      }
    }

    function DB(BB, IB) {
      return IB ? Number(IB) : function(BB) {
        return xB.includes(BB.toLowerCase())
      }(BB) ? 0 : 1
    }
    const KB = {},
      VB = BB => {
        console.error(BB)
      },
      SB = function(BB) {
        for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
        console.log(`WARN: ${BB}`, ...ZB)
      },
      BI = (BB, IB) => {
        KB[`${BB}/${IB}`] || (console.log(`Deprecated as of ${BB}. ${IB}`), KB[`${BB}/${IB}`] = !0)
      },
      II = new Error;

    function ZI(BB, IB, ZB) {
      let {
        key: TB
      } = ZB, JB = 0;
      const oB = BB[TB],
        GB = {},
        vB = {};
      for (let kB = 1; kB <= IB.length; kB++) vB[kB + JB] = oB[kB], GB[kB + JB] = !0, JB += qB(IB[kB - 1]);
      BB[TB] = vB, BB[TB]._emit = GB, BB[TB]._multi = !0
    }

    function TI(BB) {
      ! function(BB) {
        BB.scope && "object" === typeof BB.scope && null !== BB.scope && (BB.beginScope = BB.scope, delete BB.scope)
      }(BB), "string" === typeof BB.beginScope && (BB.beginScope = {
          _wrap: BB.beginScope
        }), "string" === typeof BB.endScope && (BB.endScope = {
          _wrap: BB.endScope
        }),
        function(BB) {
          if (Array.isArray(BB.QF)) {
            if (BB.skip || BB.excludeBegin || BB.returnBegin) throw VB("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), II;
            if ("object" !== typeof BB.beginScope || null === BB.beginScope) throw VB("beginScope must be object"), II;
            ZI(BB, BB.QF, {
              key: "beginScope"
            }), BB.QF = UB(BB.QF, {
              joinWith: ""
            })
          }
        }(BB),
        function(BB) {
          if (Array.isArray(BB.end)) {
            if (BB.skip || BB.excludeEnd || BB.returnEnd) throw VB("skip, excludeEnd, returnEnd not compatible with endScope: {}"), II;
            if ("object" !== typeof BB.endScope || null === BB.endScope) throw VB("endScope must be object"), II;
            ZI(BB, BB.end, {
              key: "endScope"
            }), BB.end = UB(BB.end, {
              joinWith: ""
            })
          }
        }(BB)
    }

    function JI(BB) {
      function IB(IB, ZB) {
        return new RegExp(nB(IB), "m" + (BB.case_insensitive ? "i" : "") + (BB.unicodeRegex ? "u" : "") + (ZB ? "g" : ""))
      }
      class ZB {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(BB, IB) {
          IB.position = this.position++, this.matchIndexes[this.matchAt] = IB, this.regexes.push([IB, BB]), this.matchAt += qB(BB) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const BB = this.regexes.map((BB => BB[1]));
          this.matcherRe = IB(UB(BB, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(BB) {
          this.matcherRe.lastIndex = this.lastIndex;
          const IB = this.matcherRe.exec(BB);
          if (!IB) return null;
          const ZB = IB.findIndex(((BB, IB) => IB > 0 && void 0 !== BB)),
            TB = this.matchIndexes[ZB];
          return IB.splice(0, ZB), Object.assign(IB, TB)
        }
      }
      class TB {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(BB) {
          if (this.multiRegexes[BB]) return this.multiRegexes[BB];
          const IB = new ZB;
          return this.rules.slice(BB).forEach((BB => {
            let [ZB, TB] = BB;
            return IB.addRule(ZB, TB)
          })), IB.compile(), this.multiRegexes[BB] = IB, IB
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(BB, IB) {
          this.rules.push([BB, IB]), "QF" === IB.type && this.count++
        }
        exec(BB) {
          const IB = this.getMatcher(this.regexIndex);
          IB.lastIndex = this.lastIndex;
          let ZB = IB.exec(BB);
          if (this.resumingScanAtSamePosition())
            if (ZB && ZB.index === this.lastIndex);
            else {
              const IB = this.getMatcher(0);
              IB.lastIndex = this.lastIndex + 1, ZB = IB.exec(BB)
            } return ZB && (this.regexIndex += ZB.position + 1, this.regexIndex === this.count && this.considerAll()), ZB
        }
      }
      if (BB.compilerExtensions || (BB.compilerExtensions = []), BB.contains && BB.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return BB.classNameAliases = JB(BB.classNameAliases || {}),
        function ZB(oB, GB) {
          const vB = oB;
          if (oB.isCompiled) return vB;
          [uB, AB, TI, bB].forEach((BB => BB(oB, GB))), BB.compilerExtensions.forEach((BB => BB(oB, GB))), oB.__beforeBegin = null, [fB, lB, tB].forEach((BB => BB(oB, GB))), oB.isCompiled = !0;
          let kB = null;
          return "object" === typeof oB.keywords && oB.keywords.$pattern && (oB.keywords = Object.assign({}, oB.keywords), kB = oB.keywords.$pattern, delete oB.keywords.$pattern), kB = kB || /\w+/, oB.keywords && (oB.keywords = EB(oB.keywords, BB.case_insensitive)), vB.keywordPatternRe = IB(kB, !0), GB && (oB.QF || (oB.QF = /\B|\b/), vB.beginRe = IB(vB.QF), oB.end || oB.endsWithParent || (oB.end = /\B|\b/), oB.end && (vB.endRe = IB(vB.end)), vB.terminatorEnd = nB(vB.end) || "", oB.endsWithParent && GB.terminatorEnd && (vB.terminatorEnd += (oB.end ? "|" : "") + GB.terminatorEnd)), oB.illegal && (vB.illegalRe = IB(oB.illegal)), oB.contains || (oB.contains = []), oB.contains = [].concat(...oB.contains.map((function(BB) {
            return function(BB) {
              BB.variants && !BB.cachedVariants && (BB.cachedVariants = BB.variants.map((function(IB) {
                return JB(BB, {
                  variants: null
                }, IB)
              })));
              if (BB.cachedVariants) return BB.cachedVariants;
              if (oI(BB)) return JB(BB, {
                starts: BB.starts ? JB(BB.starts) : null
              });
              if (Object.isFrozen(BB)) return JB(BB);
              return BB
            }("self" === BB ? oB : BB)
          }))), oB.contains.forEach((function(BB) {
            ZB(BB, vB)
          })), oB.starts && ZB(oB.starts, GB), vB.matcher = function(BB) {
            const IB = new TB;
            return BB.contains.forEach((BB => IB.addRule(BB.QF, {
              rule: BB,
              type: "QF"
            }))), BB.terminatorEnd && IB.addRule(BB.terminatorEnd, {
              type: "end"
            }), BB.illegal && IB.addRule(BB.illegal, {
              type: "illegal"
            }), IB
          }(vB), vB
        }(BB)
    }

    function oI(BB) {
      return !!BB && (BB.endsWithParent || oI(BB.starts))
    }
    class GI extends Error {
      constructor(BB, IB) {
        super(BB), this.name = "HTMLInjectionError", this.html = IB
      }
    }
    const vI = TB,
      kI = JB,
      cI = Symbol("nomatch"),
      nI = function(BB) {
        const TB = Object.create(null),
          JB = Object.create(null),
          oB = [];
        let GB = !0;
        const vB = "Could not find the language '{}', did you forget to load/include a language module?",
          kB = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let nB = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: cB
        };

        function qB(BB) {
          return nB.noHighlightRe.test(BB)
        }

        function yB(BB, IB, ZB) {
          let TB = "",
            JB = "";
          "object" === typeof IB ? (TB = BB, ZB = IB.ignoreIllegals, JB = IB.language) : (BI("10.7.0", "highlight(lang, code, ...args) has been deprecated."), BI("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), JB = BB, TB = IB), void 0 === ZB && (ZB = !0);
          const oB = {
            code: TB,
            language: JB
          };
          YB("before:highlight", oB);
          const GB = oB.result ? oB.result : UB(oB.language, oB.code, ZB);
          return GB.code = oB.code, YB("after:highlight", GB), GB
        }

        function UB(BB, IB, JB, oB) {
          const kB = Object.create(null);

          function cB() {
            if (!YB.keywords) return void pB.addText(aB);
            let BB = 0;
            YB.keywordPatternRe.lastIndex = 0;
            let IB = YB.keywordPatternRe.exec(aB),
              ZB = "";
            for (; IB;) {
              ZB += aB.substring(BB, IB.index);
              const JB = QB.case_insensitive ? IB[0].toLowerCase() : IB[0],
                oB = (TB = JB, YB.keywords[TB]);
              if (oB) {
                const [BB, TB] = oB;
                if (pB.addText(ZB), ZB = "", kB[JB] = (kB[JB] || 0) + 1, kB[JB] <= 7 && (HB += TB), BB.startsWith("_")) ZB += IB[0];
                else {
                  const ZB = QB.classNameAliases[BB] || BB;
                  zB(IB[0], ZB)
                }
              } else ZB += IB[0];
              BB = YB.keywordPatternRe.lastIndex, IB = YB.keywordPatternRe.exec(aB)
            }
            var TB;
            ZB += aB.substring(BB), pB.addText(ZB)
          }

          function hB() {
            null != YB.subLanguage ? function() {
              if ("" === aB) return;
              let BB = null;
              if ("string" === typeof YB.subLanguage) {
                if (!TB[YB.subLanguage]) return void pB.addText(aB);
                BB = UB(YB.subLanguage, aB, !0, iB[YB.subLanguage]), iB[YB.subLanguage] = BB._top
              } else BB = WB(aB, YB.subLanguage.length ? YB.subLanguage : null);
              YB.relevance > 0 && (HB += BB.relevance), pB.__addSublanguage(BB._emitter, BB.language)
            }() : cB(), aB = ""
          }

          function zB(BB, IB) {
            "" !== BB && (pB.startScope(IB), pB.addText(BB), pB.endScope())
          }

          function FB(BB, IB) {
            let ZB = 1;
            const TB = IB.length - 1;
            for (; ZB <= TB;) {
              if (!BB._emit[ZB]) {
                ZB++;
                continue
              }
              const TB = QB.classNameAliases[BB[ZB]] || BB[ZB],
                JB = IB[ZB];
              TB ? zB(JB, TB) : (aB = JB, cB(), aB = ""), ZB++
            }
          }

          function NB(BB, IB) {
            return BB.scope && "string" === typeof BB.scope && pB.openNode(QB.classNameAliases[BB.scope] || BB.scope), BB.beginScope && (BB.beginScope._wrap ? (zB(aB, QB.classNameAliases[BB.beginScope._wrap] || BB.beginScope._wrap), aB = "") : BB.beginScope._multi && (FB(BB.beginScope, IB), aB = "")), YB = Object.create(BB, {
              parent: {
                value: YB
              }
            }), YB
          }

          function gB(BB, IB, TB) {
            let JB = function(BB, IB) {
              const ZB = BB && BB.exec(IB);
              return ZB && 0 === ZB.index
            }(BB.endRe, TB);
            if (JB) {
              if (BB["on:end"]) {
                const TB = new ZB(BB);
                BB["on:end"](IB, TB), TB.isMatchIgnored && (JB = !1)
              }
              if (JB) {
                for (; BB.endsParent && BB.parent;) BB = BB.parent;
                return BB
              }
            }
            if (BB.endsWithParent) return gB(BB.parent, IB, TB)
          }

          function qB(BB) {
            return 0 === YB.matcher.regexIndex ? (aB += BB[0], 1) : (PB = !0, 0)
          }

          function yB(BB) {
            const ZB = BB[0],
              TB = IB.substring(BB.index),
              JB = gB(YB, BB, TB);
            if (!JB) return cI;
            const oB = YB;
            YB.endScope && YB.endScope._wrap ? (hB(), zB(ZB, YB.endScope._wrap)) : YB.endScope && YB.endScope._multi ? (hB(), FB(YB.endScope, BB)) : oB.skip ? aB += ZB : (oB.returnEnd || oB.excludeEnd || (aB += ZB), hB(), oB.excludeEnd && (aB = ZB));
            do {
              YB.scope && pB.closeNode(), YB.skip || YB.subLanguage || (HB += YB.relevance), YB = YB.parent
            } while (YB !== JB.parent);
            return JB.starts && NB(JB.starts, BB), oB.returnEnd ? 0 : ZB.length
          }
          let dB = {};

          function CB(TB, oB) {
            const vB = oB && oB[0];
            if (aB += TB, null == vB) return hB(), 0;
            if ("QF" === dB.type && "end" === oB.type && dB.index === oB.index && "" === vB) {
              if (aB += IB.slice(oB.index, oB.index + 1), !GB) {
                const IB = new Error(`0 width match regex (${BB})`);
                throw IB.languageName = BB, IB.badRule = dB.rule, IB
              }
              return 1
            }
            if (dB = oB, "QF" === oB.type) return function(BB) {
              const IB = BB[0],
                TB = BB.rule,
                JB = new ZB(TB),
                oB = [TB.__beforeBegin, TB["on:begin"]];
              for (const ZB of oB)
                if (ZB && (ZB(BB, JB), JB.isMatchIgnored)) return qB(IB);
              return TB.skip ? aB += IB : (TB.excludeBegin && (aB += IB), hB(), TB.returnBegin || TB.excludeBegin || (aB = IB)), NB(TB, BB), TB.returnBegin ? 0 : IB.length
            }(oB);
            if ("illegal" === oB.type && !JB) {
              const BB = new Error('Illegal lexeme "' + vB + '" for mode "' + (YB.scope || "<unnamed>") + '"');
              throw BB.mode = YB, BB
            }
            if ("end" === oB.type) {
              const BB = yB(oB);
              if (BB !== cI) return BB
            }
            if ("illegal" === oB.type && "" === vB) return aB += "\n", 1;
            if (jB > 1e5 && jB > 3 * oB.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return aB += vB, vB.length
          }
          const QB = sB(BB);
          if (!QB) throw VB(vB.replace("{}", BB)), new Error('Unknown language: "' + BB + '"');
          const wB = JI(QB);
          let OB = "",
            YB = oB || wB;
          const iB = {},
            pB = new nB.__emitter(nB);
          ! function() {
            const BB = [];
            for (let IB = YB; IB !== QB; IB = IB.parent) IB.scope && BB.unshift(IB.scope);
            BB.forEach((BB => pB.openNode(BB)))
          }();
          let aB = "",
            HB = 0,
            MB = 0,
            jB = 0,
            PB = !1;
          try {
            if (QB.__emitTokens) QB.__emitTokens(IB, pB);
            else {
              for (YB.matcher.considerAll();;) {
                jB++, PB ? PB = !1 : YB.matcher.considerAll(), YB.matcher.lastIndex = MB;
                const BB = YB.matcher.exec(IB);
                if (!BB) break;
                const ZB = CB(IB.substring(MB, BB.index), BB);
                MB = BB.index + ZB
              }
              CB(IB.substring(MB))
            }
            return pB.finalize(), OB = pB.toHTML(), {
              language: BB,
              value: OB,
              relevance: HB,
              illegal: !1,
              _emitter: pB,
              _top: YB
            }
          } catch (RB) {
            if (RB.message && RB.message.includes("Illegal")) return {
              language: BB,
              value: vI(IB),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: RB.message,
                index: MB,
                context: IB.slice(MB - 100, MB + 100),
                mode: RB.mode,
                resultSoFar: OB
              },
              _emitter: pB
            };
            if (GB) return {
              language: BB,
              value: vI(IB),
              illegal: !1,
              relevance: 0,
              errorRaised: RB,
              _emitter: pB,
              _top: YB
            };
            throw RB
          }
        }

        function WB(BB, IB) {
          IB = IB || nB.languages || Object.keys(TB);
          const ZB = function(BB) {
              const IB = {
                value: vI(BB),
                illegal: !1,
                relevance: 0,
                _top: kB,
                _emitter: new nB.__emitter(nB)
              };
              return IB._emitter.addText(BB), IB
            }(BB),
            JB = IB.filter(sB).filter(OB).map((IB => UB(IB, BB, !1)));
          JB.unshift(ZB);
          const oB = JB.sort(((BB, IB) => {
              if (BB.relevance !== IB.relevance) return IB.relevance - BB.relevance;
              if (BB.language && IB.language) {
                if (sB(BB.language).supersetOf === IB.language) return 1;
                if (sB(IB.language).supersetOf === BB.language) return -1
              }
              return 0
            })),
            [GB, vB] = oB,
            cB = GB;
          return cB.secondBest = vB, cB
        }

        function dB(BB) {
          let IB = null;
          const ZB = function(BB) {
            let IB = BB.className + " ";
            IB += BB.parentNode ? BB.parentNode.className : "";
            const ZB = nB.languageDetectRe.exec(IB);
            if (ZB) {
              const IB = sB(ZB[1]);
              return IB || (SB(vB.replace("{}", ZB[1])), SB("Falling back to no-highlight mode for this block.", BB)), IB ? ZB[1] : "no-highlight"
            }
            return IB.split(/\s+/).find((BB => qB(BB) || sB(BB)))
          }(BB);
          if (qB(ZB)) return;
          if (YB("before:highlightElement", {
              el: BB,
              language: ZB
            }), BB.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", BB);
          if (BB.children.length > 0 && (nB.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(BB)), nB.throwUnescapedHTML)) {
            throw new GI("One of your code blocks includes unescaped HTML.", BB.innerHTML)
          }
          IB = BB;
          const TB = IB.textContent,
            oB = ZB ? yB(TB, {
              language: ZB,
              ignoreIllegals: !0
            }) : WB(TB);
          BB.innerHTML = oB.value, BB.dataset.highlighted = "yes",
            function(BB, IB, ZB) {
              const TB = IB && JB[IB] || ZB;
              BB.classList.add("hljs"), BB.classList.add(`language-${TB}`)
            }(BB, ZB, oB.language), BB.result = {
              language: oB.language,
              re: oB.relevance,
              relevance: oB.relevance
            }, oB.secondBest && (BB.secondBest = {
              language: oB.secondBest.language,
              relevance: oB.secondBest.relevance
            }), YB("after:highlightElement", {
              el: BB,
              result: oB,
              text: TB
            })
        }
        let CB = !1;

        function QB() {
          if ("loading" === document.readyState) return CB || window.addEventListener("DOMContentLoaded", (function() {
            QB()
          }), !1), void(CB = !0);
          document.querySelectorAll(nB.cssSelector).forEach(dB)
        }

        function sB(BB) {
          return BB = (BB || "").toLowerCase(), TB[BB] || TB[JB[BB]]
        }

        function wB(BB, IB) {
          let {
            languageName: ZB
          } = IB;
          "string" === typeof BB && (BB = [BB]), BB.forEach((BB => {
            JB[BB.toLowerCase()] = ZB
          }))
        }

        function OB(BB) {
          const IB = sB(BB);
          return IB && !IB.disableAutodetect
        }

        function YB(BB, IB) {
          const ZB = BB;
          oB.forEach((function(BB) {
            BB[ZB] && BB[ZB](IB)
          }))
        }
        Object.assign(BB, {
          highlight: yB,
          highlightAuto: WB,
          highlightAll: QB,
          highlightElement: dB,
          highlightBlock: function(BB) {
            return BI("10.7.0", "highlightBlock will be removed entirely in v12.0"), BI("10.7.0", "Please use highlightElement now."), dB(BB)
          },
          configure: function(BB) {
            nB = kI(nB, BB)
          },
          initHighlighting: () => {
            QB(), BI("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            QB(), BI("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(IB, ZB) {
            let JB = null;
            try {
              JB = ZB(BB)
            } catch (oB) {
              if (VB("Language definition for '{}' could not be registered.".replace("{}", IB)), !GB) throw oB;
              VB(oB), JB = kB
            }
            JB.name || (JB.name = IB), TB[IB] = JB, JB.rawDefinition = ZB.bind(null, BB), JB.aliases && wB(JB.aliases, {
              languageName: IB
            })
          },
          unregisterLanguage: function(BB) {
            delete TB[BB];
            for (const IB of Object.keys(JB)) JB[IB] === BB && delete JB[IB]
          },
          listLanguages: function() {
            return Object.keys(TB)
          },
          getLanguage: sB,
          registerAliases: wB,
          autoDetection: OB,
          inherit: kI,
          addPlugin: function(BB) {
            ! function(BB) {
              BB["before:highlightBlock"] && !BB["before:highlightElement"] && (BB["before:highlightElement"] = IB => {
                BB["before:highlightBlock"](Object.assign({
                  block: IB.el
                }, IB))
              }), BB["after:highlightBlock"] && !BB["after:highlightElement"] && (BB["after:highlightElement"] = IB => {
                BB["after:highlightBlock"](Object.assign({
                  block: IB.el
                }, IB))
              })
            }(BB), oB.push(BB)
          },
          removePlugin: function(BB) {
            const IB = oB.indexOf(BB); - 1 !== IB && oB.splice(IB, 1)
          }
        }), BB.debugMode = function() {
          GB = !1
        }, BB.safeMode = function() {
          GB = !0
        }, BB.versionString = "11.11.1", BB.regex = {
          concat: NB,
          lookahead: hB,
          either: gB,
          optional: FB,
          anyNumberOfTimes: zB
        };
        for (const ZB in LB) "object" === typeof LB[ZB] && IB(LB[ZB]);
        return Object.assign(BB, LB), BB
      },
      hI = nI({});
    hI.newInstance = () => nI({}), BB.exports = hI, hI.HighlightJS = hI, hI.default = hI
  },
  4902: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    const TB = ZB(4906)
  },
  4908: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB
    });
    const TB = "[A-Za-z$_][0-9A-Za-z$_]*",
      JB = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      oB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      GB = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      vB = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      kB = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      cB = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      nB = [].concat(kB, GB, vB);

    function hB(BB) {
      const IB = BB.regex,
        ZB = TB,
        hB = "<>",
        zB = "</>",
        FB = {
          QF: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (BB, IB) => {
            const ZB = BB[0].length + BB.index,
              TB = BB.input[ZB];
            if ("<" === TB || "," === TB) return void IB.ignoreMatch();
            let JB;
            ">" === TB && (((BB, IB) => {
              let {
                after: ZB
              } = IB;
              const TB = "</" + BB[0].slice(1);
              return -1 !== BB.input.indexOf(TB, ZB)
            })(BB, {
              after: ZB
            }) || IB.ignoreMatch());
            const oB = BB.input.substring(ZB);
            ((JB = oB.match(/^\s*=/)) || (JB = oB.match(/^\s+extends\s+/)) && 0 === JB.index) && IB.ignoreMatch()
          }
        },
        NB = {
          $pattern: TB,
          keyword: JB,
          literal: oB,
          built_in: nB,
          "variable.language": cB
        },
        gB = "[0-9](_?[0-9])*",
        qB = `\\.(${gB})`,
        yB = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        UB = {
          className: "number",
          variants: [{
            QF: `(\\b(${yB})((${qB})|\\.)?|(${qB}))[eE][+-]?(${gB})\\b`
          }, {
            QF: `\\b(${yB})\\b((${qB})\\b|\\.)?|(${qB})\\b`
          }, {
            QF: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            QF: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            QF: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            QF: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            QF: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        WB = {
          className: "subst",
          QF: "\\$\\{",
          end: "\\}",
          keywords: NB,
          contains: []
        },
        dB = {
          QF: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "xml"
          }
        },
        CB = {
          QF: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "css"
          }
        },
        QB = {
          QF: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "graphql"
          }
        },
        sB = {
          className: "string",
          QF: "`",
          end: "`",
          contains: [BB.BACKSLASH_ESCAPE, WB]
        },
        wB = {
          className: "comment",
          variants: [BB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              QF: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                QF: "@[A-Za-z]+"
              }, {
                className: "type",
                QF: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                QF: ZB + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                QF: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), BB.C_BLOCK_COMMENT_MODE, BB.C_LINE_COMMENT_MODE]
        },
        OB = [BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, dB, CB, QB, sB, {
          match: /\$\d+/
        }, UB];
      WB.contains = OB.concat({
        QF: /\{/,
        end: /\}/,
        keywords: NB,
        contains: ["self"].concat(OB)
      });
      const YB = [].concat(wB, WB.contains),
        iB = YB.concat([{
          QF: /(\s*)\(/,
          end: /\)/,
          keywords: NB,
          contains: ["self"].concat(YB)
        }]),
        pB = {
          className: "params",
          QF: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: NB,
          contains: iB
        },
        aB = {
          variants: [{
            match: [/class/, /\s+/, ZB, /\s+/, /extends/, /\s+/, IB.concat(ZB, "(", IB.concat(/\./, ZB), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ZB],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        HB = {
          relevance: 0,
          match: IB.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...GB, ...vB]
          }
        },
        MB = {
          variants: [{
            match: [/function/, /\s+/, ZB, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [pB],
          illegal: /%/
        };
      const jB = {
        match: IB.concat(/\b/, (PB = [...kB, "super", "import"].map((BB => `${BB}\\s*\\(`)), IB.concat("(?!", PB.join("|"), ")")), ZB, IB.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var PB;
      const RB = {
          QF: IB.concat(/\./, IB.lookahead(IB.concat(ZB, /(?![0-9A-Za-z$_(])/))),
          end: ZB,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        rB = {
          match: [/get|set/, /\s+/, ZB, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            QF: /\(\)/
          }, pB]
        },
        mB = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + BB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        XB = {
          match: [/const|var|let/, /\s+/, ZB, /\s*/, /=\s*/, /(async\s*)?/, IB.lookahead(mB)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [pB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: NB,
        exports: {
          PARAMS_CONTAINS: iB,
          CLASS_REFERENCE: HB
        },
        illegal: /#(?![$_A-z])/,
        contains: [BB.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          QF: /^\s*['"]use (strict|asm)['"]/
        }, BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, dB, CB, QB, sB, wB, {
          match: /\$\d+/
        }, UB, HB, {
          scope: "attr",
          match: ZB + IB.lookahead(":"),
          relevance: 0
        }, XB, {
          QF: "(" + BB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [wB, BB.REGEXP_MODE, {
            className: "function",
            QF: mB,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                QF: BB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                QF: /\(\s*\)/,
                skip: !0
              }, {
                QF: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: NB,
                contains: iB
              }]
            }]
          }, {
            QF: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              QF: hB,
              end: zB
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              QF: FB.QF,
              "on:begin": FB.isTrulyOpeningTag,
              end: FB.end
            }],
            subLanguage: "xml",
            contains: [{
              QF: FB.QF,
              end: FB.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, MB, {
          beginKeywords: "while if switch catch for"
        }, {
          QF: "\\b(?!function)" + BB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [pB, BB.inherit(BB.TITLE_MODE, {
            QF: ZB,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, RB, {
          match: "\\$" + ZB,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [pB]
        }, jB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, aB, rB, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4910: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => zB
    });
    const TB = "[A-Za-z$_][0-9A-Za-z$_]*",
      JB = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      oB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      GB = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      vB = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      kB = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      cB = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      nB = [].concat(kB, GB, vB);

    function hB(BB) {
      const IB = BB.regex,
        ZB = TB,
        hB = "<>",
        zB = "</>",
        FB = {
          QF: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (BB, IB) => {
            const ZB = BB[0].length + BB.index,
              TB = BB.input[ZB];
            if ("<" === TB || "," === TB) return void IB.ignoreMatch();
            let JB;
            ">" === TB && (((BB, IB) => {
              let {
                after: ZB
              } = IB;
              const TB = "</" + BB[0].slice(1);
              return -1 !== BB.input.indexOf(TB, ZB)
            })(BB, {
              after: ZB
            }) || IB.ignoreMatch());
            const oB = BB.input.substring(ZB);
            ((JB = oB.match(/^\s*=/)) || (JB = oB.match(/^\s+extends\s+/)) && 0 === JB.index) && IB.ignoreMatch()
          }
        },
        NB = {
          $pattern: TB,
          keyword: JB,
          literal: oB,
          built_in: nB,
          "variable.language": cB
        },
        gB = "[0-9](_?[0-9])*",
        qB = `\\.(${gB})`,
        yB = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        UB = {
          className: "number",
          variants: [{
            QF: `(\\b(${yB})((${qB})|\\.)?|(${qB}))[eE][+-]?(${gB})\\b`
          }, {
            QF: `\\b(${yB})\\b((${qB})\\b|\\.)?|(${qB})\\b`
          }, {
            QF: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            QF: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            QF: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            QF: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            QF: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        WB = {
          className: "subst",
          QF: "\\$\\{",
          end: "\\}",
          keywords: NB,
          contains: []
        },
        dB = {
          QF: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "xml"
          }
        },
        CB = {
          QF: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "css"
          }
        },
        QB = {
          QF: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "graphql"
          }
        },
        sB = {
          className: "string",
          QF: "`",
          end: "`",
          contains: [BB.BACKSLASH_ESCAPE, WB]
        },
        wB = {
          className: "comment",
          variants: [BB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              QF: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                QF: "@[A-Za-z]+"
              }, {
                className: "type",
                QF: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                QF: ZB + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                QF: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), BB.C_BLOCK_COMMENT_MODE, BB.C_LINE_COMMENT_MODE]
        },
        OB = [BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, dB, CB, QB, sB, {
          match: /\$\d+/
        }, UB];
      WB.contains = OB.concat({
        QF: /\{/,
        end: /\}/,
        keywords: NB,
        contains: ["self"].concat(OB)
      });
      const YB = [].concat(wB, WB.contains),
        iB = YB.concat([{
          QF: /(\s*)\(/,
          end: /\)/,
          keywords: NB,
          contains: ["self"].concat(YB)
        }]),
        pB = {
          className: "params",
          QF: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: NB,
          contains: iB
        },
        aB = {
          variants: [{
            match: [/class/, /\s+/, ZB, /\s+/, /extends/, /\s+/, IB.concat(ZB, "(", IB.concat(/\./, ZB), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ZB],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        HB = {
          relevance: 0,
          match: IB.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...GB, ...vB]
          }
        },
        MB = {
          variants: [{
            match: [/function/, /\s+/, ZB, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [pB],
          illegal: /%/
        };
      const jB = {
        match: IB.concat(/\b/, (PB = [...kB, "super", "import"].map((BB => `${BB}\\s*\\(`)), IB.concat("(?!", PB.join("|"), ")")), ZB, IB.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var PB;
      const RB = {
          QF: IB.concat(/\./, IB.lookahead(IB.concat(ZB, /(?![0-9A-Za-z$_(])/))),
          end: ZB,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        rB = {
          match: [/get|set/, /\s+/, ZB, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            QF: /\(\)/
          }, pB]
        },
        mB = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + BB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        XB = {
          match: [/const|var|let/, /\s+/, ZB, /\s*/, /=\s*/, /(async\s*)?/, IB.lookahead(mB)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [pB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: NB,
        exports: {
          PARAMS_CONTAINS: iB,
          CLASS_REFERENCE: HB
        },
        illegal: /#(?![$_A-z])/,
        contains: [BB.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          QF: /^\s*['"]use (strict|asm)['"]/
        }, BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, dB, CB, QB, sB, wB, {
          match: /\$\d+/
        }, UB, HB, {
          scope: "attr",
          match: ZB + IB.lookahead(":"),
          relevance: 0
        }, XB, {
          QF: "(" + BB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [wB, BB.REGEXP_MODE, {
            className: "function",
            QF: mB,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                QF: BB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                QF: /\(\s*\)/,
                skip: !0
              }, {
                QF: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: NB,
                contains: iB
              }]
            }]
          }, {
            QF: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              QF: hB,
              end: zB
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              QF: FB.QF,
              "on:begin": FB.isTrulyOpeningTag,
              end: FB.end
            }],
            subLanguage: "xml",
            contains: [{
              QF: FB.QF,
              end: FB.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, MB, {
          beginKeywords: "while if switch catch for"
        }, {
          QF: "\\b(?!function)" + BB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [pB, BB.inherit(BB.TITLE_MODE, {
            QF: ZB,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, RB, {
          match: "\\$" + ZB,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [pB]
        }, jB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, aB, rB, {
          match: /\$[(.]/
        }]
      }
    }

    function zB(BB) {
      const IB = BB.regex,
        ZB = hB(BB),
        GB = TB,
        vB = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        kB = {
          QF: [/namespace/, /\s+/, BB.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        zB = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: vB
          },
          contains: [ZB.exports.CLASS_REFERENCE]
        },
        FB = {
          $pattern: TB,
          keyword: JB.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: oB,
          built_in: nB.concat(vB),
          "variable.language": cB
        },
        NB = {
          className: "meta",
          QF: "@" + GB
        },
        gB = (BB, IB, ZB) => {
          const TB = BB.contains.findIndex((BB => BB.label === IB));
          if (-1 === TB) throw new Error("can not find mode to replace");
          BB.contains.splice(TB, 1, ZB)
        };
      Object.assign(ZB.keywords, FB), ZB.exports.PARAMS_CONTAINS.push(NB);
      const qB = ZB.contains.find((BB => "attr" === BB.scope)),
        yB = Object.assign({}, qB, {
          match: IB.concat(GB, IB.lookahead(/\s*\?:/))
        });
      ZB.exports.PARAMS_CONTAINS.push([ZB.exports.CLASS_REFERENCE, qB, yB]), ZB.contains = ZB.contains.concat([NB, kB, zB, yB]), gB(ZB, "shebang", BB.SHEBANG()), gB(ZB, "use_strict", {
        className: "meta",
        relevance: 10,
        QF: /^\s*['"]use strict['"]/
      });
      return ZB.contains.find((BB => "func.def" === BB.label)).relevance = 0, Object.assign(ZB, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), ZB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);