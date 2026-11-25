export const id = 80;
export const ids = [80];
export const modules = {
  4908: uu => {
    function Eu(uu) {
      return uu instanceof Map ? uu.clear = uu.delete = uu.set = function() {
        throw new Error("map is read-only")
      } : uu instanceof Set && (uu.add = uu.clear = uu.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(uu), Object.getOwnPropertyNames(uu).forEach((ju => {
        const su = uu[ju],
          Uu = typeof su;
        "object" !== Uu && "function" !== Uu || Object.isFrozen(su) || Eu(su)
      })), uu
    }
    class ju {
      constructor(uu) {
        void 0 === uu.data && (uu.data = {}), this.data = uu.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function su(uu) {
      return uu.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Uu(uu) {
      const Eu = Object.create(null);
      for (const Zu in uu) Eu[Zu] = uu[Zu];
      for (var ju = arguments.length, su = new Array(ju > 1 ? ju - 1 : 0), Uu = 1; Uu < ju; Uu++) su[Uu - 1] = arguments[Uu];
      return su.forEach((function(uu) {
        for (const ju in uu) Eu[ju] = uu[ju]
      })), Eu
    }
    const Zu = uu => !!uu.scope;
    class Xu {
      constructor(uu, Eu) {
        this.buffer = "", this.classPrefix = Eu.classPrefix, uu.walk(this)
      }
      addText(uu) {
        this.buffer += su(uu)
      }
      openNode(uu) {
        if (!Zu(uu)) return;
        const Eu = ((uu, Eu) => {
          let {
            prefix: ju
          } = Eu;
          if (uu.startsWith("language:")) return uu.replace("language:", "language-");
          if (uu.includes(".")) {
            const Eu = uu.split(".");
            return [`${ju}${Eu.shift()}`, ...Eu.map(((uu, Eu) => `${uu}${"_".repeat(Eu+1)}`))].join(" ")
          }
          return `${ju}${uu}`
        })(uu.scope, {
          prefix: this.classPrefix
        });
        this.span(Eu)
      }
      closeNode(uu) {
        Zu(uu) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(uu) {
        this.buffer += `<span class="${uu}">`
      }
    }
    const lu = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Eu = {
        children: []
      };
      return Object.assign(Eu, uu), Eu
    };
    class qu {
      constructor() {
        this.XM = lu(), this.stack = [this.XM]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.XM
      }
      add(uu) {
        this.top.children.push(uu)
      }
      openNode(uu) {
        const Eu = lu({
          scope: uu
        });
        this.add(Eu), this.stack.push(Eu)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.XM, null, 4)
      }
      walk(uu) {
        return this.constructor._walk(uu, this.XM)
      }
      static _walk(uu, Eu) {
        return "string" === typeof Eu ? uu.addText(Eu) : Eu.children && (uu.openNode(Eu), Eu.children.forEach((Eu => this._walk(uu, Eu))), uu.closeNode(Eu)), uu
      }
      static _collapse(uu) {
        "string" !== typeof uu && uu.children && (uu.children.every((uu => "string" === typeof uu)) ? uu.children = [uu.children.join("")] : uu.children.forEach((uu => {
          qu._collapse(uu)
        })))
      }
    }
    class fu extends qu {
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
      __addSublanguage(uu, Eu) {
        const ju = uu.root;
        Eu && (ju.scope = `language:${Eu}`), this.add(ju)
      }
      toHTML() {
        return new Xu(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Cu(uu) {
      return uu ? "string" === typeof uu ? uu : uu.source : null
    }

    function bu(uu) {
      return Ou("(?=", uu, ")")
    }

    function cu(uu) {
      return Ou("(?:", uu, ")*")
    }

    function Nu(uu) {
      return Ou("(?:", uu, ")?")
    }

    function Ou() {
      for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
      return Eu.map((uu => Cu(uu))).join("")
    }

    function Yu() {
      for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
      const su = function(uu) {
        const Eu = uu[uu.length - 1];
        return "object" === typeof Eu && Eu.constructor === Object ? (uu.splice(uu.length - 1, 1), Eu) : {}
      }(Eu);
      return "(" + (su.capture ? "" : "?:") + Eu.map((uu => Cu(uu))).join("|") + ")"
    }

    function hu(uu) {
      return new RegExp(uu.toString() + "|").exec("").length - 1
    }
    const Du = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function gu(uu, Eu) {
      let {
        joinWith: ju
      } = Eu, su = 0;
      return uu.map((uu => {
        su += 1;
        const Eu = su;
        let ju = Cu(uu),
          Uu = "";
        for (; ju.length > 0;) {
          const uu = Du.exec(ju);
          if (!uu) {
            Uu += ju;
            break
          }
          Uu += ju.substring(0, uu.index), ju = ju.substring(uu.index + uu[0].length), "\\" === uu[0][0] && uu[1] ? Uu += "\\" + String(Number(uu[1]) + Eu) : (Uu += uu[0], "(" === uu[0] && su++)
        }
        return Uu
      })).map((uu => `(${uu})`)).join(ju)
    }
    const Mu = "[a-zA-Z]\\w*",
      eu = "[a-zA-Z_]\\w*",
      Gu = "\\b\\d+(\\.\\d+)?",
      pu = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      wu = "\\b(0b[01]+)",
      Ju = {
        NN: "\\\\[\\s\\S]",
        relevance: 0
      },
      du = {
        scope: "string",
        NN: "'",
        end: "'",
        illegal: "\\n",
        contains: [Ju]
      },
      au = {
        scope: "string",
        NN: '"',
        end: '"',
        illegal: "\\n",
        contains: [Ju]
      },
      Pu = function(uu, Eu) {
        const ju = Uu({
          scope: "comment",
          NN: uu,
          end: Eu,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        ju.contains.push({
          scope: "doctag",
          NN: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const su = Yu("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return ju.contains.push({
          NN: Ou(/[ ]+/, "(", su, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), ju
      },
      ou = Pu("//", "$"),
      ku = Pu("/\\*", "\\*/"),
      mu = Pu("#", "$"),
      vu = {
        scope: "number",
        NN: Gu,
        relevance: 0
      },
      Ku = {
        scope: "number",
        NN: pu,
        relevance: 0
      },
      Vu = {
        scope: "number",
        NN: wu,
        relevance: 0
      },
      ru = {
        scope: "regexp",
        NN: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [Ju, {
          NN: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [Ju]
        }]
      },
      Qu = {
        scope: "title",
        NN: Mu,
        relevance: 0
      },
      iu = {
        scope: "title",
        NN: eu,
        relevance: 0
      },
      Wu = {
        NN: "\\.\\s*" + eu,
        relevance: 0
      };
    var Su = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: du,
      BACKSLASH_ESCAPE: Ju,
      BINARY_NUMBER_MODE: Vu,
      BINARY_NUMBER_RE: wu,
      COMMENT: Pu,
      C_BLOCK_COMMENT_MODE: ku,
      C_LINE_COMMENT_MODE: ou,
      C_NUMBER_MODE: Ku,
      C_NUMBER_RE: pu,
      END_SAME_AS_BEGIN: function(uu) {
        return Object.assign(uu, {
          "on:begin": (uu, Eu) => {
            Eu.data._beginMatch = uu[1]
          },
          "on:end": (uu, Eu) => {
            Eu.data._beginMatch !== uu[1] && Eu.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: mu,
      IDENT_RE: Mu,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Wu,
      NUMBER_MODE: vu,
      NUMBER_RE: Gu,
      PHRASAL_WORDS_MODE: {
        NN: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: au,
      REGEXP_MODE: ru,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Eu = /^#![ ]*\//;
        return uu.binary && (uu.NN = Ou(Eu, /.*\b/, uu.binary, /\b.*/)), Uu({
          scope: "meta",
          NN: Eu,
          end: /$/,
          relevance: 0,
          "on:begin": (uu, Eu) => {
            0 !== uu.index && Eu.ignoreMatch()
          }
        }, uu)
      },
      TITLE_MODE: Qu,
      UNDERSCORE_IDENT_RE: eu,
      UNDERSCORE_TITLE_MODE: iu
    });

    function Iu(uu, Eu) {
      "." === uu.input[uu.index - 1] && Eu.ignoreMatch()
    }

    function Fu(uu, Eu) {
      void 0 !== uu.className && (uu.scope = uu.className, delete uu.className)
    }

    function Bu(uu, Eu) {
      Eu && uu.beginKeywords && (uu.NN = "\\b(" + uu.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", uu.__beforeBegin = Iu, uu.keywords = uu.keywords || uu.beginKeywords, delete uu.beginKeywords, void 0 === uu.relevance && (uu.relevance = 0))
    }

    function Lu(uu, Eu) {
      Array.isArray(uu.illegal) && (uu.illegal = Yu(...uu.illegal))
    }

    function tu(uu, Eu) {
      if (uu.match) {
        if (uu.NN || uu.end) throw new Error("begin & end are not supported with match");
        uu.NN = uu.match, delete uu.match
      }
    }

    function xu(uu, Eu) {
      void 0 === uu.relevance && (uu.relevance = 1)
    }
    const Tu = (uu, Eu) => {
        if (!uu.beforeMatch) return;
        if (uu.starts) throw new Error("beforeMatch cannot be used with starts");
        const ju = Object.assign({}, uu);
        Object.keys(uu).forEach((Eu => {
          delete uu[Eu]
        })), uu.keywords = ju.keywords, uu.NN = Ou(ju.beforeMatch, bu(ju.NN)), uu.starts = {
          relevance: 0,
          contains: [Object.assign(ju, {
            endsParent: !0
          })]
        }, uu.relevance = 0, delete ju.beforeMatch
      },
      Hu = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Au(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const su = Object.create(null);
      return "string" === typeof uu ? Uu(ju, uu.split(" ")) : Array.isArray(uu) ? Uu(ju, uu) : Object.keys(uu).forEach((function(ju) {
        Object.assign(su, Au(uu[ju], Eu, ju))
      })), su;

      function Uu(uu, ju) {
        Eu && (ju = ju.map((uu => uu.toLowerCase()))), ju.forEach((function(Eu) {
          const ju = Eu.split("|");
          su[ju[0]] = [uu, nu(ju[0], ju[1])]
        }))
      }
    }

    function nu(uu, Eu) {
      return Eu ? Number(Eu) : function(uu) {
        return Hu.includes(uu.toLowerCase())
      }(uu) ? 0 : 1
    }
    const yu = {},
      zu = uu => {
        console.error(uu)
      },
      Ru = function(uu) {
        for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
        console.log(`WARN: ${uu}`, ...ju)
      },
      uE = (uu, Eu) => {
        yu[`${uu}/${Eu}`] || (console.log(`Deprecated as of ${uu}. ${Eu}`), yu[`${uu}/${Eu}`] = !0)
      },
      EE = new Error;

    function jE(uu, Eu, ju) {
      let {
        key: su
      } = ju, Uu = 0;
      const Zu = uu[su],
        Xu = {},
        lu = {};
      for (let qu = 1; qu <= Eu.length; qu++) lu[qu + Uu] = Zu[qu], Xu[qu + Uu] = !0, Uu += hu(Eu[qu - 1]);
      uu[su] = lu, uu[su]._emit = Xu, uu[su]._multi = !0
    }

    function sE(uu) {
      ! function(uu) {
        uu.scope && "object" === typeof uu.scope && null !== uu.scope && (uu.beginScope = uu.scope, delete uu.scope)
      }(uu), "string" === typeof uu.beginScope && (uu.beginScope = {
          _wrap: uu.beginScope
        }), "string" === typeof uu.endScope && (uu.endScope = {
          _wrap: uu.endScope
        }),
        function(uu) {
          if (Array.isArray(uu.NN)) {
            if (uu.skip || uu.excludeBegin || uu.returnBegin) throw zu("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), EE;
            if ("object" !== typeof uu.beginScope || null === uu.beginScope) throw zu("beginScope must be object"), EE;
            jE(uu, uu.NN, {
              key: "beginScope"
            }), uu.NN = gu(uu.NN, {
              joinWith: ""
            })
          }
        }(uu),
        function(uu) {
          if (Array.isArray(uu.end)) {
            if (uu.skip || uu.excludeEnd || uu.returnEnd) throw zu("skip, excludeEnd, returnEnd not compatible with endScope: {}"), EE;
            if ("object" !== typeof uu.endScope || null === uu.endScope) throw zu("endScope must be object"), EE;
            jE(uu, uu.end, {
              key: "endScope"
            }), uu.end = gu(uu.end, {
              joinWith: ""
            })
          }
        }(uu)
    }

    function UE(uu) {
      function Eu(Eu, ju) {
        return new RegExp(Cu(Eu), "m" + (uu.case_insensitive ? "i" : "") + (uu.unicodeRegex ? "u" : "") + (ju ? "g" : ""))
      }
      class ju {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(uu, Eu) {
          Eu.position = this.position++, this.matchIndexes[this.matchAt] = Eu, this.regexes.push([Eu, uu]), this.matchAt += hu(uu) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const uu = this.regexes.map((uu => uu[1]));
          this.matcherRe = Eu(gu(uu, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(uu) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Eu = this.matcherRe.exec(uu);
          if (!Eu) return null;
          const ju = Eu.findIndex(((uu, Eu) => Eu > 0 && void 0 !== uu)),
            su = this.matchIndexes[ju];
          return Eu.splice(0, ju), Object.assign(Eu, su)
        }
      }
      class su {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(uu) {
          if (this.multiRegexes[uu]) return this.multiRegexes[uu];
          const Eu = new ju;
          return this.rules.slice(uu).forEach((uu => {
            let [ju, su] = uu;
            return Eu.addRule(ju, su)
          })), Eu.compile(), this.multiRegexes[uu] = Eu, Eu
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(uu, Eu) {
          this.rules.push([uu, Eu]), "NN" === Eu.type && this.count++
        }
        exec(uu) {
          const Eu = this.getMatcher(this.regexIndex);
          Eu.lastIndex = this.lastIndex;
          let ju = Eu.exec(uu);
          if (this.resumingScanAtSamePosition())
            if (ju && ju.index === this.lastIndex);
            else {
              const Eu = this.getMatcher(0);
              Eu.lastIndex = this.lastIndex + 1, ju = Eu.exec(uu)
            } return ju && (this.regexIndex += ju.position + 1, this.regexIndex === this.count && this.considerAll()), ju
        }
      }
      if (uu.compilerExtensions || (uu.compilerExtensions = []), uu.contains && uu.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return uu.classNameAliases = Uu(uu.classNameAliases || {}),
        function ju(Zu, Xu) {
          const lu = Zu;
          if (Zu.isCompiled) return lu;
          [Fu, tu, sE, Tu].forEach((uu => uu(Zu, Xu))), uu.compilerExtensions.forEach((uu => uu(Zu, Xu))), Zu.__beforeBegin = null, [Bu, Lu, xu].forEach((uu => uu(Zu, Xu))), Zu.isCompiled = !0;
          let qu = null;
          return "object" === typeof Zu.keywords && Zu.keywords.$pattern && (Zu.keywords = Object.assign({}, Zu.keywords), qu = Zu.keywords.$pattern, delete Zu.keywords.$pattern), qu = qu || /\w+/, Zu.keywords && (Zu.keywords = Au(Zu.keywords, uu.case_insensitive)), lu.keywordPatternRe = Eu(qu, !0), Xu && (Zu.NN || (Zu.NN = /\B|\b/), lu.beginRe = Eu(lu.NN), Zu.end || Zu.endsWithParent || (Zu.end = /\B|\b/), Zu.end && (lu.endRe = Eu(lu.end)), lu.terminatorEnd = Cu(lu.end) || "", Zu.endsWithParent && Xu.terminatorEnd && (lu.terminatorEnd += (Zu.end ? "|" : "") + Xu.terminatorEnd)), Zu.illegal && (lu.illegalRe = Eu(Zu.illegal)), Zu.contains || (Zu.contains = []), Zu.contains = [].concat(...Zu.contains.map((function(uu) {
            return function(uu) {
              uu.variants && !uu.cachedVariants && (uu.cachedVariants = uu.variants.map((function(Eu) {
                return Uu(uu, {
                  variants: null
                }, Eu)
              })));
              if (uu.cachedVariants) return uu.cachedVariants;
              if (ZE(uu)) return Uu(uu, {
                starts: uu.starts ? Uu(uu.starts) : null
              });
              if (Object.isFrozen(uu)) return Uu(uu);
              return uu
            }("self" === uu ? Zu : uu)
          }))), Zu.contains.forEach((function(uu) {
            ju(uu, lu)
          })), Zu.starts && ju(Zu.starts, Xu), lu.matcher = function(uu) {
            const Eu = new su;
            return uu.contains.forEach((uu => Eu.addRule(uu.NN, {
              rule: uu,
              type: "NN"
            }))), uu.terminatorEnd && Eu.addRule(uu.terminatorEnd, {
              type: "end"
            }), uu.illegal && Eu.addRule(uu.illegal, {
              type: "illegal"
            }), Eu
          }(lu), lu
        }(uu)
    }

    function ZE(uu) {
      return !!uu && (uu.endsWithParent || ZE(uu.starts))
    }
    class XE extends Error {
      constructor(uu, Eu) {
        super(uu), this.name = "HTMLInjectionError", this.html = Eu
      }
    }
    const lE = su,
      qE = Uu,
      fE = Symbol("nomatch"),
      CE = function(uu) {
        const su = Object.create(null),
          Uu = Object.create(null),
          Zu = [];
        let Xu = !0;
        const lu = "Could not find the language '{}', did you forget to load/include a language module?",
          qu = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Cu = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: fu
        };

        function hu(uu) {
          return Cu.noHighlightRe.test(uu)
        }

        function Du(uu, Eu, ju) {
          let su = "",
            Uu = "";
          "object" === typeof Eu ? (su = uu, ju = Eu.ignoreIllegals, Uu = Eu.language) : (uE("10.7.0", "highlight(lang, code, ...args) has been deprecated."), uE("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Uu = uu, su = Eu), void 0 === ju && (ju = !0);
          const Zu = {
            code: su,
            language: Uu
          };
          au("before:highlight", Zu);
          const Xu = Zu.result ? Zu.result : gu(Zu.language, Zu.code, ju);
          return Xu.code = Zu.code, au("after:highlight", Xu), Xu
        }

        function gu(uu, Eu, Uu, Zu) {
          const qu = Object.create(null);

          function fu() {
            if (!au.keywords) return void ou.addText(ku);
            let uu = 0;
            au.keywordPatternRe.lastIndex = 0;
            let Eu = au.keywordPatternRe.exec(ku),
              ju = "";
            for (; Eu;) {
              ju += ku.substring(uu, Eu.index);
              const Uu = pu.case_insensitive ? Eu[0].toLowerCase() : Eu[0],
                Zu = (su = Uu, au.keywords[su]);
              if (Zu) {
                const [uu, su] = Zu;
                if (ou.addText(ju), ju = "", qu[Uu] = (qu[Uu] || 0) + 1, qu[Uu] <= 7 && (mu += su), uu.startsWith("_")) ju += Eu[0];
                else {
                  const ju = pu.classNameAliases[uu] || uu;
                  cu(Eu[0], ju)
                }
              } else ju += Eu[0];
              uu = au.keywordPatternRe.lastIndex, Eu = au.keywordPatternRe.exec(ku)
            }
            var su;
            ju += ku.substring(uu), ou.addText(ju)
          }

          function bu() {
            null != au.subLanguage ? function() {
              if ("" === ku) return;
              let uu = null;
              if ("string" === typeof au.subLanguage) {
                if (!su[au.subLanguage]) return void ou.addText(ku);
                uu = gu(au.subLanguage, ku, !0, Pu[au.subLanguage]), Pu[au.subLanguage] = uu._top
              } else uu = Mu(ku, au.subLanguage.length ? au.subLanguage : null);
              au.relevance > 0 && (mu += uu.relevance), ou.__addSublanguage(uu._emitter, uu.language)
            }() : fu(), ku = ""
          }

          function cu(uu, Eu) {
            "" !== uu && (ou.startScope(Eu), ou.addText(uu), ou.endScope())
          }

          function Nu(uu, Eu) {
            let ju = 1;
            const su = Eu.length - 1;
            for (; ju <= su;) {
              if (!uu._emit[ju]) {
                ju++;
                continue
              }
              const su = pu.classNameAliases[uu[ju]] || uu[ju],
                Uu = Eu[ju];
              su ? cu(Uu, su) : (ku = Uu, fu(), ku = ""), ju++
            }
          }

          function Ou(uu, Eu) {
            return uu.scope && "string" === typeof uu.scope && ou.openNode(pu.classNameAliases[uu.scope] || uu.scope), uu.beginScope && (uu.beginScope._wrap ? (cu(ku, pu.classNameAliases[uu.beginScope._wrap] || uu.beginScope._wrap), ku = "") : uu.beginScope._multi && (Nu(uu.beginScope, Eu), ku = "")), au = Object.create(uu, {
              parent: {
                value: au
              }
            }), au
          }

          function Yu(uu, Eu, su) {
            let Uu = function(uu, Eu) {
              const ju = uu && uu.exec(Eu);
              return ju && 0 === ju.index
            }(uu.endRe, su);
            if (Uu) {
              if (uu["on:end"]) {
                const su = new ju(uu);
                uu["on:end"](Eu, su), su.isMatchIgnored && (Uu = !1)
              }
              if (Uu) {
                for (; uu.endsParent && uu.parent;) uu = uu.parent;
                return uu
              }
            }
            if (uu.endsWithParent) return Yu(uu.parent, Eu, su)
          }

          function hu(uu) {
            return 0 === au.matcher.regexIndex ? (ku += uu[0], 1) : (Vu = !0, 0)
          }

          function Du(uu) {
            const ju = uu[0],
              su = Eu.substring(uu.index),
              Uu = Yu(au, uu, su);
            if (!Uu) return fE;
            const Zu = au;
            au.endScope && au.endScope._wrap ? (bu(), cu(ju, au.endScope._wrap)) : au.endScope && au.endScope._multi ? (bu(), Nu(au.endScope, uu)) : Zu.skip ? ku += ju : (Zu.returnEnd || Zu.excludeEnd || (ku += ju), bu(), Zu.excludeEnd && (ku = ju));
            do {
              au.scope && ou.closeNode(), au.skip || au.subLanguage || (mu += au.relevance), au = au.parent
            } while (au !== Uu.parent);
            return Uu.starts && Ou(Uu.starts, uu), Zu.returnEnd ? 0 : ju.length
          }
          let eu = {};

          function Gu(su, Zu) {
            const lu = Zu && Zu[0];
            if (ku += su, null == lu) return bu(), 0;
            if ("NN" === eu.type && "end" === Zu.type && eu.index === Zu.index && "" === lu) {
              if (ku += Eu.slice(Zu.index, Zu.index + 1), !Xu) {
                const Eu = new Error(`0 width match regex (${uu})`);
                throw Eu.languageName = uu, Eu.badRule = eu.rule, Eu
              }
              return 1
            }
            if (eu = Zu, "NN" === Zu.type) return function(uu) {
              const Eu = uu[0],
                su = uu.rule,
                Uu = new ju(su),
                Zu = [su.__beforeBegin, su["on:begin"]];
              for (const ju of Zu)
                if (ju && (ju(uu, Uu), Uu.isMatchIgnored)) return hu(Eu);
              return su.skip ? ku += Eu : (su.excludeBegin && (ku += Eu), bu(), su.returnBegin || su.excludeBegin || (ku = Eu)), Ou(su, uu), su.returnBegin ? 0 : Eu.length
            }(Zu);
            if ("illegal" === Zu.type && !Uu) {
              const uu = new Error('Illegal lexeme "' + lu + '" for mode "' + (au.scope || "<unnamed>") + '"');
              throw uu.mode = au, uu
            }
            if ("end" === Zu.type) {
              const uu = Du(Zu);
              if (uu !== fE) return uu
            }
            if ("illegal" === Zu.type && "" === lu) return ku += "\n", 1;
            if (Ku > 1e5 && Ku > 3 * Zu.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return ku += lu, lu.length
          }
          const pu = wu(uu);
          if (!pu) throw zu(lu.replace("{}", uu)), new Error('Unknown language: "' + uu + '"');
          const Ju = UE(pu);
          let du = "",
            au = Zu || Ju;
          const Pu = {},
            ou = new Cu.__emitter(Cu);
          ! function() {
            const uu = [];
            for (let Eu = au; Eu !== pu; Eu = Eu.parent) Eu.scope && uu.unshift(Eu.scope);
            uu.forEach((uu => ou.openNode(uu)))
          }();
          let ku = "",
            mu = 0,
            vu = 0,
            Ku = 0,
            Vu = !1;
          try {
            if (pu.__emitTokens) pu.__emitTokens(Eu, ou);
            else {
              for (au.matcher.considerAll();;) {
                Ku++, Vu ? Vu = !1 : au.matcher.considerAll(), au.matcher.lastIndex = vu;
                const uu = au.matcher.exec(Eu);
                if (!uu) break;
                const ju = Gu(Eu.substring(vu, uu.index), uu);
                vu = uu.index + ju
              }
              Gu(Eu.substring(vu))
            }
            return ou.finalize(), du = ou.toHTML(), {
              language: uu,
              value: du,
              relevance: mu,
              illegal: !1,
              _emitter: ou,
              _top: au
            }
          } catch (ru) {
            if (ru.message && ru.message.includes("Illegal")) return {
              language: uu,
              value: lE(Eu),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: ru.message,
                index: vu,
                context: Eu.slice(vu - 100, vu + 100),
                mode: ru.mode,
                resultSoFar: du
              },
              _emitter: ou
            };
            if (Xu) return {
              language: uu,
              value: lE(Eu),
              illegal: !1,
              relevance: 0,
              errorRaised: ru,
              _emitter: ou,
              _top: au
            };
            throw ru
          }
        }

        function Mu(uu, Eu) {
          Eu = Eu || Cu.languages || Object.keys(su);
          const ju = function(uu) {
              const Eu = {
                value: lE(uu),
                illegal: !1,
                relevance: 0,
                _top: qu,
                _emitter: new Cu.__emitter(Cu)
              };
              return Eu._emitter.addText(uu), Eu
            }(uu),
            Uu = Eu.filter(wu).filter(du).map((Eu => gu(Eu, uu, !1)));
          Uu.unshift(ju);
          const Zu = Uu.sort(((uu, Eu) => {
              if (uu.relevance !== Eu.relevance) return Eu.relevance - uu.relevance;
              if (uu.language && Eu.language) {
                if (wu(uu.language).supersetOf === Eu.language) return 1;
                if (wu(Eu.language).supersetOf === uu.language) return -1
              }
              return 0
            })),
            [Xu, lu] = Zu,
            fu = Xu;
          return fu.secondBest = lu, fu
        }

        function eu(uu) {
          let Eu = null;
          const ju = function(uu) {
            let Eu = uu.className + " ";
            Eu += uu.parentNode ? uu.parentNode.className : "";
            const ju = Cu.languageDetectRe.exec(Eu);
            if (ju) {
              const Eu = wu(ju[1]);
              return Eu || (Ru(lu.replace("{}", ju[1])), Ru("Falling back to no-highlight mode for this block.", uu)), Eu ? ju[1] : "no-highlight"
            }
            return Eu.split(/\s+/).find((uu => hu(uu) || wu(uu)))
          }(uu);
          if (hu(ju)) return;
          if (au("before:highlightElement", {
              el: uu,
              language: ju
            }), uu.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", uu);
          if (uu.children.length > 0 && (Cu.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(uu)), Cu.throwUnescapedHTML)) {
            throw new XE("One of your code blocks includes unescaped HTML.", uu.innerHTML)
          }
          Eu = uu;
          const su = Eu.textContent,
            Zu = ju ? Du(su, {
              language: ju,
              ignoreIllegals: !0
            }) : Mu(su);
          uu.innerHTML = Zu.value, uu.dataset.highlighted = "yes",
            function(uu, Eu, ju) {
              const su = Eu && Uu[Eu] || ju;
              uu.classList.add("hljs"), uu.classList.add(`language-${su}`)
            }(uu, ju, Zu.language), uu.result = {
              language: Zu.language,
              re: Zu.relevance,
              relevance: Zu.relevance
            }, Zu.secondBest && (uu.secondBest = {
              language: Zu.secondBest.language,
              relevance: Zu.secondBest.relevance
            }), au("after:highlightElement", {
              el: uu,
              result: Zu,
              text: su
            })
        }
        let Gu = !1;

        function pu() {
          if ("loading" === document.readyState) return Gu || window.addEventListener("DOMContentLoaded", (function() {
            pu()
          }), !1), void(Gu = !0);
          document.querySelectorAll(Cu.cssSelector).forEach(eu)
        }

        function wu(uu) {
          return uu = (uu || "").toLowerCase(), su[uu] || su[Uu[uu]]
        }

        function Ju(uu, Eu) {
          let {
            languageName: ju
          } = Eu;
          "string" === typeof uu && (uu = [uu]), uu.forEach((uu => {
            Uu[uu.toLowerCase()] = ju
          }))
        }

        function du(uu) {
          const Eu = wu(uu);
          return Eu && !Eu.disableAutodetect
        }

        function au(uu, Eu) {
          const ju = uu;
          Zu.forEach((function(uu) {
            uu[ju] && uu[ju](Eu)
          }))
        }
        Object.assign(uu, {
          highlight: Du,
          highlightAuto: Mu,
          highlightAll: pu,
          highlightElement: eu,
          highlightBlock: function(uu) {
            return uE("10.7.0", "highlightBlock will be removed entirely in v12.0"), uE("10.7.0", "Please use highlightElement now."), eu(uu)
          },
          configure: function(uu) {
            Cu = qE(Cu, uu)
          },
          initHighlighting: () => {
            pu(), uE("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            pu(), uE("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Eu, ju) {
            let Uu = null;
            try {
              Uu = ju(uu)
            } catch (Zu) {
              if (zu("Language definition for '{}' could not be registered.".replace("{}", Eu)), !Xu) throw Zu;
              zu(Zu), Uu = qu
            }
            Uu.name || (Uu.name = Eu), su[Eu] = Uu, Uu.rawDefinition = ju.bind(null, uu), Uu.aliases && Ju(Uu.aliases, {
              languageName: Eu
            })
          },
          unregisterLanguage: function(uu) {
            delete su[uu];
            for (const Eu of Object.keys(Uu)) Uu[Eu] === uu && delete Uu[Eu]
          },
          listLanguages: function() {
            return Object.keys(su)
          },
          getLanguage: wu,
          registerAliases: Ju,
          autoDetection: du,
          inherit: qE,
          addPlugin: function(uu) {
            ! function(uu) {
              uu["before:highlightBlock"] && !uu["before:highlightElement"] && (uu["before:highlightElement"] = Eu => {
                uu["before:highlightBlock"](Object.assign({
                  block: Eu.el
                }, Eu))
              }), uu["after:highlightBlock"] && !uu["after:highlightElement"] && (uu["after:highlightElement"] = Eu => {
                uu["after:highlightBlock"](Object.assign({
                  block: Eu.el
                }, Eu))
              })
            }(uu), Zu.push(uu)
          },
          removePlugin: function(uu) {
            const Eu = Zu.indexOf(uu); - 1 !== Eu && Zu.splice(Eu, 1)
          }
        }), uu.debugMode = function() {
          Xu = !1
        }, uu.safeMode = function() {
          Xu = !0
        }, uu.versionString = "11.11.1", uu.regex = {
          concat: Ou,
          lookahead: bu,
          either: Yu,
          optional: Nu,
          anyNumberOfTimes: cu
        };
        for (const ju in Su) "object" === typeof Su[ju] && Eu(Su[ju]);
        return Object.assign(uu, Su), uu
      },
      bE = CE({});
    bE.newInstance = () => CE({}), uu.exports = bE, bE.HighlightJS = bE, bE.default = bE
  },
  4899: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    const su = ju(4908)
  },
  4916: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu
    });
    const su = "[A-Za-z$_][0-9A-Za-z$_]*",
      Uu = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Zu = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Xu = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      lu = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      qu = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      fu = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Cu = [].concat(qu, Xu, lu);

    function bu(uu) {
      const Eu = uu.regex,
        ju = su,
        bu = "<>",
        cu = "</>",
        Nu = {
          NN: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (uu, Eu) => {
            const ju = uu[0].length + uu.index,
              su = uu.input[ju];
            if ("<" === su || "," === su) return void Eu.ignoreMatch();
            let Uu;
            ">" === su && (((uu, Eu) => {
              let {
                after: ju
              } = Eu;
              const su = "</" + uu[0].slice(1);
              return -1 !== uu.input.indexOf(su, ju)
            })(uu, {
              after: ju
            }) || Eu.ignoreMatch());
            const Zu = uu.input.substring(ju);
            ((Uu = Zu.match(/^\s*=/)) || (Uu = Zu.match(/^\s+extends\s+/)) && 0 === Uu.index) && Eu.ignoreMatch()
          }
        },
        Ou = {
          $pattern: su,
          keyword: Uu,
          literal: Zu,
          built_in: Cu,
          "variable.language": fu
        },
        Yu = "[0-9](_?[0-9])*",
        hu = `\\.(${Yu})`,
        Du = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        gu = {
          className: "number",
          variants: [{
            NN: `(\\b(${Du})((${hu})|\\.)?|(${hu}))[eE][+-]?(${Yu})\\b`
          }, {
            NN: `\\b(${Du})\\b((${hu})\\b|\\.)?|(${hu})\\b`
          }, {
            NN: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            NN: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            NN: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            NN: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            NN: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Mu = {
          className: "subst",
          NN: "\\$\\{",
          end: "\\}",
          keywords: Ou,
          contains: []
        },
        eu = {
          NN: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Mu],
            subLanguage: "xml"
          }
        },
        Gu = {
          NN: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Mu],
            subLanguage: "css"
          }
        },
        pu = {
          NN: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Mu],
            subLanguage: "graphql"
          }
        },
        wu = {
          className: "string",
          NN: "`",
          end: "`",
          contains: [uu.BACKSLASH_ESCAPE, Mu]
        },
        Ju = {
          className: "comment",
          variants: [uu.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              NN: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                NN: "@[A-Za-z]+"
              }, {
                className: "type",
                NN: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                NN: ju + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                NN: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), uu.C_BLOCK_COMMENT_MODE, uu.C_LINE_COMMENT_MODE]
        },
        du = [uu.APOS_STRING_MODE, uu.QUOTE_STRING_MODE, eu, Gu, pu, wu, {
          match: /\$\d+/
        }, gu];
      Mu.contains = du.concat({
        NN: /\{/,
        end: /\}/,
        keywords: Ou,
        contains: ["self"].concat(du)
      });
      const au = [].concat(Ju, Mu.contains),
        Pu = au.concat([{
          NN: /(\s*)\(/,
          end: /\)/,
          keywords: Ou,
          contains: ["self"].concat(au)
        }]),
        ou = {
          className: "params",
          NN: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Ou,
          contains: Pu
        },
        ku = {
          variants: [{
            match: [/class/, /\s+/, ju, /\s+/, /extends/, /\s+/, Eu.concat(ju, "(", Eu.concat(/\./, ju), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ju],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        mu = {
          relevance: 0,
          match: Eu.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Xu, ...lu]
          }
        },
        vu = {
          variants: [{
            match: [/function/, /\s+/, ju, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [ou],
          illegal: /%/
        };
      const Ku = {
        match: Eu.concat(/\b/, (Vu = [...qu, "super", "import"].map((uu => `${uu}\\s*\\(`)), Eu.concat("(?!", Vu.join("|"), ")")), ju, Eu.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Vu;
      const ru = {
          NN: Eu.concat(/\./, Eu.lookahead(Eu.concat(ju, /(?![0-9A-Za-z$_(])/))),
          end: ju,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Qu = {
          match: [/get|set/, /\s+/, ju, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            NN: /\(\)/
          }, ou]
        },
        iu = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + uu.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Wu = {
          match: [/const|var|let/, /\s+/, ju, /\s*/, /=\s*/, /(async\s*)?/, Eu.lookahead(iu)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [ou]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Ou,
        exports: {
          PARAMS_CONTAINS: Pu,
          CLASS_REFERENCE: mu
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
          NN: /^\s*['"]use (strict|asm)['"]/
        }, uu.APOS_STRING_MODE, uu.QUOTE_STRING_MODE, eu, Gu, pu, wu, Ju, {
          match: /\$\d+/
        }, gu, mu, {
          scope: "attr",
          match: ju + Eu.lookahead(":"),
          relevance: 0
        }, Wu, {
          NN: "(" + uu.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Ju, uu.REGEXP_MODE, {
            className: "function",
            NN: iu,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                NN: uu.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                NN: /\(\s*\)/,
                skip: !0
              }, {
                NN: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Ou,
                contains: Pu
              }]
            }]
          }, {
            NN: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              NN: bu,
              end: cu
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              NN: Nu.NN,
              "on:begin": Nu.isTrulyOpeningTag,
              end: Nu.end
            }],
            subLanguage: "xml",
            contains: [{
              NN: Nu.NN,
              end: Nu.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, vu, {
          beginKeywords: "while if switch catch for"
        }, {
          NN: "\\b(?!function)" + uu.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [ou, uu.inherit(uu.TITLE_MODE, {
            NN: ju,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, ru, {
          match: "\\$" + ju,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [ou]
        }, Ku, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, ku, Qu, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4925: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => cu
    });
    const su = "[A-Za-z$_][0-9A-Za-z$_]*",
      Uu = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Zu = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Xu = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      lu = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      qu = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      fu = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Cu = [].concat(qu, Xu, lu);

    function bu(uu) {
      const Eu = uu.regex,
        ju = su,
        bu = "<>",
        cu = "</>",
        Nu = {
          NN: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (uu, Eu) => {
            const ju = uu[0].length + uu.index,
              su = uu.input[ju];
            if ("<" === su || "," === su) return void Eu.ignoreMatch();
            let Uu;
            ">" === su && (((uu, Eu) => {
              let {
                after: ju
              } = Eu;
              const su = "</" + uu[0].slice(1);
              return -1 !== uu.input.indexOf(su, ju)
            })(uu, {
              after: ju
            }) || Eu.ignoreMatch());
            const Zu = uu.input.substring(ju);
            ((Uu = Zu.match(/^\s*=/)) || (Uu = Zu.match(/^\s+extends\s+/)) && 0 === Uu.index) && Eu.ignoreMatch()
          }
        },
        Ou = {
          $pattern: su,
          keyword: Uu,
          literal: Zu,
          built_in: Cu,
          "variable.language": fu
        },
        Yu = "[0-9](_?[0-9])*",
        hu = `\\.(${Yu})`,
        Du = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        gu = {
          className: "number",
          variants: [{
            NN: `(\\b(${Du})((${hu})|\\.)?|(${hu}))[eE][+-]?(${Yu})\\b`
          }, {
            NN: `\\b(${Du})\\b((${hu})\\b|\\.)?|(${hu})\\b`
          }, {
            NN: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            NN: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            NN: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            NN: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            NN: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Mu = {
          className: "subst",
          NN: "\\$\\{",
          end: "\\}",
          keywords: Ou,
          contains: []
        },
        eu = {
          NN: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Mu],
            subLanguage: "xml"
          }
        },
        Gu = {
          NN: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Mu],
            subLanguage: "css"
          }
        },
        pu = {
          NN: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [uu.BACKSLASH_ESCAPE, Mu],
            subLanguage: "graphql"
          }
        },
        wu = {
          className: "string",
          NN: "`",
          end: "`",
          contains: [uu.BACKSLASH_ESCAPE, Mu]
        },
        Ju = {
          className: "comment",
          variants: [uu.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              NN: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                NN: "@[A-Za-z]+"
              }, {
                className: "type",
                NN: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                NN: ju + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                NN: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), uu.C_BLOCK_COMMENT_MODE, uu.C_LINE_COMMENT_MODE]
        },
        du = [uu.APOS_STRING_MODE, uu.QUOTE_STRING_MODE, eu, Gu, pu, wu, {
          match: /\$\d+/
        }, gu];
      Mu.contains = du.concat({
        NN: /\{/,
        end: /\}/,
        keywords: Ou,
        contains: ["self"].concat(du)
      });
      const au = [].concat(Ju, Mu.contains),
        Pu = au.concat([{
          NN: /(\s*)\(/,
          end: /\)/,
          keywords: Ou,
          contains: ["self"].concat(au)
        }]),
        ou = {
          className: "params",
          NN: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Ou,
          contains: Pu
        },
        ku = {
          variants: [{
            match: [/class/, /\s+/, ju, /\s+/, /extends/, /\s+/, Eu.concat(ju, "(", Eu.concat(/\./, ju), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ju],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        mu = {
          relevance: 0,
          match: Eu.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Xu, ...lu]
          }
        },
        vu = {
          variants: [{
            match: [/function/, /\s+/, ju, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [ou],
          illegal: /%/
        };
      const Ku = {
        match: Eu.concat(/\b/, (Vu = [...qu, "super", "import"].map((uu => `${uu}\\s*\\(`)), Eu.concat("(?!", Vu.join("|"), ")")), ju, Eu.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Vu;
      const ru = {
          NN: Eu.concat(/\./, Eu.lookahead(Eu.concat(ju, /(?![0-9A-Za-z$_(])/))),
          end: ju,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Qu = {
          match: [/get|set/, /\s+/, ju, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            NN: /\(\)/
          }, ou]
        },
        iu = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + uu.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Wu = {
          match: [/const|var|let/, /\s+/, ju, /\s*/, /=\s*/, /(async\s*)?/, Eu.lookahead(iu)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [ou]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Ou,
        exports: {
          PARAMS_CONTAINS: Pu,
          CLASS_REFERENCE: mu
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
          NN: /^\s*['"]use (strict|asm)['"]/
        }, uu.APOS_STRING_MODE, uu.QUOTE_STRING_MODE, eu, Gu, pu, wu, Ju, {
          match: /\$\d+/
        }, gu, mu, {
          scope: "attr",
          match: ju + Eu.lookahead(":"),
          relevance: 0
        }, Wu, {
          NN: "(" + uu.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Ju, uu.REGEXP_MODE, {
            className: "function",
            NN: iu,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                NN: uu.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                NN: /\(\s*\)/,
                skip: !0
              }, {
                NN: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Ou,
                contains: Pu
              }]
            }]
          }, {
            NN: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              NN: bu,
              end: cu
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              NN: Nu.NN,
              "on:begin": Nu.isTrulyOpeningTag,
              end: Nu.end
            }],
            subLanguage: "xml",
            contains: [{
              NN: Nu.NN,
              end: Nu.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, vu, {
          beginKeywords: "while if switch catch for"
        }, {
          NN: "\\b(?!function)" + uu.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [ou, uu.inherit(uu.TITLE_MODE, {
            NN: ju,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, ru, {
          match: "\\$" + ju,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [ou]
        }, Ku, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, ku, Qu, {
          match: /\$[(.]/
        }]
      }
    }

    function cu(uu) {
      const Eu = uu.regex,
        ju = bu(uu),
        Xu = su,
        lu = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        qu = {
          NN: [/namespace/, /\s+/, uu.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        cu = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: lu
          },
          contains: [ju.exports.CLASS_REFERENCE]
        },
        Nu = {
          $pattern: su,
          keyword: Uu.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Zu,
          built_in: Cu.concat(lu),
          "variable.language": fu
        },
        Ou = {
          className: "meta",
          NN: "@" + Xu
        },
        Yu = (uu, Eu, ju) => {
          const su = uu.contains.findIndex((uu => uu.label === Eu));
          if (-1 === su) throw new Error("can not find mode to replace");
          uu.contains.splice(su, 1, ju)
        };
      Object.assign(ju.keywords, Nu), ju.exports.PARAMS_CONTAINS.push(Ou);
      const hu = ju.contains.find((uu => "attr" === uu.scope)),
        Du = Object.assign({}, hu, {
          match: Eu.concat(Xu, Eu.lookahead(/\s*\?:/))
        });
      ju.exports.PARAMS_CONTAINS.push([ju.exports.CLASS_REFERENCE, hu, Du]), ju.contains = ju.contains.concat([Ou, qu, cu, Du]), Yu(ju, "shebang", uu.SHEBANG()), Yu(ju, "use_strict", {
        className: "meta",
        relevance: 10,
        NN: /^\s*['"]use strict['"]/
      });
      return ju.contains.find((uu => "func.def" === uu.label)).relevance = 0, Object.assign(ju, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), ju
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);