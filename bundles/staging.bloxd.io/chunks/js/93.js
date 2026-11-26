export const id = 93;
export const ids = [93];
export const modules = {
  5230: VV => {
    function eV(VV) {
      return VV instanceof Map ? VV.clear = VV.delete = VV.set = function() {
        throw new Error("map is read-only")
      } : VV instanceof Set && (VV.add = VV.clear = VV.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(VV), Object.getOwnPropertyNames(VV).forEach((xV => {
        const JV = VV[xV],
          YV = typeof JV;
        "object" !== YV && "function" !== YV || Object.isFrozen(JV) || eV(JV)
      })), VV
    }
    class xV {
      constructor(VV) {
        void 0 === VV.data && (VV.data = {}), this.data = VV.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function JV(VV) {
      return VV.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function YV(VV) {
      const eV = Object.create(null);
      for (const UV in VV) eV[UV] = VV[UV];
      for (var xV = arguments.length, JV = new Array(xV > 1 ? xV - 1 : 0), YV = 1; YV < xV; YV++) JV[YV - 1] = arguments[YV];
      return JV.forEach((function(VV) {
        for (const xV in VV) eV[xV] = VV[xV]
      })), eV
    }
    const UV = VV => !!VV.scope;
    class yV {
      constructor(VV, eV) {
        this.buffer = "", this.classPrefix = eV.classPrefix, VV.walk(this)
      }
      addText(VV) {
        this.buffer += JV(VV)
      }
      openNode(VV) {
        if (!UV(VV)) return;
        const eV = ((VV, eV) => {
          let {
            prefix: xV
          } = eV;
          if (VV.startsWith("language:")) return VV.replace("language:", "language-");
          if (VV.includes(".")) {
            const eV = VV.split(".");
            return [`${xV}${eV.shift()}`, ...eV.map(((VV, eV) => `${VV}${"_".repeat(eV+1)}`))].join(" ")
          }
          return `${xV}${VV}`
        })(VV.scope, {
          prefix: this.classPrefix
        });
        this.span(eV)
      }
      closeNode(VV) {
        UV(VV) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(VV) {
        this.buffer += `<span class="${VV}">`
      }
    }
    const pV = function() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const eV = {
        children: []
      };
      return Object.assign(eV, VV), eV
    };
    class QV {
      constructor() {
        this.JF = pV(), this.stack = [this.JF]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.JF
      }
      add(VV) {
        this.top.children.push(VV)
      }
      openNode(VV) {
        const eV = pV({
          scope: VV
        });
        this.add(eV), this.stack.push(eV)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.JF, null, 4)
      }
      walk(VV) {
        return this.constructor._walk(VV, this.JF)
      }
      static _walk(VV, eV) {
        return "string" === typeof eV ? VV.addText(eV) : eV.children && (VV.openNode(eV), eV.children.forEach((eV => this._walk(VV, eV))), VV.closeNode(eV)), VV
      }
      static _collapse(VV) {
        "string" !== typeof VV && VV.children && (VV.children.every((VV => "string" === typeof VV)) ? VV.children = [VV.children.join("")] : VV.children.forEach((VV => {
          QV._collapse(VV)
        })))
      }
    }
    class nV extends QV {
      constructor(VV) {
        super(), this.options = VV
      }
      addText(VV) {
        "" !== VV && this.add(VV)
      }
      startScope(VV) {
        this.openNode(VV)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(VV, eV) {
        const xV = VV.root;
        eV && (xV.scope = `language:${eV}`), this.add(xV)
      }
      toHTML() {
        return new yV(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function wV(VV) {
      return VV ? "string" === typeof VV ? VV : VV.source : null
    }

    function ZV(VV) {
      return kV("(?=", VV, ")")
    }

    function vV(VV) {
      return kV("(?:", VV, ")*")
    }

    function rV(VV) {
      return kV("(?:", VV, ")?")
    }

    function kV() {
      for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
      return eV.map((VV => wV(VV))).join("")
    }

    function bV() {
      for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
      const JV = function(VV) {
        const eV = VV[VV.length - 1];
        return "object" === typeof eV && eV.constructor === Object ? (VV.splice(VV.length - 1, 1), eV) : {}
      }(eV);
      return "(" + (JV.capture ? "" : "?:") + eV.map((VV => wV(VV))).join("|") + ")"
    }

    function EV(VV) {
      return new RegExp(VV.toString() + "|").exec("").length - 1
    }
    const BV = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function jV(VV, eV) {
      let {
        joinWith: xV
      } = eV, JV = 0;
      return VV.map((VV => {
        JV += 1;
        const eV = JV;
        let xV = wV(VV),
          YV = "";
        for (; xV.length > 0;) {
          const VV = BV.exec(xV);
          if (!VV) {
            YV += xV;
            break
          }
          YV += xV.substring(0, VV.index), xV = xV.substring(VV.index + VV[0].length), "\\" === VV[0][0] && VV[1] ? YV += "\\" + String(Number(VV[1]) + eV) : (YV += VV[0], "(" === VV[0] && JV++)
        }
        return YV
      })).map((VV => `(${VV})`)).join(xV)
    }
    const qV = "[a-zA-Z]\\w*",
      tV = "[a-zA-Z_]\\w*",
      FV = "\\b\\d+(\\.\\d+)?",
      TV = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      PV = "\\b(0b[01]+)",
      AV = {
        NZ: "\\\\[\\s\\S]",
        relevance: 0
      },
      NV = {
        scope: "string",
        NZ: "'",
        end: "'",
        illegal: "\\n",
        contains: [AV]
      },
      XV = {
        scope: "string",
        NZ: '"',
        end: '"',
        illegal: "\\n",
        contains: [AV]
      },
      MV = function(VV, eV) {
        const xV = YV({
          scope: "comment",
          NZ: VV,
          end: eV,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        xV.contains.push({
          scope: "doctag",
          NZ: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const JV = bV("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return xV.contains.push({
          NZ: kV(/[ ]+/, "(", JV, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), xV
      },
      zV = MV("//", "$"),
      GV = MV("/\\*", "\\*/"),
      WV = MV("#", "$"),
      RV = {
        scope: "number",
        NZ: FV,
        relevance: 0
      },
      gV = {
        scope: "number",
        NZ: TV,
        relevance: 0
      },
      DV = {
        scope: "number",
        NZ: PV,
        relevance: 0
      },
      iV = {
        scope: "regexp",
        NZ: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [AV, {
          NZ: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [AV]
        }]
      },
      CV = {
        scope: "title",
        NZ: qV,
        relevance: 0
      },
      aV = {
        scope: "title",
        NZ: tV,
        relevance: 0
      },
      oV = {
        NZ: "\\.\\s*" + tV,
        relevance: 0
      };
    var cV = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: NV,
      BACKSLASH_ESCAPE: AV,
      BINARY_NUMBER_MODE: DV,
      BINARY_NUMBER_RE: PV,
      COMMENT: MV,
      C_BLOCK_COMMENT_MODE: GV,
      C_LINE_COMMENT_MODE: zV,
      C_NUMBER_MODE: gV,
      C_NUMBER_RE: TV,
      END_SAME_AS_BEGIN: function(VV) {
        return Object.assign(VV, {
          "on:begin": (VV, eV) => {
            eV.data._beginMatch = VV[1]
          },
          "on:end": (VV, eV) => {
            eV.data._beginMatch !== VV[1] && eV.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: WV,
      IDENT_RE: qV,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: oV,
      NUMBER_MODE: RV,
      NUMBER_RE: FV,
      PHRASAL_WORDS_MODE: {
        NZ: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: XV,
      REGEXP_MODE: iV,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const eV = /^#![ ]*\//;
        return VV.binary && (VV.NZ = kV(eV, /.*\b/, VV.binary, /\b.*/)), YV({
          scope: "meta",
          NZ: eV,
          end: /$/,
          relevance: 0,
          "on:begin": (VV, eV) => {
            0 !== VV.index && eV.ignoreMatch()
          }
        }, VV)
      },
      TITLE_MODE: CV,
      UNDERSCORE_IDENT_RE: tV,
      UNDERSCORE_TITLE_MODE: aV
    });

    function hV(VV, eV) {
      "." === VV.input[VV.index - 1] && eV.ignoreMatch()
    }

    function lV(VV, eV) {
      void 0 !== VV.className && (VV.scope = VV.className, delete VV.className)
    }

    function LV(VV, eV) {
      eV && VV.beginKeywords && (VV.NZ = "\\b(" + VV.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", VV.__beforeBegin = hV, VV.keywords = VV.keywords || VV.beginKeywords, delete VV.beginKeywords, void 0 === VV.relevance && (VV.relevance = 0))
    }

    function fV(VV, eV) {
      Array.isArray(VV.illegal) && (VV.illegal = bV(...VV.illegal))
    }

    function mV(VV, eV) {
      if (VV.match) {
        if (VV.NZ || VV.end) throw new Error("begin & end are not supported with match");
        VV.NZ = VV.match, delete VV.match
      }
    }

    function KV(VV, eV) {
      void 0 === VV.relevance && (VV.relevance = 1)
    }
    const HV = (VV, eV) => {
        if (!VV.beforeMatch) return;
        if (VV.starts) throw new Error("beforeMatch cannot be used with starts");
        const xV = Object.assign({}, VV);
        Object.keys(VV).forEach((eV => {
          delete VV[eV]
        })), VV.keywords = xV.keywords, VV.NZ = kV(xV.beforeMatch, ZV(xV.NZ)), VV.starts = {
          relevance: 0,
          contains: [Object.assign(xV, {
            endsParent: !0
          })]
        }, VV.relevance = 0, delete xV.beforeMatch
      },
      uV = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function sV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const JV = Object.create(null);
      return "string" === typeof VV ? YV(xV, VV.split(" ")) : Array.isArray(VV) ? YV(xV, VV) : Object.keys(VV).forEach((function(xV) {
        Object.assign(JV, sV(VV[xV], eV, xV))
      })), JV;

      function YV(VV, xV) {
        eV && (xV = xV.map((VV => VV.toLowerCase()))), xV.forEach((function(eV) {
          const xV = eV.split("|");
          JV[xV[0]] = [VV, SV(xV[0], xV[1])]
        }))
      }
    }

    function SV(VV, eV) {
      return eV ? Number(eV) : function(VV) {
        return uV.includes(VV.toLowerCase())
      }(VV) ? 0 : 1
    }
    const IV = {},
      dV = VV => {
        console.error(VV)
      },
      OV = function(VV) {
        for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
        console.log(`WARN: ${VV}`, ...xV)
      },
      Ve = (VV, eV) => {
        IV[`${VV}/${eV}`] || (console.log(`Deprecated as of ${VV}. ${eV}`), IV[`${VV}/${eV}`] = !0)
      },
      ee = new Error;

    function xe(VV, eV, xV) {
      let {
        key: JV
      } = xV, YV = 0;
      const UV = VV[JV],
        yV = {},
        pV = {};
      for (let QV = 1; QV <= eV.length; QV++) pV[QV + YV] = UV[QV], yV[QV + YV] = !0, YV += EV(eV[QV - 1]);
      VV[JV] = pV, VV[JV]._emit = yV, VV[JV]._multi = !0
    }

    function Je(VV) {
      ! function(VV) {
        VV.scope && "object" === typeof VV.scope && null !== VV.scope && (VV.beginScope = VV.scope, delete VV.scope)
      }(VV), "string" === typeof VV.beginScope && (VV.beginScope = {
          _wrap: VV.beginScope
        }), "string" === typeof VV.endScope && (VV.endScope = {
          _wrap: VV.endScope
        }),
        function(VV) {
          if (Array.isArray(VV.NZ)) {
            if (VV.skip || VV.excludeBegin || VV.returnBegin) throw dV("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ee;
            if ("object" !== typeof VV.beginScope || null === VV.beginScope) throw dV("beginScope must be object"), ee;
            xe(VV, VV.NZ, {
              key: "beginScope"
            }), VV.NZ = jV(VV.NZ, {
              joinWith: ""
            })
          }
        }(VV),
        function(VV) {
          if (Array.isArray(VV.end)) {
            if (VV.skip || VV.excludeEnd || VV.returnEnd) throw dV("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ee;
            if ("object" !== typeof VV.endScope || null === VV.endScope) throw dV("endScope must be object"), ee;
            xe(VV, VV.end, {
              key: "endScope"
            }), VV.end = jV(VV.end, {
              joinWith: ""
            })
          }
        }(VV)
    }

    function Ye(VV) {
      function eV(eV, xV) {
        return new RegExp(wV(eV), "m" + (VV.case_insensitive ? "i" : "") + (VV.unicodeRegex ? "u" : "") + (xV ? "g" : ""))
      }
      class xV {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(VV, eV) {
          eV.position = this.position++, this.matchIndexes[this.matchAt] = eV, this.regexes.push([eV, VV]), this.matchAt += EV(VV) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const VV = this.regexes.map((VV => VV[1]));
          this.matcherRe = eV(jV(VV, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(VV) {
          this.matcherRe.lastIndex = this.lastIndex;
          const eV = this.matcherRe.exec(VV);
          if (!eV) return null;
          const xV = eV.findIndex(((VV, eV) => eV > 0 && void 0 !== VV)),
            JV = this.matchIndexes[xV];
          return eV.splice(0, xV), Object.assign(eV, JV)
        }
      }
      class JV {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(VV) {
          if (this.multiRegexes[VV]) return this.multiRegexes[VV];
          const eV = new xV;
          return this.rules.slice(VV).forEach((VV => {
            let [xV, JV] = VV;
            return eV.addRule(xV, JV)
          })), eV.compile(), this.multiRegexes[VV] = eV, eV
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(VV, eV) {
          this.rules.push([VV, eV]), "NZ" === eV.type && this.count++
        }
        exec(VV) {
          const eV = this.getMatcher(this.regexIndex);
          eV.lastIndex = this.lastIndex;
          let xV = eV.exec(VV);
          if (this.resumingScanAtSamePosition())
            if (xV && xV.index === this.lastIndex);
            else {
              const eV = this.getMatcher(0);
              eV.lastIndex = this.lastIndex + 1, xV = eV.exec(VV)
            } return xV && (this.regexIndex += xV.position + 1, this.regexIndex === this.count && this.considerAll()), xV
        }
      }
      if (VV.compilerExtensions || (VV.compilerExtensions = []), VV.contains && VV.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return VV.classNameAliases = YV(VV.classNameAliases || {}),
        function xV(UV, yV) {
          const pV = UV;
          if (UV.isCompiled) return pV;
          [lV, mV, Je, HV].forEach((VV => VV(UV, yV))), VV.compilerExtensions.forEach((VV => VV(UV, yV))), UV.__beforeBegin = null, [LV, fV, KV].forEach((VV => VV(UV, yV))), UV.isCompiled = !0;
          let QV = null;
          return "object" === typeof UV.keywords && UV.keywords.$pattern && (UV.keywords = Object.assign({}, UV.keywords), QV = UV.keywords.$pattern, delete UV.keywords.$pattern), QV = QV || /\w+/, UV.keywords && (UV.keywords = sV(UV.keywords, VV.case_insensitive)), pV.keywordPatternRe = eV(QV, !0), yV && (UV.NZ || (UV.NZ = /\B|\b/), pV.beginRe = eV(pV.NZ), UV.end || UV.endsWithParent || (UV.end = /\B|\b/), UV.end && (pV.endRe = eV(pV.end)), pV.terminatorEnd = wV(pV.end) || "", UV.endsWithParent && yV.terminatorEnd && (pV.terminatorEnd += (UV.end ? "|" : "") + yV.terminatorEnd)), UV.illegal && (pV.illegalRe = eV(UV.illegal)), UV.contains || (UV.contains = []), UV.contains = [].concat(...UV.contains.map((function(VV) {
            return function(VV) {
              VV.variants && !VV.cachedVariants && (VV.cachedVariants = VV.variants.map((function(eV) {
                return YV(VV, {
                  variants: null
                }, eV)
              })));
              if (VV.cachedVariants) return VV.cachedVariants;
              if (Ue(VV)) return YV(VV, {
                starts: VV.starts ? YV(VV.starts) : null
              });
              if (Object.isFrozen(VV)) return YV(VV);
              return VV
            }("self" === VV ? UV : VV)
          }))), UV.contains.forEach((function(VV) {
            xV(VV, pV)
          })), UV.starts && xV(UV.starts, yV), pV.matcher = function(VV) {
            const eV = new JV;
            return VV.contains.forEach((VV => eV.addRule(VV.NZ, {
              rule: VV,
              type: "NZ"
            }))), VV.terminatorEnd && eV.addRule(VV.terminatorEnd, {
              type: "end"
            }), VV.illegal && eV.addRule(VV.illegal, {
              type: "illegal"
            }), eV
          }(pV), pV
        }(VV)
    }

    function Ue(VV) {
      return !!VV && (VV.endsWithParent || Ue(VV.starts))
    }
    class ye extends Error {
      constructor(VV, eV) {
        super(VV), this.name = "HTMLInjectionError", this.html = eV
      }
    }
    const pe = JV,
      Qe = YV,
      ne = Symbol("nomatch"),
      we = function(VV) {
        const JV = Object.create(null),
          YV = Object.create(null),
          UV = [];
        let yV = !0;
        const pV = "Could not find the language '{}', did you forget to load/include a language module?",
          QV = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let wV = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: nV
        };

        function EV(VV) {
          return wV.noHighlightRe.test(VV)
        }

        function BV(VV, eV, xV) {
          let JV = "",
            YV = "";
          "object" === typeof eV ? (JV = VV, xV = eV.ignoreIllegals, YV = eV.language) : (Ve("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Ve("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), YV = VV, JV = eV), void 0 === xV && (xV = !0);
          const UV = {
            code: JV,
            language: YV
          };
          XV("before:highlight", UV);
          const yV = UV.result ? UV.result : jV(UV.language, UV.code, xV);
          return yV.code = UV.code, XV("after:highlight", yV), yV
        }

        function jV(VV, eV, YV, UV) {
          const QV = Object.create(null);

          function nV() {
            if (!XV.keywords) return void zV.addText(GV);
            let VV = 0;
            XV.keywordPatternRe.lastIndex = 0;
            let eV = XV.keywordPatternRe.exec(GV),
              xV = "";
            for (; eV;) {
              xV += GV.substring(VV, eV.index);
              const YV = TV.case_insensitive ? eV[0].toLowerCase() : eV[0],
                UV = (JV = YV, XV.keywords[JV]);
              if (UV) {
                const [VV, JV] = UV;
                if (zV.addText(xV), xV = "", QV[YV] = (QV[YV] || 0) + 1, QV[YV] <= 7 && (WV += JV), VV.startsWith("_")) xV += eV[0];
                else {
                  const xV = TV.classNameAliases[VV] || VV;
                  vV(eV[0], xV)
                }
              } else xV += eV[0];
              VV = XV.keywordPatternRe.lastIndex, eV = XV.keywordPatternRe.exec(GV)
            }
            var JV;
            xV += GV.substring(VV), zV.addText(xV)
          }

          function ZV() {
            null != XV.subLanguage ? function() {
              if ("" === GV) return;
              let VV = null;
              if ("string" === typeof XV.subLanguage) {
                if (!JV[XV.subLanguage]) return void zV.addText(GV);
                VV = jV(XV.subLanguage, GV, !0, MV[XV.subLanguage]), MV[XV.subLanguage] = VV._top
              } else VV = qV(GV, XV.subLanguage.length ? XV.subLanguage : null);
              XV.relevance > 0 && (WV += VV.relevance), zV.__addSublanguage(VV._emitter, VV.language)
            }() : nV(), GV = ""
          }

          function vV(VV, eV) {
            "" !== VV && (zV.startScope(eV), zV.addText(VV), zV.endScope())
          }

          function rV(VV, eV) {
            let xV = 1;
            const JV = eV.length - 1;
            for (; xV <= JV;) {
              if (!VV._emit[xV]) {
                xV++;
                continue
              }
              const JV = TV.classNameAliases[VV[xV]] || VV[xV],
                YV = eV[xV];
              JV ? vV(YV, JV) : (GV = YV, nV(), GV = ""), xV++
            }
          }

          function kV(VV, eV) {
            return VV.scope && "string" === typeof VV.scope && zV.openNode(TV.classNameAliases[VV.scope] || VV.scope), VV.beginScope && (VV.beginScope._wrap ? (vV(GV, TV.classNameAliases[VV.beginScope._wrap] || VV.beginScope._wrap), GV = "") : VV.beginScope._multi && (rV(VV.beginScope, eV), GV = "")), XV = Object.create(VV, {
              parent: {
                value: XV
              }
            }), XV
          }

          function bV(VV, eV, JV) {
            let YV = function(VV, eV) {
              const xV = VV && VV.exec(eV);
              return xV && 0 === xV.index
            }(VV.endRe, JV);
            if (YV) {
              if (VV["on:end"]) {
                const JV = new xV(VV);
                VV["on:end"](eV, JV), JV.isMatchIgnored && (YV = !1)
              }
              if (YV) {
                for (; VV.endsParent && VV.parent;) VV = VV.parent;
                return VV
              }
            }
            if (VV.endsWithParent) return bV(VV.parent, eV, JV)
          }

          function EV(VV) {
            return 0 === XV.matcher.regexIndex ? (GV += VV[0], 1) : (DV = !0, 0)
          }

          function BV(VV) {
            const xV = VV[0],
              JV = eV.substring(VV.index),
              YV = bV(XV, VV, JV);
            if (!YV) return ne;
            const UV = XV;
            XV.endScope && XV.endScope._wrap ? (ZV(), vV(xV, XV.endScope._wrap)) : XV.endScope && XV.endScope._multi ? (ZV(), rV(XV.endScope, VV)) : UV.skip ? GV += xV : (UV.returnEnd || UV.excludeEnd || (GV += xV), ZV(), UV.excludeEnd && (GV = xV));
            do {
              XV.scope && zV.closeNode(), XV.skip || XV.subLanguage || (WV += XV.relevance), XV = XV.parent
            } while (XV !== YV.parent);
            return YV.starts && kV(YV.starts, VV), UV.returnEnd ? 0 : xV.length
          }
          let tV = {};

          function FV(JV, UV) {
            const pV = UV && UV[0];
            if (GV += JV, null == pV) return ZV(), 0;
            if ("NZ" === tV.type && "end" === UV.type && tV.index === UV.index && "" === pV) {
              if (GV += eV.slice(UV.index, UV.index + 1), !yV) {
                const eV = new Error(`0 width match regex (${VV})`);
                throw eV.languageName = VV, eV.badRule = tV.rule, eV
              }
              return 1
            }
            if (tV = UV, "NZ" === UV.type) return function(VV) {
              const eV = VV[0],
                JV = VV.rule,
                YV = new xV(JV),
                UV = [JV.__beforeBegin, JV["on:begin"]];
              for (const xV of UV)
                if (xV && (xV(VV, YV), YV.isMatchIgnored)) return EV(eV);
              return JV.skip ? GV += eV : (JV.excludeBegin && (GV += eV), ZV(), JV.returnBegin || JV.excludeBegin || (GV = eV)), kV(JV, VV), JV.returnBegin ? 0 : eV.length
            }(UV);
            if ("illegal" === UV.type && !YV) {
              const VV = new Error('Illegal lexeme "' + pV + '" for mode "' + (XV.scope || "<unnamed>") + '"');
              throw VV.mode = XV, VV
            }
            if ("end" === UV.type) {
              const VV = BV(UV);
              if (VV !== ne) return VV
            }
            if ("illegal" === UV.type && "" === pV) return GV += "\n", 1;
            if (gV > 1e5 && gV > 3 * UV.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return GV += pV, pV.length
          }
          const TV = PV(VV);
          if (!TV) throw dV(pV.replace("{}", VV)), new Error('Unknown language: "' + VV + '"');
          const AV = Ye(TV);
          let NV = "",
            XV = UV || AV;
          const MV = {},
            zV = new wV.__emitter(wV);
          ! function() {
            const VV = [];
            for (let eV = XV; eV !== TV; eV = eV.parent) eV.scope && VV.unshift(eV.scope);
            VV.forEach((VV => zV.openNode(VV)))
          }();
          let GV = "",
            WV = 0,
            RV = 0,
            gV = 0,
            DV = !1;
          try {
            if (TV.__emitTokens) TV.__emitTokens(eV, zV);
            else {
              for (XV.matcher.considerAll();;) {
                gV++, DV ? DV = !1 : XV.matcher.considerAll(), XV.matcher.lastIndex = RV;
                const VV = XV.matcher.exec(eV);
                if (!VV) break;
                const xV = FV(eV.substring(RV, VV.index), VV);
                RV = VV.index + xV
              }
              FV(eV.substring(RV))
            }
            return zV.finalize(), NV = zV.toHTML(), {
              language: VV,
              value: NV,
              relevance: WV,
              illegal: !1,
              _emitter: zV,
              _top: XV
            }
          } catch (iV) {
            if (iV.message && iV.message.includes("Illegal")) return {
              language: VV,
              value: pe(eV),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: iV.message,
                index: RV,
                context: eV.slice(RV - 100, RV + 100),
                mode: iV.mode,
                resultSoFar: NV
              },
              _emitter: zV
            };
            if (yV) return {
              language: VV,
              value: pe(eV),
              illegal: !1,
              relevance: 0,
              errorRaised: iV,
              _emitter: zV,
              _top: XV
            };
            throw iV
          }
        }

        function qV(VV, eV) {
          eV = eV || wV.languages || Object.keys(JV);
          const xV = function(VV) {
              const eV = {
                value: pe(VV),
                illegal: !1,
                relevance: 0,
                _top: QV,
                _emitter: new wV.__emitter(wV)
              };
              return eV._emitter.addText(VV), eV
            }(VV),
            YV = eV.filter(PV).filter(NV).map((eV => jV(eV, VV, !1)));
          YV.unshift(xV);
          const UV = YV.sort(((VV, eV) => {
              if (VV.relevance !== eV.relevance) return eV.relevance - VV.relevance;
              if (VV.language && eV.language) {
                if (PV(VV.language).supersetOf === eV.language) return 1;
                if (PV(eV.language).supersetOf === VV.language) return -1
              }
              return 0
            })),
            [yV, pV] = UV,
            nV = yV;
          return nV.secondBest = pV, nV
        }

        function tV(VV) {
          let eV = null;
          const xV = function(VV) {
            let eV = VV.className + " ";
            eV += VV.parentNode ? VV.parentNode.className : "";
            const xV = wV.languageDetectRe.exec(eV);
            if (xV) {
              const eV = PV(xV[1]);
              return eV || (OV(pV.replace("{}", xV[1])), OV("Falling back to no-highlight mode for this block.", VV)), eV ? xV[1] : "no-highlight"
            }
            return eV.split(/\s+/).find((VV => EV(VV) || PV(VV)))
          }(VV);
          if (EV(xV)) return;
          if (XV("before:highlightElement", {
              el: VV,
              language: xV
            }), VV.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", VV);
          if (VV.children.length > 0 && (wV.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(VV)), wV.throwUnescapedHTML)) {
            throw new ye("One of your code blocks includes unescaped HTML.", VV.innerHTML)
          }
          eV = VV;
          const JV = eV.textContent,
            UV = xV ? BV(JV, {
              language: xV,
              ignoreIllegals: !0
            }) : qV(JV);
          VV.innerHTML = UV.value, VV.dataset.highlighted = "yes",
            function(VV, eV, xV) {
              const JV = eV && YV[eV] || xV;
              VV.classList.add("hljs"), VV.classList.add(`language-${JV}`)
            }(VV, xV, UV.language), VV.result = {
              language: UV.language,
              re: UV.relevance,
              relevance: UV.relevance
            }, UV.secondBest && (VV.secondBest = {
              language: UV.secondBest.language,
              relevance: UV.secondBest.relevance
            }), XV("after:highlightElement", {
              el: VV,
              result: UV,
              text: JV
            })
        }
        let FV = !1;

        function TV() {
          if ("loading" === document.readyState) return FV || window.addEventListener("DOMContentLoaded", (function() {
            TV()
          }), !1), void(FV = !0);
          document.querySelectorAll(wV.cssSelector).forEach(tV)
        }

        function PV(VV) {
          return VV = (VV || "").toLowerCase(), JV[VV] || JV[YV[VV]]
        }

        function AV(VV, eV) {
          let {
            languageName: xV
          } = eV;
          "string" === typeof VV && (VV = [VV]), VV.forEach((VV => {
            YV[VV.toLowerCase()] = xV
          }))
        }

        function NV(VV) {
          const eV = PV(VV);
          return eV && !eV.disableAutodetect
        }

        function XV(VV, eV) {
          const xV = VV;
          UV.forEach((function(VV) {
            VV[xV] && VV[xV](eV)
          }))
        }
        Object.assign(VV, {
          highlight: BV,
          highlightAuto: qV,
          highlightAll: TV,
          highlightElement: tV,
          highlightBlock: function(VV) {
            return Ve("10.7.0", "highlightBlock will be removed entirely in v12.0"), Ve("10.7.0", "Please use highlightElement now."), tV(VV)
          },
          configure: function(VV) {
            wV = Qe(wV, VV)
          },
          initHighlighting: () => {
            TV(), Ve("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            TV(), Ve("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(eV, xV) {
            let YV = null;
            try {
              YV = xV(VV)
            } catch (UV) {
              if (dV("Language definition for '{}' could not be registered.".replace("{}", eV)), !yV) throw UV;
              dV(UV), YV = QV
            }
            YV.name || (YV.name = eV), JV[eV] = YV, YV.rawDefinition = xV.bind(null, VV), YV.aliases && AV(YV.aliases, {
              languageName: eV
            })
          },
          unregisterLanguage: function(VV) {
            delete JV[VV];
            for (const eV of Object.keys(YV)) YV[eV] === VV && delete YV[eV]
          },
          listLanguages: function() {
            return Object.keys(JV)
          },
          getLanguage: PV,
          registerAliases: AV,
          autoDetection: NV,
          inherit: Qe,
          addPlugin: function(VV) {
            ! function(VV) {
              VV["before:highlightBlock"] && !VV["before:highlightElement"] && (VV["before:highlightElement"] = eV => {
                VV["before:highlightBlock"](Object.assign({
                  block: eV.el
                }, eV))
              }), VV["after:highlightBlock"] && !VV["after:highlightElement"] && (VV["after:highlightElement"] = eV => {
                VV["after:highlightBlock"](Object.assign({
                  block: eV.el
                }, eV))
              })
            }(VV), UV.push(VV)
          },
          removePlugin: function(VV) {
            const eV = UV.indexOf(VV); - 1 !== eV && UV.splice(eV, 1)
          }
        }), VV.debugMode = function() {
          yV = !1
        }, VV.safeMode = function() {
          yV = !0
        }, VV.versionString = "11.11.1", VV.regex = {
          concat: kV,
          lookahead: ZV,
          either: bV,
          optional: rV,
          anyNumberOfTimes: vV
        };
        for (const xV in cV) "object" === typeof cV[xV] && eV(cV[xV]);
        return Object.assign(VV, cV), VV
      },
      Ze = we({});
    Ze.newInstance = () => we({}), VV.exports = Ze, Ze.HighlightJS = Ze, Ze.default = Ze
  },
  5226: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    const JV = xV(5230)
  },
  5239: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV
    });
    const JV = "[A-Za-z$_][0-9A-Za-z$_]*",
      YV = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      UV = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      yV = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      pV = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      QV = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      nV = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      wV = [].concat(QV, yV, pV);

    function ZV(VV) {
      const eV = VV.regex,
        xV = JV,
        ZV = "<>",
        vV = "</>",
        rV = {
          NZ: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (VV, eV) => {
            const xV = VV[0].length + VV.index,
              JV = VV.input[xV];
            if ("<" === JV || "," === JV) return void eV.ignoreMatch();
            let YV;
            ">" === JV && (((VV, eV) => {
              let {
                after: xV
              } = eV;
              const JV = "</" + VV[0].slice(1);
              return -1 !== VV.input.indexOf(JV, xV)
            })(VV, {
              after: xV
            }) || eV.ignoreMatch());
            const UV = VV.input.substring(xV);
            ((YV = UV.match(/^\s*=/)) || (YV = UV.match(/^\s+extends\s+/)) && 0 === YV.index) && eV.ignoreMatch()
          }
        },
        kV = {
          $pattern: JV,
          keyword: YV,
          literal: UV,
          built_in: wV,
          "variable.language": nV
        },
        bV = "[0-9](_?[0-9])*",
        EV = `\\.(${bV})`,
        BV = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        jV = {
          className: "number",
          variants: [{
            NZ: `(\\b(${BV})((${EV})|\\.)?|(${EV}))[eE][+-]?(${bV})\\b`
          }, {
            NZ: `\\b(${BV})\\b((${EV})\\b|\\.)?|(${EV})\\b`
          }, {
            NZ: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            NZ: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            NZ: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            NZ: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            NZ: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        qV = {
          className: "subst",
          NZ: "\\$\\{",
          end: "\\}",
          keywords: kV,
          contains: []
        },
        tV = {
          NZ: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [VV.BACKSLASH_ESCAPE, qV],
            subLanguage: "xml"
          }
        },
        FV = {
          NZ: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [VV.BACKSLASH_ESCAPE, qV],
            subLanguage: "css"
          }
        },
        TV = {
          NZ: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [VV.BACKSLASH_ESCAPE, qV],
            subLanguage: "graphql"
          }
        },
        PV = {
          className: "string",
          NZ: "`",
          end: "`",
          contains: [VV.BACKSLASH_ESCAPE, qV]
        },
        AV = {
          className: "comment",
          variants: [VV.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              NZ: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                NZ: "@[A-Za-z]+"
              }, {
                className: "type",
                NZ: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                NZ: xV + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                NZ: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), VV.C_BLOCK_COMMENT_MODE, VV.C_LINE_COMMENT_MODE]
        },
        NV = [VV.APOS_STRING_MODE, VV.QUOTE_STRING_MODE, tV, FV, TV, PV, {
          match: /\$\d+/
        }, jV];
      qV.contains = NV.concat({
        NZ: /\{/,
        end: /\}/,
        keywords: kV,
        contains: ["self"].concat(NV)
      });
      const XV = [].concat(AV, qV.contains),
        MV = XV.concat([{
          NZ: /(\s*)\(/,
          end: /\)/,
          keywords: kV,
          contains: ["self"].concat(XV)
        }]),
        zV = {
          className: "params",
          NZ: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: kV,
          contains: MV
        },
        GV = {
          variants: [{
            match: [/class/, /\s+/, xV, /\s+/, /extends/, /\s+/, eV.concat(xV, "(", eV.concat(/\./, xV), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, xV],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        WV = {
          relevance: 0,
          match: eV.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...yV, ...pV]
          }
        },
        RV = {
          variants: [{
            match: [/function/, /\s+/, xV, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [zV],
          illegal: /%/
        };
      const gV = {
        match: eV.concat(/\b/, (DV = [...QV, "super", "import"].map((VV => `${VV}\\s*\\(`)), eV.concat("(?!", DV.join("|"), ")")), xV, eV.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var DV;
      const iV = {
          NZ: eV.concat(/\./, eV.lookahead(eV.concat(xV, /(?![0-9A-Za-z$_(])/))),
          end: xV,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        CV = {
          match: [/get|set/, /\s+/, xV, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            NZ: /\(\)/
          }, zV]
        },
        aV = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + VV.UNDERSCORE_IDENT_RE + ")\\s*=>",
        oV = {
          match: [/const|var|let/, /\s+/, xV, /\s*/, /=\s*/, /(async\s*)?/, eV.lookahead(aV)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [zV]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: kV,
        exports: {
          PARAMS_CONTAINS: MV,
          CLASS_REFERENCE: WV
        },
        illegal: /#(?![$_A-z])/,
        contains: [VV.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          NZ: /^\s*['"]use (strict|asm)['"]/
        }, VV.APOS_STRING_MODE, VV.QUOTE_STRING_MODE, tV, FV, TV, PV, AV, {
          match: /\$\d+/
        }, jV, WV, {
          scope: "attr",
          match: xV + eV.lookahead(":"),
          relevance: 0
        }, oV, {
          NZ: "(" + VV.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [AV, VV.REGEXP_MODE, {
            className: "function",
            NZ: aV,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                NZ: VV.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                NZ: /\(\s*\)/,
                skip: !0
              }, {
                NZ: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: kV,
                contains: MV
              }]
            }]
          }, {
            NZ: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              NZ: ZV,
              end: vV
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              NZ: rV.NZ,
              "on:begin": rV.isTrulyOpeningTag,
              end: rV.end
            }],
            subLanguage: "xml",
            contains: [{
              NZ: rV.NZ,
              end: rV.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, RV, {
          beginKeywords: "while if switch catch for"
        }, {
          NZ: "\\b(?!function)" + VV.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [zV, VV.inherit(VV.TITLE_MODE, {
            NZ: xV,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, iV, {
          match: "\\$" + xV,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [zV]
        }, gV, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, GV, CV, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5241: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => vV
    });
    const JV = "[A-Za-z$_][0-9A-Za-z$_]*",
      YV = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      UV = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      yV = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      pV = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      QV = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      nV = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      wV = [].concat(QV, yV, pV);

    function ZV(VV) {
      const eV = VV.regex,
        xV = JV,
        ZV = "<>",
        vV = "</>",
        rV = {
          NZ: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (VV, eV) => {
            const xV = VV[0].length + VV.index,
              JV = VV.input[xV];
            if ("<" === JV || "," === JV) return void eV.ignoreMatch();
            let YV;
            ">" === JV && (((VV, eV) => {
              let {
                after: xV
              } = eV;
              const JV = "</" + VV[0].slice(1);
              return -1 !== VV.input.indexOf(JV, xV)
            })(VV, {
              after: xV
            }) || eV.ignoreMatch());
            const UV = VV.input.substring(xV);
            ((YV = UV.match(/^\s*=/)) || (YV = UV.match(/^\s+extends\s+/)) && 0 === YV.index) && eV.ignoreMatch()
          }
        },
        kV = {
          $pattern: JV,
          keyword: YV,
          literal: UV,
          built_in: wV,
          "variable.language": nV
        },
        bV = "[0-9](_?[0-9])*",
        EV = `\\.(${bV})`,
        BV = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        jV = {
          className: "number",
          variants: [{
            NZ: `(\\b(${BV})((${EV})|\\.)?|(${EV}))[eE][+-]?(${bV})\\b`
          }, {
            NZ: `\\b(${BV})\\b((${EV})\\b|\\.)?|(${EV})\\b`
          }, {
            NZ: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            NZ: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            NZ: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            NZ: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            NZ: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        qV = {
          className: "subst",
          NZ: "\\$\\{",
          end: "\\}",
          keywords: kV,
          contains: []
        },
        tV = {
          NZ: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [VV.BACKSLASH_ESCAPE, qV],
            subLanguage: "xml"
          }
        },
        FV = {
          NZ: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [VV.BACKSLASH_ESCAPE, qV],
            subLanguage: "css"
          }
        },
        TV = {
          NZ: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [VV.BACKSLASH_ESCAPE, qV],
            subLanguage: "graphql"
          }
        },
        PV = {
          className: "string",
          NZ: "`",
          end: "`",
          contains: [VV.BACKSLASH_ESCAPE, qV]
        },
        AV = {
          className: "comment",
          variants: [VV.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              NZ: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                NZ: "@[A-Za-z]+"
              }, {
                className: "type",
                NZ: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                NZ: xV + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                NZ: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), VV.C_BLOCK_COMMENT_MODE, VV.C_LINE_COMMENT_MODE]
        },
        NV = [VV.APOS_STRING_MODE, VV.QUOTE_STRING_MODE, tV, FV, TV, PV, {
          match: /\$\d+/
        }, jV];
      qV.contains = NV.concat({
        NZ: /\{/,
        end: /\}/,
        keywords: kV,
        contains: ["self"].concat(NV)
      });
      const XV = [].concat(AV, qV.contains),
        MV = XV.concat([{
          NZ: /(\s*)\(/,
          end: /\)/,
          keywords: kV,
          contains: ["self"].concat(XV)
        }]),
        zV = {
          className: "params",
          NZ: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: kV,
          contains: MV
        },
        GV = {
          variants: [{
            match: [/class/, /\s+/, xV, /\s+/, /extends/, /\s+/, eV.concat(xV, "(", eV.concat(/\./, xV), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, xV],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        WV = {
          relevance: 0,
          match: eV.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...yV, ...pV]
          }
        },
        RV = {
          variants: [{
            match: [/function/, /\s+/, xV, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [zV],
          illegal: /%/
        };
      const gV = {
        match: eV.concat(/\b/, (DV = [...QV, "super", "import"].map((VV => `${VV}\\s*\\(`)), eV.concat("(?!", DV.join("|"), ")")), xV, eV.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var DV;
      const iV = {
          NZ: eV.concat(/\./, eV.lookahead(eV.concat(xV, /(?![0-9A-Za-z$_(])/))),
          end: xV,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        CV = {
          match: [/get|set/, /\s+/, xV, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            NZ: /\(\)/
          }, zV]
        },
        aV = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + VV.UNDERSCORE_IDENT_RE + ")\\s*=>",
        oV = {
          match: [/const|var|let/, /\s+/, xV, /\s*/, /=\s*/, /(async\s*)?/, eV.lookahead(aV)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [zV]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: kV,
        exports: {
          PARAMS_CONTAINS: MV,
          CLASS_REFERENCE: WV
        },
        illegal: /#(?![$_A-z])/,
        contains: [VV.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          NZ: /^\s*['"]use (strict|asm)['"]/
        }, VV.APOS_STRING_MODE, VV.QUOTE_STRING_MODE, tV, FV, TV, PV, AV, {
          match: /\$\d+/
        }, jV, WV, {
          scope: "attr",
          match: xV + eV.lookahead(":"),
          relevance: 0
        }, oV, {
          NZ: "(" + VV.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [AV, VV.REGEXP_MODE, {
            className: "function",
            NZ: aV,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                NZ: VV.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                NZ: /\(\s*\)/,
                skip: !0
              }, {
                NZ: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: kV,
                contains: MV
              }]
            }]
          }, {
            NZ: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              NZ: ZV,
              end: vV
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              NZ: rV.NZ,
              "on:begin": rV.isTrulyOpeningTag,
              end: rV.end
            }],
            subLanguage: "xml",
            contains: [{
              NZ: rV.NZ,
              end: rV.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, RV, {
          beginKeywords: "while if switch catch for"
        }, {
          NZ: "\\b(?!function)" + VV.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [zV, VV.inherit(VV.TITLE_MODE, {
            NZ: xV,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, iV, {
          match: "\\$" + xV,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [zV]
        }, gV, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, GV, CV, {
          match: /\$[(.]/
        }]
      }
    }

    function vV(VV) {
      const eV = VV.regex,
        xV = ZV(VV),
        yV = JV,
        pV = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        QV = {
          NZ: [/namespace/, /\s+/, VV.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        vV = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: pV
          },
          contains: [xV.exports.CLASS_REFERENCE]
        },
        rV = {
          $pattern: JV,
          keyword: YV.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: UV,
          built_in: wV.concat(pV),
          "variable.language": nV
        },
        kV = {
          className: "meta",
          NZ: "@" + yV
        },
        bV = (VV, eV, xV) => {
          const JV = VV.contains.findIndex((VV => VV.label === eV));
          if (-1 === JV) throw new Error("can not find mode to replace");
          VV.contains.splice(JV, 1, xV)
        };
      Object.assign(xV.keywords, rV), xV.exports.PARAMS_CONTAINS.push(kV);
      const EV = xV.contains.find((VV => "attr" === VV.scope)),
        BV = Object.assign({}, EV, {
          match: eV.concat(yV, eV.lookahead(/\s*\?:/))
        });
      xV.exports.PARAMS_CONTAINS.push([xV.exports.CLASS_REFERENCE, EV, BV]), xV.contains = xV.contains.concat([kV, QV, vV, BV]), bV(xV, "shebang", VV.SHEBANG()), bV(xV, "use_strict", {
        className: "meta",
        relevance: 10,
        NZ: /^\s*['"]use strict['"]/
      });
      return xV.contains.find((VV => "func.def" === VV.label)).relevance = 0, Object.assign(xV, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), xV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);