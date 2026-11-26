export const id = 93;
export const ids = [93];
export const modules = {
  5214: BB => {
    function OB(BB) {
      return BB instanceof Map ? BB.clear = BB.delete = BB.set = function() {
        throw new Error("map is read-only")
      } : BB instanceof Set && (BB.add = BB.clear = BB.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(BB), Object.getOwnPropertyNames(BB).forEach((GB => {
        const YB = BB[GB],
          DB = typeof YB;
        "object" !== DB && "function" !== DB || Object.isFrozen(YB) || OB(YB)
      })), BB
    }
    class GB {
      constructor(BB) {
        void 0 === BB.data && (BB.data = {}), this.data = BB.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function YB(BB) {
      return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function DB(BB) {
      const OB = Object.create(null);
      for (const QB in BB) OB[QB] = BB[QB];
      for (var GB = arguments.length, YB = new Array(GB > 1 ? GB - 1 : 0), DB = 1; DB < GB; DB++) YB[DB - 1] = arguments[DB];
      return YB.forEach((function(BB) {
        for (const GB in BB) OB[GB] = BB[GB]
      })), OB
    }
    const QB = BB => !!BB.scope;
    class oB {
      constructor(BB, OB) {
        this.buffer = "", this.classPrefix = OB.classPrefix, BB.walk(this)
      }
      addText(BB) {
        this.buffer += YB(BB)
      }
      openNode(BB) {
        if (!QB(BB)) return;
        const OB = ((BB, OB) => {
          let {
            prefix: GB
          } = OB;
          if (BB.startsWith("language:")) return BB.replace("language:", "language-");
          if (BB.includes(".")) {
            const OB = BB.split(".");
            return [`${GB}${OB.shift()}`, ...OB.map(((BB, OB) => `${BB}${"_".repeat(OB+1)}`))].join(" ")
          }
          return `${GB}${BB}`
        })(BB.scope, {
          prefix: this.classPrefix
        });
        this.span(OB)
      }
      closeNode(BB) {
        QB(BB) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(BB) {
        this.buffer += `<span class="${BB}">`
      }
    }
    const jB = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const OB = {
        children: []
      };
      return Object.assign(OB, BB), OB
    };
    class yB {
      constructor() {
        this.JR = jB(), this.stack = [this.JR]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.JR
      }
      add(BB) {
        this.top.children.push(BB)
      }
      openNode(BB) {
        const OB = jB({
          scope: BB
        });
        this.add(OB), this.stack.push(OB)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.JR, null, 4)
      }
      walk(BB) {
        return this.constructor._walk(BB, this.JR)
      }
      static _walk(BB, OB) {
        return "string" === typeof OB ? BB.addText(OB) : OB.children && (BB.openNode(OB), OB.children.forEach((OB => this._walk(BB, OB))), BB.closeNode(OB)), BB
      }
      static _collapse(BB) {
        "string" !== typeof BB && BB.children && (BB.children.every((BB => "string" === typeof BB)) ? BB.children = [BB.children.join("")] : BB.children.forEach((BB => {
          yB._collapse(BB)
        })))
      }
    }
    class JB extends yB {
      constructor(BB) {
        super(), this.options = BB
      }
      addText(BB) {
        "" !== BB && this.add(BB)
      }
      startScope(BB) {
        this.openNode(BB)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(BB, OB) {
        const GB = BB.root;
        OB && (GB.scope = `language:${OB}`), this.add(GB)
      }
      toHTML() {
        return new oB(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function MB(BB) {
      return BB ? "string" === typeof BB ? BB : BB.source : null
    }

    function PB(BB) {
      return pB("(?=", BB, ")")
    }

    function zB(BB) {
      return pB("(?:", BB, ")*")
    }

    function lB(BB) {
      return pB("(?:", BB, ")?")
    }

    function pB() {
      for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
      return OB.map((BB => MB(BB))).join("")
    }

    function qB() {
      for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
      const YB = function(BB) {
        const OB = BB[BB.length - 1];
        return "object" === typeof OB && OB.constructor === Object ? (BB.splice(BB.length - 1, 1), OB) : {}
      }(OB);
      return "(" + (YB.capture ? "" : "?:") + OB.map((BB => MB(BB))).join("|") + ")"
    }

    function ZB(BB) {
      return new RegExp(BB.toString() + "|").exec("").length - 1
    }
    const NB = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function RB(BB, OB) {
      let {
        joinWith: GB
      } = OB, YB = 0;
      return BB.map((BB => {
        YB += 1;
        const OB = YB;
        let GB = MB(BB),
          DB = "";
        for (; GB.length > 0;) {
          const BB = NB.exec(GB);
          if (!BB) {
            DB += GB;
            break
          }
          DB += GB.substring(0, BB.index), GB = GB.substring(BB.index + BB[0].length), "\\" === BB[0][0] && BB[1] ? DB += "\\" + String(Number(BB[1]) + OB) : (DB += BB[0], "(" === BB[0] && YB++)
        }
        return DB
      })).map((BB => `(${BB})`)).join(GB)
    }
    const WB = "[a-zA-Z]\\w*",
      AB = "[a-zA-Z_]\\w*",
      VB = "\\b\\d+(\\.\\d+)?",
      SB = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      nB = "\\b(0b[01]+)",
      UB = {
        ZP: "\\\\[\\s\\S]",
        relevance: 0
      },
      fB = {
        scope: "string",
        ZP: "'",
        end: "'",
        illegal: "\\n",
        contains: [UB]
      },
      kB = {
        scope: "string",
        ZP: '"',
        end: '"',
        illegal: "\\n",
        contains: [UB]
      },
      dB = function(BB, OB) {
        const GB = DB({
          scope: "comment",
          ZP: BB,
          end: OB,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        GB.contains.push({
          scope: "doctag",
          ZP: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const YB = qB("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return GB.contains.push({
          ZP: pB(/[ ]+/, "(", YB, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), GB
      },
      KB = dB("//", "$"),
      uB = dB("/\\*", "\\*/"),
      mB = dB("#", "$"),
      IB = {
        scope: "number",
        ZP: VB,
        relevance: 0
      },
      FB = {
        scope: "number",
        ZP: SB,
        relevance: 0
      },
      iB = {
        scope: "number",
        ZP: nB,
        relevance: 0
      },
      LB = {
        scope: "regexp",
        ZP: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [UB, {
          ZP: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [UB]
        }]
      },
      gB = {
        scope: "title",
        ZP: WB,
        relevance: 0
      },
      rB = {
        scope: "title",
        ZP: AB,
        relevance: 0
      },
      XB = {
        ZP: "\\.\\s*" + AB,
        relevance: 0
      };
    var wB = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: fB,
      BACKSLASH_ESCAPE: UB,
      BINARY_NUMBER_MODE: iB,
      BINARY_NUMBER_RE: nB,
      COMMENT: dB,
      C_BLOCK_COMMENT_MODE: uB,
      C_LINE_COMMENT_MODE: KB,
      C_NUMBER_MODE: FB,
      C_NUMBER_RE: SB,
      END_SAME_AS_BEGIN: function(BB) {
        return Object.assign(BB, {
          "on:begin": (BB, OB) => {
            OB.data._beginMatch = BB[1]
          },
          "on:end": (BB, OB) => {
            OB.data._beginMatch !== BB[1] && OB.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: mB,
      IDENT_RE: WB,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: XB,
      NUMBER_MODE: IB,
      NUMBER_RE: VB,
      PHRASAL_WORDS_MODE: {
        ZP: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: kB,
      REGEXP_MODE: LB,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const OB = /^#![ ]*\//;
        return BB.binary && (BB.ZP = pB(OB, /.*\b/, BB.binary, /\b.*/)), DB({
          scope: "meta",
          ZP: OB,
          end: /$/,
          relevance: 0,
          "on:begin": (BB, OB) => {
            0 !== BB.index && OB.ignoreMatch()
          }
        }, BB)
      },
      TITLE_MODE: gB,
      UNDERSCORE_IDENT_RE: AB,
      UNDERSCORE_TITLE_MODE: rB
    });

    function EB(BB, OB) {
      "." === BB.input[BB.index - 1] && OB.ignoreMatch()
    }

    function cB(BB, OB) {
      void 0 !== BB.className && (BB.scope = BB.className, delete BB.className)
    }

    function hB(BB, OB) {
      OB && BB.beginKeywords && (BB.ZP = "\\b(" + BB.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", BB.__beforeBegin = EB, BB.keywords = BB.keywords || BB.beginKeywords, delete BB.beginKeywords, void 0 === BB.relevance && (BB.relevance = 0))
    }

    function aB(BB, OB) {
      Array.isArray(BB.illegal) && (BB.illegal = qB(...BB.illegal))
    }

    function eB(BB, OB) {
      if (BB.match) {
        if (BB.ZP || BB.end) throw new Error("begin & end are not supported with match");
        BB.ZP = BB.match, delete BB.match
      }
    }

    function TB(BB, OB) {
      void 0 === BB.relevance && (BB.relevance = 1)
    }
    const bB = (BB, OB) => {
        if (!BB.beforeMatch) return;
        if (BB.starts) throw new Error("beforeMatch cannot be used with starts");
        const GB = Object.assign({}, BB);
        Object.keys(BB).forEach((OB => {
          delete BB[OB]
        })), BB.keywords = GB.keywords, BB.ZP = pB(GB.beforeMatch, PB(GB.ZP)), BB.starts = {
          relevance: 0,
          contains: [Object.assign(GB, {
            endsParent: !0
          })]
        }, BB.relevance = 0, delete GB.beforeMatch
      },
      CB = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function HB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const YB = Object.create(null);
      return "string" === typeof BB ? DB(GB, BB.split(" ")) : Array.isArray(BB) ? DB(GB, BB) : Object.keys(BB).forEach((function(GB) {
        Object.assign(YB, HB(BB[GB], OB, GB))
      })), YB;

      function DB(BB, GB) {
        OB && (GB = GB.map((BB => BB.toLowerCase()))), GB.forEach((function(OB) {
          const GB = OB.split("|");
          YB[GB[0]] = [BB, vB(GB[0], GB[1])]
        }))
      }
    }

    function vB(BB, OB) {
      return OB ? Number(OB) : function(BB) {
        return CB.includes(BB.toLowerCase())
      }(BB) ? 0 : 1
    }
    const sB = {},
      xB = BB => {
        console.error(BB)
      },
      tB = function(BB) {
        for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
        console.log(`WARN: ${BB}`, ...GB)
      },
      BO = (BB, OB) => {
        sB[`${BB}/${OB}`] || (console.log(`Deprecated as of ${BB}. ${OB}`), sB[`${BB}/${OB}`] = !0)
      },
      OO = new Error;

    function GO(BB, OB, GB) {
      let {
        key: YB
      } = GB, DB = 0;
      const QB = BB[YB],
        oB = {},
        jB = {};
      for (let yB = 1; yB <= OB.length; yB++) jB[yB + DB] = QB[yB], oB[yB + DB] = !0, DB += ZB(OB[yB - 1]);
      BB[YB] = jB, BB[YB]._emit = oB, BB[YB]._multi = !0
    }

    function YO(BB) {
      ! function(BB) {
        BB.scope && "object" === typeof BB.scope && null !== BB.scope && (BB.beginScope = BB.scope, delete BB.scope)
      }(BB), "string" === typeof BB.beginScope && (BB.beginScope = {
          _wrap: BB.beginScope
        }), "string" === typeof BB.endScope && (BB.endScope = {
          _wrap: BB.endScope
        }),
        function(BB) {
          if (Array.isArray(BB.ZP)) {
            if (BB.skip || BB.excludeBegin || BB.returnBegin) throw xB("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), OO;
            if ("object" !== typeof BB.beginScope || null === BB.beginScope) throw xB("beginScope must be object"), OO;
            GO(BB, BB.ZP, {
              key: "beginScope"
            }), BB.ZP = RB(BB.ZP, {
              joinWith: ""
            })
          }
        }(BB),
        function(BB) {
          if (Array.isArray(BB.end)) {
            if (BB.skip || BB.excludeEnd || BB.returnEnd) throw xB("skip, excludeEnd, returnEnd not compatible with endScope: {}"), OO;
            if ("object" !== typeof BB.endScope || null === BB.endScope) throw xB("endScope must be object"), OO;
            GO(BB, BB.end, {
              key: "endScope"
            }), BB.end = RB(BB.end, {
              joinWith: ""
            })
          }
        }(BB)
    }

    function DO(BB) {
      function OB(OB, GB) {
        return new RegExp(MB(OB), "m" + (BB.case_insensitive ? "i" : "") + (BB.unicodeRegex ? "u" : "") + (GB ? "g" : ""))
      }
      class GB {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(BB, OB) {
          OB.position = this.position++, this.matchIndexes[this.matchAt] = OB, this.regexes.push([OB, BB]), this.matchAt += ZB(BB) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const BB = this.regexes.map((BB => BB[1]));
          this.matcherRe = OB(RB(BB, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(BB) {
          this.matcherRe.lastIndex = this.lastIndex;
          const OB = this.matcherRe.exec(BB);
          if (!OB) return null;
          const GB = OB.findIndex(((BB, OB) => OB > 0 && void 0 !== BB)),
            YB = this.matchIndexes[GB];
          return OB.splice(0, GB), Object.assign(OB, YB)
        }
      }
      class YB {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(BB) {
          if (this.multiRegexes[BB]) return this.multiRegexes[BB];
          const OB = new GB;
          return this.rules.slice(BB).forEach((BB => {
            let [GB, YB] = BB;
            return OB.addRule(GB, YB)
          })), OB.compile(), this.multiRegexes[BB] = OB, OB
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(BB, OB) {
          this.rules.push([BB, OB]), "ZP" === OB.type && this.count++
        }
        exec(BB) {
          const OB = this.getMatcher(this.regexIndex);
          OB.lastIndex = this.lastIndex;
          let GB = OB.exec(BB);
          if (this.resumingScanAtSamePosition())
            if (GB && GB.index === this.lastIndex);
            else {
              const OB = this.getMatcher(0);
              OB.lastIndex = this.lastIndex + 1, GB = OB.exec(BB)
            } return GB && (this.regexIndex += GB.position + 1, this.regexIndex === this.count && this.considerAll()), GB
        }
      }
      if (BB.compilerExtensions || (BB.compilerExtensions = []), BB.contains && BB.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return BB.classNameAliases = DB(BB.classNameAliases || {}),
        function GB(QB, oB) {
          const jB = QB;
          if (QB.isCompiled) return jB;
          [cB, eB, YO, bB].forEach((BB => BB(QB, oB))), BB.compilerExtensions.forEach((BB => BB(QB, oB))), QB.__beforeBegin = null, [hB, aB, TB].forEach((BB => BB(QB, oB))), QB.isCompiled = !0;
          let yB = null;
          return "object" === typeof QB.keywords && QB.keywords.$pattern && (QB.keywords = Object.assign({}, QB.keywords), yB = QB.keywords.$pattern, delete QB.keywords.$pattern), yB = yB || /\w+/, QB.keywords && (QB.keywords = HB(QB.keywords, BB.case_insensitive)), jB.keywordPatternRe = OB(yB, !0), oB && (QB.ZP || (QB.ZP = /\B|\b/), jB.beginRe = OB(jB.ZP), QB.end || QB.endsWithParent || (QB.end = /\B|\b/), QB.end && (jB.endRe = OB(jB.end)), jB.terminatorEnd = MB(jB.end) || "", QB.endsWithParent && oB.terminatorEnd && (jB.terminatorEnd += (QB.end ? "|" : "") + oB.terminatorEnd)), QB.illegal && (jB.illegalRe = OB(QB.illegal)), QB.contains || (QB.contains = []), QB.contains = [].concat(...QB.contains.map((function(BB) {
            return function(BB) {
              BB.variants && !BB.cachedVariants && (BB.cachedVariants = BB.variants.map((function(OB) {
                return DB(BB, {
                  variants: null
                }, OB)
              })));
              if (BB.cachedVariants) return BB.cachedVariants;
              if (QO(BB)) return DB(BB, {
                starts: BB.starts ? DB(BB.starts) : null
              });
              if (Object.isFrozen(BB)) return DB(BB);
              return BB
            }("self" === BB ? QB : BB)
          }))), QB.contains.forEach((function(BB) {
            GB(BB, jB)
          })), QB.starts && GB(QB.starts, oB), jB.matcher = function(BB) {
            const OB = new YB;
            return BB.contains.forEach((BB => OB.addRule(BB.ZP, {
              rule: BB,
              type: "ZP"
            }))), BB.terminatorEnd && OB.addRule(BB.terminatorEnd, {
              type: "end"
            }), BB.illegal && OB.addRule(BB.illegal, {
              type: "illegal"
            }), OB
          }(jB), jB
        }(BB)
    }

    function QO(BB) {
      return !!BB && (BB.endsWithParent || QO(BB.starts))
    }
    class oO extends Error {
      constructor(BB, OB) {
        super(BB), this.name = "HTMLInjectionError", this.html = OB
      }
    }
    const jO = YB,
      yO = DB,
      JO = Symbol("nomatch"),
      MO = function(BB) {
        const YB = Object.create(null),
          DB = Object.create(null),
          QB = [];
        let oB = !0;
        const jB = "Could not find the language '{}', did you forget to load/include a language module?",
          yB = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let MB = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: JB
        };

        function ZB(BB) {
          return MB.noHighlightRe.test(BB)
        }

        function NB(BB, OB, GB) {
          let YB = "",
            DB = "";
          "object" === typeof OB ? (YB = BB, GB = OB.ignoreIllegals, DB = OB.language) : (BO("10.7.0", "highlight(lang, code, ...args) has been deprecated."), BO("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), DB = BB, YB = OB), void 0 === GB && (GB = !0);
          const QB = {
            code: YB,
            language: DB
          };
          kB("before:highlight", QB);
          const oB = QB.result ? QB.result : RB(QB.language, QB.code, GB);
          return oB.code = QB.code, kB("after:highlight", oB), oB
        }

        function RB(BB, OB, DB, QB) {
          const yB = Object.create(null);

          function JB() {
            if (!kB.keywords) return void KB.addText(uB);
            let BB = 0;
            kB.keywordPatternRe.lastIndex = 0;
            let OB = kB.keywordPatternRe.exec(uB),
              GB = "";
            for (; OB;) {
              GB += uB.substring(BB, OB.index);
              const DB = SB.case_insensitive ? OB[0].toLowerCase() : OB[0],
                QB = (YB = DB, kB.keywords[YB]);
              if (QB) {
                const [BB, YB] = QB;
                if (KB.addText(GB), GB = "", yB[DB] = (yB[DB] || 0) + 1, yB[DB] <= 7 && (mB += YB), BB.startsWith("_")) GB += OB[0];
                else {
                  const GB = SB.classNameAliases[BB] || BB;
                  zB(OB[0], GB)
                }
              } else GB += OB[0];
              BB = kB.keywordPatternRe.lastIndex, OB = kB.keywordPatternRe.exec(uB)
            }
            var YB;
            GB += uB.substring(BB), KB.addText(GB)
          }

          function PB() {
            null != kB.subLanguage ? function() {
              if ("" === uB) return;
              let BB = null;
              if ("string" === typeof kB.subLanguage) {
                if (!YB[kB.subLanguage]) return void KB.addText(uB);
                BB = RB(kB.subLanguage, uB, !0, dB[kB.subLanguage]), dB[kB.subLanguage] = BB._top
              } else BB = WB(uB, kB.subLanguage.length ? kB.subLanguage : null);
              kB.relevance > 0 && (mB += BB.relevance), KB.__addSublanguage(BB._emitter, BB.language)
            }() : JB(), uB = ""
          }

          function zB(BB, OB) {
            "" !== BB && (KB.startScope(OB), KB.addText(BB), KB.endScope())
          }

          function lB(BB, OB) {
            let GB = 1;
            const YB = OB.length - 1;
            for (; GB <= YB;) {
              if (!BB._emit[GB]) {
                GB++;
                continue
              }
              const YB = SB.classNameAliases[BB[GB]] || BB[GB],
                DB = OB[GB];
              YB ? zB(DB, YB) : (uB = DB, JB(), uB = ""), GB++
            }
          }

          function pB(BB, OB) {
            return BB.scope && "string" === typeof BB.scope && KB.openNode(SB.classNameAliases[BB.scope] || BB.scope), BB.beginScope && (BB.beginScope._wrap ? (zB(uB, SB.classNameAliases[BB.beginScope._wrap] || BB.beginScope._wrap), uB = "") : BB.beginScope._multi && (lB(BB.beginScope, OB), uB = "")), kB = Object.create(BB, {
              parent: {
                value: kB
              }
            }), kB
          }

          function qB(BB, OB, YB) {
            let DB = function(BB, OB) {
              const GB = BB && BB.exec(OB);
              return GB && 0 === GB.index
            }(BB.endRe, YB);
            if (DB) {
              if (BB["on:end"]) {
                const YB = new GB(BB);
                BB["on:end"](OB, YB), YB.isMatchIgnored && (DB = !1)
              }
              if (DB) {
                for (; BB.endsParent && BB.parent;) BB = BB.parent;
                return BB
              }
            }
            if (BB.endsWithParent) return qB(BB.parent, OB, YB)
          }

          function ZB(BB) {
            return 0 === kB.matcher.regexIndex ? (uB += BB[0], 1) : (iB = !0, 0)
          }

          function NB(BB) {
            const GB = BB[0],
              YB = OB.substring(BB.index),
              DB = qB(kB, BB, YB);
            if (!DB) return JO;
            const QB = kB;
            kB.endScope && kB.endScope._wrap ? (PB(), zB(GB, kB.endScope._wrap)) : kB.endScope && kB.endScope._multi ? (PB(), lB(kB.endScope, BB)) : QB.skip ? uB += GB : (QB.returnEnd || QB.excludeEnd || (uB += GB), PB(), QB.excludeEnd && (uB = GB));
            do {
              kB.scope && KB.closeNode(), kB.skip || kB.subLanguage || (mB += kB.relevance), kB = kB.parent
            } while (kB !== DB.parent);
            return DB.starts && pB(DB.starts, BB), QB.returnEnd ? 0 : GB.length
          }
          let AB = {};

          function VB(YB, QB) {
            const jB = QB && QB[0];
            if (uB += YB, null == jB) return PB(), 0;
            if ("ZP" === AB.type && "end" === QB.type && AB.index === QB.index && "" === jB) {
              if (uB += OB.slice(QB.index, QB.index + 1), !oB) {
                const OB = new Error(`0 width match regex (${BB})`);
                throw OB.languageName = BB, OB.badRule = AB.rule, OB
              }
              return 1
            }
            if (AB = QB, "ZP" === QB.type) return function(BB) {
              const OB = BB[0],
                YB = BB.rule,
                DB = new GB(YB),
                QB = [YB.__beforeBegin, YB["on:begin"]];
              for (const GB of QB)
                if (GB && (GB(BB, DB), DB.isMatchIgnored)) return ZB(OB);
              return YB.skip ? uB += OB : (YB.excludeBegin && (uB += OB), PB(), YB.returnBegin || YB.excludeBegin || (uB = OB)), pB(YB, BB), YB.returnBegin ? 0 : OB.length
            }(QB);
            if ("illegal" === QB.type && !DB) {
              const BB = new Error('Illegal lexeme "' + jB + '" for mode "' + (kB.scope || "<unnamed>") + '"');
              throw BB.mode = kB, BB
            }
            if ("end" === QB.type) {
              const BB = NB(QB);
              if (BB !== JO) return BB
            }
            if ("illegal" === QB.type && "" === jB) return uB += "\n", 1;
            if (FB > 1e5 && FB > 3 * QB.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return uB += jB, jB.length
          }
          const SB = nB(BB);
          if (!SB) throw xB(jB.replace("{}", BB)), new Error('Unknown language: "' + BB + '"');
          const UB = DO(SB);
          let fB = "",
            kB = QB || UB;
          const dB = {},
            KB = new MB.__emitter(MB);
          ! function() {
            const BB = [];
            for (let OB = kB; OB !== SB; OB = OB.parent) OB.scope && BB.unshift(OB.scope);
            BB.forEach((BB => KB.openNode(BB)))
          }();
          let uB = "",
            mB = 0,
            IB = 0,
            FB = 0,
            iB = !1;
          try {
            if (SB.__emitTokens) SB.__emitTokens(OB, KB);
            else {
              for (kB.matcher.considerAll();;) {
                FB++, iB ? iB = !1 : kB.matcher.considerAll(), kB.matcher.lastIndex = IB;
                const BB = kB.matcher.exec(OB);
                if (!BB) break;
                const GB = VB(OB.substring(IB, BB.index), BB);
                IB = BB.index + GB
              }
              VB(OB.substring(IB))
            }
            return KB.finalize(), fB = KB.toHTML(), {
              language: BB,
              value: fB,
              relevance: mB,
              illegal: !1,
              _emitter: KB,
              _top: kB
            }
          } catch (LB) {
            if (LB.message && LB.message.includes("Illegal")) return {
              language: BB,
              value: jO(OB),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: LB.message,
                index: IB,
                context: OB.slice(IB - 100, IB + 100),
                mode: LB.mode,
                resultSoFar: fB
              },
              _emitter: KB
            };
            if (oB) return {
              language: BB,
              value: jO(OB),
              illegal: !1,
              relevance: 0,
              errorRaised: LB,
              _emitter: KB,
              _top: kB
            };
            throw LB
          }
        }

        function WB(BB, OB) {
          OB = OB || MB.languages || Object.keys(YB);
          const GB = function(BB) {
              const OB = {
                value: jO(BB),
                illegal: !1,
                relevance: 0,
                _top: yB,
                _emitter: new MB.__emitter(MB)
              };
              return OB._emitter.addText(BB), OB
            }(BB),
            DB = OB.filter(nB).filter(fB).map((OB => RB(OB, BB, !1)));
          DB.unshift(GB);
          const QB = DB.sort(((BB, OB) => {
              if (BB.relevance !== OB.relevance) return OB.relevance - BB.relevance;
              if (BB.language && OB.language) {
                if (nB(BB.language).supersetOf === OB.language) return 1;
                if (nB(OB.language).supersetOf === BB.language) return -1
              }
              return 0
            })),
            [oB, jB] = QB,
            JB = oB;
          return JB.secondBest = jB, JB
        }

        function AB(BB) {
          let OB = null;
          const GB = function(BB) {
            let OB = BB.className + " ";
            OB += BB.parentNode ? BB.parentNode.className : "";
            const GB = MB.languageDetectRe.exec(OB);
            if (GB) {
              const OB = nB(GB[1]);
              return OB || (tB(jB.replace("{}", GB[1])), tB("Falling back to no-highlight mode for this block.", BB)), OB ? GB[1] : "no-highlight"
            }
            return OB.split(/\s+/).find((BB => ZB(BB) || nB(BB)))
          }(BB);
          if (ZB(GB)) return;
          if (kB("before:highlightElement", {
              el: BB,
              language: GB
            }), BB.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", BB);
          if (BB.children.length > 0 && (MB.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(BB)), MB.throwUnescapedHTML)) {
            throw new oO("One of your code blocks includes unescaped HTML.", BB.innerHTML)
          }
          OB = BB;
          const YB = OB.textContent,
            QB = GB ? NB(YB, {
              language: GB,
              ignoreIllegals: !0
            }) : WB(YB);
          BB.innerHTML = QB.value, BB.dataset.highlighted = "yes",
            function(BB, OB, GB) {
              const YB = OB && DB[OB] || GB;
              BB.classList.add("hljs"), BB.classList.add(`language-${YB}`)
            }(BB, GB, QB.language), BB.result = {
              language: QB.language,
              re: QB.relevance,
              relevance: QB.relevance
            }, QB.secondBest && (BB.secondBest = {
              language: QB.secondBest.language,
              relevance: QB.secondBest.relevance
            }), kB("after:highlightElement", {
              el: BB,
              result: QB,
              text: YB
            })
        }
        let VB = !1;

        function SB() {
          if ("loading" === document.readyState) return VB || window.addEventListener("DOMContentLoaded", (function() {
            SB()
          }), !1), void(VB = !0);
          document.querySelectorAll(MB.cssSelector).forEach(AB)
        }

        function nB(BB) {
          return BB = (BB || "").toLowerCase(), YB[BB] || YB[DB[BB]]
        }

        function UB(BB, OB) {
          let {
            languageName: GB
          } = OB;
          "string" === typeof BB && (BB = [BB]), BB.forEach((BB => {
            DB[BB.toLowerCase()] = GB
          }))
        }

        function fB(BB) {
          const OB = nB(BB);
          return OB && !OB.disableAutodetect
        }

        function kB(BB, OB) {
          const GB = BB;
          QB.forEach((function(BB) {
            BB[GB] && BB[GB](OB)
          }))
        }
        Object.assign(BB, {
          highlight: NB,
          highlightAuto: WB,
          highlightAll: SB,
          highlightElement: AB,
          highlightBlock: function(BB) {
            return BO("10.7.0", "highlightBlock will be removed entirely in v12.0"), BO("10.7.0", "Please use highlightElement now."), AB(BB)
          },
          configure: function(BB) {
            MB = yO(MB, BB)
          },
          initHighlighting: () => {
            SB(), BO("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            SB(), BO("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(OB, GB) {
            let DB = null;
            try {
              DB = GB(BB)
            } catch (QB) {
              if (xB("Language definition for '{}' could not be registered.".replace("{}", OB)), !oB) throw QB;
              xB(QB), DB = yB
            }
            DB.name || (DB.name = OB), YB[OB] = DB, DB.rawDefinition = GB.bind(null, BB), DB.aliases && UB(DB.aliases, {
              languageName: OB
            })
          },
          unregisterLanguage: function(BB) {
            delete YB[BB];
            for (const OB of Object.keys(DB)) DB[OB] === BB && delete DB[OB]
          },
          listLanguages: function() {
            return Object.keys(YB)
          },
          getLanguage: nB,
          registerAliases: UB,
          autoDetection: fB,
          inherit: yO,
          addPlugin: function(BB) {
            ! function(BB) {
              BB["before:highlightBlock"] && !BB["before:highlightElement"] && (BB["before:highlightElement"] = OB => {
                BB["before:highlightBlock"](Object.assign({
                  block: OB.el
                }, OB))
              }), BB["after:highlightBlock"] && !BB["after:highlightElement"] && (BB["after:highlightElement"] = OB => {
                BB["after:highlightBlock"](Object.assign({
                  block: OB.el
                }, OB))
              })
            }(BB), QB.push(BB)
          },
          removePlugin: function(BB) {
            const OB = QB.indexOf(BB); - 1 !== OB && QB.splice(OB, 1)
          }
        }), BB.debugMode = function() {
          oB = !1
        }, BB.safeMode = function() {
          oB = !0
        }, BB.versionString = "11.11.1", BB.regex = {
          concat: pB,
          lookahead: PB,
          either: qB,
          optional: lB,
          anyNumberOfTimes: zB
        };
        for (const GB in wB) "object" === typeof wB[GB] && OB(wB[GB]);
        return Object.assign(BB, wB), BB
      },
      PO = MO({});
    PO.newInstance = () => MO({}), BB.exports = PO, PO.HighlightJS = PO, PO.default = PO
  },
  5207: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    const YB = GB(5214)
  },
  5217: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => PB
    });
    const YB = "[A-Za-z$_][0-9A-Za-z$_]*",
      DB = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      QB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      oB = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      jB = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      yB = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      JB = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      MB = [].concat(yB, oB, jB);

    function PB(BB) {
      const OB = BB.regex,
        GB = YB,
        PB = "<>",
        zB = "</>",
        lB = {
          ZP: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (BB, OB) => {
            const GB = BB[0].length + BB.index,
              YB = BB.input[GB];
            if ("<" === YB || "," === YB) return void OB.ignoreMatch();
            let DB;
            ">" === YB && (((BB, OB) => {
              let {
                after: GB
              } = OB;
              const YB = "</" + BB[0].slice(1);
              return -1 !== BB.input.indexOf(YB, GB)
            })(BB, {
              after: GB
            }) || OB.ignoreMatch());
            const QB = BB.input.substring(GB);
            ((DB = QB.match(/^\s*=/)) || (DB = QB.match(/^\s+extends\s+/)) && 0 === DB.index) && OB.ignoreMatch()
          }
        },
        pB = {
          $pattern: YB,
          keyword: DB,
          literal: QB,
          built_in: MB,
          "variable.language": JB
        },
        qB = "[0-9](_?[0-9])*",
        ZB = `\\.(${qB})`,
        NB = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        RB = {
          className: "number",
          variants: [{
            ZP: `(\\b(${NB})((${ZB})|\\.)?|(${ZB}))[eE][+-]?(${qB})\\b`
          }, {
            ZP: `\\b(${NB})\\b((${ZB})\\b|\\.)?|(${ZB})\\b`
          }, {
            ZP: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            ZP: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            ZP: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            ZP: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            ZP: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        WB = {
          className: "subst",
          ZP: "\\$\\{",
          end: "\\}",
          keywords: pB,
          contains: []
        },
        AB = {
          ZP: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "xml"
          }
        },
        VB = {
          ZP: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "css"
          }
        },
        SB = {
          ZP: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "graphql"
          }
        },
        nB = {
          className: "string",
          ZP: "`",
          end: "`",
          contains: [BB.BACKSLASH_ESCAPE, WB]
        },
        UB = {
          className: "comment",
          variants: [BB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              ZP: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                ZP: "@[A-Za-z]+"
              }, {
                className: "type",
                ZP: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                ZP: GB + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                ZP: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), BB.C_BLOCK_COMMENT_MODE, BB.C_LINE_COMMENT_MODE]
        },
        fB = [BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, AB, VB, SB, nB, {
          match: /\$\d+/
        }, RB];
      WB.contains = fB.concat({
        ZP: /\{/,
        end: /\}/,
        keywords: pB,
        contains: ["self"].concat(fB)
      });
      const kB = [].concat(UB, WB.contains),
        dB = kB.concat([{
          ZP: /(\s*)\(/,
          end: /\)/,
          keywords: pB,
          contains: ["self"].concat(kB)
        }]),
        KB = {
          className: "params",
          ZP: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: pB,
          contains: dB
        },
        uB = {
          variants: [{
            match: [/class/, /\s+/, GB, /\s+/, /extends/, /\s+/, OB.concat(GB, "(", OB.concat(/\./, GB), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, GB],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        mB = {
          relevance: 0,
          match: OB.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...oB, ...jB]
          }
        },
        IB = {
          variants: [{
            match: [/function/, /\s+/, GB, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [KB],
          illegal: /%/
        };
      const FB = {
        match: OB.concat(/\b/, (iB = [...yB, "super", "import"].map((BB => `${BB}\\s*\\(`)), OB.concat("(?!", iB.join("|"), ")")), GB, OB.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var iB;
      const LB = {
          ZP: OB.concat(/\./, OB.lookahead(OB.concat(GB, /(?![0-9A-Za-z$_(])/))),
          end: GB,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        gB = {
          match: [/get|set/, /\s+/, GB, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            ZP: /\(\)/
          }, KB]
        },
        rB = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + BB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        XB = {
          match: [/const|var|let/, /\s+/, GB, /\s*/, /=\s*/, /(async\s*)?/, OB.lookahead(rB)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [KB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: pB,
        exports: {
          PARAMS_CONTAINS: dB,
          CLASS_REFERENCE: mB
        },
        illegal: /#(?![$_A-z])/,
        contains: [BB.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          ZP: /^\s*['"]use (strict|asm)['"]/
        }, BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, AB, VB, SB, nB, UB, {
          match: /\$\d+/
        }, RB, mB, {
          scope: "attr",
          match: GB + OB.lookahead(":"),
          relevance: 0
        }, XB, {
          ZP: "(" + BB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [UB, BB.REGEXP_MODE, {
            className: "function",
            ZP: rB,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                ZP: BB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                ZP: /\(\s*\)/,
                skip: !0
              }, {
                ZP: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: pB,
                contains: dB
              }]
            }]
          }, {
            ZP: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              ZP: PB,
              end: zB
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              ZP: lB.ZP,
              "on:begin": lB.isTrulyOpeningTag,
              end: lB.end
            }],
            subLanguage: "xml",
            contains: [{
              ZP: lB.ZP,
              end: lB.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, IB, {
          beginKeywords: "while if switch catch for"
        }, {
          ZP: "\\b(?!function)" + BB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [KB, BB.inherit(BB.TITLE_MODE, {
            ZP: GB,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, LB, {
          match: "\\$" + GB,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [KB]
        }, FB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, uB, gB, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5224: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB
    });
    const YB = "[A-Za-z$_][0-9A-Za-z$_]*",
      DB = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      QB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      oB = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      jB = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      yB = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      JB = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      MB = [].concat(yB, oB, jB);

    function PB(BB) {
      const OB = BB.regex,
        GB = YB,
        PB = "<>",
        zB = "</>",
        lB = {
          ZP: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (BB, OB) => {
            const GB = BB[0].length + BB.index,
              YB = BB.input[GB];
            if ("<" === YB || "," === YB) return void OB.ignoreMatch();
            let DB;
            ">" === YB && (((BB, OB) => {
              let {
                after: GB
              } = OB;
              const YB = "</" + BB[0].slice(1);
              return -1 !== BB.input.indexOf(YB, GB)
            })(BB, {
              after: GB
            }) || OB.ignoreMatch());
            const QB = BB.input.substring(GB);
            ((DB = QB.match(/^\s*=/)) || (DB = QB.match(/^\s+extends\s+/)) && 0 === DB.index) && OB.ignoreMatch()
          }
        },
        pB = {
          $pattern: YB,
          keyword: DB,
          literal: QB,
          built_in: MB,
          "variable.language": JB
        },
        qB = "[0-9](_?[0-9])*",
        ZB = `\\.(${qB})`,
        NB = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        RB = {
          className: "number",
          variants: [{
            ZP: `(\\b(${NB})((${ZB})|\\.)?|(${ZB}))[eE][+-]?(${qB})\\b`
          }, {
            ZP: `\\b(${NB})\\b((${ZB})\\b|\\.)?|(${ZB})\\b`
          }, {
            ZP: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            ZP: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            ZP: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            ZP: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            ZP: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        WB = {
          className: "subst",
          ZP: "\\$\\{",
          end: "\\}",
          keywords: pB,
          contains: []
        },
        AB = {
          ZP: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "xml"
          }
        },
        VB = {
          ZP: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "css"
          }
        },
        SB = {
          ZP: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [BB.BACKSLASH_ESCAPE, WB],
            subLanguage: "graphql"
          }
        },
        nB = {
          className: "string",
          ZP: "`",
          end: "`",
          contains: [BB.BACKSLASH_ESCAPE, WB]
        },
        UB = {
          className: "comment",
          variants: [BB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              ZP: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                ZP: "@[A-Za-z]+"
              }, {
                className: "type",
                ZP: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                ZP: GB + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                ZP: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), BB.C_BLOCK_COMMENT_MODE, BB.C_LINE_COMMENT_MODE]
        },
        fB = [BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, AB, VB, SB, nB, {
          match: /\$\d+/
        }, RB];
      WB.contains = fB.concat({
        ZP: /\{/,
        end: /\}/,
        keywords: pB,
        contains: ["self"].concat(fB)
      });
      const kB = [].concat(UB, WB.contains),
        dB = kB.concat([{
          ZP: /(\s*)\(/,
          end: /\)/,
          keywords: pB,
          contains: ["self"].concat(kB)
        }]),
        KB = {
          className: "params",
          ZP: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: pB,
          contains: dB
        },
        uB = {
          variants: [{
            match: [/class/, /\s+/, GB, /\s+/, /extends/, /\s+/, OB.concat(GB, "(", OB.concat(/\./, GB), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, GB],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        mB = {
          relevance: 0,
          match: OB.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...oB, ...jB]
          }
        },
        IB = {
          variants: [{
            match: [/function/, /\s+/, GB, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [KB],
          illegal: /%/
        };
      const FB = {
        match: OB.concat(/\b/, (iB = [...yB, "super", "import"].map((BB => `${BB}\\s*\\(`)), OB.concat("(?!", iB.join("|"), ")")), GB, OB.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var iB;
      const LB = {
          ZP: OB.concat(/\./, OB.lookahead(OB.concat(GB, /(?![0-9A-Za-z$_(])/))),
          end: GB,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        gB = {
          match: [/get|set/, /\s+/, GB, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            ZP: /\(\)/
          }, KB]
        },
        rB = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + BB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        XB = {
          match: [/const|var|let/, /\s+/, GB, /\s*/, /=\s*/, /(async\s*)?/, OB.lookahead(rB)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [KB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: pB,
        exports: {
          PARAMS_CONTAINS: dB,
          CLASS_REFERENCE: mB
        },
        illegal: /#(?![$_A-z])/,
        contains: [BB.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          ZP: /^\s*['"]use (strict|asm)['"]/
        }, BB.APOS_STRING_MODE, BB.QUOTE_STRING_MODE, AB, VB, SB, nB, UB, {
          match: /\$\d+/
        }, RB, mB, {
          scope: "attr",
          match: GB + OB.lookahead(":"),
          relevance: 0
        }, XB, {
          ZP: "(" + BB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [UB, BB.REGEXP_MODE, {
            className: "function",
            ZP: rB,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                ZP: BB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                ZP: /\(\s*\)/,
                skip: !0
              }, {
                ZP: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: pB,
                contains: dB
              }]
            }]
          }, {
            ZP: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              ZP: PB,
              end: zB
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              ZP: lB.ZP,
              "on:begin": lB.isTrulyOpeningTag,
              end: lB.end
            }],
            subLanguage: "xml",
            contains: [{
              ZP: lB.ZP,
              end: lB.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, IB, {
          beginKeywords: "while if switch catch for"
        }, {
          ZP: "\\b(?!function)" + BB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [KB, BB.inherit(BB.TITLE_MODE, {
            ZP: GB,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, LB, {
          match: "\\$" + GB,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [KB]
        }, FB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, uB, gB, {
          match: /\$[(.]/
        }]
      }
    }

    function zB(BB) {
      const OB = BB.regex,
        GB = PB(BB),
        oB = YB,
        jB = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        yB = {
          ZP: [/namespace/, /\s+/, BB.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        zB = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: jB
          },
          contains: [GB.exports.CLASS_REFERENCE]
        },
        lB = {
          $pattern: YB,
          keyword: DB.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: QB,
          built_in: MB.concat(jB),
          "variable.language": JB
        },
        pB = {
          className: "meta",
          ZP: "@" + oB
        },
        qB = (BB, OB, GB) => {
          const YB = BB.contains.findIndex((BB => BB.label === OB));
          if (-1 === YB) throw new Error("can not find mode to replace");
          BB.contains.splice(YB, 1, GB)
        };
      Object.assign(GB.keywords, lB), GB.exports.PARAMS_CONTAINS.push(pB);
      const ZB = GB.contains.find((BB => "attr" === BB.scope)),
        NB = Object.assign({}, ZB, {
          match: OB.concat(oB, OB.lookahead(/\s*\?:/))
        });
      GB.exports.PARAMS_CONTAINS.push([GB.exports.CLASS_REFERENCE, ZB, NB]), GB.contains = GB.contains.concat([pB, yB, zB, NB]), qB(GB, "shebang", BB.SHEBANG()), qB(GB, "use_strict", {
        className: "meta",
        relevance: 10,
        ZP: /^\s*['"]use strict['"]/
      });
      return GB.contains.find((BB => "func.def" === BB.label)).relevance = 0, Object.assign(GB, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), GB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);