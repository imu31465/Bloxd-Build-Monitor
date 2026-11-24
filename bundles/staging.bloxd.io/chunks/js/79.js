export const id = 79;
export const ids = [79];
export const modules = {
  4661: mm => {
    function Tm(mm) {
      return mm instanceof Map ? mm.clear = mm.delete = mm.set = function() {
        throw new Error("map is read-only")
      } : mm instanceof Set && (mm.add = mm.clear = mm.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(mm), Object.getOwnPropertyNames(mm).forEach((fm => {
        const hm = mm[fm],
          Am = typeof hm;
        "object" !== Am && "function" !== Am || Object.isFrozen(hm) || Tm(hm)
      })), mm
    }
    class fm {
      constructor(mm) {
        void 0 === mm.data && (mm.data = {}), this.data = mm.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function hm(mm) {
      return mm.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Am(mm) {
      const Tm = Object.create(null);
      for (const am in mm) Tm[am] = mm[am];
      for (var fm = arguments.length, hm = new Array(fm > 1 ? fm - 1 : 0), Am = 1; Am < fm; Am++) hm[Am - 1] = arguments[Am];
      return hm.forEach((function(mm) {
        for (const fm in mm) Tm[fm] = mm[fm]
      })), Tm
    }
    const am = mm => !!mm.scope;
    class xm {
      constructor(mm, Tm) {
        this.buffer = "", this.classPrefix = Tm.classPrefix, mm.walk(this)
      }
      addText(mm) {
        this.buffer += hm(mm)
      }
      openNode(mm) {
        if (!am(mm)) return;
        const Tm = ((mm, Tm) => {
          let {
            prefix: fm
          } = Tm;
          if (mm.startsWith("language:")) return mm.replace("language:", "language-");
          if (mm.includes(".")) {
            const Tm = mm.split(".");
            return [`${fm}${Tm.shift()}`, ...Tm.map(((mm, Tm) => `${mm}${"_".repeat(Tm+1)}`))].join(" ")
          }
          return `${fm}${mm}`
        })(mm.scope, {
          prefix: this.classPrefix
        });
        this.span(Tm)
      }
      closeNode(mm) {
        am(mm) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(mm) {
        this.buffer += `<span class="${mm}">`
      }
    }
    const wm = function() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Tm = {
        children: []
      };
      return Object.assign(Tm, mm), Tm
    };
    class Dm {
      constructor() {
        this.yV = wm(), this.stack = [this.yV]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.yV
      }
      add(mm) {
        this.top.children.push(mm)
      }
      openNode(mm) {
        const Tm = wm({
          scope: mm
        });
        this.add(Tm), this.stack.push(Tm)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.yV, null, 4)
      }
      walk(mm) {
        return this.constructor._walk(mm, this.yV)
      }
      static _walk(mm, Tm) {
        return "string" === typeof Tm ? mm.addText(Tm) : Tm.children && (mm.openNode(Tm), Tm.children.forEach((Tm => this._walk(mm, Tm))), mm.closeNode(Tm)), mm
      }
      static _collapse(mm) {
        "string" !== typeof mm && mm.children && (mm.children.every((mm => "string" === typeof mm)) ? mm.children = [mm.children.join("")] : mm.children.forEach((mm => {
          Dm._collapse(mm)
        })))
      }
    }
    class im extends Dm {
      constructor(mm) {
        super(), this.options = mm
      }
      addText(mm) {
        "" !== mm && this.add(mm)
      }
      startScope(mm) {
        this.openNode(mm)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(mm, Tm) {
        const fm = mm.root;
        Tm && (fm.scope = `language:${Tm}`), this.add(fm)
      }
      toHTML() {
        return new xm(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Rm(mm) {
      return mm ? "string" === typeof mm ? mm : mm.source : null
    }

    function pm(mm) {
      return Om("(?=", mm, ")")
    }

    function Em(mm) {
      return Om("(?:", mm, ")*")
    }

    function om(mm) {
      return Om("(?:", mm, ")?")
    }

    function Om() {
      for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
      return Tm.map((mm => Rm(mm))).join("")
    }

    function Ym() {
      for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
      const hm = function(mm) {
        const Tm = mm[mm.length - 1];
        return "object" === typeof Tm && Tm.constructor === Object ? (mm.splice(mm.length - 1, 1), Tm) : {}
      }(Tm);
      return "(" + (hm.capture ? "" : "?:") + Tm.map((mm => Rm(mm))).join("|") + ")"
    }

    function qm(mm) {
      return new RegExp(mm.toString() + "|").exec("").length - 1
    }
    const jm = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Vm(mm, Tm) {
      let {
        joinWith: fm
      } = Tm, hm = 0;
      return mm.map((mm => {
        hm += 1;
        const Tm = hm;
        let fm = Rm(mm),
          Am = "";
        for (; fm.length > 0;) {
          const mm = jm.exec(fm);
          if (!mm) {
            Am += fm;
            break
          }
          Am += fm.substring(0, mm.index), fm = fm.substring(mm.index + mm[0].length), "\\" === mm[0][0] && mm[1] ? Am += "\\" + String(Number(mm[1]) + Tm) : (Am += mm[0], "(" === mm[0] && hm++)
        }
        return Am
      })).map((mm => `(${mm})`)).join(fm)
    }
    const Im = "[a-zA-Z]\\w*",
      Km = "[a-zA-Z_]\\w*",
      Qm = "\\b\\d+(\\.\\d+)?",
      nm = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Jm = "\\b(0b[01]+)",
      cm = {
        Go: "\\\\[\\s\\S]",
        relevance: 0
      },
      zm = {
        scope: "string",
        Go: "'",
        end: "'",
        illegal: "\\n",
        contains: [cm]
      },
      Zm = {
        scope: "string",
        Go: '"',
        end: '"',
        illegal: "\\n",
        contains: [cm]
      },
      km = function(mm, Tm) {
        const fm = Am({
          scope: "comment",
          Go: mm,
          end: Tm,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        fm.contains.push({
          scope: "doctag",
          Go: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const hm = Ym("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return fm.contains.push({
          Go: Om(/[ ]+/, "(", hm, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), fm
      },
      bm = km("//", "$"),
      Sm = km("/\\*", "\\*/"),
      em = km("#", "$"),
      Nm = {
        scope: "number",
        Go: Qm,
        relevance: 0
      },
      Gm = {
        scope: "number",
        Go: nm,
        relevance: 0
      },
      Xm = {
        scope: "number",
        Go: Jm,
        relevance: 0
      },
      Pm = {
        scope: "regexp",
        Go: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [cm, {
          Go: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [cm]
        }]
      },
      Hm = {
        scope: "title",
        Go: Im,
        relevance: 0
      },
      ym = {
        scope: "title",
        Go: Km,
        relevance: 0
      },
      Cm = {
        Go: "\\.\\s*" + Km,
        relevance: 0
      };
    var rm = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: zm,
      BACKSLASH_ESCAPE: cm,
      BINARY_NUMBER_MODE: Xm,
      BINARY_NUMBER_RE: Jm,
      COMMENT: km,
      C_BLOCK_COMMENT_MODE: Sm,
      C_LINE_COMMENT_MODE: bm,
      C_NUMBER_MODE: Gm,
      C_NUMBER_RE: nm,
      END_SAME_AS_BEGIN: function(mm) {
        return Object.assign(mm, {
          "on:begin": (mm, Tm) => {
            Tm.data._beginMatch = mm[1]
          },
          "on:end": (mm, Tm) => {
            Tm.data._beginMatch !== mm[1] && Tm.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: em,
      IDENT_RE: Im,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Cm,
      NUMBER_MODE: Nm,
      NUMBER_RE: Qm,
      PHRASAL_WORDS_MODE: {
        Go: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Zm,
      REGEXP_MODE: Pm,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Tm = /^#![ ]*\//;
        return mm.binary && (mm.Go = Om(Tm, /.*\b/, mm.binary, /\b.*/)), Am({
          scope: "meta",
          Go: Tm,
          end: /$/,
          relevance: 0,
          "on:begin": (mm, Tm) => {
            0 !== mm.index && Tm.ignoreMatch()
          }
        }, mm)
      },
      TITLE_MODE: Hm,
      UNDERSCORE_IDENT_RE: Km,
      UNDERSCORE_TITLE_MODE: ym
    });

    function sm(mm, Tm) {
      "." === mm.input[mm.index - 1] && Tm.ignoreMatch()
    }

    function lm(mm, Tm) {
      void 0 !== mm.className && (mm.scope = mm.className, delete mm.className)
    }

    function Mm(mm, Tm) {
      Tm && mm.beginKeywords && (mm.Go = "\\b(" + mm.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", mm.__beforeBegin = sm, mm.keywords = mm.keywords || mm.beginKeywords, delete mm.beginKeywords, void 0 === mm.relevance && (mm.relevance = 0))
    }

    function um(mm, Tm) {
      Array.isArray(mm.illegal) && (mm.illegal = Ym(...mm.illegal))
    }

    function Bm(mm, Tm) {
      if (mm.match) {
        if (mm.Go || mm.end) throw new Error("begin & end are not supported with match");
        mm.Go = mm.match, delete mm.match
      }
    }

    function Lm(mm, Tm) {
      void 0 === mm.relevance && (mm.relevance = 1)
    }
    const tm = (mm, Tm) => {
        if (!mm.beforeMatch) return;
        if (mm.starts) throw new Error("beforeMatch cannot be used with starts");
        const fm = Object.assign({}, mm);
        Object.keys(mm).forEach((Tm => {
          delete mm[Tm]
        })), mm.keywords = fm.keywords, mm.Go = Om(fm.beforeMatch, pm(fm.Go)), mm.starts = {
          relevance: 0,
          contains: [Object.assign(fm, {
            endsParent: !0
          })]
        }, mm.relevance = 0, delete fm.beforeMatch
      },
      Um = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function dm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const hm = Object.create(null);
      return "string" === typeof mm ? Am(fm, mm.split(" ")) : Array.isArray(mm) ? Am(fm, mm) : Object.keys(mm).forEach((function(fm) {
        Object.assign(hm, dm(mm[fm], Tm, fm))
      })), hm;

      function Am(mm, fm) {
        Tm && (fm = fm.map((mm => mm.toLowerCase()))), fm.forEach((function(Tm) {
          const fm = Tm.split("|");
          hm[fm[0]] = [mm, gm(fm[0], fm[1])]
        }))
      }
    }

    function gm(mm, Tm) {
      return Tm ? Number(Tm) : function(mm) {
        return Um.includes(mm.toLowerCase())
      }(mm) ? 0 : 1
    }
    const Wm = {},
      Fm = mm => {
        console.error(mm)
      },
      mT = function(mm) {
        for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
        console.log(`WARN: ${mm}`, ...fm)
      },
      TT = (mm, Tm) => {
        Wm[`${mm}/${Tm}`] || (console.log(`Deprecated as of ${mm}. ${Tm}`), Wm[`${mm}/${Tm}`] = !0)
      },
      fT = new Error;

    function hT(mm, Tm, fm) {
      let {
        key: hm
      } = fm, Am = 0;
      const am = mm[hm],
        xm = {},
        wm = {};
      for (let Dm = 1; Dm <= Tm.length; Dm++) wm[Dm + Am] = am[Dm], xm[Dm + Am] = !0, Am += qm(Tm[Dm - 1]);
      mm[hm] = wm, mm[hm]._emit = xm, mm[hm]._multi = !0
    }

    function AT(mm) {
      ! function(mm) {
        mm.scope && "object" === typeof mm.scope && null !== mm.scope && (mm.beginScope = mm.scope, delete mm.scope)
      }(mm), "string" === typeof mm.beginScope && (mm.beginScope = {
          _wrap: mm.beginScope
        }), "string" === typeof mm.endScope && (mm.endScope = {
          _wrap: mm.endScope
        }),
        function(mm) {
          if (Array.isArray(mm.Go)) {
            if (mm.skip || mm.excludeBegin || mm.returnBegin) throw Fm("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), fT;
            if ("object" !== typeof mm.beginScope || null === mm.beginScope) throw Fm("beginScope must be object"), fT;
            hT(mm, mm.Go, {
              key: "beginScope"
            }), mm.Go = Vm(mm.Go, {
              joinWith: ""
            })
          }
        }(mm),
        function(mm) {
          if (Array.isArray(mm.end)) {
            if (mm.skip || mm.excludeEnd || mm.returnEnd) throw Fm("skip, excludeEnd, returnEnd not compatible with endScope: {}"), fT;
            if ("object" !== typeof mm.endScope || null === mm.endScope) throw Fm("endScope must be object"), fT;
            hT(mm, mm.end, {
              key: "endScope"
            }), mm.end = Vm(mm.end, {
              joinWith: ""
            })
          }
        }(mm)
    }

    function aT(mm) {
      function Tm(Tm, fm) {
        return new RegExp(Rm(Tm), "m" + (mm.case_insensitive ? "i" : "") + (mm.unicodeRegex ? "u" : "") + (fm ? "g" : ""))
      }
      class fm {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(mm, Tm) {
          Tm.position = this.position++, this.matchIndexes[this.matchAt] = Tm, this.regexes.push([Tm, mm]), this.matchAt += qm(mm) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const mm = this.regexes.map((mm => mm[1]));
          this.matcherRe = Tm(Vm(mm, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(mm) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Tm = this.matcherRe.exec(mm);
          if (!Tm) return null;
          const fm = Tm.findIndex(((mm, Tm) => Tm > 0 && void 0 !== mm)),
            hm = this.matchIndexes[fm];
          return Tm.splice(0, fm), Object.assign(Tm, hm)
        }
      }
      class hm {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(mm) {
          if (this.multiRegexes[mm]) return this.multiRegexes[mm];
          const Tm = new fm;
          return this.rules.slice(mm).forEach((mm => {
            let [fm, hm] = mm;
            return Tm.addRule(fm, hm)
          })), Tm.compile(), this.multiRegexes[mm] = Tm, Tm
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(mm, Tm) {
          this.rules.push([mm, Tm]), "Go" === Tm.type && this.count++
        }
        exec(mm) {
          const Tm = this.getMatcher(this.regexIndex);
          Tm.lastIndex = this.lastIndex;
          let fm = Tm.exec(mm);
          if (this.resumingScanAtSamePosition())
            if (fm && fm.index === this.lastIndex);
            else {
              const Tm = this.getMatcher(0);
              Tm.lastIndex = this.lastIndex + 1, fm = Tm.exec(mm)
            } return fm && (this.regexIndex += fm.position + 1, this.regexIndex === this.count && this.considerAll()), fm
        }
      }
      if (mm.compilerExtensions || (mm.compilerExtensions = []), mm.contains && mm.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return mm.classNameAliases = Am(mm.classNameAliases || {}),
        function fm(am, xm) {
          const wm = am;
          if (am.isCompiled) return wm;
          [lm, Bm, AT, tm].forEach((mm => mm(am, xm))), mm.compilerExtensions.forEach((mm => mm(am, xm))), am.__beforeBegin = null, [Mm, um, Lm].forEach((mm => mm(am, xm))), am.isCompiled = !0;
          let Dm = null;
          return "object" === typeof am.keywords && am.keywords.$pattern && (am.keywords = Object.assign({}, am.keywords), Dm = am.keywords.$pattern, delete am.keywords.$pattern), Dm = Dm || /\w+/, am.keywords && (am.keywords = dm(am.keywords, mm.case_insensitive)), wm.keywordPatternRe = Tm(Dm, !0), xm && (am.Go || (am.Go = /\B|\b/), wm.beginRe = Tm(wm.Go), am.end || am.endsWithParent || (am.end = /\B|\b/), am.end && (wm.endRe = Tm(wm.end)), wm.terminatorEnd = Rm(wm.end) || "", am.endsWithParent && xm.terminatorEnd && (wm.terminatorEnd += (am.end ? "|" : "") + xm.terminatorEnd)), am.illegal && (wm.illegalRe = Tm(am.illegal)), am.contains || (am.contains = []), am.contains = [].concat(...am.contains.map((function(mm) {
            return function(mm) {
              mm.variants && !mm.cachedVariants && (mm.cachedVariants = mm.variants.map((function(Tm) {
                return Am(mm, {
                  variants: null
                }, Tm)
              })));
              if (mm.cachedVariants) return mm.cachedVariants;
              if (xT(mm)) return Am(mm, {
                starts: mm.starts ? Am(mm.starts) : null
              });
              if (Object.isFrozen(mm)) return Am(mm);
              return mm
            }("self" === mm ? am : mm)
          }))), am.contains.forEach((function(mm) {
            fm(mm, wm)
          })), am.starts && fm(am.starts, xm), wm.matcher = function(mm) {
            const Tm = new hm;
            return mm.contains.forEach((mm => Tm.addRule(mm.Go, {
              rule: mm,
              type: "Go"
            }))), mm.terminatorEnd && Tm.addRule(mm.terminatorEnd, {
              type: "end"
            }), mm.illegal && Tm.addRule(mm.illegal, {
              type: "illegal"
            }), Tm
          }(wm), wm
        }(mm)
    }

    function xT(mm) {
      return !!mm && (mm.endsWithParent || xT(mm.starts))
    }
    class wT extends Error {
      constructor(mm, Tm) {
        super(mm), this.name = "HTMLInjectionError", this.html = Tm
      }
    }
    const DT = hm,
      iT = Am,
      RT = Symbol("nomatch"),
      pT = function(mm) {
        const hm = Object.create(null),
          Am = Object.create(null),
          am = [];
        let xm = !0;
        const wm = "Could not find the language '{}', did you forget to load/include a language module?",
          Dm = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Rm = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: im
        };

        function qm(mm) {
          return Rm.noHighlightRe.test(mm)
        }

        function jm(mm, Tm, fm) {
          let hm = "",
            Am = "";
          "object" === typeof Tm ? (hm = mm, fm = Tm.ignoreIllegals, Am = Tm.language) : (TT("10.7.0", "highlight(lang, code, ...args) has been deprecated."), TT("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Am = mm, hm = Tm), void 0 === fm && (fm = !0);
          const am = {
            code: hm,
            language: Am
          };
          Zm("before:highlight", am);
          const xm = am.result ? am.result : Vm(am.language, am.code, fm);
          return xm.code = am.code, Zm("after:highlight", xm), xm
        }

        function Vm(mm, Tm, Am, am) {
          const Dm = Object.create(null);

          function im() {
            if (!Zm.keywords) return void bm.addText(Sm);
            let mm = 0;
            Zm.keywordPatternRe.lastIndex = 0;
            let Tm = Zm.keywordPatternRe.exec(Sm),
              fm = "";
            for (; Tm;) {
              fm += Sm.substring(mm, Tm.index);
              const Am = nm.case_insensitive ? Tm[0].toLowerCase() : Tm[0],
                am = (hm = Am, Zm.keywords[hm]);
              if (am) {
                const [mm, hm] = am;
                if (bm.addText(fm), fm = "", Dm[Am] = (Dm[Am] || 0) + 1, Dm[Am] <= 7 && (em += hm), mm.startsWith("_")) fm += Tm[0];
                else {
                  const fm = nm.classNameAliases[mm] || mm;
                  Em(Tm[0], fm)
                }
              } else fm += Tm[0];
              mm = Zm.keywordPatternRe.lastIndex, Tm = Zm.keywordPatternRe.exec(Sm)
            }
            var hm;
            fm += Sm.substring(mm), bm.addText(fm)
          }

          function pm() {
            null != Zm.subLanguage ? function() {
              if ("" === Sm) return;
              let mm = null;
              if ("string" === typeof Zm.subLanguage) {
                if (!hm[Zm.subLanguage]) return void bm.addText(Sm);
                mm = Vm(Zm.subLanguage, Sm, !0, km[Zm.subLanguage]), km[Zm.subLanguage] = mm._top
              } else mm = Im(Sm, Zm.subLanguage.length ? Zm.subLanguage : null);
              Zm.relevance > 0 && (em += mm.relevance), bm.__addSublanguage(mm._emitter, mm.language)
            }() : im(), Sm = ""
          }

          function Em(mm, Tm) {
            "" !== mm && (bm.startScope(Tm), bm.addText(mm), bm.endScope())
          }

          function om(mm, Tm) {
            let fm = 1;
            const hm = Tm.length - 1;
            for (; fm <= hm;) {
              if (!mm._emit[fm]) {
                fm++;
                continue
              }
              const hm = nm.classNameAliases[mm[fm]] || mm[fm],
                Am = Tm[fm];
              hm ? Em(Am, hm) : (Sm = Am, im(), Sm = ""), fm++
            }
          }

          function Om(mm, Tm) {
            return mm.scope && "string" === typeof mm.scope && bm.openNode(nm.classNameAliases[mm.scope] || mm.scope), mm.beginScope && (mm.beginScope._wrap ? (Em(Sm, nm.classNameAliases[mm.beginScope._wrap] || mm.beginScope._wrap), Sm = "") : mm.beginScope._multi && (om(mm.beginScope, Tm), Sm = "")), Zm = Object.create(mm, {
              parent: {
                value: Zm
              }
            }), Zm
          }

          function Ym(mm, Tm, hm) {
            let Am = function(mm, Tm) {
              const fm = mm && mm.exec(Tm);
              return fm && 0 === fm.index
            }(mm.endRe, hm);
            if (Am) {
              if (mm["on:end"]) {
                const hm = new fm(mm);
                mm["on:end"](Tm, hm), hm.isMatchIgnored && (Am = !1)
              }
              if (Am) {
                for (; mm.endsParent && mm.parent;) mm = mm.parent;
                return mm
              }
            }
            if (mm.endsWithParent) return Ym(mm.parent, Tm, hm)
          }

          function qm(mm) {
            return 0 === Zm.matcher.regexIndex ? (Sm += mm[0], 1) : (Xm = !0, 0)
          }

          function jm(mm) {
            const fm = mm[0],
              hm = Tm.substring(mm.index),
              Am = Ym(Zm, mm, hm);
            if (!Am) return RT;
            const am = Zm;
            Zm.endScope && Zm.endScope._wrap ? (pm(), Em(fm, Zm.endScope._wrap)) : Zm.endScope && Zm.endScope._multi ? (pm(), om(Zm.endScope, mm)) : am.skip ? Sm += fm : (am.returnEnd || am.excludeEnd || (Sm += fm), pm(), am.excludeEnd && (Sm = fm));
            do {
              Zm.scope && bm.closeNode(), Zm.skip || Zm.subLanguage || (em += Zm.relevance), Zm = Zm.parent
            } while (Zm !== Am.parent);
            return Am.starts && Om(Am.starts, mm), am.returnEnd ? 0 : fm.length
          }
          let Km = {};

          function Qm(hm, am) {
            const wm = am && am[0];
            if (Sm += hm, null == wm) return pm(), 0;
            if ("Go" === Km.type && "end" === am.type && Km.index === am.index && "" === wm) {
              if (Sm += Tm.slice(am.index, am.index + 1), !xm) {
                const Tm = new Error(`0 width match regex (${mm})`);
                throw Tm.languageName = mm, Tm.badRule = Km.rule, Tm
              }
              return 1
            }
            if (Km = am, "Go" === am.type) return function(mm) {
              const Tm = mm[0],
                hm = mm.rule,
                Am = new fm(hm),
                am = [hm.__beforeBegin, hm["on:begin"]];
              for (const fm of am)
                if (fm && (fm(mm, Am), Am.isMatchIgnored)) return qm(Tm);
              return hm.skip ? Sm += Tm : (hm.excludeBegin && (Sm += Tm), pm(), hm.returnBegin || hm.excludeBegin || (Sm = Tm)), Om(hm, mm), hm.returnBegin ? 0 : Tm.length
            }(am);
            if ("illegal" === am.type && !Am) {
              const mm = new Error('Illegal lexeme "' + wm + '" for mode "' + (Zm.scope || "<unnamed>") + '"');
              throw mm.mode = Zm, mm
            }
            if ("end" === am.type) {
              const mm = jm(am);
              if (mm !== RT) return mm
            }
            if ("illegal" === am.type && "" === wm) return Sm += "\n", 1;
            if (Gm > 1e5 && Gm > 3 * am.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Sm += wm, wm.length
          }
          const nm = Jm(mm);
          if (!nm) throw Fm(wm.replace("{}", mm)), new Error('Unknown language: "' + mm + '"');
          const cm = aT(nm);
          let zm = "",
            Zm = am || cm;
          const km = {},
            bm = new Rm.__emitter(Rm);
          ! function() {
            const mm = [];
            for (let Tm = Zm; Tm !== nm; Tm = Tm.parent) Tm.scope && mm.unshift(Tm.scope);
            mm.forEach((mm => bm.openNode(mm)))
          }();
          let Sm = "",
            em = 0,
            Nm = 0,
            Gm = 0,
            Xm = !1;
          try {
            if (nm.__emitTokens) nm.__emitTokens(Tm, bm);
            else {
              for (Zm.matcher.considerAll();;) {
                Gm++, Xm ? Xm = !1 : Zm.matcher.considerAll(), Zm.matcher.lastIndex = Nm;
                const mm = Zm.matcher.exec(Tm);
                if (!mm) break;
                const fm = Qm(Tm.substring(Nm, mm.index), mm);
                Nm = mm.index + fm
              }
              Qm(Tm.substring(Nm))
            }
            return bm.finalize(), zm = bm.toHTML(), {
              language: mm,
              value: zm,
              relevance: em,
              illegal: !1,
              _emitter: bm,
              _top: Zm
            }
          } catch (Pm) {
            if (Pm.message && Pm.message.includes("Illegal")) return {
              language: mm,
              value: DT(Tm),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Pm.message,
                index: Nm,
                context: Tm.slice(Nm - 100, Nm + 100),
                mode: Pm.mode,
                resultSoFar: zm
              },
              _emitter: bm
            };
            if (xm) return {
              language: mm,
              value: DT(Tm),
              illegal: !1,
              relevance: 0,
              errorRaised: Pm,
              _emitter: bm,
              _top: Zm
            };
            throw Pm
          }
        }

        function Im(mm, Tm) {
          Tm = Tm || Rm.languages || Object.keys(hm);
          const fm = function(mm) {
              const Tm = {
                value: DT(mm),
                illegal: !1,
                relevance: 0,
                _top: Dm,
                _emitter: new Rm.__emitter(Rm)
              };
              return Tm._emitter.addText(mm), Tm
            }(mm),
            Am = Tm.filter(Jm).filter(zm).map((Tm => Vm(Tm, mm, !1)));
          Am.unshift(fm);
          const am = Am.sort(((mm, Tm) => {
              if (mm.relevance !== Tm.relevance) return Tm.relevance - mm.relevance;
              if (mm.language && Tm.language) {
                if (Jm(mm.language).supersetOf === Tm.language) return 1;
                if (Jm(Tm.language).supersetOf === mm.language) return -1
              }
              return 0
            })),
            [xm, wm] = am,
            im = xm;
          return im.secondBest = wm, im
        }

        function Km(mm) {
          let Tm = null;
          const fm = function(mm) {
            let Tm = mm.className + " ";
            Tm += mm.parentNode ? mm.parentNode.className : "";
            const fm = Rm.languageDetectRe.exec(Tm);
            if (fm) {
              const Tm = Jm(fm[1]);
              return Tm || (mT(wm.replace("{}", fm[1])), mT("Falling back to no-highlight mode for this block.", mm)), Tm ? fm[1] : "no-highlight"
            }
            return Tm.split(/\s+/).find((mm => qm(mm) || Jm(mm)))
          }(mm);
          if (qm(fm)) return;
          if (Zm("before:highlightElement", {
              el: mm,
              language: fm
            }), mm.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", mm);
          if (mm.children.length > 0 && (Rm.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(mm)), Rm.throwUnescapedHTML)) {
            throw new wT("One of your code blocks includes unescaped HTML.", mm.innerHTML)
          }
          Tm = mm;
          const hm = Tm.textContent,
            am = fm ? jm(hm, {
              language: fm,
              ignoreIllegals: !0
            }) : Im(hm);
          mm.innerHTML = am.value, mm.dataset.highlighted = "yes",
            function(mm, Tm, fm) {
              const hm = Tm && Am[Tm] || fm;
              mm.classList.add("hljs"), mm.classList.add(`language-${hm}`)
            }(mm, fm, am.language), mm.result = {
              language: am.language,
              re: am.relevance,
              relevance: am.relevance
            }, am.secondBest && (mm.secondBest = {
              language: am.secondBest.language,
              relevance: am.secondBest.relevance
            }), Zm("after:highlightElement", {
              el: mm,
              result: am,
              text: hm
            })
        }
        let Qm = !1;

        function nm() {
          if ("loading" === document.readyState) return Qm || window.addEventListener("DOMContentLoaded", (function() {
            nm()
          }), !1), void(Qm = !0);
          document.querySelectorAll(Rm.cssSelector).forEach(Km)
        }

        function Jm(mm) {
          return mm = (mm || "").toLowerCase(), hm[mm] || hm[Am[mm]]
        }

        function cm(mm, Tm) {
          let {
            languageName: fm
          } = Tm;
          "string" === typeof mm && (mm = [mm]), mm.forEach((mm => {
            Am[mm.toLowerCase()] = fm
          }))
        }

        function zm(mm) {
          const Tm = Jm(mm);
          return Tm && !Tm.disableAutodetect
        }

        function Zm(mm, Tm) {
          const fm = mm;
          am.forEach((function(mm) {
            mm[fm] && mm[fm](Tm)
          }))
        }
        Object.assign(mm, {
          highlight: jm,
          highlightAuto: Im,
          highlightAll: nm,
          highlightElement: Km,
          highlightBlock: function(mm) {
            return TT("10.7.0", "highlightBlock will be removed entirely in v12.0"), TT("10.7.0", "Please use highlightElement now."), Km(mm)
          },
          configure: function(mm) {
            Rm = iT(Rm, mm)
          },
          initHighlighting: () => {
            nm(), TT("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            nm(), TT("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Tm, fm) {
            let Am = null;
            try {
              Am = fm(mm)
            } catch (am) {
              if (Fm("Language definition for '{}' could not be registered.".replace("{}", Tm)), !xm) throw am;
              Fm(am), Am = Dm
            }
            Am.name || (Am.name = Tm), hm[Tm] = Am, Am.rawDefinition = fm.bind(null, mm), Am.aliases && cm(Am.aliases, {
              languageName: Tm
            })
          },
          unregisterLanguage: function(mm) {
            delete hm[mm];
            for (const Tm of Object.keys(Am)) Am[Tm] === mm && delete Am[Tm]
          },
          listLanguages: function() {
            return Object.keys(hm)
          },
          getLanguage: Jm,
          registerAliases: cm,
          autoDetection: zm,
          inherit: iT,
          addPlugin: function(mm) {
            ! function(mm) {
              mm["before:highlightBlock"] && !mm["before:highlightElement"] && (mm["before:highlightElement"] = Tm => {
                mm["before:highlightBlock"](Object.assign({
                  block: Tm.el
                }, Tm))
              }), mm["after:highlightBlock"] && !mm["after:highlightElement"] && (mm["after:highlightElement"] = Tm => {
                mm["after:highlightBlock"](Object.assign({
                  block: Tm.el
                }, Tm))
              })
            }(mm), am.push(mm)
          },
          removePlugin: function(mm) {
            const Tm = am.indexOf(mm); - 1 !== Tm && am.splice(Tm, 1)
          }
        }), mm.debugMode = function() {
          xm = !1
        }, mm.safeMode = function() {
          xm = !0
        }, mm.versionString = "11.11.1", mm.regex = {
          concat: Om,
          lookahead: pm,
          either: Ym,
          optional: om,
          anyNumberOfTimes: Em
        };
        for (const fm in rm) "object" === typeof rm[fm] && Tm(rm[fm]);
        return Object.assign(mm, rm), mm
      },
      ET = pT({});
    ET.newInstance = () => pT({}), mm.exports = ET, ET.HighlightJS = ET, ET.default = ET
  },
  4656: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    const hm = fm(4661)
  },
  4663: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => pm
    });
    const hm = "[A-Za-z$_][0-9A-Za-z$_]*",
      Am = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      am = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      xm = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      wm = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Dm = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      im = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Rm = [].concat(Dm, xm, wm);

    function pm(mm) {
      const Tm = mm.regex,
        fm = hm,
        pm = "<>",
        Em = "</>",
        om = {
          Go: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (mm, Tm) => {
            const fm = mm[0].length + mm.index,
              hm = mm.input[fm];
            if ("<" === hm || "," === hm) return void Tm.ignoreMatch();
            let Am;
            ">" === hm && (((mm, Tm) => {
              let {
                after: fm
              } = Tm;
              const hm = "</" + mm[0].slice(1);
              return -1 !== mm.input.indexOf(hm, fm)
            })(mm, {
              after: fm
            }) || Tm.ignoreMatch());
            const am = mm.input.substring(fm);
            ((Am = am.match(/^\s*=/)) || (Am = am.match(/^\s+extends\s+/)) && 0 === Am.index) && Tm.ignoreMatch()
          }
        },
        Om = {
          $pattern: hm,
          keyword: Am,
          literal: am,
          built_in: Rm,
          "variable.language": im
        },
        Ym = "[0-9](_?[0-9])*",
        qm = `\\.(${Ym})`,
        jm = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Vm = {
          className: "number",
          variants: [{
            Go: `(\\b(${jm})((${qm})|\\.)?|(${qm}))[eE][+-]?(${Ym})\\b`
          }, {
            Go: `\\b(${jm})\\b((${qm})\\b|\\.)?|(${qm})\\b`
          }, {
            Go: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Go: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Go: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Go: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Go: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Im = {
          className: "subst",
          Go: "\\$\\{",
          end: "\\}",
          keywords: Om,
          contains: []
        },
        Km = {
          Go: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [mm.BACKSLASH_ESCAPE, Im],
            subLanguage: "xml"
          }
        },
        Qm = {
          Go: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [mm.BACKSLASH_ESCAPE, Im],
            subLanguage: "css"
          }
        },
        nm = {
          Go: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [mm.BACKSLASH_ESCAPE, Im],
            subLanguage: "graphql"
          }
        },
        Jm = {
          className: "string",
          Go: "`",
          end: "`",
          contains: [mm.BACKSLASH_ESCAPE, Im]
        },
        cm = {
          className: "comment",
          variants: [mm.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Go: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Go: "@[A-Za-z]+"
              }, {
                className: "type",
                Go: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Go: fm + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Go: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), mm.C_BLOCK_COMMENT_MODE, mm.C_LINE_COMMENT_MODE]
        },
        zm = [mm.APOS_STRING_MODE, mm.QUOTE_STRING_MODE, Km, Qm, nm, Jm, {
          match: /\$\d+/
        }, Vm];
      Im.contains = zm.concat({
        Go: /\{/,
        end: /\}/,
        keywords: Om,
        contains: ["self"].concat(zm)
      });
      const Zm = [].concat(cm, Im.contains),
        km = Zm.concat([{
          Go: /(\s*)\(/,
          end: /\)/,
          keywords: Om,
          contains: ["self"].concat(Zm)
        }]),
        bm = {
          className: "params",
          Go: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Om,
          contains: km
        },
        Sm = {
          variants: [{
            match: [/class/, /\s+/, fm, /\s+/, /extends/, /\s+/, Tm.concat(fm, "(", Tm.concat(/\./, fm), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, fm],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        em = {
          relevance: 0,
          match: Tm.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...xm, ...wm]
          }
        },
        Nm = {
          variants: [{
            match: [/function/, /\s+/, fm, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [bm],
          illegal: /%/
        };
      const Gm = {
        match: Tm.concat(/\b/, (Xm = [...Dm, "super", "import"].map((mm => `${mm}\\s*\\(`)), Tm.concat("(?!", Xm.join("|"), ")")), fm, Tm.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Xm;
      const Pm = {
          Go: Tm.concat(/\./, Tm.lookahead(Tm.concat(fm, /(?![0-9A-Za-z$_(])/))),
          end: fm,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Hm = {
          match: [/get|set/, /\s+/, fm, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Go: /\(\)/
          }, bm]
        },
        ym = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + mm.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Cm = {
          match: [/const|var|let/, /\s+/, fm, /\s*/, /=\s*/, /(async\s*)?/, Tm.lookahead(ym)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [bm]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Om,
        exports: {
          PARAMS_CONTAINS: km,
          CLASS_REFERENCE: em
        },
        illegal: /#(?![$_A-z])/,
        contains: [mm.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Go: /^\s*['"]use (strict|asm)['"]/
        }, mm.APOS_STRING_MODE, mm.QUOTE_STRING_MODE, Km, Qm, nm, Jm, cm, {
          match: /\$\d+/
        }, Vm, em, {
          scope: "attr",
          match: fm + Tm.lookahead(":"),
          relevance: 0
        }, Cm, {
          Go: "(" + mm.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [cm, mm.REGEXP_MODE, {
            className: "function",
            Go: ym,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Go: mm.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Go: /\(\s*\)/,
                skip: !0
              }, {
                Go: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Om,
                contains: km
              }]
            }]
          }, {
            Go: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Go: pm,
              end: Em
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Go: om.Go,
              "on:begin": om.isTrulyOpeningTag,
              end: om.end
            }],
            subLanguage: "xml",
            contains: [{
              Go: om.Go,
              end: om.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Nm, {
          beginKeywords: "while if switch catch for"
        }, {
          Go: "\\b(?!function)" + mm.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [bm, mm.inherit(mm.TITLE_MODE, {
            Go: fm,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Pm, {
          match: "\\$" + fm,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [bm]
        }, Gm, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Sm, Hm, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4665: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Em
    });
    const hm = "[A-Za-z$_][0-9A-Za-z$_]*",
      Am = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      am = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      xm = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      wm = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Dm = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      im = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Rm = [].concat(Dm, xm, wm);

    function pm(mm) {
      const Tm = mm.regex,
        fm = hm,
        pm = "<>",
        Em = "</>",
        om = {
          Go: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (mm, Tm) => {
            const fm = mm[0].length + mm.index,
              hm = mm.input[fm];
            if ("<" === hm || "," === hm) return void Tm.ignoreMatch();
            let Am;
            ">" === hm && (((mm, Tm) => {
              let {
                after: fm
              } = Tm;
              const hm = "</" + mm[0].slice(1);
              return -1 !== mm.input.indexOf(hm, fm)
            })(mm, {
              after: fm
            }) || Tm.ignoreMatch());
            const am = mm.input.substring(fm);
            ((Am = am.match(/^\s*=/)) || (Am = am.match(/^\s+extends\s+/)) && 0 === Am.index) && Tm.ignoreMatch()
          }
        },
        Om = {
          $pattern: hm,
          keyword: Am,
          literal: am,
          built_in: Rm,
          "variable.language": im
        },
        Ym = "[0-9](_?[0-9])*",
        qm = `\\.(${Ym})`,
        jm = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Vm = {
          className: "number",
          variants: [{
            Go: `(\\b(${jm})((${qm})|\\.)?|(${qm}))[eE][+-]?(${Ym})\\b`
          }, {
            Go: `\\b(${jm})\\b((${qm})\\b|\\.)?|(${qm})\\b`
          }, {
            Go: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Go: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Go: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Go: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Go: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Im = {
          className: "subst",
          Go: "\\$\\{",
          end: "\\}",
          keywords: Om,
          contains: []
        },
        Km = {
          Go: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [mm.BACKSLASH_ESCAPE, Im],
            subLanguage: "xml"
          }
        },
        Qm = {
          Go: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [mm.BACKSLASH_ESCAPE, Im],
            subLanguage: "css"
          }
        },
        nm = {
          Go: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [mm.BACKSLASH_ESCAPE, Im],
            subLanguage: "graphql"
          }
        },
        Jm = {
          className: "string",
          Go: "`",
          end: "`",
          contains: [mm.BACKSLASH_ESCAPE, Im]
        },
        cm = {
          className: "comment",
          variants: [mm.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Go: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Go: "@[A-Za-z]+"
              }, {
                className: "type",
                Go: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Go: fm + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Go: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), mm.C_BLOCK_COMMENT_MODE, mm.C_LINE_COMMENT_MODE]
        },
        zm = [mm.APOS_STRING_MODE, mm.QUOTE_STRING_MODE, Km, Qm, nm, Jm, {
          match: /\$\d+/
        }, Vm];
      Im.contains = zm.concat({
        Go: /\{/,
        end: /\}/,
        keywords: Om,
        contains: ["self"].concat(zm)
      });
      const Zm = [].concat(cm, Im.contains),
        km = Zm.concat([{
          Go: /(\s*)\(/,
          end: /\)/,
          keywords: Om,
          contains: ["self"].concat(Zm)
        }]),
        bm = {
          className: "params",
          Go: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Om,
          contains: km
        },
        Sm = {
          variants: [{
            match: [/class/, /\s+/, fm, /\s+/, /extends/, /\s+/, Tm.concat(fm, "(", Tm.concat(/\./, fm), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, fm],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        em = {
          relevance: 0,
          match: Tm.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...xm, ...wm]
          }
        },
        Nm = {
          variants: [{
            match: [/function/, /\s+/, fm, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [bm],
          illegal: /%/
        };
      const Gm = {
        match: Tm.concat(/\b/, (Xm = [...Dm, "super", "import"].map((mm => `${mm}\\s*\\(`)), Tm.concat("(?!", Xm.join("|"), ")")), fm, Tm.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Xm;
      const Pm = {
          Go: Tm.concat(/\./, Tm.lookahead(Tm.concat(fm, /(?![0-9A-Za-z$_(])/))),
          end: fm,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Hm = {
          match: [/get|set/, /\s+/, fm, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Go: /\(\)/
          }, bm]
        },
        ym = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + mm.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Cm = {
          match: [/const|var|let/, /\s+/, fm, /\s*/, /=\s*/, /(async\s*)?/, Tm.lookahead(ym)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [bm]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Om,
        exports: {
          PARAMS_CONTAINS: km,
          CLASS_REFERENCE: em
        },
        illegal: /#(?![$_A-z])/,
        contains: [mm.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Go: /^\s*['"]use (strict|asm)['"]/
        }, mm.APOS_STRING_MODE, mm.QUOTE_STRING_MODE, Km, Qm, nm, Jm, cm, {
          match: /\$\d+/
        }, Vm, em, {
          scope: "attr",
          match: fm + Tm.lookahead(":"),
          relevance: 0
        }, Cm, {
          Go: "(" + mm.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [cm, mm.REGEXP_MODE, {
            className: "function",
            Go: ym,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Go: mm.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Go: /\(\s*\)/,
                skip: !0
              }, {
                Go: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Om,
                contains: km
              }]
            }]
          }, {
            Go: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Go: pm,
              end: Em
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Go: om.Go,
              "on:begin": om.isTrulyOpeningTag,
              end: om.end
            }],
            subLanguage: "xml",
            contains: [{
              Go: om.Go,
              end: om.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Nm, {
          beginKeywords: "while if switch catch for"
        }, {
          Go: "\\b(?!function)" + mm.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [bm, mm.inherit(mm.TITLE_MODE, {
            Go: fm,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Pm, {
          match: "\\$" + fm,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [bm]
        }, Gm, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Sm, Hm, {
          match: /\$[(.]/
        }]
      }
    }

    function Em(mm) {
      const Tm = mm.regex,
        fm = pm(mm),
        xm = hm,
        wm = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Dm = {
          Go: [/namespace/, /\s+/, mm.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Em = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: wm
          },
          contains: [fm.exports.CLASS_REFERENCE]
        },
        om = {
          $pattern: hm,
          keyword: Am.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: am,
          built_in: Rm.concat(wm),
          "variable.language": im
        },
        Om = {
          className: "meta",
          Go: "@" + xm
        },
        Ym = (mm, Tm, fm) => {
          const hm = mm.contains.findIndex((mm => mm.label === Tm));
          if (-1 === hm) throw new Error("can not find mode to replace");
          mm.contains.splice(hm, 1, fm)
        };
      Object.assign(fm.keywords, om), fm.exports.PARAMS_CONTAINS.push(Om);
      const qm = fm.contains.find((mm => "attr" === mm.scope)),
        jm = Object.assign({}, qm, {
          match: Tm.concat(xm, Tm.lookahead(/\s*\?:/))
        });
      fm.exports.PARAMS_CONTAINS.push([fm.exports.CLASS_REFERENCE, qm, jm]), fm.contains = fm.contains.concat([Om, Dm, Em, jm]), Ym(fm, "shebang", mm.SHEBANG()), Ym(fm, "use_strict", {
        className: "meta",
        relevance: 10,
        Go: /^\s*['"]use strict['"]/
      });
      return fm.contains.find((mm => "func.def" === mm.label)).relevance = 0, Object.assign(fm, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), fm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);