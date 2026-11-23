export const id = 79;
export const ids = [79];
export const modules = {
  4661: CC => {
    function zC(CC) {
      return CC instanceof Map ? CC.clear = CC.delete = CC.set = function() {
        throw new Error("map is read-only")
      } : CC instanceof Set && (CC.add = CC.clear = CC.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(CC), Object.getOwnPropertyNames(CC).forEach((ZC => {
        const QC = CC[ZC],
          wC = typeof QC;
        "object" !== wC && "function" !== wC || Object.isFrozen(QC) || zC(QC)
      })), CC
    }
    class ZC {
      constructor(CC) {
        void 0 === CC.data && (CC.data = {}), this.data = CC.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function QC(CC) {
      return CC.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function wC(CC) {
      const zC = Object.create(null);
      for (const bC in CC) zC[bC] = CC[bC];
      for (var ZC = arguments.length, QC = new Array(ZC > 1 ? ZC - 1 : 0), wC = 1; wC < ZC; wC++) QC[wC - 1] = arguments[wC];
      return QC.forEach((function(CC) {
        for (const ZC in CC) zC[ZC] = CC[ZC]
      })), zC
    }
    const bC = CC => !!CC.scope;
    class nC {
      constructor(CC, zC) {
        this.buffer = "", this.classPrefix = zC.classPrefix, CC.walk(this)
      }
      addText(CC) {
        this.buffer += QC(CC)
      }
      openNode(CC) {
        if (!bC(CC)) return;
        const zC = ((CC, zC) => {
          let {
            prefix: ZC
          } = zC;
          if (CC.startsWith("language:")) return CC.replace("language:", "language-");
          if (CC.includes(".")) {
            const zC = CC.split(".");
            return [`${ZC}${zC.shift()}`, ...zC.map(((CC, zC) => `${CC}${"_".repeat(zC+1)}`))].join(" ")
          }
          return `${ZC}${CC}`
        })(CC.scope, {
          prefix: this.classPrefix
        });
        this.span(zC)
      }
      closeNode(CC) {
        bC(CC) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(CC) {
        this.buffer += `<span class="${CC}">`
      }
    }
    const fC = function() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zC = {
        children: []
      };
      return Object.assign(zC, CC), zC
    };
    class oC {
      constructor() {
        this.aG = fC(), this.stack = [this.aG]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.aG
      }
      add(CC) {
        this.top.children.push(CC)
      }
      openNode(CC) {
        const zC = fC({
          scope: CC
        });
        this.add(zC), this.stack.push(zC)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.aG, null, 4)
      }
      walk(CC) {
        return this.constructor._walk(CC, this.aG)
      }
      static _walk(CC, zC) {
        return "string" === typeof zC ? CC.addText(zC) : zC.children && (CC.openNode(zC), zC.children.forEach((zC => this._walk(CC, zC))), CC.closeNode(zC)), CC
      }
      static _collapse(CC) {
        "string" !== typeof CC && CC.children && (CC.children.every((CC => "string" === typeof CC)) ? CC.children = [CC.children.join("")] : CC.children.forEach((CC => {
          oC._collapse(CC)
        })))
      }
    }
    class qC extends oC {
      constructor(CC) {
        super(), this.options = CC
      }
      addText(CC) {
        "" !== CC && this.add(CC)
      }
      startScope(CC) {
        this.openNode(CC)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(CC, zC) {
        const ZC = CC.root;
        zC && (ZC.scope = `language:${zC}`), this.add(ZC)
      }
      toHTML() {
        return new nC(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function FC(CC) {
      return CC ? "string" === typeof CC ? CC : CC.source : null
    }

    function WC(CC) {
      return gC("(?=", CC, ")")
    }

    function NC(CC) {
      return gC("(?:", CC, ")*")
    }

    function MC(CC) {
      return gC("(?:", CC, ")?")
    }

    function gC() {
      for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
      return zC.map((CC => FC(CC))).join("")
    }

    function SC() {
      for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
      const QC = function(CC) {
        const zC = CC[CC.length - 1];
        return "object" === typeof zC && zC.constructor === Object ? (CC.splice(CC.length - 1, 1), zC) : {}
      }(zC);
      return "(" + (QC.capture ? "" : "?:") + zC.map((CC => FC(CC))).join("|") + ")"
    }

    function pC(CC) {
      return new RegExp(CC.toString() + "|").exec("").length - 1
    }
    const PC = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function GC(CC, zC) {
      let {
        joinWith: ZC
      } = zC, QC = 0;
      return CC.map((CC => {
        QC += 1;
        const zC = QC;
        let ZC = FC(CC),
          wC = "";
        for (; ZC.length > 0;) {
          const CC = PC.exec(ZC);
          if (!CC) {
            wC += ZC;
            break
          }
          wC += ZC.substring(0, CC.index), ZC = ZC.substring(CC.index + CC[0].length), "\\" === CC[0][0] && CC[1] ? wC += "\\" + String(Number(CC[1]) + zC) : (wC += CC[0], "(" === CC[0] && QC++)
        }
        return wC
      })).map((CC => `(${CC})`)).join(ZC)
    }
    const RC = "[a-zA-Z]\\w*",
      AC = "[a-zA-Z_]\\w*",
      xC = "\\b\\d+(\\.\\d+)?",
      JC = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      IC = "\\b(0b[01]+)",
      iC = {
        RM: "\\\\[\\s\\S]",
        relevance: 0
      },
      vC = {
        scope: "string",
        RM: "'",
        end: "'",
        illegal: "\\n",
        contains: [iC]
      },
      eC = {
        scope: "string",
        RM: '"',
        end: '"',
        illegal: "\\n",
        contains: [iC]
      },
      hC = function(CC, zC) {
        const ZC = wC({
          scope: "comment",
          RM: CC,
          end: zC,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        ZC.contains.push({
          scope: "doctag",
          RM: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const QC = SC("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return ZC.contains.push({
          RM: gC(/[ ]+/, "(", QC, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), ZC
      },
      KC = hC("//", "$"),
      YC = hC("/\\*", "\\*/"),
      dC = hC("#", "$"),
      mC = {
        scope: "number",
        RM: xC,
        relevance: 0
      },
      HC = {
        scope: "number",
        RM: JC,
        relevance: 0
      },
      EC = {
        scope: "number",
        RM: IC,
        relevance: 0
      },
      lC = {
        scope: "regexp",
        RM: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [iC, {
          RM: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [iC]
        }]
      },
      XC = {
        scope: "title",
        RM: RC,
        relevance: 0
      },
      cC = {
        scope: "title",
        RM: AC,
        relevance: 0
      },
      uC = {
        RM: "\\.\\s*" + AC,
        relevance: 0
      };
    var rC = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: vC,
      BACKSLASH_ESCAPE: iC,
      BINARY_NUMBER_MODE: EC,
      BINARY_NUMBER_RE: IC,
      COMMENT: hC,
      C_BLOCK_COMMENT_MODE: YC,
      C_LINE_COMMENT_MODE: KC,
      C_NUMBER_MODE: HC,
      C_NUMBER_RE: JC,
      END_SAME_AS_BEGIN: function(CC) {
        return Object.assign(CC, {
          "on:begin": (CC, zC) => {
            zC.data._beginMatch = CC[1]
          },
          "on:end": (CC, zC) => {
            zC.data._beginMatch !== CC[1] && zC.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: dC,
      IDENT_RE: RC,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: uC,
      NUMBER_MODE: mC,
      NUMBER_RE: xC,
      PHRASAL_WORDS_MODE: {
        RM: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: eC,
      REGEXP_MODE: lC,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const zC = /^#![ ]*\//;
        return CC.binary && (CC.RM = gC(zC, /.*\b/, CC.binary, /\b.*/)), wC({
          scope: "meta",
          RM: zC,
          end: /$/,
          relevance: 0,
          "on:begin": (CC, zC) => {
            0 !== CC.index && zC.ignoreMatch()
          }
        }, CC)
      },
      TITLE_MODE: XC,
      UNDERSCORE_IDENT_RE: AC,
      UNDERSCORE_TITLE_MODE: cC
    });

    function sC(CC, zC) {
      "." === CC.input[CC.index - 1] && zC.ignoreMatch()
    }

    function TC(CC, zC) {
      void 0 !== CC.className && (CC.scope = CC.className, delete CC.className)
    }

    function aC(CC, zC) {
      zC && CC.beginKeywords && (CC.RM = "\\b(" + CC.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", CC.__beforeBegin = sC, CC.keywords = CC.keywords || CC.beginKeywords, delete CC.beginKeywords, void 0 === CC.relevance && (CC.relevance = 0))
    }

    function tC(CC, zC) {
      Array.isArray(CC.illegal) && (CC.illegal = SC(...CC.illegal))
    }

    function DC(CC, zC) {
      if (CC.match) {
        if (CC.RM || CC.end) throw new Error("begin & end are not supported with match");
        CC.RM = CC.match, delete CC.match
      }
    }

    function jC(CC, zC) {
      void 0 === CC.relevance && (CC.relevance = 1)
    }
    const yC = (CC, zC) => {
        if (!CC.beforeMatch) return;
        if (CC.starts) throw new Error("beforeMatch cannot be used with starts");
        const ZC = Object.assign({}, CC);
        Object.keys(CC).forEach((zC => {
          delete CC[zC]
        })), CC.keywords = ZC.keywords, CC.RM = gC(ZC.beforeMatch, WC(ZC.RM)), CC.starts = {
          relevance: 0,
          contains: [Object.assign(ZC, {
            endsParent: !0
          })]
        }, CC.relevance = 0, delete ZC.beforeMatch
      },
      LC = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function UC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const QC = Object.create(null);
      return "string" === typeof CC ? wC(ZC, CC.split(" ")) : Array.isArray(CC) ? wC(ZC, CC) : Object.keys(CC).forEach((function(ZC) {
        Object.assign(QC, UC(CC[ZC], zC, ZC))
      })), QC;

      function wC(CC, ZC) {
        zC && (ZC = ZC.map((CC => CC.toLowerCase()))), ZC.forEach((function(zC) {
          const ZC = zC.split("|");
          QC[ZC[0]] = [CC, BC(ZC[0], ZC[1])]
        }))
      }
    }

    function BC(CC, zC) {
      return zC ? Number(zC) : function(CC) {
        return LC.includes(CC.toLowerCase())
      }(CC) ? 0 : 1
    }
    const OC = {},
      kC = CC => {
        console.error(CC)
      },
      VC = function(CC) {
        for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
        console.log(`WARN: ${CC}`, ...ZC)
      },
      Cz = (CC, zC) => {
        OC[`${CC}/${zC}`] || (console.log(`Deprecated as of ${CC}. ${zC}`), OC[`${CC}/${zC}`] = !0)
      },
      zz = new Error;

    function Zz(CC, zC, ZC) {
      let {
        key: QC
      } = ZC, wC = 0;
      const bC = CC[QC],
        nC = {},
        fC = {};
      for (let oC = 1; oC <= zC.length; oC++) fC[oC + wC] = bC[oC], nC[oC + wC] = !0, wC += pC(zC[oC - 1]);
      CC[QC] = fC, CC[QC]._emit = nC, CC[QC]._multi = !0
    }

    function Qz(CC) {
      ! function(CC) {
        CC.scope && "object" === typeof CC.scope && null !== CC.scope && (CC.beginScope = CC.scope, delete CC.scope)
      }(CC), "string" === typeof CC.beginScope && (CC.beginScope = {
          _wrap: CC.beginScope
        }), "string" === typeof CC.endScope && (CC.endScope = {
          _wrap: CC.endScope
        }),
        function(CC) {
          if (Array.isArray(CC.RM)) {
            if (CC.skip || CC.excludeBegin || CC.returnBegin) throw kC("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), zz;
            if ("object" !== typeof CC.beginScope || null === CC.beginScope) throw kC("beginScope must be object"), zz;
            Zz(CC, CC.RM, {
              key: "beginScope"
            }), CC.RM = GC(CC.RM, {
              joinWith: ""
            })
          }
        }(CC),
        function(CC) {
          if (Array.isArray(CC.end)) {
            if (CC.skip || CC.excludeEnd || CC.returnEnd) throw kC("skip, excludeEnd, returnEnd not compatible with endScope: {}"), zz;
            if ("object" !== typeof CC.endScope || null === CC.endScope) throw kC("endScope must be object"), zz;
            Zz(CC, CC.end, {
              key: "endScope"
            }), CC.end = GC(CC.end, {
              joinWith: ""
            })
          }
        }(CC)
    }

    function wz(CC) {
      function zC(zC, ZC) {
        return new RegExp(FC(zC), "m" + (CC.case_insensitive ? "i" : "") + (CC.unicodeRegex ? "u" : "") + (ZC ? "g" : ""))
      }
      class ZC {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(CC, zC) {
          zC.position = this.position++, this.matchIndexes[this.matchAt] = zC, this.regexes.push([zC, CC]), this.matchAt += pC(CC) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const CC = this.regexes.map((CC => CC[1]));
          this.matcherRe = zC(GC(CC, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(CC) {
          this.matcherRe.lastIndex = this.lastIndex;
          const zC = this.matcherRe.exec(CC);
          if (!zC) return null;
          const ZC = zC.findIndex(((CC, zC) => zC > 0 && void 0 !== CC)),
            QC = this.matchIndexes[ZC];
          return zC.splice(0, ZC), Object.assign(zC, QC)
        }
      }
      class QC {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(CC) {
          if (this.multiRegexes[CC]) return this.multiRegexes[CC];
          const zC = new ZC;
          return this.rules.slice(CC).forEach((CC => {
            let [ZC, QC] = CC;
            return zC.addRule(ZC, QC)
          })), zC.compile(), this.multiRegexes[CC] = zC, zC
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(CC, zC) {
          this.rules.push([CC, zC]), "RM" === zC.type && this.count++
        }
        exec(CC) {
          const zC = this.getMatcher(this.regexIndex);
          zC.lastIndex = this.lastIndex;
          let ZC = zC.exec(CC);
          if (this.resumingScanAtSamePosition())
            if (ZC && ZC.index === this.lastIndex);
            else {
              const zC = this.getMatcher(0);
              zC.lastIndex = this.lastIndex + 1, ZC = zC.exec(CC)
            } return ZC && (this.regexIndex += ZC.position + 1, this.regexIndex === this.count && this.considerAll()), ZC
        }
      }
      if (CC.compilerExtensions || (CC.compilerExtensions = []), CC.contains && CC.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return CC.classNameAliases = wC(CC.classNameAliases || {}),
        function ZC(bC, nC) {
          const fC = bC;
          if (bC.isCompiled) return fC;
          [TC, DC, Qz, yC].forEach((CC => CC(bC, nC))), CC.compilerExtensions.forEach((CC => CC(bC, nC))), bC.__beforeBegin = null, [aC, tC, jC].forEach((CC => CC(bC, nC))), bC.isCompiled = !0;
          let oC = null;
          return "object" === typeof bC.keywords && bC.keywords.$pattern && (bC.keywords = Object.assign({}, bC.keywords), oC = bC.keywords.$pattern, delete bC.keywords.$pattern), oC = oC || /\w+/, bC.keywords && (bC.keywords = UC(bC.keywords, CC.case_insensitive)), fC.keywordPatternRe = zC(oC, !0), nC && (bC.RM || (bC.RM = /\B|\b/), fC.beginRe = zC(fC.RM), bC.end || bC.endsWithParent || (bC.end = /\B|\b/), bC.end && (fC.endRe = zC(fC.end)), fC.terminatorEnd = FC(fC.end) || "", bC.endsWithParent && nC.terminatorEnd && (fC.terminatorEnd += (bC.end ? "|" : "") + nC.terminatorEnd)), bC.illegal && (fC.illegalRe = zC(bC.illegal)), bC.contains || (bC.contains = []), bC.contains = [].concat(...bC.contains.map((function(CC) {
            return function(CC) {
              CC.variants && !CC.cachedVariants && (CC.cachedVariants = CC.variants.map((function(zC) {
                return wC(CC, {
                  variants: null
                }, zC)
              })));
              if (CC.cachedVariants) return CC.cachedVariants;
              if (bz(CC)) return wC(CC, {
                starts: CC.starts ? wC(CC.starts) : null
              });
              if (Object.isFrozen(CC)) return wC(CC);
              return CC
            }("self" === CC ? bC : CC)
          }))), bC.contains.forEach((function(CC) {
            ZC(CC, fC)
          })), bC.starts && ZC(bC.starts, nC), fC.matcher = function(CC) {
            const zC = new QC;
            return CC.contains.forEach((CC => zC.addRule(CC.RM, {
              rule: CC,
              type: "RM"
            }))), CC.terminatorEnd && zC.addRule(CC.terminatorEnd, {
              type: "end"
            }), CC.illegal && zC.addRule(CC.illegal, {
              type: "illegal"
            }), zC
          }(fC), fC
        }(CC)
    }

    function bz(CC) {
      return !!CC && (CC.endsWithParent || bz(CC.starts))
    }
    class nz extends Error {
      constructor(CC, zC) {
        super(CC), this.name = "HTMLInjectionError", this.html = zC
      }
    }
    const fz = QC,
      oz = wC,
      qz = Symbol("nomatch"),
      Fz = function(CC) {
        const QC = Object.create(null),
          wC = Object.create(null),
          bC = [];
        let nC = !0;
        const fC = "Could not find the language '{}', did you forget to load/include a language module?",
          oC = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let FC = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: qC
        };

        function pC(CC) {
          return FC.noHighlightRe.test(CC)
        }

        function PC(CC, zC, ZC) {
          let QC = "",
            wC = "";
          "object" === typeof zC ? (QC = CC, ZC = zC.ignoreIllegals, wC = zC.language) : (Cz("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Cz("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), wC = CC, QC = zC), void 0 === ZC && (ZC = !0);
          const bC = {
            code: QC,
            language: wC
          };
          eC("before:highlight", bC);
          const nC = bC.result ? bC.result : GC(bC.language, bC.code, ZC);
          return nC.code = bC.code, eC("after:highlight", nC), nC
        }

        function GC(CC, zC, wC, bC) {
          const oC = Object.create(null);

          function qC() {
            if (!eC.keywords) return void KC.addText(YC);
            let CC = 0;
            eC.keywordPatternRe.lastIndex = 0;
            let zC = eC.keywordPatternRe.exec(YC),
              ZC = "";
            for (; zC;) {
              ZC += YC.substring(CC, zC.index);
              const wC = JC.case_insensitive ? zC[0].toLowerCase() : zC[0],
                bC = (QC = wC, eC.keywords[QC]);
              if (bC) {
                const [CC, QC] = bC;
                if (KC.addText(ZC), ZC = "", oC[wC] = (oC[wC] || 0) + 1, oC[wC] <= 7 && (dC += QC), CC.startsWith("_")) ZC += zC[0];
                else {
                  const ZC = JC.classNameAliases[CC] || CC;
                  NC(zC[0], ZC)
                }
              } else ZC += zC[0];
              CC = eC.keywordPatternRe.lastIndex, zC = eC.keywordPatternRe.exec(YC)
            }
            var QC;
            ZC += YC.substring(CC), KC.addText(ZC)
          }

          function WC() {
            null != eC.subLanguage ? function() {
              if ("" === YC) return;
              let CC = null;
              if ("string" === typeof eC.subLanguage) {
                if (!QC[eC.subLanguage]) return void KC.addText(YC);
                CC = GC(eC.subLanguage, YC, !0, hC[eC.subLanguage]), hC[eC.subLanguage] = CC._top
              } else CC = RC(YC, eC.subLanguage.length ? eC.subLanguage : null);
              eC.relevance > 0 && (dC += CC.relevance), KC.__addSublanguage(CC._emitter, CC.language)
            }() : qC(), YC = ""
          }

          function NC(CC, zC) {
            "" !== CC && (KC.startScope(zC), KC.addText(CC), KC.endScope())
          }

          function MC(CC, zC) {
            let ZC = 1;
            const QC = zC.length - 1;
            for (; ZC <= QC;) {
              if (!CC._emit[ZC]) {
                ZC++;
                continue
              }
              const QC = JC.classNameAliases[CC[ZC]] || CC[ZC],
                wC = zC[ZC];
              QC ? NC(wC, QC) : (YC = wC, qC(), YC = ""), ZC++
            }
          }

          function gC(CC, zC) {
            return CC.scope && "string" === typeof CC.scope && KC.openNode(JC.classNameAliases[CC.scope] || CC.scope), CC.beginScope && (CC.beginScope._wrap ? (NC(YC, JC.classNameAliases[CC.beginScope._wrap] || CC.beginScope._wrap), YC = "") : CC.beginScope._multi && (MC(CC.beginScope, zC), YC = "")), eC = Object.create(CC, {
              parent: {
                value: eC
              }
            }), eC
          }

          function SC(CC, zC, QC) {
            let wC = function(CC, zC) {
              const ZC = CC && CC.exec(zC);
              return ZC && 0 === ZC.index
            }(CC.endRe, QC);
            if (wC) {
              if (CC["on:end"]) {
                const QC = new ZC(CC);
                CC["on:end"](zC, QC), QC.isMatchIgnored && (wC = !1)
              }
              if (wC) {
                for (; CC.endsParent && CC.parent;) CC = CC.parent;
                return CC
              }
            }
            if (CC.endsWithParent) return SC(CC.parent, zC, QC)
          }

          function pC(CC) {
            return 0 === eC.matcher.regexIndex ? (YC += CC[0], 1) : (EC = !0, 0)
          }

          function PC(CC) {
            const ZC = CC[0],
              QC = zC.substring(CC.index),
              wC = SC(eC, CC, QC);
            if (!wC) return qz;
            const bC = eC;
            eC.endScope && eC.endScope._wrap ? (WC(), NC(ZC, eC.endScope._wrap)) : eC.endScope && eC.endScope._multi ? (WC(), MC(eC.endScope, CC)) : bC.skip ? YC += ZC : (bC.returnEnd || bC.excludeEnd || (YC += ZC), WC(), bC.excludeEnd && (YC = ZC));
            do {
              eC.scope && KC.closeNode(), eC.skip || eC.subLanguage || (dC += eC.relevance), eC = eC.parent
            } while (eC !== wC.parent);
            return wC.starts && gC(wC.starts, CC), bC.returnEnd ? 0 : ZC.length
          }
          let AC = {};

          function xC(QC, bC) {
            const fC = bC && bC[0];
            if (YC += QC, null == fC) return WC(), 0;
            if ("RM" === AC.type && "end" === bC.type && AC.index === bC.index && "" === fC) {
              if (YC += zC.slice(bC.index, bC.index + 1), !nC) {
                const zC = new Error(`0 width match regex (${CC})`);
                throw zC.languageName = CC, zC.badRule = AC.rule, zC
              }
              return 1
            }
            if (AC = bC, "RM" === bC.type) return function(CC) {
              const zC = CC[0],
                QC = CC.rule,
                wC = new ZC(QC),
                bC = [QC.__beforeBegin, QC["on:begin"]];
              for (const ZC of bC)
                if (ZC && (ZC(CC, wC), wC.isMatchIgnored)) return pC(zC);
              return QC.skip ? YC += zC : (QC.excludeBegin && (YC += zC), WC(), QC.returnBegin || QC.excludeBegin || (YC = zC)), gC(QC, CC), QC.returnBegin ? 0 : zC.length
            }(bC);
            if ("illegal" === bC.type && !wC) {
              const CC = new Error('Illegal lexeme "' + fC + '" for mode "' + (eC.scope || "<unnamed>") + '"');
              throw CC.mode = eC, CC
            }
            if ("end" === bC.type) {
              const CC = PC(bC);
              if (CC !== qz) return CC
            }
            if ("illegal" === bC.type && "" === fC) return YC += "\n", 1;
            if (HC > 1e5 && HC > 3 * bC.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return YC += fC, fC.length
          }
          const JC = IC(CC);
          if (!JC) throw kC(fC.replace("{}", CC)), new Error('Unknown language: "' + CC + '"');
          const iC = wz(JC);
          let vC = "",
            eC = bC || iC;
          const hC = {},
            KC = new FC.__emitter(FC);
          ! function() {
            const CC = [];
            for (let zC = eC; zC !== JC; zC = zC.parent) zC.scope && CC.unshift(zC.scope);
            CC.forEach((CC => KC.openNode(CC)))
          }();
          let YC = "",
            dC = 0,
            mC = 0,
            HC = 0,
            EC = !1;
          try {
            if (JC.__emitTokens) JC.__emitTokens(zC, KC);
            else {
              for (eC.matcher.considerAll();;) {
                HC++, EC ? EC = !1 : eC.matcher.considerAll(), eC.matcher.lastIndex = mC;
                const CC = eC.matcher.exec(zC);
                if (!CC) break;
                const ZC = xC(zC.substring(mC, CC.index), CC);
                mC = CC.index + ZC
              }
              xC(zC.substring(mC))
            }
            return KC.finalize(), vC = KC.toHTML(), {
              language: CC,
              value: vC,
              relevance: dC,
              illegal: !1,
              _emitter: KC,
              _top: eC
            }
          } catch (lC) {
            if (lC.message && lC.message.includes("Illegal")) return {
              language: CC,
              value: fz(zC),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: lC.message,
                index: mC,
                context: zC.slice(mC - 100, mC + 100),
                mode: lC.mode,
                resultSoFar: vC
              },
              _emitter: KC
            };
            if (nC) return {
              language: CC,
              value: fz(zC),
              illegal: !1,
              relevance: 0,
              errorRaised: lC,
              _emitter: KC,
              _top: eC
            };
            throw lC
          }
        }

        function RC(CC, zC) {
          zC = zC || FC.languages || Object.keys(QC);
          const ZC = function(CC) {
              const zC = {
                value: fz(CC),
                illegal: !1,
                relevance: 0,
                _top: oC,
                _emitter: new FC.__emitter(FC)
              };
              return zC._emitter.addText(CC), zC
            }(CC),
            wC = zC.filter(IC).filter(vC).map((zC => GC(zC, CC, !1)));
          wC.unshift(ZC);
          const bC = wC.sort(((CC, zC) => {
              if (CC.relevance !== zC.relevance) return zC.relevance - CC.relevance;
              if (CC.language && zC.language) {
                if (IC(CC.language).supersetOf === zC.language) return 1;
                if (IC(zC.language).supersetOf === CC.language) return -1
              }
              return 0
            })),
            [nC, fC] = bC,
            qC = nC;
          return qC.secondBest = fC, qC
        }

        function AC(CC) {
          let zC = null;
          const ZC = function(CC) {
            let zC = CC.className + " ";
            zC += CC.parentNode ? CC.parentNode.className : "";
            const ZC = FC.languageDetectRe.exec(zC);
            if (ZC) {
              const zC = IC(ZC[1]);
              return zC || (VC(fC.replace("{}", ZC[1])), VC("Falling back to no-highlight mode for this block.", CC)), zC ? ZC[1] : "no-highlight"
            }
            return zC.split(/\s+/).find((CC => pC(CC) || IC(CC)))
          }(CC);
          if (pC(ZC)) return;
          if (eC("before:highlightElement", {
              el: CC,
              language: ZC
            }), CC.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", CC);
          if (CC.children.length > 0 && (FC.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(CC)), FC.throwUnescapedHTML)) {
            throw new nz("One of your code blocks includes unescaped HTML.", CC.innerHTML)
          }
          zC = CC;
          const QC = zC.textContent,
            bC = ZC ? PC(QC, {
              language: ZC,
              ignoreIllegals: !0
            }) : RC(QC);
          CC.innerHTML = bC.value, CC.dataset.highlighted = "yes",
            function(CC, zC, ZC) {
              const QC = zC && wC[zC] || ZC;
              CC.classList.add("hljs"), CC.classList.add(`language-${QC}`)
            }(CC, ZC, bC.language), CC.result = {
              language: bC.language,
              re: bC.relevance,
              relevance: bC.relevance
            }, bC.secondBest && (CC.secondBest = {
              language: bC.secondBest.language,
              relevance: bC.secondBest.relevance
            }), eC("after:highlightElement", {
              el: CC,
              result: bC,
              text: QC
            })
        }
        let xC = !1;

        function JC() {
          if ("loading" === document.readyState) return xC || window.addEventListener("DOMContentLoaded", (function() {
            JC()
          }), !1), void(xC = !0);
          document.querySelectorAll(FC.cssSelector).forEach(AC)
        }

        function IC(CC) {
          return CC = (CC || "").toLowerCase(), QC[CC] || QC[wC[CC]]
        }

        function iC(CC, zC) {
          let {
            languageName: ZC
          } = zC;
          "string" === typeof CC && (CC = [CC]), CC.forEach((CC => {
            wC[CC.toLowerCase()] = ZC
          }))
        }

        function vC(CC) {
          const zC = IC(CC);
          return zC && !zC.disableAutodetect
        }

        function eC(CC, zC) {
          const ZC = CC;
          bC.forEach((function(CC) {
            CC[ZC] && CC[ZC](zC)
          }))
        }
        Object.assign(CC, {
          highlight: PC,
          highlightAuto: RC,
          highlightAll: JC,
          highlightElement: AC,
          highlightBlock: function(CC) {
            return Cz("10.7.0", "highlightBlock will be removed entirely in v12.0"), Cz("10.7.0", "Please use highlightElement now."), AC(CC)
          },
          configure: function(CC) {
            FC = oz(FC, CC)
          },
          initHighlighting: () => {
            JC(), Cz("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            JC(), Cz("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(zC, ZC) {
            let wC = null;
            try {
              wC = ZC(CC)
            } catch (bC) {
              if (kC("Language definition for '{}' could not be registered.".replace("{}", zC)), !nC) throw bC;
              kC(bC), wC = oC
            }
            wC.name || (wC.name = zC), QC[zC] = wC, wC.rawDefinition = ZC.bind(null, CC), wC.aliases && iC(wC.aliases, {
              languageName: zC
            })
          },
          unregisterLanguage: function(CC) {
            delete QC[CC];
            for (const zC of Object.keys(wC)) wC[zC] === CC && delete wC[zC]
          },
          listLanguages: function() {
            return Object.keys(QC)
          },
          getLanguage: IC,
          registerAliases: iC,
          autoDetection: vC,
          inherit: oz,
          addPlugin: function(CC) {
            ! function(CC) {
              CC["before:highlightBlock"] && !CC["before:highlightElement"] && (CC["before:highlightElement"] = zC => {
                CC["before:highlightBlock"](Object.assign({
                  block: zC.el
                }, zC))
              }), CC["after:highlightBlock"] && !CC["after:highlightElement"] && (CC["after:highlightElement"] = zC => {
                CC["after:highlightBlock"](Object.assign({
                  block: zC.el
                }, zC))
              })
            }(CC), bC.push(CC)
          },
          removePlugin: function(CC) {
            const zC = bC.indexOf(CC); - 1 !== zC && bC.splice(zC, 1)
          }
        }), CC.debugMode = function() {
          nC = !1
        }, CC.safeMode = function() {
          nC = !0
        }, CC.versionString = "11.11.1", CC.regex = {
          concat: gC,
          lookahead: WC,
          either: SC,
          optional: MC,
          anyNumberOfTimes: NC
        };
        for (const ZC in rC) "object" === typeof rC[ZC] && zC(rC[ZC]);
        return Object.assign(CC, rC), CC
      },
      Wz = Fz({});
    Wz.newInstance = () => Fz({}), CC.exports = Wz, Wz.HighlightJS = Wz, Wz.default = Wz
  },
  4657: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    const QC = ZC(4661)
  },
  4668: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => WC
    });
    const QC = "[A-Za-z$_][0-9A-Za-z$_]*",
      wC = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      bC = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      nC = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      fC = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      oC = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      qC = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      FC = [].concat(oC, nC, fC);

    function WC(CC) {
      const zC = CC.regex,
        ZC = QC,
        WC = "<>",
        NC = "</>",
        MC = {
          RM: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (CC, zC) => {
            const ZC = CC[0].length + CC.index,
              QC = CC.input[ZC];
            if ("<" === QC || "," === QC) return void zC.ignoreMatch();
            let wC;
            ">" === QC && (((CC, zC) => {
              let {
                after: ZC
              } = zC;
              const QC = "</" + CC[0].slice(1);
              return -1 !== CC.input.indexOf(QC, ZC)
            })(CC, {
              after: ZC
            }) || zC.ignoreMatch());
            const bC = CC.input.substring(ZC);
            ((wC = bC.match(/^\s*=/)) || (wC = bC.match(/^\s+extends\s+/)) && 0 === wC.index) && zC.ignoreMatch()
          }
        },
        gC = {
          $pattern: QC,
          keyword: wC,
          literal: bC,
          built_in: FC,
          "variable.language": qC
        },
        SC = "[0-9](_?[0-9])*",
        pC = `\\.(${SC})`,
        PC = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        GC = {
          className: "number",
          variants: [{
            RM: `(\\b(${PC})((${pC})|\\.)?|(${pC}))[eE][+-]?(${SC})\\b`
          }, {
            RM: `\\b(${PC})\\b((${pC})\\b|\\.)?|(${pC})\\b`
          }, {
            RM: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            RM: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            RM: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            RM: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            RM: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        RC = {
          className: "subst",
          RM: "\\$\\{",
          end: "\\}",
          keywords: gC,
          contains: []
        },
        AC = {
          RM: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [CC.BACKSLASH_ESCAPE, RC],
            subLanguage: "xml"
          }
        },
        xC = {
          RM: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [CC.BACKSLASH_ESCAPE, RC],
            subLanguage: "css"
          }
        },
        JC = {
          RM: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [CC.BACKSLASH_ESCAPE, RC],
            subLanguage: "graphql"
          }
        },
        IC = {
          className: "string",
          RM: "`",
          end: "`",
          contains: [CC.BACKSLASH_ESCAPE, RC]
        },
        iC = {
          className: "comment",
          variants: [CC.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              RM: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                RM: "@[A-Za-z]+"
              }, {
                className: "type",
                RM: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                RM: ZC + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                RM: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), CC.C_BLOCK_COMMENT_MODE, CC.C_LINE_COMMENT_MODE]
        },
        vC = [CC.APOS_STRING_MODE, CC.QUOTE_STRING_MODE, AC, xC, JC, IC, {
          match: /\$\d+/
        }, GC];
      RC.contains = vC.concat({
        RM: /\{/,
        end: /\}/,
        keywords: gC,
        contains: ["self"].concat(vC)
      });
      const eC = [].concat(iC, RC.contains),
        hC = eC.concat([{
          RM: /(\s*)\(/,
          end: /\)/,
          keywords: gC,
          contains: ["self"].concat(eC)
        }]),
        KC = {
          className: "params",
          RM: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: gC,
          contains: hC
        },
        YC = {
          variants: [{
            match: [/class/, /\s+/, ZC, /\s+/, /extends/, /\s+/, zC.concat(ZC, "(", zC.concat(/\./, ZC), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ZC],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        dC = {
          relevance: 0,
          match: zC.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...nC, ...fC]
          }
        },
        mC = {
          variants: [{
            match: [/function/, /\s+/, ZC, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [KC],
          illegal: /%/
        };
      const HC = {
        match: zC.concat(/\b/, (EC = [...oC, "super", "import"].map((CC => `${CC}\\s*\\(`)), zC.concat("(?!", EC.join("|"), ")")), ZC, zC.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var EC;
      const lC = {
          RM: zC.concat(/\./, zC.lookahead(zC.concat(ZC, /(?![0-9A-Za-z$_(])/))),
          end: ZC,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        XC = {
          match: [/get|set/, /\s+/, ZC, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            RM: /\(\)/
          }, KC]
        },
        cC = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + CC.UNDERSCORE_IDENT_RE + ")\\s*=>",
        uC = {
          match: [/const|var|let/, /\s+/, ZC, /\s*/, /=\s*/, /(async\s*)?/, zC.lookahead(cC)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [KC]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: gC,
        exports: {
          PARAMS_CONTAINS: hC,
          CLASS_REFERENCE: dC
        },
        illegal: /#(?![$_A-z])/,
        contains: [CC.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          RM: /^\s*['"]use (strict|asm)['"]/
        }, CC.APOS_STRING_MODE, CC.QUOTE_STRING_MODE, AC, xC, JC, IC, iC, {
          match: /\$\d+/
        }, GC, dC, {
          scope: "attr",
          match: ZC + zC.lookahead(":"),
          relevance: 0
        }, uC, {
          RM: "(" + CC.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [iC, CC.REGEXP_MODE, {
            className: "function",
            RM: cC,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                RM: CC.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                RM: /\(\s*\)/,
                skip: !0
              }, {
                RM: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: gC,
                contains: hC
              }]
            }]
          }, {
            RM: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              RM: WC,
              end: NC
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              RM: MC.RM,
              "on:begin": MC.isTrulyOpeningTag,
              end: MC.end
            }],
            subLanguage: "xml",
            contains: [{
              RM: MC.RM,
              end: MC.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, mC, {
          beginKeywords: "while if switch catch for"
        }, {
          RM: "\\b(?!function)" + CC.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [KC, CC.inherit(CC.TITLE_MODE, {
            RM: ZC,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, lC, {
          match: "\\$" + ZC,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [KC]
        }, HC, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, YC, XC, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4672: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => NC
    });
    const QC = "[A-Za-z$_][0-9A-Za-z$_]*",
      wC = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      bC = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      nC = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      fC = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      oC = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      qC = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      FC = [].concat(oC, nC, fC);

    function WC(CC) {
      const zC = CC.regex,
        ZC = QC,
        WC = "<>",
        NC = "</>",
        MC = {
          RM: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (CC, zC) => {
            const ZC = CC[0].length + CC.index,
              QC = CC.input[ZC];
            if ("<" === QC || "," === QC) return void zC.ignoreMatch();
            let wC;
            ">" === QC && (((CC, zC) => {
              let {
                after: ZC
              } = zC;
              const QC = "</" + CC[0].slice(1);
              return -1 !== CC.input.indexOf(QC, ZC)
            })(CC, {
              after: ZC
            }) || zC.ignoreMatch());
            const bC = CC.input.substring(ZC);
            ((wC = bC.match(/^\s*=/)) || (wC = bC.match(/^\s+extends\s+/)) && 0 === wC.index) && zC.ignoreMatch()
          }
        },
        gC = {
          $pattern: QC,
          keyword: wC,
          literal: bC,
          built_in: FC,
          "variable.language": qC
        },
        SC = "[0-9](_?[0-9])*",
        pC = `\\.(${SC})`,
        PC = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        GC = {
          className: "number",
          variants: [{
            RM: `(\\b(${PC})((${pC})|\\.)?|(${pC}))[eE][+-]?(${SC})\\b`
          }, {
            RM: `\\b(${PC})\\b((${pC})\\b|\\.)?|(${pC})\\b`
          }, {
            RM: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            RM: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            RM: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            RM: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            RM: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        RC = {
          className: "subst",
          RM: "\\$\\{",
          end: "\\}",
          keywords: gC,
          contains: []
        },
        AC = {
          RM: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [CC.BACKSLASH_ESCAPE, RC],
            subLanguage: "xml"
          }
        },
        xC = {
          RM: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [CC.BACKSLASH_ESCAPE, RC],
            subLanguage: "css"
          }
        },
        JC = {
          RM: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [CC.BACKSLASH_ESCAPE, RC],
            subLanguage: "graphql"
          }
        },
        IC = {
          className: "string",
          RM: "`",
          end: "`",
          contains: [CC.BACKSLASH_ESCAPE, RC]
        },
        iC = {
          className: "comment",
          variants: [CC.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              RM: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                RM: "@[A-Za-z]+"
              }, {
                className: "type",
                RM: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                RM: ZC + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                RM: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), CC.C_BLOCK_COMMENT_MODE, CC.C_LINE_COMMENT_MODE]
        },
        vC = [CC.APOS_STRING_MODE, CC.QUOTE_STRING_MODE, AC, xC, JC, IC, {
          match: /\$\d+/
        }, GC];
      RC.contains = vC.concat({
        RM: /\{/,
        end: /\}/,
        keywords: gC,
        contains: ["self"].concat(vC)
      });
      const eC = [].concat(iC, RC.contains),
        hC = eC.concat([{
          RM: /(\s*)\(/,
          end: /\)/,
          keywords: gC,
          contains: ["self"].concat(eC)
        }]),
        KC = {
          className: "params",
          RM: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: gC,
          contains: hC
        },
        YC = {
          variants: [{
            match: [/class/, /\s+/, ZC, /\s+/, /extends/, /\s+/, zC.concat(ZC, "(", zC.concat(/\./, ZC), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ZC],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        dC = {
          relevance: 0,
          match: zC.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...nC, ...fC]
          }
        },
        mC = {
          variants: [{
            match: [/function/, /\s+/, ZC, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [KC],
          illegal: /%/
        };
      const HC = {
        match: zC.concat(/\b/, (EC = [...oC, "super", "import"].map((CC => `${CC}\\s*\\(`)), zC.concat("(?!", EC.join("|"), ")")), ZC, zC.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var EC;
      const lC = {
          RM: zC.concat(/\./, zC.lookahead(zC.concat(ZC, /(?![0-9A-Za-z$_(])/))),
          end: ZC,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        XC = {
          match: [/get|set/, /\s+/, ZC, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            RM: /\(\)/
          }, KC]
        },
        cC = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + CC.UNDERSCORE_IDENT_RE + ")\\s*=>",
        uC = {
          match: [/const|var|let/, /\s+/, ZC, /\s*/, /=\s*/, /(async\s*)?/, zC.lookahead(cC)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [KC]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: gC,
        exports: {
          PARAMS_CONTAINS: hC,
          CLASS_REFERENCE: dC
        },
        illegal: /#(?![$_A-z])/,
        contains: [CC.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          RM: /^\s*['"]use (strict|asm)['"]/
        }, CC.APOS_STRING_MODE, CC.QUOTE_STRING_MODE, AC, xC, JC, IC, iC, {
          match: /\$\d+/
        }, GC, dC, {
          scope: "attr",
          match: ZC + zC.lookahead(":"),
          relevance: 0
        }, uC, {
          RM: "(" + CC.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [iC, CC.REGEXP_MODE, {
            className: "function",
            RM: cC,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                RM: CC.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                RM: /\(\s*\)/,
                skip: !0
              }, {
                RM: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: gC,
                contains: hC
              }]
            }]
          }, {
            RM: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              RM: WC,
              end: NC
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              RM: MC.RM,
              "on:begin": MC.isTrulyOpeningTag,
              end: MC.end
            }],
            subLanguage: "xml",
            contains: [{
              RM: MC.RM,
              end: MC.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, mC, {
          beginKeywords: "while if switch catch for"
        }, {
          RM: "\\b(?!function)" + CC.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [KC, CC.inherit(CC.TITLE_MODE, {
            RM: ZC,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, lC, {
          match: "\\$" + ZC,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [KC]
        }, HC, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, YC, XC, {
          match: /\$[(.]/
        }]
      }
    }

    function NC(CC) {
      const zC = CC.regex,
        ZC = WC(CC),
        nC = QC,
        fC = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        oC = {
          RM: [/namespace/, /\s+/, CC.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        NC = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: fC
          },
          contains: [ZC.exports.CLASS_REFERENCE]
        },
        MC = {
          $pattern: QC,
          keyword: wC.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: bC,
          built_in: FC.concat(fC),
          "variable.language": qC
        },
        gC = {
          className: "meta",
          RM: "@" + nC
        },
        SC = (CC, zC, ZC) => {
          const QC = CC.contains.findIndex((CC => CC.label === zC));
          if (-1 === QC) throw new Error("can not find mode to replace");
          CC.contains.splice(QC, 1, ZC)
        };
      Object.assign(ZC.keywords, MC), ZC.exports.PARAMS_CONTAINS.push(gC);
      const pC = ZC.contains.find((CC => "attr" === CC.scope)),
        PC = Object.assign({}, pC, {
          match: zC.concat(nC, zC.lookahead(/\s*\?:/))
        });
      ZC.exports.PARAMS_CONTAINS.push([ZC.exports.CLASS_REFERENCE, pC, PC]), ZC.contains = ZC.contains.concat([gC, oC, NC, PC]), SC(ZC, "shebang", CC.SHEBANG()), SC(ZC, "use_strict", {
        className: "meta",
        relevance: 10,
        RM: /^\s*['"]use strict['"]/
      });
      return ZC.contains.find((CC => "func.def" === CC.label)).relevance = 0, Object.assign(ZC, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), ZC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);