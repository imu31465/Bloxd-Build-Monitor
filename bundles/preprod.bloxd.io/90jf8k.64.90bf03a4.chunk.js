export const id = 64;
export const ids = [64];
export const modules = {
  3712: FF => {
    function WF(FF) {
      return FF instanceof Map ? FF.clear = FF.delete = FF.set = function() {
        throw new Error("map is read-only")
      } : FF instanceof Set && (FF.add = FF.clear = FF.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(FF), Object.getOwnPropertyNames(FF).forEach((SF => {
        const CF = FF[SF],
          AF = typeof CF;
        "object" !== AF && "function" !== AF || Object.isFrozen(CF) || WF(CF)
      })), FF
    }
    class SF {
      constructor(FF) {
        void 0 === FF.data && (FF.data = {}), this.data = FF.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function CF(FF) {
      return FF.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function AF(FF) {
      const WF = Object.create(null);
      for (const uF in FF) WF[uF] = FF[uF];
      for (var SF = arguments.length, CF = new Array(SF > 1 ? SF - 1 : 0), AF = 1; AF < SF; AF++) CF[AF - 1] = arguments[AF];
      return CF.forEach((function(FF) {
        for (const SF in FF) WF[SF] = FF[SF]
      })), WF
    }
    const uF = FF => !!FF.scope;
    class hF {
      constructor(FF, WF) {
        this.buffer = "", this.classPrefix = WF.classPrefix, FF.walk(this)
      }
      addText(FF) {
        this.buffer += CF(FF)
      }
      openNode(FF) {
        if (!uF(FF)) return;
        const WF = ((FF, WF) => {
          let {
            prefix: SF
          } = WF;
          if (FF.startsWith("language:")) return FF.replace("language:", "language-");
          if (FF.includes(".")) {
            const WF = FF.split(".");
            return [`${SF}${WF.shift()}`, ...WF.map(((FF, WF) => `${FF}${"_".repeat(WF+1)}`))].join(" ")
          }
          return `${SF}${FF}`
        })(FF.scope, {
          prefix: this.classPrefix
        });
        this.span(WF)
      }
      closeNode(FF) {
        uF(FF) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(FF) {
        this.buffer += `<span class="${FF}">`
      }
    }
    const bW = function() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const WF = {
        children: []
      };
      return Object.assign(WF, FF), WF
    };
    class dF {
      constructor() {
        this.qL = bW(), this.stack = [this.qL]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.qL
      }
      add(FF) {
        this.top.children.push(FF)
      }
      openNode(FF) {
        const WF = bW({
          scope: FF
        });
        this.add(WF), this.stack.push(WF)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.qL, null, 4)
      }
      walk(FF) {
        return this.constructor._walk(FF, this.qL)
      }
      static _walk(FF, WF) {
        return "string" === typeof WF ? FF.addText(WF) : WF.children && (FF.openNode(WF), WF.children.forEach((WF => this._walk(FF, WF))), FF.closeNode(WF)), FF
      }
      static _collapse(FF) {
        "string" !== typeof FF && FF.children && (FF.children.every((FF => "string" === typeof FF)) ? FF.children = [FF.children.join("")] : FF.children.forEach((FF => {
          dF._collapse(FF)
        })))
      }
    }
    class PF extends dF {
      constructor(FF) {
        super(), this.options = FF
      }
      addText(FF) {
        "" !== FF && this.add(FF)
      }
      startScope(FF) {
        this.openNode(FF)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(FF, WF) {
        const SF = FF.root;
        WF && (SF.scope = `language:${WF}`), this.add(SF)
      }
      toHTML() {
        return new hF(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function RF(FF) {
      return FF ? "string" === typeof FF ? FF : FF.source : null
    }

    function iW(FF) {
      return QF("(?=", FF, ")")
    }

    function eF(FF) {
      return QF("(?:", FF, ")*")
    }

    function EF(FF) {
      return QF("(?:", FF, ")?")
    }

    function QF() {
      for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
      return WF.map((FF => RF(FF))).join("")
    }

    function rW() {
      for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
      const CF = function(FF) {
        const WF = FF[FF.length - 1];
        return "object" === typeof WF && WF.constructor === Object ? (FF.splice(FF.length - 1, 1), WF) : {}
      }(WF);
      return "(" + (CF.capture ? "" : "?:") + WF.map((FF => RF(FF))).join("|") + ")"
    }

    function gW(FF) {
      return new RegExp(FF.toString() + "|").exec("").length - 1
    }
    const tW = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function TF(FF, WF) {
      let {
        joinWith: SF
      } = WF, CF = 0;
      return FF.map((FF => {
        CF += 1;
        const WF = CF;
        let SF = RF(FF),
          AF = "";
        for (; SF.length > 0;) {
          const FF = tW.exec(SF);
          if (!FF) {
            AF += SF;
            break
          }
          AF += SF.substring(0, FF.index), SF = SF.substring(FF.index + FF[0].length), "\\" === FF[0][0] && FF[1] ? AF += "\\" + String(Number(FF[1]) + WF) : (AF += FF[0], "(" === FF[0] && CF++)
        }
        return AF
      })).map((FF => `(${FF})`)).join(SF)
    }
    const aW = "[a-zA-Z]\\w*",
      kW = "[a-zA-Z_]\\w*",
      qW = "\\b\\d+(\\.\\d+)?",
      VF = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      NF = "\\b(0b[01]+)",
      DF = {
        aC: "\\\\[\\s\\S]",
        relevance: 0
      },
      LF = {
        scope: "string",
        aC: "'",
        end: "'",
        illegal: "\\n",
        contains: [DF]
      },
      mW = {
        scope: "string",
        aC: '"',
        end: '"',
        illegal: "\\n",
        contains: [DF]
      },
      OF = function(FF, WF) {
        const SF = AF({
          scope: "comment",
          aC: FF,
          end: WF,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        SF.contains.push({
          scope: "doctag",
          aC: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const CF = rW("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return SF.contains.push({
          aC: QF(/[ ]+/, "(", CF, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), SF
      },
      xW = OF("//", "$"),
      ZF = OF("/\\*", "\\*/"),
      oF = OF("#", "$"),
      YF = {
        scope: "number",
        aC: qW,
        relevance: 0
      },
      MF = {
        scope: "number",
        aC: VF,
        relevance: 0
      },
      cW = {
        scope: "number",
        aC: NF,
        relevance: 0
      },
      GF = {
        scope: "regexp",
        aC: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [DF, {
          aC: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [DF]
        }]
      },
      zW = {
        scope: "title",
        aC: aW,
        relevance: 0
      },
      IF = {
        scope: "title",
        aC: kW,
        relevance: 0
      },
      fF = {
        aC: "\\.\\s*" + kW,
        relevance: 0
      };
    var yW = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: LF,
      BACKSLASH_ESCAPE: DF,
      BINARY_NUMBER_MODE: cW,
      BINARY_NUMBER_RE: NF,
      COMMENT: OF,
      C_BLOCK_COMMENT_MODE: ZF,
      C_LINE_COMMENT_MODE: xW,
      C_NUMBER_MODE: MF,
      C_NUMBER_RE: VF,
      END_SAME_AS_BEGIN: function(FF) {
        return Object.assign(FF, {
          "on:begin": (FF, WF) => {
            WF.data._beginMatch = FF[1]
          },
          "on:end": (FF, WF) => {
            WF.data._beginMatch !== FF[1] && WF.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: oF,
      IDENT_RE: aW,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: fF,
      NUMBER_MODE: YF,
      NUMBER_RE: qW,
      PHRASAL_WORDS_MODE: {
        aC: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: mW,
      REGEXP_MODE: GF,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const WF = /^#![ ]*\//;
        return FF.binary && (FF.aC = QF(WF, /.*\b/, FF.binary, /\b.*/)), AF({
          scope: "meta",
          aC: WF,
          end: /$/,
          relevance: 0,
          "on:begin": (FF, WF) => {
            0 !== FF.index && WF.ignoreMatch()
          }
        }, FF)
      },
      TITLE_MODE: zW,
      UNDERSCORE_IDENT_RE: kW,
      UNDERSCORE_TITLE_MODE: IF
    });

    function sF(FF, WF) {
      "." === FF.input[FF.index - 1] && WF.ignoreMatch()
    }

    function nF(FF, WF) {
      void 0 !== FF.className && (FF.scope = FF.className, delete FF.className)
    }

    function HF(FF, WF) {
      WF && FF.beginKeywords && (FF.aC = "\\b(" + FF.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", FF.__beforeBegin = sF, FF.keywords = FF.keywords || FF.beginKeywords, delete FF.beginKeywords, void 0 === FF.relevance && (FF.relevance = 0))
    }

    function KF(FF, WF) {
      Array.isArray(FF.illegal) && (FF.illegal = rW(...FF.illegal))
    }

    function wF(FF, WF) {
      if (FF.match) {
        if (FF.aC || FF.end) throw new Error("begin & end are not supported with match");
        FF.aC = FF.match, delete FF.match
      }
    }

    function XF(FF, WF) {
      void 0 === FF.relevance && (FF.relevance = 1)
    }
    const UF = (FF, WF) => {
        if (!FF.beforeMatch) return;
        if (FF.starts) throw new Error("beforeMatch cannot be used with starts");
        const SF = Object.assign({}, FF);
        Object.keys(FF).forEach((WF => {
          delete FF[WF]
        })), FF.keywords = SF.keywords, FF.aC = QF(SF.beforeMatch, iW(SF.aC)), FF.starts = {
          relevance: 0,
          contains: [Object.assign(SF, {
            endsParent: !0
          })]
        }, FF.relevance = 0, delete SF.beforeMatch
      },
      BF = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function jW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const CF = Object.create(null);
      return "string" === typeof FF ? AF(SF, FF.split(" ")) : Array.isArray(FF) ? AF(SF, FF) : Object.keys(FF).forEach((function(SF) {
        Object.assign(CF, jW(FF[SF], WF, SF))
      })), CF;

      function AF(FF, SF) {
        WF && (SF = SF.map((FF => FF.toLowerCase()))), SF.forEach((function(WF) {
          const SF = WF.split("|");
          CF[SF[0]] = [FF, vW(SF[0], SF[1])]
        }))
      }
    }

    function vW(FF, WF) {
      return WF ? Number(WF) : function(FF) {
        return BF.includes(FF.toLowerCase())
      }(FF) ? 0 : 1
    }
    const JF = {},
      pF = FF => {
        console.error(FF)
      },
      lF = function(FF) {
        for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
        console.log(`WARN: ${FF}`, ...SF)
      },
      FW = (FF, WF) => {
        JF[`${FF}/${WF}`] || (console.log(`Deprecated as of ${FF}. ${WF}`), JF[`${FF}/${WF}`] = !0)
      },
      WW = new Error;

    function SW(FF, WF, SF) {
      let {
        key: CF
      } = SF, AF = 0;
      const uF = FF[CF],
        hF = {},
        bW = {};
      for (let dF = 1; dF <= WF.length; dF++) bW[dF + AF] = uF[dF], hF[dF + AF] = !0, AF += gW(WF[dF - 1]);
      FF[CF] = bW, FF[CF]._emit = hF, FF[CF]._multi = !0
    }

    function CW(FF) {
      ! function(FF) {
        FF.scope && "object" === typeof FF.scope && null !== FF.scope && (FF.beginScope = FF.scope, delete FF.scope)
      }(FF), "string" === typeof FF.beginScope && (FF.beginScope = {
          _wrap: FF.beginScope
        }), "string" === typeof FF.endScope && (FF.endScope = {
          _wrap: FF.endScope
        }),
        function(FF) {
          if (Array.isArray(FF.aC)) {
            if (FF.skip || FF.excludeBegin || FF.returnBegin) throw pF("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), WW;
            if ("object" !== typeof FF.beginScope || null === FF.beginScope) throw pF("beginScope must be object"), WW;
            SW(FF, FF.aC, {
              key: "beginScope"
            }), FF.aC = TF(FF.aC, {
              joinWith: ""
            })
          }
        }(FF),
        function(FF) {
          if (Array.isArray(FF.end)) {
            if (FF.skip || FF.excludeEnd || FF.returnEnd) throw pF("skip, excludeEnd, returnEnd not compatible with endScope: {}"), WW;
            if ("object" !== typeof FF.endScope || null === FF.endScope) throw pF("endScope must be object"), WW;
            SW(FF, FF.end, {
              key: "endScope"
            }), FF.end = TF(FF.end, {
              joinWith: ""
            })
          }
        }(FF)
    }

    function AW(FF) {
      function WF(WF, SF) {
        return new RegExp(RF(WF), "m" + (FF.case_insensitive ? "i" : "") + (FF.unicodeRegex ? "u" : "") + (SF ? "g" : ""))
      }
      class SF {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(FF, WF) {
          WF.position = this.position++, this.matchIndexes[this.matchAt] = WF, this.regexes.push([WF, FF]), this.matchAt += gW(FF) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const FF = this.regexes.map((FF => FF[1]));
          this.matcherRe = WF(TF(FF, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(FF) {
          this.matcherRe.lastIndex = this.lastIndex;
          const WF = this.matcherRe.exec(FF);
          if (!WF) return null;
          const SF = WF.findIndex(((FF, WF) => WF > 0 && void 0 !== FF)),
            CF = this.matchIndexes[SF];
          return WF.splice(0, SF), Object.assign(WF, CF)
        }
      }
      class CF {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(FF) {
          if (this.multiRegexes[FF]) return this.multiRegexes[FF];
          const WF = new SF;
          return this.rules.slice(FF).forEach((FF => {
            let [SF, CF] = FF;
            return WF.addRule(SF, CF)
          })), WF.compile(), this.multiRegexes[FF] = WF, WF
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(FF, WF) {
          this.rules.push([FF, WF]), "aC" === WF.type && this.count++
        }
        exec(FF) {
          const WF = this.getMatcher(this.regexIndex);
          WF.lastIndex = this.lastIndex;
          let SF = WF.exec(FF);
          if (this.resumingScanAtSamePosition())
            if (SF && SF.index === this.lastIndex);
            else {
              const WF = this.getMatcher(0);
              WF.lastIndex = this.lastIndex + 1, SF = WF.exec(FF)
            } return SF && (this.regexIndex += SF.position + 1, this.regexIndex === this.count && this.considerAll()), SF
        }
      }
      if (FF.compilerExtensions || (FF.compilerExtensions = []), FF.contains && FF.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return FF.classNameAliases = AF(FF.classNameAliases || {}),
        function SF(uF, hF) {
          const bW = uF;
          if (uF.isCompiled) return bW;
          [nF, wF, CW, UF].forEach((FF => FF(uF, hF))), FF.compilerExtensions.forEach((FF => FF(uF, hF))), uF.__beforeBegin = null, [HF, KF, XF].forEach((FF => FF(uF, hF))), uF.isCompiled = !0;
          let dF = null;
          return "object" === typeof uF.keywords && uF.keywords.$pattern && (uF.keywords = Object.assign({}, uF.keywords), dF = uF.keywords.$pattern, delete uF.keywords.$pattern), dF = dF || /\w+/, uF.keywords && (uF.keywords = jW(uF.keywords, FF.case_insensitive)), bW.keywordPatternRe = WF(dF, !0), hF && (uF.aC || (uF.aC = /\B|\b/), bW.beginRe = WF(bW.aC), uF.end || uF.endsWithParent || (uF.end = /\B|\b/), uF.end && (bW.endRe = WF(bW.end)), bW.terminatorEnd = RF(bW.end) || "", uF.endsWithParent && hF.terminatorEnd && (bW.terminatorEnd += (uF.end ? "|" : "") + hF.terminatorEnd)), uF.illegal && (bW.illegalRe = WF(uF.illegal)), uF.contains || (uF.contains = []), uF.contains = [].concat(...uF.contains.map((function(FF) {
            return function(FF) {
              FF.variants && !FF.cachedVariants && (FF.cachedVariants = FF.variants.map((function(WF) {
                return AF(FF, {
                  variants: null
                }, WF)
              })));
              if (FF.cachedVariants) return FF.cachedVariants;
              if (uW(FF)) return AF(FF, {
                starts: FF.starts ? AF(FF.starts) : null
              });
              if (Object.isFrozen(FF)) return AF(FF);
              return FF
            }("self" === FF ? uF : FF)
          }))), uF.contains.forEach((function(FF) {
            SF(FF, bW)
          })), uF.starts && SF(uF.starts, hF), bW.matcher = function(FF) {
            const WF = new CF;
            return FF.contains.forEach((FF => WF.addRule(FF.aC, {
              rule: FF,
              type: "aC"
            }))), FF.terminatorEnd && WF.addRule(FF.terminatorEnd, {
              type: "end"
            }), FF.illegal && WF.addRule(FF.illegal, {
              type: "illegal"
            }), WF
          }(bW), bW
        }(FF)
    }

    function uW(FF) {
      return !!FF && (FF.endsWithParent || uW(FF.starts))
    }
    class hW extends Error {
      constructor(FF, WF) {
        super(FF), this.name = "HTMLInjectionError", this.html = WF
      }
    }
    const bS = CF,
      dW = AF,
      PW = Symbol("nomatch"),
      RW = function(FF) {
        const CF = Object.create(null),
          AF = Object.create(null),
          uF = [];
        let hF = !0;
        const bW = "Could not find the language '{}', did you forget to load/include a language module?",
          dF = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let RF = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: PF
        };

        function gW(FF) {
          return RF.noHighlightRe.test(FF)
        }

        function tW(FF, WF, SF) {
          let CF = "",
            AF = "";
          "object" === typeof WF ? (CF = FF, SF = WF.ignoreIllegals, AF = WF.language) : (FW("10.7.0", "highlight(lang, code, ...args) has been deprecated."), FW("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), AF = FF, CF = WF), void 0 === SF && (SF = !0);
          const uF = {
            code: CF,
            language: AF
          };
          mW("before:highlight", uF);
          const hF = uF.result ? uF.result : TF(uF.language, uF.code, SF);
          return hF.code = uF.code, mW("after:highlight", hF), hF
        }

        function TF(FF, WF, AF, uF) {
          const dF = Object.create(null);

          function PF() {
            if (!mW.keywords) return void xW.addText(ZF);
            let FF = 0;
            mW.keywordPatternRe.lastIndex = 0;
            let WF = mW.keywordPatternRe.exec(ZF),
              SF = "";
            for (; WF;) {
              SF += ZF.substring(FF, WF.index);
              const AF = VF.case_insensitive ? WF[0].toLowerCase() : WF[0],
                uF = (CF = AF, mW.keywords[CF]);
              if (uF) {
                const [FF, CF] = uF;
                if (xW.addText(SF), SF = "", dF[AF] = (dF[AF] || 0) + 1, dF[AF] <= 7 && (oF += CF), FF.startsWith("_")) SF += WF[0];
                else {
                  const SF = VF.classNameAliases[FF] || FF;
                  eF(WF[0], SF)
                }
              } else SF += WF[0];
              FF = mW.keywordPatternRe.lastIndex, WF = mW.keywordPatternRe.exec(ZF)
            }
            var CF;
            SF += ZF.substring(FF), xW.addText(SF)
          }

          function iW() {
            null != mW.subLanguage ? function() {
              if ("" === ZF) return;
              let FF = null;
              if ("string" === typeof mW.subLanguage) {
                if (!CF[mW.subLanguage]) return void xW.addText(ZF);
                FF = TF(mW.subLanguage, ZF, !0, OF[mW.subLanguage]), OF[mW.subLanguage] = FF._top
              } else FF = aW(ZF, mW.subLanguage.length ? mW.subLanguage : null);
              mW.relevance > 0 && (oF += FF.relevance), xW.__addSublanguage(FF._emitter, FF.language)
            }() : PF(), ZF = ""
          }

          function eF(FF, WF) {
            "" !== FF && (xW.startScope(WF), xW.addText(FF), xW.endScope())
          }

          function EF(FF, WF) {
            let SF = 1;
            const CF = WF.length - 1;
            for (; SF <= CF;) {
              if (!FF._emit[SF]) {
                SF++;
                continue
              }
              const CF = VF.classNameAliases[FF[SF]] || FF[SF],
                AF = WF[SF];
              CF ? eF(AF, CF) : (ZF = AF, PF(), ZF = ""), SF++
            }
          }

          function QF(FF, WF) {
            return FF.scope && "string" === typeof FF.scope && xW.openNode(VF.classNameAliases[FF.scope] || FF.scope), FF.beginScope && (FF.beginScope._wrap ? (eF(ZF, VF.classNameAliases[FF.beginScope._wrap] || FF.beginScope._wrap), ZF = "") : FF.beginScope._multi && (EF(FF.beginScope, WF), ZF = "")), mW = Object.create(FF, {
              parent: {
                value: mW
              }
            }), mW
          }

          function rW(FF, WF, CF) {
            let AF = function(FF, WF) {
              const SF = FF && FF.exec(WF);
              return SF && 0 === SF.index
            }(FF.endRe, CF);
            if (AF) {
              if (FF["on:end"]) {
                const CF = new SF(FF);
                FF["on:end"](WF, CF), CF.isMatchIgnored && (AF = !1)
              }
              if (AF) {
                for (; FF.endsParent && FF.parent;) FF = FF.parent;
                return FF
              }
            }
            if (FF.endsWithParent) return rW(FF.parent, WF, CF)
          }

          function gW(FF) {
            return 0 === mW.matcher.regexIndex ? (ZF += FF[0], 1) : (cW = !0, 0)
          }

          function tW(FF) {
            const SF = FF[0],
              CF = WF.substring(FF.index),
              AF = rW(mW, FF, CF);
            if (!AF) return PW;
            const uF = mW;
            mW.endScope && mW.endScope._wrap ? (iW(), eF(SF, mW.endScope._wrap)) : mW.endScope && mW.endScope._multi ? (iW(), EF(mW.endScope, FF)) : uF.skip ? ZF += SF : (uF.returnEnd || uF.excludeEnd || (ZF += SF), iW(), uF.excludeEnd && (ZF = SF));
            do {
              mW.scope && xW.closeNode(), mW.skip || mW.subLanguage || (oF += mW.relevance), mW = mW.parent
            } while (mW !== AF.parent);
            return AF.starts && QF(AF.starts, FF), uF.returnEnd ? 0 : SF.length
          }
          let kW = {};

          function qW(CF, uF) {
            const bW = uF && uF[0];
            if (ZF += CF, null == bW) return iW(), 0;
            if ("aC" === kW.type && "end" === uF.type && kW.index === uF.index && "" === bW) {
              if (ZF += WF.slice(uF.index, uF.index + 1), !hF) {
                const WF = new Error(`0 width match regex (${FF})`);
                throw WF.languageName = FF, WF.badRule = kW.rule, WF
              }
              return 1
            }
            if (kW = uF, "aC" === uF.type) return function(FF) {
              const WF = FF[0],
                CF = FF.rule,
                AF = new SF(CF),
                uF = [CF.__beforeBegin, CF["on:begin"]];
              for (const SF of uF)
                if (SF && (SF(FF, AF), AF.isMatchIgnored)) return gW(WF);
              return CF.skip ? ZF += WF : (CF.excludeBegin && (ZF += WF), iW(), CF.returnBegin || CF.excludeBegin || (ZF = WF)), QF(CF, FF), CF.returnBegin ? 0 : WF.length
            }(uF);
            if ("illegal" === uF.type && !AF) {
              const FF = new Error('Illegal lexeme "' + bW + '" for mode "' + (mW.scope || "<unnamed>") + '"');
              throw FF.mode = mW, FF
            }
            if ("end" === uF.type) {
              const FF = tW(uF);
              if (FF !== PW) return FF
            }
            if ("illegal" === uF.type && "" === bW) return ZF += "\n", 1;
            if (MF > 1e5 && MF > 3 * uF.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return ZF += bW, bW.length
          }
          const VF = NF(FF);
          if (!VF) throw pF(bW.replace("{}", FF)), new Error('Unknown language: "' + FF + '"');
          const DF = AW(VF);
          let LF = "",
            mW = uF || DF;
          const OF = {},
            xW = new RF.__emitter(RF);
          ! function() {
            const FF = [];
            for (let WF = mW; WF !== VF; WF = WF.parent) WF.scope && FF.unshift(WF.scope);
            FF.forEach((FF => xW.openNode(FF)))
          }();
          let ZF = "",
            oF = 0,
            YF = 0,
            MF = 0,
            cW = !1;
          try {
            if (VF.__emitTokens) VF.__emitTokens(WF, xW);
            else {
              for (mW.matcher.considerAll();;) {
                MF++, cW ? cW = !1 : mW.matcher.considerAll(), mW.matcher.lastIndex = YF;
                const FF = mW.matcher.exec(WF);
                if (!FF) break;
                const SF = qW(WF.substring(YF, FF.index), FF);
                YF = FF.index + SF
              }
              qW(WF.substring(YF))
            }
            return xW.finalize(), LF = xW.toHTML(), {
              language: FF,
              value: LF,
              relevance: oF,
              illegal: !1,
              _emitter: xW,
              _top: mW
            }
          } catch (GF) {
            if (GF.message && GF.message.includes("Illegal")) return {
              language: FF,
              value: bS(WF),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: GF.message,
                index: YF,
                context: WF.slice(YF - 100, YF + 100),
                mode: GF.mode,
                resultSoFar: LF
              },
              _emitter: xW
            };
            if (hF) return {
              language: FF,
              value: bS(WF),
              illegal: !1,
              relevance: 0,
              errorRaised: GF,
              _emitter: xW,
              _top: mW
            };
            throw GF
          }
        }

        function aW(FF, WF) {
          WF = WF || RF.languages || Object.keys(CF);
          const SF = function(FF) {
              const WF = {
                value: bS(FF),
                illegal: !1,
                relevance: 0,
                _top: dF,
                _emitter: new RF.__emitter(RF)
              };
              return WF._emitter.addText(FF), WF
            }(FF),
            AF = WF.filter(NF).filter(LF).map((WF => TF(WF, FF, !1)));
          AF.unshift(SF);
          const uF = AF.sort(((FF, WF) => {
              if (FF.relevance !== WF.relevance) return WF.relevance - FF.relevance;
              if (FF.language && WF.language) {
                if (NF(FF.language).supersetOf === WF.language) return 1;
                if (NF(WF.language).supersetOf === FF.language) return -1
              }
              return 0
            })),
            [hF, bW] = uF,
            PF = hF;
          return PF.secondBest = bW, PF
        }

        function kW(FF) {
          let WF = null;
          const SF = function(FF) {
            let WF = FF.className + " ";
            WF += FF.parentNode ? FF.parentNode.className : "";
            const SF = RF.languageDetectRe.exec(WF);
            if (SF) {
              const WF = NF(SF[1]);
              return WF || (lF(bW.replace("{}", SF[1])), lF("Falling back to no-highlight mode for this block.", FF)), WF ? SF[1] : "no-highlight"
            }
            return WF.split(/\s+/).find((FF => gW(FF) || NF(FF)))
          }(FF);
          if (gW(SF)) return;
          if (mW("before:highlightElement", {
              el: FF,
              language: SF
            }), FF.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", FF);
          if (FF.children.length > 0 && (RF.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(FF)), RF.throwUnescapedHTML)) {
            throw new hW("One of your code blocks includes unescaped HTML.", FF.innerHTML)
          }
          WF = FF;
          const CF = WF.textContent,
            uF = SF ? tW(CF, {
              language: SF,
              ignoreIllegals: !0
            }) : aW(CF);
          FF.innerHTML = uF.value, FF.dataset.highlighted = "yes",
            function(FF, WF, SF) {
              const CF = WF && AF[WF] || SF;
              FF.classList.add("hljs"), FF.classList.add(`language-${CF}`)
            }(FF, SF, uF.language), FF.result = {
              language: uF.language,
              re: uF.relevance,
              relevance: uF.relevance
            }, uF.secondBest && (FF.secondBest = {
              language: uF.secondBest.language,
              relevance: uF.secondBest.relevance
            }), mW("after:highlightElement", {
              el: FF,
              result: uF,
              text: CF
            })
        }
        let qW = !1;

        function VF() {
          if ("loading" === document.readyState) return qW || window.addEventListener("DOMContentLoaded", (function() {
            VF()
          }), !1), void(qW = !0);
          document.querySelectorAll(RF.cssSelector).forEach(kW)
        }

        function NF(FF) {
          return FF = (FF || "").toLowerCase(), CF[FF] || CF[AF[FF]]
        }

        function DF(FF, WF) {
          let {
            languageName: SF
          } = WF;
          "string" === typeof FF && (FF = [FF]), FF.forEach((FF => {
            AF[FF.toLowerCase()] = SF
          }))
        }

        function LF(FF) {
          const WF = NF(FF);
          return WF && !WF.disableAutodetect
        }

        function mW(FF, WF) {
          const SF = FF;
          uF.forEach((function(FF) {
            FF[SF] && FF[SF](WF)
          }))
        }
        Object.assign(FF, {
          highlight: tW,
          highlightAuto: aW,
          highlightAll: VF,
          highlightElement: kW,
          highlightBlock: function(FF) {
            return FW("10.7.0", "highlightBlock will be removed entirely in v12.0"), FW("10.7.0", "Please use highlightElement now."), kW(FF)
          },
          configure: function(FF) {
            RF = dW(RF, FF)
          },
          initHighlighting: () => {
            VF(), FW("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            VF(), FW("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(WF, SF) {
            let AF = null;
            try {
              AF = SF(FF)
            } catch (uF) {
              if (pF("Language definition for '{}' could not be registered.".replace("{}", WF)), !hF) throw uF;
              pF(uF), AF = dF
            }
            AF.name || (AF.name = WF), CF[WF] = AF, AF.rawDefinition = SF.bind(null, FF), AF.aliases && DF(AF.aliases, {
              languageName: WF
            })
          },
          unregisterLanguage: function(FF) {
            delete CF[FF];
            for (const WF of Object.keys(AF)) AF[WF] === FF && delete AF[WF]
          },
          listLanguages: function() {
            return Object.keys(CF)
          },
          getLanguage: NF,
          registerAliases: DF,
          autoDetection: LF,
          inherit: dW,
          addPlugin: function(FF) {
            ! function(FF) {
              FF["before:highlightBlock"] && !FF["before:highlightElement"] && (FF["before:highlightElement"] = WF => {
                FF["before:highlightBlock"](Object.assign({
                  block: WF.el
                }, WF))
              }), FF["after:highlightBlock"] && !FF["after:highlightElement"] && (FF["after:highlightElement"] = WF => {
                FF["after:highlightBlock"](Object.assign({
                  block: WF.el
                }, WF))
              })
            }(FF), uF.push(FF)
          },
          removePlugin: function(FF) {
            const WF = uF.indexOf(FF); - 1 !== WF && uF.splice(WF, 1)
          }
        }), FF.debugMode = function() {
          hF = !1
        }, FF.safeMode = function() {
          hF = !0
        }, FF.versionString = "11.11.1", FF.regex = {
          concat: QF,
          lookahead: iW,
          either: rW,
          optional: EF,
          anyNumberOfTimes: eF
        };
        for (const SF in yW) "object" === typeof yW[SF] && WF(yW[SF]);
        return Object.assign(FF, yW), FF
      },
      iS = RW({});
    iS.newInstance = () => RW({}), FF.exports = iS, iS.HighlightJS = iS, iS.default = iS
  },
  3705: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    const CF = SF(3712)
  },
  3716: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => iW
    });
    const CF = "[A-Za-z$_][0-9A-Za-z$_]*",
      AF = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      uF = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      hF = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      bW = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      dF = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      PF = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      RF = [].concat(dF, hF, bW);

    function iW(FF) {
      const WF = FF.regex,
        SF = CF,
        iW = "<>",
        eF = "</>",
        EF = {
          aC: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (FF, WF) => {
            const SF = FF[0].length + FF.index,
              CF = FF.input[SF];
            if ("<" === CF || "," === CF) return void WF.ignoreMatch();
            let AF;
            ">" === CF && (((FF, WF) => {
              let {
                after: SF
              } = WF;
              const CF = "</" + FF[0].slice(1);
              return -1 !== FF.input.indexOf(CF, SF)
            })(FF, {
              after: SF
            }) || WF.ignoreMatch());
            const uF = FF.input.substring(SF);
            ((AF = uF.match(/^\s*=/)) || (AF = uF.match(/^\s+extends\s+/)) && 0 === AF.index) && WF.ignoreMatch()
          }
        },
        QF = {
          $pattern: CF,
          keyword: AF,
          literal: uF,
          built_in: RF,
          "variable.language": PF
        },
        rW = "[0-9](_?[0-9])*",
        gW = `\\.(${rW})`,
        tW = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        TF = {
          className: "number",
          variants: [{
            aC: `(\\b(${tW})((${gW})|\\.)?|(${gW}))[eE][+-]?(${rW})\\b`
          }, {
            aC: `\\b(${tW})\\b((${gW})\\b|\\.)?|(${gW})\\b`
          }, {
            aC: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            aC: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            aC: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            aC: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            aC: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        aW = {
          className: "subst",
          aC: "\\$\\{",
          end: "\\}",
          keywords: QF,
          contains: []
        },
        kW = {
          aC: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [FF.BACKSLASH_ESCAPE, aW],
            subLanguage: "xml"
          }
        },
        qW = {
          aC: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [FF.BACKSLASH_ESCAPE, aW],
            subLanguage: "css"
          }
        },
        VF = {
          aC: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [FF.BACKSLASH_ESCAPE, aW],
            subLanguage: "graphql"
          }
        },
        NF = {
          className: "string",
          aC: "`",
          end: "`",
          contains: [FF.BACKSLASH_ESCAPE, aW]
        },
        DF = {
          className: "comment",
          variants: [FF.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              aC: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                aC: "@[A-Za-z]+"
              }, {
                className: "type",
                aC: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                aC: SF + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                aC: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), FF.C_BLOCK_COMMENT_MODE, FF.C_LINE_COMMENT_MODE]
        },
        LF = [FF.APOS_STRING_MODE, FF.QUOTE_STRING_MODE, kW, qW, VF, NF, {
          match: /\$\d+/
        }, TF];
      aW.contains = LF.concat({
        aC: /\{/,
        end: /\}/,
        keywords: QF,
        contains: ["self"].concat(LF)
      });
      const mW = [].concat(DF, aW.contains),
        OF = mW.concat([{
          aC: /(\s*)\(/,
          end: /\)/,
          keywords: QF,
          contains: ["self"].concat(mW)
        }]),
        xW = {
          className: "params",
          aC: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: QF,
          contains: OF
        },
        ZF = {
          variants: [{
            match: [/class/, /\s+/, SF, /\s+/, /extends/, /\s+/, WF.concat(SF, "(", WF.concat(/\./, SF), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, SF],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        oF = {
          relevance: 0,
          match: WF.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...hF, ...bW]
          }
        },
        YF = {
          variants: [{
            match: [/function/, /\s+/, SF, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [xW],
          illegal: /%/
        };
      const MF = {
        match: WF.concat(/\b/, (cW = [...dF, "super", "import"].map((FF => `${FF}\\s*\\(`)), WF.concat("(?!", cW.join("|"), ")")), SF, WF.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var cW;
      const GF = {
          aC: WF.concat(/\./, WF.lookahead(WF.concat(SF, /(?![0-9A-Za-z$_(])/))),
          end: SF,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        zW = {
          match: [/get|set/, /\s+/, SF, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            aC: /\(\)/
          }, xW]
        },
        IF = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + FF.UNDERSCORE_IDENT_RE + ")\\s*=>",
        fF = {
          match: [/const|var|let/, /\s+/, SF, /\s*/, /=\s*/, /(async\s*)?/, WF.lookahead(IF)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [xW]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: QF,
        exports: {
          PARAMS_CONTAINS: OF,
          CLASS_REFERENCE: oF
        },
        illegal: /#(?![$_A-z])/,
        contains: [FF.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          aC: /^\s*['"]use (strict|asm)['"]/
        }, FF.APOS_STRING_MODE, FF.QUOTE_STRING_MODE, kW, qW, VF, NF, DF, {
          match: /\$\d+/
        }, TF, oF, {
          scope: "attr",
          match: SF + WF.lookahead(":"),
          relevance: 0
        }, fF, {
          aC: "(" + FF.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [DF, FF.REGEXP_MODE, {
            className: "function",
            aC: IF,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                aC: FF.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                aC: /\(\s*\)/,
                skip: !0
              }, {
                aC: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: QF,
                contains: OF
              }]
            }]
          }, {
            aC: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              aC: iW,
              end: eF
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              aC: EF.aC,
              "on:begin": EF.isTrulyOpeningTag,
              end: EF.end
            }],
            subLanguage: "xml",
            contains: [{
              aC: EF.aC,
              end: EF.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, YF, {
          beginKeywords: "while if switch catch for"
        }, {
          aC: "\\b(?!function)" + FF.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [xW, FF.inherit(FF.TITLE_MODE, {
            aC: SF,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, GF, {
          match: "\\$" + SF,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [xW]
        }, MF, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, ZF, zW, {
          match: /\$[(.]/
        }]
      }
    }
  },
  3720: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF
    });
    const CF = "[A-Za-z$_][0-9A-Za-z$_]*",
      AF = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      uF = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      hF = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      bW = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      dF = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      PF = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      RF = [].concat(dF, hF, bW);

    function iW(FF) {
      const WF = FF.regex,
        SF = CF,
        iW = "<>",
        eF = "</>",
        EF = {
          aC: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (FF, WF) => {
            const SF = FF[0].length + FF.index,
              CF = FF.input[SF];
            if ("<" === CF || "," === CF) return void WF.ignoreMatch();
            let AF;
            ">" === CF && (((FF, WF) => {
              let {
                after: SF
              } = WF;
              const CF = "</" + FF[0].slice(1);
              return -1 !== FF.input.indexOf(CF, SF)
            })(FF, {
              after: SF
            }) || WF.ignoreMatch());
            const uF = FF.input.substring(SF);
            ((AF = uF.match(/^\s*=/)) || (AF = uF.match(/^\s+extends\s+/)) && 0 === AF.index) && WF.ignoreMatch()
          }
        },
        QF = {
          $pattern: CF,
          keyword: AF,
          literal: uF,
          built_in: RF,
          "variable.language": PF
        },
        rW = "[0-9](_?[0-9])*",
        gW = `\\.(${rW})`,
        tW = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        TF = {
          className: "number",
          variants: [{
            aC: `(\\b(${tW})((${gW})|\\.)?|(${gW}))[eE][+-]?(${rW})\\b`
          }, {
            aC: `\\b(${tW})\\b((${gW})\\b|\\.)?|(${gW})\\b`
          }, {
            aC: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            aC: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            aC: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            aC: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            aC: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        aW = {
          className: "subst",
          aC: "\\$\\{",
          end: "\\}",
          keywords: QF,
          contains: []
        },
        kW = {
          aC: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [FF.BACKSLASH_ESCAPE, aW],
            subLanguage: "xml"
          }
        },
        qW = {
          aC: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [FF.BACKSLASH_ESCAPE, aW],
            subLanguage: "css"
          }
        },
        VF = {
          aC: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [FF.BACKSLASH_ESCAPE, aW],
            subLanguage: "graphql"
          }
        },
        NF = {
          className: "string",
          aC: "`",
          end: "`",
          contains: [FF.BACKSLASH_ESCAPE, aW]
        },
        DF = {
          className: "comment",
          variants: [FF.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              aC: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                aC: "@[A-Za-z]+"
              }, {
                className: "type",
                aC: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                aC: SF + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                aC: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), FF.C_BLOCK_COMMENT_MODE, FF.C_LINE_COMMENT_MODE]
        },
        LF = [FF.APOS_STRING_MODE, FF.QUOTE_STRING_MODE, kW, qW, VF, NF, {
          match: /\$\d+/
        }, TF];
      aW.contains = LF.concat({
        aC: /\{/,
        end: /\}/,
        keywords: QF,
        contains: ["self"].concat(LF)
      });
      const mW = [].concat(DF, aW.contains),
        OF = mW.concat([{
          aC: /(\s*)\(/,
          end: /\)/,
          keywords: QF,
          contains: ["self"].concat(mW)
        }]),
        xW = {
          className: "params",
          aC: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: QF,
          contains: OF
        },
        ZF = {
          variants: [{
            match: [/class/, /\s+/, SF, /\s+/, /extends/, /\s+/, WF.concat(SF, "(", WF.concat(/\./, SF), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, SF],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        oF = {
          relevance: 0,
          match: WF.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...hF, ...bW]
          }
        },
        YF = {
          variants: [{
            match: [/function/, /\s+/, SF, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [xW],
          illegal: /%/
        };
      const MF = {
        match: WF.concat(/\b/, (cW = [...dF, "super", "import"].map((FF => `${FF}\\s*\\(`)), WF.concat("(?!", cW.join("|"), ")")), SF, WF.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var cW;
      const GF = {
          aC: WF.concat(/\./, WF.lookahead(WF.concat(SF, /(?![0-9A-Za-z$_(])/))),
          end: SF,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        zW = {
          match: [/get|set/, /\s+/, SF, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            aC: /\(\)/
          }, xW]
        },
        IF = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + FF.UNDERSCORE_IDENT_RE + ")\\s*=>",
        fF = {
          match: [/const|var|let/, /\s+/, SF, /\s*/, /=\s*/, /(async\s*)?/, WF.lookahead(IF)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [xW]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: QF,
        exports: {
          PARAMS_CONTAINS: OF,
          CLASS_REFERENCE: oF
        },
        illegal: /#(?![$_A-z])/,
        contains: [FF.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          aC: /^\s*['"]use (strict|asm)['"]/
        }, FF.APOS_STRING_MODE, FF.QUOTE_STRING_MODE, kW, qW, VF, NF, DF, {
          match: /\$\d+/
        }, TF, oF, {
          scope: "attr",
          match: SF + WF.lookahead(":"),
          relevance: 0
        }, fF, {
          aC: "(" + FF.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [DF, FF.REGEXP_MODE, {
            className: "function",
            aC: IF,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                aC: FF.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                aC: /\(\s*\)/,
                skip: !0
              }, {
                aC: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: QF,
                contains: OF
              }]
            }]
          }, {
            aC: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              aC: iW,
              end: eF
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              aC: EF.aC,
              "on:begin": EF.isTrulyOpeningTag,
              end: EF.end
            }],
            subLanguage: "xml",
            contains: [{
              aC: EF.aC,
              end: EF.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, YF, {
          beginKeywords: "while if switch catch for"
        }, {
          aC: "\\b(?!function)" + FF.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [xW, FF.inherit(FF.TITLE_MODE, {
            aC: SF,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, GF, {
          match: "\\$" + SF,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [xW]
        }, MF, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, ZF, zW, {
          match: /\$[(.]/
        }]
      }
    }

    function eF(FF) {
      const WF = FF.regex,
        SF = iW(FF),
        hF = CF,
        bW = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        dF = {
          aC: [/namespace/, /\s+/, FF.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        eF = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: bW
          },
          contains: [SF.exports.CLASS_REFERENCE]
        },
        EF = {
          $pattern: CF,
          keyword: AF.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: uF,
          built_in: RF.concat(bW),
          "variable.language": PF
        },
        QF = {
          className: "meta",
          aC: "@" + hF
        },
        rW = (FF, WF, SF) => {
          const CF = FF.contains.findIndex((FF => FF.label === WF));
          if (-1 === CF) throw new Error("can not find mode to replace");
          FF.contains.splice(CF, 1, SF)
        };
      Object.assign(SF.keywords, EF), SF.exports.PARAMS_CONTAINS.push(QF);
      const gW = SF.contains.find((FF => "attr" === FF.scope)),
        tW = Object.assign({}, gW, {
          match: WF.concat(hF, WF.lookahead(/\s*\?:/))
        });
      SF.exports.PARAMS_CONTAINS.push([SF.exports.CLASS_REFERENCE, gW, tW]), SF.contains = SF.contains.concat([QF, dF, eF, tW]), rW(SF, "shebang", FF.SHEBANG()), rW(SF, "use_strict", {
        className: "meta",
        relevance: 10,
        aC: /^\s*['"]use strict['"]/
      });
      return SF.contains.find((FF => "func.def" === FF.label)).relevance = 0, Object.assign(SF, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), SF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);