export const id = 70;
export const ids = [70];
export const modules = {
  4108: BB => {
    function TB(BB) {
      return BB instanceof Map ? BB.clear = BB.delete = BB.set = function() {
        throw new Error("map is read-only")
      } : BB instanceof Set && (BB.add = BB.clear = BB.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(BB), Object.getOwnPropertyNames(BB).forEach((dB => {
        const VB = BB[dB],
          yB = typeof VB;
        "object" !== yB && "function" !== yB || Object.isFrozen(VB) || TB(VB)
      })), BB
    }
    class dB {
      constructor(BB) {
        void 0 === BB.data && (BB.data = {}), this.data = BB.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function VB(BB) {
      return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function yB(BB) {
      const TB = Object.create(null);
      for (const pB in BB) TB[pB] = BB[pB];
      for (var dB = arguments.length, VB = new Array(dB > 1 ? dB - 1 : 0), yB = 1; yB < dB; yB++) VB[yB - 1] = arguments[yB];
      return VB.forEach((function(BB) {
        for (const dB in BB) TB[dB] = BB[dB]
      })), TB
    }
    const pB = BB => !!BB.scope;
    class lB {
      constructor(BB, TB) {
        this.buffer = "", this.classPrefix = TB.classPrefix, BB.walk(this)
      }
      addText(BB) {
        this.buffer += VB(BB)
      }
      openNode(BB) {
        if (!pB(BB)) return;
        const TB = ((BB, TB) => {
          let {
            prefix: dB
          } = TB;
          if (BB.startsWith("language:")) return BB.replace("language:", "language-");
          if (BB.includes(".")) {
            const TB = BB.split(".");
            return [`${dB}${TB.shift()}`, ...TB.map(((BB, TB) => `${BB}${"_".repeat(TB+1)}`))].join(" ")
          }
          return `${dB}${BB}`
        })(BB.scope, {
          prefix: this.classPrefix
        });
        this.span(TB)
      }
      closeNode(BB) {
        pB(BB) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(BB) {
        this.buffer += `<span class="${BB}">`
      }
    }
    const JB = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const TB = {
        children: []
      };
      return Object.assign(TB, BB), TB
    };
    class YB {
      constructor() {
        this.Tv = JB(), this.stack = [this.Tv]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.Tv
      }
      add(BB) {
        this.top.children.push(BB)
      }
      openNode(BB) {
        const TB = JB({
          scope: BB
        });
        this.add(TB), this.stack.push(TB)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.Tv, null, 4)
      }
      walk(BB) {
        return this.constructor._walk(BB, this.Tv)
      }
      static _walk(BB, TB) {
        return "string" === typeof TB ? BB.addText(TB) : TB.children && (BB.openNode(TB), TB.children.forEach((TB => this._walk(BB, TB))), BB.closeNode(TB)), BB
      }
      static _collapse(BB) {
        "string" !== typeof BB && BB.children && (BB.children.every((BB => "string" === typeof BB)) ? BB.children = [BB.children.join("")] : BB.children.forEach((BB => {
          YB._collapse(BB)
        })))
      }
    }
    class gB extends YB {
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
      __addSublanguage(BB, TB) {
        const dB = BB.root;
        TB && (dB.scope = `language:${TB}`), this.add(dB)
      }
      toHTML() {
        return new lB(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function oB(BB) {
      return BB ? "string" === typeof BB ? BB : BB.source : null
    }

    function kB(BB) {
      return DB("(?=", BB, ")")
    }

    function LB(BB) {
      return DB("(?:", BB, ")*")
    }

    function OB(BB) {
      return DB("(?:", BB, ")?")
    }

    function DB() {
      for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
      return TB.map((BB => oB(BB))).join("")
    }

    function uB() {
      for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
      const VB = function(BB) {
        const TB = BB[BB.length - 1];
        return "object" === typeof TB && TB.constructor === Object ? (BB.splice(BB.length - 1, 1), TB) : {}
      }(TB);
      return "(" + (VB.capture ? "" : "?:") + TB.map((BB => oB(BB))).join("|") + ")"
    }

    function HB(BB) {
      return new RegExp(BB.toString() + "|").exec("").length - 1
    }
    const EB = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function vB(BB, TB) {
      let {
        joinWith: dB
      } = TB, VB = 0;
      return BB.map((BB => {
        VB += 1;
        const TB = VB;
        let dB = oB(BB),
          yB = "";
        for (; dB.length > 0;) {
          const BB = EB.exec(dB);
          if (!BB) {
            yB += dB;
            break
          }
          yB += dB.substring(0, BB.index), dB = dB.substring(BB.index + BB[0].length), "\\" === BB[0][0] && BB[1] ? yB += "\\" + String(Number(BB[1]) + TB) : (yB += BB[0], "(" === BB[0] && VB++)
        }
        return yB
      })).map((BB => `(${BB})`)).join(dB)
    }
    const mB = "[a-zA-Z]\\w*",
      iB = "[a-zA-Z_]\\w*",
      NB = "\\b\\d+(\\.\\d+)?",
      tB = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      fB = "\\b(0b[01]+)",
      sB = {
        tO: "\\\\[\\s\\S]",
        relevance: 0
      },
      MB = {
        scope: "string",
        tO: "'",
        end: "'",
        illegal: "\\n",
        contains: [sB]
      },
      zB = {
        scope: "string",
        tO: '"',
        end: '"',
        illegal: "\\n",
        contains: [sB]
      },
      wB = function(BB, TB) {
        const dB = yB({
          scope: "comment",
          tO: BB,
          end: TB,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        dB.contains.push({
          scope: "doctag",
          tO: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const VB = uB("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return dB.contains.push({
          tO: DB(/[ ]+/, "(", VB, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), dB
      },
      UB = wB("//", "$"),
      FB = wB("/\\*", "\\*/"),
      KB = wB("#", "$"),
      rB = {
        scope: "number",
        tO: NB,
        relevance: 0
      },
      IB = {
        scope: "number",
        tO: tB,
        relevance: 0
      },
      cB = {
        scope: "number",
        tO: fB,
        relevance: 0
      },
      SB = {
        scope: "regexp",
        tO: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [sB, {
          tO: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [sB]
        }]
      },
      PB = {
        scope: "title",
        tO: mB,
        relevance: 0
      },
      QB = {
        scope: "title",
        tO: iB,
        relevance: 0
      },
      RB = {
        tO: "\\.\\s*" + iB,
        relevance: 0
      };
    var aB = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: MB,
      BACKSLASH_ESCAPE: sB,
      BINARY_NUMBER_MODE: cB,
      BINARY_NUMBER_RE: fB,
      COMMENT: wB,
      C_BLOCK_COMMENT_MODE: FB,
      C_LINE_COMMENT_MODE: UB,
      C_NUMBER_MODE: IB,
      C_NUMBER_RE: tB,
      END_SAME_AS_BEGIN: function(BB) {
        return Object.assign(BB, {
          "on:begin": (BB, TB) => {
            TB.data._beginMatch = BB[1]
          },
          "on:end": (BB, TB) => {
            TB.data._beginMatch !== BB[1] && TB.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: KB,
      IDENT_RE: mB,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: RB,
      NUMBER_MODE: rB,
      NUMBER_RE: NB,
      PHRASAL_WORDS_MODE: {
        tO: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: zB,
      REGEXP_MODE: SB,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const TB = /^#![ ]*\//;
        return BB.binary && (BB.tO = DB(TB, /.*\b/, BB.binary, /\b.*/)), yB({
          scope: "meta",
          tO: TB,
          end: /$/,
          relevance: 0,
          "on:begin": (BB, TB) => {
            0 !== BB.index && TB.ignoreMatch()
          }
        }, BB)
      },
      TITLE_MODE: PB,
      UNDERSCORE_IDENT_RE: iB,
      UNDERSCORE_TITLE_MODE: QB
    });

    function ZB(BB, TB) {
      "." === BB.input[BB.index - 1] && TB.ignoreMatch()
    }

    function XB(BB, TB) {
      void 0 !== BB.className && (BB.scope = BB.className, delete BB.className)
    }

    function WB(BB, TB) {
      TB && BB.beginKeywords && (BB.tO = "\\b(" + BB.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", BB.__beforeBegin = ZB, BB.keywords = BB.keywords || BB.beginKeywords, delete BB.beginKeywords, void 0 === BB.relevance && (BB.relevance = 0))
    }

    function hB(BB, TB) {
      Array.isArray(BB.illegal) && (BB.illegal = uB(...BB.illegal))
    }

    function CB(BB, TB) {
      if (BB.match) {
        if (BB.tO || BB.end) throw new Error("begin & end are not supported with match");
        BB.tO = BB.match, delete BB.match
      }
    }

    function GB(BB, TB) {
      void 0 === BB.relevance && (BB.relevance = 1)
    }
    const qB = (BB, TB) => {
        if (!BB.beforeMatch) return;
        if (BB.starts) throw new Error("beforeMatch cannot be used with starts");
        const dB = Object.assign({}, BB);
        Object.keys(BB).forEach((TB => {
          delete BB[TB]
        })), BB.keywords = dB.keywords, BB.tO = DB(dB.beforeMatch, kB(dB.tO)), BB.starts = {
          relevance: 0,
          contains: [Object.assign(dB, {
            endsParent: !0
          })]
        }, BB.relevance = 0, delete dB.beforeMatch
      },
      xB = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function jB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const VB = Object.create(null);
      return "string" === typeof BB ? yB(dB, BB.split(" ")) : Array.isArray(BB) ? yB(dB, BB) : Object.keys(BB).forEach((function(dB) {
        Object.assign(VB, jB(BB[dB], TB, dB))
      })), VB;

      function yB(BB, dB) {
        TB && (dB = dB.map((BB => BB.toLowerCase()))), dB.forEach((function(TB) {
          const dB = TB.split("|");
          VB[dB[0]] = [BB, AB(dB[0], dB[1])]
        }))
      }
    }

    function AB(BB, TB) {
      return TB ? Number(TB) : function(BB) {
        return xB.includes(BB.toLowerCase())
      }(BB) ? 0 : 1
    }
    const bB = {},
      nB = BB => {
        console.error(BB)
      },
      eB = function(BB) {
        for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
        console.log(`WARN: ${BB}`, ...dB)
      },
      BT = (BB, TB) => {
        bB[`${BB}/${TB}`] || (console.log(`Deprecated as of ${BB}. ${TB}`), bB[`${BB}/${TB}`] = !0)
      },
      TT = new Error;

    function dT(BB, TB, dB) {
      let {
        key: VB
      } = dB, yB = 0;
      const pB = BB[VB],
        lB = {},
        JB = {};
      for (let YB = 1; YB <= TB.length; YB++) JB[YB + yB] = pB[YB], lB[YB + yB] = !0, yB += HB(TB[YB - 1]);
      BB[VB] = JB, BB[VB]._emit = lB, BB[VB]._multi = !0
    }

    function VT(BB) {
      ! function(BB) {
        BB.scope && "object" === typeof BB.scope && null !== BB.scope && (BB.beginScope = BB.scope, delete BB.scope)
      }(BB), "string" === typeof BB.beginScope && (BB.beginScope = {
          _wrap: BB.beginScope
        }), "string" === typeof BB.endScope && (BB.endScope = {
          _wrap: BB.endScope
        }),
        function(BB) {
          if (Array.isArray(BB.tO)) {
            if (BB.skip || BB.excludeBegin || BB.returnBegin) throw nB("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), TT;
            if ("object" !== typeof BB.beginScope || null === BB.beginScope) throw nB("beginScope must be object"), TT;
            dT(BB, BB.tO, {
              key: "beginScope"
            }), BB.tO = vB(BB.tO, {
              joinWith: ""
            })
          }
        }(BB),
        function(BB) {
          if (Array.isArray(BB.end)) {
            if (BB.skip || BB.excludeEnd || BB.returnEnd) throw nB("skip, excludeEnd, returnEnd not compatible with endScope: {}"), TT;
            if ("object" !== typeof BB.endScope || null === BB.endScope) throw nB("endScope must be object"), TT;
            dT(BB, BB.end, {
              key: "endScope"
            }), BB.end = vB(BB.end, {
              joinWith: ""
            })
          }
        }(BB)
    }

    function yT(BB) {
      function TB(TB, dB) {
        return new RegExp(oB(TB), "m" + (BB.case_insensitive ? "i" : "") + (BB.unicodeRegex ? "u" : "") + (dB ? "g" : ""))
      }
      class dB {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(BB, TB) {
          TB.position = this.position++, this.matchIndexes[this.matchAt] = TB, this.regexes.push([TB, BB]), this.matchAt += HB(BB) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const BB = this.regexes.map((BB => BB[1]));
          this.matcherRe = TB(vB(BB, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(BB) {
          this.matcherRe.lastIndex = this.lastIndex;
          const TB = this.matcherRe.exec(BB);
          if (!TB) return null;
          const dB = TB.findIndex(((BB, TB) => TB > 0 && void 0 !== BB)),
            VB = this.matchIndexes[dB];
          return TB.splice(0, dB), Object.assign(TB, VB)
        }
      }
      class VB {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(BB) {
          if (this.multiRegexes[BB]) return this.multiRegexes[BB];
          const TB = new dB;
          return this.rules.slice(BB).forEach((BB => {
            let [dB, VB] = BB;
            return TB.addRule(dB, VB)
          })), TB.compile(), this.multiRegexes[BB] = TB, TB
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(BB, TB) {
          this.rules.push([BB, TB]), "tO" === TB.type && this.count++
        }
        exec(BB) {
          const TB = this.getMatcher(this.regexIndex);
          TB.lastIndex = this.lastIndex;
          let dB = TB.exec(BB);
          if (this.resumingScanAtSamePosition())
            if (dB && dB.index === this.lastIndex);
            else {
              const TB = this.getMatcher(0);
              TB.lastIndex = this.lastIndex + 1, dB = TB.exec(BB)
            } return dB && (this.regexIndex += dB.position + 1, this.regexIndex === this.count && this.considerAll()), dB
        }
      }
      if (BB.compilerExtensions || (BB.compilerExtensions = []), BB.contains && BB.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return BB.classNameAliases = yB(BB.classNameAliases || {}),
        function dB(pB, lB) {
          const JB = pB;
          if (pB.isCompiled) return JB;
          [XB, CB, VT, qB].forEach((BB => BB(pB, lB))), BB.compilerExtensions.forEach((BB => BB(pB, lB))), pB.__beforeBegin = null, [WB, hB, GB].forEach((BB => BB(pB, lB))), pB.isCompiled = !0;
          let YB = null;
          return "object" === typeof pB.keywords && pB.keywords.$pattern && (pB.keywords = Object.assign({}, pB.keywords), YB = pB.keywords.$pattern, delete pB.keywords.$pattern), YB = YB || /\w+/, pB.keywords && (pB.keywords = jB(pB.keywords, BB.case_insensitive)), JB.keywordPatternRe = TB(YB, !0), lB && (pB.tO || (pB.tO = /\B|\b/), JB.beginRe = TB(JB.tO), pB.end || pB.endsWithParent || (pB.end = /\B|\b/), pB.end && (JB.endRe = TB(JB.end)), JB.terminatorEnd = oB(JB.end) || "", pB.endsWithParent && lB.terminatorEnd && (JB.terminatorEnd += (pB.end ? "|" : "") + lB.terminatorEnd)), pB.illegal && (JB.illegalRe = TB(pB.illegal)), pB.contains || (pB.contains = []), pB.contains = [].concat(...pB.contains.map((function(BB) {
            return function(BB) {
              BB.variants && !BB.cachedVariants && (BB.cachedVariants = BB.variants.map((function(TB) {
                return yB(BB, {
                  variants: null
                }, TB)
              })));
              if (BB.cachedVariants) return BB.cachedVariants;
              if (pT(BB)) return yB(BB, {
                starts: BB.starts ? yB(BB.starts) : null
              });
              if (Object.isFrozen(BB)) return yB(BB);
              return BB
            }("self" === BB ? pB : BB)
          }))), pB.contains.forEach((function(BB) {
            dB(BB, JB)
          })), pB.starts && dB(pB.starts, lB), JB.matcher = function(BB) {
            const TB = new VB;
            return BB.contains.forEach((BB => TB.addRule(BB.tO, {
              rule: BB,
              type: "tO"
            }))), BB.terminatorEnd && TB.addRule(BB.terminatorEnd, {
              type: "end"
            }), BB.illegal && TB.addRule(BB.illegal, {
              type: "illegal"
            }), TB
          }(JB), JB
        }(BB)
    }

    function pT(BB) {
      return !!BB && (BB.endsWithParent || pT(BB.starts))
    }
    class lT extends Error {
      constructor(BB, TB) {
        super(BB), this.name = "HTMLInjectionError", this.html = TB
      }
    }
    const JT = VB,
      YT = yB,
      gT = Symbol("nomatch"),
      oT = function(BB) {
        const VB = Object.create(null),
          yB = Object.create(null),
          pB = [];
        let lB = !0;
        const JB = "Could not find the language '{}', did you forget to load/include a language module?",
          YB = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let oB = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: gB
        };

        function HB(BB) {
          return oB.noHighlightRe.test(BB)
        }

        function EB(BB, TB, dB) {
          let VB = "",
            yB = "";
          "object" === typeof TB ? (VB = BB, dB = TB.ignoreIllegals, yB = TB.language) : (BT("10.7.0", "highlight(lang, code, ...args) has been deprecated."), BT("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), yB = BB, VB = TB), void 0 === dB && (dB = !0);
          const pB = {
            code: VB,
            language: yB
          };
          zB("before:highlight", pB);
          const lB = pB.result ? pB.result : vB(pB.language, pB.code, dB);
          return lB.code = pB.code, zB("after:highlight", lB), lB
        }

        function vB(BB, TB, yB, pB) {
          const YB = Object.create(null);

          function gB() {
            if (!zB.keywords) return void UB.addText(FB);
            let BB = 0;
            zB.keywordPatternRe.lastIndex = 0;
            let TB = zB.keywordPatternRe.exec(FB),
              dB = "";
            for (; TB;) {
              dB += FB.substring(BB, TB.index);
              const yB = tB.case_insensitive ? TB[0].toLowerCase() : TB[0],
                pB = (VB = yB, zB.keywords[VB]);
              if (pB) {
                const [BB, VB] = pB;
                if (UB.addText(dB), dB = "", YB[yB] = (YB[yB] || 0) + 1, YB[yB] <= 7 && (KB += VB), BB.startsWith("_")) dB += TB[0];
                else {
                  const dB = tB.classNameAliases[BB] || BB;
                  LB(TB[0], dB)
                }
              } else dB += TB[0];
              BB = zB.keywordPatternRe.lastIndex, TB = zB.keywordPatternRe.exec(FB)
            }
            var VB;
            dB += FB.substring(BB), UB.addText(dB)
          }

          function kB() {
            null != zB.subLanguage ? function() {
              if ("" === FB) return;
              let BB = null;
              if ("string" === typeof zB.subLanguage) {
                if (!VB[zB.subLanguage]) return void UB.addText(FB);
                BB = vB(zB.subLanguage, FB, !0, wB[zB.subLanguage]), wB[zB.subLanguage] = BB._top
              } else BB = mB(FB, zB.subLanguage.length ? zB.subLanguage : null);
              zB.relevance > 0 && (KB += BB.relevance), UB.__addSublanguage(BB._emitter, BB.language)
            }() : gB(), FB = ""
          }

          function LB(BB, TB) {
            "" !== BB && (UB.startScope(TB), UB.addText(BB), UB.endScope())
          }

          function OB(BB, TB) {
            let dB = 1;
            const VB = TB.length - 1;
            for (; dB <= VB;) {
              if (!BB._emit[dB]) {
                dB++;
                continue
              }
              const VB = tB.classNameAliases[BB[dB]] || BB[dB],
                yB = TB[dB];
              VB ? LB(yB, VB) : (FB = yB, gB(), FB = ""), dB++
            }
          }

          function DB(BB, TB) {
            return BB.scope && "string" === typeof BB.scope && UB.openNode(tB.classNameAliases[BB.scope] || BB.scope), BB.beginScope && (BB.beginScope._wrap ? (LB(FB, tB.classNameAliases[BB.beginScope._wrap] || BB.beginScope._wrap), FB = "") : BB.beginScope._multi && (OB(BB.beginScope, TB), FB = "")), zB = Object.create(BB, {
              parent: {
                value: zB
              }
            }), zB
          }

          function uB(BB, TB, VB) {
            let yB = function(BB, TB) {
              const dB = BB && BB.exec(TB);
              return dB && 0 === dB.index
            }(BB.endRe, VB);
            if (yB) {
              if (BB["on:end"]) {
                const VB = new dB(BB);
                BB["on:end"](TB, VB), VB.isMatchIgnored && (yB = !1)
              }
              if (yB) {
                for (; BB.endsParent && BB.parent;) BB = BB.parent;
                return BB
              }
            }
            if (BB.endsWithParent) return uB(BB.parent, TB, VB)
          }

          function HB(BB) {
            return 0 === zB.matcher.regexIndex ? (FB += BB[0], 1) : (cB = !0, 0)
          }

          function EB(BB) {
            const dB = BB[0],
              VB = TB.substring(BB.index),
              yB = uB(zB, BB, VB);
            if (!yB) return gT;
            const pB = zB;
            zB.endScope && zB.endScope._wrap ? (kB(), LB(dB, zB.endScope._wrap)) : zB.endScope && zB.endScope._multi ? (kB(), OB(zB.endScope, BB)) : pB.skip ? FB += dB : (pB.returnEnd || pB.excludeEnd || (FB += dB), kB(), pB.excludeEnd && (FB = dB));
            do {
              zB.scope && UB.closeNode(), zB.skip || zB.subLanguage || (KB += zB.relevance), zB = zB.parent
            } while (zB !== yB.parent);
            return yB.starts && DB(yB.starts, BB), pB.returnEnd ? 0 : dB.length
          }
          let iB = {};

          function NB(VB, pB) {
            const JB = pB && pB[0];
            if (FB += VB, null == JB) return kB(), 0;
            if ("tO" === iB.type && "end" === pB.type && iB.index === pB.index && "" === JB) {
              if (FB += TB.slice(pB.index, pB.index + 1), !lB) {
                const TB = new Error(`0 width match regex (${BB})`);
                throw TB.languageName = BB, TB.badRule = iB.rule, TB
              }
              return 1
            }
            if (iB = pB, "tO" === pB.type) return function(BB) {
              const TB = BB[0],
                VB = BB.rule,
                yB = new dB(VB),
                pB = [VB.__beforeBegin, VB["on:begin"]];
              for (const dB of pB)
                if (dB && (dB(BB, yB), yB.isMatchIgnored)) return HB(TB);
              return VB.skip ? FB += TB : (VB.excludeBegin && (FB += TB), kB(), VB.returnBegin || VB.excludeBegin || (FB = TB)), DB(VB, BB), VB.returnBegin ? 0 : TB.length
            }(pB);
            if ("illegal" === pB.type && !yB) {
              const BB = new Error('Illegal lexeme "' + JB + '" for mode "' + (zB.scope || "<unnamed>") + '"');
              throw BB.mode = zB, BB
            }
            if ("end" === pB.type) {
              const BB = EB(pB);
              if (BB !== gT) return BB
            }
            if ("illegal" === pB.type && "" === JB) return FB += "\n", 1;
            if (IB > 1e5 && IB > 3 * pB.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return FB += JB, JB.length
          }
          const tB = fB(BB);
          if (!tB) throw nB(JB.replace("{}", BB)), new Error('Unknown language: "' + BB + '"');
          const sB = yT(tB);
          let MB = "",
            zB = pB || sB;
          const wB = {},
            UB = new oB.__emitter(oB);
          ! function() {
            const BB = [];
            for (let TB = zB; TB !== tB; TB = TB.parent) TB.scope && BB.unshift(TB.scope);
            BB.forEach((BB => UB.openNode(BB)))
          }();
          let FB = "",
            KB = 0,
            rB = 0,
            IB = 0,
            cB = !1;
          try {
            if (tB.__emitTokens) tB.__emitTokens(TB, UB);
            else {
              for (zB.matcher.considerAll();;) {
                IB++, cB ? cB = !1 : zB.matcher.considerAll(), zB.matcher.lastIndex = rB;
                const BB = zB.matcher.exec(TB);
                if (!BB) break;
                const dB = NB(TB.substring(rB, BB.index), BB);
                rB = BB.index + dB
              }
              NB(TB.substring(rB))
            }
            return UB.finalize(), MB = UB.toHTML(), {
              language: BB,
              value: MB,
              relevance: KB,
              illegal: !1,
              _emitter: UB,
              _top: zB
            }
          } catch (SB) {
            if (SB.message && SB.message.includes("Illegal")) return {
              language: BB,
              value: JT(TB),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: SB.message,
                index: rB,
                context: TB.slice(rB - 100, rB + 100),
                mode: SB.mode,
                resultSoFar: MB
              },
              _emitter: UB
            };
            if (lB) return {
              language: BB,
              value: JT(TB),
              illegal: !1,
              relevance: 0,
              errorRaised: SB,
              _emitter: UB,
              _top: zB
            };
            throw SB
          }
        }

        function mB(BB, TB) {
          TB = TB || oB.languages || Object.keys(VB);
          const dB = function(BB) {
              const TB = {
                value: JT(BB),
                illegal: !1,
                relevance: 0,
                _top: YB,
                _emitter: new oB.__emitter(oB)
              };
              return TB._emitter.addText(BB), TB
            }(BB),
            yB = TB.filter(fB).filter(MB).map((TB => vB(TB, BB, !1)));
          yB.unshift(dB);
          const pB = yB.sort(((BB, TB) => {
              if (BB.relevance !== TB.relevance) return TB.relevance - BB.relevance;
              if (BB.language && TB.language) {
                if (fB(BB.language).supersetOf === TB.language) return 1;
                if (fB(TB.language).supersetOf === BB.language) return -1
              }
              return 0
            })),
            [lB, JB] = pB,
            gB = lB;
          return gB.secondBest = JB, gB
        }

        function iB(BB) {
          let TB = null;
          const dB = function(BB) {
            let TB = BB.className + " ";
            TB += BB.parentNode ? BB.parentNode.className : "";
            const dB = oB.languageDetectRe.exec(TB);
            if (dB) {
              const TB = fB(dB[1]);
              return TB || (eB(JB.replace("{}", dB[1])), eB("Falling back to no-highlight mode for this block.", BB)), TB ? dB[1] : "no-highlight"
            }
            return TB.split(/\s+/).find((BB => HB(BB) || fB(BB)))
          }(BB);
          if (HB(dB)) return;
          if (zB("before:highlightElement", {
              el: BB,
              language: dB
            }), BB.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", BB);
          if (BB.children.length > 0 && (oB.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(BB)), oB.throwUnescapedHTML)) {
            throw new lT("One of your code blocks includes unescaped HTML.", BB.innerHTML)
          }
          TB = BB;
          const VB = TB.textContent,
            pB = dB ? EB(VB, {
              language: dB,
              ignoreIllegals: !0
            }) : mB(VB);
          BB.innerHTML = pB.value, BB.dataset.highlighted = "yes",
            function(BB, TB, dB) {
              const VB = TB && yB[TB] || dB;
              BB.classList.add("hljs"), BB.classList.add(`language-${VB}`)
            }(BB, dB, pB.language), BB.result = {
              language: pB.language,
              re: pB.relevance,
              relevance: pB.relevance
            }, pB.secondBest && (BB.secondBest = {
              language: pB.secondBest.language,
              relevance: pB.secondBest.relevance
            }), zB("after:highlightElement", {
              el: BB,
              result: pB,
              text: VB
            })
        }
        let NB = !1;

        function tB() {
          if ("loading" === document.readyState) return NB || window.addEventListener("DOMContentLoaded", (function() {
            tB()
          }), !1), void(NB = !0);
          document.querySelectorAll(oB.cssSelector).forEach(iB)
        }

        function fB(BB) {
          return BB = (BB || "").toLowerCase(), VB[BB] || VB[yB[BB]]
        }

        function sB(BB, TB) {
          let {
            languageName: dB
          } = TB;
          "string" === typeof BB && (BB = [BB]), BB.forEach((BB => {
            yB[BB.toLowerCase()] = dB
          }))
        }

        function MB(BB) {
          const TB = fB(BB);
          return TB && !TB.disableAutodetect
        }

        function zB(BB, TB) {
          const dB = BB;
          pB.forEach((function(BB) {
            BB[dB] && BB[dB](TB)
          }))
        }
        Object.assign(BB, {
          highlight: EB,
          highlightAuto: mB,
          highlightAll: tB,
          highlightElement: iB,
          highlightBlock: function(BB) {
            return BT("10.7.0", "highlightBlock will be removed entirely in v12.0"), BT("10.7.0", "Please use highlightElement now."), iB(BB)
          },
          configure: function(BB) {
            oB = YT(oB, BB)
          },
          initHighlighting: () => {
            tB(), BT("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            tB(), BT("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(TB, dB) {
            let yB = null;
            try {
              yB = dB(BB)
            } catch (pB) {
              if (nB("Language definition for '{}' could not be registered.".replace("{}", TB)), !lB) throw pB;
              nB(pB), yB = YB
            }
            yB.name || (yB.name = TB), VB[TB] = yB, yB.rawDefinition = dB.bind(null, BB), yB.aliases && sB(yB.aliases, {
              languageName: TB
            })
          },
          unregisterLanguage: function(BB) {
            delete VB[BB];
            for (const TB of Object.keys(yB)) yB[TB] === BB && delete yB[TB]
          },
          listLanguages: function() {
            return Object.keys(VB)
          },
          getLanguage: fB,
          registerAliases: sB,
          autoDetection: MB,
          inherit: YT,
          addPlugin: function(BB) {
            ! function(BB) {
              BB["before:highlightBlock"] && !BB["before:highlightElement"] && (BB["before:highlightElement"] = TB => {
                BB["before:highlightBlock"](Object.assign({
                  block: TB.el
                }, TB))
              }), BB["after:highlightBlock"] && !BB["after:highlightElement"] && (BB["after:highlightElement"] = TB => {
                BB["after:highlightBlock"](Object.assign({
                  block: TB.el
                }, TB))
              })
            }(BB), pB.push(BB)
          },
          removePlugin: function(BB) {
            const TB = pB.indexOf(BB); - 1 !== TB && pB.splice(TB, 1)
          }
        }), BB.debugMode = function() {
          lB = !1
        }, BB.safeMode = function() {
          lB = !0
        }, BB.versionString = "11.11.1", BB.regex = {
          concat: DB,
          lookahead: kB,
          either: uB,
          optional: OB,
          anyNumberOfTimes: LB
        };
        for (const dB in aB) "object" === typeof aB[dB] && TB(aB[dB]);
        return Object.assign(BB, aB), BB
      },
      kT = oT({});
    kT.newInstance = () => oT({}), BB.exports = kT, kT.HighlightJS = kT, kT.default = kT
  },
  4105: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    const VB = dB(4108)
  },
  4117: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => kB
    });
    const VB = "[A-Za-z$_][0-9A-Za-z$_]*",
      yB = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      pB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      lB = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      JB = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      YB = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      gB = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      oB = [].concat(YB, lB, JB);

    function kB(BB) {
      const TB = BB.regex,
        dB = VB,
        kB = "<>",
        LB = "</>",
        OB = {
          tO: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (BB, TB) => {
            const dB = BB[0].length + BB.index,
              VB = BB.input[dB];
            if ("<" === VB || "," === VB) return void TB.ignoreMatch();
            let yB;
            ">" === VB && (((BB, TB) => {
              let {
                after: dB
              } = TB;
              const VB = "</" + BB[0].slice(1);
              return -1 !== BB.input.indexOf(VB, dB)
            })(BB, {
              after: dB
            }) || TB.ignoreMatch());
            const pB = BB.input.substring(dB);
            ((yB = pB.match(/^\s*=/)) || (yB = pB.match(/^\s+extends\s+/)) && 0 === yB.index) && TB.ignoreMatch()
          }
        },
        DB = {
          $pattern: VB,
          keyword: yB,
          literal: pB,
          built_in: oB,
          "variable.language": gB
        },
        uB = "[0-9](_?[0-9])*",
        HB = `\\.(${uB})`,
        EB = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        vB = {
          className: "number",
          variants: [{
            tO: `(\\b(${EB})((${HB})|\\.)?|(${HB}))[eE][+-]?(${uB})\\b`
          }, {
            tO: `\\b(${EB})\\b((${HB})\\b|\\.)?|(${HB})\\b`
          }, {
            tO: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            tO: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            tO: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            tO: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            tO: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        mB = {
          className: "subst",
          tO: "\\$\\{",
          end: "\\}",
          keywords: DB,
          contains: []
        },
        iB = {
          tO: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, mB],
            subLanguage: "xml"
          }
        },
        NB = {
          tO: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, mB],
            subLanguage: "css"
          }
        },
        tB = {
          tO: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, mB],
            subLanguage: "graphql"
          }
        },
        fB = {
          className: "string",
          tO: "`",
          end: "`",
          contains: [BB.BACKSLASH_ESCAPE, mB]
        },
        sB = {
          className: "comment",
          variants: [BB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              tO: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                tO: "@[A-Za-z]+"
              }, {
                className: "type",
                tO: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                tO: dB + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                tO: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), BB.C_BLOCK_COMMENT_MODE, BB.C_LINE_COMMENT_MODE]
        },
        MB = [BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, iB, NB, tB, fB, {
          match: /\$\d+/
        }, vB];
      mB.contains = MB.concat({
        tO: /\{/,
        end: /\}/,
        keywords: DB,
        contains: ["self"].concat(MB)
      });
      const zB = [].concat(sB, mB.contains),
        wB = zB.concat([{
          tO: /(\s*)\(/,
          end: /\)/,
          keywords: DB,
          contains: ["self"].concat(zB)
        }]),
        UB = {
          className: "params",
          tO: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: DB,
          contains: wB
        },
        FB = {
          variants: [{
            match: [/class/, /\s+/, dB, /\s+/, /extends/, /\s+/, TB.concat(dB, "(", TB.concat(/\./, dB), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, dB],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        KB = {
          relevance: 0,
          match: TB.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...lB, ...JB]
          }
        },
        rB = {
          variants: [{
            match: [/function/, /\s+/, dB, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [UB],
          illegal: /%/
        };
      const IB = {
        match: TB.concat(/\b/, (cB = [...YB, "super", "import"].map((BB => `${BB}\\s*\\(`)), TB.concat("(?!", cB.join("|"), ")")), dB, TB.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var cB;
      const SB = {
          tO: TB.concat(/\./, TB.lookahead(TB.concat(dB, /(?![0-9A-Za-z$_(])/))),
          end: dB,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        PB = {
          match: [/get|set/, /\s+/, dB, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            tO: /\(\)/
          }, UB]
        },
        QB = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + BB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        RB = {
          match: [/const|var|let/, /\s+/, dB, /\s*/, /=\s*/, /(async\s*)?/, TB.lookahead(QB)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [UB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: DB,
        exports: {
          PARAMS_CONTAINS: wB,
          CLASS_REFERENCE: KB
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
          tO: /^\s*['"]use (strict|asm)['"]/
        }, BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, iB, NB, tB, fB, sB, {
          match: /\$\d+/
        }, vB, KB, {
          scope: "attr",
          match: dB + TB.lookahead(":"),
          relevance: 0
        }, RB, {
          tO: "(" + BB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [sB, BB.REGEXP_MODE, {
            className: "function",
            tO: QB,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                tO: BB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                tO: /\(\s*\)/,
                skip: !0
              }, {
                tO: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: DB,
                contains: wB
              }]
            }]
          }, {
            tO: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              tO: kB,
              end: LB
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              tO: OB.tO,
              "on:begin": OB.isTrulyOpeningTag,
              end: OB.end
            }],
            subLanguage: "xml",
            contains: [{
              tO: OB.tO,
              end: OB.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, rB, {
          beginKeywords: "while if switch catch for"
        }, {
          tO: "\\b(?!function)" + BB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [UB, BB.inherit(BB.TITLE_MODE, {
            tO: dB,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, SB, {
          match: "\\$" + dB,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [UB]
        }, IB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, FB, PB, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4122: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => LB
    });
    const VB = "[A-Za-z$_][0-9A-Za-z$_]*",
      yB = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      pB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      lB = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      JB = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      YB = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      gB = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      oB = [].concat(YB, lB, JB);

    function kB(BB) {
      const TB = BB.regex,
        dB = VB,
        kB = "<>",
        LB = "</>",
        OB = {
          tO: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (BB, TB) => {
            const dB = BB[0].length + BB.index,
              VB = BB.input[dB];
            if ("<" === VB || "," === VB) return void TB.ignoreMatch();
            let yB;
            ">" === VB && (((BB, TB) => {
              let {
                after: dB
              } = TB;
              const VB = "</" + BB[0].slice(1);
              return -1 !== BB.input.indexOf(VB, dB)
            })(BB, {
              after: dB
            }) || TB.ignoreMatch());
            const pB = BB.input.substring(dB);
            ((yB = pB.match(/^\s*=/)) || (yB = pB.match(/^\s+extends\s+/)) && 0 === yB.index) && TB.ignoreMatch()
          }
        },
        DB = {
          $pattern: VB,
          keyword: yB,
          literal: pB,
          built_in: oB,
          "variable.language": gB
        },
        uB = "[0-9](_?[0-9])*",
        HB = `\\.(${uB})`,
        EB = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        vB = {
          className: "number",
          variants: [{
            tO: `(\\b(${EB})((${HB})|\\.)?|(${HB}))[eE][+-]?(${uB})\\b`
          }, {
            tO: `\\b(${EB})\\b((${HB})\\b|\\.)?|(${HB})\\b`
          }, {
            tO: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            tO: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            tO: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            tO: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            tO: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        mB = {
          className: "subst",
          tO: "\\$\\{",
          end: "\\}",
          keywords: DB,
          contains: []
        },
        iB = {
          tO: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, mB],
            subLanguage: "xml"
          }
        },
        NB = {
          tO: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, mB],
            subLanguage: "css"
          }
        },
        tB = {
          tO: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, mB],
            subLanguage: "graphql"
          }
        },
        fB = {
          className: "string",
          tO: "`",
          end: "`",
          contains: [BB.BACKSLASH_ESCAPE, mB]
        },
        sB = {
          className: "comment",
          variants: [BB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              tO: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                tO: "@[A-Za-z]+"
              }, {
                className: "type",
                tO: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                tO: dB + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                tO: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), BB.C_BLOCK_COMMENT_MODE, BB.C_LINE_COMMENT_MODE]
        },
        MB = [BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, iB, NB, tB, fB, {
          match: /\$\d+/
        }, vB];
      mB.contains = MB.concat({
        tO: /\{/,
        end: /\}/,
        keywords: DB,
        contains: ["self"].concat(MB)
      });
      const zB = [].concat(sB, mB.contains),
        wB = zB.concat([{
          tO: /(\s*)\(/,
          end: /\)/,
          keywords: DB,
          contains: ["self"].concat(zB)
        }]),
        UB = {
          className: "params",
          tO: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: DB,
          contains: wB
        },
        FB = {
          variants: [{
            match: [/class/, /\s+/, dB, /\s+/, /extends/, /\s+/, TB.concat(dB, "(", TB.concat(/\./, dB), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, dB],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        KB = {
          relevance: 0,
          match: TB.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...lB, ...JB]
          }
        },
        rB = {
          variants: [{
            match: [/function/, /\s+/, dB, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [UB],
          illegal: /%/
        };
      const IB = {
        match: TB.concat(/\b/, (cB = [...YB, "super", "import"].map((BB => `${BB}\\s*\\(`)), TB.concat("(?!", cB.join("|"), ")")), dB, TB.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var cB;
      const SB = {
          tO: TB.concat(/\./, TB.lookahead(TB.concat(dB, /(?![0-9A-Za-z$_(])/))),
          end: dB,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        PB = {
          match: [/get|set/, /\s+/, dB, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            tO: /\(\)/
          }, UB]
        },
        QB = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + BB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        RB = {
          match: [/const|var|let/, /\s+/, dB, /\s*/, /=\s*/, /(async\s*)?/, TB.lookahead(QB)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [UB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: DB,
        exports: {
          PARAMS_CONTAINS: wB,
          CLASS_REFERENCE: KB
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
          tO: /^\s*['"]use (strict|asm)['"]/
        }, BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, iB, NB, tB, fB, sB, {
          match: /\$\d+/
        }, vB, KB, {
          scope: "attr",
          match: dB + TB.lookahead(":"),
          relevance: 0
        }, RB, {
          tO: "(" + BB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [sB, BB.REGEXP_MODE, {
            className: "function",
            tO: QB,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                tO: BB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                tO: /\(\s*\)/,
                skip: !0
              }, {
                tO: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: DB,
                contains: wB
              }]
            }]
          }, {
            tO: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              tO: kB,
              end: LB
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              tO: OB.tO,
              "on:begin": OB.isTrulyOpeningTag,
              end: OB.end
            }],
            subLanguage: "xml",
            contains: [{
              tO: OB.tO,
              end: OB.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, rB, {
          beginKeywords: "while if switch catch for"
        }, {
          tO: "\\b(?!function)" + BB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [UB, BB.inherit(BB.TITLE_MODE, {
            tO: dB,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, SB, {
          match: "\\$" + dB,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [UB]
        }, IB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, FB, PB, {
          match: /\$[(.]/
        }]
      }
    }

    function LB(BB) {
      const TB = BB.regex,
        dB = kB(BB),
        lB = VB,
        JB = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        YB = {
          tO: [/namespace/, /\s+/, BB.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        LB = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: JB
          },
          contains: [dB.exports.CLASS_REFERENCE]
        },
        OB = {
          $pattern: VB,
          keyword: yB.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: pB,
          built_in: oB.concat(JB),
          "variable.language": gB
        },
        DB = {
          className: "meta",
          tO: "@" + lB
        },
        uB = (BB, TB, dB) => {
          const VB = BB.contains.findIndex((BB => BB.label === TB));
          if (-1 === VB) throw new Error("can not find mode to replace");
          BB.contains.splice(VB, 1, dB)
        };
      Object.assign(dB.keywords, OB), dB.exports.PARAMS_CONTAINS.push(DB);
      const HB = dB.contains.find((BB => "attr" === BB.scope)),
        EB = Object.assign({}, HB, {
          match: TB.concat(lB, TB.lookahead(/\s*\?:/))
        });
      dB.exports.PARAMS_CONTAINS.push([dB.exports.CLASS_REFERENCE, HB, EB]), dB.contains = dB.contains.concat([DB, YB, LB, EB]), uB(dB, "shebang", BB.SHEBANG()), uB(dB, "use_strict", {
        className: "meta",
        relevance: 10,
        tO: /^\s*['"]use strict['"]/
      });
      return dB.contains.find((BB => "func.def" === BB.label)).relevance = 0, Object.assign(dB, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);