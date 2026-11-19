export const id = 76;
export const ids = [76];
export const modules = {
  4296: YY => {
    function rY(YY) {
      return YY instanceof Map ? YY.clear = YY.delete = YY.set = function() {
        throw new Error("map is read-only")
      } : YY instanceof Set && (YY.add = YY.clear = YY.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(YY), Object.getOwnPropertyNames(YY).forEach((DY => {
        const FY = YY[DY],
          AY = typeof FY;
        "object" !== AY && "function" !== AY || Object.isFrozen(FY) || rY(FY)
      })), YY
    }
    class DY {
      constructor(YY) {
        void 0 === YY.data && (YY.data = {}), this.data = YY.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function FY(YY) {
      return YY.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function AY(YY) {
      const rY = Object.create(null);
      for (const IY in YY) rY[IY] = YY[IY];
      for (var DY = arguments.length, FY = new Array(DY > 1 ? DY - 1 : 0), AY = 1; AY < DY; AY++) FY[AY - 1] = arguments[AY];
      return FY.forEach((function(YY) {
        for (const DY in YY) rY[DY] = YY[DY]
      })), rY
    }
    const IY = YY => !!YY.scope;
    class RY {
      constructor(YY, rY) {
        this.buffer = "", this.classPrefix = rY.classPrefix, YY.walk(this)
      }
      addText(YY) {
        this.buffer += FY(YY)
      }
      openNode(YY) {
        if (!IY(YY)) return;
        const rY = ((YY, rY) => {
          let {
            prefix: DY
          } = rY;
          if (YY.startsWith("language:")) return YY.replace("language:", "language-");
          if (YY.includes(".")) {
            const rY = YY.split(".");
            return [`${DY}${rY.shift()}`, ...rY.map(((YY, rY) => `${YY}${"_".repeat(rY+1)}`))].join(" ")
          }
          return `${DY}${YY}`
        })(YY.scope, {
          prefix: this.classPrefix
        });
        this.span(rY)
      }
      closeNode(YY) {
        IY(YY) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(YY) {
        this.buffer += `<span class="${YY}">`
      }
    }
    const OY = function() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const rY = {
        children: []
      };
      return Object.assign(rY, YY), rY
    };
    class gY {
      constructor() {
        this.WE = OY(), this.stack = [this.WE]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.WE
      }
      add(YY) {
        this.top.children.push(YY)
      }
      openNode(YY) {
        const rY = OY({
          scope: YY
        });
        this.add(rY), this.stack.push(rY)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.WE, null, 4)
      }
      walk(YY) {
        return this.constructor._walk(YY, this.WE)
      }
      static _walk(YY, rY) {
        return "string" === typeof rY ? YY.addText(rY) : rY.children && (YY.openNode(rY), rY.children.forEach((rY => this._walk(YY, rY))), YY.closeNode(rY)), YY
      }
      static _collapse(YY) {
        "string" !== typeof YY && YY.children && (YY.children.every((YY => "string" === typeof YY)) ? YY.children = [YY.children.join("")] : YY.children.forEach((YY => {
          gY._collapse(YY)
        })))
      }
    }
    class aY extends gY {
      constructor(YY) {
        super(), this.options = YY
      }
      addText(YY) {
        "" !== YY && this.add(YY)
      }
      startScope(YY) {
        this.openNode(YY)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(YY, rY) {
        const DY = YY.root;
        rY && (DY.scope = `language:${rY}`), this.add(DY)
      }
      toHTML() {
        return new RY(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function vY(YY) {
      return YY ? "string" === typeof YY ? YY : YY.source : null
    }

    function uY(YY) {
      return yY("(?=", YY, ")")
    }

    function sY(YY) {
      return yY("(?:", YY, ")*")
    }

    function iY(YY) {
      return yY("(?:", YY, ")?")
    }

    function yY() {
      for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
      return rY.map((YY => vY(YY))).join("")
    }

    function QY() {
      for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
      const FY = function(YY) {
        const rY = YY[YY.length - 1];
        return "object" === typeof rY && rY.constructor === Object ? (YY.splice(YY.length - 1, 1), rY) : {}
      }(rY);
      return "(" + (FY.capture ? "" : "?:") + rY.map((YY => vY(YY))).join("|") + ")"
    }

    function oY(YY) {
      return new RegExp(YY.toString() + "|").exec("").length - 1
    }
    const WY = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function EY(YY, rY) {
      let {
        joinWith: DY
      } = rY, FY = 0;
      return YY.map((YY => {
        FY += 1;
        const rY = FY;
        let DY = vY(YY),
          AY = "";
        for (; DY.length > 0;) {
          const YY = WY.exec(DY);
          if (!YY) {
            AY += DY;
            break
          }
          AY += DY.substring(0, YY.index), DY = DY.substring(YY.index + YY[0].length), "\\" === YY[0][0] && YY[1] ? AY += "\\" + String(Number(YY[1]) + rY) : (AY += YY[0], "(" === YY[0] && FY++)
        }
        return AY
      })).map((YY => `(${YY})`)).join(DY)
    }
    const mY = "[a-zA-Z]\\w*",
      VY = "[a-zA-Z_]\\w*",
      SY = "\\b\\d+(\\.\\d+)?",
      lY = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      TY = "\\b(0b[01]+)",
      eY = {
        Ei: "\\\\[\\s\\S]",
        relevance: 0
      },
      NY = {
        scope: "string",
        Ei: "'",
        end: "'",
        illegal: "\\n",
        contains: [eY]
      },
      BY = {
        scope: "string",
        Ei: '"',
        end: '"',
        illegal: "\\n",
        contains: [eY]
      },
      cY = function(YY, rY) {
        const DY = AY({
          scope: "comment",
          Ei: YY,
          end: rY,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        DY.contains.push({
          scope: "doctag",
          Ei: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const FY = QY("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return DY.contains.push({
          Ei: yY(/[ ]+/, "(", FY, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), DY
      },
      KY = cY("//", "$"),
      HY = cY("/\\*", "\\*/"),
      zY = cY("#", "$"),
      ZY = {
        scope: "number",
        Ei: SY,
        relevance: 0
      },
      CY = {
        scope: "number",
        Ei: lY,
        relevance: 0
      },
      fY = {
        scope: "number",
        Ei: TY,
        relevance: 0
      },
      jY = {
        scope: "regexp",
        Ei: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [eY, {
          Ei: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [eY]
        }]
      },
      hY = {
        scope: "title",
        Ei: mY,
        relevance: 0
      },
      dY = {
        scope: "title",
        Ei: VY,
        relevance: 0
      },
      JY = {
        Ei: "\\.\\s*" + VY,
        relevance: 0
      };
    var MY = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: NY,
      BACKSLASH_ESCAPE: eY,
      BINARY_NUMBER_MODE: fY,
      BINARY_NUMBER_RE: TY,
      COMMENT: cY,
      C_BLOCK_COMMENT_MODE: HY,
      C_LINE_COMMENT_MODE: KY,
      C_NUMBER_MODE: CY,
      C_NUMBER_RE: lY,
      END_SAME_AS_BEGIN: function(YY) {
        return Object.assign(YY, {
          "on:begin": (YY, rY) => {
            rY.data._beginMatch = YY[1]
          },
          "on:end": (YY, rY) => {
            rY.data._beginMatch !== YY[1] && rY.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: zY,
      IDENT_RE: mY,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: JY,
      NUMBER_MODE: ZY,
      NUMBER_RE: SY,
      PHRASAL_WORDS_MODE: {
        Ei: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: BY,
      REGEXP_MODE: jY,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const rY = /^#![ ]*\//;
        return YY.binary && (YY.Ei = yY(rY, /.*\b/, YY.binary, /\b.*/)), AY({
          scope: "meta",
          Ei: rY,
          end: /$/,
          relevance: 0,
          "on:begin": (YY, rY) => {
            0 !== YY.index && rY.ignoreMatch()
          }
        }, YY)
      },
      TITLE_MODE: hY,
      UNDERSCORE_IDENT_RE: VY,
      UNDERSCORE_TITLE_MODE: dY
    });

    function wY(YY, rY) {
      "." === YY.input[YY.index - 1] && rY.ignoreMatch()
    }

    function bY(YY, rY) {
      void 0 !== YY.className && (YY.scope = YY.className, delete YY.className)
    }

    function XY(YY, rY) {
      rY && YY.beginKeywords && (YY.Ei = "\\b(" + YY.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", YY.__beforeBegin = wY, YY.keywords = YY.keywords || YY.beginKeywords, delete YY.beginKeywords, void 0 === YY.relevance && (YY.relevance = 0))
    }

    function qY(YY, rY) {
      Array.isArray(YY.illegal) && (YY.illegal = QY(...YY.illegal))
    }

    function pY(YY, rY) {
      if (YY.match) {
        if (YY.Ei || YY.end) throw new Error("begin & end are not supported with match");
        YY.Ei = YY.match, delete YY.match
      }
    }

    function kY(YY, rY) {
      void 0 === YY.relevance && (YY.relevance = 1)
    }
    const GY = (YY, rY) => {
        if (!YY.beforeMatch) return;
        if (YY.starts) throw new Error("beforeMatch cannot be used with starts");
        const DY = Object.assign({}, YY);
        Object.keys(YY).forEach((rY => {
          delete YY[rY]
        })), YY.keywords = DY.keywords, YY.Ei = yY(DY.beforeMatch, uY(DY.Ei)), YY.starts = {
          relevance: 0,
          contains: [Object.assign(DY, {
            endsParent: !0
          })]
        }, YY.relevance = 0, delete DY.beforeMatch
      },
      xY = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function nY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const FY = Object.create(null);
      return "string" === typeof YY ? AY(DY, YY.split(" ")) : Array.isArray(YY) ? AY(DY, YY) : Object.keys(YY).forEach((function(DY) {
        Object.assign(FY, nY(YY[DY], rY, DY))
      })), FY;

      function AY(YY, DY) {
        rY && (DY = DY.map((YY => YY.toLowerCase()))), DY.forEach((function(rY) {
          const DY = rY.split("|");
          FY[DY[0]] = [YY, PY(DY[0], DY[1])]
        }))
      }
    }

    function PY(YY, rY) {
      return rY ? Number(rY) : function(YY) {
        return xY.includes(YY.toLowerCase())
      }(YY) ? 0 : 1
    }
    const UY = {},
      LY = YY => {
        console.error(YY)
      },
      tY = function(YY) {
        for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
        console.log(`WARN: ${YY}`, ...DY)
      },
      Yr = (YY, rY) => {
        UY[`${YY}/${rY}`] || (console.log(`Deprecated as of ${YY}. ${rY}`), UY[`${YY}/${rY}`] = !0)
      },
      rr = new Error;

    function Dr(YY, rY, DY) {
      let {
        key: FY
      } = DY, AY = 0;
      const IY = YY[FY],
        RY = {},
        OY = {};
      for (let gY = 1; gY <= rY.length; gY++) OY[gY + AY] = IY[gY], RY[gY + AY] = !0, AY += oY(rY[gY - 1]);
      YY[FY] = OY, YY[FY]._emit = RY, YY[FY]._multi = !0
    }

    function Fr(YY) {
      ! function(YY) {
        YY.scope && "object" === typeof YY.scope && null !== YY.scope && (YY.beginScope = YY.scope, delete YY.scope)
      }(YY), "string" === typeof YY.beginScope && (YY.beginScope = {
          _wrap: YY.beginScope
        }), "string" === typeof YY.endScope && (YY.endScope = {
          _wrap: YY.endScope
        }),
        function(YY) {
          if (Array.isArray(YY.Ei)) {
            if (YY.skip || YY.excludeBegin || YY.returnBegin) throw LY("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), rr;
            if ("object" !== typeof YY.beginScope || null === YY.beginScope) throw LY("beginScope must be object"), rr;
            Dr(YY, YY.Ei, {
              key: "beginScope"
            }), YY.Ei = EY(YY.Ei, {
              joinWith: ""
            })
          }
        }(YY),
        function(YY) {
          if (Array.isArray(YY.end)) {
            if (YY.skip || YY.excludeEnd || YY.returnEnd) throw LY("skip, excludeEnd, returnEnd not compatible with endScope: {}"), rr;
            if ("object" !== typeof YY.endScope || null === YY.endScope) throw LY("endScope must be object"), rr;
            Dr(YY, YY.end, {
              key: "endScope"
            }), YY.end = EY(YY.end, {
              joinWith: ""
            })
          }
        }(YY)
    }

    function Ar(YY) {
      function rY(rY, DY) {
        return new RegExp(vY(rY), "m" + (YY.case_insensitive ? "i" : "") + (YY.unicodeRegex ? "u" : "") + (DY ? "g" : ""))
      }
      class DY {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(YY, rY) {
          rY.position = this.position++, this.matchIndexes[this.matchAt] = rY, this.regexes.push([rY, YY]), this.matchAt += oY(YY) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const YY = this.regexes.map((YY => YY[1]));
          this.matcherRe = rY(EY(YY, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(YY) {
          this.matcherRe.lastIndex = this.lastIndex;
          const rY = this.matcherRe.exec(YY);
          if (!rY) return null;
          const DY = rY.findIndex(((YY, rY) => rY > 0 && void 0 !== YY)),
            FY = this.matchIndexes[DY];
          return rY.splice(0, DY), Object.assign(rY, FY)
        }
      }
      class FY {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(YY) {
          if (this.multiRegexes[YY]) return this.multiRegexes[YY];
          const rY = new DY;
          return this.rules.slice(YY).forEach((YY => {
            let [DY, FY] = YY;
            return rY.addRule(DY, FY)
          })), rY.compile(), this.multiRegexes[YY] = rY, rY
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(YY, rY) {
          this.rules.push([YY, rY]), "Ei" === rY.type && this.count++
        }
        exec(YY) {
          const rY = this.getMatcher(this.regexIndex);
          rY.lastIndex = this.lastIndex;
          let DY = rY.exec(YY);
          if (this.resumingScanAtSamePosition())
            if (DY && DY.index === this.lastIndex);
            else {
              const rY = this.getMatcher(0);
              rY.lastIndex = this.lastIndex + 1, DY = rY.exec(YY)
            } return DY && (this.regexIndex += DY.position + 1, this.regexIndex === this.count && this.considerAll()), DY
        }
      }
      if (YY.compilerExtensions || (YY.compilerExtensions = []), YY.contains && YY.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return YY.classNameAliases = AY(YY.classNameAliases || {}),
        function DY(IY, RY) {
          const OY = IY;
          if (IY.isCompiled) return OY;
          [bY, pY, Fr, GY].forEach((YY => YY(IY, RY))), YY.compilerExtensions.forEach((YY => YY(IY, RY))), IY.__beforeBegin = null, [XY, qY, kY].forEach((YY => YY(IY, RY))), IY.isCompiled = !0;
          let gY = null;
          return "object" === typeof IY.keywords && IY.keywords.$pattern && (IY.keywords = Object.assign({}, IY.keywords), gY = IY.keywords.$pattern, delete IY.keywords.$pattern), gY = gY || /\w+/, IY.keywords && (IY.keywords = nY(IY.keywords, YY.case_insensitive)), OY.keywordPatternRe = rY(gY, !0), RY && (IY.Ei || (IY.Ei = /\B|\b/), OY.beginRe = rY(OY.Ei), IY.end || IY.endsWithParent || (IY.end = /\B|\b/), IY.end && (OY.endRe = rY(OY.end)), OY.terminatorEnd = vY(OY.end) || "", IY.endsWithParent && RY.terminatorEnd && (OY.terminatorEnd += (IY.end ? "|" : "") + RY.terminatorEnd)), IY.illegal && (OY.illegalRe = rY(IY.illegal)), IY.contains || (IY.contains = []), IY.contains = [].concat(...IY.contains.map((function(YY) {
            return function(YY) {
              YY.variants && !YY.cachedVariants && (YY.cachedVariants = YY.variants.map((function(rY) {
                return AY(YY, {
                  variants: null
                }, rY)
              })));
              if (YY.cachedVariants) return YY.cachedVariants;
              if (Ir(YY)) return AY(YY, {
                starts: YY.starts ? AY(YY.starts) : null
              });
              if (Object.isFrozen(YY)) return AY(YY);
              return YY
            }("self" === YY ? IY : YY)
          }))), IY.contains.forEach((function(YY) {
            DY(YY, OY)
          })), IY.starts && DY(IY.starts, RY), OY.matcher = function(YY) {
            const rY = new FY;
            return YY.contains.forEach((YY => rY.addRule(YY.Ei, {
              rule: YY,
              type: "Ei"
            }))), YY.terminatorEnd && rY.addRule(YY.terminatorEnd, {
              type: "end"
            }), YY.illegal && rY.addRule(YY.illegal, {
              type: "illegal"
            }), rY
          }(OY), OY
        }(YY)
    }

    function Ir(YY) {
      return !!YY && (YY.endsWithParent || Ir(YY.starts))
    }
    class Rr extends Error {
      constructor(YY, rY) {
        super(YY), this.name = "HTMLInjectionError", this.html = rY
      }
    }
    const Or = FY,
      gr = AY,
      ar = Symbol("nomatch"),
      vr = function(YY) {
        const FY = Object.create(null),
          AY = Object.create(null),
          IY = [];
        let RY = !0;
        const OY = "Could not find the language '{}', did you forget to load/include a language module?",
          gY = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let vY = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: aY
        };

        function oY(YY) {
          return vY.noHighlightRe.test(YY)
        }

        function WY(YY, rY, DY) {
          let FY = "",
            AY = "";
          "object" === typeof rY ? (FY = YY, DY = rY.ignoreIllegals, AY = rY.language) : (Yr("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Yr("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), AY = YY, FY = rY), void 0 === DY && (DY = !0);
          const IY = {
            code: FY,
            language: AY
          };
          BY("before:highlight", IY);
          const RY = IY.result ? IY.result : EY(IY.language, IY.code, DY);
          return RY.code = IY.code, BY("after:highlight", RY), RY
        }

        function EY(YY, rY, AY, IY) {
          const gY = Object.create(null);

          function aY() {
            if (!BY.keywords) return void KY.addText(HY);
            let YY = 0;
            BY.keywordPatternRe.lastIndex = 0;
            let rY = BY.keywordPatternRe.exec(HY),
              DY = "";
            for (; rY;) {
              DY += HY.substring(YY, rY.index);
              const AY = lY.case_insensitive ? rY[0].toLowerCase() : rY[0],
                IY = (FY = AY, BY.keywords[FY]);
              if (IY) {
                const [YY, FY] = IY;
                if (KY.addText(DY), DY = "", gY[AY] = (gY[AY] || 0) + 1, gY[AY] <= 7 && (zY += FY), YY.startsWith("_")) DY += rY[0];
                else {
                  const DY = lY.classNameAliases[YY] || YY;
                  sY(rY[0], DY)
                }
              } else DY += rY[0];
              YY = BY.keywordPatternRe.lastIndex, rY = BY.keywordPatternRe.exec(HY)
            }
            var FY;
            DY += HY.substring(YY), KY.addText(DY)
          }

          function uY() {
            null != BY.subLanguage ? function() {
              if ("" === HY) return;
              let YY = null;
              if ("string" === typeof BY.subLanguage) {
                if (!FY[BY.subLanguage]) return void KY.addText(HY);
                YY = EY(BY.subLanguage, HY, !0, cY[BY.subLanguage]), cY[BY.subLanguage] = YY._top
              } else YY = mY(HY, BY.subLanguage.length ? BY.subLanguage : null);
              BY.relevance > 0 && (zY += YY.relevance), KY.__addSublanguage(YY._emitter, YY.language)
            }() : aY(), HY = ""
          }

          function sY(YY, rY) {
            "" !== YY && (KY.startScope(rY), KY.addText(YY), KY.endScope())
          }

          function iY(YY, rY) {
            let DY = 1;
            const FY = rY.length - 1;
            for (; DY <= FY;) {
              if (!YY._emit[DY]) {
                DY++;
                continue
              }
              const FY = lY.classNameAliases[YY[DY]] || YY[DY],
                AY = rY[DY];
              FY ? sY(AY, FY) : (HY = AY, aY(), HY = ""), DY++
            }
          }

          function yY(YY, rY) {
            return YY.scope && "string" === typeof YY.scope && KY.openNode(lY.classNameAliases[YY.scope] || YY.scope), YY.beginScope && (YY.beginScope._wrap ? (sY(HY, lY.classNameAliases[YY.beginScope._wrap] || YY.beginScope._wrap), HY = "") : YY.beginScope._multi && (iY(YY.beginScope, rY), HY = "")), BY = Object.create(YY, {
              parent: {
                value: BY
              }
            }), BY
          }

          function QY(YY, rY, FY) {
            let AY = function(YY, rY) {
              const DY = YY && YY.exec(rY);
              return DY && 0 === DY.index
            }(YY.endRe, FY);
            if (AY) {
              if (YY["on:end"]) {
                const FY = new DY(YY);
                YY["on:end"](rY, FY), FY.isMatchIgnored && (AY = !1)
              }
              if (AY) {
                for (; YY.endsParent && YY.parent;) YY = YY.parent;
                return YY
              }
            }
            if (YY.endsWithParent) return QY(YY.parent, rY, FY)
          }

          function oY(YY) {
            return 0 === BY.matcher.regexIndex ? (HY += YY[0], 1) : (fY = !0, 0)
          }

          function WY(YY) {
            const DY = YY[0],
              FY = rY.substring(YY.index),
              AY = QY(BY, YY, FY);
            if (!AY) return ar;
            const IY = BY;
            BY.endScope && BY.endScope._wrap ? (uY(), sY(DY, BY.endScope._wrap)) : BY.endScope && BY.endScope._multi ? (uY(), iY(BY.endScope, YY)) : IY.skip ? HY += DY : (IY.returnEnd || IY.excludeEnd || (HY += DY), uY(), IY.excludeEnd && (HY = DY));
            do {
              BY.scope && KY.closeNode(), BY.skip || BY.subLanguage || (zY += BY.relevance), BY = BY.parent
            } while (BY !== AY.parent);
            return AY.starts && yY(AY.starts, YY), IY.returnEnd ? 0 : DY.length
          }
          let VY = {};

          function SY(FY, IY) {
            const OY = IY && IY[0];
            if (HY += FY, null == OY) return uY(), 0;
            if ("Ei" === VY.type && "end" === IY.type && VY.index === IY.index && "" === OY) {
              if (HY += rY.slice(IY.index, IY.index + 1), !RY) {
                const rY = new Error(`0 width match regex (${YY})`);
                throw rY.languageName = YY, rY.badRule = VY.rule, rY
              }
              return 1
            }
            if (VY = IY, "Ei" === IY.type) return function(YY) {
              const rY = YY[0],
                FY = YY.rule,
                AY = new DY(FY),
                IY = [FY.__beforeBegin, FY["on:begin"]];
              for (const DY of IY)
                if (DY && (DY(YY, AY), AY.isMatchIgnored)) return oY(rY);
              return FY.skip ? HY += rY : (FY.excludeBegin && (HY += rY), uY(), FY.returnBegin || FY.excludeBegin || (HY = rY)), yY(FY, YY), FY.returnBegin ? 0 : rY.length
            }(IY);
            if ("illegal" === IY.type && !AY) {
              const YY = new Error('Illegal lexeme "' + OY + '" for mode "' + (BY.scope || "<unnamed>") + '"');
              throw YY.mode = BY, YY
            }
            if ("end" === IY.type) {
              const YY = WY(IY);
              if (YY !== ar) return YY
            }
            if ("illegal" === IY.type && "" === OY) return HY += "\n", 1;
            if (CY > 1e5 && CY > 3 * IY.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return HY += OY, OY.length
          }
          const lY = TY(YY);
          if (!lY) throw LY(OY.replace("{}", YY)), new Error('Unknown language: "' + YY + '"');
          const eY = Ar(lY);
          let NY = "",
            BY = IY || eY;
          const cY = {},
            KY = new vY.__emitter(vY);
          ! function() {
            const YY = [];
            for (let rY = BY; rY !== lY; rY = rY.parent) rY.scope && YY.unshift(rY.scope);
            YY.forEach((YY => KY.openNode(YY)))
          }();
          let HY = "",
            zY = 0,
            ZY = 0,
            CY = 0,
            fY = !1;
          try {
            if (lY.__emitTokens) lY.__emitTokens(rY, KY);
            else {
              for (BY.matcher.considerAll();;) {
                CY++, fY ? fY = !1 : BY.matcher.considerAll(), BY.matcher.lastIndex = ZY;
                const YY = BY.matcher.exec(rY);
                if (!YY) break;
                const DY = SY(rY.substring(ZY, YY.index), YY);
                ZY = YY.index + DY
              }
              SY(rY.substring(ZY))
            }
            return KY.finalize(), NY = KY.toHTML(), {
              language: YY,
              value: NY,
              relevance: zY,
              illegal: !1,
              _emitter: KY,
              _top: BY
            }
          } catch (jY) {
            if (jY.message && jY.message.includes("Illegal")) return {
              language: YY,
              value: Or(rY),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: jY.message,
                index: ZY,
                context: rY.slice(ZY - 100, ZY + 100),
                mode: jY.mode,
                resultSoFar: NY
              },
              _emitter: KY
            };
            if (RY) return {
              language: YY,
              value: Or(rY),
              illegal: !1,
              relevance: 0,
              errorRaised: jY,
              _emitter: KY,
              _top: BY
            };
            throw jY
          }
        }

        function mY(YY, rY) {
          rY = rY || vY.languages || Object.keys(FY);
          const DY = function(YY) {
              const rY = {
                value: Or(YY),
                illegal: !1,
                relevance: 0,
                _top: gY,
                _emitter: new vY.__emitter(vY)
              };
              return rY._emitter.addText(YY), rY
            }(YY),
            AY = rY.filter(TY).filter(NY).map((rY => EY(rY, YY, !1)));
          AY.unshift(DY);
          const IY = AY.sort(((YY, rY) => {
              if (YY.relevance !== rY.relevance) return rY.relevance - YY.relevance;
              if (YY.language && rY.language) {
                if (TY(YY.language).supersetOf === rY.language) return 1;
                if (TY(rY.language).supersetOf === YY.language) return -1
              }
              return 0
            })),
            [RY, OY] = IY,
            aY = RY;
          return aY.secondBest = OY, aY
        }

        function VY(YY) {
          let rY = null;
          const DY = function(YY) {
            let rY = YY.className + " ";
            rY += YY.parentNode ? YY.parentNode.className : "";
            const DY = vY.languageDetectRe.exec(rY);
            if (DY) {
              const rY = TY(DY[1]);
              return rY || (tY(OY.replace("{}", DY[1])), tY("Falling back to no-highlight mode for this block.", YY)), rY ? DY[1] : "no-highlight"
            }
            return rY.split(/\s+/).find((YY => oY(YY) || TY(YY)))
          }(YY);
          if (oY(DY)) return;
          if (BY("before:highlightElement", {
              el: YY,
              language: DY
            }), YY.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", YY);
          if (YY.children.length > 0 && (vY.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(YY)), vY.throwUnescapedHTML)) {
            throw new Rr("One of your code blocks includes unescaped HTML.", YY.innerHTML)
          }
          rY = YY;
          const FY = rY.textContent,
            IY = DY ? WY(FY, {
              language: DY,
              ignoreIllegals: !0
            }) : mY(FY);
          YY.innerHTML = IY.value, YY.dataset.highlighted = "yes",
            function(YY, rY, DY) {
              const FY = rY && AY[rY] || DY;
              YY.classList.add("hljs"), YY.classList.add(`language-${FY}`)
            }(YY, DY, IY.language), YY.result = {
              language: IY.language,
              re: IY.relevance,
              relevance: IY.relevance
            }, IY.secondBest && (YY.secondBest = {
              language: IY.secondBest.language,
              relevance: IY.secondBest.relevance
            }), BY("after:highlightElement", {
              el: YY,
              result: IY,
              text: FY
            })
        }
        let SY = !1;

        function lY() {
          if ("loading" === document.readyState) return SY || window.addEventListener("DOMContentLoaded", (function() {
            lY()
          }), !1), void(SY = !0);
          document.querySelectorAll(vY.cssSelector).forEach(VY)
        }

        function TY(YY) {
          return YY = (YY || "").toLowerCase(), FY[YY] || FY[AY[YY]]
        }

        function eY(YY, rY) {
          let {
            languageName: DY
          } = rY;
          "string" === typeof YY && (YY = [YY]), YY.forEach((YY => {
            AY[YY.toLowerCase()] = DY
          }))
        }

        function NY(YY) {
          const rY = TY(YY);
          return rY && !rY.disableAutodetect
        }

        function BY(YY, rY) {
          const DY = YY;
          IY.forEach((function(YY) {
            YY[DY] && YY[DY](rY)
          }))
        }
        Object.assign(YY, {
          highlight: WY,
          highlightAuto: mY,
          highlightAll: lY,
          highlightElement: VY,
          highlightBlock: function(YY) {
            return Yr("10.7.0", "highlightBlock will be removed entirely in v12.0"), Yr("10.7.0", "Please use highlightElement now."), VY(YY)
          },
          configure: function(YY) {
            vY = gr(vY, YY)
          },
          initHighlighting: () => {
            lY(), Yr("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            lY(), Yr("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(rY, DY) {
            let AY = null;
            try {
              AY = DY(YY)
            } catch (IY) {
              if (LY("Language definition for '{}' could not be registered.".replace("{}", rY)), !RY) throw IY;
              LY(IY), AY = gY
            }
            AY.name || (AY.name = rY), FY[rY] = AY, AY.rawDefinition = DY.bind(null, YY), AY.aliases && eY(AY.aliases, {
              languageName: rY
            })
          },
          unregisterLanguage: function(YY) {
            delete FY[YY];
            for (const rY of Object.keys(AY)) AY[rY] === YY && delete AY[rY]
          },
          listLanguages: function() {
            return Object.keys(FY)
          },
          getLanguage: TY,
          registerAliases: eY,
          autoDetection: NY,
          inherit: gr,
          addPlugin: function(YY) {
            ! function(YY) {
              YY["before:highlightBlock"] && !YY["before:highlightElement"] && (YY["before:highlightElement"] = rY => {
                YY["before:highlightBlock"](Object.assign({
                  block: rY.el
                }, rY))
              }), YY["after:highlightBlock"] && !YY["after:highlightElement"] && (YY["after:highlightElement"] = rY => {
                YY["after:highlightBlock"](Object.assign({
                  block: rY.el
                }, rY))
              })
            }(YY), IY.push(YY)
          },
          removePlugin: function(YY) {
            const rY = IY.indexOf(YY); - 1 !== rY && IY.splice(rY, 1)
          }
        }), YY.debugMode = function() {
          RY = !1
        }, YY.safeMode = function() {
          RY = !0
        }, YY.versionString = "11.11.1", YY.regex = {
          concat: yY,
          lookahead: uY,
          either: QY,
          optional: iY,
          anyNumberOfTimes: sY
        };
        for (const DY in MY) "object" === typeof MY[DY] && rY(MY[DY]);
        return Object.assign(YY, MY), YY
      },
      ur = vr({});
    ur.newInstance = () => vr({}), YY.exports = ur, ur.HighlightJS = ur, ur.default = ur
  },
  4290: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    const FY = DY(4296)
  },
  4299: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY
    });
    const FY = "[A-Za-z$_][0-9A-Za-z$_]*",
      AY = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      IY = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      RY = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      OY = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      gY = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      aY = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      vY = [].concat(gY, RY, OY);

    function uY(YY) {
      const rY = YY.regex,
        DY = FY,
        uY = "<>",
        sY = "</>",
        iY = {
          Ei: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (YY, rY) => {
            const DY = YY[0].length + YY.index,
              FY = YY.input[DY];
            if ("<" === FY || "," === FY) return void rY.ignoreMatch();
            let AY;
            ">" === FY && (((YY, rY) => {
              let {
                after: DY
              } = rY;
              const FY = "</" + YY[0].slice(1);
              return -1 !== YY.input.indexOf(FY, DY)
            })(YY, {
              after: DY
            }) || rY.ignoreMatch());
            const IY = YY.input.substring(DY);
            ((AY = IY.match(/^\s*=/)) || (AY = IY.match(/^\s+extends\s+/)) && 0 === AY.index) && rY.ignoreMatch()
          }
        },
        yY = {
          $pattern: FY,
          keyword: AY,
          literal: IY,
          built_in: vY,
          "variable.language": aY
        },
        QY = "[0-9](_?[0-9])*",
        oY = `\\.(${QY})`,
        WY = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        EY = {
          className: "number",
          variants: [{
            Ei: `(\\b(${WY})((${oY})|\\.)?|(${oY}))[eE][+-]?(${QY})\\b`
          }, {
            Ei: `\\b(${WY})\\b((${oY})\\b|\\.)?|(${oY})\\b`
          }, {
            Ei: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Ei: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Ei: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Ei: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Ei: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        mY = {
          className: "subst",
          Ei: "\\$\\{",
          end: "\\}",
          keywords: yY,
          contains: []
        },
        VY = {
          Ei: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [YY.BACKSLASH_ESCAPE, mY],
            subLanguage: "xml"
          }
        },
        SY = {
          Ei: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [YY.BACKSLASH_ESCAPE, mY],
            subLanguage: "css"
          }
        },
        lY = {
          Ei: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [YY.BACKSLASH_ESCAPE, mY],
            subLanguage: "graphql"
          }
        },
        TY = {
          className: "string",
          Ei: "`",
          end: "`",
          contains: [YY.BACKSLASH_ESCAPE, mY]
        },
        eY = {
          className: "comment",
          variants: [YY.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Ei: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Ei: "@[A-Za-z]+"
              }, {
                className: "type",
                Ei: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Ei: DY + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Ei: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), YY.C_BLOCK_COMMENT_MODE, YY.C_LINE_COMMENT_MODE]
        },
        NY = [YY.APOS_STRING_MODE, YY.QUOTE_STRING_MODE, VY, SY, lY, TY, {
          match: /\$\d+/
        }, EY];
      mY.contains = NY.concat({
        Ei: /\{/,
        end: /\}/,
        keywords: yY,
        contains: ["self"].concat(NY)
      });
      const BY = [].concat(eY, mY.contains),
        cY = BY.concat([{
          Ei: /(\s*)\(/,
          end: /\)/,
          keywords: yY,
          contains: ["self"].concat(BY)
        }]),
        KY = {
          className: "params",
          Ei: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: yY,
          contains: cY
        },
        HY = {
          variants: [{
            match: [/class/, /\s+/, DY, /\s+/, /extends/, /\s+/, rY.concat(DY, "(", rY.concat(/\./, DY), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, DY],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        zY = {
          relevance: 0,
          match: rY.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...RY, ...OY]
          }
        },
        ZY = {
          variants: [{
            match: [/function/, /\s+/, DY, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [KY],
          illegal: /%/
        };
      const CY = {
        match: rY.concat(/\b/, (fY = [...gY, "super", "import"].map((YY => `${YY}\\s*\\(`)), rY.concat("(?!", fY.join("|"), ")")), DY, rY.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var fY;
      const jY = {
          Ei: rY.concat(/\./, rY.lookahead(rY.concat(DY, /(?![0-9A-Za-z$_(])/))),
          end: DY,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        hY = {
          match: [/get|set/, /\s+/, DY, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Ei: /\(\)/
          }, KY]
        },
        dY = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + YY.UNDERSCORE_IDENT_RE + ")\\s*=>",
        JY = {
          match: [/const|var|let/, /\s+/, DY, /\s*/, /=\s*/, /(async\s*)?/, rY.lookahead(dY)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [KY]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: yY,
        exports: {
          PARAMS_CONTAINS: cY,
          CLASS_REFERENCE: zY
        },
        illegal: /#(?![$_A-z])/,
        contains: [YY.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Ei: /^\s*['"]use (strict|asm)['"]/
        }, YY.APOS_STRING_MODE, YY.QUOTE_STRING_MODE, VY, SY, lY, TY, eY, {
          match: /\$\d+/
        }, EY, zY, {
          scope: "attr",
          match: DY + rY.lookahead(":"),
          relevance: 0
        }, JY, {
          Ei: "(" + YY.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [eY, YY.REGEXP_MODE, {
            className: "function",
            Ei: dY,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Ei: YY.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Ei: /\(\s*\)/,
                skip: !0
              }, {
                Ei: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: yY,
                contains: cY
              }]
            }]
          }, {
            Ei: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Ei: uY,
              end: sY
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Ei: iY.Ei,
              "on:begin": iY.isTrulyOpeningTag,
              end: iY.end
            }],
            subLanguage: "xml",
            contains: [{
              Ei: iY.Ei,
              end: iY.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, ZY, {
          beginKeywords: "while if switch catch for"
        }, {
          Ei: "\\b(?!function)" + YY.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [KY, YY.inherit(YY.TITLE_MODE, {
            Ei: DY,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, jY, {
          match: "\\$" + DY,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [KY]
        }, CY, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, HY, hY, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4308: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY
    });
    const FY = "[A-Za-z$_][0-9A-Za-z$_]*",
      AY = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      IY = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      RY = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      OY = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      gY = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      aY = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      vY = [].concat(gY, RY, OY);

    function uY(YY) {
      const rY = YY.regex,
        DY = FY,
        uY = "<>",
        sY = "</>",
        iY = {
          Ei: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (YY, rY) => {
            const DY = YY[0].length + YY.index,
              FY = YY.input[DY];
            if ("<" === FY || "," === FY) return void rY.ignoreMatch();
            let AY;
            ">" === FY && (((YY, rY) => {
              let {
                after: DY
              } = rY;
              const FY = "</" + YY[0].slice(1);
              return -1 !== YY.input.indexOf(FY, DY)
            })(YY, {
              after: DY
            }) || rY.ignoreMatch());
            const IY = YY.input.substring(DY);
            ((AY = IY.match(/^\s*=/)) || (AY = IY.match(/^\s+extends\s+/)) && 0 === AY.index) && rY.ignoreMatch()
          }
        },
        yY = {
          $pattern: FY,
          keyword: AY,
          literal: IY,
          built_in: vY,
          "variable.language": aY
        },
        QY = "[0-9](_?[0-9])*",
        oY = `\\.(${QY})`,
        WY = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        EY = {
          className: "number",
          variants: [{
            Ei: `(\\b(${WY})((${oY})|\\.)?|(${oY}))[eE][+-]?(${QY})\\b`
          }, {
            Ei: `\\b(${WY})\\b((${oY})\\b|\\.)?|(${oY})\\b`
          }, {
            Ei: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Ei: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Ei: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Ei: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Ei: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        mY = {
          className: "subst",
          Ei: "\\$\\{",
          end: "\\}",
          keywords: yY,
          contains: []
        },
        VY = {
          Ei: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [YY.BACKSLASH_ESCAPE, mY],
            subLanguage: "xml"
          }
        },
        SY = {
          Ei: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [YY.BACKSLASH_ESCAPE, mY],
            subLanguage: "css"
          }
        },
        lY = {
          Ei: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [YY.BACKSLASH_ESCAPE, mY],
            subLanguage: "graphql"
          }
        },
        TY = {
          className: "string",
          Ei: "`",
          end: "`",
          contains: [YY.BACKSLASH_ESCAPE, mY]
        },
        eY = {
          className: "comment",
          variants: [YY.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Ei: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Ei: "@[A-Za-z]+"
              }, {
                className: "type",
                Ei: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Ei: DY + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Ei: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), YY.C_BLOCK_COMMENT_MODE, YY.C_LINE_COMMENT_MODE]
        },
        NY = [YY.APOS_STRING_MODE, YY.QUOTE_STRING_MODE, VY, SY, lY, TY, {
          match: /\$\d+/
        }, EY];
      mY.contains = NY.concat({
        Ei: /\{/,
        end: /\}/,
        keywords: yY,
        contains: ["self"].concat(NY)
      });
      const BY = [].concat(eY, mY.contains),
        cY = BY.concat([{
          Ei: /(\s*)\(/,
          end: /\)/,
          keywords: yY,
          contains: ["self"].concat(BY)
        }]),
        KY = {
          className: "params",
          Ei: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: yY,
          contains: cY
        },
        HY = {
          variants: [{
            match: [/class/, /\s+/, DY, /\s+/, /extends/, /\s+/, rY.concat(DY, "(", rY.concat(/\./, DY), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, DY],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        zY = {
          relevance: 0,
          match: rY.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...RY, ...OY]
          }
        },
        ZY = {
          variants: [{
            match: [/function/, /\s+/, DY, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [KY],
          illegal: /%/
        };
      const CY = {
        match: rY.concat(/\b/, (fY = [...gY, "super", "import"].map((YY => `${YY}\\s*\\(`)), rY.concat("(?!", fY.join("|"), ")")), DY, rY.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var fY;
      const jY = {
          Ei: rY.concat(/\./, rY.lookahead(rY.concat(DY, /(?![0-9A-Za-z$_(])/))),
          end: DY,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        hY = {
          match: [/get|set/, /\s+/, DY, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Ei: /\(\)/
          }, KY]
        },
        dY = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + YY.UNDERSCORE_IDENT_RE + ")\\s*=>",
        JY = {
          match: [/const|var|let/, /\s+/, DY, /\s*/, /=\s*/, /(async\s*)?/, rY.lookahead(dY)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [KY]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: yY,
        exports: {
          PARAMS_CONTAINS: cY,
          CLASS_REFERENCE: zY
        },
        illegal: /#(?![$_A-z])/,
        contains: [YY.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Ei: /^\s*['"]use (strict|asm)['"]/
        }, YY.APOS_STRING_MODE, YY.QUOTE_STRING_MODE, VY, SY, lY, TY, eY, {
          match: /\$\d+/
        }, EY, zY, {
          scope: "attr",
          match: DY + rY.lookahead(":"),
          relevance: 0
        }, JY, {
          Ei: "(" + YY.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [eY, YY.REGEXP_MODE, {
            className: "function",
            Ei: dY,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Ei: YY.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Ei: /\(\s*\)/,
                skip: !0
              }, {
                Ei: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: yY,
                contains: cY
              }]
            }]
          }, {
            Ei: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Ei: uY,
              end: sY
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Ei: iY.Ei,
              "on:begin": iY.isTrulyOpeningTag,
              end: iY.end
            }],
            subLanguage: "xml",
            contains: [{
              Ei: iY.Ei,
              end: iY.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, ZY, {
          beginKeywords: "while if switch catch for"
        }, {
          Ei: "\\b(?!function)" + YY.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [KY, YY.inherit(YY.TITLE_MODE, {
            Ei: DY,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, jY, {
          match: "\\$" + DY,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [KY]
        }, CY, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, HY, hY, {
          match: /\$[(.]/
        }]
      }
    }

    function sY(YY) {
      const rY = YY.regex,
        DY = uY(YY),
        RY = FY,
        OY = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        gY = {
          Ei: [/namespace/, /\s+/, YY.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        sY = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: OY
          },
          contains: [DY.exports.CLASS_REFERENCE]
        },
        iY = {
          $pattern: FY,
          keyword: AY.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: IY,
          built_in: vY.concat(OY),
          "variable.language": aY
        },
        yY = {
          className: "meta",
          Ei: "@" + RY
        },
        QY = (YY, rY, DY) => {
          const FY = YY.contains.findIndex((YY => YY.label === rY));
          if (-1 === FY) throw new Error("can not find mode to replace");
          YY.contains.splice(FY, 1, DY)
        };
      Object.assign(DY.keywords, iY), DY.exports.PARAMS_CONTAINS.push(yY);
      const oY = DY.contains.find((YY => "attr" === YY.scope)),
        WY = Object.assign({}, oY, {
          match: rY.concat(RY, rY.lookahead(/\s*\?:/))
        });
      DY.exports.PARAMS_CONTAINS.push([DY.exports.CLASS_REFERENCE, oY, WY]), DY.contains = DY.contains.concat([yY, gY, sY, WY]), QY(DY, "shebang", YY.SHEBANG()), QY(DY, "use_strict", {
        className: "meta",
        relevance: 10,
        Ei: /^\s*['"]use strict['"]/
      });
      return DY.contains.find((YY => "func.def" === YY.label)).relevance = 0, Object.assign(DY, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), DY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);