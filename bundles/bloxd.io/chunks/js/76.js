export const id = 76;
export const ids = [76];
export const modules = {
  4490: uu => {
    function Ru(uu) {
      return uu instanceof Map ? uu.clear = uu.delete = uu.set = function() {
        throw new Error("map is read-only")
      } : uu instanceof Set && (uu.add = uu.clear = uu.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(uu), Object.getOwnPropertyNames(uu).forEach((yu => {
        const Eu = uu[yu],
          Ku = typeof Eu;
        "object" !== Ku && "function" !== Ku || Object.isFrozen(Eu) || Ru(Eu)
      })), uu
    }
    class yu {
      constructor(uu) {
        void 0 === uu.data && (uu.data = {}), this.data = uu.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Eu(uu) {
      return uu.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Ku(uu) {
      const Ru = Object.create(null);
      for (const Qu in uu) Ru[Qu] = uu[Qu];
      for (var yu = arguments.length, Eu = new Array(yu > 1 ? yu - 1 : 0), Ku = 1; Ku < yu; Ku++) Eu[Ku - 1] = arguments[Ku];
      return Eu.forEach((function(uu) {
        for (const yu in uu) Ru[yu] = uu[yu]
      })), Ru
    }
    const Qu = uu => !!uu.scope;
    class mu {
      constructor(uu, Ru) {
        this.buffer = "", this.classPrefix = Ru.classPrefix, uu.walk(this)
      }
      addText(uu) {
        this.buffer += Eu(uu)
      }
      openNode(uu) {
        if (!Qu(uu)) return;
        const Ru = ((uu, Ru) => {
          let {
            prefix: yu
          } = Ru;
          if (uu.startsWith("language:")) return uu.replace("language:", "language-");
          if (uu.includes(".")) {
            const Ru = uu.split(".");
            return [`${yu}${Ru.shift()}`, ...Ru.map(((uu, Ru) => `${uu}${"_".repeat(Ru+1)}`))].join(" ")
          }
          return `${yu}${uu}`
        })(uu.scope, {
          prefix: this.classPrefix
        });
        this.span(Ru)
      }
      closeNode(uu) {
        Qu(uu) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(uu) {
        this.buffer += `<span class="${uu}">`
      }
    }
    const Ju = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Ru = {
        children: []
      };
      return Object.assign(Ru, uu), Ru
    };
    class Nu {
      constructor() {
        this.uH = Ju(), this.stack = [this.uH]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.uH
      }
      add(uu) {
        this.top.children.push(uu)
      }
      openNode(uu) {
        const Ru = Ju({
          scope: uu
        });
        this.add(Ru), this.stack.push(Ru)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.uH, null, 4)
      }
      walk(uu) {
        return this.constructor._walk(uu, this.uH)
      }
      static _walk(uu, Ru) {
        return "string" === typeof Ru ? uu.addText(Ru) : Ru.children && (uu.openNode(Ru), Ru.children.forEach((Ru => this._walk(uu, Ru))), uu.closeNode(Ru)), uu
      }
      static _collapse(uu) {
        "string" !== typeof uu && uu.children && (uu.children.every((uu => "string" === typeof uu)) ? uu.children = [uu.children.join("")] : uu.children.forEach((uu => {
          Nu._collapse(uu)
        })))
      }
    }
    class Xu extends Nu {
      constructor(uu) {
        super(), this.options = uu
      }
      addText(uu) {
        "" !== uu && this.add(uu)
      }
      startScope(uu) {
        this.openNode(uu)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(uu, Ru) {
        const yu = uu.root;
        Ru && (yu.scope = `language:${Ru}`), this.add(yu)
      }
      toHTML() {
        return new mu(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Vu(uu) {
      return uu ? "string" === typeof uu ? uu : uu.source : null
    }

    function ru(uu) {
      return Su("(?=", uu, ")")
    }

    function Bu(uu) {
      return Su("(?:", uu, ")*")
    }

    function xu(uu) {
      return Su("(?:", uu, ")?")
    }

    function Su() {
      for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
      return Ru.map((uu => Vu(uu))).join("")
    }

    function pu() {
      for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
      const Eu = function(uu) {
        const Ru = uu[uu.length - 1];
        return "object" === typeof Ru && Ru.constructor === Object ? (uu.splice(uu.length - 1, 1), Ru) : {}
      }(Ru);
      return "(" + (Eu.capture ? "" : "?:") + Ru.map((uu => Vu(uu))).join("|") + ")"
    }

    function Tu(uu) {
      return new RegExp(uu.toString() + "|").exec("").length - 1
    }
    const Wu = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function ju(uu, Ru) {
      let {
        joinWith: yu
      } = Ru, Eu = 0;
      return uu.map((uu => {
        Eu += 1;
        const Ru = Eu;
        let yu = Vu(uu),
          Ku = "";
        for (; yu.length > 0;) {
          const uu = Wu.exec(yu);
          if (!uu) {
            Ku += yu;
            break
          }
          Ku += yu.substring(0, uu.index), yu = yu.substring(uu.index + uu[0].length), "\\" === uu[0][0] && uu[1] ? Ku += "\\" + String(Number(uu[1]) + Ru) : (Ku += uu[0], "(" === uu[0] && Eu++)
        }
        return Ku
      })).map((uu => `(${uu})`)).join(yu)
    }
    const Hu = "[a-zA-Z]\\w*",
      du = "[a-zA-Z_]\\w*",
      bu = "\\b\\d+(\\.\\d+)?",
      Cu = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      ku = "\\b(0b[01]+)",
      eu = {
        Kx: "\\\\[\\s\\S]",
        relevance: 0
      },
      Au = {
        scope: "string",
        Kx: "'",
        end: "'",
        illegal: "\\n",
        contains: [eu]
      },
      Du = {
        scope: "string",
        Kx: '"',
        end: '"',
        illegal: "\\n",
        contains: [eu]
      },
      Mu = function(uu, Ru) {
        const yu = Ku({
          scope: "comment",
          Kx: uu,
          end: Ru,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        yu.contains.push({
          scope: "doctag",
          Kx: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Eu = pu("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return yu.contains.push({
          Kx: Su(/[ ]+/, "(", Eu, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), yu
      },
      Iu = Mu("//", "$"),
      Gu = Mu("/\\*", "\\*/"),
      Uu = Mu("#", "$"),
      nu = {
        scope: "number",
        Kx: bu,
        relevance: 0
      },
      su = {
        scope: "number",
        Kx: Cu,
        relevance: 0
      },
      tu = {
        scope: "number",
        Kx: ku,
        relevance: 0
      },
      lu = {
        scope: "regexp",
        Kx: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [eu, {
          Kx: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [eu]
        }]
      },
      gu = {
        scope: "title",
        Kx: Hu,
        relevance: 0
      },
      cu = {
        scope: "title",
        Kx: du,
        relevance: 0
      },
      Lu = {
        Kx: "\\.\\s*" + du,
        relevance: 0
      };
    var zu = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Au,
      BACKSLASH_ESCAPE: eu,
      BINARY_NUMBER_MODE: tu,
      BINARY_NUMBER_RE: ku,
      COMMENT: Mu,
      C_BLOCK_COMMENT_MODE: Gu,
      C_LINE_COMMENT_MODE: Iu,
      C_NUMBER_MODE: su,
      C_NUMBER_RE: Cu,
      END_SAME_AS_BEGIN: function(uu) {
        return Object.assign(uu, {
          "on:begin": (uu, Ru) => {
            Ru.data._beginMatch = uu[1]
          },
          "on:end": (uu, Ru) => {
            Ru.data._beginMatch !== uu[1] && Ru.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Uu,
      IDENT_RE: Hu,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Lu,
      NUMBER_MODE: nu,
      NUMBER_RE: bu,
      PHRASAL_WORDS_MODE: {
        Kx: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Du,
      REGEXP_MODE: lu,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Ru = /^#![ ]*\//;
        return uu.binary && (uu.Kx = Su(Ru, /.*\b/, uu.binary, /\b.*/)), Ku({
          scope: "meta",
          Kx: Ru,
          end: /$/,
          relevance: 0,
          "on:begin": (uu, Ru) => {
            0 !== uu.index && Ru.ignoreMatch()
          }
        }, uu)
      },
      TITLE_MODE: gu,
      UNDERSCORE_IDENT_RE: du,
      UNDERSCORE_TITLE_MODE: cu
    });

    function Fu(uu, Ru) {
      "." === uu.input[uu.index - 1] && Ru.ignoreMatch()
    }

    function wu(uu, Ru) {
      void 0 !== uu.className && (uu.scope = uu.className, delete uu.className)
    }

    function Zu(uu, Ru) {
      Ru && uu.beginKeywords && (uu.Kx = "\\b(" + uu.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", uu.__beforeBegin = Fu, uu.keywords = uu.keywords || uu.beginKeywords, delete uu.beginKeywords, void 0 === uu.relevance && (uu.relevance = 0))
    }

    function hu(uu, Ru) {
      Array.isArray(uu.illegal) && (uu.illegal = pu(...uu.illegal))
    }

    function Pu(uu, Ru) {
      if (uu.match) {
        if (uu.Kx || uu.end) throw new Error("begin & end are not supported with match");
        uu.Kx = uu.match, delete uu.match
      }
    }

    function iu(uu, Ru) {
      void 0 === uu.relevance && (uu.relevance = 1)
    }
    const Yu = (uu, Ru) => {
        if (!uu.beforeMatch) return;
        if (uu.starts) throw new Error("beforeMatch cannot be used with starts");
        const yu = Object.assign({}, uu);
        Object.keys(uu).forEach((Ru => {
          delete uu[Ru]
        })), uu.keywords = yu.keywords, uu.Kx = Su(yu.beforeMatch, ru(yu.Kx)), uu.starts = {
          relevance: 0,
          contains: [Object.assign(yu, {
            endsParent: !0
          })]
        }, uu.relevance = 0, delete yu.beforeMatch
      },
      ou = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function qu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Eu = Object.create(null);
      return "string" === typeof uu ? Ku(yu, uu.split(" ")) : Array.isArray(uu) ? Ku(yu, uu) : Object.keys(uu).forEach((function(yu) {
        Object.assign(Eu, qu(uu[yu], Ru, yu))
      })), Eu;

      function Ku(uu, yu) {
        Ru && (yu = yu.map((uu => uu.toLowerCase()))), yu.forEach((function(Ru) {
          const yu = Ru.split("|");
          Eu[yu[0]] = [uu, Ou(yu[0], yu[1])]
        }))
      }
    }

    function Ou(uu, Ru) {
      return Ru ? Number(Ru) : function(uu) {
        return ou.includes(uu.toLowerCase())
      }(uu) ? 0 : 1
    }
    const vu = {},
      au = uu => {
        console.error(uu)
      },
      fu = function(uu) {
        for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
        console.log(`WARN: ${uu}`, ...yu)
      },
      uR = (uu, Ru) => {
        vu[`${uu}/${Ru}`] || (console.log(`Deprecated as of ${uu}. ${Ru}`), vu[`${uu}/${Ru}`] = !0)
      },
      RR = new Error;

    function yR(uu, Ru, yu) {
      let {
        key: Eu
      } = yu, Ku = 0;
      const Qu = uu[Eu],
        mu = {},
        Ju = {};
      for (let Nu = 1; Nu <= Ru.length; Nu++) Ju[Nu + Ku] = Qu[Nu], mu[Nu + Ku] = !0, Ku += Tu(Ru[Nu - 1]);
      uu[Eu] = Ju, uu[Eu]._emit = mu, uu[Eu]._multi = !0
    }

    function ER(uu) {
      ! function(uu) {
        uu.scope && "object" === typeof uu.scope && null !== uu.scope && (uu.beginScope = uu.scope, delete uu.scope)
      }(uu), "string" === typeof uu.beginScope && (uu.beginScope = {
          _wrap: uu.beginScope
        }), "string" === typeof uu.endScope && (uu.endScope = {
          _wrap: uu.endScope
        }),
        function(uu) {
          if (Array.isArray(uu.Kx)) {
            if (uu.skip || uu.excludeBegin || uu.returnBegin) throw au("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), RR;
            if ("object" !== typeof uu.beginScope || null === uu.beginScope) throw au("beginScope must be object"), RR;
            yR(uu, uu.Kx, {
              key: "beginScope"
            }), uu.Kx = ju(uu.Kx, {
              joinWith: ""
            })
          }
        }(uu),
        function(uu) {
          if (Array.isArray(uu.end)) {
            if (uu.skip || uu.excludeEnd || uu.returnEnd) throw au("skip, excludeEnd, returnEnd not compatible with endScope: {}"), RR;
            if ("object" !== typeof uu.endScope || null === uu.endScope) throw au("endScope must be object"), RR;
            yR(uu, uu.end, {
              key: "endScope"
            }), uu.end = ju(uu.end, {
              joinWith: ""
            })
          }
        }(uu)
    }

    function KR(uu) {
      function Ru(Ru, yu) {
        return new RegExp(Vu(Ru), "m" + (uu.case_insensitive ? "i" : "") + (uu.unicodeRegex ? "u" : "") + (yu ? "g" : ""))
      }
      class yu {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(uu, Ru) {
          Ru.position = this.position++, this.matchIndexes[this.matchAt] = Ru, this.regexes.push([Ru, uu]), this.matchAt += Tu(uu) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const uu = this.regexes.map((uu => uu[1]));
          this.matcherRe = Ru(ju(uu, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(uu) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Ru = this.matcherRe.exec(uu);
          if (!Ru) return null;
          const yu = Ru.findIndex(((uu, Ru) => Ru > 0 && void 0 !== uu)),
            Eu = this.matchIndexes[yu];
          return Ru.splice(0, yu), Object.assign(Ru, Eu)
        }
      }
      class Eu {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(uu) {
          if (this.multiRegexes[uu]) return this.multiRegexes[uu];
          const Ru = new yu;
          return this.rules.slice(uu).forEach((uu => {
            let [yu, Eu] = uu;
            return Ru.addRule(yu, Eu)
          })), Ru.compile(), this.multiRegexes[uu] = Ru, Ru
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(uu, Ru) {
          this.rules.push([uu, Ru]), "Kx" === Ru.type && this.count++
        }
        exec(uu) {
          const Ru = this.getMatcher(this.regexIndex);
          Ru.lastIndex = this.lastIndex;
          let yu = Ru.exec(uu);
          if (this.resumingScanAtSamePosition())
            if (yu && yu.index === this.lastIndex);
            else {
              const Ru = this.getMatcher(0);
              Ru.lastIndex = this.lastIndex + 1, yu = Ru.exec(uu)
            } return yu && (this.regexIndex += yu.position + 1, this.regexIndex === this.count && this.considerAll()), yu
        }
      }
      if (uu.compilerExtensions || (uu.compilerExtensions = []), uu.contains && uu.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return uu.classNameAliases = Ku(uu.classNameAliases || {}),
        function yu(Qu, mu) {
          const Ju = Qu;
          if (Qu.isCompiled) return Ju;
          [wu, Pu, ER, Yu].forEach((uu => uu(Qu, mu))), uu.compilerExtensions.forEach((uu => uu(Qu, mu))), Qu.__beforeBegin = null, [Zu, hu, iu].forEach((uu => uu(Qu, mu))), Qu.isCompiled = !0;
          let Nu = null;
          return "object" === typeof Qu.keywords && Qu.keywords.$pattern && (Qu.keywords = Object.assign({}, Qu.keywords), Nu = Qu.keywords.$pattern, delete Qu.keywords.$pattern), Nu = Nu || /\w+/, Qu.keywords && (Qu.keywords = qu(Qu.keywords, uu.case_insensitive)), Ju.keywordPatternRe = Ru(Nu, !0), mu && (Qu.Kx || (Qu.Kx = /\B|\b/), Ju.beginRe = Ru(Ju.Kx), Qu.end || Qu.endsWithParent || (Qu.end = /\B|\b/), Qu.end && (Ju.endRe = Ru(Ju.end)), Ju.terminatorEnd = Vu(Ju.end) || "", Qu.endsWithParent && mu.terminatorEnd && (Ju.terminatorEnd += (Qu.end ? "|" : "") + mu.terminatorEnd)), Qu.illegal && (Ju.illegalRe = Ru(Qu.illegal)), Qu.contains || (Qu.contains = []), Qu.contains = [].concat(...Qu.contains.map((function(uu) {
            return function(uu) {
              uu.variants && !uu.cachedVariants && (uu.cachedVariants = uu.variants.map((function(Ru) {
                return Ku(uu, {
                  variants: null
                }, Ru)
              })));
              if (uu.cachedVariants) return uu.cachedVariants;
              if (QR(uu)) return Ku(uu, {
                starts: uu.starts ? Ku(uu.starts) : null
              });
              if (Object.isFrozen(uu)) return Ku(uu);
              return uu
            }("self" === uu ? Qu : uu)
          }))), Qu.contains.forEach((function(uu) {
            yu(uu, Ju)
          })), Qu.starts && yu(Qu.starts, mu), Ju.matcher = function(uu) {
            const Ru = new Eu;
            return uu.contains.forEach((uu => Ru.addRule(uu.Kx, {
              rule: uu,
              type: "Kx"
            }))), uu.terminatorEnd && Ru.addRule(uu.terminatorEnd, {
              type: "end"
            }), uu.illegal && Ru.addRule(uu.illegal, {
              type: "illegal"
            }), Ru
          }(Ju), Ju
        }(uu)
    }

    function QR(uu) {
      return !!uu && (uu.endsWithParent || QR(uu.starts))
    }
    class mR extends Error {
      constructor(uu, Ru) {
        super(uu), this.name = "HTMLInjectionError", this.html = Ru
      }
    }
    const JR = Eu,
      NR = Ku,
      XR = Symbol("nomatch"),
      VR = function(uu) {
        const Eu = Object.create(null),
          Ku = Object.create(null),
          Qu = [];
        let mu = !0;
        const Ju = "Could not find the language '{}', did you forget to load/include a language module?",
          Nu = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Vu = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Xu
        };

        function Tu(uu) {
          return Vu.noHighlightRe.test(uu)
        }

        function Wu(uu, Ru, yu) {
          let Eu = "",
            Ku = "";
          "object" === typeof Ru ? (Eu = uu, yu = Ru.ignoreIllegals, Ku = Ru.language) : (uR("10.7.0", "highlight(lang, code, ...args) has been deprecated."), uR("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Ku = uu, Eu = Ru), void 0 === yu && (yu = !0);
          const Qu = {
            code: Eu,
            language: Ku
          };
          Du("before:highlight", Qu);
          const mu = Qu.result ? Qu.result : ju(Qu.language, Qu.code, yu);
          return mu.code = Qu.code, Du("after:highlight", mu), mu
        }

        function ju(uu, Ru, Ku, Qu) {
          const Nu = Object.create(null);

          function Xu() {
            if (!Du.keywords) return void Iu.addText(Gu);
            let uu = 0;
            Du.keywordPatternRe.lastIndex = 0;
            let Ru = Du.keywordPatternRe.exec(Gu),
              yu = "";
            for (; Ru;) {
              yu += Gu.substring(uu, Ru.index);
              const Ku = Cu.case_insensitive ? Ru[0].toLowerCase() : Ru[0],
                Qu = (Eu = Ku, Du.keywords[Eu]);
              if (Qu) {
                const [uu, Eu] = Qu;
                if (Iu.addText(yu), yu = "", Nu[Ku] = (Nu[Ku] || 0) + 1, Nu[Ku] <= 7 && (Uu += Eu), uu.startsWith("_")) yu += Ru[0];
                else {
                  const yu = Cu.classNameAliases[uu] || uu;
                  Bu(Ru[0], yu)
                }
              } else yu += Ru[0];
              uu = Du.keywordPatternRe.lastIndex, Ru = Du.keywordPatternRe.exec(Gu)
            }
            var Eu;
            yu += Gu.substring(uu), Iu.addText(yu)
          }

          function ru() {
            null != Du.subLanguage ? function() {
              if ("" === Gu) return;
              let uu = null;
              if ("string" === typeof Du.subLanguage) {
                if (!Eu[Du.subLanguage]) return void Iu.addText(Gu);
                uu = ju(Du.subLanguage, Gu, !0, Mu[Du.subLanguage]), Mu[Du.subLanguage] = uu._top
              } else uu = Hu(Gu, Du.subLanguage.length ? Du.subLanguage : null);
              Du.relevance > 0 && (Uu += uu.relevance), Iu.__addSublanguage(uu._emitter, uu.language)
            }() : Xu(), Gu = ""
          }

          function Bu(uu, Ru) {
            "" !== uu && (Iu.startScope(Ru), Iu.addText(uu), Iu.endScope())
          }

          function xu(uu, Ru) {
            let yu = 1;
            const Eu = Ru.length - 1;
            for (; yu <= Eu;) {
              if (!uu._emit[yu]) {
                yu++;
                continue
              }
              const Eu = Cu.classNameAliases[uu[yu]] || uu[yu],
                Ku = Ru[yu];
              Eu ? Bu(Ku, Eu) : (Gu = Ku, Xu(), Gu = ""), yu++
            }
          }

          function Su(uu, Ru) {
            return uu.scope && "string" === typeof uu.scope && Iu.openNode(Cu.classNameAliases[uu.scope] || uu.scope), uu.beginScope && (uu.beginScope._wrap ? (Bu(Gu, Cu.classNameAliases[uu.beginScope._wrap] || uu.beginScope._wrap), Gu = "") : uu.beginScope._multi && (xu(uu.beginScope, Ru), Gu = "")), Du = Object.create(uu, {
              parent: {
                value: Du
              }
            }), Du
          }

          function pu(uu, Ru, Eu) {
            let Ku = function(uu, Ru) {
              const yu = uu && uu.exec(Ru);
              return yu && 0 === yu.index
            }(uu.endRe, Eu);
            if (Ku) {
              if (uu["on:end"]) {
                const Eu = new yu(uu);
                uu["on:end"](Ru, Eu), Eu.isMatchIgnored && (Ku = !1)
              }
              if (Ku) {
                for (; uu.endsParent && uu.parent;) uu = uu.parent;
                return uu
              }
            }
            if (uu.endsWithParent) return pu(uu.parent, Ru, Eu)
          }

          function Tu(uu) {
            return 0 === Du.matcher.regexIndex ? (Gu += uu[0], 1) : (tu = !0, 0)
          }

          function Wu(uu) {
            const yu = uu[0],
              Eu = Ru.substring(uu.index),
              Ku = pu(Du, uu, Eu);
            if (!Ku) return XR;
            const Qu = Du;
            Du.endScope && Du.endScope._wrap ? (ru(), Bu(yu, Du.endScope._wrap)) : Du.endScope && Du.endScope._multi ? (ru(), xu(Du.endScope, uu)) : Qu.skip ? Gu += yu : (Qu.returnEnd || Qu.excludeEnd || (Gu += yu), ru(), Qu.excludeEnd && (Gu = yu));
            do {
              Du.scope && Iu.closeNode(), Du.skip || Du.subLanguage || (Uu += Du.relevance), Du = Du.parent
            } while (Du !== Ku.parent);
            return Ku.starts && Su(Ku.starts, uu), Qu.returnEnd ? 0 : yu.length
          }
          let du = {};

          function bu(Eu, Qu) {
            const Ju = Qu && Qu[0];
            if (Gu += Eu, null == Ju) return ru(), 0;
            if ("Kx" === du.type && "end" === Qu.type && du.index === Qu.index && "" === Ju) {
              if (Gu += Ru.slice(Qu.index, Qu.index + 1), !mu) {
                const Ru = new Error(`0 width match regex (${uu})`);
                throw Ru.languageName = uu, Ru.badRule = du.rule, Ru
              }
              return 1
            }
            if (du = Qu, "Kx" === Qu.type) return function(uu) {
              const Ru = uu[0],
                Eu = uu.rule,
                Ku = new yu(Eu),
                Qu = [Eu.__beforeBegin, Eu["on:begin"]];
              for (const yu of Qu)
                if (yu && (yu(uu, Ku), Ku.isMatchIgnored)) return Tu(Ru);
              return Eu.skip ? Gu += Ru : (Eu.excludeBegin && (Gu += Ru), ru(), Eu.returnBegin || Eu.excludeBegin || (Gu = Ru)), Su(Eu, uu), Eu.returnBegin ? 0 : Ru.length
            }(Qu);
            if ("illegal" === Qu.type && !Ku) {
              const uu = new Error('Illegal lexeme "' + Ju + '" for mode "' + (Du.scope || "<unnamed>") + '"');
              throw uu.mode = Du, uu
            }
            if ("end" === Qu.type) {
              const uu = Wu(Qu);
              if (uu !== XR) return uu
            }
            if ("illegal" === Qu.type && "" === Ju) return Gu += "\n", 1;
            if (su > 1e5 && su > 3 * Qu.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Gu += Ju, Ju.length
          }
          const Cu = ku(uu);
          if (!Cu) throw au(Ju.replace("{}", uu)), new Error('Unknown language: "' + uu + '"');
          const eu = KR(Cu);
          let Au = "",
            Du = Qu || eu;
          const Mu = {},
            Iu = new Vu.__emitter(Vu);
          ! function() {
            const uu = [];
            for (let Ru = Du; Ru !== Cu; Ru = Ru.parent) Ru.scope && uu.unshift(Ru.scope);
            uu.forEach((uu => Iu.openNode(uu)))
          }();
          let Gu = "",
            Uu = 0,
            nu = 0,
            su = 0,
            tu = !1;
          try {
            if (Cu.__emitTokens) Cu.__emitTokens(Ru, Iu);
            else {
              for (Du.matcher.considerAll();;) {
                su++, tu ? tu = !1 : Du.matcher.considerAll(), Du.matcher.lastIndex = nu;
                const uu = Du.matcher.exec(Ru);
                if (!uu) break;
                const yu = bu(Ru.substring(nu, uu.index), uu);
                nu = uu.index + yu
              }
              bu(Ru.substring(nu))
            }
            return Iu.finalize(), Au = Iu.toHTML(), {
              language: uu,
              value: Au,
              relevance: Uu,
              illegal: !1,
              _emitter: Iu,
              _top: Du
            }
          } catch (lu) {
            if (lu.message && lu.message.includes("Illegal")) return {
              language: uu,
              value: JR(Ru),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: lu.message,
                index: nu,
                context: Ru.slice(nu - 100, nu + 100),
                mode: lu.mode,
                resultSoFar: Au
              },
              _emitter: Iu
            };
            if (mu) return {
              language: uu,
              value: JR(Ru),
              illegal: !1,
              relevance: 0,
              errorRaised: lu,
              _emitter: Iu,
              _top: Du
            };
            throw lu
          }
        }

        function Hu(uu, Ru) {
          Ru = Ru || Vu.languages || Object.keys(Eu);
          const yu = function(uu) {
              const Ru = {
                value: JR(uu),
                illegal: !1,
                relevance: 0,
                _top: Nu,
                _emitter: new Vu.__emitter(Vu)
              };
              return Ru._emitter.addText(uu), Ru
            }(uu),
            Ku = Ru.filter(ku).filter(Au).map((Ru => ju(Ru, uu, !1)));
          Ku.unshift(yu);
          const Qu = Ku.sort(((uu, Ru) => {
              if (uu.relevance !== Ru.relevance) return Ru.relevance - uu.relevance;
              if (uu.language && Ru.language) {
                if (ku(uu.language).supersetOf === Ru.language) return 1;
                if (ku(Ru.language).supersetOf === uu.language) return -1
              }
              return 0
            })),
            [mu, Ju] = Qu,
            Xu = mu;
          return Xu.secondBest = Ju, Xu
        }

        function du(uu) {
          let Ru = null;
          const yu = function(uu) {
            let Ru = uu.className + " ";
            Ru += uu.parentNode ? uu.parentNode.className : "";
            const yu = Vu.languageDetectRe.exec(Ru);
            if (yu) {
              const Ru = ku(yu[1]);
              return Ru || (fu(Ju.replace("{}", yu[1])), fu("Falling back to no-highlight mode for this block.", uu)), Ru ? yu[1] : "no-highlight"
            }
            return Ru.split(/\s+/).find((uu => Tu(uu) || ku(uu)))
          }(uu);
          if (Tu(yu)) return;
          if (Du("before:highlightElement", {
              el: uu,
              language: yu
            }), uu.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", uu);
          if (uu.children.length > 0 && (Vu.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(uu)), Vu.throwUnescapedHTML)) {
            throw new mR("One of your code blocks includes unescaped HTML.", uu.innerHTML)
          }
          Ru = uu;
          const Eu = Ru.textContent,
            Qu = yu ? Wu(Eu, {
              language: yu,
              ignoreIllegals: !0
            }) : Hu(Eu);
          uu.innerHTML = Qu.value, uu.dataset.highlighted = "yes",
            function(uu, Ru, yu) {
              const Eu = Ru && Ku[Ru] || yu;
              uu.classList.add("hljs"), uu.classList.add(`language-${Eu}`)
            }(uu, yu, Qu.language), uu.result = {
              language: Qu.language,
              re: Qu.relevance,
              relevance: Qu.relevance
            }, Qu.secondBest && (uu.secondBest = {
              language: Qu.secondBest.language,
              relevance: Qu.secondBest.relevance
            }), Du("after:highlightElement", {
              el: uu,
              result: Qu,
              text: Eu
            })
        }
        let bu = !1;

        function Cu() {
          if ("loading" === document.readyState) return bu || window.addEventListener("DOMContentLoaded", (function() {
            Cu()
          }), !1), void(bu = !0);
          document.querySelectorAll(Vu.cssSelector).forEach(du)
        }

        function ku(uu) {
          return uu = (uu || "").toLowerCase(), Eu[uu] || Eu[Ku[uu]]
        }

        function eu(uu, Ru) {
          let {
            languageName: yu
          } = Ru;
          "string" === typeof uu && (uu = [uu]), uu.forEach((uu => {
            Ku[uu.toLowerCase()] = yu
          }))
        }

        function Au(uu) {
          const Ru = ku(uu);
          return Ru && !Ru.disableAutodetect
        }

        function Du(uu, Ru) {
          const yu = uu;
          Qu.forEach((function(uu) {
            uu[yu] && uu[yu](Ru)
          }))
        }
        Object.assign(uu, {
          highlight: Wu,
          highlightAuto: Hu,
          highlightAll: Cu,
          highlightElement: du,
          highlightBlock: function(uu) {
            return uR("10.7.0", "highlightBlock will be removed entirely in v12.0"), uR("10.7.0", "Please use highlightElement now."), du(uu)
          },
          configure: function(uu) {
            Vu = NR(Vu, uu)
          },
          initHighlighting: () => {
            Cu(), uR("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            Cu(), uR("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Ru, yu) {
            let Ku = null;
            try {
              Ku = yu(uu)
            } catch (Qu) {
              if (au("Language definition for '{}' could not be registered.".replace("{}", Ru)), !mu) throw Qu;
              au(Qu), Ku = Nu
            }
            Ku.name || (Ku.name = Ru), Eu[Ru] = Ku, Ku.rawDefinition = yu.bind(null, uu), Ku.aliases && eu(Ku.aliases, {
              languageName: Ru
            })
          },
          unregisterLanguage: function(uu) {
            delete Eu[uu];
            for (const Ru of Object.keys(Ku)) Ku[Ru] === uu && delete Ku[Ru]
          },
          listLanguages: function() {
            return Object.keys(Eu)
          },
          getLanguage: ku,
          registerAliases: eu,
          autoDetection: Au,
          inherit: NR,
          addPlugin: function(uu) {
            ! function(uu) {
              uu["before:highlightBlock"] && !uu["before:highlightElement"] && (uu["before:highlightElement"] = Ru => {
                uu["before:highlightBlock"](Object.assign({
                  block: Ru.el
                }, Ru))
              }), uu["after:highlightBlock"] && !uu["after:highlightElement"] && (uu["after:highlightElement"] = Ru => {
                uu["after:highlightBlock"](Object.assign({
                  block: Ru.el
                }, Ru))
              })
            }(uu), Qu.push(uu)
          },
          removePlugin: function(uu) {
            const Ru = Qu.indexOf(uu); - 1 !== Ru && Qu.splice(Ru, 1)
          }
        }), uu.debugMode = function() {
          mu = !1
        }, uu.safeMode = function() {
          mu = !0
        }, uu.versionString = "11.11.1", uu.regex = {
          concat: Su,
          lookahead: ru,
          either: pu,
          optional: xu,
          anyNumberOfTimes: Bu
        };
        for (const yu in zu) "object" === typeof zu[yu] && Ru(zu[yu]);
        return Object.assign(uu, zu), uu
      },
      rR = VR({});
    rR.newInstance = () => VR({}), uu.exports = rR, rR.HighlightJS = rR, rR.default = rR
  },
  4484: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    const Eu = yu(4490)
  },
  4499: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ru
    });
    const Eu = "[A-Za-z$_][0-9A-Za-z$_]*",
      Ku = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Qu = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      mu = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Ju = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Nu = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Xu = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Vu = [].concat(Nu, mu, Ju);

    function ru(uu) {
      const Ru = uu.regex,
        yu = Eu,
        ru = "<>",
        Bu = "</>",
        xu = {
          Kx: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (uu, Ru) => {
            const yu = uu[0].length + uu.index,
              Eu = uu.input[yu];
            if ("<" === Eu || "," === Eu) return void Ru.ignoreMatch();
            let Ku;
            ">" === Eu && (((uu, Ru) => {
              let {
                after: yu
              } = Ru;
              const Eu = "</" + uu[0].slice(1);
              return -1 !== uu.input.indexOf(Eu, yu)
            })(uu, {
              after: yu
            }) || Ru.ignoreMatch());
            const Qu = uu.input.substring(yu);
            ((Ku = Qu.match(/^\s*=/)) || (Ku = Qu.match(/^\s+extends\s+/)) && 0 === Ku.index) && Ru.ignoreMatch()
          }
        },
        Su = {
          $pattern: Eu,
          keyword: Ku,
          literal: Qu,
          built_in: Vu,
          "variable.language": Xu
        },
        pu = "[0-9](_?[0-9])*",
        Tu = `\\.(${pu})`,
        Wu = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        ju = {
          className: "number",
          variants: [{
            Kx: `(\\b(${Wu})((${Tu})|\\.)?|(${Tu}))[eE][+-]?(${pu})\\b`
          }, {
            Kx: `\\b(${Wu})\\b((${Tu})\\b|\\.)?|(${Tu})\\b`
          }, {
            Kx: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Kx: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Kx: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Kx: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Kx: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Hu = {
          className: "subst",
          Kx: "\\$\\{",
          end: "\\}",
          keywords: Su,
          contains: []
        },
        du = {
          Kx: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Hu],
            subLanguage: "xml"
          }
        },
        bu = {
          Kx: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Hu],
            subLanguage: "css"
          }
        },
        Cu = {
          Kx: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Hu],
            subLanguage: "graphql"
          }
        },
        ku = {
          className: "string",
          Kx: "`",
          end: "`",
          contains: [uu.BACKSLASH_ESCAPE, Hu]
        },
        eu = {
          className: "comment",
          variants: [uu.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Kx: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Kx: "@[A-Za-z]+"
              }, {
                className: "type",
                Kx: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Kx: yu + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Kx: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), uu.C_BLOCK_COMMENT_MODE, uu.C_LINE_COMMENT_MODE]
        },
        Au = [uu.APOS_STRING_MODE, uu.QUOTE_STRING_MODE, du, bu, Cu, ku, {
          match: /\$\d+/
        }, ju];
      Hu.contains = Au.concat({
        Kx: /\{/,
        end: /\}/,
        keywords: Su,
        contains: ["self"].concat(Au)
      });
      const Du = [].concat(eu, Hu.contains),
        Mu = Du.concat([{
          Kx: /(\s*)\(/,
          end: /\)/,
          keywords: Su,
          contains: ["self"].concat(Du)
        }]),
        Iu = {
          className: "params",
          Kx: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Su,
          contains: Mu
        },
        Gu = {
          variants: [{
            match: [/class/, /\s+/, yu, /\s+/, /extends/, /\s+/, Ru.concat(yu, "(", Ru.concat(/\./, yu), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, yu],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Uu = {
          relevance: 0,
          match: Ru.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...mu, ...Ju]
          }
        },
        nu = {
          variants: [{
            match: [/function/, /\s+/, yu, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Iu],
          illegal: /%/
        };
      const su = {
        match: Ru.concat(/\b/, (tu = [...Nu, "super", "import"].map((uu => `${uu}\\s*\\(`)), Ru.concat("(?!", tu.join("|"), ")")), yu, Ru.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var tu;
      const lu = {
          Kx: Ru.concat(/\./, Ru.lookahead(Ru.concat(yu, /(?![0-9A-Za-z$_(])/))),
          end: yu,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        gu = {
          match: [/get|set/, /\s+/, yu, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Kx: /\(\)/
          }, Iu]
        },
        cu = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + uu.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Lu = {
          match: [/const|var|let/, /\s+/, yu, /\s*/, /=\s*/, /(async\s*)?/, Ru.lookahead(cu)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Iu]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Su,
        exports: {
          PARAMS_CONTAINS: Mu,
          CLASS_REFERENCE: Uu
        },
        illegal: /#(?![$_A-z])/,
        contains: [uu.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Kx: /^\s*['"]use (strict|asm)['"]/
        }, uu.APOS_STRING_MODE, uu.QUOTE_STRING_MODE, du, bu, Cu, ku, eu, {
          match: /\$\d+/
        }, ju, Uu, {
          scope: "attr",
          match: yu + Ru.lookahead(":"),
          relevance: 0
        }, Lu, {
          Kx: "(" + uu.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [eu, uu.REGEXP_MODE, {
            className: "function",
            Kx: cu,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Kx: uu.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Kx: /\(\s*\)/,
                skip: !0
              }, {
                Kx: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Su,
                contains: Mu
              }]
            }]
          }, {
            Kx: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Kx: ru,
              end: Bu
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Kx: xu.Kx,
              "on:begin": xu.isTrulyOpeningTag,
              end: xu.end
            }],
            subLanguage: "xml",
            contains: [{
              Kx: xu.Kx,
              end: xu.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, nu, {
          beginKeywords: "while if switch catch for"
        }, {
          Kx: "\\b(?!function)" + uu.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Iu, uu.inherit(uu.TITLE_MODE, {
            Kx: yu,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, lu, {
          match: "\\$" + yu,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Iu]
        }, su, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Gu, gu, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4507: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Bu
    });
    const Eu = "[A-Za-z$_][0-9A-Za-z$_]*",
      Ku = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Qu = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      mu = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Ju = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Nu = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Xu = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Vu = [].concat(Nu, mu, Ju);

    function ru(uu) {
      const Ru = uu.regex,
        yu = Eu,
        ru = "<>",
        Bu = "</>",
        xu = {
          Kx: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (uu, Ru) => {
            const yu = uu[0].length + uu.index,
              Eu = uu.input[yu];
            if ("<" === Eu || "," === Eu) return void Ru.ignoreMatch();
            let Ku;
            ">" === Eu && (((uu, Ru) => {
              let {
                after: yu
              } = Ru;
              const Eu = "</" + uu[0].slice(1);
              return -1 !== uu.input.indexOf(Eu, yu)
            })(uu, {
              after: yu
            }) || Ru.ignoreMatch());
            const Qu = uu.input.substring(yu);
            ((Ku = Qu.match(/^\s*=/)) || (Ku = Qu.match(/^\s+extends\s+/)) && 0 === Ku.index) && Ru.ignoreMatch()
          }
        },
        Su = {
          $pattern: Eu,
          keyword: Ku,
          literal: Qu,
          built_in: Vu,
          "variable.language": Xu
        },
        pu = "[0-9](_?[0-9])*",
        Tu = `\\.(${pu})`,
        Wu = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        ju = {
          className: "number",
          variants: [{
            Kx: `(\\b(${Wu})((${Tu})|\\.)?|(${Tu}))[eE][+-]?(${pu})\\b`
          }, {
            Kx: `\\b(${Wu})\\b((${Tu})\\b|\\.)?|(${Tu})\\b`
          }, {
            Kx: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Kx: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Kx: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Kx: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Kx: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Hu = {
          className: "subst",
          Kx: "\\$\\{",
          end: "\\}",
          keywords: Su,
          contains: []
        },
        du = {
          Kx: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Hu],
            subLanguage: "xml"
          }
        },
        bu = {
          Kx: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Hu],
            subLanguage: "css"
          }
        },
        Cu = {
          Kx: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Hu],
            subLanguage: "graphql"
          }
        },
        ku = {
          className: "string",
          Kx: "`",
          end: "`",
          contains: [uu.BACKSLASH_ESCAPE, Hu]
        },
        eu = {
          className: "comment",
          variants: [uu.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Kx: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Kx: "@[A-Za-z]+"
              }, {
                className: "type",
                Kx: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Kx: yu + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Kx: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), uu.C_BLOCK_COMMENT_MODE, uu.C_LINE_COMMENT_MODE]
        },
        Au = [uu.APOS_STRING_MODE, uu.QUOTE_STRING_MODE, du, bu, Cu, ku, {
          match: /\$\d+/
        }, ju];
      Hu.contains = Au.concat({
        Kx: /\{/,
        end: /\}/,
        keywords: Su,
        contains: ["self"].concat(Au)
      });
      const Du = [].concat(eu, Hu.contains),
        Mu = Du.concat([{
          Kx: /(\s*)\(/,
          end: /\)/,
          keywords: Su,
          contains: ["self"].concat(Du)
        }]),
        Iu = {
          className: "params",
          Kx: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Su,
          contains: Mu
        },
        Gu = {
          variants: [{
            match: [/class/, /\s+/, yu, /\s+/, /extends/, /\s+/, Ru.concat(yu, "(", Ru.concat(/\./, yu), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, yu],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Uu = {
          relevance: 0,
          match: Ru.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...mu, ...Ju]
          }
        },
        nu = {
          variants: [{
            match: [/function/, /\s+/, yu, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Iu],
          illegal: /%/
        };
      const su = {
        match: Ru.concat(/\b/, (tu = [...Nu, "super", "import"].map((uu => `${uu}\\s*\\(`)), Ru.concat("(?!", tu.join("|"), ")")), yu, Ru.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var tu;
      const lu = {
          Kx: Ru.concat(/\./, Ru.lookahead(Ru.concat(yu, /(?![0-9A-Za-z$_(])/))),
          end: yu,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        gu = {
          match: [/get|set/, /\s+/, yu, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Kx: /\(\)/
          }, Iu]
        },
        cu = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + uu.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Lu = {
          match: [/const|var|let/, /\s+/, yu, /\s*/, /=\s*/, /(async\s*)?/, Ru.lookahead(cu)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Iu]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Su,
        exports: {
          PARAMS_CONTAINS: Mu,
          CLASS_REFERENCE: Uu
        },
        illegal: /#(?![$_A-z])/,
        contains: [uu.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Kx: /^\s*['"]use (strict|asm)['"]/
        }, uu.APOS_STRING_MODE, uu.QUOTE_STRING_MODE, du, bu, Cu, ku, eu, {
          match: /\$\d+/
        }, ju, Uu, {
          scope: "attr",
          match: yu + Ru.lookahead(":"),
          relevance: 0
        }, Lu, {
          Kx: "(" + uu.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [eu, uu.REGEXP_MODE, {
            className: "function",
            Kx: cu,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Kx: uu.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Kx: /\(\s*\)/,
                skip: !0
              }, {
                Kx: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Su,
                contains: Mu
              }]
            }]
          }, {
            Kx: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Kx: ru,
              end: Bu
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Kx: xu.Kx,
              "on:begin": xu.isTrulyOpeningTag,
              end: xu.end
            }],
            subLanguage: "xml",
            contains: [{
              Kx: xu.Kx,
              end: xu.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, nu, {
          beginKeywords: "while if switch catch for"
        }, {
          Kx: "\\b(?!function)" + uu.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Iu, uu.inherit(uu.TITLE_MODE, {
            Kx: yu,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, lu, {
          match: "\\$" + yu,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Iu]
        }, su, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Gu, gu, {
          match: /\$[(.]/
        }]
      }
    }

    function Bu(uu) {
      const Ru = uu.regex,
        yu = ru(uu),
        mu = Eu,
        Ju = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Nu = {
          Kx: [/namespace/, /\s+/, uu.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Bu = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Ju
          },
          contains: [yu.exports.CLASS_REFERENCE]
        },
        xu = {
          $pattern: Eu,
          keyword: Ku.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Qu,
          built_in: Vu.concat(Ju),
          "variable.language": Xu
        },
        Su = {
          className: "meta",
          Kx: "@" + mu
        },
        pu = (uu, Ru, yu) => {
          const Eu = uu.contains.findIndex((uu => uu.label === Ru));
          if (-1 === Eu) throw new Error("can not find mode to replace");
          uu.contains.splice(Eu, 1, yu)
        };
      Object.assign(yu.keywords, xu), yu.exports.PARAMS_CONTAINS.push(Su);
      const Tu = yu.contains.find((uu => "attr" === uu.scope)),
        Wu = Object.assign({}, Tu, {
          match: Ru.concat(mu, Ru.lookahead(/\s*\?:/))
        });
      yu.exports.PARAMS_CONTAINS.push([yu.exports.CLASS_REFERENCE, Tu, Wu]), yu.contains = yu.contains.concat([Su, Nu, Bu, Wu]), pu(yu, "shebang", uu.SHEBANG()), pu(yu, "use_strict", {
        className: "meta",
        relevance: 10,
        Kx: /^\s*['"]use strict['"]/
      });
      return yu.contains.find((uu => "func.def" === uu.label)).relevance = 0, Object.assign(yu, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), yu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);