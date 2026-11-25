export const id = 93;
export const ids = [93];
export const modules = {
  5121: MM => {
    function rM(MM) {
      return MM instanceof Map ? MM.clear = MM.delete = MM.set = function() {
        throw new Error("map is read-only")
      } : MM instanceof Set && (MM.add = MM.clear = MM.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(MM), Object.getOwnPropertyNames(MM).forEach((iM => {
        const OM = MM[iM],
          SM = typeof OM;
        "object" !== SM && "function" !== SM || Object.isFrozen(OM) || rM(OM)
      })), MM
    }
    class iM {
      constructor(MM) {
        void 0 === MM.data && (MM.data = {}), this.data = MM.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function OM(MM) {
      return MM.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function SM(MM) {
      const rM = Object.create(null);
      for (const jM in MM) rM[jM] = MM[jM];
      for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
      return OM.forEach((function(MM) {
        for (const iM in MM) rM[iM] = MM[iM]
      })), rM
    }
    const jM = MM => !!MM.scope;
    class aM {
      constructor(MM, rM) {
        this.buffer = "", this.classPrefix = rM.classPrefix, MM.walk(this)
      }
      addText(MM) {
        this.buffer += OM(MM)
      }
      openNode(MM) {
        if (!jM(MM)) return;
        const rM = ((MM, rM) => {
          let {
            prefix: iM
          } = rM;
          if (MM.startsWith("language:")) return MM.replace("language:", "language-");
          if (MM.includes(".")) {
            const rM = MM.split(".");
            return [`${iM}${rM.shift()}`, ...rM.map(((MM, rM) => `${MM}${"_".repeat(rM+1)}`))].join(" ")
          }
          return `${iM}${MM}`
        })(MM.scope, {
          prefix: this.classPrefix
        });
        this.span(rM)
      }
      closeNode(MM) {
        jM(MM) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(MM) {
        this.buffer += `<span class="${MM}">`
      }
    }
    const PM = function() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const rM = {
        children: []
      };
      return Object.assign(rM, MM), rM
    };
    class nM {
      constructor() {
        this.ZE = PM(), this.stack = [this.ZE]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.ZE
      }
      add(MM) {
        this.top.children.push(MM)
      }
      openNode(MM) {
        const rM = PM({
          scope: MM
        });
        this.add(rM), this.stack.push(rM)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.ZE, null, 4)
      }
      walk(MM) {
        return this.constructor._walk(MM, this.ZE)
      }
      static _walk(MM, rM) {
        return "string" === typeof rM ? MM.addText(rM) : rM.children && (MM.openNode(rM), rM.children.forEach((rM => this._walk(MM, rM))), MM.closeNode(rM)), MM
      }
      static _collapse(MM) {
        "string" !== typeof MM && MM.children && (MM.children.every((MM => "string" === typeof MM)) ? MM.children = [MM.children.join("")] : MM.children.forEach((MM => {
          nM._collapse(MM)
        })))
      }
    }
    class QM extends nM {
      constructor(MM) {
        super(), this.options = MM
      }
      addText(MM) {
        "" !== MM && this.add(MM)
      }
      startScope(MM) {
        this.openNode(MM)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(MM, rM) {
        const iM = MM.root;
        rM && (iM.scope = `language:${rM}`), this.add(iM)
      }
      toHTML() {
        return new aM(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function zM(MM) {
      return MM ? "string" === typeof MM ? MM : MM.source : null
    }

    function LM(MM) {
      return hM("(?=", MM, ")")
    }

    function mM(MM) {
      return hM("(?:", MM, ")*")
    }

    function HM(MM) {
      return hM("(?:", MM, ")?")
    }

    function hM() {
      for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
      return rM.map((MM => zM(MM))).join("")
    }

    function JM() {
      for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
      const OM = function(MM) {
        const rM = MM[MM.length - 1];
        return "object" === typeof rM && rM.constructor === Object ? (MM.splice(MM.length - 1, 1), rM) : {}
      }(rM);
      return "(" + (OM.capture ? "" : "?:") + rM.map((MM => zM(MM))).join("|") + ")"
    }

    function dM(MM) {
      return new RegExp(MM.toString() + "|").exec("").length - 1
    }
    const yM = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function lM(MM, rM) {
      let {
        joinWith: iM
      } = rM, OM = 0;
      return MM.map((MM => {
        OM += 1;
        const rM = OM;
        let iM = zM(MM),
          SM = "";
        for (; iM.length > 0;) {
          const MM = yM.exec(iM);
          if (!MM) {
            SM += iM;
            break
          }
          SM += iM.substring(0, MM.index), iM = iM.substring(MM.index + MM[0].length), "\\" === MM[0][0] && MM[1] ? SM += "\\" + String(Number(MM[1]) + rM) : (SM += MM[0], "(" === MM[0] && OM++)
        }
        return SM
      })).map((MM => `(${MM})`)).join(iM)
    }
    const EM = "[a-zA-Z]\\w*",
      UM = "[a-zA-Z_]\\w*",
      GM = "\\b\\d+(\\.\\d+)?",
      CM = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      eM = "\\b(0b[01]+)",
      bM = {
        JL: "\\\\[\\s\\S]",
        relevance: 0
      },
      wM = {
        scope: "string",
        JL: "'",
        end: "'",
        illegal: "\\n",
        contains: [bM]
      },
      tM = {
        scope: "string",
        JL: '"',
        end: '"',
        illegal: "\\n",
        contains: [bM]
      },
      gM = function(MM, rM) {
        const iM = SM({
          scope: "comment",
          JL: MM,
          end: rM,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        iM.contains.push({
          scope: "doctag",
          JL: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const OM = JM("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return iM.contains.push({
          JL: hM(/[ ]+/, "(", OM, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), iM
      },
      uM = gM("//", "$"),
      RM = gM("/\\*", "\\*/"),
      pM = gM("#", "$"),
      WM = {
        scope: "number",
        JL: GM,
        relevance: 0
      },
      sM = {
        scope: "number",
        JL: CM,
        relevance: 0
      },
      DM = {
        scope: "number",
        JL: eM,
        relevance: 0
      },
      kM = {
        scope: "regexp",
        JL: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [bM, {
          JL: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [bM]
        }]
      },
      ZM = {
        scope: "title",
        JL: EM,
        relevance: 0
      },
      oM = {
        scope: "title",
        JL: UM,
        relevance: 0
      },
      fM = {
        JL: "\\.\\s*" + UM,
        relevance: 0
      };
    var YM = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: wM,
      BACKSLASH_ESCAPE: bM,
      BINARY_NUMBER_MODE: DM,
      BINARY_NUMBER_RE: eM,
      COMMENT: gM,
      C_BLOCK_COMMENT_MODE: RM,
      C_LINE_COMMENT_MODE: uM,
      C_NUMBER_MODE: sM,
      C_NUMBER_RE: CM,
      END_SAME_AS_BEGIN: function(MM) {
        return Object.assign(MM, {
          "on:begin": (MM, rM) => {
            rM.data._beginMatch = MM[1]
          },
          "on:end": (MM, rM) => {
            rM.data._beginMatch !== MM[1] && rM.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: pM,
      IDENT_RE: EM,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: fM,
      NUMBER_MODE: WM,
      NUMBER_RE: GM,
      PHRASAL_WORDS_MODE: {
        JL: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: tM,
      REGEXP_MODE: kM,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const rM = /^#![ ]*\//;
        return MM.binary && (MM.JL = hM(rM, /.*\b/, MM.binary, /\b.*/)), SM({
          scope: "meta",
          JL: rM,
          end: /$/,
          relevance: 0,
          "on:begin": (MM, rM) => {
            0 !== MM.index && rM.ignoreMatch()
          }
        }, MM)
      },
      TITLE_MODE: ZM,
      UNDERSCORE_IDENT_RE: UM,
      UNDERSCORE_TITLE_MODE: oM
    });

    function NM(MM, rM) {
      "." === MM.input[MM.index - 1] && rM.ignoreMatch()
    }

    function AM(MM, rM) {
      void 0 !== MM.className && (MM.scope = MM.className, delete MM.className)
    }

    function xM(MM, rM) {
      rM && MM.beginKeywords && (MM.JL = "\\b(" + MM.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", MM.__beforeBegin = NM, MM.keywords = MM.keywords || MM.beginKeywords, delete MM.beginKeywords, void 0 === MM.relevance && (MM.relevance = 0))
    }

    function vM(MM, rM) {
      Array.isArray(MM.illegal) && (MM.illegal = JM(...MM.illegal))
    }

    function FM(MM, rM) {
      if (MM.match) {
        if (MM.JL || MM.end) throw new Error("begin & end are not supported with match");
        MM.JL = MM.match, delete MM.match
      }
    }

    function BM(MM, rM) {
      void 0 === MM.relevance && (MM.relevance = 1)
    }
    const XM = (MM, rM) => {
        if (!MM.beforeMatch) return;
        if (MM.starts) throw new Error("beforeMatch cannot be used with starts");
        const iM = Object.assign({}, MM);
        Object.keys(MM).forEach((rM => {
          delete MM[rM]
        })), MM.keywords = iM.keywords, MM.JL = hM(iM.beforeMatch, LM(iM.JL)), MM.starts = {
          relevance: 0,
          contains: [Object.assign(iM, {
            endsParent: !0
          })]
        }, MM.relevance = 0, delete iM.beforeMatch
      },
      IM = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function KM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const OM = Object.create(null);
      return "string" === typeof MM ? SM(iM, MM.split(" ")) : Array.isArray(MM) ? SM(iM, MM) : Object.keys(MM).forEach((function(iM) {
        Object.assign(OM, KM(MM[iM], rM, iM))
      })), OM;

      function SM(MM, iM) {
        rM && (iM = iM.map((MM => MM.toLowerCase()))), iM.forEach((function(rM) {
          const iM = rM.split("|");
          OM[iM[0]] = [MM, qM(iM[0], iM[1])]
        }))
      }
    }

    function qM(MM, rM) {
      return rM ? Number(rM) : function(MM) {
        return IM.includes(MM.toLowerCase())
      }(MM) ? 0 : 1
    }
    const TM = {},
      VM = MM => {
        console.error(MM)
      },
      cM = function(MM) {
        for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
        console.log(`WARN: ${MM}`, ...iM)
      },
      Mr = (MM, rM) => {
        TM[`${MM}/${rM}`] || (console.log(`Deprecated as of ${MM}. ${rM}`), TM[`${MM}/${rM}`] = !0)
      },
      rr = new Error;

    function ir(MM, rM, iM) {
      let {
        key: OM
      } = iM, SM = 0;
      const jM = MM[OM],
        aM = {},
        PM = {};
      for (let nM = 1; nM <= rM.length; nM++) PM[nM + SM] = jM[nM], aM[nM + SM] = !0, SM += dM(rM[nM - 1]);
      MM[OM] = PM, MM[OM]._emit = aM, MM[OM]._multi = !0
    }

    function Or(MM) {
      ! function(MM) {
        MM.scope && "object" === typeof MM.scope && null !== MM.scope && (MM.beginScope = MM.scope, delete MM.scope)
      }(MM), "string" === typeof MM.beginScope && (MM.beginScope = {
          _wrap: MM.beginScope
        }), "string" === typeof MM.endScope && (MM.endScope = {
          _wrap: MM.endScope
        }),
        function(MM) {
          if (Array.isArray(MM.JL)) {
            if (MM.skip || MM.excludeBegin || MM.returnBegin) throw VM("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), rr;
            if ("object" !== typeof MM.beginScope || null === MM.beginScope) throw VM("beginScope must be object"), rr;
            ir(MM, MM.JL, {
              key: "beginScope"
            }), MM.JL = lM(MM.JL, {
              joinWith: ""
            })
          }
        }(MM),
        function(MM) {
          if (Array.isArray(MM.end)) {
            if (MM.skip || MM.excludeEnd || MM.returnEnd) throw VM("skip, excludeEnd, returnEnd not compatible with endScope: {}"), rr;
            if ("object" !== typeof MM.endScope || null === MM.endScope) throw VM("endScope must be object"), rr;
            ir(MM, MM.end, {
              key: "endScope"
            }), MM.end = lM(MM.end, {
              joinWith: ""
            })
          }
        }(MM)
    }

    function Sr(MM) {
      function rM(rM, iM) {
        return new RegExp(zM(rM), "m" + (MM.case_insensitive ? "i" : "") + (MM.unicodeRegex ? "u" : "") + (iM ? "g" : ""))
      }
      class iM {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(MM, rM) {
          rM.position = this.position++, this.matchIndexes[this.matchAt] = rM, this.regexes.push([rM, MM]), this.matchAt += dM(MM) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const MM = this.regexes.map((MM => MM[1]));
          this.matcherRe = rM(lM(MM, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(MM) {
          this.matcherRe.lastIndex = this.lastIndex;
          const rM = this.matcherRe.exec(MM);
          if (!rM) return null;
          const iM = rM.findIndex(((MM, rM) => rM > 0 && void 0 !== MM)),
            OM = this.matchIndexes[iM];
          return rM.splice(0, iM), Object.assign(rM, OM)
        }
      }
      class OM {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(MM) {
          if (this.multiRegexes[MM]) return this.multiRegexes[MM];
          const rM = new iM;
          return this.rules.slice(MM).forEach((MM => {
            let [iM, OM] = MM;
            return rM.addRule(iM, OM)
          })), rM.compile(), this.multiRegexes[MM] = rM, rM
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(MM, rM) {
          this.rules.push([MM, rM]), "JL" === rM.type && this.count++
        }
        exec(MM) {
          const rM = this.getMatcher(this.regexIndex);
          rM.lastIndex = this.lastIndex;
          let iM = rM.exec(MM);
          if (this.resumingScanAtSamePosition())
            if (iM && iM.index === this.lastIndex);
            else {
              const rM = this.getMatcher(0);
              rM.lastIndex = this.lastIndex + 1, iM = rM.exec(MM)
            } return iM && (this.regexIndex += iM.position + 1, this.regexIndex === this.count && this.considerAll()), iM
        }
      }
      if (MM.compilerExtensions || (MM.compilerExtensions = []), MM.contains && MM.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return MM.classNameAliases = SM(MM.classNameAliases || {}),
        function iM(jM, aM) {
          const PM = jM;
          if (jM.isCompiled) return PM;
          [AM, FM, Or, XM].forEach((MM => MM(jM, aM))), MM.compilerExtensions.forEach((MM => MM(jM, aM))), jM.__beforeBegin = null, [xM, vM, BM].forEach((MM => MM(jM, aM))), jM.isCompiled = !0;
          let nM = null;
          return "object" === typeof jM.keywords && jM.keywords.$pattern && (jM.keywords = Object.assign({}, jM.keywords), nM = jM.keywords.$pattern, delete jM.keywords.$pattern), nM = nM || /\w+/, jM.keywords && (jM.keywords = KM(jM.keywords, MM.case_insensitive)), PM.keywordPatternRe = rM(nM, !0), aM && (jM.JL || (jM.JL = /\B|\b/), PM.beginRe = rM(PM.JL), jM.end || jM.endsWithParent || (jM.end = /\B|\b/), jM.end && (PM.endRe = rM(PM.end)), PM.terminatorEnd = zM(PM.end) || "", jM.endsWithParent && aM.terminatorEnd && (PM.terminatorEnd += (jM.end ? "|" : "") + aM.terminatorEnd)), jM.illegal && (PM.illegalRe = rM(jM.illegal)), jM.contains || (jM.contains = []), jM.contains = [].concat(...jM.contains.map((function(MM) {
            return function(MM) {
              MM.variants && !MM.cachedVariants && (MM.cachedVariants = MM.variants.map((function(rM) {
                return SM(MM, {
                  variants: null
                }, rM)
              })));
              if (MM.cachedVariants) return MM.cachedVariants;
              if (jr(MM)) return SM(MM, {
                starts: MM.starts ? SM(MM.starts) : null
              });
              if (Object.isFrozen(MM)) return SM(MM);
              return MM
            }("self" === MM ? jM : MM)
          }))), jM.contains.forEach((function(MM) {
            iM(MM, PM)
          })), jM.starts && iM(jM.starts, aM), PM.matcher = function(MM) {
            const rM = new OM;
            return MM.contains.forEach((MM => rM.addRule(MM.JL, {
              rule: MM,
              type: "JL"
            }))), MM.terminatorEnd && rM.addRule(MM.terminatorEnd, {
              type: "end"
            }), MM.illegal && rM.addRule(MM.illegal, {
              type: "illegal"
            }), rM
          }(PM), PM
        }(MM)
    }

    function jr(MM) {
      return !!MM && (MM.endsWithParent || jr(MM.starts))
    }
    class ar extends Error {
      constructor(MM, rM) {
        super(MM), this.name = "HTMLInjectionError", this.html = rM
      }
    }
    const Pr = OM,
      nr = SM,
      Qr = Symbol("nomatch"),
      zr = function(MM) {
        const OM = Object.create(null),
          SM = Object.create(null),
          jM = [];
        let aM = !0;
        const PM = "Could not find the language '{}', did you forget to load/include a language module?",
          nM = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let zM = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: QM
        };

        function dM(MM) {
          return zM.noHighlightRe.test(MM)
        }

        function yM(MM, rM, iM) {
          let OM = "",
            SM = "";
          "object" === typeof rM ? (OM = MM, iM = rM.ignoreIllegals, SM = rM.language) : (Mr("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Mr("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), SM = MM, OM = rM), void 0 === iM && (iM = !0);
          const jM = {
            code: OM,
            language: SM
          };
          tM("before:highlight", jM);
          const aM = jM.result ? jM.result : lM(jM.language, jM.code, iM);
          return aM.code = jM.code, tM("after:highlight", aM), aM
        }

        function lM(MM, rM, SM, jM) {
          const nM = Object.create(null);

          function QM() {
            if (!tM.keywords) return void uM.addText(RM);
            let MM = 0;
            tM.keywordPatternRe.lastIndex = 0;
            let rM = tM.keywordPatternRe.exec(RM),
              iM = "";
            for (; rM;) {
              iM += RM.substring(MM, rM.index);
              const SM = CM.case_insensitive ? rM[0].toLowerCase() : rM[0],
                jM = (OM = SM, tM.keywords[OM]);
              if (jM) {
                const [MM, OM] = jM;
                if (uM.addText(iM), iM = "", nM[SM] = (nM[SM] || 0) + 1, nM[SM] <= 7 && (pM += OM), MM.startsWith("_")) iM += rM[0];
                else {
                  const iM = CM.classNameAliases[MM] || MM;
                  mM(rM[0], iM)
                }
              } else iM += rM[0];
              MM = tM.keywordPatternRe.lastIndex, rM = tM.keywordPatternRe.exec(RM)
            }
            var OM;
            iM += RM.substring(MM), uM.addText(iM)
          }

          function LM() {
            null != tM.subLanguage ? function() {
              if ("" === RM) return;
              let MM = null;
              if ("string" === typeof tM.subLanguage) {
                if (!OM[tM.subLanguage]) return void uM.addText(RM);
                MM = lM(tM.subLanguage, RM, !0, gM[tM.subLanguage]), gM[tM.subLanguage] = MM._top
              } else MM = EM(RM, tM.subLanguage.length ? tM.subLanguage : null);
              tM.relevance > 0 && (pM += MM.relevance), uM.__addSublanguage(MM._emitter, MM.language)
            }() : QM(), RM = ""
          }

          function mM(MM, rM) {
            "" !== MM && (uM.startScope(rM), uM.addText(MM), uM.endScope())
          }

          function HM(MM, rM) {
            let iM = 1;
            const OM = rM.length - 1;
            for (; iM <= OM;) {
              if (!MM._emit[iM]) {
                iM++;
                continue
              }
              const OM = CM.classNameAliases[MM[iM]] || MM[iM],
                SM = rM[iM];
              OM ? mM(SM, OM) : (RM = SM, QM(), RM = ""), iM++
            }
          }

          function hM(MM, rM) {
            return MM.scope && "string" === typeof MM.scope && uM.openNode(CM.classNameAliases[MM.scope] || MM.scope), MM.beginScope && (MM.beginScope._wrap ? (mM(RM, CM.classNameAliases[MM.beginScope._wrap] || MM.beginScope._wrap), RM = "") : MM.beginScope._multi && (HM(MM.beginScope, rM), RM = "")), tM = Object.create(MM, {
              parent: {
                value: tM
              }
            }), tM
          }

          function JM(MM, rM, OM) {
            let SM = function(MM, rM) {
              const iM = MM && MM.exec(rM);
              return iM && 0 === iM.index
            }(MM.endRe, OM);
            if (SM) {
              if (MM["on:end"]) {
                const OM = new iM(MM);
                MM["on:end"](rM, OM), OM.isMatchIgnored && (SM = !1)
              }
              if (SM) {
                for (; MM.endsParent && MM.parent;) MM = MM.parent;
                return MM
              }
            }
            if (MM.endsWithParent) return JM(MM.parent, rM, OM)
          }

          function dM(MM) {
            return 0 === tM.matcher.regexIndex ? (RM += MM[0], 1) : (DM = !0, 0)
          }

          function yM(MM) {
            const iM = MM[0],
              OM = rM.substring(MM.index),
              SM = JM(tM, MM, OM);
            if (!SM) return Qr;
            const jM = tM;
            tM.endScope && tM.endScope._wrap ? (LM(), mM(iM, tM.endScope._wrap)) : tM.endScope && tM.endScope._multi ? (LM(), HM(tM.endScope, MM)) : jM.skip ? RM += iM : (jM.returnEnd || jM.excludeEnd || (RM += iM), LM(), jM.excludeEnd && (RM = iM));
            do {
              tM.scope && uM.closeNode(), tM.skip || tM.subLanguage || (pM += tM.relevance), tM = tM.parent
            } while (tM !== SM.parent);
            return SM.starts && hM(SM.starts, MM), jM.returnEnd ? 0 : iM.length
          }
          let UM = {};

          function GM(OM, jM) {
            const PM = jM && jM[0];
            if (RM += OM, null == PM) return LM(), 0;
            if ("JL" === UM.type && "end" === jM.type && UM.index === jM.index && "" === PM) {
              if (RM += rM.slice(jM.index, jM.index + 1), !aM) {
                const rM = new Error(`0 width match regex (${MM})`);
                throw rM.languageName = MM, rM.badRule = UM.rule, rM
              }
              return 1
            }
            if (UM = jM, "JL" === jM.type) return function(MM) {
              const rM = MM[0],
                OM = MM.rule,
                SM = new iM(OM),
                jM = [OM.__beforeBegin, OM["on:begin"]];
              for (const iM of jM)
                if (iM && (iM(MM, SM), SM.isMatchIgnored)) return dM(rM);
              return OM.skip ? RM += rM : (OM.excludeBegin && (RM += rM), LM(), OM.returnBegin || OM.excludeBegin || (RM = rM)), hM(OM, MM), OM.returnBegin ? 0 : rM.length
            }(jM);
            if ("illegal" === jM.type && !SM) {
              const MM = new Error('Illegal lexeme "' + PM + '" for mode "' + (tM.scope || "<unnamed>") + '"');
              throw MM.mode = tM, MM
            }
            if ("end" === jM.type) {
              const MM = yM(jM);
              if (MM !== Qr) return MM
            }
            if ("illegal" === jM.type && "" === PM) return RM += "\n", 1;
            if (sM > 1e5 && sM > 3 * jM.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return RM += PM, PM.length
          }
          const CM = eM(MM);
          if (!CM) throw VM(PM.replace("{}", MM)), new Error('Unknown language: "' + MM + '"');
          const bM = Sr(CM);
          let wM = "",
            tM = jM || bM;
          const gM = {},
            uM = new zM.__emitter(zM);
          ! function() {
            const MM = [];
            for (let rM = tM; rM !== CM; rM = rM.parent) rM.scope && MM.unshift(rM.scope);
            MM.forEach((MM => uM.openNode(MM)))
          }();
          let RM = "",
            pM = 0,
            WM = 0,
            sM = 0,
            DM = !1;
          try {
            if (CM.__emitTokens) CM.__emitTokens(rM, uM);
            else {
              for (tM.matcher.considerAll();;) {
                sM++, DM ? DM = !1 : tM.matcher.considerAll(), tM.matcher.lastIndex = WM;
                const MM = tM.matcher.exec(rM);
                if (!MM) break;
                const iM = GM(rM.substring(WM, MM.index), MM);
                WM = MM.index + iM
              }
              GM(rM.substring(WM))
            }
            return uM.finalize(), wM = uM.toHTML(), {
              language: MM,
              value: wM,
              relevance: pM,
              illegal: !1,
              _emitter: uM,
              _top: tM
            }
          } catch (kM) {
            if (kM.message && kM.message.includes("Illegal")) return {
              language: MM,
              value: Pr(rM),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: kM.message,
                index: WM,
                context: rM.slice(WM - 100, WM + 100),
                mode: kM.mode,
                resultSoFar: wM
              },
              _emitter: uM
            };
            if (aM) return {
              language: MM,
              value: Pr(rM),
              illegal: !1,
              relevance: 0,
              errorRaised: kM,
              _emitter: uM,
              _top: tM
            };
            throw kM
          }
        }

        function EM(MM, rM) {
          rM = rM || zM.languages || Object.keys(OM);
          const iM = function(MM) {
              const rM = {
                value: Pr(MM),
                illegal: !1,
                relevance: 0,
                _top: nM,
                _emitter: new zM.__emitter(zM)
              };
              return rM._emitter.addText(MM), rM
            }(MM),
            SM = rM.filter(eM).filter(wM).map((rM => lM(rM, MM, !1)));
          SM.unshift(iM);
          const jM = SM.sort(((MM, rM) => {
              if (MM.relevance !== rM.relevance) return rM.relevance - MM.relevance;
              if (MM.language && rM.language) {
                if (eM(MM.language).supersetOf === rM.language) return 1;
                if (eM(rM.language).supersetOf === MM.language) return -1
              }
              return 0
            })),
            [aM, PM] = jM,
            QM = aM;
          return QM.secondBest = PM, QM
        }

        function UM(MM) {
          let rM = null;
          const iM = function(MM) {
            let rM = MM.className + " ";
            rM += MM.parentNode ? MM.parentNode.className : "";
            const iM = zM.languageDetectRe.exec(rM);
            if (iM) {
              const rM = eM(iM[1]);
              return rM || (cM(PM.replace("{}", iM[1])), cM("Falling back to no-highlight mode for this block.", MM)), rM ? iM[1] : "no-highlight"
            }
            return rM.split(/\s+/).find((MM => dM(MM) || eM(MM)))
          }(MM);
          if (dM(iM)) return;
          if (tM("before:highlightElement", {
              el: MM,
              language: iM
            }), MM.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", MM);
          if (MM.children.length > 0 && (zM.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(MM)), zM.throwUnescapedHTML)) {
            throw new ar("One of your code blocks includes unescaped HTML.", MM.innerHTML)
          }
          rM = MM;
          const OM = rM.textContent,
            jM = iM ? yM(OM, {
              language: iM,
              ignoreIllegals: !0
            }) : EM(OM);
          MM.innerHTML = jM.value, MM.dataset.highlighted = "yes",
            function(MM, rM, iM) {
              const OM = rM && SM[rM] || iM;
              MM.classList.add("hljs"), MM.classList.add(`language-${OM}`)
            }(MM, iM, jM.language), MM.result = {
              language: jM.language,
              re: jM.relevance,
              relevance: jM.relevance
            }, jM.secondBest && (MM.secondBest = {
              language: jM.secondBest.language,
              relevance: jM.secondBest.relevance
            }), tM("after:highlightElement", {
              el: MM,
              result: jM,
              text: OM
            })
        }
        let GM = !1;

        function CM() {
          if ("loading" === document.readyState) return GM || window.addEventListener("DOMContentLoaded", (function() {
            CM()
          }), !1), void(GM = !0);
          document.querySelectorAll(zM.cssSelector).forEach(UM)
        }

        function eM(MM) {
          return MM = (MM || "").toLowerCase(), OM[MM] || OM[SM[MM]]
        }

        function bM(MM, rM) {
          let {
            languageName: iM
          } = rM;
          "string" === typeof MM && (MM = [MM]), MM.forEach((MM => {
            SM[MM.toLowerCase()] = iM
          }))
        }

        function wM(MM) {
          const rM = eM(MM);
          return rM && !rM.disableAutodetect
        }

        function tM(MM, rM) {
          const iM = MM;
          jM.forEach((function(MM) {
            MM[iM] && MM[iM](rM)
          }))
        }
        Object.assign(MM, {
          highlight: yM,
          highlightAuto: EM,
          highlightAll: CM,
          highlightElement: UM,
          highlightBlock: function(MM) {
            return Mr("10.7.0", "highlightBlock will be removed entirely in v12.0"), Mr("10.7.0", "Please use highlightElement now."), UM(MM)
          },
          configure: function(MM) {
            zM = nr(zM, MM)
          },
          initHighlighting: () => {
            CM(), Mr("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            CM(), Mr("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(rM, iM) {
            let SM = null;
            try {
              SM = iM(MM)
            } catch (jM) {
              if (VM("Language definition for '{}' could not be registered.".replace("{}", rM)), !aM) throw jM;
              VM(jM), SM = nM
            }
            SM.name || (SM.name = rM), OM[rM] = SM, SM.rawDefinition = iM.bind(null, MM), SM.aliases && bM(SM.aliases, {
              languageName: rM
            })
          },
          unregisterLanguage: function(MM) {
            delete OM[MM];
            for (const rM of Object.keys(SM)) SM[rM] === MM && delete SM[rM]
          },
          listLanguages: function() {
            return Object.keys(OM)
          },
          getLanguage: eM,
          registerAliases: bM,
          autoDetection: wM,
          inherit: nr,
          addPlugin: function(MM) {
            ! function(MM) {
              MM["before:highlightBlock"] && !MM["before:highlightElement"] && (MM["before:highlightElement"] = rM => {
                MM["before:highlightBlock"](Object.assign({
                  block: rM.el
                }, rM))
              }), MM["after:highlightBlock"] && !MM["after:highlightElement"] && (MM["after:highlightElement"] = rM => {
                MM["after:highlightBlock"](Object.assign({
                  block: rM.el
                }, rM))
              })
            }(MM), jM.push(MM)
          },
          removePlugin: function(MM) {
            const rM = jM.indexOf(MM); - 1 !== rM && jM.splice(rM, 1)
          }
        }), MM.debugMode = function() {
          aM = !1
        }, MM.safeMode = function() {
          aM = !0
        }, MM.versionString = "11.11.1", MM.regex = {
          concat: hM,
          lookahead: LM,
          either: JM,
          optional: HM,
          anyNumberOfTimes: mM
        };
        for (const iM in YM) "object" === typeof YM[iM] && rM(YM[iM]);
        return Object.assign(MM, YM), MM
      },
      Lr = zr({});
    Lr.newInstance = () => zr({}), MM.exports = Lr, Lr.HighlightJS = Lr, Lr.default = Lr
  },
  5115: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    const OM = iM(5121)
  },
  5125: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => LM
    });
    const OM = "[A-Za-z$_][0-9A-Za-z$_]*",
      SM = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      jM = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      aM = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      PM = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      nM = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      QM = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      zM = [].concat(nM, aM, PM);

    function LM(MM) {
      const rM = MM.regex,
        iM = OM,
        LM = "<>",
        mM = "</>",
        HM = {
          JL: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (MM, rM) => {
            const iM = MM[0].length + MM.index,
              OM = MM.input[iM];
            if ("<" === OM || "," === OM) return void rM.ignoreMatch();
            let SM;
            ">" === OM && (((MM, rM) => {
              let {
                after: iM
              } = rM;
              const OM = "</" + MM[0].slice(1);
              return -1 !== MM.input.indexOf(OM, iM)
            })(MM, {
              after: iM
            }) || rM.ignoreMatch());
            const jM = MM.input.substring(iM);
            ((SM = jM.match(/^\s*=/)) || (SM = jM.match(/^\s+extends\s+/)) && 0 === SM.index) && rM.ignoreMatch()
          }
        },
        hM = {
          $pattern: OM,
          keyword: SM,
          literal: jM,
          built_in: zM,
          "variable.language": QM
        },
        JM = "[0-9](_?[0-9])*",
        dM = `\\.(${JM})`,
        yM = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        lM = {
          className: "number",
          variants: [{
            JL: `(\\b(${yM})((${dM})|\\.)?|(${dM}))[eE][+-]?(${JM})\\b`
          }, {
            JL: `\\b(${yM})\\b((${dM})\\b|\\.)?|(${dM})\\b`
          }, {
            JL: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            JL: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            JL: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            JL: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            JL: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        EM = {
          className: "subst",
          JL: "\\$\\{",
          end: "\\}",
          keywords: hM,
          contains: []
        },
        UM = {
          JL: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [MM.BACKSLASH_ESCAPE, EM],
            subLanguage: "xml"
          }
        },
        GM = {
          JL: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [MM.BACKSLASH_ESCAPE, EM],
            subLanguage: "css"
          }
        },
        CM = {
          JL: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [MM.BACKSLASH_ESCAPE, EM],
            subLanguage: "graphql"
          }
        },
        eM = {
          className: "string",
          JL: "`",
          end: "`",
          contains: [MM.BACKSLASH_ESCAPE, EM]
        },
        bM = {
          className: "comment",
          variants: [MM.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              JL: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                JL: "@[A-Za-z]+"
              }, {
                className: "type",
                JL: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                JL: iM + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                JL: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), MM.C_BLOCK_COMMENT_MODE, MM.C_LINE_COMMENT_MODE]
        },
        wM = [MM.APOS_STRING_MODE, MM.QUOTE_STRING_MODE, UM, GM, CM, eM, {
          match: /\$\d+/
        }, lM];
      EM.contains = wM.concat({
        JL: /\{/,
        end: /\}/,
        keywords: hM,
        contains: ["self"].concat(wM)
      });
      const tM = [].concat(bM, EM.contains),
        gM = tM.concat([{
          JL: /(\s*)\(/,
          end: /\)/,
          keywords: hM,
          contains: ["self"].concat(tM)
        }]),
        uM = {
          className: "params",
          JL: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: hM,
          contains: gM
        },
        RM = {
          variants: [{
            match: [/class/, /\s+/, iM, /\s+/, /extends/, /\s+/, rM.concat(iM, "(", rM.concat(/\./, iM), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, iM],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        pM = {
          relevance: 0,
          match: rM.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...aM, ...PM]
          }
        },
        WM = {
          variants: [{
            match: [/function/, /\s+/, iM, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [uM],
          illegal: /%/
        };
      const sM = {
        match: rM.concat(/\b/, (DM = [...nM, "super", "import"].map((MM => `${MM}\\s*\\(`)), rM.concat("(?!", DM.join("|"), ")")), iM, rM.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var DM;
      const kM = {
          JL: rM.concat(/\./, rM.lookahead(rM.concat(iM, /(?![0-9A-Za-z$_(])/))),
          end: iM,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        ZM = {
          match: [/get|set/, /\s+/, iM, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            JL: /\(\)/
          }, uM]
        },
        oM = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + MM.UNDERSCORE_IDENT_RE + ")\\s*=>",
        fM = {
          match: [/const|var|let/, /\s+/, iM, /\s*/, /=\s*/, /(async\s*)?/, rM.lookahead(oM)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [uM]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: hM,
        exports: {
          PARAMS_CONTAINS: gM,
          CLASS_REFERENCE: pM
        },
        illegal: /#(?![$_A-z])/,
        contains: [MM.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          JL: /^\s*['"]use (strict|asm)['"]/
        }, MM.APOS_STRING_MODE, MM.QUOTE_STRING_MODE, UM, GM, CM, eM, bM, {
          match: /\$\d+/
        }, lM, pM, {
          scope: "attr",
          match: iM + rM.lookahead(":"),
          relevance: 0
        }, fM, {
          JL: "(" + MM.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [bM, MM.REGEXP_MODE, {
            className: "function",
            JL: oM,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                JL: MM.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                JL: /\(\s*\)/,
                skip: !0
              }, {
                JL: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: hM,
                contains: gM
              }]
            }]
          }, {
            JL: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              JL: LM,
              end: mM
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              JL: HM.JL,
              "on:begin": HM.isTrulyOpeningTag,
              end: HM.end
            }],
            subLanguage: "xml",
            contains: [{
              JL: HM.JL,
              end: HM.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, WM, {
          beginKeywords: "while if switch catch for"
        }, {
          JL: "\\b(?!function)" + MM.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [uM, MM.inherit(MM.TITLE_MODE, {
            JL: iM,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, kM, {
          match: "\\$" + iM,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [uM]
        }, sM, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, RM, ZM, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5134: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM
    });
    const OM = "[A-Za-z$_][0-9A-Za-z$_]*",
      SM = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      jM = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      aM = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      PM = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      nM = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      QM = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      zM = [].concat(nM, aM, PM);

    function LM(MM) {
      const rM = MM.regex,
        iM = OM,
        LM = "<>",
        mM = "</>",
        HM = {
          JL: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (MM, rM) => {
            const iM = MM[0].length + MM.index,
              OM = MM.input[iM];
            if ("<" === OM || "," === OM) return void rM.ignoreMatch();
            let SM;
            ">" === OM && (((MM, rM) => {
              let {
                after: iM
              } = rM;
              const OM = "</" + MM[0].slice(1);
              return -1 !== MM.input.indexOf(OM, iM)
            })(MM, {
              after: iM
            }) || rM.ignoreMatch());
            const jM = MM.input.substring(iM);
            ((SM = jM.match(/^\s*=/)) || (SM = jM.match(/^\s+extends\s+/)) && 0 === SM.index) && rM.ignoreMatch()
          }
        },
        hM = {
          $pattern: OM,
          keyword: SM,
          literal: jM,
          built_in: zM,
          "variable.language": QM
        },
        JM = "[0-9](_?[0-9])*",
        dM = `\\.(${JM})`,
        yM = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        lM = {
          className: "number",
          variants: [{
            JL: `(\\b(${yM})((${dM})|\\.)?|(${dM}))[eE][+-]?(${JM})\\b`
          }, {
            JL: `\\b(${yM})\\b((${dM})\\b|\\.)?|(${dM})\\b`
          }, {
            JL: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            JL: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            JL: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            JL: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            JL: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        EM = {
          className: "subst",
          JL: "\\$\\{",
          end: "\\}",
          keywords: hM,
          contains: []
        },
        UM = {
          JL: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [MM.BACKSLASH_ESCAPE, EM],
            subLanguage: "xml"
          }
        },
        GM = {
          JL: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [MM.BACKSLASH_ESCAPE, EM],
            subLanguage: "css"
          }
        },
        CM = {
          JL: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [MM.BACKSLASH_ESCAPE, EM],
            subLanguage: "graphql"
          }
        },
        eM = {
          className: "string",
          JL: "`",
          end: "`",
          contains: [MM.BACKSLASH_ESCAPE, EM]
        },
        bM = {
          className: "comment",
          variants: [MM.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              JL: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                JL: "@[A-Za-z]+"
              }, {
                className: "type",
                JL: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                JL: iM + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                JL: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), MM.C_BLOCK_COMMENT_MODE, MM.C_LINE_COMMENT_MODE]
        },
        wM = [MM.APOS_STRING_MODE, MM.QUOTE_STRING_MODE, UM, GM, CM, eM, {
          match: /\$\d+/
        }, lM];
      EM.contains = wM.concat({
        JL: /\{/,
        end: /\}/,
        keywords: hM,
        contains: ["self"].concat(wM)
      });
      const tM = [].concat(bM, EM.contains),
        gM = tM.concat([{
          JL: /(\s*)\(/,
          end: /\)/,
          keywords: hM,
          contains: ["self"].concat(tM)
        }]),
        uM = {
          className: "params",
          JL: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: hM,
          contains: gM
        },
        RM = {
          variants: [{
            match: [/class/, /\s+/, iM, /\s+/, /extends/, /\s+/, rM.concat(iM, "(", rM.concat(/\./, iM), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, iM],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        pM = {
          relevance: 0,
          match: rM.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...aM, ...PM]
          }
        },
        WM = {
          variants: [{
            match: [/function/, /\s+/, iM, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [uM],
          illegal: /%/
        };
      const sM = {
        match: rM.concat(/\b/, (DM = [...nM, "super", "import"].map((MM => `${MM}\\s*\\(`)), rM.concat("(?!", DM.join("|"), ")")), iM, rM.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var DM;
      const kM = {
          JL: rM.concat(/\./, rM.lookahead(rM.concat(iM, /(?![0-9A-Za-z$_(])/))),
          end: iM,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        ZM = {
          match: [/get|set/, /\s+/, iM, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            JL: /\(\)/
          }, uM]
        },
        oM = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + MM.UNDERSCORE_IDENT_RE + ")\\s*=>",
        fM = {
          match: [/const|var|let/, /\s+/, iM, /\s*/, /=\s*/, /(async\s*)?/, rM.lookahead(oM)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [uM]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: hM,
        exports: {
          PARAMS_CONTAINS: gM,
          CLASS_REFERENCE: pM
        },
        illegal: /#(?![$_A-z])/,
        contains: [MM.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          JL: /^\s*['"]use (strict|asm)['"]/
        }, MM.APOS_STRING_MODE, MM.QUOTE_STRING_MODE, UM, GM, CM, eM, bM, {
          match: /\$\d+/
        }, lM, pM, {
          scope: "attr",
          match: iM + rM.lookahead(":"),
          relevance: 0
        }, fM, {
          JL: "(" + MM.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [bM, MM.REGEXP_MODE, {
            className: "function",
            JL: oM,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                JL: MM.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                JL: /\(\s*\)/,
                skip: !0
              }, {
                JL: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: hM,
                contains: gM
              }]
            }]
          }, {
            JL: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              JL: LM,
              end: mM
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              JL: HM.JL,
              "on:begin": HM.isTrulyOpeningTag,
              end: HM.end
            }],
            subLanguage: "xml",
            contains: [{
              JL: HM.JL,
              end: HM.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, WM, {
          beginKeywords: "while if switch catch for"
        }, {
          JL: "\\b(?!function)" + MM.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [uM, MM.inherit(MM.TITLE_MODE, {
            JL: iM,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, kM, {
          match: "\\$" + iM,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [uM]
        }, sM, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, RM, ZM, {
          match: /\$[(.]/
        }]
      }
    }

    function mM(MM) {
      const rM = MM.regex,
        iM = LM(MM),
        aM = OM,
        PM = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        nM = {
          JL: [/namespace/, /\s+/, MM.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        mM = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: PM
          },
          contains: [iM.exports.CLASS_REFERENCE]
        },
        HM = {
          $pattern: OM,
          keyword: SM.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: jM,
          built_in: zM.concat(PM),
          "variable.language": QM
        },
        hM = {
          className: "meta",
          JL: "@" + aM
        },
        JM = (MM, rM, iM) => {
          const OM = MM.contains.findIndex((MM => MM.label === rM));
          if (-1 === OM) throw new Error("can not find mode to replace");
          MM.contains.splice(OM, 1, iM)
        };
      Object.assign(iM.keywords, HM), iM.exports.PARAMS_CONTAINS.push(hM);
      const dM = iM.contains.find((MM => "attr" === MM.scope)),
        yM = Object.assign({}, dM, {
          match: rM.concat(aM, rM.lookahead(/\s*\?:/))
        });
      iM.exports.PARAMS_CONTAINS.push([iM.exports.CLASS_REFERENCE, dM, yM]), iM.contains = iM.contains.concat([hM, nM, mM, yM]), JM(iM, "shebang", MM.SHEBANG()), JM(iM, "use_strict", {
        className: "meta",
        relevance: 10,
        JL: /^\s*['"]use strict['"]/
      });
      return iM.contains.find((MM => "func.def" === MM.label)).relevance = 0, Object.assign(iM, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), iM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);