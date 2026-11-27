export const id = 95;
export const ids = [95];
export const modules = {
  5463: WW => {
    function iW(WW) {
      return WW instanceof Map ? WW.clear = WW.delete = WW.set = function() {
        throw new Error("map is read-only")
      } : WW instanceof Set && (WW.add = WW.clear = WW.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(WW), Object.getOwnPropertyNames(WW).forEach((OW => {
        const mW = WW[OW],
          EW = typeof mW;
        "object" !== EW && "function" !== EW || Object.isFrozen(mW) || iW(mW)
      })), WW
    }
    class OW {
      constructor(WW) {
        void 0 === WW.data && (WW.data = {}), this.data = WW.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function mW(WW) {
      return WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function EW(WW) {
      const iW = Object.create(null);
      for (const NW in WW) iW[NW] = WW[NW];
      for (var OW = arguments.length, mW = new Array(OW > 1 ? OW - 1 : 0), EW = 1; EW < OW; EW++) mW[EW - 1] = arguments[EW];
      return mW.forEach((function(WW) {
        for (const OW in WW) iW[OW] = WW[OW]
      })), iW
    }
    const NW = WW => !!WW.scope;
    class PW {
      constructor(WW, iW) {
        this.buffer = "", this.classPrefix = iW.classPrefix, WW.walk(this)
      }
      addText(WW) {
        this.buffer += mW(WW)
      }
      openNode(WW) {
        if (!NW(WW)) return;
        const iW = ((WW, iW) => {
          let {
            prefix: OW
          } = iW;
          if (WW.startsWith("language:")) return WW.replace("language:", "language-");
          if (WW.includes(".")) {
            const iW = WW.split(".");
            return [`${OW}${iW.shift()}`, ...iW.map(((WW, iW) => `${WW}${"_".repeat(iW+1)}`))].join(" ")
          }
          return `${OW}${WW}`
        })(WW.scope, {
          prefix: this.classPrefix
        });
        this.span(iW)
      }
      closeNode(WW) {
        NW(WW) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(WW) {
        this.buffer += `<span class="${WW}">`
      }
    }
    const LW = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const iW = {
        children: []
      };
      return Object.assign(iW, WW), iW
    };
    class cW {
      constructor() {
        this.Dk = LW(), this.stack = [this.Dk]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.Dk
      }
      add(WW) {
        this.top.children.push(WW)
      }
      openNode(WW) {
        const iW = LW({
          scope: WW
        });
        this.add(iW), this.stack.push(iW)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.Dk, null, 4)
      }
      walk(WW) {
        return this.constructor._walk(WW, this.Dk)
      }
      static _walk(WW, iW) {
        return "string" === typeof iW ? WW.addText(iW) : iW.children && (WW.openNode(iW), iW.children.forEach((iW => this._walk(WW, iW))), WW.closeNode(iW)), WW
      }
      static _collapse(WW) {
        "string" !== typeof WW && WW.children && (WW.children.every((WW => "string" === typeof WW)) ? WW.children = [WW.children.join("")] : WW.children.forEach((WW => {
          cW._collapse(WW)
        })))
      }
    }
    class wW extends cW {
      constructor(WW) {
        super(), this.options = WW
      }
      addText(WW) {
        "" !== WW && this.add(WW)
      }
      startScope(WW) {
        this.openNode(WW)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(WW, iW) {
        const OW = WW.root;
        iW && (OW.scope = `language:${iW}`), this.add(OW)
      }
      toHTML() {
        return new PW(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function tW(WW) {
      return WW ? "string" === typeof WW ? WW : WW.source : null
    }

    function ZW(WW) {
      return AW("(?=", WW, ")")
    }

    function xW(WW) {
      return AW("(?:", WW, ")*")
    }

    function lW(WW) {
      return AW("(?:", WW, ")?")
    }

    function AW() {
      for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
      return iW.map((WW => tW(WW))).join("")
    }

    function bW() {
      for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
      const mW = function(WW) {
        const iW = WW[WW.length - 1];
        return "object" === typeof iW && iW.constructor === Object ? (WW.splice(WW.length - 1, 1), iW) : {}
      }(iW);
      return "(" + (mW.capture ? "" : "?:") + iW.map((WW => tW(WW))).join("|") + ")"
    }

    function jW(WW) {
      return new RegExp(WW.toString() + "|").exec("").length - 1
    }
    const UW = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function kW(WW, iW) {
      let {
        joinWith: OW
      } = iW, mW = 0;
      return WW.map((WW => {
        mW += 1;
        const iW = mW;
        let OW = tW(WW),
          EW = "";
        for (; OW.length > 0;) {
          const WW = UW.exec(OW);
          if (!WW) {
            EW += OW;
            break
          }
          EW += OW.substring(0, WW.index), OW = OW.substring(WW.index + WW[0].length), "\\" === WW[0][0] && WW[1] ? EW += "\\" + String(Number(WW[1]) + iW) : (EW += WW[0], "(" === WW[0] && mW++)
        }
        return EW
      })).map((WW => `(${WW})`)).join(OW)
    }
    const sW = "[a-zA-Z]\\w*",
      MW = "[a-zA-Z_]\\w*",
      KW = "\\b\\d+(\\.\\d+)?",
      SW = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      YW = "\\b(0b[01]+)",
      yW = {
        kZ: "\\\\[\\s\\S]",
        relevance: 0
      },
      TW = {
        scope: "string",
        kZ: "'",
        end: "'",
        illegal: "\\n",
        contains: [yW]
      },
      JW = {
        scope: "string",
        kZ: '"',
        end: '"',
        illegal: "\\n",
        contains: [yW]
      },
      hW = function(WW, iW) {
        const OW = EW({
          scope: "comment",
          kZ: WW,
          end: iW,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        OW.contains.push({
          scope: "doctag",
          kZ: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const mW = bW("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return OW.contains.push({
          kZ: AW(/[ ]+/, "(", mW, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), OW
      },
      HW = hW("//", "$"),
      nW = hW("/\\*", "\\*/"),
      uW = hW("#", "$"),
      oW = {
        scope: "number",
        kZ: KW,
        relevance: 0
      },
      dW = {
        scope: "number",
        kZ: SW,
        relevance: 0
      },
      eW = {
        scope: "number",
        kZ: YW,
        relevance: 0
      },
      vW = {
        scope: "regexp",
        kZ: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [yW, {
          kZ: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [yW]
        }]
      },
      gW = {
        scope: "title",
        kZ: sW,
        relevance: 0
      },
      DW = {
        scope: "title",
        kZ: MW,
        relevance: 0
      },
      VW = {
        kZ: "\\.\\s*" + MW,
        relevance: 0
      };
    var pW = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: TW,
      BACKSLASH_ESCAPE: yW,
      BINARY_NUMBER_MODE: eW,
      BINARY_NUMBER_RE: YW,
      COMMENT: hW,
      C_BLOCK_COMMENT_MODE: nW,
      C_LINE_COMMENT_MODE: HW,
      C_NUMBER_MODE: dW,
      C_NUMBER_RE: SW,
      END_SAME_AS_BEGIN: function(WW) {
        return Object.assign(WW, {
          "on:begin": (WW, iW) => {
            iW.data._beginMatch = WW[1]
          },
          "on:end": (WW, iW) => {
            iW.data._beginMatch !== WW[1] && iW.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: uW,
      IDENT_RE: sW,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: VW,
      NUMBER_MODE: oW,
      NUMBER_RE: KW,
      PHRASAL_WORDS_MODE: {
        kZ: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: JW,
      REGEXP_MODE: vW,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const iW = /^#![ ]*\//;
        return WW.binary && (WW.kZ = AW(iW, /.*\b/, WW.binary, /\b.*/)), EW({
          scope: "meta",
          kZ: iW,
          end: /$/,
          relevance: 0,
          "on:begin": (WW, iW) => {
            0 !== WW.index && iW.ignoreMatch()
          }
        }, WW)
      },
      TITLE_MODE: gW,
      UNDERSCORE_IDENT_RE: MW,
      UNDERSCORE_TITLE_MODE: DW
    });

    function fW(WW, iW) {
      "." === WW.input[WW.index - 1] && iW.ignoreMatch()
    }

    function CW(WW, iW) {
      void 0 !== WW.className && (WW.scope = WW.className, delete WW.className)
    }

    function XW(WW, iW) {
      iW && WW.beginKeywords && (WW.kZ = "\\b(" + WW.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", WW.__beforeBegin = fW, WW.keywords = WW.keywords || WW.beginKeywords, delete WW.beginKeywords, void 0 === WW.relevance && (WW.relevance = 0))
    }

    function BW(WW, iW) {
      Array.isArray(WW.illegal) && (WW.illegal = bW(...WW.illegal))
    }

    function qW(WW, iW) {
      if (WW.match) {
        if (WW.kZ || WW.end) throw new Error("begin & end are not supported with match");
        WW.kZ = WW.match, delete WW.match
      }
    }

    function RW(WW, iW) {
      void 0 === WW.relevance && (WW.relevance = 1)
    }
    const GW = (WW, iW) => {
        if (!WW.beforeMatch) return;
        if (WW.starts) throw new Error("beforeMatch cannot be used with starts");
        const OW = Object.assign({}, WW);
        Object.keys(WW).forEach((iW => {
          delete WW[iW]
        })), WW.keywords = OW.keywords, WW.kZ = AW(OW.beforeMatch, ZW(OW.kZ)), WW.starts = {
          relevance: 0,
          contains: [Object.assign(OW, {
            endsParent: !0
          })]
        }, WW.relevance = 0, delete OW.beforeMatch
      },
      IW = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function aW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const mW = Object.create(null);
      return "string" === typeof WW ? EW(OW, WW.split(" ")) : Array.isArray(WW) ? EW(OW, WW) : Object.keys(WW).forEach((function(OW) {
        Object.assign(mW, aW(WW[OW], iW, OW))
      })), mW;

      function EW(WW, OW) {
        iW && (OW = OW.map((WW => WW.toLowerCase()))), OW.forEach((function(iW) {
          const OW = iW.split("|");
          mW[OW[0]] = [WW, rW(OW[0], OW[1])]
        }))
      }
    }

    function rW(WW, iW) {
      return iW ? Number(iW) : function(WW) {
        return IW.includes(WW.toLowerCase())
      }(WW) ? 0 : 1
    }
    const zW = {},
      FW = WW => {
        console.error(WW)
      },
      QW = function(WW) {
        for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
        console.log(`WARN: ${WW}`, ...OW)
      },
      Wi = (WW, iW) => {
        zW[`${WW}/${iW}`] || (console.log(`Deprecated as of ${WW}. ${iW}`), zW[`${WW}/${iW}`] = !0)
      },
      ii = new Error;

    function Oi(WW, iW, OW) {
      let {
        key: mW
      } = OW, EW = 0;
      const NW = WW[mW],
        PW = {},
        LW = {};
      for (let cW = 1; cW <= iW.length; cW++) LW[cW + EW] = NW[cW], PW[cW + EW] = !0, EW += jW(iW[cW - 1]);
      WW[mW] = LW, WW[mW]._emit = PW, WW[mW]._multi = !0
    }

    function mi(WW) {
      ! function(WW) {
        WW.scope && "object" === typeof WW.scope && null !== WW.scope && (WW.beginScope = WW.scope, delete WW.scope)
      }(WW), "string" === typeof WW.beginScope && (WW.beginScope = {
          _wrap: WW.beginScope
        }), "string" === typeof WW.endScope && (WW.endScope = {
          _wrap: WW.endScope
        }),
        function(WW) {
          if (Array.isArray(WW.kZ)) {
            if (WW.skip || WW.excludeBegin || WW.returnBegin) throw FW("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ii;
            if ("object" !== typeof WW.beginScope || null === WW.beginScope) throw FW("beginScope must be object"), ii;
            Oi(WW, WW.kZ, {
              key: "beginScope"
            }), WW.kZ = kW(WW.kZ, {
              joinWith: ""
            })
          }
        }(WW),
        function(WW) {
          if (Array.isArray(WW.end)) {
            if (WW.skip || WW.excludeEnd || WW.returnEnd) throw FW("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ii;
            if ("object" !== typeof WW.endScope || null === WW.endScope) throw FW("endScope must be object"), ii;
            Oi(WW, WW.end, {
              key: "endScope"
            }), WW.end = kW(WW.end, {
              joinWith: ""
            })
          }
        }(WW)
    }

    function Ei(WW) {
      function iW(iW, OW) {
        return new RegExp(tW(iW), "m" + (WW.case_insensitive ? "i" : "") + (WW.unicodeRegex ? "u" : "") + (OW ? "g" : ""))
      }
      class OW {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(WW, iW) {
          iW.position = this.position++, this.matchIndexes[this.matchAt] = iW, this.regexes.push([iW, WW]), this.matchAt += jW(WW) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const WW = this.regexes.map((WW => WW[1]));
          this.matcherRe = iW(kW(WW, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(WW) {
          this.matcherRe.lastIndex = this.lastIndex;
          const iW = this.matcherRe.exec(WW);
          if (!iW) return null;
          const OW = iW.findIndex(((WW, iW) => iW > 0 && void 0 !== WW)),
            mW = this.matchIndexes[OW];
          return iW.splice(0, OW), Object.assign(iW, mW)
        }
      }
      class mW {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(WW) {
          if (this.multiRegexes[WW]) return this.multiRegexes[WW];
          const iW = new OW;
          return this.rules.slice(WW).forEach((WW => {
            let [OW, mW] = WW;
            return iW.addRule(OW, mW)
          })), iW.compile(), this.multiRegexes[WW] = iW, iW
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(WW, iW) {
          this.rules.push([WW, iW]), "kZ" === iW.type && this.count++
        }
        exec(WW) {
          const iW = this.getMatcher(this.regexIndex);
          iW.lastIndex = this.lastIndex;
          let OW = iW.exec(WW);
          if (this.resumingScanAtSamePosition())
            if (OW && OW.index === this.lastIndex);
            else {
              const iW = this.getMatcher(0);
              iW.lastIndex = this.lastIndex + 1, OW = iW.exec(WW)
            } return OW && (this.regexIndex += OW.position + 1, this.regexIndex === this.count && this.considerAll()), OW
        }
      }
      if (WW.compilerExtensions || (WW.compilerExtensions = []), WW.contains && WW.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return WW.classNameAliases = EW(WW.classNameAliases || {}),
        function OW(NW, PW) {
          const LW = NW;
          if (NW.isCompiled) return LW;
          [CW, qW, mi, GW].forEach((WW => WW(NW, PW))), WW.compilerExtensions.forEach((WW => WW(NW, PW))), NW.__beforeBegin = null, [XW, BW, RW].forEach((WW => WW(NW, PW))), NW.isCompiled = !0;
          let cW = null;
          return "object" === typeof NW.keywords && NW.keywords.$pattern && (NW.keywords = Object.assign({}, NW.keywords), cW = NW.keywords.$pattern, delete NW.keywords.$pattern), cW = cW || /\w+/, NW.keywords && (NW.keywords = aW(NW.keywords, WW.case_insensitive)), LW.keywordPatternRe = iW(cW, !0), PW && (NW.kZ || (NW.kZ = /\B|\b/), LW.beginRe = iW(LW.kZ), NW.end || NW.endsWithParent || (NW.end = /\B|\b/), NW.end && (LW.endRe = iW(LW.end)), LW.terminatorEnd = tW(LW.end) || "", NW.endsWithParent && PW.terminatorEnd && (LW.terminatorEnd += (NW.end ? "|" : "") + PW.terminatorEnd)), NW.illegal && (LW.illegalRe = iW(NW.illegal)), NW.contains || (NW.contains = []), NW.contains = [].concat(...NW.contains.map((function(WW) {
            return function(WW) {
              WW.variants && !WW.cachedVariants && (WW.cachedVariants = WW.variants.map((function(iW) {
                return EW(WW, {
                  variants: null
                }, iW)
              })));
              if (WW.cachedVariants) return WW.cachedVariants;
              if (Ni(WW)) return EW(WW, {
                starts: WW.starts ? EW(WW.starts) : null
              });
              if (Object.isFrozen(WW)) return EW(WW);
              return WW
            }("self" === WW ? NW : WW)
          }))), NW.contains.forEach((function(WW) {
            OW(WW, LW)
          })), NW.starts && OW(NW.starts, PW), LW.matcher = function(WW) {
            const iW = new mW;
            return WW.contains.forEach((WW => iW.addRule(WW.kZ, {
              rule: WW,
              type: "kZ"
            }))), WW.terminatorEnd && iW.addRule(WW.terminatorEnd, {
              type: "end"
            }), WW.illegal && iW.addRule(WW.illegal, {
              type: "illegal"
            }), iW
          }(LW), LW
        }(WW)
    }

    function Ni(WW) {
      return !!WW && (WW.endsWithParent || Ni(WW.starts))
    }
    class Pi extends Error {
      constructor(WW, iW) {
        super(WW), this.name = "HTMLInjectionError", this.html = iW
      }
    }
    const Li = mW,
      ci = EW,
      wi = Symbol("nomatch"),
      ti = function(WW) {
        const mW = Object.create(null),
          EW = Object.create(null),
          NW = [];
        let PW = !0;
        const LW = "Could not find the language '{}', did you forget to load/include a language module?",
          cW = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let tW = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: wW
        };

        function jW(WW) {
          return tW.noHighlightRe.test(WW)
        }

        function UW(WW, iW, OW) {
          let mW = "",
            EW = "";
          "object" === typeof iW ? (mW = WW, OW = iW.ignoreIllegals, EW = iW.language) : (Wi("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Wi("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), EW = WW, mW = iW), void 0 === OW && (OW = !0);
          const NW = {
            code: mW,
            language: EW
          };
          JW("before:highlight", NW);
          const PW = NW.result ? NW.result : kW(NW.language, NW.code, OW);
          return PW.code = NW.code, JW("after:highlight", PW), PW
        }

        function kW(WW, iW, EW, NW) {
          const cW = Object.create(null);

          function wW() {
            if (!JW.keywords) return void HW.addText(nW);
            let WW = 0;
            JW.keywordPatternRe.lastIndex = 0;
            let iW = JW.keywordPatternRe.exec(nW),
              OW = "";
            for (; iW;) {
              OW += nW.substring(WW, iW.index);
              const EW = SW.case_insensitive ? iW[0].toLowerCase() : iW[0],
                NW = (mW = EW, JW.keywords[mW]);
              if (NW) {
                const [WW, mW] = NW;
                if (HW.addText(OW), OW = "", cW[EW] = (cW[EW] || 0) + 1, cW[EW] <= 7 && (uW += mW), WW.startsWith("_")) OW += iW[0];
                else {
                  const OW = SW.classNameAliases[WW] || WW;
                  xW(iW[0], OW)
                }
              } else OW += iW[0];
              WW = JW.keywordPatternRe.lastIndex, iW = JW.keywordPatternRe.exec(nW)
            }
            var mW;
            OW += nW.substring(WW), HW.addText(OW)
          }

          function ZW() {
            null != JW.subLanguage ? function() {
              if ("" === nW) return;
              let WW = null;
              if ("string" === typeof JW.subLanguage) {
                if (!mW[JW.subLanguage]) return void HW.addText(nW);
                WW = kW(JW.subLanguage, nW, !0, hW[JW.subLanguage]), hW[JW.subLanguage] = WW._top
              } else WW = sW(nW, JW.subLanguage.length ? JW.subLanguage : null);
              JW.relevance > 0 && (uW += WW.relevance), HW.__addSublanguage(WW._emitter, WW.language)
            }() : wW(), nW = ""
          }

          function xW(WW, iW) {
            "" !== WW && (HW.startScope(iW), HW.addText(WW), HW.endScope())
          }

          function lW(WW, iW) {
            let OW = 1;
            const mW = iW.length - 1;
            for (; OW <= mW;) {
              if (!WW._emit[OW]) {
                OW++;
                continue
              }
              const mW = SW.classNameAliases[WW[OW]] || WW[OW],
                EW = iW[OW];
              mW ? xW(EW, mW) : (nW = EW, wW(), nW = ""), OW++
            }
          }

          function AW(WW, iW) {
            return WW.scope && "string" === typeof WW.scope && HW.openNode(SW.classNameAliases[WW.scope] || WW.scope), WW.beginScope && (WW.beginScope._wrap ? (xW(nW, SW.classNameAliases[WW.beginScope._wrap] || WW.beginScope._wrap), nW = "") : WW.beginScope._multi && (lW(WW.beginScope, iW), nW = "")), JW = Object.create(WW, {
              parent: {
                value: JW
              }
            }), JW
          }

          function bW(WW, iW, mW) {
            let EW = function(WW, iW) {
              const OW = WW && WW.exec(iW);
              return OW && 0 === OW.index
            }(WW.endRe, mW);
            if (EW) {
              if (WW["on:end"]) {
                const mW = new OW(WW);
                WW["on:end"](iW, mW), mW.isMatchIgnored && (EW = !1)
              }
              if (EW) {
                for (; WW.endsParent && WW.parent;) WW = WW.parent;
                return WW
              }
            }
            if (WW.endsWithParent) return bW(WW.parent, iW, mW)
          }

          function jW(WW) {
            return 0 === JW.matcher.regexIndex ? (nW += WW[0], 1) : (eW = !0, 0)
          }

          function UW(WW) {
            const OW = WW[0],
              mW = iW.substring(WW.index),
              EW = bW(JW, WW, mW);
            if (!EW) return wi;
            const NW = JW;
            JW.endScope && JW.endScope._wrap ? (ZW(), xW(OW, JW.endScope._wrap)) : JW.endScope && JW.endScope._multi ? (ZW(), lW(JW.endScope, WW)) : NW.skip ? nW += OW : (NW.returnEnd || NW.excludeEnd || (nW += OW), ZW(), NW.excludeEnd && (nW = OW));
            do {
              JW.scope && HW.closeNode(), JW.skip || JW.subLanguage || (uW += JW.relevance), JW = JW.parent
            } while (JW !== EW.parent);
            return EW.starts && AW(EW.starts, WW), NW.returnEnd ? 0 : OW.length
          }
          let MW = {};

          function KW(mW, NW) {
            const LW = NW && NW[0];
            if (nW += mW, null == LW) return ZW(), 0;
            if ("kZ" === MW.type && "end" === NW.type && MW.index === NW.index && "" === LW) {
              if (nW += iW.slice(NW.index, NW.index + 1), !PW) {
                const iW = new Error(`0 width match regex (${WW})`);
                throw iW.languageName = WW, iW.badRule = MW.rule, iW
              }
              return 1
            }
            if (MW = NW, "kZ" === NW.type) return function(WW) {
              const iW = WW[0],
                mW = WW.rule,
                EW = new OW(mW),
                NW = [mW.__beforeBegin, mW["on:begin"]];
              for (const OW of NW)
                if (OW && (OW(WW, EW), EW.isMatchIgnored)) return jW(iW);
              return mW.skip ? nW += iW : (mW.excludeBegin && (nW += iW), ZW(), mW.returnBegin || mW.excludeBegin || (nW = iW)), AW(mW, WW), mW.returnBegin ? 0 : iW.length
            }(NW);
            if ("illegal" === NW.type && !EW) {
              const WW = new Error('Illegal lexeme "' + LW + '" for mode "' + (JW.scope || "<unnamed>") + '"');
              throw WW.mode = JW, WW
            }
            if ("end" === NW.type) {
              const WW = UW(NW);
              if (WW !== wi) return WW
            }
            if ("illegal" === NW.type && "" === LW) return nW += "\n", 1;
            if (dW > 1e5 && dW > 3 * NW.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return nW += LW, LW.length
          }
          const SW = YW(WW);
          if (!SW) throw FW(LW.replace("{}", WW)), new Error('Unknown language: "' + WW + '"');
          const yW = Ei(SW);
          let TW = "",
            JW = NW || yW;
          const hW = {},
            HW = new tW.__emitter(tW);
          ! function() {
            const WW = [];
            for (let iW = JW; iW !== SW; iW = iW.parent) iW.scope && WW.unshift(iW.scope);
            WW.forEach((WW => HW.openNode(WW)))
          }();
          let nW = "",
            uW = 0,
            oW = 0,
            dW = 0,
            eW = !1;
          try {
            if (SW.__emitTokens) SW.__emitTokens(iW, HW);
            else {
              for (JW.matcher.considerAll();;) {
                dW++, eW ? eW = !1 : JW.matcher.considerAll(), JW.matcher.lastIndex = oW;
                const WW = JW.matcher.exec(iW);
                if (!WW) break;
                const OW = KW(iW.substring(oW, WW.index), WW);
                oW = WW.index + OW
              }
              KW(iW.substring(oW))
            }
            return HW.finalize(), TW = HW.toHTML(), {
              language: WW,
              value: TW,
              relevance: uW,
              illegal: !1,
              _emitter: HW,
              _top: JW
            }
          } catch (vW) {
            if (vW.message && vW.message.includes("Illegal")) return {
              language: WW,
              value: Li(iW),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: vW.message,
                index: oW,
                context: iW.slice(oW - 100, oW + 100),
                mode: vW.mode,
                resultSoFar: TW
              },
              _emitter: HW
            };
            if (PW) return {
              language: WW,
              value: Li(iW),
              illegal: !1,
              relevance: 0,
              errorRaised: vW,
              _emitter: HW,
              _top: JW
            };
            throw vW
          }
        }

        function sW(WW, iW) {
          iW = iW || tW.languages || Object.keys(mW);
          const OW = function(WW) {
              const iW = {
                value: Li(WW),
                illegal: !1,
                relevance: 0,
                _top: cW,
                _emitter: new tW.__emitter(tW)
              };
              return iW._emitter.addText(WW), iW
            }(WW),
            EW = iW.filter(YW).filter(TW).map((iW => kW(iW, WW, !1)));
          EW.unshift(OW);
          const NW = EW.sort(((WW, iW) => {
              if (WW.relevance !== iW.relevance) return iW.relevance - WW.relevance;
              if (WW.language && iW.language) {
                if (YW(WW.language).supersetOf === iW.language) return 1;
                if (YW(iW.language).supersetOf === WW.language) return -1
              }
              return 0
            })),
            [PW, LW] = NW,
            wW = PW;
          return wW.secondBest = LW, wW
        }

        function MW(WW) {
          let iW = null;
          const OW = function(WW) {
            let iW = WW.className + " ";
            iW += WW.parentNode ? WW.parentNode.className : "";
            const OW = tW.languageDetectRe.exec(iW);
            if (OW) {
              const iW = YW(OW[1]);
              return iW || (QW(LW.replace("{}", OW[1])), QW("Falling back to no-highlight mode for this block.", WW)), iW ? OW[1] : "no-highlight"
            }
            return iW.split(/\s+/).find((WW => jW(WW) || YW(WW)))
          }(WW);
          if (jW(OW)) return;
          if (JW("before:highlightElement", {
              el: WW,
              language: OW
            }), WW.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", WW);
          if (WW.children.length > 0 && (tW.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(WW)), tW.throwUnescapedHTML)) {
            throw new Pi("One of your code blocks includes unescaped HTML.", WW.innerHTML)
          }
          iW = WW;
          const mW = iW.textContent,
            NW = OW ? UW(mW, {
              language: OW,
              ignoreIllegals: !0
            }) : sW(mW);
          WW.innerHTML = NW.value, WW.dataset.highlighted = "yes",
            function(WW, iW, OW) {
              const mW = iW && EW[iW] || OW;
              WW.classList.add("hljs"), WW.classList.add(`language-${mW}`)
            }(WW, OW, NW.language), WW.result = {
              language: NW.language,
              re: NW.relevance,
              relevance: NW.relevance
            }, NW.secondBest && (WW.secondBest = {
              language: NW.secondBest.language,
              relevance: NW.secondBest.relevance
            }), JW("after:highlightElement", {
              el: WW,
              result: NW,
              text: mW
            })
        }
        let KW = !1;

        function SW() {
          if ("loading" === document.readyState) return KW || window.addEventListener("DOMContentLoaded", (function() {
            SW()
          }), !1), void(KW = !0);
          document.querySelectorAll(tW.cssSelector).forEach(MW)
        }

        function YW(WW) {
          return WW = (WW || "").toLowerCase(), mW[WW] || mW[EW[WW]]
        }

        function yW(WW, iW) {
          let {
            languageName: OW
          } = iW;
          "string" === typeof WW && (WW = [WW]), WW.forEach((WW => {
            EW[WW.toLowerCase()] = OW
          }))
        }

        function TW(WW) {
          const iW = YW(WW);
          return iW && !iW.disableAutodetect
        }

        function JW(WW, iW) {
          const OW = WW;
          NW.forEach((function(WW) {
            WW[OW] && WW[OW](iW)
          }))
        }
        Object.assign(WW, {
          highlight: UW,
          highlightAuto: sW,
          highlightAll: SW,
          highlightElement: MW,
          highlightBlock: function(WW) {
            return Wi("10.7.0", "highlightBlock will be removed entirely in v12.0"), Wi("10.7.0", "Please use highlightElement now."), MW(WW)
          },
          configure: function(WW) {
            tW = ci(tW, WW)
          },
          initHighlighting: () => {
            SW(), Wi("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            SW(), Wi("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(iW, OW) {
            let EW = null;
            try {
              EW = OW(WW)
            } catch (NW) {
              if (FW("Language definition for '{}' could not be registered.".replace("{}", iW)), !PW) throw NW;
              FW(NW), EW = cW
            }
            EW.name || (EW.name = iW), mW[iW] = EW, EW.rawDefinition = OW.bind(null, WW), EW.aliases && yW(EW.aliases, {
              languageName: iW
            })
          },
          unregisterLanguage: function(WW) {
            delete mW[WW];
            for (const iW of Object.keys(EW)) EW[iW] === WW && delete EW[iW]
          },
          listLanguages: function() {
            return Object.keys(mW)
          },
          getLanguage: YW,
          registerAliases: yW,
          autoDetection: TW,
          inherit: ci,
          addPlugin: function(WW) {
            ! function(WW) {
              WW["before:highlightBlock"] && !WW["before:highlightElement"] && (WW["before:highlightElement"] = iW => {
                WW["before:highlightBlock"](Object.assign({
                  block: iW.el
                }, iW))
              }), WW["after:highlightBlock"] && !WW["after:highlightElement"] && (WW["after:highlightElement"] = iW => {
                WW["after:highlightBlock"](Object.assign({
                  block: iW.el
                }, iW))
              })
            }(WW), NW.push(WW)
          },
          removePlugin: function(WW) {
            const iW = NW.indexOf(WW); - 1 !== iW && NW.splice(iW, 1)
          }
        }), WW.debugMode = function() {
          PW = !1
        }, WW.safeMode = function() {
          PW = !0
        }, WW.versionString = "11.11.1", WW.regex = {
          concat: AW,
          lookahead: ZW,
          either: bW,
          optional: lW,
          anyNumberOfTimes: xW
        };
        for (const OW in pW) "object" === typeof pW[OW] && iW(pW[OW]);
        return Object.assign(WW, pW), WW
      },
      Zi = ti({});
    Zi.newInstance = () => ti({}), WW.exports = Zi, Zi.HighlightJS = Zi, Zi.default = Zi
  },
  5460: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    const mW = OW(5463)
  },
  5467: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => ZW
    });
    const mW = "[A-Za-z$_][0-9A-Za-z$_]*",
      EW = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      NW = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      PW = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      LW = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      cW = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      wW = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      tW = [].concat(cW, PW, LW);

    function ZW(WW) {
      const iW = WW.regex,
        OW = mW,
        ZW = "<>",
        xW = "</>",
        lW = {
          kZ: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (WW, iW) => {
            const OW = WW[0].length + WW.index,
              mW = WW.input[OW];
            if ("<" === mW || "," === mW) return void iW.ignoreMatch();
            let EW;
            ">" === mW && (((WW, iW) => {
              let {
                after: OW
              } = iW;
              const mW = "</" + WW[0].slice(1);
              return -1 !== WW.input.indexOf(mW, OW)
            })(WW, {
              after: OW
            }) || iW.ignoreMatch());
            const NW = WW.input.substring(OW);
            ((EW = NW.match(/^\s*=/)) || (EW = NW.match(/^\s+extends\s+/)) && 0 === EW.index) && iW.ignoreMatch()
          }
        },
        AW = {
          $pattern: mW,
          keyword: EW,
          literal: NW,
          built_in: tW,
          "variable.language": wW
        },
        bW = "[0-9](_?[0-9])*",
        jW = `\\.(${bW})`,
        UW = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        kW = {
          className: "number",
          variants: [{
            kZ: `(\\b(${UW})((${jW})|\\.)?|(${jW}))[eE][+-]?(${bW})\\b`
          }, {
            kZ: `\\b(${UW})\\b((${jW})\\b|\\.)?|(${jW})\\b`
          }, {
            kZ: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            kZ: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            kZ: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            kZ: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            kZ: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        sW = {
          className: "subst",
          kZ: "\\$\\{",
          end: "\\}",
          keywords: AW,
          contains: []
        },
        MW = {
          kZ: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, sW],
            subLanguage: "xml"
          }
        },
        KW = {
          kZ: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, sW],
            subLanguage: "css"
          }
        },
        SW = {
          kZ: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, sW],
            subLanguage: "graphql"
          }
        },
        YW = {
          className: "string",
          kZ: "`",
          end: "`",
          contains: [WW.BACKSLASH_ESCAPE, sW]
        },
        yW = {
          className: "comment",
          variants: [WW.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              kZ: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                kZ: "@[A-Za-z]+"
              }, {
                className: "type",
                kZ: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                kZ: OW + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                kZ: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), WW.C_BLOCK_COMMENT_MODE, WW.C_LINE_COMMENT_MODE]
        },
        TW = [WW.APOS_STRING_MODE, WW.QUOTE_STRING_MODE, MW, KW, SW, YW, {
          match: /\$\d+/
        }, kW];
      sW.contains = TW.concat({
        kZ: /\{/,
        end: /\}/,
        keywords: AW,
        contains: ["self"].concat(TW)
      });
      const JW = [].concat(yW, sW.contains),
        hW = JW.concat([{
          kZ: /(\s*)\(/,
          end: /\)/,
          keywords: AW,
          contains: ["self"].concat(JW)
        }]),
        HW = {
          className: "params",
          kZ: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: AW,
          contains: hW
        },
        nW = {
          variants: [{
            match: [/class/, /\s+/, OW, /\s+/, /extends/, /\s+/, iW.concat(OW, "(", iW.concat(/\./, OW), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, OW],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        uW = {
          relevance: 0,
          match: iW.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...PW, ...LW]
          }
        },
        oW = {
          variants: [{
            match: [/function/, /\s+/, OW, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [HW],
          illegal: /%/
        };
      const dW = {
        match: iW.concat(/\b/, (eW = [...cW, "super", "import"].map((WW => `${WW}\\s*\\(`)), iW.concat("(?!", eW.join("|"), ")")), OW, iW.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var eW;
      const vW = {
          kZ: iW.concat(/\./, iW.lookahead(iW.concat(OW, /(?![0-9A-Za-z$_(])/))),
          end: OW,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        gW = {
          match: [/get|set/, /\s+/, OW, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            kZ: /\(\)/
          }, HW]
        },
        DW = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + WW.UNDERSCORE_IDENT_RE + ")\\s*=>",
        VW = {
          match: [/const|var|let/, /\s+/, OW, /\s*/, /=\s*/, /(async\s*)?/, iW.lookahead(DW)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [HW]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: AW,
        exports: {
          PARAMS_CONTAINS: hW,
          CLASS_REFERENCE: uW
        },
        illegal: /#(?![$_A-z])/,
        contains: [WW.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          kZ: /^\s*['"]use (strict|asm)['"]/
        }, WW.APOS_STRING_MODE, WW.QUOTE_STRING_MODE, MW, KW, SW, YW, yW, {
          match: /\$\d+/
        }, kW, uW, {
          scope: "attr",
          match: OW + iW.lookahead(":"),
          relevance: 0
        }, VW, {
          kZ: "(" + WW.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [yW, WW.REGEXP_MODE, {
            className: "function",
            kZ: DW,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                kZ: WW.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                kZ: /\(\s*\)/,
                skip: !0
              }, {
                kZ: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: AW,
                contains: hW
              }]
            }]
          }, {
            kZ: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              kZ: ZW,
              end: xW
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              kZ: lW.kZ,
              "on:begin": lW.isTrulyOpeningTag,
              end: lW.end
            }],
            subLanguage: "xml",
            contains: [{
              kZ: lW.kZ,
              end: lW.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, oW, {
          beginKeywords: "while if switch catch for"
        }, {
          kZ: "\\b(?!function)" + WW.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [HW, WW.inherit(WW.TITLE_MODE, {
            kZ: OW,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, vW, {
          match: "\\$" + OW,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [HW]
        }, dW, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, nW, gW, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5470: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW
    });
    const mW = "[A-Za-z$_][0-9A-Za-z$_]*",
      EW = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      NW = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      PW = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      LW = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      cW = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      wW = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      tW = [].concat(cW, PW, LW);

    function ZW(WW) {
      const iW = WW.regex,
        OW = mW,
        ZW = "<>",
        xW = "</>",
        lW = {
          kZ: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (WW, iW) => {
            const OW = WW[0].length + WW.index,
              mW = WW.input[OW];
            if ("<" === mW || "," === mW) return void iW.ignoreMatch();
            let EW;
            ">" === mW && (((WW, iW) => {
              let {
                after: OW
              } = iW;
              const mW = "</" + WW[0].slice(1);
              return -1 !== WW.input.indexOf(mW, OW)
            })(WW, {
              after: OW
            }) || iW.ignoreMatch());
            const NW = WW.input.substring(OW);
            ((EW = NW.match(/^\s*=/)) || (EW = NW.match(/^\s+extends\s+/)) && 0 === EW.index) && iW.ignoreMatch()
          }
        },
        AW = {
          $pattern: mW,
          keyword: EW,
          literal: NW,
          built_in: tW,
          "variable.language": wW
        },
        bW = "[0-9](_?[0-9])*",
        jW = `\\.(${bW})`,
        UW = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        kW = {
          className: "number",
          variants: [{
            kZ: `(\\b(${UW})((${jW})|\\.)?|(${jW}))[eE][+-]?(${bW})\\b`
          }, {
            kZ: `\\b(${UW})\\b((${jW})\\b|\\.)?|(${jW})\\b`
          }, {
            kZ: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            kZ: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            kZ: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            kZ: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            kZ: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        sW = {
          className: "subst",
          kZ: "\\$\\{",
          end: "\\}",
          keywords: AW,
          contains: []
        },
        MW = {
          kZ: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, sW],
            subLanguage: "xml"
          }
        },
        KW = {
          kZ: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, sW],
            subLanguage: "css"
          }
        },
        SW = {
          kZ: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, sW],
            subLanguage: "graphql"
          }
        },
        YW = {
          className: "string",
          kZ: "`",
          end: "`",
          contains: [WW.BACKSLASH_ESCAPE, sW]
        },
        yW = {
          className: "comment",
          variants: [WW.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              kZ: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                kZ: "@[A-Za-z]+"
              }, {
                className: "type",
                kZ: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                kZ: OW + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                kZ: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), WW.C_BLOCK_COMMENT_MODE, WW.C_LINE_COMMENT_MODE]
        },
        TW = [WW.APOS_STRING_MODE, WW.QUOTE_STRING_MODE, MW, KW, SW, YW, {
          match: /\$\d+/
        }, kW];
      sW.contains = TW.concat({
        kZ: /\{/,
        end: /\}/,
        keywords: AW,
        contains: ["self"].concat(TW)
      });
      const JW = [].concat(yW, sW.contains),
        hW = JW.concat([{
          kZ: /(\s*)\(/,
          end: /\)/,
          keywords: AW,
          contains: ["self"].concat(JW)
        }]),
        HW = {
          className: "params",
          kZ: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: AW,
          contains: hW
        },
        nW = {
          variants: [{
            match: [/class/, /\s+/, OW, /\s+/, /extends/, /\s+/, iW.concat(OW, "(", iW.concat(/\./, OW), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, OW],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        uW = {
          relevance: 0,
          match: iW.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...PW, ...LW]
          }
        },
        oW = {
          variants: [{
            match: [/function/, /\s+/, OW, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [HW],
          illegal: /%/
        };
      const dW = {
        match: iW.concat(/\b/, (eW = [...cW, "super", "import"].map((WW => `${WW}\\s*\\(`)), iW.concat("(?!", eW.join("|"), ")")), OW, iW.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var eW;
      const vW = {
          kZ: iW.concat(/\./, iW.lookahead(iW.concat(OW, /(?![0-9A-Za-z$_(])/))),
          end: OW,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        gW = {
          match: [/get|set/, /\s+/, OW, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            kZ: /\(\)/
          }, HW]
        },
        DW = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + WW.UNDERSCORE_IDENT_RE + ")\\s*=>",
        VW = {
          match: [/const|var|let/, /\s+/, OW, /\s*/, /=\s*/, /(async\s*)?/, iW.lookahead(DW)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [HW]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: AW,
        exports: {
          PARAMS_CONTAINS: hW,
          CLASS_REFERENCE: uW
        },
        illegal: /#(?![$_A-z])/,
        contains: [WW.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          kZ: /^\s*['"]use (strict|asm)['"]/
        }, WW.APOS_STRING_MODE, WW.QUOTE_STRING_MODE, MW, KW, SW, YW, yW, {
          match: /\$\d+/
        }, kW, uW, {
          scope: "attr",
          match: OW + iW.lookahead(":"),
          relevance: 0
        }, VW, {
          kZ: "(" + WW.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [yW, WW.REGEXP_MODE, {
            className: "function",
            kZ: DW,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                kZ: WW.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                kZ: /\(\s*\)/,
                skip: !0
              }, {
                kZ: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: AW,
                contains: hW
              }]
            }]
          }, {
            kZ: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              kZ: ZW,
              end: xW
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              kZ: lW.kZ,
              "on:begin": lW.isTrulyOpeningTag,
              end: lW.end
            }],
            subLanguage: "xml",
            contains: [{
              kZ: lW.kZ,
              end: lW.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, oW, {
          beginKeywords: "while if switch catch for"
        }, {
          kZ: "\\b(?!function)" + WW.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [HW, WW.inherit(WW.TITLE_MODE, {
            kZ: OW,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, vW, {
          match: "\\$" + OW,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [HW]
        }, dW, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, nW, gW, {
          match: /\$[(.]/
        }]
      }
    }

    function xW(WW) {
      const iW = WW.regex,
        OW = ZW(WW),
        PW = mW,
        LW = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        cW = {
          kZ: [/namespace/, /\s+/, WW.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        xW = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: LW
          },
          contains: [OW.exports.CLASS_REFERENCE]
        },
        lW = {
          $pattern: mW,
          keyword: EW.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: NW,
          built_in: tW.concat(LW),
          "variable.language": wW
        },
        AW = {
          className: "meta",
          kZ: "@" + PW
        },
        bW = (WW, iW, OW) => {
          const mW = WW.contains.findIndex((WW => WW.label === iW));
          if (-1 === mW) throw new Error("can not find mode to replace");
          WW.contains.splice(mW, 1, OW)
        };
      Object.assign(OW.keywords, lW), OW.exports.PARAMS_CONTAINS.push(AW);
      const jW = OW.contains.find((WW => "attr" === WW.scope)),
        UW = Object.assign({}, jW, {
          match: iW.concat(PW, iW.lookahead(/\s*\?:/))
        });
      OW.exports.PARAMS_CONTAINS.push([OW.exports.CLASS_REFERENCE, jW, UW]), OW.contains = OW.contains.concat([AW, cW, xW, UW]), bW(OW, "shebang", WW.SHEBANG()), bW(OW, "use_strict", {
        className: "meta",
        relevance: 10,
        kZ: /^\s*['"]use strict['"]/
      });
      return OW.contains.find((WW => "func.def" === WW.label)).relevance = 0, Object.assign(OW, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), OW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);