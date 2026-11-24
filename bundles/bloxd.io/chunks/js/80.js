export const id = 80;
export const ids = [80];
export const modules = {
  4888: tt => {
    function et(tt) {
      return tt instanceof Map ? tt.clear = tt.delete = tt.set = function() {
        throw new Error("map is read-only")
      } : tt instanceof Set && (tt.add = tt.clear = tt.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(tt), Object.getOwnPropertyNames(tt).forEach((Vt => {
        const Ot = tt[Vt],
          qt = typeof Ot;
        "object" !== qt && "function" !== qt || Object.isFrozen(Ot) || et(Ot)
      })), tt
    }
    class Vt {
      constructor(tt) {
        void 0 === tt.data && (tt.data = {}), this.data = tt.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Ot(tt) {
      return tt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function qt(tt) {
      const et = Object.create(null);
      for (const Dt in tt) et[Dt] = tt[Dt];
      for (var Vt = arguments.length, Ot = new Array(Vt > 1 ? Vt - 1 : 0), qt = 1; qt < Vt; qt++) Ot[qt - 1] = arguments[qt];
      return Ot.forEach((function(tt) {
        for (const Vt in tt) et[Vt] = tt[Vt]
      })), et
    }
    const Dt = tt => !!tt.scope;
    class mt {
      constructor(tt, et) {
        this.buffer = "", this.classPrefix = et.classPrefix, tt.walk(this)
      }
      addText(tt) {
        this.buffer += Ot(tt)
      }
      openNode(tt) {
        if (!Dt(tt)) return;
        const et = ((tt, et) => {
          let {
            prefix: Vt
          } = et;
          if (tt.startsWith("language:")) return tt.replace("language:", "language-");
          if (tt.includes(".")) {
            const et = tt.split(".");
            return [`${Vt}${et.shift()}`, ...et.map(((tt, et) => `${tt}${"_".repeat(et+1)}`))].join(" ")
          }
          return `${Vt}${tt}`
        })(tt.scope, {
          prefix: this.classPrefix
        });
        this.span(et)
      }
      closeNode(tt) {
        Dt(tt) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(tt) {
        this.buffer += `<span class="${tt}">`
      }
    }
    const dt = function() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const et = {
        children: []
      };
      return Object.assign(et, tt), et
    };
    class jt {
      constructor() {
        this.rM = dt(), this.stack = [this.rM]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.rM
      }
      add(tt) {
        this.top.children.push(tt)
      }
      openNode(tt) {
        const et = dt({
          scope: tt
        });
        this.add(et), this.stack.push(et)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.rM, null, 4)
      }
      walk(tt) {
        return this.constructor._walk(tt, this.rM)
      }
      static _walk(tt, et) {
        return "string" === typeof et ? tt.addText(et) : et.children && (tt.openNode(et), et.children.forEach((et => this._walk(tt, et))), tt.closeNode(et)), tt
      }
      static _collapse(tt) {
        "string" !== typeof tt && tt.children && (tt.children.every((tt => "string" === typeof tt)) ? tt.children = [tt.children.join("")] : tt.children.forEach((tt => {
          jt._collapse(tt)
        })))
      }
    }
    class Ht extends jt {
      constructor(tt) {
        super(), this.options = tt
      }
      addText(tt) {
        "" !== tt && this.add(tt)
      }
      startScope(tt) {
        this.openNode(tt)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(tt, et) {
        const Vt = tt.root;
        et && (Vt.scope = `language:${et}`), this.add(Vt)
      }
      toHTML() {
        return new mt(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Xt(tt) {
      return tt ? "string" === typeof tt ? tt : tt.source : null
    }

    function Qt(tt) {
      return ft("(?=", tt, ")")
    }

    function lt(tt) {
      return ft("(?:", tt, ")*")
    }

    function Et(tt) {
      return ft("(?:", tt, ")?")
    }

    function ft() {
      for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
      return et.map((tt => Xt(tt))).join("")
    }

    function wt() {
      for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
      const Ot = function(tt) {
        const et = tt[tt.length - 1];
        return "object" === typeof et && et.constructor === Object ? (tt.splice(tt.length - 1, 1), et) : {}
      }(et);
      return "(" + (Ot.capture ? "" : "?:") + et.map((tt => Xt(tt))).join("|") + ")"
    }

    function yt(tt) {
      return new RegExp(tt.toString() + "|").exec("").length - 1
    }
    const Nt = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Mt(tt, et) {
      let {
        joinWith: Vt
      } = et, Ot = 0;
      return tt.map((tt => {
        Ot += 1;
        const et = Ot;
        let Vt = Xt(tt),
          qt = "";
        for (; Vt.length > 0;) {
          const tt = Nt.exec(Vt);
          if (!tt) {
            qt += Vt;
            break
          }
          qt += Vt.substring(0, tt.index), Vt = Vt.substring(tt.index + tt[0].length), "\\" === tt[0][0] && tt[1] ? qt += "\\" + String(Number(tt[1]) + et) : (qt += tt[0], "(" === tt[0] && Ot++)
        }
        return qt
      })).map((tt => `(${tt})`)).join(Vt)
    }
    const bt = "[a-zA-Z]\\w*",
      Jt = "[a-zA-Z_]\\w*",
      Ct = "\\b\\d+(\\.\\d+)?",
      ut = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Kt = "\\b(0b[01]+)",
      ht = {
        XE: "\\\\[\\s\\S]",
        relevance: 0
      },
      vt = {
        scope: "string",
        XE: "'",
        end: "'",
        illegal: "\\n",
        contains: [ht]
      },
      Wt = {
        scope: "string",
        XE: '"',
        end: '"',
        illegal: "\\n",
        contains: [ht]
      },
      St = function(tt, et) {
        const Vt = qt({
          scope: "comment",
          XE: tt,
          end: et,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        Vt.contains.push({
          scope: "doctag",
          XE: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Ot = wt("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return Vt.contains.push({
          XE: ft(/[ ]+/, "(", Ot, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), Vt
      },
      ct = St("//", "$"),
      Rt = St("/\\*", "\\*/"),
      It = St("#", "$"),
      Pt = {
        scope: "number",
        XE: Ct,
        relevance: 0
      },
      Zt = {
        scope: "number",
        XE: ut,
        relevance: 0
      },
      Lt = {
        scope: "number",
        XE: Kt,
        relevance: 0
      },
      Ft = {
        scope: "regexp",
        XE: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [ht, {
          XE: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [ht]
        }]
      },
      kt = {
        scope: "title",
        XE: bt,
        relevance: 0
      },
      Gt = {
        scope: "title",
        XE: Jt,
        relevance: 0
      },
      zt = {
        XE: "\\.\\s*" + Jt,
        relevance: 0
      };
    var ot = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: vt,
      BACKSLASH_ESCAPE: ht,
      BINARY_NUMBER_MODE: Lt,
      BINARY_NUMBER_RE: Kt,
      COMMENT: St,
      C_BLOCK_COMMENT_MODE: Rt,
      C_LINE_COMMENT_MODE: ct,
      C_NUMBER_MODE: Zt,
      C_NUMBER_RE: ut,
      END_SAME_AS_BEGIN: function(tt) {
        return Object.assign(tt, {
          "on:begin": (tt, et) => {
            et.data._beginMatch = tt[1]
          },
          "on:end": (tt, et) => {
            et.data._beginMatch !== tt[1] && et.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: It,
      IDENT_RE: bt,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: zt,
      NUMBER_MODE: Pt,
      NUMBER_RE: Ct,
      PHRASAL_WORDS_MODE: {
        XE: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Wt,
      REGEXP_MODE: Ft,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const et = /^#![ ]*\//;
        return tt.binary && (tt.XE = ft(et, /.*\b/, tt.binary, /\b.*/)), qt({
          scope: "meta",
          XE: et,
          end: /$/,
          relevance: 0,
          "on:begin": (tt, et) => {
            0 !== tt.index && et.ignoreMatch()
          }
        }, tt)
      },
      TITLE_MODE: kt,
      UNDERSCORE_IDENT_RE: Jt,
      UNDERSCORE_TITLE_MODE: Gt
    });

    function rt(tt, et) {
      "." === tt.input[tt.index - 1] && et.ignoreMatch()
    }

    function Ut(tt, et) {
      void 0 !== tt.className && (tt.scope = tt.className, delete tt.className)
    }

    function At(tt, et) {
      et && tt.beginKeywords && (tt.XE = "\\b(" + tt.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", tt.__beforeBegin = rt, tt.keywords = tt.keywords || tt.beginKeywords, delete tt.beginKeywords, void 0 === tt.relevance && (tt.relevance = 0))
    }

    function it(tt, et) {
      Array.isArray(tt.illegal) && (tt.illegal = wt(...tt.illegal))
    }

    function Yt(tt, et) {
      if (tt.match) {
        if (tt.XE || tt.end) throw new Error("begin & end are not supported with match");
        tt.XE = tt.match, delete tt.match
      }
    }

    function Bt(tt, et) {
      void 0 === tt.relevance && (tt.relevance = 1)
    }
    const pt = (tt, et) => {
        if (!tt.beforeMatch) return;
        if (tt.starts) throw new Error("beforeMatch cannot be used with starts");
        const Vt = Object.assign({}, tt);
        Object.keys(tt).forEach((et => {
          delete tt[et]
        })), tt.keywords = Vt.keywords, tt.XE = ft(Vt.beforeMatch, Qt(Vt.XE)), tt.starts = {
          relevance: 0,
          contains: [Object.assign(Vt, {
            endsParent: !0
          })]
        }, tt.relevance = 0, delete Vt.beforeMatch
      },
      xt = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Tt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Ot = Object.create(null);
      return "string" === typeof tt ? qt(Vt, tt.split(" ")) : Array.isArray(tt) ? qt(Vt, tt) : Object.keys(tt).forEach((function(Vt) {
        Object.assign(Ot, Tt(tt[Vt], et, Vt))
      })), Ot;

      function qt(tt, Vt) {
        et && (Vt = Vt.map((tt => tt.toLowerCase()))), Vt.forEach((function(et) {
          const Vt = et.split("|");
          Ot[Vt[0]] = [tt, gt(Vt[0], Vt[1])]
        }))
      }
    }

    function gt(tt, et) {
      return et ? Number(et) : function(tt) {
        return xt.includes(tt.toLowerCase())
      }(tt) ? 0 : 1
    }
    const st = {},
      nt = tt => {
        console.error(tt)
      },
      te = function(tt) {
        for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
        console.log(`WARN: ${tt}`, ...Vt)
      },
      ee = (tt, et) => {
        st[`${tt}/${et}`] || (console.log(`Deprecated as of ${tt}. ${et}`), st[`${tt}/${et}`] = !0)
      },
      Ve = new Error;

    function Oe(tt, et, Vt) {
      let {
        key: Ot
      } = Vt, qt = 0;
      const Dt = tt[Ot],
        mt = {},
        dt = {};
      for (let jt = 1; jt <= et.length; jt++) dt[jt + qt] = Dt[jt], mt[jt + qt] = !0, qt += yt(et[jt - 1]);
      tt[Ot] = dt, tt[Ot]._emit = mt, tt[Ot]._multi = !0
    }

    function qe(tt) {
      ! function(tt) {
        tt.scope && "object" === typeof tt.scope && null !== tt.scope && (tt.beginScope = tt.scope, delete tt.scope)
      }(tt), "string" === typeof tt.beginScope && (tt.beginScope = {
          _wrap: tt.beginScope
        }), "string" === typeof tt.endScope && (tt.endScope = {
          _wrap: tt.endScope
        }),
        function(tt) {
          if (Array.isArray(tt.XE)) {
            if (tt.skip || tt.excludeBegin || tt.returnBegin) throw nt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Ve;
            if ("object" !== typeof tt.beginScope || null === tt.beginScope) throw nt("beginScope must be object"), Ve;
            Oe(tt, tt.XE, {
              key: "beginScope"
            }), tt.XE = Mt(tt.XE, {
              joinWith: ""
            })
          }
        }(tt),
        function(tt) {
          if (Array.isArray(tt.end)) {
            if (tt.skip || tt.excludeEnd || tt.returnEnd) throw nt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Ve;
            if ("object" !== typeof tt.endScope || null === tt.endScope) throw nt("endScope must be object"), Ve;
            Oe(tt, tt.end, {
              key: "endScope"
            }), tt.end = Mt(tt.end, {
              joinWith: ""
            })
          }
        }(tt)
    }

    function De(tt) {
      function et(et, Vt) {
        return new RegExp(Xt(et), "m" + (tt.case_insensitive ? "i" : "") + (tt.unicodeRegex ? "u" : "") + (Vt ? "g" : ""))
      }
      class Vt {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(tt, et) {
          et.position = this.position++, this.matchIndexes[this.matchAt] = et, this.regexes.push([et, tt]), this.matchAt += yt(tt) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const tt = this.regexes.map((tt => tt[1]));
          this.matcherRe = et(Mt(tt, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(tt) {
          this.matcherRe.lastIndex = this.lastIndex;
          const et = this.matcherRe.exec(tt);
          if (!et) return null;
          const Vt = et.findIndex(((tt, et) => et > 0 && void 0 !== tt)),
            Ot = this.matchIndexes[Vt];
          return et.splice(0, Vt), Object.assign(et, Ot)
        }
      }
      class Ot {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(tt) {
          if (this.multiRegexes[tt]) return this.multiRegexes[tt];
          const et = new Vt;
          return this.rules.slice(tt).forEach((tt => {
            let [Vt, Ot] = tt;
            return et.addRule(Vt, Ot)
          })), et.compile(), this.multiRegexes[tt] = et, et
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(tt, et) {
          this.rules.push([tt, et]), "XE" === et.type && this.count++
        }
        exec(tt) {
          const et = this.getMatcher(this.regexIndex);
          et.lastIndex = this.lastIndex;
          let Vt = et.exec(tt);
          if (this.resumingScanAtSamePosition())
            if (Vt && Vt.index === this.lastIndex);
            else {
              const et = this.getMatcher(0);
              et.lastIndex = this.lastIndex + 1, Vt = et.exec(tt)
            } return Vt && (this.regexIndex += Vt.position + 1, this.regexIndex === this.count && this.considerAll()), Vt
        }
      }
      if (tt.compilerExtensions || (tt.compilerExtensions = []), tt.contains && tt.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return tt.classNameAliases = qt(tt.classNameAliases || {}),
        function Vt(Dt, mt) {
          const dt = Dt;
          if (Dt.isCompiled) return dt;
          [Ut, Yt, qe, pt].forEach((tt => tt(Dt, mt))), tt.compilerExtensions.forEach((tt => tt(Dt, mt))), Dt.__beforeBegin = null, [At, it, Bt].forEach((tt => tt(Dt, mt))), Dt.isCompiled = !0;
          let jt = null;
          return "object" === typeof Dt.keywords && Dt.keywords.$pattern && (Dt.keywords = Object.assign({}, Dt.keywords), jt = Dt.keywords.$pattern, delete Dt.keywords.$pattern), jt = jt || /\w+/, Dt.keywords && (Dt.keywords = Tt(Dt.keywords, tt.case_insensitive)), dt.keywordPatternRe = et(jt, !0), mt && (Dt.XE || (Dt.XE = /\B|\b/), dt.beginRe = et(dt.XE), Dt.end || Dt.endsWithParent || (Dt.end = /\B|\b/), Dt.end && (dt.endRe = et(dt.end)), dt.terminatorEnd = Xt(dt.end) || "", Dt.endsWithParent && mt.terminatorEnd && (dt.terminatorEnd += (Dt.end ? "|" : "") + mt.terminatorEnd)), Dt.illegal && (dt.illegalRe = et(Dt.illegal)), Dt.contains || (Dt.contains = []), Dt.contains = [].concat(...Dt.contains.map((function(tt) {
            return function(tt) {
              tt.variants && !tt.cachedVariants && (tt.cachedVariants = tt.variants.map((function(et) {
                return qt(tt, {
                  variants: null
                }, et)
              })));
              if (tt.cachedVariants) return tt.cachedVariants;
              if (me(tt)) return qt(tt, {
                starts: tt.starts ? qt(tt.starts) : null
              });
              if (Object.isFrozen(tt)) return qt(tt);
              return tt
            }("self" === tt ? Dt : tt)
          }))), Dt.contains.forEach((function(tt) {
            Vt(tt, dt)
          })), Dt.starts && Vt(Dt.starts, mt), dt.matcher = function(tt) {
            const et = new Ot;
            return tt.contains.forEach((tt => et.addRule(tt.XE, {
              rule: tt,
              type: "XE"
            }))), tt.terminatorEnd && et.addRule(tt.terminatorEnd, {
              type: "end"
            }), tt.illegal && et.addRule(tt.illegal, {
              type: "illegal"
            }), et
          }(dt), dt
        }(tt)
    }

    function me(tt) {
      return !!tt && (tt.endsWithParent || me(tt.starts))
    }
    class de extends Error {
      constructor(tt, et) {
        super(tt), this.name = "HTMLInjectionError", this.html = et
      }
    }
    const je = Ot,
      He = qt,
      Xe = Symbol("nomatch"),
      Qe = function(tt) {
        const Ot = Object.create(null),
          qt = Object.create(null),
          Dt = [];
        let mt = !0;
        const dt = "Could not find the language '{}', did you forget to load/include a language module?",
          jt = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Xt = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Ht
        };

        function yt(tt) {
          return Xt.noHighlightRe.test(tt)
        }

        function Nt(tt, et, Vt) {
          let Ot = "",
            qt = "";
          "object" === typeof et ? (Ot = tt, Vt = et.ignoreIllegals, qt = et.language) : (ee("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ee("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), qt = tt, Ot = et), void 0 === Vt && (Vt = !0);
          const Dt = {
            code: Ot,
            language: qt
          };
          Wt("before:highlight", Dt);
          const mt = Dt.result ? Dt.result : Mt(Dt.language, Dt.code, Vt);
          return mt.code = Dt.code, Wt("after:highlight", mt), mt
        }

        function Mt(tt, et, qt, Dt) {
          const jt = Object.create(null);

          function Ht() {
            if (!Wt.keywords) return void ct.addText(Rt);
            let tt = 0;
            Wt.keywordPatternRe.lastIndex = 0;
            let et = Wt.keywordPatternRe.exec(Rt),
              Vt = "";
            for (; et;) {
              Vt += Rt.substring(tt, et.index);
              const qt = ut.case_insensitive ? et[0].toLowerCase() : et[0],
                Dt = (Ot = qt, Wt.keywords[Ot]);
              if (Dt) {
                const [tt, Ot] = Dt;
                if (ct.addText(Vt), Vt = "", jt[qt] = (jt[qt] || 0) + 1, jt[qt] <= 7 && (It += Ot), tt.startsWith("_")) Vt += et[0];
                else {
                  const Vt = ut.classNameAliases[tt] || tt;
                  lt(et[0], Vt)
                }
              } else Vt += et[0];
              tt = Wt.keywordPatternRe.lastIndex, et = Wt.keywordPatternRe.exec(Rt)
            }
            var Ot;
            Vt += Rt.substring(tt), ct.addText(Vt)
          }

          function Qt() {
            null != Wt.subLanguage ? function() {
              if ("" === Rt) return;
              let tt = null;
              if ("string" === typeof Wt.subLanguage) {
                if (!Ot[Wt.subLanguage]) return void ct.addText(Rt);
                tt = Mt(Wt.subLanguage, Rt, !0, St[Wt.subLanguage]), St[Wt.subLanguage] = tt._top
              } else tt = bt(Rt, Wt.subLanguage.length ? Wt.subLanguage : null);
              Wt.relevance > 0 && (It += tt.relevance), ct.__addSublanguage(tt._emitter, tt.language)
            }() : Ht(), Rt = ""
          }

          function lt(tt, et) {
            "" !== tt && (ct.startScope(et), ct.addText(tt), ct.endScope())
          }

          function Et(tt, et) {
            let Vt = 1;
            const Ot = et.length - 1;
            for (; Vt <= Ot;) {
              if (!tt._emit[Vt]) {
                Vt++;
                continue
              }
              const Ot = ut.classNameAliases[tt[Vt]] || tt[Vt],
                qt = et[Vt];
              Ot ? lt(qt, Ot) : (Rt = qt, Ht(), Rt = ""), Vt++
            }
          }

          function ft(tt, et) {
            return tt.scope && "string" === typeof tt.scope && ct.openNode(ut.classNameAliases[tt.scope] || tt.scope), tt.beginScope && (tt.beginScope._wrap ? (lt(Rt, ut.classNameAliases[tt.beginScope._wrap] || tt.beginScope._wrap), Rt = "") : tt.beginScope._multi && (Et(tt.beginScope, et), Rt = "")), Wt = Object.create(tt, {
              parent: {
                value: Wt
              }
            }), Wt
          }

          function wt(tt, et, Ot) {
            let qt = function(tt, et) {
              const Vt = tt && tt.exec(et);
              return Vt && 0 === Vt.index
            }(tt.endRe, Ot);
            if (qt) {
              if (tt["on:end"]) {
                const Ot = new Vt(tt);
                tt["on:end"](et, Ot), Ot.isMatchIgnored && (qt = !1)
              }
              if (qt) {
                for (; tt.endsParent && tt.parent;) tt = tt.parent;
                return tt
              }
            }
            if (tt.endsWithParent) return wt(tt.parent, et, Ot)
          }

          function yt(tt) {
            return 0 === Wt.matcher.regexIndex ? (Rt += tt[0], 1) : (Lt = !0, 0)
          }

          function Nt(tt) {
            const Vt = tt[0],
              Ot = et.substring(tt.index),
              qt = wt(Wt, tt, Ot);
            if (!qt) return Xe;
            const Dt = Wt;
            Wt.endScope && Wt.endScope._wrap ? (Qt(), lt(Vt, Wt.endScope._wrap)) : Wt.endScope && Wt.endScope._multi ? (Qt(), Et(Wt.endScope, tt)) : Dt.skip ? Rt += Vt : (Dt.returnEnd || Dt.excludeEnd || (Rt += Vt), Qt(), Dt.excludeEnd && (Rt = Vt));
            do {
              Wt.scope && ct.closeNode(), Wt.skip || Wt.subLanguage || (It += Wt.relevance), Wt = Wt.parent
            } while (Wt !== qt.parent);
            return qt.starts && ft(qt.starts, tt), Dt.returnEnd ? 0 : Vt.length
          }
          let Jt = {};

          function Ct(Ot, Dt) {
            const dt = Dt && Dt[0];
            if (Rt += Ot, null == dt) return Qt(), 0;
            if ("XE" === Jt.type && "end" === Dt.type && Jt.index === Dt.index && "" === dt) {
              if (Rt += et.slice(Dt.index, Dt.index + 1), !mt) {
                const et = new Error(`0 width match regex (${tt})`);
                throw et.languageName = tt, et.badRule = Jt.rule, et
              }
              return 1
            }
            if (Jt = Dt, "XE" === Dt.type) return function(tt) {
              const et = tt[0],
                Ot = tt.rule,
                qt = new Vt(Ot),
                Dt = [Ot.__beforeBegin, Ot["on:begin"]];
              for (const Vt of Dt)
                if (Vt && (Vt(tt, qt), qt.isMatchIgnored)) return yt(et);
              return Ot.skip ? Rt += et : (Ot.excludeBegin && (Rt += et), Qt(), Ot.returnBegin || Ot.excludeBegin || (Rt = et)), ft(Ot, tt), Ot.returnBegin ? 0 : et.length
            }(Dt);
            if ("illegal" === Dt.type && !qt) {
              const tt = new Error('Illegal lexeme "' + dt + '" for mode "' + (Wt.scope || "<unnamed>") + '"');
              throw tt.mode = Wt, tt
            }
            if ("end" === Dt.type) {
              const tt = Nt(Dt);
              if (tt !== Xe) return tt
            }
            if ("illegal" === Dt.type && "" === dt) return Rt += "\n", 1;
            if (Zt > 1e5 && Zt > 3 * Dt.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Rt += dt, dt.length
          }
          const ut = Kt(tt);
          if (!ut) throw nt(dt.replace("{}", tt)), new Error('Unknown language: "' + tt + '"');
          const ht = De(ut);
          let vt = "",
            Wt = Dt || ht;
          const St = {},
            ct = new Xt.__emitter(Xt);
          ! function() {
            const tt = [];
            for (let et = Wt; et !== ut; et = et.parent) et.scope && tt.unshift(et.scope);
            tt.forEach((tt => ct.openNode(tt)))
          }();
          let Rt = "",
            It = 0,
            Pt = 0,
            Zt = 0,
            Lt = !1;
          try {
            if (ut.__emitTokens) ut.__emitTokens(et, ct);
            else {
              for (Wt.matcher.considerAll();;) {
                Zt++, Lt ? Lt = !1 : Wt.matcher.considerAll(), Wt.matcher.lastIndex = Pt;
                const tt = Wt.matcher.exec(et);
                if (!tt) break;
                const Vt = Ct(et.substring(Pt, tt.index), tt);
                Pt = tt.index + Vt
              }
              Ct(et.substring(Pt))
            }
            return ct.finalize(), vt = ct.toHTML(), {
              language: tt,
              value: vt,
              relevance: It,
              illegal: !1,
              _emitter: ct,
              _top: Wt
            }
          } catch (Ft) {
            if (Ft.message && Ft.message.includes("Illegal")) return {
              language: tt,
              value: je(et),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Ft.message,
                index: Pt,
                context: et.slice(Pt - 100, Pt + 100),
                mode: Ft.mode,
                resultSoFar: vt
              },
              _emitter: ct
            };
            if (mt) return {
              language: tt,
              value: je(et),
              illegal: !1,
              relevance: 0,
              errorRaised: Ft,
              _emitter: ct,
              _top: Wt
            };
            throw Ft
          }
        }

        function bt(tt, et) {
          et = et || Xt.languages || Object.keys(Ot);
          const Vt = function(tt) {
              const et = {
                value: je(tt),
                illegal: !1,
                relevance: 0,
                _top: jt,
                _emitter: new Xt.__emitter(Xt)
              };
              return et._emitter.addText(tt), et
            }(tt),
            qt = et.filter(Kt).filter(vt).map((et => Mt(et, tt, !1)));
          qt.unshift(Vt);
          const Dt = qt.sort(((tt, et) => {
              if (tt.relevance !== et.relevance) return et.relevance - tt.relevance;
              if (tt.language && et.language) {
                if (Kt(tt.language).supersetOf === et.language) return 1;
                if (Kt(et.language).supersetOf === tt.language) return -1
              }
              return 0
            })),
            [mt, dt] = Dt,
            Ht = mt;
          return Ht.secondBest = dt, Ht
        }

        function Jt(tt) {
          let et = null;
          const Vt = function(tt) {
            let et = tt.className + " ";
            et += tt.parentNode ? tt.parentNode.className : "";
            const Vt = Xt.languageDetectRe.exec(et);
            if (Vt) {
              const et = Kt(Vt[1]);
              return et || (te(dt.replace("{}", Vt[1])), te("Falling back to no-highlight mode for this block.", tt)), et ? Vt[1] : "no-highlight"
            }
            return et.split(/\s+/).find((tt => yt(tt) || Kt(tt)))
          }(tt);
          if (yt(Vt)) return;
          if (Wt("before:highlightElement", {
              el: tt,
              language: Vt
            }), tt.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", tt);
          if (tt.children.length > 0 && (Xt.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(tt)), Xt.throwUnescapedHTML)) {
            throw new de("One of your code blocks includes unescaped HTML.", tt.innerHTML)
          }
          et = tt;
          const Ot = et.textContent,
            Dt = Vt ? Nt(Ot, {
              language: Vt,
              ignoreIllegals: !0
            }) : bt(Ot);
          tt.innerHTML = Dt.value, tt.dataset.highlighted = "yes",
            function(tt, et, Vt) {
              const Ot = et && qt[et] || Vt;
              tt.classList.add("hljs"), tt.classList.add(`language-${Ot}`)
            }(tt, Vt, Dt.language), tt.result = {
              language: Dt.language,
              re: Dt.relevance,
              relevance: Dt.relevance
            }, Dt.secondBest && (tt.secondBest = {
              language: Dt.secondBest.language,
              relevance: Dt.secondBest.relevance
            }), Wt("after:highlightElement", {
              el: tt,
              result: Dt,
              text: Ot
            })
        }
        let Ct = !1;

        function ut() {
          if ("loading" === document.readyState) return Ct || window.addEventListener("DOMContentLoaded", (function() {
            ut()
          }), !1), void(Ct = !0);
          document.querySelectorAll(Xt.cssSelector).forEach(Jt)
        }

        function Kt(tt) {
          return tt = (tt || "").toLowerCase(), Ot[tt] || Ot[qt[tt]]
        }

        function ht(tt, et) {
          let {
            languageName: Vt
          } = et;
          "string" === typeof tt && (tt = [tt]), tt.forEach((tt => {
            qt[tt.toLowerCase()] = Vt
          }))
        }

        function vt(tt) {
          const et = Kt(tt);
          return et && !et.disableAutodetect
        }

        function Wt(tt, et) {
          const Vt = tt;
          Dt.forEach((function(tt) {
            tt[Vt] && tt[Vt](et)
          }))
        }
        Object.assign(tt, {
          highlight: Nt,
          highlightAuto: bt,
          highlightAll: ut,
          highlightElement: Jt,
          highlightBlock: function(tt) {
            return ee("10.7.0", "highlightBlock will be removed entirely in v12.0"), ee("10.7.0", "Please use highlightElement now."), Jt(tt)
          },
          configure: function(tt) {
            Xt = He(Xt, tt)
          },
          initHighlighting: () => {
            ut(), ee("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            ut(), ee("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(et, Vt) {
            let qt = null;
            try {
              qt = Vt(tt)
            } catch (Dt) {
              if (nt("Language definition for '{}' could not be registered.".replace("{}", et)), !mt) throw Dt;
              nt(Dt), qt = jt
            }
            qt.name || (qt.name = et), Ot[et] = qt, qt.rawDefinition = Vt.bind(null, tt), qt.aliases && ht(qt.aliases, {
              languageName: et
            })
          },
          unregisterLanguage: function(tt) {
            delete Ot[tt];
            for (const et of Object.keys(qt)) qt[et] === tt && delete qt[et]
          },
          listLanguages: function() {
            return Object.keys(Ot)
          },
          getLanguage: Kt,
          registerAliases: ht,
          autoDetection: vt,
          inherit: He,
          addPlugin: function(tt) {
            ! function(tt) {
              tt["before:highlightBlock"] && !tt["before:highlightElement"] && (tt["before:highlightElement"] = et => {
                tt["before:highlightBlock"](Object.assign({
                  block: et.el
                }, et))
              }), tt["after:highlightBlock"] && !tt["after:highlightElement"] && (tt["after:highlightElement"] = et => {
                tt["after:highlightBlock"](Object.assign({
                  block: et.el
                }, et))
              })
            }(tt), Dt.push(tt)
          },
          removePlugin: function(tt) {
            const et = Dt.indexOf(tt); - 1 !== et && Dt.splice(et, 1)
          }
        }), tt.debugMode = function() {
          mt = !1
        }, tt.safeMode = function() {
          mt = !0
        }, tt.versionString = "11.11.1", tt.regex = {
          concat: ft,
          lookahead: Qt,
          either: wt,
          optional: Et,
          anyNumberOfTimes: lt
        };
        for (const Vt in ot) "object" === typeof ot[Vt] && et(ot[Vt]);
        return Object.assign(tt, ot), tt
      },
      le = Qe({});
    le.newInstance = () => Qe({}), tt.exports = le, le.HighlightJS = le, le.default = le
  },
  4882: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    const Ot = Vt(4888)
  },
  4894: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Qt
    });
    const Ot = "[A-Za-z$_][0-9A-Za-z$_]*",
      qt = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Dt = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      mt = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      dt = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      jt = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Ht = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Xt = [].concat(jt, mt, dt);

    function Qt(tt) {
      const et = tt.regex,
        Vt = Ot,
        Qt = "<>",
        lt = "</>",
        Et = {
          XE: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (tt, et) => {
            const Vt = tt[0].length + tt.index,
              Ot = tt.input[Vt];
            if ("<" === Ot || "," === Ot) return void et.ignoreMatch();
            let qt;
            ">" === Ot && (((tt, et) => {
              let {
                after: Vt
              } = et;
              const Ot = "</" + tt[0].slice(1);
              return -1 !== tt.input.indexOf(Ot, Vt)
            })(tt, {
              after: Vt
            }) || et.ignoreMatch());
            const Dt = tt.input.substring(Vt);
            ((qt = Dt.match(/^\s*=/)) || (qt = Dt.match(/^\s+extends\s+/)) && 0 === qt.index) && et.ignoreMatch()
          }
        },
        ft = {
          $pattern: Ot,
          keyword: qt,
          literal: Dt,
          built_in: Xt,
          "variable.language": Ht
        },
        wt = "[0-9](_?[0-9])*",
        yt = `\\.(${wt})`,
        Nt = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Mt = {
          className: "number",
          variants: [{
            XE: `(\\b(${Nt})((${yt})|\\.)?|(${yt}))[eE][+-]?(${wt})\\b`
          }, {
            XE: `\\b(${Nt})\\b((${yt})\\b|\\.)?|(${yt})\\b`
          }, {
            XE: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            XE: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            XE: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            XE: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            XE: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        bt = {
          className: "subst",
          XE: "\\$\\{",
          end: "\\}",
          keywords: ft,
          contains: []
        },
        Jt = {
          XE: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [tt.BACKSLASH_ESCAPE, bt],
            subLanguage: "xml"
          }
        },
        Ct = {
          XE: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [tt.BACKSLASH_ESCAPE, bt],
            subLanguage: "css"
          }
        },
        ut = {
          XE: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [tt.BACKSLASH_ESCAPE, bt],
            subLanguage: "graphql"
          }
        },
        Kt = {
          className: "string",
          XE: "`",
          end: "`",
          contains: [tt.BACKSLASH_ESCAPE, bt]
        },
        ht = {
          className: "comment",
          variants: [tt.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              XE: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                XE: "@[A-Za-z]+"
              }, {
                className: "type",
                XE: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                XE: Vt + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                XE: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), tt.C_BLOCK_COMMENT_MODE, tt.C_LINE_COMMENT_MODE]
        },
        vt = [tt.APOS_STRING_MODE, tt.QUOTE_STRING_MODE, Jt, Ct, ut, Kt, {
          match: /\$\d+/
        }, Mt];
      bt.contains = vt.concat({
        XE: /\{/,
        end: /\}/,
        keywords: ft,
        contains: ["self"].concat(vt)
      });
      const Wt = [].concat(ht, bt.contains),
        St = Wt.concat([{
          XE: /(\s*)\(/,
          end: /\)/,
          keywords: ft,
          contains: ["self"].concat(Wt)
        }]),
        ct = {
          className: "params",
          XE: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: ft,
          contains: St
        },
        Rt = {
          variants: [{
            match: [/class/, /\s+/, Vt, /\s+/, /extends/, /\s+/, et.concat(Vt, "(", et.concat(/\./, Vt), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Vt],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        It = {
          relevance: 0,
          match: et.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...mt, ...dt]
          }
        },
        Pt = {
          variants: [{
            match: [/function/, /\s+/, Vt, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [ct],
          illegal: /%/
        };
      const Zt = {
        match: et.concat(/\b/, (Lt = [...jt, "super", "import"].map((tt => `${tt}\\s*\\(`)), et.concat("(?!", Lt.join("|"), ")")), Vt, et.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Lt;
      const Ft = {
          XE: et.concat(/\./, et.lookahead(et.concat(Vt, /(?![0-9A-Za-z$_(])/))),
          end: Vt,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        kt = {
          match: [/get|set/, /\s+/, Vt, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            XE: /\(\)/
          }, ct]
        },
        Gt = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + tt.UNDERSCORE_IDENT_RE + ")\\s*=>",
        zt = {
          match: [/const|var|let/, /\s+/, Vt, /\s*/, /=\s*/, /(async\s*)?/, et.lookahead(Gt)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [ct]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: ft,
        exports: {
          PARAMS_CONTAINS: St,
          CLASS_REFERENCE: It
        },
        illegal: /#(?![$_A-z])/,
        contains: [tt.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          XE: /^\s*['"]use (strict|asm)['"]/
        }, tt.APOS_STRING_MODE, tt.QUOTE_STRING_MODE, Jt, Ct, ut, Kt, ht, {
          match: /\$\d+/
        }, Mt, It, {
          scope: "attr",
          match: Vt + et.lookahead(":"),
          relevance: 0
        }, zt, {
          XE: "(" + tt.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [ht, tt.REGEXP_MODE, {
            className: "function",
            XE: Gt,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                XE: tt.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                XE: /\(\s*\)/,
                skip: !0
              }, {
                XE: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: ft,
                contains: St
              }]
            }]
          }, {
            XE: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              XE: Qt,
              end: lt
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              XE: Et.XE,
              "on:begin": Et.isTrulyOpeningTag,
              end: Et.end
            }],
            subLanguage: "xml",
            contains: [{
              XE: Et.XE,
              end: Et.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Pt, {
          beginKeywords: "while if switch catch for"
        }, {
          XE: "\\b(?!function)" + tt.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [ct, tt.inherit(tt.TITLE_MODE, {
            XE: Vt,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Ft, {
          match: "\\$" + Vt,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [ct]
        }, Zt, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Rt, kt, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4903: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt
    });
    const Ot = "[A-Za-z$_][0-9A-Za-z$_]*",
      qt = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Dt = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      mt = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      dt = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      jt = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Ht = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Xt = [].concat(jt, mt, dt);

    function Qt(tt) {
      const et = tt.regex,
        Vt = Ot,
        Qt = "<>",
        lt = "</>",
        Et = {
          XE: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (tt, et) => {
            const Vt = tt[0].length + tt.index,
              Ot = tt.input[Vt];
            if ("<" === Ot || "," === Ot) return void et.ignoreMatch();
            let qt;
            ">" === Ot && (((tt, et) => {
              let {
                after: Vt
              } = et;
              const Ot = "</" + tt[0].slice(1);
              return -1 !== tt.input.indexOf(Ot, Vt)
            })(tt, {
              after: Vt
            }) || et.ignoreMatch());
            const Dt = tt.input.substring(Vt);
            ((qt = Dt.match(/^\s*=/)) || (qt = Dt.match(/^\s+extends\s+/)) && 0 === qt.index) && et.ignoreMatch()
          }
        },
        ft = {
          $pattern: Ot,
          keyword: qt,
          literal: Dt,
          built_in: Xt,
          "variable.language": Ht
        },
        wt = "[0-9](_?[0-9])*",
        yt = `\\.(${wt})`,
        Nt = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Mt = {
          className: "number",
          variants: [{
            XE: `(\\b(${Nt})((${yt})|\\.)?|(${yt}))[eE][+-]?(${wt})\\b`
          }, {
            XE: `\\b(${Nt})\\b((${yt})\\b|\\.)?|(${yt})\\b`
          }, {
            XE: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            XE: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            XE: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            XE: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            XE: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        bt = {
          className: "subst",
          XE: "\\$\\{",
          end: "\\}",
          keywords: ft,
          contains: []
        },
        Jt = {
          XE: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [tt.BACKSLASH_ESCAPE, bt],
            subLanguage: "xml"
          }
        },
        Ct = {
          XE: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [tt.BACKSLASH_ESCAPE, bt],
            subLanguage: "css"
          }
        },
        ut = {
          XE: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [tt.BACKSLASH_ESCAPE, bt],
            subLanguage: "graphql"
          }
        },
        Kt = {
          className: "string",
          XE: "`",
          end: "`",
          contains: [tt.BACKSLASH_ESCAPE, bt]
        },
        ht = {
          className: "comment",
          variants: [tt.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              XE: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                XE: "@[A-Za-z]+"
              }, {
                className: "type",
                XE: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                XE: Vt + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                XE: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), tt.C_BLOCK_COMMENT_MODE, tt.C_LINE_COMMENT_MODE]
        },
        vt = [tt.APOS_STRING_MODE, tt.QUOTE_STRING_MODE, Jt, Ct, ut, Kt, {
          match: /\$\d+/
        }, Mt];
      bt.contains = vt.concat({
        XE: /\{/,
        end: /\}/,
        keywords: ft,
        contains: ["self"].concat(vt)
      });
      const Wt = [].concat(ht, bt.contains),
        St = Wt.concat([{
          XE: /(\s*)\(/,
          end: /\)/,
          keywords: ft,
          contains: ["self"].concat(Wt)
        }]),
        ct = {
          className: "params",
          XE: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: ft,
          contains: St
        },
        Rt = {
          variants: [{
            match: [/class/, /\s+/, Vt, /\s+/, /extends/, /\s+/, et.concat(Vt, "(", et.concat(/\./, Vt), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Vt],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        It = {
          relevance: 0,
          match: et.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...mt, ...dt]
          }
        },
        Pt = {
          variants: [{
            match: [/function/, /\s+/, Vt, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [ct],
          illegal: /%/
        };
      const Zt = {
        match: et.concat(/\b/, (Lt = [...jt, "super", "import"].map((tt => `${tt}\\s*\\(`)), et.concat("(?!", Lt.join("|"), ")")), Vt, et.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Lt;
      const Ft = {
          XE: et.concat(/\./, et.lookahead(et.concat(Vt, /(?![0-9A-Za-z$_(])/))),
          end: Vt,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        kt = {
          match: [/get|set/, /\s+/, Vt, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            XE: /\(\)/
          }, ct]
        },
        Gt = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + tt.UNDERSCORE_IDENT_RE + ")\\s*=>",
        zt = {
          match: [/const|var|let/, /\s+/, Vt, /\s*/, /=\s*/, /(async\s*)?/, et.lookahead(Gt)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [ct]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: ft,
        exports: {
          PARAMS_CONTAINS: St,
          CLASS_REFERENCE: It
        },
        illegal: /#(?![$_A-z])/,
        contains: [tt.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          XE: /^\s*['"]use (strict|asm)['"]/
        }, tt.APOS_STRING_MODE, tt.QUOTE_STRING_MODE, Jt, Ct, ut, Kt, ht, {
          match: /\$\d+/
        }, Mt, It, {
          scope: "attr",
          match: Vt + et.lookahead(":"),
          relevance: 0
        }, zt, {
          XE: "(" + tt.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [ht, tt.REGEXP_MODE, {
            className: "function",
            XE: Gt,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                XE: tt.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                XE: /\(\s*\)/,
                skip: !0
              }, {
                XE: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: ft,
                contains: St
              }]
            }]
          }, {
            XE: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              XE: Qt,
              end: lt
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              XE: Et.XE,
              "on:begin": Et.isTrulyOpeningTag,
              end: Et.end
            }],
            subLanguage: "xml",
            contains: [{
              XE: Et.XE,
              end: Et.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Pt, {
          beginKeywords: "while if switch catch for"
        }, {
          XE: "\\b(?!function)" + tt.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [ct, tt.inherit(tt.TITLE_MODE, {
            XE: Vt,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Ft, {
          match: "\\$" + Vt,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [ct]
        }, Zt, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Rt, kt, {
          match: /\$[(.]/
        }]
      }
    }

    function lt(tt) {
      const et = tt.regex,
        Vt = Qt(tt),
        mt = Ot,
        dt = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        jt = {
          XE: [/namespace/, /\s+/, tt.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        lt = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: dt
          },
          contains: [Vt.exports.CLASS_REFERENCE]
        },
        Et = {
          $pattern: Ot,
          keyword: qt.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Dt,
          built_in: Xt.concat(dt),
          "variable.language": Ht
        },
        ft = {
          className: "meta",
          XE: "@" + mt
        },
        wt = (tt, et, Vt) => {
          const Ot = tt.contains.findIndex((tt => tt.label === et));
          if (-1 === Ot) throw new Error("can not find mode to replace");
          tt.contains.splice(Ot, 1, Vt)
        };
      Object.assign(Vt.keywords, Et), Vt.exports.PARAMS_CONTAINS.push(ft);
      const yt = Vt.contains.find((tt => "attr" === tt.scope)),
        Nt = Object.assign({}, yt, {
          match: et.concat(mt, et.lookahead(/\s*\?:/))
        });
      Vt.exports.PARAMS_CONTAINS.push([Vt.exports.CLASS_REFERENCE, yt, Nt]), Vt.contains = Vt.contains.concat([ft, jt, lt, Nt]), wt(Vt, "shebang", tt.SHEBANG()), wt(Vt, "use_strict", {
        className: "meta",
        relevance: 10,
        XE: /^\s*['"]use strict['"]/
      });
      return Vt.contains.find((tt => "func.def" === tt.label)).relevance = 0, Object.assign(Vt, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), Vt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);