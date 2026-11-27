export const id = 93;
export const ids = [93];
export const modules = {
  5204: ee => {
    function ie(ee) {
      return ee instanceof Map ? ee.clear = ee.delete = ee.set = function() {
        throw new Error("map is read-only")
      } : ee instanceof Set && (ee.add = ee.clear = ee.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(ee), Object.getOwnPropertyNames(ee).forEach((He => {
        const ye = ee[He],
          be = typeof ye;
        "object" !== be && "function" !== be || Object.isFrozen(ye) || ie(ye)
      })), ee
    }
    class He {
      constructor(ee) {
        void 0 === ee.data && (ee.data = {}), this.data = ee.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function ye(ee) {
      return ee.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function be(ee) {
      const ie = Object.create(null);
      for (const Me in ee) ie[Me] = ee[Me];
      for (var He = arguments.length, ye = new Array(He > 1 ? He - 1 : 0), be = 1; be < He; be++) ye[be - 1] = arguments[be];
      return ye.forEach((function(ee) {
        for (const He in ee) ie[He] = ee[He]
      })), ie
    }
    const Me = ee => !!ee.scope;
    class Ke {
      constructor(ee, ie) {
        this.buffer = "", this.classPrefix = ie.classPrefix, ee.walk(this)
      }
      addText(ee) {
        this.buffer += ye(ee)
      }
      openNode(ee) {
        if (!Me(ee)) return;
        const ie = ((ee, ie) => {
          let {
            prefix: He
          } = ie;
          if (ee.startsWith("language:")) return ee.replace("language:", "language-");
          if (ee.includes(".")) {
            const ie = ee.split(".");
            return [`${He}${ie.shift()}`, ...ie.map(((ee, ie) => `${ee}${"_".repeat(ie+1)}`))].join(" ")
          }
          return `${He}${ee}`
        })(ee.scope, {
          prefix: this.classPrefix
        });
        this.span(ie)
      }
      closeNode(ee) {
        Me(ee) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(ee) {
        this.buffer += `<span class="${ee}">`
      }
    }
    const Ue = function() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ie = {
        children: []
      };
      return Object.assign(ie, ee), ie
    };
    class Fe {
      constructor() {
        this.TE = Ue(), this.stack = [this.TE]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.TE
      }
      add(ee) {
        this.top.children.push(ee)
      }
      openNode(ee) {
        const ie = Ue({
          scope: ee
        });
        this.add(ie), this.stack.push(ie)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.TE, null, 4)
      }
      walk(ee) {
        return this.constructor._walk(ee, this.TE)
      }
      static _walk(ee, ie) {
        return "string" === typeof ie ? ee.addText(ie) : ie.children && (ee.openNode(ie), ie.children.forEach((ie => this._walk(ee, ie))), ee.closeNode(ie)), ee
      }
      static _collapse(ee) {
        "string" !== typeof ee && ee.children && (ee.children.every((ee => "string" === typeof ee)) ? ee.children = [ee.children.join("")] : ee.children.forEach((ee => {
          Fe._collapse(ee)
        })))
      }
    }
    class Je extends Fe {
      constructor(ee) {
        super(), this.options = ee
      }
      addText(ee) {
        "" !== ee && this.add(ee)
      }
      startScope(ee) {
        this.openNode(ee)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(ee, ie) {
        const He = ee.root;
        ie && (He.scope = `language:${ie}`), this.add(He)
      }
      toHTML() {
        return new Ke(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function oe(ee) {
      return ee ? "string" === typeof ee ? ee : ee.source : null
    }

    function Re(ee) {
      return fe("(?=", ee, ")")
    }

    function ke(ee) {
      return fe("(?:", ee, ")*")
    }

    function qe(ee) {
      return fe("(?:", ee, ")?")
    }

    function fe() {
      for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
      return ie.map((ee => oe(ee))).join("")
    }

    function Te() {
      for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
      const ye = function(ee) {
        const ie = ee[ee.length - 1];
        return "object" === typeof ie && ie.constructor === Object ? (ee.splice(ee.length - 1, 1), ie) : {}
      }(ie);
      return "(" + (ye.capture ? "" : "?:") + ie.map((ee => oe(ee))).join("|") + ")"
    }

    function pe(ee) {
      return new RegExp(ee.toString() + "|").exec("").length - 1
    }
    const Xe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function ze(ee, ie) {
      let {
        joinWith: He
      } = ie, ye = 0;
      return ee.map((ee => {
        ye += 1;
        const ie = ye;
        let He = oe(ee),
          be = "";
        for (; He.length > 0;) {
          const ee = Xe.exec(He);
          if (!ee) {
            be += He;
            break
          }
          be += He.substring(0, ee.index), He = He.substring(ee.index + ee[0].length), "\\" === ee[0][0] && ee[1] ? be += "\\" + String(Number(ee[1]) + ie) : (be += ee[0], "(" === ee[0] && ye++)
        }
        return be
      })).map((ee => `(${ee})`)).join(He)
    }
    const Be = "[a-zA-Z]\\w*",
      Ee = "[a-zA-Z_]\\w*",
      ge = "\\b\\d+(\\.\\d+)?",
      Oe = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      de = "\\b(0b[01]+)",
      We = {
        gR: "\\\\[\\s\\S]",
        relevance: 0
      },
      te = {
        scope: "string",
        gR: "'",
        end: "'",
        illegal: "\\n",
        contains: [We]
      },
      Ze = {
        scope: "string",
        gR: '"',
        end: '"',
        illegal: "\\n",
        contains: [We]
      },
      we = function(ee, ie) {
        const He = be({
          scope: "comment",
          gR: ee,
          end: ie,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        He.contains.push({
          scope: "doctag",
          gR: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const ye = Te("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return He.contains.push({
          gR: fe(/[ ]+/, "(", ye, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), He
      },
      De = we("//", "$"),
      Pe = we("/\\*", "\\*/"),
      Ae = we("#", "$"),
      Ye = {
        scope: "number",
        gR: ge,
        relevance: 0
      },
      Ve = {
        scope: "number",
        gR: Oe,
        relevance: 0
      },
      ae = {
        scope: "number",
        gR: de,
        relevance: 0
      },
      ce = {
        scope: "regexp",
        gR: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [We, {
          gR: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [We]
        }]
      },
      xe = {
        scope: "title",
        gR: Be,
        relevance: 0
      },
      Le = {
        scope: "title",
        gR: Ee,
        relevance: 0
      },
      Ce = {
        gR: "\\.\\s*" + Ee,
        relevance: 0
      };
    var ve = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: te,
      BACKSLASH_ESCAPE: We,
      BINARY_NUMBER_MODE: ae,
      BINARY_NUMBER_RE: de,
      COMMENT: we,
      C_BLOCK_COMMENT_MODE: Pe,
      C_LINE_COMMENT_MODE: De,
      C_NUMBER_MODE: Ve,
      C_NUMBER_RE: Oe,
      END_SAME_AS_BEGIN: function(ee) {
        return Object.assign(ee, {
          "on:begin": (ee, ie) => {
            ie.data._beginMatch = ee[1]
          },
          "on:end": (ee, ie) => {
            ie.data._beginMatch !== ee[1] && ie.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Ae,
      IDENT_RE: Be,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Ce,
      NUMBER_MODE: Ye,
      NUMBER_RE: ge,
      PHRASAL_WORDS_MODE: {
        gR: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Ze,
      REGEXP_MODE: ce,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const ie = /^#![ ]*\//;
        return ee.binary && (ee.gR = fe(ie, /.*\b/, ee.binary, /\b.*/)), be({
          scope: "meta",
          gR: ie,
          end: /$/,
          relevance: 0,
          "on:begin": (ee, ie) => {
            0 !== ee.index && ie.ignoreMatch()
          }
        }, ee)
      },
      TITLE_MODE: xe,
      UNDERSCORE_IDENT_RE: Ee,
      UNDERSCORE_TITLE_MODE: Le
    });

    function ue(ee, ie) {
      "." === ee.input[ee.index - 1] && ie.ignoreMatch()
    }

    function me(ee, ie) {
      void 0 !== ee.className && (ee.scope = ee.className, delete ee.className)
    }

    function le(ee, ie) {
      ie && ee.beginKeywords && (ee.gR = "\\b(" + ee.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", ee.__beforeBegin = ue, ee.keywords = ee.keywords || ee.beginKeywords, delete ee.beginKeywords, void 0 === ee.relevance && (ee.relevance = 0))
    }

    function Se(ee, ie) {
      Array.isArray(ee.illegal) && (ee.illegal = Te(...ee.illegal))
    }

    function ne(ee, ie) {
      if (ee.match) {
        if (ee.gR || ee.end) throw new Error("begin & end are not supported with match");
        ee.gR = ee.match, delete ee.match
      }
    }

    function je(ee, ie) {
      void 0 === ee.relevance && (ee.relevance = 1)
    }
    const se = (ee, ie) => {
        if (!ee.beforeMatch) return;
        if (ee.starts) throw new Error("beforeMatch cannot be used with starts");
        const He = Object.assign({}, ee);
        Object.keys(ee).forEach((ie => {
          delete ee[ie]
        })), ee.keywords = He.keywords, ee.gR = fe(He.beforeMatch, Re(He.gR)), ee.starts = {
          relevance: 0,
          contains: [Object.assign(He, {
            endsParent: !0
          })]
        }, ee.relevance = 0, delete He.beforeMatch
      },
      Ie = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function he(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const ye = Object.create(null);
      return "string" === typeof ee ? be(He, ee.split(" ")) : Array.isArray(ee) ? be(He, ee) : Object.keys(ee).forEach((function(He) {
        Object.assign(ye, he(ee[He], ie, He))
      })), ye;

      function be(ee, He) {
        ie && (He = He.map((ee => ee.toLowerCase()))), He.forEach((function(ie) {
          const He = ie.split("|");
          ye[He[0]] = [ee, Ne(He[0], He[1])]
        }))
      }
    }

    function Ne(ee, ie) {
      return ie ? Number(ie) : function(ee) {
        return Ie.includes(ee.toLowerCase())
      }(ee) ? 0 : 1
    }
    const Ge = {},
      re = ee => {
        console.error(ee)
      },
      Qe = function(ee) {
        for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
        console.log(`WARN: ${ee}`, ...He)
      },
      ei = (ee, ie) => {
        Ge[`${ee}/${ie}`] || (console.log(`Deprecated as of ${ee}. ${ie}`), Ge[`${ee}/${ie}`] = !0)
      },
      ii = new Error;

    function Hi(ee, ie, He) {
      let {
        key: ye
      } = He, be = 0;
      const Me = ee[ye],
        Ke = {},
        Ue = {};
      for (let Fe = 1; Fe <= ie.length; Fe++) Ue[Fe + be] = Me[Fe], Ke[Fe + be] = !0, be += pe(ie[Fe - 1]);
      ee[ye] = Ue, ee[ye]._emit = Ke, ee[ye]._multi = !0
    }

    function yi(ee) {
      ! function(ee) {
        ee.scope && "object" === typeof ee.scope && null !== ee.scope && (ee.beginScope = ee.scope, delete ee.scope)
      }(ee), "string" === typeof ee.beginScope && (ee.beginScope = {
          _wrap: ee.beginScope
        }), "string" === typeof ee.endScope && (ee.endScope = {
          _wrap: ee.endScope
        }),
        function(ee) {
          if (Array.isArray(ee.gR)) {
            if (ee.skip || ee.excludeBegin || ee.returnBegin) throw re("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ii;
            if ("object" !== typeof ee.beginScope || null === ee.beginScope) throw re("beginScope must be object"), ii;
            Hi(ee, ee.gR, {
              key: "beginScope"
            }), ee.gR = ze(ee.gR, {
              joinWith: ""
            })
          }
        }(ee),
        function(ee) {
          if (Array.isArray(ee.end)) {
            if (ee.skip || ee.excludeEnd || ee.returnEnd) throw re("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ii;
            if ("object" !== typeof ee.endScope || null === ee.endScope) throw re("endScope must be object"), ii;
            Hi(ee, ee.end, {
              key: "endScope"
            }), ee.end = ze(ee.end, {
              joinWith: ""
            })
          }
        }(ee)
    }

    function bi(ee) {
      function ie(ie, He) {
        return new RegExp(oe(ie), "m" + (ee.case_insensitive ? "i" : "") + (ee.unicodeRegex ? "u" : "") + (He ? "g" : ""))
      }
      class He {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(ee, ie) {
          ie.position = this.position++, this.matchIndexes[this.matchAt] = ie, this.regexes.push([ie, ee]), this.matchAt += pe(ee) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const ee = this.regexes.map((ee => ee[1]));
          this.matcherRe = ie(ze(ee, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(ee) {
          this.matcherRe.lastIndex = this.lastIndex;
          const ie = this.matcherRe.exec(ee);
          if (!ie) return null;
          const He = ie.findIndex(((ee, ie) => ie > 0 && void 0 !== ee)),
            ye = this.matchIndexes[He];
          return ie.splice(0, He), Object.assign(ie, ye)
        }
      }
      class ye {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(ee) {
          if (this.multiRegexes[ee]) return this.multiRegexes[ee];
          const ie = new He;
          return this.rules.slice(ee).forEach((ee => {
            let [He, ye] = ee;
            return ie.addRule(He, ye)
          })), ie.compile(), this.multiRegexes[ee] = ie, ie
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(ee, ie) {
          this.rules.push([ee, ie]), "gR" === ie.type && this.count++
        }
        exec(ee) {
          const ie = this.getMatcher(this.regexIndex);
          ie.lastIndex = this.lastIndex;
          let He = ie.exec(ee);
          if (this.resumingScanAtSamePosition())
            if (He && He.index === this.lastIndex);
            else {
              const ie = this.getMatcher(0);
              ie.lastIndex = this.lastIndex + 1, He = ie.exec(ee)
            } return He && (this.regexIndex += He.position + 1, this.regexIndex === this.count && this.considerAll()), He
        }
      }
      if (ee.compilerExtensions || (ee.compilerExtensions = []), ee.contains && ee.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return ee.classNameAliases = be(ee.classNameAliases || {}),
        function He(Me, Ke) {
          const Ue = Me;
          if (Me.isCompiled) return Ue;
          [me, ne, yi, se].forEach((ee => ee(Me, Ke))), ee.compilerExtensions.forEach((ee => ee(Me, Ke))), Me.__beforeBegin = null, [le, Se, je].forEach((ee => ee(Me, Ke))), Me.isCompiled = !0;
          let Fe = null;
          return "object" === typeof Me.keywords && Me.keywords.$pattern && (Me.keywords = Object.assign({}, Me.keywords), Fe = Me.keywords.$pattern, delete Me.keywords.$pattern), Fe = Fe || /\w+/, Me.keywords && (Me.keywords = he(Me.keywords, ee.case_insensitive)), Ue.keywordPatternRe = ie(Fe, !0), Ke && (Me.gR || (Me.gR = /\B|\b/), Ue.beginRe = ie(Ue.gR), Me.end || Me.endsWithParent || (Me.end = /\B|\b/), Me.end && (Ue.endRe = ie(Ue.end)), Ue.terminatorEnd = oe(Ue.end) || "", Me.endsWithParent && Ke.terminatorEnd && (Ue.terminatorEnd += (Me.end ? "|" : "") + Ke.terminatorEnd)), Me.illegal && (Ue.illegalRe = ie(Me.illegal)), Me.contains || (Me.contains = []), Me.contains = [].concat(...Me.contains.map((function(ee) {
            return function(ee) {
              ee.variants && !ee.cachedVariants && (ee.cachedVariants = ee.variants.map((function(ie) {
                return be(ee, {
                  variants: null
                }, ie)
              })));
              if (ee.cachedVariants) return ee.cachedVariants;
              if (Mi(ee)) return be(ee, {
                starts: ee.starts ? be(ee.starts) : null
              });
              if (Object.isFrozen(ee)) return be(ee);
              return ee
            }("self" === ee ? Me : ee)
          }))), Me.contains.forEach((function(ee) {
            He(ee, Ue)
          })), Me.starts && He(Me.starts, Ke), Ue.matcher = function(ee) {
            const ie = new ye;
            return ee.contains.forEach((ee => ie.addRule(ee.gR, {
              rule: ee,
              type: "gR"
            }))), ee.terminatorEnd && ie.addRule(ee.terminatorEnd, {
              type: "end"
            }), ee.illegal && ie.addRule(ee.illegal, {
              type: "illegal"
            }), ie
          }(Ue), Ue
        }(ee)
    }

    function Mi(ee) {
      return !!ee && (ee.endsWithParent || Mi(ee.starts))
    }
    class Ki extends Error {
      constructor(ee, ie) {
        super(ee), this.name = "HTMLInjectionError", this.html = ie
      }
    }
    const Ui = ye,
      Fi = be,
      Ji = Symbol("nomatch"),
      oi = function(ee) {
        const ye = Object.create(null),
          be = Object.create(null),
          Me = [];
        let Ke = !0;
        const Ue = "Could not find the language '{}', did you forget to load/include a language module?",
          Fe = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let oe = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Je
        };

        function pe(ee) {
          return oe.noHighlightRe.test(ee)
        }

        function Xe(ee, ie, He) {
          let ye = "",
            be = "";
          "object" === typeof ie ? (ye = ee, He = ie.ignoreIllegals, be = ie.language) : (ei("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ei("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), be = ee, ye = ie), void 0 === He && (He = !0);
          const Me = {
            code: ye,
            language: be
          };
          Ze("before:highlight", Me);
          const Ke = Me.result ? Me.result : ze(Me.language, Me.code, He);
          return Ke.code = Me.code, Ze("after:highlight", Ke), Ke
        }

        function ze(ee, ie, be, Me) {
          const Fe = Object.create(null);

          function Je() {
            if (!Ze.keywords) return void De.addText(Pe);
            let ee = 0;
            Ze.keywordPatternRe.lastIndex = 0;
            let ie = Ze.keywordPatternRe.exec(Pe),
              He = "";
            for (; ie;) {
              He += Pe.substring(ee, ie.index);
              const be = Oe.case_insensitive ? ie[0].toLowerCase() : ie[0],
                Me = (ye = be, Ze.keywords[ye]);
              if (Me) {
                const [ee, ye] = Me;
                if (De.addText(He), He = "", Fe[be] = (Fe[be] || 0) + 1, Fe[be] <= 7 && (Ae += ye), ee.startsWith("_")) He += ie[0];
                else {
                  const He = Oe.classNameAliases[ee] || ee;
                  ke(ie[0], He)
                }
              } else He += ie[0];
              ee = Ze.keywordPatternRe.lastIndex, ie = Ze.keywordPatternRe.exec(Pe)
            }
            var ye;
            He += Pe.substring(ee), De.addText(He)
          }

          function Re() {
            null != Ze.subLanguage ? function() {
              if ("" === Pe) return;
              let ee = null;
              if ("string" === typeof Ze.subLanguage) {
                if (!ye[Ze.subLanguage]) return void De.addText(Pe);
                ee = ze(Ze.subLanguage, Pe, !0, we[Ze.subLanguage]), we[Ze.subLanguage] = ee._top
              } else ee = Be(Pe, Ze.subLanguage.length ? Ze.subLanguage : null);
              Ze.relevance > 0 && (Ae += ee.relevance), De.__addSublanguage(ee._emitter, ee.language)
            }() : Je(), Pe = ""
          }

          function ke(ee, ie) {
            "" !== ee && (De.startScope(ie), De.addText(ee), De.endScope())
          }

          function qe(ee, ie) {
            let He = 1;
            const ye = ie.length - 1;
            for (; He <= ye;) {
              if (!ee._emit[He]) {
                He++;
                continue
              }
              const ye = Oe.classNameAliases[ee[He]] || ee[He],
                be = ie[He];
              ye ? ke(be, ye) : (Pe = be, Je(), Pe = ""), He++
            }
          }

          function fe(ee, ie) {
            return ee.scope && "string" === typeof ee.scope && De.openNode(Oe.classNameAliases[ee.scope] || ee.scope), ee.beginScope && (ee.beginScope._wrap ? (ke(Pe, Oe.classNameAliases[ee.beginScope._wrap] || ee.beginScope._wrap), Pe = "") : ee.beginScope._multi && (qe(ee.beginScope, ie), Pe = "")), Ze = Object.create(ee, {
              parent: {
                value: Ze
              }
            }), Ze
          }

          function Te(ee, ie, ye) {
            let be = function(ee, ie) {
              const He = ee && ee.exec(ie);
              return He && 0 === He.index
            }(ee.endRe, ye);
            if (be) {
              if (ee["on:end"]) {
                const ye = new He(ee);
                ee["on:end"](ie, ye), ye.isMatchIgnored && (be = !1)
              }
              if (be) {
                for (; ee.endsParent && ee.parent;) ee = ee.parent;
                return ee
              }
            }
            if (ee.endsWithParent) return Te(ee.parent, ie, ye)
          }

          function pe(ee) {
            return 0 === Ze.matcher.regexIndex ? (Pe += ee[0], 1) : (ae = !0, 0)
          }

          function Xe(ee) {
            const He = ee[0],
              ye = ie.substring(ee.index),
              be = Te(Ze, ee, ye);
            if (!be) return Ji;
            const Me = Ze;
            Ze.endScope && Ze.endScope._wrap ? (Re(), ke(He, Ze.endScope._wrap)) : Ze.endScope && Ze.endScope._multi ? (Re(), qe(Ze.endScope, ee)) : Me.skip ? Pe += He : (Me.returnEnd || Me.excludeEnd || (Pe += He), Re(), Me.excludeEnd && (Pe = He));
            do {
              Ze.scope && De.closeNode(), Ze.skip || Ze.subLanguage || (Ae += Ze.relevance), Ze = Ze.parent
            } while (Ze !== be.parent);
            return be.starts && fe(be.starts, ee), Me.returnEnd ? 0 : He.length
          }
          let Ee = {};

          function ge(ye, Me) {
            const Ue = Me && Me[0];
            if (Pe += ye, null == Ue) return Re(), 0;
            if ("gR" === Ee.type && "end" === Me.type && Ee.index === Me.index && "" === Ue) {
              if (Pe += ie.slice(Me.index, Me.index + 1), !Ke) {
                const ie = new Error(`0 width match regex (${ee})`);
                throw ie.languageName = ee, ie.badRule = Ee.rule, ie
              }
              return 1
            }
            if (Ee = Me, "gR" === Me.type) return function(ee) {
              const ie = ee[0],
                ye = ee.rule,
                be = new He(ye),
                Me = [ye.__beforeBegin, ye["on:begin"]];
              for (const He of Me)
                if (He && (He(ee, be), be.isMatchIgnored)) return pe(ie);
              return ye.skip ? Pe += ie : (ye.excludeBegin && (Pe += ie), Re(), ye.returnBegin || ye.excludeBegin || (Pe = ie)), fe(ye, ee), ye.returnBegin ? 0 : ie.length
            }(Me);
            if ("illegal" === Me.type && !be) {
              const ee = new Error('Illegal lexeme "' + Ue + '" for mode "' + (Ze.scope || "<unnamed>") + '"');
              throw ee.mode = Ze, ee
            }
            if ("end" === Me.type) {
              const ee = Xe(Me);
              if (ee !== Ji) return ee
            }
            if ("illegal" === Me.type && "" === Ue) return Pe += "\n", 1;
            if (Ve > 1e5 && Ve > 3 * Me.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Pe += Ue, Ue.length
          }
          const Oe = de(ee);
          if (!Oe) throw re(Ue.replace("{}", ee)), new Error('Unknown language: "' + ee + '"');
          const We = bi(Oe);
          let te = "",
            Ze = Me || We;
          const we = {},
            De = new oe.__emitter(oe);
          ! function() {
            const ee = [];
            for (let ie = Ze; ie !== Oe; ie = ie.parent) ie.scope && ee.unshift(ie.scope);
            ee.forEach((ee => De.openNode(ee)))
          }();
          let Pe = "",
            Ae = 0,
            Ye = 0,
            Ve = 0,
            ae = !1;
          try {
            if (Oe.__emitTokens) Oe.__emitTokens(ie, De);
            else {
              for (Ze.matcher.considerAll();;) {
                Ve++, ae ? ae = !1 : Ze.matcher.considerAll(), Ze.matcher.lastIndex = Ye;
                const ee = Ze.matcher.exec(ie);
                if (!ee) break;
                const He = ge(ie.substring(Ye, ee.index), ee);
                Ye = ee.index + He
              }
              ge(ie.substring(Ye))
            }
            return De.finalize(), te = De.toHTML(), {
              language: ee,
              value: te,
              relevance: Ae,
              illegal: !1,
              _emitter: De,
              _top: Ze
            }
          } catch (ce) {
            if (ce.message && ce.message.includes("Illegal")) return {
              language: ee,
              value: Ui(ie),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: ce.message,
                index: Ye,
                context: ie.slice(Ye - 100, Ye + 100),
                mode: ce.mode,
                resultSoFar: te
              },
              _emitter: De
            };
            if (Ke) return {
              language: ee,
              value: Ui(ie),
              illegal: !1,
              relevance: 0,
              errorRaised: ce,
              _emitter: De,
              _top: Ze
            };
            throw ce
          }
        }

        function Be(ee, ie) {
          ie = ie || oe.languages || Object.keys(ye);
          const He = function(ee) {
              const ie = {
                value: Ui(ee),
                illegal: !1,
                relevance: 0,
                _top: Fe,
                _emitter: new oe.__emitter(oe)
              };
              return ie._emitter.addText(ee), ie
            }(ee),
            be = ie.filter(de).filter(te).map((ie => ze(ie, ee, !1)));
          be.unshift(He);
          const Me = be.sort(((ee, ie) => {
              if (ee.relevance !== ie.relevance) return ie.relevance - ee.relevance;
              if (ee.language && ie.language) {
                if (de(ee.language).supersetOf === ie.language) return 1;
                if (de(ie.language).supersetOf === ee.language) return -1
              }
              return 0
            })),
            [Ke, Ue] = Me,
            Je = Ke;
          return Je.secondBest = Ue, Je
        }

        function Ee(ee) {
          let ie = null;
          const He = function(ee) {
            let ie = ee.className + " ";
            ie += ee.parentNode ? ee.parentNode.className : "";
            const He = oe.languageDetectRe.exec(ie);
            if (He) {
              const ie = de(He[1]);
              return ie || (Qe(Ue.replace("{}", He[1])), Qe("Falling back to no-highlight mode for this block.", ee)), ie ? He[1] : "no-highlight"
            }
            return ie.split(/\s+/).find((ee => pe(ee) || de(ee)))
          }(ee);
          if (pe(He)) return;
          if (Ze("before:highlightElement", {
              el: ee,
              language: He
            }), ee.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", ee);
          if (ee.children.length > 0 && (oe.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(ee)), oe.throwUnescapedHTML)) {
            throw new Ki("One of your code blocks includes unescaped HTML.", ee.innerHTML)
          }
          ie = ee;
          const ye = ie.textContent,
            Me = He ? Xe(ye, {
              language: He,
              ignoreIllegals: !0
            }) : Be(ye);
          ee.innerHTML = Me.value, ee.dataset.highlighted = "yes",
            function(ee, ie, He) {
              const ye = ie && be[ie] || He;
              ee.classList.add("hljs"), ee.classList.add(`language-${ye}`)
            }(ee, He, Me.language), ee.result = {
              language: Me.language,
              re: Me.relevance,
              relevance: Me.relevance
            }, Me.secondBest && (ee.secondBest = {
              language: Me.secondBest.language,
              relevance: Me.secondBest.relevance
            }), Ze("after:highlightElement", {
              el: ee,
              result: Me,
              text: ye
            })
        }
        let ge = !1;

        function Oe() {
          if ("loading" === document.readyState) return ge || window.addEventListener("DOMContentLoaded", (function() {
            Oe()
          }), !1), void(ge = !0);
          document.querySelectorAll(oe.cssSelector).forEach(Ee)
        }

        function de(ee) {
          return ee = (ee || "").toLowerCase(), ye[ee] || ye[be[ee]]
        }

        function We(ee, ie) {
          let {
            languageName: He
          } = ie;
          "string" === typeof ee && (ee = [ee]), ee.forEach((ee => {
            be[ee.toLowerCase()] = He
          }))
        }

        function te(ee) {
          const ie = de(ee);
          return ie && !ie.disableAutodetect
        }

        function Ze(ee, ie) {
          const He = ee;
          Me.forEach((function(ee) {
            ee[He] && ee[He](ie)
          }))
        }
        Object.assign(ee, {
          highlight: Xe,
          highlightAuto: Be,
          highlightAll: Oe,
          highlightElement: Ee,
          highlightBlock: function(ee) {
            return ei("10.7.0", "highlightBlock will be removed entirely in v12.0"), ei("10.7.0", "Please use highlightElement now."), Ee(ee)
          },
          configure: function(ee) {
            oe = Fi(oe, ee)
          },
          initHighlighting: () => {
            Oe(), ei("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            Oe(), ei("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(ie, He) {
            let be = null;
            try {
              be = He(ee)
            } catch (Me) {
              if (re("Language definition for '{}' could not be registered.".replace("{}", ie)), !Ke) throw Me;
              re(Me), be = Fe
            }
            be.name || (be.name = ie), ye[ie] = be, be.rawDefinition = He.bind(null, ee), be.aliases && We(be.aliases, {
              languageName: ie
            })
          },
          unregisterLanguage: function(ee) {
            delete ye[ee];
            for (const ie of Object.keys(be)) be[ie] === ee && delete be[ie]
          },
          listLanguages: function() {
            return Object.keys(ye)
          },
          getLanguage: de,
          registerAliases: We,
          autoDetection: te,
          inherit: Fi,
          addPlugin: function(ee) {
            ! function(ee) {
              ee["before:highlightBlock"] && !ee["before:highlightElement"] && (ee["before:highlightElement"] = ie => {
                ee["before:highlightBlock"](Object.assign({
                  block: ie.el
                }, ie))
              }), ee["after:highlightBlock"] && !ee["after:highlightElement"] && (ee["after:highlightElement"] = ie => {
                ee["after:highlightBlock"](Object.assign({
                  block: ie.el
                }, ie))
              })
            }(ee), Me.push(ee)
          },
          removePlugin: function(ee) {
            const ie = Me.indexOf(ee); - 1 !== ie && Me.splice(ie, 1)
          }
        }), ee.debugMode = function() {
          Ke = !1
        }, ee.safeMode = function() {
          Ke = !0
        }, ee.versionString = "11.11.1", ee.regex = {
          concat: fe,
          lookahead: Re,
          either: Te,
          optional: qe,
          anyNumberOfTimes: ke
        };
        for (const He in ve) "object" === typeof ve[He] && ie(ve[He]);
        return Object.assign(ee, ve), ee
      },
      Ri = oi({});
    Ri.newInstance = () => oi({}), ee.exports = Ri, Ri.HighlightJS = Ri, Ri.default = Ri
  },
  5198: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    const ye = He(5204)
  },
  5209: (ee, ie, He) => {
    He.d(ie, {
      b: () => Re
    });
    const ye = "[A-Za-z$_][0-9A-Za-z$_]*",
      be = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Me = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Ke = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Ue = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Fe = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Je = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      oe = [].concat(Fe, Ke, Ue);

    function Re(ee) {
      const ie = ee.regex,
        He = ye,
        Re = "<>",
        ke = "</>",
        qe = {
          gR: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (ee, ie) => {
            const He = ee[0].length + ee.index,
              ye = ee.input[He];
            if ("<" === ye || "," === ye) return void ie.ignoreMatch();
            let be;
            ">" === ye && (((ee, ie) => {
              let {
                after: He
              } = ie;
              const ye = "</" + ee[0].slice(1);
              return -1 !== ee.input.indexOf(ye, He)
            })(ee, {
              after: He
            }) || ie.ignoreMatch());
            const Me = ee.input.substring(He);
            ((be = Me.match(/^\s*=/)) || (be = Me.match(/^\s+extends\s+/)) && 0 === be.index) && ie.ignoreMatch()
          }
        },
        fe = {
          $pattern: ye,
          keyword: be,
          literal: Me,
          built_in: oe,
          "variable.language": Je
        },
        Te = "[0-9](_?[0-9])*",
        pe = `\\.(${Te})`,
        Xe = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        ze = {
          className: "number",
          variants: [{
            gR: `(\\b(${Xe})((${pe})|\\.)?|(${pe}))[eE][+-]?(${Te})\\b`
          }, {
            gR: `\\b(${Xe})\\b((${pe})\\b|\\.)?|(${pe})\\b`
          }, {
            gR: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            gR: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            gR: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            gR: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            gR: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Be = {
          className: "subst",
          gR: "\\$\\{",
          end: "\\}",
          keywords: fe,
          contains: []
        },
        Ee = {
          gR: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [ee.BACKSLASH_ESCAPE, Be],
            subLanguage: "xml"
          }
        },
        ge = {
          gR: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [ee.BACKSLASH_ESCAPE, Be],
            subLanguage: "css"
          }
        },
        Oe = {
          gR: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [ee.BACKSLASH_ESCAPE, Be],
            subLanguage: "graphql"
          }
        },
        de = {
          className: "string",
          gR: "`",
          end: "`",
          contains: [ee.BACKSLASH_ESCAPE, Be]
        },
        We = {
          className: "comment",
          variants: [ee.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              gR: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                gR: "@[A-Za-z]+"
              }, {
                className: "type",
                gR: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                gR: He + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                gR: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), ee.C_BLOCK_COMMENT_MODE, ee.C_LINE_COMMENT_MODE]
        },
        te = [ee.APOS_STRING_MODE, ee.QUOTE_STRING_MODE, Ee, ge, Oe, de, {
          match: /\$\d+/
        }, ze];
      Be.contains = te.concat({
        gR: /\{/,
        end: /\}/,
        keywords: fe,
        contains: ["self"].concat(te)
      });
      const Ze = [].concat(We, Be.contains),
        we = Ze.concat([{
          gR: /(\s*)\(/,
          end: /\)/,
          keywords: fe,
          contains: ["self"].concat(Ze)
        }]),
        De = {
          className: "params",
          gR: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: fe,
          contains: we
        },
        Pe = {
          variants: [{
            match: [/class/, /\s+/, He, /\s+/, /extends/, /\s+/, ie.concat(He, "(", ie.concat(/\./, He), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, He],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Ae = {
          relevance: 0,
          match: ie.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Ke, ...Ue]
          }
        },
        Ye = {
          variants: [{
            match: [/function/, /\s+/, He, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [De],
          illegal: /%/
        };
      const Ve = {
        match: ie.concat(/\b/, (ae = [...Fe, "super", "import"].map((ee => `${ee}\\s*\\(`)), ie.concat("(?!", ae.join("|"), ")")), He, ie.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var ae;
      const ce = {
          gR: ie.concat(/\./, ie.lookahead(ie.concat(He, /(?![0-9A-Za-z$_(])/))),
          end: He,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        xe = {
          match: [/get|set/, /\s+/, He, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            gR: /\(\)/
          }, De]
        },
        Le = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + ee.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Ce = {
          match: [/const|var|let/, /\s+/, He, /\s*/, /=\s*/, /(async\s*)?/, ie.lookahead(Le)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [De]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: fe,
        exports: {
          PARAMS_CONTAINS: we,
          CLASS_REFERENCE: Ae
        },
        illegal: /#(?![$_A-z])/,
        contains: [ee.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          gR: /^\s*['"]use (strict|asm)['"]/
        }, ee.APOS_STRING_MODE, ee.QUOTE_STRING_MODE, Ee, ge, Oe, de, We, {
          match: /\$\d+/
        }, ze, Ae, {
          scope: "attr",
          match: He + ie.lookahead(":"),
          relevance: 0
        }, Ce, {
          gR: "(" + ee.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [We, ee.REGEXP_MODE, {
            className: "function",
            gR: Le,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                gR: ee.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                gR: /\(\s*\)/,
                skip: !0
              }, {
                gR: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: fe,
                contains: we
              }]
            }]
          }, {
            gR: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              gR: Re,
              end: ke
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              gR: qe.gR,
              "on:begin": qe.isTrulyOpeningTag,
              end: qe.end
            }],
            subLanguage: "xml",
            contains: [{
              gR: qe.gR,
              end: qe.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Ye, {
          beginKeywords: "while if switch catch for"
        }, {
          gR: "\\b(?!function)" + ee.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [De, ee.inherit(ee.TITLE_MODE, {
            gR: He,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, ce, {
          match: "\\$" + He,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [De]
        }, Ve, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Pe, xe, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5212: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke
    });
    const ye = "[A-Za-z$_][0-9A-Za-z$_]*",
      be = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Me = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Ke = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Ue = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Fe = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Je = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      oe = [].concat(Fe, Ke, Ue);

    function Re(ee) {
      const ie = ee.regex,
        He = ye,
        Re = "<>",
        ke = "</>",
        qe = {
          gR: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (ee, ie) => {
            const He = ee[0].length + ee.index,
              ye = ee.input[He];
            if ("<" === ye || "," === ye) return void ie.ignoreMatch();
            let be;
            ">" === ye && (((ee, ie) => {
              let {
                after: He
              } = ie;
              const ye = "</" + ee[0].slice(1);
              return -1 !== ee.input.indexOf(ye, He)
            })(ee, {
              after: He
            }) || ie.ignoreMatch());
            const Me = ee.input.substring(He);
            ((be = Me.match(/^\s*=/)) || (be = Me.match(/^\s+extends\s+/)) && 0 === be.index) && ie.ignoreMatch()
          }
        },
        fe = {
          $pattern: ye,
          keyword: be,
          literal: Me,
          built_in: oe,
          "variable.language": Je
        },
        Te = "[0-9](_?[0-9])*",
        pe = `\\.(${Te})`,
        Xe = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        ze = {
          className: "number",
          variants: [{
            gR: `(\\b(${Xe})((${pe})|\\.)?|(${pe}))[eE][+-]?(${Te})\\b`
          }, {
            gR: `\\b(${Xe})\\b((${pe})\\b|\\.)?|(${pe})\\b`
          }, {
            gR: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            gR: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            gR: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            gR: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            gR: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Be = {
          className: "subst",
          gR: "\\$\\{",
          end: "\\}",
          keywords: fe,
          contains: []
        },
        Ee = {
          gR: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [ee.BACKSLASH_ESCAPE, Be],
            subLanguage: "xml"
          }
        },
        ge = {
          gR: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [ee.BACKSLASH_ESCAPE, Be],
            subLanguage: "css"
          }
        },
        Oe = {
          gR: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [ee.BACKSLASH_ESCAPE, Be],
            subLanguage: "graphql"
          }
        },
        de = {
          className: "string",
          gR: "`",
          end: "`",
          contains: [ee.BACKSLASH_ESCAPE, Be]
        },
        We = {
          className: "comment",
          variants: [ee.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              gR: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                gR: "@[A-Za-z]+"
              }, {
                className: "type",
                gR: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                gR: He + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                gR: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), ee.C_BLOCK_COMMENT_MODE, ee.C_LINE_COMMENT_MODE]
        },
        te = [ee.APOS_STRING_MODE, ee.QUOTE_STRING_MODE, Ee, ge, Oe, de, {
          match: /\$\d+/
        }, ze];
      Be.contains = te.concat({
        gR: /\{/,
        end: /\}/,
        keywords: fe,
        contains: ["self"].concat(te)
      });
      const Ze = [].concat(We, Be.contains),
        we = Ze.concat([{
          gR: /(\s*)\(/,
          end: /\)/,
          keywords: fe,
          contains: ["self"].concat(Ze)
        }]),
        De = {
          className: "params",
          gR: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: fe,
          contains: we
        },
        Pe = {
          variants: [{
            match: [/class/, /\s+/, He, /\s+/, /extends/, /\s+/, ie.concat(He, "(", ie.concat(/\./, He), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, He],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Ae = {
          relevance: 0,
          match: ie.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Ke, ...Ue]
          }
        },
        Ye = {
          variants: [{
            match: [/function/, /\s+/, He, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [De],
          illegal: /%/
        };
      const Ve = {
        match: ie.concat(/\b/, (ae = [...Fe, "super", "import"].map((ee => `${ee}\\s*\\(`)), ie.concat("(?!", ae.join("|"), ")")), He, ie.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var ae;
      const ce = {
          gR: ie.concat(/\./, ie.lookahead(ie.concat(He, /(?![0-9A-Za-z$_(])/))),
          end: He,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        xe = {
          match: [/get|set/, /\s+/, He, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            gR: /\(\)/
          }, De]
        },
        Le = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + ee.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Ce = {
          match: [/const|var|let/, /\s+/, He, /\s*/, /=\s*/, /(async\s*)?/, ie.lookahead(Le)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [De]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: fe,
        exports: {
          PARAMS_CONTAINS: we,
          CLASS_REFERENCE: Ae
        },
        illegal: /#(?![$_A-z])/,
        contains: [ee.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          gR: /^\s*['"]use (strict|asm)['"]/
        }, ee.APOS_STRING_MODE, ee.QUOTE_STRING_MODE, Ee, ge, Oe, de, We, {
          match: /\$\d+/
        }, ze, Ae, {
          scope: "attr",
          match: He + ie.lookahead(":"),
          relevance: 0
        }, Ce, {
          gR: "(" + ee.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [We, ee.REGEXP_MODE, {
            className: "function",
            gR: Le,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                gR: ee.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                gR: /\(\s*\)/,
                skip: !0
              }, {
                gR: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: fe,
                contains: we
              }]
            }]
          }, {
            gR: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              gR: Re,
              end: ke
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              gR: qe.gR,
              "on:begin": qe.isTrulyOpeningTag,
              end: qe.end
            }],
            subLanguage: "xml",
            contains: [{
              gR: qe.gR,
              end: qe.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Ye, {
          beginKeywords: "while if switch catch for"
        }, {
          gR: "\\b(?!function)" + ee.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [De, ee.inherit(ee.TITLE_MODE, {
            gR: He,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, ce, {
          match: "\\$" + He,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [De]
        }, Ve, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Pe, xe, {
          match: /\$[(.]/
        }]
      }
    }

    function ke(ee) {
      const ie = ee.regex,
        He = Re(ee),
        Ke = ye,
        Ue = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Fe = {
          gR: [/namespace/, /\s+/, ee.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        ke = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Ue
          },
          contains: [He.exports.CLASS_REFERENCE]
        },
        qe = {
          $pattern: ye,
          keyword: be.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Me,
          built_in: oe.concat(Ue),
          "variable.language": Je
        },
        fe = {
          className: "meta",
          gR: "@" + Ke
        },
        Te = (ee, ie, He) => {
          const ye = ee.contains.findIndex((ee => ee.label === ie));
          if (-1 === ye) throw new Error("can not find mode to replace");
          ee.contains.splice(ye, 1, He)
        };
      Object.assign(He.keywords, qe), He.exports.PARAMS_CONTAINS.push(fe);
      const pe = He.contains.find((ee => "attr" === ee.scope)),
        Xe = Object.assign({}, pe, {
          match: ie.concat(Ke, ie.lookahead(/\s*\?:/))
        });
      He.exports.PARAMS_CONTAINS.push([He.exports.CLASS_REFERENCE, pe, Xe]), He.contains = He.contains.concat([fe, Fe, ke, Xe]), Te(He, "shebang", ee.SHEBANG()), Te(He, "use_strict", {
        className: "meta",
        relevance: 10,
        gR: /^\s*['"]use strict['"]/
      });
      return He.contains.find((ee => "func.def" === ee.label)).relevance = 0, Object.assign(He, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), He
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);