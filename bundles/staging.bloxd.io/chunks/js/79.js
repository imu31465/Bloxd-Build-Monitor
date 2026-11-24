export const id = 79;
export const ids = [79];
export const modules = {
  4750: DD => {
    function zD(DD) {
      return DD instanceof Map ? DD.clear = DD.delete = DD.set = function() {
        throw new Error("map is read-only")
      } : DD instanceof Set && (DD.add = DD.clear = DD.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(DD), Object.getOwnPropertyNames(DD).forEach((wD => {
        const pD = DD[wD],
          sD = typeof pD;
        "object" !== sD && "function" !== sD || Object.isFrozen(pD) || zD(pD)
      })), DD
    }
    class wD {
      constructor(DD) {
        void 0 === DD.data && (DD.data = {}), this.data = DD.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function pD(DD) {
      return DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function sD(DD) {
      const zD = Object.create(null);
      for (const KD in DD) zD[KD] = DD[KD];
      for (var wD = arguments.length, pD = new Array(wD > 1 ? wD - 1 : 0), sD = 1; sD < wD; sD++) pD[sD - 1] = arguments[sD];
      return pD.forEach((function(DD) {
        for (const wD in DD) zD[wD] = DD[wD]
      })), zD
    }
    const KD = DD => !!DD.scope;
    class rD {
      constructor(DD, zD) {
        this.buffer = "", this.classPrefix = zD.classPrefix, DD.walk(this)
      }
      addText(DD) {
        this.buffer += pD(DD)
      }
      openNode(DD) {
        if (!KD(DD)) return;
        const zD = ((DD, zD) => {
          let {
            prefix: wD
          } = zD;
          if (DD.startsWith("language:")) return DD.replace("language:", "language-");
          if (DD.includes(".")) {
            const zD = DD.split(".");
            return [`${wD}${zD.shift()}`, ...zD.map(((DD, zD) => `${DD}${"_".repeat(zD+1)}`))].join(" ")
          }
          return `${wD}${DD}`
        })(DD.scope, {
          prefix: this.classPrefix
        });
        this.span(zD)
      }
      closeNode(DD) {
        KD(DD) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(DD) {
        this.buffer += `<span class="${DD}">`
      }
    }
    const LD = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zD = {
        children: []
      };
      return Object.assign(zD, DD), zD
    };
    class cD {
      constructor() {
        this.VJ = LD(), this.stack = [this.VJ]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.VJ
      }
      add(DD) {
        this.top.children.push(DD)
      }
      openNode(DD) {
        const zD = LD({
          scope: DD
        });
        this.add(zD), this.stack.push(zD)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.VJ, null, 4)
      }
      walk(DD) {
        return this.constructor._walk(DD, this.VJ)
      }
      static _walk(DD, zD) {
        return "string" === typeof zD ? DD.addText(zD) : zD.children && (DD.openNode(zD), zD.children.forEach((zD => this._walk(DD, zD))), DD.closeNode(zD)), DD
      }
      static _collapse(DD) {
        "string" !== typeof DD && DD.children && (DD.children.every((DD => "string" === typeof DD)) ? DD.children = [DD.children.join("")] : DD.children.forEach((DD => {
          cD._collapse(DD)
        })))
      }
    }
    class gD extends cD {
      constructor(DD) {
        super(), this.options = DD
      }
      addText(DD) {
        "" !== DD && this.add(DD)
      }
      startScope(DD) {
        this.openNode(DD)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(DD, zD) {
        const wD = DD.root;
        zD && (wD.scope = `language:${zD}`), this.add(wD)
      }
      toHTML() {
        return new rD(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function RD(DD) {
      return DD ? "string" === typeof DD ? DD : DD.source : null
    }

    function AD(DD) {
      return ID("(?=", DD, ")")
    }

    function UD(DD) {
      return ID("(?:", DD, ")*")
    }

    function fD(DD) {
      return ID("(?:", DD, ")?")
    }

    function ID() {
      for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
      return zD.map((DD => RD(DD))).join("")
    }

    function BD() {
      for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
      const pD = function(DD) {
        const zD = DD[DD.length - 1];
        return "object" === typeof zD && zD.constructor === Object ? (DD.splice(DD.length - 1, 1), zD) : {}
      }(zD);
      return "(" + (pD.capture ? "" : "?:") + zD.map((DD => RD(DD))).join("|") + ")"
    }

    function GD(DD) {
      return new RegExp(DD.toString() + "|").exec("").length - 1
    }
    const hD = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function nD(DD, zD) {
      let {
        joinWith: wD
      } = zD, pD = 0;
      return DD.map((DD => {
        pD += 1;
        const zD = pD;
        let wD = RD(DD),
          sD = "";
        for (; wD.length > 0;) {
          const DD = hD.exec(wD);
          if (!DD) {
            sD += wD;
            break
          }
          sD += wD.substring(0, DD.index), wD = wD.substring(DD.index + DD[0].length), "\\" === DD[0][0] && DD[1] ? sD += "\\" + String(Number(DD[1]) + zD) : (sD += DD[0], "(" === DD[0] && pD++)
        }
        return sD
      })).map((DD => `(${DD})`)).join(wD)
    }
    const MD = "[a-zA-Z]\\w*",
      OD = "[a-zA-Z_]\\w*",
      JD = "\\b\\d+(\\.\\d+)?",
      ED = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      QD = "\\b(0b[01]+)",
      XD = {
        Jf: "\\\\[\\s\\S]",
        relevance: 0
      },
      VD = {
        scope: "string",
        Jf: "'",
        end: "'",
        illegal: "\\n",
        contains: [XD]
      },
      PD = {
        scope: "string",
        Jf: '"',
        end: '"',
        illegal: "\\n",
        contains: [XD]
      },
      CD = function(DD, zD) {
        const wD = sD({
          scope: "comment",
          Jf: DD,
          end: zD,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        wD.contains.push({
          scope: "doctag",
          Jf: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const pD = BD("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return wD.contains.push({
          Jf: ID(/[ ]+/, "(", pD, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), wD
      },
      xD = CD("//", "$"),
      TD = CD("/\\*", "\\*/"),
      bD = CD("#", "$"),
      jD = {
        scope: "number",
        Jf: JD,
        relevance: 0
      },
      dD = {
        scope: "number",
        Jf: ED,
        relevance: 0
      },
      SD = {
        scope: "number",
        Jf: QD,
        relevance: 0
      },
      iD = {
        scope: "regexp",
        Jf: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [XD, {
          Jf: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [XD]
        }]
      },
      lD = {
        scope: "title",
        Jf: MD,
        relevance: 0
      },
      WD = {
        scope: "title",
        Jf: OD,
        relevance: 0
      },
      ND = {
        Jf: "\\.\\s*" + OD,
        relevance: 0
      };
    var ZD = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: VD,
      BACKSLASH_ESCAPE: XD,
      BINARY_NUMBER_MODE: SD,
      BINARY_NUMBER_RE: QD,
      COMMENT: CD,
      C_BLOCK_COMMENT_MODE: TD,
      C_LINE_COMMENT_MODE: xD,
      C_NUMBER_MODE: dD,
      C_NUMBER_RE: ED,
      END_SAME_AS_BEGIN: function(DD) {
        return Object.assign(DD, {
          "on:begin": (DD, zD) => {
            zD.data._beginMatch = DD[1]
          },
          "on:end": (DD, zD) => {
            zD.data._beginMatch !== DD[1] && zD.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: bD,
      IDENT_RE: MD,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: ND,
      NUMBER_MODE: jD,
      NUMBER_RE: JD,
      PHRASAL_WORDS_MODE: {
        Jf: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: PD,
      REGEXP_MODE: iD,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const zD = /^#![ ]*\//;
        return DD.binary && (DD.Jf = ID(zD, /.*\b/, DD.binary, /\b.*/)), sD({
          scope: "meta",
          Jf: zD,
          end: /$/,
          relevance: 0,
          "on:begin": (DD, zD) => {
            0 !== DD.index && zD.ignoreMatch()
          }
        }, DD)
      },
      TITLE_MODE: lD,
      UNDERSCORE_IDENT_RE: OD,
      UNDERSCORE_TITLE_MODE: WD
    });

    function yD(DD, zD) {
      "." === DD.input[DD.index - 1] && zD.ignoreMatch()
    }

    function kD(DD, zD) {
      void 0 !== DD.className && (DD.scope = DD.className, delete DD.className)
    }

    function mD(DD, zD) {
      zD && DD.beginKeywords && (DD.Jf = "\\b(" + DD.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", DD.__beforeBegin = yD, DD.keywords = DD.keywords || DD.beginKeywords, delete DD.beginKeywords, void 0 === DD.relevance && (DD.relevance = 0))
    }

    function eD(DD, zD) {
      Array.isArray(DD.illegal) && (DD.illegal = BD(...DD.illegal))
    }

    function oD(DD, zD) {
      if (DD.match) {
        if (DD.Jf || DD.end) throw new Error("begin & end are not supported with match");
        DD.Jf = DD.match, delete DD.match
      }
    }

    function aD(DD, zD) {
      void 0 === DD.relevance && (DD.relevance = 1)
    }
    const uD = (DD, zD) => {
        if (!DD.beforeMatch) return;
        if (DD.starts) throw new Error("beforeMatch cannot be used with starts");
        const wD = Object.assign({}, DD);
        Object.keys(DD).forEach((zD => {
          delete DD[zD]
        })), DD.keywords = wD.keywords, DD.Jf = ID(wD.beforeMatch, AD(wD.Jf)), DD.starts = {
          relevance: 0,
          contains: [Object.assign(wD, {
            endsParent: !0
          })]
        }, DD.relevance = 0, delete wD.beforeMatch
      },
      vD = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function tD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const pD = Object.create(null);
      return "string" === typeof DD ? sD(wD, DD.split(" ")) : Array.isArray(DD) ? sD(wD, DD) : Object.keys(DD).forEach((function(wD) {
        Object.assign(pD, tD(DD[wD], zD, wD))
      })), pD;

      function sD(DD, wD) {
        zD && (wD = wD.map((DD => DD.toLowerCase()))), wD.forEach((function(zD) {
          const wD = zD.split("|");
          pD[wD[0]] = [DD, FD(wD[0], wD[1])]
        }))
      }
    }

    function FD(DD, zD) {
      return zD ? Number(zD) : function(DD) {
        return vD.includes(DD.toLowerCase())
      }(DD) ? 0 : 1
    }
    const YD = {},
      HD = DD => {
        console.error(DD)
      },
      qD = function(DD) {
        for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
        console.log(`WARN: ${DD}`, ...wD)
      },
      Dz = (DD, zD) => {
        YD[`${DD}/${zD}`] || (console.log(`Deprecated as of ${DD}. ${zD}`), YD[`${DD}/${zD}`] = !0)
      },
      zz = new Error;

    function wz(DD, zD, wD) {
      let {
        key: pD
      } = wD, sD = 0;
      const KD = DD[pD],
        rD = {},
        LD = {};
      for (let cD = 1; cD <= zD.length; cD++) LD[cD + sD] = KD[cD], rD[cD + sD] = !0, sD += GD(zD[cD - 1]);
      DD[pD] = LD, DD[pD]._emit = rD, DD[pD]._multi = !0
    }

    function pz(DD) {
      ! function(DD) {
        DD.scope && "object" === typeof DD.scope && null !== DD.scope && (DD.beginScope = DD.scope, delete DD.scope)
      }(DD), "string" === typeof DD.beginScope && (DD.beginScope = {
          _wrap: DD.beginScope
        }), "string" === typeof DD.endScope && (DD.endScope = {
          _wrap: DD.endScope
        }),
        function(DD) {
          if (Array.isArray(DD.Jf)) {
            if (DD.skip || DD.excludeBegin || DD.returnBegin) throw HD("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), zz;
            if ("object" !== typeof DD.beginScope || null === DD.beginScope) throw HD("beginScope must be object"), zz;
            wz(DD, DD.Jf, {
              key: "beginScope"
            }), DD.Jf = nD(DD.Jf, {
              joinWith: ""
            })
          }
        }(DD),
        function(DD) {
          if (Array.isArray(DD.end)) {
            if (DD.skip || DD.excludeEnd || DD.returnEnd) throw HD("skip, excludeEnd, returnEnd not compatible with endScope: {}"), zz;
            if ("object" !== typeof DD.endScope || null === DD.endScope) throw HD("endScope must be object"), zz;
            wz(DD, DD.end, {
              key: "endScope"
            }), DD.end = nD(DD.end, {
              joinWith: ""
            })
          }
        }(DD)
    }

    function sz(DD) {
      function zD(zD, wD) {
        return new RegExp(RD(zD), "m" + (DD.case_insensitive ? "i" : "") + (DD.unicodeRegex ? "u" : "") + (wD ? "g" : ""))
      }
      class wD {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(DD, zD) {
          zD.position = this.position++, this.matchIndexes[this.matchAt] = zD, this.regexes.push([zD, DD]), this.matchAt += GD(DD) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const DD = this.regexes.map((DD => DD[1]));
          this.matcherRe = zD(nD(DD, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(DD) {
          this.matcherRe.lastIndex = this.lastIndex;
          const zD = this.matcherRe.exec(DD);
          if (!zD) return null;
          const wD = zD.findIndex(((DD, zD) => zD > 0 && void 0 !== DD)),
            pD = this.matchIndexes[wD];
          return zD.splice(0, wD), Object.assign(zD, pD)
        }
      }
      class pD {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(DD) {
          if (this.multiRegexes[DD]) return this.multiRegexes[DD];
          const zD = new wD;
          return this.rules.slice(DD).forEach((DD => {
            let [wD, pD] = DD;
            return zD.addRule(wD, pD)
          })), zD.compile(), this.multiRegexes[DD] = zD, zD
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(DD, zD) {
          this.rules.push([DD, zD]), "Jf" === zD.type && this.count++
        }
        exec(DD) {
          const zD = this.getMatcher(this.regexIndex);
          zD.lastIndex = this.lastIndex;
          let wD = zD.exec(DD);
          if (this.resumingScanAtSamePosition())
            if (wD && wD.index === this.lastIndex);
            else {
              const zD = this.getMatcher(0);
              zD.lastIndex = this.lastIndex + 1, wD = zD.exec(DD)
            } return wD && (this.regexIndex += wD.position + 1, this.regexIndex === this.count && this.considerAll()), wD
        }
      }
      if (DD.compilerExtensions || (DD.compilerExtensions = []), DD.contains && DD.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return DD.classNameAliases = sD(DD.classNameAliases || {}),
        function wD(KD, rD) {
          const LD = KD;
          if (KD.isCompiled) return LD;
          [kD, oD, pz, uD].forEach((DD => DD(KD, rD))), DD.compilerExtensions.forEach((DD => DD(KD, rD))), KD.__beforeBegin = null, [mD, eD, aD].forEach((DD => DD(KD, rD))), KD.isCompiled = !0;
          let cD = null;
          return "object" === typeof KD.keywords && KD.keywords.$pattern && (KD.keywords = Object.assign({}, KD.keywords), cD = KD.keywords.$pattern, delete KD.keywords.$pattern), cD = cD || /\w+/, KD.keywords && (KD.keywords = tD(KD.keywords, DD.case_insensitive)), LD.keywordPatternRe = zD(cD, !0), rD && (KD.Jf || (KD.Jf = /\B|\b/), LD.beginRe = zD(LD.Jf), KD.end || KD.endsWithParent || (KD.end = /\B|\b/), KD.end && (LD.endRe = zD(LD.end)), LD.terminatorEnd = RD(LD.end) || "", KD.endsWithParent && rD.terminatorEnd && (LD.terminatorEnd += (KD.end ? "|" : "") + rD.terminatorEnd)), KD.illegal && (LD.illegalRe = zD(KD.illegal)), KD.contains || (KD.contains = []), KD.contains = [].concat(...KD.contains.map((function(DD) {
            return function(DD) {
              DD.variants && !DD.cachedVariants && (DD.cachedVariants = DD.variants.map((function(zD) {
                return sD(DD, {
                  variants: null
                }, zD)
              })));
              if (DD.cachedVariants) return DD.cachedVariants;
              if (Kz(DD)) return sD(DD, {
                starts: DD.starts ? sD(DD.starts) : null
              });
              if (Object.isFrozen(DD)) return sD(DD);
              return DD
            }("self" === DD ? KD : DD)
          }))), KD.contains.forEach((function(DD) {
            wD(DD, LD)
          })), KD.starts && wD(KD.starts, rD), LD.matcher = function(DD) {
            const zD = new pD;
            return DD.contains.forEach((DD => zD.addRule(DD.Jf, {
              rule: DD,
              type: "Jf"
            }))), DD.terminatorEnd && zD.addRule(DD.terminatorEnd, {
              type: "end"
            }), DD.illegal && zD.addRule(DD.illegal, {
              type: "illegal"
            }), zD
          }(LD), LD
        }(DD)
    }

    function Kz(DD) {
      return !!DD && (DD.endsWithParent || Kz(DD.starts))
    }
    class rz extends Error {
      constructor(DD, zD) {
        super(DD), this.name = "HTMLInjectionError", this.html = zD
      }
    }
    const Lz = pD,
      cz = sD,
      gz = Symbol("nomatch"),
      Rz = function(DD) {
        const pD = Object.create(null),
          sD = Object.create(null),
          KD = [];
        let rD = !0;
        const LD = "Could not find the language '{}', did you forget to load/include a language module?",
          cD = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let RD = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: gD
        };

        function GD(DD) {
          return RD.noHighlightRe.test(DD)
        }

        function hD(DD, zD, wD) {
          let pD = "",
            sD = "";
          "object" === typeof zD ? (pD = DD, wD = zD.ignoreIllegals, sD = zD.language) : (Dz("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Dz("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), sD = DD, pD = zD), void 0 === wD && (wD = !0);
          const KD = {
            code: pD,
            language: sD
          };
          PD("before:highlight", KD);
          const rD = KD.result ? KD.result : nD(KD.language, KD.code, wD);
          return rD.code = KD.code, PD("after:highlight", rD), rD
        }

        function nD(DD, zD, sD, KD) {
          const cD = Object.create(null);

          function gD() {
            if (!PD.keywords) return void xD.addText(TD);
            let DD = 0;
            PD.keywordPatternRe.lastIndex = 0;
            let zD = PD.keywordPatternRe.exec(TD),
              wD = "";
            for (; zD;) {
              wD += TD.substring(DD, zD.index);
              const sD = ED.case_insensitive ? zD[0].toLowerCase() : zD[0],
                KD = (pD = sD, PD.keywords[pD]);
              if (KD) {
                const [DD, pD] = KD;
                if (xD.addText(wD), wD = "", cD[sD] = (cD[sD] || 0) + 1, cD[sD] <= 7 && (bD += pD), DD.startsWith("_")) wD += zD[0];
                else {
                  const wD = ED.classNameAliases[DD] || DD;
                  UD(zD[0], wD)
                }
              } else wD += zD[0];
              DD = PD.keywordPatternRe.lastIndex, zD = PD.keywordPatternRe.exec(TD)
            }
            var pD;
            wD += TD.substring(DD), xD.addText(wD)
          }

          function AD() {
            null != PD.subLanguage ? function() {
              if ("" === TD) return;
              let DD = null;
              if ("string" === typeof PD.subLanguage) {
                if (!pD[PD.subLanguage]) return void xD.addText(TD);
                DD = nD(PD.subLanguage, TD, !0, CD[PD.subLanguage]), CD[PD.subLanguage] = DD._top
              } else DD = MD(TD, PD.subLanguage.length ? PD.subLanguage : null);
              PD.relevance > 0 && (bD += DD.relevance), xD.__addSublanguage(DD._emitter, DD.language)
            }() : gD(), TD = ""
          }

          function UD(DD, zD) {
            "" !== DD && (xD.startScope(zD), xD.addText(DD), xD.endScope())
          }

          function fD(DD, zD) {
            let wD = 1;
            const pD = zD.length - 1;
            for (; wD <= pD;) {
              if (!DD._emit[wD]) {
                wD++;
                continue
              }
              const pD = ED.classNameAliases[DD[wD]] || DD[wD],
                sD = zD[wD];
              pD ? UD(sD, pD) : (TD = sD, gD(), TD = ""), wD++
            }
          }

          function ID(DD, zD) {
            return DD.scope && "string" === typeof DD.scope && xD.openNode(ED.classNameAliases[DD.scope] || DD.scope), DD.beginScope && (DD.beginScope._wrap ? (UD(TD, ED.classNameAliases[DD.beginScope._wrap] || DD.beginScope._wrap), TD = "") : DD.beginScope._multi && (fD(DD.beginScope, zD), TD = "")), PD = Object.create(DD, {
              parent: {
                value: PD
              }
            }), PD
          }

          function BD(DD, zD, pD) {
            let sD = function(DD, zD) {
              const wD = DD && DD.exec(zD);
              return wD && 0 === wD.index
            }(DD.endRe, pD);
            if (sD) {
              if (DD["on:end"]) {
                const pD = new wD(DD);
                DD["on:end"](zD, pD), pD.isMatchIgnored && (sD = !1)
              }
              if (sD) {
                for (; DD.endsParent && DD.parent;) DD = DD.parent;
                return DD
              }
            }
            if (DD.endsWithParent) return BD(DD.parent, zD, pD)
          }

          function GD(DD) {
            return 0 === PD.matcher.regexIndex ? (TD += DD[0], 1) : (SD = !0, 0)
          }

          function hD(DD) {
            const wD = DD[0],
              pD = zD.substring(DD.index),
              sD = BD(PD, DD, pD);
            if (!sD) return gz;
            const KD = PD;
            PD.endScope && PD.endScope._wrap ? (AD(), UD(wD, PD.endScope._wrap)) : PD.endScope && PD.endScope._multi ? (AD(), fD(PD.endScope, DD)) : KD.skip ? TD += wD : (KD.returnEnd || KD.excludeEnd || (TD += wD), AD(), KD.excludeEnd && (TD = wD));
            do {
              PD.scope && xD.closeNode(), PD.skip || PD.subLanguage || (bD += PD.relevance), PD = PD.parent
            } while (PD !== sD.parent);
            return sD.starts && ID(sD.starts, DD), KD.returnEnd ? 0 : wD.length
          }
          let OD = {};

          function JD(pD, KD) {
            const LD = KD && KD[0];
            if (TD += pD, null == LD) return AD(), 0;
            if ("Jf" === OD.type && "end" === KD.type && OD.index === KD.index && "" === LD) {
              if (TD += zD.slice(KD.index, KD.index + 1), !rD) {
                const zD = new Error(`0 width match regex (${DD})`);
                throw zD.languageName = DD, zD.badRule = OD.rule, zD
              }
              return 1
            }
            if (OD = KD, "Jf" === KD.type) return function(DD) {
              const zD = DD[0],
                pD = DD.rule,
                sD = new wD(pD),
                KD = [pD.__beforeBegin, pD["on:begin"]];
              for (const wD of KD)
                if (wD && (wD(DD, sD), sD.isMatchIgnored)) return GD(zD);
              return pD.skip ? TD += zD : (pD.excludeBegin && (TD += zD), AD(), pD.returnBegin || pD.excludeBegin || (TD = zD)), ID(pD, DD), pD.returnBegin ? 0 : zD.length
            }(KD);
            if ("illegal" === KD.type && !sD) {
              const DD = new Error('Illegal lexeme "' + LD + '" for mode "' + (PD.scope || "<unnamed>") + '"');
              throw DD.mode = PD, DD
            }
            if ("end" === KD.type) {
              const DD = hD(KD);
              if (DD !== gz) return DD
            }
            if ("illegal" === KD.type && "" === LD) return TD += "\n", 1;
            if (dD > 1e5 && dD > 3 * KD.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return TD += LD, LD.length
          }
          const ED = QD(DD);
          if (!ED) throw HD(LD.replace("{}", DD)), new Error('Unknown language: "' + DD + '"');
          const XD = sz(ED);
          let VD = "",
            PD = KD || XD;
          const CD = {},
            xD = new RD.__emitter(RD);
          ! function() {
            const DD = [];
            for (let zD = PD; zD !== ED; zD = zD.parent) zD.scope && DD.unshift(zD.scope);
            DD.forEach((DD => xD.openNode(DD)))
          }();
          let TD = "",
            bD = 0,
            jD = 0,
            dD = 0,
            SD = !1;
          try {
            if (ED.__emitTokens) ED.__emitTokens(zD, xD);
            else {
              for (PD.matcher.considerAll();;) {
                dD++, SD ? SD = !1 : PD.matcher.considerAll(), PD.matcher.lastIndex = jD;
                const DD = PD.matcher.exec(zD);
                if (!DD) break;
                const wD = JD(zD.substring(jD, DD.index), DD);
                jD = DD.index + wD
              }
              JD(zD.substring(jD))
            }
            return xD.finalize(), VD = xD.toHTML(), {
              language: DD,
              value: VD,
              relevance: bD,
              illegal: !1,
              _emitter: xD,
              _top: PD
            }
          } catch (iD) {
            if (iD.message && iD.message.includes("Illegal")) return {
              language: DD,
              value: Lz(zD),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: iD.message,
                index: jD,
                context: zD.slice(jD - 100, jD + 100),
                mode: iD.mode,
                resultSoFar: VD
              },
              _emitter: xD
            };
            if (rD) return {
              language: DD,
              value: Lz(zD),
              illegal: !1,
              relevance: 0,
              errorRaised: iD,
              _emitter: xD,
              _top: PD
            };
            throw iD
          }
        }

        function MD(DD, zD) {
          zD = zD || RD.languages || Object.keys(pD);
          const wD = function(DD) {
              const zD = {
                value: Lz(DD),
                illegal: !1,
                relevance: 0,
                _top: cD,
                _emitter: new RD.__emitter(RD)
              };
              return zD._emitter.addText(DD), zD
            }(DD),
            sD = zD.filter(QD).filter(VD).map((zD => nD(zD, DD, !1)));
          sD.unshift(wD);
          const KD = sD.sort(((DD, zD) => {
              if (DD.relevance !== zD.relevance) return zD.relevance - DD.relevance;
              if (DD.language && zD.language) {
                if (QD(DD.language).supersetOf === zD.language) return 1;
                if (QD(zD.language).supersetOf === DD.language) return -1
              }
              return 0
            })),
            [rD, LD] = KD,
            gD = rD;
          return gD.secondBest = LD, gD
        }

        function OD(DD) {
          let zD = null;
          const wD = function(DD) {
            let zD = DD.className + " ";
            zD += DD.parentNode ? DD.parentNode.className : "";
            const wD = RD.languageDetectRe.exec(zD);
            if (wD) {
              const zD = QD(wD[1]);
              return zD || (qD(LD.replace("{}", wD[1])), qD("Falling back to no-highlight mode for this block.", DD)), zD ? wD[1] : "no-highlight"
            }
            return zD.split(/\s+/).find((DD => GD(DD) || QD(DD)))
          }(DD);
          if (GD(wD)) return;
          if (PD("before:highlightElement", {
              el: DD,
              language: wD
            }), DD.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", DD);
          if (DD.children.length > 0 && (RD.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(DD)), RD.throwUnescapedHTML)) {
            throw new rz("One of your code blocks includes unescaped HTML.", DD.innerHTML)
          }
          zD = DD;
          const pD = zD.textContent,
            KD = wD ? hD(pD, {
              language: wD,
              ignoreIllegals: !0
            }) : MD(pD);
          DD.innerHTML = KD.value, DD.dataset.highlighted = "yes",
            function(DD, zD, wD) {
              const pD = zD && sD[zD] || wD;
              DD.classList.add("hljs"), DD.classList.add(`language-${pD}`)
            }(DD, wD, KD.language), DD.result = {
              language: KD.language,
              re: KD.relevance,
              relevance: KD.relevance
            }, KD.secondBest && (DD.secondBest = {
              language: KD.secondBest.language,
              relevance: KD.secondBest.relevance
            }), PD("after:highlightElement", {
              el: DD,
              result: KD,
              text: pD
            })
        }
        let JD = !1;

        function ED() {
          if ("loading" === document.readyState) return JD || window.addEventListener("DOMContentLoaded", (function() {
            ED()
          }), !1), void(JD = !0);
          document.querySelectorAll(RD.cssSelector).forEach(OD)
        }

        function QD(DD) {
          return DD = (DD || "").toLowerCase(), pD[DD] || pD[sD[DD]]
        }

        function XD(DD, zD) {
          let {
            languageName: wD
          } = zD;
          "string" === typeof DD && (DD = [DD]), DD.forEach((DD => {
            sD[DD.toLowerCase()] = wD
          }))
        }

        function VD(DD) {
          const zD = QD(DD);
          return zD && !zD.disableAutodetect
        }

        function PD(DD, zD) {
          const wD = DD;
          KD.forEach((function(DD) {
            DD[wD] && DD[wD](zD)
          }))
        }
        Object.assign(DD, {
          highlight: hD,
          highlightAuto: MD,
          highlightAll: ED,
          highlightElement: OD,
          highlightBlock: function(DD) {
            return Dz("10.7.0", "highlightBlock will be removed entirely in v12.0"), Dz("10.7.0", "Please use highlightElement now."), OD(DD)
          },
          configure: function(DD) {
            RD = cz(RD, DD)
          },
          initHighlighting: () => {
            ED(), Dz("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            ED(), Dz("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(zD, wD) {
            let sD = null;
            try {
              sD = wD(DD)
            } catch (KD) {
              if (HD("Language definition for '{}' could not be registered.".replace("{}", zD)), !rD) throw KD;
              HD(KD), sD = cD
            }
            sD.name || (sD.name = zD), pD[zD] = sD, sD.rawDefinition = wD.bind(null, DD), sD.aliases && XD(sD.aliases, {
              languageName: zD
            })
          },
          unregisterLanguage: function(DD) {
            delete pD[DD];
            for (const zD of Object.keys(sD)) sD[zD] === DD && delete sD[zD]
          },
          listLanguages: function() {
            return Object.keys(pD)
          },
          getLanguage: QD,
          registerAliases: XD,
          autoDetection: VD,
          inherit: cz,
          addPlugin: function(DD) {
            ! function(DD) {
              DD["before:highlightBlock"] && !DD["before:highlightElement"] && (DD["before:highlightElement"] = zD => {
                DD["before:highlightBlock"](Object.assign({
                  block: zD.el
                }, zD))
              }), DD["after:highlightBlock"] && !DD["after:highlightElement"] && (DD["after:highlightElement"] = zD => {
                DD["after:highlightBlock"](Object.assign({
                  block: zD.el
                }, zD))
              })
            }(DD), KD.push(DD)
          },
          removePlugin: function(DD) {
            const zD = KD.indexOf(DD); - 1 !== zD && KD.splice(zD, 1)
          }
        }), DD.debugMode = function() {
          rD = !1
        }, DD.safeMode = function() {
          rD = !0
        }, DD.versionString = "11.11.1", DD.regex = {
          concat: ID,
          lookahead: AD,
          either: BD,
          optional: fD,
          anyNumberOfTimes: UD
        };
        for (const wD in ZD) "object" === typeof ZD[wD] && zD(ZD[wD]);
        return Object.assign(DD, ZD), DD
      },
      Az = Rz({});
    Az.newInstance = () => Rz({}), DD.exports = Az, Az.HighlightJS = Az, Az.default = Az
  },
  4744: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    const pD = wD(4750)
  },
  4757: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD
    });
    const pD = "[A-Za-z$_][0-9A-Za-z$_]*",
      sD = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      KD = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      rD = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      LD = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      cD = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      gD = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      RD = [].concat(cD, rD, LD);

    function AD(DD) {
      const zD = DD.regex,
        wD = pD,
        AD = "<>",
        UD = "</>",
        fD = {
          Jf: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (DD, zD) => {
            const wD = DD[0].length + DD.index,
              pD = DD.input[wD];
            if ("<" === pD || "," === pD) return void zD.ignoreMatch();
            let sD;
            ">" === pD && (((DD, zD) => {
              let {
                after: wD
              } = zD;
              const pD = "</" + DD[0].slice(1);
              return -1 !== DD.input.indexOf(pD, wD)
            })(DD, {
              after: wD
            }) || zD.ignoreMatch());
            const KD = DD.input.substring(wD);
            ((sD = KD.match(/^\s*=/)) || (sD = KD.match(/^\s+extends\s+/)) && 0 === sD.index) && zD.ignoreMatch()
          }
        },
        ID = {
          $pattern: pD,
          keyword: sD,
          literal: KD,
          built_in: RD,
          "variable.language": gD
        },
        BD = "[0-9](_?[0-9])*",
        GD = `\\.(${BD})`,
        hD = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        nD = {
          className: "number",
          variants: [{
            Jf: `(\\b(${hD})((${GD})|\\.)?|(${GD}))[eE][+-]?(${BD})\\b`
          }, {
            Jf: `\\b(${hD})\\b((${GD})\\b|\\.)?|(${GD})\\b`
          }, {
            Jf: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Jf: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Jf: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Jf: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Jf: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        MD = {
          className: "subst",
          Jf: "\\$\\{",
          end: "\\}",
          keywords: ID,
          contains: []
        },
        OD = {
          Jf: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, MD],
            subLanguage: "xml"
          }
        },
        JD = {
          Jf: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, MD],
            subLanguage: "css"
          }
        },
        ED = {
          Jf: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, MD],
            subLanguage: "graphql"
          }
        },
        QD = {
          className: "string",
          Jf: "`",
          end: "`",
          contains: [DD.BACKSLASH_ESCAPE, MD]
        },
        XD = {
          className: "comment",
          variants: [DD.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Jf: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Jf: "@[A-Za-z]+"
              }, {
                className: "type",
                Jf: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Jf: wD + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Jf: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), DD.C_BLOCK_COMMENT_MODE, DD.C_LINE_COMMENT_MODE]
        },
        VD = [DD.APOS_STRING_MODE, DD.QUOTE_STRING_MODE, OD, JD, ED, QD, {
          match: /\$\d+/
        }, nD];
      MD.contains = VD.concat({
        Jf: /\{/,
        end: /\}/,
        keywords: ID,
        contains: ["self"].concat(VD)
      });
      const PD = [].concat(XD, MD.contains),
        CD = PD.concat([{
          Jf: /(\s*)\(/,
          end: /\)/,
          keywords: ID,
          contains: ["self"].concat(PD)
        }]),
        xD = {
          className: "params",
          Jf: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: ID,
          contains: CD
        },
        TD = {
          variants: [{
            match: [/class/, /\s+/, wD, /\s+/, /extends/, /\s+/, zD.concat(wD, "(", zD.concat(/\./, wD), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, wD],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        bD = {
          relevance: 0,
          match: zD.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...rD, ...LD]
          }
        },
        jD = {
          variants: [{
            match: [/function/, /\s+/, wD, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [xD],
          illegal: /%/
        };
      const dD = {
        match: zD.concat(/\b/, (SD = [...cD, "super", "import"].map((DD => `${DD}\\s*\\(`)), zD.concat("(?!", SD.join("|"), ")")), wD, zD.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var SD;
      const iD = {
          Jf: zD.concat(/\./, zD.lookahead(zD.concat(wD, /(?![0-9A-Za-z$_(])/))),
          end: wD,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        lD = {
          match: [/get|set/, /\s+/, wD, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Jf: /\(\)/
          }, xD]
        },
        WD = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + DD.UNDERSCORE_IDENT_RE + ")\\s*=>",
        ND = {
          match: [/const|var|let/, /\s+/, wD, /\s*/, /=\s*/, /(async\s*)?/, zD.lookahead(WD)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [xD]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: ID,
        exports: {
          PARAMS_CONTAINS: CD,
          CLASS_REFERENCE: bD
        },
        illegal: /#(?![$_A-z])/,
        contains: [DD.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Jf: /^\s*['"]use (strict|asm)['"]/
        }, DD.APOS_STRING_MODE, DD.QUOTE_STRING_MODE, OD, JD, ED, QD, XD, {
          match: /\$\d+/
        }, nD, bD, {
          scope: "attr",
          match: wD + zD.lookahead(":"),
          relevance: 0
        }, ND, {
          Jf: "(" + DD.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [XD, DD.REGEXP_MODE, {
            className: "function",
            Jf: WD,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Jf: DD.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Jf: /\(\s*\)/,
                skip: !0
              }, {
                Jf: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: ID,
                contains: CD
              }]
            }]
          }, {
            Jf: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Jf: AD,
              end: UD
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Jf: fD.Jf,
              "on:begin": fD.isTrulyOpeningTag,
              end: fD.end
            }],
            subLanguage: "xml",
            contains: [{
              Jf: fD.Jf,
              end: fD.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, jD, {
          beginKeywords: "while if switch catch for"
        }, {
          Jf: "\\b(?!function)" + DD.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [xD, DD.inherit(DD.TITLE_MODE, {
            Jf: wD,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, iD, {
          match: "\\$" + wD,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [xD]
        }, dD, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, TD, lD, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4763: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD
    });
    const pD = "[A-Za-z$_][0-9A-Za-z$_]*",
      sD = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      KD = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      rD = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      LD = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      cD = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      gD = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      RD = [].concat(cD, rD, LD);

    function AD(DD) {
      const zD = DD.regex,
        wD = pD,
        AD = "<>",
        UD = "</>",
        fD = {
          Jf: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (DD, zD) => {
            const wD = DD[0].length + DD.index,
              pD = DD.input[wD];
            if ("<" === pD || "," === pD) return void zD.ignoreMatch();
            let sD;
            ">" === pD && (((DD, zD) => {
              let {
                after: wD
              } = zD;
              const pD = "</" + DD[0].slice(1);
              return -1 !== DD.input.indexOf(pD, wD)
            })(DD, {
              after: wD
            }) || zD.ignoreMatch());
            const KD = DD.input.substring(wD);
            ((sD = KD.match(/^\s*=/)) || (sD = KD.match(/^\s+extends\s+/)) && 0 === sD.index) && zD.ignoreMatch()
          }
        },
        ID = {
          $pattern: pD,
          keyword: sD,
          literal: KD,
          built_in: RD,
          "variable.language": gD
        },
        BD = "[0-9](_?[0-9])*",
        GD = `\\.(${BD})`,
        hD = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        nD = {
          className: "number",
          variants: [{
            Jf: `(\\b(${hD})((${GD})|\\.)?|(${GD}))[eE][+-]?(${BD})\\b`
          }, {
            Jf: `\\b(${hD})\\b((${GD})\\b|\\.)?|(${GD})\\b`
          }, {
            Jf: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Jf: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Jf: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Jf: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Jf: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        MD = {
          className: "subst",
          Jf: "\\$\\{",
          end: "\\}",
          keywords: ID,
          contains: []
        },
        OD = {
          Jf: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, MD],
            subLanguage: "xml"
          }
        },
        JD = {
          Jf: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, MD],
            subLanguage: "css"
          }
        },
        ED = {
          Jf: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [DD.BACKSLASH_ESCAPE, MD],
            subLanguage: "graphql"
          }
        },
        QD = {
          className: "string",
          Jf: "`",
          end: "`",
          contains: [DD.BACKSLASH_ESCAPE, MD]
        },
        XD = {
          className: "comment",
          variants: [DD.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Jf: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Jf: "@[A-Za-z]+"
              }, {
                className: "type",
                Jf: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Jf: wD + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Jf: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), DD.C_BLOCK_COMMENT_MODE, DD.C_LINE_COMMENT_MODE]
        },
        VD = [DD.APOS_STRING_MODE, DD.QUOTE_STRING_MODE, OD, JD, ED, QD, {
          match: /\$\d+/
        }, nD];
      MD.contains = VD.concat({
        Jf: /\{/,
        end: /\}/,
        keywords: ID,
        contains: ["self"].concat(VD)
      });
      const PD = [].concat(XD, MD.contains),
        CD = PD.concat([{
          Jf: /(\s*)\(/,
          end: /\)/,
          keywords: ID,
          contains: ["self"].concat(PD)
        }]),
        xD = {
          className: "params",
          Jf: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: ID,
          contains: CD
        },
        TD = {
          variants: [{
            match: [/class/, /\s+/, wD, /\s+/, /extends/, /\s+/, zD.concat(wD, "(", zD.concat(/\./, wD), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, wD],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        bD = {
          relevance: 0,
          match: zD.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...rD, ...LD]
          }
        },
        jD = {
          variants: [{
            match: [/function/, /\s+/, wD, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [xD],
          illegal: /%/
        };
      const dD = {
        match: zD.concat(/\b/, (SD = [...cD, "super", "import"].map((DD => `${DD}\\s*\\(`)), zD.concat("(?!", SD.join("|"), ")")), wD, zD.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var SD;
      const iD = {
          Jf: zD.concat(/\./, zD.lookahead(zD.concat(wD, /(?![0-9A-Za-z$_(])/))),
          end: wD,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        lD = {
          match: [/get|set/, /\s+/, wD, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Jf: /\(\)/
          }, xD]
        },
        WD = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + DD.UNDERSCORE_IDENT_RE + ")\\s*=>",
        ND = {
          match: [/const|var|let/, /\s+/, wD, /\s*/, /=\s*/, /(async\s*)?/, zD.lookahead(WD)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [xD]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: ID,
        exports: {
          PARAMS_CONTAINS: CD,
          CLASS_REFERENCE: bD
        },
        illegal: /#(?![$_A-z])/,
        contains: [DD.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Jf: /^\s*['"]use (strict|asm)['"]/
        }, DD.APOS_STRING_MODE, DD.QUOTE_STRING_MODE, OD, JD, ED, QD, XD, {
          match: /\$\d+/
        }, nD, bD, {
          scope: "attr",
          match: wD + zD.lookahead(":"),
          relevance: 0
        }, ND, {
          Jf: "(" + DD.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [XD, DD.REGEXP_MODE, {
            className: "function",
            Jf: WD,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Jf: DD.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Jf: /\(\s*\)/,
                skip: !0
              }, {
                Jf: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: ID,
                contains: CD
              }]
            }]
          }, {
            Jf: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Jf: AD,
              end: UD
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Jf: fD.Jf,
              "on:begin": fD.isTrulyOpeningTag,
              end: fD.end
            }],
            subLanguage: "xml",
            contains: [{
              Jf: fD.Jf,
              end: fD.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, jD, {
          beginKeywords: "while if switch catch for"
        }, {
          Jf: "\\b(?!function)" + DD.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [xD, DD.inherit(DD.TITLE_MODE, {
            Jf: wD,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, iD, {
          match: "\\$" + wD,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [xD]
        }, dD, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, TD, lD, {
          match: /\$[(.]/
        }]
      }
    }

    function UD(DD) {
      const zD = DD.regex,
        wD = AD(DD),
        rD = pD,
        LD = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        cD = {
          Jf: [/namespace/, /\s+/, DD.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        UD = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: LD
          },
          contains: [wD.exports.CLASS_REFERENCE]
        },
        fD = {
          $pattern: pD,
          keyword: sD.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: KD,
          built_in: RD.concat(LD),
          "variable.language": gD
        },
        ID = {
          className: "meta",
          Jf: "@" + rD
        },
        BD = (DD, zD, wD) => {
          const pD = DD.contains.findIndex((DD => DD.label === zD));
          if (-1 === pD) throw new Error("can not find mode to replace");
          DD.contains.splice(pD, 1, wD)
        };
      Object.assign(wD.keywords, fD), wD.exports.PARAMS_CONTAINS.push(ID);
      const GD = wD.contains.find((DD => "attr" === DD.scope)),
        hD = Object.assign({}, GD, {
          match: zD.concat(rD, zD.lookahead(/\s*\?:/))
        });
      wD.exports.PARAMS_CONTAINS.push([wD.exports.CLASS_REFERENCE, GD, hD]), wD.contains = wD.contains.concat([ID, cD, UD, hD]), BD(wD, "shebang", DD.SHEBANG()), BD(wD, "use_strict", {
        className: "meta",
        relevance: 10,
        Jf: /^\s*['"]use strict['"]/
      });
      return wD.contains.find((DD => "func.def" === DD.label)).relevance = 0, Object.assign(wD, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), wD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);