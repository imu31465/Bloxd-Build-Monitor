export const id = 80;
export const ids = [80];
export const modules = {
  4813: BB => {
    function jB(BB) {
      return BB instanceof Map ? BB.clear = BB.delete = BB.set = function() {
        throw new Error("map is read-only")
      } : BB instanceof Set && (BB.add = BB.clear = BB.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(BB), Object.getOwnPropertyNames(BB).forEach((zB => {
        const QB = BB[zB],
          nB = typeof QB;
        "object" !== nB && "function" !== nB || Object.isFrozen(QB) || jB(QB)
      })), BB
    }
    class zB {
      constructor(BB) {
        void 0 === BB.data && (BB.data = {}), this.data = BB.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function QB(BB) {
      return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function nB(BB) {
      const jB = Object.create(null);
      for (const dB in BB) jB[dB] = BB[dB];
      for (var zB = arguments.length, QB = new Array(zB > 1 ? zB - 1 : 0), nB = 1; nB < zB; nB++) QB[nB - 1] = arguments[nB];
      return QB.forEach((function(BB) {
        for (const zB in BB) jB[zB] = BB[zB]
      })), jB
    }
    const dB = BB => !!BB.scope;
    class IB {
      constructor(BB, jB) {
        this.buffer = "", this.classPrefix = jB.classPrefix, BB.walk(this)
      }
      addText(BB) {
        this.buffer += QB(BB)
      }
      openNode(BB) {
        if (!dB(BB)) return;
        const jB = ((BB, jB) => {
          let {
            prefix: zB
          } = jB;
          if (BB.startsWith("language:")) return BB.replace("language:", "language-");
          if (BB.includes(".")) {
            const jB = BB.split(".");
            return [`${zB}${jB.shift()}`, ...jB.map(((BB, jB) => `${BB}${"_".repeat(jB+1)}`))].join(" ")
          }
          return `${zB}${BB}`
        })(BB.scope, {
          prefix: this.classPrefix
        });
        this.span(jB)
      }
      closeNode(BB) {
        dB(BB) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(BB) {
        this.buffer += `<span class="${BB}">`
      }
    }
    const NB = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const jB = {
        children: []
      };
      return Object.assign(jB, BB), jB
    };
    class uB {
      constructor() {
        this.yG = NB(), this.stack = [this.yG]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.yG
      }
      add(BB) {
        this.top.children.push(BB)
      }
      openNode(BB) {
        const jB = NB({
          scope: BB
        });
        this.add(jB), this.stack.push(jB)
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
      walk(BB) {
        return this.constructor._walk(BB, this.yG)
      }
      static _walk(BB, jB) {
        return "string" === typeof jB ? BB.addText(jB) : jB.children && (BB.openNode(jB), jB.children.forEach((jB => this._walk(BB, jB))), BB.closeNode(jB)), BB
      }
      static _collapse(BB) {
        "string" !== typeof BB && BB.children && (BB.children.every((BB => "string" === typeof BB)) ? BB.children = [BB.children.join("")] : BB.children.forEach((BB => {
          uB._collapse(BB)
        })))
      }
    }
    class UB extends uB {
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
      __addSublanguage(BB, jB) {
        const zB = BB.root;
        jB && (zB.scope = `language:${jB}`), this.add(zB)
      }
      toHTML() {
        return new IB(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function aB(BB) {
      return BB ? "string" === typeof BB ? BB : BB.source : null
    }

    function pB(BB) {
      return JB("(?=", BB, ")")
    }

    function rB(BB) {
      return JB("(?:", BB, ")*")
    }

    function sB(BB) {
      return JB("(?:", BB, ")?")
    }

    function JB() {
      for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
      return jB.map((BB => aB(BB))).join("")
    }

    function mB() {
      for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
      const QB = function(BB) {
        const jB = BB[BB.length - 1];
        return "object" === typeof jB && jB.constructor === Object ? (BB.splice(BB.length - 1, 1), jB) : {}
      }(jB);
      return "(" + (QB.capture ? "" : "?:") + jB.map((BB => aB(BB))).join("|") + ")"
    }

    function yB(BB) {
      return new RegExp(BB.toString() + "|").exec("").length - 1
    }
    const kB = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function GB(BB, jB) {
      let {
        joinWith: zB
      } = jB, QB = 0;
      return BB.map((BB => {
        QB += 1;
        const jB = QB;
        let zB = aB(BB),
          nB = "";
        for (; zB.length > 0;) {
          const BB = kB.exec(zB);
          if (!BB) {
            nB += zB;
            break
          }
          nB += zB.substring(0, BB.index), zB = zB.substring(BB.index + BB[0].length), "\\" === BB[0][0] && BB[1] ? nB += "\\" + String(Number(BB[1]) + jB) : (nB += BB[0], "(" === BB[0] && QB++)
        }
        return nB
      })).map((BB => `(${BB})`)).join(zB)
    }
    const LB = "[a-zA-Z]\\w*",
      gB = "[a-zA-Z_]\\w*",
      tB = "\\b\\d+(\\.\\d+)?",
      SB = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      MB = "\\b(0b[01]+)",
      EB = {
        Ds: "\\\\[\\s\\S]",
        relevance: 0
      },
      iB = {
        scope: "string",
        Ds: "'",
        end: "'",
        illegal: "\\n",
        contains: [EB]
      },
      qB = {
        scope: "string",
        Ds: '"',
        end: '"',
        illegal: "\\n",
        contains: [EB]
      },
      fB = function(BB, jB) {
        const zB = nB({
          scope: "comment",
          Ds: BB,
          end: jB,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        zB.contains.push({
          scope: "doctag",
          Ds: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const QB = mB("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return zB.contains.push({
          Ds: JB(/[ ]+/, "(", QB, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), zB
      },
      oB = fB("//", "$"),
      HB = fB("/\\*", "\\*/"),
      DB = fB("#", "$"),
      FB = {
        scope: "number",
        Ds: tB,
        relevance: 0
      },
      YB = {
        scope: "number",
        Ds: SB,
        relevance: 0
      },
      VB = {
        scope: "number",
        Ds: MB,
        relevance: 0
      },
      hB = {
        scope: "regexp",
        Ds: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [EB, {
          Ds: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [EB]
        }]
      },
      XB = {
        scope: "title",
        Ds: LB,
        relevance: 0
      },
      ZB = {
        scope: "title",
        Ds: gB,
        relevance: 0
      },
      AB = {
        Ds: "\\.\\s*" + gB,
        relevance: 0
      };
    var TB = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: iB,
      BACKSLASH_ESCAPE: EB,
      BINARY_NUMBER_MODE: VB,
      BINARY_NUMBER_RE: MB,
      COMMENT: fB,
      C_BLOCK_COMMENT_MODE: HB,
      C_LINE_COMMENT_MODE: oB,
      C_NUMBER_MODE: YB,
      C_NUMBER_RE: SB,
      END_SAME_AS_BEGIN: function(BB) {
        return Object.assign(BB, {
          "on:begin": (BB, jB) => {
            jB.data._beginMatch = BB[1]
          },
          "on:end": (BB, jB) => {
            jB.data._beginMatch !== BB[1] && jB.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: DB,
      IDENT_RE: LB,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: AB,
      NUMBER_MODE: FB,
      NUMBER_RE: tB,
      PHRASAL_WORDS_MODE: {
        Ds: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: qB,
      REGEXP_MODE: hB,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const jB = /^#![ ]*\//;
        return BB.binary && (BB.Ds = JB(jB, /.*\b/, BB.binary, /\b.*/)), nB({
          scope: "meta",
          Ds: jB,
          end: /$/,
          relevance: 0,
          "on:begin": (BB, jB) => {
            0 !== BB.index && jB.ignoreMatch()
          }
        }, BB)
      },
      TITLE_MODE: XB,
      UNDERSCORE_IDENT_RE: gB,
      UNDERSCORE_TITLE_MODE: ZB
    });

    function PB(BB, jB) {
      "." === BB.input[BB.index - 1] && jB.ignoreMatch()
    }

    function WB(BB, jB) {
      void 0 !== BB.className && (BB.scope = BB.className, delete BB.className)
    }

    function eB(BB, jB) {
      jB && BB.beginKeywords && (BB.Ds = "\\b(" + BB.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", BB.__beforeBegin = PB, BB.keywords = BB.keywords || BB.beginKeywords, delete BB.beginKeywords, void 0 === BB.relevance && (BB.relevance = 0))
    }

    function lB(BB, jB) {
      Array.isArray(BB.illegal) && (BB.illegal = mB(...BB.illegal))
    }

    function wB(BB, jB) {
      if (BB.match) {
        if (BB.Ds || BB.end) throw new Error("begin & end are not supported with match");
        BB.Ds = BB.match, delete BB.match
      }
    }

    function xB(BB, jB) {
      void 0 === BB.relevance && (BB.relevance = 1)
    }
    const KB = (BB, jB) => {
        if (!BB.beforeMatch) return;
        if (BB.starts) throw new Error("beforeMatch cannot be used with starts");
        const zB = Object.assign({}, BB);
        Object.keys(BB).forEach((jB => {
          delete BB[jB]
        })), BB.keywords = zB.keywords, BB.Ds = JB(zB.beforeMatch, pB(zB.Ds)), BB.starts = {
          relevance: 0,
          contains: [Object.assign(zB, {
            endsParent: !0
          })]
        }, BB.relevance = 0, delete zB.beforeMatch
      },
      CB = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function cB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const QB = Object.create(null);
      return "string" === typeof BB ? nB(zB, BB.split(" ")) : Array.isArray(BB) ? nB(zB, BB) : Object.keys(BB).forEach((function(zB) {
        Object.assign(QB, cB(BB[zB], jB, zB))
      })), QB;

      function nB(BB, zB) {
        jB && (zB = zB.map((BB => BB.toLowerCase()))), zB.forEach((function(jB) {
          const zB = jB.split("|");
          QB[zB[0]] = [BB, bB(zB[0], zB[1])]
        }))
      }
    }

    function bB(BB, jB) {
      return jB ? Number(jB) : function(BB) {
        return CB.includes(BB.toLowerCase())
      }(BB) ? 0 : 1
    }
    const vB = {},
      RB = BB => {
        console.error(BB)
      },
      OB = function(BB) {
        for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
        console.log(`WARN: ${BB}`, ...zB)
      },
      Bj = (BB, jB) => {
        vB[`${BB}/${jB}`] || (console.log(`Deprecated as of ${BB}. ${jB}`), vB[`${BB}/${jB}`] = !0)
      },
      jj = new Error;

    function zj(BB, jB, zB) {
      let {
        key: QB
      } = zB, nB = 0;
      const dB = BB[QB],
        IB = {},
        NB = {};
      for (let uB = 1; uB <= jB.length; uB++) NB[uB + nB] = dB[uB], IB[uB + nB] = !0, nB += yB(jB[uB - 1]);
      BB[QB] = NB, BB[QB]._emit = IB, BB[QB]._multi = !0
    }

    function Qj(BB) {
      ! function(BB) {
        BB.scope && "object" === typeof BB.scope && null !== BB.scope && (BB.beginScope = BB.scope, delete BB.scope)
      }(BB), "string" === typeof BB.beginScope && (BB.beginScope = {
          _wrap: BB.beginScope
        }), "string" === typeof BB.endScope && (BB.endScope = {
          _wrap: BB.endScope
        }),
        function(BB) {
          if (Array.isArray(BB.Ds)) {
            if (BB.skip || BB.excludeBegin || BB.returnBegin) throw RB("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), jj;
            if ("object" !== typeof BB.beginScope || null === BB.beginScope) throw RB("beginScope must be object"), jj;
            zj(BB, BB.Ds, {
              key: "beginScope"
            }), BB.Ds = GB(BB.Ds, {
              joinWith: ""
            })
          }
        }(BB),
        function(BB) {
          if (Array.isArray(BB.end)) {
            if (BB.skip || BB.excludeEnd || BB.returnEnd) throw RB("skip, excludeEnd, returnEnd not compatible with endScope: {}"), jj;
            if ("object" !== typeof BB.endScope || null === BB.endScope) throw RB("endScope must be object"), jj;
            zj(BB, BB.end, {
              key: "endScope"
            }), BB.end = GB(BB.end, {
              joinWith: ""
            })
          }
        }(BB)
    }

    function nj(BB) {
      function jB(jB, zB) {
        return new RegExp(aB(jB), "m" + (BB.case_insensitive ? "i" : "") + (BB.unicodeRegex ? "u" : "") + (zB ? "g" : ""))
      }
      class zB {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(BB, jB) {
          jB.position = this.position++, this.matchIndexes[this.matchAt] = jB, this.regexes.push([jB, BB]), this.matchAt += yB(BB) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const BB = this.regexes.map((BB => BB[1]));
          this.matcherRe = jB(GB(BB, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(BB) {
          this.matcherRe.lastIndex = this.lastIndex;
          const jB = this.matcherRe.exec(BB);
          if (!jB) return null;
          const zB = jB.findIndex(((BB, jB) => jB > 0 && void 0 !== BB)),
            QB = this.matchIndexes[zB];
          return jB.splice(0, zB), Object.assign(jB, QB)
        }
      }
      class QB {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(BB) {
          if (this.multiRegexes[BB]) return this.multiRegexes[BB];
          const jB = new zB;
          return this.rules.slice(BB).forEach((BB => {
            let [zB, QB] = BB;
            return jB.addRule(zB, QB)
          })), jB.compile(), this.multiRegexes[BB] = jB, jB
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(BB, jB) {
          this.rules.push([BB, jB]), "Ds" === jB.type && this.count++
        }
        exec(BB) {
          const jB = this.getMatcher(this.regexIndex);
          jB.lastIndex = this.lastIndex;
          let zB = jB.exec(BB);
          if (this.resumingScanAtSamePosition())
            if (zB && zB.index === this.lastIndex);
            else {
              const jB = this.getMatcher(0);
              jB.lastIndex = this.lastIndex + 1, zB = jB.exec(BB)
            } return zB && (this.regexIndex += zB.position + 1, this.regexIndex === this.count && this.considerAll()), zB
        }
      }
      if (BB.compilerExtensions || (BB.compilerExtensions = []), BB.contains && BB.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return BB.classNameAliases = nB(BB.classNameAliases || {}),
        function zB(dB, IB) {
          const NB = dB;
          if (dB.isCompiled) return NB;
          [WB, wB, Qj, KB].forEach((BB => BB(dB, IB))), BB.compilerExtensions.forEach((BB => BB(dB, IB))), dB.__beforeBegin = null, [eB, lB, xB].forEach((BB => BB(dB, IB))), dB.isCompiled = !0;
          let uB = null;
          return "object" === typeof dB.keywords && dB.keywords.$pattern && (dB.keywords = Object.assign({}, dB.keywords), uB = dB.keywords.$pattern, delete dB.keywords.$pattern), uB = uB || /\w+/, dB.keywords && (dB.keywords = cB(dB.keywords, BB.case_insensitive)), NB.keywordPatternRe = jB(uB, !0), IB && (dB.Ds || (dB.Ds = /\B|\b/), NB.beginRe = jB(NB.Ds), dB.end || dB.endsWithParent || (dB.end = /\B|\b/), dB.end && (NB.endRe = jB(NB.end)), NB.terminatorEnd = aB(NB.end) || "", dB.endsWithParent && IB.terminatorEnd && (NB.terminatorEnd += (dB.end ? "|" : "") + IB.terminatorEnd)), dB.illegal && (NB.illegalRe = jB(dB.illegal)), dB.contains || (dB.contains = []), dB.contains = [].concat(...dB.contains.map((function(BB) {
            return function(BB) {
              BB.variants && !BB.cachedVariants && (BB.cachedVariants = BB.variants.map((function(jB) {
                return nB(BB, {
                  variants: null
                }, jB)
              })));
              if (BB.cachedVariants) return BB.cachedVariants;
              if (dj(BB)) return nB(BB, {
                starts: BB.starts ? nB(BB.starts) : null
              });
              if (Object.isFrozen(BB)) return nB(BB);
              return BB
            }("self" === BB ? dB : BB)
          }))), dB.contains.forEach((function(BB) {
            zB(BB, NB)
          })), dB.starts && zB(dB.starts, IB), NB.matcher = function(BB) {
            const jB = new QB;
            return BB.contains.forEach((BB => jB.addRule(BB.Ds, {
              rule: BB,
              type: "Ds"
            }))), BB.terminatorEnd && jB.addRule(BB.terminatorEnd, {
              type: "end"
            }), BB.illegal && jB.addRule(BB.illegal, {
              type: "illegal"
            }), jB
          }(NB), NB
        }(BB)
    }

    function dj(BB) {
      return !!BB && (BB.endsWithParent || dj(BB.starts))
    }
    class Ij extends Error {
      constructor(BB, jB) {
        super(BB), this.name = "HTMLInjectionError", this.html = jB
      }
    }
    const Nj = QB,
      uj = nB,
      Uj = Symbol("nomatch"),
      aj = function(BB) {
        const QB = Object.create(null),
          nB = Object.create(null),
          dB = [];
        let IB = !0;
        const NB = "Could not find the language '{}', did you forget to load/include a language module?",
          uB = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let aB = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: UB
        };

        function yB(BB) {
          return aB.noHighlightRe.test(BB)
        }

        function kB(BB, jB, zB) {
          let QB = "",
            nB = "";
          "object" === typeof jB ? (QB = BB, zB = jB.ignoreIllegals, nB = jB.language) : (Bj("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Bj("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), nB = BB, QB = jB), void 0 === zB && (zB = !0);
          const dB = {
            code: QB,
            language: nB
          };
          qB("before:highlight", dB);
          const IB = dB.result ? dB.result : GB(dB.language, dB.code, zB);
          return IB.code = dB.code, qB("after:highlight", IB), IB
        }

        function GB(BB, jB, nB, dB) {
          const uB = Object.create(null);

          function UB() {
            if (!qB.keywords) return void oB.addText(HB);
            let BB = 0;
            qB.keywordPatternRe.lastIndex = 0;
            let jB = qB.keywordPatternRe.exec(HB),
              zB = "";
            for (; jB;) {
              zB += HB.substring(BB, jB.index);
              const nB = SB.case_insensitive ? jB[0].toLowerCase() : jB[0],
                dB = (QB = nB, qB.keywords[QB]);
              if (dB) {
                const [BB, QB] = dB;
                if (oB.addText(zB), zB = "", uB[nB] = (uB[nB] || 0) + 1, uB[nB] <= 7 && (DB += QB), BB.startsWith("_")) zB += jB[0];
                else {
                  const zB = SB.classNameAliases[BB] || BB;
                  rB(jB[0], zB)
                }
              } else zB += jB[0];
              BB = qB.keywordPatternRe.lastIndex, jB = qB.keywordPatternRe.exec(HB)
            }
            var QB;
            zB += HB.substring(BB), oB.addText(zB)
          }

          function pB() {
            null != qB.subLanguage ? function() {
              if ("" === HB) return;
              let BB = null;
              if ("string" === typeof qB.subLanguage) {
                if (!QB[qB.subLanguage]) return void oB.addText(HB);
                BB = GB(qB.subLanguage, HB, !0, fB[qB.subLanguage]), fB[qB.subLanguage] = BB._top
              } else BB = LB(HB, qB.subLanguage.length ? qB.subLanguage : null);
              qB.relevance > 0 && (DB += BB.relevance), oB.__addSublanguage(BB._emitter, BB.language)
            }() : UB(), HB = ""
          }

          function rB(BB, jB) {
            "" !== BB && (oB.startScope(jB), oB.addText(BB), oB.endScope())
          }

          function sB(BB, jB) {
            let zB = 1;
            const QB = jB.length - 1;
            for (; zB <= QB;) {
              if (!BB._emit[zB]) {
                zB++;
                continue
              }
              const QB = SB.classNameAliases[BB[zB]] || BB[zB],
                nB = jB[zB];
              QB ? rB(nB, QB) : (HB = nB, UB(), HB = ""), zB++
            }
          }

          function JB(BB, jB) {
            return BB.scope && "string" === typeof BB.scope && oB.openNode(SB.classNameAliases[BB.scope] || BB.scope), BB.beginScope && (BB.beginScope._wrap ? (rB(HB, SB.classNameAliases[BB.beginScope._wrap] || BB.beginScope._wrap), HB = "") : BB.beginScope._multi && (sB(BB.beginScope, jB), HB = "")), qB = Object.create(BB, {
              parent: {
                value: qB
              }
            }), qB
          }

          function mB(BB, jB, QB) {
            let nB = function(BB, jB) {
              const zB = BB && BB.exec(jB);
              return zB && 0 === zB.index
            }(BB.endRe, QB);
            if (nB) {
              if (BB["on:end"]) {
                const QB = new zB(BB);
                BB["on:end"](jB, QB), QB.isMatchIgnored && (nB = !1)
              }
              if (nB) {
                for (; BB.endsParent && BB.parent;) BB = BB.parent;
                return BB
              }
            }
            if (BB.endsWithParent) return mB(BB.parent, jB, QB)
          }

          function yB(BB) {
            return 0 === qB.matcher.regexIndex ? (HB += BB[0], 1) : (VB = !0, 0)
          }

          function kB(BB) {
            const zB = BB[0],
              QB = jB.substring(BB.index),
              nB = mB(qB, BB, QB);
            if (!nB) return Uj;
            const dB = qB;
            qB.endScope && qB.endScope._wrap ? (pB(), rB(zB, qB.endScope._wrap)) : qB.endScope && qB.endScope._multi ? (pB(), sB(qB.endScope, BB)) : dB.skip ? HB += zB : (dB.returnEnd || dB.excludeEnd || (HB += zB), pB(), dB.excludeEnd && (HB = zB));
            do {
              qB.scope && oB.closeNode(), qB.skip || qB.subLanguage || (DB += qB.relevance), qB = qB.parent
            } while (qB !== nB.parent);
            return nB.starts && JB(nB.starts, BB), dB.returnEnd ? 0 : zB.length
          }
          let gB = {};

          function tB(QB, dB) {
            const NB = dB && dB[0];
            if (HB += QB, null == NB) return pB(), 0;
            if ("Ds" === gB.type && "end" === dB.type && gB.index === dB.index && "" === NB) {
              if (HB += jB.slice(dB.index, dB.index + 1), !IB) {
                const jB = new Error(`0 width match regex (${BB})`);
                throw jB.languageName = BB, jB.badRule = gB.rule, jB
              }
              return 1
            }
            if (gB = dB, "Ds" === dB.type) return function(BB) {
              const jB = BB[0],
                QB = BB.rule,
                nB = new zB(QB),
                dB = [QB.__beforeBegin, QB["on:begin"]];
              for (const zB of dB)
                if (zB && (zB(BB, nB), nB.isMatchIgnored)) return yB(jB);
              return QB.skip ? HB += jB : (QB.excludeBegin && (HB += jB), pB(), QB.returnBegin || QB.excludeBegin || (HB = jB)), JB(QB, BB), QB.returnBegin ? 0 : jB.length
            }(dB);
            if ("illegal" === dB.type && !nB) {
              const BB = new Error('Illegal lexeme "' + NB + '" for mode "' + (qB.scope || "<unnamed>") + '"');
              throw BB.mode = qB, BB
            }
            if ("end" === dB.type) {
              const BB = kB(dB);
              if (BB !== Uj) return BB
            }
            if ("illegal" === dB.type && "" === NB) return HB += "\n", 1;
            if (YB > 1e5 && YB > 3 * dB.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return HB += NB, NB.length
          }
          const SB = MB(BB);
          if (!SB) throw RB(NB.replace("{}", BB)), new Error('Unknown language: "' + BB + '"');
          const EB = nj(SB);
          let iB = "",
            qB = dB || EB;
          const fB = {},
            oB = new aB.__emitter(aB);
          ! function() {
            const BB = [];
            for (let jB = qB; jB !== SB; jB = jB.parent) jB.scope && BB.unshift(jB.scope);
            BB.forEach((BB => oB.openNode(BB)))
          }();
          let HB = "",
            DB = 0,
            FB = 0,
            YB = 0,
            VB = !1;
          try {
            if (SB.__emitTokens) SB.__emitTokens(jB, oB);
            else {
              for (qB.matcher.considerAll();;) {
                YB++, VB ? VB = !1 : qB.matcher.considerAll(), qB.matcher.lastIndex = FB;
                const BB = qB.matcher.exec(jB);
                if (!BB) break;
                const zB = tB(jB.substring(FB, BB.index), BB);
                FB = BB.index + zB
              }
              tB(jB.substring(FB))
            }
            return oB.finalize(), iB = oB.toHTML(), {
              language: BB,
              value: iB,
              relevance: DB,
              illegal: !1,
              _emitter: oB,
              _top: qB
            }
          } catch (hB) {
            if (hB.message && hB.message.includes("Illegal")) return {
              language: BB,
              value: Nj(jB),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: hB.message,
                index: FB,
                context: jB.slice(FB - 100, FB + 100),
                mode: hB.mode,
                resultSoFar: iB
              },
              _emitter: oB
            };
            if (IB) return {
              language: BB,
              value: Nj(jB),
              illegal: !1,
              relevance: 0,
              errorRaised: hB,
              _emitter: oB,
              _top: qB
            };
            throw hB
          }
        }

        function LB(BB, jB) {
          jB = jB || aB.languages || Object.keys(QB);
          const zB = function(BB) {
              const jB = {
                value: Nj(BB),
                illegal: !1,
                relevance: 0,
                _top: uB,
                _emitter: new aB.__emitter(aB)
              };
              return jB._emitter.addText(BB), jB
            }(BB),
            nB = jB.filter(MB).filter(iB).map((jB => GB(jB, BB, !1)));
          nB.unshift(zB);
          const dB = nB.sort(((BB, jB) => {
              if (BB.relevance !== jB.relevance) return jB.relevance - BB.relevance;
              if (BB.language && jB.language) {
                if (MB(BB.language).supersetOf === jB.language) return 1;
                if (MB(jB.language).supersetOf === BB.language) return -1
              }
              return 0
            })),
            [IB, NB] = dB,
            UB = IB;
          return UB.secondBest = NB, UB
        }

        function gB(BB) {
          let jB = null;
          const zB = function(BB) {
            let jB = BB.className + " ";
            jB += BB.parentNode ? BB.parentNode.className : "";
            const zB = aB.languageDetectRe.exec(jB);
            if (zB) {
              const jB = MB(zB[1]);
              return jB || (OB(NB.replace("{}", zB[1])), OB("Falling back to no-highlight mode for this block.", BB)), jB ? zB[1] : "no-highlight"
            }
            return jB.split(/\s+/).find((BB => yB(BB) || MB(BB)))
          }(BB);
          if (yB(zB)) return;
          if (qB("before:highlightElement", {
              el: BB,
              language: zB
            }), BB.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", BB);
          if (BB.children.length > 0 && (aB.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(BB)), aB.throwUnescapedHTML)) {
            throw new Ij("One of your code blocks includes unescaped HTML.", BB.innerHTML)
          }
          jB = BB;
          const QB = jB.textContent,
            dB = zB ? kB(QB, {
              language: zB,
              ignoreIllegals: !0
            }) : LB(QB);
          BB.innerHTML = dB.value, BB.dataset.highlighted = "yes",
            function(BB, jB, zB) {
              const QB = jB && nB[jB] || zB;
              BB.classList.add("hljs"), BB.classList.add(`language-${QB}`)
            }(BB, zB, dB.language), BB.result = {
              language: dB.language,
              re: dB.relevance,
              relevance: dB.relevance
            }, dB.secondBest && (BB.secondBest = {
              language: dB.secondBest.language,
              relevance: dB.secondBest.relevance
            }), qB("after:highlightElement", {
              el: BB,
              result: dB,
              text: QB
            })
        }
        let tB = !1;

        function SB() {
          if ("loading" === document.readyState) return tB || window.addEventListener("DOMContentLoaded", (function() {
            SB()
          }), !1), void(tB = !0);
          document.querySelectorAll(aB.cssSelector).forEach(gB)
        }

        function MB(BB) {
          return BB = (BB || "").toLowerCase(), QB[BB] || QB[nB[BB]]
        }

        function EB(BB, jB) {
          let {
            languageName: zB
          } = jB;
          "string" === typeof BB && (BB = [BB]), BB.forEach((BB => {
            nB[BB.toLowerCase()] = zB
          }))
        }

        function iB(BB) {
          const jB = MB(BB);
          return jB && !jB.disableAutodetect
        }

        function qB(BB, jB) {
          const zB = BB;
          dB.forEach((function(BB) {
            BB[zB] && BB[zB](jB)
          }))
        }
        Object.assign(BB, {
          highlight: kB,
          highlightAuto: LB,
          highlightAll: SB,
          highlightElement: gB,
          highlightBlock: function(BB) {
            return Bj("10.7.0", "highlightBlock will be removed entirely in v12.0"), Bj("10.7.0", "Please use highlightElement now."), gB(BB)
          },
          configure: function(BB) {
            aB = uj(aB, BB)
          },
          initHighlighting: () => {
            SB(), Bj("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            SB(), Bj("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(jB, zB) {
            let nB = null;
            try {
              nB = zB(BB)
            } catch (dB) {
              if (RB("Language definition for '{}' could not be registered.".replace("{}", jB)), !IB) throw dB;
              RB(dB), nB = uB
            }
            nB.name || (nB.name = jB), QB[jB] = nB, nB.rawDefinition = zB.bind(null, BB), nB.aliases && EB(nB.aliases, {
              languageName: jB
            })
          },
          unregisterLanguage: function(BB) {
            delete QB[BB];
            for (const jB of Object.keys(nB)) nB[jB] === BB && delete nB[jB]
          },
          listLanguages: function() {
            return Object.keys(QB)
          },
          getLanguage: MB,
          registerAliases: EB,
          autoDetection: iB,
          inherit: uj,
          addPlugin: function(BB) {
            ! function(BB) {
              BB["before:highlightBlock"] && !BB["before:highlightElement"] && (BB["before:highlightElement"] = jB => {
                BB["before:highlightBlock"](Object.assign({
                  block: jB.el
                }, jB))
              }), BB["after:highlightBlock"] && !BB["after:highlightElement"] && (BB["after:highlightElement"] = jB => {
                BB["after:highlightBlock"](Object.assign({
                  block: jB.el
                }, jB))
              })
            }(BB), dB.push(BB)
          },
          removePlugin: function(BB) {
            const jB = dB.indexOf(BB); - 1 !== jB && dB.splice(jB, 1)
          }
        }), BB.debugMode = function() {
          IB = !1
        }, BB.safeMode = function() {
          IB = !0
        }, BB.versionString = "11.11.1", BB.regex = {
          concat: JB,
          lookahead: pB,
          either: mB,
          optional: sB,
          anyNumberOfTimes: rB
        };
        for (const zB in TB) "object" === typeof TB[zB] && jB(TB[zB]);
        return Object.assign(BB, TB), BB
      },
      pj = aj({});
    pj.newInstance = () => aj({}), BB.exports = pj, pj.HighlightJS = pj, pj.default = pj
  },
  4808: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    const QB = zB(4813)
  },
  4817: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB
    });
    const QB = "[A-Za-z$_][0-9A-Za-z$_]*",
      nB = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      dB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      IB = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      NB = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      uB = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      UB = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      aB = [].concat(uB, IB, NB);

    function pB(BB) {
      const jB = BB.regex,
        zB = QB,
        pB = "<>",
        rB = "</>",
        sB = {
          Ds: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (BB, jB) => {
            const zB = BB[0].length + BB.index,
              QB = BB.input[zB];
            if ("<" === QB || "," === QB) return void jB.ignoreMatch();
            let nB;
            ">" === QB && (((BB, jB) => {
              let {
                after: zB
              } = jB;
              const QB = "</" + BB[0].slice(1);
              return -1 !== BB.input.indexOf(QB, zB)
            })(BB, {
              after: zB
            }) || jB.ignoreMatch());
            const dB = BB.input.substring(zB);
            ((nB = dB.match(/^\s*=/)) || (nB = dB.match(/^\s+extends\s+/)) && 0 === nB.index) && jB.ignoreMatch()
          }
        },
        JB = {
          $pattern: QB,
          keyword: nB,
          literal: dB,
          built_in: aB,
          "variable.language": UB
        },
        mB = "[0-9](_?[0-9])*",
        yB = `\\.(${mB})`,
        kB = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        GB = {
          className: "number",
          variants: [{
            Ds: `(\\b(${kB})((${yB})|\\.)?|(${yB}))[eE][+-]?(${mB})\\b`
          }, {
            Ds: `\\b(${kB})\\b((${yB})\\b|\\.)?|(${yB})\\b`
          }, {
            Ds: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Ds: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Ds: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Ds: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Ds: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        LB = {
          className: "subst",
          Ds: "\\$\\{",
          end: "\\}",
          keywords: JB,
          contains: []
        },
        gB = {
          Ds: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, LB],
            subLanguage: "xml"
          }
        },
        tB = {
          Ds: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, LB],
            subLanguage: "css"
          }
        },
        SB = {
          Ds: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, LB],
            subLanguage: "graphql"
          }
        },
        MB = {
          className: "string",
          Ds: "`",
          end: "`",
          contains: [BB.BACKSLASH_ESCAPE, LB]
        },
        EB = {
          className: "comment",
          variants: [BB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Ds: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Ds: "@[A-Za-z]+"
              }, {
                className: "type",
                Ds: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Ds: zB + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Ds: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), BB.C_BLOCK_COMMENT_MODE, BB.C_LINE_COMMENT_MODE]
        },
        iB = [BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, gB, tB, SB, MB, {
          match: /\$\d+/
        }, GB];
      LB.contains = iB.concat({
        Ds: /\{/,
        end: /\}/,
        keywords: JB,
        contains: ["self"].concat(iB)
      });
      const qB = [].concat(EB, LB.contains),
        fB = qB.concat([{
          Ds: /(\s*)\(/,
          end: /\)/,
          keywords: JB,
          contains: ["self"].concat(qB)
        }]),
        oB = {
          className: "params",
          Ds: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: JB,
          contains: fB
        },
        HB = {
          variants: [{
            match: [/class/, /\s+/, zB, /\s+/, /extends/, /\s+/, jB.concat(zB, "(", jB.concat(/\./, zB), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, zB],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        DB = {
          relevance: 0,
          match: jB.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...IB, ...NB]
          }
        },
        FB = {
          variants: [{
            match: [/function/, /\s+/, zB, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [oB],
          illegal: /%/
        };
      const YB = {
        match: jB.concat(/\b/, (VB = [...uB, "super", "import"].map((BB => `${BB}\\s*\\(`)), jB.concat("(?!", VB.join("|"), ")")), zB, jB.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var VB;
      const hB = {
          Ds: jB.concat(/\./, jB.lookahead(jB.concat(zB, /(?![0-9A-Za-z$_(])/))),
          end: zB,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        XB = {
          match: [/get|set/, /\s+/, zB, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Ds: /\(\)/
          }, oB]
        },
        ZB = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + BB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        AB = {
          match: [/const|var|let/, /\s+/, zB, /\s*/, /=\s*/, /(async\s*)?/, jB.lookahead(ZB)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [oB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: JB,
        exports: {
          PARAMS_CONTAINS: fB,
          CLASS_REFERENCE: DB
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
          Ds: /^\s*['"]use (strict|asm)['"]/
        }, BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, gB, tB, SB, MB, EB, {
          match: /\$\d+/
        }, GB, DB, {
          scope: "attr",
          match: zB + jB.lookahead(":"),
          relevance: 0
        }, AB, {
          Ds: "(" + BB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [EB, BB.REGEXP_MODE, {
            className: "function",
            Ds: ZB,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Ds: BB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Ds: /\(\s*\)/,
                skip: !0
              }, {
                Ds: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: JB,
                contains: fB
              }]
            }]
          }, {
            Ds: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Ds: pB,
              end: rB
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Ds: sB.Ds,
              "on:begin": sB.isTrulyOpeningTag,
              end: sB.end
            }],
            subLanguage: "xml",
            contains: [{
              Ds: sB.Ds,
              end: sB.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, FB, {
          beginKeywords: "while if switch catch for"
        }, {
          Ds: "\\b(?!function)" + BB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [oB, BB.inherit(BB.TITLE_MODE, {
            Ds: zB,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, hB, {
          match: "\\$" + zB,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [oB]
        }, YB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, HB, XB, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4821: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB
    });
    const QB = "[A-Za-z$_][0-9A-Za-z$_]*",
      nB = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      dB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      IB = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      NB = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      uB = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      UB = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      aB = [].concat(uB, IB, NB);

    function pB(BB) {
      const jB = BB.regex,
        zB = QB,
        pB = "<>",
        rB = "</>",
        sB = {
          Ds: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (BB, jB) => {
            const zB = BB[0].length + BB.index,
              QB = BB.input[zB];
            if ("<" === QB || "," === QB) return void jB.ignoreMatch();
            let nB;
            ">" === QB && (((BB, jB) => {
              let {
                after: zB
              } = jB;
              const QB = "</" + BB[0].slice(1);
              return -1 !== BB.input.indexOf(QB, zB)
            })(BB, {
              after: zB
            }) || jB.ignoreMatch());
            const dB = BB.input.substring(zB);
            ((nB = dB.match(/^\s*=/)) || (nB = dB.match(/^\s+extends\s+/)) && 0 === nB.index) && jB.ignoreMatch()
          }
        },
        JB = {
          $pattern: QB,
          keyword: nB,
          literal: dB,
          built_in: aB,
          "variable.language": UB
        },
        mB = "[0-9](_?[0-9])*",
        yB = `\\.(${mB})`,
        kB = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        GB = {
          className: "number",
          variants: [{
            Ds: `(\\b(${kB})((${yB})|\\.)?|(${yB}))[eE][+-]?(${mB})\\b`
          }, {
            Ds: `\\b(${kB})\\b((${yB})\\b|\\.)?|(${yB})\\b`
          }, {
            Ds: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Ds: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Ds: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Ds: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Ds: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        LB = {
          className: "subst",
          Ds: "\\$\\{",
          end: "\\}",
          keywords: JB,
          contains: []
        },
        gB = {
          Ds: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, LB],
            subLanguage: "xml"
          }
        },
        tB = {
          Ds: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, LB],
            subLanguage: "css"
          }
        },
        SB = {
          Ds: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, LB],
            subLanguage: "graphql"
          }
        },
        MB = {
          className: "string",
          Ds: "`",
          end: "`",
          contains: [BB.BACKSLASH_ESCAPE, LB]
        },
        EB = {
          className: "comment",
          variants: [BB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Ds: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Ds: "@[A-Za-z]+"
              }, {
                className: "type",
                Ds: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Ds: zB + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Ds: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), BB.C_BLOCK_COMMENT_MODE, BB.C_LINE_COMMENT_MODE]
        },
        iB = [BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, gB, tB, SB, MB, {
          match: /\$\d+/
        }, GB];
      LB.contains = iB.concat({
        Ds: /\{/,
        end: /\}/,
        keywords: JB,
        contains: ["self"].concat(iB)
      });
      const qB = [].concat(EB, LB.contains),
        fB = qB.concat([{
          Ds: /(\s*)\(/,
          end: /\)/,
          keywords: JB,
          contains: ["self"].concat(qB)
        }]),
        oB = {
          className: "params",
          Ds: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: JB,
          contains: fB
        },
        HB = {
          variants: [{
            match: [/class/, /\s+/, zB, /\s+/, /extends/, /\s+/, jB.concat(zB, "(", jB.concat(/\./, zB), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, zB],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        DB = {
          relevance: 0,
          match: jB.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...IB, ...NB]
          }
        },
        FB = {
          variants: [{
            match: [/function/, /\s+/, zB, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [oB],
          illegal: /%/
        };
      const YB = {
        match: jB.concat(/\b/, (VB = [...uB, "super", "import"].map((BB => `${BB}\\s*\\(`)), jB.concat("(?!", VB.join("|"), ")")), zB, jB.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var VB;
      const hB = {
          Ds: jB.concat(/\./, jB.lookahead(jB.concat(zB, /(?![0-9A-Za-z$_(])/))),
          end: zB,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        XB = {
          match: [/get|set/, /\s+/, zB, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Ds: /\(\)/
          }, oB]
        },
        ZB = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + BB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        AB = {
          match: [/const|var|let/, /\s+/, zB, /\s*/, /=\s*/, /(async\s*)?/, jB.lookahead(ZB)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [oB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: JB,
        exports: {
          PARAMS_CONTAINS: fB,
          CLASS_REFERENCE: DB
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
          Ds: /^\s*['"]use (strict|asm)['"]/
        }, BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, gB, tB, SB, MB, EB, {
          match: /\$\d+/
        }, GB, DB, {
          scope: "attr",
          match: zB + jB.lookahead(":"),
          relevance: 0
        }, AB, {
          Ds: "(" + BB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [EB, BB.REGEXP_MODE, {
            className: "function",
            Ds: ZB,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Ds: BB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Ds: /\(\s*\)/,
                skip: !0
              }, {
                Ds: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: JB,
                contains: fB
              }]
            }]
          }, {
            Ds: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Ds: pB,
              end: rB
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Ds: sB.Ds,
              "on:begin": sB.isTrulyOpeningTag,
              end: sB.end
            }],
            subLanguage: "xml",
            contains: [{
              Ds: sB.Ds,
              end: sB.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, FB, {
          beginKeywords: "while if switch catch for"
        }, {
          Ds: "\\b(?!function)" + BB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [oB, BB.inherit(BB.TITLE_MODE, {
            Ds: zB,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, hB, {
          match: "\\$" + zB,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [oB]
        }, YB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, HB, XB, {
          match: /\$[(.]/
        }]
      }
    }

    function rB(BB) {
      const jB = BB.regex,
        zB = pB(BB),
        IB = QB,
        NB = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        uB = {
          Ds: [/namespace/, /\s+/, BB.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        rB = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: NB
          },
          contains: [zB.exports.CLASS_REFERENCE]
        },
        sB = {
          $pattern: QB,
          keyword: nB.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: dB,
          built_in: aB.concat(NB),
          "variable.language": UB
        },
        JB = {
          className: "meta",
          Ds: "@" + IB
        },
        mB = (BB, jB, zB) => {
          const QB = BB.contains.findIndex((BB => BB.label === jB));
          if (-1 === QB) throw new Error("can not find mode to replace");
          BB.contains.splice(QB, 1, zB)
        };
      Object.assign(zB.keywords, sB), zB.exports.PARAMS_CONTAINS.push(JB);
      const yB = zB.contains.find((BB => "attr" === BB.scope)),
        kB = Object.assign({}, yB, {
          match: jB.concat(IB, jB.lookahead(/\s*\?:/))
        });
      zB.exports.PARAMS_CONTAINS.push([zB.exports.CLASS_REFERENCE, yB, kB]), zB.contains = zB.contains.concat([JB, uB, rB, kB]), mB(zB, "shebang", BB.SHEBANG()), mB(zB, "use_strict", {
        className: "meta",
        relevance: 10,
        Ds: /^\s*['"]use strict['"]/
      });
      return zB.contains.find((BB => "func.def" === BB.label)).relevance = 0, Object.assign(zB, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), zB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);