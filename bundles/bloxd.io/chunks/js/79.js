export const id = 79;
export const ids = [79];
export const modules = {
  4839: SS => {
    function HS(SS) {
      return SS instanceof Map ? SS.clear = SS.delete = SS.set = function() {
        throw new Error("map is read-only")
      } : SS instanceof Set && (SS.add = SS.clear = SS.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(SS), Object.getOwnPropertyNames(SS).forEach((gS => {
        const tS = SS[gS],
          bS = typeof tS;
        "object" !== bS && "function" !== bS || Object.isFrozen(tS) || HS(tS)
      })), SS
    }
    class gS {
      constructor(SS) {
        void 0 === SS.data && (SS.data = {}), this.data = SS.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function tS(SS) {
      return SS.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function bS(SS) {
      const HS = Object.create(null);
      for (const XS in SS) HS[XS] = SS[XS];
      for (var gS = arguments.length, tS = new Array(gS > 1 ? gS - 1 : 0), bS = 1; bS < gS; bS++) tS[bS - 1] = arguments[bS];
      return tS.forEach((function(SS) {
        for (const gS in SS) HS[gS] = SS[gS]
      })), HS
    }
    const XS = SS => !!SS.scope;
    class xS {
      constructor(SS, HS) {
        this.buffer = "", this.classPrefix = HS.classPrefix, SS.walk(this)
      }
      addText(SS) {
        this.buffer += tS(SS)
      }
      openNode(SS) {
        if (!XS(SS)) return;
        const HS = ((SS, HS) => {
          let {
            prefix: gS
          } = HS;
          if (SS.startsWith("language:")) return SS.replace("language:", "language-");
          if (SS.includes(".")) {
            const HS = SS.split(".");
            return [`${gS}${HS.shift()}`, ...HS.map(((SS, HS) => `${SS}${"_".repeat(HS+1)}`))].join(" ")
          }
          return `${gS}${SS}`
        })(SS.scope, {
          prefix: this.classPrefix
        });
        this.span(HS)
      }
      closeNode(SS) {
        XS(SS) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(SS) {
        this.buffer += `<span class="${SS}">`
      }
    }
    const NS = function() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const HS = {
        children: []
      };
      return Object.assign(HS, SS), HS
    };
    class qS {
      constructor() {
        this.RC = NS(), this.stack = [this.RC]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.RC
      }
      add(SS) {
        this.top.children.push(SS)
      }
      openNode(SS) {
        const HS = NS({
          scope: SS
        });
        this.add(HS), this.stack.push(HS)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.RC, null, 4)
      }
      walk(SS) {
        return this.constructor._walk(SS, this.RC)
      }
      static _walk(SS, HS) {
        return "string" === typeof HS ? SS.addText(HS) : HS.children && (SS.openNode(HS), HS.children.forEach((HS => this._walk(SS, HS))), SS.closeNode(HS)), SS
      }
      static _collapse(SS) {
        "string" !== typeof SS && SS.children && (SS.children.every((SS => "string" === typeof SS)) ? SS.children = [SS.children.join("")] : SS.children.forEach((SS => {
          qS._collapse(SS)
        })))
      }
    }
    class uS extends qS {
      constructor(SS) {
        super(), this.options = SS
      }
      addText(SS) {
        "" !== SS && this.add(SS)
      }
      startScope(SS) {
        this.openNode(SS)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(SS, HS) {
        const gS = SS.root;
        HS && (gS.scope = `language:${HS}`), this.add(gS)
      }
      toHTML() {
        return new xS(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function IS(SS) {
      return SS ? "string" === typeof SS ? SS : SS.source : null
    }

    function fS(SS) {
      return KS("(?=", SS, ")")
    }

    function kS(SS) {
      return KS("(?:", SS, ")*")
    }

    function aS(SS) {
      return KS("(?:", SS, ")?")
    }

    function KS() {
      for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
      return HS.map((SS => IS(SS))).join("")
    }

    function jS() {
      for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
      const tS = function(SS) {
        const HS = SS[SS.length - 1];
        return "object" === typeof HS && HS.constructor === Object ? (SS.splice(SS.length - 1, 1), HS) : {}
      }(HS);
      return "(" + (tS.capture ? "" : "?:") + HS.map((SS => IS(SS))).join("|") + ")"
    }

    function GS(SS) {
      return new RegExp(SS.toString() + "|").exec("").length - 1
    }
    const CS = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function nS(SS, HS) {
      let {
        joinWith: gS
      } = HS, tS = 0;
      return SS.map((SS => {
        tS += 1;
        const HS = tS;
        let gS = IS(SS),
          bS = "";
        for (; gS.length > 0;) {
          const SS = CS.exec(gS);
          if (!SS) {
            bS += gS;
            break
          }
          bS += gS.substring(0, SS.index), gS = gS.substring(SS.index + SS[0].length), "\\" === SS[0][0] && SS[1] ? bS += "\\" + String(Number(SS[1]) + HS) : (bS += SS[0], "(" === SS[0] && tS++)
        }
        return bS
      })).map((SS => `(${SS})`)).join(gS)
    }
    const PS = "[a-zA-Z]\\w*",
      QS = "[a-zA-Z_]\\w*",
      DS = "\\b\\d+(\\.\\d+)?",
      wS = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      hS = "\\b(0b[01]+)",
      ZS = {
        Qa: "\\\\[\\s\\S]",
        relevance: 0
      },
      JS = {
        scope: "string",
        Qa: "'",
        end: "'",
        illegal: "\\n",
        contains: [ZS]
      },
      OS = {
        scope: "string",
        Qa: '"',
        end: '"',
        illegal: "\\n",
        contains: [ZS]
      },
      dS = function(SS, HS) {
        const gS = bS({
          scope: "comment",
          Qa: SS,
          end: HS,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        gS.contains.push({
          scope: "doctag",
          Qa: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const tS = jS("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return gS.contains.push({
          Qa: KS(/[ ]+/, "(", tS, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), gS
      },
      cS = dS("//", "$"),
      vS = dS("/\\*", "\\*/"),
      ES = dS("#", "$"),
      LS = {
        scope: "number",
        Qa: DS,
        relevance: 0
      },
      YS = {
        scope: "number",
        Qa: wS,
        relevance: 0
      },
      AS = {
        scope: "number",
        Qa: hS,
        relevance: 0
      },
      yS = {
        scope: "regexp",
        Qa: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [ZS, {
          Qa: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [ZS]
        }]
      },
      VS = {
        scope: "title",
        Qa: PS,
        relevance: 0
      },
      iS = {
        scope: "title",
        Qa: QS,
        relevance: 0
      },
      WS = {
        Qa: "\\.\\s*" + QS,
        relevance: 0
      };
    var zS = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: JS,
      BACKSLASH_ESCAPE: ZS,
      BINARY_NUMBER_MODE: AS,
      BINARY_NUMBER_RE: hS,
      COMMENT: dS,
      C_BLOCK_COMMENT_MODE: vS,
      C_LINE_COMMENT_MODE: cS,
      C_NUMBER_MODE: YS,
      C_NUMBER_RE: wS,
      END_SAME_AS_BEGIN: function(SS) {
        return Object.assign(SS, {
          "on:begin": (SS, HS) => {
            HS.data._beginMatch = SS[1]
          },
          "on:end": (SS, HS) => {
            HS.data._beginMatch !== SS[1] && HS.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: ES,
      IDENT_RE: PS,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: WS,
      NUMBER_MODE: LS,
      NUMBER_RE: DS,
      PHRASAL_WORDS_MODE: {
        Qa: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: OS,
      REGEXP_MODE: yS,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const HS = /^#![ ]*\//;
        return SS.binary && (SS.Qa = KS(HS, /.*\b/, SS.binary, /\b.*/)), bS({
          scope: "meta",
          Qa: HS,
          end: /$/,
          relevance: 0,
          "on:begin": (SS, HS) => {
            0 !== SS.index && HS.ignoreMatch()
          }
        }, SS)
      },
      TITLE_MODE: VS,
      UNDERSCORE_IDENT_RE: QS,
      UNDERSCORE_TITLE_MODE: iS
    });

    function US(SS, HS) {
      "." === SS.input[SS.index - 1] && HS.ignoreMatch()
    }

    function pS(SS, HS) {
      void 0 !== SS.className && (SS.scope = SS.className, delete SS.className)
    }

    function sS(SS, HS) {
      HS && SS.beginKeywords && (SS.Qa = "\\b(" + SS.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", SS.__beforeBegin = US, SS.keywords = SS.keywords || SS.beginKeywords, delete SS.beginKeywords, void 0 === SS.relevance && (SS.relevance = 0))
    }

    function BS(SS, HS) {
      Array.isArray(SS.illegal) && (SS.illegal = jS(...SS.illegal))
    }

    function MS(SS, HS) {
      if (SS.match) {
        if (SS.Qa || SS.end) throw new Error("begin & end are not supported with match");
        SS.Qa = SS.match, delete SS.match
      }
    }

    function FS(SS, HS) {
      void 0 === SS.relevance && (SS.relevance = 1)
    }
    const RS = (SS, HS) => {
        if (!SS.beforeMatch) return;
        if (SS.starts) throw new Error("beforeMatch cannot be used with starts");
        const gS = Object.assign({}, SS);
        Object.keys(SS).forEach((HS => {
          delete SS[HS]
        })), SS.keywords = gS.keywords, SS.Qa = KS(gS.beforeMatch, fS(gS.Qa)), SS.starts = {
          relevance: 0,
          contains: [Object.assign(gS, {
            endsParent: !0
          })]
        }, SS.relevance = 0, delete gS.beforeMatch
      },
      TS = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function oS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const tS = Object.create(null);
      return "string" === typeof SS ? bS(gS, SS.split(" ")) : Array.isArray(SS) ? bS(gS, SS) : Object.keys(SS).forEach((function(gS) {
        Object.assign(tS, oS(SS[gS], HS, gS))
      })), tS;

      function bS(SS, gS) {
        HS && (gS = gS.map((SS => SS.toLowerCase()))), gS.forEach((function(HS) {
          const gS = HS.split("|");
          tS[gS[0]] = [SS, lS(gS[0], gS[1])]
        }))
      }
    }

    function lS(SS, HS) {
      return HS ? Number(HS) : function(SS) {
        return TS.includes(SS.toLowerCase())
      }(SS) ? 0 : 1
    }
    const mS = {},
      eS = SS => {
        console.error(SS)
      },
      rS = function(SS) {
        for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
        console.log(`WARN: ${SS}`, ...gS)
      },
      SH = (SS, HS) => {
        mS[`${SS}/${HS}`] || (console.log(`Deprecated as of ${SS}. ${HS}`), mS[`${SS}/${HS}`] = !0)
      },
      HH = new Error;

    function gH(SS, HS, gS) {
      let {
        key: tS
      } = gS, bS = 0;
      const XS = SS[tS],
        xS = {},
        NS = {};
      for (let qS = 1; qS <= HS.length; qS++) NS[qS + bS] = XS[qS], xS[qS + bS] = !0, bS += GS(HS[qS - 1]);
      SS[tS] = NS, SS[tS]._emit = xS, SS[tS]._multi = !0
    }

    function tH(SS) {
      ! function(SS) {
        SS.scope && "object" === typeof SS.scope && null !== SS.scope && (SS.beginScope = SS.scope, delete SS.scope)
      }(SS), "string" === typeof SS.beginScope && (SS.beginScope = {
          _wrap: SS.beginScope
        }), "string" === typeof SS.endScope && (SS.endScope = {
          _wrap: SS.endScope
        }),
        function(SS) {
          if (Array.isArray(SS.Qa)) {
            if (SS.skip || SS.excludeBegin || SS.returnBegin) throw eS("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), HH;
            if ("object" !== typeof SS.beginScope || null === SS.beginScope) throw eS("beginScope must be object"), HH;
            gH(SS, SS.Qa, {
              key: "beginScope"
            }), SS.Qa = nS(SS.Qa, {
              joinWith: ""
            })
          }
        }(SS),
        function(SS) {
          if (Array.isArray(SS.end)) {
            if (SS.skip || SS.excludeEnd || SS.returnEnd) throw eS("skip, excludeEnd, returnEnd not compatible with endScope: {}"), HH;
            if ("object" !== typeof SS.endScope || null === SS.endScope) throw eS("endScope must be object"), HH;
            gH(SS, SS.end, {
              key: "endScope"
            }), SS.end = nS(SS.end, {
              joinWith: ""
            })
          }
        }(SS)
    }

    function bH(SS) {
      function HS(HS, gS) {
        return new RegExp(IS(HS), "m" + (SS.case_insensitive ? "i" : "") + (SS.unicodeRegex ? "u" : "") + (gS ? "g" : ""))
      }
      class gS {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(SS, HS) {
          HS.position = this.position++, this.matchIndexes[this.matchAt] = HS, this.regexes.push([HS, SS]), this.matchAt += GS(SS) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const SS = this.regexes.map((SS => SS[1]));
          this.matcherRe = HS(nS(SS, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(SS) {
          this.matcherRe.lastIndex = this.lastIndex;
          const HS = this.matcherRe.exec(SS);
          if (!HS) return null;
          const gS = HS.findIndex(((SS, HS) => HS > 0 && void 0 !== SS)),
            tS = this.matchIndexes[gS];
          return HS.splice(0, gS), Object.assign(HS, tS)
        }
      }
      class tS {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(SS) {
          if (this.multiRegexes[SS]) return this.multiRegexes[SS];
          const HS = new gS;
          return this.rules.slice(SS).forEach((SS => {
            let [gS, tS] = SS;
            return HS.addRule(gS, tS)
          })), HS.compile(), this.multiRegexes[SS] = HS, HS
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(SS, HS) {
          this.rules.push([SS, HS]), "Qa" === HS.type && this.count++
        }
        exec(SS) {
          const HS = this.getMatcher(this.regexIndex);
          HS.lastIndex = this.lastIndex;
          let gS = HS.exec(SS);
          if (this.resumingScanAtSamePosition())
            if (gS && gS.index === this.lastIndex);
            else {
              const HS = this.getMatcher(0);
              HS.lastIndex = this.lastIndex + 1, gS = HS.exec(SS)
            } return gS && (this.regexIndex += gS.position + 1, this.regexIndex === this.count && this.considerAll()), gS
        }
      }
      if (SS.compilerExtensions || (SS.compilerExtensions = []), SS.contains && SS.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return SS.classNameAliases = bS(SS.classNameAliases || {}),
        function gS(XS, xS) {
          const NS = XS;
          if (XS.isCompiled) return NS;
          [pS, MS, tH, RS].forEach((SS => SS(XS, xS))), SS.compilerExtensions.forEach((SS => SS(XS, xS))), XS.__beforeBegin = null, [sS, BS, FS].forEach((SS => SS(XS, xS))), XS.isCompiled = !0;
          let qS = null;
          return "object" === typeof XS.keywords && XS.keywords.$pattern && (XS.keywords = Object.assign({}, XS.keywords), qS = XS.keywords.$pattern, delete XS.keywords.$pattern), qS = qS || /\w+/, XS.keywords && (XS.keywords = oS(XS.keywords, SS.case_insensitive)), NS.keywordPatternRe = HS(qS, !0), xS && (XS.Qa || (XS.Qa = /\B|\b/), NS.beginRe = HS(NS.Qa), XS.end || XS.endsWithParent || (XS.end = /\B|\b/), XS.end && (NS.endRe = HS(NS.end)), NS.terminatorEnd = IS(NS.end) || "", XS.endsWithParent && xS.terminatorEnd && (NS.terminatorEnd += (XS.end ? "|" : "") + xS.terminatorEnd)), XS.illegal && (NS.illegalRe = HS(XS.illegal)), XS.contains || (XS.contains = []), XS.contains = [].concat(...XS.contains.map((function(SS) {
            return function(SS) {
              SS.variants && !SS.cachedVariants && (SS.cachedVariants = SS.variants.map((function(HS) {
                return bS(SS, {
                  variants: null
                }, HS)
              })));
              if (SS.cachedVariants) return SS.cachedVariants;
              if (XH(SS)) return bS(SS, {
                starts: SS.starts ? bS(SS.starts) : null
              });
              if (Object.isFrozen(SS)) return bS(SS);
              return SS
            }("self" === SS ? XS : SS)
          }))), XS.contains.forEach((function(SS) {
            gS(SS, NS)
          })), XS.starts && gS(XS.starts, xS), NS.matcher = function(SS) {
            const HS = new tS;
            return SS.contains.forEach((SS => HS.addRule(SS.Qa, {
              rule: SS,
              type: "Qa"
            }))), SS.terminatorEnd && HS.addRule(SS.terminatorEnd, {
              type: "end"
            }), SS.illegal && HS.addRule(SS.illegal, {
              type: "illegal"
            }), HS
          }(NS), NS
        }(SS)
    }

    function XH(SS) {
      return !!SS && (SS.endsWithParent || XH(SS.starts))
    }
    class xH extends Error {
      constructor(SS, HS) {
        super(SS), this.name = "HTMLInjectionError", this.html = HS
      }
    }
    const NH = tS,
      qH = bS,
      uH = Symbol("nomatch"),
      IH = function(SS) {
        const tS = Object.create(null),
          bS = Object.create(null),
          XS = [];
        let xS = !0;
        const NS = "Could not find the language '{}', did you forget to load/include a language module?",
          qS = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let IS = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: uS
        };

        function GS(SS) {
          return IS.noHighlightRe.test(SS)
        }

        function CS(SS, HS, gS) {
          let tS = "",
            bS = "";
          "object" === typeof HS ? (tS = SS, gS = HS.ignoreIllegals, bS = HS.language) : (SH("10.7.0", "highlight(lang, code, ...args) has been deprecated."), SH("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), bS = SS, tS = HS), void 0 === gS && (gS = !0);
          const XS = {
            code: tS,
            language: bS
          };
          OS("before:highlight", XS);
          const xS = XS.result ? XS.result : nS(XS.language, XS.code, gS);
          return xS.code = XS.code, OS("after:highlight", xS), xS
        }

        function nS(SS, HS, bS, XS) {
          const qS = Object.create(null);

          function uS() {
            if (!OS.keywords) return void cS.addText(vS);
            let SS = 0;
            OS.keywordPatternRe.lastIndex = 0;
            let HS = OS.keywordPatternRe.exec(vS),
              gS = "";
            for (; HS;) {
              gS += vS.substring(SS, HS.index);
              const bS = wS.case_insensitive ? HS[0].toLowerCase() : HS[0],
                XS = (tS = bS, OS.keywords[tS]);
              if (XS) {
                const [SS, tS] = XS;
                if (cS.addText(gS), gS = "", qS[bS] = (qS[bS] || 0) + 1, qS[bS] <= 7 && (ES += tS), SS.startsWith("_")) gS += HS[0];
                else {
                  const gS = wS.classNameAliases[SS] || SS;
                  kS(HS[0], gS)
                }
              } else gS += HS[0];
              SS = OS.keywordPatternRe.lastIndex, HS = OS.keywordPatternRe.exec(vS)
            }
            var tS;
            gS += vS.substring(SS), cS.addText(gS)
          }

          function fS() {
            null != OS.subLanguage ? function() {
              if ("" === vS) return;
              let SS = null;
              if ("string" === typeof OS.subLanguage) {
                if (!tS[OS.subLanguage]) return void cS.addText(vS);
                SS = nS(OS.subLanguage, vS, !0, dS[OS.subLanguage]), dS[OS.subLanguage] = SS._top
              } else SS = PS(vS, OS.subLanguage.length ? OS.subLanguage : null);
              OS.relevance > 0 && (ES += SS.relevance), cS.__addSublanguage(SS._emitter, SS.language)
            }() : uS(), vS = ""
          }

          function kS(SS, HS) {
            "" !== SS && (cS.startScope(HS), cS.addText(SS), cS.endScope())
          }

          function aS(SS, HS) {
            let gS = 1;
            const tS = HS.length - 1;
            for (; gS <= tS;) {
              if (!SS._emit[gS]) {
                gS++;
                continue
              }
              const tS = wS.classNameAliases[SS[gS]] || SS[gS],
                bS = HS[gS];
              tS ? kS(bS, tS) : (vS = bS, uS(), vS = ""), gS++
            }
          }

          function KS(SS, HS) {
            return SS.scope && "string" === typeof SS.scope && cS.openNode(wS.classNameAliases[SS.scope] || SS.scope), SS.beginScope && (SS.beginScope._wrap ? (kS(vS, wS.classNameAliases[SS.beginScope._wrap] || SS.beginScope._wrap), vS = "") : SS.beginScope._multi && (aS(SS.beginScope, HS), vS = "")), OS = Object.create(SS, {
              parent: {
                value: OS
              }
            }), OS
          }

          function jS(SS, HS, tS) {
            let bS = function(SS, HS) {
              const gS = SS && SS.exec(HS);
              return gS && 0 === gS.index
            }(SS.endRe, tS);
            if (bS) {
              if (SS["on:end"]) {
                const tS = new gS(SS);
                SS["on:end"](HS, tS), tS.isMatchIgnored && (bS = !1)
              }
              if (bS) {
                for (; SS.endsParent && SS.parent;) SS = SS.parent;
                return SS
              }
            }
            if (SS.endsWithParent) return jS(SS.parent, HS, tS)
          }

          function GS(SS) {
            return 0 === OS.matcher.regexIndex ? (vS += SS[0], 1) : (AS = !0, 0)
          }

          function CS(SS) {
            const gS = SS[0],
              tS = HS.substring(SS.index),
              bS = jS(OS, SS, tS);
            if (!bS) return uH;
            const XS = OS;
            OS.endScope && OS.endScope._wrap ? (fS(), kS(gS, OS.endScope._wrap)) : OS.endScope && OS.endScope._multi ? (fS(), aS(OS.endScope, SS)) : XS.skip ? vS += gS : (XS.returnEnd || XS.excludeEnd || (vS += gS), fS(), XS.excludeEnd && (vS = gS));
            do {
              OS.scope && cS.closeNode(), OS.skip || OS.subLanguage || (ES += OS.relevance), OS = OS.parent
            } while (OS !== bS.parent);
            return bS.starts && KS(bS.starts, SS), XS.returnEnd ? 0 : gS.length
          }
          let QS = {};

          function DS(tS, XS) {
            const NS = XS && XS[0];
            if (vS += tS, null == NS) return fS(), 0;
            if ("Qa" === QS.type && "end" === XS.type && QS.index === XS.index && "" === NS) {
              if (vS += HS.slice(XS.index, XS.index + 1), !xS) {
                const HS = new Error(`0 width match regex (${SS})`);
                throw HS.languageName = SS, HS.badRule = QS.rule, HS
              }
              return 1
            }
            if (QS = XS, "Qa" === XS.type) return function(SS) {
              const HS = SS[0],
                tS = SS.rule,
                bS = new gS(tS),
                XS = [tS.__beforeBegin, tS["on:begin"]];
              for (const gS of XS)
                if (gS && (gS(SS, bS), bS.isMatchIgnored)) return GS(HS);
              return tS.skip ? vS += HS : (tS.excludeBegin && (vS += HS), fS(), tS.returnBegin || tS.excludeBegin || (vS = HS)), KS(tS, SS), tS.returnBegin ? 0 : HS.length
            }(XS);
            if ("illegal" === XS.type && !bS) {
              const SS = new Error('Illegal lexeme "' + NS + '" for mode "' + (OS.scope || "<unnamed>") + '"');
              throw SS.mode = OS, SS
            }
            if ("end" === XS.type) {
              const SS = CS(XS);
              if (SS !== uH) return SS
            }
            if ("illegal" === XS.type && "" === NS) return vS += "\n", 1;
            if (YS > 1e5 && YS > 3 * XS.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return vS += NS, NS.length
          }
          const wS = hS(SS);
          if (!wS) throw eS(NS.replace("{}", SS)), new Error('Unknown language: "' + SS + '"');
          const ZS = bH(wS);
          let JS = "",
            OS = XS || ZS;
          const dS = {},
            cS = new IS.__emitter(IS);
          ! function() {
            const SS = [];
            for (let HS = OS; HS !== wS; HS = HS.parent) HS.scope && SS.unshift(HS.scope);
            SS.forEach((SS => cS.openNode(SS)))
          }();
          let vS = "",
            ES = 0,
            LS = 0,
            YS = 0,
            AS = !1;
          try {
            if (wS.__emitTokens) wS.__emitTokens(HS, cS);
            else {
              for (OS.matcher.considerAll();;) {
                YS++, AS ? AS = !1 : OS.matcher.considerAll(), OS.matcher.lastIndex = LS;
                const SS = OS.matcher.exec(HS);
                if (!SS) break;
                const gS = DS(HS.substring(LS, SS.index), SS);
                LS = SS.index + gS
              }
              DS(HS.substring(LS))
            }
            return cS.finalize(), JS = cS.toHTML(), {
              language: SS,
              value: JS,
              relevance: ES,
              illegal: !1,
              _emitter: cS,
              _top: OS
            }
          } catch (yS) {
            if (yS.message && yS.message.includes("Illegal")) return {
              language: SS,
              value: NH(HS),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: yS.message,
                index: LS,
                context: HS.slice(LS - 100, LS + 100),
                mode: yS.mode,
                resultSoFar: JS
              },
              _emitter: cS
            };
            if (xS) return {
              language: SS,
              value: NH(HS),
              illegal: !1,
              relevance: 0,
              errorRaised: yS,
              _emitter: cS,
              _top: OS
            };
            throw yS
          }
        }

        function PS(SS, HS) {
          HS = HS || IS.languages || Object.keys(tS);
          const gS = function(SS) {
              const HS = {
                value: NH(SS),
                illegal: !1,
                relevance: 0,
                _top: qS,
                _emitter: new IS.__emitter(IS)
              };
              return HS._emitter.addText(SS), HS
            }(SS),
            bS = HS.filter(hS).filter(JS).map((HS => nS(HS, SS, !1)));
          bS.unshift(gS);
          const XS = bS.sort(((SS, HS) => {
              if (SS.relevance !== HS.relevance) return HS.relevance - SS.relevance;
              if (SS.language && HS.language) {
                if (hS(SS.language).supersetOf === HS.language) return 1;
                if (hS(HS.language).supersetOf === SS.language) return -1
              }
              return 0
            })),
            [xS, NS] = XS,
            uS = xS;
          return uS.secondBest = NS, uS
        }

        function QS(SS) {
          let HS = null;
          const gS = function(SS) {
            let HS = SS.className + " ";
            HS += SS.parentNode ? SS.parentNode.className : "";
            const gS = IS.languageDetectRe.exec(HS);
            if (gS) {
              const HS = hS(gS[1]);
              return HS || (rS(NS.replace("{}", gS[1])), rS("Falling back to no-highlight mode for this block.", SS)), HS ? gS[1] : "no-highlight"
            }
            return HS.split(/\s+/).find((SS => GS(SS) || hS(SS)))
          }(SS);
          if (GS(gS)) return;
          if (OS("before:highlightElement", {
              el: SS,
              language: gS
            }), SS.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", SS);
          if (SS.children.length > 0 && (IS.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(SS)), IS.throwUnescapedHTML)) {
            throw new xH("One of your code blocks includes unescaped HTML.", SS.innerHTML)
          }
          HS = SS;
          const tS = HS.textContent,
            XS = gS ? CS(tS, {
              language: gS,
              ignoreIllegals: !0
            }) : PS(tS);
          SS.innerHTML = XS.value, SS.dataset.highlighted = "yes",
            function(SS, HS, gS) {
              const tS = HS && bS[HS] || gS;
              SS.classList.add("hljs"), SS.classList.add(`language-${tS}`)
            }(SS, gS, XS.language), SS.result = {
              language: XS.language,
              re: XS.relevance,
              relevance: XS.relevance
            }, XS.secondBest && (SS.secondBest = {
              language: XS.secondBest.language,
              relevance: XS.secondBest.relevance
            }), OS("after:highlightElement", {
              el: SS,
              result: XS,
              text: tS
            })
        }
        let DS = !1;

        function wS() {
          if ("loading" === document.readyState) return DS || window.addEventListener("DOMContentLoaded", (function() {
            wS()
          }), !1), void(DS = !0);
          document.querySelectorAll(IS.cssSelector).forEach(QS)
        }

        function hS(SS) {
          return SS = (SS || "").toLowerCase(), tS[SS] || tS[bS[SS]]
        }

        function ZS(SS, HS) {
          let {
            languageName: gS
          } = HS;
          "string" === typeof SS && (SS = [SS]), SS.forEach((SS => {
            bS[SS.toLowerCase()] = gS
          }))
        }

        function JS(SS) {
          const HS = hS(SS);
          return HS && !HS.disableAutodetect
        }

        function OS(SS, HS) {
          const gS = SS;
          XS.forEach((function(SS) {
            SS[gS] && SS[gS](HS)
          }))
        }
        Object.assign(SS, {
          highlight: CS,
          highlightAuto: PS,
          highlightAll: wS,
          highlightElement: QS,
          highlightBlock: function(SS) {
            return SH("10.7.0", "highlightBlock will be removed entirely in v12.0"), SH("10.7.0", "Please use highlightElement now."), QS(SS)
          },
          configure: function(SS) {
            IS = qH(IS, SS)
          },
          initHighlighting: () => {
            wS(), SH("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            wS(), SH("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(HS, gS) {
            let bS = null;
            try {
              bS = gS(SS)
            } catch (XS) {
              if (eS("Language definition for '{}' could not be registered.".replace("{}", HS)), !xS) throw XS;
              eS(XS), bS = qS
            }
            bS.name || (bS.name = HS), tS[HS] = bS, bS.rawDefinition = gS.bind(null, SS), bS.aliases && ZS(bS.aliases, {
              languageName: HS
            })
          },
          unregisterLanguage: function(SS) {
            delete tS[SS];
            for (const HS of Object.keys(bS)) bS[HS] === SS && delete bS[HS]
          },
          listLanguages: function() {
            return Object.keys(tS)
          },
          getLanguage: hS,
          registerAliases: ZS,
          autoDetection: JS,
          inherit: qH,
          addPlugin: function(SS) {
            ! function(SS) {
              SS["before:highlightBlock"] && !SS["before:highlightElement"] && (SS["before:highlightElement"] = HS => {
                SS["before:highlightBlock"](Object.assign({
                  block: HS.el
                }, HS))
              }), SS["after:highlightBlock"] && !SS["after:highlightElement"] && (SS["after:highlightElement"] = HS => {
                SS["after:highlightBlock"](Object.assign({
                  block: HS.el
                }, HS))
              })
            }(SS), XS.push(SS)
          },
          removePlugin: function(SS) {
            const HS = XS.indexOf(SS); - 1 !== HS && XS.splice(HS, 1)
          }
        }), SS.debugMode = function() {
          xS = !1
        }, SS.safeMode = function() {
          xS = !0
        }, SS.versionString = "11.11.1", SS.regex = {
          concat: KS,
          lookahead: fS,
          either: jS,
          optional: aS,
          anyNumberOfTimes: kS
        };
        for (const gS in zS) "object" === typeof zS[gS] && HS(zS[gS]);
        return Object.assign(SS, zS), SS
      },
      fH = IH({});
    fH.newInstance = () => IH({}), SS.exports = fH, fH.HighlightJS = fH, fH.default = fH
  },
  4832: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    const tS = gS(4839)
  },
  4848: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => fS
    });
    const tS = "[A-Za-z$_][0-9A-Za-z$_]*",
      bS = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      XS = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      xS = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      NS = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      qS = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      uS = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      IS = [].concat(qS, xS, NS);

    function fS(SS) {
      const HS = SS.regex,
        gS = tS,
        fS = "<>",
        kS = "</>",
        aS = {
          Qa: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (SS, HS) => {
            const gS = SS[0].length + SS.index,
              tS = SS.input[gS];
            if ("<" === tS || "," === tS) return void HS.ignoreMatch();
            let bS;
            ">" === tS && (((SS, HS) => {
              let {
                after: gS
              } = HS;
              const tS = "</" + SS[0].slice(1);
              return -1 !== SS.input.indexOf(tS, gS)
            })(SS, {
              after: gS
            }) || HS.ignoreMatch());
            const XS = SS.input.substring(gS);
            ((bS = XS.match(/^\s*=/)) || (bS = XS.match(/^\s+extends\s+/)) && 0 === bS.index) && HS.ignoreMatch()
          }
        },
        KS = {
          $pattern: tS,
          keyword: bS,
          literal: XS,
          built_in: IS,
          "variable.language": uS
        },
        jS = "[0-9](_?[0-9])*",
        GS = `\\.(${jS})`,
        CS = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        nS = {
          className: "number",
          variants: [{
            Qa: `(\\b(${CS})((${GS})|\\.)?|(${GS}))[eE][+-]?(${jS})\\b`
          }, {
            Qa: `\\b(${CS})\\b((${GS})\\b|\\.)?|(${GS})\\b`
          }, {
            Qa: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Qa: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Qa: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Qa: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Qa: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        PS = {
          className: "subst",
          Qa: "\\$\\{",
          end: "\\}",
          keywords: KS,
          contains: []
        },
        QS = {
          Qa: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [SS.BACKSLASH_ESCAPE, PS],
            subLanguage: "xml"
          }
        },
        DS = {
          Qa: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [SS.BACKSLASH_ESCAPE, PS],
            subLanguage: "css"
          }
        },
        wS = {
          Qa: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [SS.BACKSLASH_ESCAPE, PS],
            subLanguage: "graphql"
          }
        },
        hS = {
          className: "string",
          Qa: "`",
          end: "`",
          contains: [SS.BACKSLASH_ESCAPE, PS]
        },
        ZS = {
          className: "comment",
          variants: [SS.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Qa: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Qa: "@[A-Za-z]+"
              }, {
                className: "type",
                Qa: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Qa: gS + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Qa: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), SS.C_BLOCK_COMMENT_MODE, SS.C_LINE_COMMENT_MODE]
        },
        JS = [SS.APOS_STRING_MODE, SS.QUOTE_STRING_MODE, QS, DS, wS, hS, {
          match: /\$\d+/
        }, nS];
      PS.contains = JS.concat({
        Qa: /\{/,
        end: /\}/,
        keywords: KS,
        contains: ["self"].concat(JS)
      });
      const OS = [].concat(ZS, PS.contains),
        dS = OS.concat([{
          Qa: /(\s*)\(/,
          end: /\)/,
          keywords: KS,
          contains: ["self"].concat(OS)
        }]),
        cS = {
          className: "params",
          Qa: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: KS,
          contains: dS
        },
        vS = {
          variants: [{
            match: [/class/, /\s+/, gS, /\s+/, /extends/, /\s+/, HS.concat(gS, "(", HS.concat(/\./, gS), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, gS],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        ES = {
          relevance: 0,
          match: HS.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...xS, ...NS]
          }
        },
        LS = {
          variants: [{
            match: [/function/, /\s+/, gS, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [cS],
          illegal: /%/
        };
      const YS = {
        match: HS.concat(/\b/, (AS = [...qS, "super", "import"].map((SS => `${SS}\\s*\\(`)), HS.concat("(?!", AS.join("|"), ")")), gS, HS.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var AS;
      const yS = {
          Qa: HS.concat(/\./, HS.lookahead(HS.concat(gS, /(?![0-9A-Za-z$_(])/))),
          end: gS,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        VS = {
          match: [/get|set/, /\s+/, gS, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Qa: /\(\)/
          }, cS]
        },
        iS = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + SS.UNDERSCORE_IDENT_RE + ")\\s*=>",
        WS = {
          match: [/const|var|let/, /\s+/, gS, /\s*/, /=\s*/, /(async\s*)?/, HS.lookahead(iS)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [cS]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: KS,
        exports: {
          PARAMS_CONTAINS: dS,
          CLASS_REFERENCE: ES
        },
        illegal: /#(?![$_A-z])/,
        contains: [SS.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Qa: /^\s*['"]use (strict|asm)['"]/
        }, SS.APOS_STRING_MODE, SS.QUOTE_STRING_MODE, QS, DS, wS, hS, ZS, {
          match: /\$\d+/
        }, nS, ES, {
          scope: "attr",
          match: gS + HS.lookahead(":"),
          relevance: 0
        }, WS, {
          Qa: "(" + SS.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [ZS, SS.REGEXP_MODE, {
            className: "function",
            Qa: iS,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Qa: SS.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Qa: /\(\s*\)/,
                skip: !0
              }, {
                Qa: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: KS,
                contains: dS
              }]
            }]
          }, {
            Qa: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Qa: fS,
              end: kS
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Qa: aS.Qa,
              "on:begin": aS.isTrulyOpeningTag,
              end: aS.end
            }],
            subLanguage: "xml",
            contains: [{
              Qa: aS.Qa,
              end: aS.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, LS, {
          beginKeywords: "while if switch catch for"
        }, {
          Qa: "\\b(?!function)" + SS.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [cS, SS.inherit(SS.TITLE_MODE, {
            Qa: gS,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, yS, {
          match: "\\$" + gS,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [cS]
        }, YS, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, vS, VS, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4855: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS
    });
    const tS = "[A-Za-z$_][0-9A-Za-z$_]*",
      bS = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      XS = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      xS = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      NS = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      qS = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      uS = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      IS = [].concat(qS, xS, NS);

    function fS(SS) {
      const HS = SS.regex,
        gS = tS,
        fS = "<>",
        kS = "</>",
        aS = {
          Qa: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (SS, HS) => {
            const gS = SS[0].length + SS.index,
              tS = SS.input[gS];
            if ("<" === tS || "," === tS) return void HS.ignoreMatch();
            let bS;
            ">" === tS && (((SS, HS) => {
              let {
                after: gS
              } = HS;
              const tS = "</" + SS[0].slice(1);
              return -1 !== SS.input.indexOf(tS, gS)
            })(SS, {
              after: gS
            }) || HS.ignoreMatch());
            const XS = SS.input.substring(gS);
            ((bS = XS.match(/^\s*=/)) || (bS = XS.match(/^\s+extends\s+/)) && 0 === bS.index) && HS.ignoreMatch()
          }
        },
        KS = {
          $pattern: tS,
          keyword: bS,
          literal: XS,
          built_in: IS,
          "variable.language": uS
        },
        jS = "[0-9](_?[0-9])*",
        GS = `\\.(${jS})`,
        CS = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        nS = {
          className: "number",
          variants: [{
            Qa: `(\\b(${CS})((${GS})|\\.)?|(${GS}))[eE][+-]?(${jS})\\b`
          }, {
            Qa: `\\b(${CS})\\b((${GS})\\b|\\.)?|(${GS})\\b`
          }, {
            Qa: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Qa: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Qa: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Qa: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Qa: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        PS = {
          className: "subst",
          Qa: "\\$\\{",
          end: "\\}",
          keywords: KS,
          contains: []
        },
        QS = {
          Qa: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [SS.BACKSLASH_ESCAPE, PS],
            subLanguage: "xml"
          }
        },
        DS = {
          Qa: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [SS.BACKSLASH_ESCAPE, PS],
            subLanguage: "css"
          }
        },
        wS = {
          Qa: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [SS.BACKSLASH_ESCAPE, PS],
            subLanguage: "graphql"
          }
        },
        hS = {
          className: "string",
          Qa: "`",
          end: "`",
          contains: [SS.BACKSLASH_ESCAPE, PS]
        },
        ZS = {
          className: "comment",
          variants: [SS.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Qa: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Qa: "@[A-Za-z]+"
              }, {
                className: "type",
                Qa: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Qa: gS + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Qa: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), SS.C_BLOCK_COMMENT_MODE, SS.C_LINE_COMMENT_MODE]
        },
        JS = [SS.APOS_STRING_MODE, SS.QUOTE_STRING_MODE, QS, DS, wS, hS, {
          match: /\$\d+/
        }, nS];
      PS.contains = JS.concat({
        Qa: /\{/,
        end: /\}/,
        keywords: KS,
        contains: ["self"].concat(JS)
      });
      const OS = [].concat(ZS, PS.contains),
        dS = OS.concat([{
          Qa: /(\s*)\(/,
          end: /\)/,
          keywords: KS,
          contains: ["self"].concat(OS)
        }]),
        cS = {
          className: "params",
          Qa: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: KS,
          contains: dS
        },
        vS = {
          variants: [{
            match: [/class/, /\s+/, gS, /\s+/, /extends/, /\s+/, HS.concat(gS, "(", HS.concat(/\./, gS), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, gS],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        ES = {
          relevance: 0,
          match: HS.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...xS, ...NS]
          }
        },
        LS = {
          variants: [{
            match: [/function/, /\s+/, gS, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [cS],
          illegal: /%/
        };
      const YS = {
        match: HS.concat(/\b/, (AS = [...qS, "super", "import"].map((SS => `${SS}\\s*\\(`)), HS.concat("(?!", AS.join("|"), ")")), gS, HS.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var AS;
      const yS = {
          Qa: HS.concat(/\./, HS.lookahead(HS.concat(gS, /(?![0-9A-Za-z$_(])/))),
          end: gS,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        VS = {
          match: [/get|set/, /\s+/, gS, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Qa: /\(\)/
          }, cS]
        },
        iS = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + SS.UNDERSCORE_IDENT_RE + ")\\s*=>",
        WS = {
          match: [/const|var|let/, /\s+/, gS, /\s*/, /=\s*/, /(async\s*)?/, HS.lookahead(iS)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [cS]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: KS,
        exports: {
          PARAMS_CONTAINS: dS,
          CLASS_REFERENCE: ES
        },
        illegal: /#(?![$_A-z])/,
        contains: [SS.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Qa: /^\s*['"]use (strict|asm)['"]/
        }, SS.APOS_STRING_MODE, SS.QUOTE_STRING_MODE, QS, DS, wS, hS, ZS, {
          match: /\$\d+/
        }, nS, ES, {
          scope: "attr",
          match: gS + HS.lookahead(":"),
          relevance: 0
        }, WS, {
          Qa: "(" + SS.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [ZS, SS.REGEXP_MODE, {
            className: "function",
            Qa: iS,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Qa: SS.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Qa: /\(\s*\)/,
                skip: !0
              }, {
                Qa: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: KS,
                contains: dS
              }]
            }]
          }, {
            Qa: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Qa: fS,
              end: kS
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Qa: aS.Qa,
              "on:begin": aS.isTrulyOpeningTag,
              end: aS.end
            }],
            subLanguage: "xml",
            contains: [{
              Qa: aS.Qa,
              end: aS.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, LS, {
          beginKeywords: "while if switch catch for"
        }, {
          Qa: "\\b(?!function)" + SS.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [cS, SS.inherit(SS.TITLE_MODE, {
            Qa: gS,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, yS, {
          match: "\\$" + gS,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [cS]
        }, YS, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, vS, VS, {
          match: /\$[(.]/
        }]
      }
    }

    function kS(SS) {
      const HS = SS.regex,
        gS = fS(SS),
        xS = tS,
        NS = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        qS = {
          Qa: [/namespace/, /\s+/, SS.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        kS = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: NS
          },
          contains: [gS.exports.CLASS_REFERENCE]
        },
        aS = {
          $pattern: tS,
          keyword: bS.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: XS,
          built_in: IS.concat(NS),
          "variable.language": uS
        },
        KS = {
          className: "meta",
          Qa: "@" + xS
        },
        jS = (SS, HS, gS) => {
          const tS = SS.contains.findIndex((SS => SS.label === HS));
          if (-1 === tS) throw new Error("can not find mode to replace");
          SS.contains.splice(tS, 1, gS)
        };
      Object.assign(gS.keywords, aS), gS.exports.PARAMS_CONTAINS.push(KS);
      const GS = gS.contains.find((SS => "attr" === SS.scope)),
        CS = Object.assign({}, GS, {
          match: HS.concat(xS, HS.lookahead(/\s*\?:/))
        });
      gS.exports.PARAMS_CONTAINS.push([gS.exports.CLASS_REFERENCE, GS, CS]), gS.contains = gS.contains.concat([KS, qS, kS, CS]), jS(gS, "shebang", SS.SHEBANG()), jS(gS, "use_strict", {
        className: "meta",
        relevance: 10,
        Qa: /^\s*['"]use strict['"]/
      });
      return gS.contains.find((SS => "func.def" === SS.label)).relevance = 0, Object.assign(gS, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), gS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);