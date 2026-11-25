export const id = 80;
export const ids = [80];
export const modules = {
  4736: GG => {
    function bG(GG) {
      return GG instanceof Map ? GG.clear = GG.delete = GG.set = function() {
        throw new Error("map is read-only")
      } : GG instanceof Set && (GG.add = GG.clear = GG.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(GG), Object.getOwnPropertyNames(GG).forEach((ZG => {
        const wG = GG[ZG],
          SG = typeof wG;
        "object" !== SG && "function" !== SG || Object.isFrozen(wG) || bG(wG)
      })), GG
    }
    class ZG {
      constructor(GG) {
        void 0 === GG.data && (GG.data = {}), this.data = GG.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function wG(GG) {
      return GG.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function SG(GG) {
      const bG = Object.create(null);
      for (const LG in GG) bG[LG] = GG[LG];
      for (var ZG = arguments.length, wG = new Array(ZG > 1 ? ZG - 1 : 0), SG = 1; SG < ZG; SG++) wG[SG - 1] = arguments[SG];
      return wG.forEach((function(GG) {
        for (const ZG in GG) bG[ZG] = GG[ZG]
      })), bG
    }
    const LG = GG => !!GG.scope;
    class yG {
      constructor(GG, bG) {
        this.buffer = "", this.classPrefix = bG.classPrefix, GG.walk(this)
      }
      addText(GG) {
        this.buffer += wG(GG)
      }
      openNode(GG) {
        if (!LG(GG)) return;
        const bG = ((GG, bG) => {
          let {
            prefix: ZG
          } = bG;
          if (GG.startsWith("language:")) return GG.replace("language:", "language-");
          if (GG.includes(".")) {
            const bG = GG.split(".");
            return [`${ZG}${bG.shift()}`, ...bG.map(((GG, bG) => `${GG}${"_".repeat(bG+1)}`))].join(" ")
          }
          return `${ZG}${GG}`
        })(GG.scope, {
          prefix: this.classPrefix
        });
        this.span(bG)
      }
      closeNode(GG) {
        LG(GG) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(GG) {
        this.buffer += `<span class="${GG}">`
      }
    }
    const kG = function() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const bG = {
        children: []
      };
      return Object.assign(bG, GG), bG
    };
    class UG {
      constructor() {
        this.eJ = kG(), this.stack = [this.eJ]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.eJ
      }
      add(GG) {
        this.top.children.push(GG)
      }
      openNode(GG) {
        const bG = kG({
          scope: GG
        });
        this.add(bG), this.stack.push(bG)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.eJ, null, 4)
      }
      walk(GG) {
        return this.constructor._walk(GG, this.eJ)
      }
      static _walk(GG, bG) {
        return "string" === typeof bG ? GG.addText(bG) : bG.children && (GG.openNode(bG), bG.children.forEach((bG => this._walk(GG, bG))), GG.closeNode(bG)), GG
      }
      static _collapse(GG) {
        "string" !== typeof GG && GG.children && (GG.children.every((GG => "string" === typeof GG)) ? GG.children = [GG.children.join("")] : GG.children.forEach((GG => {
          UG._collapse(GG)
        })))
      }
    }
    class YG extends UG {
      constructor(GG) {
        super(), this.options = GG
      }
      addText(GG) {
        "" !== GG && this.add(GG)
      }
      startScope(GG) {
        this.openNode(GG)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(GG, bG) {
        const ZG = GG.root;
        bG && (ZG.scope = `language:${bG}`), this.add(ZG)
      }
      toHTML() {
        return new yG(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function VG(GG) {
      return GG ? "string" === typeof GG ? GG : GG.source : null
    }

    function pG(GG) {
      return KG("(?=", GG, ")")
    }

    function fG(GG) {
      return KG("(?:", GG, ")*")
    }

    function QG(GG) {
      return KG("(?:", GG, ")?")
    }

    function KG() {
      for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
      return bG.map((GG => VG(GG))).join("")
    }

    function hG() {
      for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
      const wG = function(GG) {
        const bG = GG[GG.length - 1];
        return "object" === typeof bG && bG.constructor === Object ? (GG.splice(GG.length - 1, 1), bG) : {}
      }(bG);
      return "(" + (wG.capture ? "" : "?:") + bG.map((GG => VG(GG))).join("|") + ")"
    }

    function dG(GG) {
      return new RegExp(GG.toString() + "|").exec("").length - 1
    }
    const JG = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function rG(GG, bG) {
      let {
        joinWith: ZG
      } = bG, wG = 0;
      return GG.map((GG => {
        wG += 1;
        const bG = wG;
        let ZG = VG(GG),
          SG = "";
        for (; ZG.length > 0;) {
          const GG = JG.exec(ZG);
          if (!GG) {
            SG += ZG;
            break
          }
          SG += ZG.substring(0, GG.index), ZG = ZG.substring(GG.index + GG[0].length), "\\" === GG[0][0] && GG[1] ? SG += "\\" + String(Number(GG[1]) + bG) : (SG += GG[0], "(" === GG[0] && wG++)
        }
        return SG
      })).map((GG => `(${GG})`)).join(ZG)
    }
    const zG = "[a-zA-Z]\\w*",
      EG = "[a-zA-Z_]\\w*",
      oG = "\\b\\d+(\\.\\d+)?",
      XG = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      uG = "\\b(0b[01]+)",
      iG = {
        hQ: "\\\\[\\s\\S]",
        relevance: 0
      },
      CG = {
        scope: "string",
        hQ: "'",
        end: "'",
        illegal: "\\n",
        contains: [iG]
      },
      WG = {
        scope: "string",
        hQ: '"',
        end: '"',
        illegal: "\\n",
        contains: [iG]
      },
      mG = function(GG, bG) {
        const ZG = SG({
          scope: "comment",
          hQ: GG,
          end: bG,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        ZG.contains.push({
          scope: "doctag",
          hQ: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const wG = hG("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return ZG.contains.push({
          hQ: KG(/[ ]+/, "(", wG, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), ZG
      },
      IG = mG("//", "$"),
      FG = mG("/\\*", "\\*/"),
      vG = mG("#", "$"),
      aG = {
        scope: "number",
        hQ: oG,
        relevance: 0
      },
      cG = {
        scope: "number",
        hQ: XG,
        relevance: 0
      },
      lG = {
        scope: "number",
        hQ: uG,
        relevance: 0
      },
      jG = {
        scope: "regexp",
        hQ: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [iG, {
          hQ: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [iG]
        }]
      },
      PG = {
        scope: "title",
        hQ: zG,
        relevance: 0
      },
      MG = {
        scope: "title",
        hQ: EG,
        relevance: 0
      },
      AG = {
        hQ: "\\.\\s*" + EG,
        relevance: 0
      };
    var sG = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: CG,
      BACKSLASH_ESCAPE: iG,
      BINARY_NUMBER_MODE: lG,
      BINARY_NUMBER_RE: uG,
      COMMENT: mG,
      C_BLOCK_COMMENT_MODE: FG,
      C_LINE_COMMENT_MODE: IG,
      C_NUMBER_MODE: cG,
      C_NUMBER_RE: XG,
      END_SAME_AS_BEGIN: function(GG) {
        return Object.assign(GG, {
          "on:begin": (GG, bG) => {
            bG.data._beginMatch = GG[1]
          },
          "on:end": (GG, bG) => {
            bG.data._beginMatch !== GG[1] && bG.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: vG,
      IDENT_RE: zG,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: AG,
      NUMBER_MODE: aG,
      NUMBER_RE: oG,
      PHRASAL_WORDS_MODE: {
        hQ: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: WG,
      REGEXP_MODE: jG,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const bG = /^#![ ]*\//;
        return GG.binary && (GG.hQ = KG(bG, /.*\b/, GG.binary, /\b.*/)), SG({
          scope: "meta",
          hQ: bG,
          end: /$/,
          relevance: 0,
          "on:begin": (GG, bG) => {
            0 !== GG.index && bG.ignoreMatch()
          }
        }, GG)
      },
      TITLE_MODE: PG,
      UNDERSCORE_IDENT_RE: EG,
      UNDERSCORE_TITLE_MODE: MG
    });

    function qG(GG, bG) {
      "." === GG.input[GG.index - 1] && bG.ignoreMatch()
    }

    function nG(GG, bG) {
      void 0 !== GG.className && (GG.scope = GG.className, delete GG.className)
    }

    function gG(GG, bG) {
      bG && GG.beginKeywords && (GG.hQ = "\\b(" + GG.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", GG.__beforeBegin = qG, GG.keywords = GG.keywords || GG.beginKeywords, delete GG.beginKeywords, void 0 === GG.relevance && (GG.relevance = 0))
    }

    function eG(GG, bG) {
      Array.isArray(GG.illegal) && (GG.illegal = hG(...GG.illegal))
    }

    function RG(GG, bG) {
      if (GG.match) {
        if (GG.hQ || GG.end) throw new Error("begin & end are not supported with match");
        GG.hQ = GG.match, delete GG.match
      }
    }

    function TG(GG, bG) {
      void 0 === GG.relevance && (GG.relevance = 1)
    }
    const HG = (GG, bG) => {
        if (!GG.beforeMatch) return;
        if (GG.starts) throw new Error("beforeMatch cannot be used with starts");
        const ZG = Object.assign({}, GG);
        Object.keys(GG).forEach((bG => {
          delete GG[bG]
        })), GG.keywords = ZG.keywords, GG.hQ = KG(ZG.beforeMatch, pG(ZG.hQ)), GG.starts = {
          relevance: 0,
          contains: [Object.assign(ZG, {
            endsParent: !0
          })]
        }, GG.relevance = 0, delete ZG.beforeMatch
      },
      tG = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function DG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const wG = Object.create(null);
      return "string" === typeof GG ? SG(ZG, GG.split(" ")) : Array.isArray(GG) ? SG(ZG, GG) : Object.keys(GG).forEach((function(ZG) {
        Object.assign(wG, DG(GG[ZG], bG, ZG))
      })), wG;

      function SG(GG, ZG) {
        bG && (ZG = ZG.map((GG => GG.toLowerCase()))), ZG.forEach((function(bG) {
          const ZG = bG.split("|");
          wG[ZG[0]] = [GG, NG(ZG[0], ZG[1])]
        }))
      }
    }

    function NG(GG, bG) {
      return bG ? Number(bG) : function(GG) {
        return tG.includes(GG.toLowerCase())
      }(GG) ? 0 : 1
    }
    const OG = {},
      xG = GG => {
        console.error(GG)
      },
      BG = function(GG) {
        for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
        console.log(`WARN: ${GG}`, ...ZG)
      },
      Gb = (GG, bG) => {
        OG[`${GG}/${bG}`] || (console.log(`Deprecated as of ${GG}. ${bG}`), OG[`${GG}/${bG}`] = !0)
      },
      bb = new Error;

    function Zb(GG, bG, ZG) {
      let {
        key: wG
      } = ZG, SG = 0;
      const LG = GG[wG],
        yG = {},
        kG = {};
      for (let UG = 1; UG <= bG.length; UG++) kG[UG + SG] = LG[UG], yG[UG + SG] = !0, SG += dG(bG[UG - 1]);
      GG[wG] = kG, GG[wG]._emit = yG, GG[wG]._multi = !0
    }

    function wb(GG) {
      ! function(GG) {
        GG.scope && "object" === typeof GG.scope && null !== GG.scope && (GG.beginScope = GG.scope, delete GG.scope)
      }(GG), "string" === typeof GG.beginScope && (GG.beginScope = {
          _wrap: GG.beginScope
        }), "string" === typeof GG.endScope && (GG.endScope = {
          _wrap: GG.endScope
        }),
        function(GG) {
          if (Array.isArray(GG.hQ)) {
            if (GG.skip || GG.excludeBegin || GG.returnBegin) throw xG("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), bb;
            if ("object" !== typeof GG.beginScope || null === GG.beginScope) throw xG("beginScope must be object"), bb;
            Zb(GG, GG.hQ, {
              key: "beginScope"
            }), GG.hQ = rG(GG.hQ, {
              joinWith: ""
            })
          }
        }(GG),
        function(GG) {
          if (Array.isArray(GG.end)) {
            if (GG.skip || GG.excludeEnd || GG.returnEnd) throw xG("skip, excludeEnd, returnEnd not compatible with endScope: {}"), bb;
            if ("object" !== typeof GG.endScope || null === GG.endScope) throw xG("endScope must be object"), bb;
            Zb(GG, GG.end, {
              key: "endScope"
            }), GG.end = rG(GG.end, {
              joinWith: ""
            })
          }
        }(GG)
    }

    function Sb(GG) {
      function bG(bG, ZG) {
        return new RegExp(VG(bG), "m" + (GG.case_insensitive ? "i" : "") + (GG.unicodeRegex ? "u" : "") + (ZG ? "g" : ""))
      }
      class ZG {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(GG, bG) {
          bG.position = this.position++, this.matchIndexes[this.matchAt] = bG, this.regexes.push([bG, GG]), this.matchAt += dG(GG) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const GG = this.regexes.map((GG => GG[1]));
          this.matcherRe = bG(rG(GG, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(GG) {
          this.matcherRe.lastIndex = this.lastIndex;
          const bG = this.matcherRe.exec(GG);
          if (!bG) return null;
          const ZG = bG.findIndex(((GG, bG) => bG > 0 && void 0 !== GG)),
            wG = this.matchIndexes[ZG];
          return bG.splice(0, ZG), Object.assign(bG, wG)
        }
      }
      class wG {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(GG) {
          if (this.multiRegexes[GG]) return this.multiRegexes[GG];
          const bG = new ZG;
          return this.rules.slice(GG).forEach((GG => {
            let [ZG, wG] = GG;
            return bG.addRule(ZG, wG)
          })), bG.compile(), this.multiRegexes[GG] = bG, bG
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(GG, bG) {
          this.rules.push([GG, bG]), "hQ" === bG.type && this.count++
        }
        exec(GG) {
          const bG = this.getMatcher(this.regexIndex);
          bG.lastIndex = this.lastIndex;
          let ZG = bG.exec(GG);
          if (this.resumingScanAtSamePosition())
            if (ZG && ZG.index === this.lastIndex);
            else {
              const bG = this.getMatcher(0);
              bG.lastIndex = this.lastIndex + 1, ZG = bG.exec(GG)
            } return ZG && (this.regexIndex += ZG.position + 1, this.regexIndex === this.count && this.considerAll()), ZG
        }
      }
      if (GG.compilerExtensions || (GG.compilerExtensions = []), GG.contains && GG.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return GG.classNameAliases = SG(GG.classNameAliases || {}),
        function ZG(LG, yG) {
          const kG = LG;
          if (LG.isCompiled) return kG;
          [nG, RG, wb, HG].forEach((GG => GG(LG, yG))), GG.compilerExtensions.forEach((GG => GG(LG, yG))), LG.__beforeBegin = null, [gG, eG, TG].forEach((GG => GG(LG, yG))), LG.isCompiled = !0;
          let UG = null;
          return "object" === typeof LG.keywords && LG.keywords.$pattern && (LG.keywords = Object.assign({}, LG.keywords), UG = LG.keywords.$pattern, delete LG.keywords.$pattern), UG = UG || /\w+/, LG.keywords && (LG.keywords = DG(LG.keywords, GG.case_insensitive)), kG.keywordPatternRe = bG(UG, !0), yG && (LG.hQ || (LG.hQ = /\B|\b/), kG.beginRe = bG(kG.hQ), LG.end || LG.endsWithParent || (LG.end = /\B|\b/), LG.end && (kG.endRe = bG(kG.end)), kG.terminatorEnd = VG(kG.end) || "", LG.endsWithParent && yG.terminatorEnd && (kG.terminatorEnd += (LG.end ? "|" : "") + yG.terminatorEnd)), LG.illegal && (kG.illegalRe = bG(LG.illegal)), LG.contains || (LG.contains = []), LG.contains = [].concat(...LG.contains.map((function(GG) {
            return function(GG) {
              GG.variants && !GG.cachedVariants && (GG.cachedVariants = GG.variants.map((function(bG) {
                return SG(GG, {
                  variants: null
                }, bG)
              })));
              if (GG.cachedVariants) return GG.cachedVariants;
              if (Lb(GG)) return SG(GG, {
                starts: GG.starts ? SG(GG.starts) : null
              });
              if (Object.isFrozen(GG)) return SG(GG);
              return GG
            }("self" === GG ? LG : GG)
          }))), LG.contains.forEach((function(GG) {
            ZG(GG, kG)
          })), LG.starts && ZG(LG.starts, yG), kG.matcher = function(GG) {
            const bG = new wG;
            return GG.contains.forEach((GG => bG.addRule(GG.hQ, {
              rule: GG,
              type: "hQ"
            }))), GG.terminatorEnd && bG.addRule(GG.terminatorEnd, {
              type: "end"
            }), GG.illegal && bG.addRule(GG.illegal, {
              type: "illegal"
            }), bG
          }(kG), kG
        }(GG)
    }

    function Lb(GG) {
      return !!GG && (GG.endsWithParent || Lb(GG.starts))
    }
    class yb extends Error {
      constructor(GG, bG) {
        super(GG), this.name = "HTMLInjectionError", this.html = bG
      }
    }
    const kb = wG,
      Ub = SG,
      Yb = Symbol("nomatch"),
      Vb = function(GG) {
        const wG = Object.create(null),
          SG = Object.create(null),
          LG = [];
        let yG = !0;
        const kG = "Could not find the language '{}', did you forget to load/include a language module?",
          UG = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let VG = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: YG
        };

        function dG(GG) {
          return VG.noHighlightRe.test(GG)
        }

        function JG(GG, bG, ZG) {
          let wG = "",
            SG = "";
          "object" === typeof bG ? (wG = GG, ZG = bG.ignoreIllegals, SG = bG.language) : (Gb("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Gb("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), SG = GG, wG = bG), void 0 === ZG && (ZG = !0);
          const LG = {
            code: wG,
            language: SG
          };
          WG("before:highlight", LG);
          const yG = LG.result ? LG.result : rG(LG.language, LG.code, ZG);
          return yG.code = LG.code, WG("after:highlight", yG), yG
        }

        function rG(GG, bG, SG, LG) {
          const UG = Object.create(null);

          function YG() {
            if (!WG.keywords) return void IG.addText(FG);
            let GG = 0;
            WG.keywordPatternRe.lastIndex = 0;
            let bG = WG.keywordPatternRe.exec(FG),
              ZG = "";
            for (; bG;) {
              ZG += FG.substring(GG, bG.index);
              const SG = XG.case_insensitive ? bG[0].toLowerCase() : bG[0],
                LG = (wG = SG, WG.keywords[wG]);
              if (LG) {
                const [GG, wG] = LG;
                if (IG.addText(ZG), ZG = "", UG[SG] = (UG[SG] || 0) + 1, UG[SG] <= 7 && (vG += wG), GG.startsWith("_")) ZG += bG[0];
                else {
                  const ZG = XG.classNameAliases[GG] || GG;
                  fG(bG[0], ZG)
                }
              } else ZG += bG[0];
              GG = WG.keywordPatternRe.lastIndex, bG = WG.keywordPatternRe.exec(FG)
            }
            var wG;
            ZG += FG.substring(GG), IG.addText(ZG)
          }

          function pG() {
            null != WG.subLanguage ? function() {
              if ("" === FG) return;
              let GG = null;
              if ("string" === typeof WG.subLanguage) {
                if (!wG[WG.subLanguage]) return void IG.addText(FG);
                GG = rG(WG.subLanguage, FG, !0, mG[WG.subLanguage]), mG[WG.subLanguage] = GG._top
              } else GG = zG(FG, WG.subLanguage.length ? WG.subLanguage : null);
              WG.relevance > 0 && (vG += GG.relevance), IG.__addSublanguage(GG._emitter, GG.language)
            }() : YG(), FG = ""
          }

          function fG(GG, bG) {
            "" !== GG && (IG.startScope(bG), IG.addText(GG), IG.endScope())
          }

          function QG(GG, bG) {
            let ZG = 1;
            const wG = bG.length - 1;
            for (; ZG <= wG;) {
              if (!GG._emit[ZG]) {
                ZG++;
                continue
              }
              const wG = XG.classNameAliases[GG[ZG]] || GG[ZG],
                SG = bG[ZG];
              wG ? fG(SG, wG) : (FG = SG, YG(), FG = ""), ZG++
            }
          }

          function KG(GG, bG) {
            return GG.scope && "string" === typeof GG.scope && IG.openNode(XG.classNameAliases[GG.scope] || GG.scope), GG.beginScope && (GG.beginScope._wrap ? (fG(FG, XG.classNameAliases[GG.beginScope._wrap] || GG.beginScope._wrap), FG = "") : GG.beginScope._multi && (QG(GG.beginScope, bG), FG = "")), WG = Object.create(GG, {
              parent: {
                value: WG
              }
            }), WG
          }

          function hG(GG, bG, wG) {
            let SG = function(GG, bG) {
              const ZG = GG && GG.exec(bG);
              return ZG && 0 === ZG.index
            }(GG.endRe, wG);
            if (SG) {
              if (GG["on:end"]) {
                const wG = new ZG(GG);
                GG["on:end"](bG, wG), wG.isMatchIgnored && (SG = !1)
              }
              if (SG) {
                for (; GG.endsParent && GG.parent;) GG = GG.parent;
                return GG
              }
            }
            if (GG.endsWithParent) return hG(GG.parent, bG, wG)
          }

          function dG(GG) {
            return 0 === WG.matcher.regexIndex ? (FG += GG[0], 1) : (lG = !0, 0)
          }

          function JG(GG) {
            const ZG = GG[0],
              wG = bG.substring(GG.index),
              SG = hG(WG, GG, wG);
            if (!SG) return Yb;
            const LG = WG;
            WG.endScope && WG.endScope._wrap ? (pG(), fG(ZG, WG.endScope._wrap)) : WG.endScope && WG.endScope._multi ? (pG(), QG(WG.endScope, GG)) : LG.skip ? FG += ZG : (LG.returnEnd || LG.excludeEnd || (FG += ZG), pG(), LG.excludeEnd && (FG = ZG));
            do {
              WG.scope && IG.closeNode(), WG.skip || WG.subLanguage || (vG += WG.relevance), WG = WG.parent
            } while (WG !== SG.parent);
            return SG.starts && KG(SG.starts, GG), LG.returnEnd ? 0 : ZG.length
          }
          let EG = {};

          function oG(wG, LG) {
            const kG = LG && LG[0];
            if (FG += wG, null == kG) return pG(), 0;
            if ("hQ" === EG.type && "end" === LG.type && EG.index === LG.index && "" === kG) {
              if (FG += bG.slice(LG.index, LG.index + 1), !yG) {
                const bG = new Error(`0 width match regex (${GG})`);
                throw bG.languageName = GG, bG.badRule = EG.rule, bG
              }
              return 1
            }
            if (EG = LG, "hQ" === LG.type) return function(GG) {
              const bG = GG[0],
                wG = GG.rule,
                SG = new ZG(wG),
                LG = [wG.__beforeBegin, wG["on:begin"]];
              for (const ZG of LG)
                if (ZG && (ZG(GG, SG), SG.isMatchIgnored)) return dG(bG);
              return wG.skip ? FG += bG : (wG.excludeBegin && (FG += bG), pG(), wG.returnBegin || wG.excludeBegin || (FG = bG)), KG(wG, GG), wG.returnBegin ? 0 : bG.length
            }(LG);
            if ("illegal" === LG.type && !SG) {
              const GG = new Error('Illegal lexeme "' + kG + '" for mode "' + (WG.scope || "<unnamed>") + '"');
              throw GG.mode = WG, GG
            }
            if ("end" === LG.type) {
              const GG = JG(LG);
              if (GG !== Yb) return GG
            }
            if ("illegal" === LG.type && "" === kG) return FG += "\n", 1;
            if (cG > 1e5 && cG > 3 * LG.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return FG += kG, kG.length
          }
          const XG = uG(GG);
          if (!XG) throw xG(kG.replace("{}", GG)), new Error('Unknown language: "' + GG + '"');
          const iG = Sb(XG);
          let CG = "",
            WG = LG || iG;
          const mG = {},
            IG = new VG.__emitter(VG);
          ! function() {
            const GG = [];
            for (let bG = WG; bG !== XG; bG = bG.parent) bG.scope && GG.unshift(bG.scope);
            GG.forEach((GG => IG.openNode(GG)))
          }();
          let FG = "",
            vG = 0,
            aG = 0,
            cG = 0,
            lG = !1;
          try {
            if (XG.__emitTokens) XG.__emitTokens(bG, IG);
            else {
              for (WG.matcher.considerAll();;) {
                cG++, lG ? lG = !1 : WG.matcher.considerAll(), WG.matcher.lastIndex = aG;
                const GG = WG.matcher.exec(bG);
                if (!GG) break;
                const ZG = oG(bG.substring(aG, GG.index), GG);
                aG = GG.index + ZG
              }
              oG(bG.substring(aG))
            }
            return IG.finalize(), CG = IG.toHTML(), {
              language: GG,
              value: CG,
              relevance: vG,
              illegal: !1,
              _emitter: IG,
              _top: WG
            }
          } catch (jG) {
            if (jG.message && jG.message.includes("Illegal")) return {
              language: GG,
              value: kb(bG),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: jG.message,
                index: aG,
                context: bG.slice(aG - 100, aG + 100),
                mode: jG.mode,
                resultSoFar: CG
              },
              _emitter: IG
            };
            if (yG) return {
              language: GG,
              value: kb(bG),
              illegal: !1,
              relevance: 0,
              errorRaised: jG,
              _emitter: IG,
              _top: WG
            };
            throw jG
          }
        }

        function zG(GG, bG) {
          bG = bG || VG.languages || Object.keys(wG);
          const ZG = function(GG) {
              const bG = {
                value: kb(GG),
                illegal: !1,
                relevance: 0,
                _top: UG,
                _emitter: new VG.__emitter(VG)
              };
              return bG._emitter.addText(GG), bG
            }(GG),
            SG = bG.filter(uG).filter(CG).map((bG => rG(bG, GG, !1)));
          SG.unshift(ZG);
          const LG = SG.sort(((GG, bG) => {
              if (GG.relevance !== bG.relevance) return bG.relevance - GG.relevance;
              if (GG.language && bG.language) {
                if (uG(GG.language).supersetOf === bG.language) return 1;
                if (uG(bG.language).supersetOf === GG.language) return -1
              }
              return 0
            })),
            [yG, kG] = LG,
            YG = yG;
          return YG.secondBest = kG, YG
        }

        function EG(GG) {
          let bG = null;
          const ZG = function(GG) {
            let bG = GG.className + " ";
            bG += GG.parentNode ? GG.parentNode.className : "";
            const ZG = VG.languageDetectRe.exec(bG);
            if (ZG) {
              const bG = uG(ZG[1]);
              return bG || (BG(kG.replace("{}", ZG[1])), BG("Falling back to no-highlight mode for this block.", GG)), bG ? ZG[1] : "no-highlight"
            }
            return bG.split(/\s+/).find((GG => dG(GG) || uG(GG)))
          }(GG);
          if (dG(ZG)) return;
          if (WG("before:highlightElement", {
              el: GG,
              language: ZG
            }), GG.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", GG);
          if (GG.children.length > 0 && (VG.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(GG)), VG.throwUnescapedHTML)) {
            throw new yb("One of your code blocks includes unescaped HTML.", GG.innerHTML)
          }
          bG = GG;
          const wG = bG.textContent,
            LG = ZG ? JG(wG, {
              language: ZG,
              ignoreIllegals: !0
            }) : zG(wG);
          GG.innerHTML = LG.value, GG.dataset.highlighted = "yes",
            function(GG, bG, ZG) {
              const wG = bG && SG[bG] || ZG;
              GG.classList.add("hljs"), GG.classList.add(`language-${wG}`)
            }(GG, ZG, LG.language), GG.result = {
              language: LG.language,
              re: LG.relevance,
              relevance: LG.relevance
            }, LG.secondBest && (GG.secondBest = {
              language: LG.secondBest.language,
              relevance: LG.secondBest.relevance
            }), WG("after:highlightElement", {
              el: GG,
              result: LG,
              text: wG
            })
        }
        let oG = !1;

        function XG() {
          if ("loading" === document.readyState) return oG || window.addEventListener("DOMContentLoaded", (function() {
            XG()
          }), !1), void(oG = !0);
          document.querySelectorAll(VG.cssSelector).forEach(EG)
        }

        function uG(GG) {
          return GG = (GG || "").toLowerCase(), wG[GG] || wG[SG[GG]]
        }

        function iG(GG, bG) {
          let {
            languageName: ZG
          } = bG;
          "string" === typeof GG && (GG = [GG]), GG.forEach((GG => {
            SG[GG.toLowerCase()] = ZG
          }))
        }

        function CG(GG) {
          const bG = uG(GG);
          return bG && !bG.disableAutodetect
        }

        function WG(GG, bG) {
          const ZG = GG;
          LG.forEach((function(GG) {
            GG[ZG] && GG[ZG](bG)
          }))
        }
        Object.assign(GG, {
          highlight: JG,
          highlightAuto: zG,
          highlightAll: XG,
          highlightElement: EG,
          highlightBlock: function(GG) {
            return Gb("10.7.0", "highlightBlock will be removed entirely in v12.0"), Gb("10.7.0", "Please use highlightElement now."), EG(GG)
          },
          configure: function(GG) {
            VG = Ub(VG, GG)
          },
          initHighlighting: () => {
            XG(), Gb("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            XG(), Gb("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(bG, ZG) {
            let SG = null;
            try {
              SG = ZG(GG)
            } catch (LG) {
              if (xG("Language definition for '{}' could not be registered.".replace("{}", bG)), !yG) throw LG;
              xG(LG), SG = UG
            }
            SG.name || (SG.name = bG), wG[bG] = SG, SG.rawDefinition = ZG.bind(null, GG), SG.aliases && iG(SG.aliases, {
              languageName: bG
            })
          },
          unregisterLanguage: function(GG) {
            delete wG[GG];
            for (const bG of Object.keys(SG)) SG[bG] === GG && delete SG[bG]
          },
          listLanguages: function() {
            return Object.keys(wG)
          },
          getLanguage: uG,
          registerAliases: iG,
          autoDetection: CG,
          inherit: Ub,
          addPlugin: function(GG) {
            ! function(GG) {
              GG["before:highlightBlock"] && !GG["before:highlightElement"] && (GG["before:highlightElement"] = bG => {
                GG["before:highlightBlock"](Object.assign({
                  block: bG.el
                }, bG))
              }), GG["after:highlightBlock"] && !GG["after:highlightElement"] && (GG["after:highlightElement"] = bG => {
                GG["after:highlightBlock"](Object.assign({
                  block: bG.el
                }, bG))
              })
            }(GG), LG.push(GG)
          },
          removePlugin: function(GG) {
            const bG = LG.indexOf(GG); - 1 !== bG && LG.splice(bG, 1)
          }
        }), GG.debugMode = function() {
          yG = !1
        }, GG.safeMode = function() {
          yG = !0
        }, GG.versionString = "11.11.1", GG.regex = {
          concat: KG,
          lookahead: pG,
          either: hG,
          optional: QG,
          anyNumberOfTimes: fG
        };
        for (const ZG in sG) "object" === typeof sG[ZG] && bG(sG[ZG]);
        return Object.assign(GG, sG), GG
      },
      pb = Vb({});
    pb.newInstance = () => Vb({}), GG.exports = pb, pb.HighlightJS = pb, pb.default = pb
  },
  4734: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    const wG = ZG(4736)
  },
  4745: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG
    });
    const wG = "[A-Za-z$_][0-9A-Za-z$_]*",
      SG = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      LG = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      yG = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      kG = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      UG = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      YG = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      VG = [].concat(UG, yG, kG);

    function pG(GG) {
      const bG = GG.regex,
        ZG = wG,
        pG = "<>",
        fG = "</>",
        QG = {
          hQ: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (GG, bG) => {
            const ZG = GG[0].length + GG.index,
              wG = GG.input[ZG];
            if ("<" === wG || "," === wG) return void bG.ignoreMatch();
            let SG;
            ">" === wG && (((GG, bG) => {
              let {
                after: ZG
              } = bG;
              const wG = "</" + GG[0].slice(1);
              return -1 !== GG.input.indexOf(wG, ZG)
            })(GG, {
              after: ZG
            }) || bG.ignoreMatch());
            const LG = GG.input.substring(ZG);
            ((SG = LG.match(/^\s*=/)) || (SG = LG.match(/^\s+extends\s+/)) && 0 === SG.index) && bG.ignoreMatch()
          }
        },
        KG = {
          $pattern: wG,
          keyword: SG,
          literal: LG,
          built_in: VG,
          "variable.language": YG
        },
        hG = "[0-9](_?[0-9])*",
        dG = `\\.(${hG})`,
        JG = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        rG = {
          className: "number",
          variants: [{
            hQ: `(\\b(${JG})((${dG})|\\.)?|(${dG}))[eE][+-]?(${hG})\\b`
          }, {
            hQ: `\\b(${JG})\\b((${dG})\\b|\\.)?|(${dG})\\b`
          }, {
            hQ: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            hQ: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            hQ: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            hQ: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            hQ: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        zG = {
          className: "subst",
          hQ: "\\$\\{",
          end: "\\}",
          keywords: KG,
          contains: []
        },
        EG = {
          hQ: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [GG.BACKSLASH_ESCAPE, zG],
            subLanguage: "xml"
          }
        },
        oG = {
          hQ: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [GG.BACKSLASH_ESCAPE, zG],
            subLanguage: "css"
          }
        },
        XG = {
          hQ: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [GG.BACKSLASH_ESCAPE, zG],
            subLanguage: "graphql"
          }
        },
        uG = {
          className: "string",
          hQ: "`",
          end: "`",
          contains: [GG.BACKSLASH_ESCAPE, zG]
        },
        iG = {
          className: "comment",
          variants: [GG.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              hQ: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                hQ: "@[A-Za-z]+"
              }, {
                className: "type",
                hQ: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                hQ: ZG + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                hQ: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), GG.C_BLOCK_COMMENT_MODE, GG.C_LINE_COMMENT_MODE]
        },
        CG = [GG.APOS_STRING_MODE, GG.QUOTE_STRING_MODE, EG, oG, XG, uG, {
          match: /\$\d+/
        }, rG];
      zG.contains = CG.concat({
        hQ: /\{/,
        end: /\}/,
        keywords: KG,
        contains: ["self"].concat(CG)
      });
      const WG = [].concat(iG, zG.contains),
        mG = WG.concat([{
          hQ: /(\s*)\(/,
          end: /\)/,
          keywords: KG,
          contains: ["self"].concat(WG)
        }]),
        IG = {
          className: "params",
          hQ: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: KG,
          contains: mG
        },
        FG = {
          variants: [{
            match: [/class/, /\s+/, ZG, /\s+/, /extends/, /\s+/, bG.concat(ZG, "(", bG.concat(/\./, ZG), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ZG],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        vG = {
          relevance: 0,
          match: bG.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...yG, ...kG]
          }
        },
        aG = {
          variants: [{
            match: [/function/, /\s+/, ZG, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [IG],
          illegal: /%/
        };
      const cG = {
        match: bG.concat(/\b/, (lG = [...UG, "super", "import"].map((GG => `${GG}\\s*\\(`)), bG.concat("(?!", lG.join("|"), ")")), ZG, bG.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var lG;
      const jG = {
          hQ: bG.concat(/\./, bG.lookahead(bG.concat(ZG, /(?![0-9A-Za-z$_(])/))),
          end: ZG,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        PG = {
          match: [/get|set/, /\s+/, ZG, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            hQ: /\(\)/
          }, IG]
        },
        MG = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + GG.UNDERSCORE_IDENT_RE + ")\\s*=>",
        AG = {
          match: [/const|var|let/, /\s+/, ZG, /\s*/, /=\s*/, /(async\s*)?/, bG.lookahead(MG)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [IG]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: KG,
        exports: {
          PARAMS_CONTAINS: mG,
          CLASS_REFERENCE: vG
        },
        illegal: /#(?![$_A-z])/,
        contains: [GG.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          hQ: /^\s*['"]use (strict|asm)['"]/
        }, GG.APOS_STRING_MODE, GG.QUOTE_STRING_MODE, EG, oG, XG, uG, iG, {
          match: /\$\d+/
        }, rG, vG, {
          scope: "attr",
          match: ZG + bG.lookahead(":"),
          relevance: 0
        }, AG, {
          hQ: "(" + GG.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [iG, GG.REGEXP_MODE, {
            className: "function",
            hQ: MG,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                hQ: GG.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                hQ: /\(\s*\)/,
                skip: !0
              }, {
                hQ: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: KG,
                contains: mG
              }]
            }]
          }, {
            hQ: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              hQ: pG,
              end: fG
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              hQ: QG.hQ,
              "on:begin": QG.isTrulyOpeningTag,
              end: QG.end
            }],
            subLanguage: "xml",
            contains: [{
              hQ: QG.hQ,
              end: QG.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, aG, {
          beginKeywords: "while if switch catch for"
        }, {
          hQ: "\\b(?!function)" + GG.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [IG, GG.inherit(GG.TITLE_MODE, {
            hQ: ZG,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, jG, {
          match: "\\$" + ZG,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [IG]
        }, cG, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, FG, PG, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4750: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => fG
    });
    const wG = "[A-Za-z$_][0-9A-Za-z$_]*",
      SG = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      LG = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      yG = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      kG = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      UG = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      YG = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      VG = [].concat(UG, yG, kG);

    function pG(GG) {
      const bG = GG.regex,
        ZG = wG,
        pG = "<>",
        fG = "</>",
        QG = {
          hQ: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (GG, bG) => {
            const ZG = GG[0].length + GG.index,
              wG = GG.input[ZG];
            if ("<" === wG || "," === wG) return void bG.ignoreMatch();
            let SG;
            ">" === wG && (((GG, bG) => {
              let {
                after: ZG
              } = bG;
              const wG = "</" + GG[0].slice(1);
              return -1 !== GG.input.indexOf(wG, ZG)
            })(GG, {
              after: ZG
            }) || bG.ignoreMatch());
            const LG = GG.input.substring(ZG);
            ((SG = LG.match(/^\s*=/)) || (SG = LG.match(/^\s+extends\s+/)) && 0 === SG.index) && bG.ignoreMatch()
          }
        },
        KG = {
          $pattern: wG,
          keyword: SG,
          literal: LG,
          built_in: VG,
          "variable.language": YG
        },
        hG = "[0-9](_?[0-9])*",
        dG = `\\.(${hG})`,
        JG = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        rG = {
          className: "number",
          variants: [{
            hQ: `(\\b(${JG})((${dG})|\\.)?|(${dG}))[eE][+-]?(${hG})\\b`
          }, {
            hQ: `\\b(${JG})\\b((${dG})\\b|\\.)?|(${dG})\\b`
          }, {
            hQ: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            hQ: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            hQ: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            hQ: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            hQ: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        zG = {
          className: "subst",
          hQ: "\\$\\{",
          end: "\\}",
          keywords: KG,
          contains: []
        },
        EG = {
          hQ: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [GG.BACKSLASH_ESCAPE, zG],
            subLanguage: "xml"
          }
        },
        oG = {
          hQ: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [GG.BACKSLASH_ESCAPE, zG],
            subLanguage: "css"
          }
        },
        XG = {
          hQ: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [GG.BACKSLASH_ESCAPE, zG],
            subLanguage: "graphql"
          }
        },
        uG = {
          className: "string",
          hQ: "`",
          end: "`",
          contains: [GG.BACKSLASH_ESCAPE, zG]
        },
        iG = {
          className: "comment",
          variants: [GG.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              hQ: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                hQ: "@[A-Za-z]+"
              }, {
                className: "type",
                hQ: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                hQ: ZG + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                hQ: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), GG.C_BLOCK_COMMENT_MODE, GG.C_LINE_COMMENT_MODE]
        },
        CG = [GG.APOS_STRING_MODE, GG.QUOTE_STRING_MODE, EG, oG, XG, uG, {
          match: /\$\d+/
        }, rG];
      zG.contains = CG.concat({
        hQ: /\{/,
        end: /\}/,
        keywords: KG,
        contains: ["self"].concat(CG)
      });
      const WG = [].concat(iG, zG.contains),
        mG = WG.concat([{
          hQ: /(\s*)\(/,
          end: /\)/,
          keywords: KG,
          contains: ["self"].concat(WG)
        }]),
        IG = {
          className: "params",
          hQ: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: KG,
          contains: mG
        },
        FG = {
          variants: [{
            match: [/class/, /\s+/, ZG, /\s+/, /extends/, /\s+/, bG.concat(ZG, "(", bG.concat(/\./, ZG), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ZG],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        vG = {
          relevance: 0,
          match: bG.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...yG, ...kG]
          }
        },
        aG = {
          variants: [{
            match: [/function/, /\s+/, ZG, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [IG],
          illegal: /%/
        };
      const cG = {
        match: bG.concat(/\b/, (lG = [...UG, "super", "import"].map((GG => `${GG}\\s*\\(`)), bG.concat("(?!", lG.join("|"), ")")), ZG, bG.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var lG;
      const jG = {
          hQ: bG.concat(/\./, bG.lookahead(bG.concat(ZG, /(?![0-9A-Za-z$_(])/))),
          end: ZG,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        PG = {
          match: [/get|set/, /\s+/, ZG, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            hQ: /\(\)/
          }, IG]
        },
        MG = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + GG.UNDERSCORE_IDENT_RE + ")\\s*=>",
        AG = {
          match: [/const|var|let/, /\s+/, ZG, /\s*/, /=\s*/, /(async\s*)?/, bG.lookahead(MG)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [IG]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: KG,
        exports: {
          PARAMS_CONTAINS: mG,
          CLASS_REFERENCE: vG
        },
        illegal: /#(?![$_A-z])/,
        contains: [GG.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          hQ: /^\s*['"]use (strict|asm)['"]/
        }, GG.APOS_STRING_MODE, GG.QUOTE_STRING_MODE, EG, oG, XG, uG, iG, {
          match: /\$\d+/
        }, rG, vG, {
          scope: "attr",
          match: ZG + bG.lookahead(":"),
          relevance: 0
        }, AG, {
          hQ: "(" + GG.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [iG, GG.REGEXP_MODE, {
            className: "function",
            hQ: MG,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                hQ: GG.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                hQ: /\(\s*\)/,
                skip: !0
              }, {
                hQ: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: KG,
                contains: mG
              }]
            }]
          }, {
            hQ: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              hQ: pG,
              end: fG
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              hQ: QG.hQ,
              "on:begin": QG.isTrulyOpeningTag,
              end: QG.end
            }],
            subLanguage: "xml",
            contains: [{
              hQ: QG.hQ,
              end: QG.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, aG, {
          beginKeywords: "while if switch catch for"
        }, {
          hQ: "\\b(?!function)" + GG.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [IG, GG.inherit(GG.TITLE_MODE, {
            hQ: ZG,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, jG, {
          match: "\\$" + ZG,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [IG]
        }, cG, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, FG, PG, {
          match: /\$[(.]/
        }]
      }
    }

    function fG(GG) {
      const bG = GG.regex,
        ZG = pG(GG),
        yG = wG,
        kG = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        UG = {
          hQ: [/namespace/, /\s+/, GG.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        fG = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: kG
          },
          contains: [ZG.exports.CLASS_REFERENCE]
        },
        QG = {
          $pattern: wG,
          keyword: SG.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: LG,
          built_in: VG.concat(kG),
          "variable.language": YG
        },
        KG = {
          className: "meta",
          hQ: "@" + yG
        },
        hG = (GG, bG, ZG) => {
          const wG = GG.contains.findIndex((GG => GG.label === bG));
          if (-1 === wG) throw new Error("can not find mode to replace");
          GG.contains.splice(wG, 1, ZG)
        };
      Object.assign(ZG.keywords, QG), ZG.exports.PARAMS_CONTAINS.push(KG);
      const dG = ZG.contains.find((GG => "attr" === GG.scope)),
        JG = Object.assign({}, dG, {
          match: bG.concat(yG, bG.lookahead(/\s*\?:/))
        });
      ZG.exports.PARAMS_CONTAINS.push([ZG.exports.CLASS_REFERENCE, dG, JG]), ZG.contains = ZG.contains.concat([KG, UG, fG, JG]), hG(ZG, "shebang", GG.SHEBANG()), hG(ZG, "use_strict", {
        className: "meta",
        relevance: 10,
        hQ: /^\s*['"]use strict['"]/
      });
      return ZG.contains.find((GG => "func.def" === GG.label)).relevance = 0, Object.assign(ZG, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), ZG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);