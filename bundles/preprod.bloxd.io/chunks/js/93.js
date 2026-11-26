export const id = 93;
export const ids = [93];
export const modules = {
  5202: HH => {
    function BH(HH) {
      return HH instanceof Map ? HH.clear = HH.delete = HH.set = function() {
        throw new Error("map is read-only")
      } : HH instanceof Set && (HH.add = HH.clear = HH.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(HH), Object.getOwnPropertyNames(HH).forEach((LH => {
        const AH = HH[LH],
          rH = typeof AH;
        "object" !== rH && "function" !== rH || Object.isFrozen(AH) || BH(AH)
      })), HH
    }
    class LH {
      constructor(HH) {
        void 0 === HH.data && (HH.data = {}), this.data = HH.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function AH(HH) {
      return HH.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function rH(HH) {
      const BH = Object.create(null);
      for (const SH in HH) BH[SH] = HH[SH];
      for (var LH = arguments.length, AH = new Array(LH > 1 ? LH - 1 : 0), rH = 1; rH < LH; rH++) AH[rH - 1] = arguments[rH];
      return AH.forEach((function(HH) {
        for (const LH in HH) BH[LH] = HH[LH]
      })), BH
    }
    const SH = HH => !!HH.scope;
    class hH {
      constructor(HH, BH) {
        this.buffer = "", this.classPrefix = BH.classPrefix, HH.walk(this)
      }
      addText(HH) {
        this.buffer += AH(HH)
      }
      openNode(HH) {
        if (!SH(HH)) return;
        const BH = ((HH, BH) => {
          let {
            prefix: LH
          } = BH;
          if (HH.startsWith("language:")) return HH.replace("language:", "language-");
          if (HH.includes(".")) {
            const BH = HH.split(".");
            return [`${LH}${BH.shift()}`, ...BH.map(((HH, BH) => `${HH}${"_".repeat(BH+1)}`))].join(" ")
          }
          return `${LH}${HH}`
        })(HH.scope, {
          prefix: this.classPrefix
        });
        this.span(BH)
      }
      closeNode(HH) {
        SH(HH) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(HH) {
        this.buffer += `<span class="${HH}">`
      }
    }
    const tH = function() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const BH = {
        children: []
      };
      return Object.assign(BH, HH), BH
    };
    class zH {
      constructor() {
        this.RP = tH(), this.stack = [this.RP]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.RP
      }
      add(HH) {
        this.top.children.push(HH)
      }
      openNode(HH) {
        const BH = tH({
          scope: HH
        });
        this.add(BH), this.stack.push(BH)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.RP, null, 4)
      }
      walk(HH) {
        return this.constructor._walk(HH, this.RP)
      }
      static _walk(HH, BH) {
        return "string" === typeof BH ? HH.addText(BH) : BH.children && (HH.openNode(BH), BH.children.forEach((BH => this._walk(HH, BH))), HH.closeNode(BH)), HH
      }
      static _collapse(HH) {
        "string" !== typeof HH && HH.children && (HH.children.every((HH => "string" === typeof HH)) ? HH.children = [HH.children.join("")] : HH.children.forEach((HH => {
          zH._collapse(HH)
        })))
      }
    }
    class CH extends zH {
      constructor(HH) {
        super(), this.options = HH
      }
      addText(HH) {
        "" !== HH && this.add(HH)
      }
      startScope(HH) {
        this.openNode(HH)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(HH, BH) {
        const LH = HH.root;
        BH && (LH.scope = `language:${BH}`), this.add(LH)
      }
      toHTML() {
        return new hH(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function EH(HH) {
      return HH ? "string" === typeof HH ? HH : HH.source : null
    }

    function XH(HH) {
      return uH("(?=", HH, ")")
    }

    function GH(HH) {
      return uH("(?:", HH, ")*")
    }

    function YH(HH) {
      return uH("(?:", HH, ")?")
    }

    function uH() {
      for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
      return BH.map((HH => EH(HH))).join("")
    }

    function QH() {
      for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
      const AH = function(HH) {
        const BH = HH[HH.length - 1];
        return "object" === typeof BH && BH.constructor === Object ? (HH.splice(HH.length - 1, 1), BH) : {}
      }(BH);
      return "(" + (AH.capture ? "" : "?:") + BH.map((HH => EH(HH))).join("|") + ")"
    }

    function WH(HH) {
      return new RegExp(HH.toString() + "|").exec("").length - 1
    }
    const MH = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function xH(HH, BH) {
      let {
        joinWith: LH
      } = BH, AH = 0;
      return HH.map((HH => {
        AH += 1;
        const BH = AH;
        let LH = EH(HH),
          rH = "";
        for (; LH.length > 0;) {
          const HH = MH.exec(LH);
          if (!HH) {
            rH += LH;
            break
          }
          rH += LH.substring(0, HH.index), LH = LH.substring(HH.index + HH[0].length), "\\" === HH[0][0] && HH[1] ? rH += "\\" + String(Number(HH[1]) + BH) : (rH += HH[0], "(" === HH[0] && AH++)
        }
        return rH
      })).map((HH => `(${HH})`)).join(LH)
    }
    const vH = "[a-zA-Z]\\w*",
      PH = "[a-zA-Z_]\\w*",
      TH = "\\b\\d+(\\.\\d+)?",
      UH = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      VH = "\\b(0b[01]+)",
      OH = {
        PX: "\\\\[\\s\\S]",
        relevance: 0
      },
      bH = {
        scope: "string",
        PX: "'",
        end: "'",
        illegal: "\\n",
        contains: [OH]
      },
      kH = {
        scope: "string",
        PX: '"',
        end: '"',
        illegal: "\\n",
        contains: [OH]
      },
      mH = function(HH, BH) {
        const LH = rH({
          scope: "comment",
          PX: HH,
          end: BH,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        LH.contains.push({
          scope: "doctag",
          PX: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const AH = QH("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return LH.contains.push({
          PX: uH(/[ ]+/, "(", AH, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), LH
      },
      oH = mH("//", "$"),
      IH = mH("/\\*", "\\*/"),
      fH = mH("#", "$"),
      lH = {
        scope: "number",
        PX: TH,
        relevance: 0
      },
      KH = {
        scope: "number",
        PX: UH,
        relevance: 0
      },
      cH = {
        scope: "number",
        PX: VH,
        relevance: 0
      },
      eH = {
        scope: "regexp",
        PX: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [OH, {
          PX: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [OH]
        }]
      },
      qH = {
        scope: "title",
        PX: vH,
        relevance: 0
      },
      gH = {
        scope: "title",
        PX: PH,
        relevance: 0
      },
      NH = {
        PX: "\\.\\s*" + PH,
        relevance: 0
      };
    var RH = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: bH,
      BACKSLASH_ESCAPE: OH,
      BINARY_NUMBER_MODE: cH,
      BINARY_NUMBER_RE: VH,
      COMMENT: mH,
      C_BLOCK_COMMENT_MODE: IH,
      C_LINE_COMMENT_MODE: oH,
      C_NUMBER_MODE: KH,
      C_NUMBER_RE: UH,
      END_SAME_AS_BEGIN: function(HH) {
        return Object.assign(HH, {
          "on:begin": (HH, BH) => {
            BH.data._beginMatch = HH[1]
          },
          "on:end": (HH, BH) => {
            BH.data._beginMatch !== HH[1] && BH.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: fH,
      IDENT_RE: vH,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: NH,
      NUMBER_MODE: lH,
      NUMBER_RE: TH,
      PHRASAL_WORDS_MODE: {
        PX: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: kH,
      REGEXP_MODE: eH,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const BH = /^#![ ]*\//;
        return HH.binary && (HH.PX = uH(BH, /.*\b/, HH.binary, /\b.*/)), rH({
          scope: "meta",
          PX: BH,
          end: /$/,
          relevance: 0,
          "on:begin": (HH, BH) => {
            0 !== HH.index && BH.ignoreMatch()
          }
        }, HH)
      },
      TITLE_MODE: qH,
      UNDERSCORE_IDENT_RE: PH,
      UNDERSCORE_TITLE_MODE: gH
    });

    function jH(HH, BH) {
      "." === HH.input[HH.index - 1] && BH.ignoreMatch()
    }

    function nH(HH, BH) {
      void 0 !== HH.className && (HH.scope = HH.className, delete HH.className)
    }

    function FH(HH, BH) {
      BH && HH.beginKeywords && (HH.PX = "\\b(" + HH.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", HH.__beforeBegin = jH, HH.keywords = HH.keywords || HH.beginKeywords, delete HH.beginKeywords, void 0 === HH.relevance && (HH.relevance = 0))
    }

    function DH(HH, BH) {
      Array.isArray(HH.illegal) && (HH.illegal = QH(...HH.illegal))
    }

    function wH(HH, BH) {
      if (HH.match) {
        if (HH.PX || HH.end) throw new Error("begin & end are not supported with match");
        HH.PX = HH.match, delete HH.match
      }
    }

    function ZH(HH, BH) {
      void 0 === HH.relevance && (HH.relevance = 1)
    }
    const dH = (HH, BH) => {
        if (!HH.beforeMatch) return;
        if (HH.starts) throw new Error("beforeMatch cannot be used with starts");
        const LH = Object.assign({}, HH);
        Object.keys(HH).forEach((BH => {
          delete HH[BH]
        })), HH.keywords = LH.keywords, HH.PX = uH(LH.beforeMatch, XH(LH.PX)), HH.starts = {
          relevance: 0,
          contains: [Object.assign(LH, {
            endsParent: !0
          })]
        }, HH.relevance = 0, delete LH.beforeMatch
      },
      aH = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function sH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const AH = Object.create(null);
      return "string" === typeof HH ? rH(LH, HH.split(" ")) : Array.isArray(HH) ? rH(LH, HH) : Object.keys(HH).forEach((function(LH) {
        Object.assign(AH, sH(HH[LH], BH, LH))
      })), AH;

      function rH(HH, LH) {
        BH && (LH = LH.map((HH => HH.toLowerCase()))), LH.forEach((function(BH) {
          const LH = BH.split("|");
          AH[LH[0]] = [HH, JH(LH[0], LH[1])]
        }))
      }
    }

    function JH(HH, BH) {
      return BH ? Number(BH) : function(HH) {
        return aH.includes(HH.toLowerCase())
      }(HH) ? 0 : 1
    }
    const iH = {},
      pH = HH => {
        console.error(HH)
      },
      yH = function(HH) {
        for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
        console.log(`WARN: ${HH}`, ...LH)
      },
      HB = (HH, BH) => {
        iH[`${HH}/${BH}`] || (console.log(`Deprecated as of ${HH}. ${BH}`), iH[`${HH}/${BH}`] = !0)
      },
      BB = new Error;

    function LB(HH, BH, LH) {
      let {
        key: AH
      } = LH, rH = 0;
      const SH = HH[AH],
        hH = {},
        tH = {};
      for (let zH = 1; zH <= BH.length; zH++) tH[zH + rH] = SH[zH], hH[zH + rH] = !0, rH += WH(BH[zH - 1]);
      HH[AH] = tH, HH[AH]._emit = hH, HH[AH]._multi = !0
    }

    function AB(HH) {
      ! function(HH) {
        HH.scope && "object" === typeof HH.scope && null !== HH.scope && (HH.beginScope = HH.scope, delete HH.scope)
      }(HH), "string" === typeof HH.beginScope && (HH.beginScope = {
          _wrap: HH.beginScope
        }), "string" === typeof HH.endScope && (HH.endScope = {
          _wrap: HH.endScope
        }),
        function(HH) {
          if (Array.isArray(HH.PX)) {
            if (HH.skip || HH.excludeBegin || HH.returnBegin) throw pH("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), BB;
            if ("object" !== typeof HH.beginScope || null === HH.beginScope) throw pH("beginScope must be object"), BB;
            LB(HH, HH.PX, {
              key: "beginScope"
            }), HH.PX = xH(HH.PX, {
              joinWith: ""
            })
          }
        }(HH),
        function(HH) {
          if (Array.isArray(HH.end)) {
            if (HH.skip || HH.excludeEnd || HH.returnEnd) throw pH("skip, excludeEnd, returnEnd not compatible with endScope: {}"), BB;
            if ("object" !== typeof HH.endScope || null === HH.endScope) throw pH("endScope must be object"), BB;
            LB(HH, HH.end, {
              key: "endScope"
            }), HH.end = xH(HH.end, {
              joinWith: ""
            })
          }
        }(HH)
    }

    function rB(HH) {
      function BH(BH, LH) {
        return new RegExp(EH(BH), "m" + (HH.case_insensitive ? "i" : "") + (HH.unicodeRegex ? "u" : "") + (LH ? "g" : ""))
      }
      class LH {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(HH, BH) {
          BH.position = this.position++, this.matchIndexes[this.matchAt] = BH, this.regexes.push([BH, HH]), this.matchAt += WH(HH) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const HH = this.regexes.map((HH => HH[1]));
          this.matcherRe = BH(xH(HH, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(HH) {
          this.matcherRe.lastIndex = this.lastIndex;
          const BH = this.matcherRe.exec(HH);
          if (!BH) return null;
          const LH = BH.findIndex(((HH, BH) => BH > 0 && void 0 !== HH)),
            AH = this.matchIndexes[LH];
          return BH.splice(0, LH), Object.assign(BH, AH)
        }
      }
      class AH {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(HH) {
          if (this.multiRegexes[HH]) return this.multiRegexes[HH];
          const BH = new LH;
          return this.rules.slice(HH).forEach((HH => {
            let [LH, AH] = HH;
            return BH.addRule(LH, AH)
          })), BH.compile(), this.multiRegexes[HH] = BH, BH
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(HH, BH) {
          this.rules.push([HH, BH]), "PX" === BH.type && this.count++
        }
        exec(HH) {
          const BH = this.getMatcher(this.regexIndex);
          BH.lastIndex = this.lastIndex;
          let LH = BH.exec(HH);
          if (this.resumingScanAtSamePosition())
            if (LH && LH.index === this.lastIndex);
            else {
              const BH = this.getMatcher(0);
              BH.lastIndex = this.lastIndex + 1, LH = BH.exec(HH)
            } return LH && (this.regexIndex += LH.position + 1, this.regexIndex === this.count && this.considerAll()), LH
        }
      }
      if (HH.compilerExtensions || (HH.compilerExtensions = []), HH.contains && HH.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return HH.classNameAliases = rH(HH.classNameAliases || {}),
        function LH(SH, hH) {
          const tH = SH;
          if (SH.isCompiled) return tH;
          [nH, wH, AB, dH].forEach((HH => HH(SH, hH))), HH.compilerExtensions.forEach((HH => HH(SH, hH))), SH.__beforeBegin = null, [FH, DH, ZH].forEach((HH => HH(SH, hH))), SH.isCompiled = !0;
          let zH = null;
          return "object" === typeof SH.keywords && SH.keywords.$pattern && (SH.keywords = Object.assign({}, SH.keywords), zH = SH.keywords.$pattern, delete SH.keywords.$pattern), zH = zH || /\w+/, SH.keywords && (SH.keywords = sH(SH.keywords, HH.case_insensitive)), tH.keywordPatternRe = BH(zH, !0), hH && (SH.PX || (SH.PX = /\B|\b/), tH.beginRe = BH(tH.PX), SH.end || SH.endsWithParent || (SH.end = /\B|\b/), SH.end && (tH.endRe = BH(tH.end)), tH.terminatorEnd = EH(tH.end) || "", SH.endsWithParent && hH.terminatorEnd && (tH.terminatorEnd += (SH.end ? "|" : "") + hH.terminatorEnd)), SH.illegal && (tH.illegalRe = BH(SH.illegal)), SH.contains || (SH.contains = []), SH.contains = [].concat(...SH.contains.map((function(HH) {
            return function(HH) {
              HH.variants && !HH.cachedVariants && (HH.cachedVariants = HH.variants.map((function(BH) {
                return rH(HH, {
                  variants: null
                }, BH)
              })));
              if (HH.cachedVariants) return HH.cachedVariants;
              if (SB(HH)) return rH(HH, {
                starts: HH.starts ? rH(HH.starts) : null
              });
              if (Object.isFrozen(HH)) return rH(HH);
              return HH
            }("self" === HH ? SH : HH)
          }))), SH.contains.forEach((function(HH) {
            LH(HH, tH)
          })), SH.starts && LH(SH.starts, hH), tH.matcher = function(HH) {
            const BH = new AH;
            return HH.contains.forEach((HH => BH.addRule(HH.PX, {
              rule: HH,
              type: "PX"
            }))), HH.terminatorEnd && BH.addRule(HH.terminatorEnd, {
              type: "end"
            }), HH.illegal && BH.addRule(HH.illegal, {
              type: "illegal"
            }), BH
          }(tH), tH
        }(HH)
    }

    function SB(HH) {
      return !!HH && (HH.endsWithParent || SB(HH.starts))
    }
    class hB extends Error {
      constructor(HH, BH) {
        super(HH), this.name = "HTMLInjectionError", this.html = BH
      }
    }
    const tB = AH,
      zB = rH,
      CB = Symbol("nomatch"),
      EB = function(HH) {
        const AH = Object.create(null),
          rH = Object.create(null),
          SH = [];
        let hH = !0;
        const tH = "Could not find the language '{}', did you forget to load/include a language module?",
          zH = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let EH = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: CH
        };

        function WH(HH) {
          return EH.noHighlightRe.test(HH)
        }

        function MH(HH, BH, LH) {
          let AH = "",
            rH = "";
          "object" === typeof BH ? (AH = HH, LH = BH.ignoreIllegals, rH = BH.language) : (HB("10.7.0", "highlight(lang, code, ...args) has been deprecated."), HB("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), rH = HH, AH = BH), void 0 === LH && (LH = !0);
          const SH = {
            code: AH,
            language: rH
          };
          kH("before:highlight", SH);
          const hH = SH.result ? SH.result : xH(SH.language, SH.code, LH);
          return hH.code = SH.code, kH("after:highlight", hH), hH
        }

        function xH(HH, BH, rH, SH) {
          const zH = Object.create(null);

          function CH() {
            if (!kH.keywords) return void oH.addText(IH);
            let HH = 0;
            kH.keywordPatternRe.lastIndex = 0;
            let BH = kH.keywordPatternRe.exec(IH),
              LH = "";
            for (; BH;) {
              LH += IH.substring(HH, BH.index);
              const rH = UH.case_insensitive ? BH[0].toLowerCase() : BH[0],
                SH = (AH = rH, kH.keywords[AH]);
              if (SH) {
                const [HH, AH] = SH;
                if (oH.addText(LH), LH = "", zH[rH] = (zH[rH] || 0) + 1, zH[rH] <= 7 && (fH += AH), HH.startsWith("_")) LH += BH[0];
                else {
                  const LH = UH.classNameAliases[HH] || HH;
                  GH(BH[0], LH)
                }
              } else LH += BH[0];
              HH = kH.keywordPatternRe.lastIndex, BH = kH.keywordPatternRe.exec(IH)
            }
            var AH;
            LH += IH.substring(HH), oH.addText(LH)
          }

          function XH() {
            null != kH.subLanguage ? function() {
              if ("" === IH) return;
              let HH = null;
              if ("string" === typeof kH.subLanguage) {
                if (!AH[kH.subLanguage]) return void oH.addText(IH);
                HH = xH(kH.subLanguage, IH, !0, mH[kH.subLanguage]), mH[kH.subLanguage] = HH._top
              } else HH = vH(IH, kH.subLanguage.length ? kH.subLanguage : null);
              kH.relevance > 0 && (fH += HH.relevance), oH.__addSublanguage(HH._emitter, HH.language)
            }() : CH(), IH = ""
          }

          function GH(HH, BH) {
            "" !== HH && (oH.startScope(BH), oH.addText(HH), oH.endScope())
          }

          function YH(HH, BH) {
            let LH = 1;
            const AH = BH.length - 1;
            for (; LH <= AH;) {
              if (!HH._emit[LH]) {
                LH++;
                continue
              }
              const AH = UH.classNameAliases[HH[LH]] || HH[LH],
                rH = BH[LH];
              AH ? GH(rH, AH) : (IH = rH, CH(), IH = ""), LH++
            }
          }

          function uH(HH, BH) {
            return HH.scope && "string" === typeof HH.scope && oH.openNode(UH.classNameAliases[HH.scope] || HH.scope), HH.beginScope && (HH.beginScope._wrap ? (GH(IH, UH.classNameAliases[HH.beginScope._wrap] || HH.beginScope._wrap), IH = "") : HH.beginScope._multi && (YH(HH.beginScope, BH), IH = "")), kH = Object.create(HH, {
              parent: {
                value: kH
              }
            }), kH
          }

          function QH(HH, BH, AH) {
            let rH = function(HH, BH) {
              const LH = HH && HH.exec(BH);
              return LH && 0 === LH.index
            }(HH.endRe, AH);
            if (rH) {
              if (HH["on:end"]) {
                const AH = new LH(HH);
                HH["on:end"](BH, AH), AH.isMatchIgnored && (rH = !1)
              }
              if (rH) {
                for (; HH.endsParent && HH.parent;) HH = HH.parent;
                return HH
              }
            }
            if (HH.endsWithParent) return QH(HH.parent, BH, AH)
          }

          function WH(HH) {
            return 0 === kH.matcher.regexIndex ? (IH += HH[0], 1) : (cH = !0, 0)
          }

          function MH(HH) {
            const LH = HH[0],
              AH = BH.substring(HH.index),
              rH = QH(kH, HH, AH);
            if (!rH) return CB;
            const SH = kH;
            kH.endScope && kH.endScope._wrap ? (XH(), GH(LH, kH.endScope._wrap)) : kH.endScope && kH.endScope._multi ? (XH(), YH(kH.endScope, HH)) : SH.skip ? IH += LH : (SH.returnEnd || SH.excludeEnd || (IH += LH), XH(), SH.excludeEnd && (IH = LH));
            do {
              kH.scope && oH.closeNode(), kH.skip || kH.subLanguage || (fH += kH.relevance), kH = kH.parent
            } while (kH !== rH.parent);
            return rH.starts && uH(rH.starts, HH), SH.returnEnd ? 0 : LH.length
          }
          let PH = {};

          function TH(AH, SH) {
            const tH = SH && SH[0];
            if (IH += AH, null == tH) return XH(), 0;
            if ("PX" === PH.type && "end" === SH.type && PH.index === SH.index && "" === tH) {
              if (IH += BH.slice(SH.index, SH.index + 1), !hH) {
                const BH = new Error(`0 width match regex (${HH})`);
                throw BH.languageName = HH, BH.badRule = PH.rule, BH
              }
              return 1
            }
            if (PH = SH, "PX" === SH.type) return function(HH) {
              const BH = HH[0],
                AH = HH.rule,
                rH = new LH(AH),
                SH = [AH.__beforeBegin, AH["on:begin"]];
              for (const LH of SH)
                if (LH && (LH(HH, rH), rH.isMatchIgnored)) return WH(BH);
              return AH.skip ? IH += BH : (AH.excludeBegin && (IH += BH), XH(), AH.returnBegin || AH.excludeBegin || (IH = BH)), uH(AH, HH), AH.returnBegin ? 0 : BH.length
            }(SH);
            if ("illegal" === SH.type && !rH) {
              const HH = new Error('Illegal lexeme "' + tH + '" for mode "' + (kH.scope || "<unnamed>") + '"');
              throw HH.mode = kH, HH
            }
            if ("end" === SH.type) {
              const HH = MH(SH);
              if (HH !== CB) return HH
            }
            if ("illegal" === SH.type && "" === tH) return IH += "\n", 1;
            if (KH > 1e5 && KH > 3 * SH.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return IH += tH, tH.length
          }
          const UH = VH(HH);
          if (!UH) throw pH(tH.replace("{}", HH)), new Error('Unknown language: "' + HH + '"');
          const OH = rB(UH);
          let bH = "",
            kH = SH || OH;
          const mH = {},
            oH = new EH.__emitter(EH);
          ! function() {
            const HH = [];
            for (let BH = kH; BH !== UH; BH = BH.parent) BH.scope && HH.unshift(BH.scope);
            HH.forEach((HH => oH.openNode(HH)))
          }();
          let IH = "",
            fH = 0,
            lH = 0,
            KH = 0,
            cH = !1;
          try {
            if (UH.__emitTokens) UH.__emitTokens(BH, oH);
            else {
              for (kH.matcher.considerAll();;) {
                KH++, cH ? cH = !1 : kH.matcher.considerAll(), kH.matcher.lastIndex = lH;
                const HH = kH.matcher.exec(BH);
                if (!HH) break;
                const LH = TH(BH.substring(lH, HH.index), HH);
                lH = HH.index + LH
              }
              TH(BH.substring(lH))
            }
            return oH.finalize(), bH = oH.toHTML(), {
              language: HH,
              value: bH,
              relevance: fH,
              illegal: !1,
              _emitter: oH,
              _top: kH
            }
          } catch (eH) {
            if (eH.message && eH.message.includes("Illegal")) return {
              language: HH,
              value: tB(BH),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: eH.message,
                index: lH,
                context: BH.slice(lH - 100, lH + 100),
                mode: eH.mode,
                resultSoFar: bH
              },
              _emitter: oH
            };
            if (hH) return {
              language: HH,
              value: tB(BH),
              illegal: !1,
              relevance: 0,
              errorRaised: eH,
              _emitter: oH,
              _top: kH
            };
            throw eH
          }
        }

        function vH(HH, BH) {
          BH = BH || EH.languages || Object.keys(AH);
          const LH = function(HH) {
              const BH = {
                value: tB(HH),
                illegal: !1,
                relevance: 0,
                _top: zH,
                _emitter: new EH.__emitter(EH)
              };
              return BH._emitter.addText(HH), BH
            }(HH),
            rH = BH.filter(VH).filter(bH).map((BH => xH(BH, HH, !1)));
          rH.unshift(LH);
          const SH = rH.sort(((HH, BH) => {
              if (HH.relevance !== BH.relevance) return BH.relevance - HH.relevance;
              if (HH.language && BH.language) {
                if (VH(HH.language).supersetOf === BH.language) return 1;
                if (VH(BH.language).supersetOf === HH.language) return -1
              }
              return 0
            })),
            [hH, tH] = SH,
            CH = hH;
          return CH.secondBest = tH, CH
        }

        function PH(HH) {
          let BH = null;
          const LH = function(HH) {
            let BH = HH.className + " ";
            BH += HH.parentNode ? HH.parentNode.className : "";
            const LH = EH.languageDetectRe.exec(BH);
            if (LH) {
              const BH = VH(LH[1]);
              return BH || (yH(tH.replace("{}", LH[1])), yH("Falling back to no-highlight mode for this block.", HH)), BH ? LH[1] : "no-highlight"
            }
            return BH.split(/\s+/).find((HH => WH(HH) || VH(HH)))
          }(HH);
          if (WH(LH)) return;
          if (kH("before:highlightElement", {
              el: HH,
              language: LH
            }), HH.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", HH);
          if (HH.children.length > 0 && (EH.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(HH)), EH.throwUnescapedHTML)) {
            throw new hB("One of your code blocks includes unescaped HTML.", HH.innerHTML)
          }
          BH = HH;
          const AH = BH.textContent,
            SH = LH ? MH(AH, {
              language: LH,
              ignoreIllegals: !0
            }) : vH(AH);
          HH.innerHTML = SH.value, HH.dataset.highlighted = "yes",
            function(HH, BH, LH) {
              const AH = BH && rH[BH] || LH;
              HH.classList.add("hljs"), HH.classList.add(`language-${AH}`)
            }(HH, LH, SH.language), HH.result = {
              language: SH.language,
              re: SH.relevance,
              relevance: SH.relevance
            }, SH.secondBest && (HH.secondBest = {
              language: SH.secondBest.language,
              relevance: SH.secondBest.relevance
            }), kH("after:highlightElement", {
              el: HH,
              result: SH,
              text: AH
            })
        }
        let TH = !1;

        function UH() {
          if ("loading" === document.readyState) return TH || window.addEventListener("DOMContentLoaded", (function() {
            UH()
          }), !1), void(TH = !0);
          document.querySelectorAll(EH.cssSelector).forEach(PH)
        }

        function VH(HH) {
          return HH = (HH || "").toLowerCase(), AH[HH] || AH[rH[HH]]
        }

        function OH(HH, BH) {
          let {
            languageName: LH
          } = BH;
          "string" === typeof HH && (HH = [HH]), HH.forEach((HH => {
            rH[HH.toLowerCase()] = LH
          }))
        }

        function bH(HH) {
          const BH = VH(HH);
          return BH && !BH.disableAutodetect
        }

        function kH(HH, BH) {
          const LH = HH;
          SH.forEach((function(HH) {
            HH[LH] && HH[LH](BH)
          }))
        }
        Object.assign(HH, {
          highlight: MH,
          highlightAuto: vH,
          highlightAll: UH,
          highlightElement: PH,
          highlightBlock: function(HH) {
            return HB("10.7.0", "highlightBlock will be removed entirely in v12.0"), HB("10.7.0", "Please use highlightElement now."), PH(HH)
          },
          configure: function(HH) {
            EH = zB(EH, HH)
          },
          initHighlighting: () => {
            UH(), HB("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            UH(), HB("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(BH, LH) {
            let rH = null;
            try {
              rH = LH(HH)
            } catch (SH) {
              if (pH("Language definition for '{}' could not be registered.".replace("{}", BH)), !hH) throw SH;
              pH(SH), rH = zH
            }
            rH.name || (rH.name = BH), AH[BH] = rH, rH.rawDefinition = LH.bind(null, HH), rH.aliases && OH(rH.aliases, {
              languageName: BH
            })
          },
          unregisterLanguage: function(HH) {
            delete AH[HH];
            for (const BH of Object.keys(rH)) rH[BH] === HH && delete rH[BH]
          },
          listLanguages: function() {
            return Object.keys(AH)
          },
          getLanguage: VH,
          registerAliases: OH,
          autoDetection: bH,
          inherit: zB,
          addPlugin: function(HH) {
            ! function(HH) {
              HH["before:highlightBlock"] && !HH["before:highlightElement"] && (HH["before:highlightElement"] = BH => {
                HH["before:highlightBlock"](Object.assign({
                  block: BH.el
                }, BH))
              }), HH["after:highlightBlock"] && !HH["after:highlightElement"] && (HH["after:highlightElement"] = BH => {
                HH["after:highlightBlock"](Object.assign({
                  block: BH.el
                }, BH))
              })
            }(HH), SH.push(HH)
          },
          removePlugin: function(HH) {
            const BH = SH.indexOf(HH); - 1 !== BH && SH.splice(BH, 1)
          }
        }), HH.debugMode = function() {
          hH = !1
        }, HH.safeMode = function() {
          hH = !0
        }, HH.versionString = "11.11.1", HH.regex = {
          concat: uH,
          lookahead: XH,
          either: QH,
          optional: YH,
          anyNumberOfTimes: GH
        };
        for (const LH in RH) "object" === typeof RH[LH] && BH(RH[LH]);
        return Object.assign(HH, RH), HH
      },
      XB = EB({});
    XB.newInstance = () => EB({}), HH.exports = XB, XB.HighlightJS = XB, XB.default = XB
  },
  5194: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    const AH = LH(5202)
  },
  5207: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH
    });
    const AH = "[A-Za-z$_][0-9A-Za-z$_]*",
      rH = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      SH = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      hH = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      tH = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      zH = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      CH = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      EH = [].concat(zH, hH, tH);

    function XH(HH) {
      const BH = HH.regex,
        LH = AH,
        XH = "<>",
        GH = "</>",
        YH = {
          PX: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (HH, BH) => {
            const LH = HH[0].length + HH.index,
              AH = HH.input[LH];
            if ("<" === AH || "," === AH) return void BH.ignoreMatch();
            let rH;
            ">" === AH && (((HH, BH) => {
              let {
                after: LH
              } = BH;
              const AH = "</" + HH[0].slice(1);
              return -1 !== HH.input.indexOf(AH, LH)
            })(HH, {
              after: LH
            }) || BH.ignoreMatch());
            const SH = HH.input.substring(LH);
            ((rH = SH.match(/^\s*=/)) || (rH = SH.match(/^\s+extends\s+/)) && 0 === rH.index) && BH.ignoreMatch()
          }
        },
        uH = {
          $pattern: AH,
          keyword: rH,
          literal: SH,
          built_in: EH,
          "variable.language": CH
        },
        QH = "[0-9](_?[0-9])*",
        WH = `\\.(${QH})`,
        MH = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        xH = {
          className: "number",
          variants: [{
            PX: `(\\b(${MH})((${WH})|\\.)?|(${WH}))[eE][+-]?(${QH})\\b`
          }, {
            PX: `\\b(${MH})\\b((${WH})\\b|\\.)?|(${WH})\\b`
          }, {
            PX: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            PX: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            PX: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            PX: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            PX: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        vH = {
          className: "subst",
          PX: "\\$\\{",
          end: "\\}",
          keywords: uH,
          contains: []
        },
        PH = {
          PX: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [HH.BACKSLASH_ESCAPE, vH],
            subLanguage: "xml"
          }
        },
        TH = {
          PX: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [HH.BACKSLASH_ESCAPE, vH],
            subLanguage: "css"
          }
        },
        UH = {
          PX: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [HH.BACKSLASH_ESCAPE, vH],
            subLanguage: "graphql"
          }
        },
        VH = {
          className: "string",
          PX: "`",
          end: "`",
          contains: [HH.BACKSLASH_ESCAPE, vH]
        },
        OH = {
          className: "comment",
          variants: [HH.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              PX: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                PX: "@[A-Za-z]+"
              }, {
                className: "type",
                PX: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                PX: LH + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                PX: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), HH.C_BLOCK_COMMENT_MODE, HH.C_LINE_COMMENT_MODE]
        },
        bH = [HH.APOS_STRING_MODE, HH.QUOTE_STRING_MODE, PH, TH, UH, VH, {
          match: /\$\d+/
        }, xH];
      vH.contains = bH.concat({
        PX: /\{/,
        end: /\}/,
        keywords: uH,
        contains: ["self"].concat(bH)
      });
      const kH = [].concat(OH, vH.contains),
        mH = kH.concat([{
          PX: /(\s*)\(/,
          end: /\)/,
          keywords: uH,
          contains: ["self"].concat(kH)
        }]),
        oH = {
          className: "params",
          PX: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: uH,
          contains: mH
        },
        IH = {
          variants: [{
            match: [/class/, /\s+/, LH, /\s+/, /extends/, /\s+/, BH.concat(LH, "(", BH.concat(/\./, LH), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, LH],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        fH = {
          relevance: 0,
          match: BH.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...hH, ...tH]
          }
        },
        lH = {
          variants: [{
            match: [/function/, /\s+/, LH, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [oH],
          illegal: /%/
        };
      const KH = {
        match: BH.concat(/\b/, (cH = [...zH, "super", "import"].map((HH => `${HH}\\s*\\(`)), BH.concat("(?!", cH.join("|"), ")")), LH, BH.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var cH;
      const eH = {
          PX: BH.concat(/\./, BH.lookahead(BH.concat(LH, /(?![0-9A-Za-z$_(])/))),
          end: LH,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        qH = {
          match: [/get|set/, /\s+/, LH, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            PX: /\(\)/
          }, oH]
        },
        gH = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + HH.UNDERSCORE_IDENT_RE + ")\\s*=>",
        NH = {
          match: [/const|var|let/, /\s+/, LH, /\s*/, /=\s*/, /(async\s*)?/, BH.lookahead(gH)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [oH]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: uH,
        exports: {
          PARAMS_CONTAINS: mH,
          CLASS_REFERENCE: fH
        },
        illegal: /#(?![$_A-z])/,
        contains: [HH.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          PX: /^\s*['"]use (strict|asm)['"]/
        }, HH.APOS_STRING_MODE, HH.QUOTE_STRING_MODE, PH, TH, UH, VH, OH, {
          match: /\$\d+/
        }, xH, fH, {
          scope: "attr",
          match: LH + BH.lookahead(":"),
          relevance: 0
        }, NH, {
          PX: "(" + HH.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [OH, HH.REGEXP_MODE, {
            className: "function",
            PX: gH,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                PX: HH.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                PX: /\(\s*\)/,
                skip: !0
              }, {
                PX: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: uH,
                contains: mH
              }]
            }]
          }, {
            PX: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              PX: XH,
              end: GH
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              PX: YH.PX,
              "on:begin": YH.isTrulyOpeningTag,
              end: YH.end
            }],
            subLanguage: "xml",
            contains: [{
              PX: YH.PX,
              end: YH.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, lH, {
          beginKeywords: "while if switch catch for"
        }, {
          PX: "\\b(?!function)" + HH.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [oH, HH.inherit(HH.TITLE_MODE, {
            PX: LH,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, eH, {
          match: "\\$" + LH,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [oH]
        }, KH, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, IH, qH, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5214: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => GH
    });
    const AH = "[A-Za-z$_][0-9A-Za-z$_]*",
      rH = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      SH = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      hH = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      tH = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      zH = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      CH = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      EH = [].concat(zH, hH, tH);

    function XH(HH) {
      const BH = HH.regex,
        LH = AH,
        XH = "<>",
        GH = "</>",
        YH = {
          PX: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (HH, BH) => {
            const LH = HH[0].length + HH.index,
              AH = HH.input[LH];
            if ("<" === AH || "," === AH) return void BH.ignoreMatch();
            let rH;
            ">" === AH && (((HH, BH) => {
              let {
                after: LH
              } = BH;
              const AH = "</" + HH[0].slice(1);
              return -1 !== HH.input.indexOf(AH, LH)
            })(HH, {
              after: LH
            }) || BH.ignoreMatch());
            const SH = HH.input.substring(LH);
            ((rH = SH.match(/^\s*=/)) || (rH = SH.match(/^\s+extends\s+/)) && 0 === rH.index) && BH.ignoreMatch()
          }
        },
        uH = {
          $pattern: AH,
          keyword: rH,
          literal: SH,
          built_in: EH,
          "variable.language": CH
        },
        QH = "[0-9](_?[0-9])*",
        WH = `\\.(${QH})`,
        MH = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        xH = {
          className: "number",
          variants: [{
            PX: `(\\b(${MH})((${WH})|\\.)?|(${WH}))[eE][+-]?(${QH})\\b`
          }, {
            PX: `\\b(${MH})\\b((${WH})\\b|\\.)?|(${WH})\\b`
          }, {
            PX: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            PX: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            PX: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            PX: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            PX: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        vH = {
          className: "subst",
          PX: "\\$\\{",
          end: "\\}",
          keywords: uH,
          contains: []
        },
        PH = {
          PX: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [HH.BACKSLASH_ESCAPE, vH],
            subLanguage: "xml"
          }
        },
        TH = {
          PX: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [HH.BACKSLASH_ESCAPE, vH],
            subLanguage: "css"
          }
        },
        UH = {
          PX: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [HH.BACKSLASH_ESCAPE, vH],
            subLanguage: "graphql"
          }
        },
        VH = {
          className: "string",
          PX: "`",
          end: "`",
          contains: [HH.BACKSLASH_ESCAPE, vH]
        },
        OH = {
          className: "comment",
          variants: [HH.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              PX: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                PX: "@[A-Za-z]+"
              }, {
                className: "type",
                PX: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                PX: LH + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                PX: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), HH.C_BLOCK_COMMENT_MODE, HH.C_LINE_COMMENT_MODE]
        },
        bH = [HH.APOS_STRING_MODE, HH.QUOTE_STRING_MODE, PH, TH, UH, VH, {
          match: /\$\d+/
        }, xH];
      vH.contains = bH.concat({
        PX: /\{/,
        end: /\}/,
        keywords: uH,
        contains: ["self"].concat(bH)
      });
      const kH = [].concat(OH, vH.contains),
        mH = kH.concat([{
          PX: /(\s*)\(/,
          end: /\)/,
          keywords: uH,
          contains: ["self"].concat(kH)
        }]),
        oH = {
          className: "params",
          PX: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: uH,
          contains: mH
        },
        IH = {
          variants: [{
            match: [/class/, /\s+/, LH, /\s+/, /extends/, /\s+/, BH.concat(LH, "(", BH.concat(/\./, LH), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, LH],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        fH = {
          relevance: 0,
          match: BH.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...hH, ...tH]
          }
        },
        lH = {
          variants: [{
            match: [/function/, /\s+/, LH, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [oH],
          illegal: /%/
        };
      const KH = {
        match: BH.concat(/\b/, (cH = [...zH, "super", "import"].map((HH => `${HH}\\s*\\(`)), BH.concat("(?!", cH.join("|"), ")")), LH, BH.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var cH;
      const eH = {
          PX: BH.concat(/\./, BH.lookahead(BH.concat(LH, /(?![0-9A-Za-z$_(])/))),
          end: LH,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        qH = {
          match: [/get|set/, /\s+/, LH, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            PX: /\(\)/
          }, oH]
        },
        gH = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + HH.UNDERSCORE_IDENT_RE + ")\\s*=>",
        NH = {
          match: [/const|var|let/, /\s+/, LH, /\s*/, /=\s*/, /(async\s*)?/, BH.lookahead(gH)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [oH]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: uH,
        exports: {
          PARAMS_CONTAINS: mH,
          CLASS_REFERENCE: fH
        },
        illegal: /#(?![$_A-z])/,
        contains: [HH.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          PX: /^\s*['"]use (strict|asm)['"]/
        }, HH.APOS_STRING_MODE, HH.QUOTE_STRING_MODE, PH, TH, UH, VH, OH, {
          match: /\$\d+/
        }, xH, fH, {
          scope: "attr",
          match: LH + BH.lookahead(":"),
          relevance: 0
        }, NH, {
          PX: "(" + HH.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [OH, HH.REGEXP_MODE, {
            className: "function",
            PX: gH,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                PX: HH.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                PX: /\(\s*\)/,
                skip: !0
              }, {
                PX: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: uH,
                contains: mH
              }]
            }]
          }, {
            PX: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              PX: XH,
              end: GH
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              PX: YH.PX,
              "on:begin": YH.isTrulyOpeningTag,
              end: YH.end
            }],
            subLanguage: "xml",
            contains: [{
              PX: YH.PX,
              end: YH.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, lH, {
          beginKeywords: "while if switch catch for"
        }, {
          PX: "\\b(?!function)" + HH.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [oH, HH.inherit(HH.TITLE_MODE, {
            PX: LH,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, eH, {
          match: "\\$" + LH,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [oH]
        }, KH, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, IH, qH, {
          match: /\$[(.]/
        }]
      }
    }

    function GH(HH) {
      const BH = HH.regex,
        LH = XH(HH),
        hH = AH,
        tH = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        zH = {
          PX: [/namespace/, /\s+/, HH.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        GH = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: tH
          },
          contains: [LH.exports.CLASS_REFERENCE]
        },
        YH = {
          $pattern: AH,
          keyword: rH.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: SH,
          built_in: EH.concat(tH),
          "variable.language": CH
        },
        uH = {
          className: "meta",
          PX: "@" + hH
        },
        QH = (HH, BH, LH) => {
          const AH = HH.contains.findIndex((HH => HH.label === BH));
          if (-1 === AH) throw new Error("can not find mode to replace");
          HH.contains.splice(AH, 1, LH)
        };
      Object.assign(LH.keywords, YH), LH.exports.PARAMS_CONTAINS.push(uH);
      const WH = LH.contains.find((HH => "attr" === HH.scope)),
        MH = Object.assign({}, WH, {
          match: BH.concat(hH, BH.lookahead(/\s*\?:/))
        });
      LH.exports.PARAMS_CONTAINS.push([LH.exports.CLASS_REFERENCE, WH, MH]), LH.contains = LH.contains.concat([uH, zH, GH, MH]), QH(LH, "shebang", HH.SHEBANG()), QH(LH, "use_strict", {
        className: "meta",
        relevance: 10,
        PX: /^\s*['"]use strict['"]/
      });
      return LH.contains.find((HH => "func.def" === HH.label)).relevance = 0, Object.assign(LH, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), LH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);