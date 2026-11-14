export const id = 64;
export const ids = [64];
export const modules = {
  3681: WW => {
    function RW(WW) {
      return WW instanceof Map ? WW.clear = WW.delete = WW.set = function() {
        throw new Error("map is read-only")
      } : WW instanceof Set && (WW.add = WW.clear = WW.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(WW), Object.getOwnPropertyNames(WW).forEach((MW => {
        const wW = WW[MW],
          CW = typeof wW;
        "object" !== CW && "function" !== CW || Object.isFrozen(wW) || RW(wW)
      })), WW
    }
    class MW {
      constructor(WW) {
        void 0 === WW.data && (WW.data = {}), this.data = WW.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function wW(WW) {
      return WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function CW(WW) {
      const RW = Object.create(null);
      for (const zR in WW) RW[zR] = WW[zR];
      for (var MW = arguments.length, wW = new Array(MW > 1 ? MW - 1 : 0), CW = 1; CW < MW; CW++) wW[CW - 1] = arguments[CW];
      return wW.forEach((function(WW) {
        for (const MW in WW) RW[MW] = WW[MW]
      })), RW
    }
    const zR = WW => !!WW.scope;
    class AW {
      constructor(WW, RW) {
        this.buffer = "", this.classPrefix = RW.classPrefix, WW.walk(this)
      }
      addText(WW) {
        this.buffer += wW(WW)
      }
      openNode(WW) {
        if (!zR(WW)) return;
        const RW = ((WW, RW) => {
          let {
            prefix: MW
          } = RW;
          if (WW.startsWith("language:")) return WW.replace("language:", "language-");
          if (WW.includes(".")) {
            const RW = WW.split(".");
            return [`${MW}${RW.shift()}`, ...RW.map(((WW, RW) => `${WW}${"_".repeat(RW+1)}`))].join(" ")
          }
          return `${MW}${WW}`
        })(WW.scope, {
          prefix: this.classPrefix
        });
        this.span(RW)
      }
      closeNode(WW) {
        zR(WW) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(WW) {
        this.buffer += `<span class="${WW}">`
      }
    }
    const bR = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const RW = {
        children: []
      };
      return Object.assign(RW, WW), RW
    };
    class yR {
      constructor() {
        this.EQ = bR(), this.stack = [this.EQ]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.EQ
      }
      add(WW) {
        this.top.children.push(WW)
      }
      openNode(WW) {
        const RW = bR({
          scope: WW
        });
        this.add(RW), this.stack.push(RW)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.EQ, null, 4)
      }
      walk(WW) {
        return this.constructor._walk(WW, this.EQ)
      }
      static _walk(WW, RW) {
        return "string" === typeof RW ? WW.addText(RW) : RW.children && (WW.openNode(RW), RW.children.forEach((RW => this._walk(WW, RW))), WW.closeNode(RW)), WW
      }
      static _collapse(WW) {
        "string" !== typeof WW && WW.children && (WW.children.every((WW => "string" === typeof WW)) ? WW.children = [WW.children.join("")] : WW.children.forEach((WW => {
          yR._collapse(WW)
        })))
      }
    }
    class NW extends yR {
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
      __addSublanguage(WW, RW) {
        const MW = WW.root;
        RW && (MW.scope = `language:${RW}`), this.add(MW)
      }
      toHTML() {
        return new AW(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function eW(WW) {
      return WW ? "string" === typeof WW ? WW : WW.source : null
    }

    function BW(WW) {
      return gR("(?=", WW, ")")
    }

    function tR(WW) {
      return gR("(?:", WW, ")*")
    }

    function TW(WW) {
      return gR("(?:", WW, ")?")
    }

    function gR() {
      for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
      return RW.map((WW => eW(WW))).join("")
    }

    function iR() {
      for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
      const wW = function(WW) {
        const RW = WW[WW.length - 1];
        return "object" === typeof RW && RW.constructor === Object ? (WW.splice(WW.length - 1, 1), RW) : {}
      }(RW);
      return "(" + (wW.capture ? "" : "?:") + RW.map((WW => eW(WW))).join("|") + ")"
    }

    function YW(WW) {
      return new RegExp(WW.toString() + "|").exec("").length - 1
    }
    const JW = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function PW(WW, RW) {
      let {
        joinWith: MW
      } = RW, wW = 0;
      return WW.map((WW => {
        wW += 1;
        const RW = wW;
        let MW = eW(WW),
          CW = "";
        for (; MW.length > 0;) {
          const WW = JW.exec(MW);
          if (!WW) {
            CW += MW;
            break
          }
          CW += MW.substring(0, WW.index), MW = MW.substring(WW.index + WW[0].length), "\\" === WW[0][0] && WW[1] ? CW += "\\" + String(Number(WW[1]) + RW) : (CW += WW[0], "(" === WW[0] && wW++)
        }
        return CW
      })).map((WW => `(${WW})`)).join(MW)
    }
    const IW = "[a-zA-Z]\\w*",
      oW = "[a-zA-Z_]\\w*",
      lW = "\\b\\d+(\\.\\d+)?",
      FW = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      fW = "\\b(0b[01]+)",
      QW = {
        IM: "\\\\[\\s\\S]",
        relevance: 0
      },
      rR = {
        scope: "string",
        IM: "'",
        end: "'",
        illegal: "\\n",
        contains: [QW]
      },
      cR = {
        scope: "string",
        IM: '"',
        end: '"',
        illegal: "\\n",
        contains: [QW]
      },
      XW = function(WW, RW) {
        const MW = CW({
          scope: "comment",
          IM: WW,
          end: RW,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        MW.contains.push({
          scope: "doctag",
          IM: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const wW = iR("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return MW.contains.push({
          IM: gR(/[ ]+/, "(", wW, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), MW
      },
      jR = XW("//", "$"),
      kR = XW("/\\*", "\\*/"),
      aR = XW("#", "$"),
      sW = {
        scope: "number",
        IM: lW,
        relevance: 0
      },
      dW = {
        scope: "number",
        IM: FW,
        relevance: 0
      },
      pW = {
        scope: "number",
        IM: fW,
        relevance: 0
      },
      hW = {
        scope: "regexp",
        IM: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [QW, {
          IM: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [QW]
        }]
      },
      UW = {
        scope: "title",
        IM: IW,
        relevance: 0
      },
      EW = {
        scope: "title",
        IM: oW,
        relevance: 0
      },
      VW = {
        IM: "\\.\\s*" + oW,
        relevance: 0
      };
    var mR = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: rR,
      BACKSLASH_ESCAPE: QW,
      BINARY_NUMBER_MODE: pW,
      BINARY_NUMBER_RE: fW,
      COMMENT: XW,
      C_BLOCK_COMMENT_MODE: kR,
      C_LINE_COMMENT_MODE: jR,
      C_NUMBER_MODE: dW,
      C_NUMBER_RE: FW,
      END_SAME_AS_BEGIN: function(WW) {
        return Object.assign(WW, {
          "on:begin": (WW, RW) => {
            RW.data._beginMatch = WW[1]
          },
          "on:end": (WW, RW) => {
            RW.data._beginMatch !== WW[1] && RW.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: aR,
      IDENT_RE: IW,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: VW,
      NUMBER_MODE: sW,
      NUMBER_RE: lW,
      PHRASAL_WORDS_MODE: {
        IM: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: cR,
      REGEXP_MODE: hW,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const RW = /^#![ ]*\//;
        return WW.binary && (WW.IM = gR(RW, /.*\b/, WW.binary, /\b.*/)), CW({
          scope: "meta",
          IM: RW,
          end: /$/,
          relevance: 0,
          "on:begin": (WW, RW) => {
            0 !== WW.index && RW.ignoreMatch()
          }
        }, WW)
      },
      TITLE_MODE: UW,
      UNDERSCORE_IDENT_RE: oW,
      UNDERSCORE_TITLE_MODE: EW
    });

    function xR(WW, RW) {
      "." === WW.input[WW.index - 1] && RW.ignoreMatch()
    }

    function vR(WW, RW) {
      void 0 !== WW.className && (WW.scope = WW.className, delete WW.className)
    }

    function KW(WW, RW) {
      RW && WW.beginKeywords && (WW.IM = "\\b(" + WW.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", WW.__beforeBegin = xR, WW.keywords = WW.keywords || WW.beginKeywords, delete WW.beginKeywords, void 0 === WW.relevance && (WW.relevance = 0))
    }

    function uW(WW, RW) {
      Array.isArray(WW.illegal) && (WW.illegal = iR(...WW.illegal))
    }

    function OW(WW, RW) {
      if (WW.match) {
        if (WW.IM || WW.end) throw new Error("begin & end are not supported with match");
        WW.IM = WW.match, delete WW.match
      }
    }

    function nW(WW, RW) {
      void 0 === WW.relevance && (WW.relevance = 1)
    }
    const GW = (WW, RW) => {
        if (!WW.beforeMatch) return;
        if (WW.starts) throw new Error("beforeMatch cannot be used with starts");
        const MW = Object.assign({}, WW);
        Object.keys(WW).forEach((RW => {
          delete WW[RW]
        })), WW.keywords = MW.keywords, WW.IM = gR(MW.beforeMatch, BW(MW.IM)), WW.starts = {
          relevance: 0,
          contains: [Object.assign(MW, {
            endsParent: !0
          })]
        }, WW.relevance = 0, delete MW.beforeMatch
      },
      LW = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function HW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const wW = Object.create(null);
      return "string" === typeof WW ? CW(MW, WW.split(" ")) : Array.isArray(WW) ? CW(MW, WW) : Object.keys(WW).forEach((function(MW) {
        Object.assign(wW, HW(WW[MW], RW, MW))
      })), wW;

      function CW(WW, MW) {
        RW && (MW = MW.map((WW => WW.toLowerCase()))), MW.forEach((function(RW) {
          const MW = RW.split("|");
          wW[MW[0]] = [WW, DW(MW[0], MW[1])]
        }))
      }
    }

    function DW(WW, RW) {
      return RW ? Number(RW) : function(WW) {
        return LW.includes(WW.toLowerCase())
      }(WW) ? 0 : 1
    }
    const qR = {},
      ZW = WW => {
        console.error(WW)
      },
      SW = function(WW) {
        for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
        console.log(`WARN: ${WW}`, ...MW)
      },
      WR = (WW, RW) => {
        qR[`${WW}/${RW}`] || (console.log(`Deprecated as of ${WW}. ${RW}`), qR[`${WW}/${RW}`] = !0)
      },
      RR = new Error;

    function MR(WW, RW, MW) {
      let {
        key: wW
      } = MW, CW = 0;
      const zR = WW[wW],
        AW = {},
        bR = {};
      for (let yR = 1; yR <= RW.length; yR++) bR[yR + CW] = zR[yR], AW[yR + CW] = !0, CW += YW(RW[yR - 1]);
      WW[wW] = bR, WW[wW]._emit = AW, WW[wW]._multi = !0
    }

    function wR(WW) {
      ! function(WW) {
        WW.scope && "object" === typeof WW.scope && null !== WW.scope && (WW.beginScope = WW.scope, delete WW.scope)
      }(WW), "string" === typeof WW.beginScope && (WW.beginScope = {
          _wrap: WW.beginScope
        }), "string" === typeof WW.endScope && (WW.endScope = {
          _wrap: WW.endScope
        }),
        function(WW) {
          if (Array.isArray(WW.IM)) {
            if (WW.skip || WW.excludeBegin || WW.returnBegin) throw ZW("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), RR;
            if ("object" !== typeof WW.beginScope || null === WW.beginScope) throw ZW("beginScope must be object"), RR;
            MR(WW, WW.IM, {
              key: "beginScope"
            }), WW.IM = PW(WW.IM, {
              joinWith: ""
            })
          }
        }(WW),
        function(WW) {
          if (Array.isArray(WW.end)) {
            if (WW.skip || WW.excludeEnd || WW.returnEnd) throw ZW("skip, excludeEnd, returnEnd not compatible with endScope: {}"), RR;
            if ("object" !== typeof WW.endScope || null === WW.endScope) throw ZW("endScope must be object"), RR;
            MR(WW, WW.end, {
              key: "endScope"
            }), WW.end = PW(WW.end, {
              joinWith: ""
            })
          }
        }(WW)
    }

    function CR(WW) {
      function RW(RW, MW) {
        return new RegExp(eW(RW), "m" + (WW.case_insensitive ? "i" : "") + (WW.unicodeRegex ? "u" : "") + (MW ? "g" : ""))
      }
      class MW {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(WW, RW) {
          RW.position = this.position++, this.matchIndexes[this.matchAt] = RW, this.regexes.push([RW, WW]), this.matchAt += YW(WW) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const WW = this.regexes.map((WW => WW[1]));
          this.matcherRe = RW(PW(WW, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(WW) {
          this.matcherRe.lastIndex = this.lastIndex;
          const RW = this.matcherRe.exec(WW);
          if (!RW) return null;
          const MW = RW.findIndex(((WW, RW) => RW > 0 && void 0 !== WW)),
            wW = this.matchIndexes[MW];
          return RW.splice(0, MW), Object.assign(RW, wW)
        }
      }
      class wW {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(WW) {
          if (this.multiRegexes[WW]) return this.multiRegexes[WW];
          const RW = new MW;
          return this.rules.slice(WW).forEach((WW => {
            let [MW, wW] = WW;
            return RW.addRule(MW, wW)
          })), RW.compile(), this.multiRegexes[WW] = RW, RW
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(WW, RW) {
          this.rules.push([WW, RW]), "IM" === RW.type && this.count++
        }
        exec(WW) {
          const RW = this.getMatcher(this.regexIndex);
          RW.lastIndex = this.lastIndex;
          let MW = RW.exec(WW);
          if (this.resumingScanAtSamePosition())
            if (MW && MW.index === this.lastIndex);
            else {
              const RW = this.getMatcher(0);
              RW.lastIndex = this.lastIndex + 1, MW = RW.exec(WW)
            } return MW && (this.regexIndex += MW.position + 1, this.regexIndex === this.count && this.considerAll()), MW
        }
      }
      if (WW.compilerExtensions || (WW.compilerExtensions = []), WW.contains && WW.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return WW.classNameAliases = CW(WW.classNameAliases || {}),
        function MW(zR, AW) {
          const bR = zR;
          if (zR.isCompiled) return bR;
          [vR, OW, wR, GW].forEach((WW => WW(zR, AW))), WW.compilerExtensions.forEach((WW => WW(zR, AW))), zR.__beforeBegin = null, [KW, uW, nW].forEach((WW => WW(zR, AW))), zR.isCompiled = !0;
          let yR = null;
          return "object" === typeof zR.keywords && zR.keywords.$pattern && (zR.keywords = Object.assign({}, zR.keywords), yR = zR.keywords.$pattern, delete zR.keywords.$pattern), yR = yR || /\w+/, zR.keywords && (zR.keywords = HW(zR.keywords, WW.case_insensitive)), bR.keywordPatternRe = RW(yR, !0), AW && (zR.IM || (zR.IM = /\B|\b/), bR.beginRe = RW(bR.IM), zR.end || zR.endsWithParent || (zR.end = /\B|\b/), zR.end && (bR.endRe = RW(bR.end)), bR.terminatorEnd = eW(bR.end) || "", zR.endsWithParent && AW.terminatorEnd && (bR.terminatorEnd += (zR.end ? "|" : "") + AW.terminatorEnd)), zR.illegal && (bR.illegalRe = RW(zR.illegal)), zR.contains || (zR.contains = []), zR.contains = [].concat(...zR.contains.map((function(WW) {
            return function(WW) {
              WW.variants && !WW.cachedVariants && (WW.cachedVariants = WW.variants.map((function(RW) {
                return CW(WW, {
                  variants: null
                }, RW)
              })));
              if (WW.cachedVariants) return WW.cachedVariants;
              if (zM(WW)) return CW(WW, {
                starts: WW.starts ? CW(WW.starts) : null
              });
              if (Object.isFrozen(WW)) return CW(WW);
              return WW
            }("self" === WW ? zR : WW)
          }))), zR.contains.forEach((function(WW) {
            MW(WW, bR)
          })), zR.starts && MW(zR.starts, AW), bR.matcher = function(WW) {
            const RW = new wW;
            return WW.contains.forEach((WW => RW.addRule(WW.IM, {
              rule: WW,
              type: "IM"
            }))), WW.terminatorEnd && RW.addRule(WW.terminatorEnd, {
              type: "end"
            }), WW.illegal && RW.addRule(WW.illegal, {
              type: "illegal"
            }), RW
          }(bR), bR
        }(WW)
    }

    function zM(WW) {
      return !!WW && (WW.endsWithParent || zM(WW.starts))
    }
    class AR extends Error {
      constructor(WW, RW) {
        super(WW), this.name = "HTMLInjectionError", this.html = RW
      }
    }
    const bM = wW,
      yM = CW,
      NR = Symbol("nomatch"),
      eR = function(WW) {
        const wW = Object.create(null),
          CW = Object.create(null),
          zR = [];
        let AW = !0;
        const bR = "Could not find the language '{}', did you forget to load/include a language module?",
          yR = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let eW = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: NW
        };

        function YW(WW) {
          return eW.noHighlightRe.test(WW)
        }

        function JW(WW, RW, MW) {
          let wW = "",
            CW = "";
          "object" === typeof RW ? (wW = WW, MW = RW.ignoreIllegals, CW = RW.language) : (WR("10.7.0", "highlight(lang, code, ...args) has been deprecated."), WR("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), CW = WW, wW = RW), void 0 === MW && (MW = !0);
          const zR = {
            code: wW,
            language: CW
          };
          cR("before:highlight", zR);
          const AW = zR.result ? zR.result : PW(zR.language, zR.code, MW);
          return AW.code = zR.code, cR("after:highlight", AW), AW
        }

        function PW(WW, RW, CW, zR) {
          const yR = Object.create(null);

          function NW() {
            if (!cR.keywords) return void jR.addText(kR);
            let WW = 0;
            cR.keywordPatternRe.lastIndex = 0;
            let RW = cR.keywordPatternRe.exec(kR),
              MW = "";
            for (; RW;) {
              MW += kR.substring(WW, RW.index);
              const CW = FW.case_insensitive ? RW[0].toLowerCase() : RW[0],
                zR = (wW = CW, cR.keywords[wW]);
              if (zR) {
                const [WW, wW] = zR;
                if (jR.addText(MW), MW = "", yR[CW] = (yR[CW] || 0) + 1, yR[CW] <= 7 && (aR += wW), WW.startsWith("_")) MW += RW[0];
                else {
                  const MW = FW.classNameAliases[WW] || WW;
                  tR(RW[0], MW)
                }
              } else MW += RW[0];
              WW = cR.keywordPatternRe.lastIndex, RW = cR.keywordPatternRe.exec(kR)
            }
            var wW;
            MW += kR.substring(WW), jR.addText(MW)
          }

          function BW() {
            null != cR.subLanguage ? function() {
              if ("" === kR) return;
              let WW = null;
              if ("string" === typeof cR.subLanguage) {
                if (!wW[cR.subLanguage]) return void jR.addText(kR);
                WW = PW(cR.subLanguage, kR, !0, XW[cR.subLanguage]), XW[cR.subLanguage] = WW._top
              } else WW = IW(kR, cR.subLanguage.length ? cR.subLanguage : null);
              cR.relevance > 0 && (aR += WW.relevance), jR.__addSublanguage(WW._emitter, WW.language)
            }() : NW(), kR = ""
          }

          function tR(WW, RW) {
            "" !== WW && (jR.startScope(RW), jR.addText(WW), jR.endScope())
          }

          function TW(WW, RW) {
            let MW = 1;
            const wW = RW.length - 1;
            for (; MW <= wW;) {
              if (!WW._emit[MW]) {
                MW++;
                continue
              }
              const wW = FW.classNameAliases[WW[MW]] || WW[MW],
                CW = RW[MW];
              wW ? tR(CW, wW) : (kR = CW, NW(), kR = ""), MW++
            }
          }

          function gR(WW, RW) {
            return WW.scope && "string" === typeof WW.scope && jR.openNode(FW.classNameAliases[WW.scope] || WW.scope), WW.beginScope && (WW.beginScope._wrap ? (tR(kR, FW.classNameAliases[WW.beginScope._wrap] || WW.beginScope._wrap), kR = "") : WW.beginScope._multi && (TW(WW.beginScope, RW), kR = "")), cR = Object.create(WW, {
              parent: {
                value: cR
              }
            }), cR
          }

          function iR(WW, RW, wW) {
            let CW = function(WW, RW) {
              const MW = WW && WW.exec(RW);
              return MW && 0 === MW.index
            }(WW.endRe, wW);
            if (CW) {
              if (WW["on:end"]) {
                const wW = new MW(WW);
                WW["on:end"](RW, wW), wW.isMatchIgnored && (CW = !1)
              }
              if (CW) {
                for (; WW.endsParent && WW.parent;) WW = WW.parent;
                return WW
              }
            }
            if (WW.endsWithParent) return iR(WW.parent, RW, wW)
          }

          function YW(WW) {
            return 0 === cR.matcher.regexIndex ? (kR += WW[0], 1) : (pW = !0, 0)
          }

          function JW(WW) {
            const MW = WW[0],
              wW = RW.substring(WW.index),
              CW = iR(cR, WW, wW);
            if (!CW) return NR;
            const zR = cR;
            cR.endScope && cR.endScope._wrap ? (BW(), tR(MW, cR.endScope._wrap)) : cR.endScope && cR.endScope._multi ? (BW(), TW(cR.endScope, WW)) : zR.skip ? kR += MW : (zR.returnEnd || zR.excludeEnd || (kR += MW), BW(), zR.excludeEnd && (kR = MW));
            do {
              cR.scope && jR.closeNode(), cR.skip || cR.subLanguage || (aR += cR.relevance), cR = cR.parent
            } while (cR !== CW.parent);
            return CW.starts && gR(CW.starts, WW), zR.returnEnd ? 0 : MW.length
          }
          let oW = {};

          function lW(wW, zR) {
            const bR = zR && zR[0];
            if (kR += wW, null == bR) return BW(), 0;
            if ("IM" === oW.type && "end" === zR.type && oW.index === zR.index && "" === bR) {
              if (kR += RW.slice(zR.index, zR.index + 1), !AW) {
                const RW = new Error(`0 width match regex (${WW})`);
                throw RW.languageName = WW, RW.badRule = oW.rule, RW
              }
              return 1
            }
            if (oW = zR, "IM" === zR.type) return function(WW) {
              const RW = WW[0],
                wW = WW.rule,
                CW = new MW(wW),
                zR = [wW.__beforeBegin, wW["on:begin"]];
              for (const MW of zR)
                if (MW && (MW(WW, CW), CW.isMatchIgnored)) return YW(RW);
              return wW.skip ? kR += RW : (wW.excludeBegin && (kR += RW), BW(), wW.returnBegin || wW.excludeBegin || (kR = RW)), gR(wW, WW), wW.returnBegin ? 0 : RW.length
            }(zR);
            if ("illegal" === zR.type && !CW) {
              const WW = new Error('Illegal lexeme "' + bR + '" for mode "' + (cR.scope || "<unnamed>") + '"');
              throw WW.mode = cR, WW
            }
            if ("end" === zR.type) {
              const WW = JW(zR);
              if (WW !== NR) return WW
            }
            if ("illegal" === zR.type && "" === bR) return kR += "\n", 1;
            if (dW > 1e5 && dW > 3 * zR.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return kR += bR, bR.length
          }
          const FW = fW(WW);
          if (!FW) throw ZW(bR.replace("{}", WW)), new Error('Unknown language: "' + WW + '"');
          const QW = CR(FW);
          let rR = "",
            cR = zR || QW;
          const XW = {},
            jR = new eW.__emitter(eW);
          ! function() {
            const WW = [];
            for (let RW = cR; RW !== FW; RW = RW.parent) RW.scope && WW.unshift(RW.scope);
            WW.forEach((WW => jR.openNode(WW)))
          }();
          let kR = "",
            aR = 0,
            sW = 0,
            dW = 0,
            pW = !1;
          try {
            if (FW.__emitTokens) FW.__emitTokens(RW, jR);
            else {
              for (cR.matcher.considerAll();;) {
                dW++, pW ? pW = !1 : cR.matcher.considerAll(), cR.matcher.lastIndex = sW;
                const WW = cR.matcher.exec(RW);
                if (!WW) break;
                const MW = lW(RW.substring(sW, WW.index), WW);
                sW = WW.index + MW
              }
              lW(RW.substring(sW))
            }
            return jR.finalize(), rR = jR.toHTML(), {
              language: WW,
              value: rR,
              relevance: aR,
              illegal: !1,
              _emitter: jR,
              _top: cR
            }
          } catch (hW) {
            if (hW.message && hW.message.includes("Illegal")) return {
              language: WW,
              value: bM(RW),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: hW.message,
                index: sW,
                context: RW.slice(sW - 100, sW + 100),
                mode: hW.mode,
                resultSoFar: rR
              },
              _emitter: jR
            };
            if (AW) return {
              language: WW,
              value: bM(RW),
              illegal: !1,
              relevance: 0,
              errorRaised: hW,
              _emitter: jR,
              _top: cR
            };
            throw hW
          }
        }

        function IW(WW, RW) {
          RW = RW || eW.languages || Object.keys(wW);
          const MW = function(WW) {
              const RW = {
                value: bM(WW),
                illegal: !1,
                relevance: 0,
                _top: yR,
                _emitter: new eW.__emitter(eW)
              };
              return RW._emitter.addText(WW), RW
            }(WW),
            CW = RW.filter(fW).filter(rR).map((RW => PW(RW, WW, !1)));
          CW.unshift(MW);
          const zR = CW.sort(((WW, RW) => {
              if (WW.relevance !== RW.relevance) return RW.relevance - WW.relevance;
              if (WW.language && RW.language) {
                if (fW(WW.language).supersetOf === RW.language) return 1;
                if (fW(RW.language).supersetOf === WW.language) return -1
              }
              return 0
            })),
            [AW, bR] = zR,
            NW = AW;
          return NW.secondBest = bR, NW
        }

        function oW(WW) {
          let RW = null;
          const MW = function(WW) {
            let RW = WW.className + " ";
            RW += WW.parentNode ? WW.parentNode.className : "";
            const MW = eW.languageDetectRe.exec(RW);
            if (MW) {
              const RW = fW(MW[1]);
              return RW || (SW(bR.replace("{}", MW[1])), SW("Falling back to no-highlight mode for this block.", WW)), RW ? MW[1] : "no-highlight"
            }
            return RW.split(/\s+/).find((WW => YW(WW) || fW(WW)))
          }(WW);
          if (YW(MW)) return;
          if (cR("before:highlightElement", {
              el: WW,
              language: MW
            }), WW.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", WW);
          if (WW.children.length > 0 && (eW.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(WW)), eW.throwUnescapedHTML)) {
            throw new AR("One of your code blocks includes unescaped HTML.", WW.innerHTML)
          }
          RW = WW;
          const wW = RW.textContent,
            zR = MW ? JW(wW, {
              language: MW,
              ignoreIllegals: !0
            }) : IW(wW);
          WW.innerHTML = zR.value, WW.dataset.highlighted = "yes",
            function(WW, RW, MW) {
              const wW = RW && CW[RW] || MW;
              WW.classList.add("hljs"), WW.classList.add(`language-${wW}`)
            }(WW, MW, zR.language), WW.result = {
              language: zR.language,
              re: zR.relevance,
              relevance: zR.relevance
            }, zR.secondBest && (WW.secondBest = {
              language: zR.secondBest.language,
              relevance: zR.secondBest.relevance
            }), cR("after:highlightElement", {
              el: WW,
              result: zR,
              text: wW
            })
        }
        let lW = !1;

        function FW() {
          if ("loading" === document.readyState) return lW || window.addEventListener("DOMContentLoaded", (function() {
            FW()
          }), !1), void(lW = !0);
          document.querySelectorAll(eW.cssSelector).forEach(oW)
        }

        function fW(WW) {
          return WW = (WW || "").toLowerCase(), wW[WW] || wW[CW[WW]]
        }

        function QW(WW, RW) {
          let {
            languageName: MW
          } = RW;
          "string" === typeof WW && (WW = [WW]), WW.forEach((WW => {
            CW[WW.toLowerCase()] = MW
          }))
        }

        function rR(WW) {
          const RW = fW(WW);
          return RW && !RW.disableAutodetect
        }

        function cR(WW, RW) {
          const MW = WW;
          zR.forEach((function(WW) {
            WW[MW] && WW[MW](RW)
          }))
        }
        Object.assign(WW, {
          highlight: JW,
          highlightAuto: IW,
          highlightAll: FW,
          highlightElement: oW,
          highlightBlock: function(WW) {
            return WR("10.7.0", "highlightBlock will be removed entirely in v12.0"), WR("10.7.0", "Please use highlightElement now."), oW(WW)
          },
          configure: function(WW) {
            eW = yM(eW, WW)
          },
          initHighlighting: () => {
            FW(), WR("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            FW(), WR("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(RW, MW) {
            let CW = null;
            try {
              CW = MW(WW)
            } catch (zR) {
              if (ZW("Language definition for '{}' could not be registered.".replace("{}", RW)), !AW) throw zR;
              ZW(zR), CW = yR
            }
            CW.name || (CW.name = RW), wW[RW] = CW, CW.rawDefinition = MW.bind(null, WW), CW.aliases && QW(CW.aliases, {
              languageName: RW
            })
          },
          unregisterLanguage: function(WW) {
            delete wW[WW];
            for (const RW of Object.keys(CW)) CW[RW] === WW && delete CW[RW]
          },
          listLanguages: function() {
            return Object.keys(wW)
          },
          getLanguage: fW,
          registerAliases: QW,
          autoDetection: rR,
          inherit: yM,
          addPlugin: function(WW) {
            ! function(WW) {
              WW["before:highlightBlock"] && !WW["before:highlightElement"] && (WW["before:highlightElement"] = RW => {
                WW["before:highlightBlock"](Object.assign({
                  block: RW.el
                }, RW))
              }), WW["after:highlightBlock"] && !WW["after:highlightElement"] && (WW["after:highlightElement"] = RW => {
                WW["after:highlightBlock"](Object.assign({
                  block: RW.el
                }, RW))
              })
            }(WW), zR.push(WW)
          },
          removePlugin: function(WW) {
            const RW = zR.indexOf(WW); - 1 !== RW && zR.splice(RW, 1)
          }
        }), WW.debugMode = function() {
          AW = !1
        }, WW.safeMode = function() {
          AW = !0
        }, WW.versionString = "11.11.1", WW.regex = {
          concat: gR,
          lookahead: BW,
          either: iR,
          optional: TW,
          anyNumberOfTimes: tR
        };
        for (const MW in mR) "object" === typeof mR[MW] && RW(mR[MW]);
        return Object.assign(WW, mR), WW
      },
      BR = eR({});
    BR.newInstance = () => eR({}), WW.exports = BR, BR.HighlightJS = BR, BR.default = BR
  },
  3674: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = MW(3681)
  },
  3690: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => BW
    });
    const wW = "[A-Za-z$_][0-9A-Za-z$_]*",
      CW = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      zR = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      AW = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      bR = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      yR = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      NW = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      eW = [].concat(yR, AW, bR);

    function BW(WW) {
      const RW = WW.regex,
        MW = wW,
        BW = "<>",
        tR = "</>",
        TW = {
          IM: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (WW, RW) => {
            const MW = WW[0].length + WW.index,
              wW = WW.input[MW];
            if ("<" === wW || "," === wW) return void RW.ignoreMatch();
            let CW;
            ">" === wW && (((WW, RW) => {
              let {
                after: MW
              } = RW;
              const wW = "</" + WW[0].slice(1);
              return -1 !== WW.input.indexOf(wW, MW)
            })(WW, {
              after: MW
            }) || RW.ignoreMatch());
            const zR = WW.input.substring(MW);
            ((CW = zR.match(/^\s*=/)) || (CW = zR.match(/^\s+extends\s+/)) && 0 === CW.index) && RW.ignoreMatch()
          }
        },
        gR = {
          $pattern: wW,
          keyword: CW,
          literal: zR,
          built_in: eW,
          "variable.language": NW
        },
        iR = "[0-9](_?[0-9])*",
        YW = `\\.(${iR})`,
        JW = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        PW = {
          className: "number",
          variants: [{
            IM: `(\\b(${JW})((${YW})|\\.)?|(${YW}))[eE][+-]?(${iR})\\b`
          }, {
            IM: `\\b(${JW})\\b((${YW})\\b|\\.)?|(${YW})\\b`
          }, {
            IM: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            IM: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            IM: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            IM: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            IM: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        IW = {
          className: "subst",
          IM: "\\$\\{",
          end: "\\}",
          keywords: gR,
          contains: []
        },
        oW = {
          IM: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, IW],
            subLanguage: "xml"
          }
        },
        lW = {
          IM: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, IW],
            subLanguage: "css"
          }
        },
        FW = {
          IM: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, IW],
            subLanguage: "graphql"
          }
        },
        fW = {
          className: "string",
          IM: "`",
          end: "`",
          contains: [WW.BACKSLASH_ESCAPE, IW]
        },
        QW = {
          className: "comment",
          variants: [WW.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              IM: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                IM: "@[A-Za-z]+"
              }, {
                className: "type",
                IM: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                IM: MW + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                IM: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), WW.C_BLOCK_COMMENT_MODE, WW.C_LINE_COMMENT_MODE]
        },
        rR = [WW.APOS_STRING_MODE, WW.QUOTE_STRING_MODE, oW, lW, FW, fW, {
          match: /\$\d+/
        }, PW];
      IW.contains = rR.concat({
        IM: /\{/,
        end: /\}/,
        keywords: gR,
        contains: ["self"].concat(rR)
      });
      const cR = [].concat(QW, IW.contains),
        XW = cR.concat([{
          IM: /(\s*)\(/,
          end: /\)/,
          keywords: gR,
          contains: ["self"].concat(cR)
        }]),
        jR = {
          className: "params",
          IM: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: gR,
          contains: XW
        },
        kR = {
          variants: [{
            match: [/class/, /\s+/, MW, /\s+/, /extends/, /\s+/, RW.concat(MW, "(", RW.concat(/\./, MW), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, MW],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        aR = {
          relevance: 0,
          match: RW.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...AW, ...bR]
          }
        },
        sW = {
          variants: [{
            match: [/function/, /\s+/, MW, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [jR],
          illegal: /%/
        };
      const dW = {
        match: RW.concat(/\b/, (pW = [...yR, "super", "import"].map((WW => `${WW}\\s*\\(`)), RW.concat("(?!", pW.join("|"), ")")), MW, RW.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var pW;
      const hW = {
          IM: RW.concat(/\./, RW.lookahead(RW.concat(MW, /(?![0-9A-Za-z$_(])/))),
          end: MW,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        UW = {
          match: [/get|set/, /\s+/, MW, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            IM: /\(\)/
          }, jR]
        },
        EW = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + WW.UNDERSCORE_IDENT_RE + ")\\s*=>",
        VW = {
          match: [/const|var|let/, /\s+/, MW, /\s*/, /=\s*/, /(async\s*)?/, RW.lookahead(EW)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [jR]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: gR,
        exports: {
          PARAMS_CONTAINS: XW,
          CLASS_REFERENCE: aR
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
          IM: /^\s*['"]use (strict|asm)['"]/
        }, WW.APOS_STRING_MODE, WW.QUOTE_STRING_MODE, oW, lW, FW, fW, QW, {
          match: /\$\d+/
        }, PW, aR, {
          scope: "attr",
          match: MW + RW.lookahead(":"),
          relevance: 0
        }, VW, {
          IM: "(" + WW.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [QW, WW.REGEXP_MODE, {
            className: "function",
            IM: EW,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                IM: WW.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                IM: /\(\s*\)/,
                skip: !0
              }, {
                IM: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: gR,
                contains: XW
              }]
            }]
          }, {
            IM: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              IM: BW,
              end: tR
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              IM: TW.IM,
              "on:begin": TW.isTrulyOpeningTag,
              end: TW.end
            }],
            subLanguage: "xml",
            contains: [{
              IM: TW.IM,
              end: TW.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, sW, {
          beginKeywords: "while if switch catch for"
        }, {
          IM: "\\b(?!function)" + WW.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [jR, WW.inherit(WW.TITLE_MODE, {
            IM: MW,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, hW, {
          match: "\\$" + MW,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [jR]
        }, dW, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, kR, UW, {
          match: /\$[(.]/
        }]
      }
    }
  },
  3699: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => tR
    });
    const wW = "[A-Za-z$_][0-9A-Za-z$_]*",
      CW = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      zR = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      AW = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      bR = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      yR = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      NW = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      eW = [].concat(yR, AW, bR);

    function BW(WW) {
      const RW = WW.regex,
        MW = wW,
        BW = "<>",
        tR = "</>",
        TW = {
          IM: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (WW, RW) => {
            const MW = WW[0].length + WW.index,
              wW = WW.input[MW];
            if ("<" === wW || "," === wW) return void RW.ignoreMatch();
            let CW;
            ">" === wW && (((WW, RW) => {
              let {
                after: MW
              } = RW;
              const wW = "</" + WW[0].slice(1);
              return -1 !== WW.input.indexOf(wW, MW)
            })(WW, {
              after: MW
            }) || RW.ignoreMatch());
            const zR = WW.input.substring(MW);
            ((CW = zR.match(/^\s*=/)) || (CW = zR.match(/^\s+extends\s+/)) && 0 === CW.index) && RW.ignoreMatch()
          }
        },
        gR = {
          $pattern: wW,
          keyword: CW,
          literal: zR,
          built_in: eW,
          "variable.language": NW
        },
        iR = "[0-9](_?[0-9])*",
        YW = `\\.(${iR})`,
        JW = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        PW = {
          className: "number",
          variants: [{
            IM: `(\\b(${JW})((${YW})|\\.)?|(${YW}))[eE][+-]?(${iR})\\b`
          }, {
            IM: `\\b(${JW})\\b((${YW})\\b|\\.)?|(${YW})\\b`
          }, {
            IM: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            IM: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            IM: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            IM: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            IM: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        IW = {
          className: "subst",
          IM: "\\$\\{",
          end: "\\}",
          keywords: gR,
          contains: []
        },
        oW = {
          IM: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, IW],
            subLanguage: "xml"
          }
        },
        lW = {
          IM: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, IW],
            subLanguage: "css"
          }
        },
        FW = {
          IM: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [WW.BACKSLASH_ESCAPE, IW],
            subLanguage: "graphql"
          }
        },
        fW = {
          className: "string",
          IM: "`",
          end: "`",
          contains: [WW.BACKSLASH_ESCAPE, IW]
        },
        QW = {
          className: "comment",
          variants: [WW.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              IM: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                IM: "@[A-Za-z]+"
              }, {
                className: "type",
                IM: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                IM: MW + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                IM: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), WW.C_BLOCK_COMMENT_MODE, WW.C_LINE_COMMENT_MODE]
        },
        rR = [WW.APOS_STRING_MODE, WW.QUOTE_STRING_MODE, oW, lW, FW, fW, {
          match: /\$\d+/
        }, PW];
      IW.contains = rR.concat({
        IM: /\{/,
        end: /\}/,
        keywords: gR,
        contains: ["self"].concat(rR)
      });
      const cR = [].concat(QW, IW.contains),
        XW = cR.concat([{
          IM: /(\s*)\(/,
          end: /\)/,
          keywords: gR,
          contains: ["self"].concat(cR)
        }]),
        jR = {
          className: "params",
          IM: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: gR,
          contains: XW
        },
        kR = {
          variants: [{
            match: [/class/, /\s+/, MW, /\s+/, /extends/, /\s+/, RW.concat(MW, "(", RW.concat(/\./, MW), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, MW],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        aR = {
          relevance: 0,
          match: RW.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...AW, ...bR]
          }
        },
        sW = {
          variants: [{
            match: [/function/, /\s+/, MW, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [jR],
          illegal: /%/
        };
      const dW = {
        match: RW.concat(/\b/, (pW = [...yR, "super", "import"].map((WW => `${WW}\\s*\\(`)), RW.concat("(?!", pW.join("|"), ")")), MW, RW.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var pW;
      const hW = {
          IM: RW.concat(/\./, RW.lookahead(RW.concat(MW, /(?![0-9A-Za-z$_(])/))),
          end: MW,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        UW = {
          match: [/get|set/, /\s+/, MW, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            IM: /\(\)/
          }, jR]
        },
        EW = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + WW.UNDERSCORE_IDENT_RE + ")\\s*=>",
        VW = {
          match: [/const|var|let/, /\s+/, MW, /\s*/, /=\s*/, /(async\s*)?/, RW.lookahead(EW)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [jR]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: gR,
        exports: {
          PARAMS_CONTAINS: XW,
          CLASS_REFERENCE: aR
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
          IM: /^\s*['"]use (strict|asm)['"]/
        }, WW.APOS_STRING_MODE, WW.QUOTE_STRING_MODE, oW, lW, FW, fW, QW, {
          match: /\$\d+/
        }, PW, aR, {
          scope: "attr",
          match: MW + RW.lookahead(":"),
          relevance: 0
        }, VW, {
          IM: "(" + WW.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [QW, WW.REGEXP_MODE, {
            className: "function",
            IM: EW,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                IM: WW.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                IM: /\(\s*\)/,
                skip: !0
              }, {
                IM: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: gR,
                contains: XW
              }]
            }]
          }, {
            IM: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              IM: BW,
              end: tR
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              IM: TW.IM,
              "on:begin": TW.isTrulyOpeningTag,
              end: TW.end
            }],
            subLanguage: "xml",
            contains: [{
              IM: TW.IM,
              end: TW.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, sW, {
          beginKeywords: "while if switch catch for"
        }, {
          IM: "\\b(?!function)" + WW.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [jR, WW.inherit(WW.TITLE_MODE, {
            IM: MW,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, hW, {
          match: "\\$" + MW,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [jR]
        }, dW, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, kR, UW, {
          match: /\$[(.]/
        }]
      }
    }

    function tR(WW) {
      const RW = WW.regex,
        MW = BW(WW),
        AW = wW,
        bR = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        yR = {
          IM: [/namespace/, /\s+/, WW.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        tR = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: bR
          },
          contains: [MW.exports.CLASS_REFERENCE]
        },
        TW = {
          $pattern: wW,
          keyword: CW.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: zR,
          built_in: eW.concat(bR),
          "variable.language": NW
        },
        gR = {
          className: "meta",
          IM: "@" + AW
        },
        iR = (WW, RW, MW) => {
          const wW = WW.contains.findIndex((WW => WW.label === RW));
          if (-1 === wW) throw new Error("can not find mode to replace");
          WW.contains.splice(wW, 1, MW)
        };
      Object.assign(MW.keywords, TW), MW.exports.PARAMS_CONTAINS.push(gR);
      const YW = MW.contains.find((WW => "attr" === WW.scope)),
        JW = Object.assign({}, YW, {
          match: RW.concat(AW, RW.lookahead(/\s*\?:/))
        });
      MW.exports.PARAMS_CONTAINS.push([MW.exports.CLASS_REFERENCE, YW, JW]), MW.contains = MW.contains.concat([gR, yR, tR, JW]), iR(MW, "shebang", WW.SHEBANG()), iR(MW, "use_strict", {
        className: "meta",
        relevance: 10,
        IM: /^\s*['"]use strict['"]/
      });
      return MW.contains.find((WW => "func.def" === WW.label)).relevance = 0, Object.assign(MW, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), MW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);